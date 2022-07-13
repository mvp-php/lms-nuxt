<template>
    
        <table id="imports_user_table" aria-multiselectable="true"
            class="group-table1 slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols table-main border-0 reactive-table-list"
            role="grid" aria-label="Example advanced table of Opportunities in actionable mode">
            <thead>
                <tr class="slds-line-height_reset">

                    <th class=" slds-cell_action-mode" scope="col">Sr No.</th>
                    <th class=" slds-cell_action-mode" scope="col">First Name</th>
                    <th class=" slds-cell_action-mode" scope="col">Last Name</th>
                    <th class=" slds-cell_action-mode" scope="col">Email</th>
                    <th class=" slds-cell_action-mode" scope="col">Action</th>

                </tr>
            </thead>

            <tbody>
<tr aria-selected="false" class="slds-hint-parent" v-for="(item, key) in deletedUserList" :key="item.id"  :id="`${item.id}`">
                    <td class="slds-cell_action-mode slds-pl-20" role="gridcell">{{ key + 1 }}</td>
                    <td class="slds-cell_action-mode" role="gridcell">{{ item.first_name }}</td>
                    <td class="slds-cell_action-mode" role="gridcell">{{ item.last_name }}</td>
                    <td class="slds-cell_action-mode" role="gridcell">{{ item.email }}</td>
                    <td class="slds-cell_action-mode" role="gridcell">
                        <div class="slds-truncate">
                            <div class="action-main">
                                <ul class="action-ul">
                                    <li>
                                        <a class="" title="View" href="javascript:void(0)"
                                            v-on:click="reactiveUser(item.id)">Reactive</a>

                                    </li>

                                </ul>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    

</template>
<script>
export default {
    name: 'import_user_list',
    props: ['deletedUserList'],
    methods:{
        reactiveUser(id){
            this.$parent.reactiveUserModel(id)
        }
    }
}

</script>