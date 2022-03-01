<template>
  <!-- Topbar -->
  <nav
    class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
  >
    <!-- Sidebar Toggle (Topbar) -->
    <SideBarToggle />

    <!-- Topbar Search -->
    <TopBarSearch />

    <!-- Topbar Navbar -->
    <TopBarNavBar/>
  </nav>
</template>

<script>
import SideBarToggle from "./topBar/SideBarToggle.vue";
import TopBarSearch from "./topBar/TopBarSearch.vue";
import TopBarNavBar from "./topBar/TopBarNavBar.vue"

export default {
  name: "TopBar",
  components: {
    SideBarToggle,
    TopBarSearch,
    TopBarNavBar
  },
};
</script>

<style></style>
