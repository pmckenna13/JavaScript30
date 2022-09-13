function logText(e)
 {
    console.log(this.classList.value);
    e.stopPropagation(); // stop bubbling!
 }
 
 const divs = document.querySelectorAll('div');

 divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
 }));
