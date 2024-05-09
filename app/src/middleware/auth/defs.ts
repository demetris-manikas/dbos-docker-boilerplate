import { DBOSHttpAuthReturn, DefaultRequiredRole as DBOSDefaultRequiredRole } from "@dbos-inc/dbos-sdk";

export type Role = 'user'| 'manager' | 'admin';

export interface HttpAuthenticationResult extends DBOSHttpAuthReturn {
    authenticatedUser: string;
    authenticatedRoles: Role[];
}

export function DefaultRequiredRole (roles: Role[]) {
    return DBOSDefaultRequiredRole(roles);
}