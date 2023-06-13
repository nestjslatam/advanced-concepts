import {
  ArgumentMetadata,
  Inject,
  Injectable,
  PipeTransform,
  Type,
} from '@nestjs/common';

export function EntityExistsPipe(entityCls: Type): Type<PipeTransform> {
  @Injectable()
  class EntityExistsPipeCls implements PipeTransform {
    constructor(
      @Inject(entityCls)
      private repository: { exists(condition: unknown): Promise<void> },
    ) {}

    async transform(value: any, metadata: ArgumentMetadata) {
      await this.repository.exists({ id: value });
      return value;
    }
  }

  return EntityExistsPipeCls;
}
