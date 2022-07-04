$(document).ready(function () {

    $('#regForm').submit(function(){
        console.log("Validating registration.");
        var entry = {
            uname: $("#uname").val(),
            email: $("#email").val(),
            pwrd1: $("#pwrd1").val(),
            pwrd2: $("#pwrd2").val(),
        };
        
        if(entry.uname.trim().length==0 || entry.email.trim().length==0 || entry.pwrd1.trim().length==0 || entry.pwrd2.trim().length==0){
            if(entry.uname.trim().length==0) $("#uname").css("border-color","red"); 
            if(entry.email.trim().length==0) $("#email").css("border-color","red"); 
            if(entry.pwrd1.trim().length==0) $("#pwrd1").css("border-color","red"); 
            if(entry.pwrd2.trim().length==0) $("#pwrd2").css("border-color","red"); 
            
            alert("Missing information!");
            return false;
        }
        else{
            if(entry.pwrd1 !== entry.pwrd2){
                $("#pwrd1").css("border-color","red"); 
                $("#pwrd2").css("border-color","red");
                
                alert("Passwords do not match!");
                return false;
            }
            else{
                alert("Proccessing registration!");
                $.get('/addAcc', entry, function (result) {
                    console.log(result);
                    if(result)
                    {
                        $('#uname').val('');
                        $('#email').val('');
                        $('#pwrd1').val('');
                        $('#pwrd2').val('');

                        alert("Registration complete!");
                        return true;
                    }
                    else
                    {
                        alert('Function error encountered.');
                        return false;
                    }
                });
            }
        }
    });
})
