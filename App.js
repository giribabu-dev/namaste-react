const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Heading - 1 Tag"),
        React.createElement("h2", {}, "Heading - 2 Tag")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h3", {}, "Heading - 3 Tag"),
        React.createElement("h4", {}, "Heading - 4 Tag")
    ])
]);

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)