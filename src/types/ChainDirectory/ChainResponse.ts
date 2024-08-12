import type { Repository } from '../Repository'
import type { Chain } from './Chain'

export interface ChainResponse {
  repository: Repository
  chain: Chain
}
