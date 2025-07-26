import { Lock, Mail, User } from "lucide-react";
import { Card } from "../components/ui/card";
import { Container } from "../components/ui/container";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInFormSchema,
  type SignInFormSchema,
} from "../schemas/auth-schemas";

export function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  });

  function onSubmit(data: SignInFormSchema) {
    console.log(data);
  }

  return (
    <Container className="flex flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="flex flex-col items-center justify-center gap-10 py-8 px-5 md:min-w-[400px] ">
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
              placeholder="******"
              type="password"
              className=" w-full"
              autoComplete="new-password"
              {...register("password")}
            />
          </div>
          {errors.password?.message && (
            <p className="text-pink-base -my-5 ">{errors.password.message}</p>
          )}
          <Button className="w-full h-8 ">Entrar</Button>
          <NavLink className="-mt-5 hover:opacity-80" to="/signup">
            Criar conta
          </NavLink>
        </Card>
      </form>
    </Container>
  );
}
