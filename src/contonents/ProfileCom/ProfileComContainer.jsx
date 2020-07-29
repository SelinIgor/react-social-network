import React from 'react';
import ProfileCom from "./ProfileCom";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileComContainer extends React.Component{
constructor(props) {
    super(props);
}
    componentDidMount() {
    let userId = this.props.match.params.userId;
if(!userId){
    userId = 3;
}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(response => {
            this.props.setUserProfile(response.data);
    });}

    render() {
        return(<ProfileCom {...this.props} props={this.props.profile}/>)
    }
}
let mapStateToProps =(state) =>{
    return {
        profile: state.ProfilePage.profile
    }
}
let WithUrlDataComponent = withRouter(ProfileComContainer);

export default  connect (mapStateToProps,{setUserProfile})(WithUrlDataComponent);