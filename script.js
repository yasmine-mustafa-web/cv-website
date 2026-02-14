 const links = document.querySelectorAll("li");
links.forEach(link => {
    link.addEventListener("click" , () => {
 links.forEach(i => i.classList.remove("active"));
link.classList.add("active"); 
});
});