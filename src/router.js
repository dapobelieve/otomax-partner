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
import PickVehicle from './pages/PickVehicle'
import UploadLicense from './pages/UploadLicense'
import VehicleUpload from './pages/VehicleUpload'
import HirePricePage from './pages/HirePricePage'
import VehicleImagesUpload from './pages/VehicleImagesUpload'
import VehicleManager from './pages/VehicleManager'
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
          path: "vehicle-manager",
          name: "VehicleManager",
          component: VehicleManager
        },
        {
          path: "vehicle-upload",
          name: "VehicleUpload",
          component: VehicleUpload
        },
        {
          path: "/vehicle-images",
          name: "VehicleImagesUpload",
          component: VehicleImagesUpload
        },
        {
          path: "/hire-price",
          name: "HirePricePage",
          component: HirePricePage,
        },
        {
          path: 'vehicle',
          component: BackLayout,
          children: [
            {
              path: '/vehicle',
              name: 'VehicleProfile',
              component: VehicleProfile,
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
          ],
        },
      ],
    },
  ],
});
