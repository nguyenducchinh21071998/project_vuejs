<template>
    <div class="c-app">
        <Sidebar />
        <CWrapper>
            <Header />
            <div class="c-body">
                <main class="c-main">
                    <CContainer fluid>
                        <transition name="fade">
                            <router-view />
                        </transition>
                    </CContainer>
                </main>
                <Footer />
                <UserLoading v-if="loading" />
            </div>
        </CWrapper>
    </div>
</template>

<script>
import Sidebar from '@/components/User/Sidebar';
import Header from '@/components/User/Header';
import Footer from '@/components/User/Footer';
import UserLoading from '@/components/User/Loading';
import {mapState} from 'vuex';

export default {
    name: 'MainLayout',
    components: {
        Sidebar,
        Header,
        Footer,
        UserLoading
    },

    computed: {
        ...mapState('layout', {
            loading: state => state.loading
        })
    }
};
</script>

<style lang="scss">
    @import "@/assets/scss/User/portal.scss";
</style>

