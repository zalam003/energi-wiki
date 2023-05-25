---
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

# 1. Energi {#energi}

## 1.1. Migration API:

### 1.1.1. energi.listGen2Coins() {#listGen2Coins}

Lists the amount of Gen2 NRG coins

| **Client** | **Method invocation** |
|------------|--------------------------------------------------------|
| Console | energi.listGen2Coins() |
| RPC | {"method": "energi_listGen2Coins", "params": [string]} . |

### 1.1.2. energi.searchGen2Coins(owners[], include_empty) {#searchGen2Coins}

search by Base58

### 1.1.3. energi.searchRawGen2Coins(raw_owners[], include_empty) {#searchRawGen2Coins}

search by raw Hex

### 1.1.4. energi.claimGen2CoinsDirect(password?, 'add', base58_privkey) {#claimGen2CoinsDirect}

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

### 1.1.5. energi.claimGen2CoinsCombined(password?, dst, file) {#claimGen2CoinsCombined}

Claim all coins from Gen 2 file dump to specific address

| **Client** | **Method invocation** |
|------------|---------------------------------------------------------------------------------|
| Console | energi.claimGen2CoinsCombined(password?, dst, file) |
| RPC | {"method": "energi_claimGen2CoinsCombined", "params": [string, string, string]} . |
