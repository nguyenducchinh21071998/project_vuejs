<template>
    <CFooter :fixed="false">
        <div>
            <span class="ml-md-1 footer-info">Copyright &copy; {{ new Date().getFullYear() }} Fabbi JSC. All rights reserved. </span>
        </div>
        <div class="ml-md-auto">
            <span class="mr-1 footer-info" />
        </div>
    </CFooter>
</template>

<script>
export default {
    name: 'Footer'
};
</script>
