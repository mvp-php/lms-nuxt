<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">Update Profile</p>
            <div class="main-card">
                <div class="role-main">
                   
                    <div class="blue-text mb-20">
                        Update Profile
                    </div>
                    <form v-on:submit.prevent="submitData">
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
export default {
    layout: 'frontend',
    name: 'profile-component',

    components: {
        errorToastr,
        successToastr,
        ProfileComponent
    },
    
    data() {
        return {
            user:{},
            errorMessage: "",
            errorToastrHide: true,
            successMessage: "",
            successToastrHide: true,
            
        }
    },
    created() {
       

    },
    

}
</script>