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
      path: 'some',
      name: 'VehicleProfile',
      component: () => import("@/pages/VehicleProfile"),
    },
    {
      path: "/vehicle/manager",
      name: "VehicleManager",
      component: () => import("@/pages/VehicleManager")
    },
    {
      path: "/vehicle/upload/images",
      name: "VehicleImagesUpload",
      component: () => import("@/pages/VehicleImagesUpload")
    },
    {
      path: "/vehicle/review",
      name: "VehicleReviewPage",
      component: () => import("@/pages/VehicleReviewPage"),
    },
    {
      path: "/vehicle/listing",
      name: "VehicleListing",
      component: () => import("@/pages/VehicleListing")
    },
    {
      path: "pickup",
      name: "PickVehicle",
      component: () => import("@/pages/PickVehicle")
    },
  ],
},
]