import {Repository} from "../Repository";
import {Validator} from "./Validator";

export type ValidatorsResponse = {
    repository: Repository,
    validators?: Validator[],
}