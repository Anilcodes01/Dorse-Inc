import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { jwt, sign } from "hono/jwt";
import { signinInput, signupInput } from "@anil_codes/common-modules";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const {success} = signupInput.safeParse(body)

  if(!success) {
    c.status(411);
    return c.json({
      message: "Something's up with your inputs, please try again!"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

 

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      username: body.username,
    },
  });

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.text(jwt)
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const {success} = signinInput.safeParse(body)

  if(!success) {
    c.status(411);
    return c.json({
      message: "Something's up with your inputs, please try again!"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

 

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({
      message: "User doesn't exist in our database!",
    });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.text(jwt)
});

userRouter.post("/logout", async (c) => {
  // @ts-ignore
  c.cookie('token', '', {expires: new Date(0)})
  // @ts-ignore
  c.cookie('refreshToken', '', {expires: new Date(0)})

  return c.json({
    message: "Logged out successfully!"
  })
})