import BaseDirectory from './BaseDirectory'
import axios from 'axios'
import { type ValidatorsResponse } from './types/ValidatorDirectory/ValidatorsResponse'
import { type ValidatorResponse } from './types/ValidatorDirectory/ValidatorResponse'
import { type ChainValidatorResponse } from './types/ValidatorDirectory/ChainValidatorResponse'
import { type ValidatorChain } from './types/ValidatorDirectory/ValidatorChain'
import { type Validator } from './types/ValidatorDirectory/Validator'
import { type Restake } from './types/ValidatorDirectory/Restake'

type Aggregator = Record<string, Record<string, Restake>>

export default class ValidatorsDirectory extends BaseDirectory {
  private readonly url: string

  constructor (testnet: boolean = false) {
    super(testnet)

    this.url = this.protocol + '://validators.' + this.domain
  }

  async getAllValidators (): Promise<ValidatorsResponse> {
    return await axios.get(this.url).then(res => res.data)
  }

  async getValidators (chainName: string): Promise<ChainValidatorResponse> {
    return await axios.get(this.url + '/chains/' + chainName)
      .then(res => res.data)
  }

  async getValidator (validatorName: string): Promise<ValidatorResponse> {
    return await axios.get(this.url + '/' + validatorName)
      .then(res => res.data)
  }

  async getOperatorAddresses (): Promise<any> {
    return await this.getAllValidators()
      .then(data => data.validators ? data.validators : [])
      .then(data => {
        const aggregator: Aggregator = {}
        data.forEach((validator: Validator) => {
          validator.chains.forEach((chain: ValidatorChain) => {
            aggregator[chain.name] = aggregator[chain.name] || {}
            if (chain.restake) {
              aggregator[chain.name][chain.address] = chain.restake
            }
          })
        })

        return aggregator
      })
  }
}
