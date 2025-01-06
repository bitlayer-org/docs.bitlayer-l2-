"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2141],{1332:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"Learn/Bitlayer Rollup/overview","title":"Overview","description":"Introduction","source":"@site/docs/Learn/Bitlayer Rollup/overview.md","sourceDirName":"Learn/Bitlayer Rollup","slug":"/Learn/Bitlayer Rollup/overview","permalink":"/docs/Learn/Bitlayer Rollup/overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Overview"},"sidebar":"learnSidebar","previous":{"title":"About finality","permalink":"/docs/Learn/Bitlayer PoS/AboutFinality"},"next":{"title":"Bitlayer Rollup Protocol","permalink":"/docs/Learn/Bitlayer Rollup/protocol"}}');var r=t(4848),o=t(8453);const s={sidebar_position:1,sidebar_label:"Overview"},a="Overview",l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Core Features",id:"core-features",level:2}];function d(e){const i={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"overview",children:"Overview"})}),"\n",(0,r.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(i.p,{children:"Bitlayer V2, an upcoming upgrade to Bitlayer's layer 2 infrastructure, represents a pivotal evolution in the Bitcoin ecosystem. Designed to supersede the existing sidechain architecture, Bitlayer V2 is poised to become the first Bitcoin-native rollup, adopting rollup technology widely regarded as the most promising solution for scaling layer 2 systems. By leveraging Bitcoin's unparalleled security, Bitlayer V2 not only achieves significantly higher throughput and reduced transaction costs but also introduces Turing-complete programmability, thereby unlocking vast new possibilities for the Bitcoin ecosystem that extend far beyond the constraints of Bitcoin's limited scripting language."}),"\n",(0,r.jsx)(i.p,{children:"As with rollups in the Ethereum ecosystem, Bitlayer rollup aggregates layer 2 transactions, processes state transitions, and submits updated state roots along with cryptographic proofs to Bitcoin's layer 1 for verification. Transactions on layer 2 are finalized once Bitcoin layer 1 confirms the corresponding state transition. However, the fundamental distinction between Ethereum rollups and Bitcoin rollups lies in the proving mechanism. While Ethereum benefits from its Turing-complete virtual machine, Bitcoin's scripting language is inherently limited in expressiveness. To implement complex programs, such as zero-knowledge verifiers, developers must emulate arithmetic operations using Bitcoin's existing opcodes, which can result in significant program bloat. Although it is technically possible to write a zero-knowledge verifier in Bitcoin's script language, the limited block space renders direct execution of such verifiers infeasible within Bitcoin transactions."}),"\n",(0,r.jsx)(i.p,{children:'To overcome these challenges, Bitlayer rollup adopts the BitVM paradigm (specifically, BitVM2), which blends zero-knowledge validity proofs with optimistic fraud proofs into a hybrid proving system. In this model, the prover generates zero-knowledge proofs for layer 2 state transitions, but these proofs are not directly verified on-chain. Instead, they are presumed valid unless challenged through a dispute process. This presumption of validity eliminates the need for costly on-chain verification in the typical "happy path," thereby drastically reducing settlement costs and making Bitcoin rollups a practical solution for scaling.'}),"\n",(0,r.jsx)(i.p,{children:"Once the rollup operator publishes a new state root, a seven-day challenge window opens, during which any participant can dispute the validity of the published state root and its associated proof. If fraud is detected\u2014such as an invalid state root or an incorrect zero-knowledge proof\u2014a challenger can initiate a dispute by posting a deposit. This triggers a challenge game in which the challenger must prove the fraud, while the rollup operator must defend the correctness of the proof verification process (not the state transition itself). The protocol incentivizes honesty by awarding the loser's deposit to the winner, effectively making the rollup slashable if the operator is at fault. For this hybrid system to function effectively, however, it relies on the presence of at least one honest and active node to monitor and challenge fraudulent activity."}),"\n",(0,r.jsx)(i.h2,{id:"core-features",children:"Core Features"}),"\n",(0,r.jsx)(i.p,{children:"Bitlayer V2 introduces a range of innovative features that position it as a transformative solution for Bitcoin's layer 2 ecosystem:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"EVM Compatibility"}),": Applications built for the Ethereum Virtual Machine (EVM) will seamlessly continue to operate on Bitlayer V2, ensuring backward compatibility with Bitlayer V1."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Trust-Minimized BTC Bridge"}),": The integration of Finality Bridge\u2014a trust-minimized BTC bridge also developed by Bitlayer\u2014enables secure and efficient cross-chain Bitcoin transfers."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Bitcoin-Equivalent Security"}),": EVM state transitions are verified on Bitcoin's layer 1 using a cutting-edge fraud-proof mechanism, ensuring that the rollup inherits Bitcoin's unmatched security properties."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Flexible Data Availability Options"}),": Users can choose between Bitcoin-native data availability or third-party solutions, allowing for customization based on individual needs and preferences."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"By combining these features with its innovative proving mechanism, Bitlayer V2 establishes itself as a groundbreaking advancement in the development of Bitcoin-native layer 2 technologies."})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var n=t(6540);const r={},o=n.createContext(r);function s(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);