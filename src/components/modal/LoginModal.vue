<template>
    <div id="login-modal" >

        <v-overlay :value='modalActive' @click='closeModal'>
            <div>
                <header>
                    <div class="back-btn">
                        <v-img @click="closeModal" src="@/assets/images/icon-close.png" alt="" width='45' />
                    </div>
                    <div class="signup-area">
                        <span>Don't have an account?</span> <v-btn color='primary'>Sign Up</v-btn>
                    </div>
                </header>
                <v-container class='login-content'>
                    <div class="content">
                        <div class="form-area">
                            <h2>Login</h2>
                            <p>Login to your account</p>


                            <modal-form-input
                                :rules='rules.email'
                                type='email'
                                placeholder='Email Address' 
                            />
                            <modal-form-input
                                :rules='rules.password'
                                placeholder='Password' 
                            />
                            <form class=pt-3>
                               <!-- <form-input 
                                    type='text' 
                                    color='black'
                                    placeholder='Email Address' 
                                    :error-messages="[]"
                                    background-color='#fff' 
                                />
                                <form-input type='password' placeholder='Password' /> -->
                                <div class='d-flex justify-space-between align-center mt-n8'>
                                    <v-checkbox
                                        v-model="rememberMe"
                                        :label="`Remember me: `"
                                        color='black'
                                        light
                                    />
                                    <router-link to='forget-password' class='forget-link'>Forget password</router-link>
                                </div>
                                <div class=''>
                                    <v-btn color='primary mb-6 mt-2' block>Login</v-btn>
                                    <div class="social">
                                        <v-btn block class='mb-2 py-4' text color='black' style='background:#fff'>
                                            <img class='mx-2 mt-n1' src='@/assets/images/icon-google.png' width='22' />
                                            Login with Google
                                        </v-btn>
                                        <v-btn block color='#3B5998' class='py-4'>
                                            <img class='mx-2 mt-n1' src='@/assets/images/icon-facebook.png' width='22' />
                                            Login with Facebook
                                        </v-btn>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </v-container>
            </div>
        </v-overlay>
    </div>
</template>

<script>
import FormInput from '@/components/forms/FormInput'
import ModalFormInput from '@/components/forms/ModalFormInput'  

export default {
    name: 'LoginModal',
    data: () => ({
        rememberMe: false,
        modalOpen: false,
        rules: {
            email: [
                value => !!value || 'Required!.',
                value => (value && !value.search(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) || 'Invalid email'
            ],
            password:  [
                value => !!value || 'Required!.',
                value => (value && value.length >= 6) || 'Password too short'
            ],
        },
    }),
    props: {
        isOpen: { type: Boolean, required: false, default: false, }, 
    },
    computed: {
        modalActive() {
            if( this.isOpen) return true;
            if(this.modalOpen)  return true;
            return false;
        },
    },
    methods: {
        closeModal() {
            // console.log('DId it: ', this.modalOpen)
            this.modalOpen = false;
            this.$emit('close-modal', false);
        }
    },
    components: {
        ModalFormInput,
    },
}
</script>

<style lang="scss" scoped>
   
    @import '../../assets/css/_variables.scss';
    #login-modal {
        header {
            width: 100%;
            .back-btn {
                position: absolute;
                right: -110px;
                cursor: pointer;
            }
            .signup-area { 
                text-align: center;
                span { margin-right: 30px; }
            }
        }
        .login-content {
            background: $light-white;
            color: $black;
            border-radius: 16px;
            padding: 40px 30px;
            width: 400px;
            margin: 40px auto;
            .forget-link, .forget-link:link, .forget-link:hover {
                font-size: $small-font-size;
                text-decoration: none;
                color: $black;
                font-weight: lighter;
                color: #666;
            }
            input, input:focus, input:hover, .v-input { color: $black !important;}
        }
    }
</style>
