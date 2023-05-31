---
sidebar_position: 6
id: masternode
title: Masternode FAQ
---

## What is a Masternode?

Masternodes are full nodes that incentivize node operators to perform the PoS consensus.

As an incentive, node operators receive 40% of the block rewards for each new block that is created.

## How many NRG are required to run a Masternode?

Currently, **1000 NRG** are required as a minimum collateral to run a Masternode.

## Is the collateral in a Masternode locked up for any particular amount of time? Can I shut my masternode down when I want to?

The NRG you put into a masternode as collateral are not time-locked and can be released any time a node operator would like to shut their masternode down.

## How do I start a Masternode?

A full explanation of how to start your masternode using a script or manually is presented in our tutorial below.

## My masternode shows as offline, why?

After the first announcement, the Masternode gets "Online" status only after the first heartbeat transaction which has to be recorded in the blockchain. That means that you need to wait for up to 30 blocks. If the status remains "Offline" then it indicates that the masternode was not setup correctly or is not ready to operate.

## How Masternodes get their rewards allocation?

Per each block, there is a batch of 10 payouts of 0.914 NRG each. Each collateral of 1,000 NRG is eligible for one such payout. If the collateral is more than 1,000 NRG then MN owner gets all payouts in a row.

So, 1,000 NRG collateral gets 0.914 NRG per cycle, 10,000 NRG collateral gets 9.14 NRG per cycle as before, 100,000 NRG collateral gets 91.40 NRG per payout cycle.

## What happens if my Masternode changes its public IP address?

You must re-announce the Masternode to get rewards. If other Masternodes are unable to connect to the announced IP to validate the node then they may issue an "Invalidation" vote. If there are more than 50% of invalidation votes then your Masternode is not getting paid for service at particular payment cycle. That protects the network from fake Maternode services. Masternodes' purpose is to serve network stability.

## How do I perform maintenance tasks with Masternodes?

It is allowed to have a Masternode down for up to 2 hours before it gets deactivated. Sometimes, the periods can be longer, but never less than 2 hours.

However, your Masternode may get the "invalidation" votes what will prevent the Masternode receiving any rewards inside that payment cycle.

## What is the difference between "active" and "alive"/"online" Masternode?

- A masternode that is working properly, has both <kbd>isActive</kbd> and <kbd>isAlive</kbd> **true**. Nexus shows this as Active.

- A Masternode that looses its heartbeat, will have <kbd>isAlive</kbd> **false**. Nexus show this as Offline. During the next 2 hours, <kbd>isActive</kbd> stays **true** and the Masternode is recoverable. If a user is able to solve the issue and the Masternode sends a heartbeat again, there will be no consequences.

- If a Masternode has <kbd>isAlive</kbd> to **false** for more than 2 hours, then the status of <kbd>isActive</kbd> turns **false**. Nexus shows this as inactive. In this case, the Masternode needs to be reannounced.

## For information on how to setup a Masternode, look at the guide below:

:::info
- [Masternode Guide](#)
:::
