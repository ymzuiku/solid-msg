import {
  Component,
  createRoot,
  createSignal,
  For,
  onCleanup,
  Show,
} from "solid-js";
import { createStore } from "solid-js/store";
import { render } from "solid-js/web";
import { tw } from "twind";
const closeSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><path d="M18 6 6 18M6 6l12 12"></path></svg>
`;

type MsgType = "light" | "dark" | "red" | "blue" | "green";
type PositionType = "top" | "topRight" | "center" | "bottom";

const MsgComponent: Component<{
  id: string;
  msg: any;
  type: MsgType;
  appending?: boolean;
  removing?: boolean;
  duration: number;
}> = (p) => {
  const [getLen, setLen] = createSignal(p.duration);
  requestAnimationFrame(() => {
    setLen(getLen() - 500);
  });
  const t = setInterval(() => {
    const v = getLen() - 500;
    setLen(v > 0 ? v : 0);
  }, 500);
  onCleanup(() => {
    clearInterval(t);
  });
  return (
    <div
      class={options.css[p.type]}
      classList={{
        [tw`origin-center`]: true,
        [tw`sm:cursor-pointer`]: options.clickCardClose,
        [tw`h-0 max-h-0 opacity-0 mt-0`]: p.removing,
        [tw`mb-4`]: !p.removing,
        [tw`translate-y-12 translate-x-0 opacity-0`]: p.appending,
      }}
      style={{ padding: !p.removing ? options.padding : "0px" }}
      onclick={() => {
        if (options.clickCardClose) {
          closeItem(p.id);
        }
      }}
    >
      {options.progress && (
        <div
          class={[
            tw`absolute w-full left-0 bottom-0 rounded h-[3px] ease-linear duration-500 transition-transform`,
            options.progresCss[p.type],
          ].join(" ")}
          style={{
            transform: `scaleX(${getLen() / p.duration})`,
            "transform-origin": "0% 0%",
          }}
        />
      )}
      <p
        class={tw`text-center flex-1 break-words whitespace-normal overflow-hidden`}
        classList={{ [tw`opacity-0`]: p.removing }}
      >
        {p.msg}
      </p>
      {options.closeButton && (
        <div
          class={tw`ml-2 w-6 h-6 opacity-70 flex-grow-0 cursor-pointer`}
          innerHTML={closeSvg}
          onclick={() => closeItem(p.id)}
        ></div>
      )}
    </div>
  );
};

const options = {
  position: "top" as PositionType,
  closeButton: false,
  width: "300px",
  progress: true,
  clickCardClose: true,
  padding: "10px",
  zIndex: "2000",
  duration: 10000,
  css: {
    red: tw`relative origin-center transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-red-500 dark:bg-red-600 text-white rounded-lg flex flex-row items-center justify-center shadow-lg`,
    blue: tw`relative origin-center transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-indigo-500 dark:bg-black text-white rounded-lg flex flex-row items-center justify-center shadow-lg`,
    green: tw`relative origin-center transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-green-500 dark:bg-black text-white rounded-lg  flex flex-row items-center justify-center shadow-lg`,
    light: tw`relative origin-center transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-white dark:bg-black text-base dark:text-white rounded-lg border-1 border-gray-200 flex flex-row items-center justify-center shadow-lg`,
    dark: tw`relative origin-center transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-black dark:bg-black text-white rounded-lg  flex flex-row items-center justify-center shadow-lg`,
  },
  progresCss: {
    light: tw`bg-black opacity-20`,
    dark: tw`bg-white opacity-20`,
    blue: tw`bg-indigo-800`,
    red: tw`bg-red-800`,
    green: tw`bg-green-800`,
  },
  Component: MsgComponent,
};

let created = false;
const createMessage = () => {
  if (created) {
    return;
  }
  created = true;
  if (typeof window == "undefined") {
    return;
  }
  render(Message, document.body);
};

const [store, setStore] = createRoot(() => {
  return createStore<{
    show: boolean;
    list: {
      msg: any;
      type: MsgType;
      id: string;
      duration: number;
      removing?: boolean;
      appending?: boolean;
    }[];
  }>({
    show: true,
    list: [],
  });
});

const closeItem = (id: string) => {
  setStore("list", (v) => v.id == id, { removing: true });
  setTimeout(() => {
    const list = [];
    for (let i = 0; i < store.list.length; i++) {
      const item = store.list[i];
      if (item.id !== id) {
        list.push(item);
      }
    }
    setStore("list", list);
  }, 310);
};

const createId = () => {
  return String(Math.random());
};

const showMsg = (type: MsgType, msg: any, duration = options.duration) => {
  createMessage();
  const id = createId();
  setStore("list", [
    ...store.list,
    { msg, type, id, duration, appending: true },
  ]);
  requestAnimationFrame(() => {
    setStore("list", (v) => v.id === id, { appending: false });
  });

  setTimeout(() => {
    closeItem(id);
  }, duration);
};

export const solidMsg = {
  options,
  setOptions: (opt: Partial<typeof options>) => {
    Object.assign(options, opt);
    setStore("show", false);
    setStore("show", true);
  },
  red: (msg: any, duration = options.duration) => {
    showMsg("red", msg, duration);
  },
  blue: (msg: any, duration = options.duration) => {
    showMsg("blue", msg, duration);
  },
  green: (msg: any, duration = options.duration) => {
    showMsg("green", msg, duration);
  },
  light: (msg: any, duration = options.duration) => {
    showMsg("light", msg, duration);
  },
  dark: (msg: any, duration = options.duration) => {
    showMsg("dark", msg, duration);
  },
};

const positions = {
  top: tw`fixed mx-auto top-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center transition-all duration-200 ease-out`,
  topRight: tw`fixed mx-auto top-10 right-10 flex flex-col items-center justify-center transition-all duration-200 ease-out`,
  center: tw`fixed mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center  transition-all duration-200 ease-out`,
  bottom: tw`fixed mx-auto bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center  transition-all duration-200 ease-out`,
};

export function Message() {
  return (
    <Show when={store.show}>
      {() => (
        <div
          class={positions[options.position]}
          style={{ "max-width": options.width, "z-index": options.zIndex }}
        >
          <For each={store.list}>
            {(item) => {
              return <options.Component {...item} />;
            }}
          </For>
        </div>
      )}
    </Show>
  );
}
