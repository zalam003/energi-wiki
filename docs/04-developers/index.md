---
id: intro
title: Energi Developer Documentations
---

This web page is meant to help you develop applications on Energi blockchain.  It covers key concepts, explains the Energi tech stack, and documents advanced topics for more complex applications and use cases.

## 1. Introduction

### 1.1. dApps in the Web3 Era
Web 1.0, spanning from 1990 to 2004, was characterized by static websites owned by companies. Users had limited interaction and primarily consumed information without active participation.

Web 2.0 emerged in 2004, introducing a read-write platform where users could generate content and engage with each other. However, a few dominant companies gained control over web traffic and monetization, limiting user ownership of their content.

Web3 represents an improved internet experience, focusing on empowering users through technologies like blockchains, cryptocurrencies, and NFTs. It aims to transition into a read-write-own paradigm, granting users ownership and control over their digital assets and data.

Web3 follows key principles:

a. **Decentralization**: Ownership is distributed among builders and users, creating a more inclusive and democratic online environment.

b. **Permissionless**: Anyone can participate and contribute to Web3, removing barriers and exclusions.

c. **Native Payments**: Web3 enables direct transactions using cryptocurrencies, enhancing efficiency and accessibility.

d. **Trustless**: Web3 operates through incentives and economic mechanisms, reducing the need for blind trust and promoting security.

A dApp (Decentralized Application) is a type of Web3 app that operates on decentralization principles. While all dApps are Web3 apps, not all Web3 apps are decentralized. dApps distribute authority using mechanisms like Decentralized Autonomous Organizations (DAOs), fostering transparency, inclusivity, and user empowerment.

### 1.2. Difference Between Energi EVM and Ethereum EVM
Energi was built on Ethereum and uses the same hexadecimal format. Developers can easily deploy the same code on the Energi blockchain. Energi emphasizes decentralized governance, allowing masternode holders to actively participate in decision-making processes. This inclusive approach ensures that the platform's direction is influenced by the community, fostering a more democratic and collaborative environment.

Additionally, Energi offers improved performance, low gas fees, user security, and an economically-optimized cryptocurrency. These considerations make the Energi EVM an enticing option for developers seeking to build innovative and efficient applications on the Energi blockchain.

## 2. Development Networks
### 2.1. Testnet Environment
- [Set up Testnet environment using Docker](https://docs.google.com/document/d/1uZKARyR1GQ97gvFrtcMRvBqE7nj_fTBsZUIvR-J2okU/)
- [Energi Testnet Faucet](https://faucet.energi.network/) - Get some tNRG for testing.

### 2.2. Simnet Environment
- [Set up Simnet Environment](https://docs.google.com/document/d/1ncHUnQlCcc4oyBQufUe5jPUMZ7G5dGoHMZrEDkkniIY)

## 3. Development Frameworks
There are several EVM-compatible frameworks available for building decentralized applications (dApps), including those that can also be used with the Energi EVM. Here are a few popular options:

a. **Truffle**: [Truffle](https://trufflesuite.com/truffle/) is a widely used development framework for Ethereum-based dApps. It provides a suite of tools for compiling, deploying, and testing smart contracts. Truffle's compatibility with the Energi EVM allows developers to leverage its features and benefits when building dApps on the Energi blockchain.

b. **Hardhat**: [Hardhat](https://hardhat.org/) is a flexible and extensible development environment for Ethereum dApps. It offers a rich set of features, including built-in tasks, testing utilities, and plugin support. Hardhat's compatibility with the Energi EVM enables developers to utilize its powerful toolset for smart contract development on the Energi blockchain.

c. **Web3j**: [Web3j](https://www.web3labs.com/web3j-sdk) is a Java library that enables developers to interact with the Energi blockchain, simplifying tasks such as deploying smart contracts, managing digital assets, and executing transactions. It provides a user-friendly interface and a comprehensive set of tools for building decentralized applications (dApps) and integrating blockchain functionality into Java applications.

d. **OpenZeppelin SDK**: [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts) is not a framework in itself but rather a library of reusable and secure smart contracts. It offers a collection of pre-audited and community-reviewed contracts that developers can utilize in their dApps. OpenZeppelin's compatibility with the Energi EVM allows developers to use its secure and reliable contracts when building applications on the Energi blockchain.

These EVM-compatible frameworks, including their compatibility with the Energi EVM, provide developers with the necessary tools, libraries, and utilities to build, test, and deploy dApps on the Energi blockchains. Each framework offers unique features and advantages, allowing developers to choose the one that best suits their development preferences and project requirements.

## 4. Energi Client APIs
- [Energi Core Node API](./core-node-api.md)
- [JavaScript APIs](https://docs.google.com/document/d/12SvvrU0BxqrXBGTSTFE6PjuiITq79OuOEi0zAOR1P5I/edit#heading=h.dv3zeb6n61cv)
- [JSON-RPC API](./json-rpc.md)

## 5. Integrated Development Environments (IDEs)
- [Remix](https://remix.ethereum.org/) - Web-based IDE with built in static analysis, and a test blockchain virtual machine.
- [Remix Desktop](https://github.com/ethereum/remix-desktop/releases) - Remix Desktop is an Electron version of Remix IDE. It works on Linux, Windows, & Macs.
- [Visual Studio Code](https://code.visualstudio.com/) - Professional cross-platform IDE with official Ethereum support

## 6. Plugins and Extensions
- [solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) - Ethereum Solidity Language for Visual Studio Code
- [Solidity + Hardhat for VS Code](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity) - Solidity and Hardhat support by the Hardhat team
- [Prettier Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity) - Code formatter using prettier

## 7. Programming Languages
How to get started with Ethereum using languages you may already know
- [Dart](https://ethereum.org/en/developers/docs/programming-languages/dart/)
- [Delphi](https://ethereum.org/en/developers/docs/programming-languages/delphi/)
- [.NET](https://ethereum.org/en/developers/docs/programming-languages/dot-net/)
- [Golang](https://ethereum.org/en/developers/docs/programming-languages/golang/)
- [Java](https://ethereum.org/en/developers/docs/programming-languages/java/)
- [JavaScript](https://ethereum.org/en/developers/docs/programming-languages/javascript/)
- [Python](https://ethereum.org/en/developers/docs/programming-languages/python/)
- [Ruby](https://ethereum.org/en/developers/docs/programming-languages/ruby/)
- [Rust](https://ethereum.org/en/developers/docs/programming-languages/rust/)


## 8. Set up Local Development Environment
You need to install the following tools to set up your local development environment:
- [npm](https://www.npmjs.com/package/install) - Package manager for nodejs
- [Node js](https://nodejs.org/) (stable version) - Execution environment for JavaScript.
- [Truffle](https://www.trufflesuite.com/truffle) - IDE that is useful for compiling smart contracts.
- [Visual Studio Code](https://code.visualstudio.com/) - Text Editor code - with the [solidity extension](https://marketplace.visualstudio.com/items?itemName=juanblanco.solidity).
- [Web3](https://docs.google.com/document/d/12SvvrU0BxqrXBGTSTFE6PjuiITq79OuOEi0zAOR1P5I/edit#heading=h.dv3zeb6n61cv) - A collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.
- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [MetaMask Browser Extension](https://docs.google.com/document/d/1SHJClzgSmZWgQnGAo7XaCxsj7JBzkEbhExkXstbGG5k/edit#heading=h.2gw6ycmzuewu) - Extension based in Web3 that will allow you to connect to the Energi blockchain from our graphic interface and to make transactions to add new parameters to our contract

- [Energi Block Explorer](https://explorer.test.energi.network/) - VIew real-time data on blocks, transactions, miners, accounts, and other on-chain activity.
- [MyEnergiWallet](https://wallet.test.energi.network/#/account) - To deploy the smart contract on the Energi blockchain.
