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

import SendIcon from "../../assets/SendIcon.svg";

export default function ContactForm() {
  return (
    <Form>
      <Description>
        Atlas Healthcare Group welcomes inquiries regarding our services and how
        we may be of assistance to you. Please fill out the contact form below.
      </Description>
      <Wrapper>
        <Input type="text" placeholder="Name:" />
      </Wrapper>
      <Wrapper>
        <Input type="email" placeholder="Email:" />
      </Wrapper>
      <Wrapper>
        <TextArea placeholder="Message:" />
      </Wrapper>
      <SendButton>
        <SendButtonIcon src={SendIcon} />
      </SendButton>
    </Form>
  );
}
