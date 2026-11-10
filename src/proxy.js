import { NextResponse } from "next/server";

/**
 * Password-protects internal pages under /sales (e.g. /sales/whatsapp-replies.html).
 *
 * Set these environment variables on the server (and in .env.local to test locally):
 *   SALES_USER=...
 *   SALES_PASSWORD=...
 *
 * If they are not set, /sales is hidden completely (404) – it never becomes public by accident.
 */
export function proxy(request) {
    const user = process.env.SALES_USER;
    const password = process.env.SALES_PASSWORD;

    if (!user || !password) {
        return new NextResponse("Not found", { status: 404 });
    }

    const [scheme, encoded] = (request.headers.get("authorization") || "").split(" ");
    if (scheme === "Basic" && encoded) {
        const decoded = atob(encoded);
        const separator = decoded.indexOf(":");
        const givenUser = decoded.slice(0, separator);
        const givenPassword = decoded.slice(separator + 1);
        if (separator > -1 && givenUser === user && givenPassword === password) {
            const response = NextResponse.next();
            response.headers.set("X-Robots-Tag", "noindex, nofollow");
            response.headers.set("Cache-Control", "private, no-store");
            return response;
        }
    }

    return new NextResponse("Login required", {
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic realm="Workation Dharamshala - internal", charset="UTF-8"',
            "X-Robots-Tag": "noindex, nofollow",
        },
    });
}

export const config = {
    matcher: ["/sales/:path*"],
};
