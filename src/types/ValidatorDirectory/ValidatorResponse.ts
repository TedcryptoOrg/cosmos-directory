import {Repository} from "../Repository";
import {Validator} from "./Validator";

export type ValidatorResponse = {
    repository: Repository,
    validator: Validator,
}