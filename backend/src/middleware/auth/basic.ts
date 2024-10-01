import { MiddlewareContext } from "@dbos-inc/dbos-sdk";
import { HttpAuthenticationResult } from "./defs";

export async function basicHttpAuthentication(
    ctx: MiddlewareContext
): Promise<HttpAuthenticationResult> {
    return Promise.resolve({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      authenticatedUser: ctx.koaContext?.header.username as string ?? '',
      authenticatedRoles: ['user'],
    });
}
