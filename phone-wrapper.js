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
                nodes.push(input);
                break;
            case "X":
                //блок с символом "X"
                let X = document.createElement("div");
                X.innerHTML="X";
                nodes.push(X);
                break;
            case "*":
                //блок с символом "●"
                let dot = document.createElement("div");
                dot.innerHTML="●";
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
                number.innerHTML=chars[i];
                nodes.push(number);
                break;
            default:
                //символ
                let symbol = document.createTextNode(chars[i]);
                nodes.push(symbol);
                break;
        }
    }

    return nodes;
}