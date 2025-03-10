import { zodResolver } from "@hookform/resolvers/zod";
import React, { use, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import CustomEmailInput from "../../shared-components/atoms/Input/Email/CustomEmailInput";
import CustomPasswordInput from "../../shared-components/atoms/Input/Password/CustomPasswordInput";
import CustomBtn from "../../shared-components/atoms/Button/CustomBtn";
import CustomLogoBtn from "../../shared-components/atoms/Logo/CustomLogoBtn";
import Logo from "../../../../public/assets/logos/logo.png";
import { LoginDto } from "../../types/interfaces/request/login-dto";
import { authService } from "../../services/api/AuthService";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setUser } from "../../store/reducers/user.slice";
import { setNotification } from "../../store/reducers/notification.slice";
import { Navigate } from "react-router-dom";

const useInitForm = () => {
  const formSchema = z.object({
    email: z
      .string()
      .min(1, "This field is required")
      .max(100, "Character limit exceeded")
      .email({ message: "Invalid email" }),
    password: z
      .string()
      .min(1, "This field is required")
      .min(8, "Minimum 8 characters required")
      .max(64, "Character limit exceeded"),
  });

  type FormFields = z.infer<typeof formSchema>;

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: initialValues,
    resolver: zodResolver(formSchema),
  });

  return { control, handleSubmit, errors, isSubmitting };
};

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loginSuccess } = useAppSelector((state) => state.user);
  const { control, errors, handleSubmit, isSubmitting } = useInitForm();
  const [loading, setLoading] = React.useState(false);

  if(loginSuccess) {
    return <Navigate to={"/Dashboard"} replace/>
  }

  const handleLogin = async (payload: LoginDto) => {
    console.log(payload);
    try {
      setLoading(true);
      const {success, message, data} = await authService.login(payload);
      if(!success) {
        throw new Error(message);
      }
      if(data) {
        dispatch(setUser(data));
        dispatch(setNotification({
          type: "success",
          message: "Login successful",
          visibility: true
        }))
        localStorage.setItem("USER_SESSION_KEY", JSON.stringify(data))
        setLoading(false);
        console.log('done');
        
      }
    } catch (error: any) {
      console.log(error);
      dispatch(setNotification({
        type: "error",
        message: error.message ?? "Login successful",
        visibility: true
      }))
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <div className="form-body">
        <div className="form-logo">
            <CustomLogoBtn src={Logo} alt="Logo button" link="/" width="150px"/>
        </div>
        <h3 className="text-center ">Login to Access Department Dashboard</h3>
        <p className="text-center mb-4"> Login below to access your dashboard</p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <CustomEmailInput
                id="email"
                label="Username"
                placeHolder="Enter your username"
                required
                invalid={!!errors.email}
                feedback={errors.email?.message}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <CustomPasswordInput
                id="password"
                label="Password"
                required
                placeHolder="Enter your password"
                onChange={(e) => field.onChange(e.target.value)}
                invalid={!!errors.password}
                feedback={errors.password?.message}
              />
            )}
          />

          <CustomBtn
            type="submit"
            color="primary"
            className="w-100"
            disabled={isSubmitting || loading}
          >
            Log in
          </CustomBtn>
        </form>
      </div>
    </div>
  );
};

export default Login;
