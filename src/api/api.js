import * as axios from "axios";

     const instance = axios.create(
         {
             withCredentials: true,
             baseURL: "https://social-network.samuraijs.com/api/1.0/",
             headers:{
                 "API-KEY":"14afbc17-5def-47a5-befe-a2e4e52003d8"
             }
         }
     )


     export const usersAPI = {
         getUsers(props){
             return instance.get(`users?page=${props.currentPage}&count=${props.pageSize}`).then(response => {
                 return response.data
             });
         }
         }




