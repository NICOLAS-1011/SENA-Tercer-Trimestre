async function llamar() {
    const res=await fetch('https://obscure-hollows-22361.herokuapp.com/api/v1/products');
    const data=await res.json();
    console.log(data)
    const img1=document.getElementById('img1');
    // const img2=document.getElementById('img2');
    // const img3=document.getElementById('img3');
    img1.src=data[0].image;
    // img2.src=data[1].image;
    // img3.src=data[2].image;
}

llamar()