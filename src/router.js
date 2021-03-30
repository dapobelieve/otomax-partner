import Vue from "vue";
import VueRouter from "vue-router";

import Landing from "./layout/Landing";
import BackLayout from "./layout/BackLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/Home";
import Vendor from "./pages/Vendor";
import Notify from "./pages/Notification";
import Profile from "./pages/Profile";
import Filter from "./pages/Filter";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import ForgetPassword from "./pages/ForgetPassword"
import VehicleProfile from './pages/VehicleProfile'
import HireDuration from './pages/HireDuration'
import PickVehicle from './pages/PickVehicle'
import UploadLicense from './pages/UploadLicense'
import ActiveHire from './pages/ActiveHire'
import SuccessPayment from './pages/SuccessPayment'
import NotFound from './pages/errors/NotFound'

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '*',
      component: NotFound,
    },
    {
      path: '/404',
      component: NotFound,
      name: 'NotFound',
    },
    {
      path: '/account',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
        {
          path: 'sign-up',
          name: 'Signup',
          component: SignUp,
        },
        {
          path: 'forget-password',
          name: 'ForgetPassword',
          component: ForgetPassword,
        },
      ],
    },
    {
      path: "/",
      component: Landing,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home
        },
        {
          path: "vendor",
          name: "Vendor",
          component: Vendor
        },
        {
          path: "notification",
          name: "Notify",
          component: Notify
        },
        {
          path: "profile",
          name: "Profile",
          component: Profile
        },
        {
          path: "filter",
          name: "Filter",
          component: Filter
        },
        {
          path: "success",
          name: "SuccessPayment",
          component: SuccessPayment
        },
        {
          path: 'vehicle',
          component: BackLayout,
          children: [
            {
              path: '/vehicle/:id',
              name: 'VehicleProfile',
              component: VehicleProfile,
            },
            {
              path: '/vehicle/:id/hire',
              name: 'HireDuration',
              component: HireDuration,
            },
            {
              path: '/vehicle/:id/upload-license',
              name: 'UploadLicense',
              component: UploadLicense,
            },
            {
              path: "pickup",
              name: "PickVehicle",
              component: PickVehicle
            },
            {
              path: 'active-hire',
              name: 'ActiveHire',
              component: ActiveHire,
            },
          ],
        },
      ],
    },
  ],
});
