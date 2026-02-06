(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/portfolio/node_modules/posthog-js/dist/module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COPY_AUTOCAPTURE_EVENT",
    ()=>ee,
    "Compression",
    ()=>re,
    "DisplaySurveyType",
    ()=>Dn,
    "PostHog",
    ()=>Io,
    "SurveyEventName",
    ()=>Mn,
    "SurveyEventProperties",
    ()=>An,
    "SurveyPosition",
    ()=>In,
    "SurveyQuestionBranchingType",
    ()=>On,
    "SurveyQuestionType",
    ()=>Cn,
    "SurveySchedule",
    ()=>Fn,
    "SurveyType",
    ()=>Rn,
    "SurveyWidgetType",
    ()=>Tn,
    "default",
    ()=>Co,
    "posthog",
    ()=>Co,
    "severityLevels",
    ()=>se
]);
var t = "undefined" != typeof window ? window : void 0, i = "undefined" != typeof globalThis ? globalThis : t, e = Array.prototype, r = e.forEach, s = e.indexOf, n = null == i ? void 0 : i.navigator, o = null == i ? void 0 : i.document, a = null == i ? void 0 : i.location, l = null == i ? void 0 : i.fetch, u = null != i && i.XMLHttpRequest && "withCredentials" in new i.XMLHttpRequest ? i.XMLHttpRequest : void 0, h = null == i ? void 0 : i.AbortController, d = null == n ? void 0 : n.userAgent, v = null != t ? t : {}, c = {
    DEBUG: !1,
    LIB_VERSION: "1.292.0"
};
function f(t, i, e, r, s, n, o) {
    try {
        var a = t[n](o), l = a.value;
    } catch (t) {
        return void e(t);
    }
    a.done ? i(l) : Promise.resolve(l).then(r, s);
}
function p(t) {
    return function() {
        var i = this, e = arguments;
        return new Promise(function(r, s) {
            var n = t.apply(i, e);
            function o(t) {
                f(n, r, s, o, a, "next", t);
            }
            function a(t) {
                f(n, r, s, o, a, "throw", t);
            }
            o(void 0);
        });
    };
}
function g() {
    return g = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", g.apply(null, arguments);
}
function _(t, i) {
    if (null == t) return {};
    var e = {};
    for(var r in t)if (({}).hasOwnProperty.call(t, r)) {
        if (-1 !== i.indexOf(r)) continue;
        e[r] = t[r];
    }
    return e;
}
var m = [
    "amazonbot",
    "amazonproductbot",
    "app.hypefactors.com",
    "applebot",
    "archive.org_bot",
    "awariobot",
    "backlinksextendedbot",
    "baiduspider",
    "bingbot",
    "bingpreview",
    "chrome-lighthouse",
    "dataforseobot",
    "deepscan",
    "duckduckbot",
    "facebookexternal",
    "facebookcatalog",
    "http://yandex.com/bots",
    "hubspot",
    "ia_archiver",
    "leikibot",
    "linkedinbot",
    "meta-externalagent",
    "mj12bot",
    "msnbot",
    "nessus",
    "petalbot",
    "pinterest",
    "prerender",
    "rogerbot",
    "screaming frog",
    "sebot-wa",
    "sitebulb",
    "slackbot",
    "slurp",
    "trendictionbot",
    "turnitin",
    "twitterbot",
    "vercel-screenshot",
    "vercelbot",
    "yahoo! slurp",
    "yandexbot",
    "zoombot",
    "bot.htm",
    "bot.php",
    "(bot;",
    "bot/",
    "crawler",
    "ahrefsbot",
    "ahrefssiteaudit",
    "semrushbot",
    "siteauditbot",
    "splitsignalbot",
    "gptbot",
    "oai-searchbot",
    "chatgpt-user",
    "perplexitybot",
    "better uptime bot",
    "sentryuptimebot",
    "uptimerobot",
    "headlesschrome",
    "cypress",
    "google-hoteladsverifier",
    "adsbot-google",
    "apis-google",
    "duplexweb-google",
    "feedfetcher-google",
    "google favicon",
    "google web preview",
    "google-read-aloud",
    "googlebot",
    "googleother",
    "google-cloudvertexbot",
    "googleweblight",
    "mediapartners-google",
    "storebot-google",
    "google-inspectiontool",
    "bytespider"
], y = function(t, i) {
    if (void 0 === i && (i = []), !t) return !1;
    var e = t.toLowerCase();
    return m.concat(i).some((t)=>{
        var i = t.toLowerCase();
        return -1 !== e.indexOf(i);
    });
}, b = [
    "$snapshot",
    "$pageview",
    "$pageleave",
    "$set",
    "survey dismissed",
    "survey sent",
    "survey shown",
    "$identify",
    "$groupidentify",
    "$create_alias",
    "$$client_ingestion_warning",
    "$web_experiment_applied",
    "$feature_enrollment_update",
    "$feature_flag_called"
];
function w(t, i) {
    return -1 !== t.indexOf(i);
}
var x = function(t) {
    return t.trim();
}, S = function(t) {
    return t.replace(/^\$/, "");
};
var E = Array.isArray, k = Object.prototype, P = k.hasOwnProperty, T = k.toString, I = E || function(t) {
    return "[object Array]" === T.call(t);
}, R = (t)=>"function" == typeof t, C = (t)=>t === Object(t) && !I(t), O = (t)=>{
    if (C(t)) {
        for(var i in t)if (P.call(t, i)) return !1;
        return !0;
    }
    return !1;
}, F = (t)=>void 0 === t, M = (t)=>"[object String]" == T.call(t), A = (t)=>M(t) && 0 === t.trim().length, D = (t)=>null === t, j = (t)=>F(t) || D(t), L = (t)=>"[object Number]" == T.call(t), N = (t)=>"[object Boolean]" === T.call(t), U = (t)=>t instanceof FormData, z = (t)=>w(b, t);
function H(t) {
    return null === t || "object" != typeof t;
}
function B(t, i) {
    return Object.prototype.toString.call(t) === "[object " + i + "]";
}
function q(t) {
    return !F(Event) && function(t, i) {
        try {
            return t instanceof i;
        } catch (t) {
            return !1;
        }
    }(t, Event);
}
var W = [
    !0,
    "true",
    1,
    "1",
    "yes"
], G = (t)=>w(W, t), V = [
    !1,
    "false",
    0,
    "0",
    "no"
];
function J(t, i, e, r, s) {
    return i > e && (r.warn("min cannot be greater than max."), i = e), L(t) ? t > e ? (r.warn(" cannot be  greater than max: " + e + ". Using max value instead."), e) : t < i ? (r.warn(" cannot be less than min: " + i + ". Using min value instead."), i) : t : (r.warn(" must be a number. using max or fallback. max: " + e + ", fallback: " + s), J(s || e, i, e, r));
}
class K {
    S(t, i) {
        var e = i - t.lastAccess, r = Math.floor(e / this.$);
        if (r > 0) {
            var s = r * this.m;
            t.tokens = Math.min(t.tokens + s, this.o), t.lastAccess = t.lastAccess + r * this.$;
        }
    }
    consumeRateLimit(t) {
        var i, e = Date.now(), r = String(t), s = this.t[r];
        return s ? this.S(s, e) : (s = {
            tokens: this.o,
            lastAccess: e
        }, this.t[r] = s), 0 === s.tokens || (s.tokens--, 0 === s.tokens && (null == (i = this.i) || i.call(this, t)), 0 === s.tokens);
    }
    stop() {
        this.t = {};
    }
    constructor(t){
        this.t = {}, this.i = t.i, this.o = J(t.bucketSize, 0, 100, t.h), this.m = J(t.refillRate, 0, this.o, t.h), this.$ = J(t.refillInterval, 0, 864e5, t.h);
    }
}
var Y, X, Q, Z = (t)=>t instanceof Error;
function tt(t) {
    var i = globalThis._posthogChunkIds;
    if (i) {
        var e = Object.keys(i);
        return Q && e.length === X || (X = e.length, Q = e.reduce((e, r)=>{
            Y || (Y = {});
            var s = Y[r];
            if (s) e[s[0]] = s[1];
            else for(var n = t(r), o = n.length - 1; o >= 0; o--){
                var a = n[o], l = null == a ? void 0 : a.filename, u = i[r];
                if (l && u) {
                    e[l] = u, Y[r] = [
                        l,
                        u
                    ];
                    break;
                }
            }
            return e;
        }, {})), Q;
    }
}
var it = "?";
function et(t, i, e, r) {
    var s = {
        platform: "web:javascript",
        filename: t,
        function: "<anonymous>" === i ? it : i,
        in_app: !0
    };
    return F(e) || (s.lineno = e), F(r) || (s.colno = r), s;
}
var rt = (t, i)=>{
    var e = -1 !== t.indexOf("safari-extension"), r = -1 !== t.indexOf("safari-web-extension");
    return e || r ? [
        -1 !== t.indexOf("@") ? t.split("@")[0] : it,
        e ? "safari-extension:" + i : "safari-web-extension:" + i
    ] : [
        t,
        i
    ];
}, st = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, nt = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, ot = /\((\S*)(?::(\d+))(?::(\d+))\)/, at = (t)=>{
    var i = st.exec(t);
    if (i) {
        var [, e, r, s] = i;
        return et(e, it, +r, +s);
    }
    var n = nt.exec(t);
    if (n) {
        if (n[2] && 0 === n[2].indexOf("eval")) {
            var o = ot.exec(n[2]);
            o && (n[2] = o[1], n[3] = o[2], n[4] = o[3]);
        }
        var [a, l] = rt(n[1] || it, n[2]);
        return et(l, a, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
    }
}, lt = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, ut = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, ht = (t)=>{
    var i = lt.exec(t);
    if (i) {
        if (i[3] && i[3].indexOf(" > eval") > -1) {
            var e = ut.exec(i[3]);
            e && (i[1] = i[1] || "eval", i[3] = e[1], i[4] = e[2], i[5] = "");
        }
        var r = i[3], s = i[1] || it;
        return [s, r] = rt(s, r), et(r, s, i[4] ? +i[4] : void 0, i[5] ? +i[5] : void 0);
    }
}, dt = /\(error: (.*)\)/, vt = 50;
function ct() {
    for(var t = arguments.length, i = new Array(t), e = 0; e < t; e++)i[e] = arguments[e];
    return function(t, e) {
        void 0 === e && (e = 0);
        for(var r = [], s = t.split("\n"), n = e; n < s.length; n++){
            var o = s[n];
            if (!(o.length > 1024)) {
                var a = dt.test(o) ? o.replace(dt, "$1") : o;
                if (!a.match(/\S*Error: /)) {
                    for (var l of i){
                        var u = l(a);
                        if (u) {
                            r.push(u);
                            break;
                        }
                    }
                    if (r.length >= vt) break;
                }
            }
        }
        return function(t) {
            if (!t.length) return [];
            var i = Array.from(t);
            return i.reverse(), i.slice(0, vt).map((t)=>{
                return g({}, t, {
                    filename: t.filename || (e = i, e[e.length - 1] || {}).filename,
                    function: t.function || it
                });
                //TURBOPACK unreachable
                ;
                var e;
            });
        }(r);
    };
}
class ft {
    buildFromUnknown(t, i) {
        void 0 === i && (i = {});
        var e = i && i.mechanism || {
            handled: !0,
            type: "generic"
        }, r = this.buildCoercingContext(e, i, 0).apply(t), s = this.buildParsingContext(), n = this.parseStacktrace(r, s);
        return {
            $exception_list: this.convertToExceptionList(n, e),
            $exception_level: "error"
        };
    }
    modifyFrames(t) {
        var i = this;
        return p(function*() {
            for (var e of t)e.stacktrace && e.stacktrace.frames && I(e.stacktrace.frames) && (e.stacktrace.frames = yield i.applyModifiers(e.stacktrace.frames));
            return t;
        })();
    }
    coerceFallback(t) {
        var i;
        return {
            type: "Error",
            value: "Unknown error",
            stack: null == (i = t.syntheticException) ? void 0 : i.stack,
            synthetic: !0
        };
    }
    parseStacktrace(t, i) {
        var e, r;
        return null != t.cause && (e = this.parseStacktrace(t.cause, i)), "" != t.stack && null != t.stack && (r = this.applyChunkIds(this.stackParser(t.stack, t.synthetic ? 1 : 0), i.chunkIdMap)), g({}, t, {
            cause: e,
            stack: r
        });
    }
    applyChunkIds(t, i) {
        return t.map((t)=>(t.filename && i && (t.chunk_id = i[t.filename]), t));
    }
    applyCoercers(t, i) {
        for (var e of this.coercers)if (e.match(t)) return e.coerce(t, i);
        return this.coerceFallback(i);
    }
    applyModifiers(t) {
        var i = this;
        return p(function*() {
            var e = t;
            for (var r of i.modifiers)e = yield r(e);
            return e;
        })();
    }
    convertToExceptionList(t, i) {
        var e, r, s, n = {
            type: t.type,
            value: t.value,
            mechanism: {
                type: null !== (e = i.type) && void 0 !== e ? e : "generic",
                handled: null === (r = i.handled) || void 0 === r || r,
                synthetic: null !== (s = t.synthetic) && void 0 !== s && s
            }
        };
        t.stack && (n.stacktrace = {
            type: "raw",
            frames: t.stack
        });
        var o = [
            n
        ];
        return null != t.cause && o.push(...this.convertToExceptionList(t.cause, g({}, i, {
            handled: !0
        }))), o;
    }
    buildParsingContext() {
        return {
            chunkIdMap: tt(this.stackParser)
        };
    }
    buildCoercingContext(t, i, e) {
        void 0 === e && (e = 0);
        var r = (e, r)=>{
            if (r <= 4) {
                var s = this.buildCoercingContext(t, i, r);
                return this.applyCoercers(e, s);
            }
        };
        return g({}, i, {
            syntheticException: 0 == e ? i.syntheticException : void 0,
            mechanism: t,
            apply: (t)=>r(t, e),
            next: (t)=>r(t, e + 1)
        });
    }
    constructor(t, i, e){
        void 0 === t && (t = []), void 0 === i && (i = []), void 0 === e && (e = []), this.coercers = t, this.modifiers = e, this.stackParser = ct(...i);
    }
}
class pt {
    match(t) {
        return this.isDOMException(t) || this.isDOMError(t);
    }
    coerce(t, i) {
        var e = M(t.stack);
        return {
            type: this.getType(t),
            value: this.getValue(t),
            stack: e ? t.stack : void 0,
            cause: t.cause ? i.next(t.cause) : void 0,
            synthetic: !1
        };
    }
    getType(t) {
        return this.isDOMError(t) ? "DOMError" : "DOMException";
    }
    getValue(t) {
        var i = t.name || (this.isDOMError(t) ? "DOMError" : "DOMException");
        return t.message ? i + ": " + t.message : i;
    }
    isDOMException(t) {
        return B(t, "DOMException");
    }
    isDOMError(t) {
        return B(t, "DOMError");
    }
}
class gt {
    match(t) {
        return ((t)=>t instanceof Error)(t);
    }
    coerce(t, i) {
        return {
            type: this.getType(t),
            value: this.getMessage(t, i),
            stack: this.getStack(t),
            cause: t.cause ? i.next(t.cause) : void 0,
            synthetic: !1
        };
    }
    getType(t) {
        return t.name || t.constructor.name;
    }
    getMessage(t, i) {
        var e = t.message;
        return e.error && "string" == typeof e.error.message ? String(e.error.message) : String(e);
    }
    getStack(t) {
        return t.stacktrace || t.stack || void 0;
    }
}
class _t {
    match(t) {
        return B(t, "ErrorEvent") && null != t.error;
    }
    coerce(t, i) {
        var e, r = i.apply(t.error);
        return r || {
            type: "ErrorEvent",
            value: t.message,
            stack: null == (e = i.syntheticException) ? void 0 : e.stack,
            synthetic: !0
        };
    }
    constructor(){}
}
var mt = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
class yt {
    match(t) {
        return "string" == typeof t;
    }
    coerce(t, i) {
        var e, [r, s] = this.getInfos(t);
        return {
            type: null != r ? r : "Error",
            value: null != s ? s : t,
            stack: null == (e = i.syntheticException) ? void 0 : e.stack,
            synthetic: !0
        };
    }
    getInfos(t) {
        var i = "Error", e = t, r = t.match(mt);
        return r && (i = r[1], e = r[2]), [
            i,
            e
        ];
    }
}
var bt = [
    "fatal",
    "error",
    "warning",
    "log",
    "info",
    "debug"
];
function wt(t, i) {
    void 0 === i && (i = 40);
    var e = Object.keys(t);
    if (e.sort(), !e.length) return "[object has no keys]";
    for(var r = e.length; r > 0; r--){
        var s = e.slice(0, r).join(", ");
        if (!(s.length > i)) return r === e.length || s.length <= i ? s : s.slice(0, i) + "...";
    }
    return "";
}
class xt {
    match(t) {
        return "object" == typeof t && null !== t;
    }
    coerce(t, i) {
        var e, r = this.getErrorPropertyFromObject(t);
        return r ? i.apply(r) : {
            type: this.getType(t),
            value: this.getValue(t),
            stack: null == (e = i.syntheticException) ? void 0 : e.stack,
            level: this.isSeverityLevel(t.level) ? t.level : "error",
            synthetic: !0
        };
    }
    getType(t) {
        return q(t) ? t.constructor.name : "Error";
    }
    getValue(t) {
        if ("name" in t && "string" == typeof t.name) {
            var i = "'" + t.name + "' captured as exception";
            return "message" in t && "string" == typeof t.message && (i += " with message: '" + t.message + "'"), i;
        }
        if ("message" in t && "string" == typeof t.message) return t.message;
        var e = this.getObjectClassName(t);
        return (e && "Object" !== e ? "'" + e + "'" : "Object") + " captured as exception with keys: " + wt(t);
    }
    isSeverityLevel(t) {
        return M(t) && !A(t) && bt.indexOf(t) >= 0;
    }
    getErrorPropertyFromObject(t) {
        for(var i in t)if (Object.prototype.hasOwnProperty.call(t, i)) {
            var e = t[i];
            if (Z(e)) return e;
        }
    }
    getObjectClassName(t) {
        try {
            var i = Object.getPrototypeOf(t);
            return i ? i.constructor.name : void 0;
        } catch (t) {
            return;
        }
    }
}
class $t {
    match(t) {
        return q(t);
    }
    coerce(t, i) {
        var e, r = t.constructor.name;
        return {
            type: r,
            value: r + " captured as exception with keys: " + wt(t),
            stack: null == (e = i.syntheticException) ? void 0 : e.stack,
            synthetic: !0
        };
    }
}
class St {
    match(t) {
        return H(t);
    }
    coerce(t, i) {
        var e;
        return {
            type: "Error",
            value: "Primitive value captured as exception: " + String(t),
            stack: null == (e = i.syntheticException) ? void 0 : e.stack,
            synthetic: !0
        };
    }
}
class Et {
    match(t) {
        return B(t, "PromiseRejectionEvent");
    }
    coerce(t, i) {
        var e, r = this.getUnhandledRejectionReason(t);
        return H(r) ? {
            type: "UnhandledRejection",
            value: "Non-Error promise rejection captured with value: " + String(r),
            stack: null == (e = i.syntheticException) ? void 0 : e.stack,
            synthetic: !0
        } : i.apply(r);
    }
    getUnhandledRejectionReason(t) {
        if (H(t)) return t;
        try {
            if ("reason" in t) return t.reason;
            if ("detail" in t && "reason" in t.detail) return t.detail.reason;
        } catch (t) {}
        return t;
    }
}
var kt = (i)=>{
    var e = {
        k: function(e) {
            if (t && (c.DEBUG || v.POSTHOG_DEBUG) && !F(t.console) && t.console) {
                for(var r = ("__rrweb_original__" in t.console[e]) ? t.console[e].__rrweb_original__ : t.console[e], s = arguments.length, n = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++)n[o - 1] = arguments[o];
                r(i, ...n);
            }
        },
        info: function() {
            for(var t = arguments.length, i = new Array(t), r = 0; r < t; r++)i[r] = arguments[r];
            e.k("log", ...i);
        },
        warn: function() {
            for(var t = arguments.length, i = new Array(t), r = 0; r < t; r++)i[r] = arguments[r];
            e.k("warn", ...i);
        },
        error: function() {
            for(var t = arguments.length, i = new Array(t), r = 0; r < t; r++)i[r] = arguments[r];
            e.k("error", ...i);
        },
        critical: function() {
            for(var t = arguments.length, e = new Array(t), r = 0; r < t; r++)e[r] = arguments[r];
            console.error(i, ...e);
        },
        uninitializedWarning: (t)=>{
            e.error("You must initialize PostHog before calling " + t);
        },
        createLogger: (t)=>kt(i + " " + t)
    };
    return e;
}, Pt = kt("[PostHog.js]"), Tt = Pt.createLogger, It = Tt("[ExternalScriptsLoader]"), Rt = (t, i, e)=>{
    if (t.config.disable_external_dependency_loading) return It.warn(i + " was requested but loading of external scripts is disabled."), e("Loading of external scripts is disabled");
    var r = null == o ? void 0 : o.querySelectorAll("script");
    if (r) {
        for(var s, n = function() {
            if (r[a].src === i) {
                var t = r[a];
                return t.__posthog_loading_callback_fired ? {
                    v: e()
                } : (t.addEventListener("load", (i)=>{
                    t.__posthog_loading_callback_fired = !0, e(void 0, i);
                }), t.onerror = (t)=>e(t), {
                    v: void 0
                });
            }
        }, a = 0; a < r.length; a++)if (s = n()) return s.v;
    }
    var l = ()=>{
        if (!o) return e("document not found");
        var r = o.createElement("script");
        if (r.type = "text/javascript", r.crossOrigin = "anonymous", r.src = i, r.onload = (t)=>{
            r.__posthog_loading_callback_fired = !0, e(void 0, t);
        }, r.onerror = (t)=>e(t), t.config.prepare_external_dependency_script && (r = t.config.prepare_external_dependency_script(r)), !r) return e("prepare_external_dependency_script returned null");
        var s, n = o.querySelectorAll("body > script");
        n.length > 0 ? null == (s = n[0].parentNode) || s.insertBefore(r, n[0]) : o.body.appendChild(r);
    };
    null != o && o.body ? l() : null == o || o.addEventListener("DOMContentLoaded", l);
};
v.__PosthogExtensions__ = v.__PosthogExtensions__ || {}, v.__PosthogExtensions__.loadExternalDependency = (t, i, e)=>{
    var r = "/static/" + i + ".js?v=" + t.version;
    if ("remote-config" === i && (r = "/array/" + t.config.token + "/config.js"), "toolbar" === i) {
        var s = 3e5;
        r = r + "&t=" + Math.floor(Date.now() / s) * s;
    }
    var n = t.requestRouter.endpointFor("assets", r);
    Rt(t, n, e);
}, v.__PosthogExtensions__.loadSiteApp = (t, i, e)=>{
    var r = t.requestRouter.endpointFor("api", i);
    Rt(t, r, e);
};
var Ct = {};
function Ot(t, i, e) {
    if (I(t)) {
        if (r && t.forEach === r) t.forEach(i, e);
        else if ("length" in t && t.length === +t.length) {
            for(var s = 0, n = t.length; s < n; s++)if (s in t && i.call(e, t[s], s) === Ct) return;
        }
    }
}
function Ft(t, i, e) {
    if (!j(t)) {
        if (I(t)) return Ot(t, i, e);
        if (U(t)) {
            for (var r of t.entries())if (i.call(e, r[1], r[0]) === Ct) return;
        } else for(var s in t)if (P.call(t, s) && i.call(e, t[s], s) === Ct) return;
    }
}
var Mt = function(t) {
    for(var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)e[r - 1] = arguments[r];
    return Ot(e, function(i) {
        for(var e in i)void 0 !== i[e] && (t[e] = i[e]);
    }), t;
}, At = function(t) {
    for(var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)e[r - 1] = arguments[r];
    return Ot(e, function(i) {
        Ot(i, function(i) {
            t.push(i);
        });
    }), t;
};
function Dt(t) {
    for(var i = Object.keys(t), e = i.length, r = new Array(e); e--;)r[e] = [
        i[e],
        t[i[e]]
    ];
    return r;
}
var jt = function(t) {
    try {
        return t();
    } catch (t) {
        return;
    }
}, Lt = function(t) {
    return function() {
        try {
            for(var i = arguments.length, e = new Array(i), r = 0; r < i; r++)e[r] = arguments[r];
            return t.apply(this, e);
        } catch (t) {
            Pt.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), Pt.critical(t);
        }
    };
}, Nt = function(t) {
    var i = {};
    return Ft(t, function(t, e) {
        (M(t) && t.length > 0 || L(t)) && (i[e] = t);
    }), i;
};
function Ut(t, i) {
    return e = t, r = (t)=>M(t) && !D(i) ? t.slice(0, i) : t, s = new Set, function t(i, e) {
        return i !== Object(i) ? r ? r(i, e) : i : s.has(i) ? void 0 : (s.add(i), I(i) ? (n = [], Ot(i, (i)=>{
            n.push(t(i));
        })) : (n = {}, Ft(i, (i, e)=>{
            s.has(i) || (n[e] = t(i, e));
        })), n);
        //TURBOPACK unreachable
        ;
        var n;
    }(e);
    //TURBOPACK unreachable
    ;
    var e, r, s;
}
var zt = [
    "herokuapp.com",
    "vercel.app",
    "netlify.app"
];
function Ht(t) {
    var i = null == t ? void 0 : t.hostname;
    if (!M(i)) return !1;
    var e = i.split(".").slice(-2).join(".");
    for (var r of zt)if (e === r) return !1;
    return !0;
}
function Bt(t, i) {
    for(var e = 0; e < t.length; e++)if (i(t[e])) return t[e];
}
function qt(t, i, e, r) {
    var { capture: s = !1, passive: n = !0 } = null != r ? r : {};
    null == t || t.addEventListener(i, e, {
        capture: s,
        passive: n
    });
}
var Wt = "$people_distinct_id", Gt = "__alias", Vt = "__timers", Jt = "$autocapture_disabled_server_side", Kt = "$heatmaps_enabled_server_side", Yt = "$exception_capture_enabled_server_side", Xt = "$error_tracking_suppression_rules", Qt = "$error_tracking_capture_extension_exceptions", Zt = "$web_vitals_enabled_server_side", ti = "$dead_clicks_enabled_server_side", ii = "$web_vitals_allowed_metrics", ei = "$session_recording_remote_config", ri = "$sesid", si = "$session_is_sampled", ni = "$enabled_feature_flags", oi = "$early_access_features", ai = "$feature_flag_details", li = "$stored_person_properties", ui = "$stored_group_properties", hi = "$surveys", di = "$surveys_activated", vi = "$flag_call_reported", ci = "$user_state", fi = "$client_session_props", pi = "$capture_rate_limit", gi = "$initial_campaign_params", _i = "$initial_referrer_info", mi = "$initial_person_info", yi = "$epp", bi = "__POSTHOG_TOOLBAR__", wi = "$posthog_cookieless", xi = [
    Wt,
    Gt,
    "__cmpns",
    Vt,
    "$session_recording_enabled_server_side",
    Kt,
    ri,
    ni,
    Xt,
    ci,
    oi,
    ai,
    ui,
    li,
    hi,
    vi,
    fi,
    pi,
    gi,
    _i,
    yi,
    mi
];
function $i(t) {
    return t instanceof Element && (t.id === bi || !(null == t.closest || !t.closest(".toolbar-global-fade-container")));
}
function Si(t) {
    return !!t && 1 === t.nodeType;
}
function Ei(t, i) {
    return !!t && !!t.tagName && t.tagName.toLowerCase() === i.toLowerCase();
}
function ki(t) {
    return !!t && 3 === t.nodeType;
}
function Pi(t) {
    return !!t && 11 === t.nodeType;
}
function Ti(t) {
    return t ? x(t).split(/\s+/) : [];
}
function Ii(i) {
    var e = null == t ? void 0 : t.location.href;
    return !!(e && i && i.some((t)=>e.match(t)));
}
function Ri(t) {
    var i = "";
    switch(typeof t.className){
        case "string":
            i = t.className;
            break;
        case "object":
            i = (t.className && "baseVal" in t.className ? t.className.baseVal : null) || t.getAttribute("class") || "";
            break;
        default:
            i = "";
    }
    return Ti(i);
}
function Ci(t) {
    return j(t) ? null : x(t).split(/(\s+)/).filter((t)=>Ki(t)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}
function Oi(t) {
    var i = "";
    return zi(t) && !Hi(t) && t.childNodes && t.childNodes.length && Ft(t.childNodes, function(t) {
        var e;
        ki(t) && t.textContent && (i += null !== (e = Ci(t.textContent)) && void 0 !== e ? e : "");
    }), x(i);
}
function Fi(t) {
    return F(t.target) ? t.srcElement || null : null != (i = t.target) && i.shadowRoot ? t.composedPath()[0] || null : t.target || null;
    //TURBOPACK unreachable
    ;
    var i;
}
var Mi = [
    "a",
    "button",
    "form",
    "input",
    "select",
    "textarea",
    "label"
];
function Ai(t, i) {
    if (F(i)) return !0;
    var e, r = function(t) {
        if (i.some((i)=>t.matches(i))) return {
            v: !0
        };
    };
    for (var s of t)if (e = r(s)) return e.v;
    return !1;
}
function Di(t) {
    var i = t.parentNode;
    return !(!i || !Si(i)) && i;
}
var ji = [
    ".ph-no-rageclick",
    ".ph-no-capture"
];
var Li = (t)=>!t || Ei(t, "html") || !Si(t), Ni = (i, e)=>{
    if (!t || Li(i)) return {
        parentIsUsefulElement: !1,
        targetElementList: []
    };
    for(var r = !1, s = [
        i
    ], n = i; n.parentNode && !Ei(n, "body");)if (Pi(n.parentNode)) s.push(n.parentNode.host), n = n.parentNode.host;
    else {
        var o = Di(n);
        if (!o) break;
        if (e || Mi.indexOf(o.tagName.toLowerCase()) > -1) r = !0;
        else {
            var a = t.getComputedStyle(o);
            a && "pointer" === a.getPropertyValue("cursor") && (r = !0);
        }
        s.push(o), n = o;
    }
    return {
        parentIsUsefulElement: r,
        targetElementList: s
    };
};
function Ui(i, e, r, s, n) {
    var o, a, l, u;
    if (void 0 === r && (r = void 0), !t || Li(i)) return !1;
    if (null != (o = r) && o.url_allowlist && !Ii(r.url_allowlist)) return !1;
    if (null != (a = r) && a.url_ignorelist && Ii(r.url_ignorelist)) return !1;
    if (null != (l = r) && l.dom_event_allowlist) {
        var h = r.dom_event_allowlist;
        if (h && !h.some((t)=>e.type === t)) return !1;
    }
    var { parentIsUsefulElement: d, targetElementList: v } = Ni(i, s);
    if (!function(t, i) {
        var e = null == i ? void 0 : i.element_allowlist;
        if (F(e)) return !0;
        var r, s = function(t) {
            if (e.some((i)=>t.tagName.toLowerCase() === i)) return {
                v: !0
            };
        };
        for (var n of t)if (r = s(n)) return r.v;
        return !1;
    }(v, r)) return !1;
    if (!Ai(v, null == (u = r) ? void 0 : u.css_selector_allowlist)) return !1;
    var c = t.getComputedStyle(i);
    if (c && "pointer" === c.getPropertyValue("cursor") && "click" === e.type) return !0;
    var f = i.tagName.toLowerCase();
    switch(f){
        case "html":
            return !1;
        case "form":
            return (n || [
                "submit"
            ]).indexOf(e.type) >= 0;
        case "input":
        case "select":
        case "textarea":
            return (n || [
                "change",
                "click"
            ]).indexOf(e.type) >= 0;
        default:
            return d ? (n || [
                "click"
            ]).indexOf(e.type) >= 0 : (n || [
                "click"
            ]).indexOf(e.type) >= 0 && (Mi.indexOf(f) > -1 || "true" === i.getAttribute("contenteditable"));
    }
}
function zi(t) {
    for(var i = t; i.parentNode && !Ei(i, "body"); i = i.parentNode){
        var e = Ri(i);
        if (w(e, "ph-sensitive") || w(e, "ph-no-capture")) return !1;
    }
    if (w(Ri(t), "ph-include")) return !0;
    var r = t.type || "";
    if (M(r)) switch(r.toLowerCase()){
        case "hidden":
        case "password":
            return !1;
    }
    var s = t.name || t.id || "";
    if (M(s)) {
        if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(s.replace(/[^a-zA-Z0-9]/g, ""))) return !1;
    }
    return !0;
}
function Hi(t) {
    return !!(Ei(t, "input") && ![
        "button",
        "checkbox",
        "submit",
        "reset"
    ].includes(t.type) || Ei(t, "select") || Ei(t, "textarea") || "true" === t.getAttribute("contenteditable"));
}
var Bi = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})", qi = new RegExp("^(?:" + Bi + ")$"), Wi = new RegExp(Bi), Gi = "\\d{3}-?\\d{2}-?\\d{4}", Vi = new RegExp("^(" + Gi + ")$"), Ji = new RegExp("(" + Gi + ")");
function Ki(t, i) {
    if (void 0 === i && (i = !0), j(t)) return !1;
    if (M(t)) {
        if (t = x(t), (i ? qi : Wi).test((t || "").replace(/[- ]/g, ""))) return !1;
        if ((i ? Vi : Ji).test(t)) return !1;
    }
    return !0;
}
function Yi(t) {
    var i = Oi(t);
    return Ki(i = (i + " " + Xi(t)).trim()) ? i : "";
}
function Xi(t) {
    var i = "";
    return t && t.childNodes && t.childNodes.length && Ft(t.childNodes, function(t) {
        var e;
        if (t && "span" === (null == (e = t.tagName) ? void 0 : e.toLowerCase())) try {
            var r = Oi(t);
            i = (i + " " + r).trim(), t.childNodes && t.childNodes.length && (i = (i + " " + Xi(t)).trim());
        } catch (t) {
            Pt.error("[AutoCapture]", t);
        }
    }), i;
}
function Qi(t) {
    return function(t) {
        var i = t.map((t)=>{
            var i, e, r = "";
            if (t.tag_name && (r += t.tag_name), t.attr_class) for (var s of (t.attr_class.sort(), t.attr_class))r += "." + s.replace(/"/g, "");
            var n = g({}, t.text ? {
                text: t.text
            } : {}, {
                "nth-child": null !== (i = t.nth_child) && void 0 !== i ? i : 0,
                "nth-of-type": null !== (e = t.nth_of_type) && void 0 !== e ? e : 0
            }, t.href ? {
                href: t.href
            } : {}, t.attr_id ? {
                attr_id: t.attr_id
            } : {}, t.attributes), o = {};
            return Dt(n).sort((t, i)=>{
                var [e] = t, [r] = i;
                return e.localeCompare(r);
            }).forEach((t)=>{
                var [i, e] = t;
                return o[Zi(i.toString())] = Zi(e.toString());
            }), r += ":", r += Dt(o).map((t)=>{
                var [i, e] = t;
                return i + '="' + e + '"';
            }).join("");
        });
        return i.join(";");
    }(function(t) {
        return t.map((t)=>{
            var i, e, r = {
                text: null == (i = t.$el_text) ? void 0 : i.slice(0, 400),
                tag_name: t.tag_name,
                href: null == (e = t.attr__href) ? void 0 : e.slice(0, 2048),
                attr_class: te(t),
                attr_id: t.attr__id,
                nth_child: t.nth_child,
                nth_of_type: t.nth_of_type,
                attributes: {}
            };
            return Dt(t).filter((t)=>{
                var [i] = t;
                return 0 === i.indexOf("attr__");
            }).forEach((t)=>{
                var [i, e] = t;
                return r.attributes[i] = e;
            }), r;
        });
    }(t));
}
function Zi(t) {
    return t.replace(/"|\\"/g, '\\"');
}
function te(t) {
    var i = t.attr__class;
    return i ? I(i) ? i : Ti(i) : void 0;
}
class ie {
    isRageClick(t, i, e) {
        if (this.disabled) return !1;
        var r = this.clicks[this.clicks.length - 1];
        if (r && Math.abs(t - r.x) + Math.abs(i - r.y) < this.thresholdPx && e - r.timestamp < this.timeoutMs) {
            if (this.clicks.push({
                x: t,
                y: i,
                timestamp: e
            }), this.clicks.length === this.clickCount) return !0;
        } else this.clicks = [
            {
                x: t,
                y: i,
                timestamp: e
            }
        ];
        return !1;
    }
    constructor(t){
        this.disabled = !1 === t;
        var i = C(t) ? t : {};
        this.thresholdPx = i.threshold_px || 30, this.timeoutMs = i.timeout_ms || 1e3, this.clickCount = i.click_count || 3, this.clicks = [];
    }
}
var ee = "$copy_autocapture", re = function(t) {
    return t.GZipJS = "gzip-js", t.Base64 = "base64", t;
}({}), se = [
    "fatal",
    "error",
    "warning",
    "log",
    "info",
    "debug"
], ne = (t)=>{
    var i = null == o ? void 0 : o.createElement("a");
    return F(i) ? null : (i.href = t, i);
}, oe = function(t, i) {
    var e, r;
    void 0 === i && (i = "&");
    var s = [];
    return Ft(t, function(t, i) {
        F(t) || F(i) || "undefined" === i || (e = encodeURIComponent(((t)=>t instanceof File)(t) ? t.name : t.toString()), r = encodeURIComponent(i), s[s.length] = r + "=" + e);
    }), s.join(i);
}, ae = function(t, i) {
    for(var e, r = ((t.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), s = 0; s < r.length; s++){
        var n = r[s].split("=");
        if (n[0] === i) {
            e = n;
            break;
        }
    }
    if (!I(e) || e.length < 2) return "";
    var o = e[1];
    try {
        o = decodeURIComponent(o);
    } catch (t) {
        Pt.error("Skipping decoding for malformed query param: " + o);
    }
    return o.replace(/\+/g, " ");
}, le = function(t, i, e) {
    if (!t || !i || !i.length) return t;
    for(var r = t.split("#"), s = r[0] || "", n = r[1], o = s.split("?"), a = o[1], l = o[0], u = (a || "").split("&"), h = [], d = 0; d < u.length; d++){
        var v = u[d].split("=");
        I(v) && (i.includes(v[0]) ? h.push(v[0] + "=" + e) : h.push(u[d]));
    }
    var c = l;
    return null != a && (c += "?" + h.join("&")), null != n && (c += "#" + n), c;
}, ue = function(t, i) {
    var e = t.match(new RegExp(i + "=([^&]*)"));
    return e ? e[1] : null;
}, he = Tt("[AutoCapture]");
function de(t, i) {
    return i.length > t ? i.slice(0, t) + "..." : i;
}
function ve(t) {
    if (t.previousElementSibling) return t.previousElementSibling;
    var i = t;
    do {
        i = i.previousSibling;
    }while (i && !Si(i))
    return i;
}
function ce(t, i, e, r) {
    var s = t.tagName.toLowerCase(), n = {
        tag_name: s
    };
    Mi.indexOf(s) > -1 && !e && ("a" === s.toLowerCase() || "button" === s.toLowerCase() ? n.$el_text = de(1024, Yi(t)) : n.$el_text = de(1024, Oi(t)));
    var o = Ri(t);
    o.length > 0 && (n.classes = o.filter(function(t) {
        return "" !== t;
    })), Ft(t.attributes, function(e) {
        var s;
        if ((!Hi(t) || -1 !== [
            "name",
            "id",
            "class",
            "aria-label"
        ].indexOf(e.name)) && (null == r || !r.includes(e.name)) && !i && Ki(e.value) && (s = e.name, !M(s) || "_ngcontent" !== s.substring(0, 10) && "_nghost" !== s.substring(0, 7))) {
            var o = e.value;
            "class" === e.name && (o = Ti(o).join(" ")), n["attr__" + e.name] = de(1024, o);
        }
    });
    for(var a = 1, l = 1, u = t; u = ve(u);)a++, u.tagName === t.tagName && l++;
    return n.nth_child = a, n.nth_of_type = l, n;
}
function fe(i, e) {
    for(var r, s, { e: n, maskAllElementAttributes: o, maskAllText: a, elementAttributeIgnoreList: l, elementsChainAsString: u } = e, h = [
        i
    ], d = i; d.parentNode && !Ei(d, "body");)Pi(d.parentNode) ? (h.push(d.parentNode.host), d = d.parentNode.host) : (h.push(d.parentNode), d = d.parentNode);
    var v, c = [], f = {}, p = !1, g = !1;
    if (Ft(h, (t)=>{
        var i = zi(t);
        "a" === t.tagName.toLowerCase() && (p = t.getAttribute("href"), p = i && p && Ki(p) && p), w(Ri(t), "ph-no-capture") && (g = !0), c.push(ce(t, o, a, l));
        var e = function(t) {
            if (!zi(t)) return {};
            var i = {};
            return Ft(t.attributes, function(t) {
                if (t.name && 0 === t.name.indexOf("data-ph-capture-attribute")) {
                    var e = t.name.replace("data-ph-capture-attribute-", ""), r = t.value;
                    e && r && Ki(r) && (i[e] = r);
                }
            }), i;
        }(t);
        Mt(f, e);
    }), g) return {
        props: {},
        explicitNoCapture: g
    };
    if (a || ("a" === i.tagName.toLowerCase() || "button" === i.tagName.toLowerCase() ? c[0].$el_text = Yi(i) : c[0].$el_text = Oi(i)), p) {
        var _, m;
        c[0].attr__href = p;
        var y = null == (_ = ne(p)) ? void 0 : _.host, b = null == t || null == (m = t.location) ? void 0 : m.host;
        y && b && y !== b && (v = p);
    }
    return {
        props: Mt({
            $event_type: n.type,
            $ce_version: 1
        }, u ? {} : {
            $elements: c
        }, {
            $elements_chain: Qi(c)
        }, null != (r = c[0]) && r.$el_text ? {
            $el_text: null == (s = c[0]) ? void 0 : s.$el_text
        } : {}, v && "click" === n.type ? {
            $external_click_url: v
        } : {}, f)
    };
}
class pe {
    get C() {
        var t, i, e = C(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
        return e.url_allowlist = null == (t = e.url_allowlist) ? void 0 : t.map((t)=>new RegExp(t)), e.url_ignorelist = null == (i = e.url_ignorelist) ? void 0 : i.map((t)=>new RegExp(t)), e;
    }
    O() {
        if (this.isBrowserSupported()) {
            if (t && o) {
                var i = (i)=>{
                    i = i || (null == t ? void 0 : t.event);
                    try {
                        this.F(i);
                    } catch (t) {
                        he.error("Failed to capture event", t);
                    }
                };
                if (qt(o, "submit", i, {
                    capture: !0
                }), qt(o, "change", i, {
                    capture: !0
                }), qt(o, "click", i, {
                    capture: !0
                }), this.C.capture_copied_text) {
                    var e = (i)=>{
                        i = i || (null == t ? void 0 : t.event), this.F(i, ee);
                    };
                    qt(o, "copy", e, {
                        capture: !0
                    }), qt(o, "cut", e, {
                        capture: !0
                    });
                }
            }
        } else he.info("Disabling Automatic Event Collection because this browser is not supported");
    }
    startIfEnabled() {
        this.isEnabled && !this.P && (this.O(), this.P = !0);
    }
    onRemoteConfig(t) {
        t.elementsChainAsString && (this.I = t.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({
            [Jt]: !!t.autocapture_opt_out
        }), this.T = !!t.autocapture_opt_out, this.startIfEnabled();
    }
    setElementSelectors(t) {
        this.R = t;
    }
    getElementSelectors(t) {
        var i, e = [];
        return null == (i = this.R) || i.forEach((i)=>{
            var r = null == o ? void 0 : o.querySelectorAll(i);
            null == r || r.forEach((r)=>{
                t === r && e.push(i);
            });
        }), e;
    }
    get isEnabled() {
        var t, i, e = null == (t = this.instance.persistence) ? void 0 : t.props[Jt], r = this.T;
        if (D(r) && !N(e) && !this.instance.M()) return !1;
        var s = null !== (i = this.T) && void 0 !== i ? i : !!e;
        return !!this.instance.config.autocapture && !s;
    }
    F(i, e) {
        if (void 0 === e && (e = "$autocapture"), this.isEnabled) {
            var r, s = Fi(i);
            if (ki(s) && (s = s.parentNode || null), "$autocapture" === e && "click" === i.type && i instanceof MouseEvent) this.instance.config.rageclick && null != (r = this.rageclicks) && r.isRageClick(i.clientX, i.clientY, (new Date).getTime()) && function(i, e) {
                if (!t || Li(i)) return !1;
                var r, s;
                if (!1 === (r = N(e) ? !!e && ji : null !== (s = null == e ? void 0 : e.css_selector_ignorelist) && void 0 !== s ? s : ji)) return !1;
                var { targetElementList: n } = Ni(i, !1);
                return !Ai(n, r);
            }(s, this.instance.config.rageclick) && this.F(i, "$rageclick");
            var n = e === ee;
            if (s && Ui(s, i, this.C, n, n ? [
                "copy",
                "cut"
            ] : void 0)) {
                var { props: o, explicitNoCapture: a } = fe(s, {
                    e: i,
                    maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
                    maskAllText: this.instance.config.mask_all_text,
                    elementAttributeIgnoreList: this.C.element_attribute_ignorelist,
                    elementsChainAsString: this.I
                });
                if (a) return !1;
                var l = this.getElementSelectors(s);
                if (l && l.length > 0 && (o.$element_selectors = l), e === ee) {
                    var u, h = Ci(null == t || null == (u = t.getSelection()) ? void 0 : u.toString()), d = i.type || "clipboard";
                    if (!h) return !1;
                    o.$selected_content = h, o.$copy_type = d;
                }
                return this.instance.capture(e, o), !0;
            }
        }
    }
    isBrowserSupported() {
        return R(null == o ? void 0 : o.querySelectorAll);
    }
    constructor(t){
        this.P = !1, this.T = null, this.I = !1, this.instance = t, this.rageclicks = new ie(t.config.rageclick), this.R = null;
    }
}
Math.trunc || (Math.trunc = function(t) {
    return t < 0 ? Math.ceil(t) : Math.floor(t);
}), Number.isInteger || (Number.isInteger = function(t) {
    return L(t) && isFinite(t) && Math.floor(t) === t;
});
var ge = "0123456789abcdef";
class _e {
    static fromFieldsV7(t, i, e, r) {
        if (!Number.isInteger(t) || !Number.isInteger(i) || !Number.isInteger(e) || !Number.isInteger(r) || t < 0 || i < 0 || e < 0 || r < 0 || t > 0xffffffffffff || i > 4095 || e > 1073741823 || r > 4294967295) throw new RangeError("invalid field value");
        var s = new Uint8Array(16);
        return s[0] = t / Math.pow(2, 40), s[1] = t / Math.pow(2, 32), s[2] = t / Math.pow(2, 24), s[3] = t / Math.pow(2, 16), s[4] = t / Math.pow(2, 8), s[5] = t, s[6] = 112 | i >>> 8, s[7] = i, s[8] = 128 | e >>> 24, s[9] = e >>> 16, s[10] = e >>> 8, s[11] = e, s[12] = r >>> 24, s[13] = r >>> 16, s[14] = r >>> 8, s[15] = r, new _e(s);
    }
    toString() {
        for(var t = "", i = 0; i < this.bytes.length; i++)t = t + ge.charAt(this.bytes[i] >>> 4) + ge.charAt(15 & this.bytes[i]), 3 !== i && 5 !== i && 7 !== i && 9 !== i || (t += "-");
        if (36 !== t.length) throw new Error("Invalid UUIDv7 was generated");
        return t;
    }
    clone() {
        return new _e(this.bytes.slice(0));
    }
    equals(t) {
        return 0 === this.compareTo(t);
    }
    compareTo(t) {
        for(var i = 0; i < 16; i++){
            var e = this.bytes[i] - t.bytes[i];
            if (0 !== e) return Math.sign(e);
        }
        return 0;
    }
    constructor(t){
        if (this.bytes = t, 16 !== t.length) throw new TypeError("not 128-bit length");
    }
}
class me {
    generate() {
        var t = this.generateOrAbort();
        if (F(t)) {
            this.A = 0;
            var i = this.generateOrAbort();
            if (F(i)) throw new Error("Could not generate UUID after timestamp reset");
            return i;
        }
        return t;
    }
    generateOrAbort() {
        var t = Date.now();
        if (t > this.A) this.A = t, this.L();
        else {
            if (!(t + 1e4 > this.A)) return;
            this.D++, this.D > 4398046511103 && (this.A++, this.L());
        }
        return _e.fromFieldsV7(this.A, Math.trunc(this.D / Math.pow(2, 30)), this.D & Math.pow(2, 30) - 1, this.j.nextUint32());
    }
    L() {
        this.D = 1024 * this.j.nextUint32() + (1023 & this.j.nextUint32());
    }
    constructor(){
        this.A = 0, this.D = 0, this.j = new we;
    }
}
var ye, be = (t)=>{
    if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
    for(var i = 0; i < t.length; i++)t[i] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
    return t;
};
t && !F(t.crypto) && crypto.getRandomValues && (be = (t)=>crypto.getRandomValues(t));
class we {
    nextUint32() {
        return this.U >= this.N.length && (be(this.N), this.U = 0), this.N[this.U++];
    }
    constructor(){
        this.N = new Uint32Array(8), this.U = 1 / 0;
    }
}
var xe = ()=>$e().toString(), $e = ()=>(ye || (ye = new me)).generate(), Se = "";
var Ee = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
function ke(t, i) {
    if (i) {
        var e = function(t, i) {
            if (void 0 === i && (i = o), Se) return Se;
            if (!i) return "";
            if ([
                "localhost",
                "127.0.0.1"
            ].includes(t)) return "";
            for(var e = t.split("."), r = Math.min(e.length, 8), s = "dmn_chk_" + xe(); !Se && r--;){
                var n = e.slice(r).join("."), a = s + "=1;domain=." + n + ";path=/";
                i.cookie = a + ";max-age=3", i.cookie.includes(s) && (i.cookie = a + ";max-age=0", Se = n);
            }
            return Se;
        }(t);
        if (!e) {
            var r = ((t)=>{
                var i = t.match(Ee);
                return i ? i[0] : "";
            })(t);
            r !== e && Pt.info("Warning: cookie subdomain discovery mismatch", r, e), e = r;
        }
        return e ? "; domain=." + e : "";
    }
    return "";
}
var Pe = {
    H: ()=>!!o,
    B: function(t) {
        Pt.error("cookieStore error: " + t);
    },
    q: function(t) {
        if (o) {
            try {
                for(var i = t + "=", e = o.cookie.split(";").filter((t)=>t.length), r = 0; r < e.length; r++){
                    for(var s = e[r]; " " == s.charAt(0);)s = s.substring(1, s.length);
                    if (0 === s.indexOf(i)) return decodeURIComponent(s.substring(i.length, s.length));
                }
            } catch (t) {}
            return null;
        }
    },
    W: function(t) {
        var i;
        try {
            i = JSON.parse(Pe.q(t)) || {};
        } catch (t) {}
        return i;
    },
    G: function(t, i, e, r, s) {
        if (o) try {
            var n = "", a = "", l = ke(o.location.hostname, r);
            if (e) {
                var u = new Date;
                u.setTime(u.getTime() + 24 * e * 60 * 60 * 1e3), n = "; expires=" + u.toUTCString();
            }
            s && (a = "; secure");
            var h = t + "=" + encodeURIComponent(JSON.stringify(i)) + n + "; SameSite=Lax; path=/" + l + a;
            return h.length > 3686.4 && Pt.warn("cookieStore warning: large cookie, len=" + h.length), o.cookie = h, h;
        } catch (t) {
            return;
        }
    },
    V: function(t, i) {
        if (null != o && o.cookie) try {
            Pe.G(t, "", -1, i);
        } catch (t) {
            return;
        }
    }
}, Te = null, Ie = {
    H: function() {
        if (!D(Te)) return Te;
        var i = !0;
        if (F(t)) i = !1;
        else try {
            var e = "__mplssupport__";
            Ie.G(e, "xyz"), '"xyz"' !== Ie.q(e) && (i = !1), Ie.V(e);
        } catch (t) {
            i = !1;
        }
        return i || Pt.error("localStorage unsupported; falling back to cookie store"), Te = i, i;
    },
    B: function(t) {
        Pt.error("localStorage error: " + t);
    },
    q: function(i) {
        try {
            return null == t ? void 0 : t.localStorage.getItem(i);
        } catch (t) {
            Ie.B(t);
        }
        return null;
    },
    W: function(t) {
        try {
            return JSON.parse(Ie.q(t)) || {};
        } catch (t) {}
        return null;
    },
    G: function(i, e) {
        try {
            null == t || t.localStorage.setItem(i, JSON.stringify(e));
        } catch (t) {
            Ie.B(t);
        }
    },
    V: function(i) {
        try {
            null == t || t.localStorage.removeItem(i);
        } catch (t) {
            Ie.B(t);
        }
    }
}, Re = [
    "distinct_id",
    ri,
    si,
    yi,
    mi
], Ce = g({}, Ie, {
    W: function(t) {
        try {
            var i = {};
            try {
                i = Pe.W(t) || {};
            } catch (t) {}
            var e = Mt(i, JSON.parse(Ie.q(t) || "{}"));
            return Ie.G(t, e), e;
        } catch (t) {}
        return null;
    },
    G: function(t, i, e, r, s, n) {
        try {
            Ie.G(t, i, void 0, void 0, n);
            var o = {};
            Re.forEach((t)=>{
                i[t] && (o[t] = i[t]);
            }), Object.keys(o).length && Pe.G(t, o, e, r, s, n);
        } catch (t) {
            Ie.B(t);
        }
    },
    V: function(i, e) {
        try {
            null == t || t.localStorage.removeItem(i), Pe.V(i, e);
        } catch (t) {
            Ie.B(t);
        }
    }
}), Oe = {}, Fe = {
    H: function() {
        return !0;
    },
    B: function(t) {
        Pt.error("memoryStorage error: " + t);
    },
    q: function(t) {
        return Oe[t] || null;
    },
    W: function(t) {
        return Oe[t] || null;
    },
    G: function(t, i) {
        Oe[t] = i;
    },
    V: function(t) {
        delete Oe[t];
    }
}, Me = null, Ae = {
    H: function() {
        if (!D(Me)) return Me;
        if (Me = !0, F(t)) Me = !1;
        else try {
            var i = "__support__";
            Ae.G(i, "xyz"), '"xyz"' !== Ae.q(i) && (Me = !1), Ae.V(i);
        } catch (t) {
            Me = !1;
        }
        return Me;
    },
    B: function(t) {
        Pt.error("sessionStorage error: ", t);
    },
    q: function(i) {
        try {
            return null == t ? void 0 : t.sessionStorage.getItem(i);
        } catch (t) {
            Ae.B(t);
        }
        return null;
    },
    W: function(t) {
        try {
            return JSON.parse(Ae.q(t)) || null;
        } catch (t) {}
        return null;
    },
    G: function(i, e) {
        try {
            null == t || t.sessionStorage.setItem(i, JSON.stringify(e));
        } catch (t) {
            Ae.B(t);
        }
    },
    V: function(i) {
        try {
            null == t || t.sessionStorage.removeItem(i);
        } catch (t) {
            Ae.B(t);
        }
    }
}, De = function(t) {
    return t[t.PENDING = -1] = "PENDING", t[t.DENIED = 0] = "DENIED", t[t.GRANTED = 1] = "GRANTED", t;
}({});
class je {
    get C() {
        return this._instance.config;
    }
    get consent() {
        return this.J() ? De.DENIED : this.K;
    }
    isOptedOut() {
        return "always" === this.C.cookieless_mode || this.consent === De.DENIED || this.consent === De.PENDING && (this.C.opt_out_capturing_by_default || "on_reject" === this.C.cookieless_mode);
    }
    isOptedIn() {
        return !this.isOptedOut();
    }
    isExplicitlyOptedOut() {
        return this.consent === De.DENIED;
    }
    optInOut(t) {
        this.Y.G(this.X, t ? 1 : 0, this.C.cookie_expiration, this.C.cross_subdomain_cookie, this.C.secure_cookie);
    }
    reset() {
        this.Y.V(this.X, this.C.cross_subdomain_cookie);
    }
    get X() {
        var { token: t, opt_out_capturing_cookie_prefix: i, consent_persistence_name: e } = this._instance.config;
        return e || (i ? i + t : "__ph_opt_in_out_" + t);
    }
    get K() {
        var t = this.Y.q(this.X);
        return G(t) ? De.GRANTED : w(V, t) ? De.DENIED : De.PENDING;
    }
    get Y() {
        if (!this.Z) {
            var t = this.C.opt_out_capturing_persistence_type;
            this.Z = "localStorage" === t ? Ie : Pe;
            var i = "localStorage" === t ? Pe : Ie;
            i.q(this.X) && (this.Z.q(this.X) || this.optInOut(G(i.q(this.X))), i.V(this.X, this.C.cross_subdomain_cookie));
        }
        return this.Z;
    }
    J() {
        return !!this.C.respect_dnt && !!Bt([
            null == n ? void 0 : n.doNotTrack,
            null == n ? void 0 : n.msDoNotTrack,
            v.doNotTrack
        ], (t)=>G(t));
    }
    constructor(t){
        this._instance = t;
    }
}
var Le = Tt("[Dead Clicks]"), Ne = ()=>!0, Ue = (t)=>{
    var i, e = !(null == (i = t.instance.persistence) || !i.get_property(ti)), r = t.instance.config.capture_dead_clicks;
    return N(r) ? r : e;
};
class ze {
    get lazyLoadedDeadClicksAutocapture() {
        return this.tt;
    }
    onRemoteConfig(t) {
        this.instance.persistence && this.instance.persistence.register({
            [ti]: null == t ? void 0 : t.captureDeadClicks
        }), this.startIfEnabled();
    }
    startIfEnabled() {
        this.isEnabled(this) && this.it(()=>{
            this.et();
        });
    }
    it(t) {
        var i, e;
        null != (i = v.__PosthogExtensions__) && i.initDeadClicksAutocapture && t(), null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this.instance, "dead-clicks-autocapture", (i)=>{
            i ? Le.error("failed to load script", i) : t();
        });
    }
    et() {
        var t;
        if (o) {
            if (!this.tt && null != (t = v.__PosthogExtensions__) && t.initDeadClicksAutocapture) {
                var i = C(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
                i.__onCapture = this.onCapture, this.tt = v.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, i), this.tt.start(o), Le.info("starting...");
            }
        } else Le.error("`document` not found. Cannot start.");
    }
    stop() {
        this.tt && (this.tt.stop(), this.tt = void 0, Le.info("stopping..."));
    }
    constructor(t, i, e){
        this.instance = t, this.isEnabled = i, this.onCapture = e, this.startIfEnabled();
    }
}
var He = Tt("[ExceptionAutocapture]");
class Be {
    ht() {
        var t = this._instance.config.capture_exceptions, i = {
            capture_unhandled_errors: !1,
            capture_unhandled_rejections: !1,
            capture_console_errors: !1
        };
        return C(t) ? i = g({}, i, t) : (F(t) ? this.ut : t) && (i = g({}, i, {
            capture_unhandled_errors: !0,
            capture_unhandled_rejections: !0
        })), i;
    }
    get isEnabled() {
        return this.C.capture_console_errors || this.C.capture_unhandled_errors || this.C.capture_unhandled_rejections;
    }
    startIfEnabled() {
        this.isEnabled && (He.info("enabled"), this.it(this.rt));
    }
    it(t) {
        var i, e;
        null != (i = v.__PosthogExtensions__) && i.errorWrappingFunctions && t(), null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "exception-autocapture", (i)=>{
            if (i) return He.error("failed to load script", i);
            t();
        });
    }
    lt() {
        var t, i, e;
        null == (t = this.st) || t.call(this), this.st = void 0, null == (i = this.nt) || i.call(this), this.nt = void 0, null == (e = this.ot) || e.call(this), this.ot = void 0;
    }
    onRemoteConfig(t) {
        var i = t.autocaptureExceptions;
        this.ut = !!i || !1, this.C = this.ht(), this._instance.persistence && this._instance.persistence.register({
            [Yt]: this.ut
        }), this.startIfEnabled();
    }
    captureException(t) {
        var i, e, r = null !== (i = null == t || null == (e = t.$exception_list) || null == (e = e[0]) ? void 0 : e.type) && void 0 !== i ? i : "Exception";
        this.dt.consumeRateLimit(r) ? He.info("Skipping exception capture because of client rate limiting.", {
            exception: r
        }) : this._instance.exceptions.sendExceptionEvent(t);
    }
    constructor(i){
        var e, r, s;
        this.rt = ()=>{
            var i;
            if (t && this.isEnabled && null != (i = v.__PosthogExtensions__) && i.errorWrappingFunctions) {
                var e = v.__PosthogExtensions__.errorWrappingFunctions.wrapOnError, r = v.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection, s = v.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
                try {
                    !this.st && this.C.capture_unhandled_errors && (this.st = e(this.captureException.bind(this))), !this.nt && this.C.capture_unhandled_rejections && (this.nt = r(this.captureException.bind(this))), !this.ot && this.C.capture_console_errors && (this.ot = s(this.captureException.bind(this)));
                } catch (t) {
                    He.error("failed to start", t), this.lt();
                }
            }
        }, this._instance = i, this.ut = !(null == (e = this._instance.persistence) || !e.props[Yt]), this.C = this.ht(), this.dt = new K({
            refillRate: null !== (r = this._instance.config.error_tracking.__exceptionRateLimiterRefillRate) && void 0 !== r ? r : 1,
            bucketSize: null !== (s = this._instance.config.error_tracking.__exceptionRateLimiterBucketSize) && void 0 !== s ? s : 10,
            refillInterval: 1e4,
            h: He
        }), this.startIfEnabled();
    }
}
function qe(t, i, e) {
    try {
        if (!(i in t)) return ()=>{};
        var r = t[i], s = e(r);
        return R(s) && (s.prototype = s.prototype || {}, Object.defineProperties(s, {
            __posthog_wrapped__: {
                enumerable: !1,
                value: !0
            }
        })), t[i] = s, ()=>{
            t[i] = r;
        };
    } catch (t) {
        return ()=>{};
    }
}
class We {
    get isEnabled() {
        return "history_change" === this._instance.config.capture_pageview;
    }
    startIfEnabled() {
        this.isEnabled && (Pt.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges());
    }
    stop() {
        this.ct && this.ct(), this.ct = void 0, Pt.info("History API monitoring stopped");
    }
    monitorHistoryChanges() {
        var i, e;
        if (t && t.history) {
            var r = this;
            null != (i = t.history.pushState) && i.__posthog_wrapped__ || qe(t.history, "pushState", (t)=>function(i, e, s) {
                    t.call(this, i, e, s), r.ft("pushState");
                }), null != (e = t.history.replaceState) && e.__posthog_wrapped__ || qe(t.history, "replaceState", (t)=>function(i, e, s) {
                    t.call(this, i, e, s), r.ft("replaceState");
                }), this.gt();
        }
    }
    ft(i) {
        try {
            var e, r = null == t || null == (e = t.location) ? void 0 : e.pathname;
            if (!r) return;
            r !== this.vt && this.isEnabled && this._instance.capture("$pageview", {
                navigation_type: i
            }), this.vt = r;
        } catch (t) {
            Pt.error("Error capturing " + i + " pageview", t);
        }
    }
    gt() {
        if (!this.ct) {
            var i = ()=>{
                this.ft("popstate");
            };
            qt(t, "popstate", i), this.ct = ()=>{
                t && t.removeEventListener("popstate", i);
            };
        }
    }
    constructor(i){
        var e;
        this._instance = i, this.vt = (null == t || null == (e = t.location) ? void 0 : e.pathname) || "";
    }
}
var Ge = Tt("[SegmentIntegration]");
function Ve(t, i) {
    var e = t.config.segment;
    if (!e) return i();
    !function(t, i) {
        var e = t.config.segment;
        if (!e) return i();
        var r = (e)=>{
            var r = ()=>e.anonymousId() || xe();
            t.config.get_device_id = r, e.id() && (t.register({
                distinct_id: e.id(),
                $device_id: r()
            }), t.persistence.set_property(ci, "identified")), i();
        }, s = e.user();
        "then" in s && R(s.then) ? s.then((t)=>r(t)) : r(s);
    }(t, ()=>{
        e.register(((t)=>{
            Promise && Promise.resolve || Ge.warn("This browser does not have Promise support, and can not use the segment integration");
            var i = (i, e)=>{
                if (!e) return i;
                i.event.userId || i.event.anonymousId === t.get_distinct_id() || (Ge.info("No userId set, resetting PostHog"), t.reset()), i.event.userId && i.event.userId !== t.get_distinct_id() && (Ge.info("UserId set, identifying with PostHog"), t.identify(i.event.userId));
                var r = t.calculateEventProperties(e, i.event.properties);
                return i.event.properties = Object.assign({}, r, i.event.properties), i;
            };
            return {
                name: "PostHog JS",
                type: "enrichment",
                version: "1.0.0",
                isLoaded: ()=>!0,
                load: ()=>Promise.resolve(),
                track: (t)=>i(t, t.event.event),
                page: (t)=>i(t, "$pageview"),
                identify: (t)=>i(t, "$identify"),
                screen: (t)=>i(t, "$screen")
            };
        })(t)).then(()=>{
            i();
        });
    });
}
var Je = "posthog-js";
function Ke(t, i) {
    var { organization: e, projectId: r, prefix: s, severityAllowList: n = [
        "error"
    ], sendExceptionsToPostHog: o = !0 } = void 0 === i ? {} : i;
    return (i)=>{
        var a, l, u, h, d;
        if (!("*" === n || n.includes(i.level)) || !t.__loaded) return i;
        i.tags || (i.tags = {});
        var v = t.requestRouter.endpointFor("ui", "/project/" + t.config.token + "/person/" + t.get_distinct_id());
        i.tags["PostHog Person URL"] = v, t.sessionRecordingStarted() && (i.tags["PostHog Recording URL"] = t.get_session_replay_url({
            withTimestamp: !0
        }));
        var c = (null == (a = i.exception) ? void 0 : a.values) || [], f = c.map((t)=>g({}, t, {
                stacktrace: t.stacktrace ? g({}, t.stacktrace, {
                    type: "raw",
                    frames: (t.stacktrace.frames || []).map((t)=>g({}, t, {
                            platform: "web:javascript"
                        }))
                }) : void 0
            })), p = {
            $exception_message: (null == (l = c[0]) ? void 0 : l.value) || i.message,
            $exception_type: null == (u = c[0]) ? void 0 : u.type,
            $exception_level: i.level,
            $exception_list: f,
            $sentry_event_id: i.event_id,
            $sentry_exception: i.exception,
            $sentry_exception_message: (null == (h = c[0]) ? void 0 : h.value) || i.message,
            $sentry_exception_type: null == (d = c[0]) ? void 0 : d.type,
            $sentry_tags: i.tags
        };
        return e && r && (p.$sentry_url = (s || "https://sentry.io/organizations/") + e + "/issues/?project=" + r + "&query=" + i.event_id), o && t.exceptions.sendExceptionEvent(p), i;
    };
}
class Ye {
    constructor(t, i, e, r, s, n){
        this.name = Je, this.setupOnce = function(o) {
            o(Ke(t, {
                organization: i,
                projectId: e,
                prefix: r,
                severityAllowList: s,
                sendExceptionsToPostHog: null == n || n
            }));
        };
    }
}
var Xe = null != t && t.location ? ue(t.location.hash, "__posthog") || ue(location.hash, "state") : null, Qe = "_postHogToolbarParams", Ze = Tt("[Toolbar]"), tr = function(t) {
    return t[t.UNINITIALIZED = 0] = "UNINITIALIZED", t[t.LOADING = 1] = "LOADING", t[t.LOADED = 2] = "LOADED", t;
}(tr || {});
class ir {
    _t(t) {
        v.ph_toolbar_state = t;
    }
    yt() {
        var t;
        return null !== (t = v.ph_toolbar_state) && void 0 !== t ? t : tr.UNINITIALIZED;
    }
    maybeLoadToolbar(i, e, r) {
        if (void 0 === i && (i = void 0), void 0 === e && (e = void 0), void 0 === r && (r = void 0), !t || !o) return !1;
        i = null != i ? i : t.location, r = null != r ? r : t.history;
        try {
            if (!e) {
                try {
                    t.localStorage.setItem("test", "test"), t.localStorage.removeItem("test");
                } catch (t) {
                    return !1;
                }
                e = null == t ? void 0 : t.localStorage;
            }
            var s, n = Xe || ue(i.hash, "__posthog") || ue(i.hash, "state"), a = n ? jt(()=>JSON.parse(atob(decodeURIComponent(n)))) || jt(()=>JSON.parse(decodeURIComponent(n))) : null;
            return a && "ph_authorize" === a.action ? ((s = a).source = "url", s && Object.keys(s).length > 0 && (a.desiredHash ? i.hash = a.desiredHash : r ? r.replaceState(r.state, "", i.pathname + i.search) : i.hash = "")) : ((s = JSON.parse(e.getItem(Qe) || "{}")).source = "localstorage", delete s.userIntent), !(!s.token || this.instance.config.token !== s.token) && (this.loadToolbar(s), !0);
        } catch (t) {
            return !1;
        }
    }
    bt(t) {
        var i = v.ph_load_toolbar || v.ph_load_editor;
        !j(i) && R(i) ? i(t, this.instance) : Ze.warn("No toolbar load function found");
    }
    loadToolbar(i) {
        var e = !(null == o || !o.getElementById(bi));
        if (!t || e) return !1;
        var r = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, s = g({
            token: this.instance.config.token
        }, i, {
            apiURL: this.instance.requestRouter.endpointFor("ui")
        }, r ? {
            instrument: !1
        } : {});
        if (t.localStorage.setItem(Qe, JSON.stringify(g({}, s, {
            source: void 0
        }))), this.yt() === tr.LOADED) this.bt(s);
        else if (this.yt() === tr.UNINITIALIZED) {
            var n;
            this._t(tr.LOADING), null == (n = v.__PosthogExtensions__) || null == n.loadExternalDependency || n.loadExternalDependency(this.instance, "toolbar", (t)=>{
                if (t) return Ze.error("[Toolbar] Failed to load", t), void this._t(tr.UNINITIALIZED);
                this._t(tr.LOADED), this.bt(s);
            }), qt(t, "turbolinks:load", ()=>{
                this._t(tr.UNINITIALIZED), this.loadToolbar(s);
            });
        }
        return !0;
    }
    wt(t) {
        return this.loadToolbar(t);
    }
    maybeLoadEditor(t, i, e) {
        return void 0 === t && (t = void 0), void 0 === i && (i = void 0), void 0 === e && (e = void 0), this.maybeLoadToolbar(t, i, e);
    }
    constructor(t){
        this.instance = t;
    }
}
var er = Tt("[TracingHeaders]");
class rr {
    it(t) {
        var i, e;
        null != (i = v.__PosthogExtensions__) && i.tracingHeadersPatchFns && t(), null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "tracing-headers", (i)=>{
            if (i) return er.error("failed to load script", i);
            t();
        });
    }
    startIfEnabledOrStop() {
        var t, i;
        this._instance.config.__add_tracing_headers ? this.it(this.rt) : (null == (t = this.xt) || t.call(this), null == (i = this.$t) || i.call(this), this.xt = void 0, this.$t = void 0);
    }
    constructor(t){
        this.xt = void 0, this.$t = void 0, this.rt = ()=>{
            var t, i;
            F(this.xt) && (null == (t = v.__PosthogExtensions__) || null == (t = t.tracingHeadersPatchFns) || t._patchXHR(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager));
            F(this.$t) && (null == (i = v.__PosthogExtensions__) || null == (i = i.tracingHeadersPatchFns) || i._patchFetch(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager));
        }, this._instance = t;
    }
}
var sr = "Mobile", nr = "iOS", or = "Android", ar = "Tablet", lr = or + " " + ar, ur = "iPad", hr = "Apple", dr = hr + " Watch", vr = "Safari", cr = "BlackBerry", fr = "Samsung", pr = fr + "Browser", gr = fr + " Internet", _r = "Chrome", mr = _r + " OS", yr = _r + " " + nr, br = "Internet Explorer", wr = br + " " + sr, xr = "Opera", $r = xr + " Mini", Sr = "Edge", Er = "Microsoft " + Sr, kr = "Firefox", Pr = kr + " " + nr, Tr = "Nintendo", Ir = "PlayStation", Rr = "Xbox", Cr = or + " " + sr, Or = sr + " " + vr, Fr = "Windows", Mr = Fr + " Phone", Ar = "Nokia", Dr = "Ouya", jr = "Generic", Lr = jr + " " + sr.toLowerCase(), Nr = jr + " " + ar.toLowerCase(), Ur = "Konqueror", zr = "(\\d+(\\.\\d+)?)", Hr = new RegExp("Version/" + zr), Br = new RegExp(Rr, "i"), qr = new RegExp(Ir + " \\w+", "i"), Wr = new RegExp(Tr + " \\w+", "i"), Gr = new RegExp(cr + "|PlayBook|BB10", "i"), Vr = {
    "NT3.51": "NT 3.11",
    "NT4.0": "NT 4.0",
    "5.0": "2000",
    5.1: "XP",
    5.2: "XP",
    "6.0": "Vista",
    6.1: "7",
    6.2: "8",
    6.3: "8.1",
    6.4: "10",
    "10.0": "10"
};
var Jr = (t, i)=>i && w(i, hr) || function(t) {
        return w(t, vr) && !w(t, _r) && !w(t, or);
    }(t), Kr = function(t, i) {
    return i = i || "", w(t, " OPR/") && w(t, "Mini") ? $r : w(t, " OPR/") ? xr : Gr.test(t) ? cr : w(t, "IE" + sr) || w(t, "WPDesktop") ? wr : w(t, pr) ? gr : w(t, Sr) || w(t, "Edg/") ? Er : w(t, "FBIOS") ? "Facebook " + sr : w(t, "UCWEB") || w(t, "UCBrowser") ? "UC Browser" : w(t, "CriOS") ? yr : w(t, "CrMo") || w(t, _r) ? _r : w(t, or) && w(t, vr) ? Cr : w(t, "FxiOS") ? Pr : w(t.toLowerCase(), Ur.toLowerCase()) ? Ur : Jr(t, i) ? w(t, sr) ? Or : vr : w(t, kr) ? kr : w(t, "MSIE") || w(t, "Trident/") ? br : w(t, "Gecko") ? kr : "";
}, Yr = {
    [wr]: [
        new RegExp("rv:" + zr)
    ],
    [Er]: [
        new RegExp(Sr + "?\\/" + zr)
    ],
    [_r]: [
        new RegExp("(" + _r + "|CrMo)\\/" + zr)
    ],
    [yr]: [
        new RegExp("CriOS\\/" + zr)
    ],
    "UC Browser": [
        new RegExp("(UCBrowser|UCWEB)\\/" + zr)
    ],
    [vr]: [
        Hr
    ],
    [Or]: [
        Hr
    ],
    [xr]: [
        new RegExp("(Opera|OPR)\\/" + zr)
    ],
    [kr]: [
        new RegExp(kr + "\\/" + zr)
    ],
    [Pr]: [
        new RegExp("FxiOS\\/" + zr)
    ],
    [Ur]: [
        new RegExp("Konqueror[:/]?" + zr, "i")
    ],
    [cr]: [
        new RegExp(cr + " " + zr),
        Hr
    ],
    [Cr]: [
        new RegExp("android\\s" + zr, "i")
    ],
    [gr]: [
        new RegExp(pr + "\\/" + zr)
    ],
    [br]: [
        new RegExp("(rv:|MSIE )" + zr)
    ],
    Mozilla: [
        new RegExp("rv:" + zr)
    ]
}, Xr = function(t, i) {
    var e = Kr(t, i), r = Yr[e];
    if (F(r)) return null;
    for(var s = 0; s < r.length; s++){
        var n = r[s], o = t.match(n);
        if (o) return parseFloat(o[o.length - 2]);
    }
    return null;
}, Qr = [
    [
        new RegExp(Rr + "; " + Rr + " (.*?)[);]", "i"),
        (t)=>[
                Rr,
                t && t[1] || ""
            ]
    ],
    [
        new RegExp(Tr, "i"),
        [
            Tr,
            ""
        ]
    ],
    [
        new RegExp(Ir, "i"),
        [
            Ir,
            ""
        ]
    ],
    [
        Gr,
        [
            cr,
            ""
        ]
    ],
    [
        new RegExp(Fr, "i"),
        (t, i)=>{
            if (/Phone/.test(i) || /WPDesktop/.test(i)) return [
                Mr,
                ""
            ];
            if (new RegExp(sr).test(i) && !/IEMobile\b/.test(i)) return [
                Fr + " " + sr,
                ""
            ];
            var e = /Windows NT ([0-9.]+)/i.exec(i);
            if (e && e[1]) {
                var r = e[1], s = Vr[r] || "";
                return /arm/i.test(i) && (s = "RT"), [
                    Fr,
                    s
                ];
            }
            return [
                Fr,
                ""
            ];
        }
    ],
    [
        /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
        (t)=>{
            if (t && t[3]) {
                var i = [
                    t[3],
                    t[4],
                    t[5] || "0"
                ];
                return [
                    nr,
                    i.join(".")
                ];
            }
            return [
                nr,
                ""
            ];
        }
    ],
    [
        /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
        (t)=>{
            var i = "";
            return t && t.length >= 3 && (i = F(t[2]) ? t[3] : t[2]), [
                "watchOS",
                i
            ];
        }
    ],
    [
        new RegExp("(" + or + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + or + ")", "i"),
        (t)=>{
            if (t && t[2]) {
                var i = [
                    t[2],
                    t[3],
                    t[4] || "0"
                ];
                return [
                    or,
                    i.join(".")
                ];
            }
            return [
                or,
                ""
            ];
        }
    ],
    [
        /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
        (t)=>{
            var i = [
                "Mac OS X",
                ""
            ];
            if (t && t[1]) {
                var e = [
                    t[1],
                    t[2],
                    t[3] || "0"
                ];
                i[1] = e.join(".");
            }
            return i;
        }
    ],
    [
        /Mac/i,
        [
            "Mac OS X",
            ""
        ]
    ],
    [
        /CrOS/,
        [
            mr,
            ""
        ]
    ],
    [
        /Linux|debian/i,
        [
            "Linux",
            ""
        ]
    ]
], Zr = function(t) {
    return Wr.test(t) ? Tr : qr.test(t) ? Ir : Br.test(t) ? Rr : new RegExp(Dr, "i").test(t) ? Dr : new RegExp("(" + Mr + "|WPDesktop)", "i").test(t) ? Mr : /iPad/.test(t) ? ur : /iPod/.test(t) ? "iPod Touch" : /iPhone/.test(t) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(t) ? dr : Gr.test(t) ? cr : /(kobo)\s(ereader|touch)/i.test(t) ? "Kobo" : new RegExp(Ar, "i").test(t) ? Ar : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(t) || /(kf[a-z]+)( bui|\)).+silk\//i.test(t) ? "Kindle Fire" : /(Android|ZTE)/i.test(t) ? !new RegExp(sr).test(t) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(t) ? /pixel[\daxl ]{1,6}/i.test(t) && !/pixel c/i.test(t) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(t) || /lmy47v/i.test(t) && !/QTAQZ3/i.test(t) ? or : lr : or : new RegExp("(pda|" + sr + ")", "i").test(t) ? Lr : new RegExp(ar, "i").test(t) && !new RegExp(ar + " pc", "i").test(t) ? Nr : "";
}, ts = "https?://(.*)", is = [
    "gclid",
    "gclsrc",
    "dclid",
    "gbraid",
    "wbraid",
    "fbclid",
    "msclkid",
    "twclid",
    "li_fat_id",
    "igshid",
    "ttclid",
    "rdt_cid",
    "epik",
    "qclid",
    "sccid",
    "irclid",
    "_kx"
], es = At([
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gad_source",
    "mc_cid"
], is), rs = "<masked>", ss = [
    "li_fat_id"
];
function ns(t, i, e) {
    if (!o) return {};
    var r, s = i ? At([], is, e || []) : [], n = os(le(o.URL, s, rs), t), a = (r = {}, Ft(ss, function(t) {
        var i = Pe.q(t);
        r[t] = i || null;
    }), r);
    return Mt(a, n);
}
function os(t, i) {
    var e = es.concat(i || []), r = {};
    return Ft(e, function(i) {
        var e = ae(t, i);
        r[i] = e || null;
    }), r;
}
function as(t) {
    var i = function(t) {
        return t ? 0 === t.search(ts + "google.([^/?]*)") ? "google" : 0 === t.search(ts + "bing.com") ? "bing" : 0 === t.search(ts + "yahoo.com") ? "yahoo" : 0 === t.search(ts + "duckduckgo.com") ? "duckduckgo" : null : null;
    }(t), e = "yahoo" != i ? "q" : "p", r = {};
    if (!D(i)) {
        r.$search_engine = i;
        var s = o ? ae(o.referrer, e) : "";
        s.length && (r.ph_keyword = s);
    }
    return r;
}
function ls() {
    return navigator.language || navigator.userLanguage;
}
function us() {
    return (null == o ? void 0 : o.referrer) || "$direct";
}
function hs(t, i) {
    var e = t ? At([], is, i || []) : [], r = null == a ? void 0 : a.href.substring(0, 1e3);
    return {
        r: us().substring(0, 1e3),
        u: r ? le(r, e, rs) : void 0
    };
}
function ds(t) {
    var i, { r: e, u: r } = t, s = {
        $referrer: e,
        $referring_domain: null == e ? void 0 : "$direct" == e ? "$direct" : null == (i = ne(e)) ? void 0 : i.host
    };
    if (r) {
        s.$current_url = r;
        var n = ne(r);
        s.$host = null == n ? void 0 : n.host, s.$pathname = null == n ? void 0 : n.pathname;
        var o = os(r);
        Mt(s, o);
    }
    if (e) {
        var a = as(e);
        Mt(s, a);
    }
    return s;
}
function vs() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (t) {
        return;
    }
}
function cs() {
    try {
        return (new Date).getTimezoneOffset();
    } catch (t) {
        return;
    }
}
function fs(i, e) {
    if (!d) return {};
    var r, s, n, o = i ? At([], is, e || []) : [], [l, u] = function(t) {
        for(var i = 0; i < Qr.length; i++){
            var [e, r] = Qr[i], s = e.exec(t), n = s && (R(r) ? r(s, t) : r);
            if (n) return n;
        }
        return [
            "",
            ""
        ];
    }(d);
    return Mt(Nt({
        $os: l,
        $os_version: u,
        $browser: Kr(d, navigator.vendor),
        $device: Zr(d),
        $device_type: (s = d, n = Zr(s), n === ur || n === lr || "Kobo" === n || "Kindle Fire" === n || n === Nr ? ar : n === Tr || n === Rr || n === Ir || n === Dr ? "Console" : n === dr ? "Wearable" : n ? sr : "Desktop"),
        $timezone: vs(),
        $timezone_offset: cs()
    }), {
        $current_url: le(null == a ? void 0 : a.href, o, rs),
        $host: null == a ? void 0 : a.host,
        $pathname: null == a ? void 0 : a.pathname,
        $raw_user_agent: d.length > 1e3 ? d.substring(0, 997) + "..." : d,
        $browser_version: Xr(d, navigator.vendor),
        $browser_language: ls(),
        $browser_language_prefix: (r = ls(), "string" == typeof r ? r.split("-")[0] : void 0),
        $screen_height: null == t ? void 0 : t.screen.height,
        $screen_width: null == t ? void 0 : t.screen.width,
        $viewport_height: null == t ? void 0 : t.innerHeight,
        $viewport_width: null == t ? void 0 : t.innerWidth,
        $lib: "web",
        $lib_version: c.LIB_VERSION,
        $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
        $time: Date.now() / 1e3
    });
}
var ps = Tt("[Web Vitals]"), gs = 9e5;
class _s {
    get allowedMetrics() {
        var t, i, e = C(this._instance.config.capture_performance) ? null == (t = this._instance.config.capture_performance) ? void 0 : t.web_vitals_allowed_metrics : void 0;
        return F(e) ? (null == (i = this._instance.persistence) ? void 0 : i.props[ii]) || [
            "CLS",
            "FCP",
            "INP",
            "LCP"
        ] : e;
    }
    get flushToCaptureTimeoutMs() {
        return (C(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3;
    }
    get It() {
        var t = C(this._instance.config.capture_performance) && L(this._instance.config.capture_performance.__web_vitals_max_value) ? this._instance.config.capture_performance.__web_vitals_max_value : gs;
        return 0 < t && t <= 6e4 ? gs : t;
    }
    get isEnabled() {
        var t = null == a ? void 0 : a.protocol;
        if ("http:" !== t && "https:" !== t) return ps.info("Web Vitals are disabled on non-http/https protocols"), !1;
        var i = C(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals : N(this._instance.config.capture_performance) ? this._instance.config.capture_performance : void 0;
        return N(i) ? i : this.St;
    }
    startIfEnabled() {
        this.isEnabled && !this.P && (ps.info("enabled, starting..."), this.it(this.rt));
    }
    onRemoteConfig(t) {
        var i = C(t.capturePerformance) && !!t.capturePerformance.web_vitals, e = C(t.capturePerformance) ? t.capturePerformance.web_vitals_allowed_metrics : void 0;
        this._instance.persistence && (this._instance.persistence.register({
            [Zt]: i
        }), this._instance.persistence.register({
            [ii]: e
        })), this.St = i, this.startIfEnabled();
    }
    it(t) {
        var i, e;
        null != (i = v.__PosthogExtensions__) && i.postHogWebVitalsCallbacks && t(), null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "web-vitals", (i)=>{
            i ? ps.error("failed to load script", i) : t();
        });
    }
    Tt() {
        var i = t ? t.location.href : void 0;
        if (i) {
            var e = this._instance.config.mask_personal_data_properties, r = this._instance.config.custom_personal_data_properties, s = e ? At([], is, r || []) : [];
            return le(i, s, rs);
        }
        ps.error("Could not determine current URL");
    }
    constructor(t){
        var i;
        this.St = !1, this.P = !1, this.N = {
            url: void 0,
            metrics: [],
            firstMetricTimestamp: void 0
        }, this.Et = ()=>{
            clearTimeout(this.kt), 0 !== this.N.metrics.length && (this._instance.capture("$web_vitals", this.N.metrics.reduce((t, i)=>g({}, t, {
                    ["$web_vitals_" + i.name + "_event"]: g({}, i),
                    ["$web_vitals_" + i.name + "_value"]: i.value
                }), {})), this.N = {
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
            });
        }, this.Pt = (t)=>{
            var i, e = null == (i = this._instance.sessionManager) ? void 0 : i.checkAndGetSessionAndWindowId(!0);
            if (F(e)) ps.error("Could not read session ID. Dropping metrics!");
            else {
                this.N = this.N || {
                    url: void 0,
                    metrics: [],
                    firstMetricTimestamp: void 0
                };
                var r = this.Tt();
                if (!F(r)) if (j(null == t ? void 0 : t.name) || j(null == t ? void 0 : t.value)) ps.error("Invalid metric received", t);
                else if (this.It && t.value >= this.It) ps.error("Ignoring metric with value >= " + this.It, t);
                else this.N.url !== r && (this.Et(), this.kt = setTimeout(this.Et, this.flushToCaptureTimeoutMs)), F(this.N.url) && (this.N.url = r), this.N.firstMetricTimestamp = F(this.N.firstMetricTimestamp) ? Date.now() : this.N.firstMetricTimestamp, t.attribution && t.attribution.interactionTargetElement && (t.attribution.interactionTargetElement = void 0), this.N.metrics.push(g({}, t, {
                    $current_url: r,
                    $session_id: e.sessionId,
                    $window_id: e.windowId,
                    timestamp: Date.now()
                })), this.N.metrics.length === this.allowedMetrics.length && this.Et();
            }
        }, this.rt = ()=>{
            var t, i, e, r, s = v.__PosthogExtensions__;
            F(s) || F(s.postHogWebVitalsCallbacks) || ({ onLCP: t, onCLS: i, onFCP: e, onINP: r } = s.postHogWebVitalsCallbacks), t && i && e && r ? (this.allowedMetrics.indexOf("LCP") > -1 && t(this.Pt.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && i(this.Pt.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && e(this.Pt.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && r(this.Pt.bind(this)), this.P = !0) : ps.error("web vitals callbacks not loaded - not starting");
        }, this._instance = t, this.St = !(null == (i = this._instance.persistence) || !i.props[Zt]), this.startIfEnabled();
    }
}
var ms = Tt("[Heatmaps]");
function ys(t) {
    return C(t) && "clientX" in t && "clientY" in t && L(t.clientX) && L(t.clientY);
}
class bs {
    get flushIntervalMilliseconds() {
        var t = 5e3;
        return C(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (t = this.instance.config.capture_heatmaps.flush_interval_milliseconds), t;
    }
    get isEnabled() {
        return F(this.instance.config.capture_heatmaps) ? F(this.instance.config.enable_heatmaps) ? this.St : this.instance.config.enable_heatmaps : !1 !== this.instance.config.capture_heatmaps;
    }
    startIfEnabled() {
        if (this.isEnabled) {
            if (this.P) return;
            ms.info("starting..."), this.Ct(), this.Ot();
        } else {
            var t;
            clearInterval(null !== (t = this.Rt) && void 0 !== t ? t : void 0), this.Ft(), this.getAndClearBuffer();
        }
    }
    onRemoteConfig(t) {
        var i = !!t.heatmaps;
        this.instance.persistence && this.instance.persistence.register({
            [Kt]: i
        }), this.St = i, this.startIfEnabled();
    }
    getAndClearBuffer() {
        var t = this.N;
        return this.N = void 0, t;
    }
    Mt(t) {
        this.At(t.originalEvent, "deadclick");
    }
    Ot() {
        this.Rt && clearInterval(this.Rt), this.Rt = function(t) {
            return "visible" === (null == t ? void 0 : t.visibilityState);
        }(o) ? setInterval(this.Dt.bind(this), this.flushIntervalMilliseconds) : null;
    }
    Ct() {
        t && o && (this.jt = this.Dt.bind(this), qt(t, "beforeunload", this.jt), this.Lt = (i)=>this.At(i || (null == t ? void 0 : t.event)), qt(o, "click", this.Lt, {
            capture: !0
        }), this.Nt = (i)=>this.Ut(i || (null == t ? void 0 : t.event)), qt(o, "mousemove", this.Nt, {
            capture: !0
        }), this.zt = new ze(this.instance, Ne, this.Mt.bind(this)), this.zt.startIfEnabled(), this.Ht = this.Ot.bind(this), qt(o, "visibilitychange", this.Ht), this.P = !0);
    }
    Ft() {
        var i;
        t && o && (this.jt && t.removeEventListener("beforeunload", this.jt), this.Lt && o.removeEventListener("click", this.Lt, {
            capture: !0
        }), this.Nt && o.removeEventListener("mousemove", this.Nt, {
            capture: !0
        }), this.Ht && o.removeEventListener("visibilitychange", this.Ht), clearTimeout(this.Bt), null == (i = this.zt) || i.stop(), this.P = !1);
    }
    qt(i, e) {
        var r = this.instance.scrollManager.scrollY(), s = this.instance.scrollManager.scrollX(), n = this.instance.scrollManager.scrollElement(), o = function(i, e, r) {
            for(var s = i; s && Si(s) && !Ei(s, "body");){
                if (s === r) return !1;
                if (w(e, null == t ? void 0 : t.getComputedStyle(s).position)) return !0;
                s = Di(s);
            }
            return !1;
        }(Fi(i), [
            "fixed",
            "sticky"
        ], n);
        return {
            x: i.clientX + (o ? 0 : s),
            y: i.clientY + (o ? 0 : r),
            target_fixed: o,
            type: e
        };
    }
    At(t, i) {
        var e;
        if (void 0 === i && (i = "click"), !$i(t.target) && ys(t)) {
            var r = this.qt(t, i);
            null != (e = this.rageclicks) && e.isRageClick(t.clientX, t.clientY, (new Date).getTime()) && this.Wt(g({}, r, {
                type: "rageclick"
            })), this.Wt(r);
        }
    }
    Ut(t) {
        !$i(t.target) && ys(t) && (clearTimeout(this.Bt), this.Bt = setTimeout(()=>{
            this.Wt(this.qt(t, "mousemove"));
        }, 500));
    }
    Wt(i) {
        if (t) {
            var e = t.location.href, r = this.instance.config.mask_personal_data_properties, s = this.instance.config.custom_personal_data_properties, n = r ? At([], is, s || []) : [], o = le(e, n, rs);
            this.N = this.N || {}, this.N[o] || (this.N[o] = []), this.N[o].push(i);
        }
    }
    Dt() {
        this.N && !O(this.N) && this.instance.capture("$$heatmap", {
            $heatmap_data: this.getAndClearBuffer()
        });
    }
    constructor(t){
        var i;
        this.St = !1, this.P = !1, this.Rt = null, this.instance = t, this.St = !(null == (i = this.instance.persistence) || !i.props[Kt]), this.rageclicks = new ie(t.config.rageclick);
    }
}
class ws {
    doPageView(i, e) {
        var r, s = this.Gt(i, e);
        return this.Vt = {
            pathname: null !== (r = null == t ? void 0 : t.location.pathname) && void 0 !== r ? r : "",
            pageViewId: e,
            timestamp: i
        }, this._instance.scrollManager.resetContext(), s;
    }
    doPageLeave(t) {
        var i;
        return this.Gt(t, null == (i = this.Vt) ? void 0 : i.pageViewId);
    }
    doEvent() {
        var t;
        return {
            $pageview_id: null == (t = this.Vt) ? void 0 : t.pageViewId
        };
    }
    Gt(t, i) {
        var e = this.Vt;
        if (!e) return {
            $pageview_id: i
        };
        var r = {
            $pageview_id: i,
            $prev_pageview_id: e.pageViewId
        }, s = this._instance.scrollManager.getContext();
        if (s && !this._instance.config.disable_scroll_properties) {
            var { maxScrollHeight: n, lastScrollY: o, maxScrollY: a, maxContentHeight: l, lastContentY: u, maxContentY: h } = s;
            if (!(F(n) || F(o) || F(a) || F(l) || F(u) || F(h))) {
                n = Math.ceil(n), o = Math.ceil(o), a = Math.ceil(a), l = Math.ceil(l), u = Math.ceil(u), h = Math.ceil(h);
                var d = n <= 1 ? 1 : J(o / n, 0, 1, Pt), v = n <= 1 ? 1 : J(a / n, 0, 1, Pt), c = l <= 1 ? 1 : J(u / l, 0, 1, Pt), f = l <= 1 ? 1 : J(h / l, 0, 1, Pt);
                r = Mt(r, {
                    $prev_pageview_last_scroll: o,
                    $prev_pageview_last_scroll_percentage: d,
                    $prev_pageview_max_scroll: a,
                    $prev_pageview_max_scroll_percentage: v,
                    $prev_pageview_last_content: u,
                    $prev_pageview_last_content_percentage: c,
                    $prev_pageview_max_content: h,
                    $prev_pageview_max_content_percentage: f
                });
            }
        }
        return e.pathname && (r.$prev_pageview_pathname = e.pathname), e.timestamp && (r.$prev_pageview_duration = (t.getTime() - e.timestamp.getTime()) / 1e3), r;
    }
    constructor(t){
        this._instance = t;
    }
}
var xs = Uint8Array, $s = Uint16Array, Ss = Uint32Array, Es = new xs([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    0,
    0,
    0
]), ks = new xs([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    0,
    0
]), Ps = new xs([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]), Ts = function(t, i) {
    for(var e = new $s(31), r = 0; r < 31; ++r)e[r] = i += 1 << t[r - 1];
    var s = new Ss(e[30]);
    for(r = 1; r < 30; ++r)for(var n = e[r]; n < e[r + 1]; ++n)s[n] = n - e[r] << 5 | r;
    return [
        e,
        s
    ];
}, Is = Ts(Es, 2), Rs = Is[0], Cs = Is[1];
Rs[28] = 258, Cs[258] = 28;
for(var Os = Ts(ks, 0)[1], Fs = new $s(32768), Ms = 0; Ms < 32768; ++Ms){
    var As = (43690 & Ms) >>> 1 | (21845 & Ms) << 1;
    As = (61680 & (As = (52428 & As) >>> 2 | (13107 & As) << 2)) >>> 4 | (3855 & As) << 4, Fs[Ms] = ((65280 & As) >>> 8 | (255 & As) << 8) >>> 1;
}
var Ds = function(t, i, e) {
    for(var r = t.length, s = 0, n = new $s(i); s < r; ++s)++n[t[s] - 1];
    var o, a = new $s(i);
    for(s = 0; s < i; ++s)a[s] = a[s - 1] + n[s - 1] << 1;
    if (e) {
        o = new $s(1 << i);
        var l = 15 - i;
        for(s = 0; s < r; ++s)if (t[s]) for(var u = s << 4 | t[s], h = i - t[s], d = a[t[s] - 1]++ << h, v = d | (1 << h) - 1; d <= v; ++d)o[Fs[d] >>> l] = u;
    } else for(o = new $s(r), s = 0; s < r; ++s)o[s] = Fs[a[t[s] - 1]++] >>> 15 - t[s];
    return o;
}, js = new xs(288);
for(Ms = 0; Ms < 144; ++Ms)js[Ms] = 8;
for(Ms = 144; Ms < 256; ++Ms)js[Ms] = 9;
for(Ms = 256; Ms < 280; ++Ms)js[Ms] = 7;
for(Ms = 280; Ms < 288; ++Ms)js[Ms] = 8;
var Ls = new xs(32);
for(Ms = 0; Ms < 32; ++Ms)Ls[Ms] = 5;
var Ns = Ds(js, 9, 0), Us = Ds(Ls, 5, 0), zs = function(t) {
    return (t / 8 >> 0) + (7 & t && 1);
}, Hs = function(t, i, e) {
    (null == e || e > t.length) && (e = t.length);
    var r = new (t instanceof $s ? $s : t instanceof Ss ? Ss : xs)(e - i);
    return r.set(t.subarray(i, e)), r;
}, Bs = function(t, i, e) {
    e <<= 7 & i;
    var r = i / 8 >> 0;
    t[r] |= e, t[r + 1] |= e >>> 8;
}, qs = function(t, i, e) {
    e <<= 7 & i;
    var r = i / 8 >> 0;
    t[r] |= e, t[r + 1] |= e >>> 8, t[r + 2] |= e >>> 16;
}, Ws = function(t, i) {
    for(var e = [], r = 0; r < t.length; ++r)t[r] && e.push({
        s: r,
        f: t[r]
    });
    var s = e.length, n = e.slice();
    if (!s) return [
        new xs(0),
        0
    ];
    if (1 == s) {
        var o = new xs(e[0].s + 1);
        return o[e[0].s] = 1, [
            o,
            1
        ];
    }
    e.sort(function(t, i) {
        return t.f - i.f;
    }), e.push({
        s: -1,
        f: 25001
    });
    var a = e[0], l = e[1], u = 0, h = 1, d = 2;
    for(e[0] = {
        s: -1,
        f: a.f + l.f,
        l: a,
        r: l
    }; h != s - 1;)a = e[e[u].f < e[d].f ? u++ : d++], l = e[u != h && e[u].f < e[d].f ? u++ : d++], e[h++] = {
        s: -1,
        f: a.f + l.f,
        l: a,
        r: l
    };
    var v = n[0].s;
    for(r = 1; r < s; ++r)n[r].s > v && (v = n[r].s);
    var c = new $s(v + 1), f = Gs(e[h - 1], c, 0);
    if (f > i) {
        r = 0;
        var p = 0, g = f - i, _ = 1 << g;
        for(n.sort(function(t, i) {
            return c[i.s] - c[t.s] || t.f - i.f;
        }); r < s; ++r){
            var m = n[r].s;
            if (!(c[m] > i)) break;
            p += _ - (1 << f - c[m]), c[m] = i;
        }
        for(p >>>= g; p > 0;){
            var y = n[r].s;
            c[y] < i ? p -= 1 << i - c[y]++ - 1 : ++r;
        }
        for(; r >= 0 && p; --r){
            var b = n[r].s;
            c[b] == i && (--c[b], ++p);
        }
        f = i;
    }
    return [
        new xs(c),
        f
    ];
}, Gs = function(t, i, e) {
    return -1 == t.s ? Math.max(Gs(t.l, i, e + 1), Gs(t.r, i, e + 1)) : i[t.s] = e;
}, Vs = function(t) {
    for(var i = t.length; i && !t[--i];);
    for(var e = new $s(++i), r = 0, s = t[0], n = 1, o = function(t) {
        e[r++] = t;
    }, a = 1; a <= i; ++a)if (t[a] == s && a != i) ++n;
    else {
        if (!s && n > 2) {
            for(; n > 138; n -= 138)o(32754);
            n > 2 && (o(n > 10 ? n - 11 << 5 | 28690 : n - 3 << 5 | 12305), n = 0);
        } else if (n > 3) {
            for(o(s), --n; n > 6; n -= 6)o(8304);
            n > 2 && (o(n - 3 << 5 | 8208), n = 0);
        }
        for(; n--;)o(s);
        n = 1, s = t[a];
    }
    return [
        e.subarray(0, r),
        i
    ];
}, Js = function(t, i) {
    for(var e = 0, r = 0; r < i.length; ++r)e += t[r] * i[r];
    return e;
}, Ks = function(t, i, e) {
    var r = e.length, s = zs(i + 2);
    t[s] = 255 & r, t[s + 1] = r >>> 8, t[s + 2] = 255 ^ t[s], t[s + 3] = 255 ^ t[s + 1];
    for(var n = 0; n < r; ++n)t[s + n + 4] = e[n];
    return 8 * (s + 4 + r);
}, Ys = function(t, i, e, r, s, n, o, a, l, u, h) {
    Bs(i, h++, e), ++s[256];
    for(var d = Ws(s, 15), v = d[0], c = d[1], f = Ws(n, 15), p = f[0], g = f[1], _ = Vs(v), m = _[0], y = _[1], b = Vs(p), w = b[0], x = b[1], S = new $s(19), E = 0; E < m.length; ++E)S[31 & m[E]]++;
    for(E = 0; E < w.length; ++E)S[31 & w[E]]++;
    for(var k = Ws(S, 7), P = k[0], T = k[1], I = 19; I > 4 && !P[Ps[I - 1]]; --I);
    var R, C, O, F, M = u + 5 << 3, A = Js(s, js) + Js(n, Ls) + o, D = Js(s, v) + Js(n, p) + o + 14 + 3 * I + Js(S, P) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
    if (M <= A && M <= D) return Ks(i, h, t.subarray(l, l + u));
    if (Bs(i, h, 1 + (D < A)), h += 2, D < A) {
        R = Ds(v, c, 0), C = v, O = Ds(p, g, 0), F = p;
        var j = Ds(P, T, 0);
        Bs(i, h, y - 257), Bs(i, h + 5, x - 1), Bs(i, h + 10, I - 4), h += 14;
        for(E = 0; E < I; ++E)Bs(i, h + 3 * E, P[Ps[E]]);
        h += 3 * I;
        for(var L = [
            m,
            w
        ], N = 0; N < 2; ++N){
            var U = L[N];
            for(E = 0; E < U.length; ++E){
                var z = 31 & U[E];
                Bs(i, h, j[z]), h += P[z], z > 15 && (Bs(i, h, U[E] >>> 5 & 127), h += U[E] >>> 12);
            }
        }
    } else R = Ns, C = js, O = Us, F = Ls;
    for(E = 0; E < a; ++E)if (r[E] > 255) {
        z = r[E] >>> 18 & 31;
        qs(i, h, R[z + 257]), h += C[z + 257], z > 7 && (Bs(i, h, r[E] >>> 23 & 31), h += Es[z]);
        var H = 31 & r[E];
        qs(i, h, O[H]), h += F[H], H > 3 && (qs(i, h, r[E] >>> 5 & 8191), h += ks[H]);
    } else qs(i, h, R[r[E]]), h += C[r[E]];
    return qs(i, h, R[256]), h + C[256];
}, Xs = new Ss([
    65540,
    131080,
    131088,
    131104,
    262176,
    1048704,
    1048832,
    2114560,
    2117632
]), Qs = function() {
    for(var t = new Ss(256), i = 0; i < 256; ++i){
        for(var e = i, r = 9; --r;)e = (1 & e && 3988292384) ^ e >>> 1;
        t[i] = e;
    }
    return t;
}(), Zs = function(t, i, e, r, s) {
    return function(t, i, e, r, s, n) {
        var o = t.length, a = new xs(r + o + 5 * (1 + Math.floor(o / 7e3)) + s), l = a.subarray(r, a.length - s), u = 0;
        if (!i || o < 8) for(var h = 0; h <= o; h += 65535){
            var d = h + 65535;
            d < o ? u = Ks(l, u, t.subarray(h, d)) : (l[h] = n, u = Ks(l, u, t.subarray(h, o)));
        }
        else {
            for(var v = Xs[i - 1], c = v >>> 13, f = 8191 & v, p = (1 << e) - 1, g = new $s(32768), _ = new $s(p + 1), m = Math.ceil(e / 3), y = 2 * m, b = function(i) {
                return (t[i] ^ t[i + 1] << m ^ t[i + 2] << y) & p;
            }, w = new Ss(25e3), x = new $s(288), S = new $s(32), E = 0, k = 0, P = (h = 0, 0), T = 0, I = 0; h < o; ++h){
                var R = b(h), C = 32767 & h, O = _[R];
                if (g[C] = O, _[R] = C, T <= h) {
                    var F = o - h;
                    if ((E > 7e3 || P > 24576) && F > 423) {
                        u = Ys(t, l, 0, w, x, S, k, P, I, h - I, u), P = E = k = 0, I = h;
                        for(var M = 0; M < 286; ++M)x[M] = 0;
                        for(M = 0; M < 30; ++M)S[M] = 0;
                    }
                    var A = 2, D = 0, j = f, L = C - O & 32767;
                    if (F > 2 && R == b(h - L)) for(var N = Math.min(c, F) - 1, U = Math.min(32767, h), z = Math.min(258, F); L <= U && --j && C != O;){
                        if (t[h + A] == t[h + A - L]) {
                            for(var H = 0; H < z && t[h + H] == t[h + H - L]; ++H);
                            if (H > A) {
                                if (A = H, D = L, H > N) break;
                                var B = Math.min(L, H - 2), q = 0;
                                for(M = 0; M < B; ++M){
                                    var W = h - L + M + 32768 & 32767, G = W - g[W] + 32768 & 32767;
                                    G > q && (q = G, O = W);
                                }
                            }
                        }
                        L += (C = O) - (O = g[C]) + 32768 & 32767;
                    }
                    if (D) {
                        w[P++] = 268435456 | Cs[A] << 18 | Os[D];
                        var V = 31 & Cs[A], J = 31 & Os[D];
                        k += Es[V] + ks[J], ++x[257 + V], ++S[J], T = h + A, ++E;
                    } else w[P++] = t[h], ++x[t[h]];
                }
            }
            u = Ys(t, l, n, w, x, S, k, P, I, h - I, u);
        }
        return Hs(a, 0, r + zs(u) + s);
    }(t, null == i.level ? 6 : i.level, null == i.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + i.mem, e, r, !0);
}, tn = function(t, i, e) {
    for(; e; ++i)t[i] = e, e >>>= 8;
};
function en(t, i) {
    void 0 === i && (i = {});
    var e = function() {
        var t = 4294967295;
        return {
            p: function(i) {
                for(var e = t, r = 0; r < i.length; ++r)e = Qs[255 & e ^ i[r]] ^ e >>> 8;
                t = e;
            },
            d: function() {
                return 4294967295 ^ t;
            }
        };
    }(), r = t.length;
    e.p(t);
    var s, n = Zs(t, i, 10 + ((s = i).filename && s.filename.length + 1 || 0), 8), o = n.length;
    return function(t, i) {
        var e = i.filename;
        if (t[0] = 31, t[1] = 139, t[2] = 8, t[8] = i.level < 2 ? 4 : 9 == i.level ? 2 : 0, t[9] = 3, 0 != i.mtime && tn(t, 4, Math.floor(new Date(i.mtime || Date.now()) / 1e3)), e) {
            t[3] = 8;
            for(var r = 0; r <= e.length; ++r)t[r + 10] = e.charCodeAt(r);
        }
    }(n, i), tn(n, o - 8, e.d()), tn(n, o - 4, r), n;
}
var rn = function(t) {
    var i, e, r, s, n = "";
    for(i = e = 0, r = (t = (t + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, s = 0; s < r; s++){
        var o = t.charCodeAt(s), a = null;
        o < 128 ? e++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), D(a) || (e > i && (n += t.substring(i, e)), n += a, i = e = s + 1);
    }
    return e > i && (n += t.substring(i, t.length)), n;
}, sn = !!u || !!l, nn = "text/plain", on = function(t, i, e) {
    var r;
    void 0 === e && (e = !0);
    var [s, n] = t.split("?"), o = g({}, i), a = null !== (r = null == n ? void 0 : n.split("&").map((t)=>{
        var i, [r, s] = t.split("="), n = e && null !== (i = o[r]) && void 0 !== i ? i : s;
        return delete o[r], r + "=" + n;
    })) && void 0 !== r ? r : [], l = oe(o);
    return l && a.push(l), s + "?" + a.join("&");
}, an = (t, i)=>JSON.stringify(t, (t, i)=>"bigint" == typeof i ? i.toString() : i, i), ln = (t)=>{
    var { data: i, compression: e } = t;
    if (i) {
        if (e === re.GZipJS) {
            var r = en(function(t, i) {
                var e = t.length;
                if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(t);
                for(var r = new xs(t.length + (t.length >>> 1)), s = 0, n = function(t) {
                    r[s++] = t;
                }, o = 0; o < e; ++o){
                    if (s + 5 > r.length) {
                        var a = new xs(s + 8 + (e - o << 1));
                        a.set(r), r = a;
                    }
                    var l = t.charCodeAt(o);
                    l < 128 || i ? n(l) : l < 2048 ? (n(192 | l >>> 6), n(128 | 63 & l)) : l > 55295 && l < 57344 ? (n(240 | (l = 65536 + (1047552 & l) | 1023 & t.charCodeAt(++o)) >>> 18), n(128 | l >>> 12 & 63), n(128 | l >>> 6 & 63), n(128 | 63 & l)) : (n(224 | l >>> 12), n(128 | l >>> 6 & 63), n(128 | 63 & l));
                }
                return Hs(r, 0, s);
            }(an(i)), {
                mtime: 0
            }), s = new Blob([
                r
            ], {
                type: nn
            });
            return {
                contentType: nn,
                body: s,
                estimatedSize: s.size
            };
        }
        if (e === re.Base64) {
            var n = function(t) {
                var i, e, r, s, n, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = 0, l = 0, u = "", h = [];
                if (!t) return t;
                t = rn(t);
                do {
                    i = (n = t.charCodeAt(a++) << 16 | t.charCodeAt(a++) << 8 | t.charCodeAt(a++)) >> 18 & 63, e = n >> 12 & 63, r = n >> 6 & 63, s = 63 & n, h[l++] = o.charAt(i) + o.charAt(e) + o.charAt(r) + o.charAt(s);
                }while (a < t.length)
                switch(u = h.join(""), t.length % 3){
                    case 1:
                        u = u.slice(0, -2) + "==";
                        break;
                    case 2:
                        u = u.slice(0, -1) + "=";
                }
                return u;
            }(an(i)), o = ((t)=>"data=" + encodeURIComponent("string" == typeof t ? t : an(t)))(n);
            return {
                contentType: "application/x-www-form-urlencoded",
                body: o,
                estimatedSize: new Blob([
                    o
                ]).size
            };
        }
        var a = an(i);
        return {
            contentType: "application/json",
            body: a,
            estimatedSize: new Blob([
                a
            ]).size
        };
    }
}, un = [];
l && un.push({
    transport: "fetch",
    method: (t)=>{
        var i, e, { contentType: r, body: s, estimatedSize: n } = null !== (i = ln(t)) && void 0 !== i ? i : {}, o = new Headers;
        Ft(t.headers, function(t, i) {
            o.append(i, t);
        }), r && o.append("Content-Type", r);
        var a = t.url, u = null;
        if (h) {
            var d = new h;
            u = {
                signal: d.signal,
                timeout: setTimeout(()=>d.abort(), t.timeout)
            };
        }
        l(a, g({
            method: (null == t ? void 0 : t.method) || "GET",
            headers: o,
            keepalive: "POST" === t.method && (n || 0) < 52428.8,
            body: s,
            signal: null == (e = u) ? void 0 : e.signal
        }, t.fetchOptions)).then((i)=>i.text().then((e)=>{
                var r = {
                    statusCode: i.status,
                    text: e
                };
                if (200 === i.status) try {
                    r.json = JSON.parse(e);
                } catch (t) {
                    Pt.error(t);
                }
                null == t.callback || t.callback(r);
            })).catch((i)=>{
            Pt.error(i), null == t.callback || t.callback({
                statusCode: 0,
                text: i
            });
        }).finally(()=>u ? clearTimeout(u.timeout) : null);
    }
}), u && un.push({
    transport: "XHR",
    method: (t)=>{
        var i, e = new u;
        e.open(t.method || "GET", t.url, !0);
        var { contentType: r, body: s } = null !== (i = ln(t)) && void 0 !== i ? i : {};
        Ft(t.headers, function(t, i) {
            e.setRequestHeader(i, t);
        }), r && e.setRequestHeader("Content-Type", r), t.timeout && (e.timeout = t.timeout), t.disableXHRCredentials || (e.withCredentials = !0), e.onreadystatechange = ()=>{
            if (4 === e.readyState) {
                var i = {
                    statusCode: e.status,
                    text: e.responseText
                };
                if (200 === e.status) try {
                    i.json = JSON.parse(e.responseText);
                } catch (t) {}
                null == t.callback || t.callback(i);
            }
        }, e.send(s);
    }
}), null != n && n.sendBeacon && un.push({
    transport: "sendBeacon",
    method: (t)=>{
        var i = on(t.url, {
            beacon: "1"
        });
        try {
            var e, { contentType: r, body: s } = null !== (e = ln(t)) && void 0 !== e ? e : {}, o = "string" == typeof s ? new Blob([
                s
            ], {
                type: r
            }) : s;
            n.sendBeacon(i, o);
        } catch (t) {}
    }
});
var hn = function(t, i) {
    if (!function(t) {
        try {
            new RegExp(t);
        } catch (t) {
            return !1;
        }
        return !0;
    }(i)) return !1;
    try {
        return new RegExp(i).test(t);
    } catch (t) {
        return !1;
    }
};
function dn(t, i, e) {
    return an({
        distinct_id: t,
        userPropertiesToSet: i,
        userPropertiesToSetOnce: e
    });
}
var vn = {
    exact: (t, i)=>i.some((i)=>t.some((t)=>i === t)),
    is_not: (t, i)=>i.every((i)=>t.every((t)=>i !== t)),
    regex: (t, i)=>i.some((i)=>t.some((t)=>hn(i, t))),
    not_regex: (t, i)=>i.every((i)=>t.every((t)=>!hn(i, t))),
    icontains: (t, i)=>i.map(cn).some((i)=>t.map(cn).some((t)=>i.includes(t))),
    not_icontains: (t, i)=>i.map(cn).every((i)=>t.map(cn).every((t)=>!i.includes(t)))
}, cn = (t)=>t.toLowerCase(), fn = Tt("[Error tracking]");
class pn {
    onRemoteConfig(t) {
        var i, e, r, s = null !== (i = null == (e = t.errorTracking) ? void 0 : e.suppressionRules) && void 0 !== i ? i : [], n = null == (r = t.errorTracking) ? void 0 : r.captureExtensionExceptions;
        this.Jt = s, this._instance.persistence && this._instance.persistence.register({
            [Xt]: this.Jt,
            [Qt]: n
        });
    }
    get Yt() {
        var t, i = !!this._instance.get_property(Qt), e = this._instance.config.error_tracking.captureExtensionExceptions;
        return null !== (t = null != e ? e : i) && void 0 !== t && t;
    }
    buildProperties(t, i) {
        return this.Kt.buildFromUnknown(t, {
            syntheticException: null == i ? void 0 : i.syntheticException,
            mechanism: {
                handled: null == i ? void 0 : i.handled
            }
        });
    }
    sendExceptionEvent(t) {
        var i = t.$exception_list;
        if (this.Xt(i)) {
            if (this.Qt(i)) return void fn.info("Skipping exception capture because a suppression rule matched");
            if (!this.Yt && this.Zt(i)) return void fn.info("Skipping exception capture because it was thrown by an extension");
            if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.ti(i)) return void fn.info("Skipping exception capture because it was thrown by the PostHog SDK");
        }
        return this._instance.capture("$exception", t, {
            _noTruncate: !0,
            _batchKey: "exceptionEvent"
        });
    }
    Qt(t) {
        if (0 === t.length) return !1;
        var i = t.reduce((t, i)=>{
            var { type: e, value: r } = i;
            return M(e) && e.length > 0 && t.$exception_types.push(e), M(r) && r.length > 0 && t.$exception_values.push(r), t;
        }, {
            $exception_types: [],
            $exception_values: []
        });
        return this.Jt.some((t)=>{
            var e = t.values.map((t)=>{
                var e, r = vn[t.operator], s = I(t.value) ? t.value : [
                    t.value
                ], n = null !== (e = i[t.key]) && void 0 !== e ? e : [];
                return s.length > 0 && r(s, n);
            });
            return "OR" === t.type ? e.some(Boolean) : e.every(Boolean);
        });
    }
    Zt(t) {
        return t.flatMap((t)=>{
            var i, e;
            return null !== (i = null == (e = t.stacktrace) ? void 0 : e.frames) && void 0 !== i ? i : [];
        }).some((t)=>t.filename && t.filename.startsWith("chrome-extension://"));
    }
    ti(t) {
        if (t.length > 0) {
            var i, e, r, s, n = null !== (i = null == (e = t[0].stacktrace) ? void 0 : e.frames) && void 0 !== i ? i : [], o = n[n.length - 1];
            return null !== (r = null == o || null == (s = o.filename) ? void 0 : s.includes("posthog.com/static")) && void 0 !== r && r;
        }
        return !1;
    }
    Xt(t) {
        return !j(t) && I(t);
    }
    constructor(t){
        var i, e;
        this.Jt = [], this.Kt = new ft([
            new pt,
            new Et,
            new _t,
            new gt,
            new $t,
            new xt,
            new yt,
            new St
        ], [
            at,
            ht
        ]), this._instance = t, this.Jt = null !== (i = null == (e = this._instance.persistence) ? void 0 : e.get_property(Xt)) && void 0 !== i ? i : [];
    }
}
var gn = Tt("[FeatureFlags]"), _n = "$active_feature_flags", mn = "$override_feature_flags", yn = "$feature_flag_payloads", bn = "$override_feature_flag_payloads", wn = "$feature_flag_request_id", xn = (t)=>{
    var i = {};
    for (var [e, r] of Dt(t || {}))r && (i[e] = r);
    return i;
}, $n = (t)=>{
    var i = t.flags;
    return i ? (t.featureFlags = Object.fromEntries(Object.keys(i).map((t)=>{
        var e;
        return [
            t,
            null !== (e = i[t].variant) && void 0 !== e ? e : i[t].enabled
        ];
    })), t.featureFlagPayloads = Object.fromEntries(Object.keys(i).filter((t)=>i[t].enabled).filter((t)=>{
        var e;
        return null == (e = i[t].metadata) ? void 0 : e.payload;
    }).map((t)=>{
        var e;
        return [
            t,
            null == (e = i[t].metadata) ? void 0 : e.payload
        ];
    }))) : gn.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), t;
}, Sn = function(t) {
    return t.FeatureFlags = "feature_flags", t.Recordings = "recordings", t;
}({});
class En {
    li() {
        var t = this._instance.config.evaluation_environments;
        return null != t && t.length ? t.filter((t)=>{
            var i = t && "string" == typeof t && t.trim().length > 0;
            return i || gn.error("Invalid evaluation environment found:", t, "Expected non-empty string"), i;
        }) : [];
    }
    ui() {
        return this.li().length > 0;
    }
    flags() {
        if (this._instance.config.__preview_remote_config) this.oi = !0;
        else {
            var t = !this.hi && (this._instance.config.advanced_disable_feature_flags || this._instance.config.advanced_disable_feature_flags_on_first_load);
            this.di({
                disableFlags: t
            });
        }
    }
    get hasLoadedFlags() {
        return this.ei;
    }
    getFlags() {
        return Object.keys(this.getFlagVariants());
    }
    getFlagsWithDetails() {
        var t = this._instance.get_property(ai), i = this._instance.get_property(mn), e = this._instance.get_property(bn);
        if (!e && !i) return t || {};
        var r = Mt({}, t || {}), s = [
            ...new Set([
                ...Object.keys(e || {}),
                ...Object.keys(i || {})
            ])
        ];
        for (var n of s){
            var o, a, l = r[n], u = null == i ? void 0 : i[n], h = F(u) ? null !== (o = null == l ? void 0 : l.enabled) && void 0 !== o && o : !!u, d = F(u) ? l.variant : "string" == typeof u ? u : void 0, v = null == e ? void 0 : e[n], c = g({}, l, {
                enabled: h,
                variant: h ? null != d ? d : null == l ? void 0 : l.variant : void 0
            });
            if (h !== (null == l ? void 0 : l.enabled) && (c.original_enabled = null == l ? void 0 : l.enabled), d !== (null == l ? void 0 : l.variant) && (c.original_variant = null == l ? void 0 : l.variant), v) c.metadata = g({}, null == l ? void 0 : l.metadata, {
                payload: v,
                original_payload: null == l || null == (a = l.metadata) ? void 0 : a.payload
            });
            r[n] = c;
        }
        return this.ii || (gn.warn(" Overriding feature flag details!", {
            flagDetails: t,
            overriddenPayloads: e,
            finalDetails: r
        }), this.ii = !0), r;
    }
    getFlagVariants() {
        var t = this._instance.get_property(ni), i = this._instance.get_property(mn);
        if (!i) return t || {};
        for(var e = Mt({}, t), r = Object.keys(i), s = 0; s < r.length; s++)e[r[s]] = i[r[s]];
        return this.ii || (gn.warn(" Overriding feature flags!", {
            enabledFlags: t,
            overriddenFlags: i,
            finalFlags: e
        }), this.ii = !0), e;
    }
    getFlagPayloads() {
        var t = this._instance.get_property(yn), i = this._instance.get_property(bn);
        if (!i) return t || {};
        for(var e = Mt({}, t || {}), r = Object.keys(i), s = 0; s < r.length; s++)e[r[s]] = i[r[s]];
        return this.ii || (gn.warn(" Overriding feature flag payloads!", {
            flagPayloads: t,
            overriddenPayloads: i,
            finalPayloads: e
        }), this.ii = !0), e;
    }
    reloadFeatureFlags() {
        this.si || this._instance.config.advanced_disable_feature_flags || this.hi || (this.hi = setTimeout(()=>{
            this.di();
        }, 5));
    }
    vi() {
        clearTimeout(this.hi), this.hi = void 0;
    }
    ensureFlagsLoaded() {
        this.ei || this.ri || this.hi || this.reloadFeatureFlags();
    }
    setAnonymousDistinctId(t) {
        this.$anon_distinct_id = t;
    }
    setReloadingPaused(t) {
        this.si = t;
    }
    di(t) {
        var i;
        if (this.vi(), !this._instance.M()) if (this.ri) this.ni = !0;
        else {
            var e = {
                token: this._instance.config.token,
                distinct_id: this._instance.get_distinct_id(),
                groups: this._instance.getGroups(),
                $anon_distinct_id: this.$anon_distinct_id,
                person_properties: g({}, (null == (i = this._instance.persistence) ? void 0 : i.get_initial_props()) || {}, this._instance.get_property(li) || {}),
                group_properties: this._instance.get_property(ui)
            };
            (null != t && t.disableFlags || this._instance.config.advanced_disable_feature_flags) && (e.disable_flags = !0), this.ui() && (e.evaluation_environments = this.li());
            var r = this._instance.config.__preview_remote_config, s = r ? "/flags/?v=2" : "/flags/?v=2&config=true", n = this._instance.config.advanced_only_evaluate_survey_feature_flags ? "&only_evaluate_survey_feature_flags=true" : "", o = this._instance.requestRouter.endpointFor("flags", s + n);
            r && (e.timezone = vs()), this.ri = !0, this._instance.ci({
                method: "POST",
                url: o,
                data: e,
                compression: this._instance.config.disable_compression ? void 0 : re.Base64,
                timeout: this._instance.config.feature_flag_request_timeout_ms,
                callback: (t)=>{
                    var i, r, s = !0;
                    (200 === t.statusCode && (this.ni || (this.$anon_distinct_id = void 0), s = !1), this.ri = !1, this.oi) || (this.oi = !0, this._instance.fi(null !== (r = t.json) && void 0 !== r ? r : {}));
                    if (!e.disable_flags || this.ni) if (this.ai = !s, t.json && null != (i = t.json.quotaLimited) && i.includes(Sn.FeatureFlags)) gn.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.");
                    else {
                        var n;
                        if (!e.disable_flags) this.receivedFeatureFlags(null !== (n = t.json) && void 0 !== n ? n : {}, s);
                        this.ni && (this.ni = !1, this.di());
                    }
                }
            });
        }
    }
    getFeatureFlag(t, i) {
        if (void 0 === i && (i = {}), this.ei || this.getFlags() && this.getFlags().length > 0) {
            var e = this.getFlagVariants()[t], r = "" + e, s = this._instance.get_property(wn) || void 0, n = this._instance.get_property(vi) || {};
            if ((i.send_event || !("send_event" in i)) && (!(t in n) || !n[t].includes(r))) {
                var o, a, l, u, h, d, v, c, f;
                I(n[t]) ? n[t].push(r) : n[t] = [
                    r
                ], null == (o = this._instance.persistence) || o.register({
                    [vi]: n
                });
                var p = this.getFeatureFlagDetails(t), g = {
                    $feature_flag: t,
                    $feature_flag_response: e,
                    $feature_flag_payload: this.getFeatureFlagPayload(t) || null,
                    $feature_flag_request_id: s,
                    $feature_flag_bootstrapped_response: (null == (a = this._instance.config.bootstrap) || null == (a = a.featureFlags) ? void 0 : a[t]) || null,
                    $feature_flag_bootstrapped_payload: (null == (l = this._instance.config.bootstrap) || null == (l = l.featureFlagPayloads) ? void 0 : l[t]) || null,
                    $used_bootstrap_value: !this.ai
                };
                F(null == p || null == (u = p.metadata) ? void 0 : u.version) || (g.$feature_flag_version = p.metadata.version);
                var _, m = null !== (h = null == p || null == (d = p.reason) ? void 0 : d.description) && void 0 !== h ? h : null == p || null == (v = p.reason) ? void 0 : v.code;
                if (m && (g.$feature_flag_reason = m), null != p && null != (c = p.metadata) && c.id && (g.$feature_flag_id = p.metadata.id), F(null == p ? void 0 : p.original_variant) && F(null == p ? void 0 : p.original_enabled) || (g.$feature_flag_original_response = F(p.original_variant) ? p.original_enabled : p.original_variant), null != p && null != (f = p.metadata) && f.original_payload) g.$feature_flag_original_payload = null == p || null == (_ = p.metadata) ? void 0 : _.original_payload;
                this._instance.capture("$feature_flag_called", g);
            }
            return e;
        }
        gn.warn('getFeatureFlag for key "' + t + "\" failed. Feature flags didn't load in time.");
    }
    getFeatureFlagDetails(t) {
        return this.getFlagsWithDetails()[t];
    }
    getFeatureFlagPayload(t) {
        return this.getFlagPayloads()[t];
    }
    getRemoteConfigPayload(t, i) {
        var e = this._instance.config.token, r = {
            distinct_id: this._instance.get_distinct_id(),
            token: e
        };
        this.ui() && (r.evaluation_environments = this.li()), this._instance.ci({
            method: "POST",
            url: this._instance.requestRouter.endpointFor("flags", "/flags/?v=2&config=true"),
            data: r,
            compression: this._instance.config.disable_compression ? void 0 : re.Base64,
            timeout: this._instance.config.feature_flag_request_timeout_ms,
            callback: (e)=>{
                var r, s = null == (r = e.json) ? void 0 : r.featureFlagPayloads;
                i((null == s ? void 0 : s[t]) || void 0);
            }
        });
    }
    isFeatureEnabled(t, i) {
        if (void 0 === i && (i = {}), this.ei || this.getFlags() && this.getFlags().length > 0) {
            var e = this.getFeatureFlag(t, i);
            return F(e) ? void 0 : !!e;
        }
        gn.warn('isFeatureEnabled for key "' + t + "\" failed. Feature flags didn't load in time.");
    }
    addFeatureFlagsHandler(t) {
        this.featureFlagEventHandlers.push(t);
    }
    removeFeatureFlagsHandler(t) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((i)=>i !== t);
    }
    receivedFeatureFlags(t, i) {
        if (this._instance.persistence) {
            this.ei = !0;
            var e = this.getFlagVariants(), r = this.getFlagPayloads(), s = this.getFlagsWithDetails();
            !function(t, i, e, r, s) {
                void 0 === e && (e = {}), void 0 === r && (r = {}), void 0 === s && (s = {});
                var n = $n(t), o = n.flags, a = n.featureFlags, l = n.featureFlagPayloads;
                if (a) {
                    var u = t.requestId;
                    if (I(a)) {
                        gn.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
                        var h = {};
                        if (a) for(var d = 0; d < a.length; d++)h[a[d]] = !0;
                        i && i.register({
                            [_n]: a,
                            [ni]: h
                        });
                    } else {
                        var v = a, c = l, f = o;
                        t.errorsWhileComputingFlags && (v = g({}, e, v), c = g({}, r, c), f = g({}, s, f)), i && i.register(g({
                            [_n]: Object.keys(xn(v)),
                            [ni]: v || {},
                            [yn]: c || {},
                            [ai]: f || {}
                        }, u ? {
                            [wn]: u
                        } : {}));
                    }
                }
            }(t, this._instance.persistence, e, r, s), this.pi(i);
        }
    }
    override(t, i) {
        void 0 === i && (i = !1), gn.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
            flags: t,
            suppressWarning: i
        });
    }
    overrideFeatureFlags(t) {
        if (!this._instance.__loaded || !this._instance.persistence) return gn.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags");
        if (!1 === t) return this._instance.persistence.unregister(mn), this._instance.persistence.unregister(bn), void this.pi();
        if (t && "object" == typeof t && ("flags" in t || "payloads" in t)) {
            var i, e = t;
            if (this.ii = Boolean(null !== (i = e.suppressWarning) && void 0 !== i && i), "flags" in e) {
                if (!1 === e.flags) this._instance.persistence.unregister(mn);
                else if (e.flags) if (I(e.flags)) {
                    for(var r = {}, s = 0; s < e.flags.length; s++)r[e.flags[s]] = !0;
                    this._instance.persistence.register({
                        [mn]: r
                    });
                } else this._instance.persistence.register({
                    [mn]: e.flags
                });
            }
            return "payloads" in e && (!1 === e.payloads ? this._instance.persistence.unregister(bn) : e.payloads && this._instance.persistence.register({
                [bn]: e.payloads
            })), void this.pi();
        }
        this.pi();
    }
    onFeatureFlags(t) {
        if (this.addFeatureFlagsHandler(t), this.ei) {
            var { flags: i, flagVariants: e } = this.gi();
            t(i, e);
        }
        return ()=>this.removeFeatureFlagsHandler(t);
    }
    updateEarlyAccessFeatureEnrollment(t, i, e) {
        var r, s = (this._instance.get_property(oi) || []).find((i)=>i.flagKey === t), n = {
            ["$feature_enrollment/" + t]: i
        }, o = {
            $feature_flag: t,
            $feature_enrollment: i,
            $set: n
        };
        s && (o.$early_access_feature_name = s.name), e && (o.$feature_enrollment_stage = e), this._instance.capture("$feature_enrollment_update", o), this.setPersonPropertiesForFlags(n, !1);
        var a = g({}, this.getFlagVariants(), {
            [t]: i
        });
        null == (r = this._instance.persistence) || r.register({
            [_n]: Object.keys(xn(a)),
            [ni]: a
        }), this.pi();
    }
    getEarlyAccessFeatures(t, i, e) {
        void 0 === i && (i = !1);
        var r = this._instance.get_property(oi), s = e ? "&" + e.map((t)=>"stage=" + t).join("&") : "";
        if (r && !i) return t(r);
        this._instance.ci({
            url: this._instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=" + this._instance.config.token + s),
            method: "GET",
            callback: (i)=>{
                var e, r;
                if (i.json) {
                    var s = i.json.earlyAccessFeatures;
                    return null == (e = this._instance.persistence) || e.unregister(oi), null == (r = this._instance.persistence) || r.register({
                        [oi]: s
                    }), t(s);
                }
            }
        });
    }
    gi() {
        var t = this.getFlags(), i = this.getFlagVariants();
        return {
            flags: t.filter((t)=>i[t]),
            flagVariants: Object.keys(i).filter((t)=>i[t]).reduce((t, e)=>(t[e] = i[e], t), {})
        };
    }
    pi(t) {
        var { flags: i, flagVariants: e } = this.gi();
        this.featureFlagEventHandlers.forEach((r)=>r(i, e, {
                errorsLoading: t
            }));
    }
    setPersonPropertiesForFlags(t, i) {
        void 0 === i && (i = !0);
        var e = this._instance.get_property(li) || {};
        this._instance.register({
            [li]: g({}, e, t)
        }), i && this._instance.reloadFeatureFlags();
    }
    resetPersonPropertiesForFlags() {
        this._instance.unregister(li);
    }
    setGroupPropertiesForFlags(t, i) {
        void 0 === i && (i = !0);
        var e = this._instance.get_property(ui) || {};
        0 !== Object.keys(e).length && Object.keys(e).forEach((i)=>{
            e[i] = g({}, e[i], t[i]), delete t[i];
        }), this._instance.register({
            [ui]: g({}, e, t)
        }), i && this._instance.reloadFeatureFlags();
    }
    resetGroupPropertiesForFlags(t) {
        if (t) {
            var i = this._instance.get_property(ui) || {};
            this._instance.register({
                [ui]: g({}, i, {
                    [t]: {}
                })
            });
        } else this._instance.unregister(ui);
    }
    reset() {
        this.ei = !1, this.ri = !1, this.si = !1, this.ni = !1, this.oi = !1, this.ai = !1, this.$anon_distinct_id = void 0, this.vi(), this.ii = !1;
    }
    constructor(t){
        this.ii = !1, this.ei = !1, this.ri = !1, this.si = !1, this.ni = !1, this.oi = !1, this.ai = !1, this._instance = t, this.featureFlagEventHandlers = [];
    }
}
var kn = [
    "cookie",
    "localstorage",
    "localstorage+cookie",
    "sessionstorage",
    "memory"
];
class Pn {
    isDisabled() {
        return !!this.wi;
    }
    bi(t) {
        -1 === kn.indexOf(t.persistence.toLowerCase()) && (Pt.critical("Unknown persistence type " + t.persistence + "; falling back to localStorage+cookie"), t.persistence = "localStorage+cookie");
        var i = t.persistence.toLowerCase();
        return "localstorage" === i && Ie.H() ? Ie : "localstorage+cookie" === i && Ce.H() ? Ce : "sessionstorage" === i && Ae.H() ? Ae : "memory" === i ? Fe : "cookie" === i ? Pe : Ce.H() ? Ce : Pe;
    }
    properties() {
        var t = {};
        return Ft(this.props, function(i, e) {
            if (e === ni && C(i)) for(var r = Object.keys(i), n = 0; n < r.length; n++)t["$feature/" + r[n]] = i[r[n]];
            else a = e, l = !1, (D(o = xi) ? l : s && o.indexOf === s ? -1 != o.indexOf(a) : (Ft(o, function(t) {
                if (l || (l = t === a)) return Ct;
            }), l)) || (t[e] = i);
            var o, a, l;
        }), t;
    }
    load() {
        if (!this.wi) {
            var t = this.Y.W(this.yi);
            t && (this.props = Mt({}, t));
        }
    }
    save() {
        this.wi || this.Y.G(this.yi, this.props, this.xi, this.$i, this.Si, this.C.debug);
    }
    remove() {
        this.Y.V(this.yi, !1), this.Y.V(this.yi, !0);
    }
    clear() {
        this.remove(), this.props = {};
    }
    register_once(t, i, e) {
        if (C(t)) {
            F(i) && (i = "None"), this.xi = F(e) ? this.Ei : e;
            var r = !1;
            if (Ft(t, (t, e)=>{
                this.props.hasOwnProperty(e) && this.props[e] !== i || (this.props[e] = t, r = !0);
            }), r) return this.save(), !0;
        }
        return !1;
    }
    register(t, i) {
        if (C(t)) {
            this.xi = F(i) ? this.Ei : i;
            var e = !1;
            if (Ft(t, (i, r)=>{
                t.hasOwnProperty(r) && this.props[r] !== i && (this.props[r] = i, e = !0);
            }), e) return this.save(), !0;
        }
        return !1;
    }
    unregister(t) {
        t in this.props && (delete this.props[t], this.save());
    }
    update_campaign_params() {
        if (!this.mi) {
            var t = ns(this.C.custom_campaign_params, this.C.mask_personal_data_properties, this.C.custom_personal_data_properties);
            O(Nt(t)) || this.register(t), this.mi = !0;
        }
    }
    update_search_keyword() {
        var t;
        this.register((t = null == o ? void 0 : o.referrer) ? as(t) : {});
    }
    update_referrer_info() {
        var t;
        this.register_once({
            $referrer: us(),
            $referring_domain: null != o && o.referrer && (null == (t = ne(o.referrer)) ? void 0 : t.host) || "$direct"
        }, void 0);
    }
    set_initial_person_info() {
        this.props[gi] || this.props[_i] || this.register_once({
            [mi]: hs(this.C.mask_personal_data_properties, this.C.custom_personal_data_properties)
        }, void 0);
    }
    get_initial_props() {
        var t = {};
        Ft([
            _i,
            gi
        ], (i)=>{
            var e = this.props[i];
            e && Ft(e, function(i, e) {
                t["$initial_" + S(e)] = i;
            });
        });
        var i, e, r = this.props[mi];
        if (r) {
            var s = (i = ds(r), e = {}, Ft(i, function(t, i) {
                e["$initial_" + S(i)] = t;
            }), e);
            Mt(t, s);
        }
        return t;
    }
    safe_merge(t) {
        return Ft(this.props, function(i, e) {
            e in t || (t[e] = i);
        }), t;
    }
    update_config(t, i, e) {
        if (this.Ei = this.xi = t.cookie_expiration, this.set_disabled(t.disable_persistence || !!e), this.set_cross_subdomain(t.cross_subdomain_cookie), this.set_secure(t.secure_cookie), t.persistence !== i.persistence) {
            var r = this.bi(t), s = this.props;
            this.clear(), this.Y = r, this.props = s, this.save();
        }
    }
    set_disabled(t) {
        this.wi = t, this.wi ? this.remove() : this.save();
    }
    set_cross_subdomain(t) {
        t !== this.$i && (this.$i = t, this.remove(), this.save());
    }
    set_secure(t) {
        t !== this.Si && (this.Si = t, this.remove(), this.save());
    }
    set_event_timer(t, i) {
        var e = this.props[Vt] || {};
        e[t] = i, this.props[Vt] = e, this.save();
    }
    remove_event_timer(t) {
        var i = (this.props[Vt] || {})[t];
        return F(i) || (delete this.props[Vt][t], this.save()), i;
    }
    get_property(t) {
        return this.props[t];
    }
    set_property(t, i) {
        this.props[t] = i, this.save();
    }
    constructor(t, i){
        this.C = t, this.props = {}, this.mi = !1, this.yi = ((t)=>{
            var i = "";
            return t.token && (i = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), t.persistence_name ? "ph_" + t.persistence_name : "ph_" + i + "_posthog";
        })(t), this.Y = this.bi(t), this.load(), t.debug && Pt.info("Persistence loaded", t.persistence, g({}, this.props)), this.update_config(t, t, i), this.save();
    }
}
var Tn = function(t) {
    return t.Button = "button", t.Tab = "tab", t.Selector = "selector", t;
}({}), In = function(t) {
    return t.TopLeft = "top_left", t.TopRight = "top_right", t.TopCenter = "top_center", t.MiddleLeft = "middle_left", t.MiddleRight = "middle_right", t.MiddleCenter = "middle_center", t.Left = "left", t.Center = "center", t.Right = "right", t.NextToTrigger = "next_to_trigger", t;
}({}), Rn = function(t) {
    return t.Popover = "popover", t.API = "api", t.Widget = "widget", t.ExternalSurvey = "external_survey", t;
}({}), Cn = function(t) {
    return t.Open = "open", t.MultipleChoice = "multiple_choice", t.SingleChoice = "single_choice", t.Rating = "rating", t.Link = "link", t;
}({}), On = function(t) {
    return t.NextQuestion = "next_question", t.End = "end", t.ResponseBased = "response_based", t.SpecificQuestion = "specific_question", t;
}({}), Fn = function(t) {
    return t.Once = "once", t.Recurring = "recurring", t.Always = "always", t;
}({}), Mn = function(t) {
    return t.SHOWN = "survey shown", t.DISMISSED = "survey dismissed", t.SENT = "survey sent", t;
}({}), An = function(t) {
    return t.SURVEY_ID = "$survey_id", t.SURVEY_NAME = "$survey_name", t.SURVEY_RESPONSE = "$survey_response", t.SURVEY_ITERATION = "$survey_iteration", t.SURVEY_ITERATION_START_DATE = "$survey_iteration_start_date", t.SURVEY_PARTIALLY_COMPLETED = "$survey_partially_completed", t.SURVEY_SUBMISSION_ID = "$survey_submission_id", t.SURVEY_QUESTIONS = "$survey_questions", t.SURVEY_COMPLETED = "$survey_completed", t;
}({}), Dn = function(t) {
    return t.Popover = "popover", t.Inline = "inline", t;
}({});
class jn {
    on(t, i) {
        return this.ki[t] || (this.ki[t] = []), this.ki[t].push(i), ()=>{
            this.ki[t] = this.ki[t].filter((t)=>t !== i);
        };
    }
    emit(t, i) {
        for (var e of this.ki[t] || [])e(i);
        for (var r of this.ki["*"] || [])r(t, i);
    }
    constructor(){
        this.ki = {}, this.ki = {};
    }
}
class Ln {
    init() {
        var t;
        if (!F(null == (t = this._instance) ? void 0 : t.Mi)) {
            var i;
            null == (i = this._instance) || i.Mi((t, i)=>{
                this.on(t, i);
            });
        }
    }
    register(t) {
        var i, e;
        if (!F(null == (i = this._instance) ? void 0 : i.Mi) && (t.forEach((t)=>{
            var i, e;
            null == (i = this.Fi) || i.add(t), null == (e = t.steps) || e.forEach((t)=>{
                var i;
                null == (i = this.Oi) || i.add((null == t ? void 0 : t.event) || "");
            });
        }), null != (e = this._instance) && e.autocapture)) {
            var r, s = new Set;
            t.forEach((t)=>{
                var i;
                null == (i = t.steps) || i.forEach((t)=>{
                    null != t && t.selector && s.add(null == t ? void 0 : t.selector);
                });
            }), null == (r = this._instance) || r.autocapture.setElementSelectors(s);
        }
    }
    on(t, i) {
        var e;
        null != i && 0 != t.length && (this.Oi.has(t) || this.Oi.has(null == i ? void 0 : i.event)) && this.Fi && (null == (e = this.Fi) ? void 0 : e.size) > 0 && this.Fi.forEach((t)=>{
            this.Ai(i, t) && this.Pi.emit("actionCaptured", t.name);
        });
    }
    Di(t) {
        this.onAction("actionCaptured", (i)=>t(i));
    }
    Ai(t, i) {
        if (null == (null == i ? void 0 : i.steps)) return !1;
        for (var e of i.steps)if (this.Ti(t, e)) return !0;
        return !1;
    }
    onAction(t, i) {
        return this.Pi.on(t, i);
    }
    Ri(t, i) {
        if (null != i && i.url) {
            var e, r = null == t || null == (e = t.properties) ? void 0 : e.$current_url;
            if (!r || "string" != typeof r) return !1;
            if (!Ln.ji(r, null == i ? void 0 : i.url, (null == i ? void 0 : i.url_matching) || "contains")) return !1;
        }
        return !0;
    }
    static ji(i, e, r) {
        switch(r){
            case "regex":
                return !!t && hn(i, e);
            case "exact":
                return e === i;
            case "contains":
                var s = Ln.Li(e).replace(/_/g, ".").replace(/%/g, ".*");
                return hn(i, s);
            default:
                return !1;
        }
    }
    static Li(t) {
        return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }
    Ci(t, i) {
        if ((null != i && i.href || null != i && i.tag_name || null != i && i.text) && !this.Ni(t).some((t)=>!(null != i && i.href && !Ln.ji(t.href || "", null == i ? void 0 : i.href, (null == i ? void 0 : i.href_matching) || "exact")) && (null == i || !i.tag_name || t.tag_name === (null == i ? void 0 : i.tag_name)) && !(null != i && i.text && !Ln.ji(t.text || "", null == i ? void 0 : i.text, (null == i ? void 0 : i.text_matching) || "exact") && !Ln.ji(t.$el_text || "", null == i ? void 0 : i.text, (null == i ? void 0 : i.text_matching) || "exact")))) return !1;
        if (null != i && i.selector) {
            var e, r = null == t || null == (e = t.properties) ? void 0 : e.$element_selectors;
            if (!r) return !1;
            if (!r.includes(null == i ? void 0 : i.selector)) return !1;
        }
        return !0;
    }
    Ni(t) {
        return null == (null == t ? void 0 : t.properties.$elements) ? [] : null == t ? void 0 : t.properties.$elements;
    }
    constructor(t){
        this.Pi = new jn, this.Ti = (t, i)=>this.Ii(t, i) && this.Ri(t, i) && this.Ci(t, i), this.Ii = (t, i)=>null == i || !i.event || (null == t ? void 0 : t.event) === (null == i ? void 0 : i.event), this._instance = t, this.Oi = new Set, this.Fi = new Set;
    }
}
var Nn = Tt("[Surveys]");
var Un = "seenSurvey_", zn = (t, i)=>{
    var e = "$survey_" + i + "/" + t.id;
    return t.current_iteration && t.current_iteration > 0 && (e = "$survey_" + i + "/" + t.id + "/" + t.current_iteration), e;
}, Hn = (t)=>{
    var i = "" + Un + t.id;
    return t.current_iteration && t.current_iteration > 0 && (i = "" + Un + t.id + "_" + t.current_iteration), i;
}, Bn = [
    Rn.Popover,
    Rn.Widget,
    Rn.API
], qn = {
    ignoreConditions: !1,
    ignoreDelay: !1,
    displayType: Dn.Popover
};
class Wn {
    register(t) {
        var i;
        F(null == (i = this._instance) ? void 0 : i.Mi) || (this.Hi(t), this.Bi(t));
    }
    Bi(t) {
        var i = t.filter((t)=>{
            var i, e;
            return (null == (i = t.conditions) ? void 0 : i.actions) && (null == (e = t.conditions) || null == (e = e.actions) || null == (e = e.values) ? void 0 : e.length) > 0;
        });
        if (0 !== i.length) {
            if (null == this.qi) {
                this.qi = new Ln(this._instance), this.qi.init();
                this.qi.Di((t)=>{
                    this.onAction(t);
                });
            }
            i.forEach((t)=>{
                var i, e, r, s, n;
                t.conditions && null != (i = t.conditions) && i.actions && null != (e = t.conditions) && null != (e = e.actions) && e.values && (null == (r = t.conditions) || null == (r = r.actions) || null == (r = r.values) ? void 0 : r.length) > 0 && (null == (s = this.qi) || s.register(t.conditions.actions.values), null == (n = t.conditions) || null == (n = n.actions) || null == (n = n.values) || n.forEach((i)=>{
                    if (i && i.name) {
                        var e = this.zi.get(i.name);
                        e && e.push(t.id), this.zi.set(i.name, e || [
                            t.id
                        ]);
                    }
                }));
            });
        }
    }
    Hi(t) {
        var i;
        if (0 !== t.filter((t)=>{
            var i, e;
            return (null == (i = t.conditions) ? void 0 : i.events) && (null == (e = t.conditions) || null == (e = e.events) || null == (e = e.values) ? void 0 : e.length) > 0;
        }).length) {
            null == (i = this._instance) || i.Mi((t, i)=>{
                this.onEvent(t, i);
            }), t.forEach((t)=>{
                var i;
                null == (i = t.conditions) || null == (i = i.events) || null == (i = i.values) || i.forEach((i)=>{
                    if (i && i.name) {
                        var e = this.Ui.get(i.name);
                        e && e.push(t.id), this.Ui.set(i.name, e || [
                            t.id
                        ]);
                    }
                });
            });
        }
    }
    onEvent(t, i) {
        var e, r, s = (null == (e = this._instance) || null == (e = e.persistence) ? void 0 : e.props[di]) || [];
        if (Mn.SHOWN === t && i && s.length > 0) {
            var n;
            Nn.info("survey event matched, removing survey from activated surveys", {
                event: t,
                eventPayload: i,
                existingActivatedSurveys: s
            });
            var o = null == i || null == (n = i.properties) ? void 0 : n.$survey_id;
            if (o) {
                var a = s.indexOf(o);
                a >= 0 && (s.splice(a, 1), this.Wi(s));
            }
        } else if (this.Ui.has(t)) {
            Nn.info("survey event name matched", {
                event: t,
                eventPayload: i,
                surveys: this.Ui.get(t)
            });
            var l = [];
            null == (r = this._instance) || r.getSurveys((i)=>{
                l = i.filter((i)=>{
                    var e;
                    return null == (e = this.Ui.get(t)) ? void 0 : e.includes(i.id);
                });
            });
            var u = l.filter((e)=>{
                var r, s = null == (r = e.conditions) || null == (r = r.events) || null == (r = r.values) ? void 0 : r.find((i)=>i.name === t);
                return !!s && (!s.propertyFilters || Object.entries(s.propertyFilters).every((t)=>{
                    var e, [r, s] = t, n = null == i || null == (e = i.properties) ? void 0 : e[r];
                    if (F(n) || D(n)) return !1;
                    var o = [
                        String(n)
                    ], a = vn[s.operator];
                    return a ? a(s.values, o) : (Nn.warn("Unknown property comparison operator: " + s.operator), !1);
                }));
            });
            this.Wi(s.concat(u.map((t)=>t.id) || []));
        }
    }
    onAction(t) {
        var i, e = (null == (i = this._instance) || null == (i = i.persistence) ? void 0 : i.props[di]) || [];
        this.zi.has(t) && this.Wi(e.concat(this.zi.get(t) || []));
    }
    Wi(t) {
        var i;
        Nn.info("updating activated surveys", {
            activatedSurveys: t
        }), null == (i = this._instance) || null == (i = i.persistence) || i.register({
            [di]: [
                ...new Set(t)
            ]
        });
    }
    getSurveys() {
        var t, i = null == (t = this._instance) || null == (t = t.persistence) ? void 0 : t.props[di];
        return i || [];
    }
    getEventToSurveys() {
        return this.Ui;
    }
    Gi() {
        return this.qi;
    }
    constructor(t){
        this._instance = t, this.Ui = new Map, this.zi = new Map;
    }
}
class Gn {
    onRemoteConfig(t) {
        if (!this._instance.config.disable_surveys) {
            var i = t.surveys;
            if (j(i)) return Nn.warn("Flags not loaded yet. Not loading surveys.");
            var e = I(i);
            this.Vi = e ? i.length > 0 : i, Nn.info("flags response received, isSurveysEnabled: " + this.Vi), this.loadIfEnabled();
        }
    }
    reset() {
        localStorage.removeItem("lastSeenSurveyDate");
        for(var t = [], i = 0; i < localStorage.length; i++){
            var e = localStorage.key(i);
            (null != e && e.startsWith(Un) || null != e && e.startsWith("inProgressSurvey_")) && t.push(e);
        }
        t.forEach((t)=>localStorage.removeItem(t));
    }
    loadIfEnabled() {
        if (!this._surveyManager) if (this.Ki) Nn.info("Already initializing surveys, skipping...");
        else if (this._instance.config.disable_surveys) Nn.info("Disabled. Not loading surveys.");
        else if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) Nn.info("Not loading surveys in cookieless mode without consent.");
        else {
            var t = null == v ? void 0 : v.__PosthogExtensions__;
            if (t) {
                if (!F(this.Vi) || this._instance.config.advanced_enable_surveys) {
                    var i = this.Vi || this._instance.config.advanced_enable_surveys;
                    this.Ki = !0;
                    try {
                        var e = t.generateSurveys;
                        if (e) return void this.Xi(e, i);
                        var r = t.loadExternalDependency;
                        if (!r) return void this.Qi("PostHog loadExternalDependency extension not found.");
                        r(this._instance, "surveys", (e)=>{
                            e || !t.generateSurveys ? this.Qi("Could not load surveys script", e) : this.Xi(t.generateSurveys, i);
                        });
                    } catch (t) {
                        throw this.Qi("Error initializing surveys", t), t;
                    } finally{
                        this.Ki = !1;
                    }
                }
            } else Nn.error("PostHog Extensions not found.");
        }
    }
    Xi(t, i) {
        this._surveyManager = t(this._instance, i), this._surveyEventReceiver = new Wn(this._instance), Nn.info("Surveys loaded successfully"), this.Zi({
            isLoaded: !0
        });
    }
    Qi(t, i) {
        Nn.error(t, i), this.Zi({
            isLoaded: !1,
            error: t
        });
    }
    onSurveysLoaded(t) {
        return this.Yi.push(t), this._surveyManager && this.Zi({
            isLoaded: !0
        }), ()=>{
            this.Yi = this.Yi.filter((i)=>i !== t);
        };
    }
    getSurveys(t, i) {
        if (void 0 === i && (i = !1), this._instance.config.disable_surveys) return Nn.info("Disabled. Not loading surveys."), t([]);
        var e = this._instance.get_property(hi);
        if (e && !i) return t(e, {
            isLoaded: !0
        });
        if (this.Ji) return t([], {
            isLoaded: !1,
            error: "Surveys are already being loaded"
        });
        try {
            this.Ji = !0, this._instance.ci({
                url: this._instance.requestRouter.endpointFor("api", "/api/surveys/?token=" + this._instance.config.token),
                method: "GET",
                timeout: this._instance.config.surveys_request_timeout_ms,
                callback: (i)=>{
                    var e;
                    this.Ji = !1;
                    var r = i.statusCode;
                    if (200 !== r || !i.json) {
                        var s = "Surveys API could not be loaded, status: " + r;
                        return Nn.error(s), t([], {
                            isLoaded: !1,
                            error: s
                        });
                    }
                    var n, o = i.json.surveys || [], a = o.filter((t)=>(function(t) {
                            return !(!t.start_date || t.end_date);
                        })(t) && (function(t) {
                            var i;
                            return !(null == (i = t.conditions) || null == (i = i.events) || null == (i = i.values) || !i.length);
                        }(t) || function(t) {
                            var i;
                            return !(null == (i = t.conditions) || null == (i = i.actions) || null == (i = i.values) || !i.length);
                        }(t)));
                    a.length > 0 && (null == (n = this._surveyEventReceiver) || n.register(a));
                    return null == (e = this._instance.persistence) || e.register({
                        [hi]: o
                    }), t(o, {
                        isLoaded: !0
                    });
                }
            });
        } catch (t) {
            throw this.Ji = !1, t;
        }
    }
    Zi(t) {
        for (var i of this.Yi)try {
            if (!t.isLoaded) return i([], t);
            this.getSurveys(i);
        } catch (t) {
            Nn.error("Error in survey callback", t);
        }
    }
    getActiveMatchingSurveys(t, i) {
        if (void 0 === i && (i = !1), !j(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(t, i);
        Nn.warn("init was not called");
    }
    te(t) {
        var i = null;
        return this.getSurveys((e)=>{
            var r;
            i = null !== (r = e.find((i)=>i.id === t)) && void 0 !== r ? r : null;
        }), i;
    }
    ie(t) {
        if (j(this._surveyManager)) return {
            eligible: !1,
            reason: "SDK is not enabled or survey functionality is not yet loaded"
        };
        var i = "string" == typeof t ? this.te(t) : t;
        return i ? this._surveyManager.checkSurveyEligibility(i) : {
            eligible: !1,
            reason: "Survey not found"
        };
    }
    canRenderSurvey(t) {
        if (j(this._surveyManager)) return Nn.warn("init was not called"), {
            visible: !1,
            disabledReason: "SDK is not enabled or survey functionality is not yet loaded"
        };
        var i = this.ie(t);
        return {
            visible: i.eligible,
            disabledReason: i.reason
        };
    }
    canRenderSurveyAsync(t, i) {
        return j(this._surveyManager) ? (Nn.warn("init was not called"), Promise.resolve({
            visible: !1,
            disabledReason: "SDK is not enabled or survey functionality is not yet loaded"
        })) : new Promise((e)=>{
            this.getSurveys((i)=>{
                var r, s = null !== (r = i.find((i)=>i.id === t)) && void 0 !== r ? r : null;
                if (s) {
                    var n = this.ie(s);
                    e({
                        visible: n.eligible,
                        disabledReason: n.reason
                    });
                } else e({
                    visible: !1,
                    disabledReason: "Survey not found"
                });
            }, i);
        });
    }
    renderSurvey(t, i) {
        var e;
        if (j(this._surveyManager)) Nn.warn("init was not called");
        else {
            var r = "string" == typeof t ? this.te(t) : t;
            if (null != r && r.id) if (Bn.includes(r.type)) {
                var s = null == o ? void 0 : o.querySelector(i);
                if (s) return null != (e = r.appearance) && e.surveyPopupDelaySeconds ? (Nn.info("Rendering survey " + r.id + " with delay of " + r.appearance.surveyPopupDelaySeconds + " seconds"), void setTimeout(()=>{
                    var t, i;
                    Nn.info("Rendering survey " + r.id + " with delay of " + (null == (t = r.appearance) ? void 0 : t.surveyPopupDelaySeconds) + " seconds"), null == (i = this._surveyManager) || i.renderSurvey(r, s), Nn.info("Survey " + r.id + " rendered");
                }, 1e3 * r.appearance.surveyPopupDelaySeconds)) : void this._surveyManager.renderSurvey(r, s);
                Nn.warn("Survey element not found");
            } else Nn.warn("Surveys of type " + r.type + " cannot be rendered in the app");
            else Nn.warn("Survey not found");
        }
    }
    displaySurvey(t, i) {
        var e;
        if (j(this._surveyManager)) Nn.warn("init was not called");
        else {
            var r = this.te(t);
            if (r) {
                var s = r;
                if (null != (e = r.appearance) && e.surveyPopupDelaySeconds && i.ignoreDelay && (s = g({}, r, {
                    appearance: g({}, r.appearance, {
                        surveyPopupDelaySeconds: 0
                    })
                })), !1 === i.ignoreConditions) {
                    var n = this.canRenderSurvey(r);
                    if (!n.visible) return void Nn.warn("Survey is not eligible to be displayed: ", n.disabledReason);
                }
                i.displayType !== Dn.Inline ? this._surveyManager.handlePopoverSurvey(s) : this.renderSurvey(s, i.selector);
            } else Nn.warn("Survey not found");
        }
    }
    constructor(t){
        this.Vi = void 0, this._surveyManager = null, this.Ji = !1, this.Ki = !1, this.Yi = [], this._instance = t, this._surveyEventReceiver = null;
    }
}
var Vn = Tt("[RateLimiter]");
class Jn {
    clientRateLimitContext(t) {
        var i, e, r;
        void 0 === t && (t = !1);
        var s = (new Date).getTime(), n = null !== (i = null == (e = this.instance.persistence) ? void 0 : e.get_property(pi)) && void 0 !== i ? i : {
            tokens: this.captureEventsBurstLimit,
            last: s
        };
        n.tokens += (s - n.last) / 1e3 * this.captureEventsPerSecond, n.last = s, n.tokens > this.captureEventsBurstLimit && (n.tokens = this.captureEventsBurstLimit);
        var o = n.tokens < 1;
        return o || t || (n.tokens = Math.max(0, n.tokens - 1)), !o || this.lastEventRateLimited || t || this.instance.capture("$$client_ingestion_warning", {
            $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to " + this.captureEventsPerSecond + " events per second and " + this.captureEventsBurstLimit + " events burst limit."
        }, {
            skip_client_rate_limiting: !0
        }), this.lastEventRateLimited = o, null == (r = this.instance.persistence) || r.set_property(pi, n), {
            isRateLimited: o,
            remainingTokens: n.tokens
        };
    }
    isServerRateLimited(t) {
        var i = this.serverLimits[t || "events"] || !1;
        return !1 !== i && (new Date).getTime() < i;
    }
    constructor(t){
        var i, e;
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = (t)=>{
            var i = t.text;
            if (i && i.length) try {
                (JSON.parse(i).quota_limited || []).forEach((t)=>{
                    Vn.info((t || "events") + " is quota limited."), this.serverLimits[t] = (new Date).getTime() + 6e4;
                });
            } catch (t) {
                return void Vn.warn('could not rate limit - continuing. Error: "' + (null == t ? void 0 : t.message) + '"', {
                    text: i
                });
            }
        }, this.instance = t, this.captureEventsPerSecond = (null == (i = t.config.rate_limiting) ? void 0 : i.events_per_second) || 10, this.captureEventsBurstLimit = Math.max((null == (e = t.config.rate_limiting) ? void 0 : e.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited;
    }
}
var Kn = Tt("[RemoteConfig]");
class Yn {
    get remoteConfig() {
        var t;
        return null == (t = v._POSTHOG_REMOTE_CONFIG) || null == (t = t[this._instance.config.token]) ? void 0 : t.config;
    }
    ee(t) {
        var i, e;
        null != (i = v.__PosthogExtensions__) && i.loadExternalDependency ? null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, "remote-config", ()=>t(this.remoteConfig)) : (Kn.error("PostHog Extensions not found. Cannot load remote config."), t());
    }
    re(t) {
        this._instance.ci({
            method: "GET",
            url: this._instance.requestRouter.endpointFor("assets", "/array/" + this._instance.config.token + "/config"),
            callback: (i)=>{
                t(i.json);
            }
        });
    }
    load() {
        try {
            if (this.remoteConfig) return Kn.info("Using preloaded remote config", this.remoteConfig), void this.fi(this.remoteConfig);
            if (this._instance.M()) return void Kn.warn("Remote config is disabled. Falling back to local config.");
            this.ee((t)=>{
                if (!t) return Kn.info("No config found after loading remote JS config. Falling back to JSON."), void this.re((t)=>{
                    this.fi(t);
                });
                this.fi(t);
            });
        } catch (t) {
            Kn.error("Error loading remote config", t);
        }
    }
    fi(t) {
        t ? this._instance.config.__preview_remote_config ? (this._instance.fi(t), !1 !== t.hasFeatureFlags && this._instance.featureFlags.ensureFlagsLoaded()) : Kn.info("__preview_remote_config is disabled. Logging config instead", t) : Kn.error("Failed to fetch remote config from PostHog.");
    }
    constructor(t){
        this._instance = t;
    }
}
var Xn = 3e3;
class Qn {
    enqueue(t) {
        this.ne.push(t), this.le || this.ue();
    }
    unload() {
        this.he();
        var t = this.ne.length > 0 ? this.de() : {}, i = Object.values(t);
        [
            ...i.filter((t)=>0 === t.url.indexOf("/e")),
            ...i.filter((t)=>0 !== t.url.indexOf("/e"))
        ].map((t)=>{
            this.ae(g({}, t, {
                transport: "sendBeacon"
            }));
        });
    }
    enable() {
        this.se = !1, this.ue();
    }
    ue() {
        var t = this;
        this.se || (this.le = setTimeout(()=>{
            if (this.he(), this.ne.length > 0) {
                var i = this.de(), e = function() {
                    var e = i[r], s = (new Date).getTime();
                    e.data && I(e.data) && Ft(e.data, (t)=>{
                        t.offset = Math.abs(t.timestamp - s), delete t.timestamp;
                    }), t.ae(e);
                };
                for(var r in i)e();
            }
        }, this.oe));
    }
    he() {
        clearTimeout(this.le), this.le = void 0;
    }
    de() {
        var t = {};
        return Ft(this.ne, (i)=>{
            var e, r = i, s = (r ? r.batchKey : null) || r.url;
            F(t[s]) && (t[s] = g({}, r, {
                data: []
            })), null == (e = t[s].data) || e.push(r.data);
        }), this.ne = [], t;
    }
    constructor(t, i){
        this.se = !0, this.ne = [], this.oe = J((null == i ? void 0 : i.flush_interval_ms) || Xn, 250, 5e3, Pt.createLogger("flush interval"), Xn), this.ae = t;
    }
}
var Zn = [
    "retriesPerformedSoFar"
];
class to {
    get length() {
        return this.ne.length;
    }
    retriableRequest(t) {
        var { retriesPerformedSoFar: i } = t, e = _(t, Zn);
        L(i) && i > 0 && (e.url = on(e.url, {
            retry_count: i
        })), this._instance.ci(g({}, e, {
            callback: (t)=>{
                200 !== t.statusCode && (t.statusCode < 400 || t.statusCode >= 500) && (null != i ? i : 0) < 10 ? this._e(g({
                    retriesPerformedSoFar: i
                }, e)) : null == e.callback || e.callback(t);
            }
        }));
    }
    _e(t) {
        var i = t.retriesPerformedSoFar || 0;
        t.retriesPerformedSoFar = i + 1;
        var e = function(t) {
            var i = 3e3 * Math.pow(2, t), e = i / 2, r = Math.min(18e5, i), s = (Math.random() - .5) * (r - e);
            return Math.ceil(r + s);
        }(i), r = Date.now() + e;
        this.ne.push({
            retryAt: r,
            requestOptions: t
        });
        var s = "Enqueued failed request for retry in " + e;
        navigator.onLine || (s += " (Browser is offline)"), Pt.warn(s), this.ve || (this.ve = !0, this.me());
    }
    me() {
        if (this.ye && clearTimeout(this.ye), 0 === this.ne.length) return this.ve = !1, void (this.ye = void 0);
        this.ye = setTimeout(()=>{
            this.fe && this.ne.length > 0 && this.Dt(), this.me();
        }, this.ce);
    }
    Dt() {
        var t = Date.now(), i = [], e = this.ne.filter((e)=>e.retryAt < t || (i.push(e), !1));
        if (this.ne = i, e.length > 0) for (var { requestOptions: r } of e)this.retriableRequest(r);
    }
    unload() {
        for (var { requestOptions: i } of (this.ye && (clearTimeout(this.ye), this.ye = void 0), this.ve = !1, F(t) || (this.pe && (t.removeEventListener("online", this.pe), this.pe = void 0), this.ge && (t.removeEventListener("offline", this.ge), this.ge = void 0)), this.ne))try {
            this._instance.ci(g({}, i, {
                transport: "sendBeacon"
            }));
        } catch (t) {
            Pt.error(t);
        }
        this.ne = [];
    }
    constructor(i){
        this.ve = !1, this.ce = 3e3, this.ne = [], this._instance = i, this.ne = [], this.fe = !0, !F(t) && "onLine" in t.navigator && (this.fe = t.navigator.onLine, this.pe = ()=>{
            this.fe = !0, this.Dt();
        }, this.ge = ()=>{
            this.fe = !1;
        }, qt(t, "online", this.pe), qt(t, "offline", this.ge));
    }
}
class io {
    getContext() {
        return this.we;
    }
    resetContext() {
        var t = this.we;
        return setTimeout(this.be, 0), t;
    }
    startMeasuringScrollPosition() {
        qt(t, "scroll", this.be, {
            capture: !0
        }), qt(t, "scrollend", this.be, {
            capture: !0
        }), qt(t, "resize", this.be);
    }
    scrollElement() {
        if (!this._instance.config.scroll_root_selector) return null == t ? void 0 : t.document.documentElement;
        var i = I(this._instance.config.scroll_root_selector) ? this._instance.config.scroll_root_selector : [
            this._instance.config.scroll_root_selector
        ];
        for (var e of i){
            var r = null == t ? void 0 : t.document.querySelector(e);
            if (r) return r;
        }
    }
    scrollY() {
        if (this._instance.config.scroll_root_selector) {
            var i = this.scrollElement();
            return i && i.scrollTop || 0;
        }
        return t && (t.scrollY || t.pageYOffset || t.document.documentElement.scrollTop) || 0;
    }
    scrollX() {
        if (this._instance.config.scroll_root_selector) {
            var i = this.scrollElement();
            return i && i.scrollLeft || 0;
        }
        return t && (t.scrollX || t.pageXOffset || t.document.documentElement.scrollLeft) || 0;
    }
    constructor(t){
        this.be = ()=>{
            var t, i, e, r;
            this.we || (this.we = {});
            var s = this.scrollElement(), n = this.scrollY(), o = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0, a = n + ((null == s ? void 0 : s.clientHeight) || 0), l = (null == s ? void 0 : s.scrollHeight) || 0;
            this.we.lastScrollY = Math.ceil(n), this.we.maxScrollY = Math.max(n, null !== (t = this.we.maxScrollY) && void 0 !== t ? t : 0), this.we.maxScrollHeight = Math.max(o, null !== (i = this.we.maxScrollHeight) && void 0 !== i ? i : 0), this.we.lastContentY = a, this.we.maxContentY = Math.max(a, null !== (e = this.we.maxContentY) && void 0 !== e ? e : 0), this.we.maxContentHeight = Math.max(l, null !== (r = this.we.maxContentHeight) && void 0 !== r ? r : 0);
        }, this._instance = t;
    }
}
var eo = (t)=>hs(null == t ? void 0 : t.config.mask_personal_data_properties, null == t ? void 0 : t.config.custom_personal_data_properties);
class ro {
    $e() {
        return this.Ee.props[fi];
    }
    getSetOnceProps() {
        var t, i = null == (t = this.$e()) ? void 0 : t.props;
        return i ? "r" in i ? ds(i) : {
            $referring_domain: i.referringDomain,
            $pathname: i.initialPathName,
            utm_source: i.utm_source,
            utm_campaign: i.utm_campaign,
            utm_medium: i.utm_medium,
            utm_content: i.utm_content,
            utm_term: i.utm_term
        } : {};
    }
    getSessionProps() {
        var t = {};
        return Ft(Nt(this.getSetOnceProps()), (i, e)=>{
            "$current_url" === e && (e = "url"), t["$session_entry_" + S(e)] = i;
        }), t;
    }
    constructor(t, i, e, r){
        this.xe = (t)=>{
            var i = this.$e();
            if (!i || i.sessionId !== t) {
                var e = {
                    sessionId: t,
                    props: this.Se(this._instance)
                };
                this.Ee.register({
                    [fi]: e
                });
            }
        }, this._instance = t, this.ke = i, this.Ee = e, this.Se = r || eo, this.ke.onSessionId(this.xe);
    }
}
var so = Tt("[SessionId]");
class no {
    on(t, i) {
        return this.Pe.on(t, i);
    }
    get sessionTimeoutMs() {
        return this._sessionTimeoutMs;
    }
    onSessionId(t) {
        return F(this.Te) && (this.Te = []), this.Te.push(t), this.Oe && t(this.Oe, this.Ce), ()=>{
            this.Te = this.Te.filter((i)=>i !== t);
        };
    }
    Le() {
        return "memory" !== this.C.persistence && !this.Ee.wi && Ae.H();
    }
    ze(t) {
        t !== this.Ce && (this.Ce = t, this.Le() && Ae.G(this.De, t));
    }
    He() {
        return this.Ce ? this.Ce : this.Le() ? Ae.W(this.De) : null;
    }
    Ne(t, i, e) {
        t === this.Oe && i === this._sessionActivityTimestamp && e === this._sessionStartTimestamp || (this._sessionStartTimestamp = e, this._sessionActivityTimestamp = i, this.Oe = t, this.Ee.register({
            [ri]: [
                i,
                t,
                e
            ]
        }));
    }
    Be() {
        if (this.Oe && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [
            this._sessionActivityTimestamp,
            this.Oe,
            this._sessionStartTimestamp
        ];
        var t = this.Ee.props[ri];
        return I(t) && 2 === t.length && t.push(t[0]), t || [
            0,
            null,
            0
        ];
    }
    resetSessionId() {
        this.Ne(null, null, null);
    }
    destroy() {
        clearTimeout(this.qe), this.qe = void 0, this.Ie && t && (t.removeEventListener("beforeunload", this.Ie, {
            capture: !1
        }), this.Ie = void 0), this.Te = [];
    }
    Ue() {
        this.Ie = ()=>{
            this.Le() && Ae.V(this.je);
        }, qt(t, "beforeunload", this.Ie, {
            capture: !1
        });
    }
    checkAndGetSessionAndWindowId(t, i) {
        if (void 0 === t && (t = !1), void 0 === i && (i = null), "always" === this.C.cookieless_mode) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        var e = i || (new Date).getTime(), [r, s, n] = this.Be(), o = this.He(), a = L(n) && n > 0 && Math.abs(e - n) > 864e5, l = !1, u = !s, h = !u && !t && this.Re(e, r);
        u || h || a ? (s = this.Fe(), o = this.Me(), so.info("new session ID generated", {
            sessionId: s,
            windowId: o,
            changeReason: {
                noSessionId: u,
                activityTimeout: h,
                sessionPastMaximumLength: a
            }
        }), n = e, l = !0) : o || (o = this.Me(), l = !0);
        var d = 0 === r || !t || a ? e : r, v = 0 === n ? (new Date).getTime() : n;
        return this.ze(o), this.Ne(s, d, v), t || this.Ae(), l && this.Te.forEach((t)=>t(s, o, l ? {
                noSessionId: u,
                activityTimeout: h,
                sessionPastMaximumLength: a
            } : void 0)), {
            sessionId: s,
            windowId: o,
            sessionStartTimestamp: v,
            changeReason: l ? {
                noSessionId: u,
                activityTimeout: h,
                sessionPastMaximumLength: a
            } : void 0,
            lastActivityTimestamp: r
        };
    }
    Ae() {
        clearTimeout(this.qe), this.qe = setTimeout(()=>{
            var [t] = this.Be();
            if (this.Re((new Date).getTime(), t)) {
                var i = this.Oe;
                this.resetSessionId(), this.Pe.emit("forcedIdleReset", {
                    idleSessionId: i
                });
            }
        }, 1.1 * this.sessionTimeoutMs);
    }
    constructor(t, i, e){
        var r;
        if (this.Te = [], this.Ie = void 0, this.Pe = new jn, this.Re = (t, i)=>Math.abs(t - i) > this.sessionTimeoutMs, !t.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === t.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this.C = t.config, this.Ee = t.persistence, this.Ce = void 0, this.Oe = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this.Fe = i || xe, this.Me = e || xe;
        var s = this.C.persistence_name || this.C.token, n = this.C.session_idle_timeout_seconds || 1800;
        if (this._sessionTimeoutMs = 1e3 * J(n, 60, 36e3, so.createLogger("session_idle_timeout_seconds"), 1800), t.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
        }), this.Ae(), this.De = "ph_" + s + "_window_id", this.je = "ph_" + s + "_primary_window_exists", this.Le()) {
            var o = Ae.W(this.De), a = Ae.W(this.je);
            o && !a ? this.Ce = o : Ae.V(this.De), Ae.G(this.je, !0);
        }
        if (null != (r = this.C.bootstrap) && r.sessionID) try {
            var l = ((t)=>{
                var i = t.replace(/-/g, "");
                if (32 !== i.length) throw new Error("Not a valid UUID");
                if ("7" !== i[12]) throw new Error("Not a UUIDv7");
                return parseInt(i.substring(0, 12), 16);
            })(this.C.bootstrap.sessionID);
            this.Ne(this.C.bootstrap.sessionID, (new Date).getTime(), l);
        } catch (t) {
            so.error("Invalid sessionID in bootstrap", t);
        }
        this.Ue();
    }
}
var oo = [
    "$set_once",
    "$set"
], ao = Tt("[SiteApps]");
class lo {
    get isEnabled() {
        return !!this._instance.config.opt_in_site_apps;
    }
    Ge(t, i) {
        if (i) {
            var e = this.globalsForEvent(i);
            this.We.push(e), this.We.length > 1e3 && (this.We = this.We.slice(10));
        }
    }
    get siteAppLoaders() {
        var t;
        return null == (t = v._POSTHOG_REMOTE_CONFIG) || null == (t = t[this._instance.config.token]) ? void 0 : t.siteApps;
    }
    init() {
        if (this.isEnabled) {
            var t = this._instance.Mi(this.Ge.bind(this));
            this.Ve = ()=>{
                t(), this.We = [], this.Ve = void 0;
            };
        }
    }
    globalsForEvent(t) {
        var i, e, r, s, n, o, a;
        if (!t) throw new Error("Event payload is required");
        var l = {}, u = this._instance.get_property("$groups") || [], h = this._instance.get_property("$stored_group_properties") || {};
        for (var [d, v] of Object.entries(h))l[d] = {
            id: u[d],
            type: d,
            properties: v
        };
        var { $set_once: c, $set: f } = t;
        return {
            event: g({}, _(t, oo), {
                properties: g({}, t.properties, f ? {
                    $set: g({}, null !== (i = null == (e = t.properties) ? void 0 : e.$set) && void 0 !== i ? i : {}, f)
                } : {}, c ? {
                    $set_once: g({}, null !== (r = null == (s = t.properties) ? void 0 : s.$set_once) && void 0 !== r ? r : {}, c)
                } : {}),
                elements_chain: null !== (n = null == (o = t.properties) ? void 0 : o.$elements_chain) && void 0 !== n ? n : "",
                distinct_id: null == (a = t.properties) ? void 0 : a.distinct_id
            }),
            person: {
                properties: this._instance.get_property("$stored_person_properties")
            },
            groups: l
        };
    }
    setupSiteApp(t) {
        var i = this.apps[t.id], e = ()=>{
            var e;
            (!i.errored && this.We.length && (ao.info("Processing " + this.We.length + " events for site app with id " + t.id), this.We.forEach((t)=>null == i.processEvent ? void 0 : i.processEvent(t)), i.processedBuffer = !0), Object.values(this.apps).every((t)=>t.processedBuffer || t.errored)) && (null == (e = this.Ve) || e.call(this));
        }, r = !1, s = (s)=>{
            i.errored = !s, i.loaded = !0, ao.info("Site app with id " + t.id + " " + (s ? "loaded" : "errored")), r && e();
        };
        try {
            var { processEvent: n } = t.init({
                posthog: this._instance,
                callback: (t)=>{
                    s(t);
                }
            });
            n && (i.processEvent = n), r = !0;
        } catch (i) {
            ao.error("Error while initializing PostHog app with config id " + t.id, i), s(!1);
        }
        if (r && i.loaded) try {
            e();
        } catch (e) {
            ao.error("Error while processing buffered events PostHog app with config id " + t.id, e), i.errored = !0;
        }
    }
    Je() {
        var t = this.siteAppLoaders || [];
        for (var i of t)this.apps[i.id] = {
            id: i.id,
            loaded: !1,
            errored: !1,
            processedBuffer: !1
        };
        for (var e of t)this.setupSiteApp(e);
    }
    Ke(t) {
        if (0 !== Object.keys(this.apps).length) {
            var i = this.globalsForEvent(t);
            for (var e of Object.values(this.apps))try {
                null == e.processEvent || e.processEvent(i);
            } catch (i) {
                ao.error("Error while processing event " + t.event + " for site app " + e.id, i);
            }
        }
    }
    onRemoteConfig(t) {
        var i, e, r, s = this;
        if (null != (i = this.siteAppLoaders) && i.length) return this.isEnabled ? (this.Je(), void this._instance.on("eventCaptured", (t)=>this.Ke(t))) : void ao.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
        if (null == (e = this.Ve) || e.call(this), null != (r = t.siteApps) && r.length) if (this.isEnabled) {
            var n = function(t) {
                var i;
                v["__$$ph_site_app_" + t] = s._instance, null == (i = v.__PosthogExtensions__) || null == i.loadSiteApp || i.loadSiteApp(s._instance, a, (i)=>{
                    if (i) return ao.error("Error while initializing PostHog app with config id " + t, i);
                });
            };
            for (var { id: o, url: a } of t.siteApps)n(o);
        } else ao.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
    }
    constructor(t){
        this._instance = t, this.We = [], this.apps = {};
    }
}
var uo = function(t, i) {
    if (!t) return !1;
    var e = t.userAgent;
    if (e && y(e, i)) return !0;
    try {
        var r = null == t ? void 0 : t.userAgentData;
        if (null != r && r.brands && r.brands.some((t)=>y(null == t ? void 0 : t.brand, i))) return !0;
    } catch (t) {}
    return !!t.webdriver;
}, ho = function(t) {
    return t.US = "us", t.EU = "eu", t.CUSTOM = "custom", t;
}({}), vo = "i.posthog.com";
class co {
    get apiHost() {
        var t = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === t ? "https://us.i.posthog.com" : t;
    }
    get flagsApiHost() {
        var t = this.instance.config.flags_api_host;
        return t ? t.trim().replace(/\/$/, "") : this.apiHost;
    }
    get uiHost() {
        var t, i = null == (t = this.instance.config.ui_host) ? void 0 : t.replace(/\/$/, "");
        return i || (i = this.apiHost.replace("." + vo, ".posthog.com")), "https://app.posthog.com" === i ? "https://us.posthog.com" : i;
    }
    get region() {
        return this.Ye[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this.Ye[this.apiHost] = ho.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this.Ye[this.apiHost] = ho.EU : this.Ye[this.apiHost] = ho.CUSTOM), this.Ye[this.apiHost];
    }
    endpointFor(t, i) {
        if (void 0 === i && (i = ""), i && (i = "/" === i[0] ? i : "/" + i), "ui" === t) return this.uiHost + i;
        if ("flags" === t) return this.flagsApiHost + i;
        if (this.region === ho.CUSTOM) return this.apiHost + i;
        var e = vo + i;
        switch(t){
            case "assets":
                return "https://" + this.region + "-assets." + e;
            case "api":
                return "https://" + this.region + "." + e;
        }
    }
    constructor(t){
        this.Ye = {}, this.instance = t;
    }
}
var fo = {
    icontains: (i, e)=>!!t && e.href.toLowerCase().indexOf(i.toLowerCase()) > -1,
    not_icontains: (i, e)=>!!t && -1 === e.href.toLowerCase().indexOf(i.toLowerCase()),
    regex: (i, e)=>!!t && hn(e.href, i),
    not_regex: (i, e)=>!!t && !hn(e.href, i),
    exact: (t, i)=>i.href === t,
    is_not: (t, i)=>i.href !== t
};
class po {
    onFeatureFlags(t) {
        if (this._is_bot()) po.Xe("Refusing to render web experiment since the viewer is a likely bot");
        else if (!this._instance.config.disable_web_experiments) {
            if (j(this.Qe)) return this.Qe = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
            po.Xe("applying feature flags", t), t.forEach((t)=>{
                var i;
                if (this.Qe && null != (i = this.Qe) && i.has(t)) {
                    var e, r = this._instance.getFeatureFlag(t), s = null == (e = this.Qe) ? void 0 : e.get(t);
                    r && null != s && s.variants[r] && this.Ze(s.name, r, s.variants[r].transforms);
                }
            });
        }
    }
    previewWebExperiment() {
        var t = po.getWindowLocation();
        if (null != t && t.search) {
            var i = ae(null == t ? void 0 : t.search, "__experiment_id"), e = ae(null == t ? void 0 : t.search, "__experiment_variant");
            i && e && (po.Xe("previewing web experiments " + i + " && " + e), this.getWebExperiments((t)=>{
                this.ir(parseInt(i), e, t);
            }, !1, !0));
        }
    }
    loadIfEnabled() {
        this._instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
    }
    getWebExperiments(t, i, e) {
        if (this._instance.config.disable_web_experiments && !e) return t([]);
        var r = this._instance.get_property("$web_experiments");
        if (r && !i) return t(r);
        this._instance.ci({
            url: this._instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=" + this._instance.config.token),
            method: "GET",
            callback: (i)=>{
                if (200 !== i.statusCode || !i.json) return t([]);
                var e = i.json.experiments || [];
                return t(e);
            }
        });
    }
    ir(t, i, e) {
        var r = e.filter((i)=>i.id === t);
        r && r.length > 0 && (po.Xe("Previewing web experiment [" + r[0].name + "] with variant [" + i + "]"), this.Ze(r[0].name, i, r[0].variants[i].transforms));
    }
    static tr(t) {
        return !j(t.conditions) && po.er(t) && po.rr(t);
    }
    static er(t) {
        var i;
        if (j(t.conditions) || j(null == (i = t.conditions) ? void 0 : i.url)) return !0;
        var e, r, s, n = po.getWindowLocation();
        return !!n && (null == (e = t.conditions) || !e.url || fo[null !== (r = null == (s = t.conditions) ? void 0 : s.urlMatchType) && void 0 !== r ? r : "icontains"](t.conditions.url, n));
    }
    static getWindowLocation() {
        return null == t ? void 0 : t.location;
    }
    static rr(t) {
        var i;
        if (j(t.conditions) || j(null == (i = t.conditions) ? void 0 : i.utm)) return !0;
        var e = ns();
        if (e.utm_source) {
            var r, s, n, o, a, l, u, h, d = null == (r = t.conditions) || null == (r = r.utm) || !r.utm_campaign || (null == (s = t.conditions) || null == (s = s.utm) ? void 0 : s.utm_campaign) == e.utm_campaign, v = null == (n = t.conditions) || null == (n = n.utm) || !n.utm_source || (null == (o = t.conditions) || null == (o = o.utm) ? void 0 : o.utm_source) == e.utm_source, c = null == (a = t.conditions) || null == (a = a.utm) || !a.utm_medium || (null == (l = t.conditions) || null == (l = l.utm) ? void 0 : l.utm_medium) == e.utm_medium, f = null == (u = t.conditions) || null == (u = u.utm) || !u.utm_term || (null == (h = t.conditions) || null == (h = h.utm) ? void 0 : h.utm_term) == e.utm_term;
            return d && c && f && v;
        }
        return !1;
    }
    static Xe(t) {
        for(var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)e[r - 1] = arguments[r];
        Pt.info("[WebExperiments] " + t, e);
    }
    Ze(t, i, e) {
        this._is_bot() ? po.Xe("Refusing to render web experiment since the viewer is a likely bot") : "control" !== i ? e.forEach((e)=>{
            if (e.selector) {
                var r;
                po.Xe("applying transform of variant " + i + " for experiment " + t + " ", e);
                var s = null == (r = document) ? void 0 : r.querySelectorAll(e.selector);
                null == s || s.forEach((t)=>{
                    var i = t;
                    e.html && (i.innerHTML = e.html), e.css && i.setAttribute("style", e.css);
                });
            }
        }) : po.Xe("Control variants leave the page unmodified.");
    }
    _is_bot() {
        return n && this._instance ? uo(n, this._instance.config.custom_blocked_useragents) : void 0;
    }
    constructor(t){
        var i = this;
        this.getWebExperimentsAndEvaluateDisplayLogic = function(t) {
            void 0 === t && (t = !1), i.getWebExperiments((t)=>{
                po.Xe("retrieved web experiments from the server"), i.Qe = new Map, t.forEach((t)=>{
                    if (t.feature_flag_key) {
                        var e;
                        if (i.Qe) po.Xe("setting flag key ", t.feature_flag_key, " to web experiment ", t), null == (e = i.Qe) || e.set(t.feature_flag_key, t);
                        var r = i._instance.getFeatureFlag(t.feature_flag_key);
                        M(r) && t.variants[r] && i.Ze(t.name, r, t.variants[r].transforms);
                    } else if (t.variants) for(var s in t.variants){
                        var n = t.variants[s];
                        po.tr(n) && i.Ze(t.name, s, n.transforms);
                    }
                });
            }, t);
        }, this._instance = t, this._instance.onFeatureFlags((t)=>{
            this.onFeatureFlags(t);
        });
    }
}
var go = Tt("[PostHog ExternalIntegrations]"), _o = {
    intercom: "intercom-integration",
    crispChat: "crisp-chat-integration"
};
class mo {
    it(t, i) {
        var e;
        null == (e = v.__PosthogExtensions__) || null == e.loadExternalDependency || e.loadExternalDependency(this._instance, t, (t)=>{
            if (t) return go.error("failed to load script", t);
            i();
        });
    }
    startIfEnabledOrStop() {
        var t = this, i = function(i) {
            var e, s, n;
            (!r || null != (e = v.__PosthogExtensions__) && null != (e = e.integrations) && e[i] || t.it(_o[i], ()=>{
                var e;
                null == (e = v.__PosthogExtensions__) || null == (e = e.integrations) || null == (e = e[i]) || e.start(t._instance);
            }), !r && null != (s = v.__PosthogExtensions__) && null != (s = s.integrations) && s[i]) && (null == (n = v.__PosthogExtensions__) || null == (n = n.integrations) || null == (n = n[i]) || n.stop());
        };
        for (var [e, r] of Object.entries(null !== (s = this._instance.config.integrations) && void 0 !== s ? s : {})){
            var s;
            i(e);
        }
    }
    constructor(t){
        this._instance = t;
    }
}
var yo = "[SessionRecording]", bo = Tt(yo);
class wo {
    get started() {
        var t;
        return !(null == (t = this.sr) || !t.isStarted);
    }
    get status() {
        return this.sr ? this.sr.status : this.nr && !this.ar ? "disabled" : "lazy_loading";
    }
    get ar() {
        var i, e = !(null == (i = this._instance.get_property(ei)) || !i.enabled), r = !this._instance.config.disable_session_recording, s = this._instance.config.disable_session_recording || this._instance.consent.isOptedOut();
        return t && e && r && !s;
    }
    startIfEnabledOrStop(t) {
        var i;
        if (!this.ar || null == (i = this.sr) || !i.isStarted) {
            var e = !F(Object.assign) && !F(Array.from);
            this.ar && e ? (this.ur(t), bo.info("starting")) : this.stopRecording();
        }
    }
    ur(t) {
        var i, e, r;
        this.ar && (null != v && null != (i = v.__PosthogExtensions__) && null != (i = i.rrweb) && i.record && null != (e = v.__PosthogExtensions__) && e.initSessionRecording ? this.hr(t) : null == (r = v.__PosthogExtensions__) || null == r.loadExternalDependency || r.loadExternalDependency(this._instance, this.dr, (i)=>{
            if (i) return bo.error("could not load recorder", i);
            this.hr(t);
        }));
    }
    stopRecording() {
        var t, i;
        null == (t = this.lr) || t.call(this), this.lr = void 0, null == (i = this.sr) || i.stop();
    }
    vr() {
        var t;
        null == (t = this._instance.persistence) || t.unregister(si);
    }
    cr(t) {
        if (this._instance.persistence) {
            var i, e, r = this._instance.persistence, s = ()=>{
                var i = !1 === t.sessionRecording ? void 0 : t.sessionRecording, e = null == i ? void 0 : i.sampleRate, s = j(e) ? null : parseFloat(e);
                j(s) && this.vr();
                var n = null == i ? void 0 : i.minimumDurationMilliseconds;
                r.register({
                    [ei]: g({
                        enabled: !!i
                    }, i, {
                        networkPayloadCapture: g({
                            capturePerformance: t.capturePerformance
                        }, null == i ? void 0 : i.networkPayloadCapture),
                        canvasRecording: {
                            enabled: null == i ? void 0 : i.recordCanvas,
                            fps: null == i ? void 0 : i.canvasFps,
                            quality: null == i ? void 0 : i.canvasQuality
                        },
                        sampleRate: s,
                        minimumDurationMilliseconds: F(n) ? null : n,
                        endpoint: null == i ? void 0 : i.endpoint,
                        triggerMatchType: null == i ? void 0 : i.triggerMatchType,
                        masking: null == i ? void 0 : i.masking,
                        urlTriggers: null == i ? void 0 : i.urlTriggers
                    })
                });
            };
            s(), null == (i = this.lr) || i.call(this), this.lr = null == (e = this._instance.sessionManager) ? void 0 : e.onSessionId(s);
        }
    }
    onRemoteConfig(t) {
        "sessionRecording" in t ? !1 !== t.sessionRecording ? (this.cr(t), this.nr = !0, this.startIfEnabledOrStop()) : this.nr = !0 : bo.info("skipping remote config with no sessionRecording", t);
    }
    log(t, i) {
        var e;
        void 0 === i && (i = "log"), null != (e = this.sr) && e.log ? this.sr.log(t, i) : bo.warn("log called before recorder was ready");
    }
    get dr() {
        var t, i, e = null == (t = this._instance) || null == (t = t.persistence) ? void 0 : t.get_property(ei);
        return (null == e || null == (i = e.scriptConfig) ? void 0 : i.script) || "lazy-recorder";
    }
    hr(t) {
        var i, e;
        if (null == (i = v.__PosthogExtensions__) || !i.initSessionRecording) throw Error("Called on script loaded before session recording is available");
        this.sr || (this.sr = null == (e = v.__PosthogExtensions__) ? void 0 : e.initSessionRecording(this._instance), this.sr._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture);
        this.sr.start(t);
    }
    onRRwebEmit(t) {
        var i;
        null == (i = this.sr) || null == i.onRRwebEmit || i.onRRwebEmit(t);
    }
    overrideLinkedFlag() {
        var t, i;
        this.sr || null == (i = this._instance.persistence) || i.register({
            $replay_override_linked_flag: !0
        });
        null == (t = this.sr) || t.overrideLinkedFlag();
    }
    overrideSampling() {
        var t, i;
        this.sr || null == (i = this._instance.persistence) || i.register({
            $replay_override_sampling: !0
        });
        null == (t = this.sr) || t.overrideSampling();
    }
    overrideTrigger(t) {
        var i, e;
        this.sr || null == (e = this._instance.persistence) || e.register({
            ["url" === t ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
        });
        null == (i = this.sr) || i.overrideTrigger(t);
    }
    get sdkDebugProperties() {
        var t;
        return (null == (t = this.sr) ? void 0 : t.sdkDebugProperties) || {
            $recording_status: this.status
        };
    }
    tryAddCustomEvent(t, i) {
        var e;
        return !(null == (e = this.sr) || !e.tryAddCustomEvent(t, i));
    }
    constructor(t){
        if (this._forceAllowLocalhostNetworkCapture = !1, this.nr = !1, this.lr = void 0, this._instance = t, !this._instance.sessionManager) throw bo.error("started without valid sessionManager"), new Error(yo + " started without valid sessionManager. This is a bug.");
        if ("always" === this._instance.config.cookieless_mode) throw new Error(yo + ' cannot be used with cookieless_mode="always"');
    }
}
var xo = {}, $o = ()=>{}, So = "posthog", Eo = !sn && -1 === (null == d ? void 0 : d.indexOf("MSIE")) && -1 === (null == d ? void 0 : d.indexOf("Mozilla")), ko = (i)=>{
    var e;
    return {
        api_host: "https://us.i.posthog.com",
        flags_api_host: null,
        ui_host: null,
        token: "",
        autocapture: !0,
        rageclick: !0,
        cross_subdomain_cookie: Ht(null == o ? void 0 : o.location),
        persistence: "localStorage+cookie",
        persistence_name: "",
        loaded: $o,
        save_campaign_params: !0,
        custom_campaign_params: [],
        custom_blocked_useragents: [],
        save_referrer: !0,
        capture_pageview: !(i && i >= "2025-05-24") || "history_change",
        capture_pageleave: "if_capture_pageview",
        defaults: null != i ? i : "unset",
        __preview_deferred_init_extensions: !1,
        debug: a && M(null == a ? void 0 : a.search) && -1 !== a.search.indexOf("__posthog_debug=true") || !1,
        cookie_expiration: 365,
        upgrade: !1,
        disable_session_recording: !1,
        disable_persistence: !1,
        disable_web_experiments: !0,
        disable_surveys: !1,
        disable_surveys_automatic_display: !1,
        disable_external_dependency_loading: !1,
        enable_recording_console_log: void 0,
        secure_cookie: "https:" === (null == t || null == (e = t.location) ? void 0 : e.protocol),
        ip: !1,
        opt_out_capturing_by_default: !1,
        opt_out_persistence_by_default: !1,
        opt_out_useragent_filter: !1,
        opt_out_capturing_persistence_type: "localStorage",
        consent_persistence_name: null,
        opt_out_capturing_cookie_prefix: null,
        opt_in_site_apps: !1,
        property_denylist: [],
        respect_dnt: !1,
        sanitize_properties: null,
        request_headers: {},
        request_batching: !0,
        properties_string_max_length: 65535,
        session_recording: i && i >= "2025-11-30" ? {
            strictMinimumDuration: !0
        } : {},
        mask_all_element_attributes: !1,
        mask_all_text: !1,
        mask_personal_data_properties: !1,
        custom_personal_data_properties: [],
        advanced_disable_flags: !1,
        advanced_disable_decide: !1,
        advanced_disable_feature_flags: !1,
        advanced_disable_feature_flags_on_first_load: !1,
        advanced_only_evaluate_survey_feature_flags: !1,
        advanced_enable_surveys: !1,
        advanced_disable_toolbar_metrics: !1,
        feature_flag_request_timeout_ms: 3e3,
        surveys_request_timeout_ms: 1e4,
        on_request_error: (t)=>{
            var i = "Bad HTTP status: " + t.statusCode + " " + t.text;
            Pt.error(i);
        },
        get_device_id: (t)=>t,
        capture_performance: void 0,
        name: "posthog",
        bootstrap: {},
        disable_compression: !1,
        session_idle_timeout_seconds: 1800,
        person_profiles: "identified_only",
        before_send: void 0,
        request_queue_config: {
            flush_interval_ms: Xn
        },
        error_tracking: {},
        _onCapture: $o,
        __preview_eager_load_replay: !1
    };
}, Po = (t)=>{
    var i = {};
    F(t.process_person) || (i.person_profiles = t.process_person), F(t.xhr_headers) || (i.request_headers = t.xhr_headers), F(t.cookie_name) || (i.persistence_name = t.cookie_name), F(t.disable_cookie) || (i.disable_persistence = t.disable_cookie), F(t.store_google) || (i.save_campaign_params = t.store_google), F(t.verbose) || (i.debug = t.verbose);
    var e = Mt({}, i, t);
    return I(t.property_blacklist) && (F(t.property_denylist) ? e.property_denylist = t.property_blacklist : I(t.property_denylist) ? e.property_denylist = [
        ...t.property_blacklist,
        ...t.property_denylist
    ] : Pt.error("Invalid value for property_denylist config: " + t.property_denylist)), e;
};
class To {
    get pr() {
        return this.__forceAllowLocalhost;
    }
    set pr(t) {
        Pt.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = t;
    }
    constructor(){
        this.__forceAllowLocalhost = !1;
    }
}
class Io {
    get decideEndpointWasHit() {
        var t, i;
        return null !== (t = null == (i = this.featureFlags) ? void 0 : i.hasLoadedFlags) && void 0 !== t && t;
    }
    get flagsEndpointWasHit() {
        var t, i;
        return null !== (t = null == (i = this.featureFlags) ? void 0 : i.hasLoadedFlags) && void 0 !== t && t;
    }
    init(t, i, e) {
        if (e && e !== So) {
            var r, s = null !== (r = xo[e]) && void 0 !== r ? r : new Io;
            return s._init(t, i, e), xo[e] = s, xo[So][e] = s, s;
        }
        return this._init(t, i, e);
    }
    _init(i, e, r) {
        var s;
        if (void 0 === e && (e = {}), F(i) || A(i)) return Pt.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
        if (this.__loaded) return console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
        this.__loaded = !0, this.config = {}, e.debug = this.$r(e.debug), this.Sr = e, this.Er = [], e.person_profiles && (this.br = e.person_profiles), this.set_config(Mt({}, ko(e.defaults), Po(e), {
            name: r,
            token: i
        })), this.config.on_xhr_error && Pt.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = e.disable_compression ? void 0 : re.GZipJS;
        var n = this.kr();
        this.persistence = new Pn(this.config, n), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new Pn(g({}, this.config, {
            persistence: "sessionStorage"
        }), n);
        var o = g({}, this.persistence.props), a = g({}, this.sessionPersistence.props);
        this.register({
            $initialization_time: (new Date).toISOString()
        }), this.Pr = new Qn((t)=>this.Tr(t), this.config.request_queue_config), this.Ir = new to(this), this.__request_queue = [];
        var l = "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isExplicitlyOptedOut();
        if (l || (this.sessionManager = new no(this), this.sessionPropsManager = new ro(this, this.sessionManager, this.persistence)), this.config.__preview_deferred_init_extensions ? (Pt.info("Deferring extension initialization to improve startup performance"), setTimeout(()=>{
            this.Rr(l);
        }, 0)) : (Pt.info("Initializing extensions synchronously"), this.Rr(l)), c.DEBUG = c.DEBUG || this.config.debug, c.DEBUG && Pt.info("Starting in debug mode", {
            this: this,
            config: e,
            thisC: g({}, this.config),
            p: o,
            s: a
        }), void 0 !== (null == (s = e.bootstrap) ? void 0 : s.distinctID)) {
            var u, h, d = this.config.get_device_id(xe()), v = null != (u = e.bootstrap) && u.isIdentifiedID ? d : e.bootstrap.distinctID;
            this.persistence.set_property(ci, null != (h = e.bootstrap) && h.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: e.bootstrap.distinctID,
                $device_id: v
            });
        }
        if (this.Cr()) {
            var f, p, _ = Object.keys((null == (f = e.bootstrap) ? void 0 : f.featureFlags) || {}).filter((t)=>{
                var i;
                return !(null == (i = e.bootstrap) || null == (i = i.featureFlags) || !i[t]);
            }).reduce((t, i)=>{
                var r;
                return t[i] = (null == (r = e.bootstrap) || null == (r = r.featureFlags) ? void 0 : r[i]) || !1, t;
            }, {}), m = Object.keys((null == (p = e.bootstrap) ? void 0 : p.featureFlagPayloads) || {}).filter((t)=>_[t]).reduce((t, i)=>{
                var r, s;
                null != (r = e.bootstrap) && null != (r = r.featureFlagPayloads) && r[i] && (t[i] = null == (s = e.bootstrap) || null == (s = s.featureFlagPayloads) ? void 0 : s[i]);
                return t;
            }, {});
            this.featureFlags.receivedFeatureFlags({
                featureFlags: _,
                featureFlagPayloads: m
            });
        }
        if (l) this.register_once({
            distinct_id: wi,
            $device_id: null
        }, "");
        else if (!this.get_distinct_id()) {
            var y = this.config.get_device_id(xe());
            this.register_once({
                distinct_id: y,
                $device_id: y
            }, ""), this.persistence.set_property(ci, "anonymous");
        }
        return qt(t, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
        }), this.toolbar.maybeLoadToolbar(), e.segment ? Ve(this, ()=>this.Or()) : this.Or(), R(this.config._onCapture) && this.config._onCapture !== $o && (Pt.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (t)=>this.config._onCapture(t.event, t))), this.config.ip && Pt.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this;
    }
    Rr(t) {
        var i = performance.now();
        this.historyAutocapture = new We(this), this.historyAutocapture.startIfEnabled();
        var e = [];
        e.push(()=>{
            new rr(this).startIfEnabledOrStop();
        }), e.push(()=>{
            var t;
            this.siteApps = new lo(this), null == (t = this.siteApps) || t.init();
        }), t || e.push(()=>{
            this.sessionRecording = new wo(this), this.sessionRecording.startIfEnabledOrStop();
        }), this.config.disable_scroll_properties || e.push(()=>{
            this.scrollManager.startMeasuringScrollPosition();
        }), e.push(()=>{
            this.autocapture = new pe(this), this.autocapture.startIfEnabled();
        }), e.push(()=>{
            this.surveys.loadIfEnabled();
        }), e.push(()=>{
            this.heatmaps = new bs(this), this.heatmaps.startIfEnabled();
        }), e.push(()=>{
            this.webVitalsAutocapture = new _s(this);
        }), e.push(()=>{
            this.exceptionObserver = new Be(this), this.exceptionObserver.startIfEnabled();
        }), e.push(()=>{
            this.deadClicksAutocapture = new ze(this, Ue), this.deadClicksAutocapture.startIfEnabled();
        }), e.push(()=>{
            if (this.Fr) {
                var t = this.Fr;
                this.Fr = void 0, this.fi(t);
            }
        }), this.Mr(e, i);
    }
    Mr(t, i) {
        for(; t.length > 0;){
            if (this.config.__preview_deferred_init_extensions) {
                if (performance.now() - i >= 30 && t.length > 0) return void setTimeout(()=>{
                    this.Mr(t, i);
                }, 0);
            }
            var e = t.shift();
            if (e) try {
                e();
            } catch (t) {
                Pt.error("Error initializing extension:", t);
            }
        }
        var r = Math.round(performance.now() - i);
        this.register_for_session({
            $sdk_debug_extensions_init_method: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            $sdk_debug_extensions_init_time_ms: r
        }), this.config.__preview_deferred_init_extensions && Pt.info("PostHog extensions initialized (" + r + "ms)");
    }
    fi(t) {
        var i, e, r, s, n, a, l, u;
        if (!o || !o.body) return Pt.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(()=>{
            this.fi(t);
        }, 500);
        this.config.__preview_deferred_init_extensions && (this.Fr = t), this.compression = void 0, t.supportedCompression && !this.config.disable_compression && (this.compression = w(t.supportedCompression, re.GZipJS) ? re.GZipJS : w(t.supportedCompression, re.Base64) ? re.Base64 : void 0), null != (i = t.analytics) && i.endpoint && (this.analyticsDefaultEndpoint = t.analytics.endpoint), this.set_config({
            person_profiles: this.br ? this.br : "identified_only"
        }), null == (e = this.siteApps) || e.onRemoteConfig(t), null == (r = this.sessionRecording) || r.onRemoteConfig(t), null == (s = this.autocapture) || s.onRemoteConfig(t), null == (n = this.heatmaps) || n.onRemoteConfig(t), this.surveys.onRemoteConfig(t), null == (a = this.webVitalsAutocapture) || a.onRemoteConfig(t), null == (l = this.exceptionObserver) || l.onRemoteConfig(t), this.exceptions.onRemoteConfig(t), null == (u = this.deadClicksAutocapture) || u.onRemoteConfig(t);
    }
    Or() {
        try {
            this.config.loaded(this);
        } catch (t) {
            Pt.critical("`loaded` function failed", t);
        }
        this.Ar(), this.config.capture_pageview && setTimeout(()=>{
            (this.consent.isOptedIn() || "always" === this.config.cookieless_mode) && this.Dr();
        }, 1), new Yn(this).load(), this.featureFlags.flags();
    }
    Ar() {
        var t;
        this.is_capturing() && this.config.request_batching && (null == (t = this.Pr) || t.enable());
    }
    _dom_loaded() {
        this.is_capturing() && Ot(this.__request_queue, (t)=>this.Tr(t)), this.__request_queue = [], this.Ar();
    }
    _handle_unload() {
        var t, i;
        this.config.request_batching ? (this.jr() && this.capture("$pageleave"), null == (t = this.Pr) || t.unload(), null == (i = this.Ir) || i.unload()) : this.jr() && this.capture("$pageleave", null, {
            transport: "sendBeacon"
        });
    }
    ci(t) {
        this.__loaded && (Eo ? this.__request_queue.push(t) : this.rateLimiter.isServerRateLimited(t.batchKey) || (t.transport = t.transport || this.config.api_transport, t.url = on(t.url, {
            ip: this.config.ip ? 1 : 0
        }), t.headers = g({}, this.config.request_headers), t.compression = "best-available" === t.compression ? this.compression : t.compression, t.disableXHRCredentials = this.config.__preview_disable_xhr_credentials, this.config.__preview_disable_beacon && (t.disableTransport = [
            "sendBeacon"
        ]), t.fetchOptions = t.fetchOptions || this.config.fetch_options, ((t)=>{
            var i, e, r, s = g({}, t);
            s.timeout = s.timeout || 6e4, s.url = on(s.url, {
                _: (new Date).getTime().toString(),
                ver: c.LIB_VERSION,
                compression: s.compression
            });
            var n = null !== (i = s.transport) && void 0 !== i ? i : "fetch", o = un.filter((t)=>!s.disableTransport || !t.transport || !s.disableTransport.includes(t.transport)), a = null !== (e = null == (r = Bt(o, (t)=>t.transport === n)) ? void 0 : r.method) && void 0 !== e ? e : o[0].method;
            if (!a) throw new Error("No available transport method");
            a(s);
        })(g({}, t, {
            callback: (i)=>{
                var e, r;
                (this.rateLimiter.checkForLimiting(i), i.statusCode >= 400) && (null == (e = (r = this.config).on_request_error) || e.call(r, i));
                null == t.callback || t.callback(i);
            }
        }))));
    }
    Tr(t) {
        this.Ir ? this.Ir.retriableRequest(t) : this.ci(t);
    }
    _execute_array(t) {
        var i, e = [], r = [], s = [];
        Ot(t, (t)=>{
            t && (i = t[0], I(i) ? s.push(t) : R(t) ? t.call(this) : I(t) && "alias" === i ? e.push(t) : I(t) && -1 !== i.indexOf("capture") && R(this[i]) ? s.push(t) : r.push(t));
        });
        var n = function(t, i) {
            Ot(t, function(t) {
                if (I(t[0])) {
                    var e = i;
                    Ft(t, function(t) {
                        e = e[t[0]].apply(e, t.slice(1));
                    });
                } else this[t[0]].apply(this, t.slice(1));
            }, i);
        };
        n(e, this), n(r, this), n(s, this);
    }
    Cr() {
        var t, i;
        return (null == (t = this.config.bootstrap) ? void 0 : t.featureFlags) && Object.keys(null == (i = this.config.bootstrap) ? void 0 : i.featureFlags).length > 0 || !1;
    }
    push(t) {
        this._execute_array([
            t
        ]);
    }
    capture(t, i, e) {
        var r;
        if (this.__loaded && this.persistence && this.sessionPersistence && this.Pr) {
            if (this.is_capturing()) if (!F(t) && M(t)) {
                var s = !this.config.opt_out_useragent_filter && this._is_bot();
                if (!(s && !this.config.__preview_capture_bot_pageviews)) {
                    var n = null != e && e.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                    if (null == n || !n.isRateLimited) {
                        null != i && i.$current_url && !M(null == i ? void 0 : i.$current_url) && (Pt.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == i || delete i.$current_url), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
                        var o = new Date, a = (null == e ? void 0 : e.timestamp) || o, l = xe(), u = {
                            uuid: l,
                            event: t,
                            properties: this.calculateEventProperties(t, i || {}, a, l)
                        };
                        "$pageview" === t && this.config.__preview_capture_bot_pageviews && s && (u.event = "$bot_pageview", u.properties.$browser_type = "bot"), n && (u.properties.$lib_rate_limit_remaining_tokens = n.remainingTokens), (null == e ? void 0 : e.$set) && (u.$set = null == e ? void 0 : e.$set);
                        var h, d = this.Lr(null == e ? void 0 : e.$set_once);
                        if (d && (u.$set_once = d), (u = Ut(u, null != e && e._noTruncate ? null : this.config.properties_string_max_length)).timestamp = a, F(null == e ? void 0 : e.timestamp) || (u.properties.$event_time_override_provided = !0, u.properties.$event_time_override_system_time = o), t === Mn.DISMISSED || t === Mn.SENT) {
                            var v = null == i ? void 0 : i[An.SURVEY_ID], c = null == i ? void 0 : i[An.SURVEY_ITERATION];
                            h = {
                                id: v,
                                current_iteration: c
                            }, localStorage.getItem(Hn(h)) || localStorage.setItem(Hn(h), "true"), u.$set = g({}, u.$set, {
                                [zn({
                                    id: v,
                                    current_iteration: c
                                }, t === Mn.SENT ? "responded" : "dismissed")]: !0
                            });
                        }
                        var f = g({}, u.properties.$set, u.$set);
                        if (O(f) || this.setPersonPropertiesForFlags(f), !j(this.config.before_send)) {
                            var p = this.Nr(u);
                            if (!p) return;
                            u = p;
                        }
                        this._r.emit("eventCaptured", u);
                        var _ = {
                            method: "POST",
                            url: null !== (r = null == e ? void 0 : e._url) && void 0 !== r ? r : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                            data: u,
                            compression: "best-available",
                            batchKey: null == e ? void 0 : e._batchKey
                        };
                        return !this.config.request_batching || e && (null == e || !e._batchKey) || null != e && e.send_instantly ? this.Tr(_) : this.Pr.enqueue(_), u;
                    }
                    Pt.critical("This capture call is ignored due to client rate limiting.");
                }
            } else Pt.error("No event name provided to posthog.capture");
        } else Pt.uninitializedWarning("posthog.capture");
    }
    Mi(t) {
        return this.on("eventCaptured", (i)=>t(i.event, i));
    }
    calculateEventProperties(t, i, e, r, s) {
        if (e = e || new Date, !this.persistence || !this.sessionPersistence) return i;
        var n = s ? void 0 : this.persistence.remove_event_timer(t), a = g({}, i);
        if (a.token = this.config.token, a.$config_defaults = this.config.defaults, ("always" == this.config.cookieless_mode || "on_reject" == this.config.cookieless_mode && this.consent.isExplicitlyOptedOut()) && (a.$cookieless_mode = !0), "$snapshot" === t) {
            var l = g({}, this.persistence.properties(), this.sessionPersistence.properties());
            return a.distinct_id = l.distinct_id, (!M(a.distinct_id) && !L(a.distinct_id) || A(a.distinct_id)) && Pt.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), a;
        }
        var u, h = fs(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties);
        if (this.sessionManager) {
            var { sessionId: v, windowId: c } = this.sessionManager.checkAndGetSessionAndWindowId(s, e.getTime());
            a.$session_id = v, a.$window_id = c;
        }
        this.sessionPropsManager && Mt(a, this.sessionPropsManager.getSessionProps());
        try {
            var f;
            this.sessionRecording && Mt(a, this.sessionRecording.sdkDebugProperties), a.$sdk_debug_retry_queue_size = null == (f = this.Ir) ? void 0 : f.length;
        } catch (t) {
            a.$sdk_debug_error_capturing_properties = String(t);
        }
        if (this.requestRouter.region === ho.CUSTOM && (a.$lib_custom_api_host = this.config.api_host), u = "$pageview" !== t || s ? "$pageleave" !== t || s ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(e) : this.pageViewManager.doPageView(e, r), a = Mt(a, u), "$pageview" === t && o && (a.title = o.title), !F(n)) {
            var p = e.getTime() - n;
            a.$duration = parseFloat((p / 1e3).toFixed(3));
        }
        d && this.config.opt_out_useragent_filter && (a.$browser_type = this._is_bot() ? "bot" : "browser"), (a = Mt({}, h, this.persistence.properties(), this.sessionPersistence.properties(), a)).$is_identified = this._isIdentified(), I(this.config.property_denylist) ? Ft(this.config.property_denylist, function(t) {
            delete a[t];
        }) : Pt.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
        var _ = this.config.sanitize_properties;
        _ && (Pt.error("sanitize_properties is deprecated. Use before_send instead"), a = _(a, t));
        var m = this.Ur();
        return a.$process_person_profile = m, m && !s && this.zr("_calculate_event_properties"), a;
    }
    Lr(t) {
        var i;
        if (!this.persistence || !this.Ur()) return t;
        if (this.gr) return t;
        var e = this.persistence.get_initial_props(), r = null == (i = this.sessionPropsManager) ? void 0 : i.getSetOnceProps(), s = Mt({}, e, r || {}, t || {}), n = this.config.sanitize_properties;
        return n && (Pt.error("sanitize_properties is deprecated. Use before_send instead"), s = n(s, "$set_once")), this.gr = !0, O(s) ? void 0 : s;
    }
    register(t, i) {
        var e;
        null == (e = this.persistence) || e.register(t, i);
    }
    register_once(t, i, e) {
        var r;
        null == (r = this.persistence) || r.register_once(t, i, e);
    }
    register_for_session(t) {
        var i;
        null == (i = this.sessionPersistence) || i.register(t);
    }
    unregister(t) {
        var i;
        null == (i = this.persistence) || i.unregister(t);
    }
    unregister_for_session(t) {
        var i;
        null == (i = this.sessionPersistence) || i.unregister(t);
    }
    Hr(t, i) {
        this.register({
            [t]: i
        });
    }
    getFeatureFlag(t, i) {
        return this.featureFlags.getFeatureFlag(t, i);
    }
    getFeatureFlagPayload(t) {
        var i = this.featureFlags.getFeatureFlagPayload(t);
        try {
            return JSON.parse(i);
        } catch (t) {
            return i;
        }
    }
    isFeatureEnabled(t, i) {
        return this.featureFlags.isFeatureEnabled(t, i);
    }
    reloadFeatureFlags() {
        this.featureFlags.reloadFeatureFlags();
    }
    updateEarlyAccessFeatureEnrollment(t, i, e) {
        this.featureFlags.updateEarlyAccessFeatureEnrollment(t, i, e);
    }
    getEarlyAccessFeatures(t, i, e) {
        return void 0 === i && (i = !1), this.featureFlags.getEarlyAccessFeatures(t, i, e);
    }
    on(t, i) {
        return this._r.on(t, i);
    }
    onFeatureFlags(t) {
        return this.featureFlags.onFeatureFlags(t);
    }
    onSurveysLoaded(t) {
        return this.surveys.onSurveysLoaded(t);
    }
    onSessionId(t) {
        var i, e;
        return null !== (i = null == (e = this.sessionManager) ? void 0 : e.onSessionId(t)) && void 0 !== i ? i : ()=>{};
    }
    getSurveys(t, i) {
        void 0 === i && (i = !1), this.surveys.getSurveys(t, i);
    }
    getActiveMatchingSurveys(t, i) {
        void 0 === i && (i = !1), this.surveys.getActiveMatchingSurveys(t, i);
    }
    renderSurvey(t, i) {
        this.surveys.renderSurvey(t, i);
    }
    displaySurvey(t, i) {
        void 0 === i && (i = qn), this.surveys.displaySurvey(t, i);
    }
    canRenderSurvey(t) {
        return this.surveys.canRenderSurvey(t);
    }
    canRenderSurveyAsync(t, i) {
        return void 0 === i && (i = !1), this.surveys.canRenderSurveyAsync(t, i);
    }
    identify(t, i, e) {
        if (!this.__loaded || !this.persistence) return Pt.uninitializedWarning("posthog.identify");
        if (L(t) && (t = t.toString(), Pt.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), t) if ([
            "distinct_id",
            "distinctid"
        ].includes(t.toLowerCase())) Pt.critical('The string "' + t + '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.');
        else if (t !== wi) {
            if (this.zr("posthog.identify")) {
                var r = this.get_distinct_id();
                if (this.register({
                    $user_id: t
                }), !this.get_property("$device_id")) {
                    var s = r;
                    this.register_once({
                        $had_persisted_distinct_id: !0,
                        $device_id: s
                    }, "");
                }
                t !== r && t !== this.get_property(Gt) && (this.unregister(Gt), this.register({
                    distinct_id: t
                }));
                var n = "anonymous" === (this.persistence.get_property(ci) || "anonymous");
                t !== r && n ? (this.persistence.set_property(ci, "identified"), this.setPersonPropertiesForFlags(g({}, e || {}, i || {}), !1), this.capture("$identify", {
                    distinct_id: t,
                    $anon_distinct_id: r
                }, {
                    $set: i || {},
                    $set_once: e || {}
                }), this.wr = dn(t, i, e), this.featureFlags.setAnonymousDistinctId(r)) : (i || e) && this.setPersonProperties(i, e), t !== r && (this.reloadFeatureFlags(), this.unregister(vi));
            }
        } else Pt.critical('The string "' + wi + '" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.');
        else Pt.error("Unique user id has not been set in posthog.identify");
    }
    setPersonProperties(t, i) {
        if ((t || i) && this.zr("posthog.setPersonProperties")) {
            var e = dn(this.get_distinct_id(), t, i);
            this.wr !== e ? (this.setPersonPropertiesForFlags(g({}, i || {}, t || {})), this.capture("$set", {
                $set: t || {},
                $set_once: i || {}
            }), this.wr = e) : Pt.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.");
        }
    }
    group(t, i, e) {
        if (t && i) {
            if (this.zr("posthog.group")) {
                var r = this.getGroups();
                r[t] !== i && this.resetGroupPropertiesForFlags(t), this.register({
                    $groups: g({}, r, {
                        [t]: i
                    })
                }), e && (this.capture("$groupidentify", {
                    $group_type: t,
                    $group_key: i,
                    $group_set: e
                }), this.setGroupPropertiesForFlags({
                    [t]: e
                })), r[t] === i || e || this.reloadFeatureFlags();
            }
        } else Pt.error("posthog.group requires a group type and group key");
    }
    resetGroups() {
        this.register({
            $groups: {}
        }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
    }
    setPersonPropertiesForFlags(t, i) {
        void 0 === i && (i = !0), this.featureFlags.setPersonPropertiesForFlags(t, i);
    }
    resetPersonPropertiesForFlags() {
        this.featureFlags.resetPersonPropertiesForFlags();
    }
    setGroupPropertiesForFlags(t, i) {
        void 0 === i && (i = !0), this.zr("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(t, i);
    }
    resetGroupPropertiesForFlags(t) {
        this.featureFlags.resetGroupPropertiesForFlags(t);
    }
    reset(t) {
        var i, e, r, s;
        if (Pt.info("reset"), !this.__loaded) return Pt.uninitializedWarning("posthog.reset");
        var n = this.get_property("$device_id");
        if (this.consent.reset(), null == (i = this.persistence) || i.clear(), null == (e = this.sessionPersistence) || e.clear(), this.surveys.reset(), this.featureFlags.reset(), null == (r = this.persistence) || r.set_property(ci, "anonymous"), null == (s = this.sessionManager) || s.resetSessionId(), this.wr = null, "always" === this.config.cookieless_mode) this.register_once({
            distinct_id: wi,
            $device_id: null
        }, "");
        else {
            var o = this.config.get_device_id(xe());
            this.register_once({
                distinct_id: o,
                $device_id: t ? o : n
            }, "");
        }
        this.register({
            $last_posthog_reset: (new Date).toISOString()
        }, 1);
    }
    get_distinct_id() {
        return this.get_property("distinct_id");
    }
    getGroups() {
        return this.get_property("$groups") || {};
    }
    get_session_id() {
        var t, i;
        return null !== (t = null == (i = this.sessionManager) ? void 0 : i.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== t ? t : "";
    }
    get_session_replay_url(t) {
        if (!this.sessionManager) return "";
        var { sessionId: i, sessionStartTimestamp: e } = this.sessionManager.checkAndGetSessionAndWindowId(!0), r = this.requestRouter.endpointFor("ui", "/project/" + this.config.token + "/replay/" + i);
        if (null != t && t.withTimestamp && e) {
            var s, n = null !== (s = t.timestampLookBack) && void 0 !== s ? s : 10;
            if (!e) return r;
            r += "?t=" + Math.max(Math.floor(((new Date).getTime() - e) / 1e3) - n, 0);
        }
        return r;
    }
    alias(t, i) {
        return t === this.get_property(Wt) ? (Pt.critical("Attempting to create alias for existing People user - aborting."), -2) : this.zr("posthog.alias") ? (F(i) && (i = this.get_distinct_id()), t !== i ? (this.Hr(Gt, t), this.capture("$create_alias", {
            alias: t,
            distinct_id: i
        })) : (Pt.warn("alias matches current distinct_id - skipping api call."), this.identify(t), -1)) : void 0;
    }
    set_config(t) {
        var i = g({}, this.config);
        if (C(t)) {
            var e, r, s, n, o;
            Mt(this.config, Po(t));
            var a = this.kr();
            null == (e = this.persistence) || e.update_config(this.config, i, a), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new Pn(g({}, this.config, {
                persistence: "sessionStorage"
            }), a);
            var l = this.$r(this.config.debug);
            N(l) && (this.config.debug = l), N(this.config.debug) && (this.config.debug ? (c.DEBUG = !0, Ie.H() && Ie.G("ph_debug", "true"), Pt.info("set_config", {
                config: t,
                oldConfig: i,
                newConfig: g({}, this.config)
            })) : (c.DEBUG = !1, Ie.H() && Ie.V("ph_debug"))), null == (r = this.sessionRecording) || r.startIfEnabledOrStop(), null == (s = this.autocapture) || s.startIfEnabled(), null == (n = this.heatmaps) || n.startIfEnabled(), this.surveys.loadIfEnabled(), this.Br(), null == (o = this.externalIntegrations) || o.startIfEnabledOrStop();
        }
    }
    startSessionRecording(t) {
        var i = !0 === t, e = {
            sampling: i || !(null == t || !t.sampling),
            linked_flag: i || !(null == t || !t.linked_flag),
            url_trigger: i || !(null == t || !t.url_trigger),
            event_trigger: i || !(null == t || !t.event_trigger)
        };
        if (Object.values(e).some(Boolean)) {
            var r, s, n, o, a;
            if (null == (r = this.sessionManager) || r.checkAndGetSessionAndWindowId(), e.sampling) null == (s = this.sessionRecording) || s.overrideSampling();
            if (e.linked_flag) null == (n = this.sessionRecording) || n.overrideLinkedFlag();
            if (e.url_trigger) null == (o = this.sessionRecording) || o.overrideTrigger("url");
            if (e.event_trigger) null == (a = this.sessionRecording) || a.overrideTrigger("event");
        }
        this.set_config({
            disable_session_recording: !1
        });
    }
    stopSessionRecording() {
        this.set_config({
            disable_session_recording: !0
        });
    }
    sessionRecordingStarted() {
        var t;
        return !(null == (t = this.sessionRecording) || !t.started);
    }
    captureException(t, i) {
        var e = new Error("PostHog syntheticException"), r = this.exceptions.buildProperties(t, {
            handled: !0,
            syntheticException: e
        });
        return this.exceptions.sendExceptionEvent(g({}, r, i));
    }
    loadToolbar(t) {
        return this.toolbar.loadToolbar(t);
    }
    get_property(t) {
        var i;
        return null == (i = this.persistence) ? void 0 : i.props[t];
    }
    getSessionProperty(t) {
        var i;
        return null == (i = this.sessionPersistence) ? void 0 : i.props[t];
    }
    toString() {
        var t, i = null !== (t = this.config.name) && void 0 !== t ? t : So;
        return i !== So && (i = So + "." + i), i;
    }
    _isIdentified() {
        var t, i;
        return "identified" === (null == (t = this.persistence) ? void 0 : t.get_property(ci)) || "identified" === (null == (i = this.sessionPersistence) ? void 0 : i.get_property(ci));
    }
    Ur() {
        var t, i;
        return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && O(this.getGroups()) && (null == (t = this.persistence) || null == (t = t.props) || !t[Gt]) && (null == (i = this.persistence) || null == (i = i.props) || !i[yi]));
    }
    jr() {
        return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && (!0 === this.config.capture_pageview || "history_change" === this.config.capture_pageview);
    }
    createPersonProfile() {
        this.Ur() || this.zr("posthog.createPersonProfile") && this.setPersonProperties({}, {});
    }
    zr(t) {
        return "never" === this.config.person_profiles ? (Pt.error(t + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this.Hr(yi, !0), !0);
    }
    kr() {
        if ("always" === this.config.cookieless_mode) return !0;
        var t = this.consent.isOptedOut(), i = this.config.opt_out_persistence_by_default || "on_reject" === this.config.cookieless_mode;
        return this.config.disable_persistence || t && !!i;
    }
    Br() {
        var t, i, e, r, s = this.kr();
        (null == (t = this.persistence) ? void 0 : t.wi) !== s && (null == (e = this.persistence) || e.set_disabled(s));
        (null == (i = this.sessionPersistence) ? void 0 : i.wi) !== s && (null == (r = this.sessionPersistence) || r.set_disabled(s));
        return s;
    }
    opt_in_capturing(t) {
        if ("always" !== this.config.cookieless_mode) {
            var i, e;
            if ("on_reject" === this.config.cookieless_mode && this.consent.isExplicitlyOptedOut()) this.reset(!0), null == (i = this.sessionManager) || i.destroy(), this.sessionManager = new no(this), this.persistence && (this.sessionPropsManager = new ro(this, this.sessionManager, this.persistence)), this.sessionRecording = new wo(this), this.sessionRecording.startIfEnabledOrStop();
            if (this.consent.optInOut(!0), this.Br(), this.Ar(), "on_reject" == this.config.cookieless_mode && this.surveys.loadIfEnabled(), F(null == t ? void 0 : t.captureEventName) || null != t && t.captureEventName) this.capture(null !== (e = null == t ? void 0 : t.captureEventName) && void 0 !== e ? e : "$opt_in", null == t ? void 0 : t.captureProperties, {
                send_instantly: !0
            });
            this.config.capture_pageview && this.Dr();
        } else Pt.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored');
    }
    opt_out_capturing() {
        var t, i;
        "always" !== this.config.cookieless_mode ? ("on_reject" === this.config.cookieless_mode && this.consent.isOptedIn() && this.reset(!0), this.consent.optInOut(!1), this.Br(), "on_reject" === this.config.cookieless_mode && (this.register({
            distinct_id: wi,
            $device_id: null
        }), null == (t = this.sessionManager) || t.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, null == (i = this.sessionRecording) || i.stopRecording(), this.sessionRecording = void 0, this.Dr())) : Pt.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored');
    }
    has_opted_in_capturing() {
        return this.consent.isOptedIn();
    }
    has_opted_out_capturing() {
        return this.consent.isOptedOut();
    }
    get_explicit_consent_status() {
        var t = this.consent.consent;
        return t === De.GRANTED ? "granted" : t === De.DENIED ? "denied" : "pending";
    }
    is_capturing() {
        return "always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isExplicitlyOptedOut() || this.consent.isOptedIn() : !this.has_opted_out_capturing());
    }
    clear_opt_in_out_capturing() {
        this.consent.reset(), this.Br();
    }
    _is_bot() {
        return n ? uo(n, this.config.custom_blocked_useragents) : void 0;
    }
    Dr() {
        o && ("visible" === o.visibilityState ? this.mr || (this.mr = !0, this.capture("$pageview", {
            title: o.title
        }, {
            send_instantly: !0
        }), this.yr && (o.removeEventListener("visibilitychange", this.yr), this.yr = null)) : this.yr || (this.yr = this.Dr.bind(this), qt(o, "visibilitychange", this.yr)));
    }
    debug(i) {
        !1 === i ? (null == t || t.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
        })) : (null == t || t.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
        }));
    }
    M() {
        var t, i, e, r, s, n, o, a = this.Sr || {};
        return "advanced_disable_flags" in a ? !!a.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (Pt.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : (e = "advanced_disable_decide", r = !1, s = Pt, n = (i = "advanced_disable_flags") in (t = a) && !F(t[i]), o = e in t && !F(t[e]), n ? t[i] : o ? (s && s.warn("Config field '" + e + "' is deprecated. Please use '" + i + "' instead. The old field will be removed in a future major version."), t[e]) : r);
    }
    Nr(t) {
        if (j(this.config.before_send)) return t;
        var i = I(this.config.before_send) ? this.config.before_send : [
            this.config.before_send
        ], e = t;
        for (var r of i){
            if (e = r(e), j(e)) {
                var s = "Event '" + t.event + "' was rejected in beforeSend function";
                return z(t.event) ? Pt.warn(s + ". This can cause unexpected behavior.") : Pt.info(s), null;
            }
            e.properties && !O(e.properties) || Pt.warn("Event '" + t.event + "' has no properties after beforeSend function, this is likely an error.");
        }
        return e;
    }
    getPageViewId() {
        var t;
        return null == (t = this.pageViewManager.Vt) ? void 0 : t.pageViewId;
    }
    captureTraceFeedback(t, i) {
        this.capture("$ai_feedback", {
            $ai_trace_id: String(t),
            $ai_feedback_text: i
        });
    }
    captureTraceMetric(t, i, e) {
        this.capture("$ai_metric", {
            $ai_trace_id: String(t),
            $ai_metric_name: i,
            $ai_metric_value: String(e)
        });
    }
    $r(t) {
        var i = N(t) && !t, e = Ie.H() && "true" === Ie.q("ph_debug");
        return !i && (!!e || t);
    }
    constructor(){
        this.webPerformance = new To, this.gr = !1, this.version = c.LIB_VERSION, this._r = new jn, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = ko(), this.SentryIntegration = Ye, this.sentryIntegration = (t)=>(function(t, i) {
                var e = Ke(t, i);
                return {
                    name: Je,
                    processEvent: (t)=>e(t)
                };
            })(this, t), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this.mr = !1, this.yr = null, this.br = null, this.wr = null, this.featureFlags = new En(this), this.toolbar = new ir(this), this.scrollManager = new io(this), this.pageViewManager = new ws(this), this.surveys = new Gn(this), this.experiments = new po(this), this.exceptions = new pn(this), this.rateLimiter = new Jn(this), this.requestRouter = new co(this), this.consent = new je(this), this.externalIntegrations = new mo(this), this.people = {
            set: (t, i, e)=>{
                var r = M(t) ? {
                    [t]: i
                } : t;
                this.setPersonProperties(r), null == e || e({});
            },
            set_once: (t, i, e)=>{
                var r = M(t) ? {
                    [t]: i
                } : t;
                this.setPersonProperties(void 0, r), null == e || e({});
            }
        }, this.on("eventCaptured", (t)=>Pt.info('send "' + (null == t ? void 0 : t.event) + '"', t));
    }
}
!function(t, i) {
    for(var e = 0; e < i.length; e++)t.prototype[i[e]] = Lt(t.prototype[i[e]]);
}(Io, [
    "identify"
]);
var Ro, Co = (Ro = xo[So] = new Io, function() {
    function i() {
        i.done || (i.done = !0, Eo = !1, Ft(xo, function(t) {
            t._dom_loaded();
        }));
    }
    null != o && o.addEventListener ? "complete" === o.readyState ? i() : qt(o, "DOMContentLoaded", i, {
        capture: !1
    }) : t && Pt.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
}(), Ro);
;
 //# sourceMappingURL=module.js.map
}),
"[project]/portfolio/node_modules/posthog-js/react/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostHogCaptureOnViewed",
    ()=>PostHogCaptureOnViewed,
    "PostHogContext",
    ()=>PostHogContext,
    "PostHogErrorBoundary",
    ()=>PostHogErrorBoundary,
    "PostHogFeature",
    ()=>PostHogFeature,
    "PostHogProvider",
    ()=>PostHogProvider,
    "captureFeatureInteraction",
    ()=>captureFeatureInteraction,
    "captureFeatureView",
    ()=>captureFeatureView,
    "setupReactErrorHandler",
    ()=>setupReactErrorHandler,
    "useActiveFeatureFlags",
    ()=>useActiveFeatureFlags,
    "useFeatureFlagEnabled",
    ()=>useFeatureFlagEnabled,
    "useFeatureFlagPayload",
    ()=>useFeatureFlagPayload,
    "useFeatureFlagVariantKey",
    ()=>useFeatureFlagVariantKey,
    "usePostHog",
    ()=>usePostHog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/posthog-js/dist/module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var PostHogContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    client: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    bootstrap: undefined
});
function isDeepEqual(obj1, obj2, visited) {
    if (visited === void 0) {
        visited = new WeakMap();
    }
    if (obj1 === obj2) {
        return true;
    }
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
    if (visited.has(obj1) && visited.get(obj1) === obj2) {
        return true;
    }
    visited.set(obj1, obj2);
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for(var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++){
        var key = keys1_1[_i];
        if (!keys2.includes(key)) {
            return false;
        }
        if (!isDeepEqual(obj1[key], obj2[key], visited)) {
            return false;
        }
    }
    return true;
}
function PostHogProvider(_a) {
    var _b, _c;
    var children = _a.children, client = _a.client, apiKey = _a.apiKey, options = _a.options;
    var previousInitializationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var posthog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PostHogProvider.useMemo[posthog]": function() {
            if (client) {
                if (apiKey) {
                    console.warn('[PostHog.js] You have provided both `client` and `apiKey` to `PostHogProvider`. `apiKey` will be ignored in favour of `client`.');
                }
                if (options) {
                    console.warn('[PostHog.js] You have provided both `client` and `options` to `PostHogProvider`. `options` will be ignored in favour of `client`.');
                }
                return client;
            }
            if (apiKey) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
            }
            console.warn('[PostHog.js] No `apiKey` or `client` were provided to `PostHogProvider`. Using default global `window.posthog` instance. You must initialize it manually. This is not recommended behavior.');
            return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        }
    }["PostHogProvider.useMemo[posthog]"], [
        client,
        apiKey,
        JSON.stringify(options)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostHogProvider.useEffect": function() {
            if (client) {
                return;
            }
            var previousInitialization = previousInitializationRef.current;
            if (!previousInitialization) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].__loaded) {
                    console.warn('[PostHog.js] `posthog` was already loaded elsewhere. This may cause issues.');
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init(apiKey, options);
                previousInitializationRef.current = {
                    apiKey: apiKey,
                    options: options !== null && options !== void 0 ? options : {}
                };
            } else {
                if (apiKey !== previousInitialization.apiKey) {
                    console.warn("[PostHog.js] You have provided a different `apiKey` to `PostHogProvider` than the one that was already initialized. This is not supported by our provider and we'll keep using the previous key. If you need to toggle between API Keys you need to control the `client` yourself and pass it in as a prop rather than an `apiKey` prop.");
                }
                if (options && !isDeepEqual(options, previousInitialization.options)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set_config(options);
                }
                previousInitializationRef.current = {
                    apiKey: apiKey,
                    options: options !== null && options !== void 0 ? options : {}
                };
            }
        }
    }["PostHogProvider.useEffect"], [
        client,
        apiKey,
        JSON.stringify(options)
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PostHogContext.Provider, {
        value: {
            client: posthog,
            bootstrap: (_b = options === null || options === void 0 ? void 0 : options.bootstrap) !== null && _b !== void 0 ? _b : (_c = client === null || client === void 0 ? void 0 : client.config) === null || _c === void 0 ? void 0 : _c.bootstrap
        }
    }, children);
}
var isFunction = function(f) {
    return typeof f === 'function';
};
var isUndefined = function(x) {
    return x === void 0;
};
var isNull = function(x) {
    return x === null;
};
function useFeatureFlagEnabled(flag) {
    var _a;
    var _b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PostHogContext), client = _b.client, bootstrap = _b.bootstrap;
    var _c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useFeatureFlagEnabled.useState[_c]": function() {
            return client.isFeatureEnabled(flag);
        }
    }["useFeatureFlagEnabled.useState[_c]"]), featureEnabled = _c[0], setFeatureEnabled = _c[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFeatureFlagEnabled.useEffect": function() {
            return client.onFeatureFlags({
                "useFeatureFlagEnabled.useEffect": function() {
                    setFeatureEnabled(client.isFeatureEnabled(flag));
                }
            }["useFeatureFlagEnabled.useEffect"]);
        }
    }["useFeatureFlagEnabled.useEffect"], [
        client,
        flag
    ]);
    var bootstrapped = (_a = bootstrap === null || bootstrap === void 0 ? void 0 : bootstrap.featureFlags) === null || _a === void 0 ? void 0 : _a[flag];
    if (!client.featureFlags.hasLoadedFlags && (bootstrap === null || bootstrap === void 0 ? void 0 : bootstrap.featureFlags)) {
        return isUndefined(bootstrapped) ? undefined : !!bootstrapped;
    }
    return featureEnabled;
}
function useFeatureFlagPayload(flag) {
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PostHogContext), client = _a.client, bootstrap = _a.bootstrap;
    var _b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useFeatureFlagPayload.useState[_b]": function() {
            return client.getFeatureFlagPayload(flag);
        }
    }["useFeatureFlagPayload.useState[_b]"]), featureFlagPayload = _b[0], setFeatureFlagPayload = _b[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFeatureFlagPayload.useEffect": function() {
            return client.onFeatureFlags({
                "useFeatureFlagPayload.useEffect": function() {
                    setFeatureFlagPayload(client.getFeatureFlagPayload(flag));
                }
            }["useFeatureFlagPayload.useEffect"]);
        }
    }["useFeatureFlagPayload.useEffect"], [
        client,
        flag
    ]);
    if (!client.featureFlags.hasLoadedFlags && (bootstrap === null || bootstrap === void 0 ? void 0 : bootstrap.featureFlagPayloads)) {
        return bootstrap.featureFlagPayloads[flag];
    }
    return featureFlagPayload;
}
function useActiveFeatureFlags() {
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PostHogContext), client = _a.client, bootstrap = _a.bootstrap;
    var _b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useActiveFeatureFlags.useState[_b]": function() {
            return client.featureFlags.getFlags();
        }
    }["useActiveFeatureFlags.useState[_b]"]), featureFlags = _b[0], setFeatureFlags = _b[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useActiveFeatureFlags.useEffect": function() {
            return client.onFeatureFlags({
                "useActiveFeatureFlags.useEffect": function(flags) {
                    setFeatureFlags(flags);
                }
            }["useActiveFeatureFlags.useEffect"]);
        }
    }["useActiveFeatureFlags.useEffect"], [
        client
    ]);
    if (!client.featureFlags.hasLoadedFlags && (bootstrap === null || bootstrap === void 0 ? void 0 : bootstrap.featureFlags)) {
        return Object.keys(bootstrap.featureFlags);
    }
    return featureFlags;
}
function useFeatureFlagVariantKey(flag) {
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PostHogContext), client = _a.client, bootstrap = _a.bootstrap;
    var _b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useFeatureFlagVariantKey.useState[_b]": function() {
            return client.getFeatureFlag(flag);
        }
    }["useFeatureFlagVariantKey.useState[_b]"]), featureFlagVariantKey = _b[0], setFeatureFlagVariantKey = _b[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFeatureFlagVariantKey.useEffect": function() {
            return client.onFeatureFlags({
                "useFeatureFlagVariantKey.useEffect": function() {
                    setFeatureFlagVariantKey(client.getFeatureFlag(flag));
                }
            }["useFeatureFlagVariantKey.useEffect"]);
        }
    }["useFeatureFlagVariantKey.useEffect"], [
        client,
        flag
    ]);
    if (!client.featureFlags.hasLoadedFlags && (bootstrap === null || bootstrap === void 0 ? void 0 : bootstrap.featureFlags)) {
        return bootstrap.featureFlags[flag];
    }
    return featureFlagVariantKey;
}
var usePostHog = function() {
    var client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PostHogContext).client;
    return client;
};
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function VisibilityAndClickTracker(_a) {
    var children = _a.children, onIntersect = _a.onIntersect, onClick = _a.onClick, trackView = _a.trackView, options = _a.options, props = __rest(_a, [
        "children",
        "onIntersect",
        "onClick",
        "trackView",
        "options"
    ]);
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var observerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VisibilityAndClickTracker.useMemo[observerOptions]": function() {
            return __assign({
                threshold: 0.1
            }, options);
        }
    }["VisibilityAndClickTracker.useMemo[observerOptions]"], [
        options === null || options === void 0 ? void 0 : options.threshold,
        options === null || options === void 0 ? void 0 : options.root,
        options === null || options === void 0 ? void 0 : options.rootMargin
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisibilityAndClickTracker.useEffect": function() {
            if (isNull(ref.current) || !trackView) return;
            var observer = new IntersectionObserver({
                "VisibilityAndClickTracker.useEffect": function(_a) {
                    var entry = _a[0];
                    return onIntersect(entry);
                }
            }["VisibilityAndClickTracker.useEffect"], observerOptions);
            observer.observe(ref.current);
            return ({
                "VisibilityAndClickTracker.useEffect": function() {
                    return observer.disconnect();
                }
            })["VisibilityAndClickTracker.useEffect"];
        }
    }["VisibilityAndClickTracker.useEffect"], [
        observerOptions,
        trackView,
        onIntersect
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", __assign({
        ref: ref
    }, props, {
        onClick: onClick
    }), children);
}
function VisibilityAndClickTrackers(_a) {
    var children = _a.children, trackInteraction = _a.trackInteraction, trackView = _a.trackView, options = _a.options, onInteract = _a.onInteract, onView = _a.onView, props = __rest(_a, [
        "children",
        "trackInteraction",
        "trackView",
        "options",
        "onInteract",
        "onView"
    ]);
    var clickTrackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var visibilityTrackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var cachedOnClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VisibilityAndClickTrackers.useCallback[cachedOnClick]": function() {
            if (!clickTrackedRef.current && trackInteraction && onInteract) {
                onInteract();
                clickTrackedRef.current = true;
            }
        }
    }["VisibilityAndClickTrackers.useCallback[cachedOnClick]"], [
        trackInteraction,
        onInteract
    ]);
    var onIntersect = function(entry) {
        if (!visibilityTrackedRef.current && entry.isIntersecting && onView) {
            onView();
            visibilityTrackedRef.current = true;
        }
    };
    var trackedChildren = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, function(child) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(VisibilityAndClickTracker, __assign({
            onClick: cachedOnClick,
            onIntersect: onIntersect,
            trackView: trackView,
            options: options
        }, props), child);
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, trackedChildren);
}
function PostHogFeature(_a) {
    var flag = _a.flag, match = _a.match, children = _a.children, fallback = _a.fallback, visibilityObserverOptions = _a.visibilityObserverOptions, trackInteraction = _a.trackInteraction, trackView = _a.trackView, props = __rest(_a, [
        "flag",
        "match",
        "children",
        "fallback",
        "visibilityObserverOptions",
        "trackInteraction",
        "trackView"
    ]);
    var payload = useFeatureFlagPayload(flag);
    var variant = useFeatureFlagVariantKey(flag);
    var posthog = usePostHog();
    var shouldTrackInteraction = trackInteraction !== null && trackInteraction !== void 0 ? trackInteraction : true;
    var shouldTrackView = trackView !== null && trackView !== void 0 ? trackView : true;
    if (isUndefined(match) || variant === match) {
        var childNode = isFunction(children) ? children(payload) : children;
        return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(VisibilityAndClickTrackers, __assign({
            flag: flag,
            options: visibilityObserverOptions,
            trackInteraction: shouldTrackInteraction,
            trackView: shouldTrackView,
            onInteract: function() {
                return captureFeatureInteraction({
                    flag: flag,
                    posthog: posthog,
                    flagVariant: variant
                });
            },
            onView: function() {
                return captureFeatureView({
                    flag: flag,
                    posthog: posthog,
                    flagVariant: variant
                });
            }
        }, props), childNode);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, fallback);
}
function captureFeatureInteraction(_a) {
    var _b;
    var flag = _a.flag, posthog = _a.posthog, flagVariant = _a.flagVariant;
    var properties = {
        feature_flag: flag,
        $set: (_b = {}, _b["$feature_interaction/".concat(flag)] = flagVariant !== null && flagVariant !== void 0 ? flagVariant : true, _b)
    };
    if (typeof flagVariant === 'string') {
        properties.feature_flag_variant = flagVariant;
    }
    posthog.capture('$feature_interaction', properties);
}
function captureFeatureView(_a) {
    var _b;
    var flag = _a.flag, posthog = _a.posthog, flagVariant = _a.flagVariant;
    var properties = {
        feature_flag: flag,
        $set: (_b = {}, _b["$feature_view/".concat(flag)] = flagVariant !== null && flagVariant !== void 0 ? flagVariant : true, _b)
    };
    if (typeof flagVariant === 'string') {
        properties.feature_flag_variant = flagVariant;
    }
    posthog.capture('$feature_view', properties);
}
function TrackedChild(_a) {
    var child = _a.child, index = _a.index, name = _a.name, properties = _a.properties, observerOptions = _a.observerOptions;
    var trackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var posthog = usePostHog();
    var onIntersect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TrackedChild.useCallback[onIntersect]": function(entry) {
            if (entry.isIntersecting && !trackedRef.current) {
                posthog.capture('$element_viewed', __assign({
                    element_name: name,
                    child_index: index
                }, properties));
                trackedRef.current = true;
            }
        }
    }["TrackedChild.useCallback[onIntersect]"], [
        posthog,
        name,
        index,
        properties
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(VisibilityAndClickTracker, {
        onIntersect: onIntersect,
        trackView: true,
        options: observerOptions
    }, child);
}
function PostHogCaptureOnViewed(_a) {
    var name = _a.name, properties = _a.properties, observerOptions = _a.observerOptions, trackAllChildren = _a.trackAllChildren, children = _a.children, props = __rest(_a, [
        "name",
        "properties",
        "observerOptions",
        "trackAllChildren",
        "children"
    ]);
    var trackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var posthog = usePostHog();
    var onIntersect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostHogCaptureOnViewed.useCallback[onIntersect]": function(entry) {
            if (entry.isIntersecting && !trackedRef.current) {
                posthog.capture('$element_viewed', __assign({
                    element_name: name
                }, properties));
                trackedRef.current = true;
            }
        }
    }["PostHogCaptureOnViewed.useCallback[onIntersect]"], [
        posthog,
        name,
        properties
    ]);
    if (trackAllChildren) {
        var trackedChildren = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, function(child, index) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(TrackedChild, {
                key: index,
                child: child,
                index: index,
                name: name,
                properties: properties,
                observerOptions: observerOptions
            });
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", __assign({}, props), trackedChildren);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(VisibilityAndClickTracker, __assign({
        onIntersect: onIntersect,
        trackView: true,
        options: observerOptions
    }, props), children);
}
var INITIAL_STATE = {
    componentStack: null,
    exceptionEvent: null,
    error: null
};
var __POSTHOG_ERROR_MESSAGES = {
    INVALID_FALLBACK: '[PostHog.js][PostHogErrorBoundary] Invalid fallback prop, provide a valid React element or a function that returns a valid React element.'
};
var PostHogErrorBoundary = function(_super) {
    __extends(PostHogErrorBoundary, _super);
    function PostHogErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = INITIAL_STATE;
        return _this;
    }
    PostHogErrorBoundary.prototype.componentDidCatch = function(error, errorInfo) {
        var additionalProperties = this.props.additionalProperties;
        var currentProperties;
        if (isFunction(additionalProperties)) {
            currentProperties = additionalProperties(error);
        } else if (typeof additionalProperties === 'object') {
            currentProperties = additionalProperties;
        }
        var client = this.context.client;
        var exceptionEvent = client.captureException(error, currentProperties);
        var componentStack = errorInfo.componentStack;
        this.setState({
            error: error,
            componentStack: componentStack,
            exceptionEvent: exceptionEvent
        });
    };
    PostHogErrorBoundary.prototype.render = function() {
        var _a = this.props, children = _a.children, fallback = _a.fallback;
        var state = this.state;
        if (state.componentStack == null) {
            return isFunction(children) ? children() : children;
        }
        var element = isFunction(fallback) ? __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(fallback, {
            error: state.error,
            componentStack: state.componentStack,
            exceptionEvent: state.exceptionEvent
        }) : fallback;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(element)) {
            return element;
        }
        console.warn(__POSTHOG_ERROR_MESSAGES.INVALID_FALLBACK);
        return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null);
    };
    PostHogErrorBoundary.contextType = PostHogContext;
    return PostHogErrorBoundary;
}(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component);
var setupReactErrorHandler = function(client, callback) {
    return function(error, errorInfo) {
        var event = client.captureException(error);
        if (callback) {
            callback(event, error, errorInfo);
        }
    };
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/portfolio/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster,
    "toast",
    ()=>toast,
    "useSonner",
    ()=>useSonner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
'use client';
function __insertCSS(code) {
    if (!code || typeof document == 'undefined') return;
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.type = 'text/css';
    head.appendChild(style);
    style.styleSheet ? style.styleSheet.cssText = code : style.appendChild(document.createTextNode(code));
}
;
;
const getAsset = (type)=>{
    switch(type){
        case 'success':
            return SuccessIcon;
        case 'info':
            return InfoIcon;
        case 'warning':
            return WarningIcon;
        case 'error':
            return ErrorIcon;
        default:
            return null;
    }
};
const bars = Array(12).fill(0);
const Loader = (param)=>{
    let { visible, className } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: [
            'sonner-loading-wrapper',
            className
        ].filter(Boolean).join(' '),
        "data-visible": visible
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "sonner-spinner"
    }, bars.map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "sonner-loading-bar",
            key: "spinner-bar-".concat(i)
        }))));
};
const SuccessIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}));
const WarningIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}));
const InfoIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}));
const ErrorIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}));
const CloseIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}));
const useIsDocumentHidden = ()=>{
    const [isDocumentHidden, setIsDocumentHidden] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(document.hidden);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useIsDocumentHidden.useEffect": ()=>{
            const callback = {
                "useIsDocumentHidden.useEffect.callback": ()=>{
                    setIsDocumentHidden(document.hidden);
                }
            }["useIsDocumentHidden.useEffect.callback"];
            document.addEventListener('visibilitychange', callback);
            return ({
                "useIsDocumentHidden.useEffect": ()=>window.removeEventListener('visibilitychange', callback)
            })["useIsDocumentHidden.useEffect"];
        }
    }["useIsDocumentHidden.useEffect"], []);
    return isDocumentHidden;
};
let toastsCounter = 1;
class Observer {
    constructor(){
        // We use arrow functions to maintain the correct `this` reference
        this.subscribe = (subscriber)=>{
            this.subscribers.push(subscriber);
            return ()=>{
                const index = this.subscribers.indexOf(subscriber);
                this.subscribers.splice(index, 1);
            };
        };
        this.publish = (data)=>{
            this.subscribers.forEach((subscriber)=>subscriber(data));
        };
        this.addToast = (data)=>{
            this.publish(data);
            this.toasts = [
                ...this.toasts,
                data
            ];
        };
        this.create = (data)=>{
            var _data_id;
            const { message, ...rest } = data;
            const id = typeof (data == null ? void 0 : data.id) === 'number' || ((_data_id = data.id) == null ? void 0 : _data_id.length) > 0 ? data.id : toastsCounter++;
            const alreadyExists = this.toasts.find((toast)=>{
                return toast.id === id;
            });
            const dismissible = data.dismissible === undefined ? true : data.dismissible;
            if (this.dismissedToasts.has(id)) {
                this.dismissedToasts.delete(id);
            }
            if (alreadyExists) {
                this.toasts = this.toasts.map((toast)=>{
                    if (toast.id === id) {
                        this.publish({
                            ...toast,
                            ...data,
                            id,
                            title: message
                        });
                        return {
                            ...toast,
                            ...data,
                            id,
                            dismissible,
                            title: message
                        };
                    }
                    return toast;
                });
            } else {
                this.addToast({
                    title: message,
                    ...rest,
                    dismissible,
                    id
                });
            }
            return id;
        };
        this.dismiss = (id)=>{
            if (id) {
                this.dismissedToasts.add(id);
                requestAnimationFrame(()=>this.subscribers.forEach((subscriber)=>subscriber({
                            id,
                            dismiss: true
                        })));
            } else {
                this.toasts.forEach((toast)=>{
                    this.subscribers.forEach((subscriber)=>subscriber({
                            id: toast.id,
                            dismiss: true
                        }));
                });
            }
            return id;
        };
        this.message = (message, data)=>{
            return this.create({
                ...data,
                message
            });
        };
        this.error = (message, data)=>{
            return this.create({
                ...data,
                message,
                type: 'error'
            });
        };
        this.success = (message, data)=>{
            return this.create({
                ...data,
                type: 'success',
                message
            });
        };
        this.info = (message, data)=>{
            return this.create({
                ...data,
                type: 'info',
                message
            });
        };
        this.warning = (message, data)=>{
            return this.create({
                ...data,
                type: 'warning',
                message
            });
        };
        this.loading = (message, data)=>{
            return this.create({
                ...data,
                type: 'loading',
                message
            });
        };
        this.promise = (promise, data)=>{
            if (!data) {
                // Nothing to show
                return;
            }
            let id = undefined;
            if (data.loading !== undefined) {
                id = this.create({
                    ...data,
                    promise,
                    type: 'loading',
                    message: data.loading,
                    description: typeof data.description !== 'function' ? data.description : undefined
                });
            }
            const p = Promise.resolve(promise instanceof Function ? promise() : promise);
            let shouldDismiss = id !== undefined;
            let result;
            const originalPromise = p.then(async (response)=>{
                result = [
                    'resolve',
                    response
                ];
                const isReactElementResponse = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(response);
                if (isReactElementResponse) {
                    shouldDismiss = false;
                    this.create({
                        id,
                        type: 'default',
                        message: response
                    });
                } else if (isHttpResponse(response) && !response.ok) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error("HTTP error! status: ".concat(response.status)) : data.error;
                    const description = typeof data.description === 'function' ? await data.description("HTTP error! status: ".concat(response.status)) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                } else if (response instanceof Error) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error(response) : data.error;
                    const description = typeof data.description === 'function' ? await data.description(response) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                } else if (data.success !== undefined) {
                    shouldDismiss = false;
                    const promiseData = typeof data.success === 'function' ? await data.success(response) : data.success;
                    const description = typeof data.description === 'function' ? await data.description(response) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'success',
                        description,
                        ...toastSettings
                    });
                }
            }).catch(async (error)=>{
                result = [
                    'reject',
                    error
                ];
                if (data.error !== undefined) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error(error) : data.error;
                    const description = typeof data.description === 'function' ? await data.description(error) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                }
            }).finally(()=>{
                if (shouldDismiss) {
                    // Toast is still in load state (and will be indefinitely — dismiss it)
                    this.dismiss(id);
                    id = undefined;
                }
                data.finally == null ? void 0 : data.finally.call(data);
            });
            const unwrap = ()=>new Promise((resolve, reject)=>originalPromise.then(()=>result[0] === 'reject' ? reject(result[1]) : resolve(result[1])).catch(reject));
            if (typeof id !== 'string' && typeof id !== 'number') {
                // cannot Object.assign on undefined
                return {
                    unwrap
                };
            } else {
                return Object.assign(id, {
                    unwrap
                });
            }
        };
        this.custom = (jsx, data)=>{
            const id = (data == null ? void 0 : data.id) || toastsCounter++;
            this.create({
                jsx: jsx(id),
                id,
                ...data
            });
            return id;
        };
        this.getActiveToasts = ()=>{
            return this.toasts.filter((toast)=>!this.dismissedToasts.has(toast.id));
        };
        this.subscribers = [];
        this.toasts = [];
        this.dismissedToasts = new Set();
    }
}
const ToastState = new Observer();
// bind this to the toast function
const toastFunction = (message, data)=>{
    const id = (data == null ? void 0 : data.id) || toastsCounter++;
    ToastState.addToast({
        title: message,
        ...data,
        id
    });
    return id;
};
const isHttpResponse = (data)=>{
    return data && typeof data === 'object' && 'ok' in data && typeof data.ok === 'boolean' && 'status' in data && typeof data.status === 'number';
};
const basicToast = toastFunction;
const getHistory = ()=>ToastState.toasts;
const getToasts = ()=>ToastState.getActiveToasts();
// We use `Object.assign` to maintain the correct types as we would lose them otherwise
const toast = Object.assign(basicToast, {
    success: ToastState.success,
    info: ToastState.info,
    warning: ToastState.warning,
    error: ToastState.error,
    custom: ToastState.custom,
    message: ToastState.message,
    promise: ToastState.promise,
    dismiss: ToastState.dismiss,
    loading: ToastState.loading
}, {
    getHistory,
    getToasts
});
__insertCSS("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function isAction(action) {
    return action.label !== undefined;
}
// Visible toasts amount
const VISIBLE_TOASTS_AMOUNT = 3;
// Viewport padding
const VIEWPORT_OFFSET = '24px';
// Mobile viewport padding
const MOBILE_VIEWPORT_OFFSET = '16px';
// Default lifetime of a toasts (in ms)
const TOAST_LIFETIME = 4000;
// Default toast width
const TOAST_WIDTH = 356;
// Default gap between toasts
const GAP = 14;
// Threshold to dismiss a toast
const SWIPE_THRESHOLD = 45;
// Equal to exit animation duration
const TIME_BEFORE_UNMOUNT = 200;
function cn() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter(Boolean).join(' ');
}
function getDefaultSwipeDirections(position) {
    const [y, x] = position.split('-');
    const directions = [];
    if (y) {
        directions.push(y);
    }
    if (x) {
        directions.push(x);
    }
    return directions;
}
const Toast = (props)=>{
    var _toast_classNames, _toast_classNames1, _toast_classNames2, _toast_classNames3, _toast_classNames4, _toast_classNames5, _toast_classNames6, _toast_classNames7, _toast_classNames8;
    const { invert: ToasterInvert, toast, unstyled, interacting, setHeights, visibleToasts, heights, index, toasts, expanded, removeToast, defaultRichColors, closeButton: closeButtonFromToaster, style, cancelButtonStyle, actionButtonStyle, className = '', descriptionClassName = '', duration: durationFromToaster, position, gap, expandByDefault, classNames, icons, closeButtonAriaLabel = 'Close toast' } = props;
    const [swipeDirection, setSwipeDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [swipeOutDirection, setSwipeOutDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [removed, setRemoved] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [swiping, setSwiping] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [swipeOut, setSwipeOut] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [isSwiped, setIsSwiped] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [offsetBeforeRemove, setOffsetBeforeRemove] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const [initialHeight, setInitialHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const remainingTime = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(toast.duration || durationFromToaster || TOAST_LIFETIME);
    const dragStartTime = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const toastRef = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isFront = index === 0;
    const isVisible = index + 1 <= visibleToasts;
    const toastType = toast.type;
    const dismissible = toast.dismissible !== false;
    const toastClassname = toast.className || '';
    const toastDescriptionClassname = toast.descriptionClassName || '';
    // Height index is used to calculate the offset as it gets updated before the toast array, which means we can calculate the new layout faster.
    const heightIndex = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[heightIndex]": ()=>heights.findIndex({
                "Toast.useMemo[heightIndex]": (height)=>height.toastId === toast.id
            }["Toast.useMemo[heightIndex]"]) || 0
    }["Toast.useMemo[heightIndex]"], [
        heights,
        toast.id
    ]);
    const closeButton = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[closeButton]": ()=>{
            var _toast_closeButton;
            return (_toast_closeButton = toast.closeButton) != null ? _toast_closeButton : closeButtonFromToaster;
        }
    }["Toast.useMemo[closeButton]"], [
        toast.closeButton,
        closeButtonFromToaster
    ]);
    const duration = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[duration]": ()=>toast.duration || durationFromToaster || TOAST_LIFETIME
    }["Toast.useMemo[duration]"], [
        toast.duration,
        durationFromToaster
    ]);
    const closeTimerStartTimeRef = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const offset = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const lastCloseTimerStartTimeRef = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const pointerStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [y, x] = position.split('-');
    const toastsHeightBefore = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[toastsHeightBefore]": ()=>{
            return heights.reduce({
                "Toast.useMemo[toastsHeightBefore]": (prev, curr, reducerIndex)=>{
                    // Calculate offset up until current toast
                    if (reducerIndex >= heightIndex) {
                        return prev;
                    }
                    return prev + curr.height;
                }
            }["Toast.useMemo[toastsHeightBefore]"], 0);
        }
    }["Toast.useMemo[toastsHeightBefore]"], [
        heights,
        heightIndex
    ]);
    const isDocumentHidden = useIsDocumentHidden();
    const invert = toast.invert || ToasterInvert;
    const disabled = toastType === 'loading';
    offset.current = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo": ()=>heightIndex * gap + toastsHeightBefore
    }["Toast.useMemo"], [
        heightIndex,
        toastsHeightBefore
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            remainingTime.current = duration;
        }
    }["Toast.useEffect"], [
        duration
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            // Trigger enter animation without using CSS animation
            setMounted(true);
        }
    }["Toast.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            const toastNode = toastRef.current;
            if (toastNode) {
                const height = toastNode.getBoundingClientRect().height;
                // Add toast height to heights array after the toast is mounted
                setInitialHeight(height);
                setHeights({
                    "Toast.useEffect": (h)=>[
                            {
                                toastId: toast.id,
                                height,
                                position: toast.position
                            },
                            ...h
                        ]
                }["Toast.useEffect"]);
                return ({
                    "Toast.useEffect": ()=>setHeights({
                            "Toast.useEffect": (h)=>h.filter({
                                    "Toast.useEffect": (height)=>height.toastId !== toast.id
                                }["Toast.useEffect"])
                        }["Toast.useEffect"])
                })["Toast.useEffect"];
            }
        }
    }["Toast.useEffect"], [
        setHeights,
        toast.id
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect({
        "Toast.useLayoutEffect": ()=>{
            // Keep height up to date with the content in case it updates
            if (!mounted) return;
            const toastNode = toastRef.current;
            const originalHeight = toastNode.style.height;
            toastNode.style.height = 'auto';
            const newHeight = toastNode.getBoundingClientRect().height;
            toastNode.style.height = originalHeight;
            setInitialHeight(newHeight);
            setHeights({
                "Toast.useLayoutEffect": (heights)=>{
                    const alreadyExists = heights.find({
                        "Toast.useLayoutEffect.alreadyExists": (height)=>height.toastId === toast.id
                    }["Toast.useLayoutEffect.alreadyExists"]);
                    if (!alreadyExists) {
                        return [
                            {
                                toastId: toast.id,
                                height: newHeight,
                                position: toast.position
                            },
                            ...heights
                        ];
                    } else {
                        return heights.map({
                            "Toast.useLayoutEffect": (height)=>height.toastId === toast.id ? {
                                    ...height,
                                    height: newHeight
                                } : height
                        }["Toast.useLayoutEffect"]);
                    }
                }
            }["Toast.useLayoutEffect"]);
        }
    }["Toast.useLayoutEffect"], [
        mounted,
        toast.title,
        toast.description,
        setHeights,
        toast.id,
        toast.jsx,
        toast.action,
        toast.cancel
    ]);
    const deleteToast = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "Toast.useCallback[deleteToast]": ()=>{
            // Save the offset for the exit swipe animation
            setRemoved(true);
            setOffsetBeforeRemove(offset.current);
            setHeights({
                "Toast.useCallback[deleteToast]": (h)=>h.filter({
                        "Toast.useCallback[deleteToast]": (height)=>height.toastId !== toast.id
                    }["Toast.useCallback[deleteToast]"])
            }["Toast.useCallback[deleteToast]"]);
            setTimeout({
                "Toast.useCallback[deleteToast]": ()=>{
                    removeToast(toast);
                }
            }["Toast.useCallback[deleteToast]"], TIME_BEFORE_UNMOUNT);
        }
    }["Toast.useCallback[deleteToast]"], [
        toast,
        removeToast,
        setHeights,
        offset
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            if (toast.promise && toastType === 'loading' || toast.duration === Infinity || toast.type === 'loading') return;
            let timeoutId;
            // Pause the timer on each hover
            const pauseTimer = {
                "Toast.useEffect.pauseTimer": ()=>{
                    if (lastCloseTimerStartTimeRef.current < closeTimerStartTimeRef.current) {
                        // Get the elapsed time since the timer started
                        const elapsedTime = new Date().getTime() - closeTimerStartTimeRef.current;
                        remainingTime.current = remainingTime.current - elapsedTime;
                    }
                    lastCloseTimerStartTimeRef.current = new Date().getTime();
                }
            }["Toast.useEffect.pauseTimer"];
            const startTimer = {
                "Toast.useEffect.startTimer": ()=>{
                    // setTimeout(, Infinity) behaves as if the delay is 0.
                    // As a result, the toast would be closed immediately, giving the appearance that it was never rendered.
                    // See: https://github.com/denysdovhan/wtfjs?tab=readme-ov-file#an-infinite-timeout
                    if (remainingTime.current === Infinity) return;
                    closeTimerStartTimeRef.current = new Date().getTime();
                    // Let the toast know it has started
                    timeoutId = setTimeout({
                        "Toast.useEffect.startTimer": ()=>{
                            toast.onAutoClose == null ? void 0 : toast.onAutoClose.call(toast, toast);
                            deleteToast();
                        }
                    }["Toast.useEffect.startTimer"], remainingTime.current);
                }
            }["Toast.useEffect.startTimer"];
            if (expanded || interacting || isDocumentHidden) {
                pauseTimer();
            } else {
                startTimer();
            }
            return ({
                "Toast.useEffect": ()=>clearTimeout(timeoutId)
            })["Toast.useEffect"];
        }
    }["Toast.useEffect"], [
        expanded,
        interacting,
        toast,
        toastType,
        isDocumentHidden,
        deleteToast
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            if (toast.delete) {
                deleteToast();
                toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
            }
        }
    }["Toast.useEffect"], [
        deleteToast,
        toast.delete
    ]);
    function getLoadingIcon() {
        var _toast_classNames;
        if (icons == null ? void 0 : icons.loading) {
            var _toast_classNames1;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1.loader, 'sonner-loader'),
                "data-visible": toastType === 'loading'
            }, icons.loading);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Loader, {
            className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.loader),
            visible: toastType === 'loading'
        });
    }
    const icon = toast.icon || (icons == null ? void 0 : icons[toastType]) || getAsset(toastType);
    var _toast_richColors, _icons_close;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
        tabIndex: 0,
        ref: toastRef,
        className: cn(className, toastClassname, classNames == null ? void 0 : classNames.toast, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.toast, classNames == null ? void 0 : classNames.default, classNames == null ? void 0 : classNames[toastType], toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1[toastType]),
        "data-sonner-toast": "",
        "data-rich-colors": (_toast_richColors = toast.richColors) != null ? _toast_richColors : defaultRichColors,
        "data-styled": !Boolean(toast.jsx || toast.unstyled || unstyled),
        "data-mounted": mounted,
        "data-promise": Boolean(toast.promise),
        "data-swiped": isSwiped,
        "data-removed": removed,
        "data-visible": isVisible,
        "data-y-position": y,
        "data-x-position": x,
        "data-index": index,
        "data-front": isFront,
        "data-swiping": swiping,
        "data-dismissible": dismissible,
        "data-type": toastType,
        "data-invert": invert,
        "data-swipe-out": swipeOut,
        "data-swipe-direction": swipeOutDirection,
        "data-expanded": Boolean(expanded || expandByDefault && mounted),
        "data-testid": toast.testId,
        style: {
            '--index': index,
            '--toasts-before': index,
            '--z-index': toasts.length - index,
            '--offset': "".concat(removed ? offsetBeforeRemove : offset.current, "px"),
            '--initial-height': expandByDefault ? 'auto' : "".concat(initialHeight, "px"),
            ...style,
            ...toast.style
        },
        onDragEnd: ()=>{
            setSwiping(false);
            setSwipeDirection(null);
            pointerStartRef.current = null;
        },
        onPointerDown: (event)=>{
            if (event.button === 2) return; // Return early on right click
            if (disabled || !dismissible) return;
            dragStartTime.current = new Date();
            setOffsetBeforeRemove(offset.current);
            // Ensure we maintain correct pointer capture even when going outside of the toast (e.g. when swiping)
            event.target.setPointerCapture(event.pointerId);
            if (event.target.tagName === 'BUTTON') return;
            setSwiping(true);
            pointerStartRef.current = {
                x: event.clientX,
                y: event.clientY
            };
        },
        onPointerUp: ()=>{
            var _toastRef_current, _toastRef_current1, _dragStartTime_current;
            if (swipeOut || !dismissible) return;
            pointerStartRef.current = null;
            const swipeAmountX = Number(((_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.getPropertyValue('--swipe-amount-x').replace('px', '')) || 0);
            const swipeAmountY = Number(((_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.getPropertyValue('--swipe-amount-y').replace('px', '')) || 0);
            const timeTaken = new Date().getTime() - ((_dragStartTime_current = dragStartTime.current) == null ? void 0 : _dragStartTime_current.getTime());
            const swipeAmount = swipeDirection === 'x' ? swipeAmountX : swipeAmountY;
            const velocity = Math.abs(swipeAmount) / timeTaken;
            if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > 0.11) {
                setOffsetBeforeRemove(offset.current);
                toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
                if (swipeDirection === 'x') {
                    setSwipeOutDirection(swipeAmountX > 0 ? 'right' : 'left');
                } else {
                    setSwipeOutDirection(swipeAmountY > 0 ? 'down' : 'up');
                }
                deleteToast();
                setSwipeOut(true);
                return;
            } else {
                var _toastRef_current2, _toastRef_current3;
                (_toastRef_current2 = toastRef.current) == null ? void 0 : _toastRef_current2.style.setProperty('--swipe-amount-x', "0px");
                (_toastRef_current3 = toastRef.current) == null ? void 0 : _toastRef_current3.style.setProperty('--swipe-amount-y', "0px");
            }
            setIsSwiped(false);
            setSwiping(false);
            setSwipeDirection(null);
        },
        onPointerMove: (event)=>{
            var _window_getSelection, _toastRef_current, _toastRef_current1;
            if (!pointerStartRef.current || !dismissible) return;
            const isHighlighted = ((_window_getSelection = window.getSelection()) == null ? void 0 : _window_getSelection.toString().length) > 0;
            if (isHighlighted) return;
            const yDelta = event.clientY - pointerStartRef.current.y;
            const xDelta = event.clientX - pointerStartRef.current.x;
            var _props_swipeDirections;
            const swipeDirections = (_props_swipeDirections = props.swipeDirections) != null ? _props_swipeDirections : getDefaultSwipeDirections(position);
            // Determine swipe direction if not already locked
            if (!swipeDirection && (Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1)) {
                setSwipeDirection(Math.abs(xDelta) > Math.abs(yDelta) ? 'x' : 'y');
            }
            let swipeAmount = {
                x: 0,
                y: 0
            };
            const getDampening = (delta)=>{
                const factor = Math.abs(delta) / 20;
                return 1 / (1.5 + factor);
            };
            // Only apply swipe in the locked direction
            if (swipeDirection === 'y') {
                // Handle vertical swipes
                if (swipeDirections.includes('top') || swipeDirections.includes('bottom')) {
                    if (swipeDirections.includes('top') && yDelta < 0 || swipeDirections.includes('bottom') && yDelta > 0) {
                        swipeAmount.y = yDelta;
                    } else {
                        // Smoothly transition to dampened movement
                        const dampenedDelta = yDelta * getDampening(yDelta);
                        // Ensure we don't jump when transitioning to dampened movement
                        swipeAmount.y = Math.abs(dampenedDelta) < Math.abs(yDelta) ? dampenedDelta : yDelta;
                    }
                }
            } else if (swipeDirection === 'x') {
                // Handle horizontal swipes
                if (swipeDirections.includes('left') || swipeDirections.includes('right')) {
                    if (swipeDirections.includes('left') && xDelta < 0 || swipeDirections.includes('right') && xDelta > 0) {
                        swipeAmount.x = xDelta;
                    } else {
                        // Smoothly transition to dampened movement
                        const dampenedDelta = xDelta * getDampening(xDelta);
                        // Ensure we don't jump when transitioning to dampened movement
                        swipeAmount.x = Math.abs(dampenedDelta) < Math.abs(xDelta) ? dampenedDelta : xDelta;
                    }
                }
            }
            if (Math.abs(swipeAmount.x) > 0 || Math.abs(swipeAmount.y) > 0) {
                setIsSwiped(true);
            }
            (_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.setProperty('--swipe-amount-x', "".concat(swipeAmount.x, "px"));
            (_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.setProperty('--swipe-amount-y', "".concat(swipeAmount.y, "px"));
        }
    }, closeButton && !toast.jsx && toastType !== 'loading' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "aria-label": closeButtonAriaLabel,
        "data-disabled": disabled,
        "data-close-button": true,
        onClick: disabled || !dismissible ? ()=>{} : ()=>{
            deleteToast();
            toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
        },
        className: cn(classNames == null ? void 0 : classNames.closeButton, toast == null ? void 0 : (_toast_classNames2 = toast.classNames) == null ? void 0 : _toast_classNames2.closeButton)
    }, (_icons_close = icons == null ? void 0 : icons.close) != null ? _icons_close : CloseIcon) : null, (toastType || toast.icon || toast.promise) && toast.icon !== null && ((icons == null ? void 0 : icons[toastType]) !== null || toast.icon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-icon": "",
        className: cn(classNames == null ? void 0 : classNames.icon, toast == null ? void 0 : (_toast_classNames3 = toast.classNames) == null ? void 0 : _toast_classNames3.icon)
    }, toast.promise || toast.type === 'loading' && !toast.icon ? toast.icon || getLoadingIcon() : null, toast.type !== 'loading' ? icon : null) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-content": "",
        className: cn(classNames == null ? void 0 : classNames.content, toast == null ? void 0 : (_toast_classNames4 = toast.classNames) == null ? void 0 : _toast_classNames4.content)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-title": "",
        className: cn(classNames == null ? void 0 : classNames.title, toast == null ? void 0 : (_toast_classNames5 = toast.classNames) == null ? void 0 : _toast_classNames5.title)
    }, toast.jsx ? toast.jsx : typeof toast.title === 'function' ? toast.title() : toast.title), toast.description ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-description": "",
        className: cn(descriptionClassName, toastDescriptionClassname, classNames == null ? void 0 : classNames.description, toast == null ? void 0 : (_toast_classNames6 = toast.classNames) == null ? void 0 : _toast_classNames6.description)
    }, typeof toast.description === 'function' ? toast.description() : toast.description) : null), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(toast.cancel) ? toast.cancel : toast.cancel && isAction(toast.cancel) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": true,
        "data-cancel": true,
        style: toast.cancelButtonStyle || cancelButtonStyle,
        onClick: (event)=>{
            // We need to check twice because typescript
            if (!isAction(toast.cancel)) return;
            if (!dismissible) return;
            toast.cancel.onClick == null ? void 0 : toast.cancel.onClick.call(toast.cancel, event);
            deleteToast();
        },
        className: cn(classNames == null ? void 0 : classNames.cancelButton, toast == null ? void 0 : (_toast_classNames7 = toast.classNames) == null ? void 0 : _toast_classNames7.cancelButton)
    }, toast.cancel.label) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(toast.action) ? toast.action : toast.action && isAction(toast.action) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": true,
        "data-action": true,
        style: toast.actionButtonStyle || actionButtonStyle,
        onClick: (event)=>{
            // We need to check twice because typescript
            if (!isAction(toast.action)) return;
            toast.action.onClick == null ? void 0 : toast.action.onClick.call(toast.action, event);
            if (event.defaultPrevented) return;
            deleteToast();
        },
        className: cn(classNames == null ? void 0 : classNames.actionButton, toast == null ? void 0 : (_toast_classNames8 = toast.classNames) == null ? void 0 : _toast_classNames8.actionButton)
    }, toast.action.label) : null);
};
function getDocumentDirection() {
    if (typeof window === 'undefined') return 'ltr';
    if (typeof document === 'undefined') return 'ltr'; // For Fresh purpose
    const dirAttribute = document.documentElement.getAttribute('dir');
    if (dirAttribute === 'auto' || !dirAttribute) {
        return window.getComputedStyle(document.documentElement).direction;
    }
    return dirAttribute;
}
function assignOffset(defaultOffset, mobileOffset) {
    const styles = {};
    [
        defaultOffset,
        mobileOffset
    ].forEach((offset, index)=>{
        const isMobile = index === 1;
        const prefix = isMobile ? '--mobile-offset' : '--offset';
        const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
        function assignAll(offset) {
            [
                'top',
                'right',
                'bottom',
                'left'
            ].forEach((key)=>{
                styles["".concat(prefix, "-").concat(key)] = typeof offset === 'number' ? "".concat(offset, "px") : offset;
            });
        }
        if (typeof offset === 'number' || typeof offset === 'string') {
            assignAll(offset);
        } else if (typeof offset === 'object') {
            [
                'top',
                'right',
                'bottom',
                'left'
            ].forEach((key)=>{
                if (offset[key] === undefined) {
                    styles["".concat(prefix, "-").concat(key)] = defaultValue;
                } else {
                    styles["".concat(prefix, "-").concat(key)] = typeof offset[key] === 'number' ? "".concat(offset[key], "px") : offset[key];
                }
            });
        } else {
            assignAll(defaultValue);
        }
    });
    return styles;
}
function useSonner() {
    const [activeToasts, setActiveToasts] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useSonner.useEffect": ()=>{
            return ToastState.subscribe({
                "useSonner.useEffect": (toast)=>{
                    if (toast.dismiss) {
                        setTimeout({
                            "useSonner.useEffect": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                    "useSonner.useEffect": ()=>{
                                        setActiveToasts({
                                            "useSonner.useEffect": (toasts)=>toasts.filter({
                                                    "useSonner.useEffect": (t)=>t.id !== toast.id
                                                }["useSonner.useEffect"])
                                        }["useSonner.useEffect"]);
                                    }
                                }["useSonner.useEffect"]);
                            }
                        }["useSonner.useEffect"]);
                        return;
                    }
                    // Prevent batching, temp solution.
                    setTimeout({
                        "useSonner.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                "useSonner.useEffect": ()=>{
                                    setActiveToasts({
                                        "useSonner.useEffect": (toasts)=>{
                                            const indexOfExistingToast = toasts.findIndex({
                                                "useSonner.useEffect.indexOfExistingToast": (t)=>t.id === toast.id
                                            }["useSonner.useEffect.indexOfExistingToast"]);
                                            // Update the toast if it already exists
                                            if (indexOfExistingToast !== -1) {
                                                return [
                                                    ...toasts.slice(0, indexOfExistingToast),
                                                    {
                                                        ...toasts[indexOfExistingToast],
                                                        ...toast
                                                    },
                                                    ...toasts.slice(indexOfExistingToast + 1)
                                                ];
                                            }
                                            return [
                                                toast,
                                                ...toasts
                                            ];
                                        }
                                    }["useSonner.useEffect"]);
                                }
                            }["useSonner.useEffect"]);
                        }
                    }["useSonner.useEffect"]);
                }
            }["useSonner.useEffect"]);
        }
    }["useSonner.useEffect"], []);
    return {
        toasts: activeToasts
    };
}
const Toaster = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function Toaster(props, ref) {
    const { id, invert, position = 'bottom-right', hotkey = [
        'altKey',
        'KeyT'
    ], expand, closeButton, className, offset, mobileOffset, theme = 'light', richColors, duration, style, visibleToasts = VISIBLE_TOASTS_AMOUNT, toastOptions, dir = getDocumentDirection(), gap = GAP, icons, containerAriaLabel = 'Notifications' } = props;
    const [toasts, setToasts] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    const filteredToasts = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toaster.Toaster.useMemo[filteredToasts]": ()=>{
            if (id) {
                return toasts.filter({
                    "Toaster.Toaster.useMemo[filteredToasts]": (toast)=>toast.toasterId === id
                }["Toaster.Toaster.useMemo[filteredToasts]"]);
            }
            return toasts.filter({
                "Toaster.Toaster.useMemo[filteredToasts]": (toast)=>!toast.toasterId
            }["Toaster.Toaster.useMemo[filteredToasts]"]);
        }
    }["Toaster.Toaster.useMemo[filteredToasts]"], [
        toasts,
        id
    ]);
    const possiblePositions = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toaster.Toaster.useMemo[possiblePositions]": ()=>{
            return Array.from(new Set([
                position
            ].concat(filteredToasts.filter({
                "Toaster.Toaster.useMemo[possiblePositions]": (toast)=>toast.position
            }["Toaster.Toaster.useMemo[possiblePositions]"]).map({
                "Toaster.Toaster.useMemo[possiblePositions]": (toast)=>toast.position
            }["Toaster.Toaster.useMemo[possiblePositions]"]))));
        }
    }["Toaster.Toaster.useMemo[possiblePositions]"], [
        filteredToasts,
        position
    ]);
    const [heights, setHeights] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [expanded, setExpanded] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [interacting, setInteracting] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [actualTheme, setActualTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(theme !== 'system' ? theme : typeof window !== 'undefined' ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : 'light');
    const listRef = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const hotkeyLabel = hotkey.join('+').replace(/Key/g, '').replace(/Digit/g, '');
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isFocusWithinRef = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const removeToast = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "Toaster.Toaster.useCallback[removeToast]": (toastToRemove)=>{
            setToasts({
                "Toaster.Toaster.useCallback[removeToast]": (toasts)=>{
                    var _toasts_find;
                    if (!((_toasts_find = toasts.find({
                        "Toaster.Toaster.useCallback[removeToast]": (toast)=>toast.id === toastToRemove.id
                    }["Toaster.Toaster.useCallback[removeToast]"])) == null ? void 0 : _toasts_find.delete)) {
                        ToastState.dismiss(toastToRemove.id);
                    }
                    return toasts.filter({
                        "Toaster.Toaster.useCallback[removeToast]": (param)=>{
                            let { id } = param;
                            return id !== toastToRemove.id;
                        }
                    }["Toaster.Toaster.useCallback[removeToast]"]);
                }
            }["Toaster.Toaster.useCallback[removeToast]"]);
        }
    }["Toaster.Toaster.useCallback[removeToast]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            return ToastState.subscribe({
                "Toaster.Toaster.useEffect": (toast)=>{
                    if (toast.dismiss) {
                        // Prevent batching of other state updates
                        requestAnimationFrame({
                            "Toaster.Toaster.useEffect": ()=>{
                                setToasts({
                                    "Toaster.Toaster.useEffect": (toasts)=>toasts.map({
                                            "Toaster.Toaster.useEffect": (t)=>t.id === toast.id ? {
                                                    ...t,
                                                    delete: true
                                                } : t
                                        }["Toaster.Toaster.useEffect"])
                                }["Toaster.Toaster.useEffect"]);
                            }
                        }["Toaster.Toaster.useEffect"]);
                        return;
                    }
                    // Prevent batching, temp solution.
                    setTimeout({
                        "Toaster.Toaster.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                "Toaster.Toaster.useEffect": ()=>{
                                    setToasts({
                                        "Toaster.Toaster.useEffect": (toasts)=>{
                                            const indexOfExistingToast = toasts.findIndex({
                                                "Toaster.Toaster.useEffect.indexOfExistingToast": (t)=>t.id === toast.id
                                            }["Toaster.Toaster.useEffect.indexOfExistingToast"]);
                                            // Update the toast if it already exists
                                            if (indexOfExistingToast !== -1) {
                                                return [
                                                    ...toasts.slice(0, indexOfExistingToast),
                                                    {
                                                        ...toasts[indexOfExistingToast],
                                                        ...toast
                                                    },
                                                    ...toasts.slice(indexOfExistingToast + 1)
                                                ];
                                            }
                                            return [
                                                toast,
                                                ...toasts
                                            ];
                                        }
                                    }["Toaster.Toaster.useEffect"]);
                                }
                            }["Toaster.Toaster.useEffect"]);
                        }
                    }["Toaster.Toaster.useEffect"]);
                }
            }["Toaster.Toaster.useEffect"]);
        }
    }["Toaster.Toaster.useEffect"], [
        toasts
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            if (theme !== 'system') {
                setActualTheme(theme);
                return;
            }
            if (theme === 'system') {
                // check if current preference is dark
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    // it's currently dark
                    setActualTheme('dark');
                } else {
                    // it's not dark
                    setActualTheme('light');
                }
            }
            if (typeof window === 'undefined') return;
            const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            try {
                // Chrome & Firefox
                darkMediaQuery.addEventListener('change', {
                    "Toaster.Toaster.useEffect": (param)=>{
                        let { matches } = param;
                        if (matches) {
                            setActualTheme('dark');
                        } else {
                            setActualTheme('light');
                        }
                    }
                }["Toaster.Toaster.useEffect"]);
            } catch (error) {
                // Safari < 14
                darkMediaQuery.addListener({
                    "Toaster.Toaster.useEffect": (param)=>{
                        let { matches } = param;
                        try {
                            if (matches) {
                                setActualTheme('dark');
                            } else {
                                setActualTheme('light');
                            }
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }["Toaster.Toaster.useEffect"]);
            }
        }
    }["Toaster.Toaster.useEffect"], [
        theme
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            // Ensure expanded is always false when no toasts are present / only one left
            if (toasts.length <= 1) {
                setExpanded(false);
            }
        }
    }["Toaster.Toaster.useEffect"], [
        toasts
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            const handleKeyDown = {
                "Toaster.Toaster.useEffect.handleKeyDown": (event)=>{
                    var _listRef_current;
                    const isHotkeyPressed = hotkey.every({
                        "Toaster.Toaster.useEffect.handleKeyDown.isHotkeyPressed": (key)=>event[key] || event.code === key
                    }["Toaster.Toaster.useEffect.handleKeyDown.isHotkeyPressed"]);
                    if (isHotkeyPressed) {
                        var _listRef_current1;
                        setExpanded(true);
                        (_listRef_current1 = listRef.current) == null ? void 0 : _listRef_current1.focus();
                    }
                    if (event.code === 'Escape' && (document.activeElement === listRef.current || ((_listRef_current = listRef.current) == null ? void 0 : _listRef_current.contains(document.activeElement)))) {
                        setExpanded(false);
                    }
                }
            }["Toaster.Toaster.useEffect.handleKeyDown"];
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "Toaster.Toaster.useEffect": ()=>document.removeEventListener('keydown', handleKeyDown)
            })["Toaster.Toaster.useEffect"];
        }
    }["Toaster.Toaster.useEffect"], [
        hotkey
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            if (listRef.current) {
                return ({
                    "Toaster.Toaster.useEffect": ()=>{
                        if (lastFocusedElementRef.current) {
                            lastFocusedElementRef.current.focus({
                                preventScroll: true
                            });
                            lastFocusedElementRef.current = null;
                            isFocusWithinRef.current = false;
                        }
                    }
                })["Toaster.Toaster.useEffect"];
            }
        }
    }["Toaster.Toaster.useEffect"], [
        listRef.current
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("section", {
        ref: ref,
        "aria-label": "".concat(containerAriaLabel, " ").concat(hotkeyLabel),
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: true
    }, possiblePositions.map((position, index)=>{
        var _heights_;
        const [y, x] = position.split('-');
        if (!filteredToasts.length) return null;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ol", {
            key: position,
            dir: dir === 'auto' ? getDocumentDirection() : dir,
            tabIndex: -1,
            ref: listRef,
            className: className,
            "data-sonner-toaster": true,
            "data-sonner-theme": actualTheme,
            "data-y-position": y,
            "data-x-position": x,
            style: {
                '--front-toast-height': "".concat(((_heights_ = heights[0]) == null ? void 0 : _heights_.height) || 0, "px"),
                '--width': "".concat(TOAST_WIDTH, "px"),
                '--gap': "".concat(gap, "px"),
                ...style,
                ...assignOffset(offset, mobileOffset)
            },
            onBlur: (event)=>{
                if (isFocusWithinRef.current && !event.currentTarget.contains(event.relatedTarget)) {
                    isFocusWithinRef.current = false;
                    if (lastFocusedElementRef.current) {
                        lastFocusedElementRef.current.focus({
                            preventScroll: true
                        });
                        lastFocusedElementRef.current = null;
                    }
                }
            },
            onFocus: (event)=>{
                const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';
                if (isNotDismissible) return;
                if (!isFocusWithinRef.current) {
                    isFocusWithinRef.current = true;
                    lastFocusedElementRef.current = event.relatedTarget;
                }
            },
            onMouseEnter: ()=>setExpanded(true),
            onMouseMove: ()=>setExpanded(true),
            onMouseLeave: ()=>{
                // Avoid setting expanded to false when interacting with a toast, e.g. swiping
                if (!interacting) {
                    setExpanded(false);
                }
            },
            onDragEnd: ()=>setExpanded(false),
            onPointerDown: (event)=>{
                const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';
                if (isNotDismissible) return;
                setInteracting(true);
            },
            onPointerUp: ()=>setInteracting(false)
        }, filteredToasts.filter((toast)=>!toast.position && index === 0 || toast.position === position).map((toast, index)=>{
            var _toastOptions_duration, _toastOptions_closeButton;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Toast, {
                key: toast.id,
                icons: icons,
                index: index,
                toast: toast,
                defaultRichColors: richColors,
                duration: (_toastOptions_duration = toastOptions == null ? void 0 : toastOptions.duration) != null ? _toastOptions_duration : duration,
                className: toastOptions == null ? void 0 : toastOptions.className,
                descriptionClassName: toastOptions == null ? void 0 : toastOptions.descriptionClassName,
                invert: invert,
                visibleToasts: visibleToasts,
                closeButton: (_toastOptions_closeButton = toastOptions == null ? void 0 : toastOptions.closeButton) != null ? _toastOptions_closeButton : closeButton,
                interacting: interacting,
                position: position,
                style: toastOptions == null ? void 0 : toastOptions.style,
                unstyled: toastOptions == null ? void 0 : toastOptions.unstyled,
                classNames: toastOptions == null ? void 0 : toastOptions.classNames,
                cancelButtonStyle: toastOptions == null ? void 0 : toastOptions.cancelButtonStyle,
                actionButtonStyle: toastOptions == null ? void 0 : toastOptions.actionButtonStyle,
                closeButtonAriaLabel: toastOptions == null ? void 0 : toastOptions.closeButtonAriaLabel,
                removeToast: removeToast,
                toasts: filteredToasts.filter((t)=>t.position == toast.position),
                heights: heights.filter((h)=>h.position == toast.position),
                setHeights: setHeights,
                expandByDefault: expand,
                gap: gap,
                expanded: expanded,
                swipeDirections: props.swipeDirections
            });
        }));
    }));
});
;
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
const _warnonce = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function disableSmoothScrollDuringRouteTransition(fn, options) {
    if (options === void 0) options = {};
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    // Since this is a breaking change, this is temporarily flagged
    // and will be false by default.
    // In the next major (v16), this will be automatically enabled
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        // Old behavior: always manipulate styles, but warn about upcoming change
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && !hasDataAttribute && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            (0, _warnonce.warnOnce)('Detected `scroll-behavior: smooth` on the `<html>` element. In a future version, ' + 'Next.js will no longer automatically disable smooth scrolling during route transitions. ' + 'To prepare for this change, add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
} //# sourceMappingURL=disable-smooth-scroll.js.map
}),
"[project]/portfolio/node_modules/next/dist/client/components/bfcache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bfcache.js.map
}),
"[project]/portfolio/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ "default", {
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/portfolio/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/portfolio/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _fetchserverresponse = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _errorboundary1 = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _hasinterceptionrouteincurrenttree = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
const _bfcache = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/bfcache.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const Activity = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                'refetch'
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === 'undefined') return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    const internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
const rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('Skipping auto-scroll behavior due to `position: sticky` or `position: fixed` on element:', element);
        }
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    var _document_getElementById;
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
                // If the element is skipped, try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                    if ("TURBOPACK compile-time truthy", 1) {
                        var _domNode_parentElement;
                        if (((_domNode_parentElement = domNode.parentElement) == null ? void 0 : _domNode_parentElement.localName) === 'head') {
                        // TODO: We enter this state when metadata was rendered as part of the page or via Next.js.
                        // This is always a bug in Next.js and caused by React hoisting metadata.
                        // We need to replace `findDOMNode` in favor of Fragment Refs (when available) so that we can skip over metadata.
                        }
                    }
                    // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        ;
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        // Scroll into view doesn't scroll horizontally by default when not needed
                        ;
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
                focusAndScrollRef.onlyHashChange = false;
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    let { tree, segmentPath, cacheNode, url } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    const { tree: fullTree } = context;
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    const resolvedRsc = typeof rsc === 'object' && rsc !== null && typeof rsc.then === 'function' ? (0, _react.use)(rsc) : rsc;
    if (!resolvedRsc) {
        // The data for this segment is not available, and there's no pending
        // navigation that will be able to fulfill it. We need to fetch more from
        // the server and patch the cache.
        // Check if there's already a pending request.
        let lazyData = cacheNode.lazyData;
        if (lazyData === null) {
            /**
       * Router state with refetch marker added
       */ // TODO-APP: remove ''
            const refetchTree = walkAddRefetch([
                '',
                ...segmentPath
            ], fullTree);
            const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(fullTree);
            const navigatedAt = Date.now();
            cacheNode.lazyData = lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), {
                flightRouterState: refetchTree,
                nextUrl: includeNextUrl ? context.nextUrl : null
            }).then((serverResponse)=>{
                (0, _react.startTransition)(()=>{
                    (0, _useactionqueue.dispatchAppRouterAction)({
                        type: _routerreducertypes.ACTION_SERVER_PATCH,
                        previousTree: fullTree,
                        serverResponse,
                        navigatedAt
                    });
                });
                return serverResponse;
            });
            // Suspend while waiting for lazyData to resolve
            (0, _react.use)(lazyData);
        }
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        // A falsey `resolvedRsc` indicates missing data -- we should not commit that branch, and we need to wait for the data to arrive.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    // If we get to this point, then we know we have something we can render.
    const subtree = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            // TODO-APP: overriding of url for parallel routes
            url: url
        },
        children: resolvedRsc
    });
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    let { loading, children } = param;
    // If loading is a promise, unwrap it. This happens in cases where we haven't
    // yet received the loading data from the server — which includes whether or
    // not this layout has a loading component at all.
    //
    // It's OK to suspend here instead of inside the fallback because this
    // promise will resolve simultaneously with the data for the segment itself.
    // So it will never suspend for longer than it would have if we didn't use
    // a Suspense fallback at all.
    let loadingModuleData;
    if (typeof loading === 'object' && loading !== null && typeof loading.then === 'function') {
        const promiseForLoading = loading;
        loadingModuleData = (0, _react.use)(promiseForLoading);
    } else {
        loadingModuleData = loading;
    }
    if (loadingModuleData) {
        const loadingRsc = loadingModuleData[0];
        const loadingStyles = loadingModuleData[1];
        const loadingScripts = loadingModuleData[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    const { parentTree, parentCacheNode, parentSegmentPath, url } = context;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    const parentParallelRoutes = parentCacheNode.parallelRoutes;
    let segmentMap = parentParallelRoutes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!segmentMap) {
        segmentMap = new Map();
        parentParallelRoutes.set(parallelRouterKey, segmentMap);
    }
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    const activeTree = parentTree[1][parallelRouterKey];
    const activeSegment = activeTree[0];
    const activeStateKey = (0, _createroutercachekey.createRouterCacheKey)(activeSegment, true) // no search params
    ;
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcache.useRouterBFCache)(activeTree, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        // Read segment path from the parallel router cache node.
        let cacheNode = segmentMap.get(cacheKey);
        if (cacheNode === undefined) {
            // When data is not available during rendering client-side we need to fetch
            // it from the server.
            const newLazyCacheNode = {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading: null,
                navigatedAt: -1
            };
            // Flight data fetch kicked off during render and put into the cache.
            cacheNode = newLazyCacheNode;
            segmentMap.set(cacheKey, newLazyCacheNode);
        }
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        // TODO: The loading module data for a segment is stored on the parent, then
        // applied to each of that parent segment's parallel route slots. In the
        // simple case where there's only one parallel route (the `children` slot),
        // this is no different from if the loading module data where stored on the
        // child directly. But I'm not sure this actually makes sense when there are
        // multiple parallel routes. It's not a huge issue because you always have
        // the option to define a narrower loading boundary for a particular slot. But
        // this sort of smells like an implementation accident to me.
        const loadingModuleData = parentCacheNode.loading;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollAndFocusHandler, {
                segmentPath: segmentPath,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                        errorComponent: error,
                        errorStyles: errorStyles,
                        errorScripts: errorScripts,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                            loading: loadingModuleData,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                                notFound: notFound,
                                forbidden: forbidden,
                                unauthorized: unauthorized,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                            url: url,
                                            tree: tree,
                                            cacheNode: cacheNode,
                                            segmentPath: segmentPath
                                        }),
                                        segmentBoundaryTriggerNode
                                    ]
                                })
                            })
                        })
                    }),
                    segmentViewStateNode
                ]
            }),
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map
}),
"[project]/portfolio/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/portfolio/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map
}),
"[project]/portfolio/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return "`" + target + "." + prop + "`";
    }
    return "`" + target + "[" + JSON.stringify(prop) + "]`";
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return "`Reflect.has(" + target + ", " + stringifiedProp + ")`, `" + stringifiedProp + " in " + target + "`, or similar";
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    // fallthrough
    'then',
    'catch',
    'finally',
    // React Promise extension
    // fallthrough
    'status',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    // fallthrough
    'toJSON',
    '$$typeof',
    '__esModule'
]); //# sourceMappingURL=reflect-utils.js.map
}),
"[project]/portfolio/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedSearchParams = new WeakMap();
function makeUntrackedExoticSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
            promise[prop] = underlyingSearchParams[prop];
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
// Similar to `makeUntrackedExoticSearchParamsWithDevWarnings`, but just logging
// the sync access without actually defining the search params on the promise.
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error("A searchParam property was accessed directly with " + expression + ". " + "`searchParams` should be unwrapped with `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis");
}
function warnForSyncSpread() {
    console.error("The keys of `searchParams` were accessed directly. " + "`searchParams` should be unwrapped with `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis");
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return makeUntrackedExoticSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=search-params.browser.dev.js.map
}),
"[project]/portfolio/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=search-params.browser.js.map
}),
"[project]/portfolio/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedParams = new WeakMap();
function makeDynamicallyTrackedExoticParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
            promise[prop] = underlyingParams[prop];
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration(unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
// Similar to `makeDynamicallyTrackedExoticParamsWithDevWarnings`, but just
// logging the sync access without actually defining the params on the promise.
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration(unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error("A param property was accessed directly with " + expression + ". `params` is now a Promise and should be unwrapped with `React.use()` before accessing properties of the underlying params object. In this version of Next.js direct access to param properties is still supported to facilitate migration but in a future version you will be required to unwrap `params` with `React.use()`.");
}
function warnForEnumeration(missingProperties) {
    if (missingProperties.length) {
        const describedMissingProperties = describeListOfPropertyNames(missingProperties);
        console.error("params are being enumerated incompletely missing these properties: " + describedMissingProperties + ". " + "`params` should be unwrapped with `React.use()` before using its value. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis");
    } else {
        console.error("params are being enumerated. " + "`params` should be unwrapped with `React.use()` before using its value. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis");
    }
}
function describeListOfPropertyNames(properties) {
    switch(properties.length){
        case 0:
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected describeListOfPropertyNames to be called with a non-empty list of strings.'), "__NEXT_ERROR_CODE", {
                value: "E531",
                enumerable: false,
                configurable: true
            });
        case 1:
            return "`" + properties[0] + "`";
        case 2:
            return "`" + properties[0] + "` and `" + properties[1] + "`";
        default:
            {
                let description = '';
                for(let i = 0; i < properties.length - 1; i++){
                    description += "`" + properties[i] + "`, ";
                }
                description += ", and `" + properties[properties.length - 1] + "`";
                return description;
            }
    }
}
function createRenderParamsFromClient(clientParams) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return makeDynamicallyTrackedExoticParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=params.browser.dev.js.map
}),
"[project]/portfolio/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=params.browser.js.map
}),
"[project]/portfolio/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
// When Cache Components is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else //TURBOPACK unreachable
        ;
    };
} //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
}),
"[project]/portfolio/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return afterTaskAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const afterTaskAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)(); //# sourceMappingURL=after-task-async-storage-instance.js.map
}),
"[project]/portfolio/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorage", {
    enumerable: true,
    get: function() {
        return _aftertaskasyncstorageinstance.afterTaskAsyncStorageInstance;
    }
});
const _aftertaskasyncstorageinstance = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)"); //# sourceMappingURL=after-task-async-storage.external.js.map
}),
"[project]/portfolio/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRequestAPICallableInsideAfter: null,
    throwForSearchParamsAccessInUseCache: null,
    throwWithStaticGenerationBailoutError: null,
    throwWithStaticGenerationBailoutErrorWithDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function() {
        return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutError: function() {
        return throwWithStaticGenerationBailoutError;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
});
const _staticgenerationbailout = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)");
const _aftertaskasyncstorageexternal = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)");
function throwWithStaticGenerationBailoutError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError("Route ".concat(route, " couldn't be rendered statically because it used ").concat(expression, ". See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering")), "__NEXT_ERROR_CODE", {
        value: "E576",
        enumerable: false,
        configurable: true
    });
}
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError("Route ".concat(route, ' with `dynamic = "error"` couldn\'t be rendered statically because it used ').concat(expression, ". See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering")), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
    var _workStore;
    const error = Object.defineProperty(new Error("Route ".concat(workStore.route, ' used "searchParams" inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await "searchParams" outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache')), "__NEXT_ERROR_CODE", {
        value: "E779",
        enumerable: false,
        configurable: true
    });
    Error.captureStackTrace(error, constructorOpt);
    var _invalidDynamicUsageError;
    (_invalidDynamicUsageError = (_workStore = workStore).invalidDynamicUsageError) !== null && _invalidDynamicUsageError !== void 0 ? _invalidDynamicUsageError : _workStore.invalidDynamicUsageError = error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
} //# sourceMappingURL=utils.js.map
}),
"[project]/portfolio/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createPrerenderSearchParamsForClientPage: null,
    createSearchParamsFromClient: null,
    createServerSearchParamsForMetadata: null,
    createServerSearchParamsForServerPage: null,
    makeErroringSearchParamsForUseCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createPrerenderSearchParamsForClientPage: function() {
        return createPrerenderSearchParamsForClientPage;
    },
    createSearchParamsFromClient: function() {
        return createSearchParamsFromClient;
    },
    createServerSearchParamsForMetadata: function() {
        return createServerSearchParamsForMetadata;
    },
    createServerSearchParamsForServerPage: function() {
        return createServerSearchParamsForServerPage;
    },
    makeErroringSearchParamsForUseCache: function() {
        return makeErroringSearchParamsForUseCache;
    }
});
const _reflect = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)");
function createSearchParamsFromClient(underlyingSearchParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderSearchParams(workStore, workUnitStore);
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E769",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E739",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
                return createRenderSearchParams(underlyingSearchParams, workStore);
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
const createServerSearchParamsForMetadata = createServerSearchParamsForServerPage;
function createServerSearchParamsForServerPage(underlyingSearchParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderSearchParams(workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerSearchParamsForServerPage should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E747",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderSearchParams(underlyingSearchParams, workUnitStore);
            case 'request':
                return createRenderSearchParams(underlyingSearchParams, workStore);
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderSearchParamsForClientPage(workStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
                // We're prerendering in a mode that aborts (cacheComponents) and should stall
                // the promise to ensure the RSC side is considered dynamic
                return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, '`searchParams`');
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E768",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E746",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'request':
                return Promise.resolve({});
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createStaticPrerenderSearchParams(workStore, prerenderStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-client':
            // We are in a cacheComponents (PPR or otherwise) prerender
            return makeHangingSearchParams(workStore, prerenderStore);
        case 'prerender-ppr':
        case 'prerender-legacy':
            // We are in a legacy static generation and need to interrupt the
            // prerender when search params are accessed.
            return makeErroringExoticSearchParams(workStore, prerenderStore);
        default:
            return prerenderStore;
    }
}
function createRuntimePrerenderSearchParams(underlyingSearchParams, workUnitStore) {
    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : makeUntrackedExoticSearchParams(underlyingSearchParams));
}
function createRenderSearchParams(underlyingSearchParams, workStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            // Semantically we only need the dev tracking when running in `next dev`
            // but since you would never use next dev with production NODE_ENV we use this
            // as a proxy so we can statically exclude this code from production builds.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return makeDynamicallyTrackedExoticSearchParamsWithDevWarnings(underlyingSearchParams, workStore);
        } else //TURBOPACK unreachable
        ;
    }
}
const CachedSearchParams = new WeakMap();
const CachedSearchParamsForUseCache = new WeakMap();
function makeHangingSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(prerenderStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`searchParams`');
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                default:
                    {
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
            }
        }
    });
    CachedSearchParams.set(prerenderStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringExoticSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const underlyingSearchParams = {};
    // For search params we don't construct a ReactPromise because we want to interrupt
    // rendering on any property access that was not set from outside and so we only want
    // to have properties like value and status if React sets them.
    const promise = Promise.resolve(underlyingSearchParams);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        if (workStore.dynamicShouldError) {
                            (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                        } else if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                        return;
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        if (workStore.dynamicShouldError) {
                            (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                        } else if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                        return;
                    }
                default:
                    {
                        if (typeof prop === 'string' && !_reflectutils.wellKnownProperties.has(prop)) {
                            const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                            if (workStore.dynamicShouldError) {
                                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                            } else if (prerenderStore.type === 'prerender-ppr') {
                                // PPR Prerender (no cacheComponents)
                                (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                            } else {
                                // Legacy Prerender
                                (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                            }
                        }
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
            }
        },
        has (target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests trigger dynamic. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string') {
                const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                if (workStore.dynamicShouldError) {
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                } else if (prerenderStore.type === 'prerender-ppr') {
                    // PPR Prerender (no cacheComponents)
                    (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                } else {
                    // Legacy Prerender
                    (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                }
                return false;
            }
            return _reflect.ReflectAdapter.has(target, prop);
        },
        ownKeys () {
            const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
            if (workStore.dynamicShouldError) {
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
            } else if (prerenderStore.type === 'prerender-ppr') {
                // PPR Prerender (no cacheComponents)
                (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
            } else {
                // Legacy Prerender
                (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
            }
        }
    });
    CachedSearchParams.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringSearchParamsForUseCache(workStore) {
    const cachedSearchParams = CachedSearchParamsForUseCache.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve({});
    const proxiedPromise = new Proxy(promise, {
        get: function get(target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it. We know it
                // isn't a dynamic access because it can only be something that was
                // previously written to the promise and thus not an underlying
                // searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            if (typeof prop === 'string' && (prop === 'then' || !_reflectutils.wellKnownProperties.has(prop))) {
                (0, _utils.throwForSearchParamsAccessInUseCache)(workStore, get);
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        has: function has(target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests throw an error. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string' && (prop === 'then' || !_reflectutils.wellKnownProperties.has(prop))) {
                (0, _utils.throwForSearchParamsAccessInUseCache)(workStore, has);
            }
            return _reflect.ReflectAdapter.has(target, prop);
        },
        ownKeys: function ownKeys() {
            (0, _utils.throwForSearchParamsAccessInUseCache)(workStore, ownKeys);
        }
    });
    CachedSearchParamsForUseCache.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeUntrackedExoticSearchParams(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    // We don't use makeResolvedReactPromise here because searchParams
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingSearchParams);
    CachedSearchParams.set(underlyingSearchParams, promise);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (!_reflectutils.wellKnownProperties.has(prop)) {
            Object.defineProperty(promise, prop, {
                get () {
                    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
                    if (workUnitStore) {
                        (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    }
                    return underlyingSearchParams[prop];
                },
                set (value) {
                    Object.defineProperty(promise, prop, {
                        value,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    return promise;
}
function makeUntrackedSearchParams(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve(underlyingSearchParams);
    CachedSearchParams.set(underlyingSearchParams, promise);
    return promise;
}
function makeDynamicallyTrackedExoticSearchParamsWithDevWarnings(underlyingSearchParams, store) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    // We have an unfortunate sequence of events that requires this initialization logic. We want to instrument the underlying
    // searchParams object to detect if you are accessing values in dev. This is used for warnings and for things like the static prerender
    // indicator. However when we pass this proxy to our Promise.resolve() below the VM checks if the resolved value is a promise by looking
    // at the `.then` property. To our dynamic tracking logic this is indistinguishable from a `then` searchParam and so we would normally trigger
    // dynamic tracking. However we know that this .then is not real dynamic access, it's just how thenables resolve in sequence. So we introduce
    // this initialization concept so we omit the dynamic check until after we've constructed our resolved promise.
    let promiseInitialized = false;
    const proxiedUnderlying = new Proxy(underlyingSearchParams, {
        get (target, prop, receiver) {
            if (typeof prop === 'string' && promiseInitialized) {
                if (store.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
                }
                const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
                if (workUnitStore) {
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (store.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            if (store.dynamicShouldError) {
                const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
            }
            return Reflect.ownKeys(target);
        }
    });
    // We don't use makeResolvedReactPromise here because searchParams
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingSearchParams);
    promise.then(()=>{
        promiseInitialized = true;
    });
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
            Object.defineProperty(promise, prop, {
                get () {
                    return proxiedUnderlying[prop];
                },
                set (newValue) {
                    Object.defineProperty(promise, prop, {
                        value: newValue,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (prop === 'then' && store.dynamicShouldError) {
                const expression = '`searchParams.then`';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
            }
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    syncIODev(store.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    syncIODev(store.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            const expression = '`Object.keys(searchParams)` or similar';
            syncIODev(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
// Similar to `makeDynamicallyTrackedExoticSearchParamsWithDevWarnings`, but
// just logging the sync access without actually defining the search params on
// the promise.
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams, store) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(store.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(store.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            const expression = '`Object.keys(searchParams)` or similar';
            warnForIncompleteEnumeration(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function syncIODev(route, expression, missingProperties) {
    // In all cases we warn normally
    if (missingProperties && missingProperties.length > 0) {
        warnForIncompleteEnumeration(route, expression, missingProperties);
    } else {
        warnForSyncAccess(route, expression);
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'request':
                if (workUnitStore.prerenderPhase === true) {
                    // When we're rendering dynamically in dev, we need to advance out of
                    // the Prerender environment when we read Request data synchronously.
                    (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(workUnitStore);
                }
                break;
            case 'prerender':
            case 'prerender-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createSearchAccessError);
const warnForIncompleteEnumeration = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createIncompleteEnumerationError);
function createSearchAccessError(route, expression) {
    const prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`searchParams` should be awaited before using its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E249",
        enumerable: false,
        configurable: true
    });
}
function createIncompleteEnumerationError(route, expression, missingProperties) {
    const prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`searchParams` should be awaited before using its properties. " + "The following properties were not available through enumeration " + "because they conflict with builtin or well-known property names: " + "".concat(describeListOfPropertyNames(missingProperties), ". ") + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E2",
        enumerable: false,
        configurable: true
    });
}
function describeListOfPropertyNames(properties) {
    switch(properties.length){
        case 0:
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected describeListOfPropertyNames to be called with a non-empty list of strings.'), "__NEXT_ERROR_CODE", {
                value: "E531",
                enumerable: false,
                configurable: true
            });
        case 1:
            return "`".concat(properties[0], "`");
        case 2:
            return "`".concat(properties[0], "` and `").concat(properties[1], "`");
        default:
            {
                let description = '';
                for(let i = 0; i < properties.length - 1; i++){
                    description += "`".concat(properties[i], "`, ");
                }
                description += ", and `".concat(properties[properties.length - 1], "`");
                return description;
            }
    }
} //# sourceMappingURL=search-params.js.map
}),
"[project]/portfolio/node_modules/next/dist/server/app-render/dynamic-access-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dynamicAccessAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return dynamicAccessAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const dynamicAccessAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)(); //# sourceMappingURL=dynamic-access-async-storage-instance.js.map
}),
"[project]/portfolio/node_modules/next/dist/server/app-render/dynamic-access-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dynamicAccessAsyncStorage", {
    enumerable: true,
    get: function() {
        return _dynamicaccessasyncstorageinstance.dynamicAccessAsyncStorageInstance;
    }
});
const _dynamicaccessasyncstorageinstance = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/dynamic-access-async-storage-instance.js [app-client] (ecmascript)"); //# sourceMappingURL=dynamic-access-async-storage.external.js.map
}),
"[project]/portfolio/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createParamsFromClient: null,
    createPrerenderParamsForClientSegment: null,
    createServerParamsForMetadata: null,
    createServerParamsForRoute: null,
    createServerParamsForServerSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createParamsFromClient: function() {
        return createParamsFromClient;
    },
    createPrerenderParamsForClientSegment: function() {
        return createPrerenderParamsForClientSegment;
    },
    createServerParamsForMetadata: function() {
        return createServerParamsForMetadata;
    },
    createServerParamsForRoute: function() {
        return createServerParamsForRoute;
    },
    createServerParamsForServerSegment: function() {
        return createServerParamsForServerSegment;
    }
});
const _workasyncstorageexternal = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
const _dynamicaccessasyncstorageexternal = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/dynamic-access-async-storage.external.js [app-client] (ecmascript)");
function createParamsFromClient(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E736",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E770",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const devFallbackParams = workUnitStore.devFallbackParams;
                    return createRenderParamsInDev(underlyingParams, devFallbackParams, workStore);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
const createServerParamsForMetadata = createServerParamsForServerSegment;
function createServerParamsForRoute(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForRoute should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E738",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderParams(underlyingParams, workUnitStore);
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const devFallbackParams = workUnitStore.devFallbackParams;
                    return createRenderParamsInDev(underlyingParams, devFallbackParams, workStore);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createServerParamsForServerSegment(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForServerSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E743",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderParams(underlyingParams, workUnitStore);
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const devFallbackParams = workUnitStore.devFallbackParams;
                    return createRenderParamsInDev(underlyingParams, devFallbackParams, workStore);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderParamsForClientSegment(underlyingParams) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Missing workStore in createPrerenderParamsForClientSegment'), "__NEXT_ERROR_CODE", {
            value: "E773",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
                const fallbackParams = workUnitStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(let key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            // This params object has one or more fallback params, so we need
                            // to consider the awaiting of this params object "dynamic". Since
                            // we are in cacheComponents mode we encode this as a promise that never
                            // resolves.
                            return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, '`params`');
                        }
                    }
                }
                break;
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderParamsForClientSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E734",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'prerender-runtime':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // We're prerendering in a mode that does not abort. We resolve the promise without
    // any tracking because we're just transporting a value from server to client where the tracking
    // will be applied.
    return Promise.resolve(underlyingParams);
}
function createStaticPrerenderParams(underlyingParams, workStore, prerenderStore) {
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-client':
            {
                const fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(const key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            // This params object has one or more fallback params, so we need
                            // to consider the awaiting of this params object "dynamic". Since
                            // we are in cacheComponents mode we encode this as a promise that never
                            // resolves.
                            return makeHangingParams(underlyingParams, workStore, prerenderStore);
                        }
                    }
                }
                break;
            }
        case 'prerender-ppr':
            {
                const fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(const key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            return makeErroringExoticParams(underlyingParams, fallbackParams, workStore, prerenderStore);
                        }
                    }
                }
                break;
            }
        case 'prerender-legacy':
            break;
        default:
            prerenderStore;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return makeUntrackedExoticParams(underlyingParams);
    }
}
function createRuntimePrerenderParams(underlyingParams, workUnitStore) {
    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : makeUntrackedExoticParams(underlyingParams));
}
function createRenderParamsInProd(underlyingParams) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return makeUntrackedExoticParams(underlyingParams);
}
function createRenderParamsInDev(underlyingParams, devFallbackParams, workStore) {
    let hasFallbackParams = false;
    if (devFallbackParams) {
        for(let key in underlyingParams){
            if (devFallbackParams.has(key)) {
                hasFallbackParams = true;
                break;
            }
        }
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return makeDynamicallyTrackedExoticParamsWithDevWarnings(underlyingParams, hasFallbackParams, workStore);
}
const CachedParams = new WeakMap();
const fallbackParamsProxyHandler = {
    get: function get(target, prop, receiver) {
        if (prop === 'then' || prop === 'catch' || prop === 'finally') {
            const originalMethod = _reflect.ReflectAdapter.get(target, prop, receiver);
            return ({
                [prop]: function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    const store = _dynamicaccessasyncstorageexternal.dynamicAccessAsyncStorage.getStore();
                    if (store) {
                        store.abortController.abort(Object.defineProperty(new Error("Accessed fallback `params` during prerendering."), "__NEXT_ERROR_CODE", {
                            value: "E691",
                            enumerable: false,
                            configurable: true
                        }));
                    }
                    return new Proxy(originalMethod.apply(target, args), fallbackParamsProxyHandler);
                }
            })[prop];
        }
        return _reflect.ReflectAdapter.get(target, prop, receiver);
    }
};
function makeHangingParams(underlyingParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = new Proxy((0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`params`'), fallbackParamsProxyHandler);
    CachedParams.set(underlyingParams, promise);
    return promise;
}
function makeErroringExoticParams(underlyingParams, fallbackParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const augmentedUnderlying = {
        ...underlyingParams
    };
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(augmentedUnderlying);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            if (fallbackParams.has(prop)) {
                Object.defineProperty(augmentedUnderlying, prop, {
                    get () {
                        const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when cacheComponents is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    enumerable: true
                });
                Object.defineProperty(promise, prop, {
                    get () {
                        const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when cacheComponents is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    set (newValue) {
                        Object.defineProperty(promise, prop, {
                            value: newValue,
                            writable: true,
                            enumerable: true
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
            } else {
                ;
                promise[prop] = underlyingParams[prop];
            }
        }
    });
    return promise;
}
function makeUntrackedExoticParams(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            ;
            promise[prop] = underlyingParams[prop];
        }
    });
    return promise;
}
function makeUntrackedParams(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = Promise.resolve(underlyingParams);
    CachedParams.set(underlyingParams, promise);
    return promise;
}
function makeDynamicallyTrackedExoticParamsWithDevWarnings(underlyingParams, hasFallbackParams, store) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = hasFallbackParams ? (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingParams) : Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
            promise[prop] = underlyingParams[prop];
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    syncIODev(store.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            const expression = '`...params` or similar expression';
            syncIODev(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
// Similar to `makeDynamicallyTrackedExoticParamsWithDevWarnings`, but just
// logging the sync access without actually defining the params on the promise.
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams, hasFallbackParams, store) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = hasFallbackParams ? (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingParams) : Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(store.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            const expression = '`...params` or similar expression';
            warnForIncompleteEnumeration(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function syncIODev(route, expression, missingProperties) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'request':
                if (workUnitStore.prerenderPhase === true) {
                    // When we're rendering dynamically in dev, we need to advance out of
                    // the Prerender environment when we read Request data synchronously.
                    (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(workUnitStore);
                }
                break;
            case 'prerender':
            case 'prerender-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
    // In all cases we warn normally
    if (missingProperties && missingProperties.length > 0) {
        warnForIncompleteEnumeration(route, expression, missingProperties);
    } else {
        warnForSyncAccess(route, expression);
    }
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createParamsAccessError);
const warnForIncompleteEnumeration = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createIncompleteEnumerationError);
function createParamsAccessError(route, expression) {
    const prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`params` should be awaited before using its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E307",
        enumerable: false,
        configurable: true
    });
}
function createIncompleteEnumerationError(route, expression, missingProperties) {
    const prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`params` should be awaited before using its properties. " + "The following properties were not available through enumeration " + "because they conflict with builtin property names: " + "".concat(describeListOfPropertyNames(missingProperties), ". ") + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E482",
        enumerable: false,
        configurable: true
    });
}
function describeListOfPropertyNames(properties) {
    switch(properties.length){
        case 0:
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected describeListOfPropertyNames to be called with a non-empty list of strings.'), "__NEXT_ERROR_CODE", {
                value: "E531",
                enumerable: false,
                configurable: true
            });
        case 1:
            return "`".concat(properties[0], "`");
        case 2:
            return "`".concat(properties[0], "` and `").concat(properties[1], "`");
        default:
            {
                let description = '';
                for(let i = 0; i < properties.length - 1; i++){
                    description += "`".concat(properties[i], "`, ");
                }
                description += ", and `".concat(properties[properties.length - 1], "`");
                return description;
            }
    }
} //# sourceMappingURL=params.js.map
}),
"[project]/portfolio/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
function ClientPageRoot(param) {
    let { Component, searchParams, params, promises } = param;
    if (typeof window === 'undefined') {
        const { workAsyncStorage } = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
        let clientSearchParams;
        let clientParams;
        // We are going to instrument the searchParams prop with tracking for the
        // appropriate context. We wrap differently in prerendering vs rendering
        const store = workAsyncStorage.getStore();
        if (!store) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to exist when handling searchParams in a client Page.'), "__NEXT_ERROR_CODE", {
                value: "E564",
                enumerable: false,
                configurable: true
            });
        }
        const { createSearchParamsFromClient } = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)");
        clientSearchParams = createSearchParamsFromClient(searchParams, store);
        const { createParamsFromClient } = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)");
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    } else {
        const { createRenderSearchParamsFromClient } = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)");
        const clientSearchParams = createRenderSearchParamsFromClient(searchParams);
        const { createRenderParamsFromClient } = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
        const clientParams = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-page.js.map
}),
"[project]/portfolio/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
function ClientSegmentRoot(param) {
    let { Component, slots, params, promise } = param;
    if (typeof window === 'undefined') {
        const { workAsyncStorage } = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
        let clientParams;
        // We are going to instrument the searchParams prop with tracking for the
        // appropriate context. We wrap differently in prerendering vs rendering
        const store = workAsyncStorage.getStore();
        if (!store) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to exist when handling params in a client segment such as a Layout or Template.'), "__NEXT_ERROR_CODE", {
                value: "E600",
                enumerable: false,
                configurable: true
            });
        }
        const { createParamsFromClient } = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)");
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    } else {
        const { createRenderParamsFromClient } = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
        const clientParams = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-segment.js.map
}),
"[project]/portfolio/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
}; //# sourceMappingURL=icon-mark.js.map
}),
"[project]/portfolio/node_modules/next/dist/client/components/metadata/async-metadata.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AsyncMetadataOutlet", {
    enumerable: true,
    get: function() {
        return AsyncMetadataOutlet;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function MetadataOutlet(param) {
    let { promise } = param;
    const { error, digest } = (0, _react.use)(promise);
    if (error) {
        if (digest) {
            // The error will lose its original digest after passing from server layer to client layer；
            // We recover the digest property here to override the React created one if original digest exists.
            ;
            error.digest = digest;
        }
        throw error;
    }
    return null;
}
function AsyncMetadataOutlet(param) {
    let { promise } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(MetadataOutlet, {
            promise: promise
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-metadata.js.map
}),
]);

//# sourceMappingURL=12b66_2c1d062a._.js.map