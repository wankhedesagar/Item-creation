var e=require("@hookform/resolvers"),r=require("ajv"),a=require("ajv-errors"),s=require("react-hook-form");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=/*#__PURE__*/t(r),i=/*#__PURE__*/t(a),n=function(e,r){return e.forEach(function(e){"required"===e.keyword&&(e.instancePath+="/"+e.params.missingProperty)}),e.reduce(function(e,a){var t=a.instancePath.substring(1).replace(/\//g,".");if(e[t]||(e[t]={message:a.message,type:a.keyword}),r){var o=e[t].types,i=o&&o[a.keyword];e[t]=s.appendErrors(t,r,e,a.keyword,i?[].concat(i,a.message||""):a.message)}return e},{})};exports.ajvResolver=function(r,a,s){return void 0===s&&(s={}),function(t,u,c){try{var l=new o.default(Object.assign({},{allErrors:!0,validateSchema:!0},a));i.default(l);var d=l.compile(Object.assign({$async:s&&"async"===s.mode},r)),v=d(t);return c.shouldUseNativeValidation&&e.validateFieldsNatively({},c),Promise.resolve(v?{values:t,errors:{}}:{values:{},errors:e.toNestErrors(n(d.errors,!c.shouldUseNativeValidation&&"all"===c.criteriaMode),c)})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=ajv.js.map