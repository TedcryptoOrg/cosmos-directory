import BaseDirectory from './BaseDirectory'
import axios from 'axios'
import type { ChainResponse, ChainsResponse, AssetsResponse } from './types'

export default class ChainDirectory extends BaseDirectory {
  private readonly url: string

  constructor (testnet = false) {
    super(testnet)

    this.url = this.protocol + '://chains.' + this.domain
  }

  async getChains (): Promise<ChainsResponse> {
    return await axios.get(this.url)
      .then(res => res.data)
  }

  async getChainData (name: string): Promise<ChainResponse> {
    return await axios.get([this.url, name].join('/'))
      .then(res => res.data)
  }

  async getTokenData (name: string): Promise<AssetsResponse> {
    return await axios.get([this.url, name, 'assetlist'].join('/'))
      .then(res => res.data)
  }
}
