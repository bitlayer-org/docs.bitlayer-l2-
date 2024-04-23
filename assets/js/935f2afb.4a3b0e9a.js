"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Welcome","href":"/docs/Introduction/","docId":"Introduction/Introduction"},{"type":"link","label":"About Bitlayer","href":"/docs/Introduction/AboutBitlayer","docId":"Introduction/AboutBitlayer"},{"type":"link","label":"Bitlayer vs. Ethereum","href":"/docs/Introduction/BitlayerVsEth","docId":"Introduction/BitlayerVsEth"},{"type":"link","label":"Technical Architecture","href":"/docs/Introduction/TechnicalArchitecture","docId":"Introduction/TechnicalArchitecture"},{"type":"link","label":"Roadmap","href":"/docs/Introduction/Roadmap","docId":"Introduction/Roadmap"},{"type":"link","label":"Use Case Ideas","href":"/docs/Introduction/UseCase","docId":"Introduction/UseCase"},{"type":"link","label":"About BitVM","href":"/docs/Introduction/BitVM","docId":"Introduction/BitVM"}],"href":"/docs/category/introduction"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Quick Start Guide","href":"/docs/Build/QuickStart","docId":"Build/QuickStart"},{"type":"link","label":"Compile, Run and Deploy","href":"/docs/Build/Compile and Run","docId":"Build/Compile and Run"}],"href":"/docs/category/getting-started"},{"type":"category","label":"Bitlayer Network","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"About Gas","href":"/docs/BitlayerNetwork/AboutGas","docId":"BitlayerNetwork/AboutGas"},{"type":"link","label":"Networks and RPC Enpoints","href":"/docs/BitlayerNetwork/Networks","docId":"BitlayerNetwork/Networks"},{"type":"link","label":"Bridges","href":"/docs/BitlayerNetwork/Bridges","docId":"BitlayerNetwork/Bridges"},{"type":"link","label":"JSON-RPC","href":"/docs/BitlayerNetwork/Json-RPC","docId":"BitlayerNetwork/Json-RPC"},{"type":"link","label":"Contracts","href":"/docs/BitlayerNetwork/Contracts","docId":"BitlayerNetwork/Contracts"},{"type":"link","label":"Peg Tokens","href":"/docs/BitlayerNetwork/PegTokens","docId":"BitlayerNetwork/PegTokens"}],"href":"/docs/category/bitlayer-network"},{"type":"category","label":"Bitlayer Architecture","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview of Bitlayer\'s Design","href":"/docs/BitlayerArchitecture/BitlayerDesign","docId":"BitlayerArchitecture/BitlayerDesign"},{"type":"link","label":"Layered Virtual Machine (LVM)","href":"/docs/BitlayerArchitecture/LVM","docId":"BitlayerArchitecture/LVM"}],"href":"/docs/category/bitlayer-architecture"},{"type":"category","label":"Developer Resources","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Supported Wallets for Bitlayer","href":"/docs/DeveloperResources/Wallets","docId":"DeveloperResources/Wallets"},{"type":"link","label":"Faucets","href":"/docs/DeveloperResources/Faucets","docId":"DeveloperResources/Faucets"},{"type":"link","label":"Block Explorers","href":"/docs/DeveloperResources/Block Explorers","docId":"DeveloperResources/Block Explorers"}],"href":"/docs/category/developer-resources"},{"type":"category","label":"FAQs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Frequently Asked Questions","href":"/docs/FAQs/Frequently asked questions","docId":"FAQs/Frequently asked questions"},{"type":"link","label":"Contact Details","href":"/docs/FAQs/Contact Details","docId":"FAQs/Contact Details"}],"href":"/docs/category/faqs"}]},"docs":{"BitlayerArchitecture/BitlayerDesign":{"id":"BitlayerArchitecture/BitlayerDesign","title":"Overview of Bitlayer\'s Design","description":"Bitlayer has revolutionized the verification process for Layer 2 transactions using optimistic execution, while keeping the Bitcoin protocol intact. Its architecture comprises transaction processing, verification, and asset bridging components. Transaction processing involves a sequencer and a Layered Virtual Machine (LVM), optimizing transaction handling and computational efficiency. Transaction verification, managed by provers and challengers, ensures transaction validity and compliance with network rules. They collaborate to complete the entire process from Layer 2 transaction handling to Layer 1 confirmation, maintaining transaction security and integrity throughout the process. Bitlayer\'s assets bridge components further enhance its capabilities by enabling interoperability between Layer 2 and Layer 1 networks, facilitating secure asset transfer across blockchain layers.","sidebar":"docs"},"BitlayerArchitecture/LVM":{"id":"BitlayerArchitecture/LVM","title":"Layered Virtual Machine (LVM)","description":"Layered Virtual Machine (LVM) technology represents a significant advancement in terms of smart contract execution. This innovative approach enables the support of various frontend smart contract types, such as EVM/CairoVM, and backend zero-knowledge proof verifiers, including ZK-STARKs and ZK-SNARKs (Groth16, PLONK, etc.), while maintaining robust security measures and enhancing computational flexibility.","sidebar":"docs"},"BitlayerNetwork/AboutGas":{"id":"BitlayerNetwork/AboutGas","title":"About Gas","description":"Important: about gas price","sidebar":"docs"},"BitlayerNetwork/Bridges":{"id":"BitlayerNetwork/Bridges","title":"Bridges","description":"Bridges play a crucial role in connecting Bitlayer with other blockchain networks, enabling seamless interoperability and cross-chain asset transfers. Through bridges, Bitlayer users and developers can leverage the power of multiple blockchain ecosystems. Bitlayer is designed to support various bridge implementations to facilitate communication between different blockchains. This section provides an overview of the available bridges in the Bitlayer ecosystem.","sidebar":"docs"},"BitlayerNetwork/Contracts":{"id":"BitlayerNetwork/Contracts","title":"Contracts","description":"Contract Addresses (Mainnet)","sidebar":"docs"},"BitlayerNetwork/Json-RPC":{"id":"BitlayerNetwork/Json-RPC","title":"JSON-RPC","description":"Bitlayer provides all JSON-RPC API methods listed on Ethereum along with several custom methods.","sidebar":"docs"},"BitlayerNetwork/Networks":{"id":"BitlayerNetwork/Networks","title":"Networks and RPC Enpoints","description":"This reference guide provides a listing of the different Bitlayer networks and public RPC endpoints.","sidebar":"docs"},"BitlayerNetwork/PegTokens":{"id":"BitlayerNetwork/PegTokens","title":"Peg Tokens","description":"Mainnet","sidebar":"docs"},"Build/Compile and Run":{"id":"Build/Compile and Run","title":"Compile, Run and Deploy","description":"This guide walks you through compiling and running Bitlayer.","sidebar":"docs"},"Build/QuickStart":{"id":"Build/QuickStart","title":"Quick Start Guide","description":"Your tools for building and testing smart contracts can work on Bitlayer smoothly as Bitlayer boasting 100% EVM and Ethereum toolchain compatibility.","sidebar":"docs"},"DeveloperResources/Block Explorers":{"id":"DeveloperResources/Block Explorers","title":"Block Explorers","description":"Explore transactions, blocks, and addresses on the Bitlayer network using the provided block explorers. These tools offer detailed insights into network activity on both the testnet and mainnet environments.","sidebar":"docs"},"DeveloperResources/Faucets":{"id":"DeveloperResources/Faucets","title":"Faucets","description":"Bitlayer is an EVM-compatible blockchain, and can enable applications and developers from the existing Ethereum ecosystem to migrate to Bitlayer at low cost, eliminating the need for substantial modifications or rewrites.","sidebar":"docs"},"DeveloperResources/Wallets":{"id":"DeveloperResources/Wallets","title":"Supported Wallets for Bitlayer","description":"EVM-Compatible Wallets","sidebar":"docs"},"FAQs/Contact Details":{"id":"FAQs/Contact Details","title":"Contact Details","description":"Website\uff1ahttps://www.bitlayer.org/","sidebar":"docs"},"FAQs/Frequently asked questions":{"id":"FAQs/Frequently asked questions","title":"Frequently Asked Questions","description":"Q: When does Bitlayer launch?","sidebar":"docs"},"Introduction/AboutBitlayer":{"id":"Introduction/AboutBitlayer","title":"About Bitlayer","description":"For users and developers alike, the fundamental concept of Bitlayer is outlined below:","sidebar":"docs"},"Introduction/BitlayerVsEth":{"id":"Introduction/BitlayerVsEth","title":"Bitlayer vs. Ethereum","description":"This document compares Bitlayer and Ethereum across several key aspects including gas prices, and support for EVM and Solidity versions, providing insights for both developers and users.","sidebar":"docs"},"Introduction/BitVM":{"id":"Introduction/BitVM","title":"About BitVM","description":"Bitlayer is pioneering a new frontier in Bitcoin\'s ecosystem with BitVM, a solution aimed at overcoming the scalability issues that become prominent during high-traffic periods. By introducing capabilities for handling smart contracts and advanced off-chain computations, BitVM at Bitlayer seeks to enhance the functionality of the Bitcoin network.","sidebar":"docs"},"Introduction/Introduction":{"id":"Introduction/Introduction","title":"Welcome","description":"The first bitcoin security-equivalent Layer 2 based on BitVM","sidebar":"docs"},"Introduction/Roadmap":{"id":"Introduction/Roadmap","title":"Roadmap","description":"The vision of Bitlayer will be realized through the rollout of a mainnet in multiple stages, with each phase designed to enhance the user experience and bolster security through cryptographic proof of Bitcoin consensus and onchain activity.","sidebar":"docs"},"Introduction/TechnicalArchitecture":{"id":"Introduction/TechnicalArchitecture","title":"Technical Architecture","description":"Technical Architecture","sidebar":"docs"},"Introduction/UseCase":{"id":"Introduction/UseCase","title":"Use Case Ideas","description":"- Decentralized Bitcoin interest (convert staking rewards of other tokens to Bitcoin)","sidebar":"docs"}}}')}}]);