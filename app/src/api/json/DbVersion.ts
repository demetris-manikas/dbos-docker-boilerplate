import { GetApi, Transaction, TransactionContext } from "@dbos-inc/dbos-sdk";
import { Knex } from "knex";

export interface dbos_pgversion {
    version: string;
}

export class DbVersion {
    @GetApi('/db/version')
    @Transaction()  // Run this function as a database transaction
    static async version(ctxt: TransactionContext<Knex>) {
        const { rows } = await ctxt.client.raw("select version() as version",) as { rows: dbos_pgversion[] };
        return `Postgres connection succesfull!\n version ${rows[0].version}!\n`;
    }
}
