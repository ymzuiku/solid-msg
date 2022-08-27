# 👏🏻 solid-msg

[查看中文文档](./README-CN.md)

A solid message UI component.

[View DEMO](https://solid-msg.gewulian.com)

Features:

- Use [twind](https://github.com/tw-in-js/twind)
- Progress bar
- Easy use 
- Easy custom
- Tiny, only `1.5kb` in gzip

# Quick start

Install:

```sh
pnpm i "solid-msg"
```

In Solid project:

```tsx
import { solidMsg } from "solid-msg";

solidMsg.light("hello solid-msg")
```

# Change options

```tsx
import { solidMsg } from "solid-msg";

 solidMsg.setOptions({
  positon:"center",
  clickCardClose: true,
  closeButton: false,
  progress: false,
  width: "500px",
  padding: "20px",
});
solidMsg.light("hello solid-msg")
```

# Custom message content

```tsx
import { solidMsg } from "solid-msg";

solidMsg.light(
  <div>
    <h2>the title</h2>
    <div>the message</div>
  </div>
);
```


# Custom message card

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

