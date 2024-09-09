// src/app/api/test/route.js
export async function GET() {
    return new Response('Test route hit!', { status: 200 });
}
