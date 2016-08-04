import Vue from 'vue'
import vUserButton from 'components/UserButton'

describe('UserButton.vue', () => {
  let el
  before(() => {
    el = document.createElement('div')
    document.body.appendChild(el)
  })

  after(() => {
    document.body.removeChild(el)
  })

  it('should render correct contents', () => {
    const vm = new Vue({
      el,
      replace: false,
      template: '<v-user-button>user-button</c-button>',
      components: {
        vUserButton 
      }
    })

    const el0 = vm.$children[0].$el
    expect(el0.textContent).to.equal('user-button')
  })
})
