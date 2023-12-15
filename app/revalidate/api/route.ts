export async function GET() {
  return Response.json(new Date().toISOString());
}
