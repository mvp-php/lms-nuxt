<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">Update Profile</p>
            <div class="main-card">
                <div class="role-main">
                   
                    <div class="blue-text mb-20">
                        Update Profile
                    </div>
                    <form v-on:submit.prevent="submitData"  id="sumitId"    enctype="multipart/form-data">
                        <ProfileComponent :the-user="user"/>
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
import ProfileComponent from '../../components/Profile/profile.vue';
import ButtonComponent  from    '../../components/element/formButton.vue';
import userService from "../../components/Service/UserService";
export default {
    layout: 'frontend',
    name: 'profile-component',

    components: {
        errorToastr,
        successToastr,
        ProfileComponent,
        ButtonComponent
    },
    
    data() {
        return {
            user:{},
            errorMessage: "",
            errorToastrHide: true,
            successMessage: "",
            successToastrHide: true,
            ButtonName: "Update Profile",
            
        }
    },
    created() {
       
        this.profilDetail();
    },
    methods: {
        profilDetail(){
            userService.profile().then(async response => {

                    this.user   =response.data.data;
                    
                }).catch(e => {
                    console.log(e)
                });
        },
        submitData(){
            
            document.getElementById("first_name_error").textContent = "";
            document.getElementById("last_name_error").textContent = "";
            document.getElementById("email_error").textContent = "";
            var cnt =0;

            if (!this.user.first_name) {
                document.getElementById("first_name_error").textContent = "Enter the first name";
                event.preventDefault();
                cnt =1;
            }
            if (!this.user.last_name) {
                document.getElementById("last_name_error").textContent = "Enter the last name";
                event.preventDefault();
                cnt =1;
            }
            if (!this.user.email) {
                document.getElementById("email_error").textContent = "Enter the email id";
                event.preventDefault();
                cnt =1;
            }

            if(cnt == 0){

                userService.profileUpdate(this.user).then(async response => {
                    if(response.data.email_status ==0){
                        userService.callLogout().then((result) => {
                                localStorage.removeItem('userData');
                                this.$router.push({ path: '/login' });

                            }).catch(error => {

                                this.errorMessage = error.response.data.response_msg;


                        })
                    }
                
                }).catch(error => {
                    this.errorMessage = error.response.data.response_msg;

                    this.dangerToasterShow();
                });
            }
            
        },
        dangerToasterShow() {

            this.errorToastrHide = false;
            setTimeout(() => this.errorToastrHide = true, 5000);
        },
        errorClose(){
            this.errorToastrHide = true;
            }
     },   

}
</script>