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
    v-on:submitCreateEmployee="submitCreateEmployee"
  />
</template>

<script>
import FormEmployee from "@/components/Employees/FormEmployee.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CreateEmployee",
  components: {
    FormEmployee
  },

  data() {
    return {
      id: ""
    };
  },

  computed: {
    ...mapGetters({
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

  methods: {
    ...mapActions("layout", ["setLoading"]),

    async submitCreateEmployee(formData) {
      this.id = formData.getAll("id");
      this.setLoading(true);
      await this.$store
        .dispatch("employee/createEmployee", formData)
        .then(() => {
          let message = ["Created"];
          this.$toast(message, null, 2000, "b-toaster-top-center", "success");
          this.$router.push({ path: `/employees/detail/${this.id}` });
          this.setLoading(false);
        });
    }
  }
};
</script>
