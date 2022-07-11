<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">Edit Major Category</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <imageComponent :log="require('~/assets/img/svg/arrow-left.svg')" :className="classObj" />
                        <nuxt-link to="/category-managment"><span>BACK </span></nuxt-link>
                    </div>
                    <form @submit="updateCategory">
                        <div class="modal-row">
                            <div class="modal-category-col1">
                                <p class="mb-0 user-modal-title">Category Name</p>
                            </div>
                            <div class="modal-record-col2">
                                <div class="slds-form-element__control  ">
                                    <FormTextBoxField v-model="editModelData.title"
                                        @blur="e => editModelData.title = e.target.value" fieldId="category_name_edit"
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
                                           :bindValue="`${editModelData.description}`"
                                            @blur="e => editModelData.description = e.target.value"
                                            placeHolder="Description comes here with a character limit."
                                            className="slds-textarea custom-grid-textarea cat-desc"
                                            id="description_id" />
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
                                <Dropzone v-bind:fileUploadSuccessEvent="fileUploadSuccessEvent" modelname="image" />
                            </div>
                        </div>
                        <div class="btn-align-end p-0">
                            <FormButton type="submit" buttonName="Update Major Category"
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
import Dropzone from '../../../components/element/Dropzone.vue';
import FormTextBoxField from '../../../components/element/formTextBoxField.vue';
import FormTextareaField from '../../../components/element/textArea.vue';
import FormButton from '../../../components/element/formButton.vue';
import CategoryService from '../../../components/Service/CategoryService';
import imageComponent from '../../../components/element/image.vue';
// import successToastrVue from '../../../components/element/successToastr.vue';
import errorToastr from '../../../components/element/errorToastr.vue';
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
            dangerHide: true,
            editModelData: {
                newCategoryName: '',
                newCategoryDescription: '',
                newDropzoneImage: '',
            },
        }
    },
    methods: {
        fileUploadSuccessEvent(file, response) {
            this.categoryData.dropzoneImage = response;
            this.categoryData.newDropzoneImage = response;
        },
        editData(id) {
            CategoryService.getEditDetails(id).then((result) => {
                this.editModelData = result.data.data;
                console.log(result.data.data);
            }).catch((err) => {
                console.error(err);
            });

        },
        updateCategory(e) {
            // id = this.$route.params.id;

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
                     this.$router.push({ path: '/category-managment' });
                }
            }).catch((err) => {
                console.log(err);
            });
            e.preventDefault();
        },
    }
    , created() {
        this.editData(this.$route.params.id);
    }

}
</script>