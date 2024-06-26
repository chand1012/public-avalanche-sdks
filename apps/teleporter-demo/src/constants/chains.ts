import type { EvmChain } from '@/types/chain';
import { FAUCET_URL } from './urls';
import { TELEPORTER_BRIDGE_ABI } from './abis/teleporter-bridge.abi';
import { MINTABLE_ERC20_ABI } from './abis/mintable-erc-20.abi';
import { TELEPORTED_ERC20_ABI } from './abis/teleported-erc-20.abi';

export const C_CHAIN = {
  chainId: '43113',
  name: 'C-Chain',
  shortName: 'C-Chain',
  subnetId: '11111111111111111111111111111111LpoYY',
  platformChainId: 'yH8D7ThNJkxmtkuv2jgBa4P1Rn3Qpr4pPr7QYNfcdoS6k6HWp',
  platformChainIdHex: '0x7fc93d85c6d62c5b2ac0b519c87010ea5294012d1e407030d6acd0021cac10d5',
  networkToken: {
    universalId: '43113-AVAX',
    decimals: 18,
    name: 'AVAX',
    symbol: 'AVAX',
  },
  slug: 'cchain',
  explorerUrl: 'https://subnets-test.avax.network/c-chain',
  rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
  faucetUrl: `${FAUCET_URL}/?subnet=c&token=c`,
  isTestnet: true,
  logoUrl:
    'https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg',
  primaryColor: '#e84142',
  contracts: {
    mintableErc20: {
      universalId: '43113-0x6F419E35a60439569640ca078ba5e86599E30cC6',
      address: '0x6F419E35a60439569640ca078ba5e86599E30cC6',
      name: 'Example Teleporter Token',
      symbol: 'TLP',
      decimals: 18,
      abi: MINTABLE_ERC20_ABI,
    },
    // Note, for C-Chain the mintable ERC-20 is the same as the teleported one
    teleportedErc20: {
      universalId: '43113-0xa8DA748Fbe6ba75AB89940612dE65e88C10A202F',
      address: '0xa8DA748Fbe6ba75AB89940612dE65e88C10A202F',
      name: 'Coq',
      symbol: 'COQ',
      decimals: 18,
      // This is technically not the correct abi.  The correct one is MINTABLE_ERC20_ABI.
      // We use this ABI here as a hack to appease Wagmi, which throws type errors when
      // any union of multiple ABIs is passed to certain hooks (such as useContractRead).
      abi: TELEPORTED_ERC20_ABI,
    },
    bridge: {
      universalId: '43113-0x5c1dF7FfBC8809166f1c154b54FfB1B7019c3D78',
      address: '0x5c1dF7FfBC8809166f1c154b54FfB1B7019c3D78',
      name: 'Teleporter ERC20 Bridge',
      abi: TELEPORTER_BRIDGE_ABI,
    },
  },
} as const satisfies EvmChain;

// export const DISPATCH_CHAIN = {
//   chainId: '779672',
//   name: 'Dispatch Subnet',
//   shortName: 'Dispatch',
//   subnetId: '7WtoAMPhrmh5KosDUsFL9yTcvw7YSxiKHPpdfs4JsgW47oZT5',
//   platformChainId: '2D8RG4UpSXbPbvPCAWppNJyqTG2i2CAXSkTgmTBBvs7GKNZjsY',
//   platformChainIdHex: '0x9f3be606497285d0ffbb5ac9ba24aa60346a9b1812479ed66cb329f394a4b1c7',
//   networkToken: {
//     universalId: '779672-DIS',
//     decimals: 18,
//     name: 'DIS',
//     symbol: 'DIS',
//   },
//   slug: 'dispatch',
//   explorerUrl: 'https://subnets-test.avax.network/dispatch',
//   rpcUrl: 'https://subnets.avax.network/dispatch/testnet/rpc',
//   faucetUrl: `${FAUCET_URL}/?subnet=dispatch&token=dispatch`,
//   isTestnet: true,
//   logoUrl:
//     'https://images.ctfassets.net/gcj8jwzm6086/60XrKdf99PqQKrHiuYdwTE/908622f5204311dbb11be9c6008ead44/Dispatch_Subnet_Logo.png',
//   primaryColor: '#A05195',
//   contracts: {
//     teleportedErc20: {
//       universalId: '779672-0x80989a8F005c3445898DBD9892D3Abb96d08Cf2B',
//       address: '0x80989a8F005c3445898DBD9892D3Abb96d08Cf2B',
//       name: 'Example Teleporter Token',
//       symbol: 'TLP',
//       decimals: 18,
//       abi: TELEPORTED_ERC20_ABI,
//     },
//     bridge: {
//       universalId: '779672-0x5c1dF7FfBC8809166f1c154b54FfB1B7019c3D78',
//       address: '0x5c1dF7FfBC8809166f1c154b54FfB1B7019c3D78',
//       name: 'Teleporter ERC20 Bridge',
//       abi: TELEPORTER_BRIDGE_ABI,
//     },
//   },
// } as const satisfies EvmChain;

export const COQNET = {
  chainId: '10255',
  name: 'Coqnet Testnet',
  shortName: 'Coqnet',
  subnetId: '23zqM7PHsr3EWSJ6aFm4bqmCisT6GexXdChNoEarjAFPVVDjLM',
  platformChainId: 'CeGckGj7x19NFrFnwFZMnYPHyyoFkA3BGbPWQYZhQVejo6CZB',
  platformChainIdHex: '0x1a6f964670515eca91c3d7766f21087727d655c6a334e30869d79bbfc626772f',
  networkToken: {
    universalId: '10255-COQINU',
    decimals: 18,
    name: 'COQ',
    symbol: 'COQ',
  },
  slug: 'coqnet',
  explorerUrl: 'https://subnets-test.avax.network/coqnet',
  rpcUrl: 'https://subnets.avax.network/coqnet/testnet/rpc',
  faucetUrl: `https://faucet.gogopool.com`,
  isTestnet: true,
  logoUrl: 'https://www.coqinu.com/coqinu-incoqwetrust.png',
  primaryColor: '#FF7C43',
  contracts: {
    teleportedErc20: {
      universalId: '10255-0xa8DA748Fbe6ba75AB89940612dE65e88C10A202F',
      address: '0xa8DA748Fbe6ba75AB89940612dE65e88C10A202F',
      name: 'Coqinu',
      symbol: 'COQ',
      decimals: 18,
      abi: TELEPORTED_ERC20_ABI,
    },
    bridge: {
      universalId: '10255-0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf',
      address: '0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf',
      name: 'Teleporter ERC20 Bridge',
      abi: TELEPORTER_BRIDGE_ABI,
    },
  },
} as const satisfies EvmChain;

export const TELEPORTER_CONFIG = {
  tlpMintChain: C_CHAIN,
  chains: [C_CHAIN, COQNET] as const satisfies readonly EvmChain[],
} as const;

export type EvmTeleporterChain = (typeof TELEPORTER_CONFIG.chains)[number];
