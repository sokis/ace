<template>
  <div :class="['v-panel', class, dir]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-panel',
  props: {
    class: {
      type: String,
      default: ''
    },
    dir: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="styles/components/panel"></style>