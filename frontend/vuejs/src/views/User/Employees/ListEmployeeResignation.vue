<template>
  <div class="employee">
    <CCard class="card-table-emloyee">
      <CRow>
        <CCol sm="6">
          <div class="form-group">
            <label>{{ $t("placeholder.label_employee_search_name") }}</label>
            <CInput
              v-model="searchData.name"
              :placeholder="this.$t('placeholder.label_employee_search_name')"
            />
          </div>
        </CCol>
        <CCol sm="6">
          <div class="form-group">
            <label>{{
              $t("placeholder.label_employee_search_work_type")
            }}</label>
            <CInput
              v-model="searchData.work_type"
              :placeholder="
                this.$t('placeholder.label_employee_search_work_type')
              "
            />
          </div>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="4">
          <div class="form-group">
            <label>{{ $t("employee.label_employee_job_title") }}</label>
            <select
              class="form-control"
              v-model="searchData.job_title_code"
              @change="search"
            >
              <option value="0">{{
                $t("placeholder.label_employee_option_search")
              }}</option>
              <option
                :value="item.code"
                v-for="(item, index) in jobTitle"
                :key="index"
                >{{ item.name }}</option
              >
            </select>
          </div>
        </CCol>
        <CCol sm="4">
          <div class="form-group">
            <label>{{ $t("employee.label_company_name") }}</label>
            <select
              class="form-control"
              v-model="searchData.company_code"
              @change="search"
            >
              <option value="0">{{
                $t("placeholder.label_employee_option_search")
              }}</option>
              <option
                :value="key"
                v-for="(item, key, index) in companies"
                :key="index"
                >{{ item.name }}</option
              >
            </select>
          </div>
        </CCol>
        <CCol sm="4">
          <div class="form-group">
            <label>{{
              $t("employee.label_employee_language_certificate")
            }}</label>
            <select
              class="form-control"
              v-model="searchData.japanese_level"
              @change="search"
            >
              <option value="0">{{
                $t("placeholder.label_employee_option_search")
              }}</option>
              <option :value="item" v-for="(item, index) in japaneseLevel" :key="index">{{
                $t(`commons.label_japanese_level_${item}`)
              }}</option>
            </select>
          </div>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="4">
          <div class="form-group">
            <label>{{ $t("employee.label_employee_foot") }}</label>
            <select
              class="form-control"
              v-model="searchData.footCode"
              @change="search"
            >
              <option value="0">{{
                $t("placeholder.label_employee_option_search")
              }}</option>
              <option
                :value="item.code"
                v-for="(item, index) in foots"
                :key="index"
                >{{ item.name }}</option
              >
            </select>
          </div>
        </CCol>
        <CCol sm="4">
          <div class="form-group">
            <label>{{ $t("employee.label_employee_division") }}</label>
            <select
              class="form-control"
              v-model="searchData.divisionCode"
              @change="search"
            >
              <option value="0">{{
                $t("placeholder.label_employee_option_search")
              }}</option>
              <option
                :value="item.code"
                v-show="item.parent_code === searchData.footCode"
                v-for="(item, index) in divisions"
                :key="index"
                >{{ item.name }}</option
              >
            </select>
          </div>
        </CCol>
        <CCol sm="4">
          <div class="form-group">
            <label>{{ $t("employee.label_employee_position") }}</label>
            <select
              class="form-control"
              v-model="searchData.positionId"
              @change="search"
            >
              <option value="0">{{
                $t("placeholder.label_employee_option_search")
              }}</option>
              <option :value="item.id" v-for="(item, index) in positions" :key="index">{{
                item.name
              }}</option>
            </select>
          </div>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="12" class="text-center btn-search">
          <CButton class="btn-search-employee" @click.prevent="search">
            {{ $t("button.label_employee_btn_search") }}
          </CButton>
        </CCol>
      </CRow>
    </CCard>
    <CRow>
      <CCol sm="12">
        <CCard class="employee-table">
          <CCardBody>
            <div class="option-table">
              <div class="form-group">
                <select
                  class="form-control select-per-page"
                  v-model="searchData.itemsPerPage"
                  @click.prevent="fetchEmployeesData"
                >
                  <option v-for="(item, index) in listItemsPerPage" :value="item" :key="index">{{
                    item
                  }}</option>
                </select>
              </div>
              <div class="show-text-table">
                Showing {{ searchData.paginate.from }} to
                {{ searchData.paginate.to }} of
                {{ searchData.paginate.totalRecord }} entries
              </div>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">
                      {{ $t("employee.label_employee_code") }}
                    </th>
                    <th scope="col">
                      {{ $t("employee.label_employee_name") }}
                    </th>
                    <th scope="col">
                      {{ $t("employee.label_employee_date_start") }}
                    </th>
                    <th scope="col">
                      {{ $t("employee.label_employee_resignation_date") }}
                    </th>
                    <th scope="col">{{ $t("employee.label_company_name") }}</th>
                    <th scope="col">
                      {{ $t("employee.label_employee_job_title") }}
                    </th>
                    <th scope="col">
                      {{ $t("employee.label_employee_foot") }}
                    </th>
                    <th scope="col">
                      {{ $t("employee.label_employee_division") }}
                    </th>
                    <th scope="col">
                      {{ $t("employee.label_employee_position") }}
                    </th>
                    <th scope="col">
                      {{ $t("employee.label_employee_level") }}
                    </th>
                    <th scope="col">
                      {{ $t("employee.label_employee_work_type") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="employees.data && employees.data.length > 0">
                    <tr v-for="(item, index) in employees.data" :key="index">
                      <th scope="row">{{ index + 1 }}</th>
                      <td>{{ item.id }}</td>
                      <td>
                        <router-link
                          :to="{ name: 'Employee', params: { id: item.id } }"
                          tag="a"
                          >{{ item.name }}</router-link
                        >
                      </td>
                      <td>{{ item.join_date | formatDate }}</td>
                      <td>{{ item.resignation_date | formatDate }}</td>
                      <td>{{ item.company_name }}</td>
                      <td>{{ item.job_title_name }}</td>
                      <td>{{ item.foot }}</td>
                      <td>{{ item.division }}</td>
                      <td>{{ item.position_name }}</td>
                      <td>
                        {{
                          item.level
                            ? $t("commons.label_job_level_" + item.level)
                            : ""
                        }}
                      </td>
                      <td>{{ item.work_type }}</td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr>
                      <td colspan="12" class="text-center">
                        {{ $t("table.label_data_not_found") }}
                      </td>
                    </tr>
                  </template>
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
  name: "EmployeeResignationIndex",
  data() {
    return {
      searchData: {
        name: "",
        work_type: "",
        job_title_code: 0,
        company_code: 0,
        japanese_level: 0,
        footCode: 0,
        divisionCode: 0,
        positionId: 0,
        jobStatus: 1,
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
      employees: "employee/employees",
      foots: "commons/foots",
      divisions: "commons/divisions",
      positions: "commons/positions",
      jobTitle: "commons/jobTitle",
      japaneseLevel: "commons/japaneseLevel",
      companies: "commons/companies",
      listItemsPerPage: "commons/listItemsPerPage",
      pagination: "employee/pagination"
    })
  },
  methods: {
    ...mapActions("employee", ["fetchEmployee"]),

    async fetchEmployeesData() {
      await this.fetchEmployee({
        optionPage: this.searchData.itemsPerPage,
        currentPage: this.searchData.paginate.currentPage,
        name: this.searchData.name.toLowerCase(),
        work_type: this.searchData.work_type.toLowerCase(),
        job_title_code: this.searchData.job_title_code,
        company_code: this.searchData.company_code,
        japanese_level: parseInt(this.searchData.japanese_level),
        footCode: this.searchData.footCode,
        divisionCode: this.searchData.divisionCode,
        positionId: parseInt(this.searchData.positionId),
        jobStatus: parseInt(this.searchData.jobStatus)
      });
      this.searchData.paginate = this.pagination;
    },

    async search() {
      await this.fetchEmployeesData();
    },

    changePage(page) {
      this.fetchEmployeesData(this.searchData.itemsPerPage, page);
    }
  },
  created() {
    this.fetchEmployeesData();
  }
};
</script>

<style lang="scss" scoped>
.employee {
  margin: -2rem -30px 30px -30px;
  .card-table-emloyee {
    padding: 30px;
  }
  .btn-search-employee {
    background-color: #b5dbf2;
    padding: 8px;
    width: 120px;
  }
  .employee-table {
    margin: 0 20px 0 30px;
  }
  .select-per-page {
    width: 70px;
  }
  .option-table {
    display: flex;
    justify-content: space-between;
  }
  .btn-search {
    margin-top: 15px;
  }
}
</style>
