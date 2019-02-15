import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchRanking from '../../actions/Ranking';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('fetchRanking Actions', async () => {
  fetch.mockResponse(JSON.stringify(['買い物']))

  const categoryId = 1
  const category = { id: '1', name: 'すべてのカテゴリ' }
  const error = false
  const response = ['買い物']

  const expectedActions = [
    {
      type: 'START_REQUEST',
      payload: { category }
    },
    {
      type: 'RECIEVE_REQUEST',
      payload: { category, error, response }
    },
    {
      type: 'FINISH_REQUEST',
      payload: { category }
    }
  ]

  const store = mockStore();

  store.dispatch(fetchRanking(categoryId)).then(() => {
    expect(store.getActions()).toBe(expectedActions)
  })
});
