const enter = document.querySelector(".pointer");
const toast = document.querySelector(".notify");
const inputuser = document.querySelector(".useInput");

enter.addEventListener("click", () => {
  if (inputuser.value == "simon") {
    localStorage.setItem("user", JSON.stringify("simon"));
    return (toast.innerText = "Your name is to strong");
  } else if (inputuser.value == "") {
    return (toast.innerText = "Input you name");
  } else {
    localStorage.setItem("user", JSON.stringify(inputuser.value));
    return (toast.innerText = "Your name is to weak");
  }
});
