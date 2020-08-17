<template>
  <div id="employee-detail">
    <CRow>
      <CCol md="6" sm="12" class="employees-form">
        <div class="text-label">
          <h3>
            {{ $t('customer.label_customer_information') }}
            <router-link
              :to="{ name: 'Customer Edit', params: {id: customer.id, tab:'general-informations' } }"
              tag="a"
            >
              <CIcon name="cilPencil" class="btn-edit" />
            </router-link>
          </h3>
        </div>
        <div class="text-label-content">
          <div class="text-content">
            <label>{{ $t('customer.label_customer_company_name') }}</label>
            <div class="show-text">{{ customer.company_name }}</div>
          </div>
          <div class="text-content">
            <label>{{ $t('customer.label_customer_abbreviations') }}</label>
            <div class="show-text">{{ customer.abbreviations }}</div>
          </div>
          <div class="text-content">
            <label>{{ $t('customer.label_customer_investment') }}</label>
            <div class="show-text">
              {{ customer.investment }}
              <span class="span-label">{{ $t('customer.money') }}</span>
            </div>
          </div>
          <div class="text-content">
            <label>{{ $t('customer.label_customer_shareholder') }}</label>
            <div class="show-text">{{ customer.shareholder }}</div>
          </div>
          <div class="text-content">
            <label>{{ $t('customer.label_customer_rank') }}</label>
            <div class="show-text">{{ $t('customer.label_customer_rank') }} {{ customer.rank }}</div>
          </div>
          <div class="text-content">
            <label>{{ $t('customer.label_customer_homepage') }}</label>
            <div class="show-text">
              <a v-bind:href="customer.website" target="_blank">{{ customer.website }}</a>
            </div>
          </div>
          <div class="text-content">
            <label>{{ $t('customer.label_customer_number_employee') }}</label>
            <div class="show-text">{{ customer.number_employee }}</div>
          </div>
          <div class="text-content">
            <label>{{ $t('customer.label_customer_company_description') }}</label>
            <div class="show-text-name">{{ customer.description }}</div>
          </div>
        </div>
      </CCol>

      <CCol md="6" sm="12" class="employees-form">
        <div class="text-label">
          <h3>
            {{ $t('customer.label_customer_user_information') }}
            <router-link
              :to="{ name: 'Customer Edit', params: {id: customer.id, tab: 'customer-care'} }"
              tag="a"
            >
              <CIcon name="cilPencil" class="btn-edit" />
            </router-link>
          </h3>
        </div>
        <div class="text-label-content">
          <div class="text-label">
            <h5>{{ $t('customer.label_customer') }}</h5>
          </div>
          <div
            class="text-label-infor"
            v-for="item in customer.customer_responsibilities"
            :key="item.id"
          >
            <div v-if="item.type == 1">
              <div class="text-content">
                <label>{{ $t('customer.label_customer_name') }}</label>
                <div class="show-text">{{ item.name }}</div>
              </div>
              <div class="text-content">
                <label>{{ $t('customer.label_customer_location') }}</label>
                <div class="show-text">{{ item.position }}</div>
              </div>
            </div>
          </div>
          <div class="text-label">
            <h5>{{ $t('customer.label_customer_fabbi_japan') }}</h5>
          </div>
          <div
            class="text-label-infor"
            v-for="item_fabbi_japan in customer.customer_responsibilities"
            :key="item_fabbi_japan.id"
          >
            <div v-if="item_fabbi_japan.type == 2">
              <div class="text-content">
                <label>{{ $t('customer.label_customer_name') }}</label>
                <div class="show-text">{{ item_fabbi_japan.name }}</div>
              </div>
            </div>
          </div>
          <div class="text-label">
            <h5>{{ $t('customer.label_customer_fabbi') }}</h5>
          </div>
          <div
            class="text-label-infor"
            v-for="item_fabbi in customer.customer_responsibilities"
            :key="item_fabbi.id"
          >
            <div v-if="item_fabbi.type == 3">
              <div class="text-content">
                <label>{{ $t('customer.label_customer_name') }}</label>
                <div class="show-text">{{ item_fabbi.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </CCol>
      <CCol md="6" sm="12" class="employees-form">
        <div class="text-label">
          <h3>
            {{ $t('customer.label_customer_cost') }}
            <router-link
              :to="{ name: 'Customer Edit', params: {id: customer.id, tab: 'contract' } }"
              tag="a"
            >
              <CIcon name="cilPencil" class="btn-edit" />
            </router-link>
          </h3>
        </div>
        <div class="text-label-content">
          <div class="text-label">
            <h5 class="label-onsite">{{ $t('customer.label_customer_onsite') }}</h5>
          </div>
          <div class="text-label-content">
            <div class="text-label">
              <h5 class="label-text">{{ $t('customer.semi_commissioned_contract') }}</h5>
            </div>
            <div class="text-label-infor">
              <div class="text-content">
                <label>{{ $t('customer.label_onsite_leader') }}</label>
                <div class="show-text">
                  {{ customer.contract_onsite_leader }}
                  <span
                    class="span-label"
                  >{{ $t('customer.money') }}</span>
                </div>
              </div>
              <div class="text-content">
                <label>{{ $t('customer.label_onsite_nember') }}</label>
                <div class="show-text">
                  {{ customer.contract_onsite_member }}
                  <span
                    class="span-label"
                  >{{ $t('customer.money') }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-label-content">
            <div class="text-label">
              <h5 class="label-text">{{ $t('customer.contract') }}</h5>
            </div>
            <div class="text-label-infor">
              <div class="text-content">
                <label>{{ $t('customer.label_onsite_leader') }}</label>
                <div class="show-text">
                  {{ customer.lab_contract_onsite_leader }}
                  <span
                    class="span-label"
                  >{{ $t('customer.money') }}</span>
                </div>
              </div>
              <div class="text-content">
                <label>{{ $t('customer.label_onsite_nember') }}</label>
                <div class="show-text">
                  {{ customer.lab_contract_onsite_member }}
                  <span
                    class="span-label"
                  >{{ $t('customer.money') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CCol>

      <CCol md="6" sm="12" class="employees-form">
        <div class="text-label-content-off">
          <div class="text-label">
            <h5 class="label-onsite">{{ $t('customer.label_customer_offshore') }}</h5>
          </div>
          <div class="text-label-content">
            <div class="text-label">
              <h5 class="label-text">{{ $t('customer.semi_commissioned_contract') }}</h5>
            </div>
            <div class="text-label-infor">
              <div class="text-content">
                <label>{{ $t('customer.label_offshore_brse') }}</label>
                <div class="show-text">
                  {{ customer.contract_offshore_brse }}
                  <span
                    class="span-label"
                  >{{ $t('customer.money') }}</span>
                </div>
              </div>
              <div class="text-content">
                <label>{{ $t('customer.label_offshore_se') }}</label>
                <div class="show-text">
                  {{ customer.contract_offshore_se }}
                  <span
                    class="span-label"
                  >{{ $t('customer.money') }}</span>
                </div>
              </div>
              <div class="text-content">
                <label>{{ $t('customer.label_offshore_tester') }}</label>
                <div class="show-text">
                  {{ customer.contract_offshore_tester }}
                  <span
                    class="span-label"
                  >{{ $t('customer.money') }}</span>
                </div>
              </div>
              <div class="text-content">
                <label>{{ $t('customer.label_offshore_comtor') }}</label>
                <div class="show-text">
                  {{ customer.contract_offshore_comtor }}
                  <span
                    class="span-label"
                  >{{ $t('customer.money') }}</span>
                </div>
              </div>
            </div>
            <div class="text-label-infor">
              <div class="text-content-input">
                <label>
                  <h5 class="label-text">{{ $t('customer.contract') }}</h5>
                </label>
                <div class="show-text-input">
                  {{ customer.lab_contract_offshore }}
                  <span
                    class="span-label"
                  >{{ $t('customer.money') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Customer",
  data() {
    return {};
  },

  created() {
    this.customerDetail();
  },

  computed: {
    ...mapGetters({
      customer: "customer/customer",
    }),
  },

  methods: {
    ...mapActions("customer", ["showDetail"]),

    async customerDetail() {
      let id = await this.$route.params.id;
      if (id) {
        await this.showDetail(id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#employee-detail {
  padding: 20px 100px;
  .employees-form {
    padding: 0 50px;
    margin-bottom: 30px;
    .btn-edit {
      color: #333;
    }
    .text-label-content {
      margin-top: 33px;
      .text-label-infor {
        margin-top: 30px;
        margin-bottom: 30px;
        .text-content-input {
          margin-top: 48px;
          .show-text-input {
            border: 1px solid #fff;
            background-color: #fff;
            border: 1px solid #ccc;
            width: 70%;
            padding: 3px 10px;
            height: 30px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-top: -40px;
            margin-left: 183px;
            .span-label {
              float: right;
            }
          }
        }
      }
      .label-text {
        color: #000;
      }
    }
    .text-label-content-off {
      margin-top: 63px;
      .text-label-infor {
        margin-top: 30px;
        margin-bottom: 30px;
      }
      .label-text {
        color: #000;
      }
    }
    .text-label h3 {
      color: #333;
      font-weight: 600;
      .icon-text-label {
        margin-left: 8px;
      }
    }
    .text-label .label-onsite {
      color: #f98d31;
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
      padding: 3px 10px;
      height: 30px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .span-label {
        float: right;
      }
    }
    .show-text-name {
      border: 1px solid #fff;
      background-color: #fff;
      border: 1px solid #ccc;
      width: 70%;
      padding: 3px 10px;
      height: 120px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
