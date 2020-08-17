<template>
  <div class="app aside-menu-show">
    <aside class="aside-menu">
      <CRow class="nav nav-tabs p-3" role="tablist">
        <CCol
          sm="4"
          xl="2"
          class="nav-item"
          :class="activeTab == 'general-informations' ? 'active' : null"
          @click="changeTab('general-informations')"
        >
          <span>{{ $t("customer.label_customer_information") }}</span>
        </CCol>
        <CCol
          sm="4"
          xl="2"
          class="nav-item"
          :class="activeTab == 'contract' ? 'active' : null"
          @click="changeTab('contract')"
        >
          <span>{{ $t("customer.label_customer_cost") }}</span>
        </CCol>
        <CCol
          sm="4"
          xl="3"
          class="nav-item"
          :class="activeTab == 'customer-care' ? 'active' : null"
          @click="changeTab('customer-care')"
        >
          <span>{{ $t("customer.label_customer_user_information") }}</span>
        </CCol>
      </CRow>
      <!-- Tab panes-->
      <ValidationObserver v-slot="{ handleSubmit }" ref="formCustomer">
        <CForm @submit.prevent="handleSubmit(createCustomer)">
          <div class="tab-content">
            <div
              class="tab-pane p-3"
              :class="activeTab == 'general-informations' ? 'active' : null"
              role="tabpanel"
            >
              <CRow class="mb-4">
                <CCol sm="12" md="3" lg="3" xl="2">
                  <label>
                    {{ $t("customer.label_customer_company_name") }}
                    <span class="required">(*)</span>
                  </label>
                </CCol>
                <CCol sm="12" md="7" xl="5">
                  <ValidationProvider
                    rules="required|min:3|max:256"
                    v-slot="{ errors }"
                    :name="$t('customer.label_customer_company_name')"
                  >
                    <CInput type="text" v-model="customer.company_name" />
                    <span class="error-required">{{ errors[0] }}</span>
                  </ValidationProvider>
                </CCol>
              </CRow>
              <CRow class="mb-4">
                <CCol sm="12" md="3" lg="3" xl="2">
                  <label>
                    {{ $t("customer.label_customer_abbreviations") }}
                    <span class="required">(*)</span>
                  </label>
                </CCol>
                <CCol sm="12" md="7" xl="5">
                  <ValidationProvider
                    rules="required|max:20"
                    v-slot="{ errors }"
                    :name="$t('customer.label_customer_abbreviations')"
                  >
                    <CInput type="text" v-model="customer.abbreviations" />
                    <span class="error-required">{{ errors[0] }}</span>
                  </ValidationProvider>
                </CCol>
              </CRow>
              <CRow class="mb-4">
                <CCol sm="12" md="3" lg="3" xl="2">
                  <label>
                    {{ $t("customer.label_customer_investment") }}
                    <span class="required">(*)</span>
                  </label>
                </CCol>
                <CCol sm="12" md="7" xl="5">
                  <ValidationProvider
                    rules="required|numeric|max:20"
                    v-slot="{ errors }"
                    :name="$t('customer.label_customer_investment')"
                  >
                    <CInput class type="text" v-model="customer.investment" />
                    <span class="placeholder">{{ $t("customer.money") }}</span>
                    <span class="error-required">{{ errors[0] }}</span>
                  </ValidationProvider>
                </CCol>
              </CRow>
              <CRow class="mb-4">
                <CCol sm="12" md="3" lg="3" xl="2">
                  <label>{{ $t("customer.label_customer_rank") }}</label>
                </CCol>
                <CCol sm="12" md="7" xl="5">
                  <select
                    class="form-control form-group"
                    v-model="customer.rank"
                  >
                    <option
                      v-for="(option, index) in rank"
                      :key="index"
                      :value="option"
                      >{{ $t("customer.label_customer_rank") }}
                      {{ option }}</option
                    >
                  </select>
                </CCol>
              </CRow>
              <CRow class="mb-4">
                <CCol sm="12" md="3" lg="3" xl="2">
                  <label>
                    {{ $t("customer.label_customer_shareholder") }}
                    <span class="required">(*)</span>
                  </label>
                </CCol>
                <CCol sm="12" md="7" xl="5">
                  <ValidationProvider
                    rules="required|max:256"
                    v-slot="{ errors }"
                    :name="$t('customer.label_customer_shareholder')"
                  >
                    <CInput type="text" v-model="customer.shareholder" />
                    <span class="error-required">{{ errors[0] }}</span>
                  </ValidationProvider>
                </CCol>
              </CRow>
              <CRow class="mb-4">
                <CCol sm="12" md="3" lg="3" xl="2">
                  <label>{{ $t("customer.label_customer_homepage") }}</label>
                </CCol>
                <CCol sm="12" md="7" xl="5">
                  <ValidationProvider
                    v-slot="{ errors }"
                    :name="$t('customer.label_customer_homepage')"
                  >
                    <CInput type="text" v-model="customer.website" />
                    <span class="error-required">{{ errors[0] }}</span>
                  </ValidationProvider>
                </CCol>
              </CRow>
              <CRow class="mb-4">
                <CCol sm="12" md="3" lg="3" xl="2">
                  <label>
                    {{ $t("customer.label_customer_number_employee") }}
                    <span class="required">(*)</span>
                  </label>
                </CCol>
                <CCol sm="12" md="7" xl="5">
                  <ValidationProvider
                    rules="required|numeric|max:20"
                    v-slot="{ errors }"
                    :name="$t('customer.label_customer_number_employee')"
                  >
                    <CInput type="text" v-model="customer.number_employee" />
                    <span class="error-required">{{ errors[0] }}</span>
                  </ValidationProvider>
                </CCol>
              </CRow>
              <CRow class="mb-4">
                <CCol sm="12" md="3" lg="3" xl="2">
                  <label>{{
                    $t("customer.label_customer_company_description")
                  }}</label>
                </CCol>
                <CCol sm="12" md="7" xl="5">
                  <textarea
                    class="form-control"
                    rows="5"
                    v-model="customer.description"
                  />
                </CCol>
              </CRow>
            </div>
            <div
              class="tab-pane p-3"
              :class="activeTab == 'contract' ? 'active' : null"
              role="tabpanel"
            >
              <CRow>
                <CCol md="5" sm="12" class="employees-form-onsite">
                  <h5 class="onsite">
                    {{ $t("customer.label_customer_onsite") }}
                  </h5>
                  <h5>{{ $t("customer.semi_commissioned_contract") }}</h5>
                  <CRow class="mb-4">
                    <CCol sm="12" xl="3">
                      <label>{{ $t("customer.label_onsite_leader") }}</label>
                    </CCol>
                    <CCol sm="12" xl="6">
                      <ValidationProvider
                        rules="numeric|max:20"
                        v-slot="{ errors }"
                        :name="$t('customer.label_onsite_leader')"
                      >
                        <CInput
                          type="text"
                          v-model="customer.contract_onsite_leader"
                        />
                        <span class="placeholder">{{
                          $t("customer.money")
                        }}</span>
                        <span class="error-required">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </CCol>
                  </CRow>
                  <CRow class="mb-4">
                    <CCol sm="12" xl="3">
                      <label>{{ $t("customer.label_onsite_nember") }}</label>
                    </CCol>
                    <CCol sm="12" xl="6">
                      <ValidationProvider
                        rules="numeric|max:20"
                        v-slot="{ errors }"
                        :name="$t('customer.label_onsite_nember')"
                      >
                        <CInput
                          type="text"
                          v-model="customer.contract_onsite_member"
                        />
                        <span class="placeholder">{{
                          $t("customer.money")
                        }}</span>
                        <span class="error-required">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </CCol>
                  </CRow>
                  <h5>{{ $t("customer.contract") }}</h5>
                  <CRow class="mb-4">
                    <CCol sm="12" xl="3">
                      <label>{{ $t("customer.label_onsite_leader") }}</label>
                    </CCol>
                    <CCol sm="12" xl="6">
                      <ValidationProvider
                        rules="numeric|max:20"
                        v-slot="{ errors }"
                        :name="$t('customer.label_onsite_leader')"
                      >
                        <CInput
                          type="text"
                          v-model="customer.lab_contract_onsite_leader"
                        />
                        <span class="placeholder">{{
                          $t("customer.money")
                        }}</span>
                        <span class="error-required">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </CCol>
                  </CRow>
                  <CRow class="mb-4">
                    <CCol sm="12" xl="3">
                      <label>{{ $t("customer.label_onsite_nember") }}</label>
                    </CCol>
                    <CCol sm="12" xl="6">
                      <ValidationProvider
                        rules="numeric|max:20"
                        v-slot="{ errors }"
                        :name="$t('customer.label_onsite_nember')"
                      >
                        <CInput
                          type="text"
                          v-model="customer.lab_contract_onsite_member"
                        />
                        <span class="placeholder">{{
                          $t("customer.money")
                        }}</span>
                        <span class="error-required">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </CCol>
                  </CRow>
                </CCol>
                <CCol md="5" sm="12" class="employees-form-offshore">
                  <h5 class="offshore">
                    {{ $t("customer.label_customer_offshore") }}
                  </h5>
                  <h5>{{ $t("customer.semi_commissioned_contract") }}</h5>
                  <CRow class="mb-4">
                    <CCol sm="12" xl="3">
                      <label>{{ $t("customer.label_offshore_brse") }}</label>
                    </CCol>
                    <CCol sm="12" xl="6">
                      <ValidationProvider
                        rules="numeric|max:20"
                        v-slot="{ errors }"
                        :name="$t('customer.label_offshore_brse')"
                      >
                        <CInput
                          class
                          type="text"
                          v-model="customer.contract_offshore_brse"
                        />
                        <span class="placeholder">{{
                          $t("customer.money")
                        }}</span>
                        <span class="error-required">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </CCol>
                  </CRow>
                  <CRow class="mb-4">
                    <CCol sm="12" xl="3">
                      <label>{{ $t("customer.label_offshore_se") }}</label>
                    </CCol>
                    <CCol sm="12" xl="6">
                      <ValidationProvider
                        rules="numeric|max:20"
                        v-slot="{ errors }"
                        :name="$t('customer.label_offshore_se')"
                      >
                        <CInput
                          class
                          type="text"
                          v-model="customer.contract_offshore_se"
                        />
                        <span class="placeholder">{{
                          $t("customer.money")
                        }}</span>
                        <span class="error-required">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </CCol>
                  </CRow>
                  <CRow class="mb-4">
                    <CCol sm="12" xl="3">
                      <label>{{ $t("customer.label_offshore_tester") }}</label>
                    </CCol>
                    <CCol sm="12" xl="6">
                      <ValidationProvider
                        rules="numeric|max:20"
                        v-slot="{ errors }"
                        :name="$t('customer.label_offshore_tester')"
                      >
                        <CInput
                          class
                          type="text"
                          v-model="customer.contract_offshore_tester"
                        />
                        <span class="placeholder">{{
                          $t("customer.money")
                        }}</span>
                        <span class="error-required">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </CCol>
                  </CRow>
                  <CRow class="mb-4">
                    <CCol sm="12" xl="3">
                      <label>{{ $t("customer.label_offshore_comtor") }}</label>
                    </CCol>
                    <CCol sm="12" xl="6">
                      <ValidationProvider
                        rules="numeric|max:20"
                        v-slot="{ errors }"
                        :name="$t('customer.label_offshore_comtor')"
                      >
                        <CInput
                          class
                          type="text"
                          v-model="customer.contract_offshore_comtor"
                        />
                        <span class="placeholder">{{
                          $t("customer.money")
                        }}</span>
                        <span class="error-required">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </CCol>
                  </CRow>
                  <CRow class="mb-4">
                    <CCol sm="12" xl="3">
                      <h5 class="contract">
                        {{ $t("customer.semi_commissioned_contract") }}
                      </h5>
                    </CCol>
                    <CCol sm="12" xl="6">
                      <ValidationProvider
                        rules="numeric|max:20"
                        v-slot="{ errors }"
                        name="請負契約"
                      >
                        <CInput
                          class
                          type="text"
                          v-model="customer.lab_contract_offshore"
                        />
                        <span class="placeholder">{{
                          $t("customer.money")
                        }}</span>
                        <span class="error-required">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </div>
            <div
              class="tab-pane p-3"
              :class="activeTab == 'customer-care' ? 'active' : null"
              role="tabpanel"
            >
              <h5>{{ $t("customer.label_customer") }}</h5>
              <div class="list-customer-information">
                <div
                  v-for="(item, index) in templateMain"
                  :key="index"
                  class="customer-infomation mb-5"
                >
                  <CRow class="mb-4">
                    <CCol sm="12" md="3" lg="3" xl="2">
                      <label>
                        {{ $t("customer.label_customer_name") }}
                        <span class="required">(*)</span>
                      </label>
                    </CCol>
                    <CCol sm="12" md="7" xl="5">
                      <CInput
                        type="text"
                        v-model="customer.responsibilityCustomer[index].name"
                      />
                    </CCol>
                    <span
                      @click="deleteInformation('templateMain', index)"
                      v-if="customer.responsibilityCustomer.length > 1"
                    >
                      <CIcon name="cilTrash" class="delete-btn" />
                    </span>
                  </CRow>
                  <CRow class="md-4">
                    <CCol sm="12" md="3" lg="3" xl="2">
                      <label>
                        {{ $t("customer.label_customer_location") }}
                        <span class="required">(*)</span>
                      </label>
                    </CCol>
                    <CCol sm="12" md="7" xl="5">
                      <CInput
                        type="text"
                        v-model="
                          customer.responsibilityCustomer[index]
                            .employee_position
                        "
                      />
                    </CCol>
                  </CRow>
                </div>
                <div class="btn-add-new">
                  <label @click="addInformation('templateMain')">{{
                    $t("customer.label_add_infor")
                  }}</label>
                </div>
              </div>
              <h5>{{ $t("customer.label_customer_fabbi_japan") }}</h5>
              <div class="customers-care-jp">
                <div v-for="(item, index) in templateJP" :key="index">
                  <CRow class="mb-4">
                    <CCol sm="12" md="3" lg="3" xl="2">
                      <label>
                        {{ $t("customer.label_customer_name") }}
                        <span class="required">(*)</span>
                      </label>
                    </CCol>
                    <CCol sm="12" md="7" xl="5">
                      <CInput
                        type="text"
                        v-model="customer.responsibilityFabbiJapan[index].name"
                      />
                    </CCol>
                    <span
                      @click="deleteInformation('templateJP', index)"
                      v-if="customer.responsibilityFabbiJapan.length > 1"
                    >
                      <CIcon name="cilTrash" class="delete-btn" />
                    </span>
                  </CRow>
                </div>
                <div class="btn-add-new">
                  <label @click="addInformation('templateJP')">{{
                    $t("customer.label_add_infor")
                  }}</label>
                </div>
              </div>
              <h5>{{ $t("customer.label_customer_fabbi") }}</h5>
              <div class="customers-care-hn">
                <div v-for="(item, index) in templateHN" :key="index">
                  <CRow class="mb-4">
                    <CCol sm="12" md="3" lg="3" xl="2">
                      <label>
                        {{ $t("customer.label_customer_name") }}
                        <span class="required">(*)</span>
                      </label>
                    </CCol>
                    <CCol sm="12" md="7" xl="5">
                      <CInput
                        type="text"
                        v-model="customer.responsibilityFabbi[index].name"
                      />
                    </CCol>
                    <span
                      @click="deleteInformation('templateHN', index)"
                      v-if="customer.responsibilityFabbi.length > 1"
                    >
                      <CIcon name="cilTrash" class="delete-btn" />
                    </span>
                  </CRow>
                </div>
                <div class="btn-add-new">
                  <label @click="addInformation('templateHN')">{{
                    $t("customer.label_add_infor")
                  }}</label>
                </div>
              </div>
              <span v-if="!isValid" class="error-required">{{
                $t("customer.validate")
              }}</span>
            </div>
            <CRow>
              <CCol md="12" sm="12" class="button p-3">
                <CButton type="submit" size="sm" class="m-2 btn-submit">{{
                  $t("button.label_action_create")
                }}</CButton>
              </CCol>
            </CRow>
          </div>
        </CForm>
      </ValidationObserver>
    </aside>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Customer",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      activeTab: "general-informations",
      templateMain: [0],
      templateJP: [0],
      templateHN: [0],
      customer: {
        company_name: "",
        abbreviations: "",
        investment: "",
        shareholder: "",
        rank: 1,
        website: "",
        description: "",
        number_employee: "",
        contract_onsite_leader: "",
        contract_onsite_member: "",
        lab_contract_onsite_leader: "",
        lab_contract_onsite_member: "",
        contract_offshore_brse: "",
        contract_offshore_se: "",
        contract_offshore_tester: "",
        contract_offshore_comtor: "",
        lab_contract_offshore: "",
        responsibilityCustomer: [
          {
            name: "",
            employee_position: ""
          }
        ],
        responsibilityFabbiJapan: [{ name: "" }],
        responsibilityFabbi: [{ name: "" }]
      },
      isValid: true
    };
  },

  computed: {
    ...mapGetters({
      gender: "commons/gender",
      rank: "commons/rank"
    })
  },

  methods: {
    ...mapActions("customer", ["create"]),
    validateForm() {
      let forms = [
        ...this.customer.responsibilityCustomer,
        ...this.customer.responsibilityFabbiJapan,
        ...this.customer.responsibilityFabbi
      ];
      this.isValid = true;
      for (let form of forms) {
        for (let field in form) {
          if (!form[field]) {
            this.isValid = false;
            return;
          }
        }
      }
    },
    async createCustomer() {
      this.validateForm();
      let check = await this.$refs.formCustomer.validate();
      if (check && this.isValid) {
        await this.$store
          .dispatch("customer/create", this.customer)
          .then(() => {
            let message = ["Created"];
            message.forEach(message => {
              this.$bvToast.toast(message, {
                title: "",
                noCloseButton: false,
                autoHideDelay: 2000,
                appendToast: true,
                toaster: "b-toaster-top-center",
                variant: "success",
                noFade: false,
                solid: true
              });
            });
            setTimeout(() => {
              this.$router.push({ path: `/customers` });
            }, 1000);
          });
      }
    },
    changeTab(name) {
      this.activeTab = name;
    },
    addInformation(type) {
      this[type].push(this[type].length);
      let size = 0;
      switch (type) {
        case "templateMain":
          size = this.customer.responsibilityCustomer.length;
          this.customer.responsibilityCustomer[size] = {
            name: "",
            employee_position: ""
          };
          break;
        case "templateJP":
          size = this.customer.responsibilityFabbiJapan.length;
          this.customer.responsibilityFabbiJapan[size] = {
            name: ""
          };
          break;
        case "templateHN":
          size = this.customer.responsibilityFabbi.length;
          this.customer.responsibilityFabbi[size] = {
            name: ""
          };
          break;
      }
    },
    deleteInformation(type, index) {
      this[type].splice(index, 1);
      switch (type) {
        case "templateMain":
          this.customer.responsibilityCustomer.splice(index, 1);
          break;
        case "templateJP":
          this.customer.responsibilityFabbiJapan.splice(index, 1);
          break;
        case "templateHN":
          this.customer.responsibilityFabbi.splice(index, 1);
          break;
      }
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.aside-menu {
  margin-left: 150px;
}
.nav-tabs {
  border: none;
  font-size: 1rem;
}
.nav-item {
  color: #858585;
  cursor: pointer;
}
.nav-item.active span {
  color: #032641;
  display: inline-block;
  border-bottom: 2px solid black;
  padding-bottom: 2px;
  font-weight: bold;
}
.form-group {
  margin-bottom: 0;
}
h5 {
  margin: 30px 0;
  font-weight: bold;
}
label {
  color: #385368;
}
.required {
  color: #ff1a1a;
}
.onsite,
.offshore {
  color: #f6922d;
}
.placeholder {
  position: absolute;
  right: 25px;
  color: #b3b3b3;
  top: 7px;
}
.error-required {
  color: #ff1a1a;
}
.contract {
  margin: 0px;
}
.btn-add-new label {
  color: #f6ab5f;
  font-size: 1rem;
  cursor: pointer;
}
.btn-submit {
  background-color: #b4daf3;
  width: 215px;
  height: 40px;
  font-size: 0.75rem;
  font-weight: 700;
}
.delete-btn {
  color: red;
}
@media screen and (max-width: 1300px) {
  .aside-menu {
    margin-left: 30px;
  }
}
</style>
