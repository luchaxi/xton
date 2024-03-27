import {TonConnectButton, useTonAddress} from "@tonconnect/ui-react";
import { useCounterContract } from "../hooks/useCounterContract";
import { useTonConnect } from "../hooks/useTonConnect";

import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Ellipsis,
  Button,
} from "./styled/styled";

export function Counter() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();
  const userFriendlyAddress = useTonAddress();
  return (
    <div className="Container">
      <TonConnectButton />

      <Card>
        <FlexBoxCol>
          <h3>userAddress</h3>
          <div>{userFriendlyAddress}</div>
          <Button
              disabled={!connected}
              className={`Button ${connected ? "Active" : "Disabled"}`}
              onClick={() => {
                window.navigator.clipboard.writeText(userFriendlyAddress)
              }}
              >
            Copy
          </Button>
          {/*<h3>Counter</h3>*/}
          {/*<FlexBoxRow>*/}
          {/*  <b>Address</b>*/}
          {/*  <Ellipsis>{address}</Ellipsis>*/}
          {/*</FlexBoxRow>*/}
          {/*<FlexBoxRow>*/}
          {/*  <b>Value</b>*/}
          {/*  <div>{value ?? "Loading..."}</div>*/}
          {/*</FlexBoxRow>*/}
          {/*<Button*/}
          {/*  disabled={!connected}*/}
          {/*  className={`Button ${connected ? "Active" : "Disabled"}`}*/}
          {/*  onClick={() => {*/}
          {/*    sendIncrement();*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Increment*/}
          {/*</Button>*/}
        </FlexBoxCol>
      </Card>
    </div>
  );
}
