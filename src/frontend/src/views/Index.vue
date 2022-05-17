<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="index.html" class="logo">
          <img
            src="../assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="cart.html">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <Builder-dough-selector />
          </div>

          <div class="content__diameter">
            <Builder-size-selector />
          </div>

          <div class="content__ingredients">
            <Builder-ingredients-selector />
          </div>

          <div class="content__pizza">
            <Builder-pizza-view />

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

export default {
  name: "Index",
  components: {
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
    };
  },
};
</script>

<style scoped></style>
