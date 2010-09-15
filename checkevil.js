document.documentElement.addEventListener("__detected_evil", function(){
  chrome.extension.sendRequest({}, function(response) {});
});
var script = document.createElement("script");
script.type = "text/javascript";
script.innerText = '(function(){var __evil=false,__ua=navigator.userAgent,__evt=document.createEvent("Event");__evt.initEvent("__detected_evil", true, true);navigator.__defineGetter__("userAgent", function(){if(!__evil){__evil=true;document.documentElement.dispatchEvent(__evt)};return __ua});})()';
document.documentElement.insertBefore(script);
