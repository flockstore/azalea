import {NextResponse} from "next/server";
import {logoutURL} from "@/common/provider/auth.provider";

/**
 * Creates a federated logout request which
 * redirects to the provided logout URL and
 * provides the app client data for Logto.
 * @constructor with request.
 */
export function GET() {
    return NextResponse.redirect(logoutURL());
}

/**
 * Creates a federated logout request which
 * redirects to the provided logout URL and
 * provides the app client data for Logto.
 * @constructor with request.
 */
export function POST() {
    return NextResponse.redirect(logoutURL());
}