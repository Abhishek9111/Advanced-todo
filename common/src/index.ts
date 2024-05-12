import { z } from "zod";
export const signUpInput = z.object({
  username: z.string(),
  password: z.string(),
});

export type SignUpParams = z.infer<typeof signUpInput>;
