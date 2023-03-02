# Cosmos Directory

Library to use the Cosmos Directory API.

This library is split into three components:

 - `ChainDirectory` - Get information about a chain
 - `ValidatorDirectory` - Get information about a validator
 - `CosmosDirectory` - Get proxy endpoints to communicate with cosmos chains (e.g.: RPC and REST endpoints) 

## Install

```shell
npm i @tedcryptoorg/cosmos-directory
```

## How to use

```js
import { ChainDirectory } from '@tedcryptoorg/cosmos-directory'
import { ChainsResponse, ChainResponse, Chain } from '@tedcryptoorg/cosmos-directory/dist/types'

// Build your service
const chainDirectory = new ChainDirectory();

// Get all chains
chainDirectory.getAllChains().then((data: ChainsResponse) => {
    data.chains.forEach((chain: Chain) => {
        console.log(chain)
    });
})

// Get a specific chain
chainDirectory.getChainData('cosmoshub').then((data: ChainResponse) => {
  console.log(data);
  console.log(data.chain.assets)
})
```

```js
import { ValidatorDirectory } from '@tedcryptoorg/cosmos-directory'
import { ValidatorResponse, ChainValidatorResponse } from '@tedcryptoorg/cosmos-directory/dist/types'

// Build your service
const validatorDirectory = new ValidatorDirectory(false); // For testnet use true

// Get a validators from a chain
validatorDirectory.getValidators('cosmoshub').then((data: ChainValidatorResponse) => {
  console.log(data)
})

// Get registry information about a validator using their name
validatorDirectory.getValidator('tedcrypto').then((data: ValidatorResponse) => {
  console.log(data.validator.name); // Tedcrypto
})
```
