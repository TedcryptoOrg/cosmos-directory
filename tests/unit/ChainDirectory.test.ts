import axios from 'axios';
import ChainDirectory from '../../src/ChainDirectory';

jest.mock('axios');

describe('ChainDirectory', () => {
    let chainDirectory: ChainDirectory;
    beforeEach(() => {
        chainDirectory = new ChainDirectory(false);
    });

    describe('getChains', () => {
        it('should return chains data', async () => {
            const chains = [
                { path: 'chain1', name: 'Chain 1' }, 
                { path: 'chain2', name: 'Chain 2' }
            ];
            (axios.get as jest.Mock).mockResolvedValue({ data: {
                chains: chains
            } });
            const result = await chainDirectory.getChains();
            expect(result).toEqual({
                chains: [
                        {path: 'chain1', name: 'Chain 1'},
                        {path: 'chain2', name: 'Chain 2'}
                ]
            });
        });
    });

    describe('getChainData', () => {
        it('should return chain data', async () => {
            const chain = { path: 'chain1', name: 'Chain 1' };
            (axios.get as jest.Mock).mockResolvedValue({ data: { chain } });
            const result = await chainDirectory.getChainData('chain1');
            expect(result).toEqual({chain: chain});
        });
    });

    describe('getTokenData', () => {
        it('should return token data', async () => {
            const tokenData = { token: 'TKN', symbol: 'TKN' };
            (axios.get as jest.Mock).mockResolvedValue({ data: tokenData });
            const result = await chainDirectory.getTokenData('chain1');
            expect(result).toEqual(tokenData);
        });
    });
});
