

document.getElementById("submitContact").addEventListener("click", submitButton);
        
            function verifyEmailAddress(email2){
                let email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
                if (email.test(email2)){
                    return true;
                } else {
                    return false;                    
                }   
            };
        

        function submitButton(){
        
        
            let inputEmailAddress = document.getElementById("email").value;
            
            let uNameValid = verifyUsername(inputFirstName);
                if (uNameValid == ""){
                    document.getElementById("firstNameError").style.display= "block";
                } else {
                    document.getElementById("firstNameError").style.display= "none";
                }
            
            
            let uEmailValid = verifyEmailAddress(inputEmailAddress);
                if (uEmailValid == ""){
                    document.getElementById("emailError").style.display= "block";
                } else {
                    document.getElementById("emailError").style.display= "none";
                }   
        };

