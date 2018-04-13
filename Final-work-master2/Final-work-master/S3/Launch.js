Backendless.initApp("7B93C889-5309-F425-FF2A-B39F7B5AE100","F89B1CF6-AB1D-AAD8-FF73-DFCD2A226100");

$(document).on("pageshow","#launchpage", onPageShow);

function onPageShow() {
	console.log("page shown");
    
	
      
	//run a query
	
    
    $(document).on("click", "#launch", onReady);
   
    
	


} 

function onReady(){
    Backendless.Data.of( "Register" ).find().then(recognize).catch(error);
}

function recognize(register) {
		console.log("launch button clicked");
        var user = $("#user").val();
        var pass = $("#pass").val();
    if(user=='') navigator.notification.alert(
    'Please enter your Username!',  // message
    'Username error',            // title
    'Done'                  // buttonName
);
 if(pass=='') alert("Please enter your password."); 
        console.log(register[0].Username);
        var j = 0;
     for(var i = 0; i < register.length; i++){
         if(user==register[i].Username)
             {
                 if(pass==register[i].Password)
             {
             window.location.href='mappage.html';
                 j=1;
             }
                 else {
                     j=1;
                     alert("The password you entered is wrong, please enter again.");}
     }

}
    if(j==0&&user!=''&&pass!='')
     alert("This account does not exist.");
}




function error(err) {
    alert("This account does not exist.");
}


  
