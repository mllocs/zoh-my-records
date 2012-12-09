String.prototype.truncate = function(max) {
  if(max < 3) {
    throw { name: "ArgumentError", message: "The argument should be greater than 3" };

  } else if(this.length > max) {
    return this.slice(0, max-3).concat("...");

  } else {
    return this.slice(0, this.length);
  }
}