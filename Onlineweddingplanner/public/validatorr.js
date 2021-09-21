
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm() {
    
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobno = document.contactForm.mobno.value;
    var address = document.contactForm.address.value;
    var password = document.contactForm.password.value;
  
    
    
	
    var nameErr = emailErr = mobnoErr = addressErr  = password = true;
    
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
  
    if(mobno == "") {
        printError("mobnoErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobno) === false) {
            printError("mobnoErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobnoErr", "");
            mobnoErr = false;
        }
    }
    
    
    
    
    if(address == "") {
        printError("addressErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(address) === false) {
            printError("addressErr", "Please enter a valid name");
        } else {
            printError("addressErr", "");
            addressErr = false;
        }
    }
    
    if(password == "Select") {
        printError("passwordErr", "Please select your country");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }
   
    if((nameErr || emailErr || mobnoErr || addressErr || password ) == true) {
       return false;
    } else {
       
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobno + "\n" +
                          "Address: " + address + "\n" +
                          "Password "+ password + "\n" ;
      
      
        alert(dataPreview);
    }
};

