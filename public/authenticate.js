const authenticatedUser = localStorage.getItem("access_key");

const checkPath = () => {
    if(!authenticatedUser) window.location.replace("./login.html");

    alertMessageArea.textContent = `Please log in to proceed`;
};

const logout = () => {
    localStorage.removeItem("access_key");
    window.location.replace("./index.html");
}

document.querySelector("#logout").addEventListener("click", logout);

checkPath();