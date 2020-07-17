import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { connect } from "react-redux";
import { updateCredits } from "../../actions";
import getStripeSecret from "../../utils/getStripeSecret";
import { toast } from "react-toastify";

const CheckoutForm = ({ amount, updateCredits, planName, onModalExit }) => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmCardPayment(
            await getStripeSecret(amount * 100),
            {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            }
        );

        if (result.error) {
            toast.error(result.error.message);
        } else {
            if (result.paymentIntent.status === "succeeded") {
                updateCredits(result.paymentIntent.id);
                onModalExit();
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="tags has-addons">
                <span className="tag">Selected Package: </span>
                <span className="tag is-info">{planName}</span>
            </div>
            <PaymentForm />
            <button className="button is-primary mt-2" disabled={!stripe}>
                Make Payment
            </button>
            <p className="is-size-7 mt-2 is-italic has-text-weight-light">
                Your will be charged ${amount}
            </p>
        </form>
    );
};

export default connect(null, { updateCredits })(CheckoutForm);
