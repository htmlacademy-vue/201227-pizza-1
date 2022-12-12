<template>
  <div class="sheet">
    <h2 class="title title--small sheet__title">{{ title }}</h2>
    <div class="sheet__content" :class="type">
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: { title: String, type: String },
};
</script>

<style scoped></style>
