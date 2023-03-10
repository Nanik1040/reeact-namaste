import React from "react";
import ReactDOM from "react-dom/client";
const h = React.createElement("h1", {}, "Hello");
const head = React.createElement("h2", {}, "header");
// const r = ReactDOM.createRoot(document.getElementById("root"));
const foot = React.createElement("div", { id: footer }, [h, head]);

// const footer = ReactDOM.createRoot(document.getElementById("header"));
const header = ReactDOM.createRoot(document.getElementById("header"));
// r.render(h);
// footer.render(head);
header.render(foot);
