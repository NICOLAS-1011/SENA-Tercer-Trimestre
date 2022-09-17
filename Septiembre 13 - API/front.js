console.log('Hola gatos')

const API_URL='https://random.dog/woof.json/'
const API_URL2='https://random.dog/woof.json/'
const API_URL3='https://random.dog/woof.json/'

async function reload(){
    const res=await fetch(API_URL);
    const data=await res.json();
    console.log(data)

    const res2=await fetch(API_URL2);
    const data2=await res2.json();
    console.log(data2)

    const res3=await fetch(API_URL3);
    const data3=await res3.json();
    console.log(data3)



    const img1=document.getElementById('img1');
    img1.src=data.url;

    const img2=document.getElementById('img2');
    img2.src=data2.url;      

    const img3=document.getElementById('img3');
    img3.src=data3.url;      
}

reload();

//TAREA 
//para el lunes hasta el video 15 de platzi