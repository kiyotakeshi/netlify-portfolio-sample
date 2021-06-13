import React from "react";
import ReactDOM from "react-dom";
// ブラウザごとにもつユーザーエージェントスタイルシートという差分を埋めて、
// 表示を統一するために追加する、 CSS リセット
import 'minireset.css'
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
