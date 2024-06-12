import {
  keyStores,
  KeyPair,
  connect,
  Contract,
  WalletConnection,
  utils,
} from "near-api-js";
import { BLOCKCHAIN_CONSTANTS } from "../../constants";
import axios from "axios";
import { getConfig } from "./config";


export async function initContract() {
  // Initialize connection to the NEAR testnet
  const nearConfig = getConfig(process.env.NODE_ENV || "testnet");

  // Initializing connection to the NEAR node
  const near = await connect(
    Object.assign(
      { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
      nearConfig
    )
  );

  // Needed to access the user's account
  const walletConnection = new WalletConnection(near);

  // Load in user's account
  const account = walletConnection.account();

  return { account, walletConnection, nearConfig };
}

export const sendTransaction = async (methodName) => {
  const keyStore = new keyStores.InMemoryKeyStore();
  const keyPair = KeyPair.fromString(
    "ed25519:2MSYb7xCHrrq74dBwuszCokTsLGESsiFA4dLRQMhbevP2LgwaagbmwwewtUuVTyDA7XPdu9HaFo6ygUBinKKMsqG"
  );
  await keyStore.setKey(
    BLOCKCHAIN_CONSTANTS.NETWORK_ID,
    BLOCKCHAIN_CONSTANTS.ACCOUNT_ID,
    keyPair
  );

  const connectionConfig = {
    networkId: BLOCKCHAIN_CONSTANTS.NETWORK_ID,
    keyStore: keyStore,
    nodeUrl: BLOCKCHAIN_CONSTANTS.NODE_URL,
    walletUrl: BLOCKCHAIN_CONSTANTS.WALLET_URL,
    helperUrl: BLOCKCHAIN_CONSTANTS.HELPER_URL,
    explorerUrl: BLOCKCHAIN_CONSTANTS.EXPLORER_URL,
  };
  const nearConnection = await connect(connectionConfig);
  const account = await nearConnection.account(BLOCKCHAIN_CONSTANTS.ACCOUNT_ID);

  const contract = new Contract(account, BLOCKCHAIN_CONSTANTS.CONTRACT_ID, {
    changeMethods: [methodName],
  });
  await contract.issueCertificate({
    id: "011",
    description: "Lorem ipsum description",
    validUntil: "2026-12-31",
  });
};
export const getCertificate =  async (id) => {
    try {
        const functionArguments = {
            id: id,
        };

        //Should be modified since json.dumps from python adds some spaces in different places
        const jsonFunctionArguments = JSON.stringify(
            functionArguments
        ).replaceAll('":"', '": "');
        const encodedFunctionArguments = btoa(jsonFunctionArguments);

        const callFunctionBody = {
            jsonrpc: "2.0",
            id: "dontcare",
            method: "query",
            params: {
                request_type: "call_function",
                finality: "final",
                account_id: BLOCKCHAIN_CONSTANTS.CONTRACT_ID,
                method_name: "getCertificate",
                args_base64: encodedFunctionArguments,
            },
        };
        const response = await axios.post(
            BLOCKCHAIN_CONSTANTS.NODE_URL,
            callFunctionBody
        );

        console.log(response);

        let data = "";
        for (let value of response.data.result.result) {
            data += String.fromCharCode(value);
        }

        const jsonData = JSON.parse(data);

        return jsonData;
    } catch (error) {
        console.error("Error:", error.message);
    }
}
// export async function getCertificate(id) {
//   const { account } = await initContract();

//   return await account.viewFunction("test-certificate.testnet", "getCertificate", {
//     id,
//   });
// }
