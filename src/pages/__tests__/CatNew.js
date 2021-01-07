import React from 'react'
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import New from '../CatNew'
Enzyme.configure({ adapter: new Adapter() }) 




it('CatNew renders content', () => {
    const comprender = shallow(<New />)
    expect(comprender.find('h1').text()).toEqual('New Cat Page!')
})