<template>
	<div :style="{width: compWidth, height: compHeight}" class="user-avatar d-flex align mb-1">
		<img v-if="image || user.imageUrl" class="rounded-circle" :src="computeImage" alt="">
		<div v-else class="initials d-flex justify-center align-center">
			<span class="white--text font-weight-black">{{initials}}</span>
		</div>
		<div @click.exact="$emit('select-image')" v-if="editable" class="edit rounded-circle bg-blue d-flex justify-center align-center white--text cursor-pointer">
			<i class="fas fa-pen"></i>
		</div>
	</div>
</template>
<script>
import { mapGetters }	from "vuex"
export default {
	props: {
		image: {
			type: [String, File],
			default: ""
		},
		editable: {
			type: Boolean,
			default: false
		},
		height: {
			type: String,
			default: "1.9rem"
		},
		width: {
			type: String,
			default: "1.9rem"
		}
	},
	computed: {
		compHeight() {
			return this.height
		},
		compWidth() {
			return this.width
		},
		...mapGetters({
			user: "auth/user"
		}),
		computeImage() {
			if(this.image) {
				if(this.image.name)
					return URL.createObjectURL(this.image)
				return this.image
			}else if(this.user.imageUrl) {
				return this.user.imageUrl
			}
		},
		initials() {
			return this.user.firstName.charAt(0).toUpperCase()
		}
	},
}
</script>
<style lang="scss">
.user-avatar {
	position: relative;
	height: 1.9rem;
	width: 1.9rem;
	border-radius: 50%;
	background-color: #ff4003;
	object-fit: cover;
	.edit {
		position: absolute;
		height: 2rem;
		width: 2rem;
		bottom: 16px;
		right: 0
	}
	img {
		height: 100%;
		object-fit: cover;
		width: 100%;
	}

	.initials {
		height: 100%;
		width: 100%;
	}
}	
</style>