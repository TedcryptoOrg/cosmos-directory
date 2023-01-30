import ChainDirectory from "../../src/ChainDirectory";

describe('Integrate test ChainDirectory', () => {
    let chainDirectory: ChainDirectory;
    beforeEach(() => {
        chainDirectory = new ChainDirectory(false);
    });

    it('should return correct chains data', async () => {
        const result = await chainDirectory.getChains();
        // assert some element
        expect(result['cosmoshub']).toHaveProperty('path');
        expect(result['cosmoshub'].chain_id).toBe('cosmoshub-4');
        // assert some element
        expect(result['evmos']).toHaveProperty('path');
        expect(result['evmos'].chain_id).toBe('evmos_9001-2');
    });

    it('should return correct chain data', async () => {
        const result = await chainDirectory.getChainData('cosmoshub');
        expect(result).toHaveProperty('path');
        expect(result.chain_id).toBe('cosmoshub-4');
    });

    it('should return correct token data', async () => {
        const result = await chainDirectory.getTokenData('cosmoshub');
        expect(result.assets).toEqual([
            {
                'base': 'uatom',
                'coingecko_id': 'cosmos',
                'denom_units': [
                    {'denom': 'uatom', 'exponent': 0},
                    {'denom': 'atom', 'exponent': 6},
                ],
                'description': 'The native staking and governance token of the Cosmos Hub.',
                'display': 'atom',
                'logo_URIs': {
                    'png': 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
                    'svg': 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
                },
                'name': 'Cosmos Hub Atom',
                'symbol': 'ATOM',
            }
        ]);
    });
});
