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
          <!--          <div class="pizza__filling pizza__filling&#45;&#45;ananas"></div>-->
          <!--          <div class="pizza__filling pizza__filling&#45;&#45;bacon"></div>-->
          <!--          <div class="pizza__filling pizza__filling&#45;&#45;cheddar"></div>-->
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

<style scoped></style>
