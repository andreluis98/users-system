import { CnpjPipe } from '../pipe/cnpj.pipe';

describe('CnpjPipe', () => {
  it('create an instance', () => {
    const pipe = new CnpjPipe();
    expect(pipe).toBeTruthy();
  });
});
