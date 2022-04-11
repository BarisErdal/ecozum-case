import service from "../instance";

export const getPackages = async () =>
  service.get("packages").then((response) => {
    return response
  })