import "@babel/polyfill";
import { WsProvider, ApiPromise } from "@polkadot/api";
import { typesBundleForPolkadot } from '@reef-defi/type-definitions';
import { subscribeMessage, getNetworkConst, getNetworkProperties } from "./service/setting";
import keyring from "./service/keyring";
import account from "./service/account";
import staking from "./service/staking";
// import wc from "./service/walletconnect";
import gov from "./service/gov";
import { genLinks } from "./utils/config/config";

// console.log will send message to MsgChannel to App
function send(path: string, data: any) {
  console.log(JSON.stringify({ path, data }));
}
send("log", "main js loaded");
send("log", "main js reef loaded");
(<any>window).send = send;

/**
 * connect to a specific node.
 *
 * @param {string} nodeEndpoint
 */
async function connect(nodes: string[]) {
  return new Promise(async (resolve, reject) => {
    const wsProvider = new WsProvider(nodes);
    try {
      const res = await ApiPromise.create({
        provider: wsProvider,
        typesBundle: typesBundleForPolkadot,
        types: {
        "CallOf": "Call",
        "DispatchTime": {
        "_enum": {
          "At": "BlockNumber",
            "After": "BlockNumber"
        }
      },
        "ScheduleTaskIndex": "u32",
        "DelayedOrigin": {
        "delay": "BlockNumber",
          "origin": "PalletsOrigin"
      },
        "StorageValue": "Vec<u8>",
        "GraduallyUpdate": {
        "key": "StorageKey",
          "targetValue": "StorageValue",
          "perBlock": "StorageValue"
      },
        "StorageKeyBytes": "Vec<u8>",
        "StorageValueBytes": "Vec<u8>",
        "RpcDataProviderId": "Text",
        "OrderedSet": "Vec<AccountId>",
        "OrmlAccountData": {
        "free": "Balance",
          "frozen": "Balance",
          "reserved": "Balance"
      },
        "OrmlBalanceLock": {
        "amount": "Balance",
          "id": "LockIdentifier"
      },
        "DelayedDispatchTime": {
        "_enum": {
          "At": "BlockNumber",
            "After": "BlockNumber"
        }
      },
        "DispatchId": "u32",
        "Price": "FixedU128",
        "OrmlVestingSchedule": {
        "start": "BlockNumber",
          "period": "BlockNumber",
          "periodCount": "u32",
          "perPeriod": "Compact<Balance>"
      },
        "VestingScheduleOf": "OrmlVestingSchedule",
        "PalletBalanceOf": "Balance",
        "ChangeBalance": {
        "_enum": {
          "NoChange": "Null",
            "NewValue": "Balance"
        }
      },
        "BalanceWrapper": {
        "amount": "Balance"
      },
        "BalanceRequest": {
        "amount": "Balance"
      },
        "EvmAccountInfo": {
        "nonce": "Index",
          "contractInfo": "Option<EvmContractInfo>",
          "developerDeposit": "Option<Balance>"
      },
        "CodeInfo": {
        "codeSize": "u32",
          "refCount": "u32"
      },
        "EvmContractInfo": {
        "codeHash": "H256",
          "maintainer": "H160",
          "deployed": "bool"
      },
        "EvmAddress": "H160",
        "CallRequest": {
        "from": "Option<H160>",
          "to": "Option<H160>",
          "gasLimit": "Option<u32>",
          "storageLimit": "Option<u32>",
          "value": "Option<U128>",
          "data": "Option<Bytes>"
      },
        "CID": "Vec<u8>",
        "ClassId": "u32",
        "ClassIdOf": "ClassId",
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "TokenInfoOf": {
        "metadata": "CID",
          "owner": "AccountId",
          "data": "TokenData"
      },
        "TokenData": {
        "deposit": "Balance"
      },
        "Properties": {
        "_set": {
          "_bitLength": 8,
            "Transferable": 1,
            "Burnable": 2
        }
      },
        "BondingLedger": {
        "total": "Compact<Balance>",
          "active": "Compact<Balance>",
          "unlocking": "Vec<UnlockChunk>"
      },
        "Amount": "i128",
        "AmountOf": "Amount",
        "AuctionId": "u32",
        "AuctionIdOf": "AuctionId",
        "TokenSymbol": {
        "_enum": {
          "REEF": 0,
            "RUSD": 1
        }
      },
        "CurrencyId": {
        "_enum": {
          "Token": "TokenSymbol",
            "DEXShare": "(TokenSymbol, TokenSymbol)",
            "ERC20": "EvmAddress"
        }
      },
        "CurrencyIdOf": "CurrencyId",
        "AuthoritysOriginId": {
        "_enum": [
          "Root"
        ]
      },
        "TradingPair": "(CurrencyId,  CurrencyId)",
        "AsOriginId": "AuthoritysOriginId",
        "SubAccountStatus": {
        "bonded": "Balance",
          "available": "Balance",
          "unbonding": "Vec<(EraIndex,Balance)>",
          "mockRewardRate": "Rate"
      },
        "Params": {
        "targetMaxFreeUnbondedRatio": "Ratio",
          "targetMinFreeUnbondedRatio": "Ratio",
          "targetUnbondingToFreeRatio": "Ratio",
          "unbondingToFreeAdjustment": "Ratio",
          "baseFeeRate": "Rate"
      },
        "Ledger": {
        "bonded": "Balance",
          "unbondingToFree": "Balance",
          "freePool": "Balance",
          "toUnbondNextEra": "(Balance, Balance)"
      },
        "ChangeRate": {
        "_enum": {
          "NoChange": "Null",
            "NewValue": "Rate"
        }
      },
        "ChangeRatio": {
        "_enum": {
          "NoChange": "Null",
            "NewValue": "Ratio"
        }
      },
        "BalanceInfo": {
        "amount": "Balance"
      },
        "Rate": "FixedU128",
        "Ratio": "FixedU128",
        "PublicKey": "[u8; 20]",
        "DestAddress": "Vec<u8>",
        "Keys": "SessionKeys2",
        "PalletsOrigin": {
        "_enum": {
          "System": "SystemOrigin",
            "Timestamp": "Null",
            "RandomnessCollectiveFlip": "Null",
            "Balances": "Null",
            "Accounts": "Null",
            "Currencies": "Null",
            "Tokens": "Null",
            "Vesting": "Null",
            "Utility": "Null",
            "Multisig": "Null",
            "Recovery": "Null",
            "Proxy": "Null",
            "Scheduler": "Null",
            "Indices": "Null",
            "GraduallyUpdate": "Null",
            "Authorship": "Null",
            "Babe": "Null",
            "Grandpa": "Null",
            "Staking": "Null",
            "Session": "Null",
            "Historical": "Null",
            "Authority": "DelayedOrigin",
            "ElectionsPhragmen": "Null",
            "Contracts": "Null",
            "EVM": "Null",
            "Sudo": "Null",
            "TransactionPayment": "Null"
        }
      },
        "LockState": {
        "_enum": {
          "Committed": "None",
            "Unbonding": "BlockNumber"
        }
      },
        "LockDuration": {
        "_enum": [
          "OneMonth",
          "OneYear",
          "TenYears"
        ]
      },
        "EraIndex": "u32",
        "Era": {
        "index": "EraIndex",
          "start": "BlockNumber"
      },
        "Commitment": {
        "state": "LockState",
          "duration": "LockDuration",
          "amount": "Balance",
          "candidate": "AccountId"
      }
      }
      });
      (<any>window).api = res;
      const url = nodes[(<any>res)._options.provider.__private_9_endpointIndex];
      send("log", `${url} wss connected success`);
      resolve(url);
    } catch (err) {
      send("log", `connect failed`);
      wsProvider.disconnect();
      resolve(null);
    }
  });
}

const test = async () => {
  // const props = await api.rpc.system.properties();
  // send("log", props);
};

const settings = {
  test,
  connect,
  subscribeMessage,
  getNetworkConst,
  getNetworkProperties,
  // generate external links to polkascan/subscan/polkassembly...
  genLinks,
};

(<any>window).settings = settings;
(<any>window).keyring = keyring;
(<any>window).account = account;
(<any>window).staking = staking;
(<any>window).gov = gov;

// walletConnect supporting is not ready.
// (<any>window).walletConnect = wc;

export default settings;
