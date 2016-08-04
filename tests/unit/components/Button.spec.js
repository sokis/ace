import Vue from 'vue'
import vButton from 'components/Button'

describe('Button.vue', () => {
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
      template: '<v-button>button</c-button>',
      components: {
        vButton 
      }
    })

    const el0 = vm.$children[0].$el
    expect(el0.textContent).to.equal('button')
  })
})
