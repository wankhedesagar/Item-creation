import{toNestErrors as r,validateFieldsNatively as e}from"@hookform/resolvers";import{plainToClass as t}from"class-transformer";import{validateSync as o,validate as n}from"class-validator";var s=function r(e,t,o,n){return void 0===o&&(o={}),void 0===n&&(n=""),e.reduce(function(e,o){var s=n?n+"."+o.property:o.property;if(o.constraints){var i=Object.keys(o.constraints)[0];e[s]={type:i,message:o.constraints[i]};var a=e[s];t&&a&&Object.assign(a,{types:o.constraints})}return o.children&&o.children.length&&r(o.children,t,e,s),e},o)},i=function(i,a,c){return void 0===a&&(a={}),void 0===c&&(c={}),function(l,u,v){try{var d=a.validator,m=t(i,l,a.transformer);return Promise.resolve(("sync"===c.mode?o:n)(m,d)).then(function(t){return t.length?{values:{},errors:r(s(t,!v.shouldUseNativeValidation&&"all"===v.criteriaMode),v)}:(v.shouldUseNativeValidation&&e({},v),{values:c.rawValues?l:m,errors:{}})})}catch(r){return Promise.reject(r)}}};export{i as classValidatorResolver};
//# sourceMappingURL=class-validator.module.js.map