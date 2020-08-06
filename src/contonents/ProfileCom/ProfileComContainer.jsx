import React from 'react';
import ProfileCom from "./ProfileCom";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profileReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";


class ProfileComContainer extends React.Component{
constructor(props) {
    super(props);
}
    componentDidMount() {
    let userId = this.props.match.params.userId;
if(!userId){
    userId = 3;
}
this.props.getUserProfile(userId);

}

    render() {
    return(<ProfileCom {...this.props} props={this.props.profile}/>)
    }
}


let AuthRedirectComponent = withAuthRedirect(ProfileComContainer)


let mapStateToProps =(state) =>{
    return {
        profile: state.ProfilePage.profile,
    }
}


let WithUrlDataComponent = withRouter(AuthRedirectComponent);

export default  connect (mapStateToProps,{getUserProfile})(WithUrlDataComponent);