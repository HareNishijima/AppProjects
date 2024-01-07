export async function GET() {
  const data = {
    message : "hello"
  };
  return Response.json(data)
}