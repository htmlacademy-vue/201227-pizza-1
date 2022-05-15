<template>
  <div class="radio-wrap">
    <label
      class="radio ingredients__input"
      v-for="item in values"
      :key="item.id"
    >
      <input :value="item.value" type="radio" :name="item.name" checked />
      <span>{{ item.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: { values: Array },
};
</script>

<style lang="scss" scoped>
.radio-wrap {
  display: flex;
}
</style>
