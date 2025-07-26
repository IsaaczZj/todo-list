import { Lock, LockKeyhole, Mail, User } from "lucide-react";
import { Card } from "../components/card";
import { Container } from "../components/container";
import { Button } from "../components/button";
import { NavLink } from "react-router";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signUpFormSchema,
  type SignUpFormSchema,
} from "../schemas/auth-schemas";

export function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  });

  function onSubmit(data: SignUpFormSchema) {
    console.log(data);
  }
  return (
    <Container className="flex flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="flex flex-col items-center justify-center gap-10 py-8 px-5 md:min-w-[400px] ">
          <div className="flex items-center gap-5 w-full">
            <User />
            <Input
              placeholder="Nome de usuário"
              type="text"
              className=" w-full"
              {...register("username")}
            />
          </div>
          {errors.username?.message && (
            <p className="text-pink-base -my-5">{errors.username.message}</p>
          )}
          <div className="flex items-center gap-5 w-full">
            <Mail />
            <Input
              placeholder="email@exemple.com"
              type="email"
              className=" w-full"
              autoComplete="off"
              {...register("email")}
            />
          </div>
          {errors.email?.message && (
            <p className="text-pink-base -my-5">{errors.email.message}</p>
          )}
          <div className="flex items-center gap-5  w-full">
            <Lock />
            <Input
              placeholder="Cria uma senha"
              type="password"
              className=" w-full"
              autoComplete="new-password"
              {...register("password")}
            />
          </div>
          {errors.password?.message && (
            <p className="text-pink-base -my-5">{errors.password.message}</p>
          )}
          <div className="flex items-center gap-5  w-full">
            <LockKeyhole />
            <Input
              placeholder="Digite a senha novamente"
              type="password"
              className=" w-full"
              autoComplete="new-password"
              {...register("confirmPassword")}
            />
          </div>
          {errors.confirmPassword?.message && (
            <p className="text-pink-base -my-5">
              {errors.confirmPassword.message}
            </p>
          )}
          <Button className="w-full h-8 ">Criar conta</Button>
          <NavLink className="-mt-5 hover:opacity-80" to="/">
            Já tenho uma conta
          </NavLink>
        </Card>
      </form>
    </Container>
  );
}
