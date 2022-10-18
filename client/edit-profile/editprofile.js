/********************  ending the preloading *******************************/
var preloader = document.getElementById("loading");

function endPreloader() {
  setTimeout(() => {
    preloader.style.display = "none";
    console.log("preloader ending");
  }, 1000);
}
document.querySelector("body").onload = endPreloader();

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
const token = localStorage.getItem("jwt");
const user = parseJwt(token);
console.log(user);

//UPDATING THE PROFILE
let newfname, newlname, newemail, newdesc, newitem;

//UPDATING THE ITEMS TO THE NEW VALUE
document.getElementById("register-fname").addEventListener(
  "input",
  function() {
    newlname = this.innerText;
  },
  false
);
document.getElementById("register-lname").addEventListener(
  "input",
  function(){
    newfname = this.innerText;
  },
  false
);
document.getElementById("register-email").addEventListener(
  "input",
  function() {
    newemail = this.innerText;
  },
  false
);
document.getElementById("register-desc").addEventListener(
  "input",
  function() {
    newdesc = this.innerText;
  },
  false
);
newitem = document.getElementById("register-img").files[0];

window.onload = async () => {
  const fetchuser = await fetch(
    `http://65.0.100.50/api/user/getuserinfo?id=${user.id}`,
    {}
  );
  const userinfo = await fetchuser.json();
  console.log(userinfo.user);
  // console.log(document.querySelector('#register-fname'));

  document.querySelector("#register-fname").value = userinfo.user.firstName;
  document.querySelector("#register-lname").value = userinfo.user.lastName;
  document.querySelector("#register-email").value = userinfo.user.email;
  document.querySelector("#register-desc").value = userinfo.user.about;
  document.querySelector("#submit-btn").addEventListener("click", async () => {
    if (!newfname && !newlname && !newdesc && !newemail && !newitem) {
      alert("No changes made");
      return;
    }
    console.log(newfname, newlname, newemail, newdesc);
    const formdata = new FormData();
    formdata.append("id", userinfo.user.id);
    formdata.append("fname", newfname);
    formdata.append("lname", newlname);
    formdata.append("email", newemail);
    formdata.append("about", newdesc);
    formdata.append("item", item);

    const updateprofile = await fetch(`http://65.0.100.50/api/user/editprofile`,{
        method:"PUT",
        body:formdata
    })
    const updatedprofile = updateprofile.json();
    console.log(updatedprofile);
    alert('profile updated');

    location.href="../User/index.html"
  });
};
