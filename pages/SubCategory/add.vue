<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">Add Sub Category</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <imageComponent :log="require('~/assets/img/svg/arrow-left.svg')" />
                        <nuxt-link to="/category-managment"><span>BACK </span></nuxt-link>
                    </div>
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


        </div>
    </span>
</template>