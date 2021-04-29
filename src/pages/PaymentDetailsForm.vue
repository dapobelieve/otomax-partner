<template>
  <v-container class="page-container d-flex justify-center ">
    <div class="holder bg-white  px-15 py-12 d-flex justify-center align-center">

        <div class="size align-center">
            <div class='text-center mb-8'>
                <h2 class="mb-2">Payment Details</h2>
                <p class='text-center'>Please provide us with your bank account details</p>
            </div>
            
            <form action="#" class='mt-15'>

                <v-row>
                    <v-col>
                        <p>Bank account</p>
                        <form-input placeholder='Barclays Bank' />
                    </v-col>
                    <v-col>
                        <p>Account number</p>
                        <form-input placeholder='094820880' />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <p>Account name</p>
                        <form-input placeholder='James Anthony Smith' />
                    </v-col>
                    <v-col>
                        <p>Sort code</p>
                        <form-input placeholder='095243' />
                    </v-col>
                </v-row>

                <div class='text-center'>
                    <v-btn class='text-center' type='submit' color="primary" elevation="0"><h6>Save Payment Details</h6></v-btn>
                </div>

            </form>

        </div>

    </div>
  </v-container>
</template>

<script>
import FormInput from '@/components/forms/FormInput'

export default {
  name: 'PaymentDetailsForm',
  data: () => ({

  }),
  components: {
    FormInput,
  },
}
</script>

<style lang='scss' scoped>
@import '../assets/css/_variables.scss';

.page-container {
    width: 45%;
    .holder {
        border-radius: 8px;
    }
}
</style>
