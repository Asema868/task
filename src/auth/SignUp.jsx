import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signUpRequest } from "../store/authunk";
import ErrorMessages from "../components/UI/ErrorMessages";
import { isAuth } from "../store/authSlice";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });
  const handleRegister = () => {
    const role = "user";
    localStorage.setItem("auth", JSON.stringify({ data: { role } }));
    dispatch(isAuth(role));
    navigate("/");
  };

  const submitHandler = (userData) => {
    if (userData.email === "admin@gmail.com") {
      userData.role = "ADMIN";
    } else {
      userData.role = "USER";
    }
    dispatch(signUpRequest({ userData, navigate }));
  };

  return (
    <StyledRefisterPage>
      <h1>Registration</h1>
      <section>
        <form onSubmit={handleSubmit(submitHandler)}>
          <StyledContainer>
            <input
              {...register("firstName", { required: "Введите имя" })}
              type="text"
              placeholder="Введите имя"
            />
            <ErrorMessages>{errors?.firstName?.message}</ErrorMessages>
          </StyledContainer>
          <StyledContainer>
            <input
              {...register("lastName", { required: "Введите фомилию" })}
              type="text"
              placeholder="Введите фамилию"
            />
            <ErrorMessages>{errors?.lastName?.message}</ErrorMessages>
          </StyledContainer>
          <StyledContainer>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Введите email",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "не правильно введень email",
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
                  message: "Введите password",
                },
                minLength: {
                  value: 6,
                  message: "пароль должен быть неменее 6 символов",
                },
                maxLength: {
                  value: 15,
                  message: "слишком много ",
                },
              })}
              type="password"
              placeholder="Введите password"
            />
            <ErrorMessages>{errors?.password?.message}</ErrorMessages>
          </StyledContainer>
          <button onClick={handleRegister}>Отправить</button>
        
          <StyledLink to={"/"}>go to login page </StyledLink>
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
