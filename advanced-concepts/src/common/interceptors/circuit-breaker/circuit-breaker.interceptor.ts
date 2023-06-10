import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CircuitBreaker } from './circuit-breaker';

@Injectable()
export class CircuitBreakerInterceptor implements NestInterceptor {
  private readonly circuitBreakerByHandler = new WeakMap<
    Function,
    CircuitBreaker
  >();

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const methodRef = context.getHandler();

    let circuitBreaker: CircuitBreaker;
    if (this.circuitBreakerByHandler.has(methodRef)) {
      circuitBreaker = this.circuitBreakerByHandler.get(methodRef);
    } else {
      circuitBreaker = new CircuitBreaker();
      this.circuitBreakerByHandler.set(methodRef, circuitBreaker);
    }
    return circuitBreaker.exec(next);
  }
}
