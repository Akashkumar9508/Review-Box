const username = document.getElementById('username');
const userreview = document.getElementById('userreview');
const usercontainer=document.getElementById('user');
function addreview() {
    if (username.value === '')
        alert("please write your name!"); 
    else if (userreview.value === '')
        alert("please write review!");
    else {
        let h4=document.createElement("h4");
        h4.innerHTML=username.value;
        usercontainer.appendChild(h4);
        let p=document.createElement("p");
        p.innerHTML=userreview.value;
        usercontainer.appendChild(p);
    }
    username.value = "";
    userreview.value = "";
}
function cancel(){
    username.value = "";
    userreview.value = "";
}
