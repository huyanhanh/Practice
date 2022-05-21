const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const products = $('.products')

let apiData = 'https://fakestoreapi.com/products'
fetch(apiData)
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {  
        data.forEach(item => {
            let newProduct =  document.createElement('div')
            newProduct.classList.add('product')
            newProduct.innerHTML = `
                <img class="product-img" src="${item.image}" alt="">
                <div class="info">
                    <div class="name">${item.title}</div>
                    <div class="price">${item.price}</div>
                </div>
            `
            products.appendChild(newProduct)
        })
    })


const search = $('.input')

search.oninput = function(e) {
    let textSearch = e.target.value.trim()
    let listProduct = $$('.product')

    listProduct.forEach(itemProduct => {
        // console.log(itemProduct.innerText)
        if(itemProduct.innerText.includes(textSearch)) {
            itemProduct.classList.remove('hide')
        } else {
            itemProduct.classList.add('hide')
        }
    })
}
