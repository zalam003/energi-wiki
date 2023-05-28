---
id: core-node-simnet
title: Web3 JavaScript API
---

## Getting Started

Install the Web3 library:


```
npm i @energi/web3-ext
```

### Introduction

Web3.js can be used for web applications to interact with dApps.


This API shows all available methods. To use web3, you will first need to create a web3 instance like this:


```
const Web3 = require('web3');
const web3Extension = require('@energi/web3-ext');
const web3 = new Web3('https://nodeapi.test.energi.network'); 
// connects to the testnet; use 'https://nodeapi.energi.network' for the mainnet

// extend the features of web3, so that you have Energi's full public api:
web3Extension.extend(web3);
```


### web3.nrg

The web3-nrg allows you to interact with an Energi blockchain and smart contracts.


#### providers


###### web3.providers


###### web3.nrg.providers

Contains the current available providers.


##### Value

Object with the following providers:



* Object - HttpProvider: The HTTP provider is deprecated, as it won’t work for subscriptions.
* Object - WebsocketProvider: The Websocket provider is the standard for usage in legacy browsers.
* Object - IpcProvider: The IPC provider is used node.js dapps when running a local node. Gives the most secure connection.


##### Example


```
const Web3 = require('web3');
const web3Extension = require('@energi/web3-ext');

const web3 = new Web3('https://nodeapi.test.energi.network');
// or
const web3 = new Web3(new Web3.providers.HttpProvider('https://nodeapi.test.energi.network'));
web3Extension.extend(web3);
```



#### setProvider


###### web3.setProvider(myProvider)


###### web3.nrg.setProvider(myProvider)

Will change the provider for its module.


##### Parameters

Object - myProvider: a valid provider.


##### 
Returns

Boolean.


##### Example


```
const Web3 = require('web3'),
const web3Extension = require('@energi/web3-ext');

const web3 = new Web3('https://nodeapi.test.energi.network');
// or
const web3 = new Web3(new Web3.providers.HttpProvider('https://nodeapi.test.energi.network'));
web3Extension.extend(web3);

// To change the provider
const wsProvider = new Web3.providers.WebsocketProvider("ws://localhost:49795", {
  headers: {
    Origin: "http://localhost"
  }
});
web3.setProvider(wsProvider);
```



#### setProvider


###### web3.givenProvider


###### web3.nrg.givenProvider

When using web3.js in an Energi compatible browser, it will set the current native provider by that browser. Will return the given provider by the (browser) environment, otherwise null.


##### Returns

Object: The given provider set or null;


##### Example


```
web3.givenProvider
null
```

#### currentProvider


###### web3.currentProvider


###### web3.nrg.currentProvider

Will return the current provider, otherwise null.


##### Returns

Object: The current provider set or null;


##### Example


```
const Web3 = require('web3');
const web3Extension = require('@energi/web3-ext');
const providerhttp='https://nodeapi.test.energi.network';
const web3 = new Web3(new Web3.providers.HttpProvider(providerhttp));
web3Extension.extend(web3);

web3.currentProvider
//The same output is obtained when consulting the supplier with: web3.nrg.currentProvider
httpProvider {
  withCredentials: false,
  timeout: 0,
  headers: undefined,
  agent: undefined,
  connected: true,
  host: 'https://nodeapi.test.energi.network',
  httpsAgent: 
   Agent {
     domain: 
      Domain {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        members: [] },
     _events: { free: [Function] },
     _eventsCount: 1,
     _maxListeners: undefined,
     defaultPort: 443,
     protocol: 'https:',
     options: { keepAlive: true, path: null },
     requests: {},
     sockets: {},
     freeSockets: { 'nodeapi.test.energi.network:443:::::::::': [Array] },
     keepAliveMsecs: 1000,
     keepAlive: true,
     maxSockets: Infinity,
     maxFreeSockets: 256,
     maxCachedSessions: 100,
     _sessionCache: { map: [Object], list: [Array] } } }
```



### BatchRequest[^1]


###### new web3.BatchRequest()


###### new web3.nrg.BatchRequest()

Class to create and execute batch requests.


##### Parameters

none


##### Returns

Object: With the following methods:


* add(request): To add a request object to the batch call.
* execute(): Will execute the batch request.


##### Example


```
// After successfully instantiating the API (see providers or setProvider):

// Import test wallet:

web3.nrg.accounts.wallet.add('0xc690d9044fd71dbd318fc10fc0009a1815dc8c8320bde744bd7f9a4a6189b337');

/*
{ address: '0x99aA0A8895817f56e03bb70FEb216F036A829AB7',
  privateKey: '0xc690d9044fd71dbd318fc10fc0009a1815dc8c8320bde744bd7f9a4a6189b337',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt],
  index: 0 }
*/

//A batch instance is created
var batch = new web3.BatchRequest();

//Two transactions are created to send them to the network at the same time.
//Account must be unlocked to sign transactions
batch.add(web3.nrg.sendTransaction.request(
    {from:"0x99aA0A8895817f56e03bb70FEb216F036A829AB7", 
    to:'0x8978e517c2b442264e54b890c4428816b66aaf8b', 
    value: web3.utils.toHex(web3.utils.toWei('0.10', 'nrg')), 
    gasLimit: web3.utils.toHex(21000)
}, function(error, hash){
    console.log(hash),
    console.log(error)}
));

batch.add(web3.nrg.sendTransaction.request(
    {from:"0x99aA0A8895817f56e03bb70FEb216F036A829AB7", 
    to:'0x8978e517c2b442264e54b890c4428816b66aaf8b', 
    value: web3.utils.toHex(web3.utils.toWei('0.10', 'nrg')), 
    gasLimit: web3.utils.toHex(21000)
}, function(error, hash){
    console.log(hash),
    console.log(error)}
));

batch.execute(); //Verify that both transactions were sent to the network under the same block
```



### Extend


###### web3.extend(methods)


###### web3.nrg.extend(methods)

Allows extending the web3 modules.

**Note:** You also have `*.extend.formatters` as additional formatter functions to be used for in and output formatting. Please see the source file for function details.


##### Parameters

methods - Object: Extension object with array of methods description objects as follows:



* property - String: (optional) The name of the property to add to the module. If no property is set it will be added to the module directly.
* methods - Array: The array of method descriptions:
    * name - String: Name of the method to add.
    * call - String: The RPC method name.
    * params - Number: (optional) The number of parameters for that function. Default 0.
    * inputFormatter - Array: (optional) Array of input formatter functions. Each array item responds to a function parameter, so if you want some parameters not to be formatted, add a null instead.
    * outputFormatter - ``Function: (optional) Can be used to format the output of the method.


##### Returns

Object: The extended module.


##### Example


```
web3.extend({
    property: 'myModule',
    methods: [{
        name: 'getBalance',
        call: 'eth_getBalance',
        params: 2,
        inputFormatter: [web3.extend.formatters.inputAddressFormatter, web3.extend.formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: web3.utils.hexToNumberString
    },{
        name: 'getGasPriceSuperFunction',
        call: 'eth_gasPriceSuper',
        params: 2,
        inputFormatter: [null, web3.utils.numberToHex]
    }]
});

console.log(web3.myModule);

{ getBalance: 
   { [Function: send]
     method: 
      Method {
        name: 'getBalance',
        call: 'eth_getBalance',
        params: 2,
        inputFormatter: [Array],
        outputFormatter: [Function: hexToNumberString],
        transformPayload: undefined,
        extraFormatters: undefined,
        abiCoder: undefined,
        requestManager: [Object],
        accounts: undefined,
        defaultBlock: 'latest',
        defaultAccount: null,
        transactionBlockTimeout: 50,
        transactionConfirmationBlocks: 24,
        transactionPollingTimeout: 750,
        defaultCommon: undefined,
        defaultChain: undefined,
        defaultHardfork: undefined,
        handleRevert: undefined },
     request: [Function: bound ],
     call: 'eth_getBalance' },
  getGasPriceSuperFunction: 
   { [Function: send]
     method: 
      Method {
        name: 'getGasPriceSuperFunction',
        call: 'eth_gasPriceSuper',
        params: 2,
        inputFormatter: [Array],
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        abiCoder: undefined,
        requestManager: [Object],
        accounts: undefined,
        defaultBlock: 'latest',
        defaultAccount: null,
        transactionBlockTimeout: 50,
        transactionConfirmationBlocks: 24,
        transactionPollingTimeout: 750,
        defaultCommon: undefined,
        defaultChain: undefined,
        defaultHardfork: undefined,
        handleRevert: undefined },
     request: [Function: bound ],
     call: 'eth_gasPriceSuper' } }
```



#### defaultAccount


###### web3.nrg.defaultAccount

This default address is used as the default "from" property, if no "from" property is specified in for the following methods:


* web3.nrg.sendTransaction()
* web3.nrg.call()
* new web3.nrg.Contract() -myContract.methods.myMethod().call()
* new web3.nrg.Contract() -myContract.methods.myMethod().send()


##### Property

String - 20 Bytes: Any Energi address. You should have the private key for that address in your node or keystore. (Default is undefined)


##### Example


```
web3.nrg.defaultAccount;
null

// set the default account
web3.nrg.defaultAccount = '0x8978E517c2B442264E54b890c4428816b66Aaf8B';
'0x8978E517c2B442264E54b890c4428816b66Aaf8B'
```


#### defaultBlock


```
web3.nrg.defaultBlock
```


This default address is used as the default "from" property, if no "from" property is specified in for the following methods:


* web3.nrg.sendTransaction()
* web3.nrg.call()
* new web3.nrg.Contract() -myContract.methods.myMethod().call()
* new web3.nrg.Contract() -myContract.methods.myMethod().send()


##### Property

Default block parameters can be one of the following:


* Number: A block number
* "genesis" - String: The genesis block
* "latest" - String: The latest block (current head of the blockchain)
* "pending" - String: The currently mined block (including pending transactions)

Default is "latest"


##### Example


```
web3.nrg.defaultBlock;
"latest"

// set the default block
web3.nrg.defaultBlock = 231
231
```



#### defaultHardfork


```
web3.nrg.defaultHardfork
```


The defaulthardfork property is used for signing transactions locally.


##### Property

The defaulthardfork property can be one of the following:



* "chainstart" - String
* "homestead" - String
* "dao" - String
* "tangerineWhistle" - String
* "spuriousDragon" - String
* "byzantium" - String
* "constantinople" - String
* "petersburg" - String
* "istanbul" - String

Default is "petersburg"


##### Example


```
web3.nrg.defaultHardfork;
undefined
```



#### defaultChain


###### web3.nrg.defaultChain

The default chain property is used for signing transactions locally.


##### Property

The default chain property can be one of the following:


* "mainnet" - String
* "goerli" - String
* "kovan" - String
* "rinkeby" - String
* "ropsten" - String

Default is "mainnet"


##### Example


```
web3.nrg.defaultChain;
undefined
```



#### defaultCommon


```
web3.nrg.defaultCommon
```


The default common property is used for signing transactions locally.


##### Property

The default common property does contain the following Common object:



* customChain - Object: The custom chain properties
    * name - string: (optional) The name of the chain
    * networkId - number: Network ID of the custom chain
    * chainId - number: Chain ID of the custom chain
* baseChain - string: (optional) mainnet, goerli, kovan, rinkeby, or ropsten
* hardfork - string: (optional) chainstart, homestead, dao, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, or istanbul

Default is undefined.


##### Example


```
web3.nrg.defaultCommon;
undefined
```



#### transactionBlockTimeout


###### web3.nrg.transactionBlockTimeout

The transactionBlockTimeout will be used over a socket based connection. This option does define the amount of new blocks it should wait until the first confirmation happens. This means the PromiEvent rejects with a timeout error when the timeout has exceeded.


##### Returns

number: The current value of transactionBlockTimeout (default: 50)


##### Example


```
web3.nrg.transactionBlockTimeout;
50
```

#### transactionConfirmationBlocks


```
web3.nrg.transactionConfirmationBlocks
```


This defines the number of blocks it requires until a transaction will be handled as confirmed.


##### Returns

number: The current value of transactionConfirmationBlocks (default: 24)


##### Example


```
web3.nrg.transactionConfirmationBlocks;
24
```


#### transactionPollingTimeout


```
web3.nrg.transactionPollingTimeout
```


The transactionPollingTimeout will be used over a HTTP connection. This option defines the number of seconds Web3 will wait for a receipt which confirms that a transaction was mined by the network. NB: If this method times out, the transaction may still be pending.


##### Returns

number: The current value of transactionPollingTimeout (default: 750)


##### Example


```
web3.nrg.transactionPollingTimeout;
750
```



#### handleRevert


```
web3.nrg.handleRevert
```


The handleRevert options property does default to false and will return the revert reason string if enabled for the following methods:



* web3.nrg.call()
* web3.nrg.sendTransaction()
* contract.methods.myMethod(…).send(…)
* contract.methods.myMethod(…).call(…)

**Note:** The revert reason string and the signature does exist as property on the returned error.


##### Returns

boolean: The current value of handleRevert (default: false)


##### Example


```
//If the option is disabled:
web3.nrg.handleRevert
false

//We generated an erroneous transaction in a smart contract to test the method:
const sendTx = async () ={
var fromAddress='0x99aA0A8895817f56e03bb70FEb216F036A829AB7';
var toAddress= '0x0000000000000000000000000000000000000303';

try {
    txCount = await web3.nrg.getTransactionCount(fromAddress);
    rawTx2 = {
        from:fromAddress,
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(21656),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        gasLimit: web3.utils.toHex(21656),
        to: toAddress,
        data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
    };
    txResult = await web3.nrg.sendTransaction(rawTx2);
    console.log(txResult);
} catch (err) {
    console.error(err);
}
};

sendTx()

Error: Failed to check for transaction receipt:
{}

//If the option is enabled:

web3.nrg.handleRevert=true
true

{ Error: Transaction has been reverted by the EVM:
{
  "blockHash": "0x03bab80ecaf7a1bc2224a36ee44796472415eedcd55defcc2df3b9c8d0000d65",
  "blockNumber": 127131,
  "contractAddress": null,
  "cumulativeGasUsed": 81338,
  "from": "0x99aa0a8895817f56e03bb70feb216f036a829ab7",
  "gasUsed": 21656,
  "logs": [],
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "status": false,
  "to": "0x0000000000000000000000000000000000000303",
  "transactionHash": "0xa83e33249c9c9d4f147a071885adb96cf30f4e1c42f7cf61c9681fa1f45a41e7",
  "transactionIndex": 1
}
  receipt: 
   { blockHash: '0x03bab80ecaf7a1bc2224a36ee44796472415eedcd55defcc2df3b9c8d0000d65',
     blockNumber: 127131,
     contractAddress: null,
     cumulativeGasUsed: 81338,
     from: '0x99aa0a8895817f56e03bb70feb216f036a829ab7',
     gasUsed: 21656,
     logs: [],
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     status: false,
     to: '0x0000000000000000000000000000000000000303',
     transactionHash: '0xa83e33249c9c9d4f147a071885adb96cf30f4e1c42f7cf61c9681fa1f45a41e7',
     transactionIndex: 1 } }
```



#### getProtocolVersion


```
web3.nrg.getProtocolVersion([callback])
```


Returns the energi protocol version of the node.


##### Returns

Promise returns String: the protocol version.


##### Example


```
web3.nrg.getProtocolVersion().then(console.log);
0x46
```



#### isSyncing


```
web3.nrg.isSyncing([callback])
```


Checks if the node is currently syncing and returns either a syncing object, or false.


##### Returns

Promise returns Object|Boolean - A sync object when the node is currently syncing or false:



* startingBlock - Number: The block number where the sync started.
* currentBlock - Number: The block number where at which block the node currently synced to already.
* highestBlock - Number: The estimated block number to sync to.
* knownStates - Number: The estimated states to download
* pulledStates - Number: The already downloaded states


##### Example


```
web3.nrg.isSyncing().then(console.log);
false
```



#### getCoinbase


```
web3.nrg.getCoinbase([callback])
```


Returns the coinbase address to which mining rewards will go.


##### Returns

Promise returns String - bytes 20: The coinbase address set in the node for mining rewards.


##### Example


```
web3.nrg.getCoinbase().then(console.log);
0x0000000000000000000000457068656d6572616c
```



#### isMining


```
web3.nrg.isMining([callback])
```


Checks when the node is mining or not.


##### Returns

Promise returns Boolean: true if the node is mining, otherwise false.


##### Example


```
web3.nrg.isMining().then(console.log);
true
```



#### getGasPrice


```
web3.nrg.getGasPrice([callback])
```


Returns the current gas price oracle. The gas price is determined by the average gas price of the last blocks.


##### Returns

Promise returns String - Number string of the current gas price in wei.


##### Example


```
web3.nrg.getGasPrice().then(console.log);
20000000000
```



#### getAccounts[^2]


```
web3.nrg.getAccounts([callback])
```


Returns a list of accounts the node controls.


##### Returns

Promise returns Array - An array of node-controlled addresses.


##### Example


```
web3.nrg.getAccounts().then(console.log);
["0x8978E517c2B442264E54b890c4428816b66Aaf8B", "0xA229362a827aA052Babc8989D5fc2DC669e18F81"]
```


#### getBlockNumber


```
web3.nrg.getBlockNumber([callback])
```


Returns the current block number.


##### Returns

Promise returns Number - The number of the most recent block to which the node is synchronized.


##### Example


```
web3.nrg.getBlockNumber().then(console.log);
109959
```



#### getBalance


```
web3.nrg.getBalance(address [, defaultBlock] [, callback])
```


Get the balance of an address at a given block.


##### Parameters


1. String - The address to get the balance of.
2. Number|String|BN|BigNumber - (optional) If you pass this parameter it will not use the default block set with web3.nrg.defaultBlock. Pre-defined block numbers as "latest", "earlist", "pending", and "genesis" can also be used.
3. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns String - The current balance for the given address in wei.

See the A note on dealing with big numbers in JavaScript.


##### Example


```
web3.nrg.getBalance("0x8978E517c2B442264E54b890c4428816b66Aaf8B").then(console.log)
"752187160838400000000"
```


#### getStorageAt


```
web3.nrg.getStorageAt(address, position [, defaultBlock] [, callback])
```


Get the storage at a specific position of an address.


##### Parameters


1. String - The address to get the storage from.
2. Number|String|BN|BigNumber - The index position of the storage.
3. Number|String|BN|BigNumber - (optional) If you pass this parameter it will not use the default block set with web3.nrg.defaultBlock. Pre-defined block numbers as "latest", "earlist", "pending", and "genesis" can also be used.
4. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns String - The value in storage at the given position.


##### Example


```
web3.nrg.getStorageAt("0x8978E517c2B442264E54b890c4428816b66Aaf8B", 0).then(console.log);
"0x0000000000000000000000000000000000000000000000000000000000000000" //externally owned account or EOA

web3.nrg.getStorageAt('0x12BD1d9E1C332e2Fd6C514aB2eA24e2783860333', 0).then(console.log);
"0x000000000000000000000000000000000000000000000000000000000000007b" //contract account
```


#### getCode


```
web3.nrg.getCode(address [, defaultBlock] [, callback])
```


Get the code at a specific address.


##### Parameters



1. String - The address to get the code from.
2. Number|String|BN|BigNumber - (optional) If you pass this parameter it will not use the default block set with web3.nrg.defaultBlock. Pre-defined block numbers as "latest", "earlist", "pending", and "genesis" can also be used.
3. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns String - The data at given address address.


##### Example


```
//contract account
web3.nrg.getCode("0x12BD1d9E1C332e2Fd6C514aB2eA24e2783860333").then(console.log);
"0x606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166321b8a28c81146063578063a87d942c146078578063d14e62b8146063578063e5071b8e14609a578063f2c9ecd81460aa57600080fd5b3415606d57600080fd5b607660043560ba565b005b3415608257600080fd5b608860bf565b60405190815260200160405180910390f35b341560a457600080fd5b607660c5565b341560b457600080fd5b608860d0565b600055565b60005490565b600080546001019055565b6022905600a165627a7a723058205030614d5ab8d2d73e30374d3ce9533c68ab4e3b81e88cbc797bcf4336bf2af40029"

//externally owned account or EOA
web3.nrg.getCode("0x8978E517c2B442264E54b890c4428816b66Aaf8B").then(console.log);
>0x
```



#### getBlock


###### web3.nrg.getBlock(blockHashOrBlockNumber [, returnTransactionObjects] [, callback])

Returns a block matching the block number or block hash.


##### Parameters


1. String|Number|BN|BigNumber - The block number or block hash. Or the string "genesis", "latest", "earliest", or "pending" as in the default block parameter.
2. Boolean - (optional, default false) If specified true, the returned block will contain all transactions as objects. By default it is false, so there is no need to explicitly specify false. And, if false it will only contain the transaction hashes.
3. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns Object - The block object:


* number - Number: The block number. null when its pending block.
* hash 32 Bytes - String: Hash of the block. null when its pending block.
* parentHash 32 Bytes - String: Hash of the parent block.
* nonce 8 Bytes - String: Hash of the generated proof-of-work. null when its pending block.
* sha3Uncles 32 Bytes - String: SHA3 of the uncles data in the block.
* logsBloom 256 Bytes - String: The bloom filter for the logs of the block. null when its pending block.
* transactionsRoot 32 Bytes - String: The root of the transaction trie of the block
* stateRoot 32 Bytes - String: The root of the final state trie of the block.
* miner - String: The address of the beneficiary to whom the mining rewards were given.
* difficulty - String: Integer of the difficulty for this block.
* totalDifficulty - String: Integer of the total difficulty of the chain until this block.
* extraData - String: The “extra data” field of this block.
* size - Number: Integer the size of this block in bytes.
* gasLimit - Number: The maximum gas allowed in this block.
* gasUsed - Number: The total used gas by all transactions in this block.
* timestamp - Number: The unix timestamp for when the block was collated.
* transactions - Array: Array of transaction objects, or 32 Bytes transaction hashes depending on the returnTransactionObjects parameter.
* uncles - Array: Array of uncle hashes.


##### Example


```
web3.nrg.getBlock(104377).then(console.log);
{ difficulty: '508619',
  extraData: '0xda82050787656e657267693386676f312e31328777696e646f7773',
  gasLimit: 40000000,
  gasUsed: 0,
  hash: '0x1ca7c9633fef73e1e7a8ace6efb20f74255ba8389312242d23b5e785b5aa7b54',
  logsBloom:
'0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  miner: '0x92a4349D82eb9e3D0fdAE53FF22d2BD83a6E419d',
  mixHash: '0x1641dc5e2cf272afdec25adf81ddebd0597aac9593063c84844f472b2dc0bbc5',
  nonce: '0x0000000000000a85',
  number: 104377,
  parentHash: '0x09f737a5534efb82c201fc9228586f03ee1f7ce2c19c4cbf8ac31848242f470d',
  receiptsRoot: '0xfc49f382e355ff5097d710eb83aabe51c516ae11b708ca5690e2a9155ff19bf2',
  sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  signature: '0x0d2c867f01841e80a6cf52db137cb59224fe0d508b3c00a3cb807e46b598d2bb3d38c5c950f6fc3ce4f7e6bf0f34cd4b80afb852f93572be766b9951e8b509f700',
  size: 660,
  stateRoot: '0x7946ae4b3bf705d7a89e2d331272b9b5224f02fba4606c0735c5a6dc54b9d886',
  timestamp: 1573937015,
  totalDifficulty: '51786220809',
  transactions: 
   [ '0x1ef2bcb209ffe8607bec19a4e970db824bde5bee12efc66cb9f955a5c0a13c36' ],
  transactionsRoot: '0x60d18a94ac161a7da3a6a4aa2fb68b35d077e0cb4eb664482880a35fed0021c9',
  uncles: [] }
```



#### getBlockTransactionCount


```
web3.nrg.getBlockTransactionCount(blockHashOrBlockNumber [, callback])
```


Returns the number of transactions in a given block.


##### Parameters


1. String|Number|BN|BigNumber - The block number or hash. Or the string "genesis", "latest", "earliest", or "pending" as in the default block parameter.
2. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns Number - The number of transactions in the given block.


##### Example


```
web3.nrg.getBlockTransactionCount(22479).then(console.log);
4
```



#### getBlockUncleCount


```
web3.nrg.getBlockUncleCount(blockHashOrBlockNumber [, callback])
```


Returns the number of uncles in a block from a block matching the given block hash.


##### Parameters


1. String|Number|BN|BigNumber - The block number or hash. Or the string "genesis", "latest", "earliest", or "pending" as in the default block parameter.
2. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns Number - The number of transactions in the given block.


##### Example


```
web3.nrg.getBlockUncleCount(22479).then(console.log);
0
```


#### getUncle


###### web3.nrg.getUncle(blockHashOrBlockNumber, uncleIndex [, returnTransactionObjects] [, callback])

Returns a block uncle by a given uncle index position.


##### Parameters


1. String|Number|BN|BigNumber - The block number or hash. Or the string "genesis", "latest", "earliest", or "pending" as in the default block parameter.
2. Number - The index position of the uncle.
3. Boolean - (optional, default false) If specified true, the returned block will contain all transactions as objects. By default it is false, so there is no need to explicitly specify false. And, if false it will only contain the transaction hashes.
4. Function - (optional) Optional callback, returns an error object as first parameter and the result as second


##### Returns

Promise returns Object - the returned uncle. For a return value see web3.nrg.getBlock().

Note: An uncle doesn’t contain individual transactions. 


##### Example


```
web3.nrg.getUncle(22479, 0).then(console.log);
null
```


#### getTransaction


```
web3.nrg.getTransaction(transactionHash [, callback])
```


Returns a transaction matching the given transaction hash.


##### Parameters


1. String - The transaction hash.
2. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns Object - A transaction object its hash transactionHash:



* hash 32 Bytes - String: Hash of the transaction.
* nonce - Number: The number of transactions made by the sender prior to this one.
* blockHash 32 Bytes - String: Hash of the block where this transaction was in. null when it's pending.
* blockNumber - Number: Block number where this transaction was in. null when it's pending.
* transactionIndex - Number: Integer of the transactions index position in the block. null when it's pending.
* from - String: Address of the sender.
* to - String: Address of the receiver. null when its a contract creation transaction.
* value - String: Value transferred in wei.
* gasPrice - String: Gas price provided by the sender in wei.
* gas - Number: Gas provided by the sender.
* input - String: The data sent along with the transaction.


##### Example


```
web3.nrg.getTransaction('0x9aa6f962fb54e7138b3c145a01cf24ab4ef3cc5422d23baf542b0ad6c35a6fa2').then(console.log);
{ blockHash: '0xa41c496bf255f61b6ba5d4f41c56866312be1a9576da3a6c2b3eeadae9f8bffd',
  blockNumber: 150791,
  from: '0x6F33E5FC67EA2036bd9e35f73Bba170326968601',
  gas: 500000,
  gasPrice: '10000000000',
  hash: '0x79999b8dd41ddb62d41fccb901a5d7cb6f89e37dda7f4d1be041a3069355464d',
  input: 
'0xd70d5c30000000000000000000000000cfd868f6c3eb2bfc84b6cab42899e8fc94f4792400000000000000000000000000000000000000000000000000000000431520250354dfd42d361633bfdfb49b117c461fd5293e895d7dfbb056ff3dd9d8e947020900000000000000000000000000000000000000000000000000000000000000',
  nonce: 1,
  to: '0x0000000000000000000000000000000000000302',
  transactionIndex: 0,
  value: '0',
  v: '0x1852e',
  r: '0x8308c2afd99886e8943dfd0814d2293a4d82e9b3c230de3b4a62a5f1cabe968c',
  s: '0x41937b20614d32168d870d0d435152b66c299ae3880cd41b0b53bd67f7a9d8cf' }
```



#### getTransactionFromBlock


```
web3.nrg.getTransactionFromBlock(hashStringOrNumber, indexNumber [, callback])
```


Returns a transaction based on a block hash or number and the transactions index position.


##### Parameters


1. String|Number|BN|BigNumber - A block number or hash. Or the string "genesis", "latest", "earliest", or "pending" as in the default block parameter.
2. Number - The transactions index position.
3. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns Object - A transaction object, see web3.nrg.getTransaction:


##### Example


```
var transaction = web3.nrg.getTransactionFromBlock("latest", 0).then(console.log);
// see web3.nrg.getTransaction
```



#### getTransactionReceipt


```
web3.nrg.getTransactionReceipt(hash [, callback])
```


Returns the receipt of a transaction by transaction hash.

**Note:** The receipt is not available for pending transactions and returns null.


##### Parameters


1. String - The transaction hash.
2. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns Object - A transaction receipt object, or null when no receipt was found:


* status - Boolean: TRUE if the transaction was successful, FALSE, if the EVM reverted the transaction.
* blockHash 32 Bytes - String: Hash of the block where this transaction was in.
* blockNumber - Number: Block number where this transaction was in.
* transactionHash 32 Bytes - String: Hash of the transaction.
* transactionIndex- Number: Integer of the transactions index position in the block.
* from - String: Address of the sender.
* to - String: Address of the receiver. null when its a contract creation transaction.
* contractAddress - String: The contract address created, if the transaction was a contract creation, otherwise null.
* cumulativeGasUsed - Number: The total amount of gas used when this transaction was executed in the block.
* gasUsed- Number: The amount of gas used by this specific transaction alone.
* logs - Array: Array of log objects, which this transaction generated.


##### Example


```
web3.nrg.getTransactionReceipt('0x9aa6f962fb54e7138b3c145a01cf24ab4ef3cc5422d23baf542b0ad6c35a6fa2').then(console.log);
{ blockHash: '0xfa5a791040dda37352358f9d4895bfd413a7bc88b257d56dfcaddcddcf87c366',
  blockNumber: 199077,
  contractAddress: null,
  cumulativeGasUsed: 452941,
  from: '0x8978e517c2b442264e54b890c4428816b66aaf8b',
  gasUsed: 365178,
  logs: 
   [ { address: '0x0000000000000000000000000000000000000312',
       topics: [Array],
       data: '0x00000000000000000000000000000000000000000000000000000000951c6f2e02679dd0db3c5adb2204713643e61f59a6e11e83dd21b6710be6709f2adf87fa7d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021e19e0c9bab2400000',
       blockNumber: 199077,
       transactionHash: '0x2ef3dc875fdb73131989e5a4e936cf50b587419b2bf99889b79d8b003261b2c2',
       transactionIndex: 1,
       blockHash: '0xfa5a791040dda37352358f9d4895bfd413a7bc88b257d56dfcaddcddcf87c366',
       logIndex: 1,
       removed: false,
       id: 'log_45e46c7d' } ],
  logsBloom: 
'0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000800000000010000000000000000000000000000000000000010000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400080000000000000000000000000000000000000000002000000000000000000000100000000000000000000000000000000000000000000000000000000008000000008800000000000000000000000000000000000000000000000',
  status: true,
  to: '0x0000000000000000000000000000000000000302',
  transactionHash: '0x2ef3dc875fdb73131989e5a4e936cf50b587419b2bf99889b79d8b003261b2c2',
  transactionIndex: 1 }
```


#### getTransactionCount


```
web3.nrg.getTransactionCount(address [, defaultBlock] [, callback])
```


Get the numbers of transactions sent from this address.


##### Parameters



1. String - The address to get the numbers of transactions from.
2. Number|String|BN|BigNumber - (optional) If you pass this parameter it will not use the default block set with web3.nrg.defaultBlock. Pre-defined block numbers as "latest", "earlist", "pending", and "genesis" can also be used.
3. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns Number - The number of transactions sent from the given address.


##### Example


```
web3.nrg.getTransactionCount("0x8978E517c2B442264E54b890c4428816b66Aaf8B").then(console.log)
56
```



#### sendTransaction[^3]


###### web3.nrg.sendTransaction(transactionObject [, callback])


Sends a transaction to the network. Account must be unlocked to sign transactions.


##### Parameters


1. Object - The transaction object to send:
    a. from - String|Number: The address for the sending account. Uses the web3.nrg.defaultAccount property, if not specified. Or an address or index of a local wallet in web3.nrg.accounts.wallet.
    b. to - String: (optional) The destination address of the message, left undefined for a contract-creation transaction.
    c. value - Number|String|BN|BigNumber: (optional) The value transferred for the transaction in wei, also the endowment if it’s a contract-creation transaction.
    d. gas - Number: (optional, default: To-Be-Determined) The amount of gas to use for the transaction (unused gas is refunded).
    e. gasPrice - Number|String|BN|BigNumber: (optional) The price of gas for this transaction in wei, defaults to web3.nrg.gasPrice.
    f. data - String: (optional) Either a ABI byte string containing the data of the function call on a contract, or in the case of a contract-creation transaction the initialisation code.
    g. nonce - Number: (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.
    h. chain - String: (optional) Defaults to mainnet.
    i. hardfork - String: (optional) Defaults to petersburg.
    j. common - Object: (optional) The common object
        i. customChain - Object: The custom chain properties
            1. name - string: (optional) The name of the chain
            2. networkId - number: Network ID of the custom chain
            3. chainId - number: Chain ID of the custom chain
        ii. baseChain - string: (optional) mainnet, goerli, kovan, rinkeby, or ropsten
        iii. hardfork - string: (optional) chainstart, homestead, dao, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, or istanbul
2. callback - Function: (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

The callback will return the 32 bytes transaction hash.

PromiEvent: A promise combined event emitter. Will be resolved when the transaction receipt is available. Additionally the following events are available:


* "transactionHash" returns String: Is fired right after the transaction is sent and a transaction hash is available.
* "receipt" returns Object: Is fired when the transaction receipt is available.
* "confirmation" returns Number, Object: Is fired for every confirmation up to the 12th confirmation. Receives the confirmation number as the first and the receipt as the second argument. Fired from confirmation 0 on, which is the block where its minded.

"error" returns Error and Object|undefined: Is fired if an error occurs during sending. If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.


##### Example


```
// compiled solidity source code using https://remix.ethereum.org
var code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";

// using the callback
web3.nrg.sendTransaction({
    from: '0xA229362a827aA052Babc8989D5fc2DC669e18F81',
    gasLimit: web3.utils.toHex(55724),
    data:'0x'+code // deploying a contract
}, function(error, hash){
    console.log(hash)
});
0x7956830f52b800093de0cf6a7438a131aee7a65e522fdb087c931157e35c0dd5

// using the promise
web3.nrg.sendTransaction({
    from: '0xA229362a827aA052Babc8989D5fc2DC669e18F81',
    to: '0x8978E517c2B442264E54b890c4428816b66Aaf8B',
    gasLimit: web3.utils.toHex(21000),
    value: web3.utils.toWei('0.5', "nrg")
}).then(function(receipt){
    console.log(receipt)
});
{ blockHash: '0x97d488eb77b1b838aa0a73526238cff98f2bdf03689c0e48060ee6c9061b93a1',
  blockNumber: 26830,
  contractAddress: null,
  cumulativeGasUsed: 21000,
  from: '0xa229362a827aa052babc8989d5fc2dc669e18f81',
  gasUsed: 21000,
  logs: [],
  logsBloom: 
'0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x8978e517c2b442264e54b890c4428816b66aaf8b',
  transactionHash: '0x274c0acee8ce5c748f094f480be634852e9f347fd061c9f1f628d6061dbb3e35',
  transactionIndex: 0 }
// using the event emitter
web3.nrg.sendTransaction({
    from: '0xA229362a827aA052Babc8989D5fc2DC669e18F81',
    to: '0x8978E517c2B442264E54b890c4428816b66Aaf8B',
    gasLimit: web3.utils.toHex(21000),
    value: '500000000000000000'
}).on('transactionHash', function(hash){
    console.log(hash)
})
>0xc06044360a140ecac2b90f247b590e65e0d7b6647e1b9f1a51f6dfdba4cfef29
```


#### signTransaction[^4]


###### web3.nrg.signTransaction(transactionObject, address [, callback])

Signs a transaction. This account needs to be unlocked.


##### Parameters


1. Object - The transaction data to sign web3.nrg.sendTransaction() for more.
2. String - Address to sign transaction with.
3. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns Object - The RLP encoded transaction. The raw property can be used to send the transaction using web3.nrg.sendSignedTransaction.


##### Example


```

web3.nrg.getTransactionCount('0xA229362a827aA052Babc8989D5fc2DC669e18F81', (err, txCount) ={web3.nrg.signTransaction({
        from: '0xA229362a827aA052Babc8989D5fc2DC669e18F81',
        to: '0x8978E517c2B442264E54b890c4428816b66Aaf8B',
        gasPrice: "20000000000",
        gas: "21000",
        value: web3.utils.toWei('2', 'nrg'),
        data: "",
        nonce: txCount
    },'0xA229362a827aA052Babc8989D5fc2DC669e18F81').then(console.log);
})
{ raw: '0xf86e0d8504a817c800825208948978e517c2b442264e54b890c4428816b66aaf8b881bc16d674ec80000808301852da0f925bed2bcc103439d8709e3f49534915d5b7508843ab5b32fd8b55a350626869fb49af34d6c76ee060d5dca51bbe79e5f3bd04f573defca287d21aa2b583dd3',
  tx: 
   { nonce: '0xd',
     gasPrice: '0x4a817c800',
     gas: '0x5208',
     to: '0x8978e517c2b442264e54b890c4428816b66aaf8b',
     value: '0x1bc16d674ec80000',
     input: '0x',
     v: '0x1852d',
     r: '0xf925bed2bcc103439d8709e3f49534915d5b7508843ab5b32fd8b55a35062686',
     s: '0xb49af34d6c76ee060d5dca51bbe79e5f3bd04f573defca287d21aa2b583dd3',
     hash: '0x5c23aaeb90c1f7f56b132ea65517d59157f085687dd7423f908e22f9e7726509' } }
```


#### sendSignedTransaction


###### web3.nrg.sendSignedTransaction(signedTransactionData [, callback])


Sends an already signed transaction, generated for example using web3.nrg.accounts.signTransaction.


##### Parameters



1. String - Signed transaction data in HEX format
2. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

PromiEvent: A promise combined event emitter. Will be resolved when the transaction receipt is available.

Please see the return values for web3.nrg.sendTransaction for details.


##### Example


```
// See example in web3.nrg.signTransaction to get the raw transaction or web3.nrg.accounts.signTransaction
var signedTransactionData= '0xf86e0d8504a817c800825208948978e517c2b442264e54b890c4428816b66aaf8b881bc16d674ec80000808301852da0f925bed2bcc103439d8709e3f49534915d5b7508843ab5b32fd8b55a350626869fb49af34d6c76ee060d5dca51bbe79e5f3bd04f573defca287d21aa2b583dd3';

web3.nrg.sendSignedTransaction(signedTransactionData).on('receipt', console.log);
>{ blockHash: '0x5661414a26edf9cb1c276cb7168c3de36d8610e107b824d48c36381df8e36c64',
  blockNumber: 26868,
  contractAddress: null,
  cumulativeGasUsed: 138714,
  from: '0xa229362a827aa052babc8989d5fc2dc669e18f81',
  gasUsed: 21000,
  logs: [],
  logsBloom: 
'0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x8978e517c2b442264e54b890c4428816b66aaf8b',
  transactionHash: '0x5c23aaeb90c1f7f56b132ea65517d59157f085687dd7423f908e22f9e7726509',
  transactionIndex: 2 }
```



#### sign[^5]


###### web3.nrg.sign(dataToSign, address [, callback])

Signs data using a specific account. This account needs to be unlocked.


##### Parameters



1. String - Data to sign. If String it will be converted using web3.utils.utf8ToHex.
2. String|Number - Address to sign data with. Or an address or index of a local wallet in web3.nrg.accounts.wallet.
3. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.

**Note:** The 2. address parameter can also be an address or index from the web3.nrg.accounts.wallet. It will then sign locally using the private key of this account.


##### Returns

Promise returns String - The signature.


##### Example


```
web3.nrg.sign("Hello world", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe").then(console.log);
"0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"

// the below is the same
web3.nrg.sign(web3.utils.utf8ToHex("Hello world"), "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe").then(console.log);
"0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"
```



#### call


```


###### web3.nrg.call(callObject [, defaultBlock] [, callback])
```


Executes a message call transaction, which is directly executed in the VM of the node, but never mined into the blockchain.


##### Parameters



1. Object - A transaction object see web3.nrg.sendTransaction, with the difference that for calls the from property is optional as well.
2. Number|String|BN|BigNumber - (optional) If you pass this parameter it will not use the default block set with web3.nrg.defaultBlock. Pre-defined block numbers as "latest", "earliest", "pending", and "genesis" can also be used.
3. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns String: The returned data of the call, e.g. a smart contract functions return value.


##### Example


```
web3.nrg.call({
    to: '0x12BD1d9E1C332e2Fd6C514aB2eA24e2783860333', // contract address
    data: '0xf2c9ecd8'//See example of methods.myMethod.encodeABI to get this parameter
}).then(console.log);
"0x0000000000000000000000000000000000000000000000000000000000000022" //34

web3.nrg.call({
    to: '0x12BD1d9E1C332e2Fd6C514aB2eA24e2783860333', // contract address
    data: '0xa87d942c'//See example of methods.myMethod.encodeABI to get this parameter
}).then(console.log);
>0x000000000000000000000000000000000000000000000000000000000000007b//123
```


#### estimateGas


###### web3.nrg.estimateGas(callObject [, callback])


Executes a message call or transaction and returns the amount of the gas used.


##### Parameters



1. Object - A transaction object see web3.nrg.sendTransaction, with the difference that for calls the from property is optional as well.
2. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns Number - the used gas for the simulated call/transaction.


##### Example


```
//Estimate in a Contract Deploy
let bytecode = "6060604052341561000f57600080fd5b6101018061001e6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630690221081146063578063a87d942c146078578063abd1b73d14609a578063d14e62b8146063578063f2c9ecd81460aa57600080fd5b3415606d57600080fd5b607660043560ba565b005b3415608257600080fd5b608860bf565b60405190815260200160405180910390f35b341560a457600080fd5b607660c5565b341560b457600080fd5b608860d0565b600055565b60005490565b600080546001019055565b6022905600a165627a7a7230582017c22d1f2278137545a2afee121154f920339e24a4095c1238b21c045a230f350029"

web3.nrg.estimateGas({data: '0x'+bytecode}).then(console.log);
121072 //In Wei
```



#### getPastLogs


###### web3.nrg.getPastLogs(options [, callback])


Gets past logs, matching the given options.


##### Parameters



1. Object - The filter options as follows:
2. fromBlock - Number|String: The number of the earliest block ("latest" may be given to mean the most recent and "pending" currently mining, block). By default "latest".
3. toBlock - Number|String: The number of the latest block ("latest" may be given to mean the most recent and "pending" currently mining block). By default "latest".
4. address - String|Array: An address or a list of addresses to only get logs from particular account(s).
5. topics - Array: An array of values which must each appear in the log entries. The order is important, if you want to leave topics out, use null, e.g. [null, '0x12...']. You can also pass an array for each topic with options for that topic e.g. [null, ['option1', 'option2']]


##### Returns

Promise returns Array - Array of log objects.

The structure of the returned event Object in the Array looks as follows:



* address - String: From which this event originated from.
* data - String: The data containing non-indexed log parameters.
* topics - Array: An array with max 4 32 Byte topics, topic 1-3 contains indexed parameters of the log.
* logIndex - Number: Integer of the event index position in the block.
* transactionIndex - Number: Integer of the transaction’s index position, the event was created in.
* transactionHash 32 Bytes - String: Hash of the transaction this event was created in.
* blockHash 32 Bytes - String: Hash of the block where this event was created in. null when its still pending.
* blockNumber - Number: The block number where this log was created in. null when still pending.


##### Example


```
web3.nrg.getPastLogs(
    {
      address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
      fromBlock: "0x1",
      toBlock: "latest",
//Without the toppics field, it shows all the events issued in the smart contract
     }
  ).then(console.log)
[ { address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
    topics: 
     [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
       '0x0000000000000000000000000000000000000000000000000000000000000014' ],

    data: '0x000000000000000000000000000000000000000000000000000000000000001e',
    blockNumber: 29872,
    transactionHash: '0xeecdd5bb369087cabfb09ada85c4b6afc533d1ed2e5e8acdd96269548f06c73e',
    transactionIndex: 0,
    blockHash: '0x86c73556fc9661b6304cc5eacd10874bc056a72b6db0a5c792b01d978c47e11f',
    logIndex: 0,
    removed: false,
    id: 'log_7666b3f0' },
  { address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
    topics: 
     [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
       '0x0000000000000000000000000000000000000000000000000000000000000014' ],
    data: '0x000000000000000000000000000000000000000000000000000000000000001e',
    blockNumber: 29875,
    transactionHash: '0x614bd89af7fb1d0f1bf1487871a22df09309270eeee99011974b4163b7640219',
    transactionIndex: 0,
    blockHash: '0x33ffc2c9fe852d4cf1b39fede6c295514282e4cf77c4d215faa18a341e12de3f',
    logIndex: 0,
    removed: false,
    id: 'log_e437ef3b' },
  { address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
    topics: 
     [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
       '0x0000000000000000000000000000000000000000000000000000000000000020' ],
    data: '0x000000000000000000000000000000000000000000000000000000000000002a',
    blockNumber: 29878,
    transactionHash: '0xc8125ce12307f240333dff4c1a5813e6eddfc21ac9461ec935385f8ee629f203',
    transactionIndex: 0,
    blockHash: '0x5d2e64de1881c4601065b6ef0de77513f97fbfe8d03e4e5cb684b0819f2319f4',
    logIndex: 0,
    removed: false,
    id: 'log_a9809714' } ]

//You can also filter the result using the toppics field
web3.nrg.getPastLogs(
    { address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
      fromBlock: "0x1",
      toBlock: "latest",
      topics: [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
      '0x0000000000000000000000000000000000000000000000000000000000000020' ]
        }).then(console.log)

>[ { address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
    topics: 
     [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
       '0x0000000000000000000000000000000000000000000000000000000000000020' ],
    data: '0x000000000000000000000000000000000000000000000000000000000000002a',
    blockNumber: 29878,
    transactionHash: '0xc8125ce12307f240333dff4c1a5813e6eddfc21ac9461ec935385f8ee629f203',
    transactionIndex: 0,
    blockHash: '0x5d2e64de1881c4601065b6ef0de77513f97fbfe8d03e4e5cb684b0819f2319f4',
    logIndex: 0,
    removed: false,
    id: 'log_a9809714' } ]
```



#### getChainId


###### web3.nrg.getChainId([callback])


Returns the chain ID of the current connected node as described in the EIP-695.


##### Returns

Promise&lt;Number- Returns chain ID.


##### Example


```
web3.nrg.getChainId().then(console.log);
49797
```



#### getNodeInfo


###### web3.nrg.getNodeInfo([callback])



##### Returns

Promise&lt;String- The current client version.


##### Example


```
web3.nrg.getNodeInfo().then(console.log);
"energi3/v3.0.5-stable/linux-amd64/go1.13.8"
```



#### getProof


###### web3.nrg.getProof(address, storageKey, blockNumber, [callback])



Returns the account and storage-values of the specified account including the Merkle-proof as described in EIP-1186.


##### Parameters


1. String 20 Bytes: The Address of the account or contract.
2. Number[] | BigNumber[] | BN[] | String[] 32 Bytes: Array of storage-keys which should be proofed and included. See web3.nrg.getStorageAt.
3. Number | String | BN | BigNumber: Integer block number. Pre-defined block numbers as "latest", "earliest", and "genesis" can also be used.
4. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise&lt;Object- A account object.



* address - String: The address of the account.
* balance - String: The balance of the account. See web3.nrg.getBalance.
* codeHash - String: hash of the code of the account. For a simple Account without code it will return “0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470”
* nonce - String: Nonce of the account.
* storageHash - String: SHA3 of the StorageRoot. All storage will deliver a MerkleProof starting with this rootHash.
* accountProof - String[]:Array of rlp-serialized MerkleTree-Nodes, starting with the stateRoot-Node, following the path of the SHA3 (address) as key.
* storageProof - Object[] Array of storage-entries as requested.
* key - String The requested storage key.
* value - String The storage value.


##### Example


```
web3.nrg.getProof(
    "0x8978E517c2B442264E54b890c4428816b66Aaf8B",    ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
    "latest"
).then(console.log);
{ "address": "0x8978E517c2B442264E54b890c4428816b66Aaf8B",
    "accountProof": [   "0xf90211a0160a73a1576c7adc1584ef6cbefa9276585c36426a85e55870983d97448c2e59a02f2278ebc1849efe09f6fdacf71ed89e9aa7205b89f21ddf3d379d6c19355eafa09d3b0377e132e39e63898e92709c2f70710b40e490e329867b46280c81ee6456a0ec1e579bf4b48e5e038d6c3520abd72b34a1ff0e8713f4ddad6a0fdd87caa935a0d352ef69575cd2354c9b03cf448ab6b807272867f167530e03b1f4291deeeab3a0c75cf980d10cb26401d5b972608d8416c43cb3b80980f7a7b26356d9f192594ba0df9844f5d097a19138ac974b61b7de234bed889c1e0382dcb4ee7b027e344ae9a03a97611d9c6d9486de409ec874f67631631ff4ed6aba822cbd9e462b8a568f60a0999e66a98f8a092b9655f3c5bdf8b157a46c5ca489b93a1677135347a6a50426a07b0c5d35f4fa12030bb5ea488c024f8c110070fb301887354249f02e577f6281a0d9bf73d876ab46e6fe779c58b719937dc180814388f9e86c9457ecff57a91318a0fd37919524b18c0e591b6cfc53160ceecb8a091de212c0d4967466a094ee5c71a0c89a25cbe91cec483fa1745562001279531fef2268ea1c4b5a224c3ce865c4caa03ebecbbe8a5d682b4654c69b8b4d6b6d56025663a18f9190e8940d7c6bcaf8cea07397ec3f729d276b17b8fe70d1de1bf5c7a1e9bec48cc0bc99c5c5618177e9daa04f21ec3d99746e053d15826f21b0e15ea925670e45ebc16c9d5b026793c62a7980",       "0xf90111a0aa9bf1b3831884e5e20c5b3cef3d3f124166d99b76f25124ccdc9302f966529f80a03f1f7da07fd1a12a6374e5e45514a3ecf3aedc44ace8790662788a1bbf821d4b8080a02a39a1054fcf348afa33a525434740c18f22ae76fa1051ff648d36dbac4a0693a0a1d56407c472195e7ddc6d5c6f69c01a80cd5ecd7a1fc8e5ccc44d61165e1a39a0039506a93e91a1dfa150a383eb7a87abbd5fb51ea63dffbe198eb85db70b5f4980a05b3e1beeaeba95c885d025a81ec99ae05f44a427feb9c4fd5fb13e0aa74c8940808080a03dba2745e3f5f3711f8d02d410df89a498b28f3eb68f6d8b689d554cedc915f5a0a24be56319dbf827ed21868d5d12b361385ab512d8736eed850ab77b4e53fe6c8080",        "0xf872a0202ddafe288f67b2ee66b3b1451260909c05fc7c80b7a0922e31302ac75f2c5eb84ff84d018946bd67223ccebc0000a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421a0c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"],
        "balance": '1304920000000000000000',
        "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
        "nonce": '1',
        "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "storageProof": [
        {   "key": "0x0",
            "value": '0x0',
            "proof": []
        },
        {   "key": "0x0",
            "value": '0x0',
            "proof": []
        }
    ]
}
```



### web3.nrg.subscribe

The web3.nrg.subscribe function lets you subscribe to specific events in the blockchain.


#### subscribe[^6]


###### web3.nrg.subscribe(type [, options] [, callback]);


##### Parameters


1. String - The subscription, you want to subscribe to.
2. Mixed - (optional) Optional additional parameters, depending on the subscription type.
3. Function - (optional) Optional callback, returns an error object as first parameter and the result as second. Will be called for each incoming subscription, and the subscription itself as a third parameter.


##### Returns

EventEmitter - A Subscription instance

* subscription.id: The subscription id, used to identify and unsubscribe the subscription.
* subscription.subscribe([callback]): Can be used to re-subscribe with the same parameters.
* subscription.unsubscribe([callback]): Unsubscribes the subscription and returns TRUE in the callback if successful.
* subscription.arguments: The subscription arguments, used when re-subscribing.
* on("data") returns Object: Fires on each incoming log with the log object as argument.
* on("changed") returns Object: Fires on each log which was removed from the blockchain. The log will have the additional property "removed: true".
* on("error") returns Object: Fires when an error in the subscription occurs.
* on("connected") returns String: Fires once after the subscription successfully connected. Returns the subscription id.


##### Notification returns

Mixed - depends on the subscription, see the different subscriptions for more.


##### Example


```
var subscription = web3.nrg.subscribe('logs', {
    address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
    topics: [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
    '0x0000000000000000000000000000000000000000000000000000000000000020' ]
}, function(error, result){
    //console.log(error);
    if (!error)
        console.log(result);
});

//When a transaction is made in the smart contract, which coincides with the subscribed event, a report will be received as:


>{ address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
  topics: 
   [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
     '0x0000000000000000000000000000000000000000000000000000000000000020' ],
  data: '0x000000000000000000000000000000000000000000000000000000000000002a',
  blockNumber: 32777,
  transactionHash: '0x89050c9372b9e1b2db1e93984c4f6ce82d59d3b940901d5a599933e349ea6058',
  transactionIndex: 1,
  blockHash: '0xb5d897d3e62e88eb9e59b3826b7dd32726844cdee25444eb3c78a98f345d864e',
  logIndex: 0,
  removed: false,
  id: 'log_0ae4b0b3' }

// unsubscribes the subscription
subscription.unsubscribe(function(error, success){
    if(success)
        console.log('Successfully unsubscribed!');
});
>Successfully unsubscribed!
```



#### subscribe(“pendingTransactions”)[^7]


###### web3.nrg.subscribe('pendingTransactions' [, callback]);

Subscribes to incoming pending transactions.


##### Parameters



1. String - "pendingTransactions", the type of the subscription.
2. Function - (optional) Optional callback, returns an error object as first parameter and the result as second. Will be called for each incoming subscription.


##### Returns

EventEmitter: An subscription instance as an event emitter with the following events:



* "data" returns String: Fires on each incoming pending transaction and returns the transaction hash.
* "error" returns Object: Fires when an error in the subscription occurs.


##### Notification returns


1. Object|Null - First parameter is an error object if the subscription failed.
2. String - Second parameter is the transaction hash.


##### Example

```
var subscription = web3.nrg.subscribe('pendingTransactions').on("data", function(transaction){
  console.log(transaction);
}).on("error", console.error);
// Returns the transaction hash of pending transactions in the network in order of appearance in the network
>0x7cb27c8136ac2cd3269486289f81863d5c42b69c101bcc8f6b9a8f5ee1bf7179
0x27980060c37976aee68fc35578d462c0a1527fe3c10780f7593214c19729f4da
0x3961fd84cf94f37ad171d23c7ea2791c667e6d5b0f65423fc8fb49780db4b821
0x403a7ea0998b71e66ba009bc230edaea97a45a5b6a47f9f2944f1ec6213879b6
0xff3edfad4d0e19254bc7d577ca1a554c56da228232dbe77bcda4e848e4c5abfa

// unsubscribes the subscription
subscription.unsubscribe(function(error, success){
  if(success)
      console.log('Successfully unsubscribed!');
});
```



#### subscribe(“newBlockHeaders”)[^8]


###### web3.nrg.subscribe('newBlockHeaders' [, callback]);

Subscribes to incoming block headers. This can be used as timer to check for changes on the blockchain.


##### Parameters


1. String - "newBlockHeaders", the type of the subscription.
2. Function - (optional) Optional callback, returns an error object as first parameter and the result as second. Will be called for each incoming subscription.


##### Returns

EventEmitter: An subscription instance as an event emitter with the following events:


* "data" returns Object: Fires on each incoming block header.
* "error" returns Object: Fires when an error in the subscription occurs.
* "connected" returns Number: Fires once after the subscription successfully connected. Returns the subscription id.

The structure of a returned block header is as follows:


* number - Number: The block number. null when its pending block.
* hash 32 Bytes - String: Hash of the block. null when its pending block.
* parentHash 32 Bytes - String: Hash of the parent block.
* nonce 8 Bytes - String: Hash of the generated proof-of-work. null when its pending block.
* sha3Uncles 32 Bytes - String: SHA3 of the uncles data in the block.
* logsBloom 256 Bytes - String: The bloom filter for the logs of the block. null when its pending block.
* transactionsRoot 32 Bytes - String: The root of the transaction trie of the block
* stateRoot 32 Bytes - String: The root of the final state trie of the block.
* receiptsRoot 32 Bytes - String: The root of the receipts.
* miner - String: The address of the beneficiary to whom the mining rewards were given.
* extraData - String: The “extra data” field of this block.
* gasLimit - Number: The maximum gas allowed in this block.
* gasUsed - Number: The total used gas by all transactions in this block.
* timestamp - Number: The unix timestamp for when the block was collated.


##### Notification returns


1. Object|Null - First parameter is an error object if the subscription failed.
2. Object - The block header object like above.


##### Example


```
var subscription = web3.nrg.subscribe('newBlockHeaders', function(error, result){
    if (!error) {
        console.log(result);

        return;
    }

    console.error(error);
}).on("connected", function(subscriptionId){

    console.log(subscriptionId);
}).on("data", function(blockHeader){
    console.log(blockHeader);
}).on("error", console.error);
//Displays information of the validated blocks from the moment the subscription started
>{ parentHash: '0x122f717cca296757fd49435fa13c3ba6a6059f96f811c751d051e6d018165f7e',
  sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  miner: '0x0000000000000000000000000000000000000308',
  stateRoot: '0x363af17cf8432bcff124e8545c139dd84152d54d5e1907701f20184ef3029db1',
  transactionsRoot: '0x5fdc5812f46ccfd57faef2e3720e8801b265645c61045f5e4dc7dc92e92aa767',
  receiptsRoot: '0x45868e0734fcc561ef3d9d1bf95ff2225f68d9b06f141d8f6090304a9710cedc',
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  difficulty: '4443690',
  number: 32962,
  gasLimit: 40000000,
  gasUsed: 0,
  timestamp: 1583188531,
  extraData: '0xda82090287656e657267693388676f312e31332e38856c696e7578',
  mixHash: '0x78cce2ee458cb768b9128ce0d555d78cedf4cc0c8ef7dd75a5c9de624e3ab0b4',
  nonce: '0x000000000022fb85',
  signature: '0xa2779c9964305414d4716d5c5ceb6ee84cf7d74babf4fdc396b6af42ad2e25b873d0289b3169deccea8e1a6709afe9e25a21d6ccf21eb8ff4e8fe6d672ae2e6800',
  hash: '0x57e0a8f5ca50df04c3c0197fdbba1ecc2107eb93c6fba9677add4f6d2fd36235',
  size: undefined }
{ parentHash: '0x122f717cca296757fd49435fa13c3ba6a6059f96f811c751d051e6d018165f7e',
  sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  miner: '0x0000000000000000000000000000000000000308',
  stateRoot: '0x363af17cf8432bcff124e8545c139dd84152d54d5e1907701f20184ef3029db1',
  transactionsRoot: '0x5fdc5812f46ccfd57faef2e3720e8801b265645c61045f5e4dc7dc92e92aa767',
  receiptsRoot: '0x45868e0734fcc561ef3d9d1bf95ff2225f68d9b06f141d8f6090304a9710cedc',
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  difficulty: '4443690',
  number: 32962,
  gasLimit: 40000000,
  gasUsed: 0,
  timestamp: 1583188531,
  extraData: '0xda82090287656e657267693388676f312e31332e38856c696e7578',
  mixHash: '0x78cce2ee458cb768b9128ce0d555d78cedf4cc0c8ef7dd75a5c9de624e3ab0b4',
  nonce: '0x000000000022fb85',
  signature: '0xa2779c9964305414d4716d5c5ceb6ee84cf7d74babf4fdc396b6af42ad2e25b873d0289b3169deccea8e1a6709afe9e25a21d6ccf21eb8ff4e8fe6d672ae2e6800',
  hash: '0x57e0a8f5ca50df04c3c0197fdbba1ecc2107eb93c6fba9677add4f6d2fd36235',
  size: undefined }
{ parentHash: '0x57e0a8f5ca50df04c3c0197fdbba1ecc2107eb93c6fba9677add4f6d2fd36235',
  sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  miner: '0x6DF38756c169aFaEe80959747116049b82ED1f44',
  stateRoot: '0xe37c0bb02962cc656e8b2014cd580020b542047fc89833baa85be5e7fb27122b',
  transactionsRoot: '0x3469220e44fc368db911ee8bb48c108f6d9e7b9849410af64f814278c423e3c2',
  receiptsRoot: '0x9f0e700f9abdd3dd80302a9d65c5f86d2e851889f4fb14e8d553f058673b6fa7',
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  difficulty: '3316186',
  number: 32963,
  gasLimit: 40000000,
  gasUsed: 117842,
  timestamp: 1583188582,
  extraData: '0xda82090387656e657267693388676f312e31332e38856c696e7578',
  mixHash: '0x1d30113f8a6eeb089be4970bf57d0c8b98e9b6089707c248ac958c0b372e42a9',
  nonce: '0x0000000000003fbf',
  signature: '0x2ad426aa11b8548b8831eb91b869b859a89ac656c809e0261ee7581d4909a5a933c568df9cea629885cb949617231805e1d731d3af360370df51c7ad739df02801',
  hash: '0x74c72574a90a6141a38209ee41844ef24180e423dc3429ffc47a8701ddf97863',
  size: undefined }
{ parentHash: '0x57e0a8f5ca50df04c3c0197fdbba1ecc2107eb93c6fba9677add4f6d2fd36235',
  sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  miner: '0x6DF38756c169aFaEe80959747116049b82ED1f44',
  stateRoot: '0xe37c0bb02962cc656e8b2014cd580020b542047fc89833baa85be5e7fb27122b',
  transactionsRoot: '0x3469220e44fc368db911ee8bb48c108f6d9e7b9849410af64f814278c423e3c2',
  receiptsRoot: '0x9f0e700f9abdd3dd80302a9d65c5f86d2e851889f4fb14e8d553f058673b6fa7',
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  difficulty: '3316186',
  number: 32963,
  gasLimit: 40000000,
  gasUsed: 117842,
  timestamp: 1583188582,
  extraData: '0xda82090387656e657267693388676f312e31332e38856c696e7578',
  mixHash: '0x1d30113f8a6eeb089be4970bf57d0c8b98e9b6089707c248ac958c0b372e42a9',
  nonce: '0x0000000000003fbf',
  signature: '0x2ad426aa11b8548b8831eb91b869b859a89ac656c809e0261ee7581d4909a5a933c568df9cea629885cb949617231805e1d731d3af360370df51c7ad739df02801',
  hash: '0x74c72574a90a6141a38209ee41844ef24180e423dc3429ffc47a8701ddf97863',
  size: undefined }
{ parentHash: '0x74c72574a90a6141a38209ee41844ef24180e423dc3429ffc47a8701ddf97863',
  sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  miner: '0x6DF38756c169aFaEe80959747116049b82ED1f44',
  stateRoot: '0xd31360c219dc8cfd22baf4c7d2950c2c8ae4bec3c2e7eec805118c12d23e24e6',
  transactionsRoot: '0x7ba84218b9883ea22218864511dcaef0056fe7c94b86b8f21bccecf8428190f5',
  receiptsRoot: '0xa8843a406182ce63aa02146ffba5ad089ee07bce5bb51fe56ea356983cd75097',
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  difficulty: '7793037',
  number: 32964,
  gasLimit: 40000000,
  gasUsed: 0,
  timestamp: 1583188626,
  extraData: '0xda82090387656e657267693388676f312e31332e38856c696e7578',
  mixHash: '0x543358f9580b92b1ee65016faddc1f66b31bb1d338c62b305da9962fd8974bb7',
  nonce: '0x000000000001f256',
  signature: '0xec3f02fe3e0e0a4c786c4b10db3e9890e38cb69e3aeb4d01bd567dd4b58fb67e7d7895924dc03510b9c4ed023bbfb1359482dd6a9bf3e86fe8e64ee630f9ee9300',
  hash: '0x55dd12281fd1e45412b4b416366c179d82001a0d2e264693bde8692b72a85d2c',
  size: undefined }
{ parentHash: '0x74c72574a90a6141a38209ee41844ef24180e423dc3429ffc47a8701ddf97863',
  sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  miner: '0x6DF38756c169aFaEe80959747116049b82ED1f44',
  stateRoot: '0xd31360c219dc8cfd22baf4c7d2950c2c8ae4bec3c2e7eec805118c12d23e24e6',
  transactionsRoot: '0x7ba84218b9883ea22218864511dcaef0056fe7c94b86b8f21bccecf8428190f5',
  receiptsRoot: '0xa8843a406182ce63aa02146ffba5ad089ee07bce5bb51fe56ea356983cd75097',
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  difficulty: '7793037',
  number: 32964,
  gasLimit: 40000000,
  gasUsed: 0,
  timestamp: 1583188626,
  extraData: '0xda82090387656e657267693388676f312e31332e38856c696e7578',
  mixHash: '0x543358f9580b92b1ee65016faddc1f66b31bb1d338c62b305da9962fd8974bb7',
  nonce: '0x000000000001f256',
  signature: '0xec3f02fe3e0e0a4c786c4b10db3e9890e38cb69e3aeb4d01bd567dd4b58fb67e7d7895924dc03510b9c4ed023bbfb1359482dd6a9bf3e86fe8e64ee630f9ee9300',
  hash: '0x55dd12281fd1e45412b4b416366c179d82001a0d2e264693bde8692b72a85d2c',
  size: undefined }
{ parentHash: '0x55dd12281fd1e45412b4b416366c179d82001a0d2e264693bde8692b72a85d2c',
  sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  miner: '0x6DF38756c169aFaEe80959747116049b82ED1f44',
  stateRoot: '0xc8566609206c93ac68bd5ce72d8d2e6a2e8259506dfbc222e12ab80eb42949f2',
  transactionsRoot: '0x4051e59fd70e91d43cf85e98e8c369fc70296d7364202b6fe0a70e12450bad5d',
  receiptsRoot: '0x349c540ac7147b19f021aef29dbae5c8e1e92f0f29ebf769556c0ec06af3e469',
  logsBloom: '0x00000000000000000000000000000000000010000000000000000100000000000000000000000000000000200000000000000000000000010000000000000000000000000000000000000000800000002000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000080040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000020000000000000000000800000000000000000000000000000000000000000000000',
  difficulty: '32496964',
  number: 32965,
  gasLimit: 40000000,
  gasUsed: 87860,
  timestamp: 1583188668,
  extraData: '0xda82090387656e657267693388676f312e31332e38856c696e7578',
  mixHash: '0xef1103f39704644ce09730437d66a6ca383e4a9e4fc190be6a25950fe7d2a7ae',
  nonce: '0x00000000000081b6',
  signature: '0xcd3ce1fba1338fa437333d90294420c2dad2511c7e0024b90c9998639df0b7176cd3679ef8d75b1136e692e07441336d45f905662b5ca73686b3a4743dcd5fd501',
  hash: '0xd52268a3ffe555acf2c3cbfe09e865fe6dbc106df6b8511599656523fed1b6b8',
  size: undefined }
{ parentHash: '0x55dd12281fd1e45412b4b416366c179d82001a0d2e264693bde8692b72a85d2c',
  sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  miner: '0x6DF38756c169aFaEe80959747116049b82ED1f44',
  stateRoot: '0xc8566609206c93ac68bd5ce72d8d2e6a2e8259506dfbc222e12ab80eb42949f2',
  transactionsRoot: '0x4051e59fd70e91d43cf85e98e8c369fc70296d7364202b6fe0a70e12450bad5d',
  receiptsRoot: '0x349c540ac7147b19f021aef29dbae5c8e1e92f0f29ebf769556c0ec06af3e469',
  logsBloom: '0x00000000000000000000000000000000000010000000000000000100000000000000000000000000000000200000000000000000000000010000000000000000000000000000000000000000800000002000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000080040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000020000000000000000000800000000000000000000000000000000000000000000000',
  difficulty: '32496964',
  number: 32965,
  gasLimit: 40000000,
  gasUsed: 87860,
  timestamp: 1583188668,
  extraData: '0xda82090387656e657267693388676f312e31332e38856c696e7578',
  mixHash: '0xef1103f39704644ce09730437d66a6ca383e4a9e4fc190be6a25950fe7d2a7ae',
  nonce: '0x00000000000081b6',
  signature: '0xcd3ce1fba1338fa437333d90294420c2dad2511c7e0024b90c9998639df0b7176cd3679ef8d75b1136e692e07441336d45f905662b5ca73686b3a4743dcd5fd501',
  hash: '0xd52268a3ffe555acf2c3cbfe09e865fe6dbc106df6b8511599656523fed1b6b8',
  size: undefined }
```



#### subscribe(“syncing”)[^9]


###### web3.nrg.subscribe('syncing' [, callback]);

Subscribe to syncing events. This will return an object when the node is syncing and when its finished syncing will return FALSE.


##### Parameters


1. String - "syncing", the type of the subscription.
2. Function - (optional) Optional callback, returns an error object as first parameter and the result as second. Will be called for each incoming subscription.


##### Returns

EventEmitter: An subscription instance as an event emitter with the following events:


* "data" returns Object: Fires on each incoming sync object as argument.
* "changed" returns Object: Fires when the synchronisation is started with true and when finished with false.
* "error" returns Object: Fires when an error in the subscription occurs.

For the structure of a returned event Object see web3.nrg.isSyncing return values.


##### Notification returns


1. Object|Null - First parameter is an error object if the subscription failed.
2. Object|Boolean - The syncing object, when started it will return true once or when finished it will return false once.


##### Example


```
var subscription = web3.nrg.subscribe('syncing', function(error, sync){
    if (!error)
        console.log(sync);
})
.on("data", function(sync){
    // show some syncing stats
})
.on("changed", function(isSyncing){
    if(isSyncing) {
        // stop app operation
    } else {
        // regain app operation
    }
});

var subscription = web3.nrg.subscribe('syncing', function(error, sync){
    if (!error)
        console.log(sync);
})

>true
false
false
false
false
false
false
false
false
.
.
.
//Until you unsubscribe the subscription


// unsubscribes the subscription
subscription.unsubscribe(function(error, success){
    if(success)

        console.log('Successfully unsubscribed!');
});
```


#### subscribe(“logs”)[^10]


###### web3.nrg.subscribe('logs', options [, callback]);

Subscribes to incoming logs, filtered by the given options. If a valid numerical fromBlock options property is set, Web3 will retrieve logs beginning from this point, backfilling the response as necessary.


##### Parameters


1. "logs" - String, the type of the subscription.
2. Object - The subscription options
* fromBlock - Number: The number of the earliest block. By default null.
* address - String|Array: An address or a list of addresses to only get logs from particular account(s).
* topics - Array: An array of values which must each appear in the log entries. The order is important, if you want to leave topics out use null, e.g. [null, '0x00...']. You can also pass another array for each topic with options for that topic e.g. [null, ['option1', 'option2']]
1. callback - Function: (optional) Optional callback, returns an error object as first parameter and the result as second. Will be called for each incoming subscription.


##### Returns

EventEmitter: An subscription instance as an event emitter with the following events:


* "data" returns Object: Fires on each incoming log with the log object as argument.
* "changed" returns Object: Fires on each log which was removed from the blockchain. The log will have the additional property "removed: true".
* "error" returns Object: Fires when an error in the subscription occurs.
* "connected" returns Number: Fires once after the subscription successfully connected. Returns the subscription id.

For the structure of a returned event Object see web3.nrg.getPastEvents return values.


##### Notification returns


1. Object|Null - First parameter is an error object if the subscription failed.
2. Object - The log object like in web3.nrg.getPastEvents return values.


##### Example


```
var subscription = web3.nrg.subscribe('logs', {
    address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
    topics: [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
    '0x0000000000000000000000000000000000000000000000000000000000000020' ]
}, function(error, result){
    if (!error)
        console.log(result);
}).on("connected", function(subscriptionId){
    console.log(subscriptionId);
}).on("data", function(log){
    console.log(log);
}).on("changed", function(log){
});
>0x762c55e8c479aabfb0d39bfe0f91ba3e//subscriptionId


// unsubscribes the subscription
subscription.unsubscribe(function(error, success){
    if(success)
        console.log('Successfully unsubscribed!');
});
```

#### clearSubscriptions


###### web3.nrg.clearSubscriptions()

Resets subscriptions.


##### Parameters

Boolean: If true it keeps the "syncing" subscription.


##### Returns

Boolean


##### Example


```
web3.nrg.subscribe('logs', {} ,function(){ ... });

...
web3.nrg.clearSubscriptions();
```


### web3.nrg.Contract

The web3.nrg.Contract object makes it easy to interact with smart contracts on the energi blockchain. When you create a new contract object you give it the json interface of the respective smart contract and web3 will auto convert all calls into low level ABI calls over RPC for you.

This allows you to interact with smart contracts as if they were JavaScript objects.

To use it standalone:


#### new contract


###### new web3.nrg.Contract(jsonInterface[, address][, options])


Creates a new contract instance with all its methods and events defined in its json interface object.


##### Parameters


1. jsonInterface - Object: The json interface for the contract to instantiate
2. address - String (optional): The address of the smart contract to call.
3. options - Object (optional): The options of the contract. Some are used as fallbacks for calls and transactions:
    * from - String: The address transactions should be made from.
    * gasPrice - String: The gas price in wei to use for transactions.
    * gas - Number: The maximum gas provided for a transaction (gas limit).
    * data - String: The byte code of the contract. Used when the contract gets deployed.


##### Returns

Object: The contract instance with all its methods and events.


##### Example


```
const abi =[{"constant":false,"inputs":[{"name":"p_1","type":"uint256"}],"name":"Sum_function","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getsum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_count","type":"uint256"}],"name":"counter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_count","type":"uint256"}],"name":"setCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"incrementCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"p_data","type":"uint256"},{"indexed":false,"name":"p_sum","type":"uint256"}],"name":"adduintevent","type":"event"}];


let contract_adress= '0x9361E46103f3a93757cB9Dc52ba9d5B186866A16'

//Now I could instantiate the Contract using the ABI and the contract address:
var myContract = new web3.nrg.Contract(abi, contract_adress);
```


#### = Properties =


#### defaultAccount


###### web3.nrg.Contract.defaultAccount


###### contract.defaultAccount // on contract instance

See the web3.nrg.defaultAccount section for a detailed description of this method.


##### Example


```
//After creating the contract instance
myContract.defaultAccount
null
myContract.defaultAccount='0xA229362a827aA052Babc8989D5fc2DC669e18F81'
'0xA229362a827aA052Babc8989D5fc2DC669e18F81'

//You can define this parameter as a default value for all contracts in the future //with:

web3.nrg.Contract.defaultAccount
null
web3.nrg.Contract.defaultAccount='0x9001494905dfC4B1b5Bd52471FBE6Bb6cF00D094'
'0x9001494905dfC4B1b5Bd52471FBE6Bb6cF00D094'
//If another contract is attempted, with the same ABI (See new contract section):
const Contract = new web3.nrg.Contract(abi);
//It is verified that the defaultAccount field has been defined by default:
Contract.defaultAccount
'0x9001494905dfC4B1b5Bd52471FBE6Bb6cF00D094'
```


#### defaultBlock


###### web3.nrg.Contract.defaultBlock


###### contract.defaultBlock // on contract instance

See the web3.nrg.defaultBlock section for a detailed description of this method.


##### Example


```
web3.nrg.Contract.defaultBlock
'latest'
myContract.defaultBlock
'latest'
```



#### defaultHardfork


###### contract.defaultHardfork


See the web3.nrg.defaultHardfork section for a detailed description of this method.


#### defaultChain


###### contract.defaultChain


See the `web3.nrg.defaultChain` section for a detailed description of this method.


#### defaultCommon


###### contract.defaultCommon


See the `web3.nrg.defaultCommon` section for a detailed description of this method.


#### transactionBlockTimeout


###### web3.nrg.Contract.transcationBlockTimeout


###### contract.transactionBlockTimeout // on contract instance


See the `web3.nrg.transactionBlockTimeout` section for a detailed description of this method.


##### Example


```
myContract.transactionBlockTimeout
50
```



#### transactionConfirmationBlocks


###### web3.nrg.Contract.transactionConfirmationBlocks


###### contract.transactionConfirmationBlocks // on contract instance


See the `web3.nrg.transactionConfirmationBlocks` section for a detailed description of this method.


##### Example


```
myContract.transactionConfirmationBlocks
24
```



#### transactionPollingTimeout


###### web3.nrg.Contract.transactionPollingTimeout


###### contract.transactionPollingTimeout // on contract instance

See the web3.nrg.transactionPollingTimeout section for a detailed description of this method.


##### Example


```
web3.nrg.Contract.transactionPollingTimeout
750
myContract.transactionPollingTimeout
750
```



#### handleRevert


###### web3.nrg.Contract.handleRevert


###### contract.handleRevert // on contract instance


See the web3.nrg.handleRevert section for a detailed description of this method.


##### Example


```
//The estimated gas to run this method is: 26757 Wei.
//24000 Wei will be used to force a runtime error:

myContract.methods.setCount(150).send({from: '0x99aA0A8895817f56e03bb70FEb216F036A829AB7',  gas: 24000, handleRevert: true}, function(error, transactionHash){
    console.log(transactionHash)}).catch(console.log);

{ Error: Transaction has been reverted by the EVM:
{
  "blockHash": "0x89f0897e22fc7b8be75a9d4271a3a93a22f6f18996b809fe772805aa8b1b09d7",
  "blockNumber": 128028,
  "contractAddress": null,
  "cumulativeGasUsed": 24000,
  "from": "0x99aa0a8895817f56e03bb70feb216f036a829ab7",
  "gasUsed": 24000,
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "status": false,
  "to": "0x9361e46103f3a93757cb9dc52ba9d5b186866a16",
  "transactionHash": "0x4f5920d259901120bb1951e95ec9a740438a9961fa081ba75966056fdbb7d09d",
  "transactionIndex": 0,
  "events": {}
}
  receipt: 
   { blockHash: '0x89f0897e22fc7b8be75a9d4271a3a93a22f6f18996b809fe772805aa8b1b09d7',
     blockNumber: 128028,
     contractAddress: null,
     cumulativeGasUsed: 24000,
     from: '0x99aa0a8895817f56e03bb70feb216f036a829ab7',
     gasUsed: 24000,
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     status: false,
     to: '0x9361e46103f3a93757cb9dc52ba9d5b186866a16',
     transactionHash: '0x4f5920d259901120bb1951e95ec9a740438a9961fa081ba75966056fdbb7d09d',
     transactionIndex: 0,
     events: {} } }
```



#### options


###### myContract.options


The options object for the contract instance. from, gas and gasPrice are used as fallback values when sending transactions. The parameters address and jsonInterface, will always be defined during the instance of the object of the contract. The rest of the parameters will exist if the optional parameters were defined in the instance. (See new contract)


##### Properties

Object - options:



* address - String: The address where the contract is deployed. See options.address.
* jsonInterface - Array: The json interface of the contract. See options.jsonInterface.
* data - String: The byte code of the contract. Used when the contract gets deployed.
* from - String: The address transactions should be made from.
* gasPrice - String: The gas price in wei to use for transactions.
* gas - Number: The maximum gas provided for a transaction (gas limit).
* handleRevert - Boolean: It will otherwise use the default value provided from the NRG module. See handleRevert.
* transactionBlockTimeout - Number: It will otherwise use the default value provided from the NRG module. See transactionBlockTimeout.
* transactionConfirmationBlocks - Number: It will otherwise use the default value provided from the NRG module. See transactionConfirmationBlocks.
* transactionPollingTimeout - Number: It will otherwise use the default value provided from the NRG module. See transactionPollingTimeout.
* chain - Number: It will otherwise use the default value provided from the NRG module. See defaultChain.
* hardfork - Number: It will otherwise use the default value provided from the NRG module. See defaultHardfork.
* common - Number: It will otherwise use the default value provided from the NRG module. See defaultCommon.


##### Example


```
myContract.options
{ address: [Getter/Setter], jsonInterface: [Getter/Setter] }

otherContract.options
{ from: '0x1234567890123456789012345678901234567891',
  gasPrice: '20000000000',
  handleRevert: true,
  transactionBlockTimeout: 25,
  data: undefined,
  gas: undefined,
  address: [Getter/Setter],
  jsonInterface: [Getter/Setter] }
```



#### options.address


###### myContract.options.address


The address used for this contract instance. All transactions generated by web3.js from this contract will contain this address as the “to”.

The address will be stored in lowercase.


##### Property

address - String|null: The address for this contract, or null if it’s not yet set.


##### Example


```
myContract.options.address;
'0x9361E46103f3a93757cB9Dc52ba9d5B186866A16'

// set a new address
myContract.options.address = '0x1234FFDD...';
```



#### options.jsonInterface


###### myContract.options.jsonInterface


The json interface object derived from the ABI of this contract.


##### Property

jsonInterface - Array: The json interface for this contract. Re-setting this will regenerate the methods and events of the contract instance.


##### Example


```
myContract.options.jsonInterface;
[ { constant: false,
    inputs: [ [Object] ],
    name: 'Sum_function',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x276f0e51' },
  { constant: false,
    inputs: [],
    name: 'getsum',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x8da92777' },
  { constant: true,
    inputs: [],
    name: 'getCount',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xa87d942c' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'counter',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xb1f525c6' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'setCount',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xd14e62b8' },
  { constant: false,
    inputs: [],
    name: 'incrementCount',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xe5071b8e' },
  { constant: true,
    inputs: [],
    name: 'getNumber',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
    signature: '0xf2c9ecd8' },
  { anonymous: false,
    inputs: [ [Object], [Object] ],
    name: 'adduintevent',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e' } ]


// set a new interface
myContract.options.jsonInterface = [...];
```



### Methods


#### clone


###### myContract.clone()


Clones the current contract instance.


##### Parameters

none


##### Returns

Object: The new contract instance.


##### Example


```
var contract1 = new web3.nrg.Contract(abi, contract_adress, {gasPrice: '10000000000', from: '0xa229362a827aa052babc8989d5fc2dc669e18f81'});

contract1.options.address;
'0x12BD1d9E1C332e2Fd6C514aB2eA24e2783860333'

var contract_address2 = '0x9B6FD129989D6151E6Caedf15FE0185b763b5AC9'

var contract2 = contract1.clone();
contract2.options.address = contract_address2;

(contract1.options.address !== contract2.options.address);
true
```



#### deploy


###### myContract.deploy(options)


Call this function to deploy the contract to the blockchain. After successful deployment the promise will resolve with a new contract instance.


##### Parameters

options - Object: The options used for deployment.



* data - String: The byte code of the contract.
* arguments - Array (optional): The arguments which get passed to the constructor on deployment.


##### Returns

Object: The transaction object:



* Array - arguments: The arguments passed to the method before. They can be changed.
* Function - send: Will deploy the contract. The promise will resolve with the new contract instance, instead of the receipt!
* Function - estimateGas: Will estimate the gas used for deploying.
* Function - encodeABI: Encodes the ABI of the deployment, which is contract data + constructor parameters

For details to the methods see the documentation below.


##### Example


```
//To get the Bytecode and ABI, use Remix or some other Solidity compiler.
//Test contract:
const abi =[{"constant":false,"inputs":[{"name":"p_1","type":"uint256"}],"name":"Sum_function","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getsum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_count","type":"uint256"}],"name":"counter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_count","type":"uint256"}],"name":"setCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"incrementCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"p_data","type":"uint256"},{"indexed":false,"name":"p_sum","type":"uint256"}],"name":"adduintevent","type":"event"}];

const bytecode ='608060405234801561001057600080fd5b50610279806100206000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063276f0e51146100885780638da92777146100c9578063a87d942c146100f4578063b1f525c61461011f578063d14e62b81461014c578063e5071b8e14610179578063f2c9ecd814610190575b600080fd5b34801561009457600080fd5b506100b3600480360381019080803590602001909291905050506101bb565b6040518082815260200191505060405180910390f35b3480156100d557600080fd5b506100de61020b565b6040518082815260200191505060405180910390f35b34801561010057600080fd5b50610109610215565b6040518082815260200191505060405180910390f35b34801561012b57600080fd5b5061014a6004803603810190808035906020019092919050505061021e565b005b34801561015857600080fd5b5061017760048036038101908080359060200190929190505050610228565b005b34801561018557600080fd5b5061018e610232565b005b34801561019c57600080fd5b506101a5610244565b6040518082815260200191505060405180910390f35b600081600a01600181905550817f2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e6001546040518082815260200191505060405180910390a26001549050919050565b6000600154905090565b60008054905090565b8060008190555050565b8060008190555050565b60016000808282540192505081905550565b600060229050905600a165627a7a7230582081716b25d7b473442d096fca701d958cd33a4b50342fcafbadeb3e4e688fe33f0029'

//Smart Contract Instance
const myDeployContract = new web3.nrg.Contract(abi, {data:'0x'+bytecode});

// deploy new contract
myDeployContract.deploy().estimateGas(function(err, gas){
//The object has a method for estimating the gas to be used, similar to that in the // estimateGas section (see web3.nrg.estimateGas)
    myDeployContract.deploy().send({
     // The account(from account) is enabled for signing transactions locally
        from: '0x99aA0A8895817f56e03bb70FEb216F036A829AB7', 
        gas: gas}).then(function(newContractInstance){
            console.log(newContractInstance.options.address) 
        })
    });
0x9361E46103f3a93757cB9Dc52ba9d5B186866A16 // new contract add
```



#### methods


###### myContract.methods.myMethod([param1[, param2[, ...]]])


Creates a transaction object for that method, which then can be called, send, estimated.

The methods of this smart contract are available through:


* The name: myContract.methods.myMethod(param1)
* The name with parameters: myContract.methods['myMethod(uint256)'](param1)
* The signature: myContract.methods['signature'](param1)

This allows calling functions with the same name but different parameters from the JavaScript contract object.


##### Parameters

Parameters of any method depend on the smart contracts methods, defined in the JSON interface.

For details to the methods see the documentation below.


#### methods.myMethod.call


###### myContract.methods.myMethod([param1[, param2[, ...]]]).call(options[, callback])


Will call a “constant” method and execute its smart contract method in the EVM without sending any transaction. Note: calling can not alter the smart contract state.


##### Parameters


1. options - Object (optional): The options used for calling.
* from - String (optional): The address the call “transaction” should be made from.
* gasPrice - String (optional): The gas price in wei to use for this call “transaction”.
* gas - Number (optional): The maximum gas provided for this call “transaction” (gas limit).
2. callback - Function (optional): This callback will be fired with the result of the smart contract method execution as the second argument, or with an error object as the first argument.


##### Returns

Promise returns Mixed: The return value(s) of the smart contract method. If it returns a single value, it’s returned as is. If it has multiple return values they are returned as an object with properties and indices.


##### Example


```
//ABI of the test contract (see example of the deploy section)
let =[{"constant":false,"inputs":[{"name":"p_1","type":"uint256"}],"name":"Sum_function","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getsum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_count","type":"uint256"}],"name":"counter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_count","type":"uint256"}],"name":"setCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"incrementCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"p_data","type":"uint256"},{"indexed":false,"name":"p_sum","type":"uint256"}],"name":"adduintevent","type":"event"}];

let contract_adress= '0x9361E46103f3a93757cB9Dc52ba9d5B186866A16'

//Smart Contract Instance
const myContract = new web3.nrg.Contract(abi, contract_adress);

// using the callback
myContract.methods.getCount().call(function(error, result){console.log(result)});
>0

// using the promise
myContract.methods.getNumber().call().then(console.log)
>34
//Example of a contract that returns multiple values:
//Another test contract:

contract MyContract {
    function myFunction() returns(uint256 myNumber, string myString) {
        return (23456, "Hello!%");
    }
}

// web3.js
//After compiling the contract:
const MyContract = new web3.nrg.Contract(abi, address);

MyContract.methods.myFunction().call().then(console.log);
// MULTI-ARGUMENT RETURN:
Result {
    myNumber: '23456',
    myString: 'Hello!%',
    0: '23456', // these are here as fallbacks if the name is not know or given
    1: 'Hello!%'
}
```



#### methods.myMethod.send


###### myContract.methods.myMethod([param1[, param2[, ...]]]).send(options[, callback])


Will send a transaction to the smart contract and execute its method. Note: this can alter the smart contract state.


##### Parameters


1. options - Object: The options used for sending.
    * from - String: The address the transaction should be sent from.
    * gasPrice - String (optional): The gas price in wei to use for this transaction.
    * gas - Number (optional): The maximum gas provided for this transaction (gas limit).
    * value - [``](https://web3js.readthedocs.io/en/v1.2.6/web3-eth-contract.html#id34)Number|String|BN|BigNumber``(optional): The value transferred for the transaction in wei.
2. callback - Function (optional): This callback will be fired first with the “transactionHash”, or with an error object as the first argument.


##### Returns

The callback will return the 32 bytes transaction hash.

PromiEvent: A promise combined event emitter. Will be resolved when the transaction receipt is available, OR if this send() is called from a someContract.deploy(), then the promise will resolve with the new contract instance. 

Additionally the following events are available:


* "transactionHash" returns String: is fired right after the transaction is sent and a transaction hash is available.
* "receipt" returns Object: is fired when the transaction receipt is available. Receipts from contracts will have no logs property, but instead an eventsproperty with event names as keys and events as properties. See getPastEvents return values for details about the returned event object.
* "confirmation" returns Number, Object: is fired for every confirmation up to the 24th confirmation. Receives the confirmation number as the first and the receipt as the second argument. Fired from confirmation 1 on, which is the block where it’s minded.
* "error" returns Error and Object|undefined: Is fired if an error occurs during sending. If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.


##### Example


```
// After Smart Contract Instance (See methods.myMethod.call example)

myContract.methods.getCount().call().then(console.log)
>123

// The account (from account) must be unlocked to sign transactions.
//To estimate the 'gas' parameter, see the methods.myMethod.estimateGas section below
const options_object= {from: '0x99aA0A8895817f56e03bb70FEb216F036A829AB7',  gas: 41757}

// using the callback

myContract.methods.setCount(150).send(options_object, function(error, transactionHash){console.log(transactionHash)});
0xad0a937a22388495f74288f28cc1aa850eadc75c9f596f98337ab1f50a4b580e

//After the transaction has been validated

myContract.methods.getCount().call().then(console.log)
>150 //The change of status of the smart contract is verified

// using the promise
myContract.methods.setCount(20).send(options_object).then(function(receipt){console.log(receipt)});
>{ blockHash: '0xc19c7dfa822b7d7c7e3d8b62414dc3c58087cd25e242dcd87519028622756d20',
  blockNumber: 18514,
  contractAddress: null,
  cumulativeGasUsed: 85500,
  from: '0x99aA0A8895817f56e03bb70FEb216F036A829AB7',
  gasUsed: 26643,
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x12bd1d9e1c332e2fd6c514ab2ea24e2783860333',
  transactionHash: '0x3f8de40d31d459f08caf4718edebf6a7551c7ce604ab134a8da99a09db0382f0',
  transactionIndex: 1,
  events: {} }

myContract.methods.getCount().call().then(console.log)
>20 //The change of status of the smart contract is verified

// using the event emitter

myContract.methods.setCount(123).send(options_object).on('transactionHash', function(hash){console.log(hash);}).on('confirmation', function(confirmationNumber, receipt){
    console.log(confirmationNumber);
    console.log(receipt)
})

>0x264ac160ac6ffb64451f44c319d3378309c24b9bfc0caa95952f2331faf23541
0
{ blockHash: '0x2c512f2b37d002ae6705899bf8cf348b36d3e4ffa96a8b4cc2af1a325a7b6124',
  blockNumber: 18524,
  contractAddress: null,
  cumulativeGasUsed: 26643,
  from: '0x99aA0A8895817f56e03bb70FEb216F036A829AB7',
  gasUsed: 26643,
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x12bd1d9e1c332e2fd6c514ab2ea24e2783860333',
  transactionHash: '0x264ac160ac6ffb64451f44c319d3378309c24b9bfc0caa95952f2331faf23541',
  transactionIndex: 0,
  events: {} }
1
{ blockHash: '0x2c512f2b37d002ae6705899bf8cf348b36d3e4ffa96a8b4cc2af1a325a7b6124',
  blockNumber: 18524,
  contractAddress: null,
  cumulativeGasUsed: 26643,
  from: '0x99aA0A8895817f56e03bb70FEb216F036A829AB7',
  gasUsed: 26643,
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x12bd1d9e1c332e2fd6c514ab2ea24e2783860333',
  transactionHash: '0x264ac160ac6ffb64451f44c319d3378309c24b9bfc0caa95952f2331faf23541',
  transactionIndex: 0,
  events: {} }
2
{ blockHash: '0x2c512f2b37d002ae6705899bf8cf348b36d3e4ffa96a8b4cc2af1a325a7b6124',
  blockNumber: 18524,
  contractAddress: null,
  cumulativeGasUsed: 26643,
  from: '0x99aA0A8895817f56e03bb70FEb216F036A829AB7',
  gasUsed: 26643,
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x12bd1d9e1c332e2fd6c514ab2ea24e2783860333',
  transactionHash: '0x264ac160ac6ffb64451f44c319d3378309c24b9bfc0caa95952f2331faf23541',
  transactionIndex: 0,
  events: {} }
3
{ blockHash: '0x2c512f2b37d002ae6705899bf8cf348b36d3e4ffa96a8b4cc2af1a325a7b6124',
  blockNumber: 18524,
  contractAddress: null,
  cumulativeGasUsed: 26643,
  from: '0x99aA0A8895817f56e03bb70FEb216F036A829AB7',
  gasUsed: 26643,
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x12bd1d9e1c332e2fd6c514ab2ea24e2783860333',
  transactionHash: '0x264ac160ac6ffb64451f44c319d3378309c24b9bfc0caa95952f2331faf23541',
  transactionIndex: 0,
  events: {} }
// is fired for every confirmation up to the 24th confirmation.
```



#### methods.myMethod.estimateGas


###### myContract.methods.myMethod([param1[, param2[, ...]]]).estimateGas(options[, callback])


Will estimate the gas a method execution will take when executed in the EVM without. The estimation can differ from the actual gas used when later sending a transaction, as the state of the smart contract can be different at that time.


##### Parameters


1. options - Object (optional): The options used for calling.
    * from - String (optional): The address the call “transaction” should be made from.
    * gas - Number (optional): The maximum gas provided for this call “transaction” (gas limit). Setting a specific value helps to detect out of gas errors. If all gas is used it will return the same number.
    * value - [``](https://web3js.readthedocs.io/en/v1.2.6/web3-eth-contract.html#id39)Number|String|BN|BigNumber``(optional): The value transferred for the call “transaction” in wei.
2. callback - Function (optional): This callback will be fired with the result of the gas estimation as the second argument, or with an error object as the first argument


##### Returns

Promise returns Number: The gas amount estimated.


##### Example


```
// After Smart Contract Instance (See methods.myMethod.call example)
// using the callback

myContract.methods.setCount(88).estimateGas({gas: 500}, function(error, gasAmount){    if(gasAmount 500)
        console.log('Method ran out of gas');
    console.log('Gas estimation: ' + gasAmount+ ' Wei');
});

Method ran out of gas
Gas estimation: 26643 Wei

// using the promise

myContract.methods.increaseCount().estimateGas({from: '0x8978e517c2b442264e54b890c4428816b66aaf8b'}).then(function(gasAmount){
    console.log('Gas estimation: ' + gasAmount+ ' Wei');
}).catch(function(error){console.log(error)});
>Gas estimation: 26635 Wei
```



#### methods.myMethod.encodeABI


###### myContract.methods.myMethod([param1[, param2[, ...]]]).encodeABI()


Encodes the ABI for this method. This can be used to send a transaction, call a method, or pass it into another smart contracts method as arguments.


##### Parameters

none


##### Returns

String: The encoded ABI byte code to send via a transaction or call.


##### Example


```
// After Smart Contract Instance (See methods.myMethod.call example)

myContract.methods.increaseCount().encodeABI();
'0xabd1b73d'

myContract.methods.getNumber().encodeABI();
>'0xf2c9ecd8'

myContract.methods.getCount().encodeABI();
>'0xa87d942c'
```



### = Events =


#### events[^11]


###### myContract.events.MyEvent([options][, callback])


Subscribe to an event


##### Parameters


1. options - Object (optional): The options used for deployment.
    * filter - Object (optional): Let you filter events by indexed parameters, e.g. {filter: {myNumber: [12,13]}} means all events where “myNumber” is 12 or 13.
    * fromBlock - Number|String|BN|BigNumber (optional): The block number (greater than or equal to) from which to get events on. Pre-defined block numbers as "latest", "earlist", "pending", and "genesis" can also be used.
    * topics - Array (optional): This allows to manually set the topics for the event filter. If given the filter property and event signature, (topic[0]) will not be set automatically.
2. callback - Function (optional): This callback will be fired for each event as the second argument, or an error as the first argument.


##### Returns

EventEmitter: The event emitter has the following events:


* "data" returns Object: Fires on each incoming event with the event object as argument.
* "changed" returns Object: Fires on each event which was removed from the blockchain. The event will have the additional property "removed: true".
* "error" returns Object: Fires when an error in the subscription occurs.
* "connected" returns String: Fires once after the subscription successfully connected. Returns the subscription id.

The structure of the returned event Object looks as follows:


* event - String: The event name.
* signature - String|Null: The event signature, null if it’s an anonymous event.
* address - String: Address this event originated from.
* returnValues - Object: The return values coming from the event, e.g. {myVar: 1, myVar2: '0x234...'}.
* logIndex - Number: Integer of the event index position in the block.
* transactionIndex - Number: Integer of the transaction’s index position the event was created in.
* transactionHash 32 Bytes - String: Hash of the transaction this event was created in.
* blockHash 32 Bytes - String: Hash of the block this event was created in. null when it’s still pending.
* blockNumber - Number: The block number this log was created in. null when still pending.
* raw.data - String: The data containing non-indexed log parameter.
* raw.topics - Array: An array with max 4 32 Byte topics, topic 1-3 contains indexed parameters of the event.


##### Example


```
myContract.events.adduintevent({
    fromBlock: 0,
    topics: [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
        '0x0000000000000000000000000000000000000000000000000000000000000c80' ] 
}, function(error, event){ console.log(event);console.log(error)}).on("connected", function(subscriptionId){
    console.log(subscriptionId);
})


// event output example

>0x747b344dea9a60ae78ea531adb5e64e5
{ address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
  blockNumber: 33001,
  transactionHash: '0xaf4e19df1d3f3da2cb48a3f08eaf69c9cf8e43fae246445d4cd4e0ec076e2bf0',
  transactionIndex: 1,
  blockHash: '0x41694c009ef703793bb872d0e0e323267482602cc1b19509d3717799c4fdaf6d',
  logIndex: 1,
  removed: false,
  id: 'log_abfaf125',
  returnValues: Result { '0': '3200', '1': '3210', p_data: '3200', p_sum: '3210' },
  event: 'adduintevent',
  signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
  raw: 
   { data: '0x0000000000000000000000000000000000000000000000000000000000000c8a',
     topics: 
      [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
        '0x0000000000000000000000000000000000000000000000000000000000000c80' ] } }
null
{ address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
  blockNumber: 33002,
  transactionHash: '0xd9066e3e974c51d1816ab54261cdb8157b3935c7069368e297fd151ce0b95b8c',
  transactionIndex: 2,
  blockHash: '0x09c8b1921e446103737d57563458788a42657b1b55757e7866093162816464a8',
  logIndex: 2,
  removed: false,
  id: 'log_31b63dcb',
  returnValues: Result { '0': '3200', '1': '3210', p_data: '3200', p_sum: '3210' },
  event: 'adduintevent',
  signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
  raw: 
   { data: '0x0000000000000000000000000000000000000000000000000000000000000c8a',
     topics: 
      [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
        '0x0000000000000000000000000000000000000000000000000000000000000c80' ] } }
null
{ address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
  blockNumber: 33003,
  transactionHash: '0x6a097e0c7e3398296c0170effd79440e4d6a1a8087286831b4e7fc19a90df0a7',
  transactionIndex: 0,
  blockHash: '0x09f0e34699b83fba99feba522d3e419eb19d602256314cfb2768a5803a2f1628',
  logIndex: 0,
  removed: false,
  id: 'log_c15e384b',
  returnValues: Result { '0': '3200', '1': '3210', p_data: '3200', p_sum: '3210' },
  event: 'adduintevent',
  signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
  raw: 
   { data: '0x0000000000000000000000000000000000000000000000000000000000000c8a',
     topics: 
      [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
        '0x0000000000000000000000000000000000000000000000000000000000000c80' ] } }
null
{ address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
  blockNumber: 33011,
  transactionHash: '0x5672e5b484d9de663fb4df1d9feee41120b5d03e9e6d4ed7ec2ac8bc2393ff2a',
  transactionIndex: 1,
  blockHash: '0x0f215443b262b633b5a669d67dc707980609a27956fabf0713db9010f343ec1f',
  logIndex: 0,
  removed: false,
  id: 'log_fa6e62d9',
  returnValues: Result { '0': '3200', '1': '3210', p_data: '3200', p_sum: '3210' },
  event: 'adduintevent',
  signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
  raw: 
   { data: '0x0000000000000000000000000000000000000000000000000000000000000c8a',
     topics: 
      [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
        '0x0000000000000000000000000000000000000000000000000000000000000c80' ] } }
null
{ address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
  blockNumber: 33022,
  transactionHash: '0x5256f6293d00245225c5c8e0e3ddf0d3c52c2aa5e9a5f86756d05ec879246850',
  transactionIndex: 0,
  blockHash: '0x3ebd588b2bf4d9121e82c6951f15b7d52e9595fdc0cec50d35de0434f6dd635e',
  logIndex: 0,
  removed: false,
  id: 'log_5bb55088',
  returnValues: Result { '0': '3200', '1': '3210', p_data: '3200', p_sum: '3210' },
  event: 'adduintevent',
  signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
  raw: 
   { data: '0x0000000000000000000000000000000000000000000000000000000000000c8a',
     topics: 
      [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
        '0x0000000000000000000000000000000000000000000000000000000000000c80' ] } }
null
//After generating a transaction in the smart contract, related to the event subscribed

myContract.methods.adduint(32).send({from: '0x8978e517c2b442264e54b890c4428816b66aaf8b', gas: 145000})
//It does not generate a reception of information because it is not related to the topics field in the subscription

myContract.methods.adduint(3200).send({from: '0x8978e517c2b442264e54b890c4428816b66aaf8b', gas: 145000})
//The following is received, since this transaction is related to the subscription
>{ address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
  blockNumber: 33032,
  transactionHash: '0x785fd983d1354b7d1a5e0611e5d1ed3c6a9425efcccf700ec7904574fb766290',
  transactionIndex: 1,
  blockHash: '0x3df8ccbc85f9e692beb90da5681a7821a76ed98c0170163dd83d06cef95c5d3a',
  logIndex: 0,
  removed: false,
  id: 'log_48afeb43',
  returnValues: Result { '0': '3200', '1': '3210', p_data: '3200', p_sum: '3210' },
  event: 'adduintevent',
  signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
  raw: 
   { data: '0x0000000000000000000000000000000000000000000000000000000000000c8a',
     topics: 
      [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
        '0x0000000000000000000000000000000000000000000000000000000000000c80' ] } }
null
```

#### events.allEvents


###### myContract.events.allEvents([options][, callback])


Same as events but receives all events from this smart contract. Optionally the filter property can filter those events.


#### once[^12]


###### myContract.once(event[, options], callback)

Subscribes to an event and unsubscribes immediately after the first event or error. Will only fire for a single event.


##### Parameters


1. event - String: The name of the event in the contract, or "allEvents" to get all events.
2. options - Object (optional): The options used for deployment.
    * filter - Object (optional): Lets you filter events by indexed parameters, e.g. {filter: {myNumber: [12,13]}} means all events where “myNumber” is 12 or 13.
    * topics - Array (optional): This allows you to manually set the topics for the event filter. If given the filter property and event signature, (topic[0]) will not be set automatically.
3. callback - Function: This callback will be fired for the first event as the second argument, or an error as the first argument. See getPastEvents return values for details about the event structure


##### Returns

undefined


##### Example


```
myContract.once('MyEvent', {
    filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 0
}, function(error, event){ console.log(event); });

// event output example
{
    returnValues: {

        myIndexedParam: 20,
        myOtherIndexedParam: '0x123456789...',
        myNonIndexParam: 'My String'
    },

    raw: {
        data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
        topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
    },
    event: 'MyEvent',
    signature: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
    logIndex: 0,
    transactionIndex: 0,
    transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
    blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
    blockNumber: 1234,
    address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
}

//Example
myContract.once('adduintevent', function(error, event){ console.log(error); console.log(event); })

//After the event has been generated through a transaction with the contract:
null
{ address: '0x5b3977cE85f1B53406fEF5C5b5fE2859E13F3B1B',
  blockNumber: 33003,
  transactionHash: '0x6a097e0c7e3398296c0170effd79440e4d6a1a8087286831b4e7fc19a90df0a7',
  transactionIndex: 0,
  blockHash: '0x09f0e34699b83fba99feba522d3e419eb19d602256314cfb2768a5803a2f1628',
  logIndex: 0,
  removed: false,
  id: 'log_c15e384b',
  returnValues: Result { '0': '3200', '1': '3210', p_data: '3200', p_sum: '3210' },
  event: 'adduintevent',
  signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
  raw: 
   { data: '0x0000000000000000000000000000000000000000000000000000000000000c8a',
     topics: 
      [ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
        '0x0000000000000000000000000000000000000000000000000000000000000c80' ] } }
```



#### getPastEvents


###### myContract.getPastEvents(event[, options][, callback])


Gets past events for this contract.


##### Parameters


1. event - String: The name of the event in the contract, or "allEvents" to get all events.
2. options - Object (optional): The options used for deployment.
    * filter - Object (optional): Lets you filter events by indexed parameters, e.g. {filter: {myNumber: [12,13]}} means all events where “myNumber” is 12 or 13.
    * fromBlock - Number|String|BN|BigNumber (optional): The block number (greater than or equal to) from which to get events on. Pre-defined block numbers as "latest", "earlist", "pending", and "genesis" can also be used.
    * toBlock - Number|String|BN|BigNumber (optional): The block number (less than or equal to) to get events up to (Defaults to "latest"). Pre-defined block numbers as "latest", "earlist", "pending", and "genesis" can also be used.
    * topics - Array (optional): This allows manually setting the topics for the event filter. If given the filter property and event signature, (topic[0]) will not be set automatically.
3. callback - Function (optional): This callback will be fired with an array of event logs as the second argument, or an error as the first argument.


##### Returns

Promise returns Array: An array with the past event Objects, matching the given event name and filter.

For the structure of a returned event Object see events return values.


##### Example


```
myContract.getPastEvents('adduintevent', {
    fromBlock: 0,
    toBlock: 'latest'
}, function(error, events){ console.log(events);console.log(error); })

[ { address: '0x9361E46103f3a93757cB9Dc52ba9d5B186866A16',
    blockNumber: 121106,
    transactionHash: '0x42bd205862631e9de1a917dea8eb567e3fa54a857387b1e58db27d77a28d7bf7',
    transactionIndex: 0,
    blockHash: '0x72836b7e1fe1e12a3ea818497fb5a0fee669c391a407793d179ebd650ef72cda',
    logIndex: 0,
    removed: false,
    id: 'log_4890e140',
    returnValues: Result { '0': '200', '1': '210', p_data: '200', p_sum: '210' },
    event: 'adduintevent',
    signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
    raw: 
     { data: '0x00000000000000000000000000000000000000000000000000000000000000d2',
       topics: [Array] } },
  { address: '0x9361E46103f3a93757cB9Dc52ba9d5B186866A16',
    blockNumber: 121114,
    transactionHash: '0x55f92ee72a8963ba144616d78ad6a19bf7f08862ae66b5c10f2dc694bc661f92',
    transactionIndex: 0,
    blockHash: '0x376e73a51cefe9efc76f28530c0866c402d0285ccc6d624d61a293d2ad9a6a9d',
    logIndex: 0,
    removed: false,
    id: 'log_26ad047b',
    returnValues: Result { '0': '200', '1': '210', p_data: '200', p_sum: '210' },
    event: 'adduintevent',
    signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
    raw: 
     { data: '0x00000000000000000000000000000000000000000000000000000000000000d2',
       topics: [Array] } },
  { address: '0x9361E46103f3a93757cB9Dc52ba9d5B186866A16',
    blockNumber: 121145,
    transactionHash: '0x0157402682b1107954060c45143613b73420e8499a20dd0fc94bcf3979555a7f',
    transactionIndex: 0,
    blockHash: '0x3790bb52aa68213470cbc63911d1a4d3320002d502a808966161f39028ba4601',
    logIndex: 0,
    removed: false,
    id: 'log_4781bae2',
    returnValues: Result { '0': '14', '1': '24', p_data: '14', p_sum: '24' },
    event: 'adduintevent',
    signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
    raw: 
     { data: '0x0000000000000000000000000000000000000000000000000000000000000018',
       topics: [Array] } },
  { address: '0x9361E46103f3a93757cB9Dc52ba9d5B186866A16',
    blockNumber: 121151,
    transactionHash: '0xe1b218cdee73221714e60679735fd819ef2b4f3c963d39555a696f22b20e2e36',
    transactionIndex: 0,
    blockHash: '0x8f89c1d3d13d4182ecc1cdd3a9b9fbc6193ad8d65e7c3f00c1a694c9703fe736',
    logIndex: 0,
    removed: false,
    id: 'log_9e8bdaf9',
    returnValues: Result { '0': '200', '1': '210', p_data: '200', p_sum: '210' },
    event: 'adduintevent',
    signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
    raw: 
     { data: '0x00000000000000000000000000000000000000000000000000000000000000d2',
       topics: [Array] } },
  { address: '0x9361E46103f3a93757cB9Dc52ba9d5B186866A16',
    blockNumber: 127179,
    transactionHash: '0x24f95fb2a5619bfb42a4c68fbf67c2cbd4e7deb8460303500d59390867d1d467',
    transactionIndex: 1,
    blockHash: '0x9bdcdfd6dd65fa0f612208609edfcda0c3450b6b63c683e7b7a5d95922c7fdc4',
    logIndex: 0,
    removed: false,
    id: 'log_9b11623c',
    returnValues: Result { '0': '286', '1': '296', p_data: '286', p_sum: '296' },
    event: 'adduintevent',
    signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
    raw: 
     { data: '0x0000000000000000000000000000000000000000000000000000000000000128',
       topics: [Array] } },
  { address: '0x9361E46103f3a93757cB9Dc52ba9d5B186866A16',
    blockNumber: 127183,
    transactionHash: '0x0f39f5963ed045f8b5eb44381ff6b86c145afd3de7b2dce38f1fb64d1aaa54e1',
    transactionIndex: 0,
    blockHash: '0x83cb85c3af8a75a8aa014ced4bbf2ab82bec7fbcae540fca2ae5b433e5d6dc98',
    logIndex: 0,
    removed: false,
    id: 'log_2421ec8e',
    returnValues: Result { '0': '286', '1': '296', p_data: '286', p_sum: '296' },
    event: 'adduintevent',
    signature: '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
    raw: 
     { data: '0x0000000000000000000000000000000000000000000000000000000000000128',
       topics: [Array] } } ]
null
```


### web3.nrg.accounts

The web3.nrg.accounts contains functions to generate Energi accounts and sign transactions and data.

**Note:** This package has NOT been audited and might potentially be unsafe. Take precautions to clear memory properly, store the private keys safely, and test transaction receiving and sending functionality properly before using in production!


#### create


###### web3.nrg.accounts.create([entropy]);


Generates an account object with private key and public key.


##### Parameters

entropy - String (optional): A random string to increase entropy. If given it should be at least 32 characters. If none is given a random string will be generated using randomhex.


##### Returns

Object - The account object with the following structure:



* address - string: The account address.
* privateKey - string: The accounts private key. This should never be shared or stored unencrypted in localstorage! Also make sure to null the memory after usage.
* signTransaction(tx [, callback]) - Function: The function to sign transactions. See web3.nrg.accounts.signTransaction() for more.
* sign(data) - Function: The function to sign transactions. See web3.nrg.accounts.sign() for more.


##### Example


```
web3.nrg.accounts.create();
>{ address: '0x99aA0A8895817f56e03bb70FEb216F036A829AB7',
  privateKey: '0xc690d9044fd71dbd318fc10fc0009a1815dc8c8320bde744bd7f9a4a6189b337',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt] }

web3.nrg.accounts.create('2435@#@#@±±±±!!!!678543213456764321§34567543213456785432134567');

>{ address: '0x40F0A4F63a8Ed3Ad7EE776cE17c3D752Ce43805d',
  privateKey: '0xd6f34e165a1477bc097357431a82637feab6490c4517e244db69e6eb25874174',

  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt] }

 web3.nrg.accounts.create(web3.utils.randomHex(32));
>{ address: '0x9001494905dfC4B1b5Bd52471FBE6Bb6cF00D094',
  privateKey: '0x3a2fe35fb9896ba478e3163ad080a885bb9db19f73dd477b55e763ffb5a3c519',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt] }
```


#### privateKeyToAccount


###### web3.nrg.accounts.privateKeyToAccount(privateKey);


Creates an account object from a private key.


##### Parameters

privateKey - String: The private key to convert.


##### Returns

The account object has the same structure generated in web3.nrg.accounts.create.


##### Example


```
web3.nrg.accounts.privateKeyToAccount('0xc690d9044fd71dbd318fc10fc0009a1815dc8c8320bde744bd7f9a4a6189b337');
>{ address: '0x99aA0A8895817f56e03bb70FEb216F036A829AB7',
  privateKey: '0xc690d9044fd71dbd318fc10fc0009a1815dc8c8320bde744bd7f9a4a6189b337',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt] }
```



#### signTransaction


###### web3.nrg.accounts.signTransaction(tx, privateKey [, callback]);


Signs an Energi transaction with a given private key.


##### Parameters



1. tx - Object: The transaction object as follows:
    * nonce - String: (optional) The nonce to use when signing this transaction. Default will use web3.nrg.getTransactionCount().
    * chainId - String: (optional) The chain id to use when signing this transaction. Default will use web3.nrg.net.getId().
    * to - String: (optional) The receiver of the transaction, can be empty when deploying a contract.
    * data - String: (optional) The call data of the transaction, can be empty for simple value transfers.
    * value - String: (optional) The value of the transaction in wei.
    * gasPrice - String: (optional) The gas price set by this transaction, if empty, it will use web3.nrg.gasPrice()
    * gas - String: The gas provided by the transaction.
    * chain - String: (optional) Defaults to mainnet.
    * hardfork - String: (optional) Defaults to petersburg.
    * common - Object: (optional) The common object
        * customChain - Object: The custom chain properties
            * name - string: (optional) The name of the chain
            * networkId - number: Network ID of the custom chain
            * chainId - number: Chain ID of the custom chain
        * baseChain - string: (optional) mainnet, goerli, kovan, rinkeby, or ropsten
        * hardfork - string: (optional) chainstart, homestead, dao, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, or istanbul
2. privateKey - String: The private key to sign with.
3. callback - Function: (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returning Object: The signed data RLP encoded transaction, or if returnSignature is true the signature values as follows:



* messageHash - String: The hash of the given message.
* r - String: First 32 bytes of the signature
* s - String: Next 32 bytes of the signature
* v - String: Recovery value + 27
* rawTransaction - String: The RLP encoded transaction, ready to be send using web3.nrg.sendSignedTransaction.
* transactionHash - String: The transaction hash for the RLP encoded transaction.


##### Example


```
web3.nrg.accounts.signTransaction({to: '0xa229362a827aa052babc8989d5fc2dc669e18f81', value: web3.utils.toWei('0.1', "nrg"), gas: 2000000}, '0xc690d9044fd71dbd318fc10fc0009a1815dc8c8320bde744bd7f9a4a6189b337').then(console.log);
{ messageHash: '0x5bf494e3009ca29fd3ade865b622690e99e4ae26a8a51b8af33b2418e0a9eb76',
  v: '0x01852d',
  r: '0x5c360d0c074857629f70e88f2af67f3ad416ca6be927fcb9998946a8bff8d8b6',
  s: '0x1ffb5f3b1d10f1fe0ad46228ef8cdcd0b44bab4e517248065d19ed99e25245e2',
  rawTransaction: '0xf870808502540be400831e848094a229362a827aa052babc8989d5fc2dc669e18f8188016345785d8a0000808301852da05c360d0c074857629f70e88f2af67f3ad416ca6be927fcb9998946a8bff8d8b6a01ffb5f3b1d10f1fe0ad46228ef8cdcd0b44bab4e517248065d19ed99e25245e2',
  transactionHash: '0x475305711c2bb05d9e0826d9fab15c217ebc08eca22b6dc14d89b1a57f631e17' }
```



#### recoverTransaction


###### web3.nrg.accounts.recoverTransaction(rawTransaction);


Recovers the Energi address which was used to sign the given RLP encoded transaction.


##### Parameters

signature - String: The RLP encoded transaction.


##### Returns

String: The Energi address used to sign this transaction.


##### Example


```
web3.nrg.accounts.recoverTransaction('0xf870808502540be400831e848094a229362a827aa052babc8989d5fc2dc669e18f8188016345785d8a0000808301852da05c360d0c074857629f70e88f2af67f3ad416ca6be927fcb9998946a8bff8d8b6a01ffb5f3b1d10f1fe0ad46228ef8cdcd0b44bab4e517248065d19ed99e25245e2');
>'0x99aA0A8895817f56e03bb70FEb216F036A829AB7'
```



#### hashMessage


###### web3.nrg.accounts.hashMessage(message);


Hashes the given message to be passed web3.nrg.accounts.recover() function. The data will be UTF-8 HEX decoded and enveloped as follows: "\x19Energi Signed Message:\n" + message.length + message and hashed using keccak256.


##### Parameters

message - String: A message to hash, if its HEX it will be UTF8 decoded before.


##### Returns

String: The hashed message


##### Example


```
web3.nrg.accounts.hashMessage("Hello World")
"0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2"

// the below results in the same hash
web3.nrg.accounts.hashMessage(web3.utils.utf8ToHex("Hello World"))
"0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2"
```



#### sign


###### web3.nrg.accounts.sign(data, privateKey);


Signs arbitrary data.


##### Parameters


1. data - String: The data to sign.
2. privateKey - String: The private key to sign with.

**Note:** The value passed as the data parameter will be UTF-8 HEX decoded and wrapped as follows: "\x19Energi Signed Message:\n" + message.length + message.


##### Returns

Object: The signature object



* message - String: The the given message.
* messageHash - String: The hash of the given message.
* r - String: First 32 bytes of the signature
* s - String: Next 32 bytes of the signature
* v - String: Recovery value + 27


##### Example


```
web3.nrg.accounts.sign('Energi 3.0', '0xc690d9044fd71dbd318fc10fc0009a1815dc8c8320bde744bd7f9a4a6189b337');
>{ message: 'Energi 3.0',
  messageHash: '0x000533ccd79606d47cf74c15fe30c63c9da954027094c0d6589f5fb3135b59f8',
  v: '0x1c',

  r: '0x05cebb38614ca0f1e97a9d9b4ddc81673c72ff83d304a9ef0b760df30586f01e',
  s: '0x4f271f5e27dc32f99ed0d09bd9678468416a89cc7472decce6afe66f5e81dc89',
  signature: 
'0x05cebb38614ca0f1e97a9d9b4ddc81673c72ff83d304a9ef0b760df30586f01e4f271f5e27dc32f99ed0d09bd9678468416a89cc7472decce6afe66f5e81dc891c' }
```


#### recover


###### web3.nrg.accounts.recover(signatureObject);


###### web3.nrg.accounts.recover(message, signature [, preFixed]);


###### web3.nrg.accounts.recover(message, v, r, s [, preFixed]);


Recovers the Energi address which was used to sign the given data.


##### Parameters



1. message|signatureObject - String|Object: Either signed message or hash, or the signature object as following values:
    * messageHash - String: The hash of the given message already prefixed with "\x19Energi Signed Message:\n" + message.length + message.
    * r - String: First 32 bytes of the signature
    * s - String: Next 32 bytes of the signature
    * v - String: Recovery value + 27
2. signature - String: The raw RLP encoded signature, OR parameter 2-4 as v, r, s values.
3. preFixed - Boolean (optional, default: false): If the last parameter is true, the given message will NOT automatically be prefixed with "\x19Energi Signed Message:\n" + message.length + message, and assumed to be already prefixed.


##### Returns

String: The Energi address used to sign this data.


##### Example


```
web3.nrg.accounts.recover({messageHash: '0x000533ccd79606d47cf74c15fe30c63c9da954027094c0d6589f5fb3135b59f8', 
v: '0x1c', 
r: '0x05cebb38614ca0f1e97a9d9b4ddc81673c72ff83d304a9ef0b760df30586f01e', 
s: '0x4f271f5e27dc32f99ed0d09bd9678468416a89cc7472decce6afe66f5e81dc89'
})

>'0x99aA0A8895817f56e03bb70FEb216F036A829AB7'

// message, signature
web3.nrg.accounts.recover('Energi 3.0', '0x05cebb38614ca0f1e97a9d9b4ddc81673c72ff83d304a9ef0b760df30586f01e4f271f5e27dc32f99ed0d09bd9678468416a89cc7472decce6afe66f5e81dc891c');
>'0x99aA0A8895817f56e03bb70FEb216F036A829AB7'

// message, v, r, s
web3.nrg.accounts.recover('Energi 3.0', '0x1c', '0x05cebb38614ca0f1e97a9d9b4ddc81673c72ff83d304a9ef0b760df30586f01e', '0x4f271f5e27dc32f99ed0d09bd9678468416a89cc7472decce6afe66f5e81dc89');
>'0x99aA0A8895817f56e03bb70FEb216F036A829AB7'
```



#### encrypt


###### web3.nrg.accounts.encrypt(privateKey, password);


Encrypts a private key to the web3 keystore v3 standard.


##### Parameters


1. privateKey - String: The private key to encrypt.
2. password - String: The password used for encryption.


##### Returns

Object: The encrypted keystore v3 JSON.


##### Example


```
web3.nrg.accounts.encrypt('0xc690d9044fd71dbd318fc10fc0009a1815dc8c8320bde744bd7f9a4a6189b337', 'test.0')
>{ version: 3,
  id: 'd6b5192f-ea25-4a6b-9677-e07073830b95',
  address: '99aa0a8895817f56e03bb70feb216f036a829ab7',
  crypto: 
   { ciphertext: 'f3ad6cf7b7ac9ed21ef722512963631f058f64338a76b1c2c04358075cd54b56',
     cipherparams: { iv: 'ef5222f74f1e5b3dcd68270892d8889a' },
     cipher: 'aes-128-ctr',
     kdf: 'scrypt',
     kdfparams: 
      { dklen: 32,
        salt: '3ed0f7e30c196abb11d39995480e60702bd594926d9bf09ea66cf09c61233ddf',
        n: 8192,
        r: 8,
        p: 1 },
     mac: 'd99a00c68897be81dc7432a4986e179abd6a29f59e7a9a95f863c1d12f8c71d3' } }
```



#### decrypt


###### web3.nrg.accounts.decrypt(keystoreJsonV3, password);


Decrypts a keystore v3 JSON, and creates the account.


##### Parameters


1. encryptedPrivateKey - String: The encrypted private key to decrypt.
2. password - String: The password used for encryption.


##### Returns

Object: The decrypted account.


##### Example


```
web3.nrg.accounts.decrypt({ version: 3,
    id: 'd6b5192f-ea25-4a6b-9677-e07073830b95',
    address: '99aa0a8895817f56e03bb70feb216f036a829ab7',
    crypto: 
     { ciphertext: 'f3ad6cf7b7ac9ed21ef722512963631f058f64338a76b1c2c04358075cd54b56',
       cipherparams: { iv: 'ef5222f74f1e5b3dcd68270892d8889a' },
       cipher: 'aes-128-ctr',
       kdf: 'scrypt',
       kdfparams: 
        { dklen: 32,
          salt: '3ed0f7e30c196abb11d39995480e60702bd594926d9bf09ea66cf09c61233ddf',
          n: 8192,
          r: 8,
          p: 1 },
       mac: 'd99a00c68897be81dc7432a4986e179abd6a29f59e7a9a95f863c1d12f8c71d3' } }
       , 'test.0');
>{ address: '0x99aA0A8895817f56e03bb70FEb216F036A829AB7',
  privateKey: '0xc690d9044fd71dbd318fc10fc0009a1815dc8c8320bde744bd7f9a4a6189b337',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt] }
```



#### wallet


###### web3.nrg.accounts.wallet;


Contains an in memory wallet with multiple accounts. These accounts can be used when using web3.nrg.sendTransaction().


##### Example


```
web3.nrg.accounts.wallet;
>Wallet {
  _accounts: 
   Accounts {
     currentProvider: [Getter/Setter],
     _requestManager: RequestManager { provider: [Object], providers: [Object], subscriptions: {} },
     givenProvider: null,
     providers: 
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] },
     _provider: 
      HttpProvider {
        withCredentials: false,
        timeout: 0,
        headers: undefined,
        agent: undefined,
        connected: true,
        host: 'http://localhost:49796',
        httpAgent: [Object] },
     setProvider: [Function],
     _ethereumCall: 
      { getNetworkId: [Object],
        getChainId: [Object],
        getGasPrice: [Object],
        getTransactionCount: [Object] },
     wallet: [Circular] },
  length: 0,
  defaultKeyName: 'web3js_wallet' }

//After creating an account with wallet.create

Wallet {
  '0': 
   { address: '0x33b8912c53A5B2be9Ed729f338b87f2bd9993FcF',
     privateKey: '0xbc12ddf8751b56d404329682539186df233d76b4701c76f6fb2395b58dac4077',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 0 },
  '1': 
   { address: '0x5Dc9b39668D904c6363A42C61297CA1C0950F849',
     privateKey: '0x8e4ae7e66e8acb973ff52cf09ffc7d96138f674a9c102e7a77780af8dbd5e4f6',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 1 },
...
}
```


#### wallet.create


###### web3.nrg.accounts.wallet.create(numberOfAccounts [, entropy]);


Generates one or more accounts in the wallet. If wallets already exist they will not be overridden.


##### Parameters


1. numberOfAccounts - Number: Number of accounts to create. Leave empty to create an empty wallet.
2. entropy - String (optional): A string with random characters as additional entropy when generating accounts. If given it should be at least 32 characters.


##### Returns

Object: The wallet object.


##### Example


```
web3.nrg.accounts.wallet.create(2, '54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534');

>Wallet {
  '0': 
   { address: '0x33b8912c53A5B2be9Ed729f338b87f2bd9993FcF',
     privateKey: '0xbc12ddf8751b56d404329682539186df233d76b4701c76f6fb2395b58dac4077',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 0 },
 '1': 
   { address: '0x5Dc9b39668D904c6363A42C61297CA1C0950F849',
     privateKey: '0x8e4ae7e66e8acb973ff52cf09ffc7d96138f674a9c102e7a77780af8dbd5e4f6',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 1 },
  _accounts: 
   Accounts {
     currentProvider: [Getter/Setter],
     _requestManager: RequestManager { provider: [Object], providers: [Object], subscriptions: {} },
     givenProvider: null,
     providers: 
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] },
     _provider: 
      HttpProvider {
        withCredentials: false,
        timeout: 0,
        headers: undefined,
        agent: undefined,
        connected: true,
        host: 'http://localhost:49796',
        httpAgent: [Object] },
     setProvider: [Function],
     _ethereumCall: 
      { getNetworkId: [Object],
        getChainId: [Object],
        getGasPrice: [Object],
        getTransactionCount: [Object] },
     wallet: [Circular] },
  length: 2,
  defaultKeyName: 'web3js_wallet',
  '0x33b8912c53A5B2be9Ed729f338b87f2bd9993FcF': 
   { address: '0x33b8912c53A5B2be9Ed729f338b87f2bd9993FcF',
     privateKey: '0xbc12ddf8751b56d404329682539186df233d76b4701c76f6fb2395b58dac4077',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 0 },
  '0x33b8912c53a5b2be9ed729f338b87f2bd9993fcf': 
   { address: '0x33b8912c53A5B2be9Ed729f338b87f2bd9993FcF',
     privateKey: '0xbc12ddf8751b56d404329682539186df233d76b4701c76f6fb2395b58dac4077',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 0 },
  '0x5Dc9b39668D904c6363A42C61297CA1C0950F849': 
   { address: '0x5Dc9b39668D904c6363A42C61297CA1C0950F849',
     privateKey: '0x8e4ae7e66e8acb973ff52cf09ffc7d96138f674a9c102e7a77780af8dbd5e4f6',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 1 },
  '0x5dc9b39668d904c6363a42c61297ca1c0950f849': 
   { address: '0x5Dc9b39668D904c6363A42C61297CA1C0950F849',
     privateKey: '0x8e4ae7e66e8acb973ff52cf09ffc7d96138f674a9c102e7a77780af8dbd5e4f6',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 1 } }
```


#### wallet.add


###### web3.nrg.accounts.wallet.add(account);


Adds an account using a private key or account object to the wallet.


##### Parameters

account - String|Object: A private key or account object created with web3.nrg.accounts.create().


##### Returns

Object: The added account.


##### Example


```
web3.nrg.accounts.wallet.add('0x3a2fe35fb9896ba478e3163ad080a885bb9db19f73dd477b55e763ffb5a3c519');
>{ address: '0x9001494905dfC4B1b5Bd52471FBE6Bb6cF00D094',
  privateKey: '0x3a2fe35fb9896ba478e3163ad080a885bb9db19f73dd477b55e763ffb5a3c519',
  signTransaction: [Function: signTransaction],

  sign: [Function: sign],
  encrypt: [Function: encrypt],
  index: 2 }

//It is verified that the account has been added to the wallet.

web3.nrg.accounts.wallet

>Wallet {
  '0': 
   { address: '0x33b8912c53A5B2be9Ed729f338b87f2bd9993FcF',
     privateKey: '0xbc12ddf8751b56d404329682539186df233d76b4701c76f6fb2395b58dac4077',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 0 },
  '1': 
   { address: '0x5Dc9b39668D904c6363A42C61297CA1C0950F849',
     privateKey: '0x8e4ae7e66e8acb973ff52cf09ffc7d96138f674a9c102e7a77780af8dbd5e4f6',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 1 },
  '2': 
   { address: '0x9001494905dfC4B1b5Bd52471FBE6Bb6cF00D094',
     privateKey: '0x3a2fe35fb9896ba478e3163ad080a885bb9db19f73dd477b55e763ffb5a3c519',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 2 },
  _accounts: 
   Accounts {
     currentProvider: [Getter/Setter],
     _requestManager: RequestManager { provider: [Object], providers: [Object], subscriptions: {} },
     givenProvider: null,
     providers: 
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] },
     _provider: 
      HttpProvider {
        withCredentials: false,
        timeout: 0,
        headers: undefined,
        agent: undefined,
        connected: true,
        host: 'http://localhost:49796',
        httpAgent: [Object] },
     setProvider: [Function],
     _ethereumCall: 
      { getNetworkId: [Object],
        getChainId: [Object],
        getGasPrice: [Object],
        getTransactionCount: [Object] },
     wallet: [Circular] },
  length: 3,
  defaultKeyName: 'web3js_wallet',
  '0x33b8912c53A5B2be9Ed729f338b87f2bd9993FcF': 
   { address: '0x33b8912c53A5B2be9Ed729f338b87f2bd9993FcF',
     privateKey: '0xbc12ddf8751b56d404329682539186df233d76b4701c76f6fb2395b58dac4077',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 0 },
  '0x33b8912c53a5b2be9ed729f338b87f2bd9993fcf': 
   { address: '0x33b8912c53A5B2be9Ed729f338b87f2bd9993FcF',
     privateKey: '0xbc12ddf8751b56d404329682539186df233d76b4701c76f6fb2395b58dac4077',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 0 },
  '0x5Dc9b39668D904c6363A42C61297CA1C0950F849': 
   { address: '0x5Dc9b39668D904c6363A42C61297CA1C0950F849',
     privateKey: '0x8e4ae7e66e8acb973ff52cf09ffc7d96138f674a9c102e7a77780af8dbd5e4f6',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 1 },
  '0x5dc9b39668d904c6363a42c61297ca1c0950f849': 
   { address: '0x5Dc9b39668D904c6363A42C61297CA1C0950F849',
     privateKey: '0x8e4ae7e66e8acb973ff52cf09ffc7d96138f674a9c102e7a77780af8dbd5e4f6',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 1 },
  '0x9001494905dfC4B1b5Bd52471FBE6Bb6cF00D094': 
   { address: '0x9001494905dfC4B1b5Bd52471FBE6Bb6cF00D094',
     privateKey: '0x3a2fe35fb9896ba478e3163ad080a885bb9db19f73dd477b55e763ffb5a3c519',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 2 },
  '0x9001494905dfc4b1b5bd52471fbe6bb6cf00d094': 
   { address: '0x9001494905dfC4B1b5Bd52471FBE6Bb6cF00D094',
     privateKey: '0x3a2fe35fb9896ba478e3163ad080a885bb9db19f73dd477b55e763ffb5a3c519',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 2 } }
```



#### wallet.remove


###### web3.nrg.accounts.wallet.remove(account);


Removes an account from the wallet.


##### Parameters

account - String|Number: The account address, or index in the wallet.


##### Returns

Boolean: true if the wallet was removed. false if it couldn’t be found.


##### Example


```
web3.nrg.accounts.wallet
Wallet {
  '0': 
   { address: '0x33b8912c53A5B2be9Ed729f338b87f2bd9993FcF',
     privateKey: '0xbc12ddf8751b56d404329682539186df233d76b4701c76f6fb2395b58dac4077',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 0 },
  '1': 
   { address: '0x5Dc9b39668D904c6363A42C61297CA1C0950F849',
     privateKey: '0x8e4ae7e66e8acb973ff52cf09ffc7d96138f674a9c102e7a77780af8dbd5e4f6',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 1 },
  '2': 
   { address: '0x9001494905dfC4B1b5Bd52471FBE6Bb6cF00D094',
     privateKey: '0x3a2fe35fb9896ba478e3163ad080a885bb9db19f73dd477b55e763ffb5a3c519',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 2 },
    ...
}

web3.nrg.accounts.wallet.remove('0x33b8912c53A5B2be9Ed729f338b87f2bd9993FcF');
true

web3.nrg.accounts.wallet.remove(2);
true

web3.nrg.accounts.wallet
>Wallet {
  '1': 
   { address: '0x5Dc9b39668D904c6363A42C61297CA1C0950F849',
     privateKey: '0x8e4ae7e66e8acb973ff52cf09ffc7d96138f674a9c102e7a77780af8dbd5e4f6',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 1 },
...  
 }
```



#### wallet.clear


###### web3.nrg.accounts.wallet.clear();


Securely empties the wallet and removes all its accounts.


##### Parameters

none


##### Returns

Object: The wallet object.


##### Example


```
//Wallet accounts
Web3.nrg.accounts.wallet

>Wallet {
  '1': 
   { address: '0x5Dc9b39668D904c6363A42C61297CA1C0950F849',
     privateKey: '0x8e4ae7e66e8acb973ff52cf09ffc7d96138f674a9c102e7a77780af8dbd5e4f6',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 1 },
...  
 }

web3.nrg.accounts.wallet.clear();

web3.nrg.accounts.wallet

>Wallet {
  _accounts: 
   Accounts {
     currentProvider: [Getter/Setter],
     _requestManager: RequestManager { provider: [Object], providers: [Object], subscriptions: {} },
     givenProvider: null,
     providers: 
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] },
     _provider: 
      HttpProvider {
        withCredentials: false,
        timeout: 0,
        headers: undefined,
        agent: undefined,
        connected: true,
        host: 'http://localhost:49796',
        httpAgent: [Object] },
     setProvider: [Function],
     _ethereumCall: 
      { getNetworkId: [Object],
        getChainId: [Object],
        getGasPrice: [Object],
        getTransactionCount: [Object] },
     wallet: [Circular] },
  length: 0,
  defaultKeyName: 'web3js_wallet' }
```



#### wallet.encrypt


###### web3.nrg.accounts.wallet.encrypt(password);


Encrypts all wallet accounts to an array of encrypted keystore v3 objects.


##### Parameters

password - String: The password which will be used for encryption.


##### Returns

Array: The encrypted keystore v3.


##### Example


```
web3.nrg.accounts.wallet.encrypt('test_NRG_3.0');

>[ { version: 3,
    id: '110dd09a-357f-4b75-9a87-dff5edec8afb',
    address: '9001494905dfc4b1b5bd52471fbe6bb6cf00d094',
    crypto: 
     { ciphertext: 'cc6841f40db3ba52e4343487cbc3a513b4442f5011622e0794e52cb0cb4981b0',
       cipherparams: [Object],
       cipher: 'aes-128-ctr',
       kdf: 'scrypt',
       kdfparams: [Object],
       mac: '3817640ecb697cae79d8082475a80904269fe43a06ce0280f6f76e716cee0511' } } ]
```



#### wallet.decrypt


```


###### web3.nrg.accounts.wallet.decrypt(keystoreArray, password);
```


Decrypts keystore v3 objects.


##### Parameters


1. keystoreArray - Array: The encrypted keystore v3 objects to decrypt.
2. password - String: The password which will be used for encryption.


##### Returns

Object: The wallet object.


##### Example


```
web3.nrg.accounts.wallet.decrypt(
    [
    {version: 3,
        id: 'ce829951-5136-4065-923e-3a1f075aee1c',
        address: '9001494905dfc4b1b5bd52471fbe6bb6cf00d094',
        crypto: 
         { ciphertext: '098adc95f63f612a9115cd52d9e9131ec0bb5dfd02cfcfe05be5260f1807515d',
           cipherparams: [Object],
           cipher: 'aes-128-ctr',
           kdf: 'scrypt',
           kdfparams: [Object],
           mac: '0001ae778a832f8c141ede16cbf15d212c62866219da97d079a80c446e5b1c73' } }      
    ]
  , 'test_NRG_3.0');

>Wallet {
  '0': 
   { address: '0x9001494905dfC4B1b5Bd52471FBE6Bb6cF00D094',
     privateKey: '0x3a2fe35fb9896ba478e3163ad080a885bb9db19f73dd477b55e763ffb5a3c519',
     signTransaction: [Function: signTransaction],
     sign: [Function: sign],
     encrypt: [Function: encrypt],
     index: 0 },
  ...
}
```



#### wallet.save


###### web3.nrg.accounts.wallet.save(password [, keyName]);


Stores the wallet encrypted and as string in local storage.

**Note:** Browser only.


##### Parameters


1. password - String: The password to encrypt the wallet.
2. keyName - String: (optional) The key used for the local storage position, defaults to "web3js_wallet".


##### Returns

Boolean


##### Example


```
web3.nrg.accounts.wallet.save('test#!$');
>TypeError: web3.nrg.accounts.wallet.save is not a function
```



#### wallet.load


###### web3.nrg.accounts.wallet.load(password [, keyName]);

Loads a wallet from local storage and decrypts it.

**Note:** Browser only.


##### Parameters



1. password - String: The password to decrypt the wallet.
2. keyName - String: (optional) The key used for the localstorage position, defaults to "web3js_wallet".


##### Returns

Object: The wallet object.


##### Example


```
web3.nrg.accounts.wallet.load('test#!$', 'myWalletKey');
>TypeError: web3.nrg.accounts.wallet.save is not a function
```



### web3.nrg.personal

The web3-nrg-personal package allows you to interact with the Energi node’s accounts.

**Note**: Many of these functions send sensitive information, like passwords. Never call these functions over an unsecured Websocket or HTTP provider, as your password will be sent in plain text!


#### newAccount[^13]


###### web3.nrg.personal.newAccount(password, [callback])

Creates a new account.

**Note:** Never call this function over an unsecured Websocket or HTTP provider, as your password will be sent in plain text!


##### Parameters

password - String: The password to encrypt this account with.


##### Returns

Promise returns String: The address of the newly created account.


##### Example


```
web3.nrg.personal.newAccount('!@superpassword_NRG3.0').then(console.log)
0x494cA011FfA14379028A25Fad98C3a8781391f22
```



#### sign[^14]


###### web3.nrg.personal.sign(dataToSign, address, password [, callback])

The sign method calculates an Energi specific signature with:


###### sign(keccak256("\x19Energi Signed Message:\n" + dataToSign.length + dataToSign)))

Adding a prefix to the message makes the calculated signature recognisable as an Energi specific signature.

If you have the original message and the signed message, you can discover the signing account address using web3.nrg.personal.ecRecover (See example below)

**Note:** Sending your account password over an unsecured HTTP RPC connection is highly insecure.


##### Parameters


1. String - Data to sign. If String it will be converted using web3.utils.utf8ToHex.
2. String - Address to sign data with.
3. String - The password of the account to sign data with.
4. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns String - The signature.


##### Example


```
web3.nrg.personal.sign("Energi 3.0", "0x6088cbfDd6B9DE3acadb3211e4cfff0Ea3376475", "!@superpassword_NRG3.0").then(console.log);

>0xc8ba30bfc46d8db65dff4e8c8e3e2f7b2f9c5d5d2df64ea4eecaec908c0d61f60783fd7f67cf759c1051f9b227acb0db7013499a5019f2276e662594e56cc5801c
```



#### ecRecover[^15]


###### web3.nrg.personal.ecRecover(dataThatWasSigned, signature [, callback])

Recovers the account that signed the data.


##### Parameters


1. String - Data that was signed. If String it will be converted using web3.utils.utf8ToHex.
2. String - The signature.
3. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns String - The account.


##### Example


```
web3.nrg.personal.ecRecover("Energi 3.0", "0xc8ba30bfc46d8db65dff4e8c8e3e2f7b2f9c5d5d2df64ea4eecaec908c0d61f60783fd7f67cf759c1051f9b227acb0db7013499a5019f2276e662594e56cc5801c").then(console.log);

0x6088cbfdd6b9de3acadb3211e4cfff0ea3376475
```


#### signTransaction[^16]


###### web3.nrg.personal.signTransaction(transaction, password [, callback])

Signs a transaction. This account needs to be unlocked.

**Note:** Sending your account password over an unsecured HTTP RPC connection is highly insecure.


##### Parameters


1. Object - The transaction data to sign web3.nrg.sendTransaction() for more.
2. String - The password of the from account, to sign the transaction with.
3. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise returns Object - The RLP encoded transaction. The raw property can be used to send the transaction using web3.nrg.sendSignedTransaction.


##### Example


```
//This account needs to be unlocked.
web3.nrg.personal.unlockAccount("0xa229362a827aa052babc8989d5fc2dc669e18f81", 'TestNet3.0B', 30).then(console.log);

web3.nrg.signTransaction({
    from: "0xa229362a827aa052babc8989d5fc2dc669e18f81",
    gasPrice: "20000000000",
    gas: "21000",
    to: '0x8978e517c2b442264e54b890c4428816b66aaf8b',
    value: "100000000000000000000",
    data: "",
    nonce: 2
},'TestNet3.0B').then(console.log);

>{ raw: '0xf870028504a817c800825208948978e517c2b442264e54b890c4428816b66aaf8b89056bc75e2d63100000808301852da02603063060a38ec674f55c20a9ad01a135ab5e28bf6d9c3ac72907fb9cec9643a04af75b478ba07d6a19d41105efc956840bb13b0e15bd324217f147e0c4c4e5f2',
  tx: 
   { nonce: '0x2',
     gasPrice: '0x4a817c800',
     gas: '0x5208',
     to: '0x8978e517c2b442264e54b890c4428816b66aaf8b',
     value: '0x56bc75e2d63100000',
     input: '0x',
     v: '0x1852d',
     r: '0x2603063060a38ec674f55c20a9ad01a135ab5e28bf6d9c3ac72907fb9cec9643',
     s: '0x4af75b478ba07d6a19d41105efc956840bb13b0e15bd324217f147e0c4c4e5f2',
     hash: '0x21992b486ea2a6e2182932d4427ca09a0632bf644f96778f210985178d74cbe9' } }
```


#### sendTransaction[^17]


###### web3.nrg.personal.sendTransaction(transactionOptions, password [, callback])

This method sends a transaction over the management API.

**Note:** Sending your account password over an unsecured HTTP RPC connection is highly insecure.


##### Parameters


1. Object - The transaction options
2. String - The passphrase for the current account
3. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise&lt;string- The transaction hash.


##### Example


```
web3.nrg.personal.unlockAccount("0xa229362a827aa052babc8989d5fc2dc669e18f81", 'TestNet3.0B', 30).then(console.log);

web3.nrg.sendTransaction({
    from: "0xa229362a827aa052babc8989d5fc2dc669e18f81",
    gasPrice: "20000000000",
    gas: "21000",
    to: '0x8978e517c2b442264e54b890c4428816b66aaf8b',
    value: "100000000000000000000",
    data: "",
    nonce: 2
},'TestNet3.0B').then(console.log);

//After the transaction has been validated by the network
>{ blockHash: '0xf24dc4892e722c59871de3d02b5a74a4824fb0b05522e50b5eefe87c500d8c2a',
  blockNumber: 22479,
  contractAddress: null,
  cumulativeGasUsed: 152781,
  from: '0xa229362a827aa052babc8989d5fc2dc669e18f81',
  gasUsed: 21000,
  logs: [],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x8978e517c2b442264e54b890c4428816b66aaf8b',
  transactionHash: '0x21992b486ea2a6e2182932d4427ca09a0632bf644f96778f210985178d74cbe9',
  transactionIndex: 2 }
```



#### unlockAccount[^18]


###### web3.nrg.personal.unlockAccount(address, password, unlockDuraction [, callback])

Signs data using a specific account.

**Note:** Sending your account password over an unsecured HTTP RPC connection is highly insecure.


##### Parameters



1. address - String: The account address.
2. password - String - The password of the account.
3. unlockDuration - Number - The duration for the account to remain unlocked.


##### Example


```
web3.nrg.personal.unlockAccount("0xa229362a827aa052babc8989d5fc2dc669e18f81", 'TestNet3.0B', 30).then(console.log);
true
```


#### lockAccount[^19]


###### web3.nrg.personal.lockAccount(address [, callback])

Locks the given account.

**Note:** Sending your account password over an unsecured HTTP RPC connection is highly insecure.


##### Parameters

1. address - String: The account address. 

2. Function - (optional) Optional callback, returns an error object as first parameter and the result as second.


##### Returns

Promise&lt;boolean>


##### Example


```
web3.nrg.personal.lockAccount("0xa229362a827aa052babc8989d5fc2dc669e18f81").then(console.log);
>true
```


#### getAccounts[^20]


###### web3.nrg.personal.getAccounts([callback])

Returns a list of accounts the node controls by using the provider and calling the RPC method personal_listAccounts. Using web3.nrg.accounts.create() will not add accounts into this list. For that use web3.nrg.personal.newAccount().

The results are the same as web3.nrg.getAccounts() except that calls the RPC method eth_accounts.


##### Returns

Promise&lt;Array- An array of addresses controlled by node.


##### Example


```
web3.nrg.personal.getAccounts().then(console.log);

['0x8978E517c2B442264E54b890c4428816b66Aaf8B',
  '0xA229362a827aA052Babc8989D5fc2DC669e18F81',
  '0x87165EDD326419Ba6Ef378bfCf72293EC87E7D0b',
  '0x80d459999A82ABc0660838db298F78Ef5c7A6FBD',
  '0x494cA011FfA14379028A25Fad98C3a8781391f22',
  '0x6088cbfDd6B9DE3acadb3211e4cfff0Ea3376475' ]
```


#### importRawKey[^21]


###### web3.nrg.personal.importRawKey(privateKey, password)

Imports the given private key into the key store, encrypting it with the passphrase.

Returns the address of the new account.

**Note:** Sending your account password over an unsecured HTTP RPC connection is highly insecure.


##### Parameters



1. privateKey - String - An unencrypted private key (hex string).
2. password - String - The password of the account.


##### Returns

Promise&lt;string- The address of the account.


##### Example


```
web3.nrg.personal.importRawKey("8e4ae7e66e8acb973ff52cf09ffc7d96138f674a9c102e7a77780af8dbd5e4f6", '!@superpassword_NRG3.0').then(console.log)
>0x5dc9b39668d904c6363a42c61297ca1c0950f849
```


### web3.nrg.abi

The web3.nrg.abi functions let you de- and encode parameters to ABI (Application Binary Interface) for function calls to the EVM (Energi Virtual Machine).


#### encodeFunctionSignature


###### web3.nrg.abi.encodeFunctionSignature(functionName);

Encodes the function name to its ABI signature, which are the first 4 bytes of the sha3 hash of the function name including types.


##### Parameters

 functionName - String|Object: The function name to encode or the JSON interface object of the function. If string it has to be in the form function(type,type,...), e.g: myFunction(uint256,uint32[],bytes10,bytes)


##### Returns

String - The ABI signature of the function


##### Example


```
//This is another way to obtain the "data" field used in the example of the web3.nrg.call section
web3.nrg.abi.encodeFunctionSignature({
    "constant": true,
    "inputs": [],
    "name": "getNumber",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
})
'0xf2c9ecd8'

web3.nrg.abi.encodeFunctionSignature('getNumber()')
'0xf2c9ecd8'
```



#### encodeEventSignature


###### web3.nrg.abi.encodeEventSignature(eventName);

Encodes the event name to its ABI signature, which are the sha3 hash of the event name including input types.


##### Parameters

eventName - String|Object: The event name to encode. or the JSON interface object of the event. If string it has to be in the form event(type,type,...), e.g: myEvent(uint256,uint32[],bytes10,bytes)


##### Returns

String - The ABI signature of the event.


##### Example


```
//Using the event in the test contract:
web3.nrg.abi.encodeEventSignature({
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "name": "p_data",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "p_sum",
            "type": "uint256"
        }
    ],
    "name": "adduintevent",
    "type": "event"
})
>'0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e'

web3.nrg.abi.encodeEventSignature('adduintevent(uint256,uint256)')
'0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e'
```


#### encodeParameter


###### web3.nrg.abi.encodeParameter(type, parameter);

Encodes a parameter based on its type to its ABI representation.


##### Parameters


1. type - String|Object: The type of the parameter, see the [solidity documentation](http://solidity.readthedocs.io/en/develop/types.html) for a list of types.
2. parameter - Mixed: The actual parameter to encode.


##### Returns

String - The ABI encoded parameter.


##### Example


```
web3.nrg.abi.encodeParameter('uint256', '2345675643');
"0x000000000000000000000000000000000000000000000000000000008bd02b7b"

web3.nrg.abi.encodeParameter('uint256', '2345675643');
"0x000000000000000000000000000000000000000000000000000000008bd02b7b"
web3.nrg.abi.encodeParameter('bytes32', '0xdf3234');
"0xdf32340000000000000000000000000000000000000000000000000000000000"

web3.nrg.abi.encodeParameter('bytes', '0xdf3234');
"0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003df32340000000000000000000000000000000000000000000000000000000000"

web3.nrg.abi.encodeParameter('bytes32[]', ['0xdf3234', '0xfdfd']);
"00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002df32340000000000000000000000000000000000000000000000000000000000fdfd000000000000000000000000000000000000000000000000000000000000"

web3.nrg.abi.encodeParameter(
    {
        "ParentStruct": {
            "propertyOne": 'uint256',
            "propertyTwo": 'uint256',
            "childStruct": {
                "propertyOne": 'uint256',
                "propertyTwo": 'uint256'
            }
        }
    },
    {
        "propertyOne": 42,
        "propertyTwo": 56,
        "childStruct": {
            "propertyOne": 45,
            "propertyTwo": 78
        }
    }
);
"0x000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000002d000000000000000000000000000000000000000000000000000000000000004e"
```


#### encodeParameters


###### web3.nrg.abi.encodeParameters(typesArray, parameters);

Encodes a function parameter based on its JSON interface object.


##### Parameters


1. typesArray - Array&lt;String|Object>|Object: An array with types or a JSON interface of a function. See the [solidity documentation](http://solidity.readthedocs.io/en/develop/types.html) for a list of types.
2. parameters - Array: The parameters to encode.


##### Returns

String - The ABI encoded parameters.


##### Example


```
web3.nrg.abi.encodeParameters(['uint256','string'], ['2345675643', 'Hello!%']);
"0x000000000000000000000000000000000000000000000000000000008bd02b7b0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000748656c6c6f212500000000000000000000000000000000000000000000000000"

web3.nrg.abi.encodeParameters(['uint8[]','bytes32'], [['34','434'], '0x324567fff']);
'0x00000000000000000000000000000000000000000000000000000000000000400324567fff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000b2'

web3.nrg.abi.encodeParameters(
    ['uint8[]',
        {
            "ParentStruct": {
                "propertyOne": 'uint256',
                "propertyTwo": 'uint256',
                "ChildStruct": {
                    "propertyOne": 'uint256',
                    "propertyTwo": 'uint256'
                }
            }

        }
    ],
    [
        ['34','434'],
        {
            "propertyOne": '42',
            "propertyTwo": '56',
            "ChildStruct": {
                "propertyOne": '45',
                "propertyTwo": '78'
            }
        }
    ]
);
"0x00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000002d000000000000000000000000000000000000000000000000000000000000004e0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000b2"
```


#### encodeFunctionCall


###### web3.nrg.abi.encodeFunctionCall(jsonInterface, parameters);

Encodes a function call using its JSON interface object and given parameters.


##### Parameters


1. jsonInterface - Object: The JSON interface object of a function.
2. parameters - Array: The parameters to encode.


##### Returns

String - The ABI encoded function call. Means function signature + parameters.


##### Example


```
web3.nrg.abi.encodeFunctionCall({
    "constant": false,
    "inputs": [
        {
            "name": "p_1",
            "type": "uint256"
        }
    ],
    "name": "Sum_function",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},['200'])

'0x276f0e5100000000000000000000000000000000000000000000000000000000000000c8'
```



#### decodeParameter


###### web3.nrg.abi.decodeParameter(type, hexString);

Decodes an ABI encoded parameter to its JavaScript type.


##### Parameters


1. type - String|Object: The type of the parameter, see the [solidity documentation](http://solidity.readthedocs.io/en/develop/types.html) for a list of types.
2. hexString - String: The ABI byte code to decode.


##### Returns

Mixed - The decoded parameter.


##### Example


```
web3.nrg.abi.decodeParameter('uint256', '0x0000000000000000000000000000000000000000000000000000000000000010');
"16"

web3.nrg.abi.decodeParameter('string', '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000');
"Hello!%!"

web3.nrg.abi.decodeParameter('string', '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000');
"Hello!%!"


web3.nrg.abi.decodeParameter(
    {
        "ParentStruct": {
          "propertyOne": 'uint256',
          "propertyTwo": 'uint256',
          "childStruct": {
            "propertyOne": 'uint256',
            "propertyTwo": 'uint256'
          }
        }
    },

, '0x000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000002d000000000000000000000000000000000000000000000000000000000000004e');
{
    '0': {
        '0': '42',
        '1': '56',
        '2': {
            '0': '45',
            '1': '78',
            'propertyOne': '45',
            'propertyTwo': '78'

        },
        'childStruct': {
            '0': '45',
            '1': '78',
            'propertyOne': '45',
            'propertyTwo': '78'
        },
        'propertyOne': '42',
        'propertyTwo': '56'
    },
    'ParentStruct': {
        '0': '42',
        '1': '56',
        '2': {
            '0': '45',
            '1': '78',
            'propertyOne': '45',
            'propertyTwo': '78'
        },
        'childStruct': {
            '0': '45',
            '1': '78',
            'propertyOne': '45',
            'propertyTwo': '78'
        },
        'propertyOne': '42',
        'propertyTwo': '56'
    }
}
```


#### decodeParameters


###### web3.nrg.abi.decodeParameters(typesArray, hexString);

Decodes ABI encoded parameters to its JavaScript types.


##### Parameters


1. typesArray - Array&lt;String|Object>|Object: An array with types or a JSON interface outputs array. See the [solidity documentation](http://solidity.readthedocs.io/en/develop/types.html) for a list of types.
2. hexString - String: The ABI byte code to decode.


##### Returns

Object - The result object containing the decoded parameters.


##### Example


```
web3.nrg.abi.decodeParameters(['string', 'uint256'], '0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000ea000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000');
>Result { '0': 'Hello!%!', '1': '234', __length__: 2 }
web3.nrg.abi.decodeParameters([{
    type: 'string',
    name: 'myString'
},{
    type: 'uint256',
    name: 'myNumber'
}], '0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000ea000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000');
>Result {
  '0': 'Hello!%!',
  '1': '234',
  __length__: 2,
  myString: 'Hello!%!',
  myNumber: '234' }

web3.nrg.abi.decodeParameters([
    'uint8[]',
    {
      "ParentStruct": {
        "propertyOne": 'uint256',
        "propertyTwo": 'uint256',
        "childStruct": {
          "propertyOne": 'uint256',
          "propertyTwo": 'uint256'
        }

      }
    }
  ], 
'0x00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000002d000000000000000000000000000000000000000000000000000000000000004e0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000018');

Result {
  '0': [ '42', '24' ],
  '1': 
   [ '42',
     '56',
     [ '45', '78', propertyOne: '45', propertyTwo: '78' ],
     propertyOne: '42',
     propertyTwo: '56',
     childStruct: [ '45', '78', propertyOne: '45', propertyTwo: '78' ] ],
  __length__: 2 }
```



#### decodeLog


###### web3.nrg.abi.decodeLog(inputs, hexString, topics);

Decodes ABI encoded log data and indexed topic data.


##### Parameters


1. inputs - Object: A JSON interface inputs array. See the [solidity documentation for](http://solidity.readthedocs.io/en/develop/types.html) a list of types.
2. hexString - String: The ABI byte code in the data field of a log.
3. topics - Array: An array with the index parameter topics of the log, without the topic[0] if its a non-anonymous event, otherwise with topic[0].


##### Returns

Object - The result object containing the decoded parameters.


##### Example


```
web3.nrg.abi.decodeLog([
    {
        "indexed": true,
        "name": "p_data",
        "type": "uint256"
    },
    {
        "indexed": false,
        "name": "p_sum",
        "type": "uint256"
    }
],
'0x000000000000000000000000000000000000000000000000000000000000001e',
[ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
       '0x0000000000000000000000000000000000000000000000000000000000000014' ]);

Result {
  '0': '16549453878182612958034098582982350416916986407629275024753871559315717579838',
  '1': '30',
  __length__: 2,
  p_data: '16549453878182612958034098582982350416916986407629275024753871559315717579838',
  p_sum: '30' }

web3.nrg.abi.decodeLog([
    {
        "indexed": true,
        "name": "p_data",
        "type": "uint256"
    },
    {
        "indexed": false,
        "name": "p_sum",
        "type": "uint256"
    }
],
'0x000000000000000000000000000000000000000000000000000000000000002a',
[ '0x2496a8b1279c383d675cfec21a772f8127676a6ebfc7c8bda31961aa6d2b643e',
       '0x0000000000000000000000000000000000000000000000000000000000000020' ]
       
);

Result {
  '0': '16549453878182612958034098582982350416916986407629275024753871559315717579838',
  '1': '42',
  __length__: 2,
  p_data: '16549453878182612958034098582982350416916986407629275024753871559315717579838',
  p_sum: '42' }
```



### web3.nrg.net

The web3-net package allows you to interact with the Energi nodes network properties.


#### getId


###### web3.nrg.net.getId([callback])

Gets the current network ID.


##### Parameters

none


##### Returns

Promise returns Number: The network ID.


##### Example


```
web3.nrg.net.getId().then(console.log)
>49797
```



#### isListening


###### web3.nrg.net.isListening([callback])

Checks if the node is listening for peers.


##### Parameters

none


##### Returns

Promise returns Boolean


##### Example


```
web3.nrg.net.isListening().then(console.log);
>true
```


#### getPeerCount


###### web3.nrg.net.getPeerCount([callback])

Get the number of peers connected to.


##### Parameters

none


##### Returns

Promise returns Number


##### Example


```
web3.nrg.net.getPeerCount().then(console.log);
2
```


### web3.utils

This package provides utility functions for Energi dapps and other web3.js packages.


#### randomHex


###### web3.utils.randomHex(size)

The randomHex library to generate cryptographically strong pseudo-random HEX strings from a given byte size.


##### Parameters

size - Number: The byte size for the HEX string, e.g. 32 will result in a 32 bytes HEX string with 64 characters prefixed with “0x”.


##### Returns

String: The generated random HEX string.


##### Example


```
web3.utils.randomHex(32)
>'0x0a8905ce74d0442b9b91a85618c90a2ee6b0415daf1653f80a2f6d6dd0850344'

web3.utils.randomHex(32)
>'0x4a453d1e8b4357142a639e3553a4a6683407af5ff2181ba624c0a8795c7946e3'

web3.utils.randomHex(4)
>'0x904f934c'

 web3.utils.randomHex(1)
>'0x3a'

 web3.utils.randomHex(0)
>'0x'
```



#### BN


###### web3.utils.BN(mixed)

The BN.js library for calculating with big numbers in JavaScript. See the BN.js documentation for details.

Note: For safe conversion of many types, incl BigNumber.js use utils.toBN


##### Parameters

mixed - String|Number: A number, number string or HEX string to convert to a BN object.


##### Returns

Object: The BN.js instance.


##### Example


```
var BN = web3.utils.BN;

new BN(1234).toString();
"1234"

new BN('1234').add(new BN('1')).toString();
"1235"

new BN('0xea').toString();
"234"
```



#### isBN


###### web3.utils.isBN(bn)

Checks if a given value is a BN.js instance.


##### Parameters

bn - Object: An BN.js instance.


##### Returns

Boolean


##### Example


```
var number = new BN(10);

web3.utils.isBN(number);
true
```



#### isBigNumber


###### web3.utils.isBigNumber(bignumber)

Checks if a given value is a BigNumber.js instance.


##### Parameters

bignumber - Object: A BigNumber.js instance.


##### Returns

Boolean


##### Example


```
const BigNumber = require('bignumber.js');
let x = new BigNumber(123.4567);
console.log(x)
>BigNumber { s: 1, e: 2, c: [ 123, 45670000000000 ] }

web3.utils.isBigNumber(x)
>true
```



#### sha3


###### web3.utils.sha3(string)


###### web3.utils.keccak256(string) // ALIAS

Will calculate the sha3 of the input.

**Note:** To mimic the sha3 behaviour of solidity use soliditySha3


##### Parameters

string - String: A string to hash.


##### Returns

String: the result hash.


##### Example


```
web3.utils.sha3('234'); // taken as string
"0xc1912fee45d61c87cc5ea59dae311904cd86b84fee17cc96966216f811ce6a79"

web3.utils.sha3(new web3.utils.BN('234'));
"0xbc36789e7a1e281436464229828f817d6612f7b477d66591ff96a9e064bcc98a"

web3.utils.sha3(234);
null // can't calculate the has of a number


web3.utils.sha3(0xea); // same as above, just the HEX representation of the number
null

web3.utils.sha3('0xea'); // will be converted to a byte array first, and then hashed
"0x2f20677459120677484f7104c76deb6846a2c071f9b3152c103bb12cd54d1a4a"
```


#### sha3Raw


###### web3.utils.sha3Raw(string)

Will calculate the sha3 of the input but does return the hash value instead of null if for example an empty string is passed.

**Note:** Further details about this function can be seen here sha3


#### soliditySha3


###### web3.utils.soliditySha3(param1 [, param2, ...])

Will calculate the sha3 of given input parameters in the same way solidity would. This means arguments will be ABI converted and tightly packed before being hashed.


##### Parameters

paramX - Mixed: Any type, or an object with {type: 'uint', value: '123456'} or {t: 'bytes', v: '0xfff456'}. Basic types are autodetected as follows:



* String non numerical UTF-8 string is interpreted as string.
* String|Number|BN|HEX positive number is interpreted as uint256.
* String|Number|BN negative number is interpreted as int256.
* Boolean as bool.
* String HEX string with leading 0x is interpreted as bytes.
* HEX HEX number representation is interpreted as uint256.


##### Returns

String: the result hash.


##### Example


```
web3.utils.soliditySha3('234564535', '0xfff23243', true, -10);
// auto detects:        uint256,      bytes,     bool,   int256
"0x3e27a893dc40ef8a7f0841d96639de2f58a132be5ae466d40087a2cfa83b7179"

web3.utils.soliditySha3('Hello!%'); // auto detects: string
"0x661136a4267dba9ccdf6bfddb7c00e714de936674c4bdb065a531cf1cb15c7fc"


web3.utils.soliditySha3('234'); // auto detects: uint256
"0x61c831beab28d67d1bb40b5ae1a11e2757fa842f031a2d0bc94a7867bc5d26c2"

web3.utils.soliditySha3(0xea); // same as above
"0x61c831beab28d67d1bb40b5ae1a11e2757fa842f031a2d0bc94a7867bc5d26c2"

web3.utils.soliditySha3(new BN('234')); // same as above
"0x61c831beab28d67d1bb40b5ae1a11e2757fa842f031a2d0bc94a7867bc5d26c2"

web3.utils.soliditySha3({type: 'uint256', value: '234'}); // same as above
"0x61c831beab28d67d1bb40b5ae1a11e2757fa842f031a2d0bc94a7867bc5d26c2"

web3.utils.soliditySha3({t: 'uint', v: new BN('234')}); // same as above
"0x61c831beab28d67d1bb40b5ae1a11e2757fa842f031a2d0bc94a7867bc5d26c2"

web3.utils.soliditySha3('0x407D73d8a49eeb85D32Cf465507dd71d507100c1');
"0x4e8ebbefa452077428f93c9520d3edd60594ff452a29ac7d2ccc11d47f3ab95b"

web3.utils.soliditySha3({t: 'bytes', v: '0x407D73d8a49eeb85D32Cf465507dd71d507100c1'});
"0x4e8ebbefa452077428f93c9520d3edd60594ff452a29ac7d2ccc11d47f3ab95b" // same result as above

web3.utils.soliditySha3({t: 'address', v: '0x407D73d8a49eeb85D32Cf465507dd71d507100c1'});
"0x4e8ebbefa452077428f93c9520d3edd60594ff452a29ac7d2ccc11d47f3ab95b" // same as above, but will do a checksum check, if its multi case

web3.utils.soliditySha3({t: 'bytes32', v: '0x407D73d8a49eeb85D32Cf465507dd71d507100c1'});
"0x3c69a194aaf415ba5d6afca734660d0a3d45acdc05d54cd1ca89a8988e7625b4" // different result as above

web3.utils.soliditySha3({t: 'string', v: 'Hello!%'}, {t: 'int8', v:-23}, {t: 'address', v: '0x85F43D8a49eeB85d32Cf465507DD71d507100C1d'});
"0xa13b31627c1ed7aaded5aecec71baf02fe123797fffd45e662eac8e06fbe4955"
```



#### soliditySha3Raw


###### web3.utils.soliditySha3Raw(param1 [, param2, ...])

Will calculate the sha3 of given input parameters in the same way solidity would. This means arguments will be ABI converted and tightly packed before being hashed. The difference between this function and the soliditySha3 function is that it will return the hash value instead of null if for example an empty string is given.


#### isHex


###### web3.utils.isHex(hex)

Checks if a given string is a HEX string.


##### Parameters

hex - String|HEX: The given HEX string.


##### Returns

Boolean


##### Example


```
web3.utils.isHex('0xc1912');
true

web3.utils.isHex(0xc1912);
true

web3.utils.isHex('c1912');
true

web3.utils.isHex(345);
true // this is tricky, as 345 can be a HEX representation or a number, be careful when not having a 0x in front!

web3.utils.isHex('0xZ1912');
false

web3.utils.isHex('Hello');
false
```



#### isHexStrict


###### web3.utils.isHexStrict(hex)

Checks if a given string is a HEX string. Difference to web3.utils.isHex() is that it expects HEX to be prefixed with 0x.


##### Parameters

hex - String|HEX: The given HEX string.


##### Returns

Boolean


##### Example


```
web3.utils.isHexStrict('0xc1912');
true

web3.utils.isHexStrict(0xc1912);
false

web3.utils.isHexStrict('c1912');
false

web3.utils.isHexStrict(345);
false // this is tricky, as 345 can be a a HEX representation or a number, be careful when not having a 0x in front!

web3.utils.isHexStrict('0xZ1912');
false

web3.utils.isHex('Hello');
false
```


#### isAddress


###### web3.utils.isAddress(address)

Checks if a given string is a valid Energi address. It will also check the checksum, if the address has upper and lowercase letters.


##### Parameters

address - String: An address string.


##### Returns

Boolean


##### Example


```
web3.utils.isAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d');
true

web3.utils.isAddress('c1912fee45d61c87cc5ea59dae31190fffff232d');
true

web3.utils.isAddress('0XC1912FEE45D61C87CC5EA59DAE31190FFFFF232D');
true // as all is uppercase, no checksum will be checked

web3.utils.isAddress('0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d');
true

web3.utils.isAddress('0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d');
false // wrong checksum
```


#### toChecksumAddress


###### web3.utils.toChecksumAddress(address)

Will convert an upper or lowercase Energi address to a checksum address.


##### Parameters

address - String: An address string.


##### Returns

String: The checksum address.


##### Example


```
web3.utils.toChecksumAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d');
"0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d"

web3.utils.toChecksumAddress('0XC1912FEE45D61C87CC5EA59DAE31190FFFFF232D');
"0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d" // same as above
```


#### checkAddressChecksum


###### web3.utils.checkAddressChecksum(address)

Checks the checksum of a given address. Will also return false on non-checksum addresses.


##### Parameters

address - String: An address string.


##### Returns

Boolean: true when the checksum of the address is valid, false if its not a checksum address, or the checksum is invalid.


##### Example


```
web3.utils.checkAddressChecksum('0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d');
true
```


#### toHex


###### web3.utils.toHex(mixed)

Will auto convert any given value to HEX. Number strings will be interpreted as numbers. Text strings will be interpreted as UTF-8 strings.


##### Parameters

mixed - String|Number|BN|BigNumber: The input to convert to HEX.


##### Returns

String: The resulting HEX string.


##### Example


```
web3.utils.toHex('234');
"0xea"

web3.utils.toHex(234);
"0xea"

web3.utils.toHex(new BN('234'));
"0xea"

web3.utils.toHex(new BigNumber('234'));
"0xea"

web3.utils.toHex('I have 100€');
"0x49206861766520313030e282ac"
```


#### toBN


###### web3.utils.toBN(number)

Will safely convert any given value (including BigNumber.js instances) into a BN.js instance, for handling big numbers in JavaScript.

Note: For just the BN.js class use utils.BN


##### Parameters

number - String|Number|HEX: Number to convert to a big number.


##### Returns

Object: The BN.js instance.


##### Example


```
web3.utils.toBN(1234).toString();
"1234"

web3.utils.toBN('1234').add(web3.utils.toBN('1')).toString();
"1235"

web3.utils.toBN('0xea').toString();
"234"
```



#### hexToNumberString


###### web3.utils.hexToNumberString(hex)

Returns the number representation of a given HEX value as a string.


##### Parameters

hexString - String|HEX: A string to hash.


##### Returns

String: The number as a string.


##### Example


```
web3.utils.hexToNumberString('0xea');
"234"
```



#### hexToNumber


###### web3.utils.hexToNumber(hex)


###### web3.utils.toDecimal(hex) // ALIAS, deprecated

Returns the number representation of a given HEX value.

**Note:** This is not useful for big numbers, rather use utils.toBN instead.


##### Parameters

hexString - String|HEX: A string to hash.


##### Returns

Number


##### Example


```
web3.utils.hexToNumber('0xea');
234
```



#### numberToHex


###### web3.utils.numberToHex(number)

Returns the HEX representation of a given number value.


##### Parameters

number - String|Number|BN|BigNumber: A number as string or number.


##### Returns

String: The HEX value of the given number.


##### Example


```
web3.utils.numberToHex('234');
'0xea'
```



#### hexToUtf8


###### web3.utils.hexToUtf8(hex)


###### web3.utils.hexToString(hex) // ALIAS

Returns the UTF-8 string representation of a given HEX value.


##### Parameters

hex - String: A HEX string to convert to a UTF-8 string.


##### Returns

String: The UTF-8 string.


##### Example


```
web3.utils.hexToUtf8('0x456e657267692076332069732074686520667574757265');
>'Energi v3 is the future'
```



#### hexToAscii


###### web3.utils.hexToAscii(hex)

Returns the ASCII string representation of a given HEX value.


##### Parameters

hex - String: A HEX string to convert to a ASCII string.


##### Returns

String: The ASCII string.


##### Example


```
web3.utils.hexToAscii('0x456e657267692076332069732074686520667574757265');
>'Energi v3 is the future'
```



#### utf8ToHex


###### web3.utils.utf8ToHex(string)


###### web3.utils.stringToHex(string) // ALIAS

Returns the HEX representation of a given UTF-8 string.


##### Parameters

string - String: A UTF-8 string to convert to a HEX string.


##### Returns

String: The HEX string.


##### Example


```
web3.utils.utf8ToHex('Energi v3 is the future');
>'0x456e657267692076332069732074686520667574757265'
```



#### asciiToHex


###### web3.utils.asciiToHex(string)

Returns the HEX representation of a given ASCII string.


##### Parameters

string - String: A ASCII string to convert to a HEX string.


##### Returns

String: The HEX string.


##### Example


```
web3.utils.asciiToHex('Energi v3 is the future');
>'0x456e657267692076332069732074686520667574757265'
```



#### hexToBytes


###### web3.utils.hexToBytes(hex)

Returns a byte array from the given HEX string.


##### Parameters

hex - String|HEX: A HEX to convert.


##### Returns

Array: The byte array.


##### Example


```
web3.utils.hexToBytes('0x000000ea');
[ 0, 0, 0, 234 ]
```


#### bytesToHex


###### web3.utils.bytesToHex(byteArray)

Returns a HEX string from a byte array.


##### Parameters

byteArray - Array: A byte array to convert.


##### Returns

String: The HEX string.


##### Example


```
web3.utils.bytesToHex([ 72, 101, 108, 108, 111, 33, 36 ]);
>'0x48656c6c6f2124'
```


#### toWei


###### web3.utils.toWei(number [, unit])

Converts any nrg value into wei.

Note: “wei” are the smallest energi unit, and you should always make calculations in wei and convert only for display reasons.


##### Parameters


1. number - String|BN: The value.
2. unit - String (optional, defaults to "nrg"): The nrg to convert from. Possible units are:
    *   nonrg: '0',
    *   wei: '1',
    *   femtoenergi, femtonrg, Kwei, kwei : '1000',
    *   picoenergi, piconrg, Mwei, mwei: '1000000',
    *   nanoenergi, nanonrg, Gwei, gwei: '1000000000',
    *   microenergi, micronrg: '1000000000000',
    *   millienergi, millinrg: '1000000000000000',
    *   energi, nrg: '1000000000000000000',
    *   kenergi, knrg: '1000000000000000000000',
    *   menergi, mnrg: '1000000000000000000000000',
    *   genergi, gnrg: '1000000000000000000000000000',
    *   tenergi, tnrg: '1000000000000000000000000000000',


##### Returns

String|BN: If a string is given it returns a number string, otherwise a BN.js instance.


##### Example


```
web3.utils.toWei('1', 'nrg');
"1000000000000000000"

web3.utils.toWei('1', 'millienergi');
"1000000000000000"

web3.utils.toWei('1', 'micronrg');
"1000000000000"

web3.utils.toWei('1', 'Gwei');
"1000000000"
```



#### fromWei


###### web3.utils.fromWei(number [, unit])

Converts any wei value into a nrg value. 

**Note:** “wei” are the smallest energi unit, and you should always make calculations in wei and convert only for display reasons.


##### Parameters



1. number - String|BN: The value in wei.
2. unit - String (optional, defaults to "nrg"): The nrg to convert to. Possible units are:
    *   nonrg: '0',
    *   wei: '1',
    *   femtoenergi, femtonrg, Kwei, kwei : '1000',
    *   picoenergi, piconrg, Mwei, mwei: '1000000',
    *   nanoenergi, nanonrg, Gwei, gwei: '1000000000',
    *   microenergi, micronrg: '1000000000000',
    *   millienergi, millinrg: '1000000000000000',
    *   energi, nrg: '1000000000000000000',
    *   kenergi, knrg: '1000000000000000000000',
    *   menergi, mnrg: '1000000000000000000000000',
    *   genergi, gnrg: '1000000000000000000000000000',
    *   tenergi, tnrg: '1000000000000000000000000000000',


##### Returns

String: It always returns a string number.


##### Example


```
web3.utils.fromWei('1', 'energi');
"0.000000000000000001"

web3.utils.fromWei('1', 'millienergi');
"0.000000000000001"

web3.utils.fromWei('1', 'microenergi');
"0.000000000001"

web3.utils.fromWei('1', 'nanonrg');
"0.000000001"
```



#### unitMap


###### web3.utils.unitMap

Shows all possible nrg value and their amount in wei.


##### Return value

Object with the following properties:



*   nonrg: '0',
*   wei: '1',
*   femtoenergi, femtonrg, Kwei, kwei : '1000',
*   picoenergi, piconrg, Mwei, mwei: '1000000',
*   nanoenergi, nanonrg, Gwei, gwei: '1000000000',
*   microenergi, micronrg: '1000000000000',
*   millienergi, millinrg: '1000000000000000',
*   energi, nrg: '1000000000000000000',
*   kenergi, knrg: '1000000000000000000000',
*   menergi, mnrg: '1000000000000000000000000',
*   genergi, gnrg: '1000000000000000000000000000',
*   tenergi, tnrg: '1000000000000000000000000000000',


##### Example


```
web3.utils.unitMap
{ noether: '0',
  wei: '1',
  kwei: '1000',
  Kwei: '1000',
  babbage: '1000',
  femtoether: '1000',
  mwei: '1000000',
  Mwei: '1000000',
  lovelace: '1000000',
  picoether: '1000000',
  gwei: '1000000000',
  Gwei: '1000000000',
  shannon: '1000000000',
  nanoether: '1000000000',
  nano: '1000000000',
  szabo: '1000000000000',
  microether: '1000000000000',
  micro: '1000000000000',
  finney: '1000000000000000',
  milliether: '1000000000000000',
  milli: '1000000000000000',
  ether: '1000000000000000000',
  kether: '1000000000000000000000',
  grand: '1000000000000000000000',
  mether: '1000000000000000000000000',
  gether: '1000000000000000000000000000',
  tether: '1000000000000000000000000000000',
  noenergi: '0',
  femtoenergi: '1000',
  picoenergi: '1000000',
  nanoenergi: '1000000000',
  microenergi: '1000000000000',
  millienergi: '1000000000000000',
  energi: '1000000000000000000',
  kenergi: '1000000000000000000000',
  menergi: '1000000000000000000000000',
  genergi: '1000000000000000000000000000',
  tenergi: '1000000000000000000000000000000',
  nonrg: '0',
  femtonrg: '1000',
  piconrg: '1000000',
  nanonrg: '1000000000',
  micronrg: '1000000000000',
  millinrg: '1000000000000000',
  nrg: '1000000000000000000',
  knrg: '1000000000000000000000',
  mnrg: '1000000000000000000000000',
  gnrg: '1000000000000000000000000000',
  tnrg: '1000000000000000000000000000000' }
```


#### padLeft


###### web3.utils.padLeft(string, characterAmount [, sign])


###### web3.utils.leftPad(string, characterAmount [, sign]) // ALIAS

Adds a padding on the left of a string, Useful for adding paddings to HEX strings.


##### Parameters


1. string - String: The string to add padding on the left.
2. characterAmount - Number: The number of characters the total string should have.
3. sign - String (optional): The character sign to use, defaults to "0".


##### Returns

String: The padded string.


##### Example


```
web3.utils.padLeft('0x3456ff', 20);
"0x000000000000003456ff"

web3.utils.padLeft(0x3456ff, 20);
"0x000000000000003456ff"

web3.utils.padLeft('Hello', 20, 'x');
"xxxxxxxxxxxxxxxHello"
```


#### padRight


###### web3.utils.padRight(string, characterAmount [, sign])


###### web3.utils.rightPad(string, characterAmount [, sign]) // ALIAS

Adds a padding on the right of a string, Useful for adding paddings to HEX strings.


##### Parameters


1. string - String: The string to add padding on the right.
2. characterAmount - Number: The number of characters the total string should have.
3. sign - String (optional): The character sign to use, defaults to "0".


##### Returns

String: The padded string.


##### Example


```
web3.utils.padRight('0x3456ff', 20);
"0x3456ff00000000000000"

web3.utils.padRight(0x3456ff, 20);

"0x3456ff00000000000000"

web3.utils.padRight('Hello', 20, 'x');
"Helloxxxxxxxxxxxxxxx"
```


#### toTwosComplement


###### web3.utils.toTwosComplement(number)

Converts a negative number into a two’s complement.


##### Parameters

number - Number|String|BigNumber: The number to convert.


##### Returns

String: The converted hex string.


##### Example


```
web3.utils.toTwosComplement('-1');
"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

web3.utils.toTwosComplement(-1);
"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

web3.utils.toTwosComplement('0x1');
"0x0000000000000000000000000000000000000000000000000000000000000001"

web3.utils.toTwosComplement(-15);
"0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1"


web3.utils.toTwosComplement('-0x1');
"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
```


### web3.energi

This package allows you to obtain information related to the network governance system. It will also allow you to get the list of accounts migrated from the Gen2 network.


#### blacklistInfo


###### web3.energi.blacklistInfo([callback])

Lists all the information about the status of the proposals to the blacklist registry. Return a list with each of the proposals.


##### Parameters

1. Function - (optional) Optional callback, returns an error object as first parameter and the blacklist as second.


##### Returns

Promise returns Array - Array of Blacklists objects.

The structure of the returned event Object in the Array looks as follows:

* target - String: Proposed target address to be included in the blacklist.
* Blocked - Boolean: Defines whether or not the target account has been included in the blacklist..
* enforce -  Proposal Blacklist Object or null: Proposal to include the target account in the blacklist. The proposal is subject to the network governance system.
* revoke - Proposal Blacklist Object or null: Proposal to exclude the target account from the blacklist. The proposal is subject to the network governance system.
* drain -  Proposal Blacklist Object or null: Proposal for the funds from a blocked account (Account included in the blacklist) to be transferred to the network's compensation fund. The proposal is subject to the network governance system.

The structure of the Proposal Blacklist Object looks as follows:


* acceptWeight - Bignumber: The weight of the total balance of the masternodes who voted in favour of the proposal, expressed in wei.
* rejectWeight - Bignumber: The weight of the total balance of the masternodes who voted against the proposal, expressed in wei.
* quorumWeight - Bignumber: Minimum voting quorum for a proposal to be accepted or rejected, expressed in wei.
* totalWeight - Bignumber: Total balance of active NMs in the network at the time the proposal was generated.
* accepted - Boolean: Defines whether the proposal has been accepted or not.
* balance - Bignumber: Target account balance, expressed in wei.
* createdBlock - number: Block in which the proposal has been created.
* deadline - Object: Date the vote ends.
* finished - Boolean: Defines whether or not the vote has been completed.
* proposal - String: Hash that identifies the proposal.
* proposer - String: Address of the account that generated the proposal.


##### Example


```
web3.energi.blacklistInfo().then(console.log)
[ { target: '0x0f38fc17c5543668b2eeb9d6533464ac6bdecd63',
    enforce: 
     { proposal: '0xd294223dcbf560c020de2d4e3a8e920d9315c4fb',
       proposer: '0x25bbaaaf27ab1966c3ab9faf31277a1db7601f3f',
       createdBlock: 2269,
       deadline: 2020-02-17T14:04:17.000Z,
       quorumWeight: <BN: 5f34dd65fd1bc900000>,
       totalWeight: <BN: 3b810a5fbe315da00000>,
       rejectWeight: <BN: 0>,
       acceptWeight: <BN: 1ddba014b5fb9e200000>,
       finished: true,
       accepted: true,
       balance: <BN: 0},
    revoke: null,
    drain: null,
    blocked: true },
   { target: '0x9979a36db71eaac8ef927f14bf01a18aba6c0276',
    enforce: 
     { proposal: '0x96ed7d415fe85661bc7b10d4f683f3f1c63ddfa7',
       proposer: '0x25bbaaaf27ab1966c3ab9faf31277a1db7601f3f',
       createdBlock: 2269,
       deadline: 2020-02-17T14:04:17.000Z,
       quorumWeight: <BN: 5f34dd65fd1bc900000>,
       totalWeight: <BN: 3b810a5fbe315da00000>,
       rejectWeight: <BN: 65a4da25d3016c00000>,
       acceptWeight: <BN: a968163f0a57b400000>,
       finished: true,
       accepted: true,
       balance: <BN: 0},
    revoke: null,
    drain: 
     { proposal: '0x33d2e1e0716afbf3e5f4cd65e4b8252ca8a0239e',
       proposer: '0x680cf4b9c12736dbab9eec2a481e6101aacf300a',
       createdBlock: 92823,
       deadline: 2020-04-20T22:51:42.000Z,
       quorumWeight: <BN: 6a0c6c2257e1e900000>,
       totalWeight: <BN: 4247c39576ed31a00000>,
       rejectWeight: <BN: 0>,
       acceptWeight: <BN: 0>,
       finished: true,
       accepted: false,
       balance: <BN: 56bc75e2d63100000},
    blocked: true },
  { target: '0x4aa953defc1ec2178d80248147301961f9866e3c',
    enforce: 
     { proposal: '0x3b31a9c790ccc8d6345744f2dec7d2a19c56455f',
       proposer: '0x25bbaaaf27ab1966c3ab9faf31277a1db7601f3f',
       createdBlock: 2269,
       deadline: 2020-02-17T14:04:17.000Z,
       quorumWeight: <BN: 5f34dd65fd1bc900000>,
       totalWeight: <BN: 3b810a5fbe315da00000>,
       rejectWeight: <BN: 0>,
       acceptWeight: <BN: 1ff9b9f57fb650600000>,
       finished: true,
       accepted: true,
       balance: <BN: 0},
    revoke: 
     { proposal: '0xe9a82a713f297a5b64299f6f35c2fd35785b311b',
       proposer: '0x01d4a3fdec411abcfc1dece7013890c6ec2629f9',
       createdBlock: 2424,
       deadline: 2020-02-17T16:44:13.000Z,
       quorumWeight: <BN: 5f8b99dbdff1fa00000>,
       totalWeight: <BN: 3bb740296bf73c400000>,
       rejectWeight: <BN: 0>,
       acceptWeight: <BN: 1fc3842bd1f071c00000>,
       finished: true,
       accepted: true,
       balance: <BN: 0},
    drain: 
     { proposal: '0xcfdb11664a36c2d00feeba76407130919b8e39f5',
       proposer: '0x25bbaaaf27ab1966c3ab9faf31277a1db7601f3f',
       createdBlock: 2397,
       deadline: 2020-02-17T16:13:21.000Z,
       quorumWeight: <BN: 5f8b99dbdff1fa00000>,
       totalWeight: <BN: 3bb740296bf73c400000>,
       rejectWeight: <BN: 1fc3842bd1f071c00000>,
       acceptWeight: <BN: 21e19e0c9bab2400000>,
       finished: true,
       accepted: false,
       balance: <BN: 0},
    blocked: false }]
```



#### budgetInfo


###### web3.energi.budgetInfo([callback])

Lists all the information about the status of the proposals to the treasury. Return a list with each of the proposals.


##### Parameters

1. Function - (optional) Optional callback, returns an error object as first parameter and the budgetlist as second.


##### Returns

Promise returns Array - Array of budgetlist objects.

The structure of the returned event Object in the Array looks as follows:

* balance - Bignumber: Total balance available in the treasury, expressed in Wei.
* proposals - Array: of budgetlist objects. List of objects of proposals for the treasury, which are active to be voted by the governance system.

The structure of the Proposal Budget Object looks as follows:

* acceptWeight - Bignumber: The weight of the total balance of the masternodes who voted in favour of the proposal, expressed in wei.
* rejectWeight - Bignumber: The weight of the total balance of the masternodes who voted against the proposal, expressed in wei.
* quorumWeight - Bignumber: Minimum voting quorum for a proposal to be accepted or rejected, expressed in wei.
* totalWeight - Bignumber: Total balance of active NMs in the network at the time the proposal was generated.
* accepted - Boolean: Defines whether the proposal has been accepted or not.
* balance - Bignumber: Fee required to vote, expressed in wei.
* createdBlock - number: Block in which the proposal has been created.
* deadline - Object: Date the vote ends.
* finished - Boolean: Defines whether or not the vote has been completed.
* proposal - String: Hash that identifies the proposal.
* proposer - String: Address of the account that generated the proposal.
* paidAmount - Bignumber: Amount paid, expressed in Wei.
* proposalAmount - Bignumber: The amount of the proposal to the treasury, expressed in Wei.
* refUUID - String: Unique proposal identifier.


##### Example


```
web3.energi.budgetInfo(function(error, budgetlist){ console.log(budgetlist)})
{ balance: <BN: d3455a09a53cd56750001>,
  proposals: 
   [ { proposal: '0xcf48dc24857b4df8f6e935d4908a2ab136aee68a',
       proposer: '0x3c9582900e09c307b5a8d209d3087c65d7836c74',
       createdBlock: 117171,
       deadline: 2020-05-30T21:25:08.000Z,
       quorumWeight: <BN: 645294c077f14680000>,
       totalWeight: <BN: 5992e03e21f2da600000>,
       rejectWeight: <BN: 0>,
       acceptWeight: <BN: 0>,
       finished: false,
       accepted: false,
       balance: <BN: 56bc75e2d63100000>,
       proposalAmount: <BN: 0>,
       paidAmount: <BN: 0>,
       refUUID: '' },
     { proposal: '0xc9f1e60b4d96bd8cac57d2b42942c22eddeb8377',
       proposer: '0xa229362a827aa052babc8989d5fc2dc669e18f81',
       createdBlock: 125345,
       deadline: 2020-05-21T13:56:28.000Z,
       quorumWeight: <BN: 85c371009fec5e00000>,
       totalWeight: <BN: 776e8052d7ee78800000>,
       rejectWeight: <BN: 0>,
       acceptWeight: <BN: 152d02c7e14af6800000>,
       finished: false,
       accepted: false,
       balance: <BN: 56bc75e2d63100000>,
       proposalAmount: <BN: 0>,
       paidAmount: <BN: 0>,
       refUUID: '' },
     { proposal: '0x3516cc831f3712d3e7b0736a02b3568bbff82a5b',
       proposer: '0x8978e517c2b442264e54b890c4428816b66aaf8b',
       createdBlock: 125373,
       deadline: 2020-05-21T14:32:41.000Z,
       quorumWeight: <BN: 9713a8ef00e0bf80000>,
       totalWeight: <BN: 86e3d6d5655af4200000>,
       rejectWeight: <BN: 0>,
       acceptWeight: <BN: 23ffb7ed6565d6400000>,
       finished: false,
       accepted: false,
       balance: <BN: 56bc75e2d63100000>,
       proposalAmount: <BN: 0>,
       paidAmount: <BN: 0>,
       refUUID: '' } ] }
```

#### compensationInfo


###### web3.energi.compensationInfo([callback])

Lists all compensation proposals and their current state.


##### Parameters

1. Function - (optional) Optional callback, returns an error object as first parameter and the compensationlist as second.


##### Returns

Promise returns Array - Array of Compensation objects.

The structure of the returned event Object in the Array looks as follows:

* balance - Bignumber: Total balance available in the compensation fund, expressed in Wei.
* proposals - Array: of Compensation objects. List of objects of proposals for the compensation fund, which are active to be voted by the governance system.

The structure of the Proposal Compensation Object looks as follows:

* acceptWeight - Bignumber: The weight of the total balance of the masternodes who voted in favour of the proposal, expressed in wei.
* rejectWeight - Bignumber: The weight of the total balance of the masternodes who voted against the proposal, expressed in wei.
* quorumWeight - Bignumber: Minimum voting quorum for a proposal to be accepted or rejected, expressed in wei.
* totalWeight - Bignumber: Total balance of active NMs in the network at the time the proposal was generated.
* accepted - Boolean: Defines whether the proposal has been accepted or not.
* balance - Bignumber: Fee required to vote, expressed in wei.
* createdBlock - number: Block in which the proposal has been created.
* deadline - Object: Date the vote ends.
* finished - Boolean: Defines whether or not the vote has been completed.
* proposal - String: Hash that identifies the proposal.
* proposer - String: Address of the account that generated the proposal.
* paidAmount - Bignumber: Amount paid, expressed in Wei.
* proposalAmount - Bignumber: The amount of the proposal to the compensation fund, expressed in Wei.
* refUUID - String: Unique proposal identifier.


##### Example

```
web3.energi.compensationInfo(function(error, compensationlist){console.log(compensationlist)})
{ balance: <BN: 4b69914405ab47161c01>,
  proposals: 
   [ { proposal: '0x6f4dfac4c1d82502ab216841647cc447d77d259f',
       proposer: '0x8978e517c2b442264e54b890c4428816b66aaf8b',
       createdBlock: 92857,
       deadline: 2020-04-28T23:27:27.000Z,
       quorumWeight: <BN: 4a3be54b3d848980000>,
       totalWeight: <BN: 4247c39576ed31a00000>,
       rejectWeight: <BN: 0>,
       acceptWeight: <BN: 2a5a058fc295ed000000>,
       finished: true,
       accepted: true,
       balance: <BN: 56bc75e2d63100000>,
       proposalAmount: <BN: 0>,
       paidAmount: <BN: 0>,
       refUUID: '' },
     { proposal: '0xcc35937d9b2b3a998c4a6b87483d1e2b3a818717',
       proposer: '0xa229362a827aa052babc8989d5fc2dc669e18f81',
       createdBlock: 92860,
       deadline: 2020-04-28T23:29:14.000Z,
       quorumWeight: <BN: 4a3be54b3d848980000>,
       totalWeight: <BN: 4247c39576ed31a00000>,
       rejectWeight: <BN: 0>,
       acceptWeight: <BN: 0>,
       finished: true,
       accepted: false,
       balance: <BN: 56bc75e2d63100000>,
       proposalAmount: <BN: 0>,
       paidAmount: <BN: 0>,
       refUUID: '' } ] }
```

#### upgradeInfo

###### web3.energi.upgradeInfo([callback])

Returns the map of the list of government improvement proposals for each proxy.

##### Parameters

1. Function - (optional) Optional callback, returns an error object as first parameter and the upgradeList as second.


##### Returns

Promise returns Object - Map of the list of government improvement proposals for each proxy.

The structure of the returned event Object looks as follows:

* treasury - Array: list of proposals to the treasury proxy consensus system.
* masternodeRegistry - Array: list of proposals to the masternodeRegistry proxy consensus system.
* stakerReward - Array: list of proposals to the stakerReward proxy consensus system.
* backboneReward - Array: list of proposals to the backboneReward proxy consensus system.
* sporkRegistry - Array: list of proposals to the sporkRegistry proxy consensus system.
* checkpointRegistry - Array: list of proposals to the checkpointRegistry proxy consensus system.
* blacklistRegistry - Array: list of proposals to the blacklistRegistry proxy consensus system.
* masternodeToken - Array: list of proposals to the masternodeToken proxy consensus system.

The structure of the Proposal Upgrade Object looks as follows:

* acceptWeight - Bignumber: The weight of the total balance of the masternodes who voted in favour of the proposal, expressed in wei.
* rejectWeight - Bignumber: The weight of the total balance of the masternodes who voted against the proposal, expressed in wei.
* quorumWeight - Bignumber: Minimum voting quorum for a proposal to be accepted or rejected, expressed in wei.
* totalWeight - Bignumber: Total balance of active NMs in the network at the time the proposal was generated.
* accepted - Boolean: Defines whether the proposal has been accepted or not.
* balance - Bignumber: Fee required to vote, expressed in wei.
* createdBlock - number: Block in which the proposal has been created.
* deadline - Object: Date the vote ends.
* finished - Boolean: Defines whether or not the vote has been completed.
* proposal - String: Hash that identifies the proposal.
* proposer - String: Address of the account that generated the proposal.
* proxy - String: Smart contract address to update.
* impl - String: Implementation hash.


##### Example

```
web3.energi.upgradeInfo().then(console.log)
 { treasury: [],
  masternodeRegistry: 
   [ { proposal: '0x6720431f85ab4d608a197503dfb0e860b8c0b00d',
       proposer: '0xb1372ea07f6a92bc86fd5f8cdf468528f79f87ca',
       createdBlock: 122691,
       deadline: 2020-05-04T17:35:04.000Z,
       quorumWeight: <BN: 2ec337e1b08407b80000>,
       totalWeight: <BN: 5bb0fa1eebad8ca00000>,
       rejectWeight: <BN: 0>,
       acceptWeight: <BN: 0>,
       finished: true,
       accepted: true,
       balance: <BN: 0>,
       impl: '0xef0e363008af759cd1e1ea955277a954ebfc76bd',
       proxy: '0x0000000000000000000000000000000000000302' },
     { proposal: '0xcfab0700e272d9e4aed6b3d4da7ff15a6a38ab0c',
       proposer: '0xb1372ea07f6a92bc86fd5f8cdf468528f79f87ca',
       createdBlock: 122723,
       deadline: 2020-05-04T18:07:39.000Z,
       quorumWeight: <BN: 2ec337e1b08407b80000>,
       totalWeight: <BN: 5bb0fa1eebad8ca00000>,
       rejectWeight: <BN: 0>,
       acceptWeight: <BN: 0>,
       finished: true,
       accepted: true,
       balance: <BN: 0>,
       impl: '0xef0e363008af759cd1e1ea955277a954ebfc76bd',
       proxy: '0x0000000000000000000000000000000000000302' } ],
  stakerReward: [],
  backboneReward: [],
  sporkRegistry: [],
  checkpointRegistry: [],
  blacklistRegistry: [],
  masternodeToken: [] }
```

#### searchGen2Coins


###### web3.energi.searchGen2Coins(gen2CoinList, showEmpty,[callback])

Returns an object that matches the Gen2 account search in the list of migrated accounts.


##### Parameters

1. gen2CoinList - Array: List of Gen2 accounts that you want to search the registry of migrated accounts.
2. showEmpty - Boolean: 
3. Function - (optional) Optional callback, returns an error object as first parameter and the search object as a second parameter.


##### Returns

Promise returns Array - Array of  search objects.

The structure of the returned search object looks like this:

* ItemID - Number: Position in the registry list of migrated accounts.
* amount - Bignumber: Amount available in the account to migrate.
* owner - String: Gen2 address of the account consulted in the registry of migrated accounts.
* rawOwner - String: Identification hash related to account balance migration.


##### Example

```
web3.energi.searchGen2Coins(['tJ669ZhjnW8mEcyKw53T3UW489kxrczgDk', 'tF79fs6NqZNbPtwkfxZ4CgEHB1GFx2SDyP'], true, function(error, search){console.log(search); prueba=search})
[ { amount: <BN: 0>,
      itemId: 125222,
      owner: 'tF79fs6NqZNbPtwkfxZ4CgEHB1GFx2SDyP',
      rawOwner: '0x59bf9004125815041072d333f802823b26dc8817' },
    { amount: <BN: 0>,
      itemId: 125607,
      owner: 'tJ669ZhjnW8mEcyKw53T3UW489kxrczgDk',
      rawOwner: '0x7a7495663a2d72bd7ba4742ca13a032374dc2f01' } ]
```


#### searchRawGen2Coins

###### web3.energi.searchRawGen2Coins(gen2RawOwnerAddressList, showEmpty, [callback])

Returns an object that matches the raw_owners search in the list of migrated accounts.


##### Parameters

1. gen2CoinList - Array: List of Gen2 accounts that you want to search the registry of migrated accounts.
2. showEmpty - Boolean: 
3. Function - (optional) Optional callback, returns an error object as first parameter and the search object as a second parameter.


##### Returns

Promise returns Array - Array of  search objects.

The structure of the returned search object looks like this:

* ItemID - Number: Position in the registry list of migrated accounts.
* amount - Bignumber: Amount available in the account to migrate.
* owner - String: Gen2 address of the account consulted in the registry of migrated accounts.
* rawOwner - String: Identification hash related to account balance migration.


##### Example

```
web3.energi.searchRawGen2Coins(['0x59bf9004125815041072d333f802823b26dc8817', '0x7a7495663a2d72bd7ba4742ca13a032374dc2f01'], true, function(error, search){console.log(search)})
[ { amount: <BN: 0>,
    itemId: 125222,
    owner: 'tF79fs6NqZNbPtwkfxZ4CgEHB1GFx2SDyP',
    rawOwner: '0x59bf9004125815041072d333f802823b26dc8817' },
  { amount: <BN: 0>,
    itemId: 125607,
    owner: 'tJ669ZhjnW8mEcyKw53T3UW489kxrczgDk',
    rawOwner: '0x7a7495663a2d72bd7ba4742ca13a032374dc2f01' } ]
```


#### searchGen3DestinationByGen2Address


###### web3.energi.searchGen3DestinationByGen2Address(gen2Address ,[callback])

Looks up the Gen3 destination address for a given Gen2 address, in the migrated account registry.


##### Parameters



1. gen2CoinList - Array: List of Gen2 accounts that you want to search the registry of migrated accounts.
2. Function - (optional) Optional callback, returns an error object as first parameter and the search object as a second parameter.


##### Returns

Promise returns Array - Array of  search objects.

The structure of the returned search object looks like this:

* ItemID - Number: Position in the registry list of migrated accounts.
* amount - Bignumber: Balance migrated from the consulted Gen2 account.
* Gen3Address - String: Gen3 address to the account that was migrated the balance of the Gen2 account consulted in the registry of migrated accounts.


##### Example


```
web3.energi.searchGen3DestinationByGen2Address(['tJ669ZhjnW8mEcyKw53T3UW489kxrczgDk', 'tF79fs6NqZNbPtwkfxZ4CgEHB1GFx2SDyP'], true, function(error, search){console.log(search)})
[ { ItemID: 125607,
    Gen3Address: '0xa229362a827aa052babc8989d5fc2dc669e18f81',
    amount: <BN: 7e529385dbfe40000},
  { ItemID: 125222,
    Gen3Address: '0x680cf4b9c12736dbab9eec2a481e6101aacf300a',
    amount: <BN: 56bc75e2d63100000} ]
```


### web3.masternode

This package allows obtaining information concerning the network masternodes.


#### collateralBalance


###### web3.masternode.collateralBalance(address,[callback])

Finds the amount collateralized NRG of the specified address, also returns the last block on which the NRG coins were collateralized.


##### Parameters

1. address - String: Address associated with the Masternode that you want to consult.
2. Function - (optional) Optional callback, returns an error object as first parameter and balance  as a second parameter.


##### Returns

Promise returns Object - Balance Object.



* balance - BigNumber: Collateral balance, expressed in Wei.
* lastBlock - Number:  The last block on which the NRG coins were collateralized.


##### Example

```
web3.masternode.collateralBalance('0xa229362a827aa052babc8989d5fc2dc669e18f81').then(console.log)
{ balance: <BN: ed2b525841adfc00000>, lastBlock: 125369 }
```

#### listMasternodes


###### web3.masternode.listMasternodes([callback])

Returns a list with all announced masternodes


##### Parameters

1. Function - (optional) Optional callback, returns an error object as first parameter and the masternodeList as second.


##### Returns

Promise returns Array - Array of Masternodes objects.

The structure of the returned event Object in the Array looks as follows:

* collateral - Bignumber: Collateral balance of Masternode.
* masternode - String:  Masternode Address.
* owner - String:  Masternode Address.
* enode - String:  Reconstructed from public key and IPv4
* announcedBlock - Number: Block in which the Masternode was announced.
* isActive - Boolean:
* isAlive - Boolean:
* sWFeatures:
* sWVersion: Version of the node on which the Masternode is running.


##### Example

```
web3.masternode.listMasternodes().then(console.log)
[ { masternode: '0x4b9885d71b6e3e52651bef1ec3daa7605b7d3dce',
    owner: '0xa229362a827aa052babc8989d5fc2dc669e18f81',
    enode: 'enode://04cd1bbe3c90b867bbaa0415769fd0fda3357fef77073532d3389c4b445634ad55eea3c2253ed17e4f4ed73869098139902c8b567c34f2b0fed56ca66785db73@144.202.18.140:49797',
    collateral: <BN: ed2b525841adfc00000>,
    announcedBlock: 125370,
    isActive: true,
    isAlive: true,
    sWFeatures: '0x3270f00',
    sWVersion: '3.39.15' },
 { masternode: '0x2a9a0ec6e3aa96b00cc9ed2d132d537165f5be90',
    owner: '0xb49f3348d808d766c7e7cb15a2fc0aaabed69e19',
    enode: 'enode://4a26bddd51559427df71e1827f95ba34d5fdf2a8df640a6fa9f71a3e3211996992bad8f299de6cba71cb8bd598fde28b43708c1984072491863c2c3341736a85@3.228.20.111:49797',
    collateral: <BN: 6c6b935b8bbd400000>,
    announcedBlock: 124489,
    isActive: false,
    isAlive: false,
    sWFeatures: '0x3270c00',
    sWVersion: '3.39.12' },
  { masternode: '0xf25d7ea2107138760b07df1ad4450e174d148214',
    owner: '0x91489d09157310a9a4eed72d05584f71dfa8093a',
    enode: 'enode://40865e034f4a382f0906b731bd5f3a9448866476045348d7ad658fba447a65b007f389bff9d7692e08843acb799ecd98c9f8ca9b79192b9f1b91b00e2711060b@102.140.244.180:49797',
    collateral: <BN: 3635c9adc5dea00000>,
    announcedBlock: 125472,
    isActive: true,
    isAlive: false,
    sWFeatures: '0x3000600',
    sWVersion: '3.0.6' },
  ... ]
```


#### masternodeInfo


###### web3.masternode.masternodeInfo(masternodeOrOwnerAddress, [callback])

Finds detailed information about a masternode


##### Parameters

1. masternode|OwnerAddress  - String: Address associated with the Masternode.
2. Function - (optional) Optional callback, returns an error object as first parameter and the masternodeInfo as second.


##### Returns

Promise returns Object - Masternode Object.


##### Example

```
web3.masternode.masternodeInfo('0xa229362a827aa052babc8989d5fc2dc669e18f81').then(console.log)
{ masternode: '0x4b9885d71b6e3e52651bef1ec3daa7605b7d3dce',
  owner: '0xa229362a827aa052babc8989d5fc2dc669e18f81',
  enode: 'enode://04cd1bbe3c90b867bbaa0415769fd0fda3357fef77073532d3389c4b445634ad55eea3c2253ed17e4f4ed73869098139902c8b567c34f2b0fed56ca66785db73@144.202.18.140:49797',
  collateral: <BN: ed2b525841adfc00000>,
  announcedBlock: 125370,
  isActive: true,
  isAlive: true,
  sWFeatures: '0x3270f00',
  sWVersion: '3.39.15' }
```

#### stats


###### web3.masternode.stats([callback])

It shows the statistics about all the Masternodes in the Energi network. 


##### Parameters

1. Function - (optional) Optional callback, returns an error object as first parameter and the masternodeStats as second.


##### Returns

Promise returns Object - Statistics object of Masternodes.

The structure of the returned object looks like this:



* active - Number: Number of masternodes active on the network
* total - Number: Number of masternodes announced on the network
* activeCollatera - BigNumber: Collateral sum of all active masternodes.
* totalCollateral - BigNumber: Collateral sum of all announced masternodes
* maxOfAllTimes - BigNumber: Sum of the maximum collateral reached by the masternodes ever executed in the network.


##### Example

```
web3.masternode.stats().then(console.log)
 { active: 12,
  total: 19,
  activeCollateral: <BN: 74415981a9566d200000>,
  totalCollateral: <BN: 9ed194db19b238c00000>,
  maxOfAllTimes: <BN: 9ed194db19b238c00000}
```



<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^2]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^3]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^4]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^5]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^6]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an Websocket connection.

[^7]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an Websocket connection.

[^8]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an Websocket connection.

[^9]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an Websocket connection.

[^10]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an Websocket connection.

[^11]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an Websocket connection.

[^12]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an Websocket connection.

[^13]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^14]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^15]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^16]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^17]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^18]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^19]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^20]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.

[^21]:
     This method does not work properly for the public endpoint. The example shown applies when the API connects to a local node through an HTTP, Websocket, or IPC connection. The local node must have the personal API enabled to use this method.
