/**
 * @preserve jQuery Plugin: Harmonize Text - version 0.1.1
 * http://github.com/hail2u/jquery.harmonize-text
 * Change font-size of selected elements to harmonize text with their parent element.
 *
 * Copyright (c) 2011 Kyo Nagashima <kyo@hail2u.net>
 * This library licensed under MIT license:
 * http://opensource.org/licenses/mit-license.php
 */

(function ($) {
  $.fn.harmonizeText = function () {
    this.each(function () {
      var target = $(this);

      var harmonizer = function () {
        var fontSize = parseInt(target.css("font-size", "1px").css("font-size"), 10);

        var temp = $("<div/>").css({
          "display":     "none",
          "font-family": target.css("font-family"),
          "font-size":   fontSize + "px"
        }).text(target.text()).appendTo("body");

        var targetWidth = target.width();
        var tempWidth = temp.width();

        if (tempWidth < targetWidth) {
          while (tempWidth < targetWidth) {
            fontSize *= (targetWidth / tempWidth);
            temp.css("font-size", fontSize + "px");
            tempWidth = temp.width();
          }

          while (tempWidth >= targetWidth) {
            fontSize--;
            temp.css("font-size", fontSize + "px");
            tempWidth = temp.width();
          }
        }

        target.css("font-size", fontSize + "px");
        temp.remove();
      };

      harmonizer();

      $(window).resize(harmonizer);
    });

    return this;
  };
})(jQuery);
