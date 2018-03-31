# Bill-notification #

Bill-notification is a JavaScript library that can be used to add notification feature to a web page.

### What is this repository for? ###

* Non-blocking web notification
* Version 1.0
* Demo on

### How do I get set up? ###

* Link the js file 
```
<script src="js/bill.notification.js"></script>
```

* Link the css file
```
<link rel="stylesheet" href="css/bill.notification.css">
```

* Create a notification in your script as follow
```
showNotification('notification_type',
                 'notification_title',
                 'notification_text',
                 delayTime = 5000,
                 newOnTop = false);
```

* Create a Snackbar in your script as follow
```
createSnackBar('notification_text',5000 [delayTime in ms]);
```

### Compatible Notification Types ###

* ``` success ```
* ``` danger ```
* ``` warning ```
* ``` info ```

### Who do I talk to? ###

* Repo owner or admin
