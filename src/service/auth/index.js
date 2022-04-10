import service from "../instance";

export const signUp = async (payload) =>
  service.post("signup", payload).then((response) => {



    console.log(response)
/*     service.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}` */
    return response
  })