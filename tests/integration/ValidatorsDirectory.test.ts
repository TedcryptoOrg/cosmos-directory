import ValidatorsDirectory from "../../src/ValidatorsDirectory";

describe('Integrate test ValidatorDirectory', () => {
    let validatorsDirectory: ValidatorsDirectory;
    beforeEach(() => {
        validatorsDirectory = new ValidatorsDirectory(false);
    });

    it('should return correct validators data', async () => {
        const result = await validatorsDirectory.getValidators('cosmoshub');
        expect(result.validators[0].moniker).toBeDefined();
        expect(result.validators[0].jailed).toBeDefined();
        expect(result.validators[0].tokens).toBeDefined();
        expect(result.validators[0].description).toBeDefined();
        expect(result.validators[0].rank).toBeDefined();
        expect(result.validators[0].address).toBeDefined();
        expect(result.validators[0].address).toContain('cosmosvaloper');
    });

    it('should return correct validator data', async () => {
        const result = await validatorsDirectory.getValidator('tedcrypto');
        expect(result.validator).toHaveProperty('chains');
        expect(result.validator).toHaveProperty('profile');
        expect(result.validator.identity).toBe('6D5F63F1DDCF0404');
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
