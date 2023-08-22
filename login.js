let userName=document.getElementById("name")
let email=document.getElementById("email")
let password=document.getElementById("password")
let form=document.querySelector("form")


let users=JSON.parse(localStorage.getItem("users")) ||[]
form.addEventListener("submit",(e)=>{
    e.defaultPrevented()

  const userExist=users.find((user)=>userExist.email==email.value)
  if(userExist && userExist.password==password.value){
    alert("ahiye")
    window.location.href="./admin.html"
  }
  else if(userExist.password!=password.value){
    alert("incorrect password")
  }
  else{
    alert("user not registed signup please")
    window.location.href="./sign.html"
  }
})