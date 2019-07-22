class PhoneWrapper {
    constructor(Props) {
        this.wrapper = Props.wrapper;
        this.mask = Props.mask;
        this.nodes = [];
    }

    maskParse() {
        const chars = this.mask.split("");
        const div = document.createElement("div");
        div.classList.add("div-wrapper");
        wrapper.appendChild(div);
        for (let i = 0; i < chars.length; i++) {
            switch (chars[i]) {
                case "I":
                    //инпут
                    let input = document.createElement("input");
                    input.type = "text";
                    input.maxLength = "1";
                    input.placeholder = "_";
                    input.className = "block input-block";
                    this.nodes.push(input);
                    break;
                case "X":
                    //блок с символом "X"
                    let X = document.createElement("div");
                    X.innerHTML = "<span>X</span>>";
                    X.className = "block grey-block";
                    this.nodes.push(X);
                    break;
                case "*":
                    //блок с символом "●"
                    let dot = document.createElement("div");
                    dot.innerHTML = "<span>●</span>";
                    dot.className = "block grey-block";
                    this.nodes.push(dot);
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
                    number.innerHTML = "<span>" + chars[i] + "</span>";
                    number.className = "block grey-block";
                    this.nodes.push(number);
                    break;
                default:
                    //символ
                    let symbol = document.createElement("div");
                    symbol.innerHTML = "<span>" + chars[i] + "</span>";
                    symbol.className = "symbol-block";
                    this.nodes.push(symbol);
                    break;
            }
        }

        for (let i = 0; i < this.nodes.length; i++) {
            this.wrapper.querySelector("div").appendChild(this.nodes[i]);
        }
    }
}