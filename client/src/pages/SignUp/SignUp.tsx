import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useInput from '../../hooks/useInput';

import styled from 'styled-components';

import SignUpFieldsContainer from './SignUpFieldsContainer';
import SignUpTopWrapper from './SignUpTopWrapper';
import SignUpOauthContainer from './SignUpOauthContainer';
import SignUpButtonsContainer from './SignUpButtonsContainer';
import Modal from '../../components/common/Modal';

const oauthSignUp = () => {
  console.log('oauth');
};

const SignUp = () => {
  const navigator = useNavigate();

  const [userNameProps, setUserName] = useInput('');
  const [emailProps, setEmail] = useInput('');
  const [passWordProps, setPassWord] = useInput('');

  const [usernameValid, setUserNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passWordValid, setPassWordValid] = useState(true);

  const emailSignUp: React.MouseEventHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await axios
        .post(
          'http://ec2-13-209-70-188.ap-northeast-2.compute.amazonaws.com:8080/api/members/signup',
          {
            username: userNameProps.value,
            email: emailProps.value,
            password: passWordProps.value
          }
        )
        .then((response) => {
          console.log(`this is response:${response}`);
          console.log(`this is username:${userNameProps.value}`);
          alert('you successfully signed up!');
          navigator('/login');
        });
    } catch (error) {
      console.log(error);
      alert('you failed to signup!');
      navigator('/error');
    }
  };

  return (
    <StyledSignUpContainer>
      <Modal confirmMessage={'정말입니까'} />
      <StyledSignUpFormWrapper>
        {/* top - component */}
        <SignUpTopWrapper />
        {/* Form - component */}
        <StyledSignUpFormContainer>
          {/* Oauth - component */}
          <SignUpOauthContainer onClick={oauthSignUp} />
          {/* Input - components */}
          <SignUpFieldsContainer
            inputUserName={userNameProps}
            inputEmail={emailProps}
            inputPassWord={passWordProps}
          />
          {/* Button - components */}
          <SignUpButtonsContainer onClick={emailSignUp} />
        </StyledSignUpFormContainer>
      </StyledSignUpFormWrapper>
    </StyledSignUpContainer>
  );
};

export default SignUp;

const StyledSignUpContainer = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const StyledSignUpFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 1.6rem;
    margin: 0.3rem;
    white-space: nowrap;
  }
`;

const StyledSignUpFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 650px) {
    width: 80%;
  }
`;
