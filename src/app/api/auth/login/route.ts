import {signIn} from "@/provider/auth.provider";

/**
 * Creates a federated logout request which
 * redirects to the provided logout URL and
 * provides the app client data for Logto.
 * @constructor with request.
 */
export function GET() {
    return signIn("logto");
}

/**
 * Creates a federated logout request which
 * redirects to the provided logout URL and
 * provides the app client data for Logto.
 * @constructor with request.
 */
export function POST() {
    return signIn("logto");
}