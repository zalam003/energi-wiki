---
id: energi-bridge-quick-start
title: Energi Bridge Quick Start Guide
---

Energi Bridge is a bi-directional asset transfer platform that enables the transfer of assets between other networks and the Energi Blockchain.

At our current release, users are able to transfer supported assets from the Ethereum network to Energi, in order to get exposure to dApps on the Energi network such as [Energiswap](https://app.energiswap.exchange/). Any supported asset will also be transferable back to the Ethereum network.

We aim to extend this capability to support other blockchain platforms in the future.

This guide is geared towards users who have a certain degree of knowledge on managing their wallets across different networks. If you need more detailed instructions on how to use the Energi Bridge, refer to our in-depth guide:

* [How-to transfer tokens using Energi Bridge](https://wiki.energi.world/guides/how-to-transfer-tokens-using-energi-bridge)

## 1. Prerequisites
Your wallet service needs to be able to connect to the Energi network in order to use the Energi Bridge. **Currently, we only support MetaMask**. You can find more information on installing and using MetaMask, as well as the required network parameters, in the following guides:

* [MetaMask Quick Start Guide](./getting-started-with-metamask)
* [Connect to the Energi Network](./connect-energi-network)

Keep in mind that you will also need some NRG and ETH available in order to transfer tokens between the different networks:

* You will need **ETH** to pay transaction fees when transferring ERC-20 Tokens from Ethereum to the Energi blockchain.
* You will need **NRG** to pay transaction fees when transferring ERC-20 Tokens from Energi to the Ethereum blockchain.

## 2. Bridging ERC-20 tokens from Ethereum to the Energi blockchain

1. Navigate to the [Energi Bridge](https://bridge.energi.network/) page. Make sure your MetaMask is connected to the **Ethereum Mainnet** network.
2. Select the token you wish to transfer in the list of supported tokens. Your current balance for the token will be updated and you will be able to specify the amount you wish to transfer. **Keep in mind that, when transferring tokens from the Ethereum blockchain, you will need to have ETH in order to cover the transaction fees**. Click the “**Approve**” button and confirm the amount in the MetaMask pop-up.
3. Check the acknowledgment box detailing the required 5000 block confirmations when transferring assets from the Energi blockchain to other networks. This will not affect the confirmation time for inbound transfers to the Energi blockchain from other networks.
4. Click the “**Transfer [TOKEN] to Energi Blockchain**” button, where [TOKEN] will be the name of the asset being transferred. Confirm the transaction and gas fee in the MetaMask pop-up.
5. A progress window will appear showing the transfer progress. You will be able to check the progress of both the transaction for your assets leaving the Ethereum blockchain and the transaction for them being migrated to the Energi blockchain. Once both transactions are complete, your assets will be available on the Energi blockchain. To be able to see and manage your assets on MetaMask, simply add the token contract address, which can be found [here](https://wiki.energi.world/en/faq/energi-bridge-supported-tokens).

## 3. Bridging ERC-20 tokens from Energi to the Ethereum blockchain

1. Navigate to the Energi Bridge page. Make sure your MetaMask is connected to the **Energi Mainnet** network.
2. Select the token you wish to transfer in the list of supported tokens. Your current balance for the token will be updated and you will be able to specify the amount you wish to transfer. **Keep in mind that when transferring tokens from the Energi blockchain, you will need to have NRG in order to cover the transaction fees**. Click the “**Approve**” button and confirm the amount in the MetaMask pop-up.
3. Check the acknowledgment box detailing the required 5000 block confirmations when transferring assets from the Energi blockchain to other networks. **This means that assets moved from the Energi chain will not be unlocked and available to use or trade until the 5000 confirmation period is up, which should take approximately 3.5 days. This is in place to protect our users against theft and fraud.**
4. Click the “**Transfer [TOKEN] to Ethereum Blockchain**” button, where [TOKEN] will be the name of the asset being transferred. Confirm the transaction and gas fee in the MetaMask pop-up.
5. A progress window will appear showing the transfer progress. You will be able to check the progress of both the transaction for your assets leaving the Energi blockchain and the transaction for them being migrated to the Ethereum blockchain. Once both transactions are complete, your assets will be available on the Ethereum blockchain. You can check your wallet's [Etherscan page](https://etherscan.io/) for more details such as the transferred token's contract address.
