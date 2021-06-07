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
        name: 'sign-up',
        component: () => import("@/pages/auth/SignUp"),
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
        component: () => import("@/pages/FleetPartner")
      },
      {
        path: "vendor",
        name: "Vendor",
        component: () => import("@/pages/Vendor")
      },
      {
        path: "notifications",
        name: "notification",
        component: () => import("@/pages/notification/index")
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
        path: 'settings',
        component: () => import("@/layout/VehicleLayout"),
        children: [
          {
            path: 'payment-details',
            name: 'payment-details',
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