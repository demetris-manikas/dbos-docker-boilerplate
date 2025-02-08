import { DBOS } from "@dbos-inc/dbos-sdk";

export class Index {
    @DBOS.getApi('/')
    static async ip() {
        return Promise.resolve(`Welcome to dbos app. Your ip is ${DBOS.getKoaContext()?.request.ip}!`);
    }
}
