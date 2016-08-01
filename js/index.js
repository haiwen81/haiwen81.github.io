/**
 * Created by 90444 on 2016/6/18.
 */
var show = function(){
  $('.img.show').fadeOut('slow');
};
setTimeout(show, 2000);
$(".content").show(4000,function () {
  var pTop = document.querySelector("p").offsetTop;
  console.log(pTop)
  window.onscroll= function () {
    if(window.pageYOffset >0){
      var scale = window.pageYOffset / pTop;
      console.log(scale);
      if(scale<=0.7){
        document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + scale + "), rgba(255, 255, 255, " + scale + ")), url(./images/steppe.jpg) no-repeat";
      }
      else{document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + 0.7 + "), rgba(255, 255, 255, " + 0.7 + ")), url(./images/steppe.jpg) no-repeat";}
    }
  }
})

$(function(){
  var $refreshButton = $('#refresh');
  var $results = $('#css_result');

  function refresh(){
    var css = $('style.cp-pen-styles').text();
    $results.html(css);
  }

  refresh();
  $refreshButton.click(refresh);

  // Select all the contents when clicked
  $results.click(function(){
    $(this).select();
  });
});