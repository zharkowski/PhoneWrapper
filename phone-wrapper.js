function PhoneWrapper(Props) {
    let wrapper = Props.wrapper;
    let mask = Props.mask;
    let nodes = maskParse(mask);
    for (let i = 0; i < nodes.length; i ++) {
        wrapper.appendChild(nodes[i]);
    }

}

function maskParse(mask) {
    let chars = mask.split("");
    let nodes = [];

    for (let i = 0; i < chars.length; i++) {
        switch (chars[i]) {
            case "I":
                //инпут
                let input = document.createElement("input");
                input.type = "text";
                input.maxLength = "1";
                input.placeholder = "_";
                input.className = "input-block";
                nodes.push(input);
                break;
            case "X":
                //блок с символом "X"
                let X = document.createElement("div");
                X.innerHTML="<span>X</span>>";
                X.className="grey-block";
                nodes.push(X);
                break;
            case "*":
                //блок с символом "●"
                let dot = document.createElement("div");
                dot.innerHTML="<span>●</span>";
                dot.className="grey-block";
                nodes.push(dot);
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                //блок с цифрой
                let number = document.createElement("div");
                number.innerHTML="<span>" + chars[i] + "</span>";
                number.className="grey-block";
                nodes.push(number);
                break;
            default:
                //символ
                // let symbol = document.createTextNode(chars[i]);
                let symbol = document.createElement("div");
                symbol.innerHTML="<span>" + chars[i] + "</span>";
                symbol.className="symbol-block";
                nodes.push(symbol);
                break;
        }
    }

    return nodes;
}