<template>
  <div id="employee-detail">
    <CRow>
      <CCol md="6" sm="12" class="employees-form">
        <div class="text-label">
          <h4>
            {{ $t("employee.label_employee_information") }}
          </h4>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_code") }}</label>
          <div class="show-text">
            {{ employee.id }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_name") }}</label>
          <div class="show-text">
            {{ employee.name }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_birthday") }}</label>
          <div class="show-text">
            {{ employee.birthday | formatDate }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_address") }}</label>
          <div class="show-text">
            {{ employee.address }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_current_residence") }}</label>
          <div class="show-text">
            {{ employee.current_address }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_university") }}</label>
          <div class="show-text">
            {{ employee.university_name }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_work_type") }}</label>
          <div class="show-text">
            {{ workType[employee.work_type] }}
          </div>
        </div>
      </CCol>

      <CCol md="6" sm="12" class="employees-form">
        <div class="text-label">
          <h4>
            {{ $t("employee.label_employee_information_skill") }}
          </h4>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_date_start") }}</label>
          <div class="show-text">
            {{ employee.join_date | formatDate }}
          </div>
        </div>

        <template v-if="employee.resignation_date">
          <div class="text-content">
            <label>{{ $t("employee.label_employee_resignation_date") }}</label>
            <div class="show-text">
              {{ employee.resignation_date | formatDate }}
            </div>
          </div>
        </template>

        <div class="text-content">
          <label>{{ $t("employee.label_company_name") }}</label>
          <div class="show-text">
            {{ employee.company_name }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_job_title") }}</label>
          <div class="show-text">
            {{ employee.job_title_name }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_foot") }}</label>
          <div class="show-text">
            {{ employee.foot }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_division") }}</label>
          <div class="show-text">
            {{ employee.division }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_position") }}</label>
          <div class="show-text">
            {{ employee.position_name }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_level") }}</label>
          <div class="show-text">
            {{
              employee.level
                ? $t("commons.label_job_level_" + employee.level)
                : ""
            }}
          </div>
        </div>
        <div class="text-content">
          <label>{{
            $t("employee.label_employee_language_certificate")
          }}</label>
          <div class="show-text">
            {{
              employee.japanese_level
                ? $t("commons.label_japanese_level_" + employee.japanese_level)
                : ""
            }}
          </div>
        </div>

        <template v-if="employee.resignation_reason">
          <div class="text-content">
            <label>{{
              $t("employee.label_employee_resignation_reason")
            }}</label>
            <div class="show-text text-area">
              {{ employee.resignation_reason }}
            </div>
          </div>
        </template>
      </CCol>
    </CRow>
    <CRow>
      <CCol md="6" sm="12" class="employees-form">
        <div class="text-label">
          <h4>
            {{ $t("employee.label_employee_information_other") }}
          </h4>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_avatar") }}</label>
          <div class="image">
            <img :src="employee.image_url" :alt="employee.name" height="60px" />
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_gender") }}</label>
          <div class="show-text">
            {{
              employee.gender
                ? $t("commons.label_gender_name_" + employee.gender)
                : ""
            }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_nationality") }}</label>
          <div class="show-text">
            {{ employee.nationality }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_nation") }}</label>
          <div class="show-text">
            {{ employee.nation }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_phone") }}</label>
          <div class="show-text">
            {{ employee.phone }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("label.phone_number_family") }}</label>
          <div class="show-text">
            {{ employee.phone_family }}
          </div>
        </div>
      </CCol>

      <CCol md="6" sm="12" class="employees-form">
        <div class="text-label">
          <h4></h4>
        </div>
        <div class="text-content">
          <label>{{ $t("employee.label_employee_identity_card") }}</label>
          <div class="show-text">
            {{ employee.identity_number }}
          </div>
        </div>

        <div class="text-content">
          <label>{{
            $t("employee.label_employee_date_range_identity_card")
          }}</label>
          <div class="show-text">
            {{ employee.identity_card_date | formatDate }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_place_identity_card") }}</label>
          <div class="show-text">
            {{ employee.identity_card_place }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_visa_card") }}</label>
          <div class="show-text">
            {{ employee.visa_card_number }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_visa_card_duration") }}</label>
          <div class="show-text">
            {{ employee.visa_date_period | formatDate }}
          </div>
        </div>

        <div class="text-content">
          <label>{{ $t("employee.label_employee_link_facebook") }}</label>
          <div class="show-text">
            {{ employee.link_facebook }}
          </div>
        </div>
      </CCol>
    </CRow>
    <template v-if="!employee.resignation_date">
      <CRow>
        <CCol md="12" sm="12" class="text-center">
          <router-link
            class="btn btn-success"
            :to="{ path: `/employees/update/${employee.id}` }"
            tag="a"
          >
            <CIcon
              name="cil-pencil"
              style="margin-right: 3px; border: 1px solid #fff;"
            ></CIcon>
            {{ $t("button.label_action_edit") }}
          </router-link>
          <span class="mr-1"></span>
          <CButton
            id="toggle-btn"
            @click="showModal(employee.id)"
            color="danger"
            square
          >
            {{ $t("button.label_action_resignation") }}
          </CButton>
        </CCol>
      </CRow>
    </template>

    <template>
      <b-modal ref="my-modal" hide-footer hide-header>
        <ValidationObserver ref="formResignation" v-slot="{ handleSubmit }">
          <CForm @submit.prevent="handleSubmit(takeResignation)">
            <CRow>
              <CCol md="12" class="form-field">
                <label>{{
                  $t("employee.label_employee_resignation_date")
                }}</label>
                <ValidationProvider
                  rules="required"
                  v-slot="{ errors }"
                  :name="$t('employee.label_employee_resignation_date')"
                >
                  <b-form-input
                    type="text"
                    v-model="formResignation.resignationDate"
                    v-mask="'##/##/####'"
                    placeholder="dd/mm/yyyy"
                  />
                  <span class="required">{{ errors[0] }}</span>
                </ValidationProvider>
              </CCol>
            </CRow>
            <div class="mt-2"></div>
            <CRow>
              <CCol md="12" class="form-field">
                <label>{{
                  $t("employee.label_employee_resignation_reason")
                }}</label>
                <ValidationProvider
                  rules="required|min:10|max:500"
                  v-slot="{ errors }"
                  :name="$t('employee.label_employee_resignation_reason')"
                >
                  <b-form-textarea
                    v-model="formResignation.resignationReason"
                    rows="4"
                  ></b-form-textarea>
                  <span class="required">{{ errors[0] }}</span>
                </ValidationProvider>
              </CCol>
            </CRow>
            <CRow class="d-flex justify-content-end mr-1">
              <b-button type="submit" class="btn btn-success mt-3">{{
                $t("button.label_action_resignation_accept")
              }}</b-button>
              <span class="mr-2"></span>
              <b-button
                class="mt-3"
                variant="outline-danger"
                @click="hideModal"
                >{{ $t("button.label_action_cancel") }}</b-button
              >
            </CRow>
          </CForm>
        </ValidationObserver>
      </b-modal>
    </template>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import "sweetalert2/src/sweetalert2.scss";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  name: "Employee",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      formResignation: {
        employeeId: null,
        resignationDate: null,
        resignationReason: null
      }
    };
  },

  created() {
    this.showDataEmployee();
  },

  computed: {
    ...mapGetters({
      employee: "employee/employee",
      workType: "commons/workType"
    })
  },

  methods: {
    ...mapActions("employee", ["showEmployee", "resignationEmployee"]),
    ...mapActions("layout", ["setLoading"]),

    showModal(employeeId) {
      this.$refs["my-modal"].show();
      this.formResignation.employeeId = employeeId;
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    async showDataEmployee() {
      let empoloyeeId = await this.$route.params.id;
      if (empoloyeeId) {
        await this.showEmployee(empoloyeeId);
      }
    },
    async takeResignation() {
      this.setLoading(true);
      await this.resignationEmployee(this.formResignation)
        .then(() => {
          this.setLoading(false);
          this.hideModal();
          this.showDataEmployee();
          this.formResignation = {};
          this.$toast(
            this.$t("popup.label_popup_resignation_success"),
            null,
            2000,
            "b-toaster-top-center",
            "success"
          );
        })
        .catch(() => {
          this.setLoading(false);
          this.hideModal();
          this.formResignation = {};
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#employee-detail {
  padding: 20px 100px;
  .employees-form {
    padding: 0 50px;
    margin-bottom: 30px;
    .text-label h4 {
      color: #333;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 30px;
      .icon-text-label {
        margin-left: 8px;
      }
    }
    .text-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      .image {
        width: 70%;
      }
      label {
        width: 30%;
        color: #333;
        font-size: 13px;
        font-weight: 600;
      }
    }
    .show-text {
      border: 1px solid #fff;
      background-color: #fff;
      border: 1px solid #ccc;
      width: 70%;
      padding: 0 10px;
      height: 25px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .text-area {
      height: 60px;
    }
    .required {
      color: #dc1313;
      font-size: 13px;
    }
  }
  #toggle-btn {
    height: 37px;
  }
}
</style>
