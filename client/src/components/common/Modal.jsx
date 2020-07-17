import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
    renderAction = () => {
        if (this.props.action) {
            return (
                <footer className="modal-card-foot">
                    <button
                        onClick={this.props.action.onConfirm}
                        className={`button ${
                            this.props.action.type === "danger"
                                ? "is-danger"
                                : "is-warning"
                        }`}
                    >
                        {this.props.action.buttonText}
                    </button>
                    <button onClick={this.props.onModalExit} className="button">
                        Cancel
                    </button>
                </footer>
            );
        }
    };
    renderModal = () => (
        <div onClick={this.props.onModalExit}>
            <div className={`modal is-active`}>
                <div className="modal-background" />
                <div onClick={e => e.stopPropagation()} className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{this.props.title}</p>
                        <button
                            onClick={this.props.onModalExit}
                            className="delete"
                            aria-label="close"
                        />
                    </header>
                    <section className="modal-card-body">
                        {this.props.children}
                    </section>
                    {this.renderAction()}
                </div>
            </div>
        </div>
    );
    render() {
        return ReactDOM.createPortal(
            this.renderModal(),
            document.getElementById("modal")
        );
    }
}

export default Modal;
