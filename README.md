# Bill-notification #

Bill-notification is a JavaScript library that can be used to add notification feature to a web page.

### What is this repository for? ###

* Non-blocking web notification
* Version 1.0
* Demo on (https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Link the js file 
```
#!HTML
<script src="js/bill.notification.js"></script>
```
* Link the css file
```
#!HTML
<link rel="stylesheet" href="css/bill.notification.css">
```
* Create a notification in your script as follow
```
#!JavaScript
showNotification('notification_type','notification_title','notification_text'), [5000 : delayTime in ms], [boolean : New notification on top]);
```
* Create a Snackbar in your script as follow
```
#!JavaScript
createSnackBar('notification_text',5000 [delayTime in ms]);
```

### Compatible Notification Types ###

* ``` success ```
* ``` danger ```
* ``` warning ```
* ``` info ```

### Who do I talk to? ###

* Repo owner or admin