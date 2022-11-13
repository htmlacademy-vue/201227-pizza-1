<template>
  <div>
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
      />
    </label>
    <div class="content__constructor">
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
      type: Array,
    },
  },
  data() {
    return {
      count: {
        1: "",
        2: "--second",
        3: "--third",
      },
    };
  },

  computed: {
    pizzaFoundation() {
      if (this.dough === "light" && this.sauce === "creamy") {
        return "pizza--foundation--small-creamy";
      }
      if (this.dough === "light" && this.sauce === "tomato") {
        return "pizza--foundation--small-tomato";
      }
      if (this.dough === "large" && this.sauce === "creamy") {
        return "pizza--foundation--big-creamy";
      }
      return "pizza--foundation--big-tomato";
    },
  },
};
</script>
