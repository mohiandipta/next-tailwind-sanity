import { createClient } from "next-sanity";

export const config = createClient({
  projectId: "z9kp3a1c",
  dataset: "production",
  useCdn: false,
});