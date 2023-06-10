import { DynamicModule, Inject, Module } from '@nestjs/common';

import {
  ASYNC_OPTIONS_TYPE,
  ConfigurableModuleClass,
  HTTP_MODULE_OPTIONS,
  OPTIONS_TYPE,
} from './http-client.module-definition';

@Module({})
export class HttpClientModule extends ConfigurableModuleClass {
  constructor(@Inject(HTTP_MODULE_OPTIONS) private options) {
    console.log(options);
    super();
  }

  static register(options: typeof OPTIONS_TYPE): DynamicModule {
    return {
      // your custom logic here
      ...super.register(options),
    };
  }

  static registerAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
    return {
      // your custom logic here
      ...super.registerAsync(options),
    };
  }
}
