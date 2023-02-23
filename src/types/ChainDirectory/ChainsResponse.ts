import {Repository} from "./Repository";
import {Chain} from "./Chain";

export type ChainsResponse = {
    repository: Repository,
    chains: Chain[],
}