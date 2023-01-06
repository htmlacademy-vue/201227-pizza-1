<template>
  <div class="content__result">
    <p>Итого: {{ conclusionSum }} ₽</p>
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
    conclusionSum() {
      return Object.values(this.ingredients).reduce(
        (accumulator, currentValue) => {
          if (currentValue.count) {
            return accumulator + currentValue.price * currentValue.count;
          }
          return accumulator;
        },
        0
      );
    },
  },
};
</script>
