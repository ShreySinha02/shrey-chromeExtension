import cssText from "data-text:~style.css";
import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetOverlayAnchor, PlasmoGetRootContainer, PlasmoRender } from "plasmo";
import { useState } from "react";
// import { createRoot } from "react-dom/client";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CountButton } from "~features/CountButton";
import { GenerateBox } from "~features/GenerateBox";

const INSERT_NODE = ".msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate";

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
};  

export const getStyle = () => {
  const baseFontSize = 12;
  let updatedCssText = cssText.replaceAll(":root", ":host(plasmo-csui)");
  const remRegex = /([\d.]+)rem/g;
  updatedCssText = updatedCssText.replace(remRegex, (match, remValue) => {
    const pixels = parseFloat(remValue) * baseFontSize;
    return `${pixels}px`;
  });
  const style = document.createElement("style");
  style.textContent = updatedCssText;
  return style;
};

console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii linkedin");

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector(INSERT_NODE)

// export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
//   element: document.querySelector(INSERT_NODE),
//   insertPosition: "afterend"
// });

export const getShadowHostId = () => "plasmo-inline";

const CustomButton = () => {
  const [state, setState] = useState<boolean>(false);

    const toggleState = () => {
        setState(prevState => !prevState);
    };
  return (
    <div className="relative w-5 h-5">
    <CountButton toggleState={toggleState}   />
  {state&&<GenerateBox/>}
    
    </div>
  )
}
 
export default CustomButton
