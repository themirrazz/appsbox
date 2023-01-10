fill("#47178f")
stamp("@bigkahoot")
delay(function () {
  var iframe = document.createElement("iframe");
  iframe.src='https://kahoot.it/';
  iframe.style.position="fixed"
  iframe.style.border="none"
  iframe.style.top="0px"
  iframe.style.left="0px"
  setInterval(function(){
  iframe.style.width=(document.querySelector("canvas").offsetWidth)+"px"
  iframe.style.height=(document.querySelector("canvas").offsetHeight)+"px"
  })
  iframe.style.zIndex="99999999999999999999"
  document.body.appendChild(iframe)
},1000);
