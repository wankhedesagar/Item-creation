import{toNestErrors as r,validateFieldsNatively as e}from"@hookform/resolvers";const o=(r,e={},s="")=>Object.keys(r).reduce((e,t)=>{const a=s?`${s}.${t}`:t,l=r[t];return"string"==typeof l?e[a]={message:l}:o(l,e,a),e},e),s=(s,t={abortEarly:!1})=>(a,l,n)=>{const i=s.validate(a,l,t);return i?{values:{},errors:r(o(i),n)}:(n.shouldUseNativeValidation&&e({},n),{values:a,errors:{}})};export{s as nopeResolver};
//# sourceMappingURL=nope.modern.mjs.map