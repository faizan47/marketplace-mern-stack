import React from "react";
import { withRouter } from "react-router-dom";
import { signUpInputs } from "../../formInputs/common/signUpInputs";
import { signUp } from "../../actions/";
import { connect } from "react-redux";
import FormTemplate from "../formComponents/FormTemplate";

class SignUp extends React.Component {
    onSubmit = values => {
        this.props.signUp(values, this.props.history);
    };
    render() {
        return (
            <>
                <h1 className="title is-1">Sign Up</h1>
                <FormTemplate
                    SubmitBtnText="Sign Up"
                    cancelBtnLink="/"
                    form="signUp"
                    inputs={signUpInputs}
                    onSubmit={this.onSubmit}
                />
            </>
        );
    }
}

export default connect(null, { signUp })(withRouter(SignUp));
