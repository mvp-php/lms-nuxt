<template>

        <div class="content">
            <p class="page-title mb-20">USER MANAGEMENT</p>
            <div class="main-card">
                <div class="tab-main">
                    <div class="btn-align-end">
                        <div class="slds-form-element">
                            <div class="slds-form-element__control search-inp-control">

                                 <input type="text" id="text-input-id-50" placeHolder="Search user here…"  class="slds-input search-inp" v-on:keyup="setCanMessageSubmit($event)"/>
                            
                                
                            </div>
                        </div>
                        <nuxt-link to="user/create-user" class="slds-button slds-button_brand btnmain blue-btn ml-10" >Create User</nuxt-link>
                        
                        <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10" href="#" >Set Default
                            Roles</button>
                    </div>
                    <div class="slds-tabs_default cus-tab-default">

                        <Tabs :tabsList="tablsList" :selectedTabs="this.selectedTab" />
                        
                        <div class="table-main">
                           <userListNew :header="header" :tableData="tableData" :no_record_avalible="no_record_avalible"/>
                        </div>
                    </div>

                </div>

            </div>
        </div>



</template>

<script>
import Tabs from '../../../components/element/Tabs.vue';
import userService from "../../../components/Service/UserService";
import userListNew from '../../../components/User/user_list.vue';
import dataTable from '../../../components/element/dataTable.vue';

export default {
    layout: 'frontend',
    name: 'UserList',

    components: {
        Tabs,
        dataTable,
        userListNew,

    },
    data() {
        return {
            tablsList: [],
            selectedTab: "user",
            header: [],
            tableData: [],
            no_record_avalible:""
        }
    },
    created() {
        this.tablsList=[];
        var tabs = [{ "Key": "Role", 'url': 'role' }, { "Key": "User", 'url': 'user' }];
        this.tablsList = tabs;
        this.header = ["", 'SrNo.', 'User Name', 'Email Id', 'Role', 'Created On', 'Action'];
        this.getUserList();
    },
    methods: {
        setCanMessageSubmit($event){
            console.log($event.target.value);
            this.getUserList($event.target.value)
        },
        getUserList(value="") {
            userService.getUserList(value)
                .then(async response => {
                    
                    this.responseList = response.data.data;

                    this.tableData = this.responseList;
                   
                    this.no_record_avalible = response.data.error_msg
                }).catch(e => {
                    console.log(e)
                });
        },
        
    }

}
</script>