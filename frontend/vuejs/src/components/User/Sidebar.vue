<template>
    <CSidebar
        fixed
        :minimize="minimize"
        :show="show"
        @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
    >
        <CSidebarBrand
            class="d-md-down-none"
            to="/"
        >
            <CIcon
                class="c-sidebar-brand-full"
                size="custom-size"
                :height="35"
                src="/images/logo-fabbi.png"
                view-box="0 0 556 134"
            />
            <CIcon
                class="c-sidebar-brand-minimized"
                size="custom-size"
                :height="35"
                src="/images/logo-fabbi.png"
                view-box="0 0 110 134"
            />
        </CSidebarBrand>

        <CRenderFunction
            flat
            :content-to-render="$options.nav"
        />
        <CSidebarMinimizer
            class="d-md-down-none"
            @click.native="$store.dispatch('layout/setSidebar', ['sidebarMinimize', !minimize])"
        />
    </CSidebar>
</template>

<script>
import nav from './_nav';
import {mapState, mapActions} from 'vuex';

export default {
    name: 'Sidebar',
    nav,
    computed: {
        ...mapState('layout', {
            show: state => state.sidebarShow,
            minimize: state => state.sidebarMinimize
        }),
    },
    methods: {
        ...mapActions('layout', [
            'setSidebar'
        ]),
        handleCollapseSidebar() {
            this.$store.dispatch('layout/toggleSidebarDesktop');
        }
    }
};
</script>
