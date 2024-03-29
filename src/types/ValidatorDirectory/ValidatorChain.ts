import {ValidatorSlash} from "./ValidatorSlash";
import {Restake} from "./Restake";

export type ValidatorChain = {
    name: string,
    moniker: string,
    identity: string,
    address: string,
    active: boolean,
    jailed: boolean,
    status: string,
    tokens?: string,
    delegations: {
        total_tokens: string,
        total_tokens_display: number,
        total_usd: number,
    },
    description: {
        moniker: string,
        identity: string,
        website: string,
        security_contact: string,
        details: string,
    },
    commission: {
        rate: number,
        update_time?: string,
        commission_rates?: {
            rate: string,
            max_rate: string,
            max_change_rate: string,
        }
    },
    rank: number,
    slashes: ValidatorSlash[],
    image: string,
    restake: Restake,
    missed_blocks_periods: {
        blocks: number,
        missed: number
    }[],
    // Not in all API responses
    path?: string,
    hex_address?: string,
    operator_address?: string,
    consensus_pubkey?: {
        "@type": string,
        key: string,
    },
    delegator_shares?: string,
    unbonding_height?: string,
    unbonding_time?: string,
    min_self_delegation?: string,
    services?: {
        [key: string]: {
            name: string,
            slug: string,
            verified: boolean,
        }
    }[],
    mintscan_image?: string,
    keybase_image?: string,
    signing_info?: {
        address: string,
        start_height: string,
        index_offset: string,
        jailed_until: string,
        tombstoned: boolean,
        missed_blocks_counter: string,
    },
    uptime?: number,
    uptime_periods?: {
        blocks: number,
        uptime: number
    }[],
    missed_blocks?: number,
    public_nodes?: {
        [key: string]: {
            address: string,
            provider: string
        }[]
    }[],
    private_nodes?: {
        [key: string]: boolean
    }[],
}