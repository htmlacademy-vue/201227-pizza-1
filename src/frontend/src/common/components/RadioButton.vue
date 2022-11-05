<template>
  <div class="radio-wrap">
    <label
      class="radio ingredients__input"
      v-for="item in values"
      :key="item.id"
    >
      <input
        :value="item.value"
        v-model="currentSauce"
        type="radio"
        :name="item.name"
        :checked="currentSauce"
        @input="(evt) => $emit('input', evt.target.value)"
      />
      <span>{{ item.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: { values: Array },
  emits: ["input"],
  data() {
    return {
      currentSauce: "creamy",
    };
  },
};
</script>

<style lang="scss" scoped>
.radio-wrap {
  display: flex;
}
</style>
