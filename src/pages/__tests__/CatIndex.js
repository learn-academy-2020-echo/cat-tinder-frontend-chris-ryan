import React from 'react'
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import CatIndex from '../CatIndex'


Enzyme.configure({ adapter: new Adapter() }) 




it('CatIndex renders content', () => {
    const catIndextest = shallow(<CatIndex />)
    expect(catIndextest.find('h1').text()).toEqual('Here are all the cats!')
})