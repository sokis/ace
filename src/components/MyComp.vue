<template>
  <div :class="['v-my-comp', class]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-my-comp',
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="styles/components/my-comp"></style>