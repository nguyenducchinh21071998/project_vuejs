<template>
  <div class="employee">
    <CRow>
      <CCol sm="12">
        <CCard class="employee-table">
          <CCardBody>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">
                      {{ $t("customer.label_customer_company_name") }}
                    </th>
                    <th scope="col">
                      {{ $t("customer.label_customer_abbreviations") }}
                    </th>
                    <th scope="col">
                      {{ $t("customer.label_customer_investment") }}
                    </th>
                    <th scope="col">
                      {{ $t("customer.label_customer_rank") }}
                    </th>
                    <th scope="col">
                      {{ $t("customer.label_customer_homepage") }}
                    </th>
                    <th scope="col">
                      {{ $t("customer.label_customer_number_employee") }}
                    </th>
                    <th scope="col" style="width: 150px; text-align: center">
                      {{ $t("employee.label_employee_action") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in listCustomers" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>
                      <router-link
                        :to="{
                          name: 'Customer Detail',
                          params: { id: item.id }
                        }"
                        tag="a"
                      >
                        {{ item.company_name }}
                      </router-link>
                    </td>
                    <td>{{ item.abbreviations }}</td>
                    <td>{{ item.investment }} 万円</td>
                    <td>
                      {{ $t("customer.label_customer_rank") }} {{ item.rank }}
                    </td>
                    <td>
                      <a v-bind:href="item.website" target="_blank">{{
                        item.website
                      }}</a>
                    </td>
                    <td>{{ item.number_employee }}</td>
                    <td
                      class="py-2 d-flex justify-content-center"
                      style="width: 180px"
                    >
                      <span class="mr-1"></span>
                      <router-link
                        :to="{ name: 'Customer Edit', params: { id: item.id } }"
                        tag="a"
                      >
                        <CButton
                          color="primary"
                          variant="outline"
                          square
                          size="sm"
                        >
                          {{ $t("button.label_action_edit") }}
                        </CButton>
                      </router-link>
                      <span class="mr-1"></span>
                      <CButton
                        color="danger"
                        variant="outline"
                        square
                        size="sm"
                        @click="deleteCustomer(item)"
                      >
                        {{ $t("button.label_action_delete") }}
                      </CButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CCardBody>
          <CPagination
            :activePage.sync="searchData.paginate.currentPage"
            :pages="searchData.paginate.totalPage"
            @update:activePage="changePage"
            size="sm"
            align="center"
          />
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CustomerIndex",
  data() {
    return {
      listCustomers: [],
      searchData: {
        company_name: "",
        customer_status: "",
        customer_type: "",
        itemsPerPage: 10,
        paginate: {
          from: 0,
          to: 0,
          totalPage: 0,
          path: "",
          currentPage: 0,
          totalRecord: 0,
          perPage: 0
        }
      }
    };
  },
  computed: {
    ...mapGetters({
      customers: "customer/customers",
      listItemsPerPage: "commons/listItemsPerPage",
      pagination: "customer/pagination"
    })
  },
  methods: {
    ...mapActions("customer", ["fetchCustomer", "delete"]),
    ...mapActions("commons", ["getCommonsData"]),

    async fetchCustomerData() {
      await this.fetchCustomer({
        optionPage: this.searchData.itemsPerPage,
        currentPage: this.searchData.paginate.currentPage
      });
      this.searchData.paginate = this.pagination;
      this.listCustomers = this.customers.data;
    },

    async getCommons() {
      await this.getCommonsData();
    },

    async search() {
      await this.fetchCustomerData();
    },

    changePage(page) {
      this.fetchCustomerData(this.searchData.itemsPerPage, page);
    },

    async deleteCustomer(customer) {
      if (
        !window.confirm(
          `${this.$t("commons.label_delete")} ${customer.company_name}`
        )
      ) {
        return;
      }
      try {
        await this.delete(customer.id);
        this.fetchCustomerData();
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.fetchCustomerData();
    this.getCommons();
  }
};
</script>

<style lang="scss" scoped>
.employee {
  margin: -2rem -30px 0 -30px;
  .employee-table {
    margin: 27px 27px 0 30px;
  }
  .select-per-page {
    width: 70px;
  }
  .option-table {
    display: flex;
    justify-content: space-between;
  }
}
</style>
