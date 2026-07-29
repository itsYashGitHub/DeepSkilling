import { CreditLabelPipe } from './credit-label-pipe';

describe('CreditLabelPipe', () => {
  let pipe: CreditLabelPipe;

  beforeEach(() => {
    pipe = new CreditLabelPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return singular label for 1 credit', () => {
    expect(pipe.transform(1)).toBe('1 Credit');
  });

  it('should return plural label for 2+ credits', () => {
    expect(pipe.transform(3)).toBe('3 Credits');
  });

  it('should return "No Credits" for null or 0', () => {
    expect(pipe.transform(null)).toBe('No Credits');
    expect(pipe.transform(0)).toBe('No Credits');
  });
});
