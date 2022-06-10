// tab functionality
function openProduct(evt, productName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(productName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// section
$(".section-5 .testimonials").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".section-5 .prev"),
  nextArrow: $(".section-5 .next"),
});

$(".section-3 #chair .tab-product").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".section-3 #chair .prev"),
  nextArrow: $(".section-3 #chair .next"),
});
$(".section-3 #beds .tab-product").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".section-3 #beds .prev"),
  nextArrow: $(".section-3 #beds .next"),
});
$(".section-3 #sofa .tab-product").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".section-3 #sofa .prev"),
  nextArrow: $(".section-3 #sofa .next"),
});
$(".section-3 #lamp .tab-product").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".section-3 #lamp .prev"),
  nextArrow: $(".section-3 #lamp .next"),
});
