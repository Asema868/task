import React from "react";
import { Link } from "react-router";
import styled, { keyframes } from "styled-components";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>OOPS! PAGE NOT FOUND</ErrorMessage>
      <ErrorMessage>
        Sorry, the page you're looking for doesn't exist.
      </ErrorMessage>
      <HomeLink to="/">Go to Home</HomeLink>
    </NotFoundContainer>
  );
};

export default NotFound;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8d7da;
  color: #721c24;
  text-align: center;
  font-family: "Arial", sans-serif;
  animation: ${fadeIn} 1s ease-in;
`;

const ErrorCode = styled.h1`
  font-size: 100px;
  margin: 0;
  animation: ${bounce} 1s;
`;

const ErrorMessage = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

const HomeLink = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #5bc0de;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #31b0d5;
    transform: scale(1.05);
  }
`;
