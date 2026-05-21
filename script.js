function goNext(){
  const name = document.getElementById("name").value;

  if(name.trim() === ""){
    alert("Please enter your name");
    return;
  }

  localStorage.setItem("username", name);

  window.location.href = "welcome.html";
}