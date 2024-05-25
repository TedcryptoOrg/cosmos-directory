import { type Fee } from './Fee'
import { type StakingToken } from './StakingToken'
import { type Peer } from './Peer'
import { type Explorer } from './Explorer'
import { type Params } from './Params'
import { type Asset } from './Asset'

export interface Chain {
  name: string
  path: string
  symbol: string
  display: string
  denom: string
  decimals: number
  coingecko_id?: string
  image: string
  height: number
  chain_name: string
  status: string
  network_type: string
  website: string
  pretty_name: string
  chain_id: string
  bech32_prefix: string
  daemon_name: string
  node_home: string
  key_algos: string[]
  slip44: number
  fees: {
    fee_tokens?: Fee[]
  }
  staking: {
    staking_tokens?: StakingToken[]
  }
  codebase: {
    git_repo: string
    recommended_version: string
    compatible_versions: string[]
    cosmos_sdk_version: string
    tendermint_version: string
    cosmwasm_version?: string
    cosmwasm_enabled?: boolean
    genesis?: {
      genesis_url?: string
    }
  }
  peers: {
    seeds?: Peer[]
    persistent_peers?: Peer[]
  }
  apis: {
    rpc?: Peer[]
    rest?: Peer[]
    grpc?: Peer[]
  }
  best_apis: {
    rpc?: Peer[]
    rest?: Peer[]
    grpc?: Peer[]
  }
  explorers: Explorer[]
  proxy_status: {
    rest: boolean
    rpc: boolean
  }
  versions: {
    application_version: string
    cosmos_sdk_version: string
    tendermint_version: string
    cosmwasm_version: string
  }
  cosmwasm_enabled: boolean
  params: Params
  services: {
    staking_rewards: {
      name: string
      symbol: string
      slug: string
    }
  }
  prices: {
    coingecko: Record<string, {
      usd: number
    }>
  }
  assets: Asset[]
}
