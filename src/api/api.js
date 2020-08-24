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
   },
    login(email,password,rememberMe){
        return instance.post(`/auth/login`, {email,password,rememberMe})
    },
    logout(){
       return instance.delete(`/auth/login`)
    }
     }

export const ProfileAPI = {
        getStatus(userId){
            return  instance.get(`profile/status/`+ userId)
        },
        updateStatus(status){
            return  instance.put(`profile/status/`,{status})
        },

}



