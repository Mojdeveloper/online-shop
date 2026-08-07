const pageIndex = 0;
let pageSize = 6;

window.onload = async () => {
    await CategoryCtrl();
    await loadPageData();

}

window.onscroll = async () => {
    const lastEle = document.getElementById('product').lastChild;
    const offsetTop = lastEle.previousSibling.offsetTop;
    if (window.scrollY > offsetTop) {
        ++pageSize;
        await loadPageData();
    }
}

loadPageData = async () => {
    const catId = getParameterByName('catId')
    const catName = getParameterByName("catName");
    if (catId == undefined || catId == null) {
        await ProductsCtrl(null, pageIndex, pageSize);

    } else {
        loadProduct(null, null, catName);
        await ProductsCtrl('category', pageIndex, pageSize, catId);
    }

}
