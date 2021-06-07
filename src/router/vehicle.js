export default [
  {
    path: "/vehicle-manager",
    component: () => import("@/layout/VehicleLayout"),
    children: [
      {
        path: '',
        name: "vehicle-manager",
        component: () => import("@/pages/vehicle/VehicleManager"),
      },
      {
        path: ':category',
        name: "vehicle-manager-category",
        component: () => import("@/pages/vehicle/VehicleManagerCategory"),
      }
    ]
  },
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
        path: 'create/:id/sign-doc',
        name: "vehicle-create-sign-contract",
        component: () => import("@/pages/vehicle/SignContract")
      },
      {
        path: 'create/:id/hire-price',
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