import style from "./ProlifeStatus.module.css"
import React from "react";

class ProfileStatus extends React.Component{
    state={
        editMode: false,
        status: "Hi there"
    }
    ActivateEditMode(){
        this.setState({
                editMode: true
            }
        )
    }

    DeactivateEditMode(){
        this.setState({
                editMode: false
            }
        )
    }

  render() {


      return <div>
          <div className={style.mainContainer}>
              {!this.state.editMode&& <div>
                  <span onDoubleClick={this.ActivateEditMode.bind(this)} className={style.statusText}>{this.props.status}</span>
              </div>}
              { this.state.editMode&&
              <div>
                  <input autoFocus={true} onBlur={this.DeactivateEditMode.bind(this)} value={this.props.status}/>
              </div>}
          </div>

      </div>
  }
}
export default ProfileStatus;
