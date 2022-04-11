import service from "../instance";

export const getAgreement = async () =>
  service.get("payment").then((response) => {
    return response;
  });

export const postPayment = async (payload) =>
  service.post("payment", payload).then((response) => {
    return response;
  });
