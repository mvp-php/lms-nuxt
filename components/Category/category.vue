<template>

    <table aria-multiselectable="true"
        class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols table-main" role="grid"
        aria-label="Example advanced table of Opportunities in actionable mode">
        <thead>
            <tr class="slds-line-height_reset">
                <th class="slds-text-align_right slds-cell_action-mode" scope="col" style="width:3.25rem">
                    <span id="column-group-header" class="slds-assistive-text">Choose a
                        row</span>
                    <div class="slds-th__action slds-th__action_form">
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
                </th>
                <th aria-label="Name" aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                    scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span class="slds-truncate" title="Name">Sr No.</span>
                            <span class="slds-icon_container slds-icon-utility-arrowdown">
                                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                    aria-hidden="true">
                                </svg>
                            </span>
                        </div>
                    </a>
                    <div class="slds-resizable">
                        <input type="range" aria-label="Name column width"
                            class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-533" max="1000"
                            min="20" tabindex="0" />
                    </div>
                </th>
                <th aria-label="Account Name" aria-sort="none"
                    class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span class="slds-truncate" title="Account Name">
                                Category Name</span>
                            <span><img src="../../assets/img/svg/filter.svg" alt="filter" class="filter"></span>
                            <span class="slds-icon_container slds-icon-utility-arrowdown">
                                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                    aria-hidden="true">
                                </svg>
                            </span>
                        </div>
                    </a>
                    <div class="slds-resizable">
                        <input type="range" aria-label="Account Name column width"
                            class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-534" max="1000"
                            min="20" tabindex="0" />
                    </div>
                </th>
                <th aria-label="Account Name" aria-sort="none"
                    class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span class="slds-truncate" title="Account Name">
                                Category Description</span>
                            <span><img src="../../assets/img/svg/filter.svg" alt="filter" class="filter"></span>
                            <span class="slds-icon_container slds-icon-utility-arrowdown">
                                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                    aria-hidden="true">
                                </svg>
                            </span>
                        </div>
                    </a>
                    <div class="slds-resizable">
                        <input type="range" aria-label="Account Name column width"
                            class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-534" max="1000"
                            min="20" tabindex="0" />
                    </div>
                </th>
                <th aria-label="Stage" aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                    scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span class="slds-truncate" title="Stage">Created On</span>
                            <span><img src="../../assets/img/svg/filter.svg" alt="filter" class="filter"></span>
                            <span class="slds-icon_container slds-icon-utility-arrowdown">
                                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                    aria-hidden="true">
                                </svg>
                            </span>
                        </div>
                    </a>
                    <div class="slds-resizable">
                        <input type="range" aria-label="Stage column width"
                            class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-536" max="1000"
                            min="20" tabindex="0" />
                    </div>
                </th>
                <th aria-label="Close Date" aria-sort="none"
                    class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span class="slds-truncate" title="Close Date">Add Sub
                                Category</span>
                            <span><img src="../../assets/img/svg/filter.svg" alt="filter" class="filter"></span>
                            <span class="slds-icon_container slds-icon-utility-arrowdown">
                                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                    aria-hidden="true">
                                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown">
                                    </use>
                                </svg>
                            </span>
                        </div>
                    </a>
                    <div class="slds-resizable">
                        <input type="range" aria-label="Close Date column width"
                            class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-535" max="1000"
                            min="20" tabindex="0" />

                    </div>
                </th>
                <th aria-label="Confidence" aria-sort="none"
                    class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span class="slds-truncate" title="Confidence"></span>
                            <span class="slds-icon_container slds-icon-utility-arrowdown">
                                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                    aria-hidden="true">
                                </svg>
                            </span>
                        </div>
                    </a>
                    <div class="slds-resizable">
                        <input type="range" aria-label="Confidence column width"
                            class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-537" max="1000"
                            min="20" tabindex="0" />
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(categoryD, index) in categoryAllData" :key="categoryD.id" aria-selected="false"
                class="slds-hint-parent">
                <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
                    <div class="slds-checkbox cus-check1">
                        <input type="checkbox" name="options" id="checkbox-01" tabindex="0" :value="categoryD.id"
                            aria-labelledby="check-button-label-01 column-group-header" />
                        <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
                            <span class="slds-checkbox_faux"></span>
                            <span class="slds-form-element__label slds-assistive-text">Select
                                item 1</span>
                        </label>
                    </div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="1">{{ index + 1 }}</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="Network security">
                        {{ categoryD.title }}</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="Network security">
                        {{ categoryD.description }}</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="27/01/2022">
                        {{ categoryD.created_at }}
                    </div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="2">
                        <a v-on:click="openSubCategoryModel(categoryD.id)" href="javascript:void(0)"
                            class="btn btn-table-add"> <img src="../../assets/img/svg/plus-add.svg" alt="add-img"
                                class="all-img-add"> add</a>
                    </div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="">
                        <div class="slds-truncate" title="30%">
                            <div class="action-main manage-content-main">
                                <ul class="action-ul">
                                    <li> <a v-on:click="openViewModel(categoryD.id)" title="View" class="view-modal"
                                            href="#"><img src="../../assets/img/svg/eye-blue.svg" alt="icon"></a></li>
                                    <li> <a v-on:click="openEditModel(categoryD.id)" title="Edit" class="" href="#"><img
                                                src="../../assets/img/svg/edit.svg" alt="icon"></a></li>
                                    <li> <a v-on:click="openDeleteModel(categoryD.id)" class="" href="#"><img
                                                src="../../assets/img/svg/delete.svg" alt="icon"></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

</template>

<script>

export default {
    name: 'CategoryComponent',

}
</script>