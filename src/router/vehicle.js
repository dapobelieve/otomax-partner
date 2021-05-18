export default [
	{
  path: '/vehicle',
  component: () => import("@/layout/VehicleLayout"),
  children: [
    {
      path: 'create/get-info',
      name: 'vehicle-create',
      component: () => import("@/pages/vehicle/create")
    },
     {
      path: 'create/manual-info',
      name: 'vehicle-create-manual',
      component: () => import("@/pages/vehicle/create-manual")
    },
    {
      path: 'create/:id/upload-images',
      name: "vehicle-upload-images",
      component: () => import("@/pages/vehicle/ImageUpload")
    },
    {
      path: 'create/hire-price',
      name: "vehicle-upload-hire-price",
      component: () => import("@/pages/vehicle/HirePrice")
    },
    {
      path: 'create/sign-doc',
      name: "vehicle-create-sign-document",
      component: () => import("@/pages/vehicle/DocumentSign")
    },
    {
      path: 'create/sign-doc/callback',
      name: "vehicle-create-sign-document",
      component: () => import("@/pages/vehicle/DocumentSign")
    }
    // {
    //   path: "/vehicle/manager",
    //   name: "VehicleManager",
    //   component: () => import("@/pages/VehicleManager")
    // },
    // {
    //   path: "/vehicle/review",
    //   name: "VehicleReviewPage",
    //   component: () => import("@/pages/VehicleReviewPage"),
    // },
    // {
    //   path: "/vehicle/listing",
    //   name: "VehicleListing",
    //   component: () => import("@/pages/VehicleListing")
    // },
    // {
    //   path: "pickup",
    //   name: "PickVehicle",
    //   component: () => import("@/pages/PickVehicle")
    // },
  ],
},
]