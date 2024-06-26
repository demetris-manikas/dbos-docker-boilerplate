import { GetApi, TransactionContext } from "@dbos-inc/dbos-sdk";
import { Knex } from "knex";

export class Index {
    @GetApi('/')
    static async ip(ctxt: TransactionContext<Knex>) {
        return Promise.resolve(`Welcome to dbos app. Your ip is ${ctxt.request.ip}!`);
    }
}
