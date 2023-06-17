import { REQUEST } from '@nestjs/core';
import { Inject, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST, durable: true })
export class DataSourceService {
  constructor(@Inject(REQUEST) private readonly requestContext: unknown) {}
}
