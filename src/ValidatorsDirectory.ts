import BaseDirectory from "./BaseDirectory";
import axios from "axios";
import {ValidatorsResponse} from "./types/ValidatorDirectory/ValidatorsResponse";
import {ValidatorResponse} from "./types/ValidatorDirectory/ValidatorResponse";
import {ChainValidatorResponse} from "./types/ValidatorDirectory/ChainValidatorResponse";

export default class ValidatorsDirectory extends BaseDirectory {
    private url: string;

    constructor(testnet: boolean) {
        super(testnet);
        
        this.url = this.protocol + `://validators.` + this.domain
    }

    getAllValidators(): Promise<ValidatorsResponse> {
        return axios.get(this.url).then(res => res.data);
    }

    getValidators(chainName: string): Promise<ChainValidatorResponse> {
        return axios.get(this.url + '/chains/' + chainName)
            .then(res => res.data)
    }

    getValidator(validatorName: string): Promise<ValidatorResponse> {
        return axios.get(this.url + '/' + validatorName)
            .then(res => res.data)
    }

    getOperatorAddresses(): Promise<any> {
        return this.getAllValidators()
            .then(data => data.validators ? data.validators : [])
            .then(data => data.reduce((sum: any, validator: any) => {
                validator.chains.forEach((chain: any) => {
                    sum[chain.name] = sum[chain.name] || {}
                    if(chain.restake){
                        sum[chain.name][chain.address] = chain.restake
                    }
                })

                return sum
            }))
    }
}