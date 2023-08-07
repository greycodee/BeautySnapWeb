import beautySnapLogo from "./assets/beauty-snap.svg";
import chromeLogo from "./assets/chrome.svg";
import alipayCode from "./assets/alipay-code.png";
import wechatCode from "./assets/wechat-code.png";
import "./App.css";

function App() {
  function installOnClick() {
    // 跳转到 Chrome 网上应用商店
    window.open("https://baidu.com");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-8 ">
      <div className="flex flex-col justify-center items-center">
        <img src={beautySnapLogo} className="logo w-48 h-48" alt="Vite logo" />
        <div>
          <h1 className="text-3xl font-bold text-center">BeautySnap</h1>
          <p className="text-center text-gray-500">A nice snipping tool</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          onClick={installOnClick}
          className="p-3 w-64 h-10 bg-purple-500 rounded-lg flex justify-center items-center 
  hover:cursor-pointer hover:bg-purple-400"
        >
          <span className="w-8 h-8 mr-1">
            <img src={chromeLogo} />
          </span>
          <span className="text-white font-bold">Install BeautySnap</span>
        </div>
      </div>

      <div className="">
        <h2 className="font-bold underline">Buy a Licences</h2>
        <span className="font-bold text-purple-500">Price: 9.9 RMB</span>
        <div className="mt-2 flex flex-row gap-1 justify-center">
          <div className="flex-col">
            <span className="flex justify-center items-center w-24 h-24  ">
              <img src={alipayCode} />
            </span>
            <p className="text-center text-xs">Alipay</p>
          </div>
          <div className="flex-col ">
            <span className="flex justify-center items-center w-24 h-24 ">
              <img src={wechatCode} />
            </span>
            <p className="text-center text-xs">Wechat</p>
          </div>
        </div>
        <div className=" w-64 text-sm font-bold p-2 flex flex-col justify-center items-center">
          <span>转账时，请一定要备注</span>
          <span className="bg-purple-500 mt-2 p-1 rounded-sm">
            BeautySnap-[接收激活码的邮箱]
          </span>
        </div>
      </div>

      <div className="text-xs text-slate-400">
        <p>如遇到问题, 请联系作者微信: greycodee</p>
        <p>Email: <a href="mailto:zhengminghui99@gmail.com">zhengminghui99@gmail.com</a></p>
        <p>
          If you encounter any problems, please contact the author on WeChat:
          greycodee
        </p>
      </div>
    </div>
  );
}

export default App;
