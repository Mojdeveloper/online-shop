class TransactionAPI extends BaseAPI {

    goToPayment = (data) => this.postData('trx/gotoPayment', data);


}