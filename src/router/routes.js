import Vue from "vue";
import VueRouter from "vue-router";
import vehicleRoutes from './vehicle';

import middlewarePipeline from "@/router/kernel/middlewarePipeline";
import auth from "@/router/middlewares/auth";
import isAuthenticated from "@/router/middlewares/isAuthenticated";
import store from "@/store"

Vue.use(VueRouter);

const baseRoutes = [
  {
    path: '*',
    component: import("@/pages/errors/NotFound"),
  },
  {
    path: '/404',
    component: () => import("@/pages/errors/NotFound"),
    name: 'NotFound',
  },
  {
    path: '/account',
    component: () => import("@/layout/AuthLayout"),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import("@/pages/auth/Login"),
        meta: {
          middleware: [isAuthenticated]
        }
      },
      {
        path: 'sign-up',
        name: 'sign-up',
        component: () => import("@/pages/auth/SignUp"),
        meta: {
          middleware: [isAuthenticated]
        }
      },
      {
        path: 'forget-password',
        name: 'ForgetPassword',
        component: () => import("@/pages/ForgetPassword"),
      }
    ],
  },
  {
    path: "/",
    component: () => import("@/layout/Landing"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/pages/Home"),
        meta: {
          middleware: [auth]
        }
      },
      {
        path: "vendor",
        name: "Vendor",
        component: () => import("@/pages/Vendor")
      },
      {
        path: "notifications",
        name: "notification",
        // component: () => import("@/pages/notification/index")
        component: () => import("@/pages/Notification/"),
        meta: {
          middleware: [auth]
        }
      },
      {
        path: 'settings',
        component: () => import("@/layout/VehicleLayout"),
        children: [
          {
            path: 'payment-details',
            name: 'payment-details',
            component: () => import("@/pages/PaymentDetailsForm"),
            meta: {
              middleware: [auth]
            }
          }]
      },
    ],
  },
]

const router = new VueRouter({
  mode: "history",
  routes: baseRoutes.concat(vehicleRoutes)
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;
  const context = { to, from, next, router, store };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});

export default router;