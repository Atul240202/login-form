firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email+" you are here"
    }
})


function logout(){
    firebase.auth().signOut()
}
