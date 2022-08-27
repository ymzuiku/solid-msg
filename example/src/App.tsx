// import "solid-msg/base.css";

import { Component, createSignal, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import { solidMsg } from "solid-msg";
import { tw } from "twind";
import LogoSvg from "./logo.svg";

const Button: Component<{ onclick?: any; children: JSX.Element }> = (p) => {
  return (
    <button
      class={tw`bg-red-500 text-white p-2 rounded-lg shadow focus:outline-none outline-none`}
      onclick={p.onclick}
    >
      {p.children}
    </button>
  );
};

const App = () => {
  const [getMsg, setMsg] = createSignal("Input Message");
  const [pos, setPos] = createSignal(solidMsg.options.position);
  return (
    <div class={tw`h-screen w-screen flex flex-col bg-gray-900`}>
      <div class={tw`flex-1 flex flex-col items-center justify-center`}>
        <Dynamic component={LogoSvg} class={tw`w-60 h-60`} />
      </div>
      <div class={tw`px-20 pb-4 space-y-4`}>
        <div class="flex flex-row space-x-4">
          <select
            class={tw`px-20 pb-4 bg-gray-500 bg-opacity-30 text-white rounded p-4 text-white focus:outline-none`}
            value={pos()}
            onChange={(e) => {
              const v = e.currentTarget.value as any;
              setPos(v);
              solidMsg.setOptions({
                position: v,
              });
            }}
          >
            <option value="top">position: Top</option>
            <option value="center">position: Center</option>
            <option value="bottom">position: Bottom</option>
          </select>
          <select
            class={tw`px-20 pb-4 bg-gray-500 bg-opacity-30 text-white rounded p-4 text-white focus:outline-none`}
            onChange={(e) => {
              const v = e.currentTarget.value as any;
              if (v == "1") {
                solidMsg.setOptions({
                  clickCardClose: true,
                  closeButton: false,
                });
              } else {
                solidMsg.setOptions({
                  clickCardClose: false,
                  closeButton: true,
                });
              }
            }}
          >
            <option value="1">Close button: hidden</option>
            <option value="2">Close button: show</option>
          </select>
          <select
            class={tw`px-20 pb-4 bg-gray-500 bg-opacity-30 text-white rounded p-4 text-white focus:outline-none`}
            onChange={(e) => {
              const v = e.currentTarget.value as any;
              if (v == "1") {
                solidMsg.setOptions({
                  progress: true,
                });
              } else {
                solidMsg.setOptions({
                  progress: false,
                });
              }
            }}
          >
            <option value="1">Progress: show</option>
            <option value="2">Progress: hidden</option>
          </select>
        </div>
        <form
          onsubmit={(e) => {
            e.preventDefault();
            solidMsg.light(getMsg());
          }}
        >
          <input
            placeholder="About message"
            class={tw`w-full bg-gray-500 bg-opacity-10 p-2 rounded focus:outline-none text-white`}
            value={getMsg()}
            oninput={(e) => setMsg(e.currentTarget.value)}
          />
        </form>
      </div>
      <div class={tw`p-20 pt-0 flex flex-row space-x-4`}>
        <Button
          onclick={() => {
            solidMsg.light(getMsg());
          }}
        >
          Show light
        </Button>

        <Button
          onclick={() => {
            solidMsg.dark(getMsg());
          }}
        >
          Show dark
        </Button>
        <Button
          onclick={() => {
            solidMsg.success(getMsg());
          }}
        >
          Show success
        </Button>
        <Button
          onclick={() => {
            solidMsg.error(getMsg());
          }}
        >
          Show error
        </Button>
      </div>
    </div>
  );
};

export default App;
