function P_(z) {
  return z && z.__esModule && Object.prototype.hasOwnProperty.call(z, "default") ? z.default : z;
}
var En = { exports: {} }, ot = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y1;
function B_() {
  if (Y1)
    return ot;
  Y1 = 1;
  var z = Symbol.for("react.element"), $ = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), Et = Symbol.for("react.strict_mode"), Ct = Symbol.for("react.profiler"), Me = Symbol.for("react.provider"), S = Symbol.for("react.context"), Rt = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), se = Symbol.for("react.memo"), dt = Symbol.for("react.lazy"), te = Symbol.iterator;
  function de(R) {
    return R === null || typeof R != "object" ? null : (R = te && R[te] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var ne = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ae = Object.assign, st = {};
  function Xe(R, B, le) {
    this.props = R, this.context = B, this.refs = st, this.updater = le || ne;
  }
  Xe.prototype.isReactComponent = {}, Xe.prototype.setState = function(R, B) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, B, "setState");
  }, Xe.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function Dn() {
  }
  Dn.prototype = Xe.prototype;
  function mt(R, B, le) {
    this.props = R, this.context = B, this.refs = st, this.updater = le || ne;
  }
  var Be = mt.prototype = new Dn();
  Be.constructor = mt, Ae(Be, Xe.prototype), Be.isPureReactComponent = !0;
  var rt = Array.isArray, we = Object.prototype.hasOwnProperty, Ke = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Zt(R, B, le) {
    var Pe, Ne = {}, pt = null, Ze = null;
    if (B != null)
      for (Pe in B.ref !== void 0 && (Ze = B.ref), B.key !== void 0 && (pt = "" + B.key), B)
        we.call(B, Pe) && !He.hasOwnProperty(Pe) && (Ne[Pe] = B[Pe]);
    var vt = arguments.length - 2;
    if (vt === 1)
      Ne.children = le;
    else if (1 < vt) {
      for (var tt = Array(vt), jt = 0; jt < vt; jt++)
        tt[jt] = arguments[jt + 2];
      Ne.children = tt;
    }
    if (R && R.defaultProps)
      for (Pe in vt = R.defaultProps, vt)
        Ne[Pe] === void 0 && (Ne[Pe] = vt[Pe]);
    return { $$typeof: z, type: R, key: pt, ref: Ze, props: Ne, _owner: Ke.current };
  }
  function On(R, B) {
    return { $$typeof: z, type: R.type, key: B, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function Ft(R) {
    return typeof R == "object" && R !== null && R.$$typeof === z;
  }
  function xt(R) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(le) {
      return B[le];
    });
  }
  var Cn = /\/+/g;
  function Ye(R, B) {
    return typeof R == "object" && R !== null && R.key != null ? xt("" + R.key) : B.toString(36);
  }
  function at(R, B, le, Pe, Ne) {
    var pt = typeof R;
    (pt === "undefined" || pt === "boolean") && (R = null);
    var Ze = !1;
    if (R === null)
      Ze = !0;
    else
      switch (pt) {
        case "string":
        case "number":
          Ze = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case z:
            case $:
              Ze = !0;
          }
      }
    if (Ze)
      return Ze = R, Ne = Ne(Ze), R = Pe === "" ? "." + Ye(Ze, 0) : Pe, rt(Ne) ? (le = "", R != null && (le = R.replace(Cn, "$&/") + "/"), at(Ne, B, le, "", function(jt) {
        return jt;
      })) : Ne != null && (Ft(Ne) && (Ne = On(Ne, le + (!Ne.key || Ze && Ze.key === Ne.key ? "" : ("" + Ne.key).replace(Cn, "$&/") + "/") + R)), B.push(Ne)), 1;
    if (Ze = 0, Pe = Pe === "" ? "." : Pe + ":", rt(R))
      for (var vt = 0; vt < R.length; vt++) {
        pt = R[vt];
        var tt = Pe + Ye(pt, vt);
        Ze += at(pt, B, le, tt, Ne);
      }
    else if (tt = de(R), typeof tt == "function")
      for (R = tt.call(R), vt = 0; !(pt = R.next()).done; )
        pt = pt.value, tt = Pe + Ye(pt, vt++), Ze += at(pt, B, le, tt, Ne);
    else if (pt === "object")
      throw B = String(R), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return Ze;
  }
  function Gt(R, B, le) {
    if (R == null)
      return R;
    var Pe = [], Ne = 0;
    return at(R, Pe, "", "", function(pt) {
      return B.call(le, pt, Ne++);
    }), Pe;
  }
  function Tt(R) {
    if (R._status === -1) {
      var B = R._result;
      B = B(), B.then(function(le) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = le);
      }, function(le) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = le);
      }), R._status === -1 && (R._status = 0, R._result = B);
    }
    if (R._status === 1)
      return R._result.default;
    throw R._result;
  }
  var ye = { current: null }, X = { transition: null }, Ce = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: X, ReactCurrentOwner: Ke };
  return ot.Children = { map: Gt, forEach: function(R, B, le) {
    Gt(R, function() {
      B.apply(this, arguments);
    }, le);
  }, count: function(R) {
    var B = 0;
    return Gt(R, function() {
      B++;
    }), B;
  }, toArray: function(R) {
    return Gt(R, function(B) {
      return B;
    }) || [];
  }, only: function(R) {
    if (!Ft(R))
      throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, ot.Component = Xe, ot.Fragment = A, ot.Profiler = Ct, ot.PureComponent = mt, ot.StrictMode = Et, ot.Suspense = fe, ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ce, ot.cloneElement = function(R, B, le) {
    if (R == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var Pe = Ae({}, R.props), Ne = R.key, pt = R.ref, Ze = R._owner;
    if (B != null) {
      if (B.ref !== void 0 && (pt = B.ref, Ze = Ke.current), B.key !== void 0 && (Ne = "" + B.key), R.type && R.type.defaultProps)
        var vt = R.type.defaultProps;
      for (tt in B)
        we.call(B, tt) && !He.hasOwnProperty(tt) && (Pe[tt] = B[tt] === void 0 && vt !== void 0 ? vt[tt] : B[tt]);
    }
    var tt = arguments.length - 2;
    if (tt === 1)
      Pe.children = le;
    else if (1 < tt) {
      vt = Array(tt);
      for (var jt = 0; jt < tt; jt++)
        vt[jt] = arguments[jt + 2];
      Pe.children = vt;
    }
    return { $$typeof: z, type: R.type, key: Ne, ref: pt, props: Pe, _owner: Ze };
  }, ot.createContext = function(R) {
    return R = { $$typeof: S, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: Me, _context: R }, R.Consumer = R;
  }, ot.createElement = Zt, ot.createFactory = function(R) {
    var B = Zt.bind(null, R);
    return B.type = R, B;
  }, ot.createRef = function() {
    return { current: null };
  }, ot.forwardRef = function(R) {
    return { $$typeof: Rt, render: R };
  }, ot.isValidElement = Ft, ot.lazy = function(R) {
    return { $$typeof: dt, _payload: { _status: -1, _result: R }, _init: Tt };
  }, ot.memo = function(R, B) {
    return { $$typeof: se, type: R, compare: B === void 0 ? null : B };
  }, ot.startTransition = function(R) {
    var B = X.transition;
    X.transition = {};
    try {
      R();
    } finally {
      X.transition = B;
    }
  }, ot.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, ot.useCallback = function(R, B) {
    return ye.current.useCallback(R, B);
  }, ot.useContext = function(R) {
    return ye.current.useContext(R);
  }, ot.useDebugValue = function() {
  }, ot.useDeferredValue = function(R) {
    return ye.current.useDeferredValue(R);
  }, ot.useEffect = function(R, B) {
    return ye.current.useEffect(R, B);
  }, ot.useId = function() {
    return ye.current.useId();
  }, ot.useImperativeHandle = function(R, B, le) {
    return ye.current.useImperativeHandle(R, B, le);
  }, ot.useInsertionEffect = function(R, B) {
    return ye.current.useInsertionEffect(R, B);
  }, ot.useLayoutEffect = function(R, B) {
    return ye.current.useLayoutEffect(R, B);
  }, ot.useMemo = function(R, B) {
    return ye.current.useMemo(R, B);
  }, ot.useReducer = function(R, B, le) {
    return ye.current.useReducer(R, B, le);
  }, ot.useRef = function(R) {
    return ye.current.useRef(R);
  }, ot.useState = function(R) {
    return ye.current.useState(R);
  }, ot.useSyncExternalStore = function(R, B, le) {
    return ye.current.useSyncExternalStore(R, B, le);
  }, ot.useTransition = function() {
    return ye.current.useTransition();
  }, ot.version = "18.2.0", ot;
}
var zm = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q1;
function $_() {
  return Q1 || (Q1 = 1, function(z, $) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.2.0", Et = Symbol.for("react.element"), Ct = Symbol.for("react.portal"), Me = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Rt = Symbol.for("react.profiler"), fe = Symbol.for("react.provider"), se = Symbol.for("react.context"), dt = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), de = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), st = Symbol.for("react.offscreen"), Xe = Symbol.iterator, Dn = "@@iterator";
      function mt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Xe && h[Xe] || h[Dn];
        return typeof C == "function" ? C : null;
      }
      var Be = {
        current: null
      }, rt = {
        transition: null
      }, we = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ke = {
        current: null
      }, He = {}, Zt = null;
      function On(h) {
        Zt = h;
      }
      He.setExtraStackFrame = function(h) {
        Zt = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        Zt && (h += Zt);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Ft = !1, xt = !1, Cn = !1, Ye = !1, at = !1, Gt = {
        ReactCurrentDispatcher: Be,
        ReactCurrentBatchConfig: rt,
        ReactCurrentOwner: Ke
      };
      Gt.ReactDebugCurrentFrame = He, Gt.ReactCurrentActQueue = we;
      function Tt(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            M[H - 1] = arguments[H];
          X("warn", h, M);
        }
      }
      function ye(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            M[H - 1] = arguments[H];
          X("error", h, M);
        }
      }
      function X(h, C, M) {
        {
          var H = Gt.ReactDebugCurrentFrame, G = H.getStackAddendum();
          G !== "" && (C += "%s", M = M.concat([G]));
          var ke = M.map(function(ee) {
            return String(ee);
          });
          ke.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, ke);
        }
      }
      var Ce = {};
      function R(h, C) {
        {
          var M = h.constructor, H = M && (M.displayName || M.name) || "ReactClass", G = H + "." + C;
          if (Ce[G])
            return;
          ye("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), Ce[G] = !0;
        }
      }
      var B = {
        isMounted: function(h) {
          return !1;
        },
        enqueueForceUpdate: function(h, C, M) {
          R(h, "forceUpdate");
        },
        enqueueReplaceState: function(h, C, M, H) {
          R(h, "replaceState");
        },
        enqueueSetState: function(h, C, M, H) {
          R(h, "setState");
        }
      }, le = Object.assign, Pe = {};
      Object.freeze(Pe);
      function Ne(h, C, M) {
        this.props = h, this.context = C, this.refs = Pe, this.updater = M || B;
      }
      Ne.prototype.isReactComponent = {}, Ne.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ne.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var pt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ze = function(h, C) {
          Object.defineProperty(Ne.prototype, h, {
            get: function() {
              Tt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var vt in pt)
          pt.hasOwnProperty(vt) && Ze(vt, pt[vt]);
      }
      function tt() {
      }
      tt.prototype = Ne.prototype;
      function jt(h, C, M) {
        this.props = h, this.context = C, this.refs = Pe, this.updater = M || B;
      }
      var fi = jt.prototype = new tt();
      fi.constructor = jt, le(fi, Ne.prototype), fi.isPureReactComponent = !0;
      function Cr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var _a = Array.isArray;
      function fn(h) {
        return _a(h);
      }
      function Jn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function Rr(h) {
        try {
          return Tr(h), !1;
        } catch {
          return !0;
        }
      }
      function Tr(h) {
        return "" + h;
      }
      function Ln(h) {
        if (Rr(h))
          return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Jn(h)), Tr(h);
      }
      function ka(h, C, M) {
        var H = h.displayName;
        if (H)
          return H;
        var G = C.displayName || C.name || "";
        return G !== "" ? M + "(" + G + ")" : M;
      }
      function di(h) {
        return h.displayName || "Context";
      }
      function er(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Me:
            return "Fragment";
          case Ct:
            return "Portal";
          case Rt:
            return "Profiler";
          case S:
            return "StrictMode";
          case te:
            return "Suspense";
          case de:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case se:
              var C = h;
              return di(C) + ".Consumer";
            case fe:
              var M = h;
              return di(M._context) + ".Provider";
            case dt:
              return ka(h, h.render, "ForwardRef");
            case ne:
              var H = h.displayName || null;
              return H !== null ? H : er(h.type) || "Memo";
            case Ae: {
              var G = h, ke = G._payload, ee = G._init;
              try {
                return er(ee(ke));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var wr = Object.prototype.hasOwnProperty, Ya = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, xr, Da, br;
      br = {};
      function Oa(h) {
        if (wr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Vn(h) {
        if (wr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Yr(h, C) {
        var M = function() {
          xr || (xr = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function Al(h, C) {
        var M = function() {
          Da || (Da = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function Qa(h) {
        if (typeof h.ref == "string" && Ke.current && h.__self && Ke.current.stateNode !== h.__self) {
          var C = er(Ke.current.type);
          br[C] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), br[C] = !0);
        }
      }
      var J = function(h, C, M, H, G, ke, ee) {
        var be = {
          $$typeof: Et,
          type: h,
          key: C,
          ref: M,
          props: ee,
          _owner: ke
        };
        return be._store = {}, Object.defineProperty(be._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(be, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(be, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: G
        }), Object.freeze && (Object.freeze(be.props), Object.freeze(be)), be;
      };
      function Re(h, C, M) {
        var H, G = {}, ke = null, ee = null, be = null, Ge = null;
        if (C != null) {
          Oa(C) && (ee = C.ref, Qa(C)), Vn(C) && (Ln(C.key), ke = "" + C.key), be = C.__self === void 0 ? null : C.__self, Ge = C.__source === void 0 ? null : C.__source;
          for (H in C)
            wr.call(C, H) && !Ya.hasOwnProperty(H) && (G[H] = C[H]);
        }
        var ft = arguments.length - 2;
        if (ft === 1)
          G.children = M;
        else if (ft > 1) {
          for (var Ut = Array(ft), Ot = 0; Ot < ft; Ot++)
            Ut[Ot] = arguments[Ot + 2];
          Object.freeze && Object.freeze(Ut), G.children = Ut;
        }
        if (h && h.defaultProps) {
          var zt = h.defaultProps;
          for (H in zt)
            G[H] === void 0 && (G[H] = zt[H]);
        }
        if (ke || ee) {
          var Pt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ke && Yr(G, Pt), ee && Al(G, Pt);
        }
        return J(h, ke, ee, be, Ge, Ke.current, G);
      }
      function Qe(h, C) {
        var M = J(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function Dt(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, G = le({}, h.props), ke = h.key, ee = h.ref, be = h._self, Ge = h._source, ft = h._owner;
        if (C != null) {
          Oa(C) && (ee = C.ref, ft = Ke.current), Vn(C) && (Ln(C.key), ke = "" + C.key);
          var Ut;
          h.type && h.type.defaultProps && (Ut = h.type.defaultProps);
          for (H in C)
            wr.call(C, H) && !Ya.hasOwnProperty(H) && (C[H] === void 0 && Ut !== void 0 ? G[H] = Ut[H] : G[H] = C[H]);
        }
        var Ot = arguments.length - 2;
        if (Ot === 1)
          G.children = M;
        else if (Ot > 1) {
          for (var zt = Array(Ot), Pt = 0; Pt < Ot; Pt++)
            zt[Pt] = arguments[Pt + 2];
          G.children = zt;
        }
        return J(h.type, ke, ee, be, Ge, ft, G);
      }
      function Lt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Et;
      }
      var Rn = ".", dn = ":";
      function _r(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(G) {
          return M[G];
        });
        return "$" + H;
      }
      var Bt = !1, aa = /\/+/g;
      function Jt(h) {
        return h.replace(aa, "$&/");
      }
      function Vt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Ln(h.key), _r("" + h.key)) : C.toString(36);
      }
      function Hl(h, C, M, H, G) {
        var ke = typeof h;
        (ke === "undefined" || ke === "boolean") && (h = null);
        var ee = !1;
        if (h === null)
          ee = !0;
        else
          switch (ke) {
            case "string":
            case "number":
              ee = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Et:
                case Ct:
                  ee = !0;
              }
          }
        if (ee) {
          var be = h, Ge = G(be), ft = H === "" ? Rn + Vt(be, 0) : H;
          if (fn(Ge)) {
            var Ut = "";
            ft != null && (Ut = Jt(ft) + "/"), Hl(Ge, C, Ut, "", function(Pf) {
              return Pf;
            });
          } else
            Ge != null && (Lt(Ge) && (Ge.key && (!be || be.key !== Ge.key) && Ln(Ge.key), Ge = Qe(
              Ge,
              M + (Ge.key && (!be || be.key !== Ge.key) ? Jt("" + Ge.key) + "/" : "") + ft
            )), C.push(Ge));
          return 1;
        }
        var Ot, zt, Pt = 0, nt = H === "" ? Rn : H + dn;
        if (fn(h))
          for (var mi = 0; mi < h.length; mi++)
            Ot = h[mi], zt = nt + Vt(Ot, mi), Pt += Hl(Ot, C, M, zt, G);
        else {
          var Pu = mt(h);
          if (typeof Pu == "function") {
            var $o = h;
            Pu === $o.entries && (Bt || Tt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var Vf = Pu.call($o), Aa, Io = 0; !(Aa = Vf.next()).done; )
              Ot = Aa.value, zt = nt + Vt(Ot, Io++), Pt += Hl(Ot, C, M, zt, G);
          } else if (ke === "object") {
            var Yo = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Yo === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Yo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Pt;
      }
      function pi(h, C, M) {
        if (h == null)
          return h;
        var H = [], G = 0;
        return Hl(h, H, "", "", function(ke) {
          return C.call(M, ke, G++);
        }), H;
      }
      function ku(h) {
        var C = 0;
        return pi(h, function() {
          C++;
        }), C;
      }
      function $s(h, C, M) {
        pi(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function Is(h) {
        return pi(h, function(C) {
          return C;
        }) || [];
      }
      function Du(h) {
        if (!Lt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Ao(h) {
        var C = {
          $$typeof: se,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: fe,
          _context: C
        };
        var M = !1, H = !1, G = !1;
        {
          var ke = {
            $$typeof: se,
            _context: C
          };
          Object.defineProperties(ke, {
            Provider: {
              get: function() {
                return H || (H = !0, ye("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ee) {
                C.Provider = ee;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ee) {
                C._currentValue = ee;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ee) {
                C._currentValue2 = ee;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ee) {
                C._threadCount = ee;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, ye("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ee) {
                G || (Tt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ee), G = !0);
              }
            }
          }), C.Consumer = ke;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var La = -1, $i = 0, Wa = 1, Ii = 2;
      function Qr(h) {
        if (h._status === La) {
          var C = h._result, M = C();
          if (M.then(function(ke) {
            if (h._status === $i || h._status === La) {
              var ee = h;
              ee._status = Wa, ee._result = ke;
            }
          }, function(ke) {
            if (h._status === $i || h._status === La) {
              var ee = h;
              ee._status = Ii, ee._result = ke;
            }
          }), h._status === La) {
            var H = h;
            H._status = $i, H._result = M;
          }
        }
        if (h._status === Wa) {
          var G = h._result;
          return G === void 0 && ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, G), "default" in G || ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, G), G.default;
        } else
          throw h._result;
      }
      function Ma(h) {
        var C = {
          _status: La,
          _result: h
        }, M = {
          $$typeof: Ae,
          _payload: C,
          _init: Qr
        };
        {
          var H, G;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(ke) {
                ye("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = ke, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return G;
              },
              set: function(ke) {
                ye("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), G = ke, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Yi(h) {
        h != null && h.$$typeof === ne ? ye("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ye("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ye("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ye("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: dt,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(H) {
              M = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var Qi;
      Qi = Symbol.for("react.module.reference");
      function Ou(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Me || h === Rt || at || h === S || h === te || h === de || Ye || h === st || Ft || xt || Cn || typeof h == "object" && h !== null && (h.$$typeof === Ae || h.$$typeof === ne || h.$$typeof === fe || h.$$typeof === se || h.$$typeof === dt || h.$$typeof === Qi || h.getModuleId !== void 0));
      }
      function Ho(h, C) {
        Ou(h) || ye("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: ne,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(G) {
              H = G, !h.name && !h.displayName && (h.displayName = G);
            }
          });
        }
        return M;
      }
      function ln() {
        var h = Be.current;
        return h === null && ye(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function ia(h) {
        var C = ln();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? ye("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && ye("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Fl(h) {
        var C = ln();
        return C.useState(h);
      }
      function Wi(h, C, M) {
        var H = ln();
        return H.useReducer(h, C, M);
      }
      function Pn(h) {
        var C = ln();
        return C.useRef(h);
      }
      function Ys(h, C) {
        var M = ln();
        return M.useEffect(h, C);
      }
      function Qs(h, C) {
        var M = ln();
        return M.useInsertionEffect(h, C);
      }
      function Fo(h, C) {
        var M = ln();
        return M.useLayoutEffect(h, C);
      }
      function Ws(h, C) {
        var M = ln();
        return M.useCallback(h, C);
      }
      function Af(h, C) {
        var M = ln();
        return M.useMemo(h, C);
      }
      function Hf(h, C, M) {
        var H = ln();
        return H.useImperativeHandle(h, C, M);
      }
      function qt(h, C) {
        {
          var M = ln();
          return M.useDebugValue(h, C);
        }
      }
      function Ff() {
        var h = ln();
        return h.useTransition();
      }
      function Na(h) {
        var C = ln();
        return C.useDeferredValue(h);
      }
      function We() {
        var h = ln();
        return h.useId();
      }
      function Ga(h, C, M) {
        var H = ln();
        return H.useSyncExternalStore(h, C, M);
      }
      var Gi = 0, Lu, qi, kr, jo, or, Vo, Po;
      function Gs() {
      }
      Gs.__reactDisabledLog = !0;
      function Mu() {
        {
          if (Gi === 0) {
            Lu = console.log, qi = console.info, kr = console.warn, jo = console.error, or = console.group, Vo = console.groupCollapsed, Po = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Gs,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Gi++;
        }
      }
      function Xi() {
        {
          if (Gi--, Gi === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: le({}, h, {
                value: Lu
              }),
              info: le({}, h, {
                value: qi
              }),
              warn: le({}, h, {
                value: kr
              }),
              error: le({}, h, {
                value: jo
              }),
              group: le({}, h, {
                value: or
              }),
              groupCollapsed: le({}, h, {
                value: Vo
              }),
              groupEnd: le({}, h, {
                value: Po
              })
            });
          }
          Gi < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ua = Gt.ReactCurrentDispatcher, sr;
      function Ki(h, C, M) {
        {
          if (sr === void 0)
            try {
              throw Error();
            } catch (G) {
              var H = G.stack.trim().match(/\n( *(at )?)/);
              sr = H && H[1] || "";
            }
          return `
` + sr + h;
        }
      }
      var Zi = !1, Ji;
      {
        var Nu = typeof WeakMap == "function" ? WeakMap : Map;
        Ji = new Nu();
      }
      function Uu(h, C) {
        if (!h || Zi)
          return "";
        {
          var M = Ji.get(h);
          if (M !== void 0)
            return M;
        }
        var H;
        Zi = !0;
        var G = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ke;
        ke = Ua.current, Ua.current = null, Mu();
        try {
          if (C) {
            var ee = function() {
              throw Error();
            };
            if (Object.defineProperty(ee.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ee, []);
              } catch (nt) {
                H = nt;
              }
              Reflect.construct(h, [], ee);
            } else {
              try {
                ee.call();
              } catch (nt) {
                H = nt;
              }
              h.call(ee.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (nt) {
              H = nt;
            }
            h();
          }
        } catch (nt) {
          if (nt && H && typeof nt.stack == "string") {
            for (var be = nt.stack.split(`
`), Ge = H.stack.split(`
`), ft = be.length - 1, Ut = Ge.length - 1; ft >= 1 && Ut >= 0 && be[ft] !== Ge[Ut]; )
              Ut--;
            for (; ft >= 1 && Ut >= 0; ft--, Ut--)
              if (be[ft] !== Ge[Ut]) {
                if (ft !== 1 || Ut !== 1)
                  do
                    if (ft--, Ut--, Ut < 0 || be[ft] !== Ge[Ut]) {
                      var Ot = `
` + be[ft].replace(" at new ", " at ");
                      return h.displayName && Ot.includes("<anonymous>") && (Ot = Ot.replace("<anonymous>", h.displayName)), typeof h == "function" && Ji.set(h, Ot), Ot;
                    }
                  while (ft >= 1 && Ut >= 0);
                break;
              }
          }
        } finally {
          Zi = !1, Ua.current = ke, Xi(), Error.prepareStackTrace = G;
        }
        var zt = h ? h.displayName || h.name : "", Pt = zt ? Ki(zt) : "";
        return typeof h == "function" && Ji.set(h, Pt), Pt;
      }
      function vi(h, C, M) {
        return Uu(h, !1);
      }
      function jf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function qa(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Uu(h, jf(h));
        if (typeof h == "string")
          return Ki(h);
        switch (h) {
          case te:
            return Ki("Suspense");
          case de:
            return Ki("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case dt:
              return vi(h.render);
            case ne:
              return qa(h.type, C, M);
            case Ae: {
              var H = h, G = H._payload, ke = H._init;
              try {
                return qa(ke(G), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var yt = {}, zu = Gt.ReactDebugCurrentFrame;
      function jl(h) {
        if (h) {
          var C = h._owner, M = qa(h.type, h._source, C ? C.type : null);
          zu.setExtraStackFrame(M);
        } else
          zu.setExtraStackFrame(null);
      }
      function Au(h, C, M, H, G) {
        {
          var ke = Function.call.bind(wr);
          for (var ee in h)
            if (ke(h, ee)) {
              var be = void 0;
              try {
                if (typeof h[ee] != "function") {
                  var Ge = Error((H || "React class") + ": " + M + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ge.name = "Invariant Violation", Ge;
                }
                be = h[ee](C, ee, H, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ft) {
                be = ft;
              }
              be && !(be instanceof Error) && (jl(G), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", M, ee, typeof be), jl(null)), be instanceof Error && !(be.message in yt) && (yt[be.message] = !0, jl(G), ye("Failed %s type: %s", M, be.message), jl(null));
            }
        }
      }
      function ct(h) {
        if (h) {
          var C = h._owner, M = qa(h.type, h._source, C ? C.type : null);
          On(M);
        } else
          On(null);
      }
      var Hu;
      Hu = !1;
      function Fu() {
        if (Ke.current) {
          var h = er(Ke.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Fe(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Vl(h) {
        return h != null ? Fe(h.__source) : "";
      }
      var en = {};
      function Dr(h) {
        var C = Fu();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function cr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = Dr(C);
          if (!en[M]) {
            en[M] = !0;
            var H = "";
            h && h._owner && h._owner !== Ke.current && (H = " It was passed a child from " + er(h._owner.type) + "."), ct(h), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, H), ct(null);
          }
        }
      }
      function el(h, C) {
        if (typeof h == "object") {
          if (fn(h))
            for (var M = 0; M < h.length; M++) {
              var H = h[M];
              Lt(H) && cr(H, C);
            }
          else if (Lt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var G = mt(h);
            if (typeof G == "function" && G !== h.entries)
              for (var ke = G.call(h), ee; !(ee = ke.next()).done; )
                Lt(ee.value) && cr(ee.value, C);
          }
        }
      }
      function un(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === dt || C.$$typeof === ne))
            M = C.propTypes;
          else
            return;
          if (M) {
            var H = er(C);
            Au(M, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !Hu) {
            Hu = !0;
            var G = er(C);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function bt(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var H = C[M];
            if (H !== "children" && H !== "key") {
              ct(h), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), ct(null);
              break;
            }
          }
          h.ref !== null && (ct(h), ye("Invalid attribute `ref` supplied to `React.Fragment`."), ct(null));
        }
      }
      function qs(h, C, M) {
        var H = Ou(h);
        if (!H) {
          var G = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = Vl(C);
          ke ? G += ke : G += Fu();
          var ee;
          h === null ? ee = "null" : fn(h) ? ee = "array" : h !== void 0 && h.$$typeof === Et ? (ee = "<" + (er(h.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof h, ye("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, G);
        }
        var be = Re.apply(this, arguments);
        if (be == null)
          return be;
        if (H)
          for (var Ge = 2; Ge < arguments.length; Ge++)
            el(arguments[Ge], h);
        return h === Me ? bt(be) : un(be), be;
      }
      var Or = !1;
      function Mn(h) {
        var C = qs.bind(null, h);
        return C.type = h, Or || (Or = !0, Tt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Tt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Xa(h, C, M) {
        for (var H = Dt.apply(this, arguments), G = 2; G < arguments.length; G++)
          el(arguments[G], H.type);
        return un(H), H;
      }
      function Xs(h, C) {
        var M = rt.transition;
        rt.transition = {};
        var H = rt.transition;
        rt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (rt.transition = M, M === null && H._updatedFibers) {
            var G = H._updatedFibers.size;
            G > 10 && Tt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var hi = !1, tl = null;
      function Ks(h) {
        if (tl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = z && z[C];
            tl = M.call(z, "timers").setImmediate;
          } catch {
            tl = function(G) {
              hi === !1 && (hi = !0, typeof MessageChannel > "u" && ye("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ke = new MessageChannel();
              ke.port1.onmessage = G, ke.port2.postMessage(void 0);
            };
          }
        return tl(h);
      }
      var la = 0, nl = !1;
      function rl(h) {
        {
          var C = la;
          la++, we.current === null && (we.current = []);
          var M = we.isBatchingLegacy, H;
          try {
            if (we.isBatchingLegacy = !0, H = h(), !M && we.didScheduleLegacyUpdate) {
              var G = we.current;
              G !== null && (we.didScheduleLegacyUpdate = !1, il(G));
            }
          } catch (zt) {
            throw ua(C), zt;
          } finally {
            we.isBatchingLegacy = M;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var ke = H, ee = !1, be = {
              then: function(zt, Pt) {
                ee = !0, ke.then(function(nt) {
                  ua(C), la === 0 ? ju(nt, zt, Pt) : zt(nt);
                }, function(nt) {
                  ua(C), Pt(nt);
                });
              }
            };
            return !nl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ee || (nl = !0, ye("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), be;
          } else {
            var Ge = H;
            if (ua(C), la === 0) {
              var ft = we.current;
              ft !== null && (il(ft), we.current = null);
              var Ut = {
                then: function(zt, Pt) {
                  we.current === null ? (we.current = [], ju(Ge, zt, Pt)) : zt(Ge);
                }
              };
              return Ut;
            } else {
              var Ot = {
                then: function(zt, Pt) {
                  zt(Ge);
                }
              };
              return Ot;
            }
          }
        }
      }
      function ua(h) {
        h !== la - 1 && ye("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), la = h;
      }
      function ju(h, C, M) {
        {
          var H = we.current;
          if (H !== null)
            try {
              il(H), Ks(function() {
                H.length === 0 ? (we.current = null, C(h)) : ju(h, C, M);
              });
            } catch (G) {
              M(G);
            }
          else
            C(h);
        }
      }
      var al = !1;
      function il(h) {
        if (!al) {
          al = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(C + 1), H;
          } finally {
            al = !1;
          }
        }
      }
      var Pl = qs, Vu = Xa, Bo = Mn, za = {
        map: pi,
        forEach: $s,
        count: ku,
        toArray: Is,
        only: Du
      };
      $.Children = za, $.Component = Ne, $.Fragment = Me, $.Profiler = Rt, $.PureComponent = jt, $.StrictMode = S, $.Suspense = te, $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gt, $.cloneElement = Vu, $.createContext = Ao, $.createElement = Pl, $.createFactory = Bo, $.createRef = Cr, $.forwardRef = Yi, $.isValidElement = Lt, $.lazy = Ma, $.memo = Ho, $.startTransition = Xs, $.unstable_act = rl, $.useCallback = Ws, $.useContext = ia, $.useDebugValue = qt, $.useDeferredValue = Na, $.useEffect = Ys, $.useId = We, $.useImperativeHandle = Hf, $.useInsertionEffect = Qs, $.useLayoutEffect = Fo, $.useMemo = Af, $.useReducer = Wi, $.useRef = Pn, $.useState = Fl, $.useSyncExternalStore = Ga, $.useTransition = Ff, $.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(zm, zm.exports)), zm.exports;
}
(function(z) {
  ({}).NODE_ENV === "production" ? z.exports = B_() : z.exports = $_();
})(En);
const zf = /* @__PURE__ */ P_(En.exports);
var Gp = {}, J1 = { exports: {} }, xa = {}, o0 = { exports: {} }, s0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1;
function I_() {
  return W1 || (W1 = 1, function(z) {
    function $(X, Ce) {
      var R = X.length;
      X.push(Ce);
      e:
        for (; 0 < R; ) {
          var B = R - 1 >>> 1, le = X[B];
          if (0 < Ct(le, Ce))
            X[B] = Ce, X[R] = le, R = B;
          else
            break e;
        }
    }
    function A(X) {
      return X.length === 0 ? null : X[0];
    }
    function Et(X) {
      if (X.length === 0)
        return null;
      var Ce = X[0], R = X.pop();
      if (R !== Ce) {
        X[0] = R;
        e:
          for (var B = 0, le = X.length, Pe = le >>> 1; B < Pe; ) {
            var Ne = 2 * (B + 1) - 1, pt = X[Ne], Ze = Ne + 1, vt = X[Ze];
            if (0 > Ct(pt, R))
              Ze < le && 0 > Ct(vt, pt) ? (X[B] = vt, X[Ze] = R, B = Ze) : (X[B] = pt, X[Ne] = R, B = Ne);
            else if (Ze < le && 0 > Ct(vt, R))
              X[B] = vt, X[Ze] = R, B = Ze;
            else
              break e;
          }
      }
      return Ce;
    }
    function Ct(X, Ce) {
      var R = X.sortIndex - Ce.sortIndex;
      return R !== 0 ? R : X.id - Ce.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Me = performance;
      z.unstable_now = function() {
        return Me.now();
      };
    } else {
      var S = Date, Rt = S.now();
      z.unstable_now = function() {
        return S.now() - Rt;
      };
    }
    var fe = [], se = [], dt = 1, te = null, de = 3, ne = !1, Ae = !1, st = !1, Xe = typeof setTimeout == "function" ? setTimeout : null, Dn = typeof clearTimeout == "function" ? clearTimeout : null, mt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Be(X) {
      for (var Ce = A(se); Ce !== null; ) {
        if (Ce.callback === null)
          Et(se);
        else if (Ce.startTime <= X)
          Et(se), Ce.sortIndex = Ce.expirationTime, $(fe, Ce);
        else
          break;
        Ce = A(se);
      }
    }
    function rt(X) {
      if (st = !1, Be(X), !Ae)
        if (A(fe) !== null)
          Ae = !0, Tt(we);
        else {
          var Ce = A(se);
          Ce !== null && ye(rt, Ce.startTime - X);
        }
    }
    function we(X, Ce) {
      Ae = !1, st && (st = !1, Dn(Zt), Zt = -1), ne = !0;
      var R = de;
      try {
        for (Be(Ce), te = A(fe); te !== null && (!(te.expirationTime > Ce) || X && !xt()); ) {
          var B = te.callback;
          if (typeof B == "function") {
            te.callback = null, de = te.priorityLevel;
            var le = B(te.expirationTime <= Ce);
            Ce = z.unstable_now(), typeof le == "function" ? te.callback = le : te === A(fe) && Et(fe), Be(Ce);
          } else
            Et(fe);
          te = A(fe);
        }
        if (te !== null)
          var Pe = !0;
        else {
          var Ne = A(se);
          Ne !== null && ye(rt, Ne.startTime - Ce), Pe = !1;
        }
        return Pe;
      } finally {
        te = null, de = R, ne = !1;
      }
    }
    var Ke = !1, He = null, Zt = -1, On = 5, Ft = -1;
    function xt() {
      return !(z.unstable_now() - Ft < On);
    }
    function Cn() {
      if (He !== null) {
        var X = z.unstable_now();
        Ft = X;
        var Ce = !0;
        try {
          Ce = He(!0, X);
        } finally {
          Ce ? Ye() : (Ke = !1, He = null);
        }
      } else
        Ke = !1;
    }
    var Ye;
    if (typeof mt == "function")
      Ye = function() {
        mt(Cn);
      };
    else if (typeof MessageChannel < "u") {
      var at = new MessageChannel(), Gt = at.port2;
      at.port1.onmessage = Cn, Ye = function() {
        Gt.postMessage(null);
      };
    } else
      Ye = function() {
        Xe(Cn, 0);
      };
    function Tt(X) {
      He = X, Ke || (Ke = !0, Ye());
    }
    function ye(X, Ce) {
      Zt = Xe(function() {
        X(z.unstable_now());
      }, Ce);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, z.unstable_continueExecution = function() {
      Ae || ne || (Ae = !0, Tt(we));
    }, z.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : On = 0 < X ? Math.floor(1e3 / X) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return de;
    }, z.unstable_getFirstCallbackNode = function() {
      return A(fe);
    }, z.unstable_next = function(X) {
      switch (de) {
        case 1:
        case 2:
        case 3:
          var Ce = 3;
          break;
        default:
          Ce = de;
      }
      var R = de;
      de = Ce;
      try {
        return X();
      } finally {
        de = R;
      }
    }, z.unstable_pauseExecution = function() {
    }, z.unstable_requestPaint = function() {
    }, z.unstable_runWithPriority = function(X, Ce) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var R = de;
      de = X;
      try {
        return Ce();
      } finally {
        de = R;
      }
    }, z.unstable_scheduleCallback = function(X, Ce, R) {
      var B = z.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? B + R : B) : R = B, X) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return le = R + le, X = { id: dt++, callback: Ce, priorityLevel: X, startTime: R, expirationTime: le, sortIndex: -1 }, R > B ? (X.sortIndex = R, $(se, X), A(fe) === null && X === A(se) && (st ? (Dn(Zt), Zt = -1) : st = !0, ye(rt, R - B))) : (X.sortIndex = le, $(fe, X), Ae || ne || (Ae = !0, Tt(we))), X;
    }, z.unstable_shouldYield = xt, z.unstable_wrapCallback = function(X) {
      var Ce = de;
      return function() {
        var R = de;
        de = Ce;
        try {
          return X.apply(this, arguments);
        } finally {
          de = R;
        }
      };
    };
  }(s0)), s0;
}
var c0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G1;
function Y_() {
  return G1 || (G1 = 1, function(z) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var $ = !1, A = !1, Et = 5;
      function Ct(J, Re) {
        var Qe = J.length;
        J.push(Re), Rt(J, Re, Qe);
      }
      function Me(J) {
        return J.length === 0 ? null : J[0];
      }
      function S(J) {
        if (J.length === 0)
          return null;
        var Re = J[0], Qe = J.pop();
        return Qe !== Re && (J[0] = Qe, fe(J, Qe, 0)), Re;
      }
      function Rt(J, Re, Qe) {
        for (var Dt = Qe; Dt > 0; ) {
          var Lt = Dt - 1 >>> 1, Rn = J[Lt];
          if (se(Rn, Re) > 0)
            J[Lt] = Re, J[Dt] = Rn, Dt = Lt;
          else
            return;
        }
      }
      function fe(J, Re, Qe) {
        for (var Dt = Qe, Lt = J.length, Rn = Lt >>> 1; Dt < Rn; ) {
          var dn = (Dt + 1) * 2 - 1, _r = J[dn], Bt = dn + 1, aa = J[Bt];
          if (se(_r, Re) < 0)
            Bt < Lt && se(aa, _r) < 0 ? (J[Dt] = aa, J[Bt] = Re, Dt = Bt) : (J[Dt] = _r, J[dn] = Re, Dt = dn);
          else if (Bt < Lt && se(aa, Re) < 0)
            J[Dt] = aa, J[Bt] = Re, Dt = Bt;
          else
            return;
        }
      }
      function se(J, Re) {
        var Qe = J.sortIndex - Re.sortIndex;
        return Qe !== 0 ? Qe : J.id - Re.id;
      }
      var dt = 1, te = 2, de = 3, ne = 4, Ae = 5;
      function st(J, Re) {
      }
      var Xe = typeof performance == "object" && typeof performance.now == "function";
      if (Xe) {
        var Dn = performance;
        z.unstable_now = function() {
          return Dn.now();
        };
      } else {
        var mt = Date, Be = mt.now();
        z.unstable_now = function() {
          return mt.now() - Be;
        };
      }
      var rt = 1073741823, we = -1, Ke = 250, He = 5e3, Zt = 1e4, On = rt, Ft = [], xt = [], Cn = 1, Ye = null, at = de, Gt = !1, Tt = !1, ye = !1, X = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(J) {
        for (var Re = Me(xt); Re !== null; ) {
          if (Re.callback === null)
            S(xt);
          else if (Re.startTime <= J)
            S(xt), Re.sortIndex = Re.expirationTime, Ct(Ft, Re);
          else
            return;
          Re = Me(xt);
        }
      }
      function le(J) {
        if (ye = !1, B(J), !Tt)
          if (Me(Ft) !== null)
            Tt = !0, Oa(Pe);
          else {
            var Re = Me(xt);
            Re !== null && Vn(le, Re.startTime - J);
          }
      }
      function Pe(J, Re) {
        Tt = !1, ye && (ye = !1, Yr()), Gt = !0;
        var Qe = at;
        try {
          var Dt;
          if (!A)
            return Ne(J, Re);
        } finally {
          Ye = null, at = Qe, Gt = !1;
        }
      }
      function Ne(J, Re) {
        var Qe = Re;
        for (B(Qe), Ye = Me(Ft); Ye !== null && !$ && !(Ye.expirationTime > Qe && (!J || di())); ) {
          var Dt = Ye.callback;
          if (typeof Dt == "function") {
            Ye.callback = null, at = Ye.priorityLevel;
            var Lt = Ye.expirationTime <= Qe, Rn = Dt(Lt);
            Qe = z.unstable_now(), typeof Rn == "function" ? Ye.callback = Rn : Ye === Me(Ft) && S(Ft), B(Qe);
          } else
            S(Ft);
          Ye = Me(Ft);
        }
        if (Ye !== null)
          return !0;
        var dn = Me(xt);
        return dn !== null && Vn(le, dn.startTime - Qe), !1;
      }
      function pt(J, Re) {
        switch (J) {
          case dt:
          case te:
          case de:
          case ne:
          case Ae:
            break;
          default:
            J = de;
        }
        var Qe = at;
        at = J;
        try {
          return Re();
        } finally {
          at = Qe;
        }
      }
      function Ze(J) {
        var Re;
        switch (at) {
          case dt:
          case te:
          case de:
            Re = de;
            break;
          default:
            Re = at;
            break;
        }
        var Qe = at;
        at = Re;
        try {
          return J();
        } finally {
          at = Qe;
        }
      }
      function vt(J) {
        var Re = at;
        return function() {
          var Qe = at;
          at = Re;
          try {
            return J.apply(this, arguments);
          } finally {
            at = Qe;
          }
        };
      }
      function tt(J, Re, Qe) {
        var Dt = z.unstable_now(), Lt;
        if (typeof Qe == "object" && Qe !== null) {
          var Rn = Qe.delay;
          typeof Rn == "number" && Rn > 0 ? Lt = Dt + Rn : Lt = Dt;
        } else
          Lt = Dt;
        var dn;
        switch (J) {
          case dt:
            dn = we;
            break;
          case te:
            dn = Ke;
            break;
          case Ae:
            dn = On;
            break;
          case ne:
            dn = Zt;
            break;
          case de:
          default:
            dn = He;
            break;
        }
        var _r = Lt + dn, Bt = {
          id: Cn++,
          callback: Re,
          priorityLevel: J,
          startTime: Lt,
          expirationTime: _r,
          sortIndex: -1
        };
        return Lt > Dt ? (Bt.sortIndex = Lt, Ct(xt, Bt), Me(Ft) === null && Bt === Me(xt) && (ye ? Yr() : ye = !0, Vn(le, Lt - Dt))) : (Bt.sortIndex = _r, Ct(Ft, Bt), !Tt && !Gt && (Tt = !0, Oa(Pe))), Bt;
      }
      function jt() {
      }
      function fi() {
        !Tt && !Gt && (Tt = !0, Oa(Pe));
      }
      function Cr() {
        return Me(Ft);
      }
      function _a(J) {
        J.callback = null;
      }
      function fn() {
        return at;
      }
      var Jn = !1, Rr = null, Tr = -1, Ln = Et, ka = -1;
      function di() {
        var J = z.unstable_now() - ka;
        return !(J < Ln);
      }
      function er() {
      }
      function wr(J) {
        if (J < 0 || J > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        J > 0 ? Ln = Math.floor(1e3 / J) : Ln = Et;
      }
      var Ya = function() {
        if (Rr !== null) {
          var J = z.unstable_now();
          ka = J;
          var Re = !0, Qe = !0;
          try {
            Qe = Rr(Re, J);
          } finally {
            Qe ? xr() : (Jn = !1, Rr = null);
          }
        } else
          Jn = !1;
      }, xr;
      if (typeof R == "function")
        xr = function() {
          R(Ya);
        };
      else if (typeof MessageChannel < "u") {
        var Da = new MessageChannel(), br = Da.port2;
        Da.port1.onmessage = Ya, xr = function() {
          br.postMessage(null);
        };
      } else
        xr = function() {
          X(Ya, 0);
        };
      function Oa(J) {
        Rr = J, Jn || (Jn = !0, xr());
      }
      function Vn(J, Re) {
        Tr = X(function() {
          J(z.unstable_now());
        }, Re);
      }
      function Yr() {
        Ce(Tr), Tr = -1;
      }
      var Al = er, Qa = null;
      z.unstable_IdlePriority = Ae, z.unstable_ImmediatePriority = dt, z.unstable_LowPriority = ne, z.unstable_NormalPriority = de, z.unstable_Profiling = Qa, z.unstable_UserBlockingPriority = te, z.unstable_cancelCallback = _a, z.unstable_continueExecution = fi, z.unstable_forceFrameRate = wr, z.unstable_getCurrentPriorityLevel = fn, z.unstable_getFirstCallbackNode = Cr, z.unstable_next = Ze, z.unstable_pauseExecution = jt, z.unstable_requestPaint = Al, z.unstable_runWithPriority = pt, z.unstable_scheduleCallback = tt, z.unstable_shouldYield = di, z.unstable_wrapCallback = vt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(c0)), c0;
}
var q1;
function eR() {
  return q1 || (q1 = 1, function(z) {
    ({}).NODE_ENV === "production" ? z.exports = I_() : z.exports = Y_();
  }(o0)), o0.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X1;
function Q_() {
  if (X1)
    return xa;
  X1 = 1;
  var z = En.exports, $ = eR();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Et = /* @__PURE__ */ new Set(), Ct = {};
  function Me(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Ct[n] = r, n = 0; n < r.length; n++)
      Et.add(r[n]);
  }
  var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fe = Object.prototype.hasOwnProperty, se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, dt = {}, te = {};
  function de(n) {
    return fe.call(te, n) ? !0 : fe.call(dt, n) ? !1 : se.test(n) ? te[n] = !0 : (dt[n] = !0, !1);
  }
  function ne(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Ae(n, r, l, o) {
    if (r === null || typeof r > "u" || ne(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function st(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Xe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Xe[n] = new st(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Xe[r] = new st(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Xe[n] = new st(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Xe[n] = new st(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Xe[n] = new st(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Xe[n] = new st(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Xe[n] = new st(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Xe[n] = new st(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Xe[n] = new st(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Dn = /[\-:]([a-z])/g;
  function mt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Dn,
      mt
    );
    Xe[r] = new st(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Dn, mt);
    Xe[r] = new st(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Dn, mt);
    Xe[r] = new st(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Xe[n] = new st(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Xe.xlinkHref = new st("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Xe[n] = new st(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Be(n, r, l, o) {
    var c = Xe.hasOwnProperty(r) ? Xe[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ae(r, l, c, o) && (l = null), o || c === null ? de(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var rt = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, we = Symbol.for("react.element"), Ke = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), Zt = Symbol.for("react.strict_mode"), On = Symbol.for("react.profiler"), Ft = Symbol.for("react.provider"), xt = Symbol.for("react.context"), Cn = Symbol.for("react.forward_ref"), Ye = Symbol.for("react.suspense"), at = Symbol.for("react.suspense_list"), Gt = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), X = Symbol.iterator;
  function Ce(n) {
    return n === null || typeof n != "object" ? null : (n = X && n[X] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var R = Object.assign, B;
  function le(n) {
    if (B === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        B = r && r[1] || "";
      }
    return `
` + B + n;
  }
  var Pe = !1;
  function Ne(n, r) {
    if (!n || Pe)
      return "";
    Pe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (U) {
            var o = U;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (U) {
            o = U;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var T = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      Pe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? le(n) : "";
  }
  function pt(n) {
    switch (n.tag) {
      case 5:
        return le(n.type);
      case 16:
        return le("Lazy");
      case 13:
        return le("Suspense");
      case 19:
        return le("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ne(n.type, !1), n;
      case 11:
        return n = Ne(n.type.render, !1), n;
      case 1:
        return n = Ne(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ze(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case He:
        return "Fragment";
      case Ke:
        return "Portal";
      case On:
        return "Profiler";
      case Zt:
        return "StrictMode";
      case Ye:
        return "Suspense";
      case at:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case xt:
          return (n.displayName || "Context") + ".Consumer";
        case Ft:
          return (n._context.displayName || "Context") + ".Provider";
        case Cn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Gt:
          return r = n.displayName || null, r !== null ? r : Ze(n.type) || "Memo";
        case Tt:
          r = n._payload, n = n._init;
          try {
            return Ze(n(r));
          } catch {
          }
      }
    return null;
  }
  function vt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ze(r);
      case 8:
        return r === Zt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function tt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function jt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function fi(n) {
    var r = jt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Cr(n) {
    n._valueTracker || (n._valueTracker = fi(n));
  }
  function _a(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = jt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function fn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Jn(n, r) {
    var l = r.checked;
    return R({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l != null ? l : n._wrapperState.initialChecked });
  }
  function Rr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = tt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Tr(n, r) {
    r = r.checked, r != null && Be(n, "checked", r, !1);
  }
  function Ln(n, r) {
    Tr(n, r);
    var l = tt(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? di(n, r.type, l) : r.hasOwnProperty("defaultValue") && di(n, r.type, tt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ka(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function di(n, r, l) {
    (r !== "number" || fn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var er = Array.isArray;
  function wr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + tt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ya(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(A(91));
    return R({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function xr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(A(92));
        if (er(l)) {
          if (1 < l.length)
            throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: tt(l) };
  }
  function Da(n, r) {
    var l = tt(r.value), o = tt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function br(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Oa(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Vn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Oa(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Yr, Al = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Yr = Yr || document.createElement("div"), Yr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Yr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Qa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var J = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Re = ["Webkit", "ms", "Moz", "O"];
  Object.keys(J).forEach(function(n) {
    Re.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), J[r] = J[n];
    });
  });
  function Qe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || J.hasOwnProperty(n) && J[n] ? ("" + r).trim() : r + "px";
  }
  function Dt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Qe(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Lt = R({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Rn(n, r) {
    if (r) {
      if (Lt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(A(62));
    }
  }
  function dn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _r = null;
  function Bt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var aa = null, Jt = null, Vt = null;
  function Hl(n) {
    if (n = ns(n)) {
      if (typeof aa != "function")
        throw Error(A(280));
      var r = n.stateNode;
      r && (r = Te(r), aa(n.stateNode, n.type, r));
    }
  }
  function pi(n) {
    Jt ? Vt ? Vt.push(n) : Vt = [n] : Jt = n;
  }
  function ku() {
    if (Jt) {
      var n = Jt, r = Vt;
      if (Vt = Jt = null, Hl(n), r)
        for (n = 0; n < r.length; n++)
          Hl(r[n]);
    }
  }
  function $s(n, r) {
    return n(r);
  }
  function Is() {
  }
  var Du = !1;
  function Ao(n, r, l) {
    if (Du)
      return n(r, l);
    Du = !0;
    try {
      return $s(n, r, l);
    } finally {
      Du = !1, (Jt !== null || Vt !== null) && (Is(), ku());
    }
  }
  function La(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Te(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(A(231, r, typeof l));
    return l;
  }
  var $i = !1;
  if (Rt)
    try {
      var Wa = {};
      Object.defineProperty(Wa, "passive", { get: function() {
        $i = !0;
      } }), window.addEventListener("test", Wa, Wa), window.removeEventListener("test", Wa, Wa);
    } catch {
      $i = !1;
    }
  function Ii(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var Qr = !1, Ma = null, Yi = !1, Qi = null, Ou = { onError: function(n) {
    Qr = !0, Ma = n;
  } };
  function Ho(n, r, l, o, c, d, m, E, T) {
    Qr = !1, Ma = null, Ii.apply(Ou, arguments);
  }
  function ln(n, r, l, o, c, d, m, E, T) {
    if (Ho.apply(this, arguments), Qr) {
      if (Qr) {
        var U = Ma;
        Qr = !1, Ma = null;
      } else
        throw Error(A(198));
      Yi || (Yi = !0, Qi = U);
    }
  }
  function ia(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Fl(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Wi(n) {
    if (ia(n) !== n)
      throw Error(A(188));
  }
  function Pn(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ia(n), r === null)
        throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Wi(c), n;
          if (d === o)
            return Wi(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(A(189));
        }
      }
      if (l.alternate !== o)
        throw Error(A(190));
    }
    if (l.tag !== 3)
      throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ys(n) {
    return n = Pn(n), n !== null ? Qs(n) : null;
  }
  function Qs(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Qs(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Fo = $.unstable_scheduleCallback, Ws = $.unstable_cancelCallback, Af = $.unstable_shouldYield, Hf = $.unstable_requestPaint, qt = $.unstable_now, Ff = $.unstable_getCurrentPriorityLevel, Na = $.unstable_ImmediatePriority, We = $.unstable_UserBlockingPriority, Ga = $.unstable_NormalPriority, Gi = $.unstable_LowPriority, Lu = $.unstable_IdlePriority, qi = null, kr = null;
  function jo(n) {
    if (kr && typeof kr.onCommitFiberRoot == "function")
      try {
        kr.onCommitFiberRoot(qi, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var or = Math.clz32 ? Math.clz32 : Gs, Vo = Math.log, Po = Math.LN2;
  function Gs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Vo(n) / Po | 0) | 0;
  }
  var Mu = 64, Xi = 4194304;
  function Ua(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function sr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Ua(E) : (d &= m, d !== 0 && (o = Ua(d)));
    } else
      m = l & ~c, m !== 0 ? o = Ua(m) : d !== 0 && (o = Ua(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && (r & c) === 0 && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if ((o & 4) !== 0 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - or(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Ki(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Zi(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - or(d), E = 1 << m, T = c[m];
      T === -1 ? ((E & l) === 0 || (E & o) !== 0) && (c[m] = Ki(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function Ji(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Nu() {
    var n = Mu;
    return Mu <<= 1, (Mu & 4194240) === 0 && (Mu = 64), n;
  }
  function Uu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function vi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - or(r), n[r] = l;
  }
  function jf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - or(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function qa(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - or(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var yt = 0;
  function zu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var jl, Au, ct, Hu, Fu, Fe = !1, Vl = [], en = null, Dr = null, cr = null, el = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map(), bt = [], qs = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Or(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        en = null;
        break;
      case "dragenter":
      case "dragleave":
        Dr = null;
        break;
      case "mouseover":
      case "mouseout":
        cr = null;
        break;
      case "pointerover":
      case "pointerout":
        el.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        un.delete(r.pointerId);
    }
  }
  function Mn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ns(r), r !== null && Au(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Xa(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return en = Mn(en, n, r, l, o, c), !0;
      case "dragenter":
        return Dr = Mn(Dr, n, r, l, o, c), !0;
      case "mouseover":
        return cr = Mn(cr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return el.set(d, Mn(el.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, un.set(d, Mn(un.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Xs(n) {
    var r = sa(n.target);
    if (r !== null) {
      var l = ia(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Fl(l), r !== null) {
            n.blockedOn = r, Fu(n.priority, function() {
              ct(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function hi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Vu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        _r = o, l.target.dispatchEvent(o), _r = null;
      } else
        return r = ns(l), r !== null && Au(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function tl(n, r, l) {
    hi(n) && l.delete(r);
  }
  function Ks() {
    Fe = !1, en !== null && hi(en) && (en = null), Dr !== null && hi(Dr) && (Dr = null), cr !== null && hi(cr) && (cr = null), el.forEach(tl), un.forEach(tl);
  }
  function la(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Fe || (Fe = !0, $.unstable_scheduleCallback($.unstable_NormalPriority, Ks)));
  }
  function nl(n) {
    function r(c) {
      return la(c, n);
    }
    if (0 < Vl.length) {
      la(Vl[0], n);
      for (var l = 1; l < Vl.length; l++) {
        var o = Vl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (en !== null && la(en, n), Dr !== null && la(Dr, n), cr !== null && la(cr, n), el.forEach(r), un.forEach(r), l = 0; l < bt.length; l++)
      o = bt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < bt.length && (l = bt[0], l.blockedOn === null); )
      Xs(l), l.blockedOn === null && bt.shift();
  }
  var rl = rt.ReactCurrentBatchConfig, ua = !0;
  function ju(n, r, l, o) {
    var c = yt, d = rl.transition;
    rl.transition = null;
    try {
      yt = 1, il(n, r, l, o);
    } finally {
      yt = c, rl.transition = d;
    }
  }
  function al(n, r, l, o) {
    var c = yt, d = rl.transition;
    rl.transition = null;
    try {
      yt = 4, il(n, r, l, o);
    } finally {
      yt = c, rl.transition = d;
    }
  }
  function il(n, r, l, o) {
    if (ua) {
      var c = Vu(n, r, l, o);
      if (c === null)
        lc(n, r, o, Pl, l), Or(n, o);
      else if (Xa(c, n, r, l, o))
        o.stopPropagation();
      else if (Or(n, o), r & 4 && -1 < qs.indexOf(n)) {
        for (; c !== null; ) {
          var d = ns(c);
          if (d !== null && jl(d), d = Vu(n, r, l, o), d === null && lc(n, r, o, Pl, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        lc(n, r, o, null, l);
    }
  }
  var Pl = null;
  function Vu(n, r, l, o) {
    if (Pl = null, n = Bt(o), n = sa(n), n !== null)
      if (r = ia(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Fl(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Pl = n, null;
  }
  function Bo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ff()) {
          case Na:
            return 1;
          case We:
            return 4;
          case Ga:
          case Gi:
            return 16;
          case Lu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var za = null, h = null, C = null;
  function M() {
    if (C)
      return C;
    var n, r = h, l = r.length, o, c = "value" in za ? za.value : za.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function H(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function G() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function ee(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? G : ke, this.isPropagationStopped = ke, this;
    }
    return R(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = G);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = G);
    }, persist: function() {
    }, isPersistent: G }), r;
  }
  var be = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ge = ee(be), ft = R({}, be, { view: 0, detail: 0 }), Ut = ee(ft), Ot, zt, Pt, nt = R({}, ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: If, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Pt && (Pt && n.type === "mousemove" ? (Ot = n.screenX - Pt.screenX, zt = n.screenY - Pt.screenY) : zt = Ot = 0, Pt = n), Ot);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : zt;
  } }), mi = ee(nt), Pu = R({}, nt, { dataTransfer: 0 }), $o = ee(Pu), Vf = R({}, ft, { relatedTarget: 0 }), Aa = ee(Vf), Io = R({}, be, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yo = ee(Io), Pf = R({}, be, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Hm = ee(Pf), Fm = R({}, be, { data: 0 }), Bf = ee(Fm), $f = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Xp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Kp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Kp[n]) ? !!r[n] : !1;
  }
  function If() {
    return Zp;
  }
  var yi = R({}, ft, { key: function(n) {
    if (n.key) {
      var r = $f[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = H(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Xp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: If, charCode: function(n) {
    return n.type === "keypress" ? H(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? H(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), jm = ee(yi), Yf = R({}, nt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Zs = ee(Yf), Qf = R({}, ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: If }), Vm = ee(Qf), Js = R({}, be, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = ee(Js), Lr = R({}, nt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gi = ee(Lr), mn = [9, 13, 27, 32], Ha = Rt && "CompositionEvent" in window, Bl = null;
  Rt && "documentMode" in document && (Bl = document.documentMode);
  var ec = Rt && "TextEvent" in window && !Bl, ev = Rt && (!Ha || Bl && 8 < Bl && 11 >= Bl), Bu = String.fromCharCode(32), tv = !1;
  function nv(n, r) {
    switch (n) {
      case "keyup":
        return mn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function tc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var $u = !1;
  function Pm(n, r) {
    switch (n) {
      case "compositionend":
        return tc(r);
      case "keypress":
        return r.which !== 32 ? null : (tv = !0, Bu);
      case "textInput":
        return n = r.data, n === Bu && tv ? null : n;
      default:
        return null;
    }
  }
  function Bm(n, r) {
    if ($u)
      return n === "compositionend" || !Ha && nv(n, r) ? (n = M(), C = h = za = null, $u = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ev && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var rv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function av(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!rv[n.type] : r === "textarea";
  }
  function iv(n, r, l, o) {
    pi(o), r = Jo(r, "onChange"), 0 < r.length && (l = new Ge("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Qo = null, Iu = null;
  function Yu(n) {
    ic(n, 0);
  }
  function Qu(n) {
    var r = Gu(n);
    if (_a(r))
      return n;
  }
  function lv(n, r) {
    if (n === "change")
      return r;
  }
  var Wf = !1;
  if (Rt) {
    var Gf;
    if (Rt) {
      var qf = "oninput" in document;
      if (!qf) {
        var uv = document.createElement("div");
        uv.setAttribute("oninput", "return;"), qf = typeof uv.oninput == "function";
      }
      Gf = qf;
    } else
      Gf = !1;
    Wf = Gf && (!document.documentMode || 9 < document.documentMode);
  }
  function ov() {
    Qo && (Qo.detachEvent("onpropertychange", sv), Iu = Qo = null);
  }
  function sv(n) {
    if (n.propertyName === "value" && Qu(Iu)) {
      var r = [];
      iv(r, Iu, n, Bt(n)), Ao(Yu, r);
    }
  }
  function $m(n, r, l) {
    n === "focusin" ? (ov(), Qo = r, Iu = l, Qo.attachEvent("onpropertychange", sv)) : n === "focusout" && ov();
  }
  function Im(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Qu(Iu);
  }
  function Ym(n, r) {
    if (n === "click")
      return Qu(r);
  }
  function cv(n, r) {
    if (n === "input" || n === "change")
      return Qu(r);
  }
  function Qm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var oa = typeof Object.is == "function" ? Object.is : Qm;
  function Wo(n, r) {
    if (oa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!fe.call(r, c) || !oa(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function fv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function dv(n, r) {
    var l = fv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = fv(l);
    }
  }
  function pv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? pv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function nc() {
    for (var n = window, r = fn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = fn(n.document);
    }
    return r;
  }
  function Si(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function rc(n) {
    var r = nc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && pv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Si(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = dv(l, d);
          var m = dv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var vv = Rt && "documentMode" in document && 11 >= document.documentMode, Fa = null, Xf = null, Go = null, Kf = !1;
  function hv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Kf || Fa == null || Fa !== fn(o) || (o = Fa, "selectionStart" in o && Si(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Go && Wo(Go, o) || (Go = o, o = Jo(Xf, "onSelect"), 0 < o.length && (r = new Ge("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Fa)));
  }
  function ac(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var $l = { animationend: ac("Animation", "AnimationEnd"), animationiteration: ac("Animation", "AnimationIteration"), animationstart: ac("Animation", "AnimationStart"), transitionend: ac("Transition", "TransitionEnd") }, Zf = {}, Jf = {};
  Rt && (Jf = document.createElement("div").style, "AnimationEvent" in window || (delete $l.animationend.animation, delete $l.animationiteration.animation, delete $l.animationstart.animation), "TransitionEvent" in window || delete $l.transitionend.transition);
  function Nn(n) {
    if (Zf[n])
      return Zf[n];
    if (!$l[n])
      return n;
    var r = $l[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Jf)
        return Zf[n] = r[l];
    return n;
  }
  var ed = Nn("animationend"), mv = Nn("animationiteration"), yv = Nn("animationstart"), gv = Nn("transitionend"), Sv = /* @__PURE__ */ new Map(), Ev = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ei(n, r) {
    Sv.set(n, r), Me(r, [n]);
  }
  for (var qo = 0; qo < Ev.length; qo++) {
    var Il = Ev[qo], Wm = Il.toLowerCase(), Xo = Il[0].toUpperCase() + Il.slice(1);
    Ei(Wm, "on" + Xo);
  }
  Ei(ed, "onAnimationEnd"), Ei(mv, "onAnimationIteration"), Ei(yv, "onAnimationStart"), Ei("dblclick", "onDoubleClick"), Ei("focusin", "onFocus"), Ei("focusout", "onBlur"), Ei(gv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Me("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Me("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Me("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Me("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Me("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Me("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ko = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));
  function Cv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ln(o, r, void 0, n), n.currentTarget = null;
  }
  function ic(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], T = E.instance, U = E.currentTarget;
            if (E = E.listener, T !== d && c.isPropagationStopped())
              break e;
            Cv(c, E, U), d = T;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped())
              break e;
            Cv(c, E, U), d = T;
          }
      }
    }
    if (Yi)
      throw n = Qi, Yi = !1, Qi = null, n;
  }
  function At(n, r) {
    var l = r[ud];
    l === void 0 && (l = r[ud] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Rv(r, n, 2, !1), l.add(o));
  }
  function ll(n, r, l) {
    var o = 0;
    r && (o |= 4), Rv(l, n, o, r);
  }
  var Ci = "_reactListening" + Math.random().toString(36).slice(2);
  function Wu(n) {
    if (!n[Ci]) {
      n[Ci] = !0, Et.forEach(function(l) {
        l !== "selectionchange" && (Gm.has(l) || ll(l, !1, n), ll(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ci] || (r[Ci] = !0, ll("selectionchange", !1, r));
    }
  }
  function Rv(n, r, l, o) {
    switch (Bo(r)) {
      case 1:
        var c = ju;
        break;
      case 4:
        c = al;
        break;
      default:
        c = il;
    }
    l = c.bind(null, r, l, n), c = void 0, !$i || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function lc(n, r, l, o, c) {
    var d = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var T = m.tag;
                if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = sa(E), m === null)
                return;
              if (T = m.tag, T === 5 || T === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    Ao(function() {
      var U = d, Y = Bt(l), Q = [];
      e: {
        var I = Sv.get(n);
        if (I !== void 0) {
          var ae = Ge, pe = n;
          switch (n) {
            case "keypress":
              if (H(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ae = jm;
              break;
            case "focusin":
              pe = "focus", ae = Aa;
              break;
            case "focusout":
              pe = "blur", ae = Aa;
              break;
            case "beforeblur":
            case "afterblur":
              ae = Aa;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ae = mi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ae = $o;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ae = Vm;
              break;
            case ed:
            case mv:
            case yv:
              ae = Yo;
              break;
            case gv:
              ae = Jp;
              break;
            case "scroll":
              ae = Ut;
              break;
            case "wheel":
              ae = gi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ae = Hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ae = Zs;
          }
          var me = (r & 4) !== 0, vn = !me && n === "scroll", _ = me ? I !== null ? I + "Capture" : null : I;
          me = [];
          for (var x = U, O; x !== null; ) {
            O = x;
            var q = O.stateNode;
            if (O.tag === 5 && q !== null && (O = q, _ !== null && (q = La(x, _), q != null && me.push(Zo(x, q, O)))), vn)
              break;
            x = x.return;
          }
          0 < me.length && (I = new ae(I, pe, null, l, Y), Q.push({ event: I, listeners: me }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", ae = n === "mouseout" || n === "pointerout", I && l !== _r && (pe = l.relatedTarget || l.fromElement) && (sa(pe) || pe[Ri]))
            break e;
          if ((ae || I) && (I = Y.window === Y ? Y : (I = Y.ownerDocument) ? I.defaultView || I.parentWindow : window, ae ? (pe = l.relatedTarget || l.toElement, ae = U, pe = pe ? sa(pe) : null, pe !== null && (vn = ia(pe), pe !== vn || pe.tag !== 5 && pe.tag !== 6) && (pe = null)) : (ae = null, pe = U), ae !== pe)) {
            if (me = mi, q = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (me = Zs, q = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), vn = ae == null ? I : Gu(ae), O = pe == null ? I : Gu(pe), I = new me(q, x + "leave", ae, l, Y), I.target = vn, I.relatedTarget = O, q = null, sa(Y) === U && (me = new me(_, x + "enter", pe, l, Y), me.target = O, me.relatedTarget = vn, q = me), vn = q, ae && pe)
              t: {
                for (me = ae, _ = pe, x = 0, O = me; O; O = Yl(O))
                  x++;
                for (O = 0, q = _; q; q = Yl(q))
                  O++;
                for (; 0 < x - O; )
                  me = Yl(me), x--;
                for (; 0 < O - x; )
                  _ = Yl(_), O--;
                for (; x--; ) {
                  if (me === _ || _ !== null && me === _.alternate)
                    break t;
                  me = Yl(me), _ = Yl(_);
                }
                me = null;
              }
            else
              me = null;
            ae !== null && td(Q, I, ae, me, !1), pe !== null && vn !== null && td(Q, vn, pe, me, !0);
          }
        }
        e: {
          if (I = U ? Gu(U) : window, ae = I.nodeName && I.nodeName.toLowerCase(), ae === "select" || ae === "input" && I.type === "file")
            var ge = lv;
          else if (av(I))
            if (Wf)
              ge = cv;
            else {
              ge = Im;
              var ve = $m;
            }
          else
            (ae = I.nodeName) && ae.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (ge = Ym);
          if (ge && (ge = ge(n, U))) {
            iv(Q, ge, l, Y);
            break e;
          }
          ve && ve(n, I, U), n === "focusout" && (ve = I._wrapperState) && ve.controlled && I.type === "number" && di(I, "number", I.value);
        }
        switch (ve = U ? Gu(U) : window, n) {
          case "focusin":
            (av(ve) || ve.contentEditable === "true") && (Fa = ve, Xf = U, Go = null);
            break;
          case "focusout":
            Go = Xf = Fa = null;
            break;
          case "mousedown":
            Kf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Kf = !1, hv(Q, l, Y);
            break;
          case "selectionchange":
            if (vv)
              break;
          case "keydown":
          case "keyup":
            hv(Q, l, Y);
        }
        var Ee;
        if (Ha)
          e: {
            switch (n) {
              case "compositionstart":
                var ze = "onCompositionStart";
                break e;
              case "compositionend":
                ze = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ze = "onCompositionUpdate";
                break e;
            }
            ze = void 0;
          }
        else
          $u ? nv(n, l) && (ze = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ze = "onCompositionStart");
        ze && (ev && l.locale !== "ko" && ($u || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && $u && (Ee = M()) : (za = Y, h = "value" in za ? za.value : za.textContent, $u = !0)), ve = Jo(U, ze), 0 < ve.length && (ze = new Bf(ze, n, null, l, Y), Q.push({ event: ze, listeners: ve }), Ee ? ze.data = Ee : (Ee = tc(l), Ee !== null && (ze.data = Ee)))), (Ee = ec ? Pm(n, l) : Bm(n, l)) && (U = Jo(U, "onBeforeInput"), 0 < U.length && (Y = new Bf("onBeforeInput", "beforeinput", null, l, Y), Q.push({ event: Y, listeners: U }), Y.data = Ee));
      }
      ic(Q, r);
    });
  }
  function Zo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Jo(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = La(n, l), d != null && o.unshift(Zo(n, d, c)), d = La(n, r), d != null && o.push(Zo(n, d, c))), n = n.return;
    }
    return o;
  }
  function Yl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function td(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o)
        break;
      E.tag === 5 && U !== null && (E = U, c ? (T = La(l, d), T != null && m.unshift(Zo(l, T, E))) : c || (T = La(l, d), T != null && m.push(Zo(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var nd = /\r\n?/g, qm = /\u0000|\uFFFD/g;
  function rd(n) {
    return (typeof n == "string" ? n : "" + n).replace(nd, `
`).replace(qm, "");
  }
  function uc(n, r, l) {
    if (r = rd(r), rd(n) !== r && l)
      throw Error(A(425));
  }
  function oc() {
  }
  var ad = null, Ql = null;
  function es(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Wl = typeof setTimeout == "function" ? setTimeout : void 0, Tv = typeof clearTimeout == "function" ? clearTimeout : void 0, id = typeof Promise == "function" ? Promise : void 0, ld = typeof queueMicrotask == "function" ? queueMicrotask : typeof id < "u" ? function(n) {
    return id.resolve(null).then(n).catch(Xm);
  } : Wl;
  function Xm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ul(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), nl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    nl(r);
  }
  function ja(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function ts(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var ol = Math.random().toString(36).slice(2), Ka = "__reactFiber$" + ol, Gl = "__reactProps$" + ol, Ri = "__reactContainer$" + ol, ud = "__reactEvents$" + ol, Km = "__reactListeners$" + ol, od = "__reactHandles$" + ol;
  function sa(n) {
    var r = n[Ka];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ri] || l[Ka]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = ts(n); n !== null; ) {
            if (l = n[Ka])
              return l;
            n = ts(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ns(n) {
    return n = n[Ka] || n[Ri], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Gu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(A(33));
  }
  function Te(n) {
    return n[Gl] || null;
  }
  var sl = [], $t = -1;
  function $e(n) {
    return { current: n };
  }
  function wt(n) {
    0 > $t || (n.current = sl[$t], sl[$t] = null, $t--);
  }
  function _t(n, r) {
    $t++, sl[$t] = n.current, n.current = r;
  }
  var Za = {}, Ue = $e(Za), on = $e(!1), Mr = Za;
  function ca(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Za;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Xt(n) {
    return n = n.childContextTypes, n != null;
  }
  function fa() {
    wt(on), wt(Ue);
  }
  function cl(n, r, l) {
    if (Ue.current !== Za)
      throw Error(A(168));
    _t(Ue, r), _t(on, l);
  }
  function rs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(A(108, vt(n) || "Unknown", c));
    return R({}, l, o);
  }
  function sc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Za, Mr = Ue.current, _t(Ue, n), _t(on, on.current), !0;
  }
  function wv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(A(169));
    l ? (n = rs(n, r, Mr), o.__reactInternalMemoizedMergedChildContext = n, wt(on), wt(Ue), _t(Ue, n)) : wt(on), _t(on, l);
  }
  var Wr = null, Un = !1, as = !1;
  function sd(n) {
    Wr === null ? Wr = [n] : Wr.push(n);
  }
  function cd(n) {
    Un = !0, sd(n);
  }
  function Nr() {
    if (!as && Wr !== null) {
      as = !0;
      var n = 0, r = yt;
      try {
        var l = Wr;
        for (yt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Wr = null, Un = !1;
      } catch (c) {
        throw Wr !== null && (Wr = Wr.slice(n + 1)), Fo(Na, Nr), c;
      } finally {
        yt = r, as = !1;
      }
    }
    return null;
  }
  var fl = [], Ur = 0, ql = null, qu = 0, zr = [], tr = 0, da = null, Bn = 1, Ti = "";
  function Gr(n, r) {
    fl[Ur++] = qu, fl[Ur++] = ql, ql = n, qu = r;
  }
  function fd(n, r, l) {
    zr[tr++] = Bn, zr[tr++] = Ti, zr[tr++] = da, da = n;
    var o = Bn;
    n = Ti;
    var c = 32 - or(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - or(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Bn = 1 << 32 - or(r) + c | l << c | o, Ti = d + n;
    } else
      Bn = 1 << d | l << c | o, Ti = n;
  }
  function cc(n) {
    n.return !== null && (Gr(n, 1), fd(n, 1, 0));
  }
  function dd(n) {
    for (; n === ql; )
      ql = fl[--Ur], fl[Ur] = null, qu = fl[--Ur], fl[Ur] = null;
    for (; n === da; )
      da = zr[--tr], zr[tr] = null, Ti = zr[--tr], zr[tr] = null, Bn = zr[--tr], zr[tr] = null;
  }
  var qr = null, Ar = null, It = !1, pa = null;
  function pd(n, r) {
    var l = Sa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function xv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Ar = ja(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Ar = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: Bn, overflow: Ti } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Sa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Ar = null, !0) : !1;
      default:
        return !1;
    }
  }
  function fc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function dc(n) {
    if (It) {
      var r = Ar;
      if (r) {
        var l = r;
        if (!xv(n, r)) {
          if (fc(n))
            throw Error(A(418));
          r = ja(l.nextSibling);
          var o = qr;
          r && xv(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, It = !1, qr = n);
        }
      } else {
        if (fc(n))
          throw Error(A(418));
        n.flags = n.flags & -4097 | 2, It = !1, qr = n;
      }
    }
  }
  function bv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    qr = n;
  }
  function pc(n) {
    if (n !== qr)
      return !1;
    if (!It)
      return bv(n), It = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !es(n.type, n.memoizedProps)), r && (r = Ar)) {
      if (fc(n))
        throw _v(), Error(A(418));
      for (; r; )
        pd(n, r), r = ja(r.nextSibling);
    }
    if (bv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Ar = ja(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ar = null;
      }
    } else
      Ar = qr ? ja(n.stateNode.nextSibling) : null;
    return !0;
  }
  function _v() {
    for (var n = Ar; n; )
      n = ja(n.nextSibling);
  }
  function tn() {
    Ar = qr = null, It = !1;
  }
  function vd(n) {
    pa === null ? pa = [n] : pa.push(n);
  }
  var vc = rt.ReactCurrentBatchConfig;
  function Xr(n, r) {
    if (n && n.defaultProps) {
      r = R({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Ja = $e(null), hc = null, dl = null, hd = null;
  function md() {
    hd = dl = hc = null;
  }
  function pl(n) {
    var r = Ja.current;
    wt(Ja), n._currentValue = r;
  }
  function zn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function K(n, r) {
    hc = n, hd = dl = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (yn = !0), n.firstContext = null);
  }
  function pn(n) {
    var r = n._currentValue;
    if (hd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, dl === null) {
        if (hc === null)
          throw Error(A(308));
        dl = n, hc.dependencies = { lanes: 0, firstContext: n };
      } else
        dl = dl.next = n;
    return r;
  }
  var $n = null;
  function yd(n) {
    $n === null ? $n = [n] : $n.push(n);
  }
  function kv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, yd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, wi(n, o);
  }
  function wi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var vl = !1;
  function gd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Tn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function xi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function hl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, (Je & 2) !== 0) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, wi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, yd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, wi(n, l);
  }
  function mc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, qa(n, l);
    }
  }
  function Sd(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ml(n, r, l, o) {
    var c = n.updateQueue;
    vl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var Y = n.alternate;
      Y !== null && (Y = Y.updateQueue, E = Y.lastBaseUpdate, E !== m && (E === null ? Y.firstBaseUpdate = U : E.next = U, Y.lastBaseUpdate = T));
    }
    if (d !== null) {
      var Q = c.baseState;
      m = 0, Y = U = T = null, E = d;
      do {
        var I = E.lane, ae = E.eventTime;
        if ((o & I) === I) {
          Y !== null && (Y = Y.next = {
            eventTime: ae,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var pe = n, me = E;
            switch (I = r, ae = l, me.tag) {
              case 1:
                if (pe = me.payload, typeof pe == "function") {
                  Q = pe.call(ae, Q, I);
                  break e;
                }
                Q = pe;
                break e;
              case 3:
                pe.flags = pe.flags & -65537 | 128;
              case 0:
                if (pe = me.payload, I = typeof pe == "function" ? pe.call(ae, Q, I) : pe, I == null)
                  break e;
                Q = R({}, Q, I);
                break e;
              case 2:
                vl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else
          ae = { eventTime: ae, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Y === null ? (U = Y = ae, T = Q) : Y = Y.next = ae, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (1);
      if (Y === null && (T = Q), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = Y, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Di |= m, n.lanes = m, n.memoizedState = Q;
    }
  }
  function Xl(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(A(191, c));
          c.call(o);
        }
      }
  }
  var Dv = new z.Component().refs;
  function Ed(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : R({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var yc = { isMounted: function(n) {
    return (n = n._reactInternals) ? ia(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = ir(), c = gn(n), d = xi(o, c);
    d.payload = r, l != null && (d.callback = l), r = hl(n, d, c), r !== null && (lr(r, n, c, o), mc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = ir(), c = gn(n), d = xi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = hl(n, d, c), r !== null && (lr(r, n, c, o), mc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = ir(), o = gn(n), c = xi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = hl(n, c, o), r !== null && (lr(r, n, o, l), mc(r, n, o));
  } };
  function Ov(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Wo(l, o) || !Wo(c, d) : !0;
  }
  function Lv(n, r, l) {
    var o = !1, c = Za, d = r.contextType;
    return typeof d == "object" && d !== null ? d = pn(d) : (c = Xt(r) ? Mr : Ue.current, o = r.contextTypes, d = (o = o != null) ? ca(n, c) : Za), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = yc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Mv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && yc.enqueueReplaceState(r, r.state, null);
  }
  function gc(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Dv, gd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = pn(d) : (d = Xt(r) ? Mr : Ue.current, c.context = ca(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ed(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && yc.enqueueReplaceState(c, c.state, null), ml(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Xu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === Dv && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(A(284));
      if (!l._owner)
        throw Error(A(290, n));
    }
    return n;
  }
  function Sc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uv(n) {
    function r(_, x) {
      if (n) {
        var O = _.deletions;
        O === null ? (_.deletions = [x], _.flags |= 16) : O.push(x);
      }
    }
    function l(_, x) {
      if (!n)
        return null;
      for (; x !== null; )
        r(_, x), x = x.sibling;
      return null;
    }
    function o(_, x) {
      for (_ = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? _.set(x.key, x) : _.set(x.index, x), x = x.sibling;
      return _;
    }
    function c(_, x) {
      return _ = wl(_, x), _.index = 0, _.sibling = null, _;
    }
    function d(_, x, O) {
      return _.index = O, n ? (O = _.alternate, O !== null ? (O = O.index, O < x ? (_.flags |= 2, x) : O) : (_.flags |= 2, x)) : (_.flags |= 1048576, x);
    }
    function m(_) {
      return n && _.alternate === null && (_.flags |= 2), _;
    }
    function E(_, x, O, q) {
      return x === null || x.tag !== 6 ? (x = Ts(O, _.mode, q), x.return = _, x) : (x = c(x, O), x.return = _, x);
    }
    function T(_, x, O, q) {
      var ge = O.type;
      return ge === He ? Y(_, x, O.props.children, q, O.key) : x !== null && (x.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Tt && Nv(ge) === x.type) ? (q = c(x, O.props), q.ref = Xu(_, x, O), q.return = _, q) : (q = Kc(O.type, O.key, O.props, null, _.mode, q), q.ref = Xu(_, x, O), q.return = _, q);
    }
    function U(_, x, O, q) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== O.containerInfo || x.stateNode.implementation !== O.implementation ? (x = hu(O, _.mode, q), x.return = _, x) : (x = c(x, O.children || []), x.return = _, x);
    }
    function Y(_, x, O, q, ge) {
      return x === null || x.tag !== 7 ? (x = vu(O, _.mode, q, ge), x.return = _, x) : (x = c(x, O), x.return = _, x);
    }
    function Q(_, x, O) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return x = Ts("" + x, _.mode, O), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case we:
            return O = Kc(x.type, x.key, x.props, null, _.mode, O), O.ref = Xu(_, null, x), O.return = _, O;
          case Ke:
            return x = hu(x, _.mode, O), x.return = _, x;
          case Tt:
            var q = x._init;
            return Q(_, q(x._payload), O);
        }
        if (er(x) || Ce(x))
          return x = vu(x, _.mode, O, null), x.return = _, x;
        Sc(_, x);
      }
      return null;
    }
    function I(_, x, O, q) {
      var ge = x !== null ? x.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number")
        return ge !== null ? null : E(_, x, "" + O, q);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case we:
            return O.key === ge ? T(_, x, O, q) : null;
          case Ke:
            return O.key === ge ? U(_, x, O, q) : null;
          case Tt:
            return ge = O._init, I(
              _,
              x,
              ge(O._payload),
              q
            );
        }
        if (er(O) || Ce(O))
          return ge !== null ? null : Y(_, x, O, q, null);
        Sc(_, O);
      }
      return null;
    }
    function ae(_, x, O, q, ge) {
      if (typeof q == "string" && q !== "" || typeof q == "number")
        return _ = _.get(O) || null, E(x, _, "" + q, ge);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case we:
            return _ = _.get(q.key === null ? O : q.key) || null, T(x, _, q, ge);
          case Ke:
            return _ = _.get(q.key === null ? O : q.key) || null, U(x, _, q, ge);
          case Tt:
            var ve = q._init;
            return ae(_, x, O, ve(q._payload), ge);
        }
        if (er(q) || Ce(q))
          return _ = _.get(O) || null, Y(x, _, q, ge, null);
        Sc(x, q);
      }
      return null;
    }
    function pe(_, x, O, q) {
      for (var ge = null, ve = null, Ee = x, ze = x = 0, Fn = null; Ee !== null && ze < O.length; ze++) {
        Ee.index > ze ? (Fn = Ee, Ee = null) : Fn = Ee.sibling;
        var ht = I(_, Ee, O[ze], q);
        if (ht === null) {
          Ee === null && (Ee = Fn);
          break;
        }
        n && Ee && ht.alternate === null && r(_, Ee), x = d(ht, x, ze), ve === null ? ge = ht : ve.sibling = ht, ve = ht, Ee = Fn;
      }
      if (ze === O.length)
        return l(_, Ee), It && Gr(_, ze), ge;
      if (Ee === null) {
        for (; ze < O.length; ze++)
          Ee = Q(_, O[ze], q), Ee !== null && (x = d(Ee, x, ze), ve === null ? ge = Ee : ve.sibling = Ee, ve = Ee);
        return It && Gr(_, ze), ge;
      }
      for (Ee = o(_, Ee); ze < O.length; ze++)
        Fn = ae(Ee, _, ze, O[ze], q), Fn !== null && (n && Fn.alternate !== null && Ee.delete(Fn.key === null ? ze : Fn.key), x = d(Fn, x, ze), ve === null ? ge = Fn : ve.sibling = Fn, ve = Fn);
      return n && Ee.forEach(function(xl) {
        return r(_, xl);
      }), It && Gr(_, ze), ge;
    }
    function me(_, x, O, q) {
      var ge = Ce(O);
      if (typeof ge != "function")
        throw Error(A(150));
      if (O = ge.call(O), O == null)
        throw Error(A(151));
      for (var ve = ge = null, Ee = x, ze = x = 0, Fn = null, ht = O.next(); Ee !== null && !ht.done; ze++, ht = O.next()) {
        Ee.index > ze ? (Fn = Ee, Ee = null) : Fn = Ee.sibling;
        var xl = I(_, Ee, ht.value, q);
        if (xl === null) {
          Ee === null && (Ee = Fn);
          break;
        }
        n && Ee && xl.alternate === null && r(_, Ee), x = d(xl, x, ze), ve === null ? ge = xl : ve.sibling = xl, ve = xl, Ee = Fn;
      }
      if (ht.done)
        return l(
          _,
          Ee
        ), It && Gr(_, ze), ge;
      if (Ee === null) {
        for (; !ht.done; ze++, ht = O.next())
          ht = Q(_, ht.value, q), ht !== null && (x = d(ht, x, ze), ve === null ? ge = ht : ve.sibling = ht, ve = ht);
        return It && Gr(_, ze), ge;
      }
      for (Ee = o(_, Ee); !ht.done; ze++, ht = O.next())
        ht = ae(Ee, _, ze, ht.value, q), ht !== null && (n && ht.alternate !== null && Ee.delete(ht.key === null ? ze : ht.key), x = d(ht, x, ze), ve === null ? ge = ht : ve.sibling = ht, ve = ht);
      return n && Ee.forEach(function(yy) {
        return r(_, yy);
      }), It && Gr(_, ze), ge;
    }
    function vn(_, x, O, q) {
      if (typeof O == "object" && O !== null && O.type === He && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case we:
            e: {
              for (var ge = O.key, ve = x; ve !== null; ) {
                if (ve.key === ge) {
                  if (ge = O.type, ge === He) {
                    if (ve.tag === 7) {
                      l(_, ve.sibling), x = c(ve, O.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (ve.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Tt && Nv(ge) === ve.type) {
                    l(_, ve.sibling), x = c(ve, O.props), x.ref = Xu(_, ve, O), x.return = _, _ = x;
                    break e;
                  }
                  l(_, ve);
                  break;
                } else
                  r(_, ve);
                ve = ve.sibling;
              }
              O.type === He ? (x = vu(O.props.children, _.mode, q, O.key), x.return = _, _ = x) : (q = Kc(O.type, O.key, O.props, null, _.mode, q), q.ref = Xu(_, x, O), q.return = _, _ = q);
            }
            return m(_);
          case Ke:
            e: {
              for (ve = O.key; x !== null; ) {
                if (x.key === ve)
                  if (x.tag === 4 && x.stateNode.containerInfo === O.containerInfo && x.stateNode.implementation === O.implementation) {
                    l(_, x.sibling), x = c(x, O.children || []), x.return = _, _ = x;
                    break e;
                  } else {
                    l(_, x);
                    break;
                  }
                else
                  r(_, x);
                x = x.sibling;
              }
              x = hu(O, _.mode, q), x.return = _, _ = x;
            }
            return m(_);
          case Tt:
            return ve = O._init, vn(_, x, ve(O._payload), q);
        }
        if (er(O))
          return pe(_, x, O, q);
        if (Ce(O))
          return me(_, x, O, q);
        Sc(_, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, x !== null && x.tag === 6 ? (l(_, x.sibling), x = c(x, O), x.return = _, _ = x) : (l(_, x), x = Ts(O, _.mode, q), x.return = _, _ = x), m(_)) : l(_, x);
    }
    return vn;
  }
  var Ku = Uv(!0), zv = Uv(!1), is = {}, Va = $e(is), ls = $e(is), Zu = $e(is);
  function Kl(n) {
    if (n === is)
      throw Error(A(174));
    return n;
  }
  function Cd(n, r) {
    switch (_t(Zu, r), _t(ls, n), _t(Va, is), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Vn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Vn(r, n);
    }
    wt(Va), _t(Va, r);
  }
  function yl() {
    wt(Va), wt(ls), wt(Zu);
  }
  function _e(n) {
    Kl(Zu.current);
    var r = Kl(Va.current), l = Vn(r, n.type);
    r !== l && (_t(ls, n), _t(Va, l));
  }
  function qe(n) {
    ls.current === n && (wt(Va), wt(ls));
  }
  var De = $e(0);
  function nn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var va = [];
  function Ec() {
    for (var n = 0; n < va.length; n++)
      va[n]._workInProgressVersionPrimary = null;
    va.length = 0;
  }
  var Cc = rt.ReactCurrentDispatcher, Rd = rt.ReactCurrentBatchConfig, Zl = 0, Yt = null, V = null, it = null, Oe = !1, ei = !1, Kr = 0, Jl = 0;
  function Qt() {
    throw Error(A(321));
  }
  function eu(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!oa(n[l], r[l]))
        return !1;
    return !0;
  }
  function gl(n, r, l, o, c, d) {
    if (Zl = d, Yt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Cc.current = n === null || n.memoizedState === null ? Jm : ey, n = l(o, c), ei) {
      d = 0;
      do {
        if (ei = !1, Kr = 0, 25 <= d)
          throw Error(A(301));
        d += 1, it = V = null, r.updateQueue = null, Cc.current = wd, n = l(o, c);
      } while (ei);
    }
    if (Cc.current = Hc, r = V !== null && V.next !== null, Zl = 0, it = V = Yt = null, Oe = !1, r)
      throw Error(A(300));
    return n;
  }
  function tu() {
    var n = Kr !== 0;
    return Kr = 0, n;
  }
  function ha() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return it === null ? Yt.memoizedState = it = n : it = it.next = n, it;
  }
  function Hr() {
    if (V === null) {
      var n = Yt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = V.next;
    var r = it === null ? Yt.memoizedState : it.next;
    if (r !== null)
      it = r, V = n;
    else {
      if (n === null)
        throw Error(A(310));
      V = n, n = { memoizedState: V.memoizedState, baseState: V.baseState, baseQueue: V.baseQueue, queue: V.queue, next: null }, it === null ? Yt.memoizedState = it = n : it = it.next = n;
    }
    return it;
  }
  function nu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function us(n) {
    var r = Hr(), l = r.queue;
    if (l === null)
      throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = V, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, U = d;
      do {
        var Y = U.lane;
        if ((Zl & Y) === Y)
          T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var Q = {
            lane: Y,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = Q, m = o) : T = T.next = Q, Yt.lanes |= Y, Di |= Y;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, oa(o, r.memoizedState) || (yn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Yt.lanes |= d, Di |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function os(n) {
    var r = Hr(), l = r.queue;
    if (l === null)
      throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      oa(d, r.memoizedState) || (yn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Rc() {
  }
  function Tc(n, r) {
    var l = Yt, o = Hr(), c = r(), d = !oa(o.memoizedState, c);
    if (d && (o.memoizedState = c, yn = !0), o = o.queue, ss(bc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || it !== null && it.memoizedState.tag & 1) {
      if (l.flags |= 2048, ru(9, xc.bind(null, l, o, c, r), void 0, null), rn === null)
        throw Error(A(349));
      (Zl & 30) !== 0 || wc(l, r, c);
    }
    return c;
  }
  function wc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Yt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Yt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function xc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, _c(r) && kc(n);
  }
  function bc(n, r, l) {
    return l(function() {
      _c(r) && kc(n);
    });
  }
  function _c(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !oa(n, l);
    } catch {
      return !0;
    }
  }
  function kc(n) {
    var r = wi(n, 1);
    r !== null && lr(r, n, 1, -1);
  }
  function Dc(n) {
    var r = ha();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nu, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ac.bind(null, Yt, n), [r.memoizedState, n];
  }
  function ru(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Yt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Yt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Oc() {
    return Hr().memoizedState;
  }
  function au(n, r, l, o) {
    var c = ha();
    Yt.flags |= n, c.memoizedState = ru(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function bi(n, r, l, o) {
    var c = Hr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (V !== null) {
      var m = V.memoizedState;
      if (d = m.destroy, o !== null && eu(o, m.deps)) {
        c.memoizedState = ru(r, l, d, o);
        return;
      }
    }
    Yt.flags |= n, c.memoizedState = ru(1 | r, l, d, o);
  }
  function Lc(n, r) {
    return au(8390656, 8, n, r);
  }
  function ss(n, r) {
    return bi(2048, 8, n, r);
  }
  function Mc(n, r) {
    return bi(4, 2, n, r);
  }
  function Nc(n, r) {
    return bi(4, 4, n, r);
  }
  function Td(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Ju(n, r, l) {
    return l = l != null ? l.concat([n]) : null, bi(4, 4, Td.bind(null, r, n), l);
  }
  function Uc() {
  }
  function eo(n, r) {
    var l = Hr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && eu(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Sl(n, r) {
    var l = Hr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && eu(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Fr(n, r, l) {
    return (Zl & 21) === 0 ? (n.baseState && (n.baseState = !1, yn = !0), n.memoizedState = l) : (oa(l, r) || (l = Nu(), Yt.lanes |= l, Di |= l, n.baseState = !0), r);
  }
  function Zm(n, r) {
    var l = yt;
    yt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Rd.transition;
    Rd.transition = {};
    try {
      n(!1), r();
    } finally {
      yt = l, Rd.transition = o;
    }
  }
  function Ht() {
    return Hr().memoizedState;
  }
  function zc(n, r, l) {
    var o = gn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, to(n))
      cs(r, l);
    else if (l = kv(n, r, l, o), l !== null) {
      var c = ir();
      lr(l, n, o, c), Av(l, r, o);
    }
  }
  function Ac(n, r, l) {
    var o = gn(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (to(n))
      cs(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, oa(E, m)) {
            var T = r.interleaved;
            T === null ? (c.next = c, yd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = kv(n, r, c, o), l !== null && (c = ir(), lr(l, n, o, c), Av(l, r, o));
    }
  }
  function to(n) {
    var r = n.alternate;
    return n === Yt || r !== null && r === Yt;
  }
  function cs(n, r) {
    ei = Oe = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Av(n, r, l) {
    if ((l & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, qa(n, l);
    }
  }
  var Hc = { readContext: pn, useCallback: Qt, useContext: Qt, useEffect: Qt, useImperativeHandle: Qt, useInsertionEffect: Qt, useLayoutEffect: Qt, useMemo: Qt, useReducer: Qt, useRef: Qt, useState: Qt, useDebugValue: Qt, useDeferredValue: Qt, useTransition: Qt, useMutableSource: Qt, useSyncExternalStore: Qt, useId: Qt, unstable_isNewReconciler: !1 }, Jm = { readContext: pn, useCallback: function(n, r) {
    return ha().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: pn, useEffect: Lc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, au(
      4194308,
      4,
      Td.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return au(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return au(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = ha();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = ha();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = zc.bind(null, Yt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = ha();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Dc, useDebugValue: Uc, useDeferredValue: function(n) {
    return ha().memoizedState = n;
  }, useTransition: function() {
    var n = Dc(!1), r = n[0];
    return n = Zm.bind(null, n[1]), ha().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Yt, c = ha();
    if (It) {
      if (l === void 0)
        throw Error(A(407));
      l = l();
    } else {
      if (l = r(), rn === null)
        throw Error(A(349));
      (Zl & 30) !== 0 || wc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Lc(bc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, ru(9, xc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = ha(), r = rn.identifierPrefix;
    if (It) {
      var l = Ti, o = Bn;
      l = (o & ~(1 << 32 - or(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Kr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Jl++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ey = {
    readContext: pn,
    useCallback: eo,
    useContext: pn,
    useEffect: ss,
    useImperativeHandle: Ju,
    useInsertionEffect: Mc,
    useLayoutEffect: Nc,
    useMemo: Sl,
    useReducer: us,
    useRef: Oc,
    useState: function() {
      return us(nu);
    },
    useDebugValue: Uc,
    useDeferredValue: function(n) {
      var r = Hr();
      return Fr(r, V.memoizedState, n);
    },
    useTransition: function() {
      var n = us(nu)[0], r = Hr().memoizedState;
      return [n, r];
    },
    useMutableSource: Rc,
    useSyncExternalStore: Tc,
    useId: Ht,
    unstable_isNewReconciler: !1
  }, wd = { readContext: pn, useCallback: eo, useContext: pn, useEffect: ss, useImperativeHandle: Ju, useInsertionEffect: Mc, useLayoutEffect: Nc, useMemo: Sl, useReducer: os, useRef: Oc, useState: function() {
    return os(nu);
  }, useDebugValue: Uc, useDeferredValue: function(n) {
    var r = Hr();
    return V === null ? r.memoizedState = n : Fr(r, V.memoizedState, n);
  }, useTransition: function() {
    var n = os(nu)[0], r = Hr().memoizedState;
    return [n, r];
  }, useMutableSource: Rc, useSyncExternalStore: Tc, useId: Ht, unstable_isNewReconciler: !1 };
  function no(n, r) {
    try {
      var l = "", o = r;
      do
        l += pt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function fs(n, r, l) {
    return { value: n, source: null, stack: l != null ? l : null, digest: r != null ? r : null };
  }
  function Fc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ty = typeof WeakMap == "function" ? WeakMap : Map;
  function Hv(n, r, l) {
    l = xi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Yc || (Yc = !0, su = o), Fc(n, r);
    }, l;
  }
  function ds(n, r, l) {
    l = xi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Fc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Fc(n, r), typeof o != "function" && (ri === null ? ri = /* @__PURE__ */ new Set([this]) : ri.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Fv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ty();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = oy.bind(null, n, r, l), r.then(n, n));
  }
  function xd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function bd(n, r, l, o, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = xi(-1, 1), r.tag = 2, hl(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var ny = rt.ReactCurrentOwner, yn = !1;
  function wn(n, r, l, o) {
    r.child = n === null ? zv(r, null, l, o) : Ku(r, n.child, l, o);
  }
  function El(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return K(r, c), o = gl(n, r, l, o, d, c), l = tu(), n !== null && !yn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, In(n, r, c)) : (It && l && cc(r), r.flags |= 1, wn(n, r, o, c), r.child);
  }
  function jc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Yd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, jr(n, r, d, o, c)) : (n = Kc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Wo, l(m, o) && n.ref === r.ref)
        return In(n, r, c);
    }
    return r.flags |= 1, n = wl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function jr(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Wo(d, o) && n.ref === r.ref)
        if (yn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          (n.flags & 131072) !== 0 && (yn = !0);
        else
          return r.lanes = n.lanes, In(n, r, c);
    }
    return ro(n, r, l, o, c);
  }
  function iu(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if ((r.mode & 1) === 0)
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _t(so, Zr), Zr |= l;
      else {
        if ((l & 1073741824) === 0)
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, _t(so, Zr), Zr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, _t(so, Zr), Zr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, _t(so, Zr), Zr |= o;
    return wn(n, r, c, l), r.child;
  }
  function Ie(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ro(n, r, l, o, c) {
    var d = Xt(l) ? Mr : Ue.current;
    return d = ca(r, d), K(r, c), l = gl(n, r, l, o, d, c), o = tu(), n !== null && !yn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, In(n, r, c)) : (It && o && cc(r), r.flags |= 1, wn(n, r, l, c), r.child);
  }
  function _d(n, r, l, o, c) {
    if (Xt(l)) {
      var d = !0;
      sc(r);
    } else
      d = !1;
    if (K(r, c), r.stateNode === null)
      nr(n, r), Lv(r, l, o), gc(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = pn(U) : (U = Xt(l) ? Mr : Ue.current, U = ca(r, U));
      var Y = l.getDerivedStateFromProps, Q = typeof Y == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Mv(r, m, o, U), vl = !1;
      var I = r.memoizedState;
      m.state = I, ml(r, o, m, c), T = r.memoizedState, E !== o || I !== T || on.current || vl ? (typeof Y == "function" && (Ed(r, l, Y, o), T = r.memoizedState), (E = vl || Ov(r, l, E, o, I, T, U)) ? (Q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Tn(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : Xr(r.type, E), m.props = U, Q = r.pendingProps, I = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = pn(T) : (T = Xt(l) ? Mr : Ue.current, T = ca(r, T));
      var ae = l.getDerivedStateFromProps;
      (Y = typeof ae == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== Q || I !== T) && Mv(r, m, o, T), vl = !1, I = r.memoizedState, m.state = I, ml(r, o, m, c);
      var pe = r.memoizedState;
      E !== Q || I !== pe || on.current || vl ? (typeof ae == "function" && (Ed(r, l, ae, o), pe = r.memoizedState), (U = vl || Ov(r, l, U, o, I, pe, T) || !1) ? (Y || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, pe, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, pe, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = pe), m.props = o, m.state = pe, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return jv(n, r, l, o, d, c);
  }
  function jv(n, r, l, o, c, d) {
    Ie(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && wv(r, l, !1), In(n, r, d);
    o = r.stateNode, ny.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Ku(r, n.child, null, d), r.child = Ku(r, null, E, d)) : wn(n, r, E, d), r.memoizedState = o.state, c && wv(r, l, !0), r.child;
  }
  function Vv(n) {
    var r = n.stateNode;
    r.pendingContext ? cl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && cl(n, r.context, !1), Cd(n, r.containerInfo);
  }
  function Vc(n, r, l, o, c) {
    return tn(), vd(c), r.flags |= 256, wn(n, r, l, o), r.child;
  }
  var lu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function kd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Dd(n, r, l) {
    var o = r.pendingProps, c = De.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), _t(De, c & 1), n === null)
      return dc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Rs(m, o, 0, null), n = vu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = kd(l), r.memoizedState = lu, n) : Od(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return ry(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return (m & 1) === 0 && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = wl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = wl(E, d) : (d = vu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? kd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = lu, o;
    }
    return d = n.child, n = d.sibling, o = wl(d, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Od(n, r) {
    return r = Rs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ao(n, r, l, o) {
    return o !== null && vd(o), Ku(r, n.child, null, l), n = Od(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ry(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = fs(Error(A(422))), ao(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Rs({ mode: "visible", children: o.children }, c, 0, null), d = vu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, (r.mode & 1) !== 0 && Ku(r, n.child, null, m), r.child.memoizedState = kd(m), r.memoizedState = lu, d);
    if ((r.mode & 1) === 0)
      return ao(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(A(419)), o = fs(d, o, void 0), ao(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, yn || E) {
      if (o = rn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (o.suspendedLanes | m)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, wi(n, c), lr(o, n, c, -1));
      }
      return Bd(), o = fs(Error(A(421))), ao(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = sy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Ar = ja(c.nextSibling), qr = r, It = !0, pa = null, n !== null && (zr[tr++] = Bn, zr[tr++] = Ti, zr[tr++] = da, Bn = n.id, Ti = n.overflow, da = r), r = Od(r, o.children), r.flags |= 4096, r);
  }
  function Ld(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), zn(n.return, r, l);
  }
  function Pc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Md(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (wn(n, r, o.children, l), o = De.current, (o & 2) !== 0)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Ld(n, l, r);
            else if (n.tag === 19)
              Ld(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (_t(De, o), (r.mode & 1) === 0)
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && nn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Pc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && nn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Pc(r, !0, l, null, d);
          break;
        case "together":
          Pc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function nr(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function In(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Di |= r.lanes, (l & r.childLanes) === 0)
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = wl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = wl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _i(n, r, l) {
    switch (r.tag) {
      case 3:
        Vv(r), tn();
        break;
      case 5:
        _e(r);
        break;
      case 1:
        Xt(r.type) && sc(r);
        break;
      case 4:
        Cd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        _t(Ja, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (_t(De, De.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? Dd(n, r, l) : (_t(De, De.current & 1), n = In(n, r, l), n !== null ? n.sibling : null);
        _t(De, De.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o)
            return Md(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), _t(De, De.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, iu(n, r, l);
    }
    return In(n, r, l);
  }
  var ps, uu, ma, xn;
  ps = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, uu = function() {
  }, ma = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Kl(Va.current);
      var d = null;
      switch (l) {
        case "input":
          c = Jn(n, c), o = Jn(n, o), d = [];
          break;
        case "select":
          c = R({}, c, { value: void 0 }), o = R({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ya(n, c), o = Ya(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = oc);
      }
      Rn(l, o);
      var m;
      l = null;
      for (U in c)
        if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null)
          if (U === "style") {
            var E = c[U];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Ct.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null))
          if (U === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in T)
                T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
            } else
              l || (d || (d = []), d.push(
                U,
                l
              )), l = T;
          else
            U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Ct.hasOwnProperty(U) ? (T != null && U === "onScroll" && At("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, xn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function vs(n, r) {
    if (!It)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function rr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ay(n, r, l) {
    var o = r.pendingProps;
    switch (dd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return rr(r), null;
      case 1:
        return Xt(r.type) && fa(), rr(r), null;
      case 3:
        return o = r.stateNode, yl(), wt(on), wt(Ue), Ec(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (pc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, pa !== null && (Cs(pa), pa = null))), uu(n, r), rr(r), null;
      case 5:
        qe(r);
        var c = Kl(Zu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          ma(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(A(166));
            return rr(r), null;
          }
          if (n = Kl(Va.current), pc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ka] = r, o[Gl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                At("cancel", o), At("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                At("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Ko.length; c++)
                  At(Ko[c], o);
                break;
              case "source":
                At("error", o);
                break;
              case "img":
              case "image":
              case "link":
                At(
                  "error",
                  o
                ), At("load", o);
                break;
              case "details":
                At("toggle", o);
                break;
              case "input":
                Rr(o, d), At("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, At("invalid", o);
                break;
              case "textarea":
                xr(o, d), At("invalid", o);
            }
            Rn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && uc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && uc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : Ct.hasOwnProperty(m) && E != null && m === "onScroll" && At("scroll", o);
              }
            switch (l) {
              case "input":
                Cr(o), ka(o, d, !0);
                break;
              case "textarea":
                Cr(o), br(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = oc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Oa(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ka] = r, n[Gl] = o, ps(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = dn(l, o), l) {
                case "dialog":
                  At("cancel", n), At("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  At("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Ko.length; c++)
                    At(Ko[c], n);
                  c = o;
                  break;
                case "source":
                  At("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  At(
                    "error",
                    n
                  ), At("load", n), c = o;
                  break;
                case "details":
                  At("toggle", n), c = o;
                  break;
                case "input":
                  Rr(n, o), c = Jn(n, o), At("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = R({}, o, { value: void 0 }), At("invalid", n);
                  break;
                case "textarea":
                  xr(n, o), c = Ya(n, o), At("invalid", n);
                  break;
                default:
                  c = o;
              }
              Rn(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var T = E[d];
                  d === "style" ? Dt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Al(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && Qa(n, T) : typeof T == "number" && Qa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ct.hasOwnProperty(d) ? T != null && d === "onScroll" && At("scroll", n) : T != null && Be(n, d, T, m));
                }
              switch (l) {
                case "input":
                  Cr(n), ka(n, o, !1);
                  break;
                case "textarea":
                  Cr(n), br(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + tt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? wr(n, !!o.multiple, d, !1) : o.defaultValue != null && wr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = oc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return rr(r), null;
      case 6:
        if (n && r.stateNode != null)
          xn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(A(166));
          if (l = Kl(Zu.current), Kl(Va.current), pc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ka] = r, (d = o.nodeValue !== l) && (n = qr, n !== null))
              switch (n.tag) {
                case 3:
                  uc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && uc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ka] = r, r.stateNode = o;
        }
        return rr(r), null;
      case 13:
        if (wt(De), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (It && Ar !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
            _v(), tn(), r.flags |= 98560, d = !1;
          else if (d = pc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(A(317));
              d[Ka] = r;
            } else
              tn(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            rr(r), d = !1;
          } else
            pa !== null && (Cs(pa), pa = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (De.current & 1) !== 0 ? _n === 0 && (_n = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), rr(r), null);
      case 4:
        return yl(), uu(n, r), n === null && Wu(r.stateNode.containerInfo), rr(r), null;
      case 10:
        return pl(r.type._context), rr(r), null;
      case 17:
        return Xt(r.type) && fa(), rr(r), null;
      case 19:
        if (wt(De), d = r.memoizedState, d === null)
          return rr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            vs(d, !1);
          else {
            if (_n !== 0 || n !== null && (n.flags & 128) !== 0)
              for (n = r.child; n !== null; ) {
                if (m = nn(n), m !== null) {
                  for (r.flags |= 128, vs(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return _t(De, De.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && qt() > fo && (r.flags |= 128, o = !0, vs(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = nn(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), vs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !It)
                return rr(r), null;
            } else
              2 * qt() - d.renderingStartTime > fo && l !== 1073741824 && (r.flags |= 128, o = !0, vs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = qt(), r.sibling = null, l = De.current, _t(De, o ? l & 1 | 2 : l & 1), r) : (rr(r), null);
      case 22:
      case 23:
        return Pd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (Zr & 1073741824) !== 0 && (rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : rr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function Nd(n, r) {
    switch (dd(r), r.tag) {
      case 1:
        return Xt(r.type) && fa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return yl(), wt(on), wt(Ue), Ec(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return qe(r), null;
      case 13:
        if (wt(De), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(A(340));
          tn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return wt(De), null;
      case 4:
        return yl(), null;
      case 10:
        return pl(r.type._context), null;
      case 22:
      case 23:
        return Pd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hs = !1, bn = !1, Pv = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
  function io(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          cn(n, r, o);
        }
      else
        l.current = null;
  }
  function ms(n, r, l) {
    try {
      l();
    } catch (o) {
      cn(n, r, o);
    }
  }
  var Bv = !1;
  function $v(n, r) {
    if (ad = ua, n = nc(), Si(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, T = -1, U = 0, Y = 0, Q = n, I = null;
            t:
              for (; ; ) {
                for (var ae; Q !== l || c !== 0 && Q.nodeType !== 3 || (E = m + c), Q !== d || o !== 0 && Q.nodeType !== 3 || (T = m + o), Q.nodeType === 3 && (m += Q.nodeValue.length), (ae = Q.firstChild) !== null; )
                  I = Q, Q = ae;
                for (; ; ) {
                  if (Q === n)
                    break t;
                  if (I === l && ++U === c && (E = m), I === d && ++Y === o && (T = m), (ae = Q.nextSibling) !== null)
                    break;
                  Q = I, I = Q.parentNode;
                }
                Q = ae;
              }
            l = E === -1 || T === -1 ? null : { start: E, end: T };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Ql = { focusedElem: n, selectionRange: l }, ua = !1, ce = r; ce !== null; )
      if (r = ce, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ce = n;
      else
        for (; ce !== null; ) {
          r = ce;
          try {
            var pe = r.alternate;
            if ((r.flags & 1024) !== 0)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (pe !== null) {
                    var me = pe.memoizedProps, vn = pe.memoizedState, _ = r.stateNode, x = _.getSnapshotBeforeUpdate(r.elementType === r.type ? me : Xr(r.type, me), vn);
                    _.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var O = r.stateNode.containerInfo;
                  O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(A(163));
              }
          } catch (q) {
            cn(r, r.return, q);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ce = n;
            break;
          }
          ce = r.return;
        }
    return pe = Bv, Bv = !1, pe;
  }
  function ys(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && ms(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function gs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ud(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function zd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, zd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ka], delete r[Gl], delete r[ud], delete r[Km], delete r[od])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Iv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Bc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Iv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function lo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = oc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (lo(n, r, l), n = n.sibling; n !== null; )
        lo(n, r, l), n = n.sibling;
  }
  function ti(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (ti(n, r, l), n = n.sibling; n !== null; )
        ti(n, r, l), n = n.sibling;
  }
  var Kt = null, An = !1;
  function ya(n, r, l) {
    for (l = l.child; l !== null; )
      uo(n, r, l), l = l.sibling;
  }
  function uo(n, r, l) {
    if (kr && typeof kr.onCommitFiberUnmount == "function")
      try {
        kr.onCommitFiberUnmount(qi, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        bn || io(l, r);
      case 6:
        var o = Kt, c = An;
        Kt = null, ya(n, r, l), Kt = o, An = c, Kt !== null && (An ? (n = Kt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Kt.removeChild(l.stateNode));
        break;
      case 18:
        Kt !== null && (An ? (n = Kt, l = l.stateNode, n.nodeType === 8 ? ul(n.parentNode, l) : n.nodeType === 1 && ul(n, l), nl(n)) : ul(Kt, l.stateNode));
        break;
      case 4:
        o = Kt, c = An, Kt = l.stateNode.containerInfo, An = !0, ya(n, r, l), Kt = o, An = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!bn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && ms(l, r, m), c = c.next;
          } while (c !== o);
        }
        ya(n, r, l);
        break;
      case 1:
        if (!bn && (io(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            cn(l, r, E);
          }
        ya(n, r, l);
        break;
      case 21:
        ya(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (bn = (o = bn) || l.memoizedState !== null, ya(n, r, l), bn = o) : ya(n, r, l);
        break;
      default:
        ya(n, r, l);
    }
  }
  function ki(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Pv()), r.forEach(function(o) {
        var c = cy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Pa(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  Kt = E.stateNode, An = !1;
                  break e;
                case 3:
                  Kt = E.stateNode.containerInfo, An = !0;
                  break e;
                case 4:
                  Kt = E.stateNode.containerInfo, An = !0;
                  break e;
              }
              E = E.return;
            }
          if (Kt === null)
            throw Error(A(160));
          uo(d, m, c), Kt = null, An = !1;
          var T = c.alternate;
          T !== null && (T.return = null), c.return = null;
        } catch (U) {
          cn(c, r, U);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Yv(r, n), r = r.sibling;
  }
  function Yv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Pa(r, n), ni(n), o & 4) {
          try {
            ys(3, n, n.return), gs(3, n);
          } catch (me) {
            cn(n, n.return, me);
          }
          try {
            ys(5, n, n.return);
          } catch (me) {
            cn(n, n.return, me);
          }
        }
        break;
      case 1:
        Pa(r, n), ni(n), o & 512 && l !== null && io(l, l.return);
        break;
      case 5:
        if (Pa(r, n), ni(n), o & 512 && l !== null && io(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Qa(c, "");
          } catch (me) {
            cn(n, n.return, me);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Tr(c, d), dn(E, m);
              var U = dn(E, d);
              for (m = 0; m < T.length; m += 2) {
                var Y = T[m], Q = T[m + 1];
                Y === "style" ? Dt(c, Q) : Y === "dangerouslySetInnerHTML" ? Al(c, Q) : Y === "children" ? Qa(c, Q) : Be(c, Y, Q, U);
              }
              switch (E) {
                case "input":
                  Ln(c, d);
                  break;
                case "textarea":
                  Da(c, d);
                  break;
                case "select":
                  var I = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ae = d.value;
                  ae != null ? wr(c, !!d.multiple, ae, !1) : I !== !!d.multiple && (d.defaultValue != null ? wr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : wr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Gl] = d;
            } catch (me) {
              cn(n, n.return, me);
            }
        }
        break;
      case 6:
        if (Pa(r, n), ni(n), o & 4) {
          if (n.stateNode === null)
            throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (me) {
            cn(n, n.return, me);
          }
        }
        break;
      case 3:
        if (Pa(r, n), ni(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            nl(r.containerInfo);
          } catch (me) {
            cn(n, n.return, me);
          }
        break;
      case 4:
        Pa(r, n), ni(n);
        break;
      case 13:
        Pa(r, n), ni(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Fd = qt())), o & 4 && ki(n);
        break;
      case 22:
        if (Y = l !== null && l.memoizedState !== null, n.mode & 1 ? (bn = (U = bn) || Y, Pa(r, n), bn = U) : Pa(r, n), ni(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !Y && (n.mode & 1) !== 0)
            for (ce = n, Y = n.child; Y !== null; ) {
              for (Q = ce = Y; ce !== null; ) {
                switch (I = ce, ae = I.child, I.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ys(4, I, I.return);
                    break;
                  case 1:
                    io(I, I.return);
                    var pe = I.stateNode;
                    if (typeof pe.componentWillUnmount == "function") {
                      o = I, l = I.return;
                      try {
                        r = o, pe.props = r.memoizedProps, pe.state = r.memoizedState, pe.componentWillUnmount();
                      } catch (me) {
                        cn(o, l, me);
                      }
                    }
                    break;
                  case 5:
                    io(I, I.return);
                    break;
                  case 22:
                    if (I.memoizedState !== null) {
                      Ad(Q);
                      continue;
                    }
                }
                ae !== null ? (ae.return = I, ce = ae) : Ad(Q);
              }
              Y = Y.sibling;
            }
          e:
            for (Y = null, Q = n; ; ) {
              if (Q.tag === 5) {
                if (Y === null) {
                  Y = Q;
                  try {
                    c = Q.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = Q.stateNode, T = Q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Qe("display", m));
                  } catch (me) {
                    cn(n, n.return, me);
                  }
                }
              } else if (Q.tag === 6) {
                if (Y === null)
                  try {
                    Q.stateNode.nodeValue = U ? "" : Q.memoizedProps;
                  } catch (me) {
                    cn(n, n.return, me);
                  }
              } else if ((Q.tag !== 22 && Q.tag !== 23 || Q.memoizedState === null || Q === n) && Q.child !== null) {
                Q.child.return = Q, Q = Q.child;
                continue;
              }
              if (Q === n)
                break e;
              for (; Q.sibling === null; ) {
                if (Q.return === null || Q.return === n)
                  break e;
                Y === Q && (Y = null), Q = Q.return;
              }
              Y === Q && (Y = null), Q.sibling.return = Q.return, Q = Q.sibling;
            }
        }
        break;
      case 19:
        Pa(r, n), ni(n), o & 4 && ki(n);
        break;
      case 21:
        break;
      default:
        Pa(
          r,
          n
        ), ni(n);
    }
  }
  function ni(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Iv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Qa(c, ""), o.flags &= -33);
            var d = Bc(n);
            ti(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Bc(n);
            lo(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        cn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Qv(n, r, l) {
    ce = n, oo(n);
  }
  function oo(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ce !== null; ) {
      var c = ce, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || hs;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || bn;
          E = hs;
          var U = bn;
          if (hs = m, (bn = T) && !U)
            for (ce = c; ce !== null; )
              m = ce, T = m.child, m.tag === 22 && m.memoizedState !== null ? Gv(c) : T !== null ? (T.return = m, ce = T) : Gv(c);
          for (; d !== null; )
            ce = d, oo(d), d = d.sibling;
          ce = c, hs = E, bn = U;
        }
        Wv(n);
      } else
        (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, ce = d) : Wv(n);
    }
  }
  function Wv(n) {
    for (; ce !== null; ) {
      var r = ce;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                bn || gs(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !bn)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Xr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && Xl(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  Xl(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var T = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      T.autoFocus && l.focus();
                      break;
                    case "img":
                      T.src && (l.src = T.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var U = r.alternate;
                  if (U !== null) {
                    var Y = U.memoizedState;
                    if (Y !== null) {
                      var Q = Y.dehydrated;
                      Q !== null && nl(Q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(A(163));
            }
          bn || r.flags & 512 && Ud(r);
        } catch (I) {
          cn(r, r.return, I);
        }
      }
      if (r === n) {
        ce = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ce = l;
        break;
      }
      ce = r.return;
    }
  }
  function Ad(n) {
    for (; ce !== null; ) {
      var r = ce;
      if (r === n) {
        ce = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ce = l;
        break;
      }
      ce = r.return;
    }
  }
  function Gv(n) {
    for (; ce !== null; ) {
      var r = ce;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              gs(4, r);
            } catch (T) {
              cn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                cn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Ud(r);
            } catch (T) {
              cn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Ud(r);
            } catch (T) {
              cn(r, m, T);
            }
        }
      } catch (T) {
        cn(r, r.return, T);
      }
      if (r === n) {
        ce = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ce = E;
        break;
      }
      ce = r.return;
    }
  }
  var $c = Math.ceil, Ss = rt.ReactCurrentDispatcher, Hd = rt.ReactCurrentOwner, ar = rt.ReactCurrentBatchConfig, Je = 0, rn = null, sn = null, Hn = 0, Zr = 0, so = $e(0), _n = 0, Es = null, Di = 0, Ic = 0, co = 0, ou = null, fr = null, Fd = 0, fo = 1 / 0, Oi = null, Yc = !1, su = null, ri = null, Cl = !1, Rl = null, Qc = 0, po = 0, Wc = null, cu = -1, fu = 0;
  function ir() {
    return (Je & 6) !== 0 ? qt() : cu !== -1 ? cu : cu = qt();
  }
  function gn(n) {
    return (n.mode & 1) === 0 ? 1 : (Je & 2) !== 0 && Hn !== 0 ? Hn & -Hn : vc.transition !== null ? (fu === 0 && (fu = Nu()), fu) : (n = yt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Bo(n.type)), n);
  }
  function lr(n, r, l, o) {
    if (50 < po)
      throw po = 0, Wc = null, Error(A(185));
    vi(n, l, o), ((Je & 2) === 0 || n !== rn) && (n === rn && ((Je & 2) === 0 && (Ic |= l), _n === 4 && ga(n, Hn)), ur(n, o), l === 1 && Je === 0 && (r.mode & 1) === 0 && (fo = qt() + 500, Un && Nr()));
  }
  function ur(n, r) {
    var l = n.callbackNode;
    Zi(n, r);
    var o = sr(n, n === rn ? Hn : 0);
    if (o === 0)
      l !== null && Ws(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Ws(l), r === 1)
        n.tag === 0 ? cd(qv.bind(null, n)) : sd(qv.bind(null, n)), ld(function() {
          (Je & 6) === 0 && Nr();
        }), l = null;
      else {
        switch (zu(o)) {
          case 1:
            l = Na;
            break;
          case 4:
            l = We;
            break;
          case 16:
            l = Ga;
            break;
          case 536870912:
            l = Lu;
            break;
          default:
            l = Ga;
        }
        l = Id(l, vo.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function vo(n, r) {
    if (cu = -1, fu = 0, (Je & 6) !== 0)
      throw Error(A(327));
    var l = n.callbackNode;
    if (mo() && n.callbackNode !== l)
      return null;
    var o = sr(n, n === rn ? Hn : 0);
    if (o === 0)
      return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r)
      r = qc(n, o);
    else {
      r = o;
      var c = Je;
      Je |= 2;
      var d = Gc();
      (rn !== n || Hn !== r) && (Oi = null, fo = qt() + 500, du(n, r));
      do
        try {
          ly();
          break;
        } catch (E) {
          Xv(n, E);
        }
      while (1);
      md(), Ss.current = d, Je = c, sn !== null ? r = 0 : (rn = null, Hn = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = Ji(n), c !== 0 && (o = c, r = jd(n, c))), r === 1)
        throw l = Es, du(n, 0), ga(n, o), ur(n, qt()), l;
      if (r === 6)
        ga(n, o);
      else {
        if (c = n.current.alternate, (o & 30) === 0 && !Vd(c) && (r = qc(n, o), r === 2 && (d = Ji(n), d !== 0 && (o = d, r = jd(n, d))), r === 1))
          throw l = Es, du(n, 0), ga(n, o), ur(n, qt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            pu(n, fr, Oi);
            break;
          case 3:
            if (ga(n, o), (o & 130023424) === o && (r = Fd + 500 - qt(), 10 < r)) {
              if (sr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                ir(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Wl(pu.bind(null, n, fr, Oi), r);
              break;
            }
            pu(n, fr, Oi);
            break;
          case 4:
            if (ga(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - or(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = qt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * $c(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Wl(pu.bind(null, n, fr, Oi), o);
              break;
            }
            pu(n, fr, Oi);
            break;
          case 5:
            pu(n, fr, Oi);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return ur(n, qt()), n.callbackNode === l ? vo.bind(null, n) : null;
  }
  function jd(n, r) {
    var l = ou;
    return n.current.memoizedState.isDehydrated && (du(n, r).flags |= 256), n = qc(n, r), n !== 2 && (r = fr, fr = l, r !== null && Cs(r)), n;
  }
  function Cs(n) {
    fr === null ? fr = n : fr.push.apply(fr, n);
  }
  function Vd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!oa(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ga(n, r) {
    for (r &= ~co, r &= ~Ic, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - or(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function qv(n) {
    if ((Je & 6) !== 0)
      throw Error(A(327));
    mo();
    var r = sr(n, 0);
    if ((r & 1) === 0)
      return ur(n, qt()), null;
    var l = qc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Ji(n);
      o !== 0 && (r = o, l = jd(n, o));
    }
    if (l === 1)
      throw l = Es, du(n, 0), ga(n, r), ur(n, qt()), l;
    if (l === 6)
      throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, pu(n, fr, Oi), ur(n, qt()), null;
  }
  function ho(n, r) {
    var l = Je;
    Je |= 1;
    try {
      return n(r);
    } finally {
      Je = l, Je === 0 && (fo = qt() + 500, Un && Nr());
    }
  }
  function Tl(n) {
    Rl !== null && Rl.tag === 0 && (Je & 6) === 0 && mo();
    var r = Je;
    Je |= 1;
    var l = ar.transition, o = yt;
    try {
      if (ar.transition = null, yt = 1, n)
        return n();
    } finally {
      yt = o, ar.transition = l, Je = r, (Je & 6) === 0 && Nr();
    }
  }
  function Pd() {
    Zr = so.current, wt(so);
  }
  function du(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Tv(l)), sn !== null)
      for (l = sn.return; l !== null; ) {
        var o = l;
        switch (dd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && fa();
            break;
          case 3:
            yl(), wt(on), wt(Ue), Ec();
            break;
          case 5:
            qe(o);
            break;
          case 4:
            yl();
            break;
          case 13:
            wt(De);
            break;
          case 19:
            wt(De);
            break;
          case 10:
            pl(o.type._context);
            break;
          case 22:
          case 23:
            Pd();
        }
        l = l.return;
      }
    if (rn = n, sn = n = wl(n.current, null), Hn = Zr = r, _n = 0, Es = null, co = Ic = Di = 0, fr = ou = null, $n !== null) {
      for (r = 0; r < $n.length; r++)
        if (l = $n[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      $n = null;
    }
    return n;
  }
  function Xv(n, r) {
    do {
      var l = sn;
      try {
        if (md(), Cc.current = Hc, Oe) {
          for (var o = Yt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Oe = !1;
        }
        if (Zl = 0, it = V = Yt = null, ei = !1, Kr = 0, Hd.current = null, l === null || l.return === null) {
          _n = 1, Es = r, sn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Hn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, Y = E, Q = Y.tag;
            if ((Y.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
              var I = Y.alternate;
              I ? (Y.updateQueue = I.updateQueue, Y.memoizedState = I.memoizedState, Y.lanes = I.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var ae = xd(m);
            if (ae !== null) {
              ae.flags &= -257, bd(ae, m, E, d, r), ae.mode & 1 && Fv(d, U, r), r = ae, T = U;
              var pe = r.updateQueue;
              if (pe === null) {
                var me = /* @__PURE__ */ new Set();
                me.add(T), r.updateQueue = me;
              } else
                pe.add(T);
              break e;
            } else {
              if ((r & 1) === 0) {
                Fv(d, U, r), Bd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (It && E.mode & 1) {
            var vn = xd(m);
            if (vn !== null) {
              (vn.flags & 65536) === 0 && (vn.flags |= 256), bd(vn, m, E, d, r), vd(no(T, E));
              break e;
            }
          }
          d = T = no(T, E), _n !== 4 && (_n = 2), ou === null ? ou = [d] : ou.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var _ = Hv(d, T, r);
                Sd(d, _);
                break e;
              case 1:
                E = T;
                var x = d.type, O = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (ri === null || !ri.has(O)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var q = ds(d, E, r);
                  Sd(d, q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        $d(l);
      } catch (ge) {
        r = ge, sn === l && l !== null && (sn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Gc() {
    var n = Ss.current;
    return Ss.current = Hc, n === null ? Hc : n;
  }
  function Bd() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), rn === null || (Di & 268435455) === 0 && (Ic & 268435455) === 0 || ga(rn, Hn);
  }
  function qc(n, r) {
    var l = Je;
    Je |= 2;
    var o = Gc();
    (rn !== n || Hn !== r) && (Oi = null, du(n, r));
    do
      try {
        iy();
        break;
      } catch (c) {
        Xv(n, c);
      }
    while (1);
    if (md(), Je = l, Ss.current = o, sn !== null)
      throw Error(A(261));
    return rn = null, Hn = 0, _n;
  }
  function iy() {
    for (; sn !== null; )
      Kv(sn);
  }
  function ly() {
    for (; sn !== null && !Af(); )
      Kv(sn);
  }
  function Kv(n) {
    var r = Jv(n.alternate, n, Zr);
    n.memoizedProps = n.pendingProps, r === null ? $d(n) : sn = r, Hd.current = null;
  }
  function $d(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = ay(l, r, Zr), l !== null) {
          sn = l;
          return;
        }
      } else {
        if (l = Nd(l, r), l !== null) {
          l.flags &= 32767, sn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          _n = 6, sn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        sn = r;
        return;
      }
      sn = r = n;
    } while (r !== null);
    _n === 0 && (_n = 5);
  }
  function pu(n, r, l) {
    var o = yt, c = ar.transition;
    try {
      ar.transition = null, yt = 1, uy(n, r, l, o);
    } finally {
      ar.transition = c, yt = o;
    }
    return null;
  }
  function uy(n, r, l, o) {
    do
      mo();
    while (Rl !== null);
    if ((Je & 6) !== 0)
      throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (jf(n, d), n === rn && (sn = rn = null, Hn = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || Cl || (Cl = !0, Id(Ga, function() {
      return mo(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = ar.transition, ar.transition = null;
      var m = yt;
      yt = 1;
      var E = Je;
      Je |= 4, Hd.current = null, $v(n, l), Yv(l, n), rc(Ql), ua = !!ad, Ql = ad = null, n.current = l, Qv(l), Hf(), Je = E, yt = m, ar.transition = d;
    } else
      n.current = l;
    if (Cl && (Cl = !1, Rl = n, Qc = c), d = n.pendingLanes, d === 0 && (ri = null), jo(l.stateNode), ur(n, qt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Yc)
      throw Yc = !1, n = su, su = null, n;
    return (Qc & 1) !== 0 && n.tag !== 0 && mo(), d = n.pendingLanes, (d & 1) !== 0 ? n === Wc ? po++ : (po = 0, Wc = n) : po = 0, Nr(), null;
  }
  function mo() {
    if (Rl !== null) {
      var n = zu(Qc), r = ar.transition, l = yt;
      try {
        if (ar.transition = null, yt = 16 > n ? 16 : n, Rl === null)
          var o = !1;
        else {
          if (n = Rl, Rl = null, Qc = 0, (Je & 6) !== 0)
            throw Error(A(331));
          var c = Je;
          for (Je |= 4, ce = n.current; ce !== null; ) {
            var d = ce, m = d.child;
            if ((ce.flags & 16) !== 0) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (ce = U; ce !== null; ) {
                    var Y = ce;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ys(8, Y, d);
                    }
                    var Q = Y.child;
                    if (Q !== null)
                      Q.return = Y, ce = Q;
                    else
                      for (; ce !== null; ) {
                        Y = ce;
                        var I = Y.sibling, ae = Y.return;
                        if (zd(Y), Y === U) {
                          ce = null;
                          break;
                        }
                        if (I !== null) {
                          I.return = ae, ce = I;
                          break;
                        }
                        ce = ae;
                      }
                  }
                }
                var pe = d.alternate;
                if (pe !== null) {
                  var me = pe.child;
                  if (me !== null) {
                    pe.child = null;
                    do {
                      var vn = me.sibling;
                      me.sibling = null, me = vn;
                    } while (me !== null);
                  }
                }
                ce = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && m !== null)
              m.return = d, ce = m;
            else
              e:
                for (; ce !== null; ) {
                  if (d = ce, (d.flags & 2048) !== 0)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ys(9, d, d.return);
                    }
                  var _ = d.sibling;
                  if (_ !== null) {
                    _.return = d.return, ce = _;
                    break e;
                  }
                  ce = d.return;
                }
          }
          var x = n.current;
          for (ce = x; ce !== null; ) {
            m = ce;
            var O = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && O !== null)
              O.return = m, ce = O;
            else
              e:
                for (m = x; ce !== null; ) {
                  if (E = ce, (E.flags & 2048) !== 0)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          gs(9, E);
                      }
                    } catch (ge) {
                      cn(E, E.return, ge);
                    }
                  if (E === m) {
                    ce = null;
                    break e;
                  }
                  var q = E.sibling;
                  if (q !== null) {
                    q.return = E.return, ce = q;
                    break e;
                  }
                  ce = E.return;
                }
          }
          if (Je = c, Nr(), kr && typeof kr.onPostCommitFiberRoot == "function")
            try {
              kr.onPostCommitFiberRoot(qi, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        yt = l, ar.transition = r;
      }
    }
    return !1;
  }
  function Zv(n, r, l) {
    r = no(l, r), r = Hv(n, r, 1), n = hl(n, r, 1), r = ir(), n !== null && (vi(n, 1, r), ur(n, r));
  }
  function cn(n, r, l) {
    if (n.tag === 3)
      Zv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Zv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ri === null || !ri.has(o))) {
            n = no(l, n), n = ds(r, n, 1), r = hl(r, n, 1), n = ir(), r !== null && (vi(r, 1, n), ur(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function oy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = ir(), n.pingedLanes |= n.suspendedLanes & l, rn === n && (Hn & l) === l && (_n === 4 || _n === 3 && (Hn & 130023424) === Hn && 500 > qt() - Fd ? du(n, 0) : co |= l), ur(n, r);
  }
  function Xc(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = Xi, Xi <<= 1, (Xi & 130023424) === 0 && (Xi = 4194304)));
    var l = ir();
    n = wi(n, r), n !== null && (vi(n, r, l), ur(n, l));
  }
  function sy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Xc(n, l);
  }
  function cy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), Xc(n, l);
  }
  var Jv;
  Jv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || on.current)
        yn = !0;
      else {
        if ((n.lanes & l) === 0 && (r.flags & 128) === 0)
          return yn = !1, _i(n, r, l);
        yn = (n.flags & 131072) !== 0;
      }
    else
      yn = !1, It && (r.flags & 1048576) !== 0 && fd(r, qu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        nr(n, r), n = r.pendingProps;
        var c = ca(r, Ue.current);
        K(r, l), c = gl(null, r, o, n, c, l);
        var d = tu();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Xt(o) ? (d = !0, sc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, gd(r), c.updater = yc, r.stateNode = c, c._reactInternals = r, gc(r, o, n, l), r = jv(null, r, o, !0, d, l)) : (r.tag = 0, It && d && cc(r), wn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (nr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = dy(o), n = Xr(o, n), c) {
            case 0:
              r = ro(null, r, o, n, l);
              break e;
            case 1:
              r = _d(null, r, o, n, l);
              break e;
            case 11:
              r = El(null, r, o, n, l);
              break e;
            case 14:
              r = jc(null, r, o, Xr(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), ro(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), _d(n, r, o, c, l);
      case 3:
        e: {
          if (Vv(r), n === null)
            throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Tn(n, r), ml(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = no(Error(A(423)), r), r = Vc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = no(Error(A(424)), r), r = Vc(n, r, o, l, c);
              break e;
            } else
              for (Ar = ja(r.stateNode.containerInfo.firstChild), qr = r, It = !0, pa = null, l = zv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (tn(), o === c) {
              r = In(n, r, l);
              break e;
            }
            wn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return _e(r), n === null && dc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, es(o, c) ? m = null : d !== null && es(o, d) && (r.flags |= 32), Ie(n, r), wn(n, r, m, l), r.child;
      case 6:
        return n === null && dc(r), null;
      case 13:
        return Dd(n, r, l);
      case 4:
        return Cd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Ku(r, null, o, l) : wn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), El(n, r, o, c, l);
      case 7:
        return wn(n, r, r.pendingProps, l), r.child;
      case 8:
        return wn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return wn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, _t(Ja, o._currentValue), o._currentValue = m, d !== null)
            if (oa(d.value, m)) {
              if (d.children === c.children && !on.current) {
                r = In(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var T = E.firstContext; T !== null; ) {
                    if (T.context === o) {
                      if (d.tag === 1) {
                        T = xi(-1, l & -l), T.tag = 2;
                        var U = d.updateQueue;
                        if (U !== null) {
                          U = U.shared;
                          var Y = U.pending;
                          Y === null ? T.next = T : (T.next = Y.next, Y.next = T), U.pending = T;
                        }
                      }
                      d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), zn(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    T = T.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(A(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), zn(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          wn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, K(r, l), c = pn(c), o = o(c), r.flags |= 1, wn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Xr(o, r.pendingProps), c = Xr(o.type, c), jc(n, r, o, c, l);
      case 15:
        return jr(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), nr(n, r), r.tag = 1, Xt(o) ? (n = !0, sc(r)) : n = !1, K(r, l), Lv(r, o, c), gc(r, o, c, l), jv(null, r, o, !0, n, l);
      case 19:
        return Md(n, r, l);
      case 22:
        return iu(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function Id(n, r) {
    return Fo(n, r);
  }
  function fy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Sa(n, r, l, o) {
    return new fy(n, r, l, o);
  }
  function Yd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function dy(n) {
    if (typeof n == "function")
      return Yd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Cn)
        return 11;
      if (n === Gt)
        return 14;
    }
    return 2;
  }
  function wl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Sa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Kc(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Yd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case He:
            return vu(l.children, c, d, r);
          case Zt:
            m = 8, c |= 8;
            break;
          case On:
            return n = Sa(12, l, r, c | 2), n.elementType = On, n.lanes = d, n;
          case Ye:
            return n = Sa(13, l, r, c), n.elementType = Ye, n.lanes = d, n;
          case at:
            return n = Sa(19, l, r, c), n.elementType = at, n.lanes = d, n;
          case ye:
            return Rs(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ft:
                  m = 10;
                  break e;
                case xt:
                  m = 9;
                  break e;
                case Cn:
                  m = 11;
                  break e;
                case Gt:
                  m = 14;
                  break e;
                case Tt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(A(130, n == null ? n : typeof n, ""));
        }
    return r = Sa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function vu(n, r, l, o) {
    return n = Sa(7, n, o, r), n.lanes = l, n;
  }
  function Rs(n, r, l, o) {
    return n = Sa(22, n, o, r), n.elementType = ye, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ts(n, r, l) {
    return n = Sa(6, n, null, r), n.lanes = l, n;
  }
  function hu(n, r, l) {
    return r = Sa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function py(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Uu(0), this.expirationTimes = Uu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Zc(n, r, l, o, c, d, m, E, T) {
    return n = new py(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Sa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gd(d), n;
  }
  function eh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ke, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Qd(n) {
    if (!n)
      return Za;
    n = n._reactInternals;
    e: {
      if (ia(n) !== n || n.tag !== 1)
        throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Xt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Xt(l))
        return rs(n, l, r);
    }
    return r;
  }
  function th(n, r, l, o, c, d, m, E, T) {
    return n = Zc(l, o, !0, n, c, d, m, E, T), n.context = Qd(null), l = n.current, o = ir(), c = gn(l), d = xi(o, c), d.callback = r != null ? r : null, hl(l, d, c), n.current.lanes = c, vi(n, c, o), ur(n, o), n;
  }
  function ws(n, r, l, o) {
    var c = r.current, d = ir(), m = gn(c);
    return l = Qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = xi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = hl(c, r, m), n !== null && (lr(n, c, m, d), mc(n, c, m)), m;
  }
  function Jc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function nh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Wd(n, r) {
    nh(n, r), (n = n.alternate) && nh(n, r);
  }
  function rh() {
    return null;
  }
  var Gd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function ef(n) {
    this._internalRoot = n;
  }
  Li.prototype.render = ef.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(A(409));
    ws(n, r, null, null);
  }, Li.prototype.unmount = ef.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Tl(function() {
        ws(null, n, null, null);
      }), r[Ri] = null;
    }
  };
  function Li(n) {
    this._internalRoot = n;
  }
  Li.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Hu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < bt.length && r !== 0 && r < bt[l].priority; l++)
        ;
      bt.splice(l, 0, n), l === 0 && Xs(n);
    }
  };
  function qd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function tf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ah() {
  }
  function vy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = Jc(m);
          d.call(U);
        };
      }
      var m = th(r, o, n, 0, null, !1, !1, "", ah);
      return n._reactRootContainer = m, n[Ri] = m.current, Wu(n.nodeType === 8 ? n.parentNode : n), Tl(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = Jc(T);
        E.call(U);
      };
    }
    var T = Zc(n, 0, !1, null, null, !1, !1, "", ah);
    return n._reactRootContainer = T, n[Ri] = T.current, Wu(n.nodeType === 8 ? n.parentNode : n), Tl(function() {
      ws(r, T, l, o);
    }), T;
  }
  function nf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = Jc(m);
          E.call(T);
        };
      }
      ws(r, m, n, c);
    } else
      m = vy(l, r, n, c, o);
    return Jc(m);
  }
  jl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ua(r.pendingLanes);
          l !== 0 && (qa(r, l | 1), ur(r, qt()), (Je & 6) === 0 && (fo = qt() + 500, Nr()));
        }
        break;
      case 13:
        Tl(function() {
          var o = wi(n, 1);
          if (o !== null) {
            var c = ir();
            lr(o, n, 1, c);
          }
        }), Wd(n, 1);
    }
  }, Au = function(n) {
    if (n.tag === 13) {
      var r = wi(n, 134217728);
      if (r !== null) {
        var l = ir();
        lr(r, n, 134217728, l);
      }
      Wd(n, 134217728);
    }
  }, ct = function(n) {
    if (n.tag === 13) {
      var r = gn(n), l = wi(n, r);
      if (l !== null) {
        var o = ir();
        lr(l, n, r, o);
      }
      Wd(n, r);
    }
  }, Hu = function() {
    return yt;
  }, Fu = function(n, r) {
    var l = yt;
    try {
      return yt = n, r();
    } finally {
      yt = l;
    }
  }, aa = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ln(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Te(o);
              if (!c)
                throw Error(A(90));
              _a(o), Ln(o, c);
            }
          }
        }
        break;
      case "textarea":
        Da(n, l);
        break;
      case "select":
        r = l.value, r != null && wr(n, !!l.multiple, r, !1);
    }
  }, $s = ho, Is = Tl;
  var hy = { usingClientEntryPoint: !1, Events: [ns, Gu, Te, pi, ku, ho] }, yo = { findFiberByHostInstance: sa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, my = { bundleType: yo.bundleType, version: yo.version, rendererPackageName: yo.rendererPackageName, rendererConfig: yo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ys(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: yo.findFiberByHostInstance || rh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rf.isDisabled && rf.supportsFiber)
      try {
        qi = rf.inject(my), kr = rf;
      } catch {
      }
  }
  return xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hy, xa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qd(r))
      throw Error(A(200));
    return eh(n, r, null, l);
  }, xa.createRoot = function(n, r) {
    if (!qd(n))
      throw Error(A(299));
    var l = !1, o = "", c = Gd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Zc(n, 1, !1, null, null, l, !1, o, c), n[Ri] = r.current, Wu(n.nodeType === 8 ? n.parentNode : n), new ef(r);
  }, xa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = Ys(r), n = n === null ? null : n.stateNode, n;
  }, xa.flushSync = function(n) {
    return Tl(n);
  }, xa.hydrate = function(n, r, l) {
    if (!tf(r))
      throw Error(A(200));
    return nf(null, n, r, !0, l);
  }, xa.hydrateRoot = function(n, r, l) {
    if (!qd(n))
      throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Gd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = th(r, null, n, 1, l != null ? l : null, c, !1, d, m), n[Ri] = r.current, Wu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Li(r);
  }, xa.render = function(n, r, l) {
    if (!tf(r))
      throw Error(A(200));
    return nf(null, n, r, !1, l);
  }, xa.unmountComponentAtNode = function(n) {
    if (!tf(n))
      throw Error(A(40));
    return n._reactRootContainer ? (Tl(function() {
      nf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ri] = null;
      });
    }), !0) : !1;
  }, xa.unstable_batchedUpdates = ho, xa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!tf(l))
      throw Error(A(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(A(38));
    return nf(n, r, l, !1, o);
  }, xa.version = "18.2.0-next-9e3b772b8-20220608", xa;
}
var ba = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K1;
function W_() {
  return K1 || (K1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var z = En.exports, $ = eR(), A = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Et = !1;
    function Ct(e) {
      Et = e;
    }
    function Me(e) {
      if (!Et) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Rt("warn", e, a);
      }
    }
    function S(e) {
      if (!Et) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Rt("error", e, a);
      }
    }
    function Rt(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var fe = 0, se = 1, dt = 2, te = 3, de = 4, ne = 5, Ae = 6, st = 7, Xe = 8, Dn = 9, mt = 10, Be = 11, rt = 12, we = 13, Ke = 14, He = 15, Zt = 16, On = 17, Ft = 18, xt = 19, Cn = 21, Ye = 22, at = 23, Gt = 24, Tt = 25, ye = !0, X = !1, Ce = !1, R = !1, B = !1, le = !0, Pe = !1, Ne = !1, pt = !0, Ze = !0, vt = !0, tt = /* @__PURE__ */ new Set(), jt = {}, fi = {};
    function Cr(e, t) {
      _a(e, t), _a(e + "Capture", t);
    }
    function _a(e, t) {
      jt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), jt[e] = t;
      {
        var a = e.toLowerCase();
        fi[a] = e, e === "onDoubleClick" && (fi.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        tt.add(t[i]);
    }
    var fn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Jn = Object.prototype.hasOwnProperty;
    function Rr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Tr(e) {
      try {
        return Ln(e), !1;
      } catch {
        return !0;
      }
    }
    function Ln(e) {
      return "" + e;
    }
    function ka(e, t) {
      if (Tr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rr(e)), Ln(e);
    }
    function di(e) {
      if (Tr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(e)), Ln(e);
    }
    function er(e, t) {
      if (Tr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rr(e)), Ln(e);
    }
    function wr(e, t) {
      if (Tr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rr(e)), Ln(e);
    }
    function Ya(e) {
      if (Tr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rr(e)), Ln(e);
    }
    function xr(e) {
      if (Tr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rr(e)), Ln(e);
    }
    var Da = 0, br = 1, Oa = 2, Vn = 3, Yr = 4, Al = 5, Qa = 6, J = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Re = J + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Qe = new RegExp("^[" + J + "][" + Re + "]*$"), Dt = {}, Lt = {};
    function Rn(e) {
      return Jn.call(Lt, e) ? !0 : Jn.call(Dt, e) ? !1 : Qe.test(e) ? (Lt[e] = !0, !0) : (Dt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, a) {
      return t !== null ? t.type === Da : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function _r(e, t, a, i) {
      if (a !== null && a.type === Da)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Bt(e, t, a, i) {
      if (t === null || typeof t > "u" || _r(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Vn:
            return !t;
          case Yr:
            return t === !1;
          case Al:
            return isNaN(t);
          case Qa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function aa(e) {
      return Vt.hasOwnProperty(e) ? Vt[e] : null;
    }
    function Jt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Oa || t === Vn || t === Yr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Vt = {}, Hl = [
      "children",
      "dangerouslySetInnerHTML",
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Hl.forEach(function(e) {
      Vt[e] = new Jt(
        e,
        Da,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Vt[t] = new Jt(
        t,
        br,
        !1,
        a,
        null,
        !1,
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Vt[e] = new Jt(
        e,
        Oa,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Vt[e] = new Jt(
        e,
        Oa,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      "itemScope"
    ].forEach(function(e) {
      Vt[e] = new Jt(
        e,
        Vn,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(e) {
      Vt[e] = new Jt(
        e,
        Vn,
        !0,
        e,
        null,
        !1,
        !1
      );
    }), [
      "capture",
      "download"
    ].forEach(function(e) {
      Vt[e] = new Jt(
        e,
        Yr,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(e) {
      Vt[e] = new Jt(
        e,
        Qa,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Vt[e] = new Jt(
        e,
        Al,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    });
    var pi = /[\-\:]([a-z])/g, ku = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
    ].forEach(function(e) {
      var t = e.replace(pi, ku);
      Vt[t] = new Jt(
        t,
        br,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
    ].forEach(function(e) {
      var t = e.replace(pi, ku);
      Vt[t] = new Jt(
        t,
        br,
        !1,
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(e) {
      var t = e.replace(pi, ku);
      Vt[t] = new Jt(
        t,
        br,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Vt[e] = new Jt(
        e,
        br,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    });
    var $s = "xlinkHref";
    Vt[$s] = new Jt(
      "xlinkHref",
      br,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Vt[e] = new Jt(
        e,
        br,
        !1,
        e.toLowerCase(),
        null,
        !0,
        !0
      );
    });
    var Is = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Du = !1;
    function Ao(e) {
      !Du && Is.test(e) && (Du = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function La(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        ka(a, t), i.sanitizeURL && Ao("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Yr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Bt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Bt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Vn)
            return a;
          f = e.getAttribute(s);
        }
        return Bt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function $i(e, t, a, i) {
      {
        if (!Rn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return ka(a, t), u === "" + a ? a : u;
      }
    }
    function Wa(e, t, a, i) {
      var u = aa(t);
      if (!dn(t, u, i)) {
        if (Bt(t, a, u, i) && (a = null), i || u === null) {
          if (Rn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (ka(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Vn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, w;
          b === Vn || b === Yr && a === !0 ? w = "" : (ka(a, y), w = "" + a, u.sanitizeURL && Ao(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var Ii = Symbol.for("react.element"), Qr = Symbol.for("react.portal"), Ma = Symbol.for("react.fragment"), Yi = Symbol.for("react.strict_mode"), Qi = Symbol.for("react.profiler"), Ou = Symbol.for("react.provider"), Ho = Symbol.for("react.context"), ln = Symbol.for("react.forward_ref"), ia = Symbol.for("react.suspense"), Fl = Symbol.for("react.suspense_list"), Wi = Symbol.for("react.memo"), Pn = Symbol.for("react.lazy"), Ys = Symbol.for("react.scope"), Qs = Symbol.for("react.debug_trace_mode"), Fo = Symbol.for("react.offscreen"), Ws = Symbol.for("react.legacy_hidden"), Af = Symbol.for("react.cache"), Hf = Symbol.for("react.tracing_marker"), qt = Symbol.iterator, Ff = "@@iterator";
    function Na(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = qt && e[qt] || e[Ff];
      return typeof t == "function" ? t : null;
    }
    var We = Object.assign, Ga = 0, Gi, Lu, qi, kr, jo, or, Vo;
    function Po() {
    }
    Po.__reactDisabledLog = !0;
    function Gs() {
      {
        if (Ga === 0) {
          Gi = console.log, Lu = console.info, qi = console.warn, kr = console.error, jo = console.group, or = console.groupCollapsed, Vo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Po,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ga++;
      }
    }
    function Mu() {
      {
        if (Ga--, Ga === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: We({}, e, {
              value: Gi
            }),
            info: We({}, e, {
              value: Lu
            }),
            warn: We({}, e, {
              value: qi
            }),
            error: We({}, e, {
              value: kr
            }),
            group: We({}, e, {
              value: jo
            }),
            groupCollapsed: We({}, e, {
              value: or
            }),
            groupEnd: We({}, e, {
              value: Vo
            })
          });
        }
        Ga < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xi = A.ReactCurrentDispatcher, Ua;
    function sr(e, t, a) {
      {
        if (Ua === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Ua = i && i[1] || "";
          }
        return `
` + Ua + e;
      }
    }
    var Ki = !1, Zi;
    {
      var Ji = typeof WeakMap == "function" ? WeakMap : Map;
      Zi = new Ji();
    }
    function Nu(e, t) {
      if (!e || Ki)
        return "";
      {
        var a = Zi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ki = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Xi.current, Xi.current = null, Gs();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (N) {
              i = N;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (N) {
              i = N;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            i = N;
          }
          e();
        }
      } catch (N) {
        if (N && i && typeof N.stack == "string") {
          for (var p = N.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Zi.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Ki = !1, Xi.current = s, Mu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", L = w ? sr(w) : "";
      return typeof e == "function" && Zi.set(e, L), L;
    }
    function Uu(e, t, a) {
      return Nu(e, !0);
    }
    function vi(e, t, a) {
      return Nu(e, !1);
    }
    function jf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function qa(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Nu(e, jf(e));
      if (typeof e == "string")
        return sr(e);
      switch (e) {
        case ia:
          return sr("Suspense");
        case Fl:
          return sr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ln:
            return vi(e.render);
          case Wi:
            return qa(e.type, t, a);
          case Pn: {
            var i = e, u = i._payload, s = i._init;
            try {
              return qa(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function yt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ne:
          return sr(e.type);
        case Zt:
          return sr("Lazy");
        case we:
          return sr("Suspense");
        case xt:
          return sr("SuspenseList");
        case fe:
        case dt:
        case He:
          return vi(e.type);
        case Be:
          return vi(e.type.render);
        case se:
          return Uu(e.type);
        default:
          return "";
      }
    }
    function zu(e) {
      try {
        var t = "", a = e;
        do
          t += yt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function jl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Au(e) {
      return e.displayName || "Context";
    }
    function ct(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ma:
          return "Fragment";
        case Qr:
          return "Portal";
        case Qi:
          return "Profiler";
        case Yi:
          return "StrictMode";
        case ia:
          return "Suspense";
        case Fl:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ho:
            var t = e;
            return Au(t) + ".Consumer";
          case Ou:
            var a = e;
            return Au(a._context) + ".Provider";
          case ln:
            return jl(e, e.render, "ForwardRef");
          case Wi:
            var i = e.displayName || null;
            return i !== null ? i : ct(e.type) || "Memo";
          case Pn: {
            var u = e, s = u._payload, f = u._init;
            try {
              return ct(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Hu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Fu(e) {
      return e.displayName || "Context";
    }
    function Fe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Gt:
          return "Cache";
        case Dn:
          var i = a;
          return Fu(i) + ".Consumer";
        case mt:
          var u = a;
          return Fu(u._context) + ".Provider";
        case Ft:
          return "DehydratedFragment";
        case Be:
          return Hu(a, a.render, "ForwardRef");
        case st:
          return "Fragment";
        case ne:
          return a;
        case de:
          return "Portal";
        case te:
          return "Root";
        case Ae:
          return "Text";
        case Zt:
          return ct(a);
        case Xe:
          return a === Yi ? "StrictMode" : "Mode";
        case Ye:
          return "Offscreen";
        case rt:
          return "Profiler";
        case Cn:
          return "Scope";
        case we:
          return "Suspense";
        case xt:
          return "SuspenseList";
        case Tt:
          return "TracingMarker";
        case se:
        case fe:
        case On:
        case dt:
        case Ke:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Vl = A.ReactDebugCurrentFrame, en = null, Dr = !1;
    function cr() {
      {
        if (en === null)
          return null;
        var e = en._debugOwner;
        if (e !== null && typeof e < "u")
          return Fe(e);
      }
      return null;
    }
    function el() {
      return en === null ? "" : zu(en);
    }
    function un() {
      Vl.getCurrentStack = null, en = null, Dr = !1;
    }
    function bt(e) {
      Vl.getCurrentStack = e === null ? null : el, en = e, Dr = !1;
    }
    function qs() {
      return en;
    }
    function Or(e) {
      Dr = e;
    }
    function Mn(e) {
      return "" + e;
    }
    function Xa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return xr(e), e;
        default:
          return "";
      }
    }
    var Xs = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function hi(e, t) {
      Xs[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function tl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Ks(e) {
      return e._valueTracker;
    }
    function la(e) {
      e._valueTracker = null;
    }
    function nl(e) {
      var t = "";
      return e && (tl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function rl(e) {
      var t = tl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      xr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            xr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            xr(p), i = "" + p;
          },
          stopTracking: function() {
            la(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ua(e) {
      Ks(e) || (e._valueTracker = rl(e));
    }
    function ju(e) {
      if (!e)
        return !1;
      var t = Ks(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = nl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function al(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var il = !1, Pl = !1, Vu = !1, Bo = !1;
    function za(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = We({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i != null ? i : a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      hi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Pl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", cr() || "A component", t.type), Pl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !il && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", cr() || "A component", t.type), il = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Xa(t.value != null ? t.value : i),
        controlled: za(t)
      };
    }
    function M(e, t) {
      var a = e, i = t.checked;
      i != null && Wa(a, "checked", i, !1);
    }
    function H(e, t) {
      var a = e;
      {
        var i = za(t);
        !a._wrapperState.controlled && i && !Bo && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Bo = !0), a._wrapperState.controlled && !i && !Vu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Vu = !0);
      }
      M(e, t);
      var u = Xa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || a.value != u) && (a.value = Mn(u)) : a.value !== Mn(u) && (a.value = Mn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? be(a, t.type, u) : t.hasOwnProperty("defaultValue") && be(a, t.type, Xa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function G(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Mn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function ke(e, t) {
      var a = e;
      H(a, t), ee(a, t);
    }
    function ee(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        ka(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Ch(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ju(f), H(f, p);
          }
        }
      }
    }
    function be(e, t, a) {
      (t !== "number" || al(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Mn(e._wrapperState.initialValue) : e.defaultValue !== Mn(a) && (e.defaultValue = Mn(a)));
    }
    var Ge = !1, ft = !1, Ut = !1;
    function Ot(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? z.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ft || (ft = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ut || (Ut = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ge && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ge = !0);
    }
    function zt(e, t) {
      t.value != null && e.setAttribute("value", Mn(Xa(t.value)));
    }
    var Pt = Array.isArray;
    function nt(e) {
      return Pt(e);
    }
    var mi;
    mi = !1;
    function Pu() {
      var e = cr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var $o = ["value", "defaultValue"];
    function Vf(e) {
      {
        hi("select", e);
        for (var t = 0; t < $o.length; t++) {
          var a = $o[t];
          if (e[a] != null) {
            var i = nt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Pu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Pu());
          }
        }
      }
    }
    function Aa(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Mn(Xa(a)), b = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          b === null && !u[w].disabled && (b = u[w]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function Io(e, t) {
      return We({}, t, {
        value: void 0
      });
    }
    function Yo(e, t) {
      var a = e;
      Vf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !mi && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), mi = !0);
    }
    function Pf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Aa(a, !!t.multiple, i, !1) : t.defaultValue != null && Aa(a, !!t.multiple, t.defaultValue, !0);
    }
    function Hm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Aa(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Aa(a, !!t.multiple, t.defaultValue, !0) : Aa(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Fm(e, t) {
      var a = e, i = t.value;
      i != null && Aa(a, !!t.multiple, i, !1);
    }
    var Bf = !1;
    function $f(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = We({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Mn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xp(e, t) {
      var a = e;
      hi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Bf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", cr() || "A component"), Bf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (nt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Xa(i)
      };
    }
    function Kp(e, t) {
      var a = e, i = Xa(t.value), u = Xa(t.defaultValue);
      if (i != null) {
        var s = Mn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Mn(u));
    }
    function Zp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function If(e, t) {
      Kp(e, t);
    }
    var yi = "http://www.w3.org/1999/xhtml", jm = "http://www.w3.org/1998/Math/MathML", Yf = "http://www.w3.org/2000/svg";
    function Zs(e) {
      switch (e) {
        case "svg":
          return Yf;
        case "math":
          return jm;
        default:
          return yi;
      }
    }
    function Qf(e, t) {
      return e == null || e === yi ? Zs(t) : e === Yf && t === "foreignObject" ? yi : e;
    }
    var Vm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Js, Jp = Vm(function(e, t) {
      if (e.namespaceURI === Yf && !("innerHTML" in e)) {
        Js = Js || document.createElement("div"), Js.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Js.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Lr = 1, gi = 3, mn = 8, Ha = 9, Bl = 11, ec = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === gi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ev = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Bu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function tv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var nv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Bu).forEach(function(e) {
      nv.forEach(function(t) {
        Bu[tv(t, e)] = Bu[e];
      });
    });
    function tc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Bu.hasOwnProperty(e) && Bu[e]) ? t + "px" : (wr(t, e), ("" + t).trim());
    }
    var $u = /([A-Z])/g, Pm = /^ms-/;
    function Bm(e) {
      return e.replace($u, "-$1").toLowerCase().replace(Pm, "-ms-");
    }
    var rv = function() {
    };
    {
      var av = /^(?:webkit|moz|o)[A-Z]/, iv = /^-ms-/, Qo = /-(.)/g, Iu = /;\s*$/, Yu = {}, Qu = {}, lv = !1, Wf = !1, Gf = function(e) {
        return e.replace(Qo, function(t, a) {
          return a.toUpperCase();
        });
      }, qf = function(e) {
        Yu.hasOwnProperty(e) && Yu[e] || (Yu[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          Gf(e.replace(iv, "ms-"))
        ));
      }, uv = function(e) {
        Yu.hasOwnProperty(e) && Yu[e] || (Yu[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ov = function(e, t) {
        Qu.hasOwnProperty(t) && Qu[t] || (Qu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Iu, "")));
      }, sv = function(e, t) {
        lv || (lv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, $m = function(e, t) {
        Wf || (Wf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      rv = function(e, t) {
        e.indexOf("-") > -1 ? qf(e) : av.test(e) ? uv(e) : Iu.test(t) && ov(e, t), typeof t == "number" && (isNaN(t) ? sv(e, t) : isFinite(t) || $m(e, t));
      };
    }
    var Im = rv;
    function Ym(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (!!e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Bm(i)) + ":", t += tc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function cv(e, t) {
      var a = e.style;
      for (var i in t)
        if (!!t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Im(i, t[i]);
          var s = tc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Qm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function oa(e) {
      var t = {};
      for (var a in e)
        for (var i = ev[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Wo(e, t) {
      {
        if (!t)
          return;
        var a = oa(e), i = oa(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Qm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var fv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    }, dv = We({
      menuitem: !0
    }, fv), pv = "__html";
    function nc(e, t) {
      if (!!t) {
        if (dv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(pv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Si(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var rc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, vv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Fa = {}, Xf = new RegExp("^(aria)-[" + Re + "]*$"), Go = new RegExp("^(aria)[A-Z][" + Re + "]*$");
    function Kf(e, t) {
      {
        if (Jn.call(Fa, t) && Fa[t])
          return !0;
        if (Go.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Fa[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Fa[t] = !0, !0;
        }
        if (Xf.test(t)) {
          var u = t.toLowerCase(), s = vv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Fa[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Fa[t] = !0, !0;
        }
      }
      return !0;
    }
    function hv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Kf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ac(e, t) {
      Si(e, t) || hv(e, t);
    }
    var $l = !1;
    function Zf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !$l && ($l = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Jf = function() {
    };
    {
      var Nn = {}, ed = /^on./, mv = /^on[^A-Z]/, yv = new RegExp("^(aria)-[" + Re + "]*$"), gv = new RegExp("^(aria)[A-Z][" + Re + "]*$");
      Jf = function(e, t, a, i) {
        if (Jn.call(Nn, t) && Nn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Nn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Nn[t] = !0, !0;
          if (ed.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Nn[t] = !0, !0;
        } else if (ed.test(t))
          return mv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Nn[t] = !0, !0;
        if (yv.test(t) || gv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Nn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Nn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Nn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Nn[t] = !0, !0;
        var v = aa(t), y = v !== null && v.type === Da;
        if (rc.hasOwnProperty(u)) {
          var g = rc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Nn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Nn[t] = !0, !0;
        return typeof a == "boolean" && _r(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Nn[t] = !0, !0) : y ? !0 : _r(t, a, v, !1) ? (Nn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Vn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Nn[t] = !0), !0);
      };
    }
    var Sv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Jf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Ev(e, t, a) {
      Si(e, t) || Sv(e, t, a);
    }
    var Ei = 1, qo = 1 << 1, Il = 1 << 2, Wm = Ei | qo | Il, Xo = null;
    function Ko(e) {
      Xo !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Xo = e;
    }
    function Gm() {
      Xo === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Xo = null;
    }
    function Cv(e) {
      return e === Xo;
    }
    function ic(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === gi ? t.parentNode : t;
    }
    var At = null, ll = null, Ci = null;
    function Wu(e) {
      var t = Eo(e);
      if (!!t) {
        if (typeof At != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Ch(a);
          At(t.stateNode, t.type, i);
        }
      }
    }
    function Rv(e) {
      At = e;
    }
    function lc(e) {
      ll ? Ci ? Ci.push(e) : Ci = [e] : ll = e;
    }
    function Zo() {
      return ll !== null || Ci !== null;
    }
    function Jo() {
      if (!!ll) {
        var e = ll, t = Ci;
        if (ll = null, Ci = null, Wu(e), t)
          for (var a = 0; a < t.length; a++)
            Wu(t[a]);
      }
    }
    var Yl = function(e, t) {
      return e(t);
    }, td = function() {
    }, nd = !1;
    function qm() {
      var e = Zo();
      e && (td(), Jo());
    }
    function rd(e, t, a) {
      if (nd)
        return e(t, a);
      nd = !0;
      try {
        return Yl(e, t, a);
      } finally {
        nd = !1, qm();
      }
    }
    function uc(e, t, a) {
      Yl = e, td = a;
    }
    function oc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ad(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && oc(t));
        default:
          return !1;
      }
    }
    function Ql(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Ch(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ad(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var es = !1;
    if (fn)
      try {
        var Wl = {};
        Object.defineProperty(Wl, "passive", {
          get: function() {
            es = !0;
          }
        }), window.addEventListener("test", Wl, Wl), window.removeEventListener("test", Wl, Wl);
      } catch {
        es = !1;
      }
    function Tv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var id = Tv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ld = document.createElement("react");
      id = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, L = window.event, N = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          ld.removeEventListener(j, xe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = L);
        }
        var ue = Array.prototype.slice.call(arguments, 3);
        function xe() {
          b = !0, F(), a.apply(i, ue), w = !1;
        }
        var Se, ut = !1, et = !1;
        function k(D) {
          if (Se = D.error, ut = !0, Se === null && D.colno === 0 && D.lineno === 0 && (et = !0), D.defaultPrevented && Se != null && typeof Se == "object")
            try {
              Se._suppressLogging = !0;
            } catch {
            }
        }
        var j = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), ld.addEventListener(j, xe, !1), g.initEvent(j, !1, !1), ld.dispatchEvent(g), N && Object.defineProperty(window, "event", N), b && w && (ut ? et && (Se = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Se = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Se)), window.removeEventListener("error", k), !b)
          return F(), Tv.apply(this, arguments);
      };
    }
    var Xm = id, ul = !1, ja = null, ts = !1, ol = null, Ka = {
      onError: function(e) {
        ul = !0, ja = e;
      }
    };
    function Gl(e, t, a, i, u, s, f, p, v) {
      ul = !1, ja = null, Xm.apply(Ka, arguments);
    }
    function Ri(e, t, a, i, u, s, f, p, v) {
      if (Gl.apply(this, arguments), ul) {
        var y = od();
        ts || (ts = !0, ol = y);
      }
    }
    function ud() {
      if (ts) {
        var e = ol;
        throw ts = !1, ol = null, e;
      }
    }
    function Km() {
      return ul;
    }
    function od() {
      if (ul) {
        var e = ja;
        return ul = !1, ja = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function sa(e) {
      return e._reactInternals;
    }
    function ns(e) {
      return e._reactInternals !== void 0;
    }
    function Gu(e, t) {
      e._reactInternals = t;
    }
    var Te = 0, sl = 1, $t = 2, $e = 4, wt = 16, _t = 32, Za = 64, Ue = 128, on = 256, Mr = 512, ca = 1024, Xt = 2048, fa = 4096, cl = 8192, rs = 16384, sc = Xt | $e | Za | Mr | ca | rs, wv = 32767, Wr = 32768, Un = 65536, as = 131072, sd = 1048576, cd = 2097152, Nr = 4194304, fl = 8388608, Ur = 16777216, ql = 33554432, qu = $e | ca | 0, zr = $t | $e | wt | _t | Mr | fa | cl, tr = $e | Za | Mr | cl, da = Xt | wt, Bn = Nr | fl | cd, Ti = A.ReactCurrentOwner;
    function Gr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & ($t | fa)) !== Te && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function fd(e) {
      if (e.tag === we) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function cc(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function dd(e) {
      return Gr(e) === e;
    }
    function qr(e) {
      {
        var t = Ti.current;
        if (t !== null && t.tag === se) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Fe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = sa(e);
      return u ? Gr(u) === u : !1;
    }
    function Ar(e) {
      if (Gr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function It(e) {
      var t = e.alternate;
      if (!t) {
        var a = Gr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Ar(s), e;
            if (v === u)
              return Ar(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function pa(e) {
      var t = It(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === ne || e.tag === Ae)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = pd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function xv(e) {
      var t = It(e);
      return t !== null ? fc(t) : null;
    }
    function fc(e) {
      if (e.tag === ne || e.tag === Ae)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== de) {
          var a = fc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var dc = $.unstable_scheduleCallback, bv = $.unstable_cancelCallback, pc = $.unstable_shouldYield, _v = $.unstable_requestPaint, tn = $.unstable_now, vd = $.unstable_getCurrentPriorityLevel, vc = $.unstable_ImmediatePriority, Xr = $.unstable_UserBlockingPriority, Ja = $.unstable_NormalPriority, hc = $.unstable_LowPriority, dl = $.unstable_IdlePriority, hd = $.unstable_yieldValue, md = $.unstable_setDisableYieldValue, pl = null, zn = null, K = null, pn = !1, $n = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        pt && (e = We({}, e, {
          getLaneLabelMap: hl,
          injectProfilingHooks: xi
        })), pl = t.inject(e), zn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function kv(e, t) {
      if (zn && typeof zn.onScheduleFiberRoot == "function")
        try {
          zn.onScheduleFiberRoot(pl, e, t);
        } catch (a) {
          pn || (pn = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function wi(e, t) {
      if (zn && typeof zn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ue) === Ue;
          if (Ze) {
            var i;
            switch (t) {
              case nr:
                i = vc;
                break;
              case In:
                i = Xr;
                break;
              case _i:
                i = Ja;
                break;
              case ps:
                i = dl;
                break;
              default:
                i = Ja;
                break;
            }
            zn.onCommitFiberRoot(pl, e, i, a);
          }
        } catch (u) {
          pn || (pn = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function vl(e) {
      if (zn && typeof zn.onPostCommitFiberRoot == "function")
        try {
          zn.onPostCommitFiberRoot(pl, e);
        } catch (t) {
          pn || (pn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function gd(e) {
      if (zn && typeof zn.onCommitFiberUnmount == "function")
        try {
          zn.onCommitFiberUnmount(pl, e);
        } catch (t) {
          pn || (pn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Tn(e) {
      if (typeof hd == "function" && (md(e), Ct(e)), zn && typeof zn.setStrictMode == "function")
        try {
          zn.setStrictMode(pl, e);
        } catch (t) {
          pn || (pn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function xi(e) {
      K = e;
    }
    function hl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Yt; a++) {
          var i = Zm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function mc(e) {
      K !== null && typeof K.markCommitStarted == "function" && K.markCommitStarted(e);
    }
    function Sd() {
      K !== null && typeof K.markCommitStopped == "function" && K.markCommitStopped();
    }
    function ml(e) {
      K !== null && typeof K.markComponentRenderStarted == "function" && K.markComponentRenderStarted(e);
    }
    function Xl() {
      K !== null && typeof K.markComponentRenderStopped == "function" && K.markComponentRenderStopped();
    }
    function Dv(e) {
      K !== null && typeof K.markComponentPassiveEffectMountStarted == "function" && K.markComponentPassiveEffectMountStarted(e);
    }
    function Ed() {
      K !== null && typeof K.markComponentPassiveEffectMountStopped == "function" && K.markComponentPassiveEffectMountStopped();
    }
    function yc(e) {
      K !== null && typeof K.markComponentPassiveEffectUnmountStarted == "function" && K.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ov() {
      K !== null && typeof K.markComponentPassiveEffectUnmountStopped == "function" && K.markComponentPassiveEffectUnmountStopped();
    }
    function Lv(e) {
      K !== null && typeof K.markComponentLayoutEffectMountStarted == "function" && K.markComponentLayoutEffectMountStarted(e);
    }
    function Mv() {
      K !== null && typeof K.markComponentLayoutEffectMountStopped == "function" && K.markComponentLayoutEffectMountStopped();
    }
    function gc(e) {
      K !== null && typeof K.markComponentLayoutEffectUnmountStarted == "function" && K.markComponentLayoutEffectUnmountStarted(e);
    }
    function Xu() {
      K !== null && typeof K.markComponentLayoutEffectUnmountStopped == "function" && K.markComponentLayoutEffectUnmountStopped();
    }
    function Sc(e, t, a) {
      K !== null && typeof K.markComponentErrored == "function" && K.markComponentErrored(e, t, a);
    }
    function Nv(e, t, a) {
      K !== null && typeof K.markComponentSuspended == "function" && K.markComponentSuspended(e, t, a);
    }
    function Uv(e) {
      K !== null && typeof K.markLayoutEffectsStarted == "function" && K.markLayoutEffectsStarted(e);
    }
    function Ku() {
      K !== null && typeof K.markLayoutEffectsStopped == "function" && K.markLayoutEffectsStopped();
    }
    function zv(e) {
      K !== null && typeof K.markPassiveEffectsStarted == "function" && K.markPassiveEffectsStarted(e);
    }
    function is() {
      K !== null && typeof K.markPassiveEffectsStopped == "function" && K.markPassiveEffectsStopped();
    }
    function Va(e) {
      K !== null && typeof K.markRenderStarted == "function" && K.markRenderStarted(e);
    }
    function ls() {
      K !== null && typeof K.markRenderYielded == "function" && K.markRenderYielded();
    }
    function Zu() {
      K !== null && typeof K.markRenderStopped == "function" && K.markRenderStopped();
    }
    function Kl(e) {
      K !== null && typeof K.markRenderScheduled == "function" && K.markRenderScheduled(e);
    }
    function Cd(e, t) {
      K !== null && typeof K.markForceUpdateScheduled == "function" && K.markForceUpdateScheduled(e, t);
    }
    function yl(e, t) {
      K !== null && typeof K.markStateUpdateScheduled == "function" && K.markStateUpdateScheduled(e, t);
    }
    var _e = 0, qe = 1, De = 2, nn = 8, va = 16, Ec = Math.clz32 ? Math.clz32 : Zl, Cc = Math.log, Rd = Math.LN2;
    function Zl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Cc(t) / Rd | 0) | 0;
    }
    var Yt = 31, V = 0, it = 0, Oe = 1, ei = 2, Kr = 4, Jl = 8, Qt = 16, eu = 32, gl = 4194240, tu = 64, ha = 128, Hr = 256, nu = 512, us = 1024, os = 2048, Rc = 4096, Tc = 8192, wc = 16384, xc = 32768, bc = 65536, _c = 131072, kc = 262144, Dc = 524288, ru = 1048576, Oc = 2097152, au = 130023424, bi = 4194304, Lc = 8388608, ss = 16777216, Mc = 33554432, Nc = 67108864, Td = bi, Ju = 134217728, Uc = 268435455, eo = 268435456, Sl = 536870912, Fr = 1073741824;
    function Zm(e) {
      {
        if (e & Oe)
          return "Sync";
        if (e & ei)
          return "InputContinuousHydration";
        if (e & Kr)
          return "InputContinuous";
        if (e & Jl)
          return "DefaultHydration";
        if (e & Qt)
          return "Default";
        if (e & eu)
          return "TransitionHydration";
        if (e & gl)
          return "Transition";
        if (e & au)
          return "Retry";
        if (e & Ju)
          return "SelectiveHydration";
        if (e & eo)
          return "IdleHydration";
        if (e & Sl)
          return "Idle";
        if (e & Fr)
          return "Offscreen";
      }
    }
    var Ht = -1, zc = tu, Ac = bi;
    function to(e) {
      switch (yn(e)) {
        case Oe:
          return Oe;
        case ei:
          return ei;
        case Kr:
          return Kr;
        case Jl:
          return Jl;
        case Qt:
          return Qt;
        case eu:
          return eu;
        case tu:
        case ha:
        case Hr:
        case nu:
        case us:
        case os:
        case Rc:
        case Tc:
        case wc:
        case xc:
        case bc:
        case _c:
        case kc:
        case Dc:
        case ru:
        case Oc:
          return e & gl;
        case bi:
        case Lc:
        case ss:
        case Mc:
        case Nc:
          return e & au;
        case Ju:
          return Ju;
        case eo:
          return eo;
        case Sl:
          return Sl;
        case Fr:
          return Fr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function cs(e, t) {
      var a = e.pendingLanes;
      if (a === V)
        return V;
      var i = V, u = e.suspendedLanes, s = e.pingedLanes, f = a & Uc;
      if (f !== V) {
        var p = f & ~u;
        if (p !== V)
          i = to(p);
        else {
          var v = f & s;
          v !== V && (i = to(v));
        }
      } else {
        var y = a & ~u;
        y !== V ? i = to(y) : s !== V && (i = to(s));
      }
      if (i === V)
        return V;
      if (t !== V && t !== i && (t & u) === V) {
        var g = yn(i), b = yn(t);
        if (g >= b || g === Qt && (b & gl) !== V)
          return t;
      }
      (i & Kr) !== V && (i |= a & Qt);
      var w = e.entangledLanes;
      if (w !== V)
        for (var L = e.entanglements, N = i & w; N > 0; ) {
          var F = El(N), ue = 1 << F;
          i |= L[F], N &= ~ue;
        }
      return i;
    }
    function Av(e, t) {
      for (var a = e.eventTimes, i = Ht; t > 0; ) {
        var u = El(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Hc(e, t) {
      switch (e) {
        case Oe:
        case ei:
        case Kr:
          return t + 250;
        case Jl:
        case Qt:
        case eu:
        case tu:
        case ha:
        case Hr:
        case nu:
        case us:
        case os:
        case Rc:
        case Tc:
        case wc:
        case xc:
        case bc:
        case _c:
        case kc:
        case Dc:
        case ru:
        case Oc:
          return t + 5e3;
        case bi:
        case Lc:
        case ss:
        case Mc:
        case Nc:
          return Ht;
        case Ju:
        case eo:
        case Sl:
        case Fr:
          return Ht;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Ht;
      }
    }
    function Jm(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = El(f), v = 1 << p, y = s[p];
        y === Ht ? ((v & i) === V || (v & u) !== V) && (s[p] = Hc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ey(e) {
      return to(e.pendingLanes);
    }
    function wd(e) {
      var t = e.pendingLanes & ~Fr;
      return t !== V ? t : t & Fr ? Fr : V;
    }
    function no(e) {
      return (e & Oe) !== V;
    }
    function fs(e) {
      return (e & Uc) !== V;
    }
    function Fc(e) {
      return (e & au) === e;
    }
    function ty(e) {
      var t = Oe | Kr | Qt;
      return (e & t) === V;
    }
    function Hv(e) {
      return (e & gl) === e;
    }
    function ds(e, t) {
      var a = ei | Kr | Jl | Qt;
      return (t & a) !== V;
    }
    function Fv(e, t) {
      return (t & e.expiredLanes) !== V;
    }
    function xd(e) {
      return (e & gl) !== V;
    }
    function bd() {
      var e = zc;
      return zc <<= 1, (zc & gl) === V && (zc = tu), e;
    }
    function ny() {
      var e = Ac;
      return Ac <<= 1, (Ac & au) === V && (Ac = bi), e;
    }
    function yn(e) {
      return e & -e;
    }
    function wn(e) {
      return yn(e);
    }
    function El(e) {
      return 31 - Ec(e);
    }
    function jc(e) {
      return El(e);
    }
    function jr(e, t) {
      return (e & t) !== V;
    }
    function iu(e, t) {
      return (e & t) === t;
    }
    function Ie(e, t) {
      return e | t;
    }
    function ro(e, t) {
      return e & ~t;
    }
    function _d(e, t) {
      return e & t;
    }
    function jv(e) {
      return e;
    }
    function Vv(e, t) {
      return e !== it && e < t ? e : t;
    }
    function Vc(e) {
      for (var t = [], a = 0; a < Yt; a++)
        t.push(e);
      return t;
    }
    function lu(e, t, a) {
      e.pendingLanes |= t, t !== Sl && (e.suspendedLanes = V, e.pingedLanes = V);
      var i = e.eventTimes, u = jc(t);
      i[u] = a;
    }
    function kd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = El(i), s = 1 << u;
        a[u] = Ht, i &= ~s;
      }
    }
    function Dd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Od(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = V, e.pingedLanes = V, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = El(f), v = 1 << p;
        i[p] = V, u[p] = Ht, s[p] = Ht, f &= ~v;
      }
    }
    function ao(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = El(u), f = 1 << s;
        f & t | i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ry(e, t) {
      var a = yn(t), i;
      switch (a) {
        case Kr:
          i = ei;
          break;
        case Qt:
          i = Jl;
          break;
        case tu:
        case ha:
        case Hr:
        case nu:
        case us:
        case os:
        case Rc:
        case Tc:
        case wc:
        case xc:
        case bc:
        case _c:
        case kc:
        case Dc:
        case ru:
        case Oc:
        case bi:
        case Lc:
        case ss:
        case Mc:
        case Nc:
          i = eu;
          break;
        case Sl:
          i = eo;
          break;
        default:
          i = it;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== it ? it : i;
    }
    function Ld(e, t, a) {
      if (!!$n)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = jc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Pc(e, t) {
      if (!!$n)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = jc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Md(e, t) {
      return null;
    }
    var nr = Oe, In = Kr, _i = Qt, ps = Sl, uu = it;
    function ma() {
      return uu;
    }
    function xn(e) {
      uu = e;
    }
    function vs(e, t) {
      var a = uu;
      try {
        return uu = e, t();
      } finally {
        uu = a;
      }
    }
    function rr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ay(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Nd(e, t) {
      return e !== 0 && e < t;
    }
    function hs(e) {
      var t = yn(e);
      return Nd(nr, t) ? Nd(In, t) ? fs(t) ? _i : ps : In : nr;
    }
    function bn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Pv;
    function ce(e) {
      Pv = e;
    }
    function io(e) {
      Pv(e);
    }
    var ms;
    function Bv(e) {
      ms = e;
    }
    var $v;
    function ys(e) {
      $v = e;
    }
    var gs;
    function Ud(e) {
      gs = e;
    }
    var zd;
    function Iv(e) {
      zd = e;
    }
    var Bc = !1, lo = [], ti = null, Kt = null, An = null, ya = /* @__PURE__ */ new Map(), uo = /* @__PURE__ */ new Map(), ki = [], Pa = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Yv(e) {
      return Pa.indexOf(e) > -1;
    }
    function ni(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Qv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ti = null;
          break;
        case "dragenter":
        case "dragleave":
          Kt = null;
          break;
        case "mouseover":
        case "mouseout":
          An = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ya.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          uo.delete(i);
          break;
        }
      }
    }
    function oo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ni(t, a, i, u, s);
        if (t !== null) {
          var p = Eo(t);
          p !== null && ms(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Wv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return ti = oo(ti, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Kt = oo(Kt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return An = oo(An, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return ya.set(y, oo(ya.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return uo.set(b, oo(uo.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Ad(e) {
      var t = _s(e.target);
      if (t !== null) {
        var a = Gr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === we) {
            var u = fd(a);
            if (u !== null) {
              e.blockedOn = u, zd(e.priority, function() {
                $v(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (bn(s)) {
              e.blockedOn = cc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Gv(e) {
      for (var t = gs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < ki.length && Nd(t, ki[i].priority); i++)
        ;
      ki.splice(i, 0, a), i === 0 && Ad(a);
    }
    function $c(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = ou(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Ko(s), u.target.dispatchEvent(s), Gm();
        } else {
          var f = Eo(i);
          return f !== null && ms(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ss(e, t, a) {
      $c(e) && a.delete(t);
    }
    function Hd() {
      Bc = !1, ti !== null && $c(ti) && (ti = null), Kt !== null && $c(Kt) && (Kt = null), An !== null && $c(An) && (An = null), ya.forEach(Ss), uo.forEach(Ss);
    }
    function ar(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Bc || (Bc = !0, $.unstable_scheduleCallback($.unstable_NormalPriority, Hd)));
    }
    function Je(e) {
      if (lo.length > 0) {
        ar(lo[0], e);
        for (var t = 1; t < lo.length; t++) {
          var a = lo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ti !== null && ar(ti, e), Kt !== null && ar(Kt, e), An !== null && ar(An, e);
      var i = function(p) {
        return ar(p, e);
      };
      ya.forEach(i), uo.forEach(i);
      for (var u = 0; u < ki.length; u++) {
        var s = ki[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; ki.length > 0; ) {
        var f = ki[0];
        if (f.blockedOn !== null)
          break;
        Ad(f), f.blockedOn === null && ki.shift();
      }
    }
    var rn = A.ReactCurrentBatchConfig, sn = !0;
    function Hn(e) {
      sn = !!e;
    }
    function Zr() {
      return sn;
    }
    function so(e, t, a) {
      var i = fr(t), u;
      switch (i) {
        case nr:
          u = _n;
          break;
        case In:
          u = Es;
          break;
        case _i:
        default:
          u = Di;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function _n(e, t, a, i) {
      var u = ma(), s = rn.transition;
      rn.transition = null;
      try {
        xn(nr), Di(e, t, a, i);
      } finally {
        xn(u), rn.transition = s;
      }
    }
    function Es(e, t, a, i) {
      var u = ma(), s = rn.transition;
      rn.transition = null;
      try {
        xn(In), Di(e, t, a, i);
      } finally {
        xn(u), rn.transition = s;
      }
    }
    function Di(e, t, a, i) {
      !sn || Ic(e, t, a, i);
    }
    function Ic(e, t, a, i) {
      var u = ou(e, t, a, i);
      if (u === null) {
        wy(e, t, i, co, a), Qv(e, i);
        return;
      }
      if (Wv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Qv(e, i), t & Il && Yv(e)) {
        for (; u !== null; ) {
          var s = Eo(u);
          s !== null && io(s);
          var f = ou(e, t, a, i);
          if (f === null && wy(e, t, i, co, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      wy(e, t, i, null, a);
    }
    var co = null;
    function ou(e, t, a, i) {
      co = null;
      var u = ic(i), s = _s(u);
      if (s !== null) {
        var f = Gr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === we) {
            var v = fd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (bn(y))
              return cc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return co = s, null;
    }
    function fr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return nr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return In;
        case "message": {
          var t = vd();
          switch (t) {
            case vc:
              return nr;
            case Xr:
              return In;
            case Ja:
            case hc:
              return _i;
            case dl:
              return ps;
            default:
              return _i;
          }
        }
        default:
          return _i;
      }
    }
    function Fd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function fo(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Oi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Yc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var su = null, ri = null, Cl = null;
    function Rl(e) {
      return su = e, ri = Wc(), !0;
    }
    function Qc() {
      su = null, ri = null, Cl = null;
    }
    function po() {
      if (Cl)
        return Cl;
      var e, t = ri, a = t.length, i, u = Wc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Cl = u.slice(e, p), Cl;
    }
    function Wc() {
      return "value" in su ? su.value : su.textContent;
    }
    function cu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function fu() {
      return !0;
    }
    function ir() {
      return !1;
    }
    function gn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (!!e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = fu : this.isDefaultPrevented = ir, this.isPropagationStopped = ir, this;
      }
      return We(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          !a || (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = fu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          !a || (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = fu);
        },
        persist: function() {
        },
        isPersistent: fu
      }), t;
    }
    var lr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ur = gn(lr), vo = We({}, lr, {
      view: 0,
      detail: 0
    }), jd = gn(vo), Cs, Vd, ga;
    function qv(e) {
      e !== ga && (ga && e.type === "mousemove" ? (Cs = e.screenX - ga.screenX, Vd = e.screenY - ga.screenY) : (Cs = 0, Vd = 0), ga = e);
    }
    var ho = We({}, vo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Xc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (qv(e), Cs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Vd;
      }
    }), Tl = gn(ho), Pd = We({}, ho, {
      dataTransfer: 0
    }), du = gn(Pd), Xv = We({}, vo, {
      relatedTarget: 0
    }), Gc = gn(Xv), Bd = We({}, lr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), qc = gn(Bd), iy = We({}, lr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ly = gn(iy), Kv = We({}, lr, {
      data: 0
    }), $d = gn(Kv), pu = $d, uy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, mo = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Zv(e) {
      if (e.key) {
        var t = uy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = cu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? mo[e.keyCode] || "Unidentified" : "";
    }
    var cn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function oy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = cn[e];
      return i ? !!a[i] : !1;
    }
    function Xc(e) {
      return oy;
    }
    var sy = We({}, vo, {
      key: Zv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Xc,
      charCode: function(e) {
        return e.type === "keypress" ? cu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? cu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), cy = gn(sy), Jv = We({}, ho, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Id = gn(Jv), fy = We({}, vo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xc
    }), Sa = gn(fy), Yd = We({}, lr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dy = gn(Yd), wl = We({}, ho, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Kc = gn(wl), vu = [9, 13, 27, 32], Rs = 229, Ts = fn && "CompositionEvent" in window, hu = null;
    fn && "documentMode" in document && (hu = document.documentMode);
    var py = fn && "TextEvent" in window && !hu, Zc = fn && (!Ts || hu && hu > 8 && hu <= 11), eh = 32, Qd = String.fromCharCode(eh);
    function th() {
      Cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Cr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Cr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Cr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ws = !1;
    function Jc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
    }
    function nh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Wd(e, t) {
      return e === "keydown" && t.keyCode === Rs;
    }
    function rh(e, t) {
      switch (e) {
        case "keyup":
          return vu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Rs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ef(e) {
      return e.locale === "ko";
    }
    var Li = !1;
    function qd(e, t, a, i, u) {
      var s, f;
      if (Ts ? s = nh(t) : Li ? rh(t, i) && (s = "onCompositionEnd") : Wd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Zc && !ef(i) && (!Li && s === "onCompositionStart" ? Li = Rl(u) : s === "onCompositionEnd" && Li && (f = po()));
      var p = oh(a, s);
      if (p.length > 0) {
        var v = new $d(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Gd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function tf(e, t) {
      switch (e) {
        case "compositionend":
          return Gd(t);
        case "keypress":
          var a = t.which;
          return a !== eh ? null : (ws = !0, Qd);
        case "textInput":
          var i = t.data;
          return i === Qd && ws ? null : i;
        default:
          return null;
      }
    }
    function ah(e, t) {
      if (Li) {
        if (e === "compositionend" || !Ts && rh(e, t)) {
          var a = po();
          return Qc(), Li = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Jc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Zc && !ef(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vy(e, t, a, i, u) {
      var s;
      if (py ? s = tf(t, i) : s = ah(t, i), !s)
        return null;
      var f = oh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new pu("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function nf(e, t, a, i, u, s, f) {
      qd(e, t, a, i, u), vy(e, t, a, i, u);
    }
    var hy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function yo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!hy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function my(e) {
      if (!fn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function rf() {
      Cr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      lc(i);
      var u = oh(t, "onChange");
      if (u.length > 0) {
        var s = new ur("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, ic(e)), rd(d, t);
    }
    function d(e) {
      T0(e, 0);
    }
    function m(e) {
      var t = cf(e);
      if (ju(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    fn && (T = my("input") && (!document.documentMode || document.documentMode > 9));
    function U(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", Q);
    }
    function Y() {
      !r || (r.detachEvent("onpropertychange", Q), r = null, l = null);
    }
    function Q(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function I(e, t, a) {
      e === "focusin" ? (Y(), U(t, a)) : e === "focusout" && Y();
    }
    function ae(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function pe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function me(e, t) {
      if (e === "click")
        return m(t);
    }
    function vn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function _(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || be(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? cf(a) : window, v, y;
      if (o(p) ? v = E : yo(p) ? T ? v = vn : (v = ae, y = I) : pe(p) && (v = me), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && _(p);
    }
    function O() {
      _a("onMouseEnter", ["mouseout", "mouseover"]), _a("onMouseLeave", ["mouseout", "mouseover"]), _a("onPointerEnter", ["pointerout", "pointerover"]), _a("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function q(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Cv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (_s(y) || sp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var w, L;
        if (v) {
          var N = i.relatedTarget || i.toElement;
          if (w = a, L = N ? _s(N) : null, L !== null) {
            var F = Gr(L);
            (L !== F || L.tag !== ne && L.tag !== Ae) && (L = null);
          }
        } else
          w = null, L = a;
        if (w !== L) {
          var ue = Tl, xe = "onMouseLeave", Se = "onMouseEnter", ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (ue = Id, xe = "onPointerLeave", Se = "onPointerEnter", ut = "pointer");
          var et = w == null ? g : cf(w), k = L == null ? g : cf(L), j = new ue(xe, ut + "leave", w, i, u);
          j.target = et, j.relatedTarget = k;
          var D = null, W = _s(u);
          if (W === a) {
            var oe = new ue(Se, ut + "enter", L, i, u);
            oe.target = k, oe.relatedTarget = et, D = oe;
          }
          ER(e, j, D, w, L);
        }
      }
    }
    function ge(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ve = typeof Object.is == "function" ? Object.is : ge;
    function Ee(e, t) {
      if (ve(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Jn.call(t, s) || !ve(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ze(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Fn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ht(e, t) {
      for (var a = ze(e), i = 0, u = 0; a; ) {
        if (a.nodeType === gi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = ze(Fn(a));
      }
    }
    function xl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return yy(e, u, s, f, p);
    }
    function yy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e:
        for (; ; ) {
          for (var w = null; g === t && (a === 0 || g.nodeType === gi) && (f = s + a), g === i && (u === 0 || g.nodeType === gi) && (p = s + u), g.nodeType === gi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
            b = g, g = w;
          for (; ; ) {
            if (g === e)
              break e;
            if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
              break;
            g = b, b = g.parentNode;
          }
          g = w;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function tR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (!!i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = ht(e, f), g = ht(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function f0(e) {
      return e && e.nodeType === gi;
    }
    function d0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : f0(e) ? !1 : f0(t) ? d0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function nR(e) {
      return e && e.ownerDocument && d0(e.ownerDocument.documentElement, e);
    }
    function rR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function p0() {
      for (var e = window, t = al(); t instanceof e.HTMLIFrameElement; ) {
        if (rR(t))
          e = t.contentWindow;
        else
          return t;
        t = al(e.document);
      }
      return t;
    }
    function gy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function aR() {
      var e = p0();
      return {
        focusedElem: e,
        selectionRange: gy(e) ? lR(e) : null
      };
    }
    function iR(e) {
      var t = p0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && nR(a)) {
        i !== null && gy(a) && uR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Lr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function lR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = xl(e), t || {
        start: 0,
        end: 0
      };
    }
    function uR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : tR(e, t);
    }
    var oR = fn && "documentMode" in document && document.documentMode <= 11;
    function sR() {
      Cr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var af = null, Sy = null, Xd = null, Ey = !1;
    function cR(e) {
      if ("selectionStart" in e && gy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function fR(e) {
      return e.window === e ? e.document : e.nodeType === Ha ? e : e.ownerDocument;
    }
    function v0(e, t, a) {
      var i = fR(a);
      if (!(Ey || af == null || af !== al(i))) {
        var u = cR(af);
        if (!Xd || !Ee(Xd, u)) {
          Xd = u;
          var s = oh(Sy, "onSelect");
          if (s.length > 0) {
            var f = new ur("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = af;
          }
        }
      }
    }
    function dR(e, t, a, i, u, s, f) {
      var p = a ? cf(a) : window;
      switch (t) {
        case "focusin":
          (yo(p) || p.contentEditable === "true") && (af = p, Sy = a, Xd = null);
          break;
        case "focusout":
          af = null, Sy = null, Xd = null;
          break;
        case "mousedown":
          Ey = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ey = !1, v0(e, i, u);
          break;
        case "selectionchange":
          if (oR)
            break;
        case "keydown":
        case "keyup":
          v0(e, i, u);
      }
    }
    function ih(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var lf = {
      animationend: ih("Animation", "AnimationEnd"),
      animationiteration: ih("Animation", "AnimationIteration"),
      animationstart: ih("Animation", "AnimationStart"),
      transitionend: ih("Transition", "TransitionEnd")
    }, Cy = {}, h0 = {};
    fn && (h0 = document.createElement("div").style, "AnimationEvent" in window || (delete lf.animationend.animation, delete lf.animationiteration.animation, delete lf.animationstart.animation), "TransitionEvent" in window || delete lf.transitionend.transition);
    function lh(e) {
      if (Cy[e])
        return Cy[e];
      if (!lf[e])
        return e;
      var t = lf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in h0)
          return Cy[e] = t[a];
      return e;
    }
    var m0 = lh("animationend"), y0 = lh("animationiteration"), g0 = lh("animationstart"), S0 = lh("transitionend"), E0 = /* @__PURE__ */ new Map(), C0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function go(e, t) {
      E0.set(e, t), Cr(t, [e]);
    }
    function pR() {
      for (var e = 0; e < C0.length; e++) {
        var t = C0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        go(a, "on" + i);
      }
      go(m0, "onAnimationEnd"), go(y0, "onAnimationIteration"), go(g0, "onAnimationStart"), go("dblclick", "onDoubleClick"), go("focusin", "onFocus"), go("focusout", "onBlur"), go(S0, "onTransitionEnd");
    }
    function vR(e, t, a, i, u, s, f) {
      var p = E0.get(t);
      if (p !== void 0) {
        var v = ur, y = t;
        switch (t) {
          case "keypress":
            if (cu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = cy;
            break;
          case "focusin":
            y = "focus", v = Gc;
            break;
          case "focusout":
            y = "blur", v = Gc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Gc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Tl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = du;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Sa;
            break;
          case m0:
          case y0:
          case g0:
            v = qc;
            break;
          case S0:
            v = dy;
            break;
          case "scroll":
            v = jd;
            break;
          case "wheel":
            v = Kc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ly;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Id;
            break;
        }
        var g = (s & Il) !== 0;
        {
          var b = !g && t === "scroll", w = gR(a, p, i.type, g, b);
          if (w.length > 0) {
            var L = new v(p, y, null, i, u);
            e.push({
              event: L,
              listeners: w
            });
          }
        }
      }
    }
    pR(), O(), rf(), sR(), th();
    function hR(e, t, a, i, u, s, f) {
      vR(e, t, a, i, u, s);
      var p = (s & Wm) === 0;
      p && (q(e, t, a, i, u), x(e, t, a, i, u), dR(e, t, a, i, u), nf(e, t, a, i, u));
    }
    var Kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kd));
    function R0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ri(i, t, void 0, e), e.currentTarget = null;
    }
    function mR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          R0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, L = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          R0(e, L, w), i = b;
        }
    }
    function T0(e, t) {
      for (var a = (t & Il) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        mR(s, f, a);
      }
      ud();
    }
    function yR(e, t, a, i, u) {
      var s = ic(a), f = [];
      hR(f, e, i, a, s, t), T0(f, t);
    }
    function an(e, t) {
      Ry.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = WT(t), u = CR(e, a);
      i.has(u) || (w0(t, e, qo, a), i.add(u));
    }
    function Ty(e, t, a) {
      Ry.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Il), w0(a, e, i, t);
    }
    var uh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[uh]) {
        e[uh] = !0, tt.forEach(function(a) {
          a !== "selectionchange" && (Ry.has(a) || Ty(a, !1, e), Ty(a, !0, e));
        });
        var t = e.nodeType === Ha ? e : e.ownerDocument;
        t !== null && (t[uh] || (t[uh] = !0, Ty("selectionchange", !1, t)));
      }
    }
    function w0(e, t, a, i, u) {
      var s = so(e, t, a), f = void 0;
      es && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Oi(e, t, s, f) : fo(e, t, s) : f !== void 0 ? Yc(e, t, s, f) : Fd(e, t, s);
    }
    function x0(e, t) {
      return e === t || e.nodeType === mn && e.parentNode === t;
    }
    function wy(e, t, a, i, u) {
      var s = i;
      if ((t & Ei) === 0 && (t & qo) === 0) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === te || v === de) {
                var y = p.stateNode.containerInfo;
                if (x0(y, f))
                  break;
                if (v === de)
                  for (var g = p.return; g !== null; ) {
                    var b = g.tag;
                    if (b === te || b === de) {
                      var w = g.stateNode.containerInfo;
                      if (x0(w, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var L = _s(y);
                  if (L === null)
                    return;
                  var N = L.tag;
                  if (N === ne || N === Ae) {
                    p = s = L;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      rd(function() {
        return yR(e, t, a, s);
      });
    }
    function Jd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function gR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, L = b.tag;
        if (L === ne && w !== null && (g = w, p !== null)) {
          var N = Ql(y, p);
          N != null && v.push(Jd(y, N, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function oh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ne && f !== null) {
          var v = f, y = Ql(u, a);
          y != null && i.unshift(Jd(u, y, v));
          var g = Ql(u, t);
          g != null && i.push(Jd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function uf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ne);
      return e || null;
    }
    function SR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = uf(s))
        u++;
      for (var f = 0, p = i; p; p = uf(p))
        f++;
      for (; u - f > 0; )
        a = uf(a), u--;
      for (; f - u > 0; )
        i = uf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = uf(a), i = uf(i);
      }
      return null;
    }
    function b0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ne && g !== null) {
          var w = g;
          if (u) {
            var L = Ql(p, s);
            L != null && f.unshift(Jd(p, L, w));
          } else if (!u) {
            var N = Ql(p, s);
            N != null && f.push(Jd(p, N, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function ER(e, t, a, i, u) {
      var s = i && u ? SR(i, u) : null;
      i !== null && b0(e, t, i, s, !1), u !== null && a !== null && b0(e, a, u, s, !0);
    }
    function CR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ea = !1, ep = "dangerouslySetInnerHTML", sh = "suppressContentEditableWarning", So = "suppressHydrationWarning", _0 = "autoFocus", xs = "children", bs = "style", ch = "__html", xy, fh, tp, k0, dh, D0, O0;
    xy = {
      dialog: !0,
      webview: !0
    }, fh = function(e, t) {
      ac(e, t), Zf(e, t), Ev(e, t, {
        registrationNameDependencies: jt,
        possibleRegistrationNames: fi
      });
    }, D0 = fn && !document.documentMode, tp = function(e, t, a) {
      if (!Ea) {
        var i = ph(a), u = ph(t);
        u !== i && (Ea = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, k0 = function(e) {
      if (!Ea) {
        Ea = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, dh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, O0 = function(e, t) {
      var a = e.namespaceURI === yi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var RR = /\r\n?/g, TR = /\u0000|\uFFFD/g;
    function ph(e) {
      Ya(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(RR, `
`).replace(TR, "");
    }
    function vh(e, t, a, i) {
      var u = ph(t), s = ph(e);
      if (s !== u && (i && (Ea || (Ea = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ye))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function L0(e) {
      return e.nodeType === Ha ? e : e.ownerDocument;
    }
    function wR() {
    }
    function hh(e) {
      e.onclick = wR;
    }
    function xR(e, t, a, i, u) {
      for (var s in i)
        if (!!i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === bs)
            f && Object.freeze(f), cv(t, f);
          else if (s === ep) {
            var p = f ? f[ch] : void 0;
            p != null && Jp(t, p);
          } else if (s === xs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ec(t, f);
            } else
              typeof f == "number" && ec(t, "" + f);
          else
            s === sh || s === So || s === _0 || (jt.hasOwnProperty(s) ? f != null && (typeof f != "function" && dh(s, f), s === "onScroll" && an("scroll", t)) : f != null && Wa(t, s, f, u));
        }
    }
    function bR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === bs ? cv(e, f) : s === ep ? Jp(e, f) : s === xs ? ec(e, f) : Wa(e, s, f, i);
      }
    }
    function _R(e, t, a, i) {
      var u, s = L0(a), f, p = i;
      if (p === yi && (p = Zs(e)), p === yi) {
        if (u = Si(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === yi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Jn.call(xy, e) && (xy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function kR(e, t) {
      return L0(t).createTextNode(e);
    }
    function DR(e, t, a, i) {
      var u = Si(t, a);
      fh(t, a);
      var s;
      switch (t) {
        case "dialog":
          an("cancel", e), an("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          an("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Kd.length; f++)
            an(Kd[f], e);
          s = a;
          break;
        case "source":
          an("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          an("error", e), an("load", e), s = a;
          break;
        case "details":
          an("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), an("invalid", e);
          break;
        case "option":
          Ot(e, a), s = a;
          break;
        case "select":
          Yo(e, a), s = Io(e, a), an("invalid", e);
          break;
        case "textarea":
          Xp(e, a), s = $f(e, a), an("invalid", e);
          break;
        default:
          s = a;
      }
      switch (nc(t, s), xR(t, e, i, s, u), t) {
        case "input":
          ua(e), G(e, a, !1);
          break;
        case "textarea":
          ua(e), Zp(e);
          break;
        case "option":
          zt(e, a);
          break;
        case "select":
          Pf(e, a);
          break;
        default:
          typeof s.onClick == "function" && hh(e);
          break;
      }
    }
    function OR(e, t, a, i, u) {
      fh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Io(e, a), p = Io(e, i), s = [];
          break;
        case "textarea":
          f = $f(e, a), p = $f(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && hh(e);
          break;
      }
      nc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === bs) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === ep || v === xs || v === sh || v === So || v === _0 || (jt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], L = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === L || w == null && L == null))
          if (v === bs)
            if (w && Object.freeze(w), L) {
              for (y in L)
                L.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && L[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === ep) {
            var N = w ? w[ch] : void 0, F = L ? L[ch] : void 0;
            N != null && F !== N && (s = s || []).push(v, N);
          } else
            v === xs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === sh || v === So || (jt.hasOwnProperty(v) ? (w != null && (typeof w != "function" && dh(v, w), v === "onScroll" && an("scroll", e)), !s && L !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Wo(g, p[bs]), (s = s || []).push(bs, g)), s;
    }
    function LR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && M(e, u);
      var s = Si(a, i), f = Si(a, u);
      switch (bR(e, t, s, f), a) {
        case "input":
          H(e, u);
          break;
        case "textarea":
          Kp(e, u);
          break;
        case "select":
          Hm(e, u);
          break;
      }
    }
    function MR(e) {
      {
        var t = e.toLowerCase();
        return rc.hasOwnProperty(t) && rc[t] || null;
      }
    }
    function NR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Si(t, a), fh(t, a), t) {
        case "dialog":
          an("cancel", e), an("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          an("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Kd.length; y++)
            an(Kd[y], e);
          break;
        case "source":
          an("error", e);
          break;
        case "img":
        case "image":
        case "link":
          an("error", e), an("load", e);
          break;
        case "details":
          an("toggle", e);
          break;
        case "input":
          C(e, a), an("invalid", e);
          break;
        case "option":
          Ot(e, a);
          break;
        case "select":
          Yo(e, a), an("invalid", e);
          break;
        case "textarea":
          Xp(e, a), an("invalid", e);
          break;
      }
      nc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var w = g[b].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var L = null;
      for (var N in a)
        if (!!a.hasOwnProperty(N)) {
          var F = a[N];
          if (N === xs)
            typeof F == "string" ? e.textContent !== F && (a[So] !== !0 && vh(e.textContent, F, s, f), L = [xs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[So] !== !0 && vh(e.textContent, F, s, f), L = [xs, "" + F]);
          else if (jt.hasOwnProperty(N))
            F != null && (typeof F != "function" && dh(N, F), N === "onScroll" && an("scroll", e));
          else if (f && !0 && typeof p == "boolean") {
            var ue = void 0, xe = p && Pe ? null : aa(N);
            if (a[So] !== !0) {
              if (!(N === sh || N === So || N === "value" || N === "checked" || N === "selected")) {
                if (N === ep) {
                  var Se = e.innerHTML, ut = F ? F[ch] : void 0;
                  if (ut != null) {
                    var et = O0(e, ut);
                    et !== Se && tp(N, Se, et);
                  }
                } else if (N === bs) {
                  if (v.delete(N), D0) {
                    var k = Ym(F);
                    ue = e.getAttribute("style"), k !== ue && tp(N, ue, k);
                  }
                } else if (p && !Pe)
                  v.delete(N.toLowerCase()), ue = $i(e, N, F), F !== ue && tp(N, ue, F);
                else if (!dn(N, xe, p) && !Bt(N, F, xe, p)) {
                  var j = !1;
                  if (xe !== null)
                    v.delete(xe.attributeName), ue = La(e, N, F, xe);
                  else {
                    var D = i;
                    if (D === yi && (D = Zs(t)), D === yi)
                      v.delete(N.toLowerCase());
                    else {
                      var W = MR(N);
                      W !== null && W !== N && (j = !0, v.delete(W)), v.delete(N);
                    }
                    ue = $i(e, N, F);
                  }
                  var oe = Pe;
                  !oe && F !== ue && !j && tp(N, ue, F);
                }
              }
            }
          }
        }
      switch (f && v.size > 0 && a[So] !== !0 && k0(v), t) {
        case "input":
          ua(e), G(e, a, !0);
          break;
        case "textarea":
          ua(e), Zp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && hh(e);
          break;
      }
      return L;
    }
    function UR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function by(e, t) {
      {
        if (Ea)
          return;
        Ea = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function _y(e, t) {
      {
        if (Ea)
          return;
        Ea = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ky(e, t, a) {
      {
        if (Ea)
          return;
        Ea = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (t === "" || Ea)
          return;
        Ea = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function zR(e, t, a) {
      switch (t) {
        case "input":
          ke(e, a);
          return;
        case "textarea":
          If(e, a);
          return;
        case "select":
          Fm(e, a);
          return;
      }
    }
    var np = function() {
    }, rp = function() {
    };
    {
      var AR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], M0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        "foreignObject",
        "desc",
        "title"
      ], HR = M0.concat(["button"]), FR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], N0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      rp = function(e, t) {
        var a = We({}, e || N0), i = {
          tag: t
        };
        return M0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), HR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), AR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var jR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return FR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, VR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, U0 = {};
      np = function(e, t, a) {
        a = a || N0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = jR(e, u) ? null : i, f = s ? null : VR(e, a), p = s || f;
        if (!!p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!U0[y]) {
            U0[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var mh = "suppressHydrationWarning", yh = "$", gh = "/$", ap = "$?", ip = "$!", PR = "style", Oy = null, Ly = null;
    function BR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ha:
        case Bl: {
          t = i === Ha ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Qf(null, "");
          break;
        }
        default: {
          var s = i === mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Qf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = rp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function $R(e, t, a) {
      {
        var i = e, u = Qf(i.namespace, t), s = rp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function ek(e) {
      return e;
    }
    function IR(e) {
      Oy = Zr(), Ly = aR();
      var t = null;
      return Hn(!1), t;
    }
    function YR(e) {
      iR(Ly), Hn(Oy), Oy = null, Ly = null;
    }
    function QR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (np(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = rp(f.ancestorInfo, e);
          np(null, p, v);
        }
        s = f.namespace;
      }
      var y = _R(e, t, a, s);
      return op(u, y), jy(y, t), y;
    }
    function WR(e, t) {
      e.appendChild(t);
    }
    function GR(e, t, a, i, u) {
      switch (DR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function qR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = rp(f.ancestorInfo, t);
          np(null, p, v);
        }
      }
      return OR(e, t, a, i);
    }
    function My(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function XR(e, t, a, i) {
      {
        var u = a;
        np(null, e, u.ancestorInfo);
      }
      var s = kR(e, t);
      return op(i, s), s;
    }
    function KR() {
      var e = window.event;
      return e === void 0 ? _i : fr(e.type);
    }
    var Ny = typeof setTimeout == "function" ? setTimeout : void 0, ZR = typeof clearTimeout == "function" ? clearTimeout : void 0, Uy = -1, z0 = typeof Promise == "function" ? Promise : void 0, JR = typeof queueMicrotask == "function" ? queueMicrotask : typeof z0 < "u" ? function(e) {
      return z0.resolve(null).then(e).catch(eT);
    } : Ny;
    function eT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function tT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function nT(e, t, a, i, u, s) {
      LR(e, t, a, i, u), jy(e, u);
    }
    function A0(e) {
      ec(e, "");
    }
    function rT(e, t, a) {
      e.nodeValue = a;
    }
    function aT(e, t) {
      e.appendChild(t);
    }
    function iT(e, t) {
      var a;
      e.nodeType === mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && hh(a);
    }
    function lT(e, t, a) {
      e.insertBefore(t, a);
    }
    function uT(e, t, a) {
      e.nodeType === mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function oT(e, t) {
      e.removeChild(t);
    }
    function sT(e, t) {
      e.nodeType === mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function zy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === mn) {
          var s = u.data;
          if (s === gh)
            if (i === 0) {
              e.removeChild(u), Je(t);
              return;
            } else
              i--;
          else
            (s === yh || s === ap || s === ip) && i++;
        }
        a = u;
      } while (a);
      Je(t);
    }
    function cT(e, t) {
      e.nodeType === mn ? zy(e.parentNode, t) : e.nodeType === Lr && zy(e, t), Je(e);
    }
    function fT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function dT(e) {
      e.nodeValue = "";
    }
    function pT(e, t) {
      e = e;
      var a = t[PR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = tc("display", i);
    }
    function vT(e, t) {
      e.nodeValue = t;
    }
    function hT(e) {
      e.nodeType === Lr ? e.textContent = "" : e.nodeType === Ha && e.documentElement && e.removeChild(e.documentElement);
    }
    function mT(e, t, a) {
      return e.nodeType !== Lr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function yT(e, t) {
      return t === "" || e.nodeType !== gi ? null : e;
    }
    function gT(e) {
      return e.nodeType !== mn ? null : e;
    }
    function H0(e) {
      return e.data === ap;
    }
    function Ay(e) {
      return e.data === ip;
    }
    function ST(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function ET(e, t) {
      e._reactRetry = t;
    }
    function Sh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Lr || t === gi)
          break;
        if (t === mn) {
          var a = e.data;
          if (a === yh || a === ip || a === ap)
            break;
          if (a === gh)
            return null;
        }
      }
      return e;
    }
    function lp(e) {
      return Sh(e.nextSibling);
    }
    function CT(e) {
      return Sh(e.firstChild);
    }
    function RT(e) {
      return Sh(e.firstChild);
    }
    function TT(e) {
      return Sh(e.nextSibling);
    }
    function wT(e, t, a, i, u, s, f) {
      op(s, e), jy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & qe) !== _e;
      return NR(e, t, a, p, i, y, f);
    }
    function xT(e, t, a, i) {
      return op(a, e), a.mode & qe, UR(e, t);
    }
    function bT(e, t) {
      op(t, e);
    }
    function _T(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === mn) {
          var i = t.data;
          if (i === gh) {
            if (a === 0)
              return lp(t);
            a--;
          } else
            (i === yh || i === ip || i === ap) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function F0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === mn) {
          var i = t.data;
          if (i === yh || i === ip || i === ap) {
            if (a === 0)
              return t;
            a--;
          } else
            i === gh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function kT(e) {
      Je(e);
    }
    function DT(e) {
      Je(e);
    }
    function OT(e) {
      return e !== "head" && e !== "body";
    }
    function LT(e, t, a, i) {
      var u = !0;
      vh(t.nodeValue, a, i, u);
    }
    function MT(e, t, a, i, u, s) {
      if (t[mh] !== !0) {
        var f = !0;
        vh(i.nodeValue, u, s, f);
      }
    }
    function NT(e, t) {
      t.nodeType === Lr ? by(e, t) : t.nodeType === mn || _y(e, t);
    }
    function UT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Lr ? by(a, t) : t.nodeType === mn || _y(a, t));
      }
    }
    function zT(e, t, a, i, u) {
      (u || t[mh] !== !0) && (i.nodeType === Lr ? by(a, i) : i.nodeType === mn || _y(a, i));
    }
    function AT(e, t, a) {
      ky(e, t);
    }
    function HT(e, t) {
      Dy(e, t);
    }
    function FT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ky(i, t);
      }
    }
    function jT(e, t) {
      {
        var a = e.parentNode;
        a !== null && Dy(a, t);
      }
    }
    function VT(e, t, a, i, u, s) {
      (s || t[mh] !== !0) && ky(a, i);
    }
    function PT(e, t, a, i, u) {
      (u || t[mh] !== !0) && Dy(a, i);
    }
    function BT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function $T(e) {
      Zd(e);
    }
    var of = Math.random().toString(36).slice(2), sf = "__reactFiber$" + of, Hy = "__reactProps$" + of, up = "__reactContainer$" + of, Fy = "__reactEvents$" + of, IT = "__reactListeners$" + of, YT = "__reactHandles$" + of;
    function QT(e) {
      delete e[sf], delete e[Hy], delete e[Fy], delete e[IT], delete e[YT];
    }
    function op(e, t) {
      t[sf] = e;
    }
    function Eh(e, t) {
      t[up] = e;
    }
    function j0(e) {
      e[up] = null;
    }
    function sp(e) {
      return !!e[up];
    }
    function _s(e) {
      var t = e[sf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[up] || a[sf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = F0(e); u !== null; ) {
              var s = u[sf];
              if (s)
                return s;
              u = F0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Eo(e) {
      var t = e[sf] || e[up];
      return t && (t.tag === ne || t.tag === Ae || t.tag === we || t.tag === te) ? t : null;
    }
    function cf(e) {
      if (e.tag === ne || e.tag === Ae)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Ch(e) {
      return e[Hy] || null;
    }
    function jy(e, t) {
      e[Hy] = t;
    }
    function WT(e) {
      var t = e[Fy];
      return t === void 0 && (t = e[Fy] = /* @__PURE__ */ new Set()), t;
    }
    var V0 = {}, P0 = A.ReactDebugCurrentFrame;
    function Rh(e) {
      if (e) {
        var t = e._owner, a = qa(e.type, e._source, t ? t.type : null);
        P0.setExtraStackFrame(a);
      } else
        P0.setExtraStackFrame(null);
    }
    function Mi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Jn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Rh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Rh(null)), p instanceof Error && !(p.message in V0) && (V0[p.message] = !0, Rh(u), S("Failed %s type: %s", a, p.message), Rh(null));
          }
      }
    }
    var Vy = [], Th;
    Th = [];
    var mu = -1;
    function Co(e) {
      return {
        current: e
      };
    }
    function Vr(e, t) {
      if (mu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Th[mu] && S("Unexpected Fiber popped."), e.current = Vy[mu], Vy[mu] = null, Th[mu] = null, mu--;
    }
    function Pr(e, t, a) {
      mu++, Vy[mu] = e.current, Th[mu] = a, e.current = t;
    }
    var Py;
    Py = {};
    var Ba = {};
    Object.freeze(Ba);
    var yu = Co(Ba), bl = Co(!1), By = Ba;
    function ff(e, t, a) {
      return a && _l(t) ? By : yu.current;
    }
    function B0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function df(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Ba;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Fe(e) || "Unknown";
          Mi(i, s, "context", p);
        }
        return u && B0(e, t, s), s;
      }
    }
    function wh() {
      return bl.current;
    }
    function _l(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function xh(e) {
      Vr(bl, e), Vr(yu, e);
    }
    function $y(e) {
      Vr(bl, e), Vr(yu, e);
    }
    function $0(e, t, a) {
      {
        if (yu.current !== Ba)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Pr(yu, t, e), Pr(bl, a, e);
      }
    }
    function I0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Fe(e) || "Unknown";
            Py[s] || (Py[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Fe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Fe(e) || "Unknown";
          Mi(u, f, "child context", v);
        }
        return We({}, a, f);
      }
    }
    function bh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ba;
        return By = yu.current, Pr(yu, a, e), Pr(bl, bl.current, e), !0;
      }
    }
    function Y0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = I0(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, Vr(bl, e), Vr(yu, e), Pr(yu, u, e), Pr(bl, a, e);
        } else
          Vr(bl, e), Pr(bl, a, e);
      }
    }
    function GT(e) {
      {
        if (!dd(e) || e.tag !== se)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case se: {
              var a = t.type;
              if (_l(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ro = 0, _h = 1, gu = null, Iy = !1, Yy = !1;
    function Q0(e) {
      gu === null ? gu = [e] : gu.push(e);
    }
    function qT(e) {
      Iy = !0, Q0(e);
    }
    function W0() {
      Iy && To();
    }
    function To() {
      if (!Yy && gu !== null) {
        Yy = !0;
        var e = 0, t = ma();
        try {
          var a = !0, i = gu;
          for (xn(nr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          gu = null, Iy = !1;
        } catch (s) {
          throw gu !== null && (gu = gu.slice(e + 1)), dc(vc, To), s;
        } finally {
          xn(t), Yy = !1;
        }
      }
      return null;
    }
    var pf = [], vf = 0, kh = null, Dh = 0, ai = [], ii = 0, ks = null, Su = 1, Eu = "";
    function XT(e) {
      return Os(), (e.flags & sd) !== Te;
    }
    function KT(e) {
      return Os(), Dh;
    }
    function ZT() {
      var e = Eu, t = Su, a = t & ~JT(t);
      return a.toString(32) + e;
    }
    function Ds(e, t) {
      Os(), pf[vf++] = Dh, pf[vf++] = kh, kh = e, Dh = t;
    }
    function G0(e, t, a) {
      Os(), ai[ii++] = Su, ai[ii++] = Eu, ai[ii++] = ks, ks = e;
      var i = Su, u = Eu, s = Oh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Oh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, L = s - y, N = Oh(t) + L, F = p << L, ue = F | w, xe = b + u;
        Su = 1 << N | ue, Eu = xe;
      } else {
        var Se = p << s, ut = Se | f, et = u;
        Su = 1 << v | ut, Eu = et;
      }
    }
    function Qy(e) {
      Os();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ds(e, a), G0(e, a, i);
      }
    }
    function Oh(e) {
      return 32 - Ec(e);
    }
    function JT(e) {
      return 1 << Oh(e) - 1;
    }
    function Wy(e) {
      for (; e === kh; )
        kh = pf[--vf], pf[vf] = null, Dh = pf[--vf], pf[vf] = null;
      for (; e === ks; )
        ks = ai[--ii], ai[ii] = null, Eu = ai[--ii], ai[ii] = null, Su = ai[--ii], ai[ii] = null;
    }
    function ew() {
      return Os(), ks !== null ? {
        id: Su,
        overflow: Eu
      } : null;
    }
    function tw(e, t) {
      Os(), ai[ii++] = Su, ai[ii++] = Eu, ai[ii++] = ks, Su = t.id, Eu = t.overflow, ks = e;
    }
    function Os() {
      pr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var dr = null, li = null, Ni = !1, Ls = !1, wo = null;
    function nw() {
      Ni && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function q0() {
      Ls = !0;
    }
    function rw() {
      return Ls;
    }
    function aw(e) {
      var t = e.stateNode.containerInfo;
      return li = RT(t), dr = e, Ni = !0, wo = null, Ls = !1, !0;
    }
    function iw(e, t, a) {
      return li = TT(t), dr = e, Ni = !0, wo = null, Ls = !1, a !== null && tw(e, a), !0;
    }
    function X0(e, t) {
      switch (e.tag) {
        case te: {
          NT(e.stateNode.containerInfo, t);
          break;
        }
        case ne: {
          var a = (e.mode & qe) !== _e;
          zT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            a
          );
          break;
        }
        case we: {
          var i = e.memoizedState;
          i.dehydrated !== null && UT(i.dehydrated, t);
          break;
        }
      }
    }
    function K0(e, t) {
      X0(e, t);
      var a = o_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= wt) : i.push(a);
    }
    function Gy(e, t) {
      {
        if (Ls)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ne:
                var i = t.type;
                t.pendingProps, AT(a, i);
                break;
              case Ae:
                var u = t.pendingProps;
                HT(a, u);
                break;
            }
            break;
          }
          case ne: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ne: {
                var v = t.type, y = t.pendingProps, g = (e.mode & qe) !== _e;
                VT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  g
                );
                break;
              }
              case Ae: {
                var b = t.pendingProps, w = (e.mode & qe) !== _e;
                PT(
                  s,
                  f,
                  p,
                  b,
                  w
                );
                break;
              }
            }
            break;
          }
          case we: {
            var L = e.memoizedState, N = L.dehydrated;
            if (N !== null)
              switch (t.tag) {
                case ne:
                  var F = t.type;
                  t.pendingProps, FT(N, F);
                  break;
                case Ae:
                  var ue = t.pendingProps;
                  jT(N, ue);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Z0(e, t) {
      t.flags = t.flags & ~fa | $t, Gy(e, t);
    }
    function J0(e, t) {
      switch (e.tag) {
        case ne: {
          var a = e.type;
          e.pendingProps;
          var i = mT(t, a);
          return i !== null ? (e.stateNode = i, dr = e, li = CT(i), !0) : !1;
        }
        case Ae: {
          var u = e.pendingProps, s = yT(t, u);
          return s !== null ? (e.stateNode = s, dr = e, li = null, !0) : !1;
        }
        case we: {
          var f = gT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ew(),
              retryLane: Fr
            };
            e.memoizedState = p;
            var v = s_(f);
            return v.return = e, e.child = v, dr = e, li = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function qy(e) {
      return (e.mode & qe) !== _e && (e.flags & Ue) === Te;
    }
    function Xy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ky(e) {
      if (!!Ni) {
        var t = li;
        if (!t) {
          qy(e) && (Gy(dr, e), Xy()), Z0(dr, e), Ni = !1, dr = e;
          return;
        }
        var a = t;
        if (!J0(e, t)) {
          qy(e) && (Gy(dr, e), Xy()), t = lp(a);
          var i = dr;
          if (!t || !J0(e, t)) {
            Z0(dr, e), Ni = !1, dr = e;
            return;
          }
          K0(i, a);
        }
      }
    }
    function lw(e, t, a) {
      var i = e.stateNode, u = !Ls, s = wT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function uw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = xT(t, a, e);
      if (i) {
        var u = dr;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & qe) !== _e;
              LT(
                s,
                t,
                a,
                f
              );
              break;
            }
            case ne: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & qe) !== _e;
              MT(
                p,
                v,
                y,
                t,
                a,
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function ow(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      bT(a, e);
    }
    function sw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return _T(a);
    }
    function eE(e) {
      for (var t = e.return; t !== null && t.tag !== ne && t.tag !== te && t.tag !== we; )
        t = t.return;
      dr = t;
    }
    function Lh(e) {
      if (e !== dr)
        return !1;
      if (!Ni)
        return eE(e), Ni = !0, !1;
      if (e.tag !== te && (e.tag !== ne || OT(e.type) && !My(e.type, e.memoizedProps))) {
        var t = li;
        if (t)
          if (qy(e))
            tE(e), Xy();
          else
            for (; t; )
              K0(e, t), t = lp(t);
      }
      return eE(e), e.tag === we ? li = sw(e) : li = dr ? lp(e.stateNode) : null, !0;
    }
    function cw() {
      return Ni && li !== null;
    }
    function tE(e) {
      for (var t = li; t; )
        X0(e, t), t = lp(t);
    }
    function hf() {
      dr = null, li = null, Ni = !1, Ls = !1;
    }
    function nE() {
      wo !== null && (XC(wo), wo = null);
    }
    function pr() {
      return Ni;
    }
    function Zy(e) {
      wo === null ? wo = [e] : wo.push(e);
    }
    var fw = A.ReactCurrentBatchConfig, dw = null;
    function pw() {
      return fw.transition;
    }
    var Ui = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var vw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & nn && (t = a), a = a.return;
        return t;
      }, Ms = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Ns = /* @__PURE__ */ new Set();
      Ui.recordUnsafeLifecycleWarnings = function(e, t) {
        Ns.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & nn && typeof t.UNSAFE_componentWillMount == "function" && fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & nn && typeof t.UNSAFE_componentWillReceiveProps == "function" && pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & nn && typeof t.UNSAFE_componentWillUpdate == "function" && hp.push(e));
      }, Ui.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(w) {
          e.add(Fe(w) || "Component"), Ns.add(w.type);
        }), cp = []);
        var t = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          t.add(Fe(w) || "Component"), Ns.add(w.type);
        }), fp = []);
        var a = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          a.add(Fe(w) || "Component"), Ns.add(w.type);
        }), dp = []);
        var i = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          i.add(Fe(w) || "Component"), Ns.add(w.type);
        }), pp = []);
        var u = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          u.add(Fe(w) || "Component"), Ns.add(w.type);
        }), vp = []);
        var s = /* @__PURE__ */ new Set();
        if (hp.length > 0 && (hp.forEach(function(w) {
          s.add(Fe(w) || "Component"), Ns.add(w.type);
        }), hp = []), t.size > 0) {
          var f = Ms(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ms(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ms(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ms(e);
          Me(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ms(a);
          Me(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Ms(u);
          Me(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Mh = /* @__PURE__ */ new Map(), rE = /* @__PURE__ */ new Set();
      Ui.recordLegacyContextWarning = function(e, t) {
        var a = vw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!rE.has(e.type)) {
          var i = Mh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Mh.set(a, i)), i.push(e));
        }
      }, Ui.flushLegacyContextWarning = function() {
        Mh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Fe(s) || "Component"), rE.add(s.type);
            });
            var u = Ms(i);
            try {
              bt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              un();
            }
          }
        });
      }, Ui.discardPendingWarnings = function() {
        cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Mh = /* @__PURE__ */ new Map();
      };
    }
    function zi(e, t) {
      if (e && e.defaultProps) {
        var a = We({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Jy = Co(null), eg;
    eg = {};
    var Nh = null, mf = null, tg = null, Uh = !1;
    function zh() {
      Nh = null, mf = null, tg = null, Uh = !1;
    }
    function aE() {
      Uh = !0;
    }
    function iE() {
      Uh = !1;
    }
    function lE(e, t, a) {
      Pr(Jy, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== eg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = eg;
    }
    function ng(e, t) {
      var a = Jy.current;
      Vr(Jy, t), e._currentValue = a;
    }
    function rg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (iu(i.childLanes, t) ? u !== null && !iu(u.childLanes, t) && (u.childLanes = Ie(u.childLanes, t)) : (i.childLanes = Ie(i.childLanes, t), u !== null && (u.childLanes = Ie(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function hw(e, t, a) {
      mw(e, t, a);
    }
    function mw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === se) {
                var p = wn(a), v = Cu(Ht, p);
                v.tag = Hh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = Ie(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Ie(w.lanes, a)), rg(i.return, a, e), s.lanes = Ie(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === mt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Ft) {
          var L = i.return;
          if (L === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          L.lanes = Ie(L.lanes, a);
          var N = L.alternate;
          N !== null && (N.lanes = Ie(N.lanes, a)), rg(L, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function yf(e, t) {
      Nh = e, mf = null, tg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (jr(a.lanes, t) && Dp(), a.firstContext = null);
      }
    }
    function jn(e) {
      Uh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (tg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (mf === null) {
          if (Nh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          mf = a, Nh.dependencies = {
            lanes: V,
            firstContext: a
          };
        } else
          mf = mf.next = a;
      }
      return t;
    }
    var Us = null;
    function ag(e) {
      Us === null ? Us = [e] : Us.push(e);
    }
    function yw() {
      if (Us !== null) {
        for (var e = 0; e < Us.length; e++) {
          var t = Us[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Us = null;
      }
    }
    function uE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ag(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ah(e, i);
    }
    function gw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ag(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Sw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ag(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ah(e, i);
    }
    function Ca(e, t) {
      return Ah(e, t);
    }
    var Ew = Ah;
    function Ah(e, t) {
      e.lanes = Ie(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ie(a.lanes, t)), a === null && (e.flags & ($t | fa)) !== Te && o1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ie(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ie(a.childLanes, t) : (u.flags & ($t | fa)) !== Te && o1(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var oE = 0, sE = 1, Hh = 2, ig = 3, Fh = !1, lg, jh;
    lg = !1, jh = null;
    function ug(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: V
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function cE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Cu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: oE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function xo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (jh === u && !lg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), lg = !0), Eb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Ew(e, a);
      } else
        return Sw(e, u, t, a);
    }
    function Vh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (xd(a)) {
          var s = u.lanes;
          s = _d(s, e.pendingLanes);
          var f = Ie(s, a);
          u.lanes = f, ao(e, f);
        }
      }
    }
    function og(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Cw(e, t, a, i, u, s) {
      switch (a.tag) {
        case sE: {
          var f = a.payload;
          if (typeof f == "function") {
            aE();
            var p = f.call(s, i, u);
            {
              if (e.mode & nn) {
                Tn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Tn(!1);
                }
              }
              iE();
            }
            return p;
          }
          return f;
        }
        case ig:
          e.flags = e.flags & ~Un | Ue;
        case oE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            aE(), y = v.call(s, i, u);
            {
              if (e.mode & nn) {
                Tn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Tn(!1);
                }
              }
              iE();
            }
          } else
            y = v;
          return y == null ? i : We({}, i, y);
        }
        case Hh:
          return Fh = !0, i;
      }
      return i;
    }
    function Ph(e, t, a, i) {
      var u = e.updateQueue;
      Fh = !1, jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, w = b.lastBaseUpdate;
          w !== f && (w === null ? b.firstBaseUpdate = y : w.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var L = u.baseState, N = V, F = null, ue = null, xe = null, Se = s;
        do {
          var ut = Se.lane, et = Se.eventTime;
          if (iu(i, ut)) {
            if (xe !== null) {
              var j = {
                eventTime: et,
                lane: it,
                tag: Se.tag,
                payload: Se.payload,
                callback: Se.callback,
                next: null
              };
              xe = xe.next = j;
            }
            L = Cw(e, u, Se, L, t, a);
            var D = Se.callback;
            if (D !== null && Se.lane !== it) {
              e.flags |= Za;
              var W = u.effects;
              W === null ? u.effects = [Se] : W.push(Se);
            }
          } else {
            var k = {
              eventTime: et,
              lane: ut,
              tag: Se.tag,
              payload: Se.payload,
              callback: Se.callback,
              next: null
            };
            xe === null ? (ue = xe = k, F = L) : xe = xe.next = k, N = Ie(N, ut);
          }
          if (Se = Se.next, Se === null) {
            if (p = u.shared.pending, p === null)
              break;
            var oe = p, re = oe.next;
            oe.next = null, Se = re, u.lastBaseUpdate = oe, u.shared.pending = null;
          }
        } while (!0);
        xe === null && (F = L), u.baseState = F, u.firstBaseUpdate = ue, u.lastBaseUpdate = xe;
        var Le = u.shared.interleaved;
        if (Le !== null) {
          var Ve = Le;
          do
            N = Ie(N, Ve.lane), Ve = Ve.next;
          while (Ve !== Le);
        } else
          s === null && (u.shared.lanes = V);
        Pp(N), e.lanes = N, e.memoizedState = L;
      }
      jh = null;
    }
    function Rw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function fE() {
      Fh = !1;
    }
    function Bh() {
      return Fh;
    }
    function dE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Rw(f, a));
        }
    }
    var sg = {}, pE = new z.Component().refs, cg, fg, dg, pg, vg, vE, $h, hg, mg, yg;
    {
      cg = /* @__PURE__ */ new Set(), fg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set();
      var hE = /* @__PURE__ */ new Set();
      $h = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          hE.has(a) || (hE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, vE = function(e, t) {
        if (t === void 0) {
          var a = ct(e) || "Component";
          vg.has(a) || (vg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(sg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(sg);
    }
    function gg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & nn) {
          Tn(!0);
          try {
            s = a(i, u);
          } finally {
            Tn(!1);
          }
        }
        vE(t, s);
      }
      var f = s == null ? u : We({}, u, s);
      if (e.memoizedState = f, e.lanes === V) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Sg = {
      isMounted: qr,
      enqueueSetState: function(e, t, a) {
        var i = sa(e), u = ta(), s = No(i), f = Cu(u, s);
        f.payload = t, a != null && ($h(a, "setState"), f.callback = a);
        var p = xo(i, f, s);
        p !== null && (Zn(p, i, s, u), Vh(p, i, s)), yl(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = sa(e), u = ta(), s = No(i), f = Cu(u, s);
        f.tag = sE, f.payload = t, a != null && ($h(a, "replaceState"), f.callback = a);
        var p = xo(i, f, s);
        p !== null && (Zn(p, i, s, u), Vh(p, i, s)), yl(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = sa(e), i = ta(), u = No(a), s = Cu(i, u);
        s.tag = Hh, t != null && ($h(t, "forceUpdate"), s.callback = t);
        var f = xo(a, s, u);
        f !== null && (Zn(f, a, u, i), Vh(f, a, u)), Cd(a, u);
      }
    };
    function mE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & nn) {
            Tn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Tn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", ct(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ee(a, i) || !Ee(u, s) : !0;
    }
    function Tw(e, t, a) {
      var i = e.stateNode;
      {
        var u = ct(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !mg.has(t) && (mg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ct(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !dg.has(t) && (dg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ct(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || nt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function yE(e, t) {
      t.updater = Sg, e.stateNode = t, Gu(t, e), t._reactInternalInstance = sg;
    }
    function gE(e, t, a) {
      var i = !1, u = Ba, s = Ba, f = t.contextType;
      if ("contextType" in t) {
        var p = f === null || f !== void 0 && f.$$typeof === Ho && f._context === void 0;
        if (!p && !yg.has(t)) {
          yg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Ou ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ct(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = jn(f);
      else {
        u = ff(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? df(e, u) : Ba;
      }
      var g = new t(a, s);
      if (e.mode & nn) {
        Tn(!0);
        try {
          g = new t(a, s);
        } finally {
          Tn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      yE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = ct(t) || "Component";
          fg.has(w) || (fg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var L = null, N = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? L = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (L = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? N = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (N = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), L !== null || N !== null || F !== null) {
            var ue = ct(t) || "Component", xe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            pg.has(ue) || (pg.add(ue), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ue, xe, L !== null ? `
  ` + L : "", N !== null ? `
  ` + N : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && B0(e, u, s), g;
    }
    function ww(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Fe(e) || "Component"), Sg.enqueueReplaceState(t, t.state, null));
    }
    function SE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Fe(e) || "Component";
          cg.has(s) || (cg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Sg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Eg(e, t, a, i) {
      Tw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = pE, ug(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = jn(s);
      else {
        var f = ff(e, t, !0);
        u.context = df(e, f);
      }
      {
        if (u.state === a) {
          var p = ct(t) || "Component";
          hg.has(p) || (hg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & nn && Ui.recordLegacyContextWarning(e, u), Ui.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (gg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (ww(e, u), Ph(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = $e;
        y |= Nr, (e.mode & va) !== _e && (y |= Ur), e.flags |= y;
      }
    }
    function xw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Ba;
      if (typeof p == "object" && p !== null)
        v = jn(p);
      else {
        var y = ff(e, t, !0);
        v = df(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && SE(e, u, a, v), fE();
      var w = e.memoizedState, L = u.state = w;
      if (Ph(e, a, u, i), L = e.memoizedState, s === a && w === L && !wh() && !Bh()) {
        if (typeof u.componentDidMount == "function") {
          var N = $e;
          N |= Nr, (e.mode & va) !== _e && (N |= Ur), e.flags |= N;
        }
        return !1;
      }
      typeof g == "function" && (gg(e, t, g, a), L = e.memoizedState);
      var F = Bh() || mE(e, t, s, a, w, L, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ue = $e;
          ue |= Nr, (e.mode & va) !== _e && (ue |= Ur), e.flags |= ue;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var xe = $e;
          xe |= Nr, (e.mode & va) !== _e && (xe |= Ur), e.flags |= xe;
        }
        e.memoizedProps = a, e.memoizedState = L;
      }
      return u.props = a, u.state = L, u.context = v, F;
    }
    function bw(e, t, a, i, u) {
      var s = t.stateNode;
      cE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : zi(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = Ba;
      if (typeof g == "object" && g !== null)
        b = jn(g);
      else {
        var w = ff(t, a, !0);
        b = df(t, w);
      }
      var L = a.getDerivedStateFromProps, N = typeof L == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !N && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && SE(t, s, i, b), fE();
      var F = t.memoizedState, ue = s.state = F;
      if (Ph(t, i, s, u), ue = t.memoizedState, f === v && F === ue && !wh() && !Bh() && !Ce)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= $e), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= ca), !1;
      typeof L == "function" && (gg(t, a, L, i), ue = t.memoizedState);
      var xe = Bh() || mE(t, a, p, i, F, ue, b) || Ce;
      return xe ? (!N && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ue, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ue, b)), typeof s.componentDidUpdate == "function" && (t.flags |= $e), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ca)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= $e), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= ca), t.memoizedProps = i, t.memoizedState = ue), s.props = i, s.state = ue, s.context = b, xe;
    }
    var Cg, Rg, Tg, wg, xg, EE = function(e, t) {
    };
    Cg = !1, Rg = !1, Tg = {}, wg = {}, xg = {}, EE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Fe(t) || "Component";
        wg[a] || (wg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function mp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & nn || Ne) && !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Fe(e) || "Component";
          Tg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Tg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== se)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          er(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var w = v.refs;
            w === pE && (w = v.refs = {}), b === null ? delete w[y] : w[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Ih(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Yh(e) {
      {
        var t = Fe(e) || "Component";
        if (xg[t])
          return;
        xg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function CE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function RE(e) {
      function t(k, j) {
        if (!!e) {
          var D = k.deletions;
          D === null ? (k.deletions = [j], k.flags |= wt) : D.push(j);
        }
      }
      function a(k, j) {
        if (!e)
          return null;
        for (var D = j; D !== null; )
          t(k, D), D = D.sibling;
        return null;
      }
      function i(k, j) {
        for (var D = /* @__PURE__ */ new Map(), W = j; W !== null; )
          W.key !== null ? D.set(W.key, W) : D.set(W.index, W), W = W.sibling;
        return D;
      }
      function u(k, j) {
        var D = Bs(k, j);
        return D.index = 0, D.sibling = null, D;
      }
      function s(k, j, D) {
        if (k.index = D, !e)
          return k.flags |= sd, j;
        var W = k.alternate;
        if (W !== null) {
          var oe = W.index;
          return oe < j ? (k.flags |= $t, j) : oe;
        } else
          return k.flags |= $t, j;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= $t), k;
      }
      function p(k, j, D, W) {
        if (j === null || j.tag !== Ae) {
          var oe = ZS(D, k.mode, W);
          return oe.return = k, oe;
        } else {
          var re = u(j, D);
          return re.return = k, re;
        }
      }
      function v(k, j, D, W) {
        var oe = D.type;
        if (oe === Ma)
          return g(k, j, D.props.children, W, D.key);
        if (j !== null && (j.elementType === oe || d1(j, D) || typeof oe == "object" && oe !== null && oe.$$typeof === Pn && CE(oe) === j.type)) {
          var re = u(j, D.props);
          return re.ref = mp(k, j, D), re.return = k, re._debugSource = D._source, re._debugOwner = D._owner, re;
        }
        var Le = KS(D, k.mode, W);
        return Le.ref = mp(k, j, D), Le.return = k, Le;
      }
      function y(k, j, D, W) {
        if (j === null || j.tag !== de || j.stateNode.containerInfo !== D.containerInfo || j.stateNode.implementation !== D.implementation) {
          var oe = JS(D, k.mode, W);
          return oe.return = k, oe;
        } else {
          var re = u(j, D.children || []);
          return re.return = k, re;
        }
      }
      function g(k, j, D, W, oe) {
        if (j === null || j.tag !== st) {
          var re = zo(D, k.mode, W, oe);
          return re.return = k, re;
        } else {
          var Le = u(j, D);
          return Le.return = k, Le;
        }
      }
      function b(k, j, D) {
        if (typeof j == "string" && j !== "" || typeof j == "number") {
          var W = ZS("" + j, k.mode, D);
          return W.return = k, W;
        }
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case Ii: {
              var oe = KS(j, k.mode, D);
              return oe.ref = mp(k, null, j), oe.return = k, oe;
            }
            case Qr: {
              var re = JS(j, k.mode, D);
              return re.return = k, re;
            }
            case Pn: {
              var Le = j._payload, Ve = j._init;
              return b(k, Ve(Le), D);
            }
          }
          if (nt(j) || Na(j)) {
            var Nt = zo(j, k.mode, D, null);
            return Nt.return = k, Nt;
          }
          Ih(k, j);
        }
        return typeof j == "function" && Yh(k), null;
      }
      function w(k, j, D, W) {
        var oe = j !== null ? j.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return oe !== null ? null : p(k, j, "" + D, W);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Ii:
              return D.key === oe ? v(k, j, D, W) : null;
            case Qr:
              return D.key === oe ? y(k, j, D, W) : null;
            case Pn: {
              var re = D._payload, Le = D._init;
              return w(k, j, Le(re), W);
            }
          }
          if (nt(D) || Na(D))
            return oe !== null ? null : g(k, j, D, W, null);
          Ih(k, D);
        }
        return typeof D == "function" && Yh(k), null;
      }
      function L(k, j, D, W, oe) {
        if (typeof W == "string" && W !== "" || typeof W == "number") {
          var re = k.get(D) || null;
          return p(j, re, "" + W, oe);
        }
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case Ii: {
              var Le = k.get(W.key === null ? D : W.key) || null;
              return v(j, Le, W, oe);
            }
            case Qr: {
              var Ve = k.get(W.key === null ? D : W.key) || null;
              return y(j, Ve, W, oe);
            }
            case Pn:
              var Nt = W._payload, gt = W._init;
              return L(k, j, D, gt(Nt), oe);
          }
          if (nt(W) || Na(W)) {
            var kn = k.get(D) || null;
            return g(j, kn, W, oe, null);
          }
          Ih(j, W);
        }
        return typeof W == "function" && Yh(j), null;
      }
      function N(k, j, D) {
        {
          if (typeof k != "object" || k === null)
            return j;
          switch (k.$$typeof) {
            case Ii:
            case Qr:
              EE(k, D);
              var W = k.key;
              if (typeof W != "string")
                break;
              if (j === null) {
                j = /* @__PURE__ */ new Set(), j.add(W);
                break;
              }
              if (!j.has(W)) {
                j.add(W);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", W);
              break;
            case Pn:
              var oe = k._payload, re = k._init;
              N(re(oe), j, D);
              break;
          }
        }
        return j;
      }
      function F(k, j, D, W) {
        for (var oe = null, re = 0; re < D.length; re++) {
          var Le = D[re];
          oe = N(Le, oe, k);
        }
        for (var Ve = null, Nt = null, gt = j, kn = 0, St = 0, Sn = null; gt !== null && St < D.length; St++) {
          gt.index > St ? (Sn = gt, gt = null) : Sn = gt.sibling;
          var $r = w(k, gt, D[St], W);
          if ($r === null) {
            gt === null && (gt = Sn);
            break;
          }
          e && gt && $r.alternate === null && t(k, gt), kn = s($r, kn, St), Nt === null ? Ve = $r : Nt.sibling = $r, Nt = $r, gt = Sn;
        }
        if (St === D.length) {
          if (a(k, gt), pr()) {
            var Er = St;
            Ds(k, Er);
          }
          return Ve;
        }
        if (gt === null) {
          for (; St < D.length; St++) {
            var Ia = b(k, D[St], W);
            Ia !== null && (kn = s(Ia, kn, St), Nt === null ? Ve = Ia : Nt.sibling = Ia, Nt = Ia);
          }
          if (pr()) {
            var na = St;
            Ds(k, na);
          }
          return Ve;
        }
        for (var ra = i(k, gt); St < D.length; St++) {
          var Ir = L(ra, k, St, D[St], W);
          Ir !== null && (e && Ir.alternate !== null && ra.delete(Ir.key === null ? St : Ir.key), kn = s(Ir, kn, St), Nt === null ? Ve = Ir : Nt.sibling = Ir, Nt = Ir);
        }
        if (e && ra.forEach(function(Uf) {
          return t(k, Uf);
        }), pr()) {
          var _u = St;
          Ds(k, _u);
        }
        return Ve;
      }
      function ue(k, j, D, W) {
        var oe = Na(D);
        if (typeof oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && D[Symbol.toStringTag] === "Generator" && (Rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Rg = !0), D.entries === oe && (Cg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Cg = !0);
          var re = oe.call(D);
          if (re)
            for (var Le = null, Ve = re.next(); !Ve.done; Ve = re.next()) {
              var Nt = Ve.value;
              Le = N(Nt, Le, k);
            }
        }
        var gt = oe.call(D);
        if (gt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var kn = null, St = null, Sn = j, $r = 0, Er = 0, Ia = null, na = gt.next(); Sn !== null && !na.done; Er++, na = gt.next()) {
          Sn.index > Er ? (Ia = Sn, Sn = null) : Ia = Sn.sibling;
          var ra = w(k, Sn, na.value, W);
          if (ra === null) {
            Sn === null && (Sn = Ia);
            break;
          }
          e && Sn && ra.alternate === null && t(k, Sn), $r = s(ra, $r, Er), St === null ? kn = ra : St.sibling = ra, St = ra, Sn = Ia;
        }
        if (na.done) {
          if (a(k, Sn), pr()) {
            var Ir = Er;
            Ds(k, Ir);
          }
          return kn;
        }
        if (Sn === null) {
          for (; !na.done; Er++, na = gt.next()) {
            var _u = b(k, na.value, W);
            _u !== null && ($r = s(_u, $r, Er), St === null ? kn = _u : St.sibling = _u, St = _u);
          }
          if (pr()) {
            var Uf = Er;
            Ds(k, Uf);
          }
          return kn;
        }
        for (var Qp = i(k, Sn); !na.done; Er++, na = gt.next()) {
          var zl = L(Qp, k, Er, na.value, W);
          zl !== null && (e && zl.alternate !== null && Qp.delete(zl.key === null ? Er : zl.key), $r = s(zl, $r, Er), St === null ? kn = zl : St.sibling = zl, St = zl);
        }
        if (e && Qp.forEach(function(V_) {
          return t(k, V_);
        }), pr()) {
          var j_ = Er;
          Ds(k, j_);
        }
        return kn;
      }
      function xe(k, j, D, W) {
        if (j !== null && j.tag === Ae) {
          a(k, j.sibling);
          var oe = u(j, D);
          return oe.return = k, oe;
        }
        a(k, j);
        var re = ZS(D, k.mode, W);
        return re.return = k, re;
      }
      function Se(k, j, D, W) {
        for (var oe = D.key, re = j; re !== null; ) {
          if (re.key === oe) {
            var Le = D.type;
            if (Le === Ma) {
              if (re.tag === st) {
                a(k, re.sibling);
                var Ve = u(re, D.props.children);
                return Ve.return = k, Ve._debugSource = D._source, Ve._debugOwner = D._owner, Ve;
              }
            } else if (re.elementType === Le || d1(re, D) || typeof Le == "object" && Le !== null && Le.$$typeof === Pn && CE(Le) === re.type) {
              a(k, re.sibling);
              var Nt = u(re, D.props);
              return Nt.ref = mp(k, re, D), Nt.return = k, Nt._debugSource = D._source, Nt._debugOwner = D._owner, Nt;
            }
            a(k, re);
            break;
          } else
            t(k, re);
          re = re.sibling;
        }
        if (D.type === Ma) {
          var gt = zo(D.props.children, k.mode, W, D.key);
          return gt.return = k, gt;
        } else {
          var kn = KS(D, k.mode, W);
          return kn.ref = mp(k, j, D), kn.return = k, kn;
        }
      }
      function ut(k, j, D, W) {
        for (var oe = D.key, re = j; re !== null; ) {
          if (re.key === oe)
            if (re.tag === de && re.stateNode.containerInfo === D.containerInfo && re.stateNode.implementation === D.implementation) {
              a(k, re.sibling);
              var Le = u(re, D.children || []);
              return Le.return = k, Le;
            } else {
              a(k, re);
              break;
            }
          else
            t(k, re);
          re = re.sibling;
        }
        var Ve = JS(D, k.mode, W);
        return Ve.return = k, Ve;
      }
      function et(k, j, D, W) {
        var oe = typeof D == "object" && D !== null && D.type === Ma && D.key === null;
        if (oe && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Ii:
              return f(Se(k, j, D, W));
            case Qr:
              return f(ut(k, j, D, W));
            case Pn:
              var re = D._payload, Le = D._init;
              return et(k, j, Le(re), W);
          }
          if (nt(D))
            return F(k, j, D, W);
          if (Na(D))
            return ue(k, j, D, W);
          Ih(k, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(xe(k, j, "" + D, W)) : (typeof D == "function" && Yh(k), a(k, j));
      }
      return et;
    }
    var gf = RE(!0), TE = RE(!1);
    function _w(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Bs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Bs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function kw(e, t) {
      for (var a = e.child; a !== null; )
        r_(a, t), a = a.sibling;
    }
    var yp = {}, bo = Co(yp), gp = Co(yp), Qh = Co(yp);
    function Wh(e) {
      if (e === yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function wE() {
      var e = Wh(Qh.current);
      return e;
    }
    function bg(e, t) {
      Pr(Qh, t, e), Pr(gp, e, e), Pr(bo, yp, e);
      var a = BR(t);
      Vr(bo, e), Pr(bo, a, e);
    }
    function Sf(e) {
      Vr(bo, e), Vr(gp, e), Vr(Qh, e);
    }
    function _g() {
      var e = Wh(bo.current);
      return e;
    }
    function xE(e) {
      Wh(Qh.current);
      var t = Wh(bo.current), a = $R(t, e.type);
      t !== a && (Pr(gp, e, e), Pr(bo, a, e));
    }
    function kg(e) {
      gp.current === e && (Vr(bo, e), Vr(gp, e));
    }
    var Dw = 0, bE = 1, _E = 1, Sp = 2, Ai = Co(Dw);
    function Dg(e, t) {
      return (e & t) !== 0;
    }
    function Ef(e) {
      return e & bE;
    }
    function Og(e, t) {
      return e & bE | t;
    }
    function Ow(e, t) {
      return e | t;
    }
    function _o(e, t) {
      Pr(Ai, t, e);
    }
    function Cf(e) {
      Vr(Ai, e);
    }
    function Lw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Gh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === we) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || H0(i) || Ay(i))
              return t;
          }
        } else if (t.tag === xt && t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ue) !== Te;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ra = 0, Yn = 1, kl = 2, Qn = 4, vr = 8, Lg = [];
    function Mg() {
      for (var e = 0; e < Lg.length; e++) {
        var t = Lg[e];
        t._workInProgressVersionPrimary = null;
      }
      Lg.length = 0;
    }
    function Mw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ie = A.ReactCurrentDispatcher, Ep = A.ReactCurrentBatchConfig, Ng, Rf;
    Ng = /* @__PURE__ */ new Set();
    var zs = V, Mt = null, Wn = null, Gn = null, qh = !1, Cp = !1, Rp = 0, Nw = 0, Uw = 25, P = null, ui = null, ko = -1, Ug = !1;
    function kt() {
      {
        var e = P;
        ui === null ? ui = [e] : ui.push(e);
      }
    }
    function Z() {
      {
        var e = P;
        ui !== null && (ko++, ui[ko] !== e && zw(e));
      }
    }
    function Tf(e) {
      e != null && !nt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function zw(e) {
      {
        var t = Fe(Mt);
        if (!Ng.has(t) && (Ng.add(t), ui !== null)) {
          for (var a = "", i = 30, u = 0; u <= ko; u++) {
            for (var s = ui[u], f = u === ko ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Br() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function zg(e, t) {
      if (Ug)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ve(e[a], t[a]))
          return !1;
      return !0;
    }
    function wf(e, t, a, i, u, s) {
      zs = s, Mt = t, ui = e !== null ? e._debugHookTypes : null, ko = -1, Ug = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = V, e !== null && e.memoizedState !== null ? ie.current = qE : ui !== null ? ie.current = GE : ie.current = WE;
      var f = a(i, u);
      if (Cp) {
        var p = 0;
        do {
          if (Cp = !1, Rp = 0, p >= Uw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Ug = !1, Wn = null, Gn = null, t.updateQueue = null, ko = -1, ie.current = XE, f = a(i, u);
        } while (Cp);
      }
      ie.current = om, t._debugHookTypes = ui;
      var v = Wn !== null && Wn.next !== null;
      if (zs = V, Mt = null, Wn = null, Gn = null, P = null, ui = null, ko = -1, e !== null && (e.flags & Bn) !== (t.flags & Bn) && (e.mode & qe) !== _e && S("Internal React error: Expected static flag was missing. Please notify the React team."), qh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function xf() {
      var e = Rp !== 0;
      return Rp = 0, e;
    }
    function kE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & va) !== _e ? t.flags &= ~(ql | Ur | Xt | $e) : t.flags &= ~(Xt | $e), e.lanes = ro(e.lanes, a);
    }
    function DE() {
      if (ie.current = om, qh) {
        for (var e = Mt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        qh = !1;
      }
      zs = V, Mt = null, Wn = null, Gn = null, ui = null, ko = -1, P = null, BE = !1, Cp = !1, Rp = 0;
    }
    function Dl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Gn === null ? Mt.memoizedState = Gn = e : Gn = Gn.next = e, Gn;
    }
    function oi() {
      var e;
      if (Wn === null) {
        var t = Mt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Wn.next;
      var a;
      if (Gn === null ? a = Mt.memoizedState : a = Gn.next, a !== null)
        Gn = a, a = Gn.next, Wn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Wn = e;
        var i = {
          memoizedState: Wn.memoizedState,
          baseState: Wn.baseState,
          baseQueue: Wn.baseQueue,
          queue: Wn.queue,
          next: null
        };
        Gn === null ? Mt.memoizedState = Gn = i : Gn = Gn.next = i;
      }
      return Gn;
    }
    function OE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Ag(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Hg(e, t, a) {
      var i = Dl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = jw.bind(null, Mt, s);
      return [i.memoizedState, f];
    }
    function Fg(e, t, a) {
      var i = oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Wn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, w = null, L = null, N = null, F = g;
        do {
          var ue = F.lane;
          if (iu(zs, ue)) {
            if (N !== null) {
              var Se = {
                lane: it,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              N = N.next = Se;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var ut = F.action;
              b = e(b, ut);
            }
          } else {
            var xe = {
              lane: ue,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            N === null ? (L = N = xe, w = b) : N = N.next = xe, Mt.lanes = Ie(Mt.lanes, ue), Pp(ue);
          }
          F = F.next;
        } while (F !== null && F !== g);
        N === null ? w = b : N.next = L, ve(b, i.memoizedState) || Dp(), i.memoizedState = b, i.baseState = w, i.baseQueue = N, u.lastRenderedState = b;
      }
      var et = u.interleaved;
      if (et !== null) {
        var k = et;
        do {
          var j = k.lane;
          Mt.lanes = Ie(Mt.lanes, j), Pp(j), k = k.next;
        } while (k !== et);
      } else
        f === null && (u.lanes = V);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function jg(e, t, a) {
      var i = oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        ve(p, i.memoizedState) || Dp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function tk(e, t, a) {
    }
    function nk(e, t, a) {
    }
    function Vg(e, t, a) {
      var i = Mt, u = Dl(), s, f = pr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Rf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Rf = !0);
      } else {
        if (s = t(), !Rf) {
          var p = t();
          ve(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Rf = !0);
        }
        var v = bm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ds(v, zs) || LE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, em(NE.bind(null, i, y, e), [e]), i.flags |= Xt, Tp(Yn | vr, ME.bind(null, i, y, s, t), void 0, null), s;
    }
    function Xh(e, t, a) {
      var i = Mt, u = oi(), s = t();
      if (!Rf) {
        var f = t();
        ve(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Rf = !0);
      }
      var p = u.memoizedState, v = !ve(p, s);
      v && (u.memoizedState = s, Dp());
      var y = u.queue;
      if (xp(NE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || Gn !== null && Gn.memoizedState.tag & Yn) {
        i.flags |= Xt, Tp(Yn | vr, ME.bind(null, i, y, s, t), void 0, null);
        var g = bm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ds(g, zs) || LE(i, t, s);
      }
      return s;
    }
    function LE(e, t, a) {
      e.flags |= rs;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Mt.updateQueue;
      if (u === null)
        u = OE(), Mt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function ME(e, t, a, i) {
      t.value = a, t.getSnapshot = i, UE(t) && zE(e);
    }
    function NE(e, t, a) {
      var i = function() {
        UE(t) && zE(e);
      };
      return a(i);
    }
    function UE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ve(a, i);
      } catch {
        return !0;
      }
    }
    function zE(e) {
      var t = Ca(e, Oe);
      t !== null && Zn(t, e, Oe, Ht);
    }
    function Kh(e) {
      var t = Dl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: Ag,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Vw.bind(null, Mt, a);
      return [t.memoizedState, i];
    }
    function Pg(e) {
      return Fg(Ag);
    }
    function Bg(e) {
      return jg(Ag);
    }
    function Tp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        next: null
      }, s = Mt.updateQueue;
      if (s === null)
        s = OE(), Mt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function $g(e) {
      var t = Dl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Zh(e) {
      var t = oi();
      return t.memoizedState;
    }
    function wp(e, t, a, i) {
      var u = Dl(), s = i === void 0 ? null : i;
      Mt.flags |= e, u.memoizedState = Tp(Yn | t, a, void 0, s);
    }
    function Jh(e, t, a, i) {
      var u = oi(), s = i === void 0 ? null : i, f = void 0;
      if (Wn !== null) {
        var p = Wn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (zg(s, v)) {
            u.memoizedState = Tp(t, a, f, s);
            return;
          }
        }
      }
      Mt.flags |= e, u.memoizedState = Tp(Yn | t, a, f, s);
    }
    function em(e, t) {
      return (Mt.mode & va) !== _e ? wp(ql | Xt | fl, vr, e, t) : wp(Xt | fl, vr, e, t);
    }
    function xp(e, t) {
      return Jh(Xt, vr, e, t);
    }
    function Ig(e, t) {
      return wp($e, kl, e, t);
    }
    function tm(e, t) {
      return Jh($e, kl, e, t);
    }
    function Yg(e, t) {
      var a = $e;
      return a |= Nr, (Mt.mode & va) !== _e && (a |= Ur), wp(a, Qn, e, t);
    }
    function nm(e, t) {
      return Jh($e, Qn, e, t);
    }
    function AE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Qg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = $e;
      return u |= Nr, (Mt.mode & va) !== _e && (u |= Ur), wp(u, Qn, AE.bind(null, t, e), i);
    }
    function rm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Jh($e, Qn, AE.bind(null, t, e), i);
    }
    function Aw(e, t) {
    }
    var am = Aw;
    function Wg(e, t) {
      var a = Dl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function im(e, t) {
      var a = oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (zg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Gg(e, t) {
      var a = Dl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function lm(e, t) {
      var a = oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (zg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function qg(e) {
      var t = Dl();
      return t.memoizedState = e, e;
    }
    function HE(e) {
      var t = oi(), a = Wn, i = a.memoizedState;
      return jE(t, i, e);
    }
    function FE(e) {
      var t = oi();
      if (Wn === null)
        return t.memoizedState = e, e;
      var a = Wn.memoizedState;
      return jE(t, a, e);
    }
    function jE(e, t, a) {
      var i = !ty(zs);
      if (i) {
        if (!ve(a, t)) {
          var u = bd();
          Mt.lanes = Ie(Mt.lanes, u), Pp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Dp()), e.memoizedState = a, a;
    }
    function Hw(e, t, a) {
      var i = ma();
      xn(rr(i, In)), e(!0);
      var u = Ep.transition;
      Ep.transition = {};
      var s = Ep.transition;
      Ep.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (xn(i), Ep.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Me("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Xg() {
      var e = Kh(!1), t = e[0], a = e[1], i = Hw.bind(null, a), u = Dl();
      return u.memoizedState = i, [t, i];
    }
    function VE() {
      var e = Pg(), t = e[0], a = oi(), i = a.memoizedState;
      return [t, i];
    }
    function PE() {
      var e = Bg(), t = e[0], a = oi(), i = a.memoizedState;
      return [t, i];
    }
    var BE = !1;
    function Fw() {
      return BE;
    }
    function Kg() {
      var e = Dl(), t = bm(), a = t.identifierPrefix, i;
      if (pr()) {
        var u = ZT();
        i = ":" + a + "R" + u;
        var s = Rp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Nw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function um() {
      var e = oi(), t = e.memoizedState;
      return t;
    }
    function jw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = No(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($E(e))
        IE(t, u);
      else {
        var s = uE(e, t, u, i);
        if (s !== null) {
          var f = ta();
          Zn(s, e, i, f), YE(s, t, i);
        }
      }
      QE(e, i);
    }
    function Vw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = No(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($E(e))
        IE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === V && (s === null || s.lanes === V)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ie.current, ie.current = Hi;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ve(y, v)) {
                gw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ie.current = p;
            }
          }
        }
        var g = uE(e, t, u, i);
        if (g !== null) {
          var b = ta();
          Zn(g, e, i, b), YE(g, t, i);
        }
      }
      QE(e, i);
    }
    function $E(e) {
      var t = e.alternate;
      return e === Mt || t !== null && t === Mt;
    }
    function IE(e, t) {
      Cp = qh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function YE(e, t, a) {
      if (xd(a)) {
        var i = t.lanes;
        i = _d(i, e.pendingLanes);
        var u = Ie(i, a);
        t.lanes = u, ao(e, u);
      }
    }
    function QE(e, t, a) {
      yl(e, t);
    }
    var om = {
      readContext: jn,
      useCallback: Br,
      useContext: Br,
      useEffect: Br,
      useImperativeHandle: Br,
      useInsertionEffect: Br,
      useLayoutEffect: Br,
      useMemo: Br,
      useReducer: Br,
      useRef: Br,
      useState: Br,
      useDebugValue: Br,
      useDeferredValue: Br,
      useTransition: Br,
      useMutableSource: Br,
      useSyncExternalStore: Br,
      useId: Br,
      unstable_isNewReconciler: X
    }, WE = null, GE = null, qE = null, XE = null, Ol = null, Hi = null, sm = null;
    {
      var Zg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, je = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      WE = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", kt(), Tf(t), Wg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", kt(), jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", kt(), Tf(t), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", kt(), Tf(a), Qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", kt(), Tf(t), Ig(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", kt(), Tf(t), Yg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", kt(), Tf(t);
          var a = ie.current;
          ie.current = Ol;
          try {
            return Gg(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", kt();
          var i = ie.current;
          ie.current = Ol;
          try {
            return Hg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", kt(), $g(e);
        },
        useState: function(e) {
          P = "useState", kt();
          var t = ie.current;
          ie.current = Ol;
          try {
            return Kh(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", kt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", kt(), qg(e);
        },
        useTransition: function() {
          return P = "useTransition", kt(), Xg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", kt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", kt(), Vg(e, t, a);
        },
        useId: function() {
          return P = "useId", kt(), Kg();
        },
        unstable_isNewReconciler: X
      }, GE = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Z(), Wg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Z(), jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Z(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Z(), Qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Z(), Ig(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Z(), Yg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Z();
          var a = ie.current;
          ie.current = Ol;
          try {
            return Gg(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Z();
          var i = ie.current;
          ie.current = Ol;
          try {
            return Hg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Z(), $g(e);
        },
        useState: function(e) {
          P = "useState", Z();
          var t = ie.current;
          ie.current = Ol;
          try {
            return Kh(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Z(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Z(), qg(e);
        },
        useTransition: function() {
          return P = "useTransition", Z(), Xg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Z(), Vg(e, t, a);
        },
        useId: function() {
          return P = "useId", Z(), Kg();
        },
        unstable_isNewReconciler: X
      }, qE = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Z(), im(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Z(), jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Z(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Z(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Z(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Z(), nm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Z();
          var a = ie.current;
          ie.current = Hi;
          try {
            return lm(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Z();
          var i = ie.current;
          ie.current = Hi;
          try {
            return Fg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Z(), Zh();
        },
        useState: function(e) {
          P = "useState", Z();
          var t = ie.current;
          ie.current = Hi;
          try {
            return Pg(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Z(), am();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Z(), HE(e);
        },
        useTransition: function() {
          return P = "useTransition", Z(), VE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Z(), Xh(e, t);
        },
        useId: function() {
          return P = "useId", Z(), um();
        },
        unstable_isNewReconciler: X
      }, XE = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Z(), im(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Z(), jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Z(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Z(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Z(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Z(), nm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Z();
          var a = ie.current;
          ie.current = sm;
          try {
            return lm(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Z();
          var i = ie.current;
          ie.current = sm;
          try {
            return jg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Z(), Zh();
        },
        useState: function(e) {
          P = "useState", Z();
          var t = ie.current;
          ie.current = sm;
          try {
            return Bg(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Z(), am();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Z(), FE(e);
        },
        useTransition: function() {
          return P = "useTransition", Z(), PE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Z(), Xh(e, t);
        },
        useId: function() {
          return P = "useId", Z(), um();
        },
        unstable_isNewReconciler: X
      }, Ol = {
        readContext: function(e) {
          return Zg(), jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", je(), kt(), Wg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", je(), kt(), jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", je(), kt(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", je(), kt(), Qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", je(), kt(), Ig(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", je(), kt(), Yg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", je(), kt();
          var a = ie.current;
          ie.current = Ol;
          try {
            return Gg(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", je(), kt();
          var i = ie.current;
          ie.current = Ol;
          try {
            return Hg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", je(), kt(), $g(e);
        },
        useState: function(e) {
          P = "useState", je(), kt();
          var t = ie.current;
          ie.current = Ol;
          try {
            return Kh(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", je(), kt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", je(), kt(), qg(e);
        },
        useTransition: function() {
          return P = "useTransition", je(), kt(), Xg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", je(), kt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", je(), kt(), Vg(e, t, a);
        },
        useId: function() {
          return P = "useId", je(), kt(), Kg();
        },
        unstable_isNewReconciler: X
      }, Hi = {
        readContext: function(e) {
          return Zg(), jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", je(), Z(), im(e, t);
        },
        useContext: function(e) {
          return P = "useContext", je(), Z(), jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", je(), Z(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", je(), Z(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", je(), Z(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", je(), Z(), nm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", je(), Z();
          var a = ie.current;
          ie.current = Hi;
          try {
            return lm(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", je(), Z();
          var i = ie.current;
          ie.current = Hi;
          try {
            return Fg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", je(), Z(), Zh();
        },
        useState: function(e) {
          P = "useState", je(), Z();
          var t = ie.current;
          ie.current = Hi;
          try {
            return Pg(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", je(), Z(), am();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", je(), Z(), HE(e);
        },
        useTransition: function() {
          return P = "useTransition", je(), Z(), VE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", je(), Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", je(), Z(), Xh(e, t);
        },
        useId: function() {
          return P = "useId", je(), Z(), um();
        },
        unstable_isNewReconciler: X
      }, sm = {
        readContext: function(e) {
          return Zg(), jn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", je(), Z(), im(e, t);
        },
        useContext: function(e) {
          return P = "useContext", je(), Z(), jn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", je(), Z(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", je(), Z(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", je(), Z(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", je(), Z(), nm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", je(), Z();
          var a = ie.current;
          ie.current = Hi;
          try {
            return lm(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", je(), Z();
          var i = ie.current;
          ie.current = Hi;
          try {
            return jg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", je(), Z(), Zh();
        },
        useState: function(e) {
          P = "useState", je(), Z();
          var t = ie.current;
          ie.current = Hi;
          try {
            return Bg(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", je(), Z(), am();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", je(), Z(), FE(e);
        },
        useTransition: function() {
          return P = "useTransition", je(), Z(), PE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", je(), Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", je(), Z(), Xh(e, t);
        },
        useId: function() {
          return P = "useId", je(), Z(), um();
        },
        unstable_isNewReconciler: X
      };
    }
    var Do = $.unstable_now, KE = 0, cm = -1, bp = -1, fm = -1, Jg = !1, dm = !1;
    function ZE() {
      return Jg;
    }
    function Pw() {
      dm = !0;
    }
    function Bw() {
      Jg = !1, dm = !1;
    }
    function $w() {
      Jg = dm, dm = !1;
    }
    function JE() {
      return KE;
    }
    function eC() {
      KE = Do();
    }
    function eS(e) {
      bp = Do(), e.actualStartTime < 0 && (e.actualStartTime = Do());
    }
    function tC(e) {
      bp = -1;
    }
    function pm(e, t) {
      if (bp >= 0) {
        var a = Do() - bp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), bp = -1;
      }
    }
    function Ll(e) {
      if (cm >= 0) {
        var t = Do() - cm;
        cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case rt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function tS(e) {
      if (fm >= 0) {
        var t = Do() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case rt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ml() {
      cm = Do();
    }
    function nS() {
      fm = Do();
    }
    function rS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function As(e, t) {
      return {
        value: e,
        source: t,
        stack: zu(t),
        digest: null
      };
    }
    function aS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a != null ? a : null,
        digest: t != null ? t : null
      };
    }
    function Iw(e, t) {
      return !0;
    }
    function iS(e, t) {
      try {
        var a = Iw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === se)
            return;
          console.error(i);
        }
        var p = u ? Fe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Fe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var Yw = typeof WeakMap == "function" ? WeakMap : Map;
    function nC(e, t, a) {
      var i = Cu(Ht, a);
      i.tag = ig, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Hb(u), iS(e, t);
      }, i;
    }
    function lS(e, t, a) {
      var i = Cu(Ht, a);
      i.tag = ig;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          p1(e), iS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        p1(e), iS(e, t), typeof u != "function" && zb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (jr(e.lanes, Oe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Fe(e) || "Unknown"));
      }), i;
    }
    function rC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Yw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Fb.bind(null, e, t, a);
        $n && Bp(e, a), t.then(s, s);
      }
    }
    function Qw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Ww(e, t) {
      var a = e.tag;
      if ((e.mode & qe) === _e && (a === fe || a === Be || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function aC(e) {
      var t = e;
      do {
        if (t.tag === we && Lw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function iC(e, t, a, i, u) {
      if ((e.mode & qe) === _e) {
        if (e === t)
          e.flags |= Un;
        else {
          if (e.flags |= Ue, a.flags |= as, a.flags &= ~(sc | Wr), a.tag === se) {
            var s = a.alternate;
            if (s === null)
              a.tag = On;
            else {
              var f = Cu(Ht, Oe);
              f.tag = Hh, xo(a, f, Oe);
            }
          }
          a.lanes = Ie(a.lanes, Oe);
        }
        return e;
      }
      return e.flags |= Un, e.lanes = u, e;
    }
    function Gw(e, t, a, i, u) {
      if (a.flags |= Wr, $n && Bp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Ww(a), pr() && a.mode & qe && q0();
        var f = aC(t);
        if (f !== null) {
          f.flags &= ~on, iC(f, t, a, e, u), f.mode & qe && rC(e, s, u), Qw(f, e, s);
          return;
        } else {
          if (!no(u)) {
            rC(e, s, u), jS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (pr() && a.mode & qe) {
        q0();
        var v = aC(t);
        if (v !== null) {
          (v.flags & Un) === Te && (v.flags |= on), iC(v, t, a, e, u), Zy(As(i, a));
          return;
        }
      }
      i = As(i, a), _b(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= Un;
            var b = wn(u);
            y.lanes = Ie(y.lanes, b);
            var w = nC(y, g, b);
            og(y, w);
            return;
          }
          case se:
            var L = i, N = y.type, F = y.stateNode;
            if ((y.flags & Ue) === Te && (typeof N.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !a1(F))) {
              y.flags |= Un;
              var ue = wn(u);
              y.lanes = Ie(y.lanes, ue);
              var xe = lS(y, L, ue);
              og(y, xe);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function qw() {
      return null;
    }
    var _p = A.ReactCurrentOwner, Fi = !1, uS, kp, oS, sS, cS, Hs, fS, vm;
    uS = {}, kp = {}, oS = {}, sS = {}, cS = {}, Hs = !1, fS = {}, vm = {};
    function Jr(e, t, a, i) {
      e === null ? t.child = TE(t, null, a, i) : t.child = gf(t, e.child, a, i);
    }
    function Xw(e, t, a, i) {
      t.child = gf(t, e.child, null, i), t.child = gf(t, null, a, i);
    }
    function lC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Mi(
          s,
          i,
          "prop",
          ct(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      yf(t, u), ml(t);
      {
        if (_p.current = t, Or(!0), v = wf(e, t, f, i, p, u), y = xf(), t.mode & nn) {
          Tn(!0);
          try {
            v = wf(e, t, f, i, p, u), y = xf();
          } finally {
            Tn(!1);
          }
        }
        Or(!1);
      }
      return Xl(), e !== null && !Fi ? (kE(e, t, u), Ru(e, t, u)) : (pr() && y && Qy(t), t.flags |= sl, Jr(e, t, v, u), t.child);
    }
    function uC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (t_(s) && a.compare === null && a.defaultProps === void 0) {
          var f = s;
          return f = Nf(s), t.tag = He, t.type = f, vS(t, s), oC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Mi(
            p,
            i,
            "prop",
            ct(s)
          );
        }
        var v = XS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Mi(
          g,
          i,
          "prop",
          ct(y)
        );
      }
      var b = e.child, w = ES(e, u);
      if (!w) {
        var L = b.memoizedProps, N = a.compare;
        if (N = N !== null ? N : Ee, N(L, i) && e.ref === t.ref)
          return Ru(e, t, u);
      }
      t.flags |= sl;
      var F = Bs(b, i);
      return F.ref = t.ref, F.return = t, t.child = F, F;
    }
    function oC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Pn) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Mi(
            y,
            i,
            "prop",
            ct(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Ee(g, i) && e.ref === t.ref && t.type === e.type)
          if (Fi = !1, t.pendingProps = i = g, ES(e, u))
            (e.flags & as) !== Te && (Fi = !0);
          else
            return t.lanes = e.lanes, Ru(e, t, u);
      }
      return dS(e, t, a, i, u);
    }
    function sC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || R)
        if ((t.mode & qe) === _e) {
          var f = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, _m(t, a);
        } else if (jr(a, Fr)) {
          var b = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          _m(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ie(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Fr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, _m(t, v), null;
        }
      else {
        var L;
        s !== null ? (L = Ie(s.baseLanes, a), t.memoizedState = null) : L = a, _m(t, L);
      }
      return Jr(e, t, u, a), t.child;
    }
    function Kw(e, t, a) {
      var i = t.pendingProps;
      return Jr(e, t, i, a), t.child;
    }
    function Zw(e, t, a) {
      var i = t.pendingProps.children;
      return Jr(e, t, i, a), t.child;
    }
    function Jw(e, t, a) {
      {
        t.flags |= $e;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Jr(e, t, s, a), t.child;
    }
    function cC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Mr, t.flags |= cd);
    }
    function dS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Mi(
          s,
          i,
          "prop",
          ct(a)
        );
      }
      var f;
      {
        var p = ff(t, a, !0);
        f = df(t, p);
      }
      var v, y;
      yf(t, u), ml(t);
      {
        if (_p.current = t, Or(!0), v = wf(e, t, a, i, f, u), y = xf(), t.mode & nn) {
          Tn(!0);
          try {
            v = wf(e, t, a, i, f, u), y = xf();
          } finally {
            Tn(!1);
          }
        }
        Or(!1);
      }
      return Xl(), e !== null && !Fi ? (kE(e, t, u), Ru(e, t, u)) : (pr() && y && Qy(t), t.flags |= sl, Jr(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      {
        switch (m_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ue, t.flags |= Un;
            var y = new Error("Simulated error coming from DevTools"), g = wn(u);
            t.lanes = Ie(t.lanes, g);
            var b = lS(t, As(y, t), g);
            og(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Mi(
            w,
            i,
            "prop",
            ct(a)
          );
        }
      }
      var L;
      _l(a) ? (L = !0, bh(t)) : L = !1, yf(t, u);
      var N = t.stateNode, F;
      N === null ? (mm(e, t), gE(t, a, i), Eg(t, a, i, u), F = !0) : e === null ? F = xw(t, a, i, u) : F = bw(e, t, a, i, u);
      var ue = pS(e, t, a, F, L, u);
      {
        var xe = t.stateNode;
        F && xe.props !== i && (Hs || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Fe(t) || "a component"), Hs = !0);
      }
      return ue;
    }
    function pS(e, t, a, i, u, s) {
      cC(e, t);
      var f = (t.flags & Ue) !== Te;
      if (!i && !f)
        return u && Y0(t, a, !1), Ru(e, t, s);
      var p = t.stateNode;
      _p.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, tC();
      else {
        ml(t);
        {
          if (Or(!0), v = p.render(), t.mode & nn) {
            Tn(!0);
            try {
              p.render();
            } finally {
              Tn(!1);
            }
          }
          Or(!1);
        }
        Xl();
      }
      return t.flags |= sl, e !== null && f ? Xw(e, t, v, s) : Jr(e, t, v, s), t.memoizedState = p.state, u && Y0(t, a, !0), t.child;
    }
    function dC(e) {
      var t = e.stateNode;
      t.pendingContext ? $0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $0(e, t.context, !1), bg(e, t.containerInfo);
    }
    function ex(e, t, a) {
      if (dC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      cE(e, t), Ph(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & on) {
          var g = As(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return pC(e, t, p, a, g);
        } else if (p !== s) {
          var b = As(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return pC(e, t, p, a, b);
        } else {
          aw(t);
          var w = TE(t, null, p, a);
          t.child = w;
          for (var L = w; L; )
            L.flags = L.flags & ~$t | fa, L = L.sibling;
        }
      } else {
        if (hf(), p === s)
          return Ru(e, t, a);
        Jr(e, t, p, a);
      }
      return t.child;
    }
    function pC(e, t, a, i, u) {
      return hf(), Zy(u), t.flags |= on, Jr(e, t, a, i), t.child;
    }
    function tx(e, t, a) {
      xE(t), e === null && Ky(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = My(i, u);
      return p ? f = null : s !== null && My(i, s) && (t.flags |= _t), cC(e, t), Jr(e, t, f, a), t.child;
    }
    function nx(e, t) {
      return e === null && Ky(t), null;
    }
    function rx(e, t, a, i) {
      mm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = n_(v), g = zi(v, u), b;
      switch (y) {
        case fe:
          return vS(t, v), t.type = v = Nf(v), b = dS(null, t, v, g, i), b;
        case se:
          return t.type = v = IS(v), b = fC(null, t, v, g, i), b;
        case Be:
          return t.type = v = YS(v), b = lC(null, t, v, g, i), b;
        case Ke: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Mi(
              w,
              g,
              "prop",
              ct(v)
            );
          }
          return b = uC(
            null,
            t,
            v,
            zi(v.type, g),
            i
          ), b;
        }
      }
      var L = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Pn && (L = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + L));
    }
    function ax(e, t, a, i, u) {
      mm(e, t), t.tag = se;
      var s;
      return _l(a) ? (s = !0, bh(t)) : s = !1, yf(t, u), gE(t, a, i), Eg(t, a, i, u), pS(null, t, a, !0, s, u);
    }
    function ix(e, t, a, i) {
      mm(e, t);
      var u = t.pendingProps, s;
      {
        var f = ff(t, a, !1);
        s = df(t, f);
      }
      yf(t, i);
      var p, v;
      ml(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = ct(a) || "Unknown";
          uS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), uS[y] = !0);
        }
        t.mode & nn && Ui.recordLegacyContextWarning(t, null), Or(!0), _p.current = t, p = wf(null, t, a, u, s, i), v = xf(), Or(!1);
      }
      if (Xl(), t.flags |= sl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = ct(a) || "Unknown";
        kp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), kp[g] = !0);
      }
      if (typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        {
          var b = ct(a) || "Unknown";
          kp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), kp[b] = !0);
        }
        t.tag = se, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return _l(a) ? (w = !0, bh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, ug(t), yE(t, p), Eg(t, a, u, i), pS(null, t, a, !0, w, i);
      } else {
        if (t.tag = fe, t.mode & nn) {
          Tn(!0);
          try {
            p = wf(null, t, a, u, s, i), v = xf();
          } finally {
            Tn(!1);
          }
        }
        return pr() && v && Qy(t), Jr(null, t, p, i), vS(t, a), t.child;
      }
    }
    function vS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = cr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), cS[u] || (cS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = ct(t) || "Unknown";
          sS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), sS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = ct(t) || "Unknown";
          oS[p] || (S("%s: Function components do not support contextType.", p), oS[p] = !0);
        }
      }
    }
    var hS = {
      dehydrated: null,
      treeContext: null,
      retryLane: it
    };
    function mS(e) {
      return {
        baseLanes: e,
        cachePool: qw(),
        transitions: null
      };
    }
    function lx(e, t) {
      var a = null;
      return {
        baseLanes: Ie(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function ux(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Dg(e, Sp);
    }
    function ox(e, t) {
      return ro(e.childLanes, t);
    }
    function vC(e, t, a) {
      var i = t.pendingProps;
      y_(t) && (t.flags |= Ue);
      var u = Ai.current, s = !1, f = (t.flags & Ue) !== Te;
      if (f || ux(u, e) ? (s = !0, t.flags &= ~Ue) : (e === null || e.memoizedState !== null) && (u = Ow(u, _E)), u = Ef(u), _o(t, u), e === null) {
        Ky(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return px(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = sx(t, y, g, a), w = t.child;
          return w.memoizedState = mS(a), t.memoizedState = hS, b;
        } else
          return yS(t, y);
      } else {
        var L = e.memoizedState;
        if (L !== null) {
          var N = L.dehydrated;
          if (N !== null)
            return vx(e, t, f, i, N, L, a);
        }
        if (s) {
          var F = i.fallback, ue = i.children, xe = fx(e, t, ue, F, a), Se = t.child, ut = e.child.memoizedState;
          return Se.memoizedState = ut === null ? mS(a) : lx(ut, a), Se.childLanes = ox(e, a), t.memoizedState = hS, xe;
        } else {
          var et = i.children, k = cx(e, t, et, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function yS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = gS(u, i);
      return s.return = e, e.child = s, s;
    }
    function sx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & qe) === _e && s !== null ? (p = s, p.childLanes = V, p.pendingProps = f, e.mode & De && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = zo(a, u, i, null)) : (p = gS(f, u), v = zo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function gS(e, t, a) {
      return h1(e, t, V, null);
    }
    function hC(e, t) {
      return Bs(e, t);
    }
    function cx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = hC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & qe) === _e && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= wt) : p.push(s);
      }
      return t.child = f, f;
    }
    function fx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if ((s & qe) === _e && t.child !== f) {
        var g = t.child;
        y = g, y.childLanes = V, y.pendingProps = v, t.mode & De && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = hC(f, v), y.subtreeFlags = f.subtreeFlags & Bn;
      var b;
      return p !== null ? b = Bs(p, i) : (b = zo(i, s, u, null), b.flags |= $t), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function hm(e, t, a, i) {
      i !== null && Zy(i), gf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = yS(t, s);
      return f.flags |= $t, t.memoizedState = null, f;
    }
    function dx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = gS(f, s), v = zo(i, s, u, null);
      return v.flags |= $t, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & qe) !== _e && gf(t, e.child, null, u), v;
    }
    function px(e, t, a) {
      return (e.mode & qe) === _e ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Oe) : Ay(t) ? e.lanes = Jl : e.lanes = Fr, null;
    }
    function vx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & on) {
          t.flags &= ~on;
          var k = aS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return hm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ue, null;
          var j = i.children, D = i.fallback, W = dx(e, t, j, D, f), oe = t.child;
          return oe.memoizedState = mS(f), t.memoizedState = hS, W;
        }
      else {
        if (nw(), (t.mode & qe) === _e)
          return hm(
            e,
            t,
            f,
            null
          );
        if (Ay(u)) {
          var p, v, y;
          {
            var g = ST(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = aS(b, p, y);
          return hm(e, t, f, w);
        }
        var L = jr(f, e.childLanes);
        if (Fi || L) {
          var N = bm();
          if (N !== null) {
            var F = ry(N, f);
            if (F !== it && F !== s.retryLane) {
              s.retryLane = F;
              var ue = Ht;
              Ca(e, F), Zn(N, e, F, ue);
            }
          }
          jS();
          var xe = aS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return hm(e, t, f, xe);
        } else if (H0(u)) {
          t.flags |= Ue, t.child = e.child;
          var Se = jb.bind(null, e);
          return ET(u, Se), null;
        } else {
          iw(t, u, s.treeContext);
          var ut = i.children, et = yS(t, ut);
          return et.flags |= fa, et;
        }
      }
    }
    function mC(e, t, a) {
      e.lanes = Ie(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ie(i.lanes, t)), rg(e.return, t, a);
    }
    function hx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === we) {
          var u = i.memoizedState;
          u !== null && mC(i, a, e);
        } else if (i.tag === xt)
          mC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function mx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Gh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function yx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !fS[e])
        if (fS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function gx(e, t) {
      e !== void 0 && !vm[e] && (e !== "collapsed" && e !== "hidden" ? (vm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (vm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function yC(e, t) {
      {
        var a = nt(e), i = !a && typeof Na(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Sx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (nt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!yC(e[a], a))
              return;
        } else {
          var i = Na(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!yC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function SS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function gC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      yx(u), gx(s, u), Sx(f, u), Jr(e, t, f, a);
      var p = Ai.current, v = Dg(p, Sp);
      if (v)
        p = Og(p, Sp), t.flags |= Ue;
      else {
        var y = e !== null && (e.flags & Ue) !== Te;
        y && hx(t, t.child, a), p = Ef(p);
      }
      if (_o(t, p), (t.mode & qe) === _e)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = mx(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), SS(
              t,
              !1,
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, L = t.child;
            for (t.child = null; L !== null; ) {
              var N = L.alternate;
              if (N !== null && Gh(N) === null) {
                t.child = L;
                break;
              }
              var F = L.sibling;
              L.sibling = w, w = L, L = F;
            }
            SS(
              t,
              !0,
              w,
              null,
              s
            );
            break;
          }
          case "together": {
            SS(
              t,
              !1,
              null,
              null,
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ex(e, t, a) {
      bg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = gf(t, null, i, a) : Jr(e, t, i, a), t.child;
    }
    var SC = !1;
    function Cx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || SC || (SC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Mi(v, s, "prop", "Context.Provider");
      }
      if (lE(t, u, p), f !== null) {
        var y = f.value;
        if (ve(y, p)) {
          if (f.children === s.children && !wh())
            return Ru(e, t, a);
        } else
          hw(t, u, a);
      }
      var g = s.children;
      return Jr(e, t, g, a), t.child;
    }
    var EC = !1;
    function Rx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (EC || (EC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), yf(t, a);
      var f = jn(i);
      ml(t);
      var p;
      return _p.current = t, Or(!0), p = s(f), Or(!1), Xl(), t.flags |= sl, Jr(e, t, p, a), t.child;
    }
    function Dp() {
      Fi = !0;
    }
    function mm(e, t) {
      (t.mode & qe) === _e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= $t);
    }
    function Ru(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), tC(), Pp(t.lanes), jr(a, t.childLanes) ? (_w(e, t), t.child) : null;
    }
    function Tx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= wt) : s.push(e), a.flags |= $t, a;
      }
    }
    function ES(e, t) {
      var a = e.lanes;
      return !!jr(a, t);
    }
    function wx(e, t, a) {
      switch (t.tag) {
        case te:
          dC(t), t.stateNode, hf();
          break;
        case ne:
          xE(t);
          break;
        case se: {
          var i = t.type;
          _l(i) && bh(t);
          break;
        }
        case de:
          bg(t, t.stateNode.containerInfo);
          break;
        case mt: {
          var u = t.memoizedProps.value, s = t.type._context;
          lE(t, s, u);
          break;
        }
        case rt:
          {
            var f = jr(a, t.childLanes);
            f && (t.flags |= $e);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case we: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return _o(t, Ef(Ai.current)), t.flags |= Ue, null;
            var y = t.child, g = y.childLanes;
            if (jr(a, g))
              return vC(e, t, a);
            _o(t, Ef(Ai.current));
            var b = Ru(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            _o(t, Ef(Ai.current));
          break;
        }
        case xt: {
          var w = (e.flags & Ue) !== Te, L = jr(a, t.childLanes);
          if (w) {
            if (L)
              return gC(e, t, a);
            t.flags |= Ue;
          }
          var N = t.memoizedState;
          if (N !== null && (N.rendering = null, N.tail = null, N.lastEffect = null), _o(t, Ai.current), L)
            break;
          return null;
        }
        case Ye:
        case at:
          return t.lanes = V, sC(e, t, a);
      }
      return Ru(e, t, a);
    }
    function CC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Tx(e, t, XS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || wh() || t.type !== e.type)
          Fi = !0;
        else {
          var s = ES(e, a);
          if (!s && (t.flags & Ue) === Te)
            return Fi = !1, wx(e, t, a);
          (e.flags & as) !== Te ? Fi = !0 : Fi = !1;
        }
      } else if (Fi = !1, pr() && XT(t)) {
        var f = t.index, p = KT();
        G0(t, p, f);
      }
      switch (t.lanes = V, t.tag) {
        case dt:
          return ix(e, t, t.type, a);
        case Zt: {
          var v = t.elementType;
          return rx(e, t, v, a);
        }
        case fe: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : zi(y, g);
          return dS(e, t, y, b, a);
        }
        case se: {
          var w = t.type, L = t.pendingProps, N = t.elementType === w ? L : zi(w, L);
          return fC(e, t, w, N, a);
        }
        case te:
          return ex(e, t, a);
        case ne:
          return tx(e, t, a);
        case Ae:
          return nx(e, t);
        case we:
          return vC(e, t, a);
        case de:
          return Ex(e, t, a);
        case Be: {
          var F = t.type, ue = t.pendingProps, xe = t.elementType === F ? ue : zi(F, ue);
          return lC(e, t, F, xe, a);
        }
        case st:
          return Kw(e, t, a);
        case Xe:
          return Zw(e, t, a);
        case rt:
          return Jw(e, t, a);
        case mt:
          return Cx(e, t, a);
        case Dn:
          return Rx(e, t, a);
        case Ke: {
          var Se = t.type, ut = t.pendingProps, et = zi(Se, ut);
          if (t.type !== t.elementType) {
            var k = Se.propTypes;
            k && Mi(
              k,
              et,
              "prop",
              ct(Se)
            );
          }
          return et = zi(Se.type, et), uC(e, t, Se, et, a);
        }
        case He:
          return oC(e, t, t.type, t.pendingProps, a);
        case On: {
          var j = t.type, D = t.pendingProps, W = t.elementType === j ? D : zi(j, D);
          return ax(e, t, j, W, a);
        }
        case xt:
          return gC(e, t, a);
        case Cn:
          break;
        case Ye:
          return sC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function bf(e) {
      e.flags |= $e;
    }
    function RC(e) {
      e.flags |= Mr, e.flags |= cd;
    }
    var TC, CS, wC, xC;
    TC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ne || u.tag === Ae)
          WR(e, u.stateNode);
        else if (u.tag !== de) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, CS = function(e, t) {
    }, wC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = _g(), v = qR(f, a, s, i, u, p);
        t.updateQueue = v, v && bf(t);
      }
    }, xC = function(e, t, a, i) {
      a !== i && bf(t);
    };
    function Op(e, t) {
      if (!pr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = V, i = Te;
      if (t) {
        if ((e.mode & De) !== _e) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ie(a, Ie(y.lanes, y.childLanes)), i |= y.subtreeFlags & Bn, i |= y.flags & Bn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ie(a, Ie(g.lanes, g.childLanes)), i |= g.subtreeFlags & Bn, i |= g.flags & Bn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & De) !== _e) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ie(a, Ie(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ie(a, Ie(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function xx(e, t, a) {
      if (cw() && (t.mode & qe) !== _e && (t.flags & Ue) === Te)
        return tE(t), hf(), t.flags |= on | Wr | Un, !1;
      var i = Lh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (ow(t), hr(t), (t.mode & De) !== _e) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (hf(), (t.flags & Ue) === Te && (t.memoizedState = null), t.flags |= $e, hr(t), (t.mode & De) !== _e) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return nE(), !0;
    }
    function bC(e, t, a) {
      var i = t.pendingProps;
      switch (Wy(t), t.tag) {
        case dt:
        case Zt:
        case He:
        case fe:
        case Be:
        case st:
        case Xe:
        case rt:
        case Dn:
        case Ke:
          return hr(t), null;
        case se: {
          var u = t.type;
          return _l(u) && xh(t), hr(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (Sf(t), $y(t), Mg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Lh(t);
            if (f)
              bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              (!p.isDehydrated || (t.flags & on) !== Te) && (t.flags |= ca, nE());
            }
          }
          return CS(e, t), hr(t), null;
        }
        case ne: {
          kg(t);
          var v = wE(), y = t.type;
          if (e !== null && t.stateNode != null)
            wC(e, t, y, i, v), e.ref !== t.ref && RC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return hr(t), null;
            }
            var g = _g(), b = Lh(t);
            if (b)
              lw(t, v, g) && bf(t);
            else {
              var w = QR(y, i, v, g, t);
              TC(w, t, !1, !1), t.stateNode = w, GR(w, y, i, v) && bf(t);
            }
            t.ref !== null && RC(t);
          }
          return hr(t), null;
        }
        case Ae: {
          var L = i;
          if (e && t.stateNode != null) {
            var N = e.memoizedProps;
            xC(e, t, N, L);
          } else {
            if (typeof L != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = wE(), ue = _g(), xe = Lh(t);
            xe ? uw(t) && bf(t) : t.stateNode = XR(L, F, ue, t);
          }
          return hr(t), null;
        }
        case we: {
          Cf(t);
          var Se = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var ut = xx(e, t, Se);
            if (!ut)
              return t.flags & Un ? t : null;
          }
          if ((t.flags & Ue) !== Te)
            return t.lanes = a, (t.mode & De) !== _e && rS(t), t;
          var et = Se !== null, k = e !== null && e.memoizedState !== null;
          if (et !== k && et) {
            var j = t.child;
            if (j.flags |= cl, (t.mode & qe) !== _e) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !B);
              D || Dg(Ai.current, _E) ? bb() : jS();
            }
          }
          var W = t.updateQueue;
          if (W !== null && (t.flags |= $e), hr(t), (t.mode & De) !== _e && et) {
            var oe = t.child;
            oe !== null && (t.treeBaseDuration -= oe.treeBaseDuration);
          }
          return null;
        }
        case de:
          return Sf(t), CS(e, t), e === null && $T(t.stateNode.containerInfo), hr(t), null;
        case mt:
          var re = t.type._context;
          return ng(re, t), hr(t), null;
        case On: {
          var Le = t.type;
          return _l(Le) && xh(t), hr(t), null;
        }
        case xt: {
          Cf(t);
          var Ve = t.memoizedState;
          if (Ve === null)
            return hr(t), null;
          var Nt = (t.flags & Ue) !== Te, gt = Ve.rendering;
          if (gt === null)
            if (Nt)
              Op(Ve, !1);
            else {
              var kn = kb() && (e === null || (e.flags & Ue) === Te);
              if (!kn)
                for (var St = t.child; St !== null; ) {
                  var Sn = Gh(St);
                  if (Sn !== null) {
                    Nt = !0, t.flags |= Ue, Op(Ve, !1);
                    var $r = Sn.updateQueue;
                    return $r !== null && (t.updateQueue = $r, t.flags |= $e), t.subtreeFlags = Te, kw(t, a), _o(t, Og(Ai.current, Sp)), t.child;
                  }
                  St = St.sibling;
                }
              Ve.tail !== null && tn() > WC() && (t.flags |= Ue, Nt = !0, Op(Ve, !1), t.lanes = Td);
            }
          else {
            if (!Nt) {
              var Er = Gh(gt);
              if (Er !== null) {
                t.flags |= Ue, Nt = !0;
                var Ia = Er.updateQueue;
                if (Ia !== null && (t.updateQueue = Ia, t.flags |= $e), Op(Ve, !0), Ve.tail === null && Ve.tailMode === "hidden" && !gt.alternate && !pr())
                  return hr(t), null;
              } else
                tn() * 2 - Ve.renderingStartTime > WC() && a !== Fr && (t.flags |= Ue, Nt = !0, Op(Ve, !1), t.lanes = Td);
            }
            if (Ve.isBackwards)
              gt.sibling = t.child, t.child = gt;
            else {
              var na = Ve.last;
              na !== null ? na.sibling = gt : t.child = gt, Ve.last = gt;
            }
          }
          if (Ve.tail !== null) {
            var ra = Ve.tail;
            Ve.rendering = ra, Ve.tail = ra.sibling, Ve.renderingStartTime = tn(), ra.sibling = null;
            var Ir = Ai.current;
            return Nt ? Ir = Og(Ir, Sp) : Ir = Ef(Ir), _o(t, Ir), ra;
          }
          return hr(t), null;
        }
        case Cn:
          break;
        case Ye:
        case at: {
          FS(t);
          var _u = t.memoizedState, Uf = _u !== null;
          if (e !== null) {
            var Qp = e.memoizedState, zl = Qp !== null;
            zl !== Uf && !R && (t.flags |= cl);
          }
          return !Uf || (t.mode & qe) === _e ? hr(t) : jr(Ul, Fr) && (hr(t), t.subtreeFlags & ($t | $e) && (t.flags |= cl)), null;
        }
        case Gt:
          return null;
        case Tt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function bx(e, t, a) {
      switch (Wy(t), t.tag) {
        case se: {
          var i = t.type;
          _l(i) && xh(t);
          var u = t.flags;
          return u & Un ? (t.flags = u & ~Un | Ue, (t.mode & De) !== _e && rS(t), t) : null;
        }
        case te: {
          t.stateNode, Sf(t), $y(t), Mg();
          var s = t.flags;
          return (s & Un) !== Te && (s & Ue) === Te ? (t.flags = s & ~Un | Ue, t) : null;
        }
        case ne:
          return kg(t), null;
        case we: {
          Cf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            hf();
          }
          var p = t.flags;
          return p & Un ? (t.flags = p & ~Un | Ue, (t.mode & De) !== _e && rS(t), t) : null;
        }
        case xt:
          return Cf(t), null;
        case de:
          return Sf(t), null;
        case mt:
          var v = t.type._context;
          return ng(v, t), null;
        case Ye:
        case at:
          return FS(t), null;
        case Gt:
          return null;
        default:
          return null;
      }
    }
    function _C(e, t, a) {
      switch (Wy(t), t.tag) {
        case se: {
          var i = t.type.childContextTypes;
          i != null && xh(t);
          break;
        }
        case te: {
          t.stateNode, Sf(t), $y(t), Mg();
          break;
        }
        case ne: {
          kg(t);
          break;
        }
        case de:
          Sf(t);
          break;
        case we:
          Cf(t);
          break;
        case xt:
          Cf(t);
          break;
        case mt:
          var u = t.type._context;
          ng(u, t);
          break;
        case Ye:
        case at:
          FS(t);
          break;
      }
    }
    var kC = null;
    kC = /* @__PURE__ */ new Set();
    var ym = !1, mr = !1, _x = typeof WeakSet == "function" ? WeakSet : Set, he = null, _f = null, kf = null;
    function kx(e) {
      Gl(null, function() {
        throw e;
      }), od();
    }
    var Dx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & De)
        try {
          Ml(), t.componentWillUnmount();
        } finally {
          Ll(e);
        }
      else
        t.componentWillUnmount();
    };
    function DC(e, t) {
      try {
        Oo(Qn, e);
      } catch (a) {
        Wt(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        Dx(e, a);
      } catch (i) {
        Wt(e, t, i);
      }
    }
    function Ox(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Wt(e, t, i);
      }
    }
    function OC(e, t) {
      try {
        MC(e);
      } catch (a) {
        Wt(e, t, a);
      }
    }
    function Df(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ze && vt && e.mode & De)
              try {
                Ml(), i = a(null);
              } finally {
                Ll(e);
              }
            else
              i = a(null);
          } catch (u) {
            Wt(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Fe(e));
        } else
          a.current = null;
    }
    function gm(e, t, a) {
      try {
        a();
      } catch (i) {
        Wt(e, t, i);
      }
    }
    var LC = !1;
    function Lx(e, t) {
      IR(e.containerInfo), he = t, Mx();
      var a = LC;
      return LC = !1, a;
    }
    function Mx() {
      for (; he !== null; ) {
        var e = he, t = e.child;
        (e.subtreeFlags & qu) !== Te && t !== null ? (t.return = e, he = t) : Nx();
      }
    }
    function Nx() {
      for (; he !== null; ) {
        var e = he;
        bt(e);
        try {
          Ux(e);
        } catch (a) {
          Wt(e, e.return, a);
        }
        un();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, he = t;
          return;
        }
        he = e.return;
      }
    }
    function Ux(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ca) !== Te) {
        switch (bt(e), e.tag) {
          case fe:
          case Be:
          case He:
            break;
          case se: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Hs && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Fe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Fe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : zi(e.type, i), u);
              {
                var p = kC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Fe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              hT(v.containerInfo);
            }
            break;
          }
          case ne:
          case Ae:
          case de:
          case On:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        un();
      }
    }
    function ji(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & vr) !== Ra ? yc(t) : (e & Qn) !== Ra && gc(t), (e & kl) !== Ra && $p(!0), gm(t, a, p), (e & kl) !== Ra && $p(!1), (e & vr) !== Ra ? Ov() : (e & Qn) !== Ra && Xu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Oo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & vr) !== Ra ? Dv(t) : (e & Qn) !== Ra && Lv(t);
            var f = s.create;
            (e & kl) !== Ra && $p(!0), s.destroy = f(), (e & kl) !== Ra && $p(!1), (e & vr) !== Ra ? Ed() : (e & Qn) !== Ra && Mv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Qn) !== Te ? v = "useLayoutEffect" : (s.tag & kl) !== Te ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function zx(e, t) {
      if ((t.flags & $e) !== Te)
        switch (t.tag) {
          case rt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = JE(), p = t.alternate === null ? "mount" : "update";
            ZE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case te:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case rt:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Ax(e, t, a, i) {
      if ((a.flags & tr) !== Te)
        switch (a.tag) {
          case fe:
          case Be:
          case He: {
            if (!mr)
              if (a.mode & De)
                try {
                  Ml(), Oo(Qn | Yn, a);
                } finally {
                  Ll(a);
                }
              else
                Oo(Qn | Yn, a);
            break;
          }
          case se: {
            var u = a.stateNode;
            if (a.flags & $e && !mr)
              if (t === null)
                if (a.type === a.elementType && !Hs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Fe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Fe(a) || "instance")), a.mode & De)
                  try {
                    Ml(), u.componentDidMount();
                  } finally {
                    Ll(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : zi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Hs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Fe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Fe(a) || "instance")), a.mode & De)
                  try {
                    Ml(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ll(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Hs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Fe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Fe(a) || "instance")), dE(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ne:
                    y = a.child.stateNode;
                    break;
                  case se:
                    y = a.child.stateNode;
                    break;
                }
              dE(a, v, y);
            }
            break;
          }
          case ne: {
            var g = a.stateNode;
            if (t === null && a.flags & $e) {
              var b = a.type, w = a.memoizedProps;
              tT(g, b, w);
            }
            break;
          }
          case Ae:
            break;
          case de:
            break;
          case rt: {
            {
              var L = a.memoizedProps, N = L.onCommit, F = L.onRender, ue = a.stateNode.effectDuration, xe = JE(), Se = t === null ? "mount" : "update";
              ZE() && (Se = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, Se, a.actualDuration, a.treeBaseDuration, a.actualStartTime, xe);
              {
                typeof N == "function" && N(a.memoizedProps.id, Se, ue, xe), Nb(a);
                var ut = a.return;
                e:
                  for (; ut !== null; ) {
                    switch (ut.tag) {
                      case te:
                        var et = ut.stateNode;
                        et.effectDuration += ue;
                        break e;
                      case rt:
                        var k = ut.stateNode;
                        k.effectDuration += ue;
                        break e;
                    }
                    ut = ut.return;
                  }
              }
            }
            break;
          }
          case we: {
            Ix(e, a);
            break;
          }
          case xt:
          case On:
          case Cn:
          case Ye:
          case at:
          case Tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      mr || a.flags & Mr && MC(a);
    }
    function Hx(e) {
      switch (e.tag) {
        case fe:
        case Be:
        case He: {
          if (e.mode & De)
            try {
              Ml(), DC(e, e.return);
            } finally {
              Ll(e);
            }
          else
            DC(e, e.return);
          break;
        }
        case se: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Ox(e, e.return, t), OC(e, e.return);
          break;
        }
        case ne: {
          OC(e, e.return);
          break;
        }
      }
    }
    function Fx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ne) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? fT(u) : pT(i.stateNode, i.memoizedProps);
            } catch (f) {
              Wt(e, e.return, f);
            }
          }
        } else if (i.tag === Ae) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? dT(s) : vT(s, i.memoizedProps);
            } catch (f) {
              Wt(e, e.return, f);
            }
        } else if (!((i.tag === Ye || i.tag === at) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function MC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ne:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & De)
            try {
              Ml(), u = t(i);
            } finally {
              Ll(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Fe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Fe(e)), t.current = i;
      }
    }
    function jx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function NC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, NC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ne) {
          var a = e.stateNode;
          a !== null && QT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Vx(e) {
      for (var t = e.return; t !== null; ) {
        if (UC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function UC(e) {
      return e.tag === ne || e.tag === te || e.tag === de;
    }
    function zC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || UC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ne && t.tag !== Ae && t.tag !== Ft; ) {
            if (t.flags & $t || t.child === null || t.tag === de)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & $t))
            return t.stateNode;
        }
    }
    function Px(e) {
      var t = Vx(e);
      switch (t.tag) {
        case ne: {
          var a = t.stateNode;
          t.flags & _t && (A0(a), t.flags &= ~_t);
          var i = zC(e);
          wS(e, i, a);
          break;
        }
        case te:
        case de: {
          var u = t.stateNode.containerInfo, s = zC(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === ne || i === Ae;
      if (u) {
        var s = e.stateNode;
        t ? uT(a, s, t) : iT(a, s);
      } else if (i !== de) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === ne || i === Ae;
      if (u) {
        var s = e.stateNode;
        t ? lT(a, s, t) : aT(a, s);
      } else if (i !== de) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var yr = null, Vi = !1;
    function Bx(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ne: {
                yr = i.stateNode, Vi = !1;
                break e;
              }
              case te: {
                yr = i.stateNode.containerInfo, Vi = !0;
                break e;
              }
              case de: {
                yr = i.stateNode.containerInfo, Vi = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (yr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        AC(e, t, a), yr = null, Vi = !1;
      }
      jx(a);
    }
    function Lo(e, t, a) {
      for (var i = a.child; i !== null; )
        AC(e, t, i), i = i.sibling;
    }
    function AC(e, t, a) {
      switch (gd(a), a.tag) {
        case ne:
          mr || Df(a, t);
        case Ae: {
          {
            var i = yr, u = Vi;
            yr = null, Lo(e, t, a), yr = i, Vi = u, yr !== null && (Vi ? sT(yr, a.stateNode) : oT(yr, a.stateNode));
          }
          return;
        }
        case Ft: {
          yr !== null && (Vi ? cT(yr, a.stateNode) : zy(yr, a.stateNode));
          return;
        }
        case de: {
          {
            var s = yr, f = Vi;
            yr = a.stateNode.containerInfo, Vi = !0, Lo(e, t, a), yr = s, Vi = f;
          }
          return;
        }
        case fe:
        case Be:
        case Ke:
        case He: {
          if (!mr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, L = b.tag;
                  w !== void 0 && ((L & kl) !== Ra ? gm(a, t, w) : (L & Qn) !== Ra && (gc(a), a.mode & De ? (Ml(), gm(a, t, w), Ll(a)) : gm(a, t, w), Xu())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Lo(e, t, a);
          return;
        }
        case se: {
          if (!mr) {
            Df(a, t);
            var N = a.stateNode;
            typeof N.componentWillUnmount == "function" && RS(a, t, N);
          }
          Lo(e, t, a);
          return;
        }
        case Cn: {
          Lo(e, t, a);
          return;
        }
        case Ye: {
          if (a.mode & qe) {
            var F = mr;
            mr = F || a.memoizedState !== null, Lo(e, t, a), mr = F;
          } else
            Lo(e, t, a);
          break;
        }
        default: {
          Lo(e, t, a);
          return;
        }
      }
    }
    function $x(e) {
      e.memoizedState;
    }
    function Ix(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && DT(s);
          }
        }
      }
    }
    function HC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new _x()), t.forEach(function(i) {
          var u = Vb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), $n)
              if (_f !== null && kf !== null)
                Bp(kf, _f);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Yx(e, t, a) {
      _f = a, kf = e, bt(t), FC(t, e), bt(t), _f = null, kf = null;
    }
    function Pi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Bx(e, t, s);
          } catch (v) {
            Wt(s, t, v);
          }
        }
      var f = qs();
      if (t.subtreeFlags & zr)
        for (var p = t.child; p !== null; )
          bt(p), FC(p, e), p = p.sibling;
      bt(f);
    }
    function FC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case fe:
        case Be:
        case Ke:
        case He: {
          if (Pi(t, e), Nl(e), u & $e) {
            try {
              ji(kl | Yn, e, e.return), Oo(kl | Yn, e);
            } catch (Le) {
              Wt(e, e.return, Le);
            }
            if (e.mode & De) {
              try {
                Ml(), ji(Qn | Yn, e, e.return);
              } catch (Le) {
                Wt(e, e.return, Le);
              }
              Ll(e);
            } else
              try {
                ji(Qn | Yn, e, e.return);
              } catch (Le) {
                Wt(e, e.return, Le);
              }
          }
          return;
        }
        case se: {
          Pi(t, e), Nl(e), u & Mr && i !== null && Df(i, i.return);
          return;
        }
        case ne: {
          Pi(t, e), Nl(e), u & Mr && i !== null && Df(i, i.return);
          {
            if (e.flags & _t) {
              var s = e.stateNode;
              try {
                A0(s);
              } catch (Le) {
                Wt(e, e.return, Le);
              }
            }
            if (u & $e) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    nT(f, g, y, v, p, e);
                  } catch (Le) {
                    Wt(e, e.return, Le);
                  }
              }
            }
          }
          return;
        }
        case Ae: {
          if (Pi(t, e), Nl(e), u & $e) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, L = i !== null ? i.memoizedProps : w;
            try {
              rT(b, L, w);
            } catch (Le) {
              Wt(e, e.return, Le);
            }
          }
          return;
        }
        case te: {
          if (Pi(t, e), Nl(e), u & $e && i !== null) {
            var N = i.memoizedState;
            if (N.isDehydrated)
              try {
                kT(t.containerInfo);
              } catch (Le) {
                Wt(e, e.return, Le);
              }
          }
          return;
        }
        case de: {
          Pi(t, e), Nl(e);
          return;
        }
        case we: {
          Pi(t, e), Nl(e);
          var F = e.child;
          if (F.flags & cl) {
            var ue = F.stateNode, xe = F.memoizedState, Se = xe !== null;
            if (ue.isHidden = Se, Se) {
              var ut = F.alternate !== null && F.alternate.memoizedState !== null;
              ut || xb();
            }
          }
          if (u & $e) {
            try {
              $x(e);
            } catch (Le) {
              Wt(e, e.return, Le);
            }
            HC(e);
          }
          return;
        }
        case Ye: {
          var et = i !== null && i.memoizedState !== null;
          if (e.mode & qe) {
            var k = mr;
            mr = k || et, Pi(t, e), mr = k;
          } else
            Pi(t, e);
          if (Nl(e), u & cl) {
            var j = e.stateNode, D = e.memoizedState, W = D !== null, oe = e;
            if (j.isHidden = W, W && !et && (oe.mode & qe) !== _e) {
              he = oe;
              for (var re = oe.child; re !== null; )
                he = re, Wx(re), re = re.sibling;
            }
            Fx(oe, W);
          }
          return;
        }
        case xt: {
          Pi(t, e), Nl(e), u & $e && HC(e);
          return;
        }
        case Cn:
          return;
        default: {
          Pi(t, e), Nl(e);
          return;
        }
      }
    }
    function Nl(e) {
      var t = e.flags;
      if (t & $t) {
        try {
          Px(e);
        } catch (a) {
          Wt(e, e.return, a);
        }
        e.flags &= ~$t;
      }
      t & fa && (e.flags &= ~fa);
    }
    function Qx(e, t, a) {
      _f = a, kf = t, he = e, jC(e, t, a), _f = null, kf = null;
    }
    function jC(e, t, a) {
      for (var i = (e.mode & qe) !== _e; he !== null; ) {
        var u = he, s = u.child;
        if (u.tag === Ye && i) {
          var f = u.memoizedState !== null, p = f || ym;
          if (p) {
            xS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || mr, b = ym, w = mr;
            ym = p, mr = g, mr && !w && (he = u, Gx(u));
            for (var L = s; L !== null; )
              he = L, jC(
                L,
                t,
                a
              ), L = L.sibling;
            he = u, ym = b, mr = w, xS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & tr) !== Te && s !== null ? (s.return = u, he = s) : xS(e, t, a);
      }
    }
    function xS(e, t, a) {
      for (; he !== null; ) {
        var i = he;
        if ((i.flags & tr) !== Te) {
          var u = i.alternate;
          bt(i);
          try {
            Ax(t, u, i, a);
          } catch (f) {
            Wt(i, i.return, f);
          }
          un();
        }
        if (i === e) {
          he = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, he = s;
          return;
        }
        he = i.return;
      }
    }
    function Wx(e) {
      for (; he !== null; ) {
        var t = he, a = t.child;
        switch (t.tag) {
          case fe:
          case Be:
          case Ke:
          case He: {
            if (t.mode & De)
              try {
                Ml(), ji(Qn, t, t.return);
              } finally {
                Ll(t);
              }
            else
              ji(Qn, t, t.return);
            break;
          }
          case se: {
            Df(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case ne: {
            Df(t, t.return);
            break;
          }
          case Ye: {
            var u = t.memoizedState !== null;
            if (u) {
              VC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, he = a) : VC(e);
      }
    }
    function VC(e) {
      for (; he !== null; ) {
        var t = he;
        if (t === e) {
          he = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, he = a;
          return;
        }
        he = t.return;
      }
    }
    function Gx(e) {
      for (; he !== null; ) {
        var t = he, a = t.child;
        if (t.tag === Ye) {
          var i = t.memoizedState !== null;
          if (i) {
            PC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, he = a) : PC(e);
      }
    }
    function PC(e) {
      for (; he !== null; ) {
        var t = he;
        bt(t);
        try {
          Hx(t);
        } catch (i) {
          Wt(t, t.return, i);
        }
        if (un(), t === e) {
          he = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, he = a;
          return;
        }
        he = t.return;
      }
    }
    function qx(e, t, a, i) {
      he = t, Xx(t, e, a, i);
    }
    function Xx(e, t, a, i) {
      for (; he !== null; ) {
        var u = he, s = u.child;
        (u.subtreeFlags & da) !== Te && s !== null ? (s.return = u, he = s) : Kx(e, t, a, i);
      }
    }
    function Kx(e, t, a, i) {
      for (; he !== null; ) {
        var u = he;
        if ((u.flags & Xt) !== Te) {
          bt(u);
          try {
            Zx(t, u, a, i);
          } catch (f) {
            Wt(u, u.return, f);
          }
          un();
        }
        if (u === e) {
          he = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, he = s;
          return;
        }
        he = u.return;
      }
    }
    function Zx(e, t, a, i) {
      switch (t.tag) {
        case fe:
        case Be:
        case He: {
          if (t.mode & De) {
            nS();
            try {
              Oo(vr | Yn, t);
            } finally {
              tS(t);
            }
          } else
            Oo(vr | Yn, t);
          break;
        }
      }
    }
    function Jx(e) {
      he = e, eb();
    }
    function eb() {
      for (; he !== null; ) {
        var e = he, t = e.child;
        if ((he.flags & wt) !== Te) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              he = u, rb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            he = e;
          }
        }
        (e.subtreeFlags & da) !== Te && t !== null ? (t.return = e, he = t) : tb();
      }
    }
    function tb() {
      for (; he !== null; ) {
        var e = he;
        (e.flags & Xt) !== Te && (bt(e), nb(e), un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, he = t;
          return;
        }
        he = e.return;
      }
    }
    function nb(e) {
      switch (e.tag) {
        case fe:
        case Be:
        case He: {
          e.mode & De ? (nS(), ji(vr | Yn, e, e.return), tS(e)) : ji(vr | Yn, e, e.return);
          break;
        }
      }
    }
    function rb(e, t) {
      for (; he !== null; ) {
        var a = he;
        bt(a), ib(a, t), un();
        var i = a.child;
        i !== null ? (i.return = a, he = i) : ab(e);
      }
    }
    function ab(e) {
      for (; he !== null; ) {
        var t = he, a = t.sibling, i = t.return;
        if (NC(t), t === e) {
          he = null;
          return;
        }
        if (a !== null) {
          a.return = i, he = a;
          return;
        }
        he = i;
      }
    }
    function ib(e, t) {
      switch (e.tag) {
        case fe:
        case Be:
        case He: {
          e.mode & De ? (nS(), ji(vr, e, t), tS(e)) : ji(vr, e, t);
          break;
        }
      }
    }
    function lb(e) {
      switch (e.tag) {
        case fe:
        case Be:
        case He: {
          try {
            Oo(Qn | Yn, e);
          } catch (a) {
            Wt(e, e.return, a);
          }
          break;
        }
        case se: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Wt(e, e.return, a);
          }
          break;
        }
      }
    }
    function ub(e) {
      switch (e.tag) {
        case fe:
        case Be:
        case He: {
          try {
            Oo(vr | Yn, e);
          } catch (t) {
            Wt(e, e.return, t);
          }
          break;
        }
      }
    }
    function ob(e) {
      switch (e.tag) {
        case fe:
        case Be:
        case He: {
          try {
            ji(Qn | Yn, e, e.return);
          } catch (a) {
            Wt(e, e.return, a);
          }
          break;
        }
        case se: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function sb(e) {
      switch (e.tag) {
        case fe:
        case Be:
        case He:
          try {
            ji(vr | Yn, e, e.return);
          } catch (t) {
            Wt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Lp = Symbol.for;
      Lp("selector.component"), Lp("selector.has_pseudo_class"), Lp("selector.role"), Lp("selector.test_id"), Lp("selector.text");
    }
    var cb = [];
    function fb() {
      cb.forEach(function(e) {
        return e();
      });
    }
    var db = A.ReactCurrentActQueue;
    function pb(e) {
      {
        var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0, a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function BC() {
      {
        var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return !e && db.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var vb = Math.ceil, bS = A.ReactCurrentDispatcher, _S = A.ReactCurrentOwner, gr = A.ReactCurrentBatchConfig, Bi = A.ReactCurrentActQueue, qn = 0, $C = 1, Sr = 2, si = 4, Tu = 0, Mp = 1, Fs = 2, Sm = 3, Np = 4, IC = 5, kS = 6, lt = qn, ea = null, hn = null, Xn = V, Ul = V, DS = Co(V), Kn = Tu, Up = null, Em = V, zp = V, Cm = V, Ap = null, Ta = null, OS = 0, YC = 500, QC = 1 / 0, hb = 500, wu = null;
    function Hp() {
      QC = tn() + hb;
    }
    function WC() {
      return QC;
    }
    var Rm = !1, LS = null, Of = null, js = !1, Mo = null, Fp = V, MS = [], NS = null, mb = 50, jp = 0, US = null, zS = !1, Tm = !1, yb = 50, Lf = 0, wm = null, Vp = Ht, xm = V, GC = !1;
    function bm() {
      return ea;
    }
    function ta() {
      return (lt & (Sr | si)) !== qn ? tn() : (Vp !== Ht || (Vp = tn()), Vp);
    }
    function No(e) {
      var t = e.mode;
      if ((t & qe) === _e)
        return Oe;
      if ((lt & Sr) !== qn && Xn !== V)
        return wn(Xn);
      var a = pw() !== dw;
      if (a) {
        if (gr.transition !== null) {
          var i = gr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return xm === it && (xm = bd()), xm;
      }
      var u = ma();
      if (u !== it)
        return u;
      var s = KR();
      return s;
    }
    function gb(e) {
      var t = e.mode;
      return (t & qe) === _e ? Oe : ny();
    }
    function Zn(e, t, a, i) {
      Bb(), GC && S("useInsertionEffect must not schedule updates."), zS && (Tm = !0), lu(e, a, i), (lt & Sr) !== V && e === ea ? Yb(t) : ($n && Ld(e, t, a), Qb(t), e === ea && ((lt & Sr) === qn && (zp = Ie(zp, a)), Kn === Np && Uo(e, Xn)), wa(e, i), a === Oe && lt === qn && (t.mode & qe) === _e && !Bi.isBatchingLegacy && (Hp(), W0()));
    }
    function Sb(e, t, a) {
      var i = e.current;
      i.lanes = t, lu(e, t, a), wa(e, a);
    }
    function Eb(e) {
      return (lt & Sr) !== qn;
    }
    function wa(e, t) {
      var a = e.callbackNode;
      Jm(e, t);
      var i = cs(e, e === ea ? Xn : V);
      if (i === V) {
        a !== null && c1(a), e.callbackNode = null, e.callbackPriority = it;
        return;
      }
      var u = yn(i), s = e.callbackPriority;
      if (s === u && !(Bi.current !== null && a !== BS)) {
        a == null && s !== Oe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && c1(a);
      var f;
      if (u === Oe)
        e.tag === Ro ? (Bi.isBatchingLegacy !== null && (Bi.didScheduleLegacyUpdate = !0), qT(KC.bind(null, e))) : Q0(KC.bind(null, e)), Bi.current !== null ? Bi.current.push(To) : JR(function() {
          (lt & (Sr | si)) === qn && To();
        }), f = null;
      else {
        var p;
        switch (hs(i)) {
          case nr:
            p = vc;
            break;
          case In:
            p = Xr;
            break;
          case _i:
            p = Ja;
            break;
          case ps:
            p = dl;
            break;
          default:
            p = Ja;
            break;
        }
        f = $S(p, qC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function qC(e, t) {
      if (Bw(), Vp = Ht, xm = V, (lt & (Sr | si)) !== qn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = bu();
      if (i && e.callbackNode !== a)
        return null;
      var u = cs(e, e === ea ? Xn : V);
      if (u === V)
        return null;
      var s = !ds(e, u) && !Fv(e, u) && !t, f = s ? Ob(e, u) : km(e, u);
      if (f !== Tu) {
        if (f === Fs) {
          var p = wd(e);
          p !== V && (u = p, f = AS(e, p));
        }
        if (f === Mp) {
          var v = Up;
          throw Vs(e, V), Uo(e, u), wa(e, tn()), v;
        }
        if (f === kS)
          Uo(e, u);
        else {
          var y = !ds(e, u), g = e.current.alternate;
          if (y && !Rb(g)) {
            if (f = km(e, u), f === Fs) {
              var b = wd(e);
              b !== V && (u = b, f = AS(e, b));
            }
            if (f === Mp) {
              var w = Up;
              throw Vs(e, V), Uo(e, u), wa(e, tn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Cb(e, f, u);
        }
      }
      return wa(e, tn()), e.callbackNode === a ? qC.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = Ap;
      if (bn(e)) {
        var i = Vs(e, t);
        i.flags |= on, BT(e.containerInfo);
      }
      var u = km(e, t);
      if (u !== Fs) {
        var s = Ta;
        Ta = a, s !== null && XC(s);
      }
      return u;
    }
    function XC(e) {
      Ta === null ? Ta = e : Ta.push.apply(Ta, e);
    }
    function Cb(e, t, a) {
      switch (t) {
        case Tu:
        case Mp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Fs: {
          Ps(e, Ta, wu);
          break;
        }
        case Sm: {
          if (Uo(e, a), Fc(a) && !f1()) {
            var i = OS + YC - tn();
            if (i > 10) {
              var u = cs(e, V);
              if (u !== V)
                break;
              var s = e.suspendedLanes;
              if (!iu(s, a)) {
                ta(), Dd(e, s);
                break;
              }
              e.timeoutHandle = Ny(Ps.bind(null, e, Ta, wu), i);
              break;
            }
          }
          Ps(e, Ta, wu);
          break;
        }
        case Np: {
          if (Uo(e, a), Hv(a))
            break;
          if (!f1()) {
            var f = Av(e, a), p = f, v = tn() - p, y = Pb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ny(Ps.bind(null, e, Ta, wu), y);
              break;
            }
          }
          Ps(e, Ta, wu);
          break;
        }
        case IC: {
          Ps(e, Ta, wu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Rb(e) {
      for (var t = e; ; ) {
        if (t.flags & rs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ve(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & rs && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Uo(e, t) {
      t = ro(t, Cm), t = ro(t, zp), kd(e, t);
    }
    function KC(e) {
      if ($w(), (lt & (Sr | si)) !== qn)
        throw new Error("Should not already be working.");
      bu();
      var t = cs(e, V);
      if (!jr(t, Oe))
        return wa(e, tn()), null;
      var a = km(e, t);
      if (e.tag !== Ro && a === Fs) {
        var i = wd(e);
        i !== V && (t = i, a = AS(e, i));
      }
      if (a === Mp) {
        var u = Up;
        throw Vs(e, V), Uo(e, t), wa(e, tn()), u;
      }
      if (a === kS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ps(e, Ta, wu), wa(e, tn()), null;
    }
    function Tb(e, t) {
      t !== V && (ao(e, Ie(t, Oe)), wa(e, tn()), (lt & (Sr | si)) === qn && (Hp(), To()));
    }
    function HS(e, t) {
      var a = lt;
      lt |= $C;
      try {
        return e(t);
      } finally {
        lt = a, lt === qn && !Bi.isBatchingLegacy && (Hp(), W0());
      }
    }
    function wb(e, t, a, i, u) {
      var s = ma(), f = gr.transition;
      try {
        return gr.transition = null, xn(nr), e(t, a, i, u);
      } finally {
        xn(s), gr.transition = f, lt === qn && Hp();
      }
    }
    function xu(e) {
      Mo !== null && Mo.tag === Ro && (lt & (Sr | si)) === qn && bu();
      var t = lt;
      lt |= $C;
      var a = gr.transition, i = ma();
      try {
        return gr.transition = null, xn(nr), e ? e() : void 0;
      } finally {
        xn(i), gr.transition = a, lt = t, (lt & (Sr | si)) === qn && To();
      }
    }
    function ZC() {
      return (lt & (Sr | si)) !== qn;
    }
    function _m(e, t) {
      Pr(DS, Ul, e), Ul = Ie(Ul, t);
    }
    function FS(e) {
      Ul = DS.current, Vr(DS, e);
    }
    function Vs(e, t) {
      e.finishedWork = null, e.finishedLanes = V;
      var a = e.timeoutHandle;
      if (a !== Uy && (e.timeoutHandle = Uy, ZR(a)), hn !== null)
        for (var i = hn.return; i !== null; ) {
          var u = i.alternate;
          _C(u, i), i = i.return;
        }
      ea = e;
      var s = Bs(e.current, null);
      return hn = s, Xn = Ul = t, Kn = Tu, Up = null, Em = V, zp = V, Cm = V, Ap = null, Ta = null, yw(), Ui.discardPendingWarnings(), s;
    }
    function JC(e, t) {
      do {
        var a = hn;
        try {
          if (zh(), DE(), un(), _S.current = null, a === null || a.return === null) {
            Kn = Mp, Up = t, hn = null;
            return;
          }
          if (Ze && a.mode & De && pm(a, !0), pt)
            if (Xl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Nv(a, i, Xn);
            } else
              Sc(a, t, Xn);
          Gw(e, a.return, a, t, Xn), r1(a);
        } catch (u) {
          t = u, hn === a && a !== null ? (a = a.return, hn = a) : a = hn;
          continue;
        }
        return;
      } while (!0);
    }
    function e1() {
      var e = bS.current;
      return bS.current = om, e === null ? om : e;
    }
    function t1(e) {
      bS.current = e;
    }
    function xb() {
      OS = tn();
    }
    function Pp(e) {
      Em = Ie(e, Em);
    }
    function bb() {
      Kn === Tu && (Kn = Sm);
    }
    function jS() {
      (Kn === Tu || Kn === Sm || Kn === Fs) && (Kn = Np), ea !== null && (fs(Em) || fs(zp)) && Uo(ea, Xn);
    }
    function _b(e) {
      Kn !== Np && (Kn = Fs), Ap === null ? Ap = [e] : Ap.push(e);
    }
    function kb() {
      return Kn === Tu;
    }
    function km(e, t) {
      var a = lt;
      lt |= Sr;
      var i = e1();
      if (ea !== e || Xn !== t) {
        if ($n) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Bp(e, Xn), u.clear()), Pc(e, t);
        }
        wu = Md(), Vs(e, t);
      }
      Va(t);
      do
        try {
          Db();
          break;
        } catch (s) {
          JC(e, s);
        }
      while (!0);
      if (zh(), lt = a, t1(i), hn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Zu(), ea = null, Xn = V, Kn;
    }
    function Db() {
      for (; hn !== null; )
        n1(hn);
    }
    function Ob(e, t) {
      var a = lt;
      lt |= Sr;
      var i = e1();
      if (ea !== e || Xn !== t) {
        if ($n) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Bp(e, Xn), u.clear()), Pc(e, t);
        }
        wu = Md(), Hp(), Vs(e, t);
      }
      Va(t);
      do
        try {
          Lb();
          break;
        } catch (s) {
          JC(e, s);
        }
      while (!0);
      return zh(), t1(i), lt = a, hn !== null ? (ls(), Tu) : (Zu(), ea = null, Xn = V, Kn);
    }
    function Lb() {
      for (; hn !== null && !pc(); )
        n1(hn);
    }
    function n1(e) {
      var t = e.alternate;
      bt(e);
      var a;
      (e.mode & De) !== _e ? (eS(e), a = VS(t, e, Ul), pm(e, !0)) : a = VS(t, e, Ul), un(), e.memoizedProps = e.pendingProps, a === null ? r1(e) : hn = a, _S.current = null;
    }
    function r1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Wr) === Te) {
          bt(t);
          var u = void 0;
          if ((t.mode & De) === _e ? u = bC(a, t, Ul) : (eS(t), u = bC(a, t, Ul), pm(t, !1)), un(), u !== null) {
            hn = u;
            return;
          }
        } else {
          var s = bx(a, t);
          if (s !== null) {
            s.flags &= wv, hn = s;
            return;
          }
          if ((t.mode & De) !== _e) {
            pm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Wr, i.subtreeFlags = Te, i.deletions = null;
          else {
            Kn = kS, hn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          hn = v;
          return;
        }
        t = i, hn = t;
      } while (t !== null);
      Kn === Tu && (Kn = IC);
    }
    function Ps(e, t, a) {
      var i = ma(), u = gr.transition;
      try {
        gr.transition = null, xn(nr), Mb(e, t, a, i);
      } finally {
        gr.transition = u, xn(i);
      }
      return null;
    }
    function Mb(e, t, a, i) {
      do
        bu();
      while (Mo !== null);
      if ($b(), (lt & (Sr | si)) !== qn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (mc(s), u === null)
        return Sd(), null;
      if (s === V && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = V, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = it;
      var f = Ie(u.lanes, u.childLanes);
      Od(e, f), e === ea && (ea = null, hn = null, Xn = V), ((u.subtreeFlags & da) !== Te || (u.flags & da) !== Te) && (js || (js = !0, NS = a, $S(Ja, function() {
        return bu(), null;
      })));
      var p = (u.subtreeFlags & (qu | zr | tr | da)) !== Te, v = (u.flags & (qu | zr | tr | da)) !== Te;
      if (p || v) {
        var y = gr.transition;
        gr.transition = null;
        var g = ma();
        xn(nr);
        var b = lt;
        lt |= si, _S.current = null, Lx(e, u), eC(), Yx(e, u, s), YR(e.containerInfo), e.current = u, Uv(s), Qx(u, e, s), Ku(), _v(), lt = b, xn(g), gr.transition = y;
      } else
        e.current = u, eC();
      var w = js;
      if (js ? (js = !1, Mo = e, Fp = s) : (Lf = 0, wm = null), f = e.pendingLanes, f === V && (Of = null), w || u1(e.current, !1), wi(u.stateNode, i), $n && e.memoizedUpdaters.clear(), fb(), wa(e, tn()), t !== null)
        for (var L = e.onRecoverableError, N = 0; N < t.length; N++) {
          var F = t[N], ue = F.stack, xe = F.digest;
          L(F.value, {
            componentStack: ue,
            digest: xe
          });
        }
      if (Rm) {
        Rm = !1;
        var Se = LS;
        throw LS = null, Se;
      }
      return jr(Fp, Oe) && e.tag !== Ro && bu(), f = e.pendingLanes, jr(f, Oe) ? (Pw(), e === US ? jp++ : (jp = 0, US = e)) : jp = 0, To(), Sd(), null;
    }
    function bu() {
      if (Mo !== null) {
        var e = hs(Fp), t = ay(_i, e), a = gr.transition, i = ma();
        try {
          return gr.transition = null, xn(t), Ub();
        } finally {
          xn(i), gr.transition = a;
        }
      }
      return !1;
    }
    function Nb(e) {
      MS.push(e), js || (js = !0, $S(Ja, function() {
        return bu(), null;
      }));
    }
    function Ub() {
      if (Mo === null)
        return !1;
      var e = NS;
      NS = null;
      var t = Mo, a = Fp;
      if (Mo = null, Fp = V, (lt & (Sr | si)) !== qn)
        throw new Error("Cannot flush passive effects while already rendering.");
      zS = !0, Tm = !1, zv(a);
      var i = lt;
      lt |= si, Jx(t.current), qx(t, t.current, a, e);
      {
        var u = MS;
        MS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          zx(t, f);
        }
      }
      is(), u1(t.current, !0), lt = i, To(), Tm ? t === wm ? Lf++ : (Lf = 0, wm = t) : Lf = 0, zS = !1, Tm = !1, vl(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function a1(e) {
      return Of !== null && Of.has(e);
    }
    function zb(e) {
      Of === null ? Of = /* @__PURE__ */ new Set([e]) : Of.add(e);
    }
    function Ab(e) {
      Rm || (Rm = !0, LS = e);
    }
    var Hb = Ab;
    function i1(e, t, a) {
      var i = As(a, t), u = nC(e, i, Oe), s = xo(e, u, Oe), f = ta();
      s !== null && (lu(s, Oe, f), wa(s, f));
    }
    function Wt(e, t, a) {
      if (kx(a), $p(!1), e.tag === te) {
        i1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          i1(i, e, a);
          return;
        } else if (i.tag === se) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !a1(s)) {
            var f = As(a, e), p = lS(i, f, Oe), v = xo(i, p, Oe), y = ta();
            v !== null && (lu(v, Oe, y), wa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Fb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ta();
      Dd(e, a), Wb(e), ea === e && iu(Xn, a) && (Kn === Np || Kn === Sm && Fc(Xn) && tn() - OS < YC ? Vs(e, V) : Cm = Ie(Cm, a)), wa(e, u);
    }
    function l1(e, t) {
      t === it && (t = gb(e));
      var a = ta(), i = Ca(e, t);
      i !== null && (lu(i, t, a), wa(i, a));
    }
    function jb(e) {
      var t = e.memoizedState, a = it;
      t !== null && (a = t.retryLane), l1(e, a);
    }
    function Vb(e, t) {
      var a = it, i;
      switch (e.tag) {
        case we:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case xt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), l1(e, a);
    }
    function Pb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : vb(e / 1960) * 1960;
    }
    function Bb() {
      if (jp > mb)
        throw jp = 0, US = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Lf > yb && (Lf = 0, wm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function $b() {
      Ui.flushLegacyContextWarning(), Ui.flushPendingUnsafeLifecycleWarnings();
    }
    function u1(e, t) {
      bt(e), Dm(e, Ur, ob), t && Dm(e, ql, sb), Dm(e, Ur, lb), t && Dm(e, ql, ub), un();
    }
    function Dm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Te ? i = i.child : ((i.flags & t) !== Te && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Om = null;
    function o1(e) {
      {
        if ((lt & Sr) !== qn || !(e.mode & qe))
          return;
        var t = e.tag;
        if (t !== dt && t !== te && t !== se && t !== fe && t !== Be && t !== Ke && t !== He)
          return;
        var a = Fe(e) || "ReactComponent";
        if (Om !== null) {
          if (Om.has(a))
            return;
          Om.add(a);
        } else
          Om = /* @__PURE__ */ new Set([a]);
        var i = en;
        try {
          bt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? bt(e) : un();
        }
      }
    }
    var VS;
    {
      var Ib = null;
      VS = function(e, t, a) {
        var i = m1(Ib, t);
        try {
          return CC(e, t, a);
        } catch (s) {
          if (rw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (zh(), DE(), _C(e, t), m1(t, i), t.mode & De && eS(t), Gl(null, CC, null, e, t, a), Km()) {
            var u = od();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var s1 = !1, PS;
    PS = /* @__PURE__ */ new Set();
    function Yb(e) {
      if (Dr && !Fw())
        switch (e.tag) {
          case fe:
          case Be:
          case He: {
            var t = hn && Fe(hn) || "Unknown", a = t;
            if (!PS.has(a)) {
              PS.add(a);
              var i = Fe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case se: {
            s1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), s1 = !0);
            break;
          }
        }
    }
    function Bp(e, t) {
      if ($n) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ld(e, i, t);
        });
      }
    }
    var BS = {};
    function $S(e, t) {
      {
        var a = Bi.current;
        return a !== null ? (a.push(t), BS) : dc(e, t);
      }
    }
    function c1(e) {
      if (e !== BS)
        return bv(e);
    }
    function f1() {
      return Bi.current !== null;
    }
    function Qb(e) {
      {
        if (e.mode & qe) {
          if (!BC())
            return;
        } else if (!pb() || lt !== qn || e.tag !== fe && e.tag !== Be && e.tag !== He)
          return;
        if (Bi.current === null) {
          var t = en;
          try {
            bt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Fe(e));
          } finally {
            t ? bt(e) : un();
          }
        }
      }
    }
    function Wb(e) {
      e.tag !== Ro && BC() && Bi.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function $p(e) {
      GC = e;
    }
    var ci = null, Mf = null, Gb = function(e) {
      ci = e;
    };
    function Nf(e) {
      {
        if (ci === null)
          return e;
        var t = ci(e);
        return t === void 0 ? e : t.current;
      }
    }
    function IS(e) {
      return Nf(e);
    }
    function YS(e) {
      {
        if (ci === null)
          return e;
        var t = ci(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Nf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ln,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function d1(e, t) {
      {
        if (ci === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case se: {
            typeof i == "function" && (u = !0);
            break;
          }
          case fe: {
            (typeof i == "function" || s === Pn) && (u = !0);
            break;
          }
          case Be: {
            (s === ln || s === Pn) && (u = !0);
            break;
          }
          case Ke:
          case He: {
            (s === Wi || s === Pn) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ci(a);
          if (f !== void 0 && f === ci(i))
            return !0;
        }
        return !1;
      }
    }
    function p1(e) {
      {
        if (ci === null || typeof WeakSet != "function")
          return;
        Mf === null && (Mf = /* @__PURE__ */ new WeakSet()), Mf.add(e);
      }
    }
    var qb = function(e, t) {
      {
        if (ci === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        bu(), xu(function() {
          QS(e.current, i, a);
        });
      }
    }, Xb = function(e, t) {
      {
        if (e.context !== Ba)
          return;
        bu(), xu(function() {
          Ip(t, e, null, null);
        });
      }
    };
    function QS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case fe:
          case He:
          case se:
            v = p;
            break;
          case Be:
            v = p.render;
            break;
        }
        if (ci === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = ci(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === se ? g = !0 : y = !0));
        }
        if (Mf !== null && (Mf.has(e) || i !== null && Mf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Ca(e, Oe);
          w !== null && Zn(w, e, Oe, Ht);
        }
        u !== null && !g && QS(u, t, a), s !== null && QS(s, t, a);
      }
    }
    var Kb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return WS(e.current, i, a), a;
      }
    };
    function WS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case fe:
          case He:
          case se:
            p = f;
            break;
          case Be:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? Zb(e, a) : i !== null && WS(i, t, a), u !== null && WS(u, t, a);
      }
    }
    function Zb(e, t) {
      {
        var a = Jb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ne:
              t.add(i.stateNode);
              return;
            case de:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Jb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ne)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var GS;
    {
      GS = !1;
      try {
        var v1 = Object.preventExtensions({});
      } catch {
        GS = !0;
      }
    }
    function e_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Te, this.subtreeFlags = Te, this.deletions = null, this.lanes = V, this.childLanes = V, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !GS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var $a = function(e, t, a, i) {
      return new e_(e, t, a, i);
    };
    function qS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function t_(e) {
      return typeof e == "function" && !qS(e) && e.defaultProps === void 0;
    }
    function n_(e) {
      if (typeof e == "function")
        return qS(e) ? se : fe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ln)
          return Be;
        if (t === Wi)
          return Ke;
      }
      return dt;
    }
    function Bs(e, t) {
      var a = e.alternate;
      a === null ? (a = $a(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Te, a.subtreeFlags = Te, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Bn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case dt:
        case fe:
        case He:
          a.type = Nf(e.type);
          break;
        case se:
          a.type = IS(e.type);
          break;
        case Be:
          a.type = YS(e.type);
          break;
      }
      return a;
    }
    function r_(e, t) {
      e.flags &= Bn | $t;
      var a = e.alternate;
      if (a === null)
        e.childLanes = V, e.lanes = t, e.child = null, e.subtreeFlags = Te, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Te, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function a_(e, t, a) {
      var i;
      return e === _h ? (i = qe, t === !0 && (i |= nn, i |= va)) : i = _e, $n && (i |= De), $a(te, null, null, i);
    }
    function XS(e, t, a, i, u, s) {
      var f = dt, p = e;
      if (typeof e == "function")
        qS(e) ? (f = se, p = IS(p)) : p = Nf(p);
      else if (typeof e == "string")
        f = ne;
      else {
        e:
          switch (e) {
            case Ma:
              return zo(a.children, u, s, t);
            case Yi:
              f = Xe, u |= nn, (u & qe) !== _e && (u |= va);
              break;
            case Qi:
              return i_(a, u, s, t);
            case ia:
              return l_(a, u, s, t);
            case Fl:
              return u_(a, u, s, t);
            case Fo:
              return h1(a, u, s, t);
            case Ws:
            case Ys:
            case Af:
            case Hf:
            case Qs:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Ou:
                    f = mt;
                    break e;
                  case Ho:
                    f = Dn;
                    break e;
                  case ln:
                    f = Be, p = YS(p);
                    break e;
                  case Wi:
                    f = Ke;
                    break e;
                  case Pn:
                    f = Zt, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Fe(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      }
      var g = $a(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function KS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = XS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function zo(e, t, a, i) {
      var u = $a(st, e, i, t);
      return u.lanes = a, u;
    }
    function i_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = $a(rt, e, i, t | De);
      return u.elementType = Qi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function l_(e, t, a, i) {
      var u = $a(we, e, i, t);
      return u.elementType = ia, u.lanes = a, u;
    }
    function u_(e, t, a, i) {
      var u = $a(xt, e, i, t);
      return u.elementType = Fl, u.lanes = a, u;
    }
    function h1(e, t, a, i) {
      var u = $a(Ye, e, i, t);
      u.elementType = Fo, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function ZS(e, t, a) {
      var i = $a(Ae, e, null, t);
      return i.lanes = a, i;
    }
    function o_() {
      var e = $a(ne, null, null, _e);
      return e.elementType = "DELETED", e;
    }
    function s_(e) {
      var t = $a(Ft, null, null, _e);
      return t.stateNode = e, t;
    }
    function JS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = $a(de, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, u;
    }
    function m1(e, t) {
      return e === null && (e = $a(dt, null, null, _e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function c_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Uy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = it, this.eventTimes = Vc(V), this.expirationTimes = Vc(Ht), this.pendingLanes = V, this.suspendedLanes = V, this.pingedLanes = V, this.expiredLanes = V, this.mutableReadLanes = V, this.finishedLanes = V, this.entangledLanes = V, this.entanglements = Vc(V), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Yt; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case _h:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ro:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function y1(e, t, a, i, u, s, f, p, v, y) {
      var g = new c_(e, t, a, p, v), b = a_(t, s);
      g.current = b, b.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = w;
      }
      return ug(b), g;
    }
    var e0 = "18.2.0";
    function f_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return di(i), {
        $$typeof: Qr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var t0, n0;
    t0 = !1, n0 = {};
    function g1(e) {
      if (!e)
        return Ba;
      var t = sa(e), a = GT(t);
      if (t.tag === se) {
        var i = t.type;
        if (_l(i))
          return I0(t, i, a);
      }
      return a;
    }
    function d_(e, t) {
      {
        var a = sa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = pa(a);
        if (u === null)
          return null;
        if (u.mode & nn) {
          var s = Fe(a) || "Component";
          if (!n0[s]) {
            n0[s] = !0;
            var f = en;
            try {
              bt(u), a.mode & nn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? bt(f) : un();
            }
          }
        }
        return u.stateNode;
      }
    }
    function S1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return y1(e, t, v, y, a, i, u, s, f);
    }
    function E1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = y1(a, i, g, e, u, s, f, p, v);
      b.context = g1(null);
      var w = b.current, L = ta(), N = No(w), F = Cu(L, N);
      return F.callback = t != null ? t : null, xo(w, F, N), Sb(b, N, L), b;
    }
    function Ip(e, t, a, i) {
      kv(t, e);
      var u = t.current, s = ta(), f = No(u);
      Kl(f);
      var p = g1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Dr && en !== null && !t0 && (t0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Fe(en) || "Unknown"));
      var v = Cu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = xo(u, v, f);
      return y !== null && (Zn(y, u, f, s), Vh(y, u, f)), f;
    }
    function Lm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ne:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function p_(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (bn(t)) {
            var a = ey(t);
            Tb(t, a);
          }
          break;
        }
        case we: {
          xu(function() {
            var u = Ca(e, Oe);
            if (u !== null) {
              var s = ta();
              Zn(u, e, Oe, s);
            }
          });
          var i = Oe;
          r0(e, i);
          break;
        }
      }
    }
    function C1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Vv(a.retryLane, t));
    }
    function r0(e, t) {
      C1(e, t);
      var a = e.alternate;
      a && C1(a, t);
    }
    function v_(e) {
      if (e.tag === we) {
        var t = Ju, a = Ca(e, t);
        if (a !== null) {
          var i = ta();
          Zn(a, e, t, i);
        }
        r0(e, t);
      }
    }
    function h_(e) {
      if (e.tag === we) {
        var t = No(e), a = Ca(e, t);
        if (a !== null) {
          var i = ta();
          Zn(a, e, t, i);
        }
        r0(e, t);
      }
    }
    function R1(e) {
      var t = xv(e);
      return t === null ? null : t.stateNode;
    }
    var T1 = function(e) {
      return null;
    };
    function m_(e) {
      return T1(e);
    }
    var w1 = function(e) {
      return !1;
    };
    function y_(e) {
      return w1(e);
    }
    var x1 = null, b1 = null, _1 = null, k1 = null, D1 = null, O1 = null, L1 = null, M1 = null, N1 = null;
    {
      var U1 = function(e, t, a) {
        var i = t[a], u = nt(e) ? e.slice() : We({}, e);
        return a + 1 === t.length ? (nt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = U1(e[i], t, a + 1), u);
      }, z1 = function(e, t) {
        return U1(e, t, 0);
      }, A1 = function(e, t, a, i) {
        var u = t[i], s = nt(e) ? e.slice() : We({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], nt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = A1(
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, H1 = function(e, t, a) {
        if (t.length !== a.length) {
          Me("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Me("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return A1(e, t, a, 0);
      }, F1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = nt(e) ? e.slice() : We({}, e);
        return s[u] = F1(e[u], t, a + 1, i), s;
      }, j1 = function(e, t, a) {
        return F1(e, t, 0, a);
      }, a0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      x1 = function(e, t, a, i) {
        var u = a0(e, t);
        if (u !== null) {
          var s = j1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = We({}, e.memoizedProps);
          var f = Ca(e, Oe);
          f !== null && Zn(f, e, Oe, Ht);
        }
      }, b1 = function(e, t, a) {
        var i = a0(e, t);
        if (i !== null) {
          var u = z1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = We({}, e.memoizedProps);
          var s = Ca(e, Oe);
          s !== null && Zn(s, e, Oe, Ht);
        }
      }, _1 = function(e, t, a, i) {
        var u = a0(e, t);
        if (u !== null) {
          var s = H1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = We({}, e.memoizedProps);
          var f = Ca(e, Oe);
          f !== null && Zn(f, e, Oe, Ht);
        }
      }, k1 = function(e, t, a) {
        e.pendingProps = j1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ca(e, Oe);
        i !== null && Zn(i, e, Oe, Ht);
      }, D1 = function(e, t) {
        e.pendingProps = z1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ca(e, Oe);
        a !== null && Zn(a, e, Oe, Ht);
      }, O1 = function(e, t, a) {
        e.pendingProps = H1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ca(e, Oe);
        i !== null && Zn(i, e, Oe, Ht);
      }, L1 = function(e) {
        var t = Ca(e, Oe);
        t !== null && Zn(t, e, Oe, Ht);
      }, M1 = function(e) {
        T1 = e;
      }, N1 = function(e) {
        w1 = e;
      };
    }
    function g_(e) {
      var t = pa(e);
      return t === null ? null : t.stateNode;
    }
    function S_(e) {
      return null;
    }
    function E_() {
      return en;
    }
    function C_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: x1,
        overrideHookStateDeletePath: b1,
        overrideHookStateRenamePath: _1,
        overrideProps: k1,
        overridePropsDeletePath: D1,
        overridePropsRenamePath: O1,
        setErrorHandler: M1,
        setSuspenseHandler: N1,
        scheduleUpdate: L1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: g_,
        findFiberByHostInstance: t || S_,
        findHostInstancesForRefresh: Kb,
        scheduleRefresh: qb,
        scheduleRoot: Xb,
        setRefreshHandler: Gb,
        getCurrentFiber: E_,
        reconcilerVersion: e0
      });
    }
    var V1 = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function i0(e) {
      this._internalRoot = e;
    }
    Mm.prototype.render = i0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Nm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== mn) {
          var i = R1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ip(e, t, null, null);
    }, Mm.prototype.unmount = i0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ZC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), xu(function() {
          Ip(null, e, null, null);
        }), j0(t);
      }
    };
    function R_(e, t) {
      if (!Nm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      P1(e);
      var a = !1, i = !1, u = "", s = V1;
      t != null && (t.hydrate ? Me("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ii && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = S1(e, _h, null, a, i, u, s);
      Eh(f.current, e);
      var p = e.nodeType === mn ? e.parentNode : e;
      return Zd(p), new i0(f);
    }
    function Mm(e) {
      this._internalRoot = e;
    }
    function T_(e) {
      e && Gv(e);
    }
    Mm.prototype.unstable_scheduleHydration = T_;
    function w_(e, t, a) {
      if (!Nm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      P1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a != null ? a : null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = V1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = E1(t, null, e, _h, i, s, f, p, v);
      if (Eh(y.current, e), Zd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Mw(y, b);
        }
      return new Mm(y);
    }
    function Nm(e) {
      return !!(e && (e.nodeType === Lr || e.nodeType === Ha || e.nodeType === Bl || !le));
    }
    function Yp(e) {
      return !!(e && (e.nodeType === Lr || e.nodeType === Ha || e.nodeType === Bl || e.nodeType === mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function P1(e) {
      e.nodeType === Lr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), sp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var x_ = A.ReactCurrentOwner, B1;
    B1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== mn) {
        var t = R1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = l0(e), u = !!(i && Eo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Lr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function l0(e) {
      return e ? e.nodeType === Ha ? e.documentElement : e.firstChild : null;
    }
    function $1() {
    }
    function b_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Lm(f);
            s.call(w);
          };
        }
        var f = E1(
          t,
          i,
          e,
          Ro,
          null,
          !1,
          !1,
          "",
          $1
        );
        e._reactRootContainer = f, Eh(f.current, e);
        var p = e.nodeType === mn ? e.parentNode : e;
        return Zd(p), xu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Lm(g);
            y.call(w);
          };
        }
        var g = S1(
          e,
          Ro,
          null,
          !1,
          !1,
          "",
          $1
        );
        e._reactRootContainer = g, Eh(g.current, e);
        var b = e.nodeType === mn ? e.parentNode : e;
        return Zd(b), xu(function() {
          Ip(t, g, a, i);
        }), g;
      }
    }
    function __(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Um(e, t, a, i, u) {
      B1(a), __(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = b_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Lm(f);
            p.call(v);
          };
        }
        Ip(t, f, e, u);
      }
      return Lm(f);
    }
    function k_(e) {
      {
        var t = x_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ct(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Lr ? e : d_(e, "findDOMNode");
    }
    function D_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Um(null, e, t, !0, a);
    }
    function O_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Um(null, e, t, !1, a);
    }
    function L_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Yp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ns(e))
        throw new Error("parentComponent must be a valid React Component");
      return Um(e, t, a, !1, i);
    }
    function M_(e) {
      if (!Yp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = sp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = l0(e), i = a && !Eo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return xu(function() {
          Um(null, null, e, !1, function() {
            e._reactRootContainer = null, j0(e);
          });
        }), !0;
      } else {
        {
          var u = l0(e), s = !!(u && Eo(u)), f = e.nodeType === Lr && Yp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ce(p_), Bv(v_), ys(h_), Ud(ma), Iv(vs), (typeof Map != "function" || Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Rv(zR), uc(HS, wb, xu);
    function N_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Nm(t))
        throw new Error("Target container is not a DOM element.");
      return f_(e, t, null, a);
    }
    function U_(e, t, a, i) {
      return L_(e, t, a, i);
    }
    var u0 = {
      usingClientEntryPoint: !1,
      Events: [Eo, cf, Ch, lc, Jo, HS]
    };
    function z_(e, t) {
      return u0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), R_(e, t);
    }
    function A_(e, t, a) {
      return u0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), w_(e, t, a);
    }
    function H_(e) {
      return ZC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), xu(e);
    }
    var F_ = C_({
      findFiberByHostInstance: _s,
      bundleType: 1,
      version: e0,
      rendererPackageName: "react-dom"
    });
    if (!F_ && fn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var I1 = window.location.protocol;
      /^(https?|file):$/.test(I1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (I1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u0, ba.createPortal = N_, ba.createRoot = z_, ba.findDOMNode = k_, ba.flushSync = H_, ba.hydrate = D_, ba.hydrateRoot = A_, ba.render = O_, ba.unmountComponentAtNode = M_, ba.unstable_batchedUpdates = HS, ba.unstable_renderSubtreeIntoContainer = U_, ba.version = e0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ba;
}
(function(z) {
  function $() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if ({}.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($);
      } catch (A) {
        console.error(A);
      }
    }
  }
  ({}).NODE_ENV === "production" ? ($(), z.exports = Q_()) : z.exports = W_();
})(J1);
var Wp = J1.exports;
if ({}.NODE_ENV === "production")
  Gp.createRoot = Wp.createRoot, Gp.hydrateRoot = Wp.hydrateRoot;
else {
  var Am = Wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Gp.createRoot = function(z, $) {
    Am.usingClientEntryPoint = !0;
    try {
      return Wp.createRoot(z, $);
    } finally {
      Am.usingClientEntryPoint = !1;
    }
  }, Gp.hydrateRoot = function(z, $, A) {
    Am.usingClientEntryPoint = !0;
    try {
      return Wp.hydrateRoot(z, $, A);
    } finally {
      Am.usingClientEntryPoint = !1;
    }
  };
}
function qp() {
  const [z, $] = En.exports.useState(window.backbone);
  return En.exports.useEffect(() => {
    window.backbone && $(window.backbone);
  }, [window.backbone]), z;
}
function G_(z) {
  const $ = qp(), [A, Et] = En.exports.useState({}), [Ct, Me] = En.exports.useState({ data: [], change: null });
  return En.exports.useEffect(() => {
    var S, Rt;
    if ($) {
      for (let fe of Object.keys($.app))
        ["backboneReactOnAdd", "backboneReactAll", "UI", "_", "network", "meta", "users"].includes(fe) || (A[fe] = $.app[fe]);
      ((S = $ == null ? void 0 : $.app) == null ? void 0 : S.backboneReactOnAdd) && ((Rt = $ == null ? void 0 : $.app) == null ? void 0 : Rt.backboneReactAll) ? z ? $.app.backboneReactOnAdd(z) : $.app.backboneReactOnAdd(async () => {
        let fe = await $.app.backboneReactAll();
        Me({ data: fe, change: fe[fe.length - 1] });
      }) : console.warn("backbone-react is missing dependencies in src/app/api.ts, some feautres will be disabled. Learn more at https://github.com/backbonedao/backbone-react/blob/main/README.md#useapi");
    }
  }, [$]), { API: A, stream: Ct };
}
function q_() {
  const z = qp(), [$, A] = En.exports.useState(), [Et, Ct] = En.exports.useState(), [Me, S] = En.exports.useState(), [Rt, fe] = En.exports.useState(), [se, dt] = En.exports.useState(), [te, de] = En.exports.useState(), [ne, Ae] = En.exports.useState(), [st, Xe] = En.exports.useState();
  async function Dn() {
    const mt = await z.app.meta._getMeta("manifest");
    A(mt["@id"]), Ct(mt.address), S(mt.description), fe(mt.git), dt(mt.name), de(mt.permissions), Ae(mt.version), Xe(mt.website);
  }
  return En.exports.useEffect(() => {
    z && Dn();
  }, [z]), { id: $, address: Et, description: Me, git: Rt, name: se, permissions: te, version: ne, website: st };
}
function X_() {
  var Me, S, Rt, fe, se, dt, te, de;
  const z = qp();
  let $ = (S = (Me = z == null ? void 0 : z.app) == null ? void 0 : Me.network) == null ? void 0 : S.connect, A = (fe = (Rt = z == null ? void 0 : z.app) == null ? void 0 : Rt.network) == null ? void 0 : fe.disconnect, Et = (dt = (se = z == null ? void 0 : z.app) == null ? void 0 : se.network) == null ? void 0 : dt.getConnectionId(), Ct = (de = (te = z == null ? void 0 : z.app) == null ? void 0 : te.network) == null ? void 0 : de.getNetwork();
  return En.exports.useEffect(() => {
    z && ($ = z.app.network.connect, A = z.app.network.disconnect, Et = z.app.network.getConnectionId(), Ct = z.app.network.getNetwork());
  }, [z]), { connect: $, disconnect: A, connectionId: Et, network: Ct };
}
function K_() {
  var S, Rt, fe, se, dt, te, de, ne;
  const z = qp();
  let $ = z == null ? void 0 : z.user, A = (Rt = (S = z == null ? void 0 : z.app) == null ? void 0 : S.users) == null ? void 0 : Rt.addTrustedUser, Et = (se = (fe = z == null ? void 0 : z.app) == null ? void 0 : fe.users) == null ? void 0 : se.addUser, Ct = (te = (dt = z == null ? void 0 : z.app) == null ? void 0 : dt.users) == null ? void 0 : te.removeTrustedUser, Me = (ne = (de = z == null ? void 0 : z.app) == null ? void 0 : de.users) == null ? void 0 : ne.removeUser;
  return En.exports.useEffect(() => {
    z && ($ = z.user, A = z.app.users.addTrustedUser, Et = z.app.users.addUser, Ct = z.app.users.removeTrustedUser, Me = z.app.users.removeUser);
  }, [z]), { user: $, addUser: Et, addTrustedUser: A, removeUser: Me, removeTrustedUser: Ct };
}
const Z1 = { useAPI: G_, useBackbone: qp, useMeta: q_, useNetwork: X_, useUsers: K_ };
function Z_() {
  Z1.useAPI(Et);
  const z = Z1.useBackbone(), [$, A] = En.exports.useState([]);
  async function Et() {
    const Me = await z.app.backboneReactAll();
    A(Me);
  }
  En.exports.useEffect(() => {
    Et();
  }, []);
  async function Ct() {
    z.app.newPost({ text: "hello!" });
  }
  return /* @__PURE__ */ zf.createElement(zf.Fragment, null, /* @__PURE__ */ zf.createElement("div", {
    onClick: Ct
  }, "Add new post"), /* @__PURE__ */ zf.createElement("div", null, $.map((Me, S) => /* @__PURE__ */ zf.createElement("div", {
    key: S
  }, Me.text))));
}
const J_ = `*{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}body{top:0;bottom:0;left:0;right:0;position:absolute;background:#212121;color:#fff;z-index:100}body #UI{display:flex;align-items:center;justify-content:center;height:100%}body #UI a{text-decoration:none;background:linear-gradient(180deg,#ffffff 0,#cecece 100%);-webkit-text-fill-color:transparent;color:#fff;-webkit-background-clip:text}body #UI .logo{width:230px}body #UI .container{display:flex;justify-content:center;flex-direction:column;width:50%}body #UI .container .row{flex-direction:row;justify-items:center;display:flex;column-gap:50px}body #UI .container .row.head_container{flex-direction:column;margin-bottom:20px}body #UI .container .row .head{font-size:2rem;font-weight:700;color:#fff}body #UI .container .row .head .sub-headline{font-size:1.4rem;opacity:.5}body #UI .container .row .col{display:flex;flex-direction:column;flex-grow:1;width:100%}body #UI .container .row .col .box-head{font-size:1.1rem;font-weight:200}body #UI .container .row .col .list{list-style:none;display:inline-block;text-align:left;margin:0;padding:0}body #UI .container .row .col .list li{margin:10px 0 0;padding:7px 10px;font-size:.9rem;background:rgba(255,255,255,.0392156863);color:#fff;border-radius:4px;border:1px solid rgba(255,255,255,.0509803922);font-weight:600}body #UI .container .row .col .list li:hover{background:rgba(255,255,255,.1019607843)}
`;
if (typeof window == "object") {
  const z = document.createElement("style");
  z.setAttribute("id", "app-style"), z.innerHTML = J_, document.body.appendChild(z);
}
const rk = async () => {
  Gp.createRoot(document.getElementById("UI")).render(/* @__PURE__ */ zf.createElement(Z_, null));
};
export {
  rk as default
};
