<template>
	<div>
		<h1>Sign Document</h1>
	</div>
</template>
<script>
import axios from "axios"	
export default {
	data() {
		return {}
	},
	methods: {
		async signDocument() {
			const templateId = 225241000000013007
			let res = await axios.put(`https://sign.zoho.com/api/v1/templates/${templateId}/createdocument`, {
				"templates": {
	        "field_data": {
	            "field_text_data": {},
	            "field_boolean_data": {},
	            "field_date_data": {}
	        },
	        "actions": [
	          {
	            "recipient_name": "dapo",
	            "recipient_email": "",
	            "action_id": "225241000000012018",
	            "signing_order": 1,
	            "role": "",
	            "verify_recipient": false,
	            "private_notes": "",
	            "is_embedded": true
	          }
	        ],
	        "notes": ""
		    }
			}, {
				'Authorization': `Zoho-oauthtoken 1000.18069e87793c2e8cd32d1c7d44bc5e47.f7a589c695edbe329de5bf790008c51f`
			})
		}
	},
	async mounted() {
		let res = await this.signDocument()
		console.log(res)
	}
}	
</script>