import BaseDirectory from "./BaseDirectory";
import axios from 'axios'
import {ChainResponse} from "./types/ChainDirectory/ChainResponse";
import {ChainsResponse} from "./types/ChainDirectory/ChainsResponse";
import {AssetsResponse} from "./types/ChainDirectory/AssetsResponse";

export default class ChainDirectory extends BaseDirectory {
    private url: string;

    constructor(testnet: boolean = false) {
        super(testnet);

        this.url = this.protocol + `://chains.` + this.domain
    }

    getChains(): Promise<ChainsResponse> {
        return axios.get(this.url)
            .then(res => res.data)
    }

    getChainData(name: string): Promise<ChainResponse> {
        return axios.get([this.url, name].join('/'))
            .then(res => res.data)
    }

    getTokenData(name: string): Promise<AssetsResponse> {
        return axios.get([this.url, name, 'assetlist'].join('/'))
            .then(res => res.data)
    }
}