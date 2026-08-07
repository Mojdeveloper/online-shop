let selectedSize = null;
let selectedColor = null;
let currentProduct = null;

window.onload = async () => {
    const id = getParameterByName('id');
    const api = new ProductsAPI();
    const product = await api.getById(id);
    const data = product[0];
    currentProduct = data;

    document.getElementById('product-image').src = product[0].image;
    document.getElementById('product-title').innerText = `${product[0].category.title} - ${product[0].title} `;
    document.getElementById('description').innerHTML = product[0].description;

    for (let index = 0; index < data.colors.length; index++) {
        document.getElementById('product-color').innerHTML +=
            `<a href="#" class="change-color-link" onclick="changeColor(this, ${data.colors[index].id}, '${data.colors[index].title}', '${data.colors[index].hexValue}')">
                        <div class="style-color " style="background-color:#${data.colors[index].hexValue};">
                        </div>
                    </a>`
    }
    for (let index = 0; index < data.sizes.length; index++) {
        document.getElementById('product-size').innerHTML +=

            `<a class="change-size"  onclick="changeSize(this, ${data.sizes[index].id}, ${data.sizes[index].title})">${data.sizes[index].title}</a>`
    }

}

changeColor = (ele, id, title, hex) => {

    let oldColors = document.getElementsByClassName("product-color-selected");
    for (let index = 0; index < oldColors.length; index++) {
        oldColors[index].classList.remove("product-color-selected")
    }
    ele.children[0].classList.add("product-color-selected");
    selectedColor = {
        id: id,
        title: title,
        hex: hex
    };
}

changeSize = (ele, id, title) => {

    let oldSizes = document.getElementsByClassName("product-size-selected");
    for (let index = 0; index < oldSizes.length; index++) {
        oldSizes[index].classList.remove("product-size-selected")
    }
    ele.classList.add("product-size-selected");
    selectedSize = {
        id: id,
        title: title
    };
}

let addToBasket = () => {
    let id = getParameterByName("id");
    if (selectedColor == null) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select color!'
        });
        return;
    }
    if (selectedSize == null) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select size!'
        });
        return;
    }
    BasketDB.addToBasket(currentProduct, selectedColor, selectedSize);
}