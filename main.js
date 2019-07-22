const mask = '+7(985)0II-**-**';
const wrapper = document.querySelector(".phone-wrapper");

const Props = {
    mask: mask,
    wrapper: wrapper
};
const phoneWrapper = new PhoneWrapper(Props);
phoneWrapper.maskParse();
// alert(phoneWrapper.nodes);
const inputs = wrapper.querySelectorAll(".input-block");
for (let i=0; i<inputs.length; i++) {
    inputs[i].onblur = function () {
        if (isNaN(this.value)) {
            wrapper.classList.add("error");
            const errorMessage = document.createElement("div");
            errorMessage.innerHTML = "Неверный номер, попробуйте еще раз";
            errorMessage.classList.add("error-message");
            wrapper.appendChild(errorMessage);
        }
    };

    inputs[i].onfocus = function () {
        wrapper.classList.remove("error");
        const errorMessage = wrapper.querySelector(".error-message");
        wrapper.removeChild(errorMessage);
    };
}