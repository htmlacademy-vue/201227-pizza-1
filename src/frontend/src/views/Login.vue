<template>
  <div class="content">
    <div class="content__wrapper">
      <h2 class="title">Авторизация</h2>
      <form action="#" method="post" @submit.prevent="submit">
        <label for="login">Логин</label>
        <input id="login" v-model="login" type="text" />
        <label for="password">Пароль</label>
        <input id="password" v-model="password" type="password" />
        <button type="submit">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login.vue",
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    submit() {
      if (this.login === "Ps" && this.password === "1234") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped></style>
