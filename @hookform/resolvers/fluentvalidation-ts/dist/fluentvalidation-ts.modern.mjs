import{validateFieldsNatively as r,toNestErrors as e}from"@hookform/resolvers";function t(r,e,o=[]){for(const n in r){const s=[...o,n],a=r[n];Array.isArray(a)?a.forEach((r,o)=>{t(r,e,[...s,o])}):"object"==typeof a&&null!==a?t(a,e,s):"string"==typeof a&&(e[s.join(".")]={type:"validation",message:a})}}const o=(r,e)=>{const o={};return t(r,o),o};function n(t){return async(n,s,a)=>{const i=t.validate(n),c=0===Object.keys(i).length;return a.shouldUseNativeValidation&&r({},a),c?{values:n,errors:{}}:{values:{},errors:e(o(i),a)}}}function s(t){return async(n,s,a)=>{const i=await t.validateAsync(n),c=0===Object.keys(i).length;return a.shouldUseNativeValidation&&r({},a),c?{values:n,errors:{}}:{values:{},errors:e(o(i),a)}}}export{s as fluentAsyncValidationResolver,n as fluentValidationResolver};
//# sourceMappingURL=fluentvalidation-ts.modern.mjs.map