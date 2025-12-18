let submitbtn=document.getElementById("submitbtn");
submitbtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let form=document.forms["loginform"];
    console.log(form);
    let emailvalue=form["email"].value;
    console.log(emailvalue);
    let passwordvalue=form["password"].value;
    console.log(passwordvalue);
    if(validateEmail()){
        alert("login successfull");
    }
});
function validateEmail(){
    let reqEmail=document.getElementById("email").value;
    if(!emailvalue){
        reqEmail.style.display="block";
        invalidEmail.style.display="none";
        return false;
    }else if(""){
        invalidEmail.style.display="block";
        reqEmail.style.display="none";
        return false;
    }
    invalidEmail.style.display="none";
    reqEmail.style.display="none";
    return true;
}