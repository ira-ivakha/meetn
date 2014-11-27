
//For Buttons
function onClickGPI(URL){
	window.open(URL);
}

//Call onLoad Body
function setAttendeeSlidesScreenDefault(){	
	if (AttendeeSlidesMenuItemFlag == 1) {
	    if (!((EventTypeID == 3)||(Preview == '3'))) {
	        document.getElementById('AttendeeSlidesScreen').innerHTML = document.getElementById('AttendeeSlidesScreenDefault').innerHTML;
	        if (startPage == 'stress') {
	            listenTelephone();
	        }
	    } else {
	        if (isAutomaticReplay == 1) {
	            document.getElementById('urlPres').value = urlReplay + '1';
				document.getElementById('AttendeeSlidesScreen').style.visibility = 'hidden';
				document.getElementById('AttendeeWelcomeScreen').style.visibility = '';
	        } else {
	            document.getElementById('urlPres').value = "";
	        }
	    }
	} else {
		if (Preview == '3') {changeTab(document.getElementById('AttendeeWelcomeMenuItem'));}
		/*if (EventTypeID == 3 && isReplayEnable == 1){
			chooseListenWebcast();
		}*/
	}
}

function changeTab(obj) {
	var menuItem = obj.id;
	switch(menuItem){
		case 'AttendeeWelcomeMenuItem':
			document.getElementById('VideoPlayerOther').style.visibility = '';
			document.getElementById('AttendeeWelcomeScreen').style.visibility = '';
			if (AttendeeListenMenuItemFlag == 1) {
				document.getElementById('AttendeeListenScreen').style.visibility = 'hidden';
			}
			if (AttendeeSlidesMenuItemFlag == 1) {
				document.getElementById('AttendeeSlidesScreen').style.visibility = 'hidden';
			}			
			if (EnableChatBrainstormFlag == 1 || EnableChatStandardFlag == 1 && isChatEnable == 1) {
				document.getElementById('AttendeeChatScreen').style.visibility = 'hidden';
			}
			document.getElementById('AttendeeOptinScreen').style.visibility = 'hidden';
			if (AttendeeLinksMenuItemFlag == 1) {
				document.getElementById('AttendeeLinksScreen').style.visibility = 'hidden';
			}
			break;
		case 'AttendeeListenMenuItem':
			document.getElementById('VideoPlayerOther').style.visibility = '';
			document.getElementById('AttendeeWelcomeScreen').style.visibility = 'hidden';
			if (AttendeeListenMenuItemFlag == 1) {
				document.getElementById('AttendeeListenScreen').style.visibility = '';
			}
			if (AttendeeSlidesMenuItemFlag == 1) {
				document.getElementById('AttendeeSlidesScreen').style.visibility = 'hidden';
			}
			if (EnableChatBrainstormFlag == 1 || EnableChatStandardFlag == 1 && isChatEnable == 1) {
				document.getElementById('AttendeeChatScreen').style.visibility = 'hidden';
			}
			document.getElementById('AttendeeOptinScreen').style.visibility = 'hidden';
			if (AttendeeLinksMenuItemFlag == 1) {
				document.getElementById('AttendeeLinksScreen').style.visibility = 'hidden';
			}
			break;
		case 'AttendeeSlidesMenuItem':
		    if (document.getElementById('urlPres').value == "" && EventTypeID == 3){
				document.getElementById('urlPres').value = urlReplay + '1';
				document.getElementById('AttendeeSlidesScreenFrame').src = urlReplay + '1';
            }
			document.getElementById('VideoPlayerOther').style.visibility = 'hidden';
			document.getElementById('AttendeeWelcomeScreen').style.visibility = 'hidden';
			if (AttendeeListenMenuItemFlag == 1) {
				document.getElementById('AttendeeListenScreen').style.visibility = 'hidden';
			}
			if (AttendeeSlidesMenuItemFlag == 1) {
			    document.getElementById('AttendeeSlidesScreen').style.visibility = '';
			}
			if (EnableChatBrainstormFlag == 1 || EnableChatStandardFlag == 1 && isChatEnable == 1) {
				document.getElementById('AttendeeChatScreen').style.visibility = 'hidden';
			}
			document.getElementById('AttendeeOptinScreen').style.visibility = 'hidden';
			if (AttendeeLinksMenuItemFlag == 1) {
				document.getElementById('AttendeeLinksScreen').style.visibility = 'hidden';
			}
			break;
		case 'AttendeeQuestionMenuItem':
			document.getElementById('VideoPlayerOther').style.visibility = '';
			document.getElementById('AttendeeWelcomeScreen').style.visibility = 'hidden';
			if (AttendeeListenMenuItemFlag == 1) {
				document.getElementById('AttendeeListenScreen').style.visibility = 'hidden';
			}
			if (AttendeeSlidesMenuItemFlag == 1) {
				document.getElementById('AttendeeSlidesScreen').style.visibility = 'hidden';
			}
			if (isQAEnable == 1) {
				document.getElementById('AttendeeQuestionScreen').style.visibility = '';
			}
			if (EnableChatBrainstormFlag == 1 || EnableChatStandardFlag == 1 && isChatEnable == 1) {
				document.getElementById('AttendeeChatScreen').style.visibility = 'hidden';
			}
			document.getElementById('AttendeeOptinScreen').style.visibility = 'hidden';
			if (AttendeeLinksMenuItemFlag == 1) {
				document.getElementById('AttendeeLinksScreen').style.visibility = 'hidden';
			}
			break;
		case 'AttendeeChatMenuItem':
			document.getElementById('VideoPlayerOther').style.visibility = '';
			document.getElementById('AttendeeWelcomeScreen').style.visibility = 'hidden';
			if (AttendeeListenMenuItemFlag == 1) {
				document.getElementById('AttendeeListenScreen').style.visibility = 'hidden';
			}
			if (AttendeeSlidesMenuItemFlag == 1) {
				document.getElementById('AttendeeSlidesScreen').style.visibility = 'hidden';
			}
			if (EnableChatBrainstormFlag == 1 || EnableChatStandardFlag == 1 && isChatEnable == 1) {
				document.getElementById('AttendeeChatScreen').style.visibility = '';
			}
			document.getElementById('AttendeeOptinScreen').style.visibility = 'hidden';
			if (AttendeeLinksMenuItemFlag == 1) {
				document.getElementById('AttendeeLinksScreen').style.visibility = 'hidden';
			}
			break;
		case 'AttendeeLinksMenuItem':
			document.getElementById('VideoPlayerOther').style.visibility = '';
			document.getElementById('AttendeeWelcomeScreen').style.visibility = 'hidden';
			if (AttendeeListenMenuItemFlag == 1) {
				document.getElementById('AttendeeListenScreen').style.visibility = 'hidden';
			}
			if (AttendeeSlidesMenuItemFlag == 1) {
				document.getElementById('AttendeeSlidesScreen').style.visibility = 'hidden';
			}
			if (EnableChatBrainstormFlag == 1 || EnableChatStandardFlag == 1 && isChatEnable == 1) {
				document.getElementById('AttendeeChatScreen').style.visibility = 'hidden';
			}
			document.getElementById('AttendeeOptinScreen').style.visibility = 'hidden';
			if (AttendeeLinksMenuItemFlag == 1) {
				document.getElementById('AttendeeLinksScreen').style.visibility = '';
			}
			break;
		case 'AttendeeOptinMenuItem':
			document.getElementById('VideoPlayerOther').style.visibility = '';
			document.getElementById('AttendeeWelcomeScreen').style.visibility = 'hidden';
			if (AttendeeListenMenuItemFlag == 1){
			    document.getElementById('AttendeeListenScreen').style.visibility = 'hidden';
			}
			if (AttendeeSlidesMenuItemFlag == 1) {
				document.getElementById('AttendeeSlidesScreen').style.visibility = 'hidden';
			}
			if (EnableChatBrainstormFlag == 1 || EnableChatStandardFlag == 1 && isChatEnable == 1) {
				document.getElementById('AttendeeChatScreen').style.visibility = 'hidden';
			}
			document.getElementById('AttendeeOptinScreen').style.visibility = '';
			if (AttendeeLinksMenuItemFlag == 1) {
				document.getElementById('AttendeeLinksScreen').style.visibility = 'hidden';
			}
			break;																													
	}
	lastTabSelected = obj;
}
					
function listenTelephone() {
	document.getElementById('AttendeeSlidesScreen').innerHTML = document.getElementById('AttendeeSlides').innerHTML;
	document.getElementById('AttendeeSlidesScreenFrame').src = phoneUrlAttendee;
	changeTab(document.getElementById('AttendeeSlidesMenuItem'));
}

function listenWebcast2() {
	document.getElementById('AttendeeSlidesScreen').innerHTML = document.getElementById('AttendeeSlides').innerHTML;
	document.getElementById('AttendeeSlidesScreenFrame').src = urlAttendee;
	changeTab(document.getElementById('AttendeeSlidesMenuItem'));
}

function listenWebcast(){
    if (document.getElementById('urlPres').value == '') {
        document.getElementById('AttendeeSlidesScreen').innerHTML = document.getElementById('AttendeeSlides').innerHTML;
        //document.getElementById('AttendeeSlidesScreenFrame').src = urlAttendee + EncConferenceID;
		document.getElementById('AttendeeSlidesScreenFrame').src = urlAttendee;
        document.getElementById('urlPres').value = document.getElementById('AttendeeSlidesScreenFrame').src;
    }
    changeTab(document.getElementById('AttendeeSlidesMenuItem'));
}

function listenReplay(recordingIndex){
   // if (!(recordingIndexSelected == recordingIndex)) {
        recordingIndexSelected = recordingIndex;
        //urlPres = urlReplay + String(recordingIndexSelected);
        //urlPres = urlReplay + recordingIndexSelected;
        urlReplay = String(urlReplay);
        recordingIndexSelected = String(recordingIndexSelected);
        var urlPres = urlReplay + recordingIndexSelected;
        document.getElementById('urlPres').value = urlPres;
        document.getElementById('AttendeeSlidesScreenFrame').src = urlPres;
 //   }
	changeTab(document.getElementById('AttendeeSlidesMenuItem'));
}

function showOptinForm(){
	changeTab(document.getElementById('AttendeeOptinMenuItem'));
}

function chooseListenWebcast() {
	if(document.getElementById("AttendeeListenWebcastScreenHidden") != null){document.getElementById('AttendeeListenScreen').innerHTML = document.getElementById('AttendeeListenWebcastScreenHidden').innerHTML;}
	if (AttendeeSlidesMenuItemFlag == 1){
		document.getElementById('AttendeeSlidesScreen').innerHTML = document.getElementById('AttendeeSlidesScreenDefault').innerHTML;
	}
	changeTab(document.getElementById('AttendeeListenMenuItem'));
}

function chooseListenWebcastSlides(){
	if (AttendeeSlidesMenuItemFlag == 1) {
		document.getElementById('AttendeeListenScreen').innerHTML = document.getElementById('AttendeeListenWebcastScreenHidden').innerHTML;
		listenWebcast();
	}else{
		chooseListenWebcast();
	}
}

function chooseListenPhone(){
	document.getElementById('AttendeeListenScreen').innerHTML = document.getElementById('AttendeeListenPhoneScreenHidden').innerHTML;
	changeTab(document.getElementById('AttendeeListenMenuItem'));
}

function checkifvalid(){
	if (validateMinSize(window.document.frmWebcastQuestion.Question, 2) == false){return false}
	return true;
}

function textCounter(field, maxlimit){
	if (field.value.length > maxlimit)field.value = field.value.substring(0, maxlimit);
}

function displayAQ(){
    var obj = document.getElementById('divAQ');
    
    if(obj.style.display == 'none'){
        obj.style.display = '';
    }else{
        obj.style.display = 'none'
    }
}

function printPage() {

    if(isChrome){
        alert('We detected that on some versions of Google Chrome, print functionality does not work correctly. If you have any inconvenience please try using a different browser.');
    }
    window.print();
}
