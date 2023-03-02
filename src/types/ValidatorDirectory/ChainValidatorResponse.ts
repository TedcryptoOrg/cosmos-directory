import {ValidatorChain} from "./ValidatorChain";

export type ChainValidatorResponse = {
    name: string,
    validators: ValidatorChain[],
}