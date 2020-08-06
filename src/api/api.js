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
         getUsers(currentPage=1,pageSize=5){
             return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                 return response.data
             });
         },
         follow(userId){
            return  instance.post(`follow/${userId}`)

         },
         unfollow(userId){
          return  instance.delete(`follow/${userId}`)
         },
         setProfile(userId){
            return  instance.get(`profile/`+ userId)
         }
         }
export const authAPI = {
   authme(){
      return  instance.get(`auth/me`)
   }
}



