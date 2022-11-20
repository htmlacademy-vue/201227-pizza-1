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
            v-for="item in ingredients"
            :key="item.value"
          >
            <span
              class="filling"
              :class="`filling--${item.value}`"
              :draggable="true"
              @dragstart="startDrag($event, item)"
            >
              {{ item.name }}
            </span>
            <div class="counter counter--orange ingredients__counter">
              <button
                :disabled="item.count === 0"
                type="button"
                class="counter__button counter__button--minus"
                @click="delIngredient(item)"
              >
                <span class="visually-hidden">Меньше</span>
              </button>
              <label>
                <input
                  type="text"
                  name="counter"
                  class="counter__input"
                  :value="item.count"
                />
              </label>
              <button
                type="button"
                class="counter__button counter__button--plus"
                :disabled="item.count >= 3"
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
  props: {
    ingredients: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      pizza,
      sauceMap: {
        1: "tomato",
        2: "creamy",
      },
      ingredientsAll: [],
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
  },
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      this.$emit("drag-ingredient", {
        name: item.name,
        count: item.count,
        value: item.value,
      });
    },
    addIngredient(item) {
      item.count += 1;
      this.$emit("change-ingredient", {
        name: item.name,
        count: item.count,
        value: item.value,
      });
    },
    delIngredient(item) {
      item.count -= 1;
      this.$emit("change-ingredient", {
        name: item.name,
        count: item.count,
        value: item.value,
      });
    },
  },
};
</script>
