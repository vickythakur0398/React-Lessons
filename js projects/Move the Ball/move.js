var keyp = document.getElementById('circle');
var db;
var wkey = keyp.addEventListener('keydown', function(event)
{
    db = event.keyCode;
    console.log(db)
    var Num = String.fromCharCode(db);
    console.log(Num);
    // circle.innerText = this.hidden;


        // console.log('keydown', event.keyCode)
}
)

circle.style.top = 100 ;

var topp = parseInt(circle.style.top);
console.log(circle.style.offsetTop)


if(db === 'W' || 'w')
{
    
}
else if( db === 'S' || 's')
{

}
else if( db === 'A' || 'a')
{
    
}
else if(db === 'X' || 'x' )
{

}
else{
    console.log('Do nothing');
}


// keyp.addEventListener('keypress', function()
// {
//     console.log('key is pressed')
    
//     keyp.innerText= this.hidden;
// })

