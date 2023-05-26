---
id: testnet-core-node-docker
title: Testnet Energi Core Node Docker Deployment Guide
---

## ​1.​ Introduction

The purpose of this guide is to provide an easy and automated deployment of the Energi Core Node instance using Docker containers. This guide covers how to set up the environment for Energi Testnet.  The same process can be used to set up a development (Devnet) and Simulation network (Simnet).

These instances can be created/re-created quicker than manually compiling and/or installing the Core Node source and binaries and setting the necessary startup parameters, at an easily managed sandbox environment.

## ​2.​ Prerequisites

### ​2.1.​ Docker Desktop Engine

The Docker engine for Windows, Mac OS and Linux can be downloaded and installed as follows:

* **Windows & Mac OS: **

**[https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)**

* **Linux (Ubuntu):**

**	**

**	**Open a new terminal session and install with:


```
apt-get install docker.io
```

	For other Linux distributions, refer to the packet manager used by the specific release.

For the purpose of this guide, we will be considering a Linux (Ubuntu) environment.


## ​3.​ Deploying your Core Node Docker Container

​The Energi Core Node Container Image can be either acquired directly from the Docker Hub - where it will download the latest version of the official Core Node Docker image - or built from source by using any of the provided Dockerfiles at the optional _3.2. Building the Image from Source_ optional step below.


### 3.1.​ Pull and Tag the Core Node image from Docker Hub

To use the Docker Hub images, use the following steps:

Download the Core Node image:


```
docker pull energicryptocurrency/energi:v1.1.4
```

Tag the image as the _latest_ release, so it won’t be necessary to specify the image version everytime we run the container:

```
docker tag energicryptocurrency/energi:v1.1.4 energi3:latest
```

You will be able to check that the image has been successfully downloaded and tagged as the _latest_ release by running the following command:

```
docker images
```

### 3.2.​ Building the Image from Source (optional)

Should you wish to build the Docker image from Source, you can do so by using the following instructions.


#### 3.2.1. Choose your Operating System

There are two container image options available at the moment - Alpine and Ubuntu.

The Alpine release uses the lightweight Alpine Linux distribution, clones the Core Node repository from GitHub  and compiles the binaries, which are subsequently moved to a deployment layer.

The Ubuntu release uses the latest version of the Ubuntu base docker image and the latest stable release of the Core Node binaries, relieving the need to clone the repository and compile the binaries from source.

Simply download the desired Dockerfile to a folder of your choice. For the purpose of this guide, we will use the **/home/_userid_ **directory. We will use it to build the Container image in the next step. The Dockerfile for each release can be downloaded as follows:

**Alpine Testnet Core Node:**

```
cd $HOME
wget https://raw.githubusercontent.com/zalam003/energi_devtools/master/docker/testnet/Dockerfile.alpine
```

**Ubuntu Testnet Core Node:**

```
cd $HOME
wget https://raw.githubusercontent.com/zalam003/energi_devtools/master/docker/testnet/Dockerfile.ubuntu
```

#### ​3.2.2.​ Build the Container Image

Open a new Command Prompt (Windows) or Terminal (Linux/Mac OS) session and navigate to the folder where you have saved the Dockerfile at. Then, run the following command to build your Energi Testnet Container Image:

**For Alpine builds:**


```
docker build -t energi -f Dockerfile.alpine .
```


**For Ubuntu builds:**


```
docker build -t energi -f Dockerfile.ubuntu .
```


The image will then be built, named as **energi3** and be ready for deployment as a Docker Container.

To check that your image has been successfully created and named, you can run the following command:


```
docker images
```



### 3.3 Bootstrap Chaindata (Optional)

Before a node can be fully operational, it needs to synchronize to the latest block in the chain. For new installations, this synchronization can take from 2 to 4 hours - depending on the internet bandwidth that is available where the node is hosted at.

To expedite this synchronization, a chaindata checkpoint can be bootstrapped - greatly reducing the time needed to synchronize to the latest block. For the purpose of this guide, we will use the **/home/_userid_/.energicore3** directory. Follow the steps below:


```
cd $HOME
curl -s https://s3-us-west-2.amazonaws.com/download.energi.software/releases/chaindata/testnet/gen3-chaindata.tar.gz | tar xvz
```

The chaindata files will then be downloaded and placed in the **/home/_userid_/.energicore3/testnet/energi3/chaindata** directory.

### ​3.4.​ Run the Container

To run your container, use the commands below:

```
MYIP=$(curl ip.me)

docker run -d --name containername -v /home/userid/.energicore3:/root/.energicore3/ -p 49795:49795 -p 49796:49796 -p 49797:49797 energi3 --testnet --masternode --mine=1 --nat extip:$MYIP --rpc --rpccorsdomain "*" --rpcvhosts "*" --rpcaddr "0.0.0.0" --rpcport 49796 --rpcapi admin,eth,web3,rpc,personal,energi --ws --wsorigins "*" --wsaddr "0.0.0.0" --wsport 49795 --wsapi admin,eth,net,web3,personal,energi
```

Make sure to modify both the **_containername_** and **_userid_** accordingly:

**_containername: _**This can be any name you desire for your container.

**_userid_**: The name of the user you are currently deploying the container as.

**Do not** modify the other flags - they are to ensure your Core Node has all the necessary services activated in order to connect to it and use as a development environment by other third-party applications (Such as Truffle, Remix, MetaMask, etc), as well as make all the necessary ports available.

After issuing the command above, your container will be up and running, ready to be used as an Energi Development Environment. All the Core Node related files such as the keystore and chaindata can be found at the **/home/_userid_/.energicore3** directory.

To check whether your Core Node container is running or not - you can use the following command:


```
docker ps -a
```

## ​4.​ Starting, Stopping, Checking Logs and Cleaning up

### ​4.1.​ Starting

Usually, your container will not need to be manually started, as it should be running already. However, if for some reason the container has a Stopped or Exited status, it can be started again with the following command:


```
docker start containername
```

Remembering to replace _containername_ by the name you have specified when first creating the container.

### ​4.2.​ Stopping

To stop a running container, the following command can be used:

```
docker stop containername
```

Remembering to replace _containername_ by the name you have specified when first creating the container.

### ​4.3.​ Checking Logs

Docker offers by default a logging solution which makes it easier to check your Core Node logs anytime you wish.

In order to do so - you can issue the following command:

```
docker logs containername
```

Remembering to replace _containername_ by the name you have specified when first creating the container.

### ​4.4.​ Cleaning Up

If at any time you wish to completely clean up your Core Node container and images, the following procedure will get rid of everything that has been downloaded / installed:


* Stop the Container:

```
docker stop containername
```


* Delete the Container (do not worry - your keystore will be safely located at the **/home/_userid_/.energicore3/testnet/keystore** directory, located at the same folder the Dockerfile is at):

```
docker rm containername
```


* Remove all associated Docker Image files:

```
docker image prune -a
```

This will erase everything that has been downloaded when you built the image with the Dockerfile. The Core Node chaindata and all associated application data files will be located at the **.energicore3** folder, which will be at the same location the used Dockerfile is at.


## ​5. Access Core Node

You can access the Core Node console that is running at the Docker container anytime by using the following command:


```
docker exec -it containername energi3 --testnet attach
```

Replace **_containername _**with the name you first gave to the container at the previous steps. After issuing the command, the Core Node console will load and you will be able to interact with your instance using the Interactive mode.

If you wish to run commands against your Core Node instance without the need to load the interactive console, it can be done so by using the following command:


```
docker exec -it containername energi3 --testnet --exec "core node command" attach
```


Again, replace **_containername_** accordingly and **_core node command_** with a Core Node related command. For example, the following line will return the list of available wallets without the need to run the command at the interactive console:


```
docker exec -it containername energi3 --testnet --exec "personal.listAccounts" attach
```

## ​6.​ _Faster_ Deployment using docker-compose

Docker Compose is a container orchestration tool that makes the process of deploying environments faster than using standalone Dockerfiles.


### 6.1. Installing Docker Compose


* **Windows & Mac OS: **

    For Windows and Mac OS deployments, Docker Compose is automatically installed alongside the Docker Desktop application.

* **Linux (Ubuntu):**

    For Linux distributions, Docker Compose is not installed by default alongside the main Docker package. Open a new terminal session and install Docker Compose with the following command:


```
apt-get install docker-compose
```


	For other Linux distributions, refer to the packet manager used by the specific release.

For the purpose of this guide, we will be considering a Linux (Ubuntu) environment.


### 6.2. Download the docker-compose.yml specification file

The Docker Compose specification file contains all the necessary parameters to deploy a developer-ready Core Node instance without the need to manually configure the startup flags, shared storage space and required ports.

Download the specification file by running the following command:


```
wget https://raw.githubusercontent.com/zalam003/energi_devtools/master/docker/compose/docker-compose.yml
```

### 6.3. Managing environments

The **docker-compose.yml** file allows the deployment of a Testnet Core Node, a Mainnet Core Node or both. Just like the previously mentioned Dockerfiles, the Core Node application data files will be located at the **.energicore3** folder located at the same directory the **docker-compose.yml** file is at.

First we need to set an environment variable with the IP address, in order for the Docker Compose file to fetch it:


```
export MYIP=$(curl ip.me)
```

To create and start a Core Node on Testnet, run:


```
docker-compose up -d testnet
```

A new container named energi_testnet will be created, you can check its status by running:


```
docker-compose ps
```

To access this Core Node container as well as check its logs, the same steps from Sections 4 and 5 can be used.
