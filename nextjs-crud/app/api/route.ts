import { NextRequest } from "next/server"
import { postPosts } from '../lib/data/post';

export async function GET() {
  const data = {
    message : "hello"
  };
  return Response.json(data)
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await postPosts(body.top, body.content);
  return Response.json(result)
}