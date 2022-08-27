# 🏂🏽 solid-msg

A solid message UI component.

[View DEMO](https://solid-msg.gewulian.com)

Features:

- Use [twind](https://github.com/tw-in-js/twind)
- Progress bar
- Easy use 
- Easy custom
- Tiny, only `1.5kb` in gzip

# 快速开始

安装:

```sh
pnpm i "solid-msg"
```

在 Solid 工程中使用:

```tsx
import { solidMsg } from "solid-msg";

solidMsg.light("hello solid-msg")
```

# 调整配置

```tsx
import { solidMsg } from "solid-msg";

 solidMsg.setOptions({
  positon:"center",
  clickCardClose: true,
  closeButton: false,
  progress: false,
  width: "500px",
});
solidMsg.light("hello solid-msg")
```

# 自定义消息内容

```tsx
import { solidMsg } from "solid-msg";

solidMsg.light(
  <div>
    <h2>the title</h2>
    <div>the message</div>
  </div>
);
```


# 自定义消息卡片

```tsx
import { solidMsg } from "solid-msg";

solidMsg.setOptions({
  Component: MsgComponent,
});


const MsgComponent: Component<{
  id: string;
  msg: any;
  type: MsgType;
  duration: number;
}> = (p) => {

  return (
    <div>
      <div>Your custom message card</div>
      <div>{p.msg}</div>
    </div>
  );
};

```

