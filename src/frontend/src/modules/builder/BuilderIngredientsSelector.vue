<template>
  <card title="Выберите ингредиенты" type="ingredients">
    <template v-slot:info>
      <div class="ingredients__sauce">
        <p>Основной соус:</p>
        <template v-for="item in valueSauces">
          <radio-button
            :item="item"
            :checkItem="sauce"
            :key="item.id"
            @input="(value) => $emit('input', value)"
          />
        </template>
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
  props: {
    ingredients: {
      type: Object,
      default: () => ({}),
    },
    sauce: { type: String },
  },
  data() {
    return {
      pizza,
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
      const dragItem = JSON.stringify(item);
      evt.dataTransfer.setData("text/plain", dragItem);
    },
    addIngredient(item) {
      this.$emit("add-ingredient", item);
    },
    delIngredient(item) {
      this.$emit("del-ingredient", item);
    },
  },
};
</script>
