import configureStore from 'redux-mock-store';

import ProbablyFairHashConnector from '../connectors/ProbablyFairHashConnector';
import { ProbablyFairHashView } from '../views';
import { getShallowWrapper } from '../../../utils/testUtils';


jest.mock('../views', () => ({
  ProbablyFairHashView: () => null,
}));

describe('ProbablyFairHashConnector', () => {
  let wrapper;
  let initialState;

  beforeAll(() => {
    initialState = {
      resultNumber: 50,
    };

    const mockStore = configureStore([]);
    const store = mockStore(initialState);

    wrapper = getShallowWrapper(ProbablyFairHashConnector, {}, {context: {store}});
  });

  describe('root element', () => {
    it('should be presented with ProbablyFairHashView', () => {
      expect(wrapper.is(ProbablyFairHashView)).toBeTruthy();
    });
  });

  describe('props', () => {
    describe('resultNumber', () => {
      it('should pass resultNumber', () => {
        expect(wrapper.prop('resultNumber')).toEqual(initialState.resultNumber);
      });
    });
  });
});
