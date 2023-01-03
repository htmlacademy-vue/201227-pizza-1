<template>
  <div class="content__result">
    <p>Итого: 0 ₽</p>
    <button type="button" class="button" :disabled="!isDisabledBtn">
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: "BuilderPriceCounter",
  props: {
    name: {
      type: String,
    },
    ingredients: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isDisabledBtn() {
      const hasIngredient = Object.values(this.ingredients)
        .map((item) => item.count)
        .some((count) => count > 0);

      return this.name && hasIngredient;
    },
  },
};
</script>
