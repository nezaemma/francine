let userName =document.getElementById("name")
let email=document.getElementById("email")
let password=document.getElementById("password")
let form=document.querySelector("form")

let users=JSON.parse(localStorage.getItem("users")) || []

form.addEventListener("submit",(e)=>{
    e.preventDefault()


    let user={
        userName:userName.value,
        email:email.value,
        password:password.value
    }

if(users.find((tipe)=>tipe.email==email.value)){
    alert("user exist")
}else{
    users.push(user)
    const ana=JSON.stringify(users)
    localStorage.setItem("users",ana)
    alert("user successfull created")
}
})