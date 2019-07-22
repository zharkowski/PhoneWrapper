const mask = '+7(985)0II-**-**';
const wrapper = document.querySelector(".phone-wrapper");

const Props = {
    mask: mask,
    wrapper: wrapper
};

const phoneWrapper = new PhoneWrapper(Props);
phoneWrapper.maskParse();

const inputs = wrapper.querySelectorAll(".input-block");
for (let i=0; i<inputs.length; i++) {
    inputs[i].onblur = function () {
        if (isNaN(this.value)) {
            wrapper.classList.add("error");
            wrapper.querySelector(".error-message").style.display = "block";
        }
    };

    inputs[i].onfocus = function () {
        wrapper.classList.remove("error");
        wrapper.querySelector(".error-message").style.display = "none";
    };
}