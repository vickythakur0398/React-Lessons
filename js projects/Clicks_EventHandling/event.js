// Saying hi on mouse click
/*
var d = document.getElementById('Direct');
console.log(d);
d.addEventListener('click', function()
{
    alert("hi world")
})

d.style.color = 'Red';
*/

//Mouse click
var sum = 0;
var divBox = document.getElementById('box');
var spanBox = document.getElementById('text-value')

spanBox.style.color = 'red';
spanBox.style.fontSize = 'large';


divBox.addEventListener('click', function()
{
   
    // console.log('mouse is click');
    sum++;
    // console.log(sum);
    spanBox.innerText = sum;

})

console.log(sum);

