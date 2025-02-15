import { NextApiRequest, NextApiResponse } from "next";
import { votePost } from "@/util/posts";
import { newVoteSchema } from "@/schemas/voteSchemas";
import z from "zod";

export default async function getPostsHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method === "POST") {
      const { direction, postId } = newVoteSchema.parse(req.body);

      const vote = await votePost({ direction, postId });
      return res.status(405).json(vote);
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Invalid request", error });
    }

    return res.status(500).json({ message: "Internal server error", error });
  }
}
