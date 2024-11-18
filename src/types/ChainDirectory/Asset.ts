export interface Asset {
  name: string
  description: string
  symbol: string
  type_asset?: string
  denom: string
  decimals: number
  coingecko_id: string
  image: string
  base: {
    denom: string
    exponent: number
  }
  display?: {
    denom: string
    exponent: number
  }
  denom_units: Array<{
    denom: string
    exponent: number
  }>
  logo_URIs: {
    png?: string
    svg?: string
  }
  prices?: {
    coingecko?: {
      usd: number
    }
  }
}
