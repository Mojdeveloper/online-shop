ProductsCtrl = async (target, pageIndex, pageSize, catId) => {

    let product = document.getElementById('product');
    const ProductAPI = new ProductsAPI;
    let data;
    if (target == 'New') {
        data = await ProductAPI.getProductNew();
    } else if (target == 'Popular') {
        data = await ProductAPI.getProductPopular();
    }
    if (target == null) {
        data = await ProductAPI.getAll(pageIndex, pageSize)
    }
    if (target == 'category') {
        data = await ProductAPI.getByCategoryId(catId, pageIndex, pageSize)
    }

    product.innerHTML = ""
    for (let index = 0; index < data.length; index++) {

        product.innerHTML +=
            ` 
                <div class="product-item" id="product-item" >
                <a href="showProduct.html?id=${data[index].id}">
                    <img src="${data[index].image}" class="category-image" />
                    <h3 class="category-title">
                        ${data[index].title}
                    </h3>
                </a>
                </div>
            `

    }
}

loadProduct = async (currentItem, target, catName) => {
    const oldItems = document.getElementsByClassName('tag-btn');
    for (ele of oldItems) {
        ele.classList.remove('selected-tag');
    }
    if (currentItem != null && target != null) {
        currentItem.classList.add('selected-tag');
        document.getElementById("title").innerText = target + ' Products';
        await ProductsCtrl(target);
    } else {
        document.getElementById("title").innerText = catName + ' Products';
    }

}