//******************************************************************************************
// Application   : 	The function autopopulates call type, sub call type, and call
//					duration for all non-voice audits
//******************************************************************************************

window.setTimeout(function fn_FEXCO_Auto_Populate_Process_Audits()
{
	if(strCDA_X_field_0_99.options[strCDA_X_field_0_99.selectedIndex].text == "Process" 
	|| strCDA_X_field_0_99.options[strCDA_X_field_0_99.selectedIndex].text == "Email" 
	|| strCDA_X_field_0_99.options[strCDA_X_field_0_99.selectedIndex].text == "Letter"
	|| strCDA_X_field_0_99.options[strCDA_X_field_0_99.selectedIndex].text == "Financial"
	|| strCDA_X_field_0_99.options[strCDA_X_field_0_99.selectedIndex].text == "Emergency"
	|| strCDA_X_field_0_99.options[strCDA_X_field_0_99.selectedIndex].text == "Realex")
	{
	    document.getElementById('selectCall_Type').selectedIndex = 'Call Type';
	    document.getElementById('strCall_Duration').value = "00:00:00";
	  
	    var sub_call_type = document.getElementById('selectSubCall_Type');
	    
	    sub_call_type.options[0].text = "Sub Call Type";
	   	sub_call_type.selectedIndex = 0;
        	
	}
}, 5000);


//******************************************************************************************
// Application   : This function modifies the on click event of section headers on the page
//******************************************************************************************
function fn_Fexco_Add_ToOnClick(){

	var strFunctionalCall										=	'';
	var strFunctionalExecution									=	'';
	
	// * Adds an onlick event to imgToggle_strCDA_X_field_0_17
	imgToggle_strCDA_X_field_0_17.onclick 						= function(){
		//Create the function call from function name and parameter.
		strFunctionalCall										= 	"fn_SectionGroup_Toggle_strCDA_" 	+ intCampaign_Id + "_field_0_17();";
		strFunctionalExecution									=	eval( strFunctionalCall );
		fn_Gen_Hide('tableid_91');
	};
	
	// * Adds an onlick event to imgToggle_strCDA_X_field_0_24
	imgToggle_strCDA_X_field_0_24.onclick 						= function(){
		strFunctionalCall										= 	"fn_SectionGroup_Toggle_strCDA_" 	+ intCampaign_Id + "_field_0_24();";
		strFunctionalExecution									=	eval( strFunctionalCall );
		fn_Gen_Hide('tableid_92');
	};

	// * Adds an onlick event to imgToggle_strCDA_X_field_0_31
	imgToggle_strCDA_X_field_0_31.onclick 						= function(){
		strFunctionalCall										= 	"fn_SectionGroup_Toggle_strCDA_" 	+ intCampaign_Id + "_field_0_31();";
		strFunctionalExecution									=	eval( strFunctionalCall );
		fn_Gen_Hide('tableid_93');
	};

	// * Adds an onlick event to imgToggle_strCDA_X_field_0_38
	imgToggle_strCDA_X_field_0_38.onclick 						= function(){
		strFunctionalCall										= 	"fn_SectionGroup_Toggle_strCDA_" 	+ intCampaign_Id + "_field_0_38();";
		strFunctionalExecution									=	eval( strFunctionalCall );
		fn_Gen_Hide('tableid_94');
	};

	// * Adds an onlick event to imgToggle_strCDA_X_field_0_45
	imgToggle_strCDA_X_field_0_45.onclick 						= function(){
		strFunctionalCall										= 	"fn_SectionGroup_Toggle_strCDA_" 	+ intCampaign_Id + "_field_0_45();";
		strFunctionalExecution									=	eval( strFunctionalCall );
		fn_Gen_Hide('tableid_95');
	};
}

//******************************************************************************************
// Application   : 	This function generates the dynamic QA header row for the form
//******************************************************************************************
function fn_Fexco_DrawHeaderBlock(){
			
	var strReturn_String 										= 	'';
		
	//For compatability issues with IE7 we need to add " before and after each name
	var selectName_TeamLeader									= 	"'selectTeamLeader'";
	var selectName_Contract										= 	"'selectContract'";
	var selectName_Contact_Type									= 	"'selectContact_Type'";
	var selectName_Call_Type									= 	"'selectCall_Type'";
	var selectName_SubCall_Type									= 	"'selectSubCall_Type'";
	var strName_Call_Duration									= 	"'strCall_Duration'";
	
	var selectField_TeamLeader									= 	"'strCDA_" + intCampaign_Id + "_field_0_97'";
	var selectField_Contract									= 	"'strCDA_" + intCampaign_Id + "_field_0_98'";
	var selectField_Contact_Type								= 	"'strCDA_" + intCampaign_Id + "_field_0_99'";
	var selectField_Call_Type									= 	"'strCDA_" + intCampaign_Id + "_field_0_100'";
	var selectField_SubCall_Type								= 	"'strCDA_" + intCampaign_Id + "_field_0_101'";
	var strField_Call_Duration									= 	"'strCDA_" + intCampaign_Id + "_field_0_102'";	
	
	//Create each of the custom fields and layout as appropiate and add the fields into the on change event
	var selectTeamLeader										= 	'<select style="width:95%;" class="cssInput_Text" id="selectTeamLeader" name="selectTeamLeader" onChange="fn_Fexco_CopySelection_List1_To_List2(' 		+ selectName_TeamLeader 		+ ', ' + selectField_TeamLeader 	+ ');"><option></option></select>';
	var selectContract											= 	'<select style="width:95%;" class="cssInput_Text" id="selectContract" name="selectContract" onChange="fn_Fexco_CopySelection_List1_To_List2(' 			+ selectName_Contract 			+ ', ' + selectField_Contract 		+ ');"><option></option></select>';
	var selectContact_Type										= 	'<select style="width:95%;" class="cssInput_Text" id="selectContact_Type" name="selectContact_Type" onChange="fn_Fexco_CopySelection_List1_To_List2(' 	+ selectName_Contact_Type 		+ ', ' + selectField_Contact_Type 	+ ');"><option></option></select>';
	var selectCall_Type											= 	'<select style="width:95%;" class="cssInput_Text" id="selectCall_Type" name="selectCall_Type" onChange="fn_Fexco_CopySelection_List1_To_List2(' 		+ selectName_Call_Type 			+ ', ' + selectField_Call_Type 	+ ');"><option></option></select>';
	var selectSubCall_Type										= 	'<select style="width:95%;" class="cssInput_Text" id="selectSubCall_Type" name="selectSubCall_Type" onChange="fn_Fexco_CopySelection_List1_To_List2(' 	+ selectName_SubCall_Type 		+ ', ' + selectField_SubCall_Type 	+ ');"><option></option></select>';
	var strCall_Duration										= 	'<input style="width:95%;" type="text" class="Notes" id="strCall_Duration" name="strCall_Duration" placeholder="hh:mm:ss" value="' 						+ strCDA_X_field_0_102.value 	+ '" onChange="document.getElementById(' + strField_Call_Duration + ').value = document.getElementById(' + strName_Call_Duration + ').value;" />';		
	

	//Create the custom table and layout the fields
	//This example has a 6 cells accross and 2 down so 12 cells
	strReturn_String											= 	strReturn_String + '<table style="width:100%;">';
	//row 1		
	strReturn_String											= 	strReturn_String + '		<tr>';
	//row 1 cell 1 which holds the title
	strReturn_String											= 	strReturn_String + '			<td style="width:12%;">';
	strReturn_String											= 	strReturn_String + 'Team Leader: ';
	strReturn_String											= 	strReturn_String + '			</td>';
	
	//row 1 cell 2 which holds our first dropdown list
	strReturn_String											= 	strReturn_String + '			<td style="width:20%;">';
	strReturn_String											= 	strReturn_String + 					selectTeamLeader;
	strReturn_String											= 	strReturn_String + '			</td>';
	
	//row 1 cell 3 which holds the title
	strReturn_String											=	strReturn_String + '			<td style="width:12%;">';
	strReturn_String											=	strReturn_String + 'Contract: ';
	strReturn_String											=	strReturn_String + '			</td>';
	
	//row 1 cell 4 which holds our next dropdown list
	strReturn_String											=	strReturn_String + '			<td style="width:20%;">';
	strReturn_String											=	strReturn_String + 					selectContract;
	strReturn_String											=	strReturn_String + '			</td>';
	
	//row 1 cell 5 which holds the title
	strReturn_String											=	strReturn_String + '			<td style="width:12%;">';
	strReturn_String											=	strReturn_String + 'Contact Type: ';
	strReturn_String											=	strReturn_String + '			</td>';
	
	//row 1 cell 6 which holds our next dropdown list
	strReturn_String											=	strReturn_String + '			<td style="width:20%;">';
	strReturn_String											=	strReturn_String + 					selectContact_Type;
	strReturn_String											=	strReturn_String + '			</td>';
	
	//close off row 1
	
	strReturn_String											=	strReturn_String + '		</tr>';
	
	//row 2 - create a new row with only one td but with a column span of the number of cells and put an empty space in
	//this will space out the rows, 
	strReturn_String											=	strReturn_String + '		<tr>';
	strReturn_String											=	strReturn_String + '			<td colspan="6"> </td>';
	strReturn_String											=	strReturn_String + '		</tr>';
	
	//row 3
	strReturn_String											=	strReturn_String + '		<tr>';
	//row 3 cell 1 which holds the title
	strReturn_String											=	strReturn_String + '			<td style="width:12%;">';
	strReturn_String											=	strReturn_String + 'Call Type: ';
	strReturn_String											=	strReturn_String + '			</td>';
	
	//row 3 cell 2 which holds our next dropdown list
	strReturn_String											=	strReturn_String + '			<td style="width:20%;">';
	strReturn_String											=	strReturn_String + 					selectCall_Type;
	strReturn_String											=	strReturn_String + '			</td>';
	
	//row 3 cell 3 which holds the title
	strReturn_String											=	strReturn_String + '			<td style="width:12%;">';
	strReturn_String											=	strReturn_String + 'Sub Call Type: ';
	strReturn_String											=	strReturn_String + '			</td>';
	
	//row 3 cell 4 which holds our next dropdown list
	strReturn_String											=	strReturn_String + '			<td style="width:20%;">';
	strReturn_String											=	strReturn_String + 					selectSubCall_Type;
	strReturn_String											=	strReturn_String + '			</td>';
	
	//row 3 cell 5 which holds the title
	strReturn_String											=	strReturn_String + '			<td style="width:12%;">';
	strReturn_String											=	strReturn_String + 'Call Duration: ';
	strReturn_String											=	strReturn_String + '			</td>';
	
	//row 3 cell 6 which holds our text box
	strReturn_String											=	strReturn_String + '			<td style="width:20%;">';
	strReturn_String											=	strReturn_String + 					strCall_Duration;
	strReturn_String											=	strReturn_String + '			</td>';
	
	//close off row 3
	strReturn_String											=	strReturn_String + '		</tr>';
	strReturn_String											=	strReturn_String + '</table>';
	
	//populate to the div in the opening instructions
	
	var strTempString											= '<center>';
	strTempString												= strTempString + '<center>';
	strTempString												= strTempString +'<input type="button" id="RedirectURLAdmin_2" class="cssButton_Blue" style="width:250px; height:45px;" onclick="fn_FEXCO_Build_QueryString()" value="Click Here to Create Coaching Log" />';
	strTempString												= strTempString + '<br/>';
	strTempString												= strTempString +'<input type="button" id="btnDelete" class="btnDelete" style="width:250px; height:45px; display:none;" onclick="document.getElementById(\'strCDA_' + intCampaign_Id + '_field_33_169\').value =1;" value="Delete" />';
	strTempString												= strTempString +'<input type="button" id="btnUndoDelete" class="btnDelete" style="width:250px; height:45px; display:none;" onclick="document.getElementById(\'strCDA_' + intCampaign_Id + '_field_33_169\').value =\'\';" value="UnDo Delete" />';
	strTempString												= strTempString + '<br/>';
	

	
	strTempString												= strTempString + '</center>';
	strReturn_String											= strTempString + strReturn_String;
	
	document.getElementById('divQuality_Header').innerHTML 		=	 strReturn_String;	
	document.getElementById('divQuality_Header').style.backgroundColor 	=	'#FFFFFF';	
	fn_FEXCO_HideShowDeleteButton();
	
	objNameAdjust_Hidden 										= document.getElementById('selectContract');

}



//******************************************************************************************
// Application   : 	The function copies the entire contents of systme level dropdownlists
//					and puts them into the dynmaic dropdownlists
//******************************************************************************************
function fn_Fexco_CopyLists(){
	
	//fields in the header -as the objects are not present onLoad they must be created here
	selectTeamLeader										= 	document.getElementById('selectTeamLeader');
	objDisplay_TeamLead										=  	document.getElementById('selectTeamLeader'); // Used in the FEXCO_TeamManagement.js
	selectContract											= 	document.getElementById('selectContract');
	selectContact_Type										= 	document.getElementById('selectContact_Type');
	selectCall_Type											= 	document.getElementById('selectCall_Type');
	selectSubCall_Type										= 	document.getElementById('selectSubCall_Type');
	strCall_Duration										= 	document.getElementById('strCall_Duration');
	
	// Set the dropdown lists to be empty to have no entries
	selectTeamLeader.length 									= 	0;
	selectContract.length 										= 	0;
	selectContact_Type.length 									= 	0;
	selectCall_Type.length 										= 	0;
	selectSubCall_Type.length 									= 	0;
	strCall_Duration.length 									= 	0;
	
	// Loop through all of the drop down lists that are on the page to mirror the system set ones as IE can have issues with the inner HTML function
	for ( var i = 1 ; i <  strCDA_X_field_0_97.options.length; i++ ) {
	   selectTeamLeader.options[selectTeamLeader.length] 		= 	new Option	( strCDA_X_field_0_97.options[i].text, strCDA_X_field_0_97.options[i].value );	
	}
	for ( var i = 1; i <  strCDA_X_field_0_98.options.length; i++)  {
	   selectContract.options[selectContract.length] 			= 	new Option	( strCDA_X_field_0_98.options[i].text, strCDA_X_field_0_98.options[i].value );	
	}
	for ( var i = 1; i <  strCDA_X_field_0_99.options.length; i++ ) {
	   selectContact_Type.options[selectContact_Type.length] 	= 	new Option	( strCDA_X_field_0_99.options[i].text, strCDA_X_field_0_99.options[i].value );	
	}
	for ( var i = 1; i <  strCDA_X_field_0_100.options.length; i++ ) {
	   selectCall_Type.options[selectCall_Type.length] 		= 	new Option	( strCDA_X_field_0_100.options[i].text, strCDA_X_field_0_100.options[i].value );	
	}
	for ( var i = 1; i <  strCDA_X_field_0_101.options.length ; i++ ) {
	   selectSubCall_Type.options[selectSubCall_Type.length] 	= 	new Option	( strCDA_X_field_0_101.options[i].text, strCDA_X_field_0_101.options[i].value );	
	}
	
	//text box so less work is needed
	strCall_Duration.value 										= 	strCDA_X_field_0_102.value;
	
	//Now we set the values of each of the drop down list if they have already been filled in
	document.getElementById('selectTeamLeader').value 			= 	strCDA_X_field_0_97.value;
	document.getElementById('selectContract').value 			= 	strCDA_X_field_0_98.value;
	document.getElementById('selectContact_Type').value 		= 	strCDA_X_field_0_99.value;
	document.getElementById('selectCall_Type').value 			= 	strCDA_X_field_0_100.value;
	document.getElementById('selectSubCall_Type').value 		= 	strCDA_X_field_0_101.value;


}



// * * * * ****

function fn_FEXCO_HideShowDeleteButton(){
	
	var intSystemGenerated_UserId 	= document.getElementById('intSystemGenerated_UserId').value;
	var aryAdminUsers				= new Array();
	aryAdminUsers[0]				= '63';
	aryAdminUsers[1]				= '97';
	aryAdminUsers[2]				= '98';
	aryAdminUsers[3]				= '981';
	aryAdminUsers[4]				= '905';
	aryAdminUsers[5]				= '1053';
	
	for(var i = 0; i < aryAdminUsers.length; i++){
		if(aryAdminUsers[i] == intSystemGenerated_UserId) {
			document.getElementById('btnDelete').style.display = 'inline';
			document.getElementById('btnUndoDelete').style.display = 'inline';
		}
	}
	
}







//******************************************************************************************
// Application   : 	This function copies the selected value of one dropdown list to another select
//******************************************************************************************
function fn_Fexco_CopySelection_List1_To_List2( objList1, objList2 ){
	
	document.getElementById(objList2).value 					= 	document.getElementById(objList1).value;
}
function fn_FEXCO_Build_QueryString(){
	alert('Redirecting you to the relevant Coaching Log');
	var intCampaign_Id								=	document.getElementById( 'intCampaign_Id' ).value; // if not already on page
	var strCDA_X_field_0_97 						= 	document.getElementById( 'strCDA_' 	+ intCampaign_Id + '_field_0_97'  );
	var strCDA_X_field_0_169						=	document.getElementById( 'strCDA_' 	+ intCampaign_Id + '_field_0_169' );
	var strCDA_X_field_2_169						=	document.getElementById( 'strCDA_' 	+ intCampaign_Id + '_field_2_169' );
	var strCDA_X_field_12_169						=	document.getElementById( 'strCDA_' 	+ intCampaign_Id + '_field_12_169' );
	var RedirectURLAdmin_2							= document.getElementById('RedirectURLAdmin_2');
	var formId										= 0;
	var strCampaign_Name							= document.getElementById('strCampaign_Name').value;
	if ( strCDA_X_field_0_98.value == 8 ) {
			var n = strCampaign_Name.indexOf('# BER');
			if (n > -1) {
				formId 						= 749;
			} else {
				formId 						= 748;
			}
	}
	else
		if ( strCDA_X_field_0_98.value == 10 ) {
		formId 						= 788;
	}
	else
	if ( strCDA_X_field_0_98.value == 1 ) {
		formId 						= 753;
	} else
		if ( strCDA_X_field_0_98.value == 3 ) {
		formId 						= 742;
	} else
		if ( strCDA_X_field_0_98.value == 2 ) {
		formId 						= 752;
	}  else
		if ( strCDA_X_field_0_98.value == 4 ) {
		formId 						= 840;
	}  
	 else
		if ( strCDA_X_field_0_98.value == 14 ) {
		formId 						= 962;
	}  
		
	
	var strDrillDownKeyStatsLink	= ' ';
	var agentName					= strCDA_X_field_0_169.value;
	//var createdDate				= 'tbc';
	var referenceNumber				= strCDA_X_field_12_169.value;
	var teamLeadName				= strCDA_X_field_0_97.value;
	var auditor						= document.getElementById('intSystemGenerated_UserId').value;
	var auditorDepartment			= document.getElementById('intSystemGenerated_Client_Department').value;
	var errorDate					= strCDA_X_field_2_169.value;	
	strDrillDownKeyStatsLink		= formId +'&';
	strDrillDownKeyStatsLink		= strDrillDownKeyStatsLink + 'intKeyStatCustomCount=1&';
	strDrillDownKeyStatsLink		= strDrillDownKeyStatsLink + 'keyStatsCustom1=';
	strDrillDownKeyStatsLink		= strDrillDownKeyStatsLink + '[--'+'SEP'+'--'+']' + agentName + '[--'+'SEP'+'--'+']';
	strDrillDownKeyStatsLink		= strDrillDownKeyStatsLink + referenceNumber + '['+'--'+'SEP'+'--'+']';  
	strDrillDownKeyStatsLink		= strDrillDownKeyStatsLink + teamLeadName + '['+'--'+'SEP'+'--'+']'; 
	strDrillDownKeyStatsLink		= strDrillDownKeyStatsLink + auditor + '['+'--'+'SEP'+'--'+']';
	strDrillDownKeyStatsLink		= strDrillDownKeyStatsLink + auditorDepartment + '['+'--'+'SEP'+'--'+']';
	strDrillDownKeyStatsLink		= strDrillDownKeyStatsLink + errorDate + '['+'--'+'SEP'+'--'+']';
	strDrillDownKeyStatsLink		= strDrillDownKeyStatsLink + fn_getDate();
	strReturnString					= "https://ww3.allnone.ie/client/client_fexco/inboundsales/userInbound-details.asp?intCampaign_Id="+strDrillDownKeyStatsLink;
	window.open(strReturnString);
}
function fn_getDate(){
	var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'/'+mm+'/'+yyyy;
return today;
}


