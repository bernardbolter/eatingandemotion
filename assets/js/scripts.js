$("#scroll").click(function(e) {
  e.preventDefault();

  $("body,html").animate(
    {
      scrollTop: $("#contact").offset().top
    },
    1200 //speed
  );
});

$("#scrollOver").click(function(e) {
  e.preventDefault();

  $("body,html").animate(
    {
      scrollTop: $("#overview").offset().top
    },
    1200 //speed
  );
});
