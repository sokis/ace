<template>
  <button :class="['v-button', class]"
    :type="type"
    v-bind="attrs"><slot></slot></button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    class: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'button'
    },
    attrs: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style src="styles/components/button"></style>