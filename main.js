const mask = '+7(985)0II-**-**';
const wrapper = document.querySelector(".phone-wrapper");

const Props = {
    mask: mask,
    wrapper: wrapper
};
const phoneWrapper = new PhoneWrapper(Props);
maskParse(mask);