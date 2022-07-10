<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">Update Password</p>
            <div class="main-card">
                <div class="role-main">

                    <div class="blue-text mb-20">
                        Update Password
                    </div>
                    <form v-on:submit.prevent="submitData">
                        <PasswordComponent :the-user="user" />
                        <div class="btn-align-end">
                            <ButtonComponent type="submit" class="slds-button slds-button_brand btnmain blue-btn ml-10"
                                :buttonName="ButtonName" />
                        </div>
                    </form>
                </div>

            </div>
        </div>


        <errorToastr :errorMessage="errorMessage" v-if="!errorToastrHide" />
        <successToastr :successMessage="successMessage" v-if="!successToastrHide" />
    </span>
</template>

<script>


import errorToastr from '../../components/element/errorToastr.vue';
import successToastr from '../../components/element/successToastr.vue';
import PasswordComponent from '../../components/Profile/update_password.vue';
import ButtonComponent from '../../components/element/formButton.vue';
import userService from '../../components/Service/UserService';
export default {
    layout: 'frontend',
    name: 'profile-component',

    components: {
        errorToastr,
        successToastr,
        PasswordComponent,
        ButtonComponent
    },

    data() {
        return {
            user: {},
            errorMessage: "",
            errorToastrHide: true,
            successMessage: "",
            successToastrHide: true,
            ButtonName: "Update Password"

        }
    },
    methods: {
        submitData() {
            document.getElementById("old_password_error").textContent = "";
            document.getElementById("new_password_error").textContent = "";
            document.getElementById("confirm_password_error").textContent = "";
            var cnt = 0;
            if (!this.user.existing_password) {
                document.getElementById("old_password_error").textContent = "Enter existing password";
                cnt = 1;
            }
            if (!this.user.new_password) {
                document.getElementById("new_password_error").textContent = "Enter new password";
                cnt = 1;
            }
            if (!this.user.confirm_password) {
                document.getElementById("confirm_password_error").textContent = "Enter confirm password";
                cnt = 1;
            }

            if (cnt == 0) {
                userService.callUpdatePassword(this.user)
                    .then((result) => {
                        this.successMessage = result.data.response_msg;
                        this.successToasterShow();
                       userService.callLogout().then((result) => {
                                localStorage.removeItem('userData');
                                this.$router.push({ path: '/login' });

                            }).catch(error => {

                                this.errorMessage = error.response.data.response_msg;


                        })
                    }).catch(error => {
                       
                        this.errorMessage = error.response.data.response_msg;
                        this.dangerToasterShow();
                    })
            }
        },
        dangerToasterShow() {

            this.errorToastrHide = false;
            setTimeout(() => this.errorToastrHide = true, 5000);
        },
        errorClose:function(){
            this.errorToastrHide = true;
        },
        successToasterShow(){
            this.successToastrHide = false;
            setTimeout(() => this.successToastrHide = true, 5000);
        },
        successClose:function(){
            this.successToastrHide = true;
        },
    },


}
</script>