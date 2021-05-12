import Vue from "vue";
import VueRouter from "vue-router";
import vehicleRoutes from './vehicle'

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
      },
      {
        path: 'sign-up',
        name: 'Signup',
        component: () => import("@/pages/auth/SignUp"),
      },
      {
        path: 'forget-password',
        name: 'ForgetPassword',
        component: () => import("@/pages/ForgetPassword"),
      },

    ],
  },
  {
    path: "/",
    component: () => import("@/layout/Landing"),
    children: [
      {
        path: "/",
        name: "FleetPartner",
        component: () => import("@/pages/FleetPartner")
      },
      {
        path: "vendor",
        name: "Vendor",
        component: () => import("@/pages/Vendor")
      },
      {
        path: "notification",
        name: "Notify",
        component: () => import("@/pages/Notification")
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("@/pages/Profile")
      },
      {
        path: "filter",
        name: "Filter",
        component: () => import("@/pages/Filter")
      },
      {
        path: "/hire-price",
        name: "HirePricePage",
        component: () => import("@/pages/HirePricePage"),
      },
      {
        path: "/vehicle-not-found",
        name: "VehicleNotFound",
        component: () => import("@/pages/VehicleNotFound"),
      },      
      {
        path: 'settings',
        component: () => import("@/layout/BackLayout"),
        children: [
          {
            path: 'payment-details',
            name: 'PaymentDetailsForm',
            component: () => import("@/pages/PaymentDetailsForm"),
          }]
      },
    ],
  },
]

export default new VueRouter({
  mode: "history",
  routes: baseRoutes.concat(vehicleRoutes)
});