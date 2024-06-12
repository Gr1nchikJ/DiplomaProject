export const getConfig = (env) => {
    switch (env) {
      case 'production':
        return {
          networkId: 'mainnet',
          nodeUrl: 'https://rpc.mainnet.near.org',
          walletUrl: 'https://wallet.near.org',
          helperUrl: 'https://helper.mainnet.near.org',
          explorerUrl: 'https://explorer.mainnet.near.org',
          contractName: 'your-contract-name.mainnet'
        };
      case 'development':
      case 'testnet':
        return {
          networkId: 'testnet',
          nodeUrl: 'https://rpc.testnet.near.org',
          walletUrl: 'https://wallet.testnet.near.org',
          helperUrl: 'https://helper.testnet.near.org',
          explorerUrl: 'https://explorer.testnet.near.org',
          contractName: 'your-contract-name.testnet'
        };
      default:
        throw new Error('Unsupported environment. Check your NEAR environment configuration.');
    }
  }
  