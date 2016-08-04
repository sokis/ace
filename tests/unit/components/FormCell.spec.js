import Vue from 'vue'
import vFormCell from 'components/FormCell'

describe('FormCell.vue', () => {
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
      template: '<v-form-cell>form-cell</c-button>',
      components: {
        vFormCall 
      }
    })

    const el0 = vm.$children[0].$el
    expect(el0.textContent).to.equal('form-cell')
  })
})
