Chromalert
==========

jQuery plugin for creating notifications in Google Chrome


Usage
=====

include the script in the

```
    <head>
    ...
    <script src="/js/jquery.chromalert.js"></script>
    ...
    </head>

```

The call as such:

```
    var cAlert = $.chromalert();
    cAlert.show();

```

The default options can be overridden by passing an object to the chromalert function
```
{
    icon    : '//www.google.com/images/icons/product/chrome-32.png', // Icon of the notification
    title   : 'Chromalert',                                          // Title of the notification
    body    : 'This is a notification from Chromalert',              // Body of the notification
    link    : null,                                                  // Link to browse to upon clicking the notification
    timeout : 3000                                                   // Milliseconds to show notification
}

```
