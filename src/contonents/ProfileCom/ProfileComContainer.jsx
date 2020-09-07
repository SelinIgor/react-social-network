import React from 'react';
import ProfileCom from "./ProfileCom";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfileStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileComContainer extends React.Component{
constructor(props) {

    super(props);
}
    componentDidMount() {
    let userId = this.props.match.params.userId;
if(!userId){
    userId = this.props.authorizedUserID;
}
this.props.getUserProfile(userId);
this.props.getProfileStatus(userId);
}

    render() {
    //{...this.props} remove
    return(<ProfileCom  profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>)
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
    connect (mapStateToProps,{getUserProfile,getProfileStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileComContainer)