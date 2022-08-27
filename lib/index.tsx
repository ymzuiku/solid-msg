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

type MsgType = "light" | "error" | "success" | "dark";
type PositionType = "top" | "center" | "bottom";

const MsgComponent: Component<{
  id: string;
  msg: any;
  type: MsgType;
  duration: number;
}> = (p) => {
  const [getLen, setLen] = createSignal(p.duration);
  const t = setInterval(() => {
    setLen(getLen() - 50);
  }, 50);
  onCleanup(() => {
    clearInterval(t);
  });
  return (
    <div
      class={options.css[p.type]}
      classList={{ [tw`cursor-pointer`]: options.clickCardClose }}
      onclick={() => {
        if (options.clickCardClose) {
          closeItem(p.id);
        }
      }}
    >
      {options.progress && (
        <div
          class={[
            tw`absolute w-full left-0 bottom-0 rounded h-[3px]`,
            p.type === "dark"
              ? tw`bg-white opacity-20`
              : tw`bg-black opacity-20`,
          ].join(" ")}
          style={{
            transform: `scaleX(${getLen() / p.duration})`,
            "transform-origin": "0% 0%",
          }}
        />
      )}
      <p class={tw`flex-1 break-words whitespace-normal overflow-hidden`}>
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
  duration: {
    info: 50000,
    error: 50000,
    success: 50000,
  },
  css: {
    error: tw`relative overflow-hidden w-full inline-block p-2 bg-red-500 dark:bg-red-600 text-white rounded-lg flex flex-row items-center justify-center shadow-lg`,
    success: tw`relative overflow-hidden w-full p-2 inline-block bg-indigo-500 dark:bg-black text-white rounded-lg  flex flex-row items-center justify-center shadow-lg`,
    light: tw`relative overflow-hidden w-full p-2 inline-block bg-white dark:bg-black text-base dark:text-white rounded-lg border-1 border-gray-200 flex flex-row items-center justify-center shadow-lg`,
    dark: tw`relative overflow-hidden w-full p-2 inline-block bg-black dark:bg-black text-white rounded-lg  flex flex-row items-center justify-center shadow-lg`,
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
    list: { msg: any; type: MsgType; id: string; duration: number }[];
  }>({
    show: true,
    list: [],
  });
});

const closeItem = (id: string) => {
  const list = [];
  for (let i = 0; i < store.list.length; i++) {
    const item = store.list[i];
    if (item.id !== id) {
      list.push(item);
    }
  }
  setStore("list", list);
};

const createId = () => {
  return String(Math.random());
};

const showMsg = (type: MsgType, msg: any, duration = options.duration.info) => {
  createMessage();
  const id = createId();
  setStore("list", [...store.list, { msg, type, id, duration }]);
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
  error: (msg: any, duration = options.duration.error) => {
    showMsg("error", msg, duration);
  },
  success: (msg: any, duration = options.duration.success) => {
    showMsg("success", msg, duration);
  },
  light: (msg: any, duration = options.duration.info) => {
    showMsg("light", msg, duration);
  },
  dark: (msg: any, duration = options.duration.info) => {
    showMsg("dark", msg, duration);
  },
};

const positions = {
  top: tw`fixed mx-auto top-10 left-1/2 -translate-x-1/2 space-y-4`,
  center: tw`fixed mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4`,
  bottom: tw`fixed mx-auto bottom-10 left-1/2 -translate-x-1/2 space-y-4`,
};

export function Message() {
  return (
    <Show when={store.show}>
      {() => (
        <div
          class={positions[options.position]}
          style={{ width: options.width }}
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
