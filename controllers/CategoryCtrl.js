CategoryCtrl = async () => {

    let category = document.getElementById('category')
    const categoryAPI = new CategoryAPI
    const data = await categoryAPI.getAll()
    for (let index = 0; index < data.length; index++) {
        category.innerHTML +=
            ` 
                <div class="category-item">
                <a href="products.html?catId=${data[index].id}&catName=${data[index].title}">
                    <img src="${data[index].image}" class="category-image" />
                    <h3 class="category-title">
                        ${data[index].title}
                    </h3>
                </a>
                </div>
            `

    }


}