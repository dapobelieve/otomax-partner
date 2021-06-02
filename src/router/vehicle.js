export default [
  {
    path: "/vehicle-manager",
    component: () => import("@/layout/VehicleLayout"),
    children: [
      {
        path: '',
        name: "vehicle-manager",
        component: () => import("@/pages/VehicleManager"),
      }
    ]
  },
	{
  path: '/vehicle/create',
  component: () => import("@/layout/VehicleLayout"),
  children: [
    {
      path: 'get-info',
      name: 'vehicle-create',
      component: () => import("@/pages/vehicle/create")
    },
     {
      path: 'manual-info',
      name: 'vehicle-create-manual',
      component: () => import("@/pages/vehicle/create-manual")
    },
    {
      path: ':id/upload-images',
      name: "vehicle-upload-images",
      component: () => import("@/pages/vehicle/ImageUpload")
    },
    {
      path: ':id/sign-doc',
      name: "vehicle-create-sign-contract",
      component: () => import("@/pages/vehicle/SignContract")
    },
    {
      path: ':id/hire-price',
      name: "vehicle-set-hire-price",
      component: () => import("@/pages/vehicle/HirePrice")
    },
    {
      path: ':id/details',
      name: "vehicle-details",
      component: () => import("@/pages/vehicle/VehicleDetails")
    },   
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