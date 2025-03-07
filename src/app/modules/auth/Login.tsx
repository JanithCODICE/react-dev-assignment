import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import CustomEmailInput from "../../shared-components/atoms/Input/Email/CustomEmailInput";
import CustomPasswordInput from "../../shared-components/atoms/Input/Password/CustomPasswordInput";
import CustomBtn from "../../shared-components/atoms/Button/CustomBtn";

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
  const { control, errors, handleSubmit, isSubmitting } = useInitForm();

  const handleLogin = (data: any) => {
    console.log(data);
  };

  return (
    <div className="login-form">
      <div className="form-body">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <CustomEmailInput
                id="email"
                label="Email"
                placeHolder="Enter your email"
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
            className="btn btn-primary btn-block"
            disabled={isSubmitting}
          >
            Log in
          </CustomBtn>
        </form>
      </div>
    </div>
  );
};

export default Login;
