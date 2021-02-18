module.exports = function check(str, bracketsConfig) {
  var stack = [];
  for (let index = 0; index < str.length; index++) {
    stack.push(str[index]);
    if(stack.length > 1){
      for (let key in bracketsConfig) {
        if(stack[stack.length - 1] == bracketsConfig[key][1] && stack[stack.length - 2] == bracketsConfig[key][0]){
          stack.pop();
          stack.pop();
        }
      }
    }
  }
  if(stack.length == 0){
    return true;
  }else{
    return false;
  }
}
