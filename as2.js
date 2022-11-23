// function to open new page
function setdata(event){
    event.preventDefault();
    
    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    localStorage.setItem("userName", name);
    localStorage.setItem("passWord", pass);
    // console.log(`${userName}, ${passWord}`);
    window.open("assignment4.html", "_self");
}
function openPage(event) {
    event.preventDefault();
    const nam = localStorage.getItem("userName");
    const password = localStorage.getItem("passWord");
    
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    console.log(`${nam}, ${password}`);
    if(user == "admin" && pass == "admin" || (user == nam && pass == password)) 
    window.open("profile.html", "_new");
    else
    alert("Invalid username or password");
}