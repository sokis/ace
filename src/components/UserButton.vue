<template>
  <div :class="['v-user-button', class]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-user-button',
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="styles/components/user-button"></style>