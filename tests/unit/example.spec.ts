import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/App'

describe('HelloWorld.tsx', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
