var audio1 = document.getElementById("audio1");
var label = document.getElementById("label");
setInterval(an,1);
var an = function() {
  label.textContent = audio1.currentTime;
  label.textContent+= audio1.src;
  audio1.currentTime = 2; 
};
var text = "<div class='header'><a style='float:left; position:fixed;' href='/index.html'><img class='logo' title = 'Site Logo - Home Page' alt = 'Site Logo' id='logo-header' src='/logo.png' ></a><table style='padding-right:100px; float:right;'><tr><td><a class='head' href='/index.html'>Home</a></td><td><a class='head' href='/blog.html'>Blog</a></td><td><a class='head' href='/music.html'>My Music</a></td><td><a class='head' title = 'Note: This is for testing purposes only and will PROBABLY contain more bugs than the rest of the site!!' href='/test.html'>Test</a></td></tr></table></div>"
var realHeader = document.getElementsByTagName("header");
for (var i = 0; i < realHeader.length;i ++) {  
realHeader[i].innerHTML = text;}  
var header = document.getElementsByClassName("head");
for (var i = 0; i < header.length; i++) {
}
var logo = document.getElementsByClassName("logo");
for (var i = 0; i < logo.length; i++) {
  if (window.innerWidth > 400) {logo[i].width = window.innerWidth / 10;}
  else {logo[i].width = window.innerHeight / 10;}
}
