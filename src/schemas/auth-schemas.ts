import z from "zod";

export const signInFormSchema = z.object({
  email: z.email("Informe um e-mail válido").min(3, "Informe o e-mail"),
  password: z
    .string()
    .min(1, "Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;

export const singUpFormSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(1, "Informe um nome")
      .min(4, "O nome deve ter pelo menos 4 caracteres"),
    email: z.email("Informe um e-mail válido").min(3, "Informe o e-mail"),
    password: z
      .string()
      .min(1, "Informe a senha")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(1, "Informe a senha")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });

export type SignUpFormSchema = z.infer<typeof singUpFormSchema>;
