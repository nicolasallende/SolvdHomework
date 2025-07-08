function multiline(strings, ...values) {
    //this doesnt support interpolated values eg: having ${value 1} in the middle 
    const lines = strings[0].split("\n").filter(line => line.trim() !== "");
    return lines.map((line, index) => `${index + 1} ${line.trimStart()}`).join("\n");
  }
  
const code = multiline`
function add(a, b) {
    return a + b;
};`

console.log(code);
  
  
  