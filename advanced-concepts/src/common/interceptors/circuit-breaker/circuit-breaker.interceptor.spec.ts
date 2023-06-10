import { CircuitBreakerInterceptor } from './circuit-breaker.interceptor';

describe('CircuitBreakerInterceptor', () => {
  it('should be defined', () => {
    expect(new CircuitBreakerInterceptor()).toBeDefined();
  });
});
