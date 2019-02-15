import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import Ranking from '../../components/Ranking';

describe('<anking', () => {
  let mount
  beforeEach(() => {
    mount = createMount()
  })

  function setup(state) {
    const testMock = jest.fn();
    const wrapper = mount(<Ranking { ...state } onMount={ testMock } onUpdate={ testMock } categoryId={ "1" } />)

    return { testMock, wrapper }
  }

  it('check text in h2', () => {
    const state = {
      category: { id: '1', name: 'すべてのカテゴリ' },
      ranking: [{ code: "Code", imageUrl: "imageUrl", name: "Name", url: "url" }],
      error: false
    }
    const { testMock, wrapper } = setup(state);
    const result = wrapper.find('h2').text();
    expect(result).toBe('すべてのカテゴリのランキング');
  })

  it('check text in h2 when category is undefined', () => {
    const state = {
      category: undefined,
      ranking: [{ code: "Code", imageUrl: "imageUrl", name: "Name", url: "url" }],
      error: false
    }
    const { testMock, wrapper } = setup(state);
    const result = wrapper.find('h2').text();
    expect(result).toBe('');
  })

  it('check text in p when there is error', () => {
    const state = {
      category: { id: '1', name: 'すべてのカテゴリ' },
      ranking: [{ code: "Code", imageUrl: "imageUrl", name: "Name", url: "url" }],
      error: true
    }
    const { testMock, wrapper } = setup(state);
    const result = wrapper.find('p').text();
    expect(result).toBe('エラーが発生しました。リロードしてください。');
  })

  it('check text in p when ranking is undefined', () => {
    const state = {
      category: { id: '1', name: 'すべてのカテゴリ' },
      ranking: undefined,
      error: false
    }
    const { testMock, wrapper } = setup(state);
    const result = wrapper.find('p').text();
    expect(result).toBe('読み込み中...');
  })

  it('check props in CardMedia', () => {
    const state = {
      category: { id: '1', name: 'すべてのカテゴリ' },
      ranking: [{ code: "Code", imageUrl: "imageUrl", name: "Name", url: "url" }],
      error: false
    }
    const { testMock, wrapper } = setup(state);
    const result = { image: wrapper.find('CardMedia').prop("image"), title: wrapper.find('CardMedia').prop("title") }
    expect(result.image).toBe('imageUrl');
    expect(result.title).toBe('1位Name');
  })

  it('check text in Typography', () => {
    const state = {
      category: { id: '1', name: 'すべてのカテゴリ' },
      ranking: [{ code: "Code", imageUrl: "imageUrl", name: "Name", url: "url" }],
      error: false
    }
    const { testMock, wrapper } = setup(state);
    const result = wrapper.find('Typography').text()
    expect(result).toBe('1位Name');
  })

  it('check href in Button', () => {
    const state = {
      category: { id: '1', name: 'すべてのカテゴリ' },
      ranking: [{ code: "Code", imageUrl: "imageUrl", name: "Name", url: "url" }],
      error: false
    }
    const { testMock, wrapper } = setup(state);
    const result = wrapper.find('Button').prop('href')
    expect(result).toBe("url");
  })
})
