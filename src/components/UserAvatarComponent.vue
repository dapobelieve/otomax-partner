<template>
	<div class="user-avatar d-flex align mb-1">
		<!-- <img class="rounded-circle" src="https://avatars.githubusercontent.com/u/15062380?v=4" alt=""> -->
		<div class="initials d-flex justify-center align-center">
			<span class="white--text font-weight-black">{{initials}}</span>
		</div>
	</div>
</template>
<script>
import { mapGetters }	from "vuex"
export default {
	computed: {
		...mapGetters({
			user: "auth/user"
		}),
		initials() {
			return this.user.firstName.charAt(0).toUpperCase()
		}
	},
}
</script>
<style lang="scss">
.user-avatar {
	height: 1.9rem;
	width: 1.9rem;
	border-radius: 50%;
	background-color: #ff4003;
	object-fit: cover;
	img {
		height: 100%;
		width: 100%;
	}

	.initials {
		height: 100%;
		width: 100%;
	}
}	
</style>