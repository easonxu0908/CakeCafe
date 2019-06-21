<template>
  <div>
    <div class="container my-4">
      <div class="row">
        <div class="col-md-6 my-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.386282153593!2d120.6657778128334!3d24.158182024763875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d78f597e755%3A0xc6891cb5d0ae8a46!2zVW5uYW1lZCBSb2FkLCDljJfljYDlj7DkuK3luII0MDQ!5e0!3m2!1szh-TW!2stw!4v1561103730750!5m2!1szh-TW!2stw"
            width="100%"
            height="500"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-md-6 my-2">
          <form action class="needs-validation" novalidate>
            <div class="card border-teal w-100">
              <div class="card-header bg-teal">
                <h3 class="text-white">聯繫資料填寫</h3>
              </div>
              <div class="card-body bg-transparents">
                <div class="input-group input-group-lg mb-2">
                  <span class="input-group-prepend" width="50">
                    <!-- <i class="fas fa-user input-group-text"></i> -->
                    <!-- <i class="fas fa-user input-group-text" aria-hidden="true"></i> -->
                  </span>
                  <input type="text" class="form-control" placeholder="請輸入真實姓名" required>
                </div>
                <div class="input-group input-group-lg mb-2">
                  <span class="input-group-prepend" width="50">
                    <!-- <i class="fas fa-envelope input-group-text" aria-hidden="true"></i> -->
                  </span>
                  <input type="text" class="form-control" placeholder="請輸入電子郵件" required>
                </div>
                <div class="input-group input-group-lg mb-2">
                  <span class="input-group-prepend" width="50">
                    <!-- <i class="fas fa-mobile-alt input-group-text"></i> -->
                    <!-- <i class="fas fa-phone input-group-text" aria-hidden="true"></i> -->
                  </span>
                  <input type="text" class="form-control" placeholder="請輸入手機號碼" required>
                </div>
                <h3 class="text-success mt-3">從何處得知此咖啡廳</h3>
                <div class="form-check">
                  <label>
                    <input type="checkbox" name="option" value="option1">電視廣告
                  </label>
                </div>
                <div class="form-check">
                  <label>
                    <input type="checkbox" name="option" value="option2">報章雜誌
                  </label>
                </div>
                <div class="form-check">
                  <label>
                    <input type="checkbox" name="option" value="option3">數位廣告
                  </label>
                </div>
                <div class="form-check">
                  <label>
                    <input type="checkbox" name="option" value="option4">其他
                  </label>
                </div>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-toggle="collapse"
                  data-target="#cancel"
                >取消</button>

                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal"
                >送出</button>
              </div>
            </div>
          </form>
          <div class="mb-3 collapse" id="cancel">
            <div class="card card-body bg-danger rounded-0 text-white">獎品有限，若您尚未填寫請加快腳步填寫後送出。</div>
          </div>
        </div>
        <div class="modal fade" id="myModal" tabindex="-1">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">聯繫資料填寫</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>感謝您的填寫，聯繫資料已送出，請注意兌獎日期</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">關閉</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
</script>

<style scoped>
.bg-lightGreen {
  background-color: LightGreen;
}
.border-lightGreen {
  border-color: LightGreen;
}
</style>
