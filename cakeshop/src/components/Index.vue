<template>
  <div>
    <div class="container-fluid sticky-top">
      <div class="row">
        <div class="col-12 bg-white">
          <div class="row justify-content-center bg-white py-3">
            <router-link to="/">
              <img
                src="../assets/img/logo.png"
                width="171"
                height="63"
                alt="橡果甜點"
                class="img-fluid"
              >
            </router-link>
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
                  <li class="nav-item">
                    <router-link to="/">
                      <a class="nav-link">首頁</a>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/cake">
                      <a class="nav-link">甜點</a>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact">
                      <a class="nav-link">聯絡我們</a>
                    </router-link>
                  </li>
                </ul>
              </div>
            </nav>
            <form class="form-inline ml-auto px-3">
              <a
                href
                class="btn btn-outline-info mr-2"
                data-toggle="modal"
                data-target="#loginModal"
              >登入</a>
              <a href class="btn btn-info" data-toggle="modal" data-target="#registerModal">註冊</a>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="banner d-md-none"></div>
    <topSlider></topSlider>
    <a href="#" class="jq-backTop" id="backTop" title="回頂端">
      <i class="fas fa-home fa-2x text-secondary"></i>
    </a>
    <router-view></router-view>
    <Footer></Footer>
    <!-- 登入Modal -->
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-info text-white">
            <h5 class="modal-title" id="exampleModalLabel">登入</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="emailLogin">Email</label>
              <input
                type="email"
                class="form-control"
                id="emailLogin"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              >
              <small class="form-text">我們絕不會隨意將你的 email 給予第三者</small>
            </div>
            <div class="form-group">
              <label for="password">密碼</label>
              <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="LoginCheck">
              <label class="form-check-label" for="LoginCheck">記住帳號</label>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="#"
              class="mr-auto"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#registerModal"
            >切換到註冊</a>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-info">登入</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 註冊Modal -->
    <div
      class="modal fade"
      id="registerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="registerModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header bg-khaki text-white">
            <h5 class="modal-title" id="exampleModalLabel">註冊</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6 form-text text-justify">
                <h2>註冊橡果甜點</h2>
                <br>
                <p>可收到橡果甜點最新資訊!!</p>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="emailRegister">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="emailRegister"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  >
                  <small class="form-text">我們絕不會隨意將你的 email 給予第三者</small>
                </div>
                <div class="form-group">
                  <label for="passwordRegister">密碼</label>
                  <input
                    type="password"
                    class="form-control"
                    id="passwordRegister"
                    placeholder="Password"
                  >
                </div>
                <div class="form-group">
                  <label for="password2Register">確認密碼</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password2Register"
                    placeholder="Password"
                  >
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="LoginCheck">
                  <label class="form-check-label" for="LoginCheck">同意條款</label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="#"
              class="mr-auto"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#loginModal"
            >切換到登入</a>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-info">註冊</button>
          </div>
        </div>
      </div>
    </div>
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
$(document).ready(function() {
  //註冊/登陸切換bug
  $('a[data-dismiss="modal"][data-toggle="modal"]').on("click", function() {
    // console.log(16516);
    let target = $(this).data("target");
    // console.log(target);
    $(target).on("shown.bs.modal", function() {
      $("body").addClass("modal-open");
    });
  });
  //螢幕下滑超過100px顯示backTop  start
  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("backTop").style.display = "block";
    } else {
      document.getElementById("backTop").style.display = "none";
    }
  }
  window.onscroll = function() {
    scrollFunction();
  };
  //螢幕下滑超過100px顯示backTop  end

  // 滑動回頁首 start
  $(".jq-backTop").click(function(event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0
      },
      500
    );
  });
  // 滑動回頁首 end
});
</script>
 
<style scoped>
.banner {
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
  background-image: url("../assets/img/mainvisual.jpg");
}
#backTop {
  position: fixed;
  right: 5%;
  bottom: 5%;
  display: none;
  z-index: 10;
}
</style>