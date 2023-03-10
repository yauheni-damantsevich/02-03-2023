import React, { useEffect } from "react";
import axios from "axios";
import {
  Form,
  Description,
  Wrapper,
  Input,
  TextArea,
  SendButton,
  SendButtonIcon,
} from "./contactForm.styled";

import SendIcon from "../../assets/SendIcon.svg";

export default function ContactForm() {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value,
    };
  };

  const [submitting, setSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  // "With the free plan, only WordPress default endpoints can be authenticated"

  const url =
    "http://localhost:8000/index.php?rest_route=/contact-form-7/v1/contact-forms/35/feedback";
  const config = {
    headers: {
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "content-type, Authorization",
      "Content-Type": "multipart/form-data",
    },
  };

  const data = {
    "your-name": formData.name,
    "your-email": formData.email,
    "your-message": formData.message,
  };

  useEffect(() => {
    function sendData(data) {
      axios.post(url, data, config).then((res) => {
        console.log(res);
      });
    }
    if (submitting) {
      sendData(data);
    }
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Description>
        Atlas Healthcare Group welcomes inquiries regarding our services and how
        we may be of assistance to you. Please fill out the contact form below.
      </Description>
      <Wrapper>
        <Input
          name="name"
          type="text"
          placeholder="Name:"
          onChange={setFormData}
        />
      </Wrapper>
      <Wrapper>
        <Input
          name="email"
          type="email"
          placeholder="Email:"
          onChange={setFormData}
        />
      </Wrapper>
      <Wrapper>
        <TextArea
          name="message"
          placeholder="Message:"
          onChange={setFormData}
        />
      </Wrapper>
      <SendButton type="submit">
        <SendButtonIcon src={SendIcon} />
      </SendButton>
    </Form>
  );
}
