<template>
    <CContainer class="d-flex content-center min-vh-100">
        <CRow class="align-self-start">
            <CCol>
                <CCardGroup>
                    <CCard class="p-4 pl-5 pr-5 background">
                        <CCardBody class="pt-0">
                            <ValidationObserver
                                v-slot="{ handleSubmit }"
                                ref="form"
                            >
                                <form
                                    class="form-custom"
                                    @submit.prevent="handleSubmit(submitLogin)"
                                >
                                    <CIcon
                                        class="c-sidebar-brand-full mb-3 mt-0"
                                        size="custom-size"
                                        :height="70"
                                        src="/dist/img/logo-fabbi.png"
                                        view-box="0 0 556 134"
                                    />

                                    <ValidationProvider
                                        v-slot="{ errors }"
                                        vid="email"
                                        name="Username"
                                        rules="required|email"
                                        mode="passive"
                                    >
                                        <div
                                            role="group"
                                            class="form-group"
                                        >
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="12"
                                                            viewBox="0 0 16 12"
                                                        >
                                                            <path
                                                                id="Path_34"
                                                                data-name="Path 34"
                                                                d="M15.7,67.962a.188.188,0,0,1,.3.147V74.5A1.5,1.5,0,0,1,14.5,76H1.5A1.5,1.5,0,0,1,0,74.5V68.113a.187.187,0,0,1,.3-.147c.7.544,1.628,1.234,4.816,3.55C5.778,72,6.891,73.009,8,73c1.116.009,2.25-1.025,2.884-1.488C14.072,69.2,15,68.506,15.7,67.962ZM8,72c.725.013,1.769-.912,2.294-1.294,4.147-3.009,4.463-3.272,5.419-4.022A.748.748,0,0,0,16,66.094V65.5A1.5,1.5,0,0,0,14.5,64H1.5A1.5,1.5,0,0,0,0,65.5v.594a.752.752,0,0,0,.287.591c.956.747,1.272,1.012,5.419,4.022C6.231,71.088,7.275,72.013,8,72Z"
                                                                transform="translate(0 -64)"
                                                                fill="#777"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <input
                                                    v-model.trim="formData.email"
                                                    type="text"
                                                    placeholder="Username"
                                                    autocomplete="username email"
                                                    :class="['form-control', errors[0] ? 'is-invalid' : '']"
                                                >
                                                <div
                                                    v-if="errors[0]"
                                                    class="invalid-feedback"
                                                >
                                                    {{ errors[0] }}
                                                </div>
                                            </div>
                                        </div>
                                    </ValidationProvider>

                                    <ValidationProvider
                                        v-slot="{ errors }"
                                        vid="password"
                                        name="Password"
                                        rules="required|min:8"
                                        mode="passive"
                                    >
                                        <div
                                            role="group"
                                            class="form-group"
                                        >
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="14"
                                                            height="16"
                                                            viewBox="0 0 14 16"
                                                        >
                                                            <path
                                                                id="Path_33"
                                                                data-name="Path 33"
                                                                d="M12.5,7h-.75V4.75a4.75,4.75,0,0,0-9.5,0V7H1.5A1.5,1.5,0,0,0,0,8.5v6A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5v-6A1.5,1.5,0,0,0,12.5,7ZM9.25,7H4.75V4.75a2.25,2.25,0,0,1,4.5,0Z"
                                                                fill="#777"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <input
                                                    v-model="formData.password"
                                                    type="password"
                                                    placeholder="Password"
                                                    autocomplete="curent-password"
                                                    :class="['form-control', errors[0] ? 'is-invalid' : '']"
                                                >
                                                <div
                                                    v-if="errors[0]"
                                                    class="invalid-feedback"
                                                >
                                                    {{ errors[0] }}
                                                </div>
                                            </div>
                                        </div>
                                    </ValidationProvider>
                                    <div class="row">
                                        <div class="text-left col-4">
                                            <button
                                                type="submit"
                                                class="btn px-4 text-nowrap btn-primary auth-btn"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div class="text-right col-8">
                                            <button
                                                type="button"
                                                class="btn px-0 text-nowrap btn-link"
                                            >
                                                <router-link
                                                    :to="{name: 'portal.password.forgot'}"
                                                    class="auth-forward"
                                                >
                                                    Forgot password?
                                                </router-link>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </ValidationObserver>
                        </CCardBody>
                    </CCard>
                </CCardGroup>
            </CCol>
        </CRow>
    </CContainer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'Login',
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data: () => ({
        formData: {
            email: '',
            password: ''
        }
    }),
    computed: {
        ...mapState('auth', {
            loginRes: state => state.loginRes
        })
    },
    methods: {
        ...mapActions('auth', ['login', 'fetchUser']),

        ...mapActions('layout', ['setLoading']),

        async submitLogin() {
            this.setLoading(true);
            try {
                await this.login(this.formData);
            } catch(e) {
                this.setLoading(false);
                return;
            }

            await this.fetchUser();
            this.setLoading(false);
        }
    }
};
</script>
<style scoped>
    .background {
        background: #3c3c3c;
        border-radius: 8px;
    }
    .auth-forward {
        color: #ffffff !important;
    }
    .auth-btn {
        border-color: #1874c4 !important;
    }
    .align-self-start {
        margin-top: 120px
    }
</style>
