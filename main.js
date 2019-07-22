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
            this.classList.add("error");
            
        }
    }

    inputs[i].onfocus = function () {
        inputs[i].classList.remove("error");
    }
}