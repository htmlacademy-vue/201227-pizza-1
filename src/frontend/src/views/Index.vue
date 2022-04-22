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
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>

              <div class="sheet__content dough">
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
                    class="visually-hidden"
                    checked
                  />
                  <b>{{ item.name }}</b>
                  <span>{{ item.description }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
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
              </div>
            </div>
          </div>

          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>

              <div class="sheet__content ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>

                  <label
                    class="radio ingredients__input"
                    v-for="item in valueSauces"
                    :key="item.id"
                  >
                    <input
                      :value="item.value"
                      type="radio"
                      :name="item.name"
                      checked
                    />
                    <span>{{ item.name }}</span>
                  </label>
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
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
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

export default {
  name: "Index",
  data() {
    return {
      misc,
      pizza,
      user,
      doughMap: {
        light: "dough__input--light",
        large: "dough__input--large",
      },
      sizeMap: {
        1: "diameter__input--small",
        2: "diameter__input--normal",
        3: "diameter__input--big",
      },
      sauceMap: {
        1: "tomato",
        2: "creamy",
      },
    };
  },
  computed: {
    valueDough() {
      return this.pizza.dough.map((item) => {
        return { ...item, value: item.name === "Толстое" ? "large" : "light" };
      });
    },
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
};
</script>

<style scoped></style>
