<template>
    <div
        v-if="loading"
        class="loading loader-background"
        :class="[ loading ? 'loader-background' : 'loader-none-background', fullView ? 'loading-full-view' : '']"
    >
        <svg
            viewBox="25 25 50 50"
            class="loading__svg"
        ><circle
            cx="50"
            cy="50"
            r="20"
            class="loading__circle"
        /></svg>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    props: {
        fullView: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        ...mapState('loading', {
            loading: state => state.loading.enable
        }),
    },
};
</script>
    
<style>
.loading {
    position: fixed;
    top: 0;
    left: 20rem;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    opacity: 0.4;
    z-index: 9999;
    margin: 0 auto;
    min-height: -webkit-fill-available;
}

@media screen and (max-width: 768px) {
  .loading {
    left: 0 !important;
  }
}

.loader-none-background {
    background-color: none;
}

.loader-background {
    background-color: gray;
}

.loading__svg {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-animation: rotate-data-v-c2de8a26 2s linear infinite;
    animation: rotate-data-v-c2de8a26 2s linear infinite;
    width: 80px;
}

.loading__circle {
    stroke: rgb(204, 204, 204);
    fill: none;
    stroke-width: 3;
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    -webkit-animation: dash-data-v-c2de8a26 1.5s ease-in-out infinite;
    animation: dash-data-v-c2de8a26 1.5s ease-in-out infinite;
}

.loading-full-view {
    left: 0;
}
</style>
