$(document).ready(function () {
    $('button.btn-login').click(function(){
        console.log("Validating Login.");
        var entry = {
            email: $("#email").val(),
            pword: $("#pword").val(),
        };
        var pass = false;
        var id;
        
        if(entry.email.trim().length==0 || entry.pword.trim().
        length==0 ){
            if(entry.email.trim().length==0) $("#email").css("border-color","red");
            if(entry.pword.trim().length==0) $("#pword").css("border-color","red");
            
            alert("Missing information!");
            return false;
        }
        else{
            alert("Authenticating");
            $.get('/getAcc', entry, function (result) {
                if(result)
                {
                    if(result.message == "success")
                    {
                        $('#email').val('');
                        $('#pword').val('');
                        console.log("Correct password");
                        alert("Login successful! Welcome, " + result.name + "!");
                        location.href = "/home";
                    }
                    else if(result.message == "incorrect")
                    {
                        alert("Incorrect email or password!");
                        return false;
                    }
                    else
                    {
                        alert("Account not existing!");
                        return false;
                    }
                }
                else
                {
                    alert("Function error encountered.");
                    return false;
                }
            });
        }
    });
});
