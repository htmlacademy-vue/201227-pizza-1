<template>
  <div class="radio-wrap">
    <label class="radio ingredients__input">
      <input
        :value="item.value"
        type="radio"
        :name="item.name"
        :checked="item.value === checkItem"
        @input="(evt) => $emit('input', evt.target.value)"
      />
      <span>{{ item.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    item: { type: Object, default: () => ({}) },
    checkItem: { type: String },
  },
};
</script>

<style lang="scss" scoped>
.radio-wrap {
  display: flex;
}
</style>
