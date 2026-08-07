class ProductsAPI extends BaseAPI {
    getAll = (pageIndex, pageSize) => this.getData(`product?pageIndex=${pageIndex}&pageSize=${pageSize}`, 'product');

    getById = (id) => this.getData(`product/${id}`);

    getByCategoryId = (id,pageIndex, pageSize) => this.getData(`product/cat/${id}?pageIndex=${pageIndex}&pageSize=${pageSize}`);

    getProductNew = () => this.getData('product/new');

    getProductPopular = () => this.getData('product/popular');
}