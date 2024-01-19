const msg=  document.getElementById('msg');
var arr = [];
var i = 0;
var lenArr;
var flag = 0;

const getColor = () => {

    flag = 0;

    const randomNum = Math.floor(Math.random()*16777215);
    const randomCode = '#' + randomNum.toString(16);
    
   arr[i] = randomCode;
   i++;
    // adding color to background
    document.body.style.backgroundColor = randomCode;

    console.log(arr);

    // write color code
    document.getElementById('coloCode').innerText=randomCode;

    msg.innerText = '';
    
}



const getCode = () => {
    if(flag===1) {
    navigator.clipboard.writeText(arr[lenArr-1]);
    msg.innerText = " Color Copyied To Clip-Board";
    } else {
        navigator.clipboard.writeText(arr[i-1]);
        msg.innerText = " Color Copyied To Clip-Board";
    }
}



const backCode = () => {

    flag = 1;
    lenArr = arr.length-1;
   
     // adding Previous color to background
     document.body.style.backgroundColor = arr[lenArr-1];

     // write previous color code
     document.getElementById('coloCode').innerText= arr[lenArr-1];

    console.log(arr[lenArr-1]);
    msg.innerText = '';

}



document.getElementById('btn').addEventListener('click',getColor)
document.getElementById('copybtn').addEventListener('click', getCode)
document.getElementById('prebtn').addEventListener('click', backCode)

getColor();
