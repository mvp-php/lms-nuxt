<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">USER MANAGEMENT</p>
            <div class="main-card">
                <div class="tab-main">
                    <div class="btn-align-end">
                        <div class="slds-form-element">
                            <div class="slds-form-element__control search-inp-control">

                                <input type="text" id="text-input-id-50" placeHolder="Search role here…"
                                    class="slds-input search-inp" v-on:keyup="searchText($event)" />


                            </div>
                        </div>
                        <nuxt-link to="role/create-role" class="slds-button slds-button_brand btnmain blue-btn ml-10">
                            Create Role</nuxt-link>

                        <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10" href="#">Set Default
                            Roles</button>
                        <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10"
                            href="javascript:void(0)" @click="BulkDelete()" v-if="!bulk_delete_button">Delete
                            Role</button>
                    </div>
                    <div class="slds-tabs_default cus-tab-default">

                        <Tabs :tabsList="tablsList" :selectedTabs="this.selectedTab" />

                        <div class="table-main">
                            <roles :header="header" :tableData="tableData"
                                :no_record_avalible="no_record_avalible" :paginateObj="paginate" :searchkeyword="searchkeyword" :pageCount="pageCount"/>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="role" ref="addrole">
                <div class="slds-modal__container addcategory-dialog-modal p-0">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">View Role Details</h1>
                        <button
                            class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-modal-record">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.354" height="11.385"
                                viewBox="0 0 11.354 11.385" v-on:click="closeViewModel()">
                                <g id="icons_utility_close-copy" data-name="icons/utility/close-copy"
                                    transform="translate(-0.462 -0.462)">
                                    <path id="Mask"
                                        d="M7.677,5.954l4-4.031a.446.446,0,0,0,0-.646L11.062.631a.446.446,0,0,0-.646,0L6.385,4.662a.3.3,0,0,1-.431,0L1.923.6a.446.446,0,0,0-.646,0l-.646.646a.446.446,0,0,0,0,.646L4.662,5.923a.3.3,0,0,1,0,.431L.6,10.415a.446.446,0,0,0,0,.646l.646.646a.446.446,0,0,0,.646,0L5.923,7.677a.3.3,0,0,1,.431,0l4.031,4.031a.446.446,0,0,0,.646,0l.646-.646a.446.446,0,0,0,0-.646l-4-4.031a.3.3,0,0,1,0-.431Z"
                                        fill="#06529c" />
                                </g>
                            </svg>
                            <span class="slds-assistive-text">Cancel and close</span>
                        </button>
                    </div>
                    <div class="slds-modal__content slds-p-around_medium modal-content-group-view"
                        id="modal-content-id-1">
                        <div class="modal-manage-group-main">
                            <div class="group-row-main ">
                                <div class="group-col1">
                                    <div class="course-row-manage">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">User Role Titlee</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ viewDetails.role_title }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-row-manage">
                                        <div class="course-col1 removeLastChild">
                                            <div class="course-title-main">
                                                <p class="mb-0">No of User</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ viewDetails.no_of_user }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <div class="slds-backdrop " role="presentation" id="role-backdrop" ref="addRoleBackup">
            </div>
            <div class="slds-backdrop " role="presentation" id="edit-role-backdrop" ref="editsubcategorybackdrop">
            </div>
        </div>
        <div class="user-record-modal">
        <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal"
            id="delete-modal" ref="deleteRoleModel">
            <div class="slds-modal__container record-dialog-modal">
                <div class="slds-modal__header modal-main-record-title">
                    <!-- <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">USER ROLE DETAILS</h1> -->
                    <button v-on:click="closeDeleteModel()"
                        class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-modal-record">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.354" height="11.385"
                            viewBox="0 0 11.354 11.385">
                            <g id="icons_utility_close-copy" data-name="icons/utility/close-copy"
                                transform="translate(-0.462 -0.462)">
                                <path id="Mask"
                                    d="M7.677,5.954l4-4.031a.446.446,0,0,0,0-.646L11.062.631a.446.446,0,0,0-.646,0L6.385,4.662a.3.3,0,0,1-.431,0L1.923.6a.446.446,0,0,0-.646,0l-.646.646a.446.446,0,0,0,0,.646L4.662,5.923a.3.3,0,0,1,0,.431L.6,10.415a.446.446,0,0,0,0,.646l.646.646a.446.446,0,0,0,.646,0L5.923,7.677a.3.3,0,0,1,.431,0l4.031,4.031a.446.446,0,0,0,.646,0l.646-.646a.446.446,0,0,0,0-.646l-4-4.031a.3.3,0,0,1,0-.431Z"
                                    fill="#06529c" />
                            </g>
                        </svg>
                        <span class="slds-assistive-text">Cancel and close</span>
                    </button>
                </div>
                <div class="slds-modal__content slds-p-around_medium modal-content-record" id="modal-content-id-1">
                    <div class="delete-modal-main">
                        <div class="del-big-img">
                            <ImageComponent :log="require('~/assets/img/svg/delete.svg')" alt="avtar-header"></ImageComponent>
                            
                        </div>
                        <div class="delete-text">
                            <h3>Are you sure ?</h3>
                            <p>Do you really want to delete these role? This
                                process cannot be undone</p>
                        </div>
                    </div>
                    <div class="delete-modal-footer">
                        <button class="slds-button slds-button_neutral btnmain blue-btn modal-btn"
                            aria-label="Cancel and close" v-on:click="deleteRole()" buttonName="Yes">Yes</button>
                        <button class="slds-button slds-button_brand btnmain light-blue-btn modal-btn"
                            id="close-btn1"
                            v-on:click="closeDeleteModel()">No</button>
                        
                   
                        
       
                    </div>
                </div>
            </div>
        </section>
        <div class="slds-backdrop" role="presentation" id="delete-modal-backdrop">
        </div>
    </div>
    <errorToastr :errorMessage="errorMessage" v-if="!errorToastrHide" />
         <successToastr :successMessage="successMessage" v-if="!successToastrHide" />
    </span>
</template>

<script>
import Tabs from '../../../components/element/Tabs.vue';
import roleService from "../../../components/Service/RoleDataService";
import roles from '../../../components/Role/Role.vue';
import dataTable from '../../../components/element/dataTable.vue';
import ImageComponent from '../../../components/element/image.vue';
import ButtonComponent from '../../../components/element/formButton.vue';
import errorToastr from '../../../components/element/errorToastr.vue';
import successToastr from '../../../components/element/successToastr.vue';
export default {
    layout: 'frontend',
    name: 'UserList',

    components: {
        Tabs,
        dataTable,
        roles,
        ImageComponent,
        ButtonComponent,
        errorToastr,successToastr

    },
    mounted(){
            if (this.$route.params.success) {
            alert("asdadsadasd")
 }
     
        console.log("rere");
    },
    data() {
        return {
            tablsList: [],
            selectedTab: "role",
            header: [],
            tableData: [],
            no_record_avalible: "",
            viewDetails: [],
            bulk_delete_button:true,
            deletedId:"",
            errorMessage: "",
            errorToastrHide: true,
            successMessage: "",
            successToastrHide: true,
            paginate:'',
            searchkeyword:'',
            pageCount:'',
        }
    },
    created() {
        this.tablsList = [];
        var tabs = [{ "Key": "User Roles", 'url': 'role' }, { "Key": "User", 'url': 'user' }];
        this.tablsList = tabs;
        this.header = ["", 'Sr No.', 'Role Title', 'No of User', 'Created On', 'Action'];
        var value = this.$route.query.search;
       
        this.getRoleList(1,"");
        
       
    },
    methods: {
        getPaginatesMain:function(currentPage,value){
            this.getRoleList(currentPage,value);
        },
        
        searchText($event) {
           
            this.getRoleList(1,$event.target.value,)
        },
        
        getRoleList(page="",value = "") {
       
            roleService.getRoleList(page,value)
                .then(async response => {
                 
                    this.tableData = await response.data.data;
                    this.no_record_avalible = response.data.error_msg
                    this.paginate = response.data.paginate;
                    this.pageCount = page;
                    this.searchkeyword = value;
            }).catch(e => {
                console.log(e)
            });
            
        },
        openViewModel: function (id) {
            console.log(id, "vishal");
            roleService.getViewRoleDetail(id).then((result) => {
                this.viewDetails = result.data.data;
            }).catch((err) => {
                this.$router.push('/user-management/role');
            });
            this.$refs.addrole.classList.add("slds-fade-in-open");
            this.$refs.addRoleBackup.classList.add("slds-backdrop_open");
        },
        closeViewModel() {
            this.$refs.addrole.classList.remove("slds-fade-in-open");
            this.$refs.addRoleBackup.classList.remove("slds-backdrop_open");
        },
        userDelete(id) {
            this.$refs.deleteRoleModel.classList.add("slds-fade-in-open");
            this.DeleteId = id;
        },
        deleteRole(){
            roleService.deleteRole(this.DeleteId).then((result) => {
                console.log(result);
             this.getRoleList(1,"");
             this.closeDeleteModel();
            }).catch((err) => {
                console.error(err);
            });
        },
        closeDeleteModel() {
            this.$refs.deleteRoleModel.classList.remove("slds-fade-in-open");
        },
        userEdit(id){
            this.$router.push('/user-management/role/edit-role/'+id);
        },
        bulkDeleteds: function (id) {
            if (id.length != 0) {
                this.bulk_delete_button = false;
            } else {
                this.bulk_delete_button = true;
            }
            this.deletedId = id;
        },
        BulkDelete() {
            roleService.bulkRoleDelete(this.deletedId).then((result) => {
                console.log(result);
                this.getRoleList(1,"");
                this.successMessage = result.data.error_msg;
                this.successToastrShow();
            }).catch((err) => {
                console.error(err);
            });
        },



        successToastrShow: function(){
            console.log("rer");
            this.successToastrHide = false;
            setTimeout(function(){
                    this.successToastrHide = true;
                  console.log("this");
                }, 3000);
               
        },

    }

}
</script>