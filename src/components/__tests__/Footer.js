import React from 'react'
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import Footer from '../Footer'
Enzyme.configure({ adapter: new Adapter() }) 




it('Home renders content', () => {
    const comprender = shallow(<Footer />)
    expect(comprender.find('h6').text()).toEqual('Footer')
})