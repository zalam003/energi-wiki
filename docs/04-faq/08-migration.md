---
sidebar_position: 8
id: migration
title: Migration FAQ
---

## Why do we need to migrate coins from Gen 2 to Gen 3?

As Energi Gen 3 is based on a different kind of blockchain, all balances need to be migrated.

## How does the migration process work?

At a specific time (block), Gen 2 gets locked from any further transactions on the blockchain. At that moment, a snapshot is made with all the balances, which gets imported into Gen 3. Unfortunately, this is not just a simple "copy and set over" action, because we do not own and control the Gen 2 private keys, and we did not create (nor do we own) the Gen 3 key pairs.

**Therefore, the final migration needs to be done by the users themselves** by creating a Gen 3 address (holding their private key) and by initiating the migration with their Gen 2 private key.

## Do I need to sync with Gen 2 blockchain before migrating?

The short answer is no. You do not need Gen 2 Energi Core Wallet to fully sync with the Gen 2 blockchain before migrating the funds to Gen 3. We recommend you verify your wallet balance on [Gen2 Block Explorer](https://explorer.gen2.energi.network/){target="_Blank"} before starting the migration.

Details on how to migrate using Energi Core Wallet can be found on the page below:

[https://wiki.energi.world/en/how-to/migrate-gen2-wallet](https://wiki.energi.world/en/how-to/migrate-gen2-wallet)

## Why do I get error 413 on Gen 2 migration?

Gen 2 migration approach is targeted at average users with a standard keypool size. The theoretical maximum for this method is slightly below 8k keypool addresses. Please use advanced Core Node migration approach instead.
