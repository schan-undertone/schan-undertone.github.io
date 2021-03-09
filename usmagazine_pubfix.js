window.PUBLISHER_FIX_LOADED = true;window.matchMedia=window.matchMedia||function(doc,undefined){"use strict";var bool,docElem=doc.documentElement,refNode=docElem.firstElementChild||docElem.firstChild,fakeBody=doc.createElement("body"),div=doc.createElement("div");div.id="mq-test-1";div.style.cssText="position:absolute;top:-100em";fakeBody.style.background="none";fakeBody.appendChild(div);return function(q){div.innerHTML='&shy;<style media="'+q+'"> #mq-test-1 { width: 42px; }</style>';docElem.insertBefore(fakeBody,refNode);bool=div.offsetWidth===42;docElem.removeChild(fakeBody);return{matches:bool,media:q}}}(window.ut_doc||window.top.document);(function(win,rules,mediastyles){"use strict";mediastyles=mediastyles||[];rules=rules||[];var respond={};win["respond"+(new Date).getTime()]=respond;respond.update=function(){};respond.mediaQueriesSupported=win.matchMedia&&win.matchMedia("only all").matches;var doc=win.document,docElem=doc.documentElement,appendedEls=[],parsedSheets={},resizeThrottle=30,head=doc.getElementsByTagName("head")[0]||docElem,links=head.getElementsByTagName("link"),lastLink=links&&links[links.length-1],links=null,lastCall,resizeDefer,getEmValue=function(){var ret,div=doc.createElement("div"),body=doc.body,fakeUsed=false;div.style.cssText="position:absolute;font-size:1em;width:1em";if(!body){body=fakeUsed=doc.createElement("body");body.style.background="none"}body.appendChild(div);docElem.insertBefore(body,docElem.firstChild);ret=div.offsetWidth;if(fakeUsed){docElem.removeChild(body)}else{body.removeChild(div)}ret=eminpx=parseFloat(ret);return ret},eminpx,applyMedia=function(fromResize){var name="clientWidth",docElemProp=docElem[name],currWidth=doc.compatMode==="CSS1Compat"&&docElemProp||doc.body[name]||docElemProp,currHeight=win.top.innerHeight||doc.compatMode==="CSS1Compat"&&win.top.document.documentElement.clientHeight||doc.body.clientHeight,styleBlocks={},now=(new Date).getTime();if(fromResize&&lastCall&&now-lastCall<resizeThrottle){win.clearTimeout(resizeDefer);resizeDefer=win.setTimeout(applyMedia,resizeThrottle);return}else{lastCall=now}for(var i in mediastyles){if(mediastyles.hasOwnProperty(i)){var thisstyle=mediastyles[i],minw=thisstyle.minw,maxw=thisstyle.maxw,minwnull=minw===null,maxwnull=maxw===null,minh=thisstyle.minh,maxh=thisstyle.maxh,minhnull=minh===null,maxhnull=maxh===null,em="em";if(!!minw){minw=parseFloat(minw)*(minw.indexOf(em)>-1?eminpx||getEmValue():1)}if(!!maxw){maxw=parseFloat(maxw)*(maxw.indexOf(em)>-1?eminpx||getEmValue():1)}if(!!minh){minh=parseFloat(minh)*(minh.indexOf(em)>-1?eminpx||getEmValue():1)}if(!!maxh){maxh=parseFloat(maxh)*(maxh.indexOf(em)>-1?eminpx||getEmValue():1)}if(!thisstyle.hasquery||(!minwnull||!maxwnull||!minhnull||!maxhnull)&&(minwnull||currWidth>=minw)&&(maxwnull||currWidth<=maxw)&&(minhnull||currHeight>=minh)&&(maxhnull||currHeight<=maxh)){if(!styleBlocks[thisstyle.media]){styleBlocks[thisstyle.media]=[]}styleBlocks[thisstyle.media].push(rules[thisstyle.rules])}}}for(var j in appendedEls){if(appendedEls[j]&&appendedEls[j].parentNode){appendedEls[j].parentNode.removeChild(appendedEls[j])}}for(var k in styleBlocks){if(styleBlocks.hasOwnProperty(k)){var ss=doc.createElement("style"),css=styleBlocks[k].join("\
");ss.type="text/css";ss.media=k;if(!lastLink){lastLink=ss;head.appendChild(ss)}else{head.insertBefore(ss,lastLink.nextSibling)}if(ss.styleSheet){ss.styleSheet.cssText=css}else{ss.appendChild(doc.createTextNode(css))}appendedEls.push(ss)}}};function callMedia(){applyMedia(true)}if(win.addEventListener){win.addEventListener("resize",callMedia,false)}else if(win.attachEvent){win.attachEvent("onresize",callMedia)}callMedia();})(window.ut_win||window, [], [])
var isMobile = function() {
  var ismobile = false;
  (function (a) {
    ismobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
  })(navigator.userAgent || navigator.vendor || window.opera);

  return ismobile;
};

var isUndefined = function (obj) {
      return typeof obj === 'undefined';
    },
    setDefault = function (obj, val) {
      if (isUndefined(obj)) {
        return val;
      } else {
        return obj;
      }
    },getTopWindow = function () {
      // Get the top most accesible window
      var _d = window,
        _try = 10; // Prevent infinite loop
      try {
        while (_d.parent.self !== _d.self &&
        !isUndefined(_d.parent.document) && // Safari not catching exception
        _try--) {
          _d = _d.parent;
        }
      } catch (e) {
        // __log('warn', 'Cross-origin Iframe');
      }
      return _d;
    };
var topWindow = getTopWindow();
if (window.SFscreenshift) {

    SFscreenshift.stayInContainer('.g1-body-inner');

  if (isMobile()) {

    	// SFscreenshift.fixedOffset(150);
		SFscreenshift.style('top', '60px', 'collapsed');
    	SFscreenshift.style('top', '106px', 'banner');
		SFscreenshift.style('z-index', '1500010', 'expanded');
	// SFscreenshift.style('z-index', '1032', 'collapsed');
	// SFscreenshift.anchor('#topnav');
	if (!window._spads) {
	  window._spads = {};
	}
	var adhesionBanner;
	window._spads = setDefault(window._spads, {});
	_spads.formats = setDefault(_spads.formats, {});
	_spads.formats['254'] = setDefault(_spads.formats['254'], {});
	_spads.formats['254'].callbacks = setDefault(_spads.formats['254'].callbacks, {});
	_spads.formats['254'].callbacks.adEvent = setDefault(_spads.formats['254'].callbacks.adEvent, []);
	if (_spads.formats['254'].callbacks.adEvent instanceof Function) {
	  _spads.formats['254'].callbacks.adEvent = [_spads.formats['254'].callbacks.adEvent];
	}
	_spads.formats['254'].callbacks.adEvent.push(function (id, type) {
		if (type == "exp") {
		  adhesionBanner = topWindow.document.querySelector(".mobile-footer-ad");
		  if (adhesionBanner) {
			adhesionBanner.style['flex'] = 'inherit';

			adhesionBanner.style['z-index'] = '-10';
			adhesionBanner.setAttribute('style', 'z-index:-10 !important');
		  }
		}
	  });

	  
  }
else {
    	SFscreenshift.fixedOffset(50);
	SFscreenshift.style('top', '60px', 'collapsed');
	// SFscreenshift.style('z-index', '1032', 'collapsed');
	
	
	// SFscreenshift.anchor('#page');
	if (!window._spads) {
	  window._spads = {};
	}
	var adhesionBanner;
	window._spads = setDefault(window._spads, {});
	_spads.formats = setDefault(_spads.formats, {});
	_spads.formats['254'] = setDefault(_spads.formats['254'], {});
	_spads.formats['254'].callbacks = setDefault(_spads.formats['254'].callbacks, {});
	_spads.formats['254'].callbacks.adEvent = setDefault(_spads.formats['254'].callbacks.adEvent, []);
	if (_spads.formats['254'].callbacks.adEvent instanceof Function) {
	  _spads.formats['254'].callbacks.adEvent = [_spads.formats['254'].callbacks.adEvent];
	}

} 
}              
