import { type ValidatorChain } from './ValidatorChain'

export interface ChainValidatorResponse {
  name: string
  validators: ValidatorChain[]
}
