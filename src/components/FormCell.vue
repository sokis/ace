<template>
  <div :class="['v-form-cell', class]">
    <div class="v-textfield v-form-cell-value">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-form-cell',
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="styles/components/form-cell"></style>