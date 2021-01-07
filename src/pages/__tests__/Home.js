import React from 'react'
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import Home from '../Home'
Enzyme.configure({ adapter: new Adapter() }) 




it('Home renders content', () => {
    const comprender = shallow(<Home />)
    expect(comprender.find('h1').text()).toEqual('Home Page!')
})