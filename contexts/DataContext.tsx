declare let window: any;
import { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";
import Animatic from "../abis/Animatic.json";
interface DataContextProps {
  account: string;
  contract: any;
  loading: boolean;
  videos: any[];
  videoCount: number;
  updateVideos: () => Promise<void>;
  tipVideoOwner: (id: string, tipAmout: any) => Promise<void>;
}

const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider: React.FC = ({ children }) => {
  const data = useProviderData();

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext<DataContextProps>(DataContext);

export const useProviderData = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [videoCount, setVideoCount] = useState(0);
  const [account, setAccount] = useState("0x0");
  const [contract, setContract] = useState<any>();

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Non-Eth browser detected. Please consider using MetaMask.");
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    var allAccounts = await web3.eth.getAccounts();
    setAccount(allAccounts[0]);
    const networkId = await web3.eth.net.getId();
    const networkData = Animatic.networks[networkId];
    if (networkData) {
      var tempContract = new web3.eth.Contract(
        Animatic.abi,
        networkData.address
      );
      setContract(tempContract);
      var count = await tempContract.methods.videoCount().call();
      setVideoCount(count);
      var tempVideoList = [];
      for (var i = 1; i <= count; i++) {
        const video = await tempContract.methods.videos(i).call();
        tempVideoList.push(video);
      }
      tempVideoList.reverse();
      setVideos(tempVideoList);
    } else {
      window.alert("TestNet not found");
    }
    setLoading(false);
  };

  const updateVideos = async () => {
    setLoading(true);
    if (contract !== undefined) {
      var count = await contract.methods.videoCount().call();
      setVideoCount(count);
      var tempVideoList = [];
      for (var i = 1; i <= count; i++) {
        const video = await contract.methods.videos(i).call();
        tempVideoList.push(video);
      }
      tempVideoList.reverse();
      setVideos(tempVideoList);
      setLoading(false);
    }
  };

  const tipVideoOwner = async (id: string, tipAmout) => {
    var res = await contract.methods
      .tipVideoOwner(id)
      .send({ from: account, value: tipAmout });
  };

  return {
    account,
    contract,
    loading,
    videos,
    videoCount,
    updateVideos,
    tipVideoOwner,
  };
};
