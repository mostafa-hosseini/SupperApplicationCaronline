export default function priceNumber(str = "") {
    if (str) {
      str = str.toString();
      var objRegex = new RegExp("(-?[0-9]+)([0-9]{3})");
  
      while (objRegex.test(str)) {
        str = str.replace(objRegex, "$1,$2");
      }
    }
    return str;
  }
  