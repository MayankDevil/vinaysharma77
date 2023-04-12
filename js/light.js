const switch_light = document.getElementById("light");
const toggleLight = () => {
    switch_light.classList.toggle("dark-mode");
};
switch_light.addEventListener("click", () => toggleLight());