import { type Repository } from '../Repository'
import { type Chain } from './Chain'

export interface ChainsResponse {
  repository: Repository
  chains: Chain[]
}
