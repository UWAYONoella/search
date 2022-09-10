const main =document.querySelector("body");

const data=async()=>{
    const pro=await(await fetch("https://fakestoreapi.com/products")).json();
pro.map(item=>{
    const card=`<table class="table table-dark"
    <thread>
    <tr>
    <th>Id</th>
    <th>Image</th>
    <th>Category</th>
    <th>Price</th>
    <th>Description</th>
    <th>Delete</th>
    </tr>
    </thread>
    <tbody>
    <tr>
    <td>${item.id}</td>
    <td><img src=${item.image}></td>
    <td>${item.category}</td>
    <td>${item.price}</td>
    <td>${item.description}</td>
    <td>${item.delete}</td>
    </tr>
    </tbody>`
  main.innerHTML+=card;
})
}
data()