const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "index",
        component: () => import("src/pages/index/Index.vue"),
        children: [
          {
            path: "nieto-1",
            component: () => import("src/pages/index/Nieto1.vue")
          },
          {
            path: "nieto-2",
            component: () => import("src/pages/index/Nieto2.vue")
          }
        ]
      },
      { path: "hijo-2", component: () => import("pages/Child2.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
