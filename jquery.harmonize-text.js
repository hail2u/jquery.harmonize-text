/**
 * @preserve jQuery Plugin: Harmonize Text - version 0.4.0
 *
 * LICENSE: http://hail2u.mit-license.org/2011
 */

/*jslint indent: 2, browser: true */
/*global jQuery, $ */

(function ($) {
  "use strict";

  $.fn.harmonizeText = function () {
    this.each(function () {
      var target = $(this),
        harmonizer = function () {
          var fontSize = parseInt(target.css("font-size", "1px").css("font-size"), 10),
            temp = $("<div/>").css({
              "display":   "none",
              "font-size": fontSize + "px",
              "border-collapse":    target.css("border-collapse"),
              "border-left-width":  target.css("border-left-width"),
              "border-right-width": target.css("border-right-width"),
              "box-sizing":         target.css("box-sizing"),
              "font-family":        target.css("font-family"),
              "font-style":         target.css("font-style"),
              "font-variant":       target.css("font-variant"),
              "font-weight":        target.css("font-weight"),
              "letter-spacing":     target.css("letter-spacing"),
              "padding-left":       target.css("padding-left"),
              "padding-right":      target.css("padding-right"),
              "text-transform":     target.css("text-transform"),
              "white-space":        target.css("white-space"),
              "word-break":         target.css("word-break"),
              "word-spacing":       target.css("word-spacing"),
              "word-wrap":          target.css("word-wrap")
            }).append(target.contents().clone()).appendTo("body"),
            targetWidth = target.width(),
            tempWidth = temp.width();

          if (tempWidth < targetWidth) {
            while (tempWidth < targetWidth) {
              fontSize *= (targetWidth / tempWidth);
              temp.css("font-size", fontSize + "px");
              tempWidth = temp.width();
            }

            while (tempWidth >= targetWidth) {
              fontSize = fontSize - 1;
              temp.css("font-size", fontSize + "px");
              tempWidth = temp.width();
            }
          }

          target.css("font-size", fontSize + "px");
          temp.remove();
        };

      harmonizer();

      $(window).delayesize(harmonizer);
    });

    return this;
  };

  var delay = function (fn) {
    var timeout;

    return function () {
      var self = this,
        args = arguments,
        delayed = function () {
          fn.apply(this, args);
          timeout = null;
        };

      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(delayed, 100);
    };
  };

  // delayesize (delayed resize) event
  $.fn.extend({
    delayesize: function (fn) {
      return fn ? this.bind("resize", delay(fn)) : this.trigger("delayesize");
    }
  });
}(jQuery));
