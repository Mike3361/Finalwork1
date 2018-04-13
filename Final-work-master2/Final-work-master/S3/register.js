Backendless.initApp("7B93C889-5309-F425-FF2A-B39F7B5AE100","F89B1CF6-AB1D-AAD8-FF73-DFCD2A226100");

$(document).on("pageshow","#registerpage", onPageShow);

function onPageShow() {
	console.log("page shown");
    
	
      
	//run a query
    
    $(document).on("click", "#register", recognize);

	


} 

function recognize(){
    console.log("recognize");
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
    var cpassword = $("#cpassword").val();
    if(username=='') alert("Please enter your username.");
    if(email=='') alert("Please enter your email address.");
    if(password=='') alert("Please enter your password.");     
    if (password!=cpassword) alert("The passwords you entered are inconsistent, please enter again.");
    else onAddTask();
}


function onAddTask() {
		console.log("add task button clicked");
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
    
        var newTask = {
         username,
         email,
        password};
    
        Backendless.Data.of("Register").save(newTask).then(saved).catch(error);

}

function saved(savedTask) { 
      console.log( "new Contact instance has been saved" + savedTask);
    alert("Register successfully.");
    window.location.href='index.html';
}



function error(err) {
    alert("Email or Username you entered is already existed." );
}


  
