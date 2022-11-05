<template>
  <card title="Выберите тесто" type="dough">
    <template v-slot:info>
      <label
        class="dough__input"
        :class="doughMap[item.value]"
        v-for="item in valueDough"
        :key="item.id"
      >
        <input
          type="radio"
          :name="item.name"
          :value="item.value"
          v-model="currentDough"
          class="visually-hidden"
          :checked="currentDough"
          @change="(evt) => $emit('change', evt.target.value)"
        />
        <b>{{ item.name }}</b>
        <span>{{ item.description }}</span>
      </label>
    </template>
  </card>
</template>

<script>
import Card from "../../common/components/Card";
import pizza from "@/static/pizza.json";
export default {
  name: "BuilderDoughSelector",
  components: { Card },
  emits: ["change"],
  data() {
    return {
      pizza,
      doughMap: {
        light: "dough__input--light",
        large: "dough__input--large",
      },
      currentDough: "light",
    };
  },
  computed: {
    valueDough() {
      return this.pizza.dough.map((item) => {
        return { ...item, value: item.name === "Толстое" ? "large" : "light" };
      });
    },
  },
};
</script>

<style scoped></style>
