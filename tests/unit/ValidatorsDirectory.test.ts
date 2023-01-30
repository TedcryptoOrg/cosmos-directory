import axios from 'axios';
import ValidatorsDirectory from "../../src/ValidatorsDirectory";

jest.mock('axios');

describe('ValidatorsDirectory', () => {
    let validatorsDirectory: ValidatorsDirectory;
    beforeEach(() => {
        validatorsDirectory = new ValidatorsDirectory(false);
    });

    describe('getValidators', () => {
        it('should return validators data for a chain', async () => {
            const validators = [{ name: 'validator1', address: 'address1' }, { name: 'validator2', address: 'address2' }];
            (axios.get as jest.Mock).mockResolvedValue({ data: { validators } });
            const result = await validatorsDirectory.getValidators('chain1');
            expect(result).toEqual(validators);
        });
    });

    describe('getRegistryValidator', () => {
        it('should return validator data', async () => {
            const validator = { name: 'validator1', address: 'address1' };
            (axios.get as jest.Mock).mockResolvedValue({ data: { validator } });
            const result = await validatorsDirectory.getRegistryValidator('validator1');
            expect(result).toEqual(validator);
        });
    });

    describe('getOperatorAddresses', () => {
        it('should return operator addresses', async () => {
            const validators = [{
                name: 'validator1',
                chains: [{ name: 'chain1', address: 'address1', restake: '10' }, { name: 'chain2', address: 'address2', restake: '20' }]
            }, {
                name: 'validator2',
                chains: [{ name: 'chain1', address: 'address3', restake: '30' }, { name: 'chain2', address: 'address4', restake: '40' }]
            }];
            (axios.get as jest.Mock).mockResolvedValue({ data: validators });
            const result = await validatorsDirectory.getOperatorAddresses();
            expect(result).toEqual({
                'chain1': { 'address1': '10', 'address3': '30' },
                'chain2': { 'address2': '20', 'address4': '40' }
            });
        });
    });
});
