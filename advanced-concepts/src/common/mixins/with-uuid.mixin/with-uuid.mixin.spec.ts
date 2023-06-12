import { WithUuidMixin } from './with-uuid.mixin';

describe('WithUuidMixin', () => {
  it('should be defined', () => {
    expect(new WithUuidMixin()).toBeDefined();
  });
});
