<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">USER MANAGEMENT</p>
            <div class="main-card">
                <div class="tab-main">
                    <div class="btn-align-end">
                        <div class="slds-form-element">
                            <div class="slds-form-element__control search-inp-control">

                                <input type="text" id="text-input-id-50" placeHolder="Search user here…"
                                    class="slds-input search-inp" v-on:keyup="setCanMessageSubmit($event)" />


                            </div>
                        </div>
                        <nuxt-link to="/user-management/user/create-user"
                            class="slds-button slds-button_brand btnmain blue-btn ml-10">
                            Create User</nuxt-link>

                        <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10"
                            href="javascript:void(0)" @click="importCSV()">Import User CSV</button>

                        <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10"
                            href="javascript:void(0)" @click="BulkDelete()" v-if="!bulk_delete_button">Delete
                            User</button>
                    </div>
                    <div class="slds-tabs_default cus-tab-default">

                        <Tabs :tabsList="tablsList" :selectedTabs="this.selectedTab" />

                        <div class="table-main">
                            <userListNew :header="header" :tableData="tableData"
                                :no_record_avalible="no_record_avalible" :bulkUserDeleted="bulkDeleted"
                                :paginateObj="paginate" :searchkeyword="searchkeyword" :pageCount="pageCount" />
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="add-category" ref="addsubcategory">
                <div class="slds-modal__container addcategory-dialog-modal p-0">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">View User Details</h1>
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
                            <div class="group-row-main">
                                <div class="group-col1">
                                    <div class="course-row-manage">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">First Name</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ viewDetails.first_name }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-row-manage">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">Last Name</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ viewDetails.last_name }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-row-manage">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">Email</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ viewDetails.email }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-row-manage">
                                        <div class="course-col1 mt-0" style="margin-top:0px !important">
                                            <div class="course-title-main">
                                                <p class="mb-0">Role</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ viewDetails.title }}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <div class="slds-backdrop " role="presentation" id="add-category-backdrop" ref="addsubcategorybackdrop">
            </div>
            <div class="slds-backdrop " role="presentation" id="edit-category-backdrop" ref="editsubcategorybackdrop">
            </div>
        </div>

        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="add-category" ref="deletedUserModel">
                <div class="slds-modal__container addcategory-dialog-modal p-0">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">Reactive User List</h1>
                        <button
                            class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-modal-record">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.354" height="11.385"
                                viewBox="0 0 11.354 11.385" v-on:click="closeReactiveModel()">
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
                        <ImportUserList :deletedUserList="deletedUserList"></ImportUserList>

                    </div>
                </div>


            </section>
            <div class="slds-backdrop " role="presentation" id="add-category-backdrop" ref="import_user_list_drop">
            </div>
            
        </div>


        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="add-category" ref="importUserModel">
                <div class="slds-modal__container addcategory-dialog-modal p-0">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">Import CSV</h1>
                        <button
                            class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-modal-record">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.354" height="11.385"
                                viewBox="0 0 11.354 11.385" v-on:click="closeViewImportodel()">
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
                    <div class="slds-modal__content slds-p-around_medium modal-content-category"
                        id="modal-content-id-1">
                        <form v-on:submit.prevent="submitData" id="todo-field">
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Import CSV</p>
                                </div>
                                <div class="modal-record-col2">
                                    <div class="slds-form-element__control  ">
                                        <input @change="handleSelectedFiles" id="file" name="file"
                                        ref="fileInput" type="file" class="slds-input" >
                                    <span class="text-danger" id="import_csv_error"
                                        ref="caterror"></span>
                                        
                                    </div>
                                </div>
                            </div>
                           <div class="btn-align-end p-0">
                            <ButtonComponent type="submit"
                                class="slds-button slds-button_brand btnmain blue-btn "
                                :buttonName="ButtonName" />
                           </div>
                            
                        </form>
                    </div>
                </div>


            </section>
            <div class="slds-backdrop " role="presentation" id="add-import-backdrop" ref="addimportuserbackdrop">
            </div>
            
        </div>
        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal"
                id="delete-modal" ref="deleteUserModel">
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
                                <ImageComponent :log="require('~/assets/img/svg/delete.svg')" alt="avtar-header">
                                </ImageComponent>

                            </div>
                            <div class="delete-text">
                                <h3>Are you sure?</h3>
                                <p>Do you really want to delete these user? This
                                    process cannot be undone</p>
                            </div>
                        </div>
                        <div class="delete-modal-footer">
                            <button class="slds-button slds-button_neutral btnmain blue-btn modal-btn"
                                @click="deleteUser()">Yes
                            </button>

                            <button id="close-btn1"
                                class="slds-button slds-button_brand btnmain light-blue-btn modal-btn"
                                @click="closeDeleteModel()">No
                            </button>
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
import userService from "../../../components/Service/UserService";
import userListNew from '../../../components/User/user_list.vue';
import dataTable from '../../../components/element/dataTable.vue';
import ImageComponent from '../../../components/element/image.vue';
import ButtonComponent from '../../../components/element/formButton.vue';
import errorToastr from '../../../components/element/errorToastr.vue';
import successToastr from '../../../components/element/successToastr.vue';
import ImportCSV from '../../../components/User/import_csv.vue';
import  ImportUserList  from '../../../components/User/import_user_list.vue';
import axios from 'axios';
export default {
    layout: 'frontend',
    name: 'UserList',

    components: {
        Tabs,
        dataTable,
        userListNew,
        ImageComponent,
        ButtonComponent,
        errorToastr,
        successToastr,
        ImportCSV,
        ImportUserList
    },

    data() {
        return {
            tablsList: [],
            selectedTab: "user",
            header: [],
            tableData: [],
            no_record_avalible: "",
            viewDetails: [],
            deletedId: '',
            bulk_delete_button: true,
            errorMessage: "",
            errorToastrHide: true,
            successMessage: "",
            successToastrHide: true,
            paginate: '',
            searchkeyword: '',
            pageCount: '',
            csv_file: '',
            ButtonName: "Import",
            deletedUserList: []
        }
    },
    created() {

        this.tablsList = [];
        var tabs = [{ "Key": "User Roles", 'url': 'role' }, { "Key": "User", 'url': 'user' }];
        this.tablsList = tabs;
        this.header = ["", 'Sr No.', 'User Name', 'Email Id', 'Role', 'Created On', 'Action'];
        this.getUserList("", 1);
        this.successM();
    },
    methods: {
        successM() {
            const ISSERVER = typeof window === "undefined";

            if (!ISSERVER) {
                var msh = localStorage.getItem('sucess_msg');
                if (msh) {
                    this.successMessage = msh;
                    this.successToastrShow();
                }

            }


        },
        getPaginatesMain: function (currentPage, value) {
            this.getUserList(value, currentPage);
        },
        setCanMessageSubmit($event) {
            console.log($event.target.value);
            this.getUserList($event.target.value, 1)
        },
        getUserList(value = "", currentPage = "") {
            userService.getUserList(value, currentPage)
                .then(async response => {

                    this.responseList = response.data.data;

                    this.tableData = this.responseList;

                    this.no_record_avalible = response.data.response_msg;
                    this.paginate = response.data.paginate;
                    this.searchkeyword = value;
                    this.pageCount = response.data.data.length;
                }).catch(e => {
                    console.log(e)
                });
        },
        openViewModel: function (id) {

            userService.getViewUserDetail(id).then((result) => {
                this.viewDetails = result.data.data;
            }).catch((err) => {
                console.error(err);
            });
            this.$refs.addsubcategory.classList.add("slds-fade-in-open");
            this.$refs.addsubcategorybackdrop.classList.add("slds-backdrop_open");
        },
        closeViewModel() {
            this.$refs.addsubcategory.classList.remove("slds-fade-in-open");
            this.$refs.addsubcategorybackdrop.classList.remove("slds-backdrop_open");
        },
        userDelete(id) {
            this.$refs.deleteUserModel.classList.add("slds-fade-in-open");
            this.DeleteId = id;
        },
        deleteUser() {
            userService.deleteUser(this.DeleteId).then((result) => {
                this.getUserList("", 1);
                this.closeDeleteModel();
            }).catch((err) => {
                console.error(err);
            });
        },
        closeDeleteModel() {
            this.$refs.deleteUserModel.classList.remove("slds-fade-in-open");
        },
        userEdit(id) {
            this.$router.push('/user-management/user/edit-user/' + id);
        },

        bulkDeleteds: function (id) {
            if (id.length != 0) {
                this.bulk_delete_button = false;
            } else {
                this.bulk_delete_button = true;
            }
            this.DeleteId = id;
        },

        BulkDelete() {
            console.log(this.DeleteId)
            userService.bulkUserDelete(this.DeleteId).then((result) => {
                console.log(result);
                this.getUserList("", 1);
                this.successMessage = result.data.response_msg;
                this.successToastrShow();
            }).catch((err) => {
                console.error(err);
            });
        },
        successToastrShow() {
            this.successToastrHide = false;
            setTimeout(() =>
                this.successToastrHide = true,

                5000);
        },
        errorClose() {
            this.errorToastrHide = true;
        },
        importCSV() {
            this.$refs.importUserModel.classList.add("slds-fade-in-open");
            this.$refs.addimportuserbackdrop.classList.add("slds-fade-in-open");
        },
        handleSelectedFiles(e) {
            this.csv_file = e.target.files[0];
        },
        closeViewImportodel() {
            this.$refs.importUserModel.classList.remove("slds-fade-in-open");
            this.$refs.addimportuserbackdrop.classList.remove("slds-fade-in-open");
            document.getElementById("todo-field").reset();
        },
        submitData() {
            document.getElementById("import_csv_error").textContent = "";
            var cnt = 0;
            console.log(this.csv_file);
            if (!this.csv_file) {
                document.getElementById("import_csv_error").textContent = "Please select csf file";
                cnt = 1;
            }
            if (cnt == 0) {
                let formData = new FormData();
                formData.append('file', this.csv_file);
                let API_ENDPOINT = process.env.baseUrl;
                var user = JSON.parse(localStorage.getItem('userData'));
                axios.post(API_ENDPOINT + '/import-csv',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': 'Bearer ' + user[0].token
                        }
                    }
                ).then((result) => {
                    this.closeViewImportodel();
                    this.deletedUserList = result.data.data;
                    if(result.data.data.length !=0){
                        this.deletedUserModel();
                    }else{
                        this.successMessage = result.data.response_msg;

                        this.successToastrShow();
                    }
                   
                }).catch(error => {

                    this.errorMessage = error.response.data.response_msg;

                    this.dangerToasterShow();


                });

            }
        },
        deletedUserModel() {
            this.$refs.deletedUserModel.classList.add("slds-fade-in-open");
            this.$refs.import_user_list_drop.classList.add("slds-fade-in-open");

        },
        closeReactiveModel(){
             this.$refs.deletedUserModel.classList.remove("slds-fade-in-open");
            this.$refs.import_user_list_drop.classList.remove("slds-fade-in-open");
        },
        bulkDeleted(){
            
        },
         reactiveUserModel:function(id){
            userService.activeUser({id:id}).then((result) => {
                this.getUserList("", 1);
                this.successMessage = result.data.response_msg;
                    this.successToastrShow();
                    document.getElementById(id).remove();
            }).catch((err) => {
                console.error(err);
            });
        },
        successClose:function(){
            this.successToastrHide = true
        }
    }

}
</script>
