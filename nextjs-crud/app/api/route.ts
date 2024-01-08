import { NextRequest } from "next/server"
import { getPosts, postPosts } from '../lib/data/post';

export async function GET() {
  const result = await getPosts();
  return Response.json(result)
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await postPosts(body.top, body.content);
  return Response.json(result)
}