import Identicon from "identicon.js";
import React, { useEffect } from "react";
import { useData } from "../../contexts/DataContext";

function Header() {
  const { account } = useData();
  const [data, setData] = React.useState();
  useEffect(() => {
    if (account !== "0x0") {
      setData(new Identicon(account, 200).toString());
    }
  }, [account]);
  return (
    <div className="container items-center">
      {/* <div className="flex flex-col md:flex-row items-center md:justify-between border py-3 px-5 rounded-xl"> */}
      <div className="flex flex-row items-center justify-between border py-3 px-5 rounded-xl">
        {/* <span className="font-mono">Polygon MATIC</span> */}
        <div className="flex flex-row space-x-2 items-center">
          {/* <div className="h-5 w-5 rounded-full bg-blue-500"></div> */}
          <img width={'30px'} src="favicon.ico" alt="Logo"></img>
          <span className="font-mono text-xl font-bold">Animatic</span>
        </div>
        <div className="flex flex-row space-x-2 py-2 items-center">
          {/* <span className="font-mono overflow-ellipsis w-52 overflow-hidden"> </span>*/}
          {account && data && (
            <a title={'Buy $MATIC with Transak'} target={'_blank'} href={`https://staging-global.transak.com/?apiKey=69d20132-6eed-4b4a-921a-cb9534d10f21&cryptoCurrencyCode=MATIC&walletAddress=${account}`}>
              <img
                width={35}
                height={35}
                src={`data:image/png;base64, ${data}`}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
