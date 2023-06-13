import { dasherize } from "@angular-devkit/core/src/utils/strings";
import {
  apply,
  chain,
  externalSchematic,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  strings,
  template,
  Tree,
  url,
} from "@angular-devkit/schematics";
import * as ts from "@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript";
import { findNodes, insertImport } from "@schematics/angular/utility/ast-utils";
import { InsertChange } from "@schematics/angular/utility/change";

interface ConfigurableModuleSchematicOptions {
  name: string;
}

function updateModuleFile(
  tree: Tree,
  options: ConfigurableModuleSchematicOptions
): Tree {
  const name = dasherize(options.name);
  const moduleFilePath = `src/${name}/${name}.module.ts`;
  const moduleFileContent = tree.readText(moduleFilePath);
  const source = ts.createSourceFile(
    moduleFilePath,
    moduleFileContent,
    ts.ScriptTarget.Latest, // use the latest TypeScript version
    true
  );
  const updateRecorder = tree.beginUpdate(moduleFilePath);
  const insertImportChange = insertImport(
    source,
    moduleFilePath,
    "ConfigurableModuleClass",
    `./${name}.module-definition`
  );
  if (insertImportChange instanceof InsertChange) {
    updateRecorder.insertRight(
      insertImportChange.pos,
      insertImportChange.toAdd
    );
  }
  const classNode = findNodes(source, ts.SyntaxKind.ClassDeclaration)[0];
  updateRecorder.insertRight(
    classNode.end - 2,
    "extends ConfigurableModuleClass "
  );
  tree.commitUpdate(updateRecorder);

  return tree;
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function generate(options: ConfigurableModuleSchematicOptions): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url("./files"), [
      template({ ...options, ...strings }),
      move("src"),
    ]);

    return chain([
      externalSchematic("@nestjs/schematics", "module", {
        name: options.name,
      }),
      mergeWith(templateSource),
      (tree) => updateModuleFile(tree, options),
    ]);
  };
}
