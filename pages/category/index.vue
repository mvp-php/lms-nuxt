<template>
<span>

        <div class="content">
            <div class="manage-flex-just mb-20">
                <p class="page-title ">MANAGE CATEGORIES </p>
                <div class="btn-align-end manage-top-button-serach">
                    <div class="slds-form-element">
                        <div class="slds-form-element__control search-inp-control">
                            <input type="text" id="text-input-id-50" placeholder="Search role here…"
                                class="slds-input search-inp" v-on:keyup="searchText($event)"/>
                        </div>
                    </div>
                    <a class="slds-button slds-button_brand btnmain blue-btn ml-10" href="javascript:void(0)"
                        id="add-category-btn" v-on:click="openModel()">Add Major
                        Category</a>
                        <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10"
                            href="javascript:void(0)" @click="BulkDelete()" v-if="!bulk_delete_button">Delete
                            Category</button>
                </div>
            </div>
            
            <div class="main-card">
                <div class="tab-main">
                    <Category :header="header" :tableData="tableData"
                                :no_record_avalible="no_record_avalible" :paginateObj="paginate" :searchkeyword="searchkeyword" :pageCount="pageCount"/>

                                
                    
                </div>
            </div>
        </div>
        <successToastrVue :success-message="successMessage" id="successMsg" class="successMsg"
                            v-if="!hides" ref="successNewMsg" />
        <!-- add category  -->
        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="add-category" ref="addcategory">
                <div class="slds-modal__container addcategory-dialog-modal p-0" ref="newaddcategory">
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
                        <form @submit="addNewCategory"  ref="add_category_submit" enctype="multipart/form-data">
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Category Name</p>
                                </div>
                                <div class="modal-record-col2">
                                    <div class="slds-form-element__control  ">
                                        <FormTextBoxField v-model="categoryData.categoryName" fieldId="category_name"
                                            placeHolder="Category Name" className="slds-input" ref="category_name"/>
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
                                        modelname="Dropzone" v-model="categoryData.dropzoneImage" />
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
                <div class="slds-modal__container manage-view-dialog-modal slds-modal-category">
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
                                                <p class="mb-0">{{ viewModelData.title }} </p>
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
                                                <p class="mb-0">{{ viewModelData.description }}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            
                                <div class="group-col2">
                                    <div class="img-section-manage mb-16px">
                                        <div class="img-tag-thumnails">
                                            <span v-if="viewModelData.image">
                                                <img v-bind:src="viewModelData.image" alt="Category Image">
                                            </span>
                                            <span v-else>
                                                <img src="../../assets/img/img-manage.png" alt="Image">
                                            </span>

                                        </div>
                                        <!-- <div class="title-cources-thumbh">
                                            <p class="mb-0">Course thumbnail</p>
                                        </div> -->
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


        <!-- edit modal -->
        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="add-category" ref="editcategory">
                <div class="slds-modal__container editcategory-dialog-modal p-0">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">EDIT CATEGORY</h1>
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
                        <form @submit="updateCategory">
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Category Name</p>
                                </div>
                                <div class="modal-record-col2">
                                    <div class="slds-form-element__control  ">
                                        <FormTextBoxField v-model="editModelData.title"
                                            @blur="e => editModelData.title = e.target.value" fieldId="category_name"
                                            :value="editModelData.title" placeHolder="Enter category"
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
                                            <FormTextareaField v-model="editModelData.description"
                                                :value="editModelData.description"
                                                @blur="e => editModelData.description = e.target.value"
                                                placeHolder="Description comes here with a character limit."
                                                className="slds-textarea custom-grid-textarea cat-desc" id="description_id" />
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
                                    <!-- <Dropzone /> -->
                                    <Dropzone v-bind:fileUploadSuccessEvent="fileUploadSuccessEvent"
                                        modelname="image" />
                                </div>
                            </div>
                            <div class="btn-align-end p-0">
                                <FormButton type="submit" buttonName="Update Major Category"
                                    className="slds-button slds-button_brand btnmain blue-btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <div class="slds-backdrop " role="presentation" id="add-category-backdrop" ref="addcategorybackdrop"></div>
        </div>
        <!-- edit modal -->

        <!-- delete mdoel -->
        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal"
                id="delete-modal" ref="deleteCategoryModel">
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
                                <img src="../../assets/img/svg/delete.svg" alt="icon">
                            </div>
                            <div class="delete-text">
                                <h3>Are you sure you want to delete category?</h3>
                                <p>Do you really want to delete these category? This
                                    process cannot be undone</p>
                            </div>
                        </div>
                        <div class="delete-modal-footer">
                            <button class="slds-button slds-button_neutral btnmain blue-btn modal-btn"
                                aria-label="Cancel and close" v-on:click="deleteCategory()">Yes</button>
                            <button class="slds-button slds-button_brand btnmain light-blue-btn modal-btn"
                                id="close-btn1" v-on:click="closeDeleteModel()">No </button>
                        </div>
                    </div>
                </div>
            </section>
            <div class="slds-backdrop" role="presentation" id="delete-modal-backdrop">
            </div>
        </div>
        <!-- delete model -->
        <!-- sub category -->
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
                                        <select @blur="e => subCategoryData.majorCategory = e.target.value"
                                            v-model="selectedCategory" class="slds-select custom-grid-input"
                                            id="select-01">
                                            <option value="">Select Main Category</option>
                                            <option v-for="plan in categoryAllData" :key="plan.id" :value="plan.id">
                                                {{ plan.title }}
                                            </option>
                                        </select>
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
                                            placeHolder="Enter category" className="slds-input custom-grid-input" />
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
        <!-- sub category -->
     <errorToastr :errorMessage="errorMessage" v-if="!error_hide" />
</span>
</template>
<script>
import Category from '../../components/Category/category.vue';
import Dropzone from '../../components/element/Dropzone.vue';
import FormTextBoxField from '../../components/element/formTextBoxField.vue';
import FormTextareaField from '../../components/element/textArea.vue';
import FormButton from '../../components/element/formButton.vue';
import CategoryService from '../../components/Service/CategoryService';
import successToastrVue from '../../components/element/successToastr.vue';
import SubcategoryService from '../../components/Service/SubcategoryService';
import errorToastr from '../../components/element/errorToastr.vue';
export default {
    layout: 'frontend',
    name: 'UserForm',
    props: ['theUser'],
    categoryName: null,
    dropzoneImage: null,
    categoryDescription: null,
    components: {
        Category,
        Dropzone,
        FormTextBoxField,
        FormTextareaField,
        FormButton,
        successToastrVue,
        errorToastr
    },
    data() {
        return {
            user: {},
            categoryAllData: [],
            successMessage: '',
            hideshow: true,
            hides: true,
            error_hide:true,
            errorMessage:'',
            newCategoryName: null,
            newCategoryDescription: null,
            newDropzoneImage: null,
            subCatImage: null,
            DeleteId: '',
            selectedCategory: null,
            header: [],
            tableData: [],
            no_record_avalible: "",
            paginate:'',
            searchkeyword:'',
            pageCount:'',
            bulk_delete_button:true,
            categoryData: {
                categoryName: null,
                categoryDescription: null,
                dropzoneImage: null,
            },
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
    created(){
        this.header = ["", 'Sr No.', 'Category Name', 'Category Description', 'Created On','Add Sub Category','Action'];
        this.getAllCatData(1)
    },
    mounted(){
        
    },
    methods: {
        searchText($event) {
           
            this.getAllCatData(1,$event.target.value,)
        },
        fileUploadSuccessEvent(file, response) {
            console.log(response, "Response");
            this.categoryData.dropzoneImage = response;
            this.categoryData.newDropzoneImage = response;
            this.subCategoryData.subCatImage = response;
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
            if (!this.categoryData.categoryName) {
                document.getElementById("catnameeerror").textContent = "Please enter Category Name";
                e.preventDefault();
            }
            if (!this.categoryData.categoryDescription) {
                document.getElementById("catedescerror").textContent = "Please enter Description";
                e.preventDefault();
            }
            if (this.categoryData.categoryName && this.categoryData.categoryDescription) {
      
                CategoryService.addCategory(this.categoryData).then((result) => {
                    this.getAllCatData();
                    this.successMessage = result.data.error_msg;
                    this.successToasterShow();
                    this.closeModel();
                    
                   
                   this.clearModel();
                    
               
                }).catch(error => {
                    this.errorMessage = error.response.data.error_msg;
                     this.errorToastrShow();
                });
                e.preventDefault();
            }
        },
        errorToastrShow() {
            this.error_hide = false;
            setTimeout(() => this.error_hide = true, 5000);
            },
        clearModel(){
            $(this.$ref.newaddcategory).on('hidden.bs.modal', () => {
            
                this.$ref.category_name.value = null
            })
        },
        getAllCatData(page="",value = "") {
           console.log("vishal");
            CategoryService.getCategoryList(value,page).then(
                function (response) {
                    this.tableData = response.data.data;
                    this.no_record_avalible = response.data.error_msg
                    this.paginate = response.data.paginate;
                  
                    this.pageCount = page;
                    this.searchkeyword = value;
                }.bind(this)
            );

        },
        openViewModel:function(id) {
            console.log(id);
            CategoryService.getEditDetails(id).then((result) => {
                this.viewModelData = result.data.data;
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
        userEdit(id) {
            CategoryService.getEditDetails(id).then((result) => {
                this.editModelData = result.data.data;
                this.$refs.editcategory.classList.add("slds-fade-in-open");
                this.$refs.editcategorybackdrop.classList.add("slds-backdrop_open");
            }).catch((err) => {
                 this.errorMessage = err.response.data.error_msg;
                this.errorToastrShow();
            });

        },
        closeEditModel() {
            this.$refs.editcategory.classList.remove("slds-fade-in-open");
            this.$refs.editcategorybackdrop.classList.remove("slds-backdrop_open");
        },
        updateCategory(e) {
            console.log(this.editModelData);
            document.getElementById("catnameeerroredit").textContent = "";
            document.getElementById("catedescerroredit").textContent = "";
            if (!this.editModelData.title) {
                document.getElementById("catnameeerroredit").textContent = "Please enter Category Name";
                e.preventDefault();
            }
            if (!this.editModelData.description) {
                document.getElementById("catedescerroredit").textContent = "Please enter Description";
                e.preventDefault();
            }
            CategoryService.updateCategory(this.editModelData).then((result) => {
                if (result) {
                    this.closeEditModel();
                    this.getAllCatData();
                    this.successMessage = "Successfully Update";
                    this.successToasterShow();
                }
            }).catch((err) => {
                this.errorMessage = err.response.data.error_msg;
                this.errorToastrShow();
            });
            e.preventDefault();
        },
        getPaginatesMain:function(currentPage,value){
            this.getAllCatData(currentPage,value);
        },
        userDelete(id) {
            this.$refs.deleteCategoryModel.classList.add("slds-fade-in-open");
            this.DeleteId = id;
        },
        closeDeleteModel() {
            this.$refs.deleteCategoryModel.classList.remove("slds-fade-in-open");
        },
        deleteCategory() {
            CategoryService.deleteCategory(this.DeleteId).then((result) => {
                if (result) {
                    this.$router.push({ name: 'category' })
                    this.closeDeleteModel();
                    this.getAllCatData();
                    this.successMessage = "Successfully Deleted";
                    this.successToasterShow();
                }
            }).catch((err) => {
             this.errorMessage = err.response.data.error_msg;
                this.errorToastrShow();
            });
            event.preventDefault();

        },
        mainOpenMainSubCategory(id) {
            CategoryService.getCategoryListNew().then(
                function (response) {
                    this.categoryAllData = response.data.data;

                }.bind(this)

            );
            console.log(id);
            this.selectedCategory = id;


            this.$refs.addsubcategory.classList.add("slds-fade-in-open");
            this.$refs.addsubcategorybackdrop.classList.add("slds-backdrop_open");
        },
        closeSubCategoryModel() {
            this.$refs.addsubcategory.classList.remove("slds-fade-in-open");
            this.$refs.addsubcategorybackdrop.classList.remove("slds-backdrop_open");
        },
        addSubCategory(e) {
            console.log(this.subCategoryData);
            document.getElementById("majorCategoryerror").textContent = "";
            document.getElementById("subcatnameeerror").textContent = "";
            document.getElementById("subcatedescerror").textContent = "";
            var cnt =0;

            if (!this.subCategoryData.majorCategory && this.selectedCategory =='') {
                document.getElementById("majorCategoryerror").textContent = "Please select Major Category";
                e.preventDefault();
                cnt=1;
            }
            if (!this.subCategoryData.subCategoryName) {
                document.getElementById("subcatnameeerror").textContent = "Please enter Category Name";
                e.preventDefault();
                cnt=1;
            }
            if (!this.subCategoryData.subCategoryDescription) {
                document.getElementById("subcatedescerror").textContent = "Please enter Description";
                e.preventDefault();
                cnt =1;
            }

            if(cnt ==0){
                this.subCategoryData.main_id = this.selectedCategory;
                SubcategoryService.saveSubCategory(this.subCategoryData).then((result) => {
               
           
                this.closeSubCategoryModel();
                this.getAllCatData();
                 this.successMessage = result.data.error_msg;
                this.successToasterShow();
                // this.$router.push({ name: 'subcategory-management/' + this.selectedCategory });
            }).catch((err) => {
                 this.errorMessage = err.response.data.error_msg;
                this.errorToastrShow();
            });
            }
            
            e.preventDefault();

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
            CategoryService.bulkCategoryDelete(this.deletedId).then((result) => {
                console.log(result);
                this.getAllCatData(1,"");
                this.successMessage = result.data.error_msg;
                this.successToasterShow();
            }).catch((err) => {
                 this.errorMessage = err.response.data.error_msg;
                this.errorToastrShow();
            });
        },
        
    }
}
</script>