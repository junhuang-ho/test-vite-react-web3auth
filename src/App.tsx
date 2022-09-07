import { useEffect } from "react"
import { Web3Auth } from "@web3auth/web3auth";

function App() {

    useEffect(() => {
        const init = async () => {
            try {

                const web3auth_ = new Web3Auth({
                    clientId: 'BCra18FhoqHZBjima6njP0JKotW1lSDCyjdhcyuHpj8WO_0AbQ04_psVRM-5XV9DpUFYGRbct78l5JVN4qvskh0',
                    chainConfig: {
                        chainNamespace: 'eip155',
                        chainId: '0x89',
                        rpcTarget: "https://polygon-rpc.com", // This is just a placeholder, I am actually using my own private RPC target (both results same)
                        displayName: "Polygon Mainnet",
                        blockExplorer: "https://polygonscan.com/",
                        ticker: "MATIC",
                        tickerName: "Matic",
                    },
                    uiConfig: { appLogo: "https://raw.githubusercontent.com/junhuang-ho/miscellaneous/64fc258aefb53d20b6e520aa44c7e5be2bf10b06/l3-t1-crop.svg" },// ref: https://web3auth.io/docs/sdk/web/web3auth/initialize#uiconfig
                    authMode: 'DAPP',
                    storageKey: 'session'//'local'
                });



                await web3auth_.initModal()

                await web3auth_.connect()
            } catch (error) {
                console.error(error);
            }
        };
        init()
    }, []);

    return (
        <div>
            hi
        </div>
    )
}

export default App
