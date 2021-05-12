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
      path: '/:id',
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
      path: '/vehicle/edit',
      name: 'EditVehicleProfile',
      component: () => import("@/pages/EditVehicleProfile"),
    },
    {
      path: "/vehicle/listing",
      name: "VehicleListing",
      component: () => import("@/pages/VehicleListing")
    },
    {
      path: "/vehicle/upload/info",
      name: "VehicleUploadInfo",
      component: () => import("@/pages/VehicleUploadInfo")
    },
    {
      path: '/vehicle/upload',
      name: 'UploadVehicle',
      component: () => import("@/pages/UploadVehicle"),
    },
    {
      path: "pickup",
      name: "PickVehicle",
      component: () => import("@/pages/PickVehicle")
    },
  ],
},
]