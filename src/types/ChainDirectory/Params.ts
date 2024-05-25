export interface Params {
  authz: boolean
  actual_block_time: number
  actual_blocks_per_year: number
  unbonding_time: number
  max_validators: number
  blocks_per_year: number
  block_time: number
  community_tax: number
  base_inflation: number
  estimated_apr: number
  calculated_apr: number
  bonded_ratio: number
  current_block_height: string
  bonded_tokens: string
  total_supply: string
  annual_provisions: string
  staking: {
    unbonding_time: string
    max_validators: number
    max_entries: number
    historical_entries: number
    bond_denom: string
  }
  slashing: {
    signed_blocks_window: string
    min_signed_per_window: string
    downtime_jail_duration: string
    slash_fraction_double_sign: string
    slash_fraction_downtime: string
  }
  mint: {
    mint_denom: string
    blocks_per_year: string
  }
  distribution: {
    community_tax: string
    base_proposer_reward: string
    bonus_proposer_reward: string
    withdraw_addr_enabled: boolean
  }
}
