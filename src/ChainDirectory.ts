import BaseDirectory from "./BaseDirectory";
import axios from 'axios'

export default class ChainDirectory extends BaseDirectory {
    private url: string;

    constructor(testnet: boolean) {
        super(testnet);

        this.url = this.protocol + `://chains.` + this.domain
    }

    getChains(): Promise<any> {
        return axios.get(this.url)
            .then(res => res.data)
            .then(data => Array.isArray(data) ? data : data.chains) // deprecate
            .then(data => data.reduce((a: any, v: any) => ({ ...a, [v.path]: v }), {}))
    }

    getChainData(name: string): Promise<any> {
        return axios.get([this.url, name].join('/'))
            .then(res => res.data.chain)
    }

    getTokenData(name: string): Promise<any> {
        return axios.get([this.url, name, 'assetlist'].join('/'))
            .then(res => res.data)
    }
}