import zod from "zod";

export const signupInput = zod.object({
  username: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(6),
});

export const signinInput = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

export const createBlogInput = zod.object({
  title: zod.string(),
  content: zod.string(),
});

export const updateBlogInput = zod.object({
  title: zod.string(),
  content: zod.string(),
  id: zod.number(),
});

export type SignupInput = zod.infer<typeof signupInput>;
export type SigninInput = zod.infer<typeof signinInput>;
export type UpdateBlogInput = zod.infer<typeof updateBlogInput>;
export type CreateBlogInput = zod.infer<typeof createBlogInput>;
