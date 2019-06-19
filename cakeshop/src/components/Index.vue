<template>
  <div>
    <div class="container-fluid sticky-top">
      <div class="row">
        <div class="col-12 bg-white">
          <div class="row justify-content-center bg-white py-3">
            <img src="../assets/img/logo.png" width="171" height="63" alt="橡果甜點" class="img-fluid">
          </div>
          <div class="row justify-content-center bg-light">
            <nav class="navbar navbar-expand-sm navbar-light">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <topSlider></topSlider>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import $ from "jquery";
import topSlider from "@/components/topslider";
import Footer from "@/components/Footer";
export default {
  components: {
    topSlider,
    Footer
  }
};
</script>

<style scoped>
/* .navbar {
  position: absolute;
  z-index: 10;
} */
</style>