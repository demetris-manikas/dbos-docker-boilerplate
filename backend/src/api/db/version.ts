import { Authentication, DBOS, TransactionContext } from "@dbos-inc/dbos-sdk";
import { Knex } from "knex";
import { basicHttpAuthentication } from "../../middleware/auth/basic";
import { DefaultRequiredRole } from "../../middleware/auth/defs";

export interface dbos_pgversion {
    version: string;
}

@Authentication(basicHttpAuthentication)
@DefaultRequiredRole(['user'])
export class Version {
    @DBOS.getApi('/db/version')
    @DBOS.transaction({readOnly: true})
    static async version(ctxt: TransactionContext<Knex>) {
        const { rows } = await ctxt.client.raw("select version() as version",) as { rows: dbos_pgversion[] };
        return `Postgres connection succesfull!\n version ${rows[0].version}!\n`;
    }
}
