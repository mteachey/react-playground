import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordian from './state-drills'


describe(`Tabs Component`, () => {
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]

//refactored the whole file to use Enzyme before we write a test for the event handling
      it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordian />, div);
        ReactDOM.unmountComponentAtNode(div);
      })
    
      it('renders empty given no section', () => {
        const wrapper = shallow(<Accordian />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
    
      it('renders empty by default', () => {
        const wrapper = shallow(<Accordian sections={sections} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })

      it('closes the first tab and opens any clicked tab', () => {
        const wrapper = shallow(<Accordian sections={sections} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
      })
      it('only opens one section at a time', () => {
        const wrapper = shallow(<Accordian sections={sections} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
      })

    })