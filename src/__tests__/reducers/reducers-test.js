import Ranking from '../../reducers/Ranking'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    const state = {
      category: undefined,
      ranking: undefined,
      error: false
    };
    const action = {}
    const result = Ranking(state, action)
    const expected = {
      category: undefined,
      ranking: undefined,
      error: false
    }
    expect(result).toEqual(expected)
  });

  it('should handle START_REQUEST', () => {
    const category = { id: '1', name: 'すべてのカテゴリ' }
    const state = {
      category: category,
      ranking: undefined,
      error: false
    };
    const action = {
      type: 'START_REQUEST',
      payload: { category }
    }
    const result = Ranking(state, action)
    const expected = {
      category: category,
      ranking: undefined,
      error: false
    }

    expect(result).toEqual(expected)
  });

  it('should handle RECIEVE_REQUEST', () => {
    const category = { id: '1', name: 'すべてのカテゴリ' }
    const error = false
    const response = {ResultSet: {0: {Result: {0: {Code: "Code", Image: {Medium: "imageUrl"}, Name: "Name", Url: "url"}}}, totalResultsAvailable: "1", firstResultPosition: "1", totalResultsReturned: 1}}
    const state = {
      category: category,
      ranking: undefined,
      error: false
    };
    const action = {
      type: 'RECIEVE_REQUEST',
      payload: { category, error, response }
    }
    const result = Ranking(state, action)
    const expected = {
      category: category,
      ranking: [{ code: "Code", imageUrl: "imageUrl", name: "Name", url: "url" }],
      error: false
    }

    expect(result).toEqual(expected)
  });
})
