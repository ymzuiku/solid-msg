import {
  Component,
  createRoot,
  createSignal,
  For,
  onMount,
  Show,
} from "solid-js";
import { createStore } from "solid-js/store";
import { render } from "solid-js/web";

import txt from "./css.txt";

const style = document.createElement("style");
style.textContent = txt;
document.head.appendChild(style);

const closeSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><path d="M18 6 6 18M6 6l12 12"></path></svg>
`;

type MsgType = "light" | "dark" | "red" | "blue" | "green";
type PositionType = "top" | "top-right" | "center" | "bottom";

const MsgComponent: Component<{
  id: string;
  msg: any;
  type: MsgType;
  appending?: boolean;
  removing?: boolean;
  duration: number;
}> = (p) => {
  const [getLen, setLen] = createSignal(1);
  onMount(() => {
    requestAnimationFrame(() => {
      setLen(0);
    });
  });

  return (
    <div
      classList={{
        ["solid-msg"]: true,
        [p.type]: true,
        removing: p.removing,
        appending: p.appending,
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
          class={[`solid-msg-progrecss`, p.type].join(" ")}
          style={{
            transform: `scaleX(${getLen()})`,
            "transition-duration": p.duration + "ms",
            "transform-origin": "0% 0%",
          }}
        />
      )}
      <div class="solid-msg-txt" classList={{ removing: p.removing }}>
        {p.msg}
      </div>
      {options.closeButton && (
        <div
          class="solid-msg-close"
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

export function Message() {
  return (
    <Show when={store.show}>
      {() => (
        <div
          class={`solid-msg-box ${options.position}`}
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
