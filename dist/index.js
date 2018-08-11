!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.DataField=e()}(this,function(){"use strict";function t(t,e){return t.hasOwnProperty(e)?t[e]:function(t,e,r){if(!t||"object"!=typeof t)return"function"==typeof r?r():r;if(!e)return t;var n=Object.assign({},t);e=e.split(".");for(var i=0;i<e.length;i++){if(!n.hasOwnProperty(e[i]))return"function"==typeof r?r():r;if((n=n[e[i]])!==Object(n)&&i<e.length-1)return"function"==typeof r?r():r}return n}(t,e)}var e=function(t,e){void 0===t&&(t=[]),this.data=t,this.caret=0,this.selector=e};return e.prototype.exists=function(r){var n=this.data.filter(function(e){return void 0!==t(e,r)});return new e(n,this.selector)},e.prototype.has=function(r){var n=this.data.filter(function(e){var n=t(e,r);return Array.isArray(n)?n.length:n});return new e(n,this.selector)},e.prototype.take=function(t){void 0===t&&(t=1);var r=new e(this.data.slice(this.caret,this.caret+t),this.selector);return this.caret+=t,r},e.prototype.length=function(){return this.__reset(),this.data.length},e.prototype.takeRandom=function(t){void 0===t&&(t=1),"number"!=typeof t&&(t=parseInt(String(t))),isNaN(t)&&(t=1),(t=Math.floor(t))>this.data.length&&(t=this.data.length);var r=function t(e,r,n){void 0===n&&(n=[]);var i=Math.floor(Math.random()*e);return n.includes(i)||n.push(i),n.length===r?n:t(e,r,n)}(this.data.length,t),n=this.data.filter(function(t,e){return r.includes(e)});return new e(n,this.selector)},e.prototype.where=function(t){return this.selector=t,this},e.prototype.eq=function(r){var n,i=this;return this.selector?r instanceof Date?(n=this.data.filter(function(e){return new Date(t(e,i.selector)).getTime()===r.getTime()}),new e(n,this.selector)):(n=this.data.filter(function(e){return t(e,i.selector)===r}),new e(n,this.selector)):this},e.prototype.not=function(r){var n,i=this;return this.selector?r instanceof Date?(n=this.data.filter(function(e){return new Date(t(e,i.selector)).getTime()!==r.getTime()}),new e(n,this.selector)):(n=this.data.filter(function(e){return t(e,i.selector)!==r}),new e(n,this.selector)):this},e.prototype.gt=function(r){var n,i=this;return this.selector&&void 0!==r?r instanceof Date?(n=this.data.filter(function(e){return new Date(t(e,i.selector))>r}),new e(n,this.selector)):(n=this.data.filter(function(e){return t(e,i.selector)>r}),new e(n,this.selector)):this},e.prototype.lt=function(r){var n,i=this;return this.selector&&void 0!==r?r instanceof Date?(n=this.data.filter(function(e){return new Date(t(e,i.selector))<r}),new e(n,this.selector)):(n=this.data.filter(function(e){return t(e,i.selector)<r}),new e(n,this.selector)):this},e.prototype.gte=function(r){var n,i=this;return this.selector&&void 0!==r?r instanceof Date?(n=this.data.filter(function(e){return new Date(t(e,i.selector))>=r}),new e(n,this.selector)):(n=this.data.filter(function(e){return t(e,i.selector)>=r}),new e(n,this.selector)):this},e.prototype.lte=function(r){var n,i=this;return this.selector&&void 0!==r?r instanceof Date?(n=this.data.filter(function(e){return new Date(t(e,i.selector))<=r}),new e(n,this.selector)):(n=this.data.filter(function(e){return t(e,i.selector)<=r}),new e(n,this.selector)):this},e.prototype.range=function(r,n){var i,s,o,a=this;if(typeof(i=r)!=typeof(s=n)||!("object"==typeof i&&i instanceof Date&&s instanceof Date||"number"==typeof i||"string"==typeof i))throw new Error("bad arguments");return this.selector?r instanceof Date?(o=this.data.filter(function(e){var i=t(e,a.selector);return new Date(i)>=r&&new Date(i)<n}),new e(o,this.selector)):(o=this.data.filter(function(e){var i=t(e,a.selector);return i>=r&&i<n}),new e(o,this.selector)):this},e.prototype.sort=function(t){void 0===t&&(t={});var e=t.by,r=t.order;void 0===r&&(r="asc");var n=t.type,i=this.__findFirstOccurrence(e);return e&&i?("desc"!==r&&(r="asc"),n||(n=typeof i),this.selector=e,"asc"===r?this.asc(n):this.desc(n)):this},e.prototype.asc=function(r){if(this.selector&&this.data.length){var n=[];r=r||this.__getType();var i=this.selector;switch(r){case"n":case"num":case"number":n=this.data.slice().sort(function(e,r){return t(e,i)-t(r,i)});break;case"string":case"str":case"s":n=this.data.slice().sort(function(e,r){return String(t(e,i)).localeCompare(String(t(r,i)))});break;case"date":case"d":n=this.data.slice().sort(function(e,r){return Number(new Date(t(e,i)))-Number(new Date(t(r,i)))});break;default:return this}return new e(n,this.selector)}return this},e.prototype.desc=function(r){if(this.selector&&this.data.length){var n=[];r=r||this.__getType();var i=this.selector;switch(r){case"n":case"num":case"number":n=this.data.slice().sort(function(e,r){return t(r,i)-t(e,i)});break;case"string":case"str":case"s":n=this.data.slice().sort(function(e,r){return String(t(r,i)).localeCompare(String(t(e,i)))});break;case"date":case"d":n=this.data.slice().sort(function(e,r){return Number(new Date(t(r,i)))-Number(new Date(t(e,i)))});break;default:return this}return new e(n,this.selector)}return this},e.prototype.sum=function(e,r){return void 0===r&&(r=!0),this.__reset(),this.data.reduce(function(n,i){var s=t(i,e);return r?"number"==typeof s?n+s:n:isNaN(s)?n:n+Number(s)},0)},e.prototype.avg=function(e,r){void 0===r&&(r=!0),this.__reset();var n=0,i=0;return this.data.forEach(function(s){var o=t(s,e);r?"number"==typeof o&&(i++,n+=o):isNaN(o)||(i++,n+=Number(o))}),i?n/i:0},e.prototype.median=function(e,r){void 0===r&&(r=!0),this.__reset();var n=[];if(this.data.forEach(function(i){var s=t(i,e);r?"number"==typeof s&&n.push(s):isNaN(s)||n.push(Number(s))}),0===n.length)return 0;if(1===n.length)return n[0];n.sort(function(t,e){return t-e});var i=Math.floor(n.length/2);return n.length%2?n[i]:(n[i-1]+n[i])/2},e.prototype.values=function(){return this.__reset(),this.data},e.prototype.__reset=function(){this.selector=""},e.prototype.__getType=function(e){if(void 0===e&&(e=this.selector),e)for(var r=0;r<this.data.length;r++){var n=t(this.data[r],e);if(n)return typeof n}},e.prototype.__findFirstOccurrence=function(e){if(e)for(var r=0;r<this.data.length;r++){var n=t(this.data[r],e);if(n)return n}},e});
//# sourceMappingURL=index.js.map
