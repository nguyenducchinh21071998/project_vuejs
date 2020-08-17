<style lang="scss" scoped>
h4 {
  margin-bottom: 16px;
  font-weight: bold;
}

.form-field {
  margin-bottom: 20px;
  clear: both;
}

.create_form {
  .require {
    color: #ff1a1a;
  }
}

.employees {
  margin-bottom: 50px;
}

.employees-form.button {
  margin-top: 40px;
  padding: 0px;
}

.save-info {
  background: #b4daf3;
  font-weight: 600;
  padding: 7px 70px;
  color: #0d2e48;
  margin-right: 20px;
  border: 2px solid #b4daf3;
}

.cancel-employee {
  padding: 7px 45px;
  font-weight: 600;
  background: #f6f6f6;
  border: 2px solid #0d2e48;
  color: #0d2e48;
  max-width: 300px;
}

.employees.container {
  margin-bottom: 40px;

  label {
    font-weight: 600;
    display: inline-block;
    width: 33%;
  }

  .form-group {
    display: inline-block;
    width: 66%;
    margin-bottom: 5px;
  }

  .form-control {
    display: inline-block;
    width: 66%;
    margin-bottom: 0px;
  }

  .form-control-file {
    display: inline-block;
    width: 66%;
    float: right;
    margin: 0px 0px 15px;
  }

  .image-avartar {
    margin-bottom: 15px;
  }

  .error.image {
    color: #ff1a1a;
    width: 100%;
    margin-bottom: 0px;
    display: inline-block;
  }

  .form-field.avatar {
    margin-bottom: 34px;
  }
}

.employees .required {
  color: #ff1a1a;
  margin-left: 34%;
  margin-top: -15px;
}

@media screen and (max-width: 1200px) {
  .container-fluid {
    .employees.container {
      .form-group {
        display: inline-block;
        width: 100%;
      }

      .form-control {
        width: 100%;
      }
    }

    .employees .required {
      margin-left: 0%;
    }

    .employees.container label {
      width: 100%;
    }
  }
}

@media screen and (max-width: 767px) {
  .employees .save-info {
    margin-right: 0px;
  }

  .save-info {
    margin-bottom: 20px;
    width: 100%;
  }

  .cancel-employee {
    width: 100%;
    max-width: 100%;
  }

  .employees-form {
    padding: 0px;
  }
  .employees.container {
    padding: 0px;
  }
}
</style>

<template>
  <CContainer class="employees">
    <ValidationObserver ref="formEmployee" v-slot="{ handleSubmit }">
      <CForm class="create_form" @submit.prevent="handleSubmit(submitEmployee)">
        <CRow>
          <CCol md="6" sm="12" class="employees-form">
            <CCol md="12">
              <h4>{{ $t("label.personal_information") }}</h4>
            </CCol>

            <CCol md="12" class="form-field">
              <label>
                {{ $t("label.id_code") }}
                <span class="require">(*)</span>
              </label>
              <ValidationProvider
                rules="required|numeric|max:4|min_value:1"
                v-slot="{ errors }"
                :name="$t('label.id_code')"
              >
                <CInput type="text" v-model="form.id" maxlength="4" />
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>

            <CCol md="12" class="form-field" v-if="!idEmployee">
              <label>
                {{ $t("label.email") }}
                <span class="require">(*)</span>
              </label>
              <ValidationProvider
                rules="required|email"
                v-slot="{ errors }"
                :name="$t('label.email')"
              >
                <CInput type="email" v-model="form.email" />
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>

            <CCol md="12" class="form-field">
              <label>
                {{ $t("label.full_name") }}
                <span class="require">(*)</span>
              </label>
              <ValidationProvider
                rules="required|min:6|max:64"
                v-slot="{ errors }"
                :name="$t('label.full_name')"
              >
                <CInput v-model="form.name" />

                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>

            <CCol md="12" class="form-field">
              <label>
                {{ $t("label.birthday") }}
                <span class="require">(*)</span>
              </label>
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                :name="$t('label.birthday')"
              >
                <b-form-input
                  type="text"
                  v-model="form.birthday"
                  v-mask="'##/##/####'"
                  placeholder="dd/mm/yyyy"
                />
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.native_country") }}</label>
              <CInput v-model="form.address" />
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.address") }}</label>
              <CInput v-model="form.current_address" />
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.university") }}</label>
              <CInput v-model="form.university_name" />
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.form_of_work") }}</label>
              <select class="form-control" v-model="form.work_type">
                <option value="">{{ $t("employee.select_option") }}</option>
                <option
                  v-for="(option, index) of workType"
                  :key="index"
                  :value="index"
                >
                  {{ option }}
                </option>
              </select>
            </CCol>
          </CCol>

          <CCol md="6" sm="12" class="employees-form">
            <CCol md="12">
              <h4>{{ $t("label.information_business") }}</h4>
            </CCol>

            <CCol md="12" class="form-field">
              <label>
                {{ $t("label.time_start") }}
                <span class="require">(*)</span>
              </label>
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                :name="$t('label.time_start')"
              >
                <!--<CInput type="date" v-model="form.join_date"/>-->
                <b-form-input
                  type="text"
                  v-model="form.join_date"
                  v-mask="'##/##/####'"
                  placeholder="dd/mm/yyyy"
                />
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>

            <CCol md="12" class="form-field">
              <label>
                {{ $t("label.member_companies") }}
                <span class="require">(*)</span>
              </label>
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                :name="$t('label.member_companies')"
              >
                <select class="form-control" v-model="form.company_code">
                  <option value="">{{ $t("employee.select_option") }}</option>
                  <option
                    v-for="(option, key, index) in companies"
                    :key="index"
                    :value="key"
                  >
                    {{ option.name }}
                  </option>
                </select>
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>

            <CCol md="12" class="form-field">
              <label>
                {{ $t("label.office") }}
                <span class="require">(*)</span>
              </label>
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                :name="$t('label.office')"
              >
                <select class="form-control" v-model="form.job_title_code">
                  <option value="">{{ $t("employee.select_option") }}</option>
                  <option
                    v-for="(option, index) in jobTitle"
                    :key="index"
                    :value="option.code"
                    >{{ option.name }}
                  </option>
                </select>
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>

            <CCol md="12" class="form-field">
              <label>
                {{ $t("label.foot") }}
              </label>
              <select class="form-control" v-model="form.foot">
                <option value="">{{ $t("employee.select_option") }}</option>
                <option
                  v-for="(option, index) in foots"
                  :key="index"
                  :value="option.code"
                  >{{ option.name }}
                </option>
              </select>
            </CCol>

            <CCol md="12" class="form-field">
              <label>
                {{ $t("label.division") }}
              </label>
              <select class="form-control" v-model="form.department_code">
                <option value="">{{ $t("employee.select_option") }}</option>
                <option
                  v-for="(option, index) in divisions"
                  :key="index"
                  :value="option.code"
                  >{{ option.name }}
                </option>
              </select>
            </CCol>

            <CCol md="12" class="form-field">
              <label>
                {{ $t("label.position") }}
                <span class="require">(*)</span>
              </label>
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                :name="$t('label.position')"
              >
                <select class="form-control" v-model="form.position_id">
                  <option value="">{{ $t("employee.select_option") }}</option>
                  <option
                    v-for="(option, index) in positions"
                    :key="index"
                    :value="option.id"
                    >{{ option.name }}
                  </option>
                </select>
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.level") }}</label>
              <select class="form-control" v-model="form.level">
                <option value="">{{ $t("employee.select_option") }}</option>
                <option
                  v-for="(option, index) in jobLevel"
                  :key="index"
                  :value="option"
                >
                  {{ $t("commons.label_job_level_" + option) }}
                </option>
              </select>
            </CCol>
            <CCol md="12" class="form-field">
              <label>{{ $t("label.Japanese") }}</label>
              <select class="form-control" v-model="form.japanese_level">
                <option value="">{{ $t("employee.select_option") }}</option>
                <option
                  v-for="(option, index) in japaneseLevel"
                  :key="index"
                  :value="option"
                  >{{ $t("commons.label_japanese_level_" + option) }}
                </option>
              </select>
            </CCol>
          </CCol>
        </CRow>
        <br />
        <br />
        <CRow>
          <CCol md="6" sm="12" class="employees-form">
            <CCol md="12" class="other-infomation">
              <h4>{{ $t("label.other_infomation") }}</h4>
            </CCol>

            <CCol md="12" class="form-field avatar">
              <label>{{ $t("label.personal_photo") }}</label>
              <img
                class="image-avartar"
                :src="
                  image_employee
                    ? image_employee
                    : '/images/no-image-available.jpg'
                "
                width="100"
                height="100"
              />
              <ValidationProvider
                rules="image|size:2000"
                v-slot="{ errors }"
                :name="$t('label.personal_photo')"
              >
                <input
                  type="file"
                  v-on:change="onImageChange"
                  class="form-control-file"
                  id="fileImage"
                />
                <span v-if="!isImage" class="error image required">{{
                  errorFileMessage
                }}</span>
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.gender") }}</label>
              <select class="form-control" v-model="form.gender">
                <option value="">{{ $t("employee.select_option") }}</option>
                <option
                  v-for="(option, index) in gender"
                  :key="index"
                  :value="option"
                >
                  {{ $t("commons.label_gender_name_" + option) }}
                </option>
              </select>
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.nationality") }}</label>
              <CInput v-model="form.nationality" />
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.nation") }}</label>
              <CInput v-model="form.nation" />
            </CCol>

            <CCol md="12" class="form-field">
              <label>
                {{ $t("label.phone_number") }}
                <span class="require">(*)</span>
              </label>
              <ValidationProvider
                rules="required|numeric|min:9|max:14"
                v-slot="{ errors }"
                :name="$t('label.phone_number')"
              >
                <CInput type="text" v-model="form.phone" />
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>

            <CCol md="12" class="form-field">
              <label>
                {{ $t("label.phone_number_family") }}
              </label>
              <ValidationProvider
                rules="numeric|min:9|max:14"
                v-slot="{ errors }"
                :name="$t('label.phone_number_family')"
              >
                <CInput type="text" v-model="form.phone_family" />
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>
          </CCol>

          <CCol md="6" sm="12" class="employees-form">
            <CCol md="12">
              <br />
              <br />
            </CCol>

            <CCol md="12" class="form-field">
              <label>
                {{ $t("label.id_card_pasport") }}
                <span class="require">(*)</span>
              </label>
              <ValidationProvider
                :rules="{
                  required: true,
                  regex: /^[a-zA-Z0-9]+$/,
                  min: 6,
                  max: 32
                }"
                v-slot="{ errors }"
                :name="$t('label.id_card_pasport')"
              >
                <CInput type="text" v-model="form.identity_number" />
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.date_provide") }}</label>
              <!--<CInput type="date" v-model="form.identity_card_date"/>-->
              <b-form-input
                type="text"
                v-model="form.identity_card_date"
                v-mask="'##/##/####'"
                placeholder="dd/mm/yyyy"
              />
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.place_provide") }}</label>
              <CInput v-model="form.identity_card_place" />
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.visa") }}</label>
              <ValidationProvider
                rules="numeric|min:6|max:32"
                v-slot="{ errors }"
                :name="$t('label.visa_card_number')"
              >
                <CInput type="text" v-model="form.visa_card_number" />
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.expiry_date_visa") }}</label>
              <!--<CInput type="date" v-model="form.visa_date_period"/>-->
              <b-form-input
                type="text"
                v-model="form.visa_date_period"
                v-mask="'##/##/####'"
                placeholder="dd/mm/yyyy"
              />
            </CCol>

            <CCol md="12" class="form-field">
              <label>{{ $t("label.link_facebook") }}</label>
              <ValidationProvider
                :rules="{
                  regex: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
                }"
                v-slot="{ errors }"
                :name="$t('label.link_facebook')"
              >
                <CInput v-model="form.link_facebook" />
                <span class="required">{{ errors[0] }}</span>
              </ValidationProvider>
            </CCol>
          </CCol>
        </CRow>
        <CCol md="12" sm="12" class="employees-form button">
          <CCol md="12" class="employees-form">
            <CButton type="submit" class="save-info">{{
              $t("label.save_infomation")
            }}</CButton>
            <CButton
              v-if="!idEmployee"
              class="cancel-employee"
              type="reset"
              @click="cancel"
              >{{ $t("label.cancel_employee") }}
            </CButton>
            <CButton
              v-if="idEmployee"
              class="cancel-employee"
              type="reset"
              @click="cancel"
              >{{ $t("label.cancel_update_employee") }}
            </CButton>
          </CCol>
        </CCol>
      </CForm>
    </ValidationObserver>
  </CContainer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },

  props: {
    jobTitle: {
      type: Array,
      default: () => []
    },
    positions: {
      type: Array,
      default: () => []
    },
    jobLevel: {
      type: Array,
      default: () => []
    },
    companies: {
      type: [Array, Object],
      default: () => {}
    },
    gender: {
      type: Array,
      default: () => []
    },
    japaneseLevel: {
      type: Array,
      default: () => []
    },
    workType: {
      type: [Array, Object],
      default: () => []
    },
    foots: {
      type: Array,
      default: () => []
    },
    divisions: {
      type: Array,
      default: () => []
    },
    informationEmployee: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      errorFileMessage: "",
      imageType: [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/PNG",
        "image/JPG"
      ],
      isImage: true,
      image_employee: "",
      idEmployee: "",
      form: {
        id: "",
        name: "",
        birthday: "",
        birthdayFormat: "",
        current_address: "",
        address: "",
        university_name: "",
        work_type: "",
        join_date: "",
        company_code: "",
        job_title_code: "",
        foot: "",
        department_code: "",
        position_id: "",
        level: "",
        japanese_level: "",
        image_url: "",
        gender: "",
        nationality: "",
        nation: "",
        phone: "",
        phone_family: "",
        identity_number: "",
        identity_card_date: "",
        identity_card_place: "",
        visa_card_number: "",
        visa_date_period: "",
        link_facebook: "",
        email: ""
      }
    };
  },

  async created() {
    this.idEmployee = this.$route.params.id;
  },

  methods: {
    submitEmployee() {
      if (this.errorFileMessage) return;

      let formData = new FormData();
      for (let key in this.form) {
        if (key === "department_code") {
          if (this.form.department_code === "" && this.form.foot !== "") {
            formData.append("department_code", this.form.foot);
          } else {
            formData.append("department_code", this.form.department_code);
          }
        } else if (key === "image_url") {
          if (this.form.image_url !== null && this.form.image_url !== "") {
            formData.append("file_url", this.form[key]);
          }
        } else {
          formData.append(key, this.form[key]);
        }
      }

      if (this.idEmployee) {
        formData.append("old_id", this.idEmployee);
      }

      this.$emit("submitCreateEmployee", formData);
      this.$emit("submitUpdateEmployee", formData);
    },

    // change avartar
    onImageChange(e) {
      let file = e.target.files[0];
      if (
        e.target.files[0] &&
        !this.imageType.includes(e.target.files[0].type)
      ) {
        this.isImage = false;
        this.form.image_url = "";
        this.errorFileMessage = this.$t("error.img_type");
        return;
      }
      // check size file
      if (e.target.files[0] && e.target.files[0].size > 2000000) {
        this.isImage = false;
        this.errorFileMessage = this.$t("error.img_max");
        return;
      }
      //display image is choosen
      if (file !== undefined) {
        this.image_employee = URL.createObjectURL(file);
      }
      this.errorFileMessage = null;
      this.isImage = true;
      this.form.image_url = e.target.files[0];
    },

    cancel() {
      Swal.fire({
        title: this.$t("popup.employee.label_popup_title"),
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: this.$t("popup.employee.label_confirm_button"),
        cancelButtonText: this.$t("popup.employee.label_cancel_button")
      }).then(result => {
        if (result.value) {
          this.$router.push({ path: "/employees" });
        }
      });
    }
  },
  watch: {
    informationEmployee(val) {
      if (!val.id) return this.form;
      for (let key in val) {
        if (key === "image_url") {
          this.image_employee = val[key];
        } else if (val[key] !== null) {
          this.form[key] = val[key];
        }
      }
      if (val.department_code) {
        if (val.department.parent_code === null) {
          this.form.foot = val.department.code;
          this.form.department_code = "";
        } else {
          this.form.department_code = val.department.code;
          this.form.foot = val.department.parent_code;
        }
      }
    }
  }
};
</script>

<style>
.swal2-popup {
  transform: scale(0.7);
}

.swal2-show {
  -webkit-animation: swal2-show 0s;
  animation: swal2-show 0s;
}
</style>
