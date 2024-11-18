import ChainDirectory from "../../src/ChainDirectory";

jest.setTimeout(60000)
jest.retryTimes(3)

describe('Integrate test ChainDirectory', () => {
    let chainDirectory: ChainDirectory;
    beforeEach(() => {
        chainDirectory = new ChainDirectory(false);
    });

    it('should return correct chains data', async () => {
        const result = await chainDirectory.getChains();
        expect(result.repository.url).toBe('https://github.com/cosmos/chain-registry');
        // assert some element
        expect(result.chains[0]).toHaveProperty('path');
        expect(result.chains[0]).toHaveProperty('chain_id');
    });

    it('should return correct chain data', async () => {
        const result = await chainDirectory.getChainData('cosmoshub');
        expect(result.chain.chain_id).toBe('cosmoshub-4');

        expect((await chainDirectory.getChainData('evmos')).chain.chain_id).toBe('evmos_9001-2');
        expect((await chainDirectory.getChainData('juno')).chain.chain_id).toBe('juno-1');
    });

    it('should return correct token data', async () => {
        const result = await chainDirectory.getTokenData('cosmoshub');
        expect(result.chain_name).toBe('cosmoshub');
        expect(result.assets[0]).toEqual(
            {
                'base': 'uatom',
                'coingecko_id': 'cosmos',
                'denom_units': [
                    {'denom': 'uatom', 'exponent': 0},
                    {'denom': 'atom', 'exponent': 6},
                ],
                'description': 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
                'display': 'atom',
                "extended_description": "ATOM, the native cryptocurrency of the Cosmos network, is essential for achieving the project's goal of creating an 'Internet of Blockchains.' Launched in 2019, Cosmos aims to solve the scalability, usability, and interoperability issues prevalent in existing blockchain ecosystems. The Cosmos Hub, the central blockchain of the network, uses ATOM for transaction fees, staking, and governance. By staking ATOM, users can earn rewards and participate in governance, influencing decisions on network upgrades and changes.\n\n" +
                    "Cosmos leverages the Tendermint consensus algorithm to achieve high transaction throughput and fast finality. Its Inter-Blockchain Communication (IBC) protocol enables seamless data and value transfer between different blockchains, fostering a highly interconnected and collaborative ecosystem. The flexibility and scalability offered by Cosmos have attracted numerous projects, enhancing its utility and adoption. ATOM's role in securing the network and facilitating governance underscores its importance in the broader blockchain landscape.",
                "images": [
                    {
                        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
                        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
                        "theme": {
                            "primary_color_hex": "#272d45",
                       },
                    }
                ],
                'logo_URIs': {
                    'png': 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
                    'svg': 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
                },
                'name': 'Cosmos Hub Atom',
                "socials": {
                    "twitter": "https://twitter.com/cosmoshub",
                    "website": "https://cosmos.network",
                },
                'symbol': 'ATOM',
                'type_asset': 'sdk.coin',
            }
        );
    });
});
