/*Header*/
const header = document.getElementById('header');
const nameShop = document.getElementById('nameShop');

window.addEventListener("scroll", function(e){
    setTimeout('changeHeader()', 200);
});

function changeHeader()
{
    header.style.backgroundColor = "#F4F4F4";
    header.style.boxShadow       = "0 0 0.2rem black";
    nameShop.style.color         = "black";
}

/*Carousel*/
const img      = document.getElementById('img');
const counter  = document.getElementById('counter');

var image = ['Limited.jpg', 'Limited2.jpg', 'Limited3.jpg', 'Limited4.jpg', 'Limited5.jpg'];


function changeImg(){

    let cont = 0;

    img.setAttribute("src", './img/' + image[cont]);

    if(counter.nodeValue < 10 && cont > 1){

        counter.innerHTML += ' - 0'+ cont;

    }else if(counter.nodeValue >= 10 && cont > 1){

        counter.innerHTML += ' - ' + cont;

    }

    cont++;
    
    setTimeout('changeImg()', 200);

}