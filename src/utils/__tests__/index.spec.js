import { getPreloadedState, saveState } from '../';
import { DEFAULT_BALANCE } from '../../constants/balance';


describe('getPreloadedState', () => {
  it('should return default balance', () => {
    const expected = { balance: { value: DEFAULT_BALANCE } };

    localStorage = {
      getItem: jest.fn(() => null)
    };

    expect(getPreloadedState()).toEqual(expected);
  });

  it('should return saved balance', () => {
    const expected = { balance: { value: 0 } };

    localStorage = {
      getItem: jest.fn(() => JSON.stringify(expected.balance))
    };

    expect(getPreloadedState()).toEqual(expected);
  });
});

describe('saveState', () => {
  it('should save state', () => {
    const state = { balance: {} };
    const expected = JSON.stringify(state.balance);

    localStorage = {
      setItem: jest.fn()
    };

    saveState(state);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('balance', expected);
  });
});