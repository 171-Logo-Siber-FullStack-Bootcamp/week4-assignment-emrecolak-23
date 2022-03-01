<template>
<ul class="navbar-nav ml-auto">
      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
      <SearchDropdown/>

      <!-- Nav Item - Alerts -->
      <NavItemAlerts/>

      <!-- Nav Item - Messages -->
      <NavItemMessages/>

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <NavItemUserInfo/>
    </ul>
</template>


<script>
import SearchDropdown from './topBarNavBar/SearchDropdown.vue'
import NavItemAlerts from './topBarNavBar/NavItemAlerts.vue'
import NavItemMessages from './topBarNavBar/NavItemMessages.vue'
import NavItemUserInfo from './topBarNavBar/NavItemUserInfo.vue'

export default {

  name: 'TopBarNavBar',
  components: {
      SearchDropdown,
      NavItemAlerts,
      NavItemMessages,
      NavItemUserInfo
  }
}
</script>