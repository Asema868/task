import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import ErrorMessages from "../components/UI/ErrorMessages";
import { Link, useNavigate } from "react-router";
import { isAuth } from "../store/authSlice";
import { signInRequest } from "../store/authunk";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (authData?.data?.role) {
      dispatch(isAuth(authData.data.role));
      navigate("/");
    }
  }, [dispatch, navigate]);

  const submitHandler = (userData) => {
    dispatch(signInRequest({ userData, navigate }));
  };

  return (
    <StyledRefisterPage>
      <h1>LoginPage</h1>
      <section>
        <form onSubmit={handleSubmit(submitHandler)}>
          <StyledContainer>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Введите email",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Неправильный email",
                },
              })}
              type="email"
              placeholder="Введите email"
            />
            <ErrorMessages>{errors?.email?.message}</ErrorMessages>
          </StyledContainer>
          <StyledContainer>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Введите пароль",
                },
                minLength: {
                  value: 5,
                  message: "Пароль должен быть не менее 6 символов",
                },
                maxLength: {
                  value: 15,
                  message: "Слишком длинный пароль",
                },
              })}
              type="password"
              placeholder="Введите пароль"
            />
            <ErrorMessages>{errors?.password?.message}</ErrorMessages>
          </StyledContainer>
          <button>Отправить</button>
          <StyledLink to={"/register"}>Go to page registration</StyledLink>
        </form>
      </section>
    </StyledRefisterPage>
  );
}

const StyledRefisterPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  & > section > form {
    width: 500px;
    height: fit-content;
    background-color: #71727216;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    padding: 30px;
    border-radius: 15px;
    border: 1px solid antiquewhite;

    & > button {
      height: 60px;
      border-radius: 10px;
      background-color: green;
      color: white;
      font-size: 20px;
      font-weight: bold;
      border: 1px solid aquamarine;
      cursor: pointer;
    }
  }
`;

const StyledContainer = styled.div`
  height: 63px;
  display: flex;
  flex-direction: column;
  & > input {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    font-size: 17px;
    padding-left: 10px;
    border: none;
  }
`;

const StyledLink = styled(Link)`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
`;
