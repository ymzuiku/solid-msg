# 🏂🏽 solid-msg

A solid message UI component.

[View DEMO](https://solid-msg.writeflowy.com)

特性:

- 使用 [twind](https://github.com/tw-in-js/twind) 处理 css
- 进度条 bar
- 易于使用
- 易于定制
- 轻量, 仅 `2kb` in gzip



# 快速开始

安装:

```sh
pnpm i "solid-msg"
```

在 Solid 工程中使用:

```tsx
import { solidMsg } from "solid-msg";



solidMsg.light("hello solid-msg");
// change duration
solidMsg.dark("hello solid-msg", 5000);
```

# 调整配置

```tsx
import { solidMsg } from "solid-msg";

solidMsg.setOptions({
  positon: "top",
  clickCardClose: true,
  closeButton: false,
  progress: true,
  width: "300px",
  padding: "10px",
  duration: 10000,
  css: {
    blue: "custon-blue-card",
    ...solidMsg.options,
  },
  progressCss: {
    blue: "custon-blue-progress",
    ...solidMsg.options,
  },
});
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
# 基础 css values


```css
:root {
  --solid-msg-red-ft: #fff;
  --solid-msg-red-bg: #f43f5e;
  --solid-msg-red-deep: #b71933;
  --solid-msg-blue-ft: #fff;
  --solid-msg-blue-bg: #6366f1;
  --solid-msg-blue-deep: #282bda;
  --solid-msg-green-ft: #fff;
  --solid-msg-green-bg: #10b981;
  --solid-msg-green-deep: #096b4a;
  --solid-msg-light-ft: #333;
  --solid-msg-light-bg: #fff;
  --solid-msg-light-deep: rgb(129, 129, 129);
  --solid-msg-dark-ft: #fff;
  --solid-msg-dark-bg: #000;
  --solid-msg-dark-deep: rgb(103, 103, 103);
  --solid-msg-radius: 8px;
  --solid-msg-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
}
```