"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1598],{7127:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Learn/Bitlayer PoS/BitlayerVsEth","title":"Bitlayer VS. Ethereum","description":"This document compares Bitlayer and Ethereum across several key aspects including gas prices, and support for EVM and Solidity versions, providing insights for both developers and users.","source":"@site/docs/Learn/Bitlayer PoS/BitlayerVsEth.md","sourceDirName":"Learn/Bitlayer PoS","slug":"/Learn/Bitlayer PoS/BitlayerVsEth","permalink":"/docs/Learn/Bitlayer PoS/BitlayerVsEth","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":89,"frontMatter":{"sidebar_position":89},"sidebar":"learnSidebar","previous":{"title":"Peg Tokens","permalink":"/docs/Learn/Bitlayer PoS/PegTokens"},"next":{"title":"About finality","permalink":"/docs/Learn/Bitlayer PoS/AboutFinality"}}');var s=t(4848),n=t(8453);const o={sidebar_position:89},a="Bitlayer VS. Ethereum",l={},d=[{value:"Gas Price",id:"gas-price",level:2},{value:"Bitlayer",id:"bitlayer",level:3},{value:"Ethereum",id:"ethereum",level:3},{value:"Supported EVM and Solidity Versions",id:"supported-evm-and-solidity-versions",level:2},{value:"Bitlayer",id:"bitlayer-1",level:3},{value:"EVM Support",id:"evm-support",level:4},{value:"Solidity Version",id:"solidity-version",level:4},{value:"Ethereum",id:"ethereum-1",level:3},{value:"EVM Support",id:"evm-support-1",level:4},{value:"Solidity Version",id:"solidity-version-1",level:4},{value:"Implications",id:"implications",level:2},{value:"For Developers",id:"for-developers",level:3},{value:"For Users",id:"for-users",level:3}];function c(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"bitlayer-vs-ethereum",children:"Bitlayer VS. Ethereum"})}),"\n",(0,s.jsx)(i.p,{children:"This document compares Bitlayer and Ethereum across several key aspects including gas prices, and support for EVM and Solidity versions, providing insights for both developers and users."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Feature"}),(0,s.jsx)(i.th,{children:"Bitlayer"}),(0,s.jsx)(i.th,{children:"Ethereum"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Gas Price"})}),(0,s.jsx)(i.td,{children:"Lower due to efficiency mechanisms."}),(0,s.jsx)(i.td,{children:"Variable, dependent on network demand. High demand can lead to increased gas prices."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"EVM Support"})}),(0,s.jsx)(i.td,{children:"Supports EVM-compatible smart contracts through the Layered Virtual Machine (LVM)."}),(0,s.jsx)(i.td,{children:"Full EVM support as the native platform."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Solidity Support"})}),(0,s.jsx)(i.td,{children:"Supports up to Solidity version v0.8.25. Future versions will be supported."}),(0,s.jsx)(i.td,{children:"Supports the latest versions of Solidity, with ongoing updates."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Developer Implications"})}),(0,s.jsx)(i.td,{children:"Offers a platform leveraging Bitcoin's security. Easier transition for those familiar with Ethereum's EVM."}),(0,s.jsx)(i.td,{children:"Mature tooling and community support."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"User Implications"})}),(0,s.jsx)(i.td,{children:"Access to innovative dApps leveraging Bitcoin's security."}),(0,s.jsx)(i.td,{children:"Vast ecosystem of dApps."})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"gas-price",children:"Gas Price"}),"\n",(0,s.jsx)(i.h3,{id:"bitlayer",children:"Bitlayer"}),"\n",(0,s.jsx)(i.p,{children:"Bitlayer aims to offer lower transaction costs through innovative efficiency mechanisms. Leveraging technologies like optimistic execution, Bitlayer seeks to optimize transaction throughput, making it a potentially more economical choice for its users."}),"\n",(0,s.jsxs)(i.admonition,{type:"caution",children:[(0,s.jsx)(i.mdxAdmonitionTitle,{children:(0,s.jsx)(i.strong,{children:"Important: About Gas Price on Bitlayer"})}),(0,s.jsx)(i.p,{children:"Bitlayer's native gas token is BTC, utilized with an 18-digit precision, diverging from Bitcoin's traditional 8-digit precision. This adjustment aligns with the default decimal precision of tokens on EVM-compatible chains, ensuring consistency across transactions."})]}),"\n",(0,s.jsxs)(i.p,{children:["To accommodate transaction processing priorities, Bitlayer has established a minimum priority fee requirement. Developers can dynamically estimate the required gas price for transactions using ",(0,s.jsx)(i.code,{children:"eth_gasPrice"})," or ",(0,s.jsx)(i.code,{children:"eth_maxPriorityFeePerGas"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["For transactions on the Mainnet/Testnet, a minimum tip of 0.05 gwei is necessary. Typically, setting a ",(0,s.jsx)(i.code,{children:"gasPrice"})," of 0.055 gwei for legacy transactions or a ",(0,s.jsx)(i.code,{children:"maxPriorityFeePerGas"})," of 0.05 gwei (with an adequately set ",(0,s.jsx)(i.code,{children:"maxFeePerGas"}),") for EIP-1559 transactions should suffice for most operations."]}),"\n",(0,s.jsxs)(i.p,{children:["Dapp developers are advised to programmatically set the ",(0,s.jsx)(i.code,{children:"maxPriorityFeePerGas"})," before initiating transactions via APIs, rather than relying on default strategies employed by wallets (like MetaMask) or SDKs, to ensure optimal transaction processing."]}),"\n",(0,s.jsx)(i.h3,{id:"ethereum",children:"Ethereum"}),"\n",(0,s.jsx)(i.p,{children:"In contrast, Ethereum's gas prices fluctuate based on network demand. Users compete for computational resources, leading to variable gas prices that can spike significantly during periods of high demand, affecting cost-effectiveness."}),"\n",(0,s.jsx)(i.h2,{id:"supported-evm-and-solidity-versions",children:"Supported EVM and Solidity Versions"}),"\n",(0,s.jsx)(i.h3,{id:"bitlayer-1",children:"Bitlayer"}),"\n",(0,s.jsx)(i.h4,{id:"evm-support",children:"EVM Support"}),"\n",(0,s.jsx)(i.p,{children:"Bitlayer introduces the Layered Virtual Machine (LVM), which is fully compatible with Ethereum Virtual Machine (EVM) smart contracts. It supports EVM-compatible contracts up to the Cancun update, with the exception of the PREVRANDAO opcode, BLOBHASH opcode, and BLOBBASEFEE opcode. This enables developers to build applications on Bitcoin's secure network, mirroring the functionality available on Ethereum."}),"\n",(0,s.jsx)(i.h4,{id:"solidity-version",children:"Solidity Version"}),"\n",(0,s.jsx)(i.p,{children:"Currently, Bitlayer supports Solidity up to version v0.8.25, with a commitment to incorporating future versions. This stance ensures that developers have access to a stable and secure environment for their smart contracts."}),"\n",(0,s.jsx)(i.h3,{id:"ethereum-1",children:"Ethereum"}),"\n",(0,s.jsx)(i.h4,{id:"evm-support-1",children:"EVM Support"}),"\n",(0,s.jsx)(i.p,{children:"Ethereum, as the origin of the EVM, offers support for the entire range of EVM functionalities. This allows for a wide spectrum of smart contract capabilities and decentralized application developments."}),"\n",(0,s.jsx)(i.h4,{id:"solidity-version-1",children:"Solidity Version"}),"\n",(0,s.jsx)(i.p,{children:"Ethereum consistently supports the latest versions of Solidity, providing developers with the newest features, optimizations, and security enhancements for smart contract development."}),"\n",(0,s.jsx)(i.h2,{id:"implications",children:"Implications"}),"\n",(0,s.jsx)(i.h3,{id:"for-developers",children:"For Developers"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Bitlayer"})," emerges as an appealing platform for developers seeking to leverage Bitcoin's renowned security with the added benefit of potentially lower operational costs. The LVM's compatibility with EVM ensures a smooth transition for developers already familiar with Ethereum's ecosystem."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Ethereum"})," remains a cornerstone for smart contract and decentralized application development, supported by its extensive tooling and a vibrant community."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"for-users",children:"For Users"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Bitlayer"})," offer more cost-effective interactions with decentralized applications, backed by the security of Bitcoin. This makes it an attractive platform for users prioritizing security and efficiency."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Ethereum"})," offers a broad and diverse ecosystem of dApps."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"In essence, Bitlayer introduces a strategic approach to integrating smart contract functionality within Bitcoin's secure and cost-effective framework, offering tangible benefits for both developers and users."})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var r=t(6540);const s={},n=r.createContext(s);function o(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);