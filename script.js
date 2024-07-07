function validation()
    {
        var name=document.getElementById('name').value;
        var password1=document.getElementById('password1').value;
        var email=document.getElementById('email').value;
        var mobileno=document.getElementById('mobileno').value;
        var password2=document.getElementById('password2').value;
        
        if( name==null || name==""){
            // alert("enter name");
            document.getElementById('n1').innerHTML="Please fill the username";
            return false;
        }
        if((name.length<=2 )||(name.length>=30) )
        {
            // alert("enter name 3 to 30");
            document.getElementById('n1').innerHTML="username should be in between 3 to 30";
            return false;
        }
        if(!isNaN(name) )
            {
                document.getElementById('n1').innerHTML="username should be in character";
                return false;
            }
        if(password1==null || password1=="")
            { document.getElementById('p1').innerHTML="Please fill the password";
        return false;
        }
        if((password1.length<=5)||(password1.length>=20) )
            {
                document.getElementById('p1').innerHTML="password should be in between 5 to 20";
                return false;
            }
        if(password2==null || password2=="")
            {
            document.getElementById('p2').innerHTML="Please fill the password to confirm it";
        return false;
        }
       
        if(password1!=password2)
            {   document.getElementById('p2').innerHTML="password is not matching please enter correct password";
                return false;
            }
        if(mobileno==null || mobileno=="")
            {
                document.getElementById('m1').innerHTML="Please fill the mobile no ";
            return false;
            }
        if((mobileno.length!=10))
        {
            document.getElementById('m1').innerHTML="Mobile no should be in 10 digits";
            return false;
        }
        if(isNaN(mobileno))
            {
                document.getElementById('m1').innerHTML="Mobile no should be in digits not in character";
                return false;
            }
         if(email==null || email=="")
            {
                document.getElementById('e1').innerHTML="Please fill the email";
                return false;
            }

    } 

