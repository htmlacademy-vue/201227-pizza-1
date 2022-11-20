<template>
  <div>
    <Header />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <Builder-dough-selector @change="changeDough" />
          </div>

          <div class="content__diameter">
            <Builder-size-selector @change="changeSize" />
          </div>

          <div class="content__ingredients">
            <Builder-ingredients-selector
              :ingredients="ingredients"
              @input="changeSauce"
              @change-ingredient="changeIngredient"
              @drag-ingredient="dragIngredient"
            />
          </div>

          <div class="content__pizza">
            <Builder-pizza-view
              :dough="currentDough"
              :sauce="currentSauce"
              :ingredients="ingredients"
              @update-ingredients="updateIngredients"
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
      currentDough: "light",
      currentSauce: "creamy",
      currentSize: 1,
      currentName: "",
      drag: {},
      ingredients: {
        mushrooms: { value: "mushrooms", name: "Грибы", count: 0 },
        cheddar: { value: "cheddar", name: "Чеддер", count: 0 },
        salami: { value: "salami", name: "Салями", count: 0 },
        ham: { value: "ham", name: "Ветчина", count: 0 },
        ananas: { value: "ananas", name: "Ананас", count: 0 },
        bacon: { value: "bacon", name: "Бекон", count: 0 },
        onion: { value: "onion", name: "Лук", count: 0 },
        chile: { value: "chile", name: "Чили", count: 0 },
        jalapeno: { value: "jalapeno", name: "Халапеньо", count: 0 },
        olives: { value: "olives", name: "Маслины", count: 0 },
        tomatoes: { value: "tomatoes", name: "Томаты", count: 0 },
        salmon: { value: "salmon", name: "Лосось", count: 0 },
        mozzarella: { value: "mozzarella", name: "Моцарелла", count: 0 },
        parmesan: { value: "parmesan", name: "Пармезан", count: 0 },
        blue_cheese: { value: "blue_cheese", name: "Блю чиз", count: 0 },
      },
    };
  },
  methods: {
    changeDough(value) {
      this.currentDough = value;
    },
    changeSauce(value) {
      this.currentSauce = value;
    },
    changeSize(value) {
      this.currentSize = value;
    },
    changeIngredient(item) {
      if (item.count < 4) {
        this.ingredients[item.value] = {
          ...this.ingredients[item.value],
          count: item.count,
        };
      }
    },
    updateIngredients() {
      if (Object.keys(this.drag).length) {
        this.changeIngredient({ ...this.drag, count: (this.drag.count += 1) });
      }
    },
    dragIngredient(value) {
      this.drag = value;
    },
    setName(value) {
      this.currentName = value;
    },
  },
};
</script>
