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
                        Create A Role
                    </div>
                    <form v-on:submit.prevent="submitData">
                        <CreateRole :the-user="user" :EntitiesList="EntitiesList" />
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
import CreateRole from '../../../components/Role/create_role.vue';

import RoleDataService from "../../../components/Service/RoleDataService";

import ButtonComponent from '../../../components/element/formButton.vue';
import errorToastr from '../../../components/element/errorToastr.vue';

export default {
    layout: 'frontend',
    components: {
        CreateRole,
        ButtonComponent,
        errorToastr
    },
    props: {
        isTableDataVisible: {
            type: Boolean,
            default: true
        },
        showForm: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            user: {},
            ButtonName: "Save Role",
            errorMessage: "",
            classObj: 'arrow-left',
            hides: true,
            hidessucces: true,
            successMessage: "",
           
            EntitiesList: [],
            dangerHide: true,
        };
    },
    mounted() {
        console.log(123, 'abc');
    },
    created() {
        this.getEntitiesAndPermissionList();
    
    },
    methods: {
        getEntitiesAndPermissionList() {
            RoleDataService.getEntitiesAndPermissionList()
                .then(response => {
                    this.EntitiesList = response.data.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        submitData(event) {
            document.getElementById("first_name_error").textContent = "";
            document.getElementById("last_name_error").textContent = "";
            document.getElementById("email_error").textContent = "";
            document.getElementById("role_error").textContent = "";
            var cnt = 0;
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
            if (!this.user.role_id) {
                document.getElementById("role_error").textContent = "Select one role at a time";
                event.preventDefault();
                cnt =1;
            }

            if(this.user.role_id =='772769390512275457'){
                document.getElementById("members_error").textContent = "";
                document.getElementById("amount_error").textContent = "";

                if (!this.user.member_ship_id) {
                    document.getElementById("members_error").textContent = "Select one plan at a time";
                    event.preventDefault();
                    cnt =1;
                }
                if (!this.user.amount) {
                    document.getElementById("amount_error").textContent = "Enter the amount";
                    event.preventDefault();
                    cnt =1;
                }
            }

            if (cnt == 0) {
                userService.saveUser(this.user)
                    .then((result) => {
                        console.log(result)

                        this.$router.push({ path: '/user-management/user' });
                    }).catch(error => {

                        this.errorMessage = error.response.data.error_msg;

                        this.dangerToasterShow();


                    })
            }

        },
        dangerToasterShow() {

            this.dangerHide = false;
            setTimeout(() => this.dangerHide = true, 5000);
        },
    }
};
</script>