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
              @input="changeSauce"
              @change-ingredient="changeIngredient"
            />
          </div>

          <div class="content__pizza">
            <Builder-pizza-view
              :dough="currentDough"
              :sauce="currentSauce"
              :ingredients="currentIngredients"
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
      currentIngredients: {},
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
    changeIngredient(value) {
      this.currentIngredients = value;
      console.log(value);
    },
  },
};
</script>

<style scoped></style>
