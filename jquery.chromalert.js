(function($) {

    $.chromalert = function(options) {
        this.defaults = {
            icon    : '//www.google.com/images/icons/product/chrome-32.png',
            title   : 'Chromalert',
            body    : 'This is a notification from Chromalert',
            link    : null,
            timeout : 3000
        }

        this.init = function(options) {

            this.options = $.extend({}, this.defaults, options);

            if (window.webkitNotifications.checkPermission() != 0) {
                window.webkitNotifications.requestPermission();
            }
        };

        this.show = function() {
/*
            var notification = window.webkitNotifications.createNotification(
                icon,
                title,
                body
            ); */

            var notification = window.webkitNotifications.createNotification(
              this.options.icon,
              this.options.title,
              this.options.body
            );


            if (this.options.link != null) {
                notification.onclick = function() {
                    window.open(this.options.link);
                    notification.close();
                }
            }

            notification.show();

            setTimeout(function() {
                notification.close();
            }, this.options.timeout)

        }

        this.init(options);

        return this;
    }

    $.fn.chromalert = function(options) {
        return new $.chromalert(options);
    };

})(jQuery);
