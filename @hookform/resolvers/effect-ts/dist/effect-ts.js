var e=require("@effect/schema/ArrayFormatter"),r=require("@effect/schema/ParseResult"),t=require("@hookform/resolvers");function n(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach(function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}}),r.default=e,r}var o=/*#__PURE__*/n(require("effect/Effect"));exports.effectTsResolver=function(n,u){return void 0===u&&(u={errors:"all",onExcessProperty:"ignore"}),function(c,a,s){return r.decodeUnknown(n,u)(c).pipe(o.catchAll(function(r){return o.flip(e.formatIssue(r))}),o.mapError(function(e){var r=e.reduce(function(e,r){return e[r.path.join(".")]={message:r.message,type:r._tag},e},{});return t.toNestErrors(r,s)}),o.tap(function(){return o.sync(function(){return s.shouldUseNativeValidation&&t.validateFieldsNatively({},s)})}),o.match({onFailure:function(e){return{errors:e,values:{}}},onSuccess:function(e){return{errors:{},values:e}}}),o.runPromise)}};
//# sourceMappingURL=effect-ts.js.map