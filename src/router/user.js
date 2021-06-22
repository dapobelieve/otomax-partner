import auth from "@/router/middlewares/auth";

export default [
	{
    path: "/profile",
    component: () => import("@/layout/VehicleLayout"),
    children: [
      {
        path: '',
        name: "profile",
        component: () => import("@/pages/user/index"),
        meta: {
          middleware: [auth]
        }
      },
    ]
  }
]