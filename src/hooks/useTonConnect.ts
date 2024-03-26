import { CHAIN } from "@tonconnect/protocol";
import { Sender, SenderArguments } from "ton-core";
import {useTonAddress, useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";

export function useTonConnect(): {
  sender: Sender;
  connected: boolean;
  wallet: string | null;
  network: CHAIN | null;
} {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const userFriendlyAddress = useTonAddress();
  return {
    sender: {
      send: async (args: SenderArguments) => {
        console.log('tonConnectUI')
        console.log(tonConnectUI.getWallets())
        console.log(userFriendlyAddress)
        // tonConnectUI.sendTransaction({
        //   messages: [
        //     {
        //       address: args.to.toString(),
        //       amount: args.value.toString(),
        //       payload: args.body?.toBoc().toString("base64"),
        //     },
        //   ],
        //   validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
        // });
      },
    },
    connected: !!wallet?.account.address,
    wallet: wallet?.account.address ?? null,
    network: wallet?.account.chain ?? null,
  };
}
