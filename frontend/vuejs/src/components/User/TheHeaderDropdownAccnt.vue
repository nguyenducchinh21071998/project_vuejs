<template>
    <CDropdown
        in-nav
        class="c-header-nav-items"
        placement="bottom-end"
        add-menu-classes="pt-0"
    >
        <template #toggler>
            <CHeaderNavLink>
                <div class="c-avatar">
                    <img
                        src="/images/6.jpg"
                        class="c-avatar-img "
                    >
                </div>
            </CHeaderNavLink>
        </template>
        <CDropdownHeader
            tag="div"
            class="text-center"
            color="light"
        >
            <strong>Settings</strong>
        </CDropdownHeader>
        <CDropdownItem>
            <CIcon name="cil-user" /> Profile
        </CDropdownItem>
        <CDropdownItem>
            <CIcon name="cil-lock-locked" /> Change password
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem>
            <CIcon name="cil-account-logout" /> Logout
        </CDropdownItem>
    </CDropdown>
</template>

<script>
export default {
    name: 'TheHeaderDropdownAccnt'
};
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>
