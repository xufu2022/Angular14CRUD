import { SuperHero } from './super-hero.model';

describe('SuperHero', () => {
  it('should create an instance', () => {
    expect(new SuperHero()).toBeTruthy();
  });
});
