function login(){

let user = document.getElementById("username").value
let pass = document.getElementById("password").value

if(user === "student" && pass === "1234"){

window.location.href = "dashboard.html"

}else{

document.getElementById("error").innerText = "Invalid Login"

}

}

function logout(){

window.location.href = "index.html"

}

function login(){

let email = document.getElementById("email").value

fetch("/send-email",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({email:email})
})
.then(res=>res.text())
.then(data=>{
alert(data)
})

}