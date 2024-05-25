import { type ValidatorChain } from './ValidatorChain'

export interface Validator {
  path: string
  name: string
  identity: string
  total_usd: number
  total_users: number
  chains: ValidatorChain[]
  profile: {
    $schema: string
    name: string
    identity: string
  }
}
