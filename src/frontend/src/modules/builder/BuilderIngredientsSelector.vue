<template>
  <card title="Выберите ингредиенты" type="ingredients">
    <template v-slot:info>
      <div class="ingredients__sauce">
        <p>Основной соус:</p>
        <radio-button
          :values="valueSauces"
          @input="(value) => $emit('input', value)"
        />
      </div>

      <div class="ingredients__filling">
        <p>Начинка:</p>

        <ul class="ingredients__list">
          <li
            class="ingredients__item"
            v-for="item in valueIngredients"
            :key="item.id"
          >
            <span class="filling" :class="`filling--${item.value}`">{{
              item.name
            }}</span>
            <div class="counter counter--orange ingredients__counter">
              <button
                type="button"
                class="counter__button counter__button--minus"
                disabled
                @click="addIngredient(item)"
              >
                <span class="visually-hidden">Меньше</span>
              </button>
              <label>
                <input
                  type="text"
                  name="counter"
                  class="counter__input"
                  value="0"
                />
              </label>
              <button
                type="button"
                class="counter__button counter__button--plus"
                @click="addIngredient(item)"
              >
                <span class="visually-hidden">Больше</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </card>
</template>

<script>
import Card from "../../common/components/Card";
import RadioButton from "@/common/components/RadioButton";

import pizza from "@/static/pizza.json";
export default {
  name: "BuilderIngredientsSelector",
  components: { Card, RadioButton },
  emits: ["input", "change-ingredient"],
  data() {
    return {
      pizza,
      sauceMap: {
        1: "tomato",
        2: "creamy",
      },
      allIngredient: [],
      allIngredienttest: {},
    };
  },
  computed: {
    valueSauces() {
      return this.pizza.sauces.map((item) => {
        return {
          ...item,
          value: item.name === "Томатный" ? "tomato" : "creamy",
        };
      });
    },
    valueIngredients() {
      return this.pizza.ingredients.map((item) => {
        const value = item.image.split("/")[4].slice(0, -4);
        return { ...item, value: value };
      });
    },
  },
  methods: {
    addIngredient(item) {
      if (this.allIngredienttest[item.value]) {
        if (this.allIngredienttest[item.value] < 3) {
          this.allIngredienttest[item.value] =
            this.allIngredienttest[item.value] + 1;
        }
      } else {
        this.allIngredienttest[item.value] = 1;
      }
      console.log(1);
      this.$emit("change-ingredient", this.allIngredienttest);
    },
  },
};
</script>
