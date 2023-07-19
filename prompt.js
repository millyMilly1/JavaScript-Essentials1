let width = window.prompt("please enter a width", 0);
//width = isNaN(width) ? "enter a valid number" : width;

let height = window.prompt("please enter a height", 0);
//height = isNaN(height) ? "enter a valid number" : height;

let length = window.prompt("please enter a length", 0);
//length = isNaN(length) ? "enter a valid number" : length;

//alert("this is the volume of the box: "  + length * heigth * width);


if (isNaN(width)){
   alert("please input a valid width");
}
else if(isNaN(height)){
    alert("please input avalid height");
}
else if(isNaN(length)){
    alert("please input a valid length");
}
else{
    alert("this is the volume of the box: " + width * height * length);
}