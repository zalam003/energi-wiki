---
id: gmi-airdrop
title: GMI Airdrop
sidebar_position: 3
---

The GMI Airdrop is a program to organically spread the word of the highly anticipated release of the GonnaMakeIt Marketplace. Users who join early will have a chance to reserve bonus rewards on top of the base rewards. They can claim their GMI airdrop after the Token Generation Event (TGE). 500 Million GMI tokens will be distributed via the airdrop on the Ethereum blockchain. The GMI airdrop is funded by the Airdrop and Referral Airdrop allocations. If we exhaust the funds under these allocations, we will tap into the Available Treasury to supplement the need. The [GMI Tokenomics](/docs/about/about-tokenomics) lists the allocation of the GMI tokens.

Snapshots have been taken of all accounts to calculate the airdrop a user will receive. The snapshots have been taken on:

- OpenSea Volume: Oct 15, 2022
- LOOKS, X2Y2, UNI, and SUSHI Token Holding: Nov 1, 2022
- ETH Holding: Nov 1, 2022; block height 15876942

The base amount of GMI tokens a user receives will be proportional to the base GMI amount allocated for each of the following reserve criteria:

|                   | Reserve Criteria                                                                                   | GMI Airdrop Base Allocation |
| :---------------- | :------------------------------------------------------------------------------------------------- | --------------------------: |
| OpenSea           | Users volume proportional to the Total Volume in ETH on OpenSea since inception                    |                        100M |
| NRG Diamond Hands | Based on the NRG holdings on the users account                                                     |                         40M |
| ETH Stacker       | Based on the ETH holdings on the users account                                                     |                         40M |
| LooksRare         | Users total LOOKS tokens staked in LooksRare and/or held in proportion to total circulation        |                          5M |
| X2Y2              | Users total X2Y2 tokens staked in X2Y2 and/or held in proportion to total circulation              |                          5M |
| Sushiswap         | Users total xSUSHI staked in Sushiswap and/or SUSHI tokens held in proportion to total circulation |                          5M |
| Uniswap           | Users total UNI tokens held in proportion to total circulation                                     |                          5M |

## 1. Base GMI Reservable

GMI tokens from each of the protocols will be added up to give the total GMI tokens the account address has reserved as a base amount. To learn more about how much GMI is reserved see [section 3.1](#31-base-gmi-reward) below.

### 1.1. OpenSea Volume

100M GMI will be proportionally distributed to all who have volume from sales on OpenSea. The sales can be in ETH, WETH, USDC and DAI. The volume is measured from when OpenSea started till Oct 15, 2022.

```
Base GMI Tokens from OpenSea Volume = 100M * Users OpenSea Volume in ETH / Total OpenSea Volume ETH
```

### 1.2. NRG Diamond Hands

To receive the _NRG Diamond Hands_ reward, NRG must be held until the GMI Token Generation Event (TGE) which is estimated to occur in the Q4 2023. Additionally, NRG must have been held for a minimum of 69 days. If you move or sell your NRG before the TGE, you will lose your bonus. NRG can be bought up to the TGE. You have to hold the NRG for 69 days before you can claim the airdrop. A total of 40M GMI tokens are allocated for this program.

You will receive a base GMI reward for holding NRG. For example, if you hold 5,000 NRG, you will be eligible for 3,000 GMI airdrop.

The table below lists the base reward for holding NRG in your designated address. See the formula in [section 3](#3-how-to-calculate-total-airdrop-reward) below.

|                     NRG Holding | Base GMI Reward |
| ------------------------------: | :-------------: |
|                   ≥ 250,000 NRG |     250,000     |
| ≥ 100,000 NRG and < 250,000 NRG |     85,000      |
|  ≥ 25,000 NRG and < 100,000 NRG |     17,500      |
|    ≥ 5,000 NRG and < 25,000 NRG |      3,000      |
|     ≥ 1,000 NRG and < 5,000 NRG |       550       |
|       ≥ 200 NRG and < 1,000 NRG |       100       |

### 1.3. ETH Stackers

Users who hold ETH on Nov 1, 2022, block height 15876942 on their account will be rewarded GMI tokens. If you buy ETH after block height, you will not receive any rewards. If, for example, you held 4 ETH on your account on the snapshot block, you will be eligible for 200 GMI tokens. A total of 40M GMI tokens are allocated for the ETH Stackers bonus program.

The table below lists the amount of GMI that will be reserved for holding ETH on the account:

|               ETH Holding | Base GMI Reward |
| ------------------------: | :-------------: |
|       ≥ 1 ETH and < 3 ETH |       100       |
|      ≥ 3 ETH and < 10 ETH |       200       |
|     ≥ 10 ETH and < 30 ETH |       420       |
|     ≥ 30 ETHand < 100 ETH |       800       |
|   ≥ 100 ETH and < 300 ETH |      1,600      |
| ≥ 300 ETH and < 1,000 ETH |      3,200      |
|               ≥ 1,000 ETH |      6,900      |

### 1.4. LooksRare Holding

5M GMI tokens will be distributed to all users who stake and/or hold LOOKS tokens in proportion to total LOOKS tokens in circulation on Nov 1, 2022. The staking has to be in LooksRare.

```
Base GMI Tokens for LOOKS Holding = 5M * (LOOKS Token Staked + LOOKS Token Held) / Total LOOKS in Circulation
```

### 1.5. X2Y2 Holding

5M GMI tokens will be distributed to all users who stake and/or hold X2Y2 tokens in proportion to total X2Y2 tokens in circulation on Nov 1, 2022. The staking has to be in X2Y2.

```
Base GMI Tokens for X2Y2 Holding = 5M * (X2Y2 Token Staked + X2Y2 Token Held) / Total X2Y2 in Circulation
```

### 1.6. SUSHI Holding

5M GMI tokens will be distributed to all users who hold and/or stake SUSHI tokens. The amount of GMI token allocated to the user will be proportional to the total SUSHI tokens in circulation plus xSUSHI staked on Sushiswap in proportion to the total xSUSHI in circulation on Nov 1, 2022. The price of SUSHI and xSUSHI are taken from the time when the snapshot was taken (Nov 1, 2022).

The formula below is used to calculate the base GMI token allocated to the user:

```
Total_SUSHI_Marketcap = SUM(Users_SUSHI_Balance) * SUSHI_Price
Total_xSUSHI_Marketcap = SUM(Users_xSUSHI_Balance) * xSUSHI_Price

Base GMI Tokens for SUSHI Holding = 5M * (Users_SUSHI_Balance * SUSHI_Price + Users_xSUSHI_Balance * xSUSHI_Price) / (Total_SUSHI_Marketcap + Total_xSUSHI_Marketcap)
```

### 1.7. UNI Holding

5M GMI tokens will be distributed to all users who hold UNI tokens in proportion to total UNI tokens in circulation on Nov 1, 2022.

```
Base GMI Tokens for UNI Holding = 5M * UNI Token Held / Total UNI in Circulation
```

## 2. Bonus Rewards

The bonus rewards compound. [Section 3.2](#32-bonus-reward) below has the formula to calculate the total GMI rewards you can reserve and eventually claim.

### 2.1. NRG Diamond Hands

You will receive a bonus reward for holding NRG. The bonus is a multiplier to the total base GMI rewards. For example, if you hold 5,000 NRG, you will be eligible for 3,000 GMI plus a 40% bonus on top of your base GMI airdrop.

The table below lists the bonuses for holding NRG in your designated address. See the formula in [section 3](#3-how-to-calculate-total-airdrop-reward) below.

|                     NRG Holding | Additional Bonus |
| ------------------------------: | :--------------: |
|                   ≥ 250,000 NRG |       100%       |
| ≥ 100,000 NRG and < 250,000 NRG |       69%        |
|  ≥ 25,000 NRG and < 100,000 NRG |       50%        |
|    ≥ 5,000 NRG and < 25,000 NRG |       40%        |
|     ≥ 1,000 NRG and < 5,000 NRG |       30%        |
|       ≥ 200 NRG and < 1,000 NRG |       20%        |

### 2.2. Early Degen Bonus

The _Early Degen Bonus_ program is based upon the timing of when you reserve your reward. If you reserve your GMI Airdrop within the 1st month of our pre-launch, you will receive an additional 30% on top of your base GMI airdrop. To be eligible, you have to confirm your email address. For example, if you reserve your GMI airdrop within the 1st month of our pre-launch, you will receive an additional 30% bonus on top of your eligible airdrop.

The table below lists the additional bonus you can claim by the reserve month.

| Reserve Month        | Bonus |
| -------------------- | :---: |
| Reserve in 1st Month |  30%  |
| Reserve in 2nd Month |  25%  |
| Reserve in 3rd Month |  20%  |
| Reserve in 4th Month |  15%  |
| Reserve in 5th Month |  12%  |
| Reserve in 6th Month |  10%  |

\*_Note: These reserve bonuses will end once the GMI tokens are launched._

### 2.3. “Aped-in” Bonus

The _“Aped-in” Bonus_ is based on your ranking at the time you make the reserve. To be eligible, you have to complete one of the following:

- Follow us on [Twitter](https://twitter.com/GonnaMakeItNFTs)
- Join our [Telegram](https://t.me/GonnaMakeitNFTs) channel
- Join our [Discord](https://discord.com/invite/E9v8aPh) channel

An example, if you are the 50th person when making the reserve, you will receive an additional 50% airdrop bonus on top of all your existing amount eligible.

The table below lists the bonus amount you can earn based on your ranking.

| Ranking                 | Bonus |
| ----------------------- | :---: |
| First 1,000 to Reserve  |  50%  |
| Next 3,000 to Reserve   |  40%  |
| Next 6,000 to Reserve   |  30%  |
| Next 10,000 to Reserve  |  20%  |
| Next 20,000 to Reserve  |  15%  |
| Next 69,000 to Reserve  |  12%  |
| Next 420,000 to Reserve |  10%  |

### 2.4. Tweet Bonus

We will have numerous tweet campaigns, each with a 6.9% bonus. We are currently allocating a total of ~21% in bonus’ for tweeting about GMI Airdrop on Twitter, accounting for 3 tweet campaigns. There may be changes and adjustments before each campaign, we will announce the details of them before we start them. Note these will be validated before the token generation event, at which point you will be eligible to claim the Tweet Bonus.

### 2.5. Airdrop Referral Bonus

The _Airdrop Referral Bonus_ is a multi-tier rewards program. It is different from the [ongoing Referral Rewards](/docs/about/gmi-referral) program of GonnaMakeIt Marketplace. This section only discusses rewards related to the _Airdrop Referral Bonus_.

When you use a friend’s referral link, you will reserve 20% of your base reward. Your friend will reserve 20% of your base reward and her bonus referral.

Additionally, every time someone uses your referral link, you will reserve 20% of their base reward (Level 1 Referee). If any of your Level 1 Referees secure their own referrals, you earn an additional 10% of the base reward of the Level 2 Referee. If the Level 2 Referee gets their own batch of referrals to sign up to the Marketplace, you reserve another 5% of the Level 3 Referee’s base reward. There’s no cap on how many people a user can add to their referral group.

The table below lists the referee levels and the respective bonus percentages you would reserve off of their base reward:

| Recipients      | Multi-Tier Reward |
| --------------- | :---------------: |
| Level 1 Referee |        20%        |
| Level 2 Referee |        10%        |
| Level 3 Referee |        5%         |

Example: For simplicity, let’s consider we have 4 users. Each of them has reserved a base reward. User A refers User B, User B refers User C and User C refers User D. The following table illustrates how much total Airdrop Referral Bonus each will be able to claim after launch of the Marketplace.

|                                    |          **User A**         |         **User B**         |       **User C**         | **User D** |
| :--------------------------------- |---------------------------: | -------------------------: | -----------------------: | ---------: |
| Total Base Reward Reservable (a)   |                     100,000 |                     10,000 |                    5,000 |      3,000 |
|                                    |                             |                            |                          |            |
| Level 1 Referee (20%)              | = 10,000 x 20%<br />= 2,000 | = 5,000 x 20%<br />= 1,000 | = 3,000 x 20%<br />= 600 |          0 |
| Level 2 Referee (10%)              |    = 5,000 x 10%<br />= 500 |   = 3,000 x 10%<br />= 300 |                        0 |          0 |
| Level 3 Referee (5%)               |     = 3,000 x 5%<br />= 150 |                          0 |                        0 |          0 |
|    *Total Base from Referral (b)*  |                   **2,650** |                  **1,300** |                  **600** |      **0** |
|                                    |                             |                            |                          |            |
|  *Total Base Claimable (c = a +b)* |                 **102,650** |                 **11,300** |                **5,600** |  **3,000** |
|                   *Multiplier (d)* |                        300% |                       200% |                     150% |       125% |
|                                    |                             |                            |                          |            |
| **Total Claimable upon Launch<br />(c x d)**   | = 102,650 x 300%<br />= **307,950** | = 11,300 x 200%<br />= **22,600** | = 5,600 x 150%<br />= **8,400** | = 3,000 x 125%<br />= **3,750** |

### 2.6. Spread the Word Bonus

The _Spread the Word Bonus_ is meant to reward you for spreading the word about the highly anticipated release of GonnaMakeIt Marketplace to your friends and family. The more that sign up using your referral, the more you will be rewarded.

The table below lists the bonus amount you can earn based on the number of people you refer:

| People Referred | Bonus |
| :-------------- | :---: |
| ≥ 1 and < 3     |  10%  |
| ≥ 3 and < 10    |  20%  |
| ≥ 10 and < 30   |  30%  |
| ≥ 30 and < 100  |  40%  |
| ≥ 100           |  50%  |

## 3. How to Calculate Total Airdrop Reward

### 3.1. Base GMI Reward

The following formula is used to calculate the base GMI tokens reservable to you:

```
Total Base GMI Reservable = OpenSea Volume
                            + NRG Held
                            + ETH Held
                            + LOOKS Staked + LOOKS Held
                            + X2Y2 Staked + X2Y2 Held
                            + xSUSHI Staked + SUSHI Held
                            + UNI Held
```

### 3.2. Bonus Reward

The bonus payout is cumulative:

```
Total GMI Claimable upon Launch = (Total Base GMI Reservable + Total Base from Referral)
                                  x Early Degen Bonus
                                  x Aped-in Bonus
                                  x NRG Diamond Hands Bonus
                                  x Spread the Word Bonus
                                  x Tweet Bonus
                                  x Referral Bonus
```

### 3.3. Example

_The Maximum Total Multiplier:_

```
1.3 (Early Degen Bonus) x 1.5 (Aped-in Bonus) x 2.0 (NRG Diamond Hands Bonus) x 1.5 (Spread the Word Bonus) x 1.2 (Tweet Bonus) x 1.2 (Referral Bonus) = 8.424x
```

_Reservable GMI Tokens:_

If a user is eligible for 1000 GMI as a base and the maximum of all bonuses, they will receive `1,000 GMI x 8.424 = 8,424 GMI`.

## 4. Referral Rewards Dashboard

Connect your MetaMask wallet to the [Referral Rewards Dashboard](https://ref.gonnamakeit.com/referral) to view details of your potential earnings post launch of GonnaMakeIt Marketplace.

## 5. Eligibility Criteria

To be eligible to claim the airdrop, the user must have the following:

- List 2 or more NFTs on the GonnaMakeIt Marketplace
- Listings are active and executable on the GonnaMakeIt Marketplace
- Listing price is within 1.2 times of the global collection floor price
