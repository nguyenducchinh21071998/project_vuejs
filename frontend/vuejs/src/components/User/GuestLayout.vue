<template>
    <div>
        <router-view />
        <UserLoading v-if="loading" />
    </div>
</template>

<script>
import UserLoading from '@/components/User/Loading';
import {mapState} from 'vuex';
export default {
    name: 'GuestLayout',
    components: {
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
    @import "@/assets/scss/User/auth.scss";
</style>
