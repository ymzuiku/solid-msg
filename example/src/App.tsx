// import "solid-msg/base.css";

import { Component, createSignal, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import { solidMsg } from "solid-msg";
import GithubSvg from "./github.svg";
import LogoSvg from "./logo.svg";

const Button: Component<{ onclick?: any; children: JSX.Element }> = (p) => {
  return (
    <button
      class={`bg-red-500 border-none text-white px-2 py-4 flex-grow-0 rounded-lg shadow focus:outline-none outline-none active:opacity-50 sm:cursor-pointer`}
      onclick={p.onclick}
    >
      {p.children}
    </button>
  );
};

const App = () => {
  const [$msg, setMsg] = createSignal("");
  const [$duration, setDuration] = createSignal(solidMsg.options.duration + "");
  const getMsg = () => $msg() || "Please input message";
  const [pos, setPos] = createSignal(solidMsg.options.position);
  return (
    <div
      class={`h-screen w-screen flex flex-col bg-gray-900 overflow-hidden box-border`}
    >
      <div class={`flex-1 flex flex-col items-center justify-center`}>
        <Dynamic component={LogoSvg} class={`w-60 h-60`} />
        <h1 class={`text-white opacity-50`}>Solid Msg</h1>
        <a
          class={`text-white w-10 h-10 fixed top-10 right-10`}
          target="_blank"
          href="https://github.com/ymzuiku/solid-msg"
        >
          <Dynamic component={GithubSvg} />
        </a>
      </div>
      <div class={`px-4 sm:px-20 pb-4 space-y-4 w-full box-border`}>
        <div class="w-full flex flex-col sm:flex-row space-y-4 sm:space-x-4 flex-wrap">
          <select
            class={`pb-4 bg-gray-500 border-none bg-opacity-30 text-white rounded p-4 text-white focus:outline-none box-border`}
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
            <option value="topRight">position: Top Right</option>
            <option value="center">position: Center</option>
            <option value="bottom">position: Bottom</option>
          </select>
          <select
            class={`bg-gray-500 border-none bg-opacity-30 text-white rounded p-4 text-white focus:outline-none`}
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
            class={`bg-gray-500 border-none bg-opacity-30 text-white rounded p-4 text-white focus:outline-none`}
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
            placeholder="Input about message"
            class={`border-none box-border w-full bg-gray-500 bg-opacity-10 p-2 rounded focus:outline-none text-white`}
            value={$msg()}
            oninput={(e) => setMsg(e.currentTarget.value)}
          />
          <input
            placeholder="Change all duration"
            class={`border-none box-border mt-4 w-full bg-gray-500 bg-opacity-10 p-2 rounded focus:outline-none text-white`}
            value={$duration()}
            oninput={(e) => {
              const v = Number(e.currentTarget.value) || 1000;
              solidMsg.setOptions({
                duration: v,
              });
              setDuration(e.currentTarget.value!);
            }}
          />
        </form>
      </div>
      <div class={`p-4 sm:p-20 pt-0 flex flex-row space-x-4`}>
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
            solidMsg.blue(getMsg());
          }}
        >
          Show blue
        </Button>
        <Button
          onclick={() => {
            solidMsg.red(getMsg());
          }}
        >
          Show red
        </Button>
        <Button
          onclick={() => {
            solidMsg.green(getMsg());
          }}
        >
          Show green
        </Button>
      </div>
    </div>
  );
};

export default App;
