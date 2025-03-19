// the function `mycall` is a Function.prototype.call without calling the native call method
Function.prototype.myCall = function (thisArg, ...argArray) {
    // saving the `thisArg` as an object
    thisArg = thisArg ?? globalThis;
    // Create a unique symbol to avoid overwriting existing properties on `thisArg`
    const fnKey = Symbol();
    // Temporarily assign the function to `thisArg` using the unique symbol
    thisArg[fnKey] = this;
    // Invoke the function with the provided arguments and `thisArg` as the context
    const result = thisArg[fnKey](...argArray);
    // Clean up by deleting the temporary function property from `thisArg`
    delete thisArg[fnKey];
    // Return the result of the function invocation
    return result;
  };
  