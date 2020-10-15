import React from 'react';
import ProfileCom from "./ProfileCom";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfileStatus, getUserProfile, savePhoto, updateProfile, updateStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileComContainer extends React.Component{

refreshProfile(){
    let userId = this.props.match.params.userId;
    if(!userId){
        userId = this.props.authorizedUserID;
    }
    this.props.getUserProfile(userId);
    this.props.getProfileStatus(userId);

}
    componentDidMount() {

        this.refreshProfile()
}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return(<ProfileCom savePhoto={this.props.savePhoto}  profile={this.props.profile} status={this.props.status}
                           updateStatus={this.props.updateStatus} authorizedUserID={this.props.authorizedUserID}
                           updateProfile={this.props.updateProfile} isOwner={this.props.match.params.userId}/>)
    }
}
let mapStateToProps =(state) =>{
    return {
        profile: state.ProfilePage.profile,
        status:state.ProfilePage.status,
        authorizedUserID:state.auth.id
    }
}
 export default compose(
     connect (mapStateToProps,{getUserProfile,getProfileStatus,updateStatus,savePhoto,updateProfile}),
    withRouter,
    withAuthRedirect
)(ProfileComContainer)