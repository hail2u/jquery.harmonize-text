/*
 jQuery Plugin: Harmonize Text - version 0.4.0

 LICENSE: http://hail2u.mit-license.org/2011
*/
(function(e){e.fn.harmonizeText=function(){this.each(function(){var a=e(this),b=function(){var c=parseInt(a.css("font-size","1px").css("font-size"),10),b=e("<div/>").css({display:"none","font-size":c+"px","border-collapse":a.css("border-collapse"),"border-left-width":a.css("border-left-width"),"border-right-width":a.css("border-right-width"),"box-sizing":a.css("box-sizing"),"font-family":a.css("font-family"),"font-style":a.css("font-style"),"font-variant":a.css("font-variant"),"font-weight":a.css("font-weight"),
"letter-spacing":a.css("letter-spacing"),"padding-left":a.css("padding-left"),"padding-right":a.css("padding-right"),"text-transform":a.css("text-transform"),"white-space":a.css("white-space"),"word-break":a.css("word-break"),"word-spacing":a.css("word-spacing"),"word-wrap":a.css("word-wrap")}).append(a.contents().clone()).appendTo("body"),f=a.width(),d=b.width();if(d<f){for(;d<f;)c*=f/d,b.css("font-size",c+"px"),d=b.width();for(;d>=f;)c-=1,b.css("font-size",c+"px"),d=b.width()}a.css("font-size",
c+"px");b.remove()};b();e(window).delayesize(b)});return this};var g=function(a){var b;return function(){var c=arguments;b&&clearTimeout(b);b=setTimeout(function(){a.apply(this,c);b=null},100)}};e.fn.extend({delayesize:function(a){return a?this.bind("resize",g(a)):this.trigger("delayesize")}})})(jQuery);
