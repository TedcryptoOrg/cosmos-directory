import type { Repository } from '../Repository'
import type { Validator } from './Validator'

export interface ValidatorsResponse {
  repository: Repository
  validators?: Validator[]
}
