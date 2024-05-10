/*
<div id="root">
    <div id="parent">
    <div id="children1">
        <h1 id="heading1">This is Heading Tags</h1>
        <h2 id="heading2">This is Heading Tags</h2>
    </div>
    <div id="children2">
        <h1 id="heading1">This is Heading Tags</h1>
        <h2 id="heading2">This is Heading Tags</h2>
    </div>
    </div>
</div>

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children1" }, [
    React.createElement("h1", { id: "heading1" }, "This is Heading1"),
    React.createElement("h2", { id: "heading2" }, "This is Heading2"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", { id: "heading1" }, "This is Heading1"),
    React.createElement("h2", { id: "heading2" }, "This is Second Heading"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);