$(function () {
  // tab
  $(".js-tab-trigger").on("click", function () {
    //まずは全triggerからclass削除
    $(".js-tab-trigger").removeClass("is-active");
    //次に全targetからclass削除
    $(".js-tab-target").removeClass("is-active");
    //次にクリックした要素にis-active
    $(this).addClass("is-active");
    //data属性を取得する
    let id = $(this).data("id");
    //data属性値=idが等しいものにclass付与
    $("#" + id).addClass("is-active");
  });
  // .//tab

  // modal
  MicroModal.init({
    openClass: "is-open",
    disableScroll: true,
    // awaitOpenAnimation: true,
    // awaitCloseAnimation: true,
  });
  //.//modal

  
});
