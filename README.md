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

// Build your service
const chainDirectory = new ChainDirectory(false); // For testnet use true

// Get all chains
chainDirectory.getAllChains().then((data) => {
  console.log(data)
})

// Get a specific chain
chainDirectory.getChainData('cosmoshub').then((data) => {
  console.log(data)
})
```

```js
import { ValidatorDirectory } from '@tedcryptoorg/cosmos-directory'

// Build your service
const validatorDirectory = new ValidatorDirectory(false); // For testnet use true

// Get a validators from a chain
validatorDirectory.getValidators('cosmoshub').then((data) => {
  console.log(data)
})

// Get registry information about a validator using their name
validatorDirectory.getRegistryValidator('tedcrypto').then((data) => {
  console.log(data)
})
```
