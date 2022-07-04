<template>
    <div class="content">
        <p class="page-title mb-20">USER MANAGEMENT</p>
        <div class="main-card">
            <div class="role-main">
                <div class="mb-18 back-text">
                    <imageComponent :log="require('~/assets/img/svg/arrow-left.svg')" :className="classObj" />
                    <span>BACK </span>
                </div>
                <div class="blue-text mb-20">
                    Create A User
                </div>
                <form v-on:submit.prevent="submitData">
                    <CreateUser :the-user="user" :rolelist="allRoleList" :paymentPlan="paymentPlan"/>
                    <div class="btn-align-end">
                        <ButtonComponent type="submit" class="slds-button slds-button_brand btnmain blue-btn ml-10"
                            :ButtonName="ButtonName" />
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import CreateUser from '../../../components/User/create_user.vue';
import imageComponent from '../../../components/element/image.vue';
import RoleDataService from "../../../components/Service/RoleDataService";
import PaymentPlanService from "../../../components/Service/PaymentPlanService";
export default {
    layout: 'frontend',
    components: {
        CreateUser,
        imageComponent
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
        };
    },
    mounted() {
        console.log(123, 'abc');
    },
    created(){
        this.getRoleList();
        this.PaymentPlanList();
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
    }
};
</script>