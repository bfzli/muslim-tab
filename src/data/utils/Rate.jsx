import { Variables } from "../constants";

const Rate = () => {
  navigator.userAgent.indexOf('Chrome') !== -1 && window.open(Variables.google, "_blank");
  navigator.userAgent.indexOf('Firefox') !== -1 && window.open(Variables.firefox, "_blank");
  navigator.userAgent.indexOf('Opera') !== -1 && window.open(Variables.opera, "_blank");
  navigator.userAgent.indexOf('Edge') !== -1 && window.open(Variables.edge, "_blank");
  navigator.userAgent.indexOf('Brave') !== -1 && window.open(Variables.brave, "_blank");
  // navigator.userAgent.indexOf('Safari') !== -1 && window.open(Variables.google, "_blank");

};

export default Rate;
