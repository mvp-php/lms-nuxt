<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">USER MANAGEMENT</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <imageComponent :log="require('~/assets/img/svg/arrow-left.svg')" :className="classObj" />
                        <nuxt-link to="/user-management/role"><span>BACK </span></nuxt-link>
                    </div>
                    <div class="blue-text mb-20">
                        Edit A Role
                    </div>
                    <form v-on:submit.prevent="submitData">
<<<<<<< HEAD
                        <EditRole :the-user="user" :selectedPermission="selectedPermission" />
=======
                        <EditRole :the-user="user" :selectedPermission="selectedPermission"/>
>>>>>>> origin/main
                        <div class="btn-align-end">
                            <ButtonComponent type="submit" class="slds-button slds-button_brand btnmain blue-btn ml-10"
                                :buttonName="ButtonName" />
                        </div>
                    </form>
                </div>
            </div>


        </div>
        <errorToastr :errorMessage="errorMessage" v-if="!dangerHide" />
    </span>


</template>

<script>
import EditRole from '../../../../components/Role/edit_role.vue';

import RoleDataService from "../../../../components/Service/RoleDataService";

import ButtonComponent from '../../../../components/element/formButton.vue';
import errorToastr from '../../../../components/element/errorToastr.vue';
import imageComponent from '../../../../components/element/image.vue';
export default {
    layout: 'frontend',
    components: {
        EditRole,

        ButtonComponent,
        errorToastr,
        imageComponent
    },

    data() {
        return {
            user: {

<<<<<<< HEAD
                permission: [],
                title: '',
                description: ''
=======
                permission:[],
                role_title:'',
                description:''
>>>>>>> origin/main
            },
            ButtonName: "Update Role",
            errorMessage: "",
            classObj: 'arrow-left',

            successMessage: "",


            dangerHide: true,
<<<<<<< HEAD
            userForm: [],
=======
            userForm:[],
>>>>>>> origin/main
        };
    },

    created() {

        this.getRoleDetails();

    },
    methods: {


        getRoleDetails() {
            RoleDataService.getDetailsById(this.$route.params.id).then(response => {
<<<<<<< HEAD
                this.user = response.data.data;


            }).catch(e => {

=======
                    this.user = response.data.data;
                   
                    
                }).catch(e => {
                console.log(e)
>>>>>>> origin/main
            });
        },
        submitData(event) {
            document.getElementById("role_title_error").textContent = "";

            var cnt = 0;
            if (!this.user.title) {
                document.getElementById("role_title_error").textContent = "Enter the role  title";
                event.preventDefault();
                cnt = 1;
            }
            if (this.user.permission.length == 0) {
                document.getElementById("permission_error").textContent = "Please select any one permission";
                event.preventDefault();
                cnt = 1;
            }
<<<<<<< HEAD
=======
            if (this.user.permission.length ==0) {
                document.getElementById("permission_error").textContent = "Please select any one permission";
                event.preventDefault();
                cnt =1;
            }
>>>>>>> origin/main

            if (cnt == 0) {
                RoleDataService.updateRole(this.user, this.$route.params.id)
                    .then((result) => {
                        console.log(result)

                        this.$router.push({ path: '/user-management/role' });
                    }).catch(error => {

                        this.errorMessage = error.response.data.response_msg;

                        this.dangerToasterShow();


                    })
            }

        },
        dangerToasterShow() {

            this.dangerHide = false;
            setTimeout(() => this.dangerHide = true, 5000);
        },
        errorClose() {
            this.dangerHide = true;
        }
    }
};
</script>