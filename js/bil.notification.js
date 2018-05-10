function createSnackBar(text, delay){

	if(delay===undefined){
		delay = 3000;
	}

	var snackbar = document.createElement("div");
	snackbar.className = "snackbar";

	var snackbarContentCell = document.createElement("div");
	snackbarContentCell.className = "snackbar-content-cell";

	var snackbarActionCell = document.createElement("div");
	snackbarActionCell.className = "snackbar-action-cell";



	var btnAction = document.createElement("button");
	btnAction.className = "action";
	btnAction.innerHTML = "Dismiss";

	snackbarActionCell.appendChild(btnAction);

	var content = document.createTextNode(text);
	snackbarContentCell.appendChild(content);

	snackbar.appendChild(snackbarContentCell);
	snackbar.appendChild(snackbarActionCell);

	document.body.appendChild(snackbar);

	snackbar.className = "snackbar show";

	var container = document.body;

	var timer = new Timer(function() {
		snackbar.className = snackbar.className.replace("show", "hide");
		setTimeout(function(){
			if(isDescendant(container, snackbar)){
				container.removeChild(snackbar);
			}
		},500);
	}, delay);

	// var timeout = setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); document.body.removeChild(snackbar);}, 3000);

	btnAction.onclick = function(event){
		clearTimeout(timer.getTimer());
		snackbar.className = snackbar.className.replace("show", "hide");
		setTimeout(function(){document.body.removeChild(snackbar);},500)
	}

	snackbar.onmouseover = function(){
		timer.pause();
	};

	snackbar.onmouseout = function(){
		timer.setRemaining(delay);
		timer.resume();
	};
}

function Timer(callback, delay) {
	var timerId, start, remaining = delay;

	this.pause = function() {
		window.clearTimeout(timerId);
		remaining -= new Date() - start;
	};

	this.resume = function() {
		start = new Date();
		window.clearTimeout(timerId);
		timerId = window.setTimeout(callback, remaining);
	};

	this.setRemaining = function(timeMs){
		remaining = timeMs;
	}

	this.getTimer = function(){
		return timerId;
	}

	this.resume();
}

function isDescendant(parent, child) {
	var node = child.parentNode;
	while (node != null) {
		if (node == parent) {
			return true;
		}
		node = node.parentNode;
	}
	return false;
}

function showNotification(type, title, text, delay, onTop){

	if(onTop===undefined){
		onTop = false;
	}

	if (delay===undefined) {
		delay = 3000;
	}

	var container = document.getElementById("notification-container");
	if(container==undefined){
		container = document.createElement("div");
		container.id = "notification-container";
		document.body.appendChild(container);
	}
	
	var notification = document.createElement("div");

	notification.className = type + " notification";
	
	var closeSpan = document.createElement("span");
	closeSpan.className = "close";
	closeSpan.innerHTML = "&times;";
	notification.appendChild(closeSpan);

	var iconContainer = document.createElement("div");
	iconContainer.className = "icon-container";

	var notifIcon = document.createElement("i");
	
	switch(type) {
		case "success":
			notifIcon.className = "bi bi-tick notification-icon";
			break;
		case "warning":
			notifIcon.className = "bi bi-exclamation notification-icon";
			break;
		case "danger":
			notifIcon.className = "bi bi-cross notification-icon";
			break;
		case "info":
			notifIcon.className = "bi bi-info-circle notification-icon";
			break;
		default:
			notifIcon.style.display = "inline-block"
	}

	notifIcon.style.padding = "0px 12px 0px 5px";
	// notifIcon.setAttribute("aria-hidden", "true");

	iconContainer.appendChild(notifIcon);

	var content = document.createTextNode(text);
	var contentDiv = document.createElement("div");
	contentDiv.className = "notification-content";

	var titleContent = document.createTextNode(title);

	var pTitle = document.createElement("p");
	pTitle.className = "notification-title";

	pTitle.appendChild(titleContent);



	var pMessage = document.createElement("p");
	pMessage.className = "notification-message";

	pMessage.appendChild(content);

	notification.appendChild(iconContainer);
	

	contentDiv.appendChild(pTitle);
	contentDiv.appendChild(pMessage);


	notification.appendChild(contentDiv);

	if((container.childNodes.length > 0) && (onTop)){
		container.insertBefore(notification, container.childNodes[0]);
	}else{
		container.appendChild(notification);
	}

	notification.className = type + " notification show";

	var timer = new Timer(function() {
		notification.className = notification.className.replace("show", "hide");
		setTimeout(function(){
			if(isDescendant(container, notification)){
				container.removeChild(notification);
			}
			removeNotificationContainer(container);
		},500);
	}, delay);

	notification.onclick = function(){
		clearTimeout(timer.getTimer());
		this.className = this.className.replace("show", "hide");
		setTimeout(function(){container.removeChild(notification);removeNotificationContainer(container);},500)
	}

	notification.onmouseover = function(){
		timer.pause();
	};

	notification.onmouseout = function(){
		timer.setRemaining(delay);
		timer.resume();
	};
}

function clearNotifications(){
	var container = document.getElementById("notification-container");
	if(container){
		document.body.removeChild(container);
	}
}

function removeNotificationContainer(container){
	if(container.childNodes.length==0){
		var body = document.body;
		if(isDescendant(body,container)){
			body.removeChild(container);
		}
	}
}
