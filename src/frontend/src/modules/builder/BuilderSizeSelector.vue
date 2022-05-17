<template>
  <card title="Выберите размер" type="diameter">
    <template v-slot:info>
      <label
        class="diameter__input"
        :class="sizeMap[item.multiplier]"
        v-for="item in pizza.sizes"
        :key="item.id"
      >
        <input
          type="radio"
          name="diameter"
          :value="item.multiplier"
          class="visually-hidden"
        />
        <span>{{ item.name }}</span>
      </label>
    </template>
  </card>
</template>

<script>
import Card from "../../common/components/Card";

import pizza from "@/static/pizza.json";
export default {
  name: "BuilderSizeSelector",
  components: { Card },
  data() {
    return {
      pizza,
      sizeMap: {
        1: "diameter__input--small",
        2: "diameter__input--normal",
        3: "diameter__input--big",
      },
    };
  },
};
</script>

<style scoped></style>
