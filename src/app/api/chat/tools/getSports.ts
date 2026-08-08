
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos of parag1 riding his bike",
  parameters: z.object({}),
  execute: async () => {
    return "Here are my sports and hobbies highlights!";
  },
});