import React, {useState} from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'
import Axios from "axios";


const SignIn = () => {

  const [rEmail, setRemail] = useState("");
  const [rPassword, setRpassword] = useState("");

  const submitContent = () => {
    Axios.post("http://localhost:3001/api/insert", {
      rEmail: rEmail,
      rPassword: rPassword,
    }).then(response => {
      console.log(response);
  }).catch(e => {
      console.log(e);
  });
  };



  return (
    <>
        <Container>
          <FormWrap>
            <Icon to="/">arc</Icon>
            <FormContent>
              <Form action="/api/insert" method='POST'>
                <FormH1>Sign into your account</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" name="rEmail" onChange={(e) => {
                  setRemail(e.target.value);
                  console.log(rEmail);
                }}/>
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput type="password" name="rPassword" onChange={(e) => {
                  setRpassword(e.target.value);
                  console.log(rPassword);
                }}/>
                <FormButton type="submit" onClick={submitContent}>Let's Go</FormButton>
                <Text>Forgot Password</Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
    </>
  )
}

export default SignIn