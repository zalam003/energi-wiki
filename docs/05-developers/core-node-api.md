---
sidebar_position: 4
id: core-node-api
title: Energi Core Node API
---

Beside the officially exposed DApp API namespaces (energi, eth, masternode, web3), Energi provides the following APIs:
- *energi*: Energi3 management
- *masternode*: Energi3 masternode management
- *miner*: Miner management
- *personal*: Account management


| **[energi](#energi)** | **[miner](#miner)** | **[masternode](#masternode)** | **[personal](#personal)** |
|-----------------------------------------------|---------------------|-----------------------------------|---------------------------------|
| [listGen2Coins](#listGen2Coins) | [setMinerNonceCap](#setMinerNonceCap) | [collateralBalance](#collateralBalance) | [ecRecover](#ecRecover) |
| [searchGen2Coins](#searchGen2Coins) | [stakingStatus](#stakingStatus) | [depositCollateral](#depositCollateral) | [importRawKey](#importRawKey) |
| [searchRawGen2Coins](#searchRawGen2Coins) | [autocollateralize](#setAutocollateralize) | [withdrawCollateral](#withdrawCollateral) | [listAccounts](#listAccounts) |
| [claimGen2CoinsDirect](#claimGen2CoinsDirect) | | [listMasternodes](#listMasternodes) | [lockAccount](#lockAccount) |
| [claimGen2CoinsCombined](#claimGen2CoinsCombined) | | [masternodeInfo](#masternodeInfo) | [newAccount](#newAccount) |
| [claimGen2CoinsImport](#claimGen2CoinsImport) | | [announce](#announce) | [unlockAccount](#unlockAccount) |
| [budgetInfo](#budgetInfo) | | [denounce](#denounce) | [stakingOnly](#stakingOnly) |
| [budgetPropose](#budgetPropose) | | [stats](#stats) | [sendTransaction](#sendTransaction) |
| [blacklistInfo](#blacklistInfo) | | | [sign](#sign) |
| [blacklistEnforce](#blacklistEnforce) | | | |
| [blacklistRevoke](#blacklistRevoke) | | | |
| [blacklistDrain](#blacklistDrain) | | | |
| [blacklistCollect](#blacklistCollect) | | | |
| [checkpointInfo](#checkpointInfo) | | | |
| [checkpointPropose](#checkpointPropose) | | | |
| [upgradeInfo](#upgradeInfo) | | | |
| [upgradePropose](#upgradePropose) | | | |
| [upgradePerform](#upgradePerform) | | | |
| [upgradeCollect](#upgradeCollect) | | | |
| [voteAccept](#voteAccept) | | | |
| [voteReject](#voteReject) | | | |
| [withdrawFee](#withdrawFee) | | | |
| [compensationInfo](#compensationInfo) | | | |
| [compensationProcess](#compensationProcess) | | | |
| [compensationPropose](#compensationPropose) | | | |


## 1. Energi {#energi}

### 1.1. Migration API:

#### 1.1.1. energi.listGen2Coins() {#listGen2Coins}

Lists the amount of Gen2 NRG coins

| **Client** | **Method invocation** |
|------------|--------------------------------------------------------|
| Console | energi.listGen2Coins() |
| RPC | {"method": "energi_listGen2Coins", "params": [string]} . |

#### 1.1.2. energi.searchGen2Coins(owners[], include_empty) {#searchGen2Coins}

search by Base58

#### 1.1.3. energi.searchRawGen2Coins(raw_owners[], include_empty) {#searchRawGen2Coins}

search by raw Hex

#### 1.1.4. energi.claimGen2CoinsDirect(password?, 'add', base58_privkey) {#claimGen2CoinsDirect}

Claim a specific Gen 2 private key to an Gen 3 address

| **Client** | **Method invocation** |
|------------|-------------------------------------------------------------------------------|
| Console | energi.claimGen2CoinsDirect(password?, 'add', base58_privkey) |
| RPC | {"method": "energi_claimGen2CoinsDirect", "params": [string, string, string]} .|

**Example:**

```
energi.claimGen2CoinsDirect('password', '0x680cf4b9c12736dbab9eec2a481e6101aacf300a', 'cUJqiAW8mkAp5fm9Ewkv8PkjFALSvviayMykt3rajSU2KasurHh9')
```

**Output:**

> 0xba5a8672cb50b609539a74ff76182ed26726601de0f994c610442ad0b24b13d1
> undefined

#### 1.1.5. energi.claimGen2CoinsCombined(password?, dst, file) {#claimGen2CoinsCombined}

Claim all coins from Gen 2 file dump to specific address

| **Client** | **Method invocation** |
|------------|---------------------------------------------------------------------------------|
| Console | energi.claimGen2CoinsCombined(password?, dst, file) |
| RPC | {"method": "energi_claimGen2CoinsCombined", "params": [string, string, string]} . |



**Example:**
```
energi.claimGen2CoinsCombined('password', '0x67319f845917da973570704b811b641d3f335fa9', 'energi_wallet.dump')
```

#### 1.1.6. energi.claimGen2CoinsImport(password, file) {#claimGen2CoinsImport}

Claim all coins from Gen 2 file dump to the same private keys imported into current instance

| **Client** | **Method invocation** |
|------------|-----------------------------------------------------------------------|
| Console | energi.claimGen2CoinsImport(password, file) |
| RPC | {"method": "energi_claimGen2CoinsImport", "params": [string, string]} . |

**Example:**

```
energi.claimGen2CoinsImport(‘password’, ‘energi_wallet.dump’)
```

### 1.2. Budget API:

#### 1.2.1. energi.budgetInfo() {#budgetInfo}

List all budget proposals and their current state

#### 1.2.2. energi.budgetPropose(amount, uuid, period, payer[, password])

#### 1.2.3. energi.upgradeInfo() {#upgradeInfo}

Map of governance upgrades proposal list per each proxy

#### 1.2.4. energi.upgradePropose(new_impl, fee, payer[, password]) {#upgradePropose}

#### 1.2.5. energi.upgradePerform(proposal, payer[, password]) {#upgradePerform}

#### 1.2.6. energi.upgradeCollect(proposal, payer[, password]) {#upgradeCollect}

### 1.3. Voting API:

#### 1.3.1. energi.voteAccept(proposal, mn_owner[, password]) {#voteAccept}

#### 1.3.2. energi.voteReject(proposal, mn_owner[, password]) {#voteReject}

#### 1.3.3. energi.withdrawFee(proposal, payer[, password]) {#withdrawFee}

### 1.4. Blacklist API

#### 1.4.1. energi.blacklistInfo() {#blacklistInfo}

###### list of:
- .target - address
- .enforce - proposal info
- .revoke - proposal info
- .drain - proposal info
- .blocked - is currently blocked

#### 1.4.2. energi.blacklistEnforce(target, fee, payer[, password]) {#blacklistEnforce}

#### 1.4.3. energi.blacklistRevoke(target, fee, payer,[ password]) {#blacklistRevoke}

#### 1.4.4. energi.blacklistDrain(target, fee, payer[, password]) {#blacklistDrain}

#### 1.4.5. energi.blacklistCollect(proposal, payer[, password]) {#blacklistCollect}

### 1.5. Compensation API

#### 1.5.1. energi.compensationInfo() {#compensationInfo}

Same as [energi_budgetInfo](#budgetInfo)

**Example:**

```
energi.compensationInfo()
```

**Output:**

> {
balance: 3.5608486205063e+23,
proposals: []
}

#### 1.5.2. energi.compensationProcess() {#compensationProcess}

Trigger migration draining and compensation fund distribution processing

#### 1.5.3. energi.compensationPropose() {#compensationPropose}

Same as [energi_budgetPropose](#budgetPropose)

## 2. Miner {#miner}

### 2.1. Miner API:

#### 2.1.1. miner.setMinerNonceCap() {#setMinerNonceCap}

**Example:**

```
miner.setMinerNonceCap()
```

**Output:**

> 0

#### 2.1.2. miner.stakingStatus() {#stakingStatus}

Get a status of the staking on the node console
- hash - block hash
- heigth - block heigth
- miner - if miner is enabled
- nonceCap - configuration
staking - staking status overall
totalWeigth - total staking weigth
accounts - staking weight per accounts
- account - address
- weight - account weigth

**Example:**

```
miner.stakingStatus()
```

**Output:**

> {
accounts: [],
hash: "0x64cc7035c7cfdecba22e5d035c4e2026568ed7833b2c73a577b1b4f623541ed0",
height: 35542,
miner: true,
nonceCap: 0,
staking: false,
totalWeight: 0

#### 2.1.3. miner.setAutocollateralize(mode) {#setAutocollateralize}

Some masternode owners desire to stake with their owner's account and automatically deposit available funds. It makes sense to perform such auto-deposit operation only after MN rewards are paid in the current cycle to prevent reset of MN queue position.
Modes to be controlled by ``--miner.autocollateralize switch``:

Switch:
0 - disable
1 - do only after blocks, ignore stake rewards (default)
2 - rapidly try to collateralize, if there is any amounts

**Example:**

```
miner.autocollateralize 0
```

**Output:**

> undefined

## 3. Masternode {#masternode}

### 3.1. Masternode Token API:

#### 3.1.1. masternode.collateralBalance(addr) {#collateralBalance}

Shows the masternode collateral of the account

**Example:**

```
masternode.collateralBalance('0x680cYou_ADDRESS_v3aacf300a')
```

**Output:**

> {
balance: 1e+21,
lastBlock: 4157
}

#### 3.1.2. masternode.depositCollateral(addr, amount[, password]) {#depositCollateral}

Send the collateral in order to announce the masternode, you will be given a token as collateral

**Example:**

```
masternode.depositCollateral ('0x680cf4b9c12736dbab9eec2a481e6101aacf300a', web3.toWei('1000', 'ether'), 'password')
```

**Output:**

> 0x45ddc15c758b7535706a574eeb19ecba529381328a35f3766964cb7bf99b0b43
undefined

#### 3.1.3. masternode.withdrawCollateral(eth.coinbase, amount[, password]) {#withdrawCollateral}

**Example:**

```
masternode.withdrawCollateral('0x680cf4b9c12736dbab9eec2a481e6101aacf300a', web3.toWei('1000', 'ether'))
```

**Output:**

> 0x4d3750f93bfd17f8023a37eceb745f5b409fd3bd06c2d6bfa061dd647e33788c
Undefined

### 3.2. Masternode Registry API:

#### 3.2.1. masternode.listMasternodes() {#listMasternodes}

Get a list of the masternode running or the total of the collateral you have deposited to the masternode in the Energi network
- announcedBlock
- Collateral
- Enode - reconstruted from public key and IPv4
- isActive
- isAlive - based on isActive && !canHeartbeat()
- Masternode
- Owner
- swFeatures
- swVersion - extracted from swFeatures

**Example:**

```
masternode.listMasternodes()
```

**Output:**

> [{
announcedBlock: 3690,
collateral: 3e+22,
enode:
"enode://c21e974cd0bed819e9d46f5986df0bee98a7865f488701ba3b6c1e384af0fcb4cff842609597bf037754b678a1bab26256db86d1c8b88ca1e43bc3675b9b7957\@99.3.46.164:49797",
isActive: true,
masternode: "0x3f3df47085456573fe02910a0484b1dbb7923fe0",
owner: "0x41e80cdaa5720c62ba101550f099882a769689d0",
swFeatures: "0x80200",
swVersion: "0.8.2"
}, {
announcedBlock: 2371,
collateral: 1e+21,
enode: "enode://ed3d6bec77a0b53b6b0c9f6df96391d90ccfafdb206e683895406c9048a271e7dbacf5f94305d62f049f8382a9ead1ccaf9a3344bbbf45872e9544ca7cd789bd\@207.246.86.211:49797",
isActive: true,
masternode: "0xc0e26b4b45a1ab9b69677e99d9c275a942544bc4",
owner: "0xe36cb3e4cfb91e0c7325a2bf32d8136f978f6fd3",
swFeatures: "0x80200",
swVersion: "0.8.2"}]

#### 3.2.2. masternode.masternodeInfo(“owner_or_mn”) {#masternodeInfo}

Gets information about the masternodes assigned to the account

**Example:**

```
masternode.masternodeInfo ("0x680cf4b9c12736dbab9eec2a481e6101aacf300a")
```

**Output:**

> {
announcedBlock: 4165,
collateral: 1e+21,
enode:
"enode://679dd0db3c5adb2204713643e61f59a6e11e83dd21b6710be6709f2adf87fa7d94d39d2dc125c351214e0dbbc404f23c4b41b3f4c26c235e8409116bbc3a6338@149.28.111.46:49797",
isActive: true,
masternode: "0x171e69c48ab948eaeed827ab40161cc7146f2a55",
owner: "0x680cf4b9c12736dbab9eec2a481e6101aacf300a",
swFeatures: "0x0",
swVersion: "0.0.0"}

#### 3.2.3. masternode.announce(owner, enode[, password]) {#announce}

**Example:**

```
masternode.announce ("0x680cf4b9c12736dbab9eec2a481e6101aacf300a", "enode://679dd0db3c5adb2204713643e61f59a6e11e83dd21b6710be6709f2adf87fa7d94d39d2dc125c351214e0dbbc404f23c4b41b3f4c26c235e8409116bbc3a6338\@149.28.111.46:49797", "password")
```

**Output:**

> "0x12e212bcc9088f1c3e7108dc2b9cbd1d245bc71ec798c406c873eabad3ae14a8"

#### 3.2.4. masternode.denounce(owner[, password]) {#denounce}

**Example:**

```
masternode.denounce("0x680cf4b9c12736dbab9eec2a481e6101aacf300a")
```

**Output:**

> "0x794a6791a430e8b105181775f76ef1820b8c04e10c899b231b20959b08b7f041

#### 3.2.5. masternode.stats() {#stats}

Get a status of the masternode on the node console

**Example:**

```
masternode.stats()
```

**Output:**

> {
active: 16,
activeCollateral: 5.05e+23,
maxOfAllTimes: 5.62e+23,
total: 16,
totalCollateral: 5.05e+23
}

## 4. Personal {#personal}

### 4.1. Personal API:

The personal API manages private keys in the key store.

#### 4.1.1. personal_importRawKey {#importRawKey}

Imports the given unencrypted private key (hex string) into the keystore, encrypting it with the passphrase.
Returns the address of the new account.

| **Client** | **Method invocation** |
|------------|-----------------------------------------------------------------|
| Console | personal.importRawKey(keydata, passphrase) |
| RPC | {"method": "personal_importRawKey", "params": [string, string]} . |

**Example:**

```
personal.importRawKey("0x680cf4b9c12736dbab9eec2a481e6101aacf300a")
```

**Output:**

> "0x5dc9b39668d904c6363a42c61297ca1c0950f849"

#### 4.1.2. personal_listAccounts {#listAccounts}

Returns all the Ethereum account addresses of all keys in the key store.

| **Client** | **Method invocation** |
|------------|---------------------------------------------------|
| Console | personal.listAccounts |
| RPC | {"method": "personal_listAccounts", "params": []} . |

**Example:**

```
personal.listAccounts
```

**Output:**

> ["0x680cf4b9c12736dbab9eec2a481e6101aacf300a"]

#### 4.1.3. personal_lockAccount {#lockAccount}

Removes the private key with given address from memory. The account can no longer be used to send transactions.

| **Client** | **Method invocation** |
|------------|--------------------------------------------------------|
| Console | personal.lockAccount(address) |
| RPC | {"method": "personal_lockAccount", "params": [string]} . |

#### 4.1.4. personal_newAccount {#newAccount}

Generates a new private key and stores it in the key store directory. The key file is encrypted with the given passphrase. Returns the address of the new account.

At the Energi3 console, newAccount will prompt for a passphrase when it is not supplied as the argument.

| **Client** | **Method invocation** |
|------------|-------------------------------------------------------|
| Console | personal.newAccount() |
| RPC | {"method": "personal_newAccount", "params": [string]} . |

**Example:**

```
personal.newAccount()
```

**Prompt:**

> Passphrase:
Repeat passphrase:

**Output:**

> "0x5e97870f263700f46aa00d967821199b9bc5a120"

- The passphrase can also be supplied as a string.

**Example:**

```
personal.newAccount("password")
```

**Output:**

> "0x3d80b31a78c30fc628f20b2c89d7ddbf6e53cedc"

#### 4.1.5. personal_unlockAccount {#unlockAccount}

Decrypts the key with the given address from the key store.

Both passphrase and unlock duration are optional when using the JavaScript console. If the passphrase is not supplied as an argument, the console will prompt for the passphrase interactively.

The unencrypted key will be held in memory until the unlock duration expires. If the unlock duration defaults to 300 seconds. An explicit duration of zero seconds unlocks the key until Energi3 exits.

The account can be used with eth_sign and eth_sendTransaction while it is unlocked.

| **Client** | **Method invocation** |
|------------|--------------------------------------------------------------------------|
| Console | personal.unlockAccount(address, passphrase, duration) |
| RPC | {"method": "personal_unlockAccount", "params": [string, string, number]} . |

**Examples:**

- Get prompted for password; use the default timeout:

```
personal.unlockAccount("0x680cf4b9c12736dbab9eec2a481e6101aacf300a")
```

**Prompt:**

> Passphrase:

**Output:**

> true

- Supplying the passphrase and an unlock duration as arguments:

```
personal.unlockAccount("0x680cf4b9c12736dbab9eec2a481e6101aacf300a", "PASSWORD", 30)
```

**Output:**

>true

- Get prompted for passphrase but override the default unlock duration; pass `null` as the passphrase.

```
personal.unlockAccount("0x680cf4b9c12736dbab9eec2a481e6101aacf300a", null, 30)
```

**Prompt:**

> Passphrase:

**Output:**

> true

- Unlock the wallet for staking only; prompted to enter passphase:

```
personal.unlockAccount("0x680cf4b9c12736dbab9eec2a481e6101aacf300a", null, 0 ,true)
```

**Prompt:**

> Passphrase:

**Output:**

> true

There are no UTXOs in Gen 3, so the minimal amount of the account within the last 60 minutes (maturity time) will be used for staking. Only the needed part of such amounts is taken to create a block. So, the same large account can stake many times during maturity period - no need to split amounts. By default, all available amount is tried to be staked. If that is not desired then `--miner.noncecap <amount>` can be used to limit amount being staked per block.

#### 4.1.6. personal_sendTransaction {#sendTransaction}

Validate the given passphrase and submit transaction.

The transaction is the same argument as for `eth_sendTransaction` and contains the from address. If the passphrase can be used to decrypt the private key belogging to tx from the transaction is verified, signed and send onto the network. The account is not unlocked globally in the node and cannot be used in other RPC calls.

| **Client** | **Method invocation** |
|------------|----------------------------------------------------------------|
| Console | personal.sendTransaction(tx, passphrase) |
| RPC | {"method": "personal_sendTransaction", "params": [tx, string]} . |

-
*Note, prior to Energi3 1.5, please use personal_signAndSendTransaction as that was the original introductory name and only later renamed to the current final version.*
-

**Example:**

*Step 1:*

```
var tx = {from: "0x680cf4b9c12736dbab9eec2a481e6101aacf300a", to:"0x8978e517c2b442264e54b890c4428816b66aaf8b", value: web3.toWei(1.23, "ether")}
```

**Output:**

> Undefined

*Step 2:*

```
personal.sendTransaction(tx, "password")
```

**Output:**

> 0x8474441674cdd47b35b875fd1a530b800b51a5264b9975fb21129eeb8c18582f

#### 4.1.7. personal_sign {#sign}

The sign method calculates an Ethereum specific signature with:

sign(keccack256("0x19Ethereum Signed Message:" + len(message) + message))).

By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature. This prevents misuse where a malicious DApp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.

See ecRecover to verify the signature.

| **Client** | **Method invocation** |
|------------|---------------------------------------------------------------------|
| Console | personal.sign(message, account, [password]) |
| RPC | {"method": "personal_sign", "params": [message, account, password]} . |

**Examples:**

```
personal.sign("0xdeadbeaf", "0x9b2055d370f73ec7d8a03e965129118dc8f5bf83", "")
```

**Output:**

> "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"

#### 4.1.8. personal_ecRecover {#ecRecover}

ecRecover returns the address associated with the private key that was used to calculate the signature in personal_sign.

| **Client** | **Method invocation** |
|------------|------------------------------------------------------------------|
| Console | personal.ecRecover(message, signature) |
| RPC | {"method": "personal_ecRecover", "params": [message, signature]} . |

**Examples:**

```
personal.sign("0xdeadbeaf", "0x9b2055d370f73ec7d8a03e965129118dc8f5bf83", "")
```

**Output:**

> "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"

```
personal.ecRecover("0xdeadbeaf", "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b")
```

**Output:**

> "0x9b2055d370f73ec7d8a03e965129118dc8f5bf83"
