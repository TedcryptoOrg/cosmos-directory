import {Asset} from "./Asset";

export type AssetsResponse = {
  chain_name: string,
  assets: Asset[];
};