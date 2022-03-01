<template>
          <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <MainContent/>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

       </div>
        <!-- End of Content Wrapper -->

    

</template>


<script>

import MainContent from './contentWrapper/MainContent.vue'

export default {

  name: 'ContentWrapper',
  components: {
    MainContent
  }
}
</script>


<style>

</style>