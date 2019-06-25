function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
  if (h <=16) {
    document.getElementById("img").src="images/space-view.png";
  }
  else if (h <=18) {
    document.getElementById("img").src="images/space-view-noon.png";
  }
  else {
    document.getElementById("img").src="images/space-view-night.png";
  }
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
startTime();
