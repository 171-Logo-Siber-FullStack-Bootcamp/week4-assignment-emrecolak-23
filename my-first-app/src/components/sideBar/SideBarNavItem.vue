<template>

         <!-- Nav Item - Dashboard -->
    <li class="nav-item" v-if="title=='Dashboard'">
        <a class="nav-link" href="index.html">
          <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dasboard</span></a>
    </li>
        <!-- Nav Item - Charts -->
    <li class="nav-item" v-if="title=='Charts'">
          <a class="nav-link" href="charts.html">
           <i class="fas fa-fw fa-chart-area"></i>
          <span>Charts</span></a>
    </li>
    <!-- Nav Item - Tables -->
    <li class="nav-item" v-if="title=='Tables'">
          <a class="nav-link" href="tables.html">
            <i class="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
    </li>
  
</template>


<script>

export default {
  name: 'SideBarNavItem',
  props: {
    title: String
  }
}

</script>

<style scoped>
 
</style>