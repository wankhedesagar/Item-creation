!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("@hookform/resolvers"),require("arktype")):"function"==typeof define&&define.amd?define(["exports","@hookform/resolvers","arktype"],o):o((e||self).hookformResolversArktype={},e.hookformResolvers,e.arktype)}(this,function(e,o,r){e.arktypeResolver=function(e,t,s){return void 0===s&&(s={}),function(t,n,i){var f,a=e(t);return a instanceof r.ArkErrors?{values:{},errors:o.toNestErrors((f=a,f.forEach(function(e){return Object.assign(e,{type:e.code})}),f.byPath),i)}:(i.shouldUseNativeValidation&&o.validateFieldsNatively({},i),{errors:{},values:s.raw?t:a})}}});
//# sourceMappingURL=arktype.umd.js.map