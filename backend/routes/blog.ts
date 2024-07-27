import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient, User } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@anil_codes/common-modules";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";


  const user = await verify(authHeader, c.env.JWT_SECRET) ;

  if (user) {
    // @ts-ignore
    c.set("userId", user.id);
   await next();
  } else {
    c.status(403);
    return c.json({
      message: "You are not logged in, please login please!",
    });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const {success} = createBlogInput.safeParse(body)

  if(!success) {
    c.status(411);
    return c.json({
      message: "Something's up with your inputs, please try again!"
    })
  }
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(authorId),
    },
  });

  return c.json({
    id: blog.id,
  });
});


blogRouter.get("/bulk", async (c) => {
 try {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.blog.findMany({
    select: {
      title: true,
      content: true,
      id: true,
      author: {
        select: {
          username: true
        }
      }
    }
  });

  return c.json({
    blogs
  });
 } catch (error) {
  console.log("Error fetching blogs: ", error)
  c.status(500);

  return c.json({
    
    message: "internal server error",
  })
 }
});


blogRouter.put("/:id", async (c) => {
  const id = c.req.param("id")
  const body = await c.req.json();
  const {success} = updateBlogInput.safeParse(body)

  if(!success) {
    c.status(411);
    return c.json({
      message: "Something's up with your inputs, please try again!"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.update({
    where: {
      id: Number(id),
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({
    blog,
  });
});

blogRouter.get("/:id", async (c) => {

  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.findFirst({
    where: {
      id: Number(id),
    },
    select: {
      title: true,
      content: true,
      author: {
        select: {
          username: true
        }
      }
    }
  });

  return c.json({
    blog,
  });
});

blogRouter.delete('/:id', async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.delete({
    where: {
      id: Number(id)
    }
  })

  return c.json({
    message: "Blog deleted successfully!"
  })
})