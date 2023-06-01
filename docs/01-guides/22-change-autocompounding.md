---
sidebar_position: 23
id: change-autocompounding
title: Change Auto-compounding
---

## 1. Run the `autocompounding.sh` script

Login to VPS as `nrgstaker` and run the following script:

```
bash -ic "$(wget -4qO- -o- raw.githubusercontent.com/energicryptocurrency/energi3-provisioning/master/scripts/linux/autocompounding.sh)" ; source ~/.bashrc
```

![auto-compounding_start_script.png](../assets/images/auto-compounding/auto-compounding_start_script.png)

## 2.1. Scenario 1: No Parameters Entered

By default, miner.autocompounding is enabled. There is no need to set the parameter. In this scenario, you will see the screen below:

![auto-compounding_parameter_not_entered.png](../assets/images/auto-compounding/auto-compounding_parameter_not_entered.png)

Type `d` to add the miner.autocompounding parameter.

![auto-compounding_set_on.png](../assets/images/auto-compounding/auto-compounding_set_off.png)

Afterwards, turn on Staking once again on your Core Node by following the onscreen instructions:

![auto-compounding_set_on.png](../assets/images/auto-compounding/auto-compounding_set_off_finish.png)

## 2.2. Scenario 2: Enable Auto-compounding

If the miner.autocompounding parameter is disabled, you will see the screen below:

![auto-compounding_not_set.png](../assets/images/auto-compounding/auto-compounding_disabled.png)

Type `e` to enable the miner.autocompounding parameter. It will attach to Core Node and enable autocompounding.

![auto-compounding_set_on.png](../assets/images/auto-compounding/auto-compounding_set_on.png)

Afterwards, turn on Staking once again on your Core Node by following the onscreen instructions:

![auto-compounding_set_on.png](../assets/images/auto-compounding/auto-compounding_set_on_finish.png)

## 2.3. Scenario 3: Disable Auto-compounding

If the miner.autocompounding parameter is enabled, you will see the screen below:

![auto-compounding_remove.png](../assets/images/auto-compounding/auto-compounding_enabled.png)

Type `d` to disable the miner.autocompounding parameter. It will attach to Core Node and disable autocompounding.

![auto-compounding_set_off.png](../assets/images/auto-compounding/auto-compounding_set_off.png)

Afterwards, turn on Staking once again on your Core Node by following the onscreen instructions:

![auto-compounding_set_on.png](../assets/images/auto-compounding/auto-compounding_set_off_finish.png)
