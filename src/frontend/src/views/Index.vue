<template>
  <div>
    <Header />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <Builder-dough-selector
              :dough="currentDough"
              @change="changeDough"
            />
          </div>

          <div class="content__diameter">
            <Builder-size-selector :size="currentSize" @change="changeSize" />
          </div>

          <div class="content__ingredients">
            <Builder-ingredients-selector
              :ingredients="ingredients"
              :sauce="currentSauce"
              @input="changeSauce"
              @add-ingredient="addIngredient"
              @del-ingredient="delIngredient"
            />
          </div>

          <div class="content__pizza">
            <Builder-pizza-view
              :dough="currentDough"
              :sauce="currentSauce"
              :ingredients="ingredients"
              @add-ingredient="addIngredient"
              @change-name="setName"
            />

            <Builder-price-counter />
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import misc from "../static/misc.json";
import pizza from "../static/pizza.json";
import user from "../static/user.json";

import BuilderPriceCounter from "@/modules/builder/BuilderPriceCounter";
import BuilderPizzaView from "@/modules/builder/BuilderPizzaView";
import BuilderSizeSelector from "@/modules/builder/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/BuilderIngredientsSelector";
import BuilderDoughSelector from "@/modules/builder/BuilderDoughSelector";
import Header from "@/layouts/AppLayout";

export default {
  name: "Index",
  components: {
    Header,
    BuilderPriceCounter,
    BuilderPizzaView,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderDoughSelector,
  },
  data() {
    return {
      misc,
      pizza,
      user,
      currentDough: "",
      currentSauce: "creamy",
      currentSize: 1,
      currentName: "",
      drag: {},
      ingredients: {},
    };
  },
  computed: {
    translatedSauces() {
      return this.currentSauce === "Томатный" ? "tomato" : "creamy";
    },
  },
  mounted() {
    this.setIngredients();
    this.setDoughs();
  },
  methods: {
    setIngredients() {
      const pizzaIngredients = this.pizza.ingredients.map((item) => {
        const value = item.image.split("/")[4].slice(0, -4);
        return { ...item, value: value, count: 0 };
      });

      this.ingredients = pizzaIngredients.reduce((acc, item) => {
        return {
          ...acc,
          [item.value]: item,
        };
      }, {});
    },
    setDoughs() {
      const valueDoughs = this.pizza.dough;
      this.currentDough = valueDoughs[0].image
        .split("/")[3]
        .slice(0, -4)
        .split("-")[1];
    },
    changeDough(value) {
      this.currentDough = value;
    },
    changeSauce(value) {
      this.currentSauce = value;
    },
    changeSize(value) {
      this.currentSize = Number(value);
    },
    addIngredient(item) {
      if (item.count < 3) {
        this.ingredients[item.value] = {
          ...this.ingredients[item.value],
          count: item.count + 1,
        };
      }
    },
    delIngredient(item) {
      this.ingredients[item.value] = {
        ...this.ingredients[item.value],
        count: item.count - 1,
      };
    },
    setName(value) {
      this.currentName = value;
    },
  },
};
</script>
