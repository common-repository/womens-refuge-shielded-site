var ds07o6pcmkorn=function(e){
  var t=this;
  t.modalID=e.modalID || "modal",
  t.left=e.left || 0,
  t.top=e.top || 0,
  t.icon=e.iconSize || "big",
  t.url="https://staticcdn.co.nz",
  t.smallIcon=t.url+"/embed/sm.png",
  t.bigIcon=t.url+"/embed/lg.png",
  t.closeIcon=t.url+"/embed/close.png",
  t.elementId=e.openElementId || "",
  t.appended=!1,
  t.btn=function(){
    return '<img id="frame-opener" style="cursor: pointer; z-index:  99999; -webkit-transition: all .5s; position: fixed; top:'+t.top+"px; left: "+t.left+'px; max-width: 60px" src="'+t.iconSize(t.icon)+'" alt="Enter the Shielded Site"/>'
  },
  t.frame='<div id="'+t.modalID+'" style="display:none; overflow: auto;  position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 99999; -webkit-overflow-scrolling: touch; background: rgba(0,0,0,0.5); zoom: 1;"><div id="frame-cover" style=" width:310px; height:453px; left:50%;margin-left: -155px; position: fixed; line-height: 0; max-height: calc(100% - 40px);"><iframe sandbox="allow-forms allow-scripts allow-same-origin allow-popups" src="'+t.url+'" width="310" height="420" style="opacity: .98; width:310px; height:420px;  max-height: 100%;" frameborder="0"></iframe><a href="#" id="frame-close"><img style=" display: block; margin: 0 auto; width: 50px; height: 35px; cursor: pointer;" src="'+t.closeIcon+'" alt=""/></a></div></div>',
  t.iconSize=function(e){ return "big" === e ? t.bigIcon : t.smallIcon },
  t.addButton=function(){ document.body.insertAdjacentHTML("afterbegin",t.btn()) },
  t.openFrame=function(e){
    e.preventDefault ? e.preventDefault() : e.returnValue=!1,
    t.appended||(
      document.body.insertAdjacentHTML("afterbegin",t.frame),
      t.modalEl=document.getElementById(t.modalID),
      document.getElementById("frame-close").addEventListener("click",t.closeFrame),
      t.appended=!0
    ),
    t.modalEl.style.display="block",
    document.body.style.overflow="hidden",
    t.frameOpenerEl.style.opacity=0
  },
  t.closeFrame=function(e){
    e.preventDefault?e.preventDefault():e.returnValue=!1,
    document.body.removeAttribute("style"),
    t.modalEl.style.display="none",
    t.frameOpenerEl.style.opacity=1
  },
  t.init=function(){
    t.elementId?t.frameOpenerEl=document.querySelector(t.elementId):(
      t.addButton(),
      t.frameOpenerEl=document.getElementById("frame-opener")
    ),
    t.frameOpenerEl.addEventListener("click",t.openFrame)
}
};
