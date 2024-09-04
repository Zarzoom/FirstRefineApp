import { FooBar } from "./data";

export async function GET() {
    return Response.json(FooBar);
}

export async function POST(request: Request) {
    const fooBar = await request.json();
    const newFooBar = {
        id: FooBar.length + 1,
        name: "Zap",
    }
    FooBar.push(newFooBar);
    return new Response(JSON.stringify(newFooBar), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}