import React from 'react'
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import NotFound from '../NotFound'
Enzyme.configure({ adapter: new Adapter() }) 




it('CatShow renders content', () => {
    const comprender = shallow(<NotFound />)
    expect(comprender.find('h1').text()).toEqual("Looks like you're lost!")
})