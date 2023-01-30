# Cosmos Directory

Library to use the Cosmos Directory API.

This library is split into three components:

 - `ChainDirectory` - Get information about a chain
 - `ValidatorDirectory` - Get information about a validator
 - `CosmosDirectory` - Get proxy endpoints to communicate with cosmos chains (e.g.: RPC and REST endpoints) 

## Install

```shell
npm install @cosmos/directory
```

## How to use

```js
import ChainDirectory from '@cosmos/directory'

// Get all chains
ChainDirectory.getAllChains().then((data) => {
  console.log(data)
})

// Get a specific chain
ChainDirectory.getChainData('cosmoshub').then((data) => {
  console.log(data)
})
```

```js
import ValidatorDirectory from '@cosmos/directory'

// Get a validators from a chain
ValidatorDirectory.getValidators('cosmoshub').then((data) => {
  console.log(data)
})

// Get registry information about a validator using their name
ValidatorDirectory.getRegistryValidator('tedcrypto').then((data) => {
  console.log(data)
})
```
