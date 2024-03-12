import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { Complex } from '../src/t.js';



describe('Tests de la clase z', () => {
  beforeEach(() => {
  });

  it('useful test', () => {
    expect(true).to.be.true;
    expect(new Complex()).to.be.instanceOf(Complex);
  })
});