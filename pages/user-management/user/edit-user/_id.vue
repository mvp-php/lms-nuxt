<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">USER MANAGEMENT</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <imageComponent :log="require('~/assets/img/svg/arrow-left.svg')" :className="classObj" />
                        <nuxt-link to="/user-management/user"><span>BACK </span></nuxt-link>
                    </div>
                    <div class="blue-text mb-20">
                        Edit A User
                    </div>
                    <form v-on:submit.prevent="submitData">
                        <EditUser :the-user="user"  :roleTitles="roleTitle"  :systemFlag="systemFlag"  :rolelist="allRoleList" :paymentPlan="paymentPlan"
                            :userForm="userForm" />
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
import EditUser from '../../../../components/User/edit_user.vue';
import imageComponent from '../../../../components/element/image.vue';
import RoleDataService from "../../../../components/Service/RoleDataService";
import PaymentPlanService from "../../../../components/Service/PaymentPlanService";
import ButtonComponent from '../../../../components/element/formButton.vue';
import errorToastr from '../../../../components/element/errorToastr.vue';
import userService from '../../../../components/Service/UserService';
export default {
    layout: 'frontend',
    components: {
        EditUser,
        imageComponent,
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
            ButtonName: "Save User",
            errorMessage: "",
            classObj: 'arrow-left',
            hides: true,
            hidessucces: true,
            successMessage: "",
            allRoleList: [],
            paymentPlan: [],
            dangerHide: true,
            userForm: [],
            roleTitle:'',
            systemFlag:''
        };
    },
    mounted() {
        console.log(123, 'abc');
    },
    created() {
        this.getRoleList();
        this.PaymentPlanList();
        this.getUserDetails();
    },
    methods: {
        getRoleList() {

            RoleDataService.getAllRoleList().then(response => {

                this.allRoleList = response.data.data;

            }).catch(e => {
                console.log(e)
            });

        },
        PaymentPlanList() {
            PaymentPlanService.getPaymentPlan().then(response => {

                this.paymentPlan = response.data.data;

            }).catch(e => {
                console.log(e)
            });
        },
        getUserDetails() {
            userService.getUserDetails(this.$route.params.id).then(response => {
                this.loading = false;
                this.userForm = response.data.data;
                this.roleTitle=response.data.data.title;
                this.systemFlag=response.data.data.is_system_role;
                
                this.user = response.data.data;
                

            }).catch(e => {
                console.log(e)
            });
        },
        
        hide(){
            this.hides = true;
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
                cnt = 1;
            }
            if (!this.user.last_name) {
                document.getElementById("last_name_error").textContent = "Enter the last name";
                event.preventDefault();
                cnt = 1;
            }
            if (!this.user.email) {
                document.getElementById("email_error").textContent = "Enter the email id";
                event.preventDefault();
                cnt = 1;
            }
            if (!this.user.role_id) {
                document.getElementById("role_error").textContent = "Select one role at a time";
                event.preventDefault();
                cnt = 1;
            }

             if(this.user.srole_title =='Student'){
                document.getElementById("members_error").textContent = "";
                document.getElementById("amount_error").textContent = "";

                if (!this.user.entity_id) {
                    document.getElementById("members_error").textContent = "Select one plan at a time";
                    event.preventDefault();
                    cnt = 1;
                }
                if (!this.user.amount) {
                    document.getElementById("amount_error").textContent = "Enter the amount";
                    event.preventDefault();
                    cnt = 1;
                }
            }

            if (cnt == 0) {
                userService.updateUser(this.user, this.$route.params.id)
                    .then((result) => {
                        console.log(result)

                        this.$router.push({ path: '/user-management/user' });
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