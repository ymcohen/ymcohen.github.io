var header = document.getElementsByClassName("head");
for (var i = 0; i < header.length; i++) {
header[i].textContent = 'hacked';
}

var audio1 = document.getElementById("audio1");
var label = document.getElementById("label");
setInterval(an,1);
var an = function() {
  label.textContent = audio1.currentTime;
  label.textContent+= audio1.src;
  audio1.currentTime = 2; 
};
var realHeader = document.getElementsByTagName("header");
for (var i = 0; i < realHeader.length;i ++) {
  
  realHeader[i].innerHTML = "<div class="header">
        <a style="float:left; position:fixed;" href="/index.html">
            <img class="logo" id="logo-header" src="/logo.png" style=" ">
        </a>
      <table style="padding-right:100px; float:right;">
        <tr>
          <td><a class="head" href="/index.html">Home</a></td>
          <td><a class="head" href="/music.html">My Music</a></td>
        </tr>
      </table>
    </div>";}
  
  var header = document.getElementsByClassName("head");
for (var i = 0; i < header.length; i++) {
header[i].textContent = 'This is Hacked!!';
}
