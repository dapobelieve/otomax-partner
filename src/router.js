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
import EditVehicleProfile from './pages/EditVehicleProfile'
import UploadVehicle from './pages/UploadVehicle'
import PickVehicle from './pages/PickVehicle'
import UploadLicense from './pages/UploadLicense'
import VehicleUploadInfo from './pages/VehicleUploadInfo'
import HirePricePage from './pages/HirePricePage'
import VehicleReviewPage from './pages/VehicleReviewPage'
import VehicleImagesUpload from './pages/VehicleImagesUpload'
import VehicleManager from './pages/VehicleManager'
import VehicleListing from './pages/VehicleListing'
import FleetPartner from './pages/FleetPartner'
import VehicleNotFound from './pages/VehicleNotFound'
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
          path: "fleet-partner",
          name: "FleetPartner",
          component: FleetPartner
        },
        {
          path: "vehicle-listing",
          name: "VehicleListing",
          component: VehicleListing
        },
        {
          path: "vehicle-info-upload",
          name: "VehicleUploadInfo",
          component: VehicleUploadInfo
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
          path: "/vehicle-review",
          name: "VehicleReviewPage",
          component: VehicleReviewPage,
        },
        {
          path: "/vehicle-not-found",
          name: "VehicleNotFound",
          component: VehicleNotFound,
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
              path: '/vehicle/edit',
              name: 'EditVehicleProfile',
              component: EditVehicleProfile,
            },
            {
              path: '/vehicle/upload',
              name: 'UploadVehicle',
              component: UploadVehicle,
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
