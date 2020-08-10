import React from 'react';
import ProfileCom from "./ProfileCom";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profileReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
let mapStateToProps =(state) =>{
    return {
        profile: state.ProfilePage.profile,
    }
}
 export default compose(
    connect (mapStateToProps,{getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileComContainer)