import style from "./ProlifeStatus.module.css"
import React from "react";

class ProfileStatus extends React.Component{
    state={
        editMode: false,
        status:this.props.status
    }

    onStatusChange =(e)=>{
        this.setState({
            status: e.currentTarget.value
    })
    };
    ActivateEditMode=()=>{
        if(!this.props.isOwner || this.props.isOwner===this.props.authorizedUserID) {
            this.setState({
                    editMode: true
                }
            )
        }
    }

    DeactivateEditMode=()=>{
        this.setState({
                editMode: false
        },
            this.props.updateStatus(this.state.status)

        )
    }
componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps!==this.props) {
            this.setState({
                status: this.props.status
            })
        }
}

    render() {
      return <div>
          <div className={style.mainContainer}>
              {!this.state.editMode&& <div>
                  <span onDoubleClick={this.ActivateEditMode} className={style.statusText}>{this.props.status}</span>
              </div>}
              { this.state.editMode&&
              <div>
                  <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.DeactivateEditMode} value={this.state.status}/>
              </div>}
          </div>

      </div>
  }
}
export default ProfileStatus;
