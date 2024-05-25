import { type Repository } from '../Repository'
import { type Validator } from './Validator'

export interface ValidatorResponse {
  repository: Repository
  validator: Validator
}
