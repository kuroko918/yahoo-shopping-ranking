import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import Nav from '../../components/Nav';

describe('<Nav />', () => {
  let mount
  beforeEach(() => {
    mount = createMount()
  })

  function setup() {
    const testMock = jest.fn();
    const categories = [{ id: '1', name: 'すべてのカテゴリ' }]
    const wrapper = mount(<Nav categories={categories} onClick={testMock} />)

    return { testMock, wrapper }
  }

  it('check onClick in ListItem', () => {
    const { testMock, wrapper } = setup()
    wrapper.find('ListItem').simulate('click');
    expect(testMock).toHaveBeenCalled();
  })

  it('check name of category in ListItemText', () => {
    const { wrapper } = setup()
    const result = wrapper.find('ListItemText').text()
    expect(result).toBe('すべてのカテゴリ');
  })
})
