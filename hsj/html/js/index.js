var saveTimeKey = "saved-start-time";
function restart() {
  localStorage.removeItem(saveTimeKey);
  startTime();
}
function loadStartTime() {
  return localStorage.getItem(saveTimeKey);
}
function saveStartTime(startedtime) {
  localStorage.setItem(saveTimeKey, startedtime);
}
//倒计时总时长
var times = 15 * 60;
var timer;
var startedtime;
function startTime() {
  startedtime = loadStartTime();
  if (!startedtime) {
    startedtime = new Date().getTime();
    saveStartTime(startedtime);
  }
  // console.log(startedtime);
  countdown();
  timer = setInterval(countdown, 1000);
}
function countdown() {
  var now = new Date().getTime();
  var showTime = parseInt((now - startedtime) / 1000);
  var nowShowTime = times - showTime;
  if (nowShowTime < 0) {
    document.getElementById("spTime").innerHTML = "00:00";
    //localStorage.removeItem(saveTimeKey);

    clearInterval(timer);
    return;
  }
  var seconds = nowShowTime % 60;
  var minutes = parseInt(nowShowTime / 60);
  seconds = seconds < 10 ? "0" + seconds : "" + seconds;
  minutes = minutes < 10 ? "0" + minutes : "" + minutes;
  if (nowShowTime <= 0) {
    document.getElementById("spTime").innerHTML = "00:00";
    //localStorage.removeItem(saveTimeKey);
    alert("时间到，已结束考试");
    document.getElementById("frombut").disabled = "disabled";
    ShowDiv("MyDiv", "fade");
    clearInterval(timer);
  }
  document.getElementById("spTime").innerHTML = minutes + ":" + seconds;
}
startTime();

$(function() {
  $("#b1 .a1").click(function() {
    $("#b1 .a1").css("background-color", "#fff");
    $(this).css("background-color", "#fedc00");
  });

  $("#b2 .a1").click(function() {
    $("#b2 .a1").css("background-color", "#fff");
    $(this).css("background-color", "#fedc00");
  });
});


