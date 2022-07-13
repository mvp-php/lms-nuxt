<template>
   <div class="content-main">
        <div class="content pt-20">
            <div class="">
                <div class="braed-crumb-main">
                    <nav role="navigation" aria-label="Breadcrumbs">
                        <ol class="slds-breadcrumb slds-list_horizontal slds-wrap braed-crumb-list">
                            <li class="slds-breadcrumb__item">
                                <a href="#">MANAGE COURSES</a>
                            </li>
                            <li class="slds-breadcrumb__item">
                                <a href="#">CREATE A COURSE</a>
                            </li>
                        </ol>

                    </nav>
                    <div class="steps-section mb-30">
                        <ul class="progressbar steps-list-main">
                            <li class="current"><span>Basic Details</span></li>
                            <li><span>Course Details</span></li>
                            <li><span>Course Preview</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="main-card">

                <div class="create-course">
                    <div class="create-role-main">
                        <div class="slds-form-element custom-grid">
                            <label class="slds-form-element__label custom-label2" for="text-input-id-46">
                                Course title <span class="require-danger">*</span></label>
                            <div class="slds-form-element__control custom-grid-control">
                                <input type="text" id="text-input-id-46 " placeholder="" required=""
                                    class="slds-input custom-grid-input mb-20">
                            </div>
                        </div>
                        <div class="slds-form-element custom-grid">
                            <label class="slds-form-element__label custom-label2" for="textarea-id-01">Course
                                description
                                <span class="require-danger">*</span>
                            </label>
                            <div class="slds-form-element__control custom-grid-textarea-main">
                                <textarea id="textarea-id-01" placeholder=""
                                    class="slds-textarea custom-grid-textarea mb-20"></textarea>
                            </div>
                        </div>
                        <div class="slds-form-element custom-grid">
                            <label class="slds-form-element__label custom-label2" for="textarea-id-01">Course
                                requirements <span class="require-danger">*</span>

                            </label>
                            <div class="slds-form-element__control custom-grid-textarea-main">
                                <textarea id="textarea-id-01" placeholder=""
                                    class="slds-textarea custom-grid-textarea mb-20"></textarea>
                            </div>
                        </div>
                        <div class="slds-form-element custom-grid">
                            <label class="slds-form-element__label custom-label2" for="text-input-id-46">
                                Major category <span class="require-danger">*</span></label>
                            <div class="slds-form-element__control custom-grid-control">
                                <input type="text" id="text-input-id-46 " placeholder="" required=""
                                    class="slds-input custom-grid-input mb-20">
                            </div>
                        </div>
                        <div class="slds-form-element custom-grid">
                            <label class="slds-form-element__label custom-label2" for="text-input-id-46">
                                Sub category <span class="require-danger">*</span></label>
                            <div class="slds-form-element__control custom-grid-control">
                                <input type="text" id="text-input-id-46 " placeholder="" required=""
                                    class="slds-input custom-grid-input mb-20">
                            </div>
                        </div>
                        <div class="slds-form-element custom-grid">
                            <label class="slds-form-element__label custom-label2" for="select-01">Instructor name
                                <span class="require-danger">*</span></label>
                            <div class="slds-form-element__control custom-grid-control ">
                                <div class="slds-select_container cus-select-container">
                                    <select class="slds-select mb-20 custom-grid-input" id="select-01">
                                        <option value=""></option>
                                        <option>Option One</option>
                                        <option>Option Two</option>
                                        <option>Option Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="slds-form-element custom-grid mb-20">
                            <label class="slds-form-element__label custom-label2" for="select-01">Course thumbnail
                                <span class="require-danger">*</span></label>
                            <div class="slds-form-element__control custom-grid-control ">
                                <img src="" alt="">
                            </div>
                        </div>
                        <div class="slds-form-element custom-grid mb-20">
                            <label class="slds-form-element__label custom-label2" for="select-01">Course video preview
                                <span class="require-danger">*</span></label>
                            <div class="slds-form-element__control custom-grid-control ">
                                <img src="" alt="">
                            </div>
                        </div>
                        <fieldset class="slds-form-element check-element-main mb-30">
                            <legend class="slds-form-element__legend slds-form-element__label custom-label2">Certificate
                            </legend>
                            <div class="slds-form-element__control check-element-main">
                                <span class="slds-radio check-element-inner">
                                    <input type="radio" id="yes" value="radio-5" name="default" checked="">
                                    <label class="slds-radio__label" for="yes">
                                        <span class="slds-radio_faux"></span>
                                        <span class="slds-form-element__label">Yes</span>
                                    </label>
                                </span>
                            </div>
                            <div class="slds-form-element__control check-element-main">
                                <span class="slds-radio">
                                    <input type="radio" id="no" value="radio-5" name="default">
                                    <label class="slds-radio__label" for="no">
                                        <span class="slds-radio_faux"></span>
                                        <span class="slds-form-element__label">No</span>
                                    </label>
                                </span>
                            </div>
                        </fieldset>
                        <div class="price-main mb-40">
                            <div class="slds-form-element cus-price-main-inner">
                                <label class="slds-form-element__label custom-label2" for="text-input-id-46">
                                    Course price <span class="require-danger">*</span></label>
                                <div class="sub-categoty-inner">
                                    <div class="slds-form-element__control custom-grid-control">
                                        <input type="text" id="text-input-id-46 " placeholder="" required=""
                                            class="slds-input custom-grid-input ">
                                    </div>
                                    <div class="price-checkbox">
                                        <div class="slds-form-element price-check-inner">
                                            <div class="slds-form-element__control">
                                                <div class="slds-checkbox role-check-main">
                                                    <input type="checkbox" name="options" id="free"
                                                        value="checkbox-unique-id-1" class="role-check">
                                                    <label class="slds-checkbox__label" for="free">
                                                        <span class="slds-checkbox_faux"></span>
                                                        <span class="slds-form-element__label">Free</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="slds-form-element price-check-inner">
                                            <div class="slds-form-element__control">
                                                <div class="slds-checkbox role-check-main">
                                                    <input type="checkbox" name="options" id="Basic"
                                                        value="checkbox-unique-id-1" class="role-check">
                                                    <label class="slds-checkbox__label" for="Basic">
                                                        <span class="slds-checkbox_faux"></span>
                                                        <span class="slds-form-element__label">Basic</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="slds-form-element price-check-inner">
                                            <div class="slds-form-element__control">
                                                <div class="slds-checkbox role-check-main">
                                                    <input type="checkbox" name="options" id="Premium"
                                                        value="checkbox-unique-id-1" class="role-check">
                                                    <label class="slds-checkbox__label" for="Premium">
                                                        <span class="slds-checkbox_faux"></span>
                                                        <span class="slds-form-element__label">Premium</span>
                                                    </label>
                                                </div>nayan.vhits@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="btn-align-end p-0">

                            <a class="slds-button slds-button_brand btnmain blue-btn ml-10"
                                href="manage-content-course-detail.html">Save As Draft</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

</script>