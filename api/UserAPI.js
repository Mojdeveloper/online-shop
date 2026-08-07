class UserAPI extends BaseAPI {

    login = (data) => this.postData('user/login', data);

}