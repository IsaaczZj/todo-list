import { Lock, LockKeyhole, Mail, User } from "lucide-react";
import { Card } from "../components/card";
import { Container } from "../components/container";
import { Button } from "../components/button";
import { NavLink } from "react-router";
import { Input } from "../components/input";

export function SignUp() {
  return (
    <Container className="flex flex-col items-center">
      <form action="">
        <Card className="flex flex-col items-center justify-center gap-10 py-8 px-5 md:min-w-[400px] ">
          <div className="flex items-center gap-5 w-full">
            <User />
            <Input
              placeholder="Nome de usuário"
              type="text"
              className=" w-full"
            />
          </div>
          <div className="flex items-center gap-5 w-full">
            <Mail />
            <Input
              placeholder="email@exemple.com"
              type="email"
              className=" w-full"
              autoComplete="off"
            />
          </div>
          <div className="flex items-center gap-5  w-full">
            <Lock />
            <Input
              placeholder="Cria uma senha"
              type="password"
              className=" w-full"
              autoComplete="new-password"
            />
          </div>
          <div className="flex items-center gap-5  w-full">
            <LockKeyhole />
            <Input
              placeholder="Digite a senha novamente"
              type="password"
              className=" w-full"
              autoComplete="new-password"
            />
          </div>
          <Button className="w-full h-8 ">Criar conta</Button>
          <NavLink className="-mt-5 hover:opacity-80" to="/">
            Já tenho uma conta
          </NavLink>
        </Card>
      </form>
    </Container>
  );
}
