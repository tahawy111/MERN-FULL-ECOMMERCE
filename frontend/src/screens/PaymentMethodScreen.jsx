import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CheckoutSteps from "../components/CheckoutSteps";
import { Store } from "../Store";
import { useNavigate } from "react-router-dom";

const PaymentMethodScreen = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const [paymentMethodName, setPaymentMethodName] = useState(
    paymentMethod || "Paypal"
  );
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethodName });
    localStorage.setItem("paymentMethod", paymentMethodName);
    navigate("/placeorder");
  };
  return (
    <div className="container">
      <CheckoutSteps step1 step2 step3 />
      <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className="my-3">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <div className="md-3">
            <Form.Check
              type="radio"
              id="Paypal"
              label="Paypal"
              value="Paypal"
              checked={paymentMethodName === "Paypal"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === "Stripe"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PaymentMethodScreen;
