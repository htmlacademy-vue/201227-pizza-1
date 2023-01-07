<template>
  <component :is="layout" :tasks="layoutTasks">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "AppLayoutDefault";
export default {
  name: "AppLayout",
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },

    layoutTasks() {
      return this.$route.meta.layout !== defaultLayout ? this.tasks : null;
    },
  },
};
</script>

<style scoped></style>
