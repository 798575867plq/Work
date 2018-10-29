function changeImage(image) {
    document.getElementById("imgTpm").src = image;
  }
  
  $(function() {
    var li = $($("#nav li")[0]);
    li.addClass("sy");
  
    $("#nav li").click(function() {
      li.removeClass("sy");
      li = $(this);
      li.addClass("sy");
    });
  
    $("#swx").hide();
    $("#wx")
      .mouseover(function() {
        $("#swx").show();
      })
      .mouseout(function() {
        $("#swx").hide();
      });
  });
  