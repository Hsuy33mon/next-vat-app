export async function GET() {
    const rate = 0.07;
    return Response.json({ rate });
}