import{toNestErrors as r,validateFieldsNatively as e}from"@hookform/resolvers";var o=function r(e,o,t){return void 0===o&&(o={}),void 0===t&&(t=""),Object.keys(e).reduce(function(o,n){var a=t?t+"."+n:n,i=e[n];return"string"==typeof i?o[a]={message:i}:r(i,o,a),o},o)},t=function(t,n){return void 0===n&&(n={abortEarly:!1}),function(a,i,s){var u=t.validate(a,i,n);return u?{values:{},errors:r(o(u),s)}:(s.shouldUseNativeValidation&&e({},s),{values:a,errors:{}})}};export{t as nopeResolver};
//# sourceMappingURL=nope.module.js.map