<template>
    <div class="table-main">
        <table aria-multiselectable="true"
            class="group-table1 slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols table-main border-0"
            role="grid" aria-label="Example advanced table of Opportunities in actionable mode">
            <thead>
                <tr class="slds-line-height_reset">
                   
                    <th class=" slds-cell_action-mode" scope="col" v-for="item in header"
                        :key="item" :style="[item =='' ? {'width': '3.25rem'} : {}]" v-bind:class = "(item =='')?'slds-text-align_right slds-cell_action-mode':'slds-is-resizable slds-is-sortable slds-cell_action-mode'">
                        <div v-if="item == ''">
                            <span id="column-group-header" class="slds-assistive-text">Choose a
                                row</span>
                            <div class="slds-th__action slds-th__action_form p-0">
                                <div class="slds-checkbox">
                                    <input type="checkbox" name="options" id="checkbox-unique-id-293"
                                        value="checkbox-unique-id-293" tabindex="0"
                                        aria-labelledby="check-select-all-label column-group-header" />
                                    <label class="slds-checkbox__label" for="checkbox-unique-id-293"
                                        id="check-select-all-label">
                                        <span class="slds-checkbox_faux"></span>
                                        <span class="slds-form-element__label slds-assistive-text">Select
                                            All</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div id="dd1" v-else>
                            <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                                <span class="slds-assistive-text">Sort by: </span>
                                <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                    <span class="slds-truncate" title="Name">{{ item }}</span>
                                    <span class="slds-icon_container slds-icon-utility-arrowdown">
                                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                            aria-hidden="true">
                                            <use
                                                xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#arrowdown">
                                            </use>
                                        </svg>
                                    </span>
                                </div>
                            </a>
                            <div class="slds-resizable">
                                <input type="range" aria-label="Name column width"
                                    class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-533"
                                    max="1000" min="20" tabindex="0" />

                            </div>
                        </div>

                    </th>
                </tr>
            </thead>
            <tbody>
               

               <tr aria-selected="false" v-if="tableData.length !=0" class="slds-hint-parent" v-for="(item, key) in tableData" :key="item">

                    <td class="slds-cell_action-mode" role="gridcell" v-for="(column, k) in item" :key="column" v-bind:class = "(column =='')?'slds-text-align_right slds-cell_action-mode':'slds-cell_action-mode'">

                        <div v-if="column === ''">
                            <div class="slds-checkbox cus-check1">
                                <input type="checkbox" name="options" id="checkbox-1" value="checkbox-01" tabindex="0"
                                    aria-labelledby="check-button-label-01 column-group-header" />
                                
                                <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
                                    <span class="slds-checkbox_faux"></span>
                                    <span class="slds-form-element__label slds-assistive-text">Select
                                        item 1</span>
                                </label>
                            </div>
                        </div>
                        <div v-else-if="k == 'id'">
                            {{ key + 1 }}
                        </div>
                        <div v-else>
                            <div class="slds-truncate" title="4">{{ column }}</div>
                        </div>

                    </td>
                    <td class="slds-cell_action-mode" role="gridcell">
                        <div class="slds-truncate" title="30%">
                            <div class="action-main">
                                <ul class="action-ul">
                                    <li> 
                                        <a href="javascript:void(0)" v-on:click="openViewModel(item.id)"
                                            :id='item.id'><img src="../../assets/img/svg/eye-blue.svg" alt="icon"></a>
                                    </li>
                                    <li>
                                        <router-link :to="`/edit-user/${item.id}`" class=""><img
                                                src="../../assets/img/svg/edit.svg" alt="icon"></router-link>
                                    </li>

                                    <li> <a class="" href="#" v-on:click="openDeleteModel(item.id)" ><img src="../../assets/img/svg/delete.svg" alt="icon"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr aria-selected="false" v-if="tableData.length ==0" class="slds-hint-parent">
                     <td class="slds-cell_action-mode" role="gridcell">
                        {{no_record_avalible}}
                     </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Data-table",
    props: ['header','tableData','no_record_avalible'],
    created(){
       
    }
}
</script>