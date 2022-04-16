import { privateDeleteApi, privateGetApi, privatePostApi, publicGetApi } from "../apis/API";

export const getPayment = async () => {
    let response = await publicGetApi(`/payment`)
    return response
};

export const addPayment = async (data) => {
    let response = await privatePostApi('/payment/create', data)
    return response
};

export const editPayment = async (paymentId, data) => {
    let response = await privatePostApi(`/payment/edit/${paymentId}`, data)
    return response
};
export const detailPayment = async (data) => {
    let response = await privateGetApi(`/payment/detail?paymentId=${data.paymentId}&status=${data.status}`);
    return response;
}

export const statusByAdminPayment = async (data) => {
  let response = await privatePostApi(`/payment-user/status-admin`, data)
  return response
};
export const deletePayment = async (data) => {
    let response = await privateDeleteApi(`/payment/delete/${data}`)
    return response
};
