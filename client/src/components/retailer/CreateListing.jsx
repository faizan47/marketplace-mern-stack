import React, { Component } from "react";
import FormTemplate from "../formComponents/FormTemplate";
import { createListingInputs } from "../../formInputs/retailer/createListing";
import { connect } from "react-redux";
import { createListing } from "../../actions";
import { withRouter } from "react-router-dom";

class CreateListing extends Component {
    onSubmit = async values => {
        this.props.createListing(values, this.props.history);
    };
    render() {
        return (
            <>
                <h1 className="title">Create a Listing</h1>
                <FormTemplate
                    initialValues={{ category: "defaultSelect" }}
                    inputs={createListingInputs}
                    onSubmit={this.onSubmit}
                    form="createListing"
                    SubmitBtnText="Create"
                    cancelBtnLink="/myListings"
                />
            </>
        );
    }
}

export default connect(null, { createListing })(withRouter(CreateListing));
