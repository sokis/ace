import Vue from 'vue'
import v<%= pascalEntityName %> from 'components/<%= pascalEntityName %>'

describe('<%= pascalEntityName %>.vue', () => {
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
      template: '<v-<%= dashesEntityName %>><%= dashesEntityName %></c-button>',
      components: {
        v<%= pascalEntityName %> 
      }
    })

    const el0 = vm.$children[0].$el
    expect(el0.textContent).to.equal('<%= dashesEntityName %>')
  })
})
