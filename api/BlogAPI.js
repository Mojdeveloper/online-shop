class BlogAPI extends BaseAPI {
    getAll = () => this.getData('blog');
    getById = (id) => this.getData(`blog/${id}`);

}