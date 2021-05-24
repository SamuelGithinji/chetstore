const authenticatedUser = localStorage.getItem("access_key");

if(authenticatedUser) window.location.replace("./products.html");

const form = document.querySelector("#login-form");

const phone = document.querySelector("#phone");

const password = document.querySelector("#password");

const users = "https://jsoneditoronline.org/#left=cloud.241ef8fbd8f3448794e7c13996064efc&right=local.hucama";

const loginFunction = (e) => {

    e.preventDefault();
    
    if(!phone.value) return alert("Phone is required");

    if(!password.value) return alert("Password is required");

    if(!phone.value.split("+")[1] && phone.value) return alert("Include country code");

    if(phone.value.length <= 8 && phone.value) return alert("Invalid mobile number");

    if(password.value.length <= 6 && password) return alert("Password must be more than 6 characters");

    localStorage.setItem("chetstoreUserPhone", phone.value);

    localStorage.setItem("chetstoreUserPassword", password.value);

    localStorage.setItem("access_key", `${phone.value}with${password.value}authconfirmed`);
    
    window.location.replace("./products.html");
};

form.addEventListener("submit", loginFunction);