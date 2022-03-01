<template>
            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <TopBar/>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <PageContent/>
                <!-- /.container-fluid -->

            </div>
</template>


<script>

import TopBar from './mainContent/TopBar.vue'
import PageContent from './mainContent/PageContent.vue'

export default {
  name: 'MainContent',
  components: {
    TopBar,
    PageContent
  }
}
</script>

<style>

</style>