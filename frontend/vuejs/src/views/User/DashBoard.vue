<style lang="scss" scoped>
.chart-dashboard {
  .chart-title {
    margin-bottom: 15px;

    h4.card-title {
      padding-left: 15px;
    }

    h4.line-chart {
      padding-left: 58px;
    }
  }
}
</style>
<template>
  <div class="chart-dashboard">
    <!-- <WidgetsBrand /> -->
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="6">
                <CRow class="chart-title">
                  <h4 class="card-title mb-0">
                    {{ $t("chart.member_company") }}
                  </h4>
                </CRow>
                <hr class="mt-0" />

                <CChartBar
                  :datasets="dataCompanies"
                  :options="computedOptions"
                  :labels="memberCompanies.labels"
                />
              </CCol>

              <CCol sm="12" lg="6">
                <CRow class="chart-title">
                  <h4 class="card-title mb-0">{{ $t("chart.foot") }}</h4>
                </CRow>
                <hr class="mt-0" />
                <CChartBar
                  :datasets="dataFoots"
                  :labels="memberFoots.labels"
                  :options="computedOptions"
                />
              </CCol>
            </CRow>
            <br />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md="12">
        <CCard>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="6">
                <CRow class="chart-title">
                  <h4 class="card-title mb-0">{{ $t("chart.division") }}</h4>
                </CRow>
                <hr class="mt-0" />
                <CChartBar
                  :datasets="dataDivisions"
                  :labels="memberDivisions.labels"
                  :options="computedOptions"
                />
              </CCol>

              <CCol sm="12" lg="6">
                <CRow class="chart-title">
                  <h4 class="card-title mb-0">{{ $t("chart.all_member") }}</h4>
                </CRow>
                <hr class="mt-0" />
                <CChartPie
                  :datasets="dataJobTitle"
                  :labels="memberJobTitle.labels"
                  :options="defaultOptionJobTile"
                />
              </CCol>
            </CRow>
            <br />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="12">
        <CCard>
          <CCardBody>
            <CRow>
              <CRow class="chart-title">
                <h4 class="line-chart mb-0">{{ $t("chart.join_out") }}</h4>
              </CRow>
              <CCol sm="10" class="d-none d-md-block">
                <CButtonGroup class="float-right mr-3">
                  <CButton
                    v-for="(value, key) in listOptionInOut"
                    :key="key"
                    color="outline-secondary"
                    class="mx-0"
                    :pressed="value === selected ? true : false"
                    @click="changeOption(value)"
                    >{{ value }}
                  </CButton>
                </CButtonGroup>
              </CCol>
            </CRow>
            <CCol md="10">
              <CChartLine
                :datasets="dataMember"
                :labels="[
                  $t('chart.month.Jan'),
                  $t('chart.month.Feb'),
                  $t('chart.month.Mar'),
                  $t('chart.month.Apr'),
                  $t('chart.month.May'),
                  $t('chart.month.Jun'),
                  $t('chart.month.Jul'),
                  $t('chart.month.Aug'),
                  $t('chart.month.Sep'),
                  $t('chart.month.Oct'),
                  $t('chart.month.Nov'),
                  $t('chart.month.Dec')
                ]"
              />
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
import { CChartLine, CChartPie, CChartBar } from "@coreui/vue-chartjs";
import { deepObjectsMerge } from "@coreui/utils/src";
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    CChartLine,
    CChartPie,
    CChartBar
  },
  data() {
    return {
      selected: "All",
      dataJoinMember: null,
      dataOutMember: null,
      dataInOutMember: [],
      listOptionInOut: ["All", "Foot", "Division"],
      dataMember: []
    };
  },
  async created() {
    await this.$store.dispatch("chart/getChartsData");
    this.changeOption(this.selected);
  },

  methods: {
    async changeOption(param) {
      await this.$store
        .dispatch("chart/getChartsDataJoinOut", param)
        .then(() => {
          this.selected = param;
          this.dataJoinOut();
        });
    },
    dataJoinOut() {
      this.dataInOutMember = [];
      if (this.selected === "All") {
        this.dataJoinMember = {
          data: this.memberInOut.memberIn,
          backgroundColor: "transparent",
          borderColor: "#ffcc66",
          label: this.$t("chart.member_join")
        };
        this.dataOutMember = {
          data: this.memberInOut.memberOut,
          backgroundColor: "transparent",
          borderColor: "#cc3300",
          label: this.$t("chart.member_out")
        };
        this.dataInOutMember = [this.dataJoinMember, this.dataOutMember];
      }
      if (this.selected === "Division") {
        for (let prop in this.memberInOut) {
          this.dataInOutMember.push({
            data: Object.values(this.memberInOut[prop].data),
            backgroundColor: "transparent",
            borderColor: this.memberInOut[prop].borderColor,
            label: this.memberInOut[prop].label
          });
        }
      }
      if (this.selected === "Foot") {
        for (let prop in this.memberInOut) {
          this.dataInOutMember.push({
            data: Object.values(this.memberInOut[prop].data),
            backgroundColor: "transparent",
            borderColor: this.memberInOut[prop].borderColor,
            label: this.memberInOut[prop].label
          });
        }
      }
      this.dataMember = deepObjectsMerge(
        this.dataInOutMember,
        this.datasets || {}
      );
    }
  },

  computed: {
    ...mapGetters({
      memberCompanies: "chart/memberCompanies",
      memberFoots: "chart/memberFoots",
      memberDivisions: "chart/memberDivisions",
      memberJobTitle: "chart/memberJobTitle",
      memberInOut: "chart/memberInOut"
    }),

    defaultOptions() {
      return {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              display: true,
              stacked: false,
              ticks: {
                min: 0
              }
            }
          ]
        }
      };
    },

    defaultOptionJobTile() {
      let sum = [];
      for (let prop in this.memberJobTitle.data) {
        sum = sum * 1 + this.memberJobTitle.data[prop] * 1;
      }
      return {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              let labels = data["labels"][tooltipItem["index"]];
              let count = data["datasets"][0]["data"][tooltipItem["index"]];
              let percentage =
                Math.round(
                  (data["datasets"][0]["data"][tooltipItem["index"]] / sum) *
                    100 *
                    10
                ) / 10;
              return `${labels} : ${count} (${percentage}%)`;
            }
          }
        }
      };
    },

    dataCompanies() {
      let dataMemberCompany = [
        {
          data: this.memberCompanies.data,
          backgroundColor: this.memberCompanies.backgroundColor
        }
      ];
      return deepObjectsMerge(dataMemberCompany, this.datasets || {});
    },

    dataFoots() {
      let memberFoots = [
        {
          data: this.memberFoots.data,
          backgroundColor: this.memberFoots.backgroundColor
        }
      ];
      return deepObjectsMerge(memberFoots, this.datasets || {});
    },

    dataDivisions() {
      let memberDivisions = [
        {
          data: this.memberDivisions.data,
          backgroundColor: this.memberDivisions.backgroundColor
        }
      ];
      return deepObjectsMerge(memberDivisions, this.datasets || {});
    },

    dataJobTitle() {
      let memberJobTitle = [
        {
          data: this.memberJobTitle.data,
          backgroundColor: this.memberJobTitle.backgroundColor
        }
      ];
      return deepObjectsMerge(memberJobTitle, this.datasets || {});
    },

    computedOptions() {
      return deepObjectsMerge(this.defaultOptions, this.options || {});
    }
  }
};
</script>
