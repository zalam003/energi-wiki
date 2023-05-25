---
id: earn-listing-rewards
title: How to Earn Listing Rewards
sidebar_position: 8
---

Listing Rewards is a way to earn passive income in the form of GMI tokens for listing NFTs on the GonnaMakeIt Marketplace. During the first two months of launch, 10 million GMI tokens will be distributed in the listing rewards program. This campaign is focused on jump-starting the GonnaMakeIt Marketplace. Afterwards, 1 million GMI tokens per month will be distributed under the program. The amount allocated is funded by the Treasury and subject to change based on any ongoing promotions.

Top 30 eligible NFT collections by volume is programmatically determined every 30 minutes. The owners who list NFTs from these collections are awarded GMI tokens. The rewards accumulated in the owners' accounts do not expire and may be claimed at any time.

## ​1.​ Earn Listing Reward

### 1.1.​ Eligible Collections

First, we will determine which collections are eligible for the Listing Rewards Program. The Top 30 collections by volume will be used if they meet the following criterias:

- Total item count of 100,000 or fewer
- Greater than 0% royalties
- Only ERC721 tokens are supported

_**NOTE:** Any collections identified to have artificially generated trading volume for the sole purpose of increasing their ranking will be disqualified from receiving any rewards._

### ​1.2.​ Listing Criteria to Earn Rewards

The individual listings must meet the following criteria:

- List 2 or more NFTs from the Top 30 Collections on the GonnaMakeIt Marketplace
- Listings are active and executable on the GonnaMakeIt Marketplace
- Listing price is within 1.2 times of the global collection floor price

### ​1.3.​ Ranking Top 30 Collections Every 30 Minutes

Every 30 minutes, a rolling 7 day snapshot of all NFT transactions is used to calculate the total trade volumes for every eligible collection on OpenSea and GonnaMakeIt Marketplace. This allows us to evaluate the volumes of any newer collections coming into the marketplace. We then rank the collections by trade volume to determine the Top 30 Collections and assign them each base points. The ranking is published on the GonnaMakeIt Marketplace website. The ranking information will be stored in an off-chain database to reduce the amount of ETH gas fee paid.

The base points are used to calculate how many points each eligible listing account will get. The listing points are used to calculate the percentage of GMI tokens the account will be rewarded for the last 30 minutes of trade volume.

| Collection Ranking by 7 Day Trade Volume | Base Points |
| :--------------------------------------- | :---------: |
| Rank 1 Collection                        |     300     |
| Rank 2 Collection                        |     250     |
| Rank 3 Collection                        |     210     |
| Rank 4 Collection                        |     175     |
| Rank 5 Collection                        |     150     |
| Rank 6 Collection                        |     125     |
| Rank 7 Collection                        |     100     |
| Rank 8 Collection                        |     80      |
| Rank 9 Collection                        |     70      |
| Rank 10 Collection                       |     60      |
| Rank 11 Collection                       |     50      |
| Rank 12 Collection                       |     45      |
| Rank 13 Collection                       |     40      |
| Rank 14 Collection                       |     35      |
| Rank 15 Collection                       |     30      |
| Rank 16 Collection                       |     28      |
| Rank 17 Collection                       |     26      |
| Rank 18 Collection                       |     24      |
| Rank 19 Collection                       |     22      |
| Rank 20 Collection                       |     20      |
| Rank 21 Collection                       |     19      |
| Rank 22 Collection                       |     18      |
| Rank 23 Collection                       |     17      |
| Rank 24 Collection                       |     16      |
| Rank 25 Collection                       |     15      |
| Rank 26 Collection                       |     14      |
| Rank 27 Collection                       |     13      |
| Rank 28 Collection                       |     12      |
| Rank 29 Collection                       |     11      |
| Rank 30 Collection                       |     10      |
| Rank ≥31 Collection                      |      0      |

### ​1.4.​ Calculating Points for Each Listing

The table below lists the tranches for each of the reward categories and the multipliers applied to the base points of the Top 30 Collections. The multipliers are meant to reward the listings that are closer to its floor price. As an example, if the listing price is between 1.0x and 1.1x i.e. within 10% of the floor price, a 10x multiplier is applied to the base point for the listing.

| Reward Category | Description                                       | Base Point Multiplier |
| :-------------- | :------------------------------------------------ | :-------------------- |
| LR1             | Listing price is ≥ 1.0x but ≤ 1.1x of floor price | 10x                   |
| LR2             | Listing price is > 1.1x but ≤ 1.2x of floor price | 5x                    |
| LR3             | Listing price is > 1.2x but ≤ 1.5x of floor price | 3x                    |
| LR4             | Listing price is > 1.5x but ≤ 2.0x of floor price | 1x                    |

The point calculations are performed in a 2-step process. First we calculate the points for each eligible listing from the collections. Second we add up all the points for each eligible listing to get a grand total.

```
Points for Listing Collections:
Listing 1 Point = Base point of Collection x Number of Items x Base Point Multiplier
Listing 2 Point = Base point of Collection x Number of Items x Base Point Multiplier
…
Listing 9 Point = Base point of Collection x Number of Items x Base Point Multiplier


Grand Total for 30 Min Period:
Grand Total Listing Point = Listing 1 Point + Listing 2 Point + … + Listing 9 Point
```

_**Example:**_

Following is an example of how the point for Bobby is calculated. Bobby has eligible listings on GonnaMakeIt Marketplace. He listed 3 Bored Apes Yacht Club NFTs at 95 ETH, 4 Otherdeed NFTs for Otherside at 2.5 ETH, and so on. The table below shows which reward category his listing falls under. The respective base point multiplier is applied to the calculations. For his Bored Ape Yacht Club NFT listing, Bobby will get 500 x 3 x 10 = 15,000 points. The GODA Mint Pass exceeds the range of 2x of floor price and is not awarded any points. The grand total for all his listings, Bobby received 24,970 points in the last 30 minutes reward period.

<table>
<thead>
<tr class="header">
<th><strong>Rank</strong></th>
<th><strong>Collection</strong></th>
<th><p><strong>7 Day Rolling Volume</strong></p>
<p><strong>(ETH)</strong></p></th>
<th><strong>Current Floor Price (ETH)</strong></th>
<th><strong>Listing Price (ETH)</strong></th>
<th><strong>Listing Price as % Floor Price</strong></th>
<th><strong>Reward Category</strong></th>
<th><strong>Multiplier</strong></th>
<th><strong>Items Listed</strong></th>
<th><strong>Base Point</strong></th>
<th><strong>Listing Points</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>Bored Ape Yacht Club</td>
<td>12,188.30</td>
<td>90</td>
<td>95</td>
<td>1.06</td>
<td>LR1</td>
<td>10</td>
<td>3</td>
<td>300</td>
<td>9,000</td>
</tr>
<tr class="even">
<td>2</td>
<td>Otherdeed for Otherside</td>
<td>6,443.56</td>
<td>2</td>
<td>2.5</td>
<td>1.25</td>
<td>LR2</td>
<td>5</td>
<td>4</td>
<td>250</td>
<td>5,000</td>
</tr>
<tr class="odd">
<td>3</td>
<td>Mutant Ape Yacht Club</td>
<td>6,159.52</td>
<td>15</td>
<td>25</td>
<td>1.67</td>
<td>LR3</td>
<td>3</td>
<td>2</td>
<td>210</td>
<td>1,260</td>
</tr>
<tr class="even">
<td>4</td>
<td>goblintown.wtf</td>
<td>5,179.27</td>
<td>3</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>175</td>
<td>0</td>
</tr>
<tr class="odd">
<td>5</td>
<td>Clone X - X Takashi Murakami</td>
<td>4,625.02</td>
<td>8</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>150</td>
<td>0</td>
</tr>
<tr class="even">
<td>6</td>
<td>CryptoPunks</td>
<td>4,304.92</td>
<td>10</td>
<td>20</td>
<td>2.00</td>
<td>LR4</td>
<td>1</td>
<td>1</td>
<td>125</td>
<td>125</td>
</tr>
<tr class="odd">
<td>7</td>
<td>Moonbirds</td>
<td>3,310.40</td>
<td>15</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>100</td>
<td>0</td>
</tr>
<tr class="even">
<td>8</td>
<td>ShitBeast</td>
<td>3,119.57</td>
<td>1</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>80</td>
<td>0</td>
</tr>
<tr class="odd">
<td>9</td>
<td>The GODA Mint Pass</td>
<td>2,714.80</td>
<td>6</td>
<td>18</td>
<td>3.00</td>
<td>-</td>
<td>0</td>
<td>5</td>
<td>70</td>
<td>0</td>
</tr>
<tr class="even">
<td>10</td>
<td>Azuki</td>
<td>1,921.80</td>
<td>9</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>60</td>
<td>0</td>
</tr>
<tr class="odd">
<td colspan="7"></td>
<td colspan="3"><strong>Grand Total Points:</strong></td>
<td><strong>15,385</strong></td>
</tr>
</tbody>
</table>

### 1.5. Calculating Rewards For Each Listing

In the first 2 months of launch, we will distribute 10 million GMI tokens per month for listing collections in the GonnaMakeIt Marketplace. Thereafter, 1 million GMI tokens will be distributed each month. This is funded by the Treasury and subject to change based on any ongoing marketing promotions.

We use the monthly allocation to calculate the amount of GMI tokens to be paid for every 30 minutes cycle for that month.

```
                                  Total Listing Reward per Day
Reward Paid per 30 Minutes = -------------------------------------------
                                        (24 x (60 / 30))
```

Every 30 minutes, we proportionally award GMI tokens to all eligible listing using the formula below:

```
                                             Listing Points
Awarded Reward to Listing = ------------------------------------------------------ x Reward Paid per 30 Minutes
                              Total Points for All Listing During Last 30 Minutes
```

_**Example:**_

In this example, we distribute 1 million GMI tokens for the month. The distribution is for eligible listings. It is allocated every 30 minutes. We are showing the distribution for10 listings to illustrate the point. In reality, the rewards will be paid to owners of all eligible listings.

We programmatically calculate how many points each eligible listing will get every 30 minutes. We then calculate the percentage of total points for the period. We are distributing 462.96 GMI tokens every 30 minutes. Based on that, Bobby will receive 51.53188191 GMI during this 30 minute interval.

| Listing Owner | Grand Total Points for last 30 Minute Period | Percentage of all Points Earned by all Listing Owners | GMI Token Rewarded |
| :------------ | :------------------------------------------: | :---------------------------------------------------: | -----------------: |
| bobby         |                    15,385                    |                        11.13%                         |        51.53188191 |
| billy         |                    20,490                    |                        14.82%                         |        68.63102114 |
| bento         |                    21,900                    |                        15.84%                         |        73.35380005 |
| savana        |                    30,050                    |                        21.74%                         |         100.652132 |
| holiday       |                    10,450                    |                         7.56%                         |        35.00215573 |
| jolly         |                    25,444                    |                        18.41%                         |         85.2243876 |
| sanders       |                    8,000                     |                         5.79%                         |        26.79590869 |
| lilly         |                    5,000                     |                         3.62%                         |        16.74744293 |
| dillon        |                    1,000                     |                         0.72%                         |        3.349488587 |
| dorothy       |                     500                      |                         0.36%                         |        1.674744293 |
