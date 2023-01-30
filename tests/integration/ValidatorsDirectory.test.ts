import ValidatorsDirectory from "../../src/ValidatorsDirectory";

describe('Integrate test ValidatorDirectory', () => {
    let validatorsDirectory: ValidatorsDirectory;
    beforeEach(() => {
        validatorsDirectory = new ValidatorsDirectory(false);
    });

    it('should return correct validators data', async () => {
        const result = await validatorsDirectory.getValidators('cosmoshub');
        // assert some element
        expect(result[0]).toHaveProperty('moniker');
        expect(result[0]).toHaveProperty('jailed');
        expect(result[0]).toHaveProperty('tokens');
        expect(result[0]).toHaveProperty('description');
        expect(result[0]).toHaveProperty('rank');
        expect(result[0]).toHaveProperty('address');
        expect(result[0].address).toContain('cosmosvaloper');
    });

    it('should return correct validator data', async () => {
        const result = await validatorsDirectory.getRegistryValidator('tedcrypto');
        expect(result).toHaveProperty('chains');
        expect(result).toHaveProperty('profile');
        expect(result.identity).toBe('6D5F63F1DDCF0404');
    });

    it('should return restake operator addresses', async () => {
        const result = await validatorsDirectory.getOperatorAddresses();
        expect(result).toHaveProperty('akash');
        expect(result).toHaveProperty('juno');
        expect(result['akash']['akashvaloper1s9q9ewnpr3jd89lnrme3yjnqdadhpzxdz3q7lf']).toEqual({
            "address": "akash197yc3g8drkf8fyv6fr4ynddy2n22kauujqgkv9",
            "run_time": "22:00",
            "minimum_reward": 10000
        });
    });
});
