---
sidebar_position: 1
id: general
title: General FAQ
---

## What is the difference between Energi Gen 2 & Gen 3?

Energi Gen 2 was a fork of Dash which implements of Proof-of-Stake consensus.
Energi Gen 3 is based on the same code as Ethereum (which allows the support of smart-contracts) while keeping our previous implementations.

:::warning
> **Energi Gen 3 IS NOT an ERC-20 token.**
> Energi Gen 3 has its own blockchain that is compatible with dApps developped for Ethereum.
:::

## How can I get an Energi Gen 3 address?

To understand this question, you need to understand that a Gen 3 address is a key-pair just as it is on the Ethereum blockchain. Therefore, if someone has an Ethereum address, they could use the same address as an Energi Gen3 address. Existing wallets can be used to create such addresses.

However, most existing wallets do not connect to the Energi Gen 3 Mainnet, and will not offer any features to control the wallet. EnergiWallet is such a wallet. MetaMask could also, but it has to be setup properly in order to connect to the Energi Gen3 Mainnet (instead of the Ethereum network).

## How can I use my Energi Gen 3 coins?

The principles are the same as with Ethereum. The difference is that wallets, blockexplorers and DApps need to connect to the Energi Gen3 mainnet. Currently, only EnergiWallet and Energi Explorer connect to the Energi Mainnet. MetaMask could also be used, but it has to be set up manually to connect to the Energi Gen3 mainnet.

## Will Energi be hardware wallet compatible?

We will pursue Ledger support eventually, we anticipate within a year.

## How do I run commands in Energi Core Node?

You can enter a command at any time. Don’t worry, the command will work just fine even though new lines of output may appear on your console.

## How long will it take for my Energi node to sync with the network?

Due to the light proof-of-stake logic utilized by the Energi 3.0 blockchain, node synchronization should be relatively quick with a stable internet connection.

## My console “imports new chain segment” over and over. Is it working properly?

Your console is set to show importation of each new chain segment and this is perfectly normal.

## What to do if I cannot find the expected address(es) in MEW when unlocking my wallet via mnemonic passphrase?

1. Check that you have entered the mnemonic passphrase correctly. Different passphrases will generate a different set of addresses.

2. Go to Ian Coleman’s BIP39 Mnemonic Code Converter [https://iancoleman.io/bip39/](https://iancoleman.io/bip39/).

In the Mnemonic section enter your mnemonic passphrase in the BIP39 Mnemonic input field, then select ETH - Ethereum in the Coin dropdown menu of the same section.

Optionally, if you used a password in addition to your mnemonic passphrase to generate you address(es), enter this password in the BIP39 Passphrase input field.

Make sure you enter the same password as the one used to generate your address(es). Different passwords will generate a different set of addresses.

In the Derivation Path section, navigate to the BIP32 tab and enter the custom derivation path m/44'/39797'/0'/0 in the BIP32 Derivation Path input field.

You should now see the addresses generated from your mnemonic (and optionally your password) in the Derived Addresses section.
Change the number of displayed addresses to 1000 and use the search function of your browser to find if the address(es) you are looking for is(are) present in the list of generated addresses. You can repeat this operation as many times as necessary to find the address(es) you are looking for, changing the starting index to display the next batch of generated addresses.

:::danger
> If you still haven’t found the address(es) you are looking for, you are using a wrong mnemonic passphrase and/or a wrong password.
:::

## I can't copy/paste the commands on Windows. How can I do?

1. Open a text editor (like Notepad) and copy the raw command.

2. Replace example parameters with your own values.

3. Copy the final command.

4. Go to the console, right-click on the mouse. If the pasted command doesn't appear, use the <kbd>RIGHT</kbd> arrow key. You should see your command pasted now.

5. Don't worry if some logs appear under your command, it will still work when you hit <kbd>ENTER</kbd>.

6. If you want to re-run a previous command, use <kbd>UP</kbd> or <kbd>DOWN</kbd> arrow keys to navigate through previous commands.
