<template>
    <span>
        <div class="content">
            <div class="manage-flex-just mb-20">
                <p class="page-title ">MANAGE SUB CATEGORIES </p>
                <div class="btn-align-end manage-top-button-serach">
                    <div class="slds-form-element">
                        <div class="slds-form-element__control search-inp-control">
                            <input type="text" id="text-input-id-50" placeholder="Search role here…"
                                class="slds-input search-inp" />
                        </div>
                    </div>
                    <a class="slds-button slds-button_brand btnmain blue-btn ml-10" href="javascript:void(0)"
                        id="add-category-btn" v-on:click="openSubCategoryModel()">Add Sub
                        Category</a>
                </div>
            </div>
            <div class="main-card">
                <div class="tab-main">

                    <div class="table-main manage-table-main">
                        <SubCategoryComponent :header="header" :tableData="tableData"
                            :no_record_avalible="no_record_avalible" :paginateObj="paginate"
                            :searchkeyword="searchkeyword" :pageCount="pageCount" />


                    </div>
                    <!-- alerts -->

                    <!-- alerts -->

                </div>

            </div>
        </div>
        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="add-category" ref="addsubcategory">
                <div class="slds-modal__container addcategory-dialog-modal p-0">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">ADD SUB CATEGORY</h1>
                        <button
                            class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-modal-record">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.354" height="11.385"
                                viewBox="0 0 11.354 11.385" v-on:click="closeSubCategoryModel()">
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
                        <form @submit="addSubCategory">
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Select Major Category</p>
                                </div>
                                <div class="modal-record-col2">
                                    <div class="slds-form-element__control  ">
                                        <formSelectField @blur="e => subCategoryData.majorCategory = e.target.value"
                                            v-model="SubCategoryAllData" :category-list="SubCategoryAllData"
                                            class="slds-select mb-20 custom-grid-input" id="select-01" />
                                        <!-- <formSelectField @blur="e => subCategoryData.majorCategory = e.target.value"
                                            :category-list="SubCategoryAllData"
                                            class="slds-select mb-20 custom-grid-input" id="select-01" /> -->
                                        <span class="text-danger" id="majorCategoryerror"
                                            ref="majorCategoryerror"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Sub Category Name</p>
                                </div>
                                <div class="modal-record-col2">
                                    <div class="slds-form-element__control  ">
                                        <FormTextBoxField @blur="e => subCategoryData.subCategoryName = e.target.value"
                                            v-model="subCategoryData.subCategoryName" fieldId="subCategory_name"
                                            placeholder="Enter category" className="slds-input custom-grid-input" />
                                        <span class="text-danger" id="subcatnameeerror" ref="subcatnameeerror"></span>
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
                                            <FormTextareaField rows="3" v-model="subCategoryData.subCategoryDescription"
                                                @blur="e => subCategoryData.subCategoryDescription = e.target.value"
                                                no-resize placeHolder="Description comes here with a character limit."
                                                className="slds-input custom-grid-input" fieldId="subCategory_desc" />
                                            <span class="text-danger" id="subcatedescerror"
                                                ref="subcatedescerror"></span>
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
                                        modelname="Dropzone" v-model="subCategoryData.dropzoneImage" />
                                </div>
                            </div>
                            <div class="btn-align-end p-0">
                                <FormButton type="submit" buttonName="Add Sub Category"
                                    className="slds-button slds-button_brand btnmain blue-btn" />
                            </div>
                        </form>
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
                class="slds-modal " id="add-category" ref="openViewModelNew">
                <div class="slds-modal__container manage-view-dialog-modal">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">SUB CATEGORY DETAILS</h1>
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
                                                <p class="mb-0"> {{ editModelData.title }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-row-manage">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">Major Category title</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ editModelData.majorCategory }} </p>
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

                                            <span v-if="editModelData.image">
                                                <img v-bind:src="editModelData.image" alt="Category Image">
                                            </span>
                                            <span v-else>
                                                <img src="../../assets/img/img-manage.png" alt="Image">
                                            </span>
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


        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="add-category" ref="editcategory">
                <div class="slds-modal__container editcategory-dialog-modal p-0">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">EDIT SUB CATEGORY</h1>
                        <button
                            class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-modal-record">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.354" height="11.385"
                                viewBox="0 0 11.354 11.385" v-on:click="closeEditModel()">
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
                        <form >
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Select Major Category</p>
                                </div>
                                <div class="modal-record-col2">
                                    <div class="slds-form-element__control  ">
                                        <select @blur="e => editData.majorEditCategory = e.target.value"
                                            v-model="editData.parent_category_id"
                                            class="slds-select mb-20 custom-grid-input" id="select-01" disabled>
                                            <option value="">Select Major Category</option>
                                            <option v-for="category in SubCategoryAllData" :key="category"
                                                :value="category.id">
                                                {{ category.title }}
                                            </option>

                                        </select>
                                        <span class="text-danger" id="majorCategoryerror"
                                            ref="majorCategoryerror"></span>

                                    </div>
                                </div>
                            </div>
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Category Name</p>
                                </div>
                                <div class="modal-record-col2">
                                    <div class="slds-form-element__control  ">
                                        <FormTextBoxField v-model="editData.title"
                                            @blur="e => editData.title = e.target.value" fieldId="category_name"
                                            :value="editData.title" placeholder="Enter category"
                                            className="slds-input custom-grid-input" />
                                        <span class="text-danger" id="catnameeerroredit" ref="caterror"></span>
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
                                            {{ editData }}
                                            <FormTextareaField no-resize v-model="editData.description"
                                                :value="editData.description"
                                                @blur="e => editData.description = e.target.value"
                                                placeHolder="Description comes here with a character limit."
                                                className="slds-input custom-grid-input" fieldId="subCategory_desc" />
                                            <span class="text-danger" id="catedescerroredit" ref="caterror"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Upload thumbnail</p>
                                </div>
                                <div class="modal-record-col2">
                                    <Dropzone />
                                </div>
                            </div>
                            <div class="btn-align-end p-0">
                                <FormInputButton ButtonName="Upate Category" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <div class="slds-backdrop " role="presentation" id="add-category-backdrop" ref="addcategorybackdrop"></div>
        </div>

    </span>
</template>
<script>
import successToastrVue from '../../components/element/successToastr.vue';

import SubcategoryService from '../../components/Service/SubcategoryService';
import SubCategoryComponent from '../../components/Subcategory/sub_category.vue';



import Dropzone from '../../components/element/Dropzone.vue';
import FormTextBoxField from '../../components/element/formTextBoxField.vue';
import formSelectField from '../../components/element/formDropdown.vue';
import FormTextareaField from '../../components/element/textArea.vue';
import FormButton from '../../components/element/formButton.vue';

import CategoryService from '../../components/Service/CategoryService';
export default {
    layout: 'frontend',
    name: 'SubCategory',
    props: ['theUser'],

    components: {


        successToastrVue,
        SubCategoryComponent,
        Dropzone,
        FormTextBoxField,
        FormTextareaField,
        FormButton,
        successToastrVue,
        formSelectField

    },
    created() {
        this.header = ["", 'Sr No.', 'Sub Category', 'Major Category', 'Created On', 'Action'];
        this.getAllSubCatData(1, "");
        // this.categoryList();
    },
    data() {
        return {
            user: {},

            successMessage: '',
            hideshow: true,
            hides: true,
            header: [],
            tableData: [],
            no_record_avalible: '',
            paginate: '',
            searchkeyword: "",
            pageCount: "",
            newCategoryName: null,
            newCategoryDescription: null,
            newDropzoneImage: null,
            subCatImage: null,
            DeleteId: '',
            selectedCategory: null,
            SubCategoryAllData:[],
            categoryData: {
                categoryName: '',
                categoryDescription: '',
                dropzoneImage: '',
            },
            editData:[],
            editModelData: {
                newCategoryName: '',
                newCategoryDescription: '',
                newDropzoneImage: '',
            },
            viewModelData: {
                categoryeditName: '',
                categoryeditDescription: '',
                dropzoneeditImage: '',
            },
            subCategoryData: {
                majorCategory: '',
                subCategoryName: '',
                subCategoryDescription: '',
                subCatImage: '',
            },

        }
    },

    methods: {
        fileUploadSuccessEvent(file, response) {
            this.categoryData.dropzoneImage = response;
            this.categoryData.newDropzoneImage = response;
            this.subCategoryData.subCatImage = response;
        },
        getAllSubCatData(page = "", value = "") {

            SubcategoryService.getSubCategoryList(value, page).then(
                function (response) {
                    this.tableData = response.data.data;
                    this.no_record_avalible = response.data.error_msg
                    this.paginate = response.data.paginate;

                    this.pageCount = page;
                    this.searchkeyword = value;
                    
                }.bind(this)
            );

        },
    categoryList() {
            CategoryService.getCategoryList().then(
                function (response) {
                    this.SubCategoryAllData = response.data.data;
                }.bind(this)
            );
        },
        openSubCategoryModel() {
            this.categoryList();
            this.$refs.addsubcategory.classList.add("slds-fade-in-open");
            this.$refs.addsubcategorybackdrop.classList.add("slds-backdrop_open");
        },
        closeSubCategoryModel() {
            this.$refs.addsubcategory.classList.remove("slds-fade-in-open");
            this.$refs.addsubcategorybackdrop.classList.remove("slds-backdrop_open");
        },
        getPaginatesMain:function(currentPage,value){
            this.getAllSubCatData(currentPage,value);
        },
        addSubCategory(e) {
            console.log(this.subCategoryData);
            document.getElementById("majorCategoryerror").textContent = "";
            document.getElementById("subcatnameeerror").textContent = "";
            document.getElementById("subcatedescerror").textContent = "";
            if (!this.subCategoryData.majorCategory) {
                document.getElementById("majorCategoryerror").textContent = "Please select Major Category";
                e.preventDefault();
            }
            if (!this.subCategoryData.subCategoryName) {
                document.getElementById("subcatnameeerror").textContent = "Please enter Category Name";
                e.preventDefault();
            }
            if (!this.subCategoryData.subCategoryDescription) {
                document.getElementById("subcatedescerror").textContent = "Please enter Description";
                e.preventDefault();
            }
            SubcategoryService.saveSubCategory(this.subCategoryData).then((result) => {
                this.getAllSubCatData();
                this.closeSubCategoryModel();
                this.successMessage = "Successfully Inserted";
                this.successToasterShow();
                console.warn(result)
            }).catch((err) => {
                console.log(err)
            });
            e.preventDefault();
        },
        openViewModel(id) {
            SubcategoryService.getEditSubCategory(id).then((result) => {
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
        openEditModel(id) {
            // get Data By Id
            SubcategoryService.getEditSubCategory(id).then((result) => {
                console.log(result,"dsaadsa");
                this.editData = result.data.data;
                this.editModelData.majorCategory = result.data.data.parent_category_id;
                //console.log("editModelData",this.editModelData);
            }).catch((err) => {
                console.error(err);
            });
            this.$refs.editcategory.classList.add("slds-fade-in-open");
        },
        closeEditModel() {
            this.$refs.editcategory.classList.remove("slds-fade-in-open");
            //this.$refs.editcategorybackdrop.classList.remove("slds-backdrop_open");
        },

    }
}
</script>