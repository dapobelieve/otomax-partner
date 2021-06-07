export default {
	returned: {
		name: "Returned Vehicles",
		route: "returned",
    count: 0,
    status: "RETURNED",
    desc: "Vehicle(s) to be picked up in 24 hours from Otomax.",
    icon: require('@/assets/images/vehicle-status/returned.svg')
	},
	available: {
		name: "Available for Hire",
		route: "available",
    count: 0,
    status: "AVAILABLE",
    desc: "Vehicle(s) awaiting hire.",
    icon: require('@/assets/images/vehicle-status/available.svg')
	},
	incomplete: {
		name: "Incomplete Vehicle profile",
		route: "incomplete",
		status: "DRAFT",
    count: 0,
    desc: "Please complete the vehicle listing",
    icon: require('@/assets/images/vehicle-status/incomplete.svg')
	},
	"active-hire":  {
		name: "Active Hire",
		route: "active-hire",
		status: "HIRED",
    count: 0,
    desc: "Vehicle(s) currently on hire.",
    icon: require('@/assets/images/vehicle-status/active.svg')
	},
	"in-review": {
		name: "In Review by Otomax Admin",
		route: "in-review",
    count: 0,
    status: "PENDING",
    desc: "Vehicle(s) pending review by Otomax.",
    icon: require('@/assets/images/vehicle-status/review.svg')
	},
	"not-available": {
		name: "Not Available for Hire",
		route: "not-available",
		status: "NOT AVAILABLE",
    count: 0,
    desc: "Vehicle(s) currently not up for hire.",
    icon: require('@/assets/images/vehicle-status/not-available.svg')
	},
	returned: {
		name: "Returned Vehicles",
		route: "returned",
		status: "RETURNED",
    count: 0,
    desc: "Vehicle(s) to be picked up in 24 hours from Otomax.",
    icon: require('@/assets/images/vehicle-status/returned.svg')
	}
}