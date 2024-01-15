import {NextResponse} from "next/server";
import {revalidatePath} from "next/cache";

const supabase_webhook_key = process.env.SUPABASE_WEBHOOK_KEY;

export async function POST(request: Request) {
    const { headers } = request;
    const signature = headers.get('API-Key');
    if (!signature) return new Response('"API-Key" header is missing', { status: 401 });
    if (signature !== supabase_webhook_key) return new Response('API Key is not valid', { status: 403 });
    console.log("rebuilding posts...");

    revalidatePath("/[categorySlug]/[productSlug]");

    return NextResponse.json({
        "revalidated": true,
        "date": new Date().toISOString(),
    })
}