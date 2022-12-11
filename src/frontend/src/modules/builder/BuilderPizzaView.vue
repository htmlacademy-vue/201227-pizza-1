<template>
  <div>
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        v-model="pizzaName"
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        @change="$emit('change-name', pizzaName)"
      />
    </label>
    <div
      class="content__constructor"
      @drop="ingredientDrop"
      @dragover.prevent
      @dragenter.prevent
    >
      <div class="pizza" :class="pizzaFoundation">
        <div class="pizza__wrapper">
          <template v-for="(ingredient, idx) in ingredients">
            <div
              :key="`${ingredient.value}-${idx}`"
              v-if="ingredient.count"
              class="pizza__filling"
              :class="`pizza__filling--${ingredient.value} pizza__filling${
                count[ingredient.count]
              }`"
            ></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuilderPizzaView",
  props: {
    dough: {
      type: String,
    },
    sauce: {
      type: String,
    },
    ingredients: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["change-name", "update-ingredients"],
  data() {
    return {
      pizzaName: "",
      count: {
        1: "",
        2: "--second",
        3: "--third",
      },
    };
  },
  computed: {
    pizzaFoundation() {
      if (this.dough === "light") {
        return `pizza--foundation--small-${this.sauce}`;
      }
      return `pizza--foundation--big-${this.sauce}`;
    },
  },
  methods: {
    ingredientDrop(evt) {
      const item = JSON.parse(evt.dataTransfer.getData("text/plain"));
      this.$emit("add-ingredient", item);
    },
  },
};
</script>
