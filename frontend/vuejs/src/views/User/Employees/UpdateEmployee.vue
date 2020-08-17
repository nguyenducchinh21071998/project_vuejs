<template>
  <FormEmployee
    :jobTitle="jobTitle"
    :foots="foots"
    :divisions="divisions"
    :positions="positions"
    :jobLevel="jobLevel"
    :companies="companies"
    :gender="gender"
    :japaneseLevel="japaneseLevel"
    :workType="workType"
    :informationEmployee="informationEmployee"
    v-on:submitUpdateEmployee="submitUpdateEmployee"
  />
</template>

<script>
import FormEmployee from "@/components/Employees/FormEmployee.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    FormEmployee
  },

  data() {
    return {
      idEmployee: "",
      id: ""
    };
  },

  computed: {
    ...mapGetters({
      informationEmployee: "employee/getEmployee",
      jobTitle: "commons/jobTitle",
      foots: "commons/foots",
      divisions: "commons/divisions",
      positions: "commons/positions",
      jobLevel: "commons/jobLevel",
      companies: "commons/companies",
      gender: "commons/gender",
      japaneseLevel: "commons/japaneseLevel",
      workType: "commons/workType"
    })
  },

  async created() {
    this.idEmployee = this.$route.params.id;
    if (this.idEmployee) {
      await this.$store.dispatch("employee/getEmployee", this.idEmployee);
    }
  },
  methods: {
    ...mapActions("layout", ["setLoading"]),

    async submitUpdateEmployee(formData) {
      // add data to form data
      this.id = formData.getAll("id");
      this.setLoading(true);
      await this.$store
        .dispatch("employee/updateEmployee", {
          data: formData,
          id: this.idEmployee
        })
        .then(() => {
          let message = ["Updated"];
          this.$toast(message, null, 2000, "b-toaster-top-center", "success");
          this.$router.push({ path: `/employees/detail/${this.id}` });
          this.setLoading(false);
        });
    }
  }
};
</script>
