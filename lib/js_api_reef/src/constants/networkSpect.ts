import networks from "@polkadot/networks";
import { assert } from "@polkadot/util";

const colors = {
  background: {
    app: "#151515",
    button: "C0C0C0",
    card: "#262626",
    os: "#000000",
  },
  border: {
    dark: "#000000",
    light: "#666666",
    signal: "#8E1F40",
  },
  signal: {
    error: "#D73400",
    main: "#FF4077",
  },
  text: {
    faded: "#9A9A9A",
    main: "#C0C0C0",
  },
};

export const unknownNetworkPathId = "";

export const NetworkProtocols = Object.freeze({
  ETHEREUM: "ethereum",
  SUBSTRATE: "substrate",
  UNKNOWN: "unknown",
});

// accounts for which the network couldn't be found (failed migration, removed network)
export const UnknownNetworkKeys = Object.freeze({
  UNKNOWN: "unknown",
});

// genesisHash is used as Network key for Substrate networks
export const SubstrateNetworkKeys = Object.freeze({
  REEF: "0x7834781d38e4798d548e34ec947d19deea29df148a7bf32484b7b24dacf8d4b7", // https://reefscan.com/block/0x7834781d38e4798d548e34ec947d19deea29df148a7bf32484b7b24dacf8d4b7
});

const unknownNetworkBase = {
  [UnknownNetworkKeys.UNKNOWN]: {
    color: colors.signal.error,
    order: 99,
    pathId: unknownNetworkPathId,
    prefix: 2,
    protocol: NetworkProtocols.UNKNOWN,
    secondaryColor: colors.background.card,
    title: "Unknown network",
  },
};

const substrateNetworkBase = {
  [SubstrateNetworkKeys.REEF]: {
    color: "#0B95E0",
    decimals: 18,
    genesisHash: SubstrateNetworkKeys.REEF,
    order: 4,
    pathId: "reef_mainnet",
    prefix: 42,
    title: "Reef Mainnet",
    unit: "REEF",
  },
};

const substrateDefaultValues = {
  color: "#4C4646",
  protocol: NetworkProtocols.SUBSTRATE,
  secondaryColor: colors.background.card,
};

function setDefault(networkBase, defaultProps) {
  return Object.keys(networkBase).reduce((acc, networkKey) => {
    return {
      ...acc,
      [networkKey]: {
        ...defaultProps,
        ...networkBase[networkKey],
      },
    };
  }, {});
}

export const SUBSTRATE_NETWORK_LIST = Object.freeze(setDefault(substrateNetworkBase, substrateDefaultValues));
export const UNKNOWN_NETWORK = Object.freeze(unknownNetworkBase);

const substrateNetworkMetas = Object.values({
  ...SUBSTRATE_NETWORK_LIST,
  ...UNKNOWN_NETWORK,
});

export const PATH_IDS_LIST = substrateNetworkMetas.map((meta: any) => meta.pathId);

export const NETWORK_LIST = Object.freeze(Object.assign({}, SUBSTRATE_NETWORK_LIST, [], UNKNOWN_NETWORK));

export const defaultNetworkKey = SubstrateNetworkKeys.REEF;

function getGenesis(name: string): string {
  console.log(name);
  console.log(networks);
  const network = networks.find(({ network }) => network === name);

  if (name == "reef_mainnet") {
    return SubstrateNetworkKeys.REEF;
  }

  assert(network && network.genesisHash[0], `Unable to find genesisHash for ${name}`);
  return network.genesisHash[0];
}
export const REEF_GENESIS = getGenesis("reef_mainnet");
