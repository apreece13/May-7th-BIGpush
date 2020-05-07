const container = document.querySelector("#toyList")

document.querySelector("#saveToWishlist").addEventListener("click", event =>{
    const storeEx = document.querySelector("#storeName").value
    const nameEX = document.querySelector("#toyName").value

    container.innerHTML += `
    <section>
    <h1>I can purchase ${nameEX} at ${storeEx}</h1>
    
    </section>`
})