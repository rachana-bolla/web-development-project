function validateFrom()
{
   var tuname=document.getElementById("username").value;
   var temail=document.getElementById("emailAddress").value;
   var tmsg=document.getElementById("message").value;

   var text;
   var status=true;
   if(!validateNull(tuname))
   {
           text=text+" Please Enter UserName";
           status=false;
   }
   if(!validateNull(temail))
   {
    text=text+" Please Enter EmailAddress";
    status=false;
   }
   if(!validateNull(tmsg))
   {
    text=text+" Please Enter Message";
    status=false;
   }

   if(status)
   {
   console.log("user Name...."+tuname);
   console.log("Email Address...."+temail);
   console.log("Message..."+tmsg);
   }
}

function validateNull(formelement)
{
    if(formelement==="")
    {
        return false;
    }
    else
    {
        return true;
    }
}


