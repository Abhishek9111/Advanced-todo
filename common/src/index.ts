import { z } from "zod";
export const signUpInput = z.object({
  username: z.string(),
  password: z.string(),
});

console.log("very very temporrary change");

export type SignUpParams = z.infer<typeof signUpInput>;
