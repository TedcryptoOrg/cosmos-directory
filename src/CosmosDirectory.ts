import BaseDirectory from "./BaseDirectory";

export default class CosmosDirectory extends BaseDirectory {

    constructor(testnet: boolean = false) {
        super(testnet);
    }

    rpcUrl(name: string): string {
        return this.protocol + `://rpc.` + this.domain + '/' + name
    }

    restUrl(name: string): string {
        return this.protocol + `://rest.` + this.domain + '/' + name
    }
}