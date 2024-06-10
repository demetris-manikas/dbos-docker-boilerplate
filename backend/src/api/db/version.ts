import { Authentication, GetApi, Transaction, TransactionContext } from "@dbos-inc/dbos-sdk";
import { Knex } from "knex";
import { basicHttpAuthentication } from "../../middleware/auth/basic";
import { DefaultRequiredRole } from "../../middleware/auth/defs";

export interface dbos_pgversion {
    version: string;
}

@Authentication(basicHttpAuthentication)
@DefaultRequiredRole(['user'])
export class Version {
    @GetApi('/db/version')
    @Transaction()
    static async version(ctxt: TransactionContext<Knex>) {
        const { rows } = await ctxt.client.raw("select version() as version",) as { rows: dbos_pgversion[] };
        return `Postgres connection succesfull!\n version ${rows[0].version}!\n`;
    }
}
