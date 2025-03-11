import { z } from "zod";

const config = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string().min(1, "API port is required"),
});

const configProject = config.safeParse({
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

if (!configProject.success) {
  console.log(configProject.error.issues);
}

const envConfig = configProject.data;

export default envConfig;
