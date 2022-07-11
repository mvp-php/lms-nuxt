<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">Add Major Category</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <imageComponent :log="require('~/assets/img/svg/arrow-left.svg')" :className="classObj" />
                        <nuxt-link to="/category-managment"><span>BACK </span></nuxt-link>
                    </div>
                    <form @submit="addNewCategory" ref="add_category_submit" enctype="multipart/form-data">
                        <div class="modal-row">
                            <div class="modal-category-col1">
                                <p class="mb-0 user-modal-title">Category Name</p>
                            </div>
                            <div class="modal-record-col2">
                                <div class="slds-form-element__control  ">
                                    <FormTextBoxField v-model="categoryData.categoryName" fieldId="category_name"
                                        placeHolder="Category Name" className="slds-input" ref="category_name" />
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
                                        <FormTextareaField rows="3" v-model="categoryData.categoryDescription" no-resize
                                            placeHolder="Description comes here with a character limit."
                                            className="slds-textarea custom-grid-textarea cat-desc"
                                            fieldId="category_desc" ref="category_description" />

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
                                <Dropzone v-bind:fileUploadSuccessEvent="fileUploadSuccessEvent" modelname="Dropzone"
                                    v-model="categoryData.dropzoneImage" />
                            </div>
                        </div>
                        <div class="btn-align-end p-0">
                            <FormButton type="submit" buttonName="Add Major Category"
                                className="slds-button slds-button_brand btnmain blue-btn" />
                        </div>
                    </form>

                </div>
            </div>


        </div>
           <errorToastr :errorMessage="errorMessage" v-if="!dangerHide" />
    </span>



</template>
<script>
// import Category from '../../components/Category/category.vue';
import Dropzone from '../../components/element/Dropzone.vue';
import FormTextBoxField from '../../components/element/formTextBoxField.vue';
import FormTextareaField from '../../components/element/textArea.vue';
import FormButton from '../../components/element/formButton.vue';
import CategoryService from '../../components/Service/CategoryService';
import imageComponent from '../../components/element/image.vue';
// import successToastrVue from '../../components/element/successToastr.vue';
import errorToastr from '../../components/element/errorToastr.vue';
export default {
    layout: 'frontend',
    name: 'UserForm',
    props: ['theUser'],
    categoryName: null,
    dropzoneImage: null,
    categoryDescription: null,
    newDropzoneImage: null,
    components: {
        // Category,
        Dropzone,
        FormTextBoxField,
        FormTextareaField,
        FormButton,
        imageComponent,
        // successToastrVue,
        errorToastr
    },
    data() {
        return {
            user: {},
            // categoryAllData: [],
            // successMessage: '',
            // newCategoryName: null,
            // newCategoryDescription: null,
            // subCatImage: null,
            // errorMessage: '',
            // hides: true,
            // error_hide: true,
            // DeleteId: '',
            // selectedCategory: null,
               dangerHide: true,
            categoryData: {
                categoryName: '',
                categoryDescription: '',
                dropzoneImage: '',
            }
        }
    },
    methods: {
        fileUploadSuccessEvent(file, response) {
            this.categoryData.dropzoneImage = response;
            this.categoryData.newDropzoneImage = response;
        },
        addNewCategory(e) {
            document.getElementById("catnameeerror").textContent = "";
            document.getElementById("catedescerror").textContent = "";
            console.log(this.categoryData.categoryName);
            if (!this.categoryData.categoryName.trim()) {
                document.getElementById("catnameeerror").textContent = "Please enter Category Name";
                e.preventDefault();
            }
            if (!this.categoryData.categoryDescription.trim()) {
                document.getElementById("catedescerror").textContent = "Please enter Description";
                e.preventDefault();
            }
            if (this.categoryData.categoryName && this.categoryData.categoryDescription) {
                CategoryService.addCategory(this.categoryData).then((result) => {
                    console.log("yes sysysysysy", result);
                    this.$router.push({ path: '/category-managment' });

                }).catch(error => {
                    console.log(error);
                });
                e.preventDefault();
            }
        },
    }

}
</script>