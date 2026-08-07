class SliderAPI extends BaseAPI {
    getAll = () => this.getData('slider');
    getById = (id) => this.getData(`slider/${id}`);

}