const colorContainer = document.getElementById("color-container");
const Value = document.getElementById("value");
// ******************************************************************************
Value.innerHTML = "rgb(255,255,255)";
// ******************************************************************************
const getColorCode = ()=>{
    const red = document.getElementById("red").value;
    const green = document.getElementById("green").value;
    const blue = document.getElementById("blue").value;
    colorContainer.style.background = `rgb(${red},${green},${blue})`;
    Value.innerHTML = `rgb(${red},${green},${blue})`;
}