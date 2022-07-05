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
                        <nuxt-link to="user/create-user" class="slds-button slds-button_brand btnmain blue-btn ml-10">
                            Create User</nuxt-link>

                        <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10" href="#">Set Default
                            Roles</button>
                    </div>
                    <div class="slds-tabs_default cus-tab-default">

                        <Tabs :tabsList="tablsList" :selectedTabs="this.selectedTab" />

                        <div class="table-main">
                            <userListNew :header="header" :tableData="tableData"
                                :no_record_avalible="no_record_avalible" />
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
                                                <p class="mb-0">{{ viewDetails.role_title }}</p>
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
                            <ImageComponent :log="require('~/assets/img/svg/delete.svg')" class="header-profile" alt="avtar-header"></ImageComponent>
                            
                        </div>
                        <div class="delete-text">
                            <h3>Are you sure you want to delete this user?</h3>
                            <p>Do you really want to delete these user? This
                                process cannot be undone</p>
                        </div>
                    </div>
                    <div class="delete-modal-footer">
                        <button class="slds-button slds-button_neutral btnmain blue-btn modal-btn"
                            aria-label="Cancel and close" v-on:click="deleteUser()">Yes</button>
                        <button class="slds-button slds-button_brand btnmain light-blue-btn modal-btn" id="close-btn1"
                            v-on:click="closeDeleteModel()">No </button>
                    </div>
                </div>
            </div>
        </section>
        <div class="slds-backdrop" role="presentation" id="delete-modal-backdrop">
        </div>
    </div>
    </span>
</template>

<script>
import Tabs from '../../../components/element/Tabs.vue';
import userService from "../../../components/Service/UserService";
import userListNew from '../../../components/User/user_list.vue';
import dataTable from '../../../components/element/dataTable.vue';
import ImageComponent from '../../../components/element/image.vue';
export default {
    layout: 'frontend',
    name: 'UserList',

    components: {
        Tabs,
        dataTable,
        userListNew,
        ImageComponent

    },
    data() {
        return {
            tablsList: [],
            selectedTab: "user",
            header: [],
            tableData: [],
            no_record_avalible: "",
            viewDetails: []
        }
    },
    created() {
        this.tablsList = [];
        var tabs = [{ "Key": "Role", 'url': 'role' }, { "Key": "User", 'url': 'user' }];
        this.tablsList = tabs;
        this.header = ["", 'Sr No.', 'User Name', 'Email Id', 'Role', 'Created On', 'Action'];
        this.getUserList();
    },
    methods: {
        setCanMessageSubmit($event) {
            console.log($event.target.value);
            this.getUserList($event.target.value)
        },
        getUserList(value = "") {
            userService.getUserList(value)
                .then(async response => {

                    this.responseList = response.data.data;

                    this.tableData = this.responseList;

                    this.no_record_avalible = response.data.error_msg
                }).catch(e => {
                    console.log(e)
                });
        },
        openViewModel: function (id) {
            console.log(id, "vishal");
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
        deleteUser(){
            userService.deleteUser(this.DeleteId).then((result) => {
                console.log(result);
             this.getUserList();
             this.closeDeleteModel();
            }).catch((err) => {
                console.error(err);
            });
        },
        closeDeleteModel() {
            this.$refs.deleteUserModel.classList.remove("slds-fade-in-open");
        },
        userEdit(id){
            this.$router.push('/user-management/user/edit-user/'+id);
        }
    }

}
</script>