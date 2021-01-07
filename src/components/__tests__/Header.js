import React from 'react'
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import Header from '../Header'
Enzyme.configure({ adapter: new Adapter() }) 




it('Home renders content', () => {
    const comprender = shallow(<Header />)
    expect(comprender.find('h1').text()).toEqual('Header')
})