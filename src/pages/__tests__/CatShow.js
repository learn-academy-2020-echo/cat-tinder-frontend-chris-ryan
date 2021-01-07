import React from 'react'
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import Show from '../CatShow'
Enzyme.configure({ adapter: new Adapter() }) 




it('CatShow renders content', () => {
    const comprender = shallow(<Show />)
    expect(comprender.find('h1').text()).toEqual('Specific Cat Here! Maow!')
})