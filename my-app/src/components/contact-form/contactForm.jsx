import React from "react";
import {
  Form,
  Description,
  Wrapper,
  Input,
  TextArea,
  SendButton,
  SendButtonIcon,
} from "./contactForm.styled";

import SendData from "../../api/sendData";

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
    sendRequest(formData);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };
  const sendRequest = (data) => (submitting ? SendData(data) : null);

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
