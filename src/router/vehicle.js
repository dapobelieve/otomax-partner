import auth from "@/router/middlewares/auth";

export default [
  {
    path: "/vehicle-manager",
    component: () => import("@/layout/VehicleLayout"),
    children: [
      {
        path: '',
        name: "vehicle-manager",
        component: () => import("@/pages/vehicle/VehicleManager"),
        meta: {
          middleware: [auth]
        }
      },
      {
        path: ':category',
        name: "vehicle-manager-category",
        component: () => import("@/pages/vehicle/VehicleManagerCategory"),
        meta: {
          middleware: [auth]
        }
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
        component: () => import("@/pages/vehicle/create"),
        meta: {
          middleware: [auth]
        }
      },
       {
        path: 'create/manual-info',
        name: 'vehicle-create-manual',
        component: () => import("@/pages/vehicle/create-manual"),
        meta: {
          middleware: [auth]
        }
      },
      {
        path: 'create/:id/upload-images',
        name: "vehicle-upload-images",
        component: () => import("@/pages/vehicle/ImageUpload"),
        meta: {
          middleware: [auth]
        }
      },
      {
        path: 'create/:id/sign-doc',
        name: "vehicle-create-sign-contract",
        component: () => import("@/pages/vehicle/SignContract"),
        meta: {
          middleware: [auth]
        }
      },
      {
        path: 'create/:id/hire-price',
        name: "vehicle-set-hire-price",
        component: () => import("@/pages/vehicle/HirePrice"),
        meta: {
          middleware: [auth]
        }
      },
      {
        path: ':id/details',
        name: "vehicle-details",
        component: () => import("@/pages/vehicle/VehicleDetails"),
        meta: {
          middleware: [auth]
        }
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