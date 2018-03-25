import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './categories';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', async () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('getAllCategories should dispatch a GET_CATEGORIES action', () => {
    expect(actions.getAllCategories()).toEqual({
      type: 'GET_CATEGORIES',
    });
  });
});
