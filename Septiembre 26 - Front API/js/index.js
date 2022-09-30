// async function listaJuegos() {
//     const res=await fetch('https://obscure-hollows-22361.herokuapp.com/api/v1/products');
//     const data=await res.json()
// }

const listUsers = async () => {
    const response = await fetch('https://obscure-hollows-22361.herokuapp.com/api/v1/products');
    const users = await response.json()
    
    let ta
    users.forEach((user, index) => {
        console.log(user);
    });
    
}



window.addEventListener("load", function(){
    listUsers()
});