import { GetApi } from "@dbos-inc/dbos-sdk";

export class Index {
    @GetApi('/')
    static async version(ctxt: any) {
        return `Welcome to dbos app!`;
    }
}
