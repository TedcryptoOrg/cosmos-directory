import CosmosDirectory from '../../src/CosmosDirectory';

describe('Unit test CosmosDirectory', () => {
    let cosmosDirectory: CosmosDirectory;
    beforeEach(() => {
        cosmosDirectory = new CosmosDirectory(false);
    });

    it('should return correct rpc url', () => {
        expect(cosmosDirectory.rpcUrl('test')).toBe('https://rpc.cosmos.directory/test');
    });

    it('should return correct rest url', () => {
        expect(cosmosDirectory.restUrl('test')).toBe('https://rest.cosmos.directory/test');
    });
});
