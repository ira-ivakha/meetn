
function validateNumbers(field) {

if (field.value == "") {
	alert("Complete the required fields please");
	field.focus();
	field.select();
	return false;
}
else
{
	var valid = "0123456789"
	var ok = true;
	var temp;
	for (var i=0; i<field.value.length; i++) {
		temp = "" + field.value.substring(i, i+1);
		if (valid.indexOf(temp) == "-1") ok = false;
	}
	if (ok==false) {
		alert("Error. Only numbers are accepted");
		field.focus();
		field.select();
		return false;
	}
	else {return true;}
} 
}

function checkFormat(string)
{
    var re = /^[\w][\w\.\-]{1,12}$/i;
    if(!re.test(string))
    {	
        alert("No special characters are allowed. Only contain letters and numbers ");
        return false;
    }
return true;
}   
            
function checkFormatDB(obj)
{
        
	  if (window.RegExp) {
	    var r2 = '"';
	    var msAlert = "', %, "+r2;
		var reg1str = "(\\')|(\\%)|(\\\")";
		var reg1 = new RegExp(reg1str);
			if (!reg1.test(obj.value)){
				return true;
			}else{
			    alert("No " + msAlert + " characters are allowed.");
			    obj.focus();
				return false;
			}
	  }else{
	  return false;
	  } 

}             
            
function validateCombos(field) {

	if (field.value=="0")
        {
        alert("Select a valid option please");
		field.focus();
		return false;
	}
	else {return true;}
}

function validateMinSize(field, minSize) 
        {
        if (field.value.length < minSize)  
            {
              alert("Complete the fields please");
              field.focus();
              field.select();
              return false;
              }
              else
                {
                    return true;
                }
        }
        
function validateMinSizeDepartment(field, minSize) 
        {
        if (field.value.length < minSize)  
            {
              alert("All fields are required.  Please complete this form fully.");
              field.focus();
              field.select();
              return false;
              }
              else
                {
                    return true;
                }
        }        
        
function validateCurrency(field) {
if (field.value == "") {
	alert("Complete the fields please");
	field.focus();
	field.select();
	return false;
}
else
{
	var valid = "0123456789.,"
	var ok = true;
	var temp;
	for (var i=0; i<field.value.length; i++) {
		temp = "" + field.value.substring(i, i+1);
		if (valid.indexOf(temp) == "-1") ok = false;
	}
	if (ok==false) {
		alert("Error. Invalid information");
		field.focus();
		field.select();
		return false;
	}
	else {return true;}
}  
}

function validateCurrencyRequired(field) {
if (field.value == "" || field.value==0)  {
	alert("Complete the fields please");
	field.focus();
	field.select();
	return false;
}
else
{
	var valid = "0123456789.,"
	var ok = true;
	var temp;
	for (var i=0; i<field.value.length; i++) {
		temp = "" + field.value.substring(i, i+1);
		if (valid.indexOf(temp) == "-1") ok = false;
	}
	if (ok==false) {
		alert("Error. Invalid information");
		field.focus();
		field.select();
		return false;
	}
	else {return true;}
}  

}
function validateQty(field) {

if (field.value == 0) {
	alert("The quantity cannot be 0");
	field.focus();
	field.select();
	return false;
}
else {return true;}

}

function validateQtyRange(field, min, max) {
    if (field.value < min || field.value > max) {
	    alert("The value range is "+min+" - "+max);
	    field.focus();
	    field.select();
	    return false;
    }
    else {return true;}
}

function verifyEmail(mailStr)
{
    if (mailStr.value == "" || mailStr.value.indexOf("@") == -1 || mailStr.value.indexOf(".") == -1 || mailStr.value.length<6)
    {
    alert("Invalid e-mail address");
    mailStr.focus(); 
    return false; 
    }else{
    return true;
    }
}

function emailCheck (emailStr) 
{
            var checkTLD=1;

            var knownDomsPat=/^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;

            var emailPat=/^(.+)@(.+)$/;

            var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";

            var validChars="\[^\\s" + specialChars + "\]";

            var quotedUser="(\"[^\"]*\")";

            var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;

            var atom=validChars + '+';

            var word="(" + atom + "|" + quotedUser + ")";

            var userPat=new RegExp("^" + word + "(\\." + word + ")*$");

            var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");

            var matchArray=emailStr.match(emailPat);

            if (matchArray==null) {

            //alert("Email address seems incorrect (check @ and .'s)");

            return false;

            }

            var user=matchArray[1];

            var domain=matchArray[2];

            for (i=0; i<user.length; i++) {

            if (user.charCodeAt(i)>127) {

            //alert("Ths username contains invalid characters.");

            return false;

               }

            }

            for (i=0; i<domain.length; i++) {

            if (domain.charCodeAt(i)>127) {

            //alert("Ths domain name contains invalid characters.");

            return false;

               }

            }
            if (user.match(userPat)==null) {
            //alert("The username doesn't seem to be valid.");

            return false;
            }
            var IPArray=domain.match(ipDomainPat);

            if (IPArray!=null) {

            for (var i=1;i<=4;i++) {

            if (IPArray[i]>255) {

            //alert("Destination IP address is invalid!");

            return false;
               }
            }
            return true;

            }
            var atomPat=new RegExp("^" + atom + "$");

            var domArr=domain.split(".");

            var len=domArr.length;

            for (i=0;i<len;i++) {

            if (domArr[i].search(atomPat)==-1) {

            //alert("The domain name does not seem to be valid.");

            return false;

               }
            }
            if (checkTLD && domArr[domArr.length-1].length!=2 && 

            domArr[domArr.length-1].search(knownDomsPat)==-1) {

            //alert("The address must end in a well-known domain or two letter " + "country.");
            return false;
            }
            if (len<2) {
            //alert("This address is missing a hostname!");

            return false;
            }
            return true;
}



function Left(str, n)
        /***
                IN: str - the string we are LEFTing
                    n - the number of characters we want to return

                RETVAL: n characters from the left side of the string
        ***/
        {
                if (n <= 0)     // Invalid bound, return blank string
                        return "";
                else if (n > String(str).length)   // Invalid bound, return
                        return str;                // entire string
                else // Valid bound, return appropriate substring
                        return String(str).substring(0,n);
        }
        
        
function chkForm(){

            //Get all Forms in document

            var allForm  = document.forms;        

            //Declare array (see function elementsInForm)

            var allForms = new Array ();

            //Declare index of array

            var ind = -1;

            //Declare string contains all data

            var strForm = 'ID\t\tNAME\t\tVALUE\n';

            //Loop for each Form 

            for ( var formElemnt, i = 0; ( formElemnt = allForm[i] ); i++ ){

                        //Get all elements for each form

                        var formElements = document.getElementById(formElemnt.id).elements;

                        //Loop for each element in form

                        for (var inFormElemnt , j=0; (inFormElemnt = formElements[j]); j++ ){

                             ind ++;

                             allForms[ind] = new elementsInForm (formElemnt.id, formElemnt.action, inFormElemnt.id, inFormElemnt.name, inFormElemnt.value);

                        }

                        //Form without elements

                        if (j == 0) {

                             ind ++;

                             allForms[ind] = new elementsInForm (formElemnt.id, formElemnt.action, 'Form Vacio','Form Vacio','Form Vacio');
                        }

            }

            //Check if exists any form in document

            if (i > 0) {

                  //Generate String with all data document

                  var currentForm = allForms[0].formID;

                  strForm += 'Form : ' + currentForm +' \n Action: '+ allForms[0].formAction  + '\n';

                  strForm += '--------------------------------------------\n';

                  for (i = 0; i <= ind ; i++ ){

                        if (currentForm == allForms[i].formID){

                             strForm += allForms[i].elementID +'\t\t'+  allForms[i].elementName +'\t\t'+ allForms[i].elementValue +'\n';

                        }else{

                             currentForm = allForms[i].formID;

                             strForm += '\n\nForm : ' + currentForm +' Action: '+ allForms[i].formAction  + '\n';

                             strForm += '--------------------------------------------\n';                  

                             strForm += allForms[i].elementID +'\t\t'+  allForms[i].elementName +'\t\t'+ allForms[i].elementValue +'\n';
                        }
                  }

            }else{
                  strForm  = 'Este document no tiene Forms';
            }
            alert (strForm);
      }     

      function elementsInForm (formID, formAction, elementID, elementName, elementValue){
            this.formID = formID;
            this.formAction = formAction;
            this.elementID = elementID;
            this.elementName = elementName;
            this.elementValue = elementValue;
      }     