---
sidebar_position: 3
id: energi-bridge-faq
title: Energi Bridge FAQ
---

## What is Energi Bridge?

Energi Bridge is an application that allows users to bridge digital assets between other blockchains and Energi. This allows users to effectively “move” the bridged assets from one chain to the other. Currently, Energi Bridge connects the Ethereum and Energi blockchains. However, in the future, it will connect other chains to Energi as well. 

You can access the Bridge at:

**Testnet**: [https://bridge.test.energi.network](https://bridge.test.energi.network)

**Mainnet**: [https://bridge.energi.network](https://bridge.energi.network)

## What can you do with the Energi Bridge?

The purpose of Energi Bridge is to enable the transfer of assets between other chains and the Energi blockchain without the need for multiple transactions or a centralized exchange. This means that users can move their assets from other chains, such as Ethereum, onto the Energi blockchain to be used and traded in dApps like Energiswap. Assets can also be moved from the Energi blockchain to Ethereum or any other chains that are connected in the future.

## How does Energi Bridge work?

Energi Bridge has two components:

* **Smart Contracts**: Smart contracts are deployed on both the Ethereum and Energi blockchains. They store and lock tokens on the blockchain the tokens originate from, and mint and burn tokens on the destination blockchain in a 1:1 ratio. The number of tokens in circulation remains the same.

* **Validators**: Validators listen to events on both Ethereum and Energi bridge smart contracts. When a token is locked on the Ethereum blockchain, the validators validate it and relay the information to the Energi blockchain. The smart contract on the Energi blockchain then mints the exact same amount of the token. On the reverse, when a bridged token is moved back from the Energi blockchain to Ethereum, the token is burned on the Energi blockchain. The validators validate the burn and relay the information to the Ethereum blockchain, where the same amount of the original token is unlocked from the smart contract.

## Which wallets are supported by Energi Bridge?

Currently, Energi Bridge supports MetaMask.

Other wallets such as WalletConnect, Coinbase Wallet, Fortmatic, and Portis will be supported in the future.

## What kind of assets can be bridged using Energi Bridge?

Energi maintains a whitelist of tokens that can be bridged between the Ethereum and Energi blockchains. You can transfer only these whitelisted tokens.

There is no limit on the amount of tokens that can be bridged.

## Does the token supply increase when using Energi Bridge?

Energi Bridge stores and locks the token on the Ethereum blockchain and mints the exact same amount of tokens on the Energi blockchain. By doing this, the token holder relinquishes ownership of the tokens on the Ethereum blockchain and the locked tokens are taken out of circulation from the Ethereum blockchain. The tokens minted on the Energi blockchain represent the original tokens.

As a result of the lock and mint process, the total circulating supply of the original token remains the same.

## What happens to my original tokens if I sell the bridged tokens?

A bridged token has the same amount of the original token locked in an Ethereum smart contract.
There is no change to the locked amount when the bridged token is traded in Energiswap.

## Can I send my bridged tokens back from Energi to Ethereum?

Yes.

You can send any bridged tokens purchased on the Energi blockchain back to the Ethereum blockchain. During the transfer, tokens are burned on the Energi blockchain and the same amount of the original token is released from the smart contract on the Ethereum blockchain.

## Can I bridge as many tokens as I want, or is there a limit?

Energi maintains a whitelist of tokens that can be bridged between the Ethereum and Energi blockchains. You can transfer only these whitelisted tokens.

There is no limit on the amount of tokens that can be bridged.

## Are bridged tokens transferable?

Yes.

You can send the bridged tokens to other users and they can transfer them back to their accounts on the Ethereum blockchain.
You CANNOT send the bridged tokens to an exchange because the tokens are a wrapped version of the original token on the Energi blockchain and do not exist on the Ethereum blockchain.

## Can I send NRG tokens to Ethereum using Energi Bridge?

Yes.

You can send NRG from the Energi blockchain to the Ethereum blockchain. On the Ethereum blockchain, you will receive the same amount of NRGE tokens.

**NOTE**: you will be charged an Ethereum gas fee to transfer NRG to NRGE.

## What tokens are supported by Energi Bridge?

Look at the following page for a list of supported tokens:

* [Supported Tokens on Energi Bridge](https://wiki.energi.world/en/faq/energiswap-tokens-mainnet#bridgeable_tokens)

## Is there a cost to use the Energi Bridge?

Yes, there is a cost to transfer tokens between the Ethereum and Energi blockchains.

Sending tokens from Ethereum to the Energi blockchain:

* Tokens are locked in a smart contract on the Ethereum blockchain and the same amount of the token is minted on the Energi blockchain.

* The bridge charges a gas fee plus a deposit fee in **ETH** to complete the transfer.

Sending tokens from Energi to Ethereum blockchain:

* Tokens are burned when sending from Energi to the Ethereum blockchain.

* The bridge charges a gas fee plus a deposit fee in **NRG** to complete the transfer.

:::warning
> **NOTE: Currently the Energi Bridge does not support transactions made using Brave's Crypto Wallet. We recommend using MetaMask for any Energi Bridge related transactions.**
:::
