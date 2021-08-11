firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email+" Your id already exists"
    }
})


function logout(){
    firebase.auth().signOut()
}
