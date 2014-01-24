Chromalert
==========

jQuery plugin for creating notifications in Google Chrome


Usage
=====

include the script after loading jQuery

```
    <head>
    ...
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="jquery.chromalert.min.js"></script>
    ...
    </head>
```

Then call chromalert as such

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
