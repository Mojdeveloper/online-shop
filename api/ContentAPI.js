class ContentAPI extends BaseAPI {

    getAll = () => this.getData('content');
    getById = (id) => this.getData(`content/${id}`);


}