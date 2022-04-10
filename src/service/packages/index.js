import service from "../instance";

export const getPackages = async () =>
  service.get("packages").then((response) => {



    console.log(response)
/*     service.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}` */
    return response
  })