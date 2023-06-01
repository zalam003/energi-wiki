---
sidebar_position: 17
id: aws-windows-vps
title: Set up Masternode on Windows VPS at AWS
---

## ​1.​ Create / Login to your AWS Account {#create}

### 1.1. Login via a web browser (**Brave, Firefox, Chrome, etc.**)

Navigate to [**https://aws.amazon.com/**](https://aws.amazon.com/)

![](../assets/images/vps-aws-windows/35babd9bb1bfab732d829684fd6e7e83.png)

1.1.1. If you do not have an **AWS Account**, click **Create an AWS Account** and continue the steps to create one.

![](../assets/images/vps-aws-windows/aca7a75fb3fcd3b63a1ff60eb9755060.png)

1.1.2. If you already have an **AWS Account**, click **My Account** and then click **AWS Management Console** to log into your AWS account.

![](../assets/images/vps-aws-windows/8e34356ad3956779c71e79d85a8f0ae4.png)

### 1.2. AWS Management Console

You will then be redirected to the AWS Management Console, which looks like this:

![](../assets/images/vps-aws-windows/ec2872dc2fcde575f24449b16caad46d.png)

1.2.1. In the top right-hand corner, next to your name, you will find the location of your **AWS Service**. Click the **location** and choose a **location closest to you**. In our example below, we will use **US East (Ohio) us-east-2**

![](../assets/images/vps-aws-windows/fa35f25969452cc96612b2db71e454a8.png)

1.2.2. On the **AWS Management Console** page, click on **EC2** under the **All Services** tab.

![](../assets/images/vps-aws-windows/51de053f2cf1734091ac2f032982563a.png)

### 1.3. Navigate to the **Resources** page and click **Launch Instance**.

![](../assets/images/vps-aws-windows/f7bc49167ad56da723507221943e0ae9.png)

### 1.4. Choose an Amazon Machine Image (AMI).

![](../assets/images/vps-aws-windows/ea0b5fafedad5112faf8141f7787ec26.png)

1.4.1. In the search bar, type **Windows**. You will find **Microsoft Windows Server 2019 Base**. On the right of this, click **Select**.

![](../assets/images/vps-aws-windows/86f66dc426d11d7b6386918e4197563d.png)

![](../assets/images/vps-aws-windows/72bc45cc32e8e990aa1303e531ad53cd.png)

1.4.2. You will be sent to the next page — **Step 2: Choose an Instance Type.** Here, we choose **t2.medium**. This is recommended for Core Node. When chosen, on the bottom right corner of the page, click **Next: Configure Instance Details**.

![](../assets/images/vps-aws-windows/c9507f9ae73c7008c827f33eeaf64f61.png)

![](../assets/images/vps-aws-windows/1952c93ad3e0f3a70804745508fd6f95.png)

1.4.3. You will then arrive at **Step 3: Configure Instance**. Here you can continue by clicking **Next: Add Storage**

**Note**: You can tick the box that says **Unlimited** for greater performance for this instance when it’s needed. You will be charged more. Read more [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode.html?icmpid=docs_ec2_console)

![](../assets/images/vps-aws-windows/0c649b4879dbd9946a6d2ccc42aa6a87.png)

1.4.4. You will then arrive at **Step 4: Add Storage.** Here we will add a second storage. Click **Add New Volume**.

![](../assets/images/vps-aws-windows/5c4e74044ec05bc8917a2ba900243fc7.png)

1.4.5. After Clicking **Add New Volume**, ensure the **Size** of the second volume is **150 GiB** minimum (recommended **200** GiB), the **Volume type** is **General Purpose SSD,** and **Delete on Termination** is **ticked.** Then, click **Next: Add Tags**.

![](../assets/images/vps-aws-windows/527719521b7f2ab4a39a8bbcfb7e6a06.png)

1.4.6. At **Step 5:** **Add Tags**, there is nothing to be done. Just click **Next: Configure Security Group**.

![](../assets/images/vps-aws-windows/d838cb49939da087263b65e980562855.png)

1.4.7. You will then be directed to **Step 6: Configure Security Group**. Here, we will set up the firewall rules for your VPS Instance.

![](../assets/images/vps-aws-windows/7c2a94ed28ae14729bd4d32cdc1778db.png)

1.4.7.1. If you already have a **Security Group** you would like to use, choose **Select an existing security group**. Choose the group and click **Review and Launch.**

![](../assets/images/vps-aws-windows/d4a5f79016726976a2fd634286e8f5d8.png)

1.4.7.2. If you would like to create one, we recommend the following settings below. If your **PC IP address** changes frequently, it is recommended you change **My IP** to **Anywhere.** When completed, click **Review and Launch**

![](../assets/images/vps-aws-windows/c72f78b224776726ea58f6c80581a999.png)

![](../assets/images/vps-aws-windows/6ba6266040aa898660730bf271e702a7.png)

1.4.8. You are then shown the **Select an existing key pair or create a new key pair** pop-up. Here, you can choose an **existing key pair**, **create a new key pair** or **proceed without one**. For this guide, we prefer to **Create a new key pair**.

![](../assets/images/vps-aws-windows/9dfa79b782c63eef3cd14e8ed9d3a616.png)

![](../assets/images/vps-aws-windows/2daf0a64aea5790865bdfaf120bf891d.png)

1.4.9. Give the **Key Pair** a name, and click **Download Key Pair.** Ensure you download the **Key Pair** and keep it in a safe place. When completed, press **Launch Instances**

![](../assets/images/vps-aws-windows/9ca1a4584ba97a83ac630b4754b111a0.png)

:::tip Success
**Congratulations**, you have successfully created a **Windows VPS Instance on AWS**.
:::

## ​2.​ Log into the Windows VPS Instance on AWS {#login}

### 2.1. Click on the **Instance ID**. The example below shows an ID **i-0bb1e92d16297fe08**.

![](../assets/images/vps-aws-windows/64d1a0cbdf21bba2414a0b5bc5e7158b.png)

2.1.1. You will then be redirected to **EC2 – Instance Page**. There you will see your VPS with a **blank name**. Let’s name it now. Give it any name you want.

![](../assets/images/vps-aws-windows/70a8d0452f9217368c19c37def6411f4.png)

![](../assets/images/vps-aws-windows/5a43d46204cf683ae5859dbac6d5ea1a.png)

2.1.2. Next, let’s connect to your **Windows VPS Instance**. Right-click anywhere on VPS Instance name and click **Connect**.

![](../assets/images/vps-aws-windows/b1983bf63c4e631cdcaa2c6c7c338778.png)

2.1.3. You will be carried to the **Connect to Instance** page and click on **RDP Client**.

![](../assets/images/vps-aws-windows/ecb27b30280255d7810d0002df6954ef.png)

2.1.4. Here you will be given instructions on how to connect to the VPS instance. We first need to press **Download remote desktop file**. Save this file on your desktop.

![](../assets/images/vps-aws-windows/58cc9feb02eb90f5e9d08a9562285637.png)

2.1.5. We require the password for the VPS. To get this, press **Get Password.** You are required to provide the **Key Pair** file we downloaded earlier. Click “browse” to find and select the key pair file on your desktop.

![](../assets/images/vps-aws-windows/c8cfc87440881a7c2d2402b80c05177a.png)

![](../assets/images/vps-aws-windows/40781f47468f7d37e35664815474b341.png)

![](../assets/images/vps-aws-windows/ec6eca7b2533d81e47f6e5dfd3fb474e.png)

2.1.6. When you have completed this, click **Decrypt Password.**

![](../assets/images/vps-aws-windows/b15351483907605c852c4a2abc3ed7df.png)

2.1.7. Your password should now be visible. Copy and save the password in a safe location. We will need this to login to the VPS.

![](../assets/images/vps-aws-windows/ab0108abbf8103e7c50a0a38d3207049.png)

### 2.2. Open the RDP File you downloaded and saved to your desktop.

![](../assets/images/vps-aws-windows/564121affd4c6fa83747fc688782928d.png)

2.2.1. You may see this window pop up. Click **Continue.**

![](../assets/images/vps-aws-windows/3fcc01e7e2a8f9d146c407dc1a443bed.png)

2.2.2. You will be prompted for a password. This will be the password we got a few steps ago. After entering your password, click **OK**. Check **Remember me** if you do not want to be prompted for the password in the future.

![](../assets/images/vps-aws-windows/ce5336155007f81da7a802fb08e9385f.png)

2.2.3. You will then see this new pop-up. Click **Yes.**

![](../assets/images/vps-aws-windows/41b008ce332ef77150128ad39a948b34.png)

:::tip Success
Congratulations. We have successfully connected to our Windows VPS Instance.
:::

![](../assets/images/vps-aws-windows/763e5a2441d4881ea38757192f496072.png)

## 3. Configure Windows VPS Instance on AWS {#configure}

### 3.1. Disk Configuration: Click the **Start Button** on the bottom left corner of the screen. Then type: **Disk Management** in the search box.

![](../assets/images/vps-aws-windows/5eb1c1d968c0f746e265aa37fb1c54d6.png)

3.1.1. You should see **Create and format hard disk partitions.** Click on that.

![](../assets/images/vps-aws-windows/a3a1eb2f733526d6bed97ad2e6342227.png)

3.1.2. A new Window called **Disk Management** will appear.

![](../assets/images/vps-aws-windows/092a529c240431bc84f1dc714b0a2005.png)

3.1.3. If you have been following this guide, you will see **Disk1**.

![](../assets/images/vps-aws-windows/b44b632ac2dfd098c7220e72b372bb29.png)

3.1.4. Right click on **Disk 1**, then click **Online.**

![](../assets/images/vps-aws-windows/654db1d7b11b5bca90c96a3c06cbde50.png)

3.1.5. Right Click on **Disk 1** again, then click **Initialize Disk.**

![](../assets/images/vps-aws-windows/cb3ec1308a6b30e53df1e2f447ff438c.png)

3.1.6. Initialize Disk Window should appear. Ensure the radio button is set to MBR, then click **OK**.

![](../assets/images/vps-aws-windows/7aaafa0cb15f32e92180b1363c10981f.png)

3.1.7. Right-click on the area that says **100.00 GB Unallocated**. Click **New Simple Volume**.

![](../assets/images/vps-aws-windows/16b8eff8abc22148d0a5eae0d0781e4a.png)

3.1.8. The **New Simple Volume Wizard** will appear. Click **Next.**

![](../assets/images/vps-aws-windows/49f4067306cdd52f994bbe982ebc2015.png)

3.1.9. On the **Specify Volume Size** section, click **Next**.

![](../assets/images/vps-aws-windows/14166f62ce07dcb6cecccf6d737962f0.png)

3.1.10. On the **Assign Drive Letter or Path** section, Click **Next**.

![](../assets/images/vps-aws-windows/2f1db3dfa2231d118c8fdf12bc48722e.png)

3.1.11. On the **Format Partition** section, you can change the **Volume Label** and then click **Next**.

![](../assets/images/vps-aws-windows/325b78d965c741371358cd838369e46c.png)

3.1.12. We have completed creating a partition for our Energi Blockchain Data. Click **Finish**.

![](../assets/images/vps-aws-windows/bebaf18a4e0b5c045bf8f2022ed6af9a.png)

3.1.13. Your **Disk Manager** should now look like the picture below.

![](../assets/images/vps-aws-windows/a4578a9b5148399071c80bcc4cb2e31b.png)

### 3.2. Download and Install Core Node

3.2.1. Open **Internet Explorer**.

![](../assets/images/vps-aws-windows/6d04a1fc13371c960942997459b55005.png)

3.2.2. In the address bar, use

```
https://wiki.energi.world/en/downloads/core-node#windows
```

to download the latest version of Core Node software. Click **Windows x64 – Installer.**

![](../assets/images/vps-aws-windows/77106be52486ed357da36954be09a9aa.png)

3.2.3. There will be a pop-up like the screenshot below. Click **Add**.

![](../assets/images/vps-aws-windows/465b5b3f9747148f5296ebab81037600.png)

3.2.3.1. Click **Add** again, then **Close**.

![](../assets/images/vps-aws-windows/38dd0958f37c44c6a43bfc916c1f13e9.png)

3.2.3.2. Click **Windows x64 – Installer** again.

![](../assets/images/vps-aws-windows/c6878945fc78816cd522cde344eb6cfd.png)

3.2.4. There will be a popup at the bottom of Internet Explorer. Click **Save**.

![](../assets/images/vps-aws-windows/ecbb956f0a0a249dd7d955d477480b85.png)

When it is finished downloading, click **Run**

![](../assets/images/vps-aws-windows/845f0ae1818daf086fb4db8bc3a9858a.png)

3.2.5. The Energi Installation will pop up. Click **I agree.**

![](../assets/images/vps-aws-windows/f2efe1a13c8c34984b47515f2a18e7c0.png)

3.2.6. On the Setup: Installation Options section, click **Next**.

![](../assets/images/vps-aws-windows/727803460bfaa1bdfca6cc977a88ecce.png)

3.2.7. You can keep the **Destination Folder** the same as below and click **Install**.

![](../assets/images/vps-aws-windows/326b1dda55872fb7657e7957c4e5ed4d.png)

3.2.8. It will take a few seconds to install. Click **Close** when completed.

3.2.9. The **Core Node** is now fully installed.

### 3.3 Configure Core Node

3.3.1. Click **Start**

![](../assets/images/vps-aws-windows/5eb1c1d968c0f746e265aa37fb1c54d6.png)

3.3.2. You should see the **Energi Gen 3** folder. Click it.

![](../assets/images/vps-aws-windows/95d99aef87ff6d49b3d328863208f3ed.png)

3.3.3. Here you will see **Core Node. Right-click** on it.

3.3.4. Move your cursor to **More** and click **Open file location.**

![](../assets/images/vps-aws-windows/6b0a00d17b698cd23f6703f6194d44a2.png)

3.3.5. A folder will open.

![](../assets/images/vps-aws-windows/435b8126e6d433ba9b579b07129c84a0.png)

3.3.6. Right click on **Core Node** and then click **Properties**.

![](../assets/images/vps-aws-windows/59859ad92e0ec924b30a383b2ae38969.png)

3.3.7. In the target field you should find:

**"C:\Program Files\Energi Gen 3\energi3.exe" --cache=512**

Change it to:

```
"C:\Program Files\Energi Gen 3\energi3.exe" --cache=512 --datadir "D:\EnergiCore3" --masternode
```

![](../assets/images/vps-aws-windows/588fa3c2154db1e3df923aeeac42526b.png)

Click **OK**.

3.3.8. Run **Core Node**.

![](../assets/images/vps-aws-windows/3e4ea6dd9ada3b25d5865e9067f29583.png)

3.3.9. A Window should appear. This will create the necessary folders we require for **Core Node**. We will access the folder later. Minimize the Window.

![](../assets/images/vps-aws-windows/43962ee74e91641c66cbab32764b3cdf.png)

3.3.10. Now you can open **Attach** to interact with your **Core Node**.

![](../assets/images/vps-aws-windows/244c758e68d264797e0ee02aa56fa368.png)

![](../assets/images/vps-aws-windows/952fda105805bbf415b2c646898c9fe2.png)

:::info
Your Core Node has been installed and will start synchronizing with the blockchain!
You can follow the synchronization progress by using the <kbd>nrg.syncing</kbd> command on your <kbd>Attach</kbd> terminal.
**Keep in mind that for new installations, it can take an average of 48 hours to completely synchronize your node to the latest block**.
:::

### 3.4 Import Keystore File (Method 1)

3.4.1. On the bottom left of your screen, you should find Windows Explorer. Click it.

![](../assets/images/vps-aws-windows/decfe774c4205fd20e81a529c9c774e1.png)

3.4.2. Click on the **D: Drive**.

![](../assets/images/vps-aws-windows/e4e66c9f0a27cfade9e52571f8ba4bee.png)

3.4.3. You should find the folder **EnergiCore3.** Open it.

![](../assets/images/vps-aws-windows/70d6cf851abe955e100338a4f4327f1e.png)

3.4.4. Inside you should find the **Keystore folder**. Open it. It will be empty.

![](../assets/images/vps-aws-windows/f8798c69c90599b899309794d75db3aa.png)

3.4.5. Find your **keystore file** on your computer/host machine. Right click on it and click **Copy**. Usually, the keystore file starts with UTC.

![](../assets/images/vps-aws-windows/745bdab0be07ffe024c1831fbb7bf49c.png)

3.4.6. Return to your Remote Desktop Session by clicking the icon in your task bar to return to our keystore file folder on our Windows Virtual Machine.

![](../assets/images/vps-aws-windows/60fa5d6db3c2fb3f50245d29de1caaac.png)

3.4.7 Right click in the empty/white space of the folder, then click **Paste**. This copies your keystore file from your PC to the Windows Virtual Machine.

![](../assets/images/vps-aws-windows/44c5acfefacfaa59bce33f489d015eb5.png)

![](../assets/images/vps-aws-windows/5cf0b0d1baeb7a85dc59874319256da8.png)

### 3.5 Import Keystore File (Method 2)

3.5.1. Open a notepad or any other file editor you may have.

![](../assets/images/vps-aws-windows/dcc89d408067f917e7b6ba762fd016ee.png)

3.5.2. Click File \> Open and navigate to your keystore file location.

![](../assets/images/vps-aws-windows/879a0e1deb6abf6c2b9721f4c537afc3.png)

3.5.3. Change the dropdown on the right from **Text Document** to **All Files**.

![](../assets/images/vps-aws-windows/201cf3b297b2aa4aa1107f6b972b5cc6.png)

3.5.4. All the files in the folder should appear. Select your **keystore file** (usually the file name starts with UTC). Then click **Open.**

![](../assets/images/vps-aws-windows/cf07e884a5a03522e92ef62d495bc61f.png)

![](../assets/images/vps-aws-windows/1d21cb5377cccd6b515e0a1c2e5b56a9.png)

3.5.5. Click **Edit** \> **Select All**.

![](../assets/images/vps-aws-windows/1a5478ae78b1d108898f1b1c0bb1271f.png)

3.5.6. Click **Edit**, then **Copy**.

![](../assets/images/vps-aws-windows/f2b06ae78de34bdfed42b8ef1e361b6b.png)

3.5.7. Return to your Remote Desktop Session by clicking the icon in your taskbar to return to our keystore file folder on our Windows Virtual Machine.

![](../assets/images/vps-aws-windows/60fa5d6db3c2fb3f50245d29de1caaac.png)

3.5.8. Click Start. Type notepad. Click on **Notepad**.

![](../assets/images/vps-aws-windows/e6bfc5a35d2593cd992818cad5694030.png)

3.5.9. Click **Edit**, then **Paste**.The contents of your keystore file should now be seen in this text file. Click **File**, then **Save As.**

![](../assets/images/vps-aws-windows/5d5c76c8a5a17e53f50eb5c6c1c106bb.png)

![](../assets/images/vps-aws-windows/89babc4f5c57fc318d99e0c9053788cb.png)

3.5.10. Navigate to **D:\\EnergiCore3\\keystore**

![](../assets/images/vps-aws-windows/b0e3a1a4bd3873adb6609d81c14cfa71.png)

3.5.11. Change **File Name** to **energiwallet.json** and change **Save as type** to **All Files.**

![](../assets/images/vps-aws-windows/20627b051dad08961225da276857675f.png)

3.5.12. Click **Save.**

![](../assets/images/vps-aws-windows/044f7df37e5dca5797057fd80f65d753.png)

## 4. Deposit Collateral & Announce Masternode {#deposit}

### 4.1. If **Core Node** is not already open, Start **Core Node** and **Attach** to the Core Node. Otherwise, Start **Attach.**

### 4.2. In **Attach**, type the command:

```
personal.listAccounts
```

This should show your wallet address:

![](../assets/images/vps-aws-windows/1c38570154f0b4c41b793e34cd200ecc.png)

### 4.3. We can now add collateral to our Masternode. Type the following command to add 1000 NRG collateral:

```
masternode.depositCollateral(personal.listAccounts[0], web3.toWei('1000', 'ether'), 'password')
```

Change **password** to the password used to unlock your **keystore file**. For example, the screenshot below shows the password **1234** to unlock the keystore file. The output is the transaction id.

![](../assets/images/vps-aws-windows/7f074d9384b445394317e3f0a14f79bb.png)

![](../assets/images/vps-aws-windows/d54e8c1bf39dcd205ada8e24a15a4547.png)

### 4.4. We can now announce our Masternode. Type the following command:

```
masternode.announce(personal.listAccounts[0], admin.nodeInfo.enode, 'password')
```

Change **password** to the password used to unlock your **keystore file**. For example, the screenshot below shows the password **1234** to unlock the keystore file. The output is a transaction id.

![](../assets/images/vps-aws-windows/dd05a754d2a9741d3906b8052204fc79.png)

![](../assets/images/vps-aws-windows/8ac3dc6dc38d47aaec377615bb4f61e8.png)

### 4.5. We can now check our Masternode status to ensure it’s working correctly. Type the following command:

```
masternode.masternodeInfo (personal.listAccounts[0])
```

**isActive** and **isAlive** should be **true**. If it isn’t, wait for your node to fully sync with the blockchain. If you need any help, contact Energi Support.

![](../assets/images/vps-aws-windows/03d2b44207689f2a5c1a475c680f47b1.png)

:::tip Success
Congratulations! You have set up your masternode on a Windows VPS at AWS.
:::
