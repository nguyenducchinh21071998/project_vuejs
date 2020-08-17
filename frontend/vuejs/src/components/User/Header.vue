<template>
  <CHeader fixed with-subheader light>
    <CToggler in-header class="ml-3 d-lg-none" @click="toggleSidebarMobile" />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="toggleSidebarDesktop"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <span class="logo-text">Fabbi ECS</span>
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard">
          Dashboard
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <b-nav-item-dropdown
        name="language"
        class="menu-lang d-flex align-items-center"
      >
        <template v-slot:button-content>
          <b-link v-if="localeSelect" class="link-lang">
            {{ $t("language.label_language_system") }}
            <i class="mdi mdi-chevron-down"></i>
          </b-link>
        </template>
        <template slot="default" class="default">
          <b-form-group class="box-language">
            <b-form-radio-group
              name="radios-stacked"
              stacked
              :checked="locale"
              @input="changeLanguage"
            >
              <b-form-radio
                v-for="(locale, key) in locales"
                :value="locale.text"
                :key="key"
              >
                {{ $t("language.label_language_" + locale.text) }}
              </b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </template>
      </b-nav-item-dropdown>
      <TheHeaderDropdownAccnt />
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0" />
    </CSubheader>
  </CHeader>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";
import { loadMessages } from "../../plugins/i18n";
import { loadVeeValidate } from "@/plugins/vee-validate";

export default {
  name: "Header",
  components: {
    TheHeaderDropdownAccnt
  },
  data() {
    return {
      locales: [
        {
          text: "ja"
        },
        {
          text: "en"
        },
        {
          text: "vi"
        }
      ],
      fullPath: "",
      keyword: "",
      localeSelect: null
    };
  },
  methods: {
    ...mapActions("layout", ["toggleSidebarMobile", "toggleSidebarDesktop"]),

    ...mapActions("auth", ["logout"]),

    async logoutHandler() {
      await this.logout();
      this.$router.push({ name: "user.login" });
    },
    changeLanguage(locale) {
      if (this.$i18n.locale !== locale) {
        let localeSelect = this.locales.filter(item => item.text == locale);
        this.localeSelect = localeSelect.length > 0 ? localeSelect[0] : null;
        loadMessages(locale);
        loadVeeValidate(locale);
        this.$store.dispatch("lang/setLocale", { locale });
      }
    }
  },
  computed: {
    ...mapState("lang", {
      locale: state => {
        return state.locale;
      }
    })
  },
  created() {
    let localeSelect = this.locales.filter(item => item.text == this.locale);
    this.localeSelect = localeSelect.length > 0 ? localeSelect[0] : null;
  }
};
</script>

<style lang="scss">
.c-header-brand {
  text-decoration: none !important;
}

.logo-text {
  font-size: 20px;
}

.box-language {
  padding: 0 10px;
  margin-bottom: 0;
}
</style>
