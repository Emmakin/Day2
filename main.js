const btnE1 = document.getElementById('btn');
const label = document.getElementById('label');




function changeColor(){
    const code = Math.floor(Math.random()*16946673).toString(16);
    document.getElementById('body').style.backgroundColor = "#" + code;
    label.innerText = "The Color Code is " + "#" + code;
}


btnE1.addEventListener("click", changeColor)
// changeColor();

// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
//   }
  
//   genNew.addEventListener("click", setBg);
//   setBg();