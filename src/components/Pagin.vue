<template>
  <div :class="['v-pagin', class]">
    <template v-if="maxpage > 1">
      <a v-for="page in pages" href="javascript:;" :class="{current: page.current, disabled: page.disabled}" 
            @click="paginate(page)">{{page.label}}</a>
    </template>
  </div>
</template>

<script>
export default {
  name:'v-pagin',
  props: {
    class: {
      type: String,
      default: ''
    },
    query: {
      type: Object,
      default () {
        return {}
      }
    },
    count: {
      type: Number,
      default: 0
    }
  },
  computed: {
    current () {
      const { $page = 1 } = this.query
      return $page
    },
    maxpage () {
      const { $limit = 1 } = this.query
      return Math.ceil(this.count / $limit)
    },
    pages () {
      const maxpage = this.maxpage
      const current = this.current
      const pages = []
      const countOut = 2
      const countIn = 2
      pages.push({
        page: Math.max(1, current - 1),
        label: '<',
        disabled: current === 1
      })
      const n1 = 1
      const n2 = Math.min(countOut, maxpage)
      let n7 = Math.max(1, maxpage - countOut + 1)
      const n8 = maxpage
      const n4 = Math.max(n2 + 1, current - countIn)
      const n5 = Math.min(n7 - 1, current + countIn)
      const useMiddle = (n5 >= n4)
      const useN3 = (useMiddle && ((n4 - n2) > 1))
      const useN6 = (useMiddle && ((n7 - n5) > 1))
      for (let i = n1; i <= n2; i++) {
        pages.push({
          page: i,
          label: i,
          current: i === current
        })
      }
      if (useN3) {
        pages.push({
          label: '...',
          class: 'hellip'
        })
      }
      for (let i = n4; i <= n5; i++) {
        pages.push({
          page: i,
          label: i,
          current: i === current
        })
      }
      if (useN6) {
        pages.push({
          label: '...',
          class: 'hellip'
        })
      }
      n7 = Math.max(n7, (useMiddle ? n5 : n2) + 1)
      for (let i = n7; i <= n8; i++) {
        pages.push({
          page: i,
          label: i,
          current: i === current
        })
      }
      pages.push({
        page: Math.min(maxpage, current + 1),
        label: '>',
        disabled: current === maxpage
      })
      return pages
    }
  },
  methods: {
    paginate ({ page, disabled }) {
      if (page && !disabled) {
        // const $offset = this.query.$limit * (page - 1)
        this.$emit('paginate', { ...this.query, page})
      }
    }
  }
}
</script>

<style src="styles/components/pagin"></style>