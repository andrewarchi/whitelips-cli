function getWsUnsignedNumber(num) {
  var result = "";
  while (num > 0) {
    result = ((num % 2) ? '\t' : ' ') + result;
    num = Math.floor(num / 2);
  }
  return result + '\n';
}

function getWsSignedNumber(num) {
  return ((num >= 0) ? ' ' : '\t') + this.getWsUnsignedNumber(Math.abs(num));
}

function labelTransformer(labelGenerator) {
  var length = 0;
  return {
    length: length,
    labels: {},
    getLabel: function (label) {
      if (typeof label != "undefined" && label in this.labels) {
        return this.labels[label];
      } else {
        var gen = labelGenerator(length++, label);
        this.labels[label] = gen;
        return gen;
      }
    }
  };
}

function getFilename(path) {
  return path.replace(/^(?:.*[\/\\])?((?:[^\/\\])*)$/, '$1');
}

function handleOverflow(selector) {
  var selector$ = $(selector);

  if (selector$[0].scrollHeight > selector$.height()) {
    selector$.css('overflow-y', 'scroll');
  } else {
    selector$.css('overflow-y', 'hidden');
  }
}

function StrArr(str) {
  return {
    arr: str.split(''),
    pos: 0,
    line: 1,
    col: 1,
    hasNext: function  () {
      return this.pos  < this.arr.length;
    },
    getNext: function  () {
      var next = this.arr[this.pos++];
      if (next == '\n') {
        this.line++;
        this.col = 1;
      } else {
        this.col++;
      }
      return next;
    },
    peek:  function ()  {
      return this.arr[this.pos];
    }
  }
}

exports.getWsUnsignedNumber = getWsUnsignedNumber;
exports.getWsSignedNumber = getWsSignedNumber;
exports.labelTransformer = labelTransformer;
exports.getFilename = getFilename;
exports.handleOverflow = handleOverflow;
exports.StrArr = StrArr;
