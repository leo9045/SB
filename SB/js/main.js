const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

burger.addEventListener("click", ()=>{
  navMenu.classList.toggle("show");
});

navMenu.querySelectorAll("a").forEach(link=>{
  link.addEventListener("click", ()=>{
    navMenu.classList.remove("show");
  });
});
