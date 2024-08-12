import type { Asset } from './Asset'

export interface AssetsResponse {
  chain_name: string
  assets: Asset[]
}
