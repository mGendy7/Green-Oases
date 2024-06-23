$(document).ready(function () {
  $(".skitter-large").skitter({
    auto_play: true,
    interval: 2500,
  });
  $(".lisContainer li").click(function () {
    $(".lisContainer li").removeClass("active");
    $(this).addClass("active");

    $(".boxy").fadeTo(300, 0).hide();
    $($(this).data("work")).fadeTo(300, 1).show();
  });
  checkAndAddClass();
  $(window).scroll(function () {
    checkAndAddClass();
  });
});

$("#up-btn").click(function () {
  requestAnimationFrame(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});

function checkAndAddClass() {
  let windowScroll = $(window).scrollTop();

  $(".beforeState").each(function () {
    let articleArea = $(this).offset().top;

    if (windowScroll >= articleArea - 800) {
      $(this).addClass("afterState");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const categorySelector = document.getElementById("categorySelector");
  const productContainer = document.getElementById("productContainer");

  categorySelector.addEventListener("change", function () {
    const selectedCategory = categorySelector.value;
    const productItems = document.querySelectorAll(".boxy");

    productItems.forEach(function (item) {
      if (
        selectedCategory === "all" ||
        item.classList.contains(selectedCategory)
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
