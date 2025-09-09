
import {
  createPublicClient,
  createWalletClient,
  custom,
  http,
} from "viem";
import { liskSepolia } from "viem/chains";
import { walletActionsL2, publicActionsL2 } from 'viem/op-stack'

  export const walletClient = createWalletClient({ chain: liskSepolia, transport: custom(window.ethereum) }).extend(
    walletActionsL2()
  );
  export const publicClient = createPublicClient({ chain: liskSepolia, transport: http() }).extend(
    publicActionsL2()
  );