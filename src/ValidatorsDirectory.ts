import BaseDirectory from "./BaseDirectory";
import axios from "axios";
import {ValidatorsResponse} from "./types/ValidatorDirectory/ValidatorsResponse";
import {ValidatorResponse} from "./types/ValidatorDirectory/ValidatorResponse";
import {ChainValidatorResponse} from "./types/ValidatorDirectory/ChainValidatorResponse";
import {ValidatorChain} from "./types/ValidatorDirectory/ValidatorChain";
import {Validator} from "./types/ValidatorDirectory/Validator";

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
            .then(data => {
                const aggregator = {};
                data.forEach((validator: Validator) => {
                    validator.chains.forEach((chain: ValidatorChain) => {
                        aggregator[chain.name] = aggregator[chain.name] || {}
                        if(chain.restake){
                            aggregator[chain.name][chain.address] = chain.restake
                        }
                    })
                });

                return aggregator;
            })
    }
}