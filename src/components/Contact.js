import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  background-color: #1c1c1c; /* Dark background */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

const Desc = styled.div`
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;
  color: white;
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #007bff; 
`;

const ContactTitle = styled.div`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 600;
  color: white;
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid white;
  outline: none;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 15px;
  &:focus {
    border: 1px solid #007bff;
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid white;
  outline: none;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 15px;
  &:focus {
    border: 1px solid #007bff;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: #007bff;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const Snackbar = styled.div`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  min-width: 250px;
  background-color: #333;
  color: white;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
  opacity: ${(props) => (props.open ? '1' : '0')};
  transition: opacity 0.6s, visibility 0.6s;
`;

const Contact = () => {
  // Hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_x71o489', 'template_7c9t9hd', form.current, 'KtSY0KSOkOgsOQ5tT')
      .then((result) => {
        setOpen(true);
        form.current.reset();
        setTimeout(() => setOpen(false), 6000); // Hide after 6 seconds
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <Container>
        <Wrapper>
          <Title>Contact</Title>
          <Desc>Feel free to reach out to me!</Desc>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput placeholder="Your Email" name="from_email" required />
            <ContactInput placeholder="Your Name" name="from_name" required />
            <ContactInput placeholder="Subject" name="subject" required />
            <ContactInputMessage placeholder="Message" rows="4" name="message" required />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
          <Snackbar open={open}>Email sent successfully!</Snackbar>
        </Wrapper>
      </Container>
    </section>
  );
};

export default Contact;
