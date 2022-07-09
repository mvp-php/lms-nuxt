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
import imageComponent from '../../../components/element/image.vue';
import CreateRole from '../../../components/Role/create_role.vue';

import RoleDataService from "../../../components/Service/RoleDataService";

import ButtonComponent from '../../../components/element/formButton.vue';
import errorToastr from '../../../components/element/errorToastr.vue';

export default {
    layout: 'frontend',
    components: {
        CreateRole,
        ButtonComponent,
        errorToastr,
        imageComponent
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
            user: {
                permission:[],
                title:'',
                description:''
                
            },
            ButtonName: "Save Role",
            errorMessage: "",
            classObj: 'arrow-left',
            hides: true,
            hidessucces: true,
            successMessage: "",
           
            EntitiesList: [],
            dangerHide: true,
            selectedArray:''
        };
    },
    mounted() {
        this.getEntitiesAndPermissionList();
    },
    
    methods: {
        getEntitiesAndPermissionList() {
            this.EntitiesList = [];
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
            document.getElementById("role_title_error").textContent = "";
           
            
            var cnt = 0;
            if (!this.user.title) {
                document.getElementById("role_title_error").textContent = "Enter the role  title";
                event.preventDefault();
                cnt =1;
            }
       
            if (this.user.permission.length ==0) {
                document.getElementById("permission_error").textContent = "Please select any one permission";
                event.preventDefault();
                cnt =1;
            }
            

            if (cnt == 0) {
               
                RoleDataService.create(this.user)
                    .then((result) => {
                        console.log(result)
                       
                 
                        this.$router.push({ path: '/user-management/role' });
                       
                    }).catch(error => {

                        this.errorMessage = error.response.data.response_msg;

                        this.dangerToasterShow();


                    })
            }

        },
        selectedId:function(selected){
        
            document.getElementById("permission_error").textContent = '';
        },
        dangerToasterShow() {

            this.dangerHide = false;
            setTimeout(() => this.dangerHide = true, 5000);
        },
        errorClose(){
            this.dangerHide = true;
            }
    }
};
</script>