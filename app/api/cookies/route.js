import { cookies } from "next/headers";

export async function GET() {
    const sidebarState = cookies().get("sidebar:state")?.value || "false";
    return Response.json({ sidebarState });
}