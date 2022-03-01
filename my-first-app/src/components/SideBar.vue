<template>
        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <SideBarBrand/>

            <SideBarDivider/>

            <SideBarNavItem title="Dashboard"/>

            <!-- Divider -->
            <SideBarDivider/>

            <!-- Heading -->
            <SideBarHeading title='Interface'/>         

            <!-- Nav Item - Pages Collapse Menu Components-->
            <SideBarNavItemMenu title="Components"/>

            <!-- Nav Item - Utilities Collapse Menu -->
            <SideBarNavItemMenu title="Utilities"/>

            <!-- Divider -->
            <SideBarDivider/>

            <!-- Heading -->
            <SideBarHeading title='Addons'/>   
            

            <!-- Nav Item - Pages Collapse Menu -->
            <SideBarNavItemMenu title="Pages"/>

            <!-- Nav Item - Charts -->
            <SideBarNavItem title='Charts'/>

            <!-- Nav Item - Tables -->
            <SideBarNavItem title='Tables'/>
            
            <SideBarToggler/>

        </ul>
        <!-- End of Sidebar -->
</template>

<script>

import SideBarBrand from './sideBar/SideBarBrand.vue'
import SideBarDivider from './sideBar/SideBarDivider.vue'
import SideBarNavItem from './sideBar/SideBarNavItem.vue'
import SideBarHeading from './sideBar/SideBarHeading.vue'
import SideBarNavItemMenu from './sideBar/SideBarNavItemMenu.vue'
import SideBarToggler from './sideBar/SideBarToggler.vue'


export default {
  name: 'SideBar',
  components: {
    SideBarBrand,
    SideBarDivider,
    SideBarNavItem,
    SideBarHeading,
    SideBarNavItemMenu,
    SideBarToggler
  }
}

</script>


<style scoped>
  
</style>