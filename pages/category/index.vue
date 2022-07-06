<template>
    <div class="content-main">
        <div class="content">
            <div class="manage-flex-just mb-20">
                <p class="page-title ">MANAGE CATEGORIES </p>
                <div class="btn-align-end manage-top-button-serach">
                    <div class="slds-form-element">
                        <div class="slds-form-element__control search-inp-control">
                            <input type="text" id="text-input-id-50" placeholder="Search role here…"
                                class="slds-input search-inp" />
                        </div>
                    </div>
                    <a class="slds-button slds-button_brand btnmain blue-btn ml-10" href="javascript:void(0)"
                        id="add-category-btn" v-on:click="openModel()">Add Major
                        Category</a>
                </div>
            </div>
            <!-- <div class="main-card">
                <div class="tab-main">
                    <div>
                        <div class="table-main manage-table-main">
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="main-card">
                <div class="tab-main">
                    <div>
                        <div class="table-main manage-table-main">
                            <table aria-multiselectable="true"
                                class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols table-main"
                                role="grid" aria-label="Example advanced table of Opportunities in actionable mode">
                                <thead>
                                    <tr class="slds-line-height_reset">
                                        <th class="slds-text-align_right slds-cell_action-mode" scope="col"
                                            style="width:3.25rem">
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
                                                        <span
                                                            class="slds-form-element__label slds-assistive-text">Select
                                                            All</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </th>
                                        <th aria-label="Name" aria-sort="none"
                                            class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                                            scope="col">
                                            <a class="slds-th__action slds-text-link_reset" href="#" role="button"
                                                tabindex="0">
                                                <span class="slds-assistive-text">Sort by: </span>
                                                <div
                                                    class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
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
                                                    class="slds-resizable__input slds-assistive-text"
                                                    id="cell-resize-handle-533" max="1000" min="20" tabindex="0" />
                                            </div>
                                        </th>
                                        <th aria-label="Account Name" aria-sort="none"
                                            class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                                            scope="col">
                                            <a class="slds-th__action slds-text-link_reset" href="#" role="button"
                                                tabindex="0">
                                                <span class="slds-assistive-text">Sort by: </span>
                                                <div
                                                    class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                    <span class="slds-truncate" title="Account Name">
                                                        Category Name</span>
                                                    <span><img src="../../assets/img/svg/filter.svg" alt="filter"
                                                            class="filter"></span>
                                                    <span class="slds-icon_container slds-icon-utility-arrowdown">
                                                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                            aria-hidden="true">
                                                        </svg>
                                                    </span>
                                                </div>
                                            </a>
                                            <div class="slds-resizable">
                                                <input type="range" aria-label="Account Name column width"
                                                    class="slds-resizable__input slds-assistive-text"
                                                    id="cell-resize-handle-534" max="1000" min="20" tabindex="0" />
                                            </div>
                                        </th>
                                        <th aria-label="Account Name" aria-sort="none"
                                            class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                                            scope="col">
                                            <a class="slds-th__action slds-text-link_reset" href="#" role="button"
                                                tabindex="0">
                                                <span class="slds-assistive-text">Sort by: </span>
                                                <div
                                                    class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                    <span class="slds-truncate" title="Account Name">
                                                        Category Description</span>
                                                    <span><img src="../../assets/img/svg/filter.svg" alt="filter"
                                                            class="filter"></span>
                                                    <span class="slds-icon_container slds-icon-utility-arrowdown">
                                                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                            aria-hidden="true">
                                                        </svg>
                                                    </span>
                                                </div>
                                            </a>
                                            <div class="slds-resizable">
                                                <input type="range" aria-label="Account Name column width"
                                                    class="slds-resizable__input slds-assistive-text"
                                                    id="cell-resize-handle-534" max="1000" min="20" tabindex="0" />
                                            </div>
                                        </th>
                                        <th aria-label="Stage" aria-sort="none"
                                            class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                                            scope="col">
                                            <a class="slds-th__action slds-text-link_reset" href="#" role="button"
                                                tabindex="0">
                                                <span class="slds-assistive-text">Sort by: </span>
                                                <div
                                                    class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                    <span class="slds-truncate" title="Stage">Created On</span>
                                                    <span><img src="../../assets/img/svg/filter.svg" alt="filter"
                                                            class="filter"></span>
                                                    <span class="slds-icon_container slds-icon-utility-arrowdown">
                                                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                            aria-hidden="true">
                                                        </svg>
                                                    </span>
                                                </div>
                                            </a>
                                            <div class="slds-resizable">
                                                <input type="range" aria-label="Stage column width"
                                                    class="slds-resizable__input slds-assistive-text"
                                                    id="cell-resize-handle-536" max="1000" min="20" tabindex="0" />
                                            </div>
                                        </th>
                                        <th aria-label="Close Date" aria-sort="none"
                                            class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                                            scope="col">
                                            <a class="slds-th__action slds-text-link_reset" href="#" role="button"
                                                tabindex="0">
                                                <span class="slds-assistive-text">Sort by: </span>
                                                <div
                                                    class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                    <span class="slds-truncate" title="Close Date">Add Sub
                                                        Category</span>
                                                    <span><img src="../../assets/img/svg/filter.svg" alt="filter"
                                                            class="filter"></span>
                                                    <span class="slds-icon_container slds-icon-utility-arrowdown">
                                                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                            aria-hidden="true">
                                                            <use
                                                                xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown">
                                                            </use>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </a>
                                            <div class="slds-resizable">
                                                <input type="range" aria-label="Close Date column width"
                                                    class="slds-resizable__input slds-assistive-text"
                                                    id="cell-resize-handle-535" max="1000" min="20" tabindex="0" />

                                            </div>
                                        </th>
                                        <th aria-label="Confidence" aria-sort="none"
                                            class="slds-is-resizable slds-is-sortable slds-cell_action-mode"
                                            scope="col">
                                            <a class="slds-th__action slds-text-link_reset" href="#" role="button"
                                                tabindex="0">
                                                <span class="slds-assistive-text">Sort by: </span>
                                                <div
                                                    class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
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
                                                    class="slds-resizable__input slds-assistive-text"
                                                    id="cell-resize-handle-537" max="1000" min="20" tabindex="0" />
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(categoryD, index) in categoryAllData" :key="categoryD.id"
                                        aria-selected="false" class="slds-hint-parent">
                                        <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
                                            <div class="slds-checkbox cus-check1">
                                                <input type="checkbox" name="options" id="checkbox-01" tabindex="0"
                                                    :value="categoryD.id"
                                                    aria-labelledby="check-button-label-01 column-group-header" />
                                                <label class="slds-checkbox__label" for="checkbox-01"
                                                    id="check-button-label-01">
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
                                                <a v-on:click="openSubCategoryModel(categoryD.id)"
                                                    href="javascript:void(0)" class="btn btn-table-add"> <img
                                                        src="../../assets/img/svg/plus-add.svg" alt="add-img"
                                                        class="all-img-add"> add</a>
                                            </div>
                                        </td>
                                        <td class="slds-cell_action-mode" role="gridcell">
                                            <div class="slds-truncate" title="">
                                                <div class="slds-truncate" title="30%">
                                                    <div class="action-main manage-content-main">
                                                        <ul class="action-ul">
                                                            <li>
                                                                <a v-on:click="openViewModel(categoryD.id)" title="View"
                                                                    class="view-modal"><img
                                                                        src="../../assets/img/svg/eye-blue.svg"
                                                                        alt="icon"></a>
                                                            </li>
                                                            <li> <a v-on:click="openEditModel(categoryD.id)"
                                                                    title="Edit" class="" href="#"><img
                                                                        src="../../assets/img/svg/edit.svg"
                                                                        alt="icon"></a></li>
                                                            <li> <a v-on:click="openDeleteModel(categoryD.id)" class=""
                                                                    href="#"><img src="../../assets/img/svg/delete.svg"
                                                                        alt="icon"></a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- alerts -->
                        <successToastrVue :success-message="successMessage" id="successMsg" class="successMsg"
                            v-if="!hides" ref="successNewMsg" />
                        <!-- alerts -->
                    </div>
                </div>
            </div>
        </div>
        <!-- add category  -->
        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="add-category" ref="addcategory">
                <div class="slds-modal__container addcategory-dialog-modal p-0">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">ADD CATEGORY</h1>
                        <button
                            class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-modal-record">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.354" height="11.385"
                                viewBox="0 0 11.354 11.385" v-on:click="closeModel()">
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
                        <form @submit="addNewCategory" enctype="multipart/form-data">
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Category Name</p>
                                </div>
                                <div class="modal-record-col2">
                                    <div class="slds-form-element__control  ">
                                        <FormTextBoxField v-model="categoryData.categoryName" fieldId="category_name"
                                            placeHolder="Category Name" className="slds-input" />
                                        <span class="text-danger" id="catnameeerror" ref="caterror"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Category description</p>
                                </div>
                                <div class="modal-record-col2">
                                    <div class="mb-0 user-modal-desc">
                                        <div class="slds-form-element__control ">
                                            <FormTextareaField rows="3" v-model="categoryData.categoryDescription"
                                                no-resize placeHolder="Description comes here with a character limit."
                                                className="slds-textarea custom-grid-textarea cat-desc"
                                                fieldId="category_desc" />

                                            <span class="text-danger" id="catedescerror" ref="caterror"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Upload thumbnail</p>
                                </div>
                                <div class="modal-record-col2">
                                    <Dropzone v-bind:fileUploadSuccessEvent="fileUploadSuccessEvent"
                                        modelname="Dropzone" v-model="categoryData.Dropzone" />
                                </div>
                            </div>
                            <div class="btn-align-end p-0">
                                <FormButton type="submit" buttonName="Add Major Category"
                                    className="slds-button slds-button_brand btnmain blue-btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <div class="slds-backdrop " role="presentation" id="add-category-backdrop" ref="addcategorybackdrop">
            </div>
            <div class="slds-backdrop " role="presentation" id="edit-category-backdrop" ref="editcategorybackdrop">
            </div>
        </div>
        <!-- end add category -->

        <!-- view model -->
        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="add-category" ref="openViewModelNew">
                <div class="slds-modal__container manage-view-dialog-modal">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">CATEGORY DETAILS</h1>
                        <button v-on:click="closeViewModel()"
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
                    <div class="slds-modal__content slds-p-around_medium modal-content-group-view"
                        id="modal-content-id-1">
                        <div class="modal-manage-group-main">
                            <div class="group-row-main">
                                <div class="group-col1">
                                    <div class="course-row-manage">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">Category title</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ editModelData.title }} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-row-manage">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">Category description</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ editModelData.description }}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="group-col2">
                                    <div class="img-section-manage mb-16px">
                                        <div class="img-tag-thumnails">
                                            <img src="../../assets/img/img-manage.png" alt="">
                                        </div>
                                        <div class="title-cources-thumbh">
                                            <p class="mb-0">Course thumbnail</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="slds-backdrop " role="presentation" id="add-category-backdrop" ref="openViewModelNewbackdrop">
            </div>
        </div>
        <!-- end modal -->
    </div>
</template>
<script>
import Category from '../../components/Category/category.vue';
import Dropzone from '../../components/element/Dropzone.vue';
import FormTextBoxField from '../../components/element/formTextBoxField.vue';
import FormTextareaField from '../../components/element/formTextareaField.vue';
import FormButton from '../../components/element/formButton.vue';
import CategoryService from '../../components/Service/CategoryService';
import successToastrVue from '../../components/element/successToastr.vue';
export default {
    layout: 'frontend',
    name: 'UserForm',
    props: ['theUser', 'fileUploadSuccessEvent'],
    categoryName: null,
    Dropzone: null,
    categoryDescription: null,
    components: {
        Category,
        Dropzone,
        FormTextBoxField,
        FormTextareaField,
        FormButton,
        successToastrVue
    },
    data() {
        return {
            user: {},
            categoryAllData: [],
            successMessage: '',
            hideshow: true,
            hides: true,

            categoryData: {
                categoryName: '',
                categoryDescription: '',
                Dropzone: '',
            },
            editModelData: {
                categoryeditName: '',
                categoryeditDescription: '',
                // categoryImage: '',
            },
        }
    },
    methods: {
        fileUploadSuccessEvent(file, response) {
            console.log(response, "Response");


        },
        openModel() {
            this.$refs.addcategory.classList.add("slds-fade-in-open");
            this.$refs.addcategorybackdrop.classList.add("slds-backdrop_open");
        },
        closeModel() {
            this.$refs.addcategory.classList.remove("slds-fade-in-open");
            this.$refs.addcategorybackdrop.classList.remove("slds-backdrop_open");
        },
        successToasterShow() {
            this.hides = false;
            setTimeout(() => this.hides = true, 5000);
        },
        addNewCategory(e) {
            document.getElementById("catnameeerror").textContent = "";
            document.getElementById("catedescerror").textContent = "";
            if (!this.categoryData.categoryName.trim()) {
                document.getElementById("catnameeerror").textContent = "Please enter Category Name";
                e.preventDefault();
            }
            if (!this.categoryData.categoryDescription.trim()) {
                document.getElementById("catedescerror").textContent = "Please enter Description";
                e.preventDefault();
            }
            if (this.categoryData.categoryName && this.categoryData.categoryDescription) {
                console.log(this.categoryData, "CateData");
                CategoryService.addCategory(this.categoryData).then((result) => {
                    console.log("Add New Category", result)
                    this.getAllCatData();
                    this.successMessage = "Successfully Inserted";
                }).catch(error => {
                });
                e.preventDefault();
            }
        },
        getAllCatData() {
            var _this = this;
            CategoryService.getCategoryList().then(
                function (response) {
                    // Handle success
                    this.categoryAllData = response.data.data;
                }.bind(this)
            );

        },
        openViewModel(id) {
            console.log(id)
            CategoryService.getEditDetails(id).then((result) => {
                this.editModelData = result.data.data;
            }).catch((err) => {
                console.error(err);
            });

            this.$refs.openViewModelNew.classList.add("slds-fade-in-open");
            this.$refs.openViewModelNewbackdrop.classList.add("slds-backdrop_open");
        },
        closeViewModel() {
            this.$refs.openViewModelNew.classList.remove("slds-fade-in-open");
            this.$refs.openViewModelNewbackdrop.classList.remove("slds-backdrop_open");
        },
    }, created() {
        this.getAllCatData();
    }
}
</script>