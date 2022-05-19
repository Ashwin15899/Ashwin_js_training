document.getElementById("my_id")
document.getElementById("my_id").id
document.getElementById("my_id").classList
document.getElementById("my_id").innerText
document.getElementById("my_id").innerText= "Hi there"
document.getElementsByClassName("myclass")
document.getElementsByTagName("div")
document.querySelector('div')
document.querySelectorAll('div')
document.querySelector('#my_id')
document.querySelectorAll('.myclass')
document.querySelector('.myclass')
document.querySelector('.myclass')
document.querySelector('p.myclass')

document.getElementById('p1').addEventListener('click',function(e){
    console.log(e.target.innerText);
})
document.getElementById('btn').addEventListener('click',function(e){
    e.stopPropagation();
    console.log("btn click");
})
document.getElementById('container').addEventListener('click',function(e){
    console.log("container click");
})

jcontainer = document.getElementById('container');

jh1 = document.createElement('h1');
jh1.innerText = "Hello this is a h1";
jh1.id = "myh1";

jcontainer.appendChild(jh1);
// For removing------> jcontainer.removeChild(jh1);

ul =document.getElementById('container')
Array.from(ul.children)
ul.firstElementChild
ul.lastElementChild
java = document.getElementById('java')
java.parentElement
java.previousElementSibling
java.nextElementSibling
csharp = java.nextElementSibling
csharp.style.color = "red"
ul.parentElement
ul.parentNode
ul.firstElementChild
ul.firstChild