import React from 'react'
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import Edit from '../CatEdit'
Enzyme.configure({ adapter: new Adapter() }) 




it('CatEdit renders content', () => {
    const comprender = shallow(<Edit />)
    expect(comprender.find('h1').text()).toEqual('Edit a cat!')
})