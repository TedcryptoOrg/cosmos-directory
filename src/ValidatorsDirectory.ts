import BaseDirectory from "./BaseDirectory";
import axios from "axios";

export default class ValidatorsDirectory extends BaseDirectory {
    private url: string;

    constructor(testnet: boolean) {
        super(testnet);
        
        this.url = this.protocol + `://validators.` + this.domain
    }

    getValidators(chainName: string): Promise<any> {
        return axios.get(this.url + '/chains/' + chainName)
            .then(res => res.data.validators)
    }

    getRegistryValidator(validatorName: string): Promise<any> {
        return axios.get(this.url + '/' + validatorName)
            .then(res => res.data.validator)
    }

    getOperatorAddresses(): Promise<any> {
        return axios.get(this.url)
            .then(res => res.data)
            .then(data => Array.isArray(data) ? data : data.validators) // deprecate
            .then(data => data.reduce((sum: any, validator: any) => {
                validator.chains.forEach((chain: any) => {
                    sum[chain.name] = sum[chain.name] || {}
                    if(chain.restake){
                        sum[chain.name][chain.address] = chain.restake
                    }
                }, {})
                return sum
            }, {}))
    }
}