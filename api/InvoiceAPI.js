class InvoiceAPI extends BaseAPI {

    getAllByUserId = (userId, pageIndex, pageSize, token) => {
        return this.getDataWithToken(
            `invoice/user/${userId}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
            token
        );
    }

}