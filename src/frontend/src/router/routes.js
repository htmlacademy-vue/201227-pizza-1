export default [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Index.vue"),
    // children: [
    //   {
    //     path: "/login",
    //   },
    // ],
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../views/Orders.vue"),
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: { layout: "AppLayoutMain" },
  },
];
