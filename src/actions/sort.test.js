import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './sort';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', async () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('setSortBy should dispatch a SORT_POST action', () => {
    expect(actions.setSortBy()).toEqual({
      type: 'SORT_POST',
    });
  });
});
