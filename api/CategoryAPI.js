class CategoryAPI extends BaseAPI {
    getAll = () => this.getData('productCategory');
    getById = (id) => this.getData(`productCategory/${id}`);

}