/*! For license information please see main.1e734ca7.js.LICENSE.txt */
!(function () {
  var e = {
      222: function (e, t, o) {
        var a = o(132),
          n = o(630),
          s = o(473);
        function i(e) {
          return e[Math.floor(Math.random() * e.length)];
        }
        e.exports = {
          getRandomQuote: function () {
            return i(a);
          },
          getRandomJoke: function () {
            return i(n);
          },
          getRandomRiddle: function () {
            return i(s);
          },
        };
      },
      463: function (e, t, o) {
        "use strict";
        var a = o(791),
          n = o(296);
        function s(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              o = 1;
            o < arguments.length;
            o++
          )
            t += "&args[]=" + encodeURIComponent(arguments[o]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          h = {};
        function r(e, t) {
          d(e, t), d(e + "Capture", t);
        }
        function d(e, t) {
          for (h[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var l = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          u = Object.prototype.hasOwnProperty,
          y =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          c = {},
          m = {};
        function g(e, t, o, a, n, s, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = a),
            (this.attributeNamespace = n),
            (this.mustUseProperty = o),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = s),
            (this.removeEmptyString = i);
        }
        var w = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            w[e] = new g(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            w[t] = new g(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              w[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            w[e] = new g(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              w[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            w[e] = new g(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            w[e] = new g(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            w[e] = new g(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            w[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var f = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function p(e, t, o, a) {
          var n = w.hasOwnProperty(t) ? w[t] : null;
          (null !== n
            ? 0 !== n.type
            : a ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, o, a) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, o, a) {
                  if (null !== o && 0 === o.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !a &&
                        (null !== o
                          ? !o.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, o, a)
              )
                return !0;
              if (a) return !1;
              if (null !== o)
                switch (o.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, o, n, a) && (o = null),
            a || null === n
              ? (function (e) {
                  return (
                    !!u.call(m, e) ||
                    (!u.call(c, e) &&
                      (y.test(e) ? (m[e] = !0) : ((c[e] = !0), !1)))
                  );
                })(t) &&
                (null === o ? e.removeAttribute(t) : e.setAttribute(t, "" + o))
              : n.mustUseProperty
              ? (e[n.propertyName] = null === o ? 3 !== n.type && "" : o)
              : ((t = n.attributeName),
                (a = n.attributeNamespace),
                null === o
                  ? e.removeAttribute(t)
                  : ((o =
                      3 === (n = n.type) || (4 === n && !0 === o)
                        ? ""
                        : "" + o),
                    a ? e.setAttributeNS(a, t, o) : e.setAttribute(t, o))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(f, b);
            w[t] = new g(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(f, b);
              w[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(f, b);
            w[t] = new g(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            w[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (w.xlinkHref = new g(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            w[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          v = Symbol.for("react.element"),
          I = Symbol.for("react.portal"),
          T = Symbol.for("react.fragment"),
          A = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          W = Symbol.for("react.provider"),
          H = Symbol.for("react.context"),
          M = Symbol.for("react.forward_ref"),
          x = Symbol.for("react.suspense"),
          B = Symbol.for("react.suspense_list"),
          q = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var E = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var D = Symbol.iterator;
        function N(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (D && e[D]) || e["@@iterator"])
            ? e
            : null;
        }
        var C,
          J = Object.assign;
        function j(e) {
          if (void 0 === C)
            try {
              throw Error();
            } catch (o) {
              var t = o.stack.trim().match(/\n( *(at )?)/);
              C = (t && t[1]) || "";
            }
          return "\n" + C + e;
        }
        var Y = !1;
        function L(e, t) {
          if (!e || Y) return "";
          Y = !0;
          var o = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (d) {
                  var a = d;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (d) {
                  a = d;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (d) {
                a = d;
              }
              e();
            }
          } catch (d) {
            if (d && a && "string" === typeof d.stack) {
              for (
                var n = d.stack.split("\n"),
                  s = a.stack.split("\n"),
                  i = n.length - 1,
                  h = s.length - 1;
                1 <= i && 0 <= h && n[i] !== s[h];

              )
                h--;
              for (; 1 <= i && 0 <= h; i--, h--)
                if (n[i] !== s[h]) {
                  if (1 !== i || 1 !== h)
                    do {
                      if ((i--, 0 > --h || n[i] !== s[h])) {
                        var r = "\n" + n[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            r.includes("<anonymous>") &&
                            (r = r.replace("<anonymous>", e.displayName)),
                          r
                        );
                      }
                    } while (1 <= i && 0 <= h);
                  break;
                }
            }
          } finally {
            (Y = !1), (Error.prepareStackTrace = o);
          }
          return (e = e ? e.displayName || e.name : "") ? j(e) : "";
        }
        function G(e) {
          switch (e.tag) {
            case 5:
              return j(e.type);
            case 16:
              return j("Lazy");
            case 13:
              return j("Suspense");
            case 19:
              return j("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = L(e.type, !1));
            case 11:
              return (e = L(e.type.render, !1));
            case 1:
              return (e = L(e.type, !0));
            default:
              return "";
          }
        }
        function P(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case T:
              return "Fragment";
            case I:
              return "Portal";
            case S:
              return "Profiler";
            case A:
              return "StrictMode";
            case x:
              return "Suspense";
            case B:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case H:
                return (e.displayName || "Context") + ".Consumer";
              case W:
                return (e._context.displayName || "Context") + ".Provider";
              case M:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case q:
                return null !== (t = e.displayName || null)
                  ? t
                  : P(e.type) || "Memo";
              case O:
                (t = e._payload), (e = e._init);
                try {
                  return P(e(t));
                } catch (o) {}
            }
          return null;
        }
        function R(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return P(t);
            case 8:
              return t === A ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function F(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function _(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function z(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = _(e) ? "checked" : "value",
                o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                a = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof o &&
                "function" === typeof o.get &&
                "function" === typeof o.set
              ) {
                var n = o.get,
                  s = o.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return n.call(this);
                    },
                    set: function (e) {
                      (a = "" + e), s.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: o.enumerable }),
                  {
                    getValue: function () {
                      return a;
                    },
                    setValue: function (e) {
                      a = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function U(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var o = t.getValue(),
            a = "";
          return (
            e && (a = _(e) ? (e.checked ? "true" : "false") : e.value),
            (e = a) !== o && (t.setValue(e), !0)
          );
        }
        function $(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var o = t.checked;
          return J({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != o ? o : e._wrapperState.initialChecked,
          });
        }
        function V(e, t) {
          var o = null == t.defaultValue ? "" : t.defaultValue,
            a = null != t.checked ? t.checked : t.defaultChecked;
          (o = F(null != t.value ? t.value : o)),
            (e._wrapperState = {
              initialChecked: a,
              initialValue: o,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Q(e, t) {
          null != (t = t.checked) && p(e, "checked", t, !1);
        }
        function Z(e, t) {
          Q(e, t);
          var o = F(t.value),
            a = t.type;
          if (null != o)
            "number" === a
              ? ((0 === o && "" === e.value) || e.value != o) &&
                (e.value = "" + o)
              : e.value !== "" + o && (e.value = "" + o);
          else if ("submit" === a || "reset" === a)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, o)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, F(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function X(e, t, o) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var a = t.type;
            if (
              !(
                ("submit" !== a && "reset" !== a) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              o || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (o = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== o && (e.name = o);
        }
        function ee(e, t, o) {
          ("number" === t && $(e.ownerDocument) === e) ||
            (null == o
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + o && (e.defaultValue = "" + o));
        }
        var te = Array.isArray;
        function oe(e, t, o, a) {
          if (((e = e.options), t)) {
            t = {};
            for (var n = 0; n < o.length; n++) t["$" + o[n]] = !0;
            for (o = 0; o < e.length; o++)
              (n = t.hasOwnProperty("$" + e[o].value)),
                e[o].selected !== n && (e[o].selected = n),
                n && a && (e[o].defaultSelected = !0);
          } else {
            for (o = "" + F(o), t = null, n = 0; n < e.length; n++) {
              if (e[n].value === o)
                return (
                  (e[n].selected = !0), void (a && (e[n].defaultSelected = !0))
                );
              null !== t || e[n].disabled || (t = e[n]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ae(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(s(91));
          return J({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ne(e, t) {
          var o = t.value;
          if (null == o) {
            if (((o = t.children), (t = t.defaultValue), null != o)) {
              if (null != t) throw Error(s(92));
              if (te(o)) {
                if (1 < o.length) throw Error(s(93));
                o = o[0];
              }
              t = o;
            }
            null == t && (t = ""), (o = t);
          }
          e._wrapperState = { initialValue: F(o) };
        }
        function se(e, t) {
          var o = F(t.value),
            a = F(t.defaultValue);
          null != o &&
            ((o = "" + o) !== e.value && (e.value = o),
            null == t.defaultValue &&
              e.defaultValue !== o &&
              (e.defaultValue = o)),
            null != a && (e.defaultValue = "" + a);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function he(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function re(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? he(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var de,
          le,
          ue =
            ((le = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (de = de || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = de.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, o, a) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return le(e, t);
                  });
                }
              : le);
        function ye(e, t) {
          if (t) {
            var o = e.firstChild;
            if (o && o === e.lastChild && 3 === o.nodeType)
              return void (o.nodeValue = t);
          }
          e.textContent = t;
        }
        var ce = {
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
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function ge(e, t, o) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : o ||
              "number" !== typeof t ||
              0 === t ||
              (ce.hasOwnProperty(e) && ce[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function we(e, t) {
          for (var o in ((e = e.style), t))
            if (t.hasOwnProperty(o)) {
              var a = 0 === o.indexOf("--"),
                n = ge(o, t[o], a);
              "float" === o && (o = "cssFloat"),
                a ? e.setProperty(o, n) : (e[o] = n);
            }
        }
        Object.keys(ce).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (ce[t] = ce[e]);
          });
        });
        var fe = J(
          { menuitem: !0 },
          {
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
            wbr: !0,
          }
        );
        function be(e, t) {
          if (t) {
            if (
              fe[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(s(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(s(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(s(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(s(62));
          }
        }
        function pe(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        var ke = null;
        function ve(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ie = null,
          Te = null,
          Ae = null;
        function Se(e) {
          if ((e = kn(e))) {
            if ("function" !== typeof Ie) throw Error(s(280));
            var t = e.stateNode;
            t && ((t = In(t)), Ie(e.stateNode, e.type, t));
          }
        }
        function We(e) {
          Te ? (Ae ? Ae.push(e) : (Ae = [e])) : (Te = e);
        }
        function He() {
          if (Te) {
            var e = Te,
              t = Ae;
            if (((Ae = Te = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function Me(e, t) {
          return e(t);
        }
        function xe() {}
        var Be = !1;
        function qe(e, t, o) {
          if (Be) return e(t, o);
          Be = !0;
          try {
            return Me(e, t, o);
          } finally {
            (Be = !1), (null !== Te || null !== Ae) && (xe(), He());
          }
        }
        function Oe(e, t) {
          var o = e.stateNode;
          if (null === o) return null;
          var a = In(o);
          if (null === a) return null;
          o = a[t];
          e: switch (t) {
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
              (a = !a.disabled) ||
                (a = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !a);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (o && "function" !== typeof o) throw Error(s(231, t, typeof o));
          return o;
        }
        var Ee = !1;
        if (l)
          try {
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                Ee = !0;
              },
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (le) {
            Ee = !1;
          }
        function Ne(e, t, o, a, n, s, i, h, r) {
          var d = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(o, d);
          } catch (l) {
            this.onError(l);
          }
        }
        var Ce = !1,
          Je = null,
          je = !1,
          Ye = null,
          Le = {
            onError: function (e) {
              (Ce = !0), (Je = e);
            },
          };
        function Ge(e, t, o, a, n, s, i, h, r) {
          (Ce = !1), (Je = null), Ne.apply(Le, arguments);
        }
        function Pe(e) {
          var t = e,
            o = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (o = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? o : null;
        }
        function Re(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Fe(e) {
          if (Pe(e) !== e) throw Error(s(188));
        }
        function _e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Pe(e))) throw Error(s(188));
                return t !== e ? null : e;
              }
              for (var o = e, a = t; ; ) {
                var n = o.return;
                if (null === n) break;
                var i = n.alternate;
                if (null === i) {
                  if (null !== (a = n.return)) {
                    o = a;
                    continue;
                  }
                  break;
                }
                if (n.child === i.child) {
                  for (i = n.child; i; ) {
                    if (i === o) return Fe(n), e;
                    if (i === a) return Fe(n), t;
                    i = i.sibling;
                  }
                  throw Error(s(188));
                }
                if (o.return !== a.return) (o = n), (a = i);
                else {
                  for (var h = !1, r = n.child; r; ) {
                    if (r === o) {
                      (h = !0), (o = n), (a = i);
                      break;
                    }
                    if (r === a) {
                      (h = !0), (a = n), (o = i);
                      break;
                    }
                    r = r.sibling;
                  }
                  if (!h) {
                    for (r = i.child; r; ) {
                      if (r === o) {
                        (h = !0), (o = i), (a = n);
                        break;
                      }
                      if (r === a) {
                        (h = !0), (a = i), (o = n);
                        break;
                      }
                      r = r.sibling;
                    }
                    if (!h) throw Error(s(189));
                  }
                }
                if (o.alternate !== a) throw Error(s(190));
              }
              if (3 !== o.tag) throw Error(s(188));
              return o.stateNode.current === o ? e : t;
            })(e))
            ? ze(e)
            : null;
        }
        function ze(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = ze(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ue = n.unstable_scheduleCallback,
          $e = n.unstable_cancelCallback,
          Ke = n.unstable_shouldYield,
          Ve = n.unstable_requestPaint,
          Qe = n.unstable_now,
          Ze = n.unstable_getCurrentPriorityLevel,
          Xe = n.unstable_ImmediatePriority,
          et = n.unstable_UserBlockingPriority,
          tt = n.unstable_NormalPriority,
          ot = n.unstable_LowPriority,
          at = n.unstable_IdlePriority,
          nt = null,
          st = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ht(e) / rt) | 0)) | 0;
              },
          ht = Math.log,
          rt = Math.LN2;
        var dt = 64,
          lt = 4194304;
        function ut(e) {
          switch (e & -e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function yt(e, t) {
          var o = e.pendingLanes;
          if (0 === o) return 0;
          var a = 0,
            n = e.suspendedLanes,
            s = e.pingedLanes,
            i = 268435455 & o;
          if (0 !== i) {
            var h = i & ~n;
            0 !== h ? (a = ut(h)) : 0 !== (s &= i) && (a = ut(s));
          } else 0 !== (i = o & ~n) ? (a = ut(i)) : 0 !== s && (a = ut(s));
          if (0 === a) return 0;
          if (
            0 !== t &&
            t !== a &&
            0 === (t & n) &&
            ((n = a & -a) >= (s = t & -t) || (16 === n && 0 !== (4194240 & s)))
          )
            return t;
          if ((0 !== (4 & a) && (a |= 16 & o), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= a; 0 < t; )
              (n = 1 << (o = 31 - it(t))), (a |= e[o]), (t &= ~n);
          return a;
        }
        function ct(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function gt() {
          var e = dt;
          return 0 === (4194240 & (dt <<= 1)) && (dt = 64), e;
        }
        function wt(e) {
          for (var t = [], o = 0; 31 > o; o++) t.push(e);
          return t;
        }
        function ft(e, t, o) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = o);
        }
        function bt(e, t) {
          var o = (e.entangledLanes |= t);
          for (e = e.entanglements; o; ) {
            var a = 31 - it(o),
              n = 1 << a;
            (n & t) | (e[a] & t) && (e[a] |= t), (o &= ~n);
          }
        }
        var pt = 0;
        function kt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var vt,
          It,
          Tt,
          At,
          St,
          Wt = !1,
          Ht = [],
          Mt = null,
          xt = null,
          Bt = null,
          qt = new Map(),
          Ot = new Map(),
          Et = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Nt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Mt = null;
              break;
            case "dragenter":
            case "dragleave":
              xt = null;
              break;
            case "mouseover":
            case "mouseout":
              Bt = null;
              break;
            case "pointerover":
            case "pointerout":
              qt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ot.delete(t.pointerId);
          }
        }
        function Ct(e, t, o, a, n, s) {
          return null === e || e.nativeEvent !== s
            ? ((e = {
                blockedOn: t,
                domEventName: o,
                eventSystemFlags: a,
                nativeEvent: s,
                targetContainers: [n],
              }),
              null !== t && null !== (t = kn(t)) && It(t),
              e)
            : ((e.eventSystemFlags |= a),
              (t = e.targetContainers),
              null !== n && -1 === t.indexOf(n) && t.push(n),
              e);
        }
        function Jt(e) {
          var t = pn(e.target);
          if (null !== t) {
            var o = Pe(t);
            if (null !== o)
              if (13 === (t = o.tag)) {
                if (null !== (t = Re(o)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      Tt(o);
                    })
                  );
              } else if (
                3 === t &&
                o.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === o.tag ? o.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function jt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var o = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== o)
              return null !== (t = kn(o)) && It(t), (e.blockedOn = o), !1;
            var a = new (o = e.nativeEvent).constructor(o.type, o);
            (ke = a), o.target.dispatchEvent(a), (ke = null), t.shift();
          }
          return !0;
        }
        function Yt(e, t, o) {
          jt(e) && o.delete(t);
        }
        function Lt() {
          (Wt = !1),
            null !== Mt && jt(Mt) && (Mt = null),
            null !== xt && jt(xt) && (xt = null),
            null !== Bt && jt(Bt) && (Bt = null),
            qt.forEach(Yt),
            Ot.forEach(Yt);
        }
        function Gt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Wt ||
              ((Wt = !0),
              n.unstable_scheduleCallback(n.unstable_NormalPriority, Lt)));
        }
        function Pt(e) {
          function t(t) {
            return Gt(t, e);
          }
          if (0 < Ht.length) {
            Gt(Ht[0], e);
            for (var o = 1; o < Ht.length; o++) {
              var a = Ht[o];
              a.blockedOn === e && (a.blockedOn = null);
            }
          }
          for (
            null !== Mt && Gt(Mt, e),
              null !== xt && Gt(xt, e),
              null !== Bt && Gt(Bt, e),
              qt.forEach(t),
              Ot.forEach(t),
              o = 0;
            o < Et.length;
            o++
          )
            (a = Et[o]).blockedOn === e && (a.blockedOn = null);
          for (; 0 < Et.length && null === (o = Et[0]).blockedOn; )
            Jt(o), null === o.blockedOn && Et.shift();
        }
        var Rt = k.ReactCurrentBatchConfig,
          Ft = !0;
        function _t(e, t, o, a) {
          var n = pt,
            s = Rt.transition;
          Rt.transition = null;
          try {
            (pt = 1), Ut(e, t, o, a);
          } finally {
            (pt = n), (Rt.transition = s);
          }
        }
        function zt(e, t, o, a) {
          var n = pt,
            s = Rt.transition;
          Rt.transition = null;
          try {
            (pt = 4), Ut(e, t, o, a);
          } finally {
            (pt = n), (Rt.transition = s);
          }
        }
        function Ut(e, t, o, a) {
          if (Ft) {
            var n = Kt(e, t, o, a);
            if (null === n) Fa(e, t, a, $t, o), Nt(e, a);
            else if (
              (function (e, t, o, a, n) {
                switch (t) {
                  case "focusin":
                    return (Mt = Ct(Mt, e, t, o, a, n)), !0;
                  case "dragenter":
                    return (xt = Ct(xt, e, t, o, a, n)), !0;
                  case "mouseover":
                    return (Bt = Ct(Bt, e, t, o, a, n)), !0;
                  case "pointerover":
                    var s = n.pointerId;
                    return qt.set(s, Ct(qt.get(s) || null, e, t, o, a, n)), !0;
                  case "gotpointercapture":
                    return (
                      (s = n.pointerId),
                      Ot.set(s, Ct(Ot.get(s) || null, e, t, o, a, n)),
                      !0
                    );
                }
                return !1;
              })(n, e, t, o, a)
            )
              a.stopPropagation();
            else if ((Nt(e, a), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== n; ) {
                var s = kn(n);
                if (
                  (null !== s && vt(s),
                  null === (s = Kt(e, t, o, a)) && Fa(e, t, a, $t, o),
                  s === n)
                )
                  break;
                n = s;
              }
              null !== n && a.stopPropagation();
            } else Fa(e, t, a, null, o);
          }
        }
        var $t = null;
        function Kt(e, t, o, a) {
          if ((($t = null), null !== (e = pn((e = ve(a))))))
            if (null === (t = Pe(e))) e = null;
            else if (13 === (o = t.tag)) {
              if (null !== (e = Re(t))) return e;
              e = null;
            } else if (3 === o) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return ($t = e), null;
        }
        function Vt(e) {
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
              switch (Ze()) {
                case Xe:
                  return 1;
                case et:
                  return 4;
                case tt:
                case ot:
                  return 16;
                case at:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Qt = null,
          Zt = null,
          Xt = null;
        function eo() {
          if (Xt) return Xt;
          var e,
            t,
            o = Zt,
            a = o.length,
            n = "value" in Qt ? Qt.value : Qt.textContent,
            s = n.length;
          for (e = 0; e < a && o[e] === n[e]; e++);
          var i = a - e;
          for (t = 1; t <= i && o[a - t] === n[s - t]; t++);
          return (Xt = n.slice(e, 1 < t ? 1 - t : void 0));
        }
        function to(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function oo() {
          return !0;
        }
        function ao() {
          return !1;
        }
        function no(e) {
          function t(t, o, a, n, s) {
            for (var i in ((this._reactName = t),
            (this._targetInst = a),
            (this.type = o),
            (this.nativeEvent = n),
            (this.target = s),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(n) : n[i]));
            return (
              (this.isDefaultPrevented = (
                null != n.defaultPrevented
                  ? n.defaultPrevented
                  : !1 === n.returnValue
              )
                ? oo
                : ao),
              (this.isPropagationStopped = ao),
              this
            );
          }
          return (
            J(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = oo));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = oo));
              },
              persist: function () {},
              isPersistent: oo,
            }),
            t
          );
        }
        var so,
          io,
          ho,
          ro = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          lo = no(ro),
          uo = J({}, ro, { view: 0, detail: 0 }),
          yo = no(uo),
          co = J({}, uo, {
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
            getModifierState: So,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ho &&
                    (ho && "mousemove" === e.type
                      ? ((so = e.screenX - ho.screenX),
                        (io = e.screenY - ho.screenY))
                      : (io = so = 0),
                    (ho = e)),
                  so);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : io;
            },
          }),
          mo = no(co),
          go = no(J({}, co, { dataTransfer: 0 })),
          wo = no(J({}, uo, { relatedTarget: 0 })),
          fo = no(
            J({}, ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          bo = J({}, ro, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          po = no(bo),
          ko = no(J({}, ro, { data: 0 })),
          vo = {
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
            MozPrintableKey: "Unidentified",
          },
          Io = {
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
            224: "Meta",
          },
          To = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Ao(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = To[e]) && !!t[e];
        }
        function So() {
          return Ao;
        }
        var Wo = J({}, uo, {
            key: function (e) {
              if (e.key) {
                var t = vo[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = to(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Io[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: So,
            charCode: function (e) {
              return "keypress" === e.type ? to(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? to(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Ho = no(Wo),
          Mo = no(
            J({}, co, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          xo = no(
            J({}, uo, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: So,
            })
          ),
          Bo = no(
            J({}, ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          qo = J({}, co, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Oo = no(qo),
          Eo = [9, 13, 27, 32],
          Do = l && "CompositionEvent" in window,
          No = null;
        l && "documentMode" in document && (No = document.documentMode);
        var Co = l && "TextEvent" in window && !No,
          Jo = l && (!Do || (No && 8 < No && 11 >= No)),
          jo = String.fromCharCode(32),
          Yo = !1;
        function Lo(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Eo.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Go(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Po = !1;
        var Ro = {
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
          week: !0,
        };
        function Fo(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Ro[e.type] : "textarea" === t;
        }
        function _o(e, t, o, a) {
          We(a),
            0 < (t = za(t, "onChange")).length &&
              ((o = new lo("onChange", "change", null, o, a)),
              e.push({ event: o, listeners: t }));
        }
        var zo = null,
          Uo = null;
        function $o(e) {
          ja(e, 0);
        }
        function Ko(e) {
          if (U(vn(e))) return e;
        }
        function Vo(e, t) {
          if ("change" === e) return t;
        }
        var Qo = !1;
        if (l) {
          var Zo;
          if (l) {
            var Xo = "oninput" in document;
            if (!Xo) {
              var ea = document.createElement("div");
              ea.setAttribute("oninput", "return;"),
                (Xo = "function" === typeof ea.oninput);
            }
            Zo = Xo;
          } else Zo = !1;
          Qo = Zo && (!document.documentMode || 9 < document.documentMode);
        }
        function ta() {
          zo && (zo.detachEvent("onpropertychange", oa), (Uo = zo = null));
        }
        function oa(e) {
          if ("value" === e.propertyName && Ko(Uo)) {
            var t = [];
            _o(t, Uo, e, ve(e)), qe($o, t);
          }
        }
        function aa(e, t, o) {
          "focusin" === e
            ? (ta(), (Uo = o), (zo = t).attachEvent("onpropertychange", oa))
            : "focusout" === e && ta();
        }
        function na(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Ko(Uo);
        }
        function sa(e, t) {
          if ("click" === e) return Ko(t);
        }
        function ia(e, t) {
          if ("input" === e || "change" === e) return Ko(t);
        }
        var ha =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ra(e, t) {
          if (ha(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var o = Object.keys(e),
            a = Object.keys(t);
          if (o.length !== a.length) return !1;
          for (a = 0; a < o.length; a++) {
            var n = o[a];
            if (!u.call(t, n) || !ha(e[n], t[n])) return !1;
          }
          return !0;
        }
        function da(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function la(e, t) {
          var o,
            a = da(e);
          for (e = 0; a; ) {
            if (3 === a.nodeType) {
              if (((o = e + a.textContent.length), e <= t && o >= t))
                return { node: a, offset: t - e };
              e = o;
            }
            e: {
              for (; a; ) {
                if (a.nextSibling) {
                  a = a.nextSibling;
                  break e;
                }
                a = a.parentNode;
              }
              a = void 0;
            }
            a = da(a);
          }
        }
        function ua(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? ua(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function ya() {
          for (var e = window, t = $(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var o = "string" === typeof t.contentWindow.location.href;
            } catch (a) {
              o = !1;
            }
            if (!o) break;
            t = $((e = t.contentWindow).document);
          }
          return t;
        }
        function ca(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function ma(e) {
          var t = ya(),
            o = e.focusedElem,
            a = e.selectionRange;
          if (
            t !== o &&
            o &&
            o.ownerDocument &&
            ua(o.ownerDocument.documentElement, o)
          ) {
            if (null !== a && ca(o))
              if (
                ((t = a.start),
                void 0 === (e = a.end) && (e = t),
                "selectionStart" in o)
              )
                (o.selectionStart = t),
                  (o.selectionEnd = Math.min(e, o.value.length));
              else if (
                (e =
                  ((t = o.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var n = o.textContent.length,
                  s = Math.min(a.start, n);
                (a = void 0 === a.end ? s : Math.min(a.end, n)),
                  !e.extend && s > a && ((n = a), (a = s), (s = n)),
                  (n = la(o, s));
                var i = la(o, a);
                n &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== n.node ||
                    e.anchorOffset !== n.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(n.node, n.offset),
                  e.removeAllRanges(),
                  s > a
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = o; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof o.focus && o.focus(), o = 0;
              o < t.length;
              o++
            )
              ((e = t[o]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var ga = l && "documentMode" in document && 11 >= document.documentMode,
          wa = null,
          fa = null,
          ba = null,
          pa = !1;
        function ka(e, t, o) {
          var a =
            o.window === o
              ? o.document
              : 9 === o.nodeType
              ? o
              : o.ownerDocument;
          pa ||
            null == wa ||
            wa !== $(a) ||
            ("selectionStart" in (a = wa) && ca(a)
              ? (a = { start: a.selectionStart, end: a.selectionEnd })
              : (a = {
                  anchorNode: (a = (
                    (a.ownerDocument && a.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: a.anchorOffset,
                  focusNode: a.focusNode,
                  focusOffset: a.focusOffset,
                }),
            (ba && ra(ba, a)) ||
              ((ba = a),
              0 < (a = za(fa, "onSelect")).length &&
                ((t = new lo("onSelect", "select", null, t, o)),
                e.push({ event: t, listeners: a }),
                (t.target = wa))));
        }
        function va(e, t) {
          var o = {};
          return (
            (o[e.toLowerCase()] = t.toLowerCase()),
            (o["Webkit" + e] = "webkit" + t),
            (o["Moz" + e] = "moz" + t),
            o
          );
        }
        var Ia = {
            animationend: va("Animation", "AnimationEnd"),
            animationiteration: va("Animation", "AnimationIteration"),
            animationstart: va("Animation", "AnimationStart"),
            transitionend: va("Transition", "TransitionEnd"),
          },
          Ta = {},
          Aa = {};
        function Sa(e) {
          if (Ta[e]) return Ta[e];
          if (!Ia[e]) return e;
          var t,
            o = Ia[e];
          for (t in o)
            if (o.hasOwnProperty(t) && t in Aa) return (Ta[e] = o[t]);
          return e;
        }
        l &&
          ((Aa = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Ia.animationend.animation,
            delete Ia.animationiteration.animation,
            delete Ia.animationstart.animation),
          "TransitionEvent" in window || delete Ia.transitionend.transition);
        var Wa = Sa("animationend"),
          Ha = Sa("animationiteration"),
          Ma = Sa("animationstart"),
          xa = Sa("transitionend"),
          Ba = new Map(),
          qa =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Oa(e, t) {
          Ba.set(e, t), r(t, [e]);
        }
        for (var Ea = 0; Ea < qa.length; Ea++) {
          var Da = qa[Ea];
          Oa(Da.toLowerCase(), "on" + (Da[0].toUpperCase() + Da.slice(1)));
        }
        Oa(Wa, "onAnimationEnd"),
          Oa(Ha, "onAnimationIteration"),
          Oa(Ma, "onAnimationStart"),
          Oa("dblclick", "onDoubleClick"),
          Oa("focusin", "onFocus"),
          Oa("focusout", "onBlur"),
          Oa(xa, "onTransitionEnd"),
          d("onMouseEnter", ["mouseout", "mouseover"]),
          d("onMouseLeave", ["mouseout", "mouseover"]),
          d("onPointerEnter", ["pointerout", "pointerover"]),
          d("onPointerLeave", ["pointerout", "pointerover"]),
          r(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          r(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          r("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          r(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          r(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          r(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Na =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ca = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Na)
          );
        function Ja(e, t, o) {
          var a = e.type || "unknown-event";
          (e.currentTarget = o),
            (function (e, t, o, a, n, i, h, r, d) {
              if ((Ge.apply(this, arguments), Ce)) {
                if (!Ce) throw Error(s(198));
                var l = Je;
                (Ce = !1), (Je = null), je || ((je = !0), (Ye = l));
              }
            })(a, t, void 0, e),
            (e.currentTarget = null);
        }
        function ja(e, t) {
          t = 0 !== (4 & t);
          for (var o = 0; o < e.length; o++) {
            var a = e[o],
              n = a.event;
            a = a.listeners;
            e: {
              var s = void 0;
              if (t)
                for (var i = a.length - 1; 0 <= i; i--) {
                  var h = a[i],
                    r = h.instance,
                    d = h.currentTarget;
                  if (((h = h.listener), r !== s && n.isPropagationStopped()))
                    break e;
                  Ja(n, h, d), (s = r);
                }
              else
                for (i = 0; i < a.length; i++) {
                  if (
                    ((r = (h = a[i]).instance),
                    (d = h.currentTarget),
                    (h = h.listener),
                    r !== s && n.isPropagationStopped())
                  )
                    break e;
                  Ja(n, h, d), (s = r);
                }
            }
          }
          if (je) throw ((e = Ye), (je = !1), (Ye = null), e);
        }
        function Ya(e, t) {
          var o = t[wn];
          void 0 === o && (o = t[wn] = new Set());
          var a = e + "__bubble";
          o.has(a) || (Ra(t, e, 2, !1), o.add(a));
        }
        function La(e, t, o) {
          var a = 0;
          t && (a |= 4), Ra(o, e, a, t);
        }
        var Ga = "_reactListening" + Math.random().toString(36).slice(2);
        function Pa(e) {
          if (!e[Ga]) {
            (e[Ga] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ca.has(t) || La(t, !1, e), La(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ga] || ((t[Ga] = !0), La("selectionchange", !1, t));
          }
        }
        function Ra(e, t, o, a) {
          switch (Vt(t)) {
            case 1:
              var n = _t;
              break;
            case 4:
              n = zt;
              break;
            default:
              n = Ut;
          }
          (o = n.bind(null, t, o, e)),
            (n = void 0),
            !Ee ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (n = !0),
            a
              ? void 0 !== n
                ? e.addEventListener(t, o, { capture: !0, passive: n })
                : e.addEventListener(t, o, !0)
              : void 0 !== n
              ? e.addEventListener(t, o, { passive: n })
              : e.addEventListener(t, o, !1);
        }
        function Fa(e, t, o, a, n) {
          var s = a;
          if (0 === (1 & t) && 0 === (2 & t) && null !== a)
            e: for (;;) {
              if (null === a) return;
              var i = a.tag;
              if (3 === i || 4 === i) {
                var h = a.stateNode.containerInfo;
                if (h === n || (8 === h.nodeType && h.parentNode === n)) break;
                if (4 === i)
                  for (i = a.return; null !== i; ) {
                    var r = i.tag;
                    if (
                      (3 === r || 4 === r) &&
                      ((r = i.stateNode.containerInfo) === n ||
                        (8 === r.nodeType && r.parentNode === n))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== h; ) {
                  if (null === (i = pn(h))) return;
                  if (5 === (r = i.tag) || 6 === r) {
                    a = s = i;
                    continue e;
                  }
                  h = h.parentNode;
                }
              }
              a = a.return;
            }
          qe(function () {
            var a = s,
              n = ve(o),
              i = [];
            e: {
              var h = Ba.get(e);
              if (void 0 !== h) {
                var r = lo,
                  d = e;
                switch (e) {
                  case "keypress":
                    if (0 === to(o)) break e;
                  case "keydown":
                  case "keyup":
                    r = Ho;
                    break;
                  case "focusin":
                    (d = "focus"), (r = wo);
                    break;
                  case "focusout":
                    (d = "blur"), (r = wo);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    r = wo;
                    break;
                  case "click":
                    if (2 === o.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    r = mo;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    r = go;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    r = xo;
                    break;
                  case Wa:
                  case Ha:
                  case Ma:
                    r = fo;
                    break;
                  case xa:
                    r = Bo;
                    break;
                  case "scroll":
                    r = yo;
                    break;
                  case "wheel":
                    r = Oo;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    r = po;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    r = Mo;
                }
                var l = 0 !== (4 & t),
                  u = !l && "scroll" === e,
                  y = l ? (null !== h ? h + "Capture" : null) : h;
                l = [];
                for (var c, m = a; null !== m; ) {
                  var g = (c = m).stateNode;
                  if (
                    (5 === c.tag &&
                      null !== g &&
                      ((c = g),
                      null !== y &&
                        null != (g = Oe(m, y)) &&
                        l.push(_a(m, g, c))),
                    u)
                  )
                    break;
                  m = m.return;
                }
                0 < l.length &&
                  ((h = new r(h, d, null, o, n)),
                  i.push({ event: h, listeners: l }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((r = "mouseout" === e || "pointerout" === e),
                (!(h = "mouseover" === e || "pointerover" === e) ||
                  o === ke ||
                  !(d = o.relatedTarget || o.fromElement) ||
                  (!pn(d) && !d[gn])) &&
                  (r || h) &&
                  ((h =
                    n.window === n
                      ? n
                      : (h = n.ownerDocument)
                      ? h.defaultView || h.parentWindow
                      : window),
                  r
                    ? ((r = a),
                      null !==
                        (d = (d = o.relatedTarget || o.toElement)
                          ? pn(d)
                          : null) &&
                        (d !== (u = Pe(d)) || (5 !== d.tag && 6 !== d.tag)) &&
                        (d = null))
                    : ((r = null), (d = a)),
                  r !== d))
              ) {
                if (
                  ((l = mo),
                  (g = "onMouseLeave"),
                  (y = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((l = Mo),
                    (g = "onPointerLeave"),
                    (y = "onPointerEnter"),
                    (m = "pointer")),
                  (u = null == r ? h : vn(r)),
                  (c = null == d ? h : vn(d)),
                  ((h = new l(g, m + "leave", r, o, n)).target = u),
                  (h.relatedTarget = c),
                  (g = null),
                  pn(n) === a &&
                    (((l = new l(y, m + "enter", d, o, n)).target = c),
                    (l.relatedTarget = u),
                    (g = l)),
                  (u = g),
                  r && d)
                )
                  e: {
                    for (y = d, m = 0, c = l = r; c; c = Ua(c)) m++;
                    for (c = 0, g = y; g; g = Ua(g)) c++;
                    for (; 0 < m - c; ) (l = Ua(l)), m--;
                    for (; 0 < c - m; ) (y = Ua(y)), c--;
                    for (; m--; ) {
                      if (l === y || (null !== y && l === y.alternate)) break e;
                      (l = Ua(l)), (y = Ua(y));
                    }
                    l = null;
                  }
                else l = null;
                null !== r && $a(i, h, r, l, !1),
                  null !== d && null !== u && $a(i, u, d, l, !0);
              }
              if (
                "select" ===
                  (r =
                    (h = a ? vn(a) : window).nodeName &&
                    h.nodeName.toLowerCase()) ||
                ("input" === r && "file" === h.type)
              )
                var w = Vo;
              else if (Fo(h))
                if (Qo) w = ia;
                else {
                  w = na;
                  var f = aa;
                }
              else
                (r = h.nodeName) &&
                  "input" === r.toLowerCase() &&
                  ("checkbox" === h.type || "radio" === h.type) &&
                  (w = sa);
              switch (
                (w && (w = w(e, a))
                  ? _o(i, w, o, n)
                  : (f && f(e, h, a),
                    "focusout" === e &&
                      (f = h._wrapperState) &&
                      f.controlled &&
                      "number" === h.type &&
                      ee(h, "number", h.value)),
                (f = a ? vn(a) : window),
                e)
              ) {
                case "focusin":
                  (Fo(f) || "true" === f.contentEditable) &&
                    ((wa = f), (fa = a), (ba = null));
                  break;
                case "focusout":
                  ba = fa = wa = null;
                  break;
                case "mousedown":
                  pa = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (pa = !1), ka(i, o, n);
                  break;
                case "selectionchange":
                  if (ga) break;
                case "keydown":
                case "keyup":
                  ka(i, o, n);
              }
              var b;
              if (Do)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var p = "onCompositionStart";
                      break e;
                    case "compositionend":
                      p = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      p = "onCompositionUpdate";
                      break e;
                  }
                  p = void 0;
                }
              else
                Po
                  ? Lo(e, o) && (p = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === o.keyCode &&
                    (p = "onCompositionStart");
              p &&
                (Jo &&
                  "ko" !== o.locale &&
                  (Po || "onCompositionStart" !== p
                    ? "onCompositionEnd" === p && Po && (b = eo())
                    : ((Zt = "value" in (Qt = n) ? Qt.value : Qt.textContent),
                      (Po = !0))),
                0 < (f = za(a, p)).length &&
                  ((p = new ko(p, e, null, o, n)),
                  i.push({ event: p, listeners: f }),
                  b ? (p.data = b) : null !== (b = Go(o)) && (p.data = b))),
                (b = Co
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Go(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Yo = !0), jo);
                        case "textInput":
                          return (e = t.data) === jo && Yo ? null : e;
                        default:
                          return null;
                      }
                    })(e, o)
                  : (function (e, t) {
                      if (Po)
                        return "compositionend" === e || (!Do && Lo(e, t))
                          ? ((e = eo()), (Xt = Zt = Qt = null), (Po = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Jo && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, o)) &&
                  0 < (a = za(a, "onBeforeInput")).length &&
                  ((n = new ko("onBeforeInput", "beforeinput", null, o, n)),
                  i.push({ event: n, listeners: a }),
                  (n.data = b));
            }
            ja(i, t);
          });
        }
        function _a(e, t, o) {
          return { instance: e, listener: t, currentTarget: o };
        }
        function za(e, t) {
          for (var o = t + "Capture", a = []; null !== e; ) {
            var n = e,
              s = n.stateNode;
            5 === n.tag &&
              null !== s &&
              ((n = s),
              null != (s = Oe(e, o)) && a.unshift(_a(e, s, n)),
              null != (s = Oe(e, t)) && a.push(_a(e, s, n))),
              (e = e.return);
          }
          return a;
        }
        function Ua(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function $a(e, t, o, a, n) {
          for (var s = t._reactName, i = []; null !== o && o !== a; ) {
            var h = o,
              r = h.alternate,
              d = h.stateNode;
            if (null !== r && r === a) break;
            5 === h.tag &&
              null !== d &&
              ((h = d),
              n
                ? null != (r = Oe(o, s)) && i.unshift(_a(o, r, h))
                : n || (null != (r = Oe(o, s)) && i.push(_a(o, r, h)))),
              (o = o.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Ka = /\r\n?/g,
          Va = /\u0000|\uFFFD/g;
        function Qa(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Ka, "\n")
            .replace(Va, "");
        }
        function Za(e, t, o) {
          if (((t = Qa(t)), Qa(e) !== t && o)) throw Error(s(425));
        }
        function Xa() {}
        var en = null,
          tn = null;
        function on(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var an = "function" === typeof setTimeout ? setTimeout : void 0,
          nn = "function" === typeof clearTimeout ? clearTimeout : void 0,
          sn = "function" === typeof Promise ? Promise : void 0,
          hn =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof sn
              ? function (e) {
                  return sn.resolve(null).then(e).catch(rn);
                }
              : an;
        function rn(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function dn(e, t) {
          var o = t,
            a = 0;
          do {
            var n = o.nextSibling;
            if ((e.removeChild(o), n && 8 === n.nodeType))
              if ("/$" === (o = n.data)) {
                if (0 === a) return e.removeChild(n), void Pt(t);
                a--;
              } else ("$" !== o && "$?" !== o && "$!" !== o) || a++;
            o = n;
          } while (o);
          Pt(t);
        }
        function ln(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function un(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var o = e.data;
              if ("$" === o || "$!" === o || "$?" === o) {
                if (0 === t) return e;
                t--;
              } else "/$" === o && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var yn = Math.random().toString(36).slice(2),
          cn = "__reactFiber$" + yn,
          mn = "__reactProps$" + yn,
          gn = "__reactContainer$" + yn,
          wn = "__reactEvents$" + yn,
          fn = "__reactListeners$" + yn,
          bn = "__reactHandles$" + yn;
        function pn(e) {
          var t = e[cn];
          if (t) return t;
          for (var o = e.parentNode; o; ) {
            if ((t = o[gn] || o[cn])) {
              if (
                ((o = t.alternate),
                null !== t.child || (null !== o && null !== o.child))
              )
                for (e = un(e); null !== e; ) {
                  if ((o = e[cn])) return o;
                  e = un(e);
                }
              return t;
            }
            o = (e = o).parentNode;
          }
          return null;
        }
        function kn(e) {
          return !(e = e[cn] || e[gn]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function vn(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(s(33));
        }
        function In(e) {
          return e[mn] || null;
        }
        var Tn = [],
          An = -1;
        function Sn(e) {
          return { current: e };
        }
        function Wn(e) {
          0 > An || ((e.current = Tn[An]), (Tn[An] = null), An--);
        }
        function Hn(e, t) {
          An++, (Tn[An] = e.current), (e.current = t);
        }
        var Mn = {},
          xn = Sn(Mn),
          Bn = Sn(!1),
          qn = Mn;
        function On(e, t) {
          var o = e.type.contextTypes;
          if (!o) return Mn;
          var a = e.stateNode;
          if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
            return a.__reactInternalMemoizedMaskedChildContext;
          var n,
            s = {};
          for (n in o) s[n] = t[n];
          return (
            a &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = s)),
            s
          );
        }
        function En(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Dn() {
          Wn(Bn), Wn(xn);
        }
        function Nn(e, t, o) {
          if (xn.current !== Mn) throw Error(s(168));
          Hn(xn, t), Hn(Bn, o);
        }
        function Cn(e, t, o) {
          var a = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof a.getChildContext)
          )
            return o;
          for (var n in (a = a.getChildContext()))
            if (!(n in t)) throw Error(s(108, R(e) || "Unknown", n));
          return J({}, o, a);
        }
        function Jn(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Mn),
            (qn = xn.current),
            Hn(xn, e),
            Hn(Bn, Bn.current),
            !0
          );
        }
        function jn(e, t, o) {
          var a = e.stateNode;
          if (!a) throw Error(s(169));
          o
            ? ((e = Cn(e, t, qn)),
              (a.__reactInternalMemoizedMergedChildContext = e),
              Wn(Bn),
              Wn(xn),
              Hn(xn, e))
            : Wn(Bn),
            Hn(Bn, o);
        }
        var Yn = null,
          Ln = !1,
          Gn = !1;
        function Pn(e) {
          null === Yn ? (Yn = [e]) : Yn.push(e);
        }
        function Rn() {
          if (!Gn && null !== Yn) {
            Gn = !0;
            var e = 0,
              t = pt;
            try {
              var o = Yn;
              for (pt = 1; e < o.length; e++) {
                var a = o[e];
                do {
                  a = a(!0);
                } while (null !== a);
              }
              (Yn = null), (Ln = !1);
            } catch (n) {
              throw (null !== Yn && (Yn = Yn.slice(e + 1)), Ue(Xe, Rn), n);
            } finally {
              (pt = t), (Gn = !1);
            }
          }
          return null;
        }
        var Fn = [],
          _n = 0,
          zn = null,
          Un = 0,
          $n = [],
          Kn = 0,
          Vn = null,
          Qn = 1,
          Zn = "";
        function Xn(e, t) {
          (Fn[_n++] = Un), (Fn[_n++] = zn), (zn = e), (Un = t);
        }
        function es(e, t, o) {
          ($n[Kn++] = Qn), ($n[Kn++] = Zn), ($n[Kn++] = Vn), (Vn = e);
          var a = Qn;
          e = Zn;
          var n = 32 - it(a) - 1;
          (a &= ~(1 << n)), (o += 1);
          var s = 32 - it(t) + n;
          if (30 < s) {
            var i = n - (n % 5);
            (s = (a & ((1 << i) - 1)).toString(32)),
              (a >>= i),
              (n -= i),
              (Qn = (1 << (32 - it(t) + n)) | (o << n) | a),
              (Zn = s + e);
          } else (Qn = (1 << s) | (o << n) | a), (Zn = e);
        }
        function ts(e) {
          null !== e.return && (Xn(e, 1), es(e, 1, 0));
        }
        function os(e) {
          for (; e === zn; )
            (zn = Fn[--_n]), (Fn[_n] = null), (Un = Fn[--_n]), (Fn[_n] = null);
          for (; e === Vn; )
            (Vn = $n[--Kn]),
              ($n[Kn] = null),
              (Zn = $n[--Kn]),
              ($n[Kn] = null),
              (Qn = $n[--Kn]),
              ($n[Kn] = null);
        }
        var as = null,
          ns = null,
          ss = !1,
          is = null;
        function hs(e, t) {
          var o = Od(5, null, null, 0);
          (o.elementType = "DELETED"),
            (o.stateNode = t),
            (o.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [o]), (e.flags |= 16))
              : t.push(o);
        }
        function rs(e, t) {
          switch (e.tag) {
            case 5:
              var o = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    o.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (as = e), (ns = ln(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (as = e), (ns = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((o = null !== Vn ? { id: Qn, overflow: Zn } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: o,
                  retryLane: 1073741824,
                }),
                ((o = Od(18, null, null, 0)).stateNode = t),
                (o.return = e),
                (e.child = o),
                (as = e),
                (ns = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ds(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ls(e) {
          if (ss) {
            var t = ns;
            if (t) {
              var o = t;
              if (!rs(e, t)) {
                if (ds(e)) throw Error(s(418));
                t = ln(o.nextSibling);
                var a = as;
                t && rs(e, t)
                  ? hs(a, o)
                  : ((e.flags = (-4097 & e.flags) | 2), (ss = !1), (as = e));
              }
            } else {
              if (ds(e)) throw Error(s(418));
              (e.flags = (-4097 & e.flags) | 2), (ss = !1), (as = e);
            }
          }
        }
        function us(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          as = e;
        }
        function ys(e) {
          if (e !== as) return !1;
          if (!ss) return us(e), (ss = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !on(e.type, e.memoizedProps)),
            t && (t = ns))
          ) {
            if (ds(e)) throw (cs(), Error(s(418)));
            for (; t; ) hs(e, t), (t = ln(t.nextSibling));
          }
          if ((us(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(s(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var o = e.data;
                  if ("/$" === o) {
                    if (0 === t) {
                      ns = ln(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== o && "$!" !== o && "$?" !== o) || t++;
                }
                e = e.nextSibling;
              }
              ns = null;
            }
          } else ns = as ? ln(e.stateNode.nextSibling) : null;
          return !0;
        }
        function cs() {
          for (var e = ns; e; ) e = ln(e.nextSibling);
        }
        function ms() {
          (ns = as = null), (ss = !1);
        }
        function gs(e) {
          null === is ? (is = [e]) : is.push(e);
        }
        var ws = k.ReactCurrentBatchConfig;
        function fs(e, t) {
          if (e && e.defaultProps) {
            for (var o in ((t = J({}, t)), (e = e.defaultProps)))
              void 0 === t[o] && (t[o] = e[o]);
            return t;
          }
          return t;
        }
        var bs = Sn(null),
          ps = null,
          ks = null,
          vs = null;
        function Is() {
          vs = ks = ps = null;
        }
        function Ts(e) {
          var t = bs.current;
          Wn(bs), (e._currentValue = t);
        }
        function As(e, t, o) {
          for (; null !== e; ) {
            var a = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== a && (a.childLanes |= t))
                : null !== a && (a.childLanes & t) !== t && (a.childLanes |= t),
              e === o)
            )
              break;
            e = e.return;
          }
        }
        function Ss(e, t) {
          (ps = e),
            (vs = ks = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (kh = !0), (e.firstContext = null));
        }
        function Ws(e) {
          var t = e._currentValue;
          if (vs !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === ks)
            ) {
              if (null === ps) throw Error(s(308));
              (ks = e), (ps.dependencies = { lanes: 0, firstContext: e });
            } else ks = ks.next = e;
          return t;
        }
        var Hs = null;
        function Ms(e) {
          null === Hs ? (Hs = [e]) : Hs.push(e);
        }
        function xs(e, t, o, a) {
          var n = t.interleaved;
          return (
            null === n
              ? ((o.next = o), Ms(t))
              : ((o.next = n.next), (n.next = o)),
            (t.interleaved = o),
            Bs(e, a)
          );
        }
        function Bs(e, t) {
          e.lanes |= t;
          var o = e.alternate;
          for (null !== o && (o.lanes |= t), o = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (o = e.alternate) && (o.childLanes |= t),
              (o = e),
              (e = e.return);
          return 3 === o.tag ? o.stateNode : null;
        }
        var qs = !1;
        function Os(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Es(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ds(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ns(e, t, o) {
          var a = e.updateQueue;
          if (null === a) return null;
          if (((a = a.shared), 0 !== (2 & xr))) {
            var n = a.pending;
            return (
              null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (a.pending = t),
              Bs(e, o)
            );
          }
          return (
            null === (n = a.interleaved)
              ? ((t.next = t), Ms(a))
              : ((t.next = n.next), (n.next = t)),
            (a.interleaved = t),
            Bs(e, o)
          );
        }
        function Cs(e, t, o) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & o))
          ) {
            var a = t.lanes;
            (o |= a &= e.pendingLanes), (t.lanes = o), bt(e, o);
          }
        }
        function Js(e, t) {
          var o = e.updateQueue,
            a = e.alternate;
          if (null !== a && o === (a = a.updateQueue)) {
            var n = null,
              s = null;
            if (null !== (o = o.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: o.eventTime,
                  lane: o.lane,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                };
                null === s ? (n = s = i) : (s = s.next = i), (o = o.next);
              } while (null !== o);
              null === s ? (n = s = t) : (s = s.next = t);
            } else n = s = t;
            return (
              (o = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: s,
                shared: a.shared,
                effects: a.effects,
              }),
              void (e.updateQueue = o)
            );
          }
          null === (e = o.lastBaseUpdate)
            ? (o.firstBaseUpdate = t)
            : (e.next = t),
            (o.lastBaseUpdate = t);
        }
        function js(e, t, o, a) {
          var n = e.updateQueue;
          qs = !1;
          var s = n.firstBaseUpdate,
            i = n.lastBaseUpdate,
            h = n.shared.pending;
          if (null !== h) {
            n.shared.pending = null;
            var r = h,
              d = r.next;
            (r.next = null), null === i ? (s = d) : (i.next = d), (i = r);
            var l = e.alternate;
            null !== l &&
              (h = (l = l.updateQueue).lastBaseUpdate) !== i &&
              (null === h ? (l.firstBaseUpdate = d) : (h.next = d),
              (l.lastBaseUpdate = r));
          }
          if (null !== s) {
            var u = n.baseState;
            for (i = 0, l = d = r = null, h = s; ; ) {
              var y = h.lane,
                c = h.eventTime;
              if ((a & y) === y) {
                null !== l &&
                  (l = l.next =
                    {
                      eventTime: c,
                      lane: 0,
                      tag: h.tag,
                      payload: h.payload,
                      callback: h.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    g = h;
                  switch (((y = t), (c = o), g.tag)) {
                    case 1:
                      if ("function" === typeof (m = g.payload)) {
                        u = m.call(c, u, y);
                        break e;
                      }
                      u = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (y =
                            "function" === typeof (m = g.payload)
                              ? m.call(c, u, y)
                              : m) ||
                        void 0 === y
                      )
                        break e;
                      u = J({}, u, y);
                      break e;
                    case 2:
                      qs = !0;
                  }
                }
                null !== h.callback &&
                  0 !== h.lane &&
                  ((e.flags |= 64),
                  null === (y = n.effects) ? (n.effects = [h]) : y.push(h));
              } else
                (c = {
                  eventTime: c,
                  lane: y,
                  tag: h.tag,
                  payload: h.payload,
                  callback: h.callback,
                  next: null,
                }),
                  null === l ? ((d = l = c), (r = u)) : (l = l.next = c),
                  (i |= y);
              if (null === (h = h.next)) {
                if (null === (h = n.shared.pending)) break;
                (h = (y = h).next),
                  (y.next = null),
                  (n.lastBaseUpdate = y),
                  (n.shared.pending = null);
              }
            }
            if (
              (null === l && (r = u),
              (n.baseState = r),
              (n.firstBaseUpdate = d),
              (n.lastBaseUpdate = l),
              null !== (t = n.shared.interleaved))
            ) {
              n = t;
              do {
                (i |= n.lane), (n = n.next);
              } while (n !== t);
            } else null === s && (n.shared.lanes = 0);
            (Jr |= i), (e.lanes = i), (e.memoizedState = u);
          }
        }
        function Ys(e, t, o) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var a = e[t],
                n = a.callback;
              if (null !== n) {
                if (((a.callback = null), (a = o), "function" !== typeof n))
                  throw Error(s(191, n));
                n.call(a);
              }
            }
        }
        var Ls = new a.Component().refs;
        function Gs(e, t, o, a) {
          (o =
            null === (o = o(a, (t = e.memoizedState))) || void 0 === o
              ? t
              : J({}, t, o)),
            (e.memoizedState = o),
            0 === e.lanes && (e.updateQueue.baseState = o);
        }
        var Ps = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Pe(e) === e;
          },
          enqueueSetState: function (e, t, o) {
            e = e._reactInternals;
            var a = td(),
              n = od(e),
              s = Ds(a, n);
            (s.payload = t),
              void 0 !== o && null !== o && (s.callback = o),
              null !== (t = Ns(e, s, n)) && (ad(t, e, n, a), Cs(t, e, n));
          },
          enqueueReplaceState: function (e, t, o) {
            e = e._reactInternals;
            var a = td(),
              n = od(e),
              s = Ds(a, n);
            (s.tag = 1),
              (s.payload = t),
              void 0 !== o && null !== o && (s.callback = o),
              null !== (t = Ns(e, s, n)) && (ad(t, e, n, a), Cs(t, e, n));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var o = td(),
              a = od(e),
              n = Ds(o, a);
            (n.tag = 2),
              void 0 !== t && null !== t && (n.callback = t),
              null !== (t = Ns(e, n, a)) && (ad(t, e, a, o), Cs(t, e, a));
          },
        };
        function Rs(e, t, o, a, n, s, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(a, s, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ra(o, a) ||
                !ra(n, s);
        }
        function Fs(e, t, o) {
          var a = !1,
            n = Mn,
            s = t.contextType;
          return (
            "object" === typeof s && null !== s
              ? (s = Ws(s))
              : ((n = En(t) ? qn : xn.current),
                (s = (a = null !== (a = t.contextTypes) && void 0 !== a)
                  ? On(e, n)
                  : Mn)),
            (t = new t(o, s)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ps),
            (e.stateNode = t),
            (t._reactInternals = e),
            a &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                n),
              (e.__reactInternalMemoizedMaskedChildContext = s)),
            t
          );
        }
        function _s(e, t, o, a) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(o, a),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(o, a),
            t.state !== e && Ps.enqueueReplaceState(t, t.state, null);
        }
        function zs(e, t, o, a) {
          var n = e.stateNode;
          (n.props = o), (n.state = e.memoizedState), (n.refs = Ls), Os(e);
          var s = t.contextType;
          "object" === typeof s && null !== s
            ? (n.context = Ws(s))
            : ((s = En(t) ? qn : xn.current), (n.context = On(e, s))),
            (n.state = e.memoizedState),
            "function" === typeof (s = t.getDerivedStateFromProps) &&
              (Gs(e, t, s, o), (n.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof n.getSnapshotBeforeUpdate ||
              ("function" !== typeof n.UNSAFE_componentWillMount &&
                "function" !== typeof n.componentWillMount) ||
              ((t = n.state),
              "function" === typeof n.componentWillMount &&
                n.componentWillMount(),
              "function" === typeof n.UNSAFE_componentWillMount &&
                n.UNSAFE_componentWillMount(),
              t !== n.state && Ps.enqueueReplaceState(n, n.state, null),
              js(e, o, n, a),
              (n.state = e.memoizedState)),
            "function" === typeof n.componentDidMount && (e.flags |= 4194308);
        }
        function Us(e, t, o) {
          if (
            null !== (e = o.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (o._owner) {
              if ((o = o._owner)) {
                if (1 !== o.tag) throw Error(s(309));
                var a = o.stateNode;
              }
              if (!a) throw Error(s(147, e));
              var n = a,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = n.refs;
                    t === Ls && (t = n.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(s(284));
            if (!o._owner) throw Error(s(290, e));
          }
          return e;
        }
        function $s(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              s(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Ks(e) {
          return (0, e._init)(e._payload);
        }
        function Vs(e) {
          function t(t, o) {
            if (e) {
              var a = t.deletions;
              null === a ? ((t.deletions = [o]), (t.flags |= 16)) : a.push(o);
            }
          }
          function o(o, a) {
            if (!e) return null;
            for (; null !== a; ) t(o, a), (a = a.sibling);
            return null;
          }
          function a(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function n(e, t) {
            return ((e = Dd(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, o, a) {
            return (
              (t.index = a),
              e
                ? null !== (a = t.alternate)
                  ? (a = a.index) < o
                    ? ((t.flags |= 2), o)
                    : a
                  : ((t.flags |= 2), o)
                : ((t.flags |= 1048576), o)
            );
          }
          function h(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function r(e, t, o, a) {
            return null === t || 6 !== t.tag
              ? (((t = jd(o, e.mode, a)).return = e), t)
              : (((t = n(t, o)).return = e), t);
          }
          function d(e, t, o, a) {
            var s = o.type;
            return s === T
              ? u(e, t, o.props.children, a, o.key)
              : null !== t &&
                (t.elementType === s ||
                  ("object" === typeof s &&
                    null !== s &&
                    s.$$typeof === O &&
                    Ks(s) === t.type))
              ? (((a = n(t, o.props)).ref = Us(e, t, o)), (a.return = e), a)
              : (((a = Nd(o.type, o.key, o.props, null, e.mode, a)).ref = Us(
                  e,
                  t,
                  o
                )),
                (a.return = e),
                a);
          }
          function l(e, t, o, a) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== o.containerInfo ||
              t.stateNode.implementation !== o.implementation
              ? (((t = Yd(o, e.mode, a)).return = e), t)
              : (((t = n(t, o.children || [])).return = e), t);
          }
          function u(e, t, o, a, s) {
            return null === t || 7 !== t.tag
              ? (((t = Cd(o, e.mode, a, s)).return = e), t)
              : (((t = n(t, o)).return = e), t);
          }
          function y(e, t, o) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = jd("" + t, e.mode, o)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case v:
                  return (
                    ((o = Nd(t.type, t.key, t.props, null, e.mode, o)).ref = Us(
                      e,
                      null,
                      t
                    )),
                    (o.return = e),
                    o
                  );
                case I:
                  return ((t = Yd(t, e.mode, o)).return = e), t;
                case O:
                  return y(e, (0, t._init)(t._payload), o);
              }
              if (te(t) || N(t))
                return ((t = Cd(t, e.mode, o, null)).return = e), t;
              $s(e, t);
            }
            return null;
          }
          function c(e, t, o, a) {
            var n = null !== t ? t.key : null;
            if (("string" === typeof o && "" !== o) || "number" === typeof o)
              return null !== n ? null : r(e, t, "" + o, a);
            if ("object" === typeof o && null !== o) {
              switch (o.$$typeof) {
                case v:
                  return o.key === n ? d(e, t, o, a) : null;
                case I:
                  return o.key === n ? l(e, t, o, a) : null;
                case O:
                  return c(e, t, (n = o._init)(o._payload), a);
              }
              if (te(o) || N(o)) return null !== n ? null : u(e, t, o, a, null);
              $s(e, o);
            }
            return null;
          }
          function m(e, t, o, a, n) {
            if (("string" === typeof a && "" !== a) || "number" === typeof a)
              return r(t, (e = e.get(o) || null), "" + a, n);
            if ("object" === typeof a && null !== a) {
              switch (a.$$typeof) {
                case v:
                  return d(
                    t,
                    (e = e.get(null === a.key ? o : a.key) || null),
                    a,
                    n
                  );
                case I:
                  return l(
                    t,
                    (e = e.get(null === a.key ? o : a.key) || null),
                    a,
                    n
                  );
                case O:
                  return m(e, t, o, (0, a._init)(a._payload), n);
              }
              if (te(a) || N(a))
                return u(t, (e = e.get(o) || null), a, n, null);
              $s(t, a);
            }
            return null;
          }
          function g(n, s, h, r) {
            for (
              var d = null, l = null, u = s, g = (s = 0), w = null;
              null !== u && g < h.length;
              g++
            ) {
              u.index > g ? ((w = u), (u = null)) : (w = u.sibling);
              var f = c(n, u, h[g], r);
              if (null === f) {
                null === u && (u = w);
                break;
              }
              e && u && null === f.alternate && t(n, u),
                (s = i(f, s, g)),
                null === l ? (d = f) : (l.sibling = f),
                (l = f),
                (u = w);
            }
            if (g === h.length) return o(n, u), ss && Xn(n, g), d;
            if (null === u) {
              for (; g < h.length; g++)
                null !== (u = y(n, h[g], r)) &&
                  ((s = i(u, s, g)),
                  null === l ? (d = u) : (l.sibling = u),
                  (l = u));
              return ss && Xn(n, g), d;
            }
            for (u = a(n, u); g < h.length; g++)
              null !== (w = m(u, n, g, h[g], r)) &&
                (e &&
                  null !== w.alternate &&
                  u.delete(null === w.key ? g : w.key),
                (s = i(w, s, g)),
                null === l ? (d = w) : (l.sibling = w),
                (l = w));
            return (
              e &&
                u.forEach(function (e) {
                  return t(n, e);
                }),
              ss && Xn(n, g),
              d
            );
          }
          function w(n, h, r, d) {
            var l = N(r);
            if ("function" !== typeof l) throw Error(s(150));
            if (null == (r = l.call(r))) throw Error(s(151));
            for (
              var u = (l = null), g = h, w = (h = 0), f = null, b = r.next();
              null !== g && !b.done;
              w++, b = r.next()
            ) {
              g.index > w ? ((f = g), (g = null)) : (f = g.sibling);
              var p = c(n, g, b.value, d);
              if (null === p) {
                null === g && (g = f);
                break;
              }
              e && g && null === p.alternate && t(n, g),
                (h = i(p, h, w)),
                null === u ? (l = p) : (u.sibling = p),
                (u = p),
                (g = f);
            }
            if (b.done) return o(n, g), ss && Xn(n, w), l;
            if (null === g) {
              for (; !b.done; w++, b = r.next())
                null !== (b = y(n, b.value, d)) &&
                  ((h = i(b, h, w)),
                  null === u ? (l = b) : (u.sibling = b),
                  (u = b));
              return ss && Xn(n, w), l;
            }
            for (g = a(n, g); !b.done; w++, b = r.next())
              null !== (b = m(g, n, w, b.value, d)) &&
                (e &&
                  null !== b.alternate &&
                  g.delete(null === b.key ? w : b.key),
                (h = i(b, h, w)),
                null === u ? (l = b) : (u.sibling = b),
                (u = b));
            return (
              e &&
                g.forEach(function (e) {
                  return t(n, e);
                }),
              ss && Xn(n, w),
              l
            );
          }
          return function e(a, s, i, r) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === T &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case v:
                  e: {
                    for (var d = i.key, l = s; null !== l; ) {
                      if (l.key === d) {
                        if ((d = i.type) === T) {
                          if (7 === l.tag) {
                            o(a, l.sibling),
                              ((s = n(l, i.props.children)).return = a),
                              (a = s);
                            break e;
                          }
                        } else if (
                          l.elementType === d ||
                          ("object" === typeof d &&
                            null !== d &&
                            d.$$typeof === O &&
                            Ks(d) === l.type)
                        ) {
                          o(a, l.sibling),
                            ((s = n(l, i.props)).ref = Us(a, l, i)),
                            (s.return = a),
                            (a = s);
                          break e;
                        }
                        o(a, l);
                        break;
                      }
                      t(a, l), (l = l.sibling);
                    }
                    i.type === T
                      ? (((s = Cd(i.props.children, a.mode, r, i.key)).return =
                          a),
                        (a = s))
                      : (((r = Nd(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          a.mode,
                          r
                        )).ref = Us(a, s, i)),
                        (r.return = a),
                        (a = r));
                  }
                  return h(a);
                case I:
                  e: {
                    for (l = i.key; null !== s; ) {
                      if (s.key === l) {
                        if (
                          4 === s.tag &&
                          s.stateNode.containerInfo === i.containerInfo &&
                          s.stateNode.implementation === i.implementation
                        ) {
                          o(a, s.sibling),
                            ((s = n(s, i.children || [])).return = a),
                            (a = s);
                          break e;
                        }
                        o(a, s);
                        break;
                      }
                      t(a, s), (s = s.sibling);
                    }
                    ((s = Yd(i, a.mode, r)).return = a), (a = s);
                  }
                  return h(a);
                case O:
                  return e(a, s, (l = i._init)(i._payload), r);
              }
              if (te(i)) return g(a, s, i, r);
              if (N(i)) return w(a, s, i, r);
              $s(a, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== s && 6 === s.tag
                  ? (o(a, s.sibling), ((s = n(s, i)).return = a), (a = s))
                  : (o(a, s), ((s = jd(i, a.mode, r)).return = a), (a = s)),
                h(a))
              : o(a, s);
          };
        }
        var Qs = Vs(!0),
          Zs = Vs(!1),
          Xs = {},
          ei = Sn(Xs),
          ti = Sn(Xs),
          oi = Sn(Xs);
        function ai(e) {
          if (e === Xs) throw Error(s(174));
          return e;
        }
        function ni(e, t) {
          switch ((Hn(oi, t), Hn(ti, e), Hn(ei, Xs), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : re(null, "");
              break;
            default:
              t = re(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Wn(ei), Hn(ei, t);
        }
        function si() {
          Wn(ei), Wn(ti), Wn(oi);
        }
        function ii(e) {
          ai(oi.current);
          var t = ai(ei.current),
            o = re(t, e.type);
          t !== o && (Hn(ti, e), Hn(ei, o));
        }
        function hi(e) {
          ti.current === e && (Wn(ei), Wn(ti));
        }
        var ri = Sn(0);
        function di(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var o = t.memoizedState;
              if (
                null !== o &&
                (null === (o = o.dehydrated) ||
                  "$?" === o.data ||
                  "$!" === o.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var li = [];
        function ui() {
          for (var e = 0; e < li.length; e++)
            li[e]._workInProgressVersionPrimary = null;
          li.length = 0;
        }
        var yi = k.ReactCurrentDispatcher,
          ci = k.ReactCurrentBatchConfig,
          mi = 0,
          gi = null,
          wi = null,
          fi = null,
          bi = !1,
          pi = !1,
          ki = 0,
          vi = 0;
        function Ii() {
          throw Error(s(321));
        }
        function Ti(e, t) {
          if (null === t) return !1;
          for (var o = 0; o < t.length && o < e.length; o++)
            if (!ha(e[o], t[o])) return !1;
          return !0;
        }
        function Ai(e, t, o, a, n, i) {
          if (
            ((mi = i),
            (gi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (yi.current = null === e || null === e.memoizedState ? hh : rh),
            (e = o(a, n)),
            pi)
          ) {
            i = 0;
            do {
              if (((pi = !1), (ki = 0), 25 <= i)) throw Error(s(301));
              (i += 1),
                (fi = wi = null),
                (t.updateQueue = null),
                (yi.current = dh),
                (e = o(a, n));
            } while (pi);
          }
          if (
            ((yi.current = ih),
            (t = null !== wi && null !== wi.next),
            (mi = 0),
            (fi = wi = gi = null),
            (bi = !1),
            t)
          )
            throw Error(s(300));
          return e;
        }
        function Si() {
          var e = 0 !== ki;
          return (ki = 0), e;
        }
        function Wi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === fi ? (gi.memoizedState = fi = e) : (fi = fi.next = e), fi
          );
        }
        function Hi() {
          if (null === wi) {
            var e = gi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = wi.next;
          var t = null === fi ? gi.memoizedState : fi.next;
          if (null !== t) (fi = t), (wi = e);
          else {
            if (null === e) throw Error(s(310));
            (e = {
              memoizedState: (wi = e).memoizedState,
              baseState: wi.baseState,
              baseQueue: wi.baseQueue,
              queue: wi.queue,
              next: null,
            }),
              null === fi ? (gi.memoizedState = fi = e) : (fi = fi.next = e);
          }
          return fi;
        }
        function Mi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function xi(e) {
          var t = Hi(),
            o = t.queue;
          if (null === o) throw Error(s(311));
          o.lastRenderedReducer = e;
          var a = wi,
            n = a.baseQueue,
            i = o.pending;
          if (null !== i) {
            if (null !== n) {
              var h = n.next;
              (n.next = i.next), (i.next = h);
            }
            (a.baseQueue = n = i), (o.pending = null);
          }
          if (null !== n) {
            (i = n.next), (a = a.baseState);
            var r = (h = null),
              d = null,
              l = i;
            do {
              var u = l.lane;
              if ((mi & u) === u)
                null !== d &&
                  (d = d.next =
                    {
                      lane: 0,
                      action: l.action,
                      hasEagerState: l.hasEagerState,
                      eagerState: l.eagerState,
                      next: null,
                    }),
                  (a = l.hasEagerState ? l.eagerState : e(a, l.action));
              else {
                var y = {
                  lane: u,
                  action: l.action,
                  hasEagerState: l.hasEagerState,
                  eagerState: l.eagerState,
                  next: null,
                };
                null === d ? ((r = d = y), (h = a)) : (d = d.next = y),
                  (gi.lanes |= u),
                  (Jr |= u);
              }
              l = l.next;
            } while (null !== l && l !== i);
            null === d ? (h = a) : (d.next = r),
              ha(a, t.memoizedState) || (kh = !0),
              (t.memoizedState = a),
              (t.baseState = h),
              (t.baseQueue = d),
              (o.lastRenderedState = a);
          }
          if (null !== (e = o.interleaved)) {
            n = e;
            do {
              (i = n.lane), (gi.lanes |= i), (Jr |= i), (n = n.next);
            } while (n !== e);
          } else null === n && (o.lanes = 0);
          return [t.memoizedState, o.dispatch];
        }
        function Bi(e) {
          var t = Hi(),
            o = t.queue;
          if (null === o) throw Error(s(311));
          o.lastRenderedReducer = e;
          var a = o.dispatch,
            n = o.pending,
            i = t.memoizedState;
          if (null !== n) {
            o.pending = null;
            var h = (n = n.next);
            do {
              (i = e(i, h.action)), (h = h.next);
            } while (h !== n);
            ha(i, t.memoizedState) || (kh = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (o.lastRenderedState = i);
          }
          return [i, a];
        }
        function qi() {}
        function Oi(e, t) {
          var o = gi,
            a = Hi(),
            n = t(),
            i = !ha(a.memoizedState, n);
          if (
            (i && ((a.memoizedState = n), (kh = !0)),
            (a = a.queue),
            Fi(Ni.bind(null, o, a, e), [e]),
            a.getSnapshot !== t ||
              i ||
              (null !== fi && 1 & fi.memoizedState.tag))
          ) {
            if (
              ((o.flags |= 2048),
              Yi(9, Di.bind(null, o, a, n, t), void 0, null),
              null === Br)
            )
              throw Error(s(349));
            0 !== (30 & mi) || Ei(o, t, n);
          }
          return n;
        }
        function Ei(e, t, o) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: o }),
            null === (t = gi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (gi.updateQueue = t),
                (t.stores = [e]))
              : null === (o = t.stores)
              ? (t.stores = [e])
              : o.push(e);
        }
        function Di(e, t, o, a) {
          (t.value = o), (t.getSnapshot = a), Ci(t) && Ji(e);
        }
        function Ni(e, t, o) {
          return o(function () {
            Ci(t) && Ji(e);
          });
        }
        function Ci(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var o = t();
            return !ha(e, o);
          } catch (a) {
            return !0;
          }
        }
        function Ji(e) {
          var t = Bs(e, 1);
          null !== t && ad(t, e, 1, -1);
        }
        function ji(e) {
          var t = Wi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Mi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = oh.bind(null, gi, e)),
            [t.memoizedState, e]
          );
        }
        function Yi(e, t, o, a) {
          return (
            (e = { tag: e, create: t, destroy: o, deps: a, next: null }),
            null === (t = gi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (gi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (o = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((a = o.next), (o.next = e), (e.next = a), (t.lastEffect = e)),
            e
          );
        }
        function Li() {
          return Hi().memoizedState;
        }
        function Gi(e, t, o, a) {
          var n = Wi();
          (gi.flags |= e),
            (n.memoizedState = Yi(1 | t, o, void 0, void 0 === a ? null : a));
        }
        function Pi(e, t, o, a) {
          var n = Hi();
          a = void 0 === a ? null : a;
          var s = void 0;
          if (null !== wi) {
            var i = wi.memoizedState;
            if (((s = i.destroy), null !== a && Ti(a, i.deps)))
              return void (n.memoizedState = Yi(t, o, s, a));
          }
          (gi.flags |= e), (n.memoizedState = Yi(1 | t, o, s, a));
        }
        function Ri(e, t) {
          return Gi(8390656, 8, e, t);
        }
        function Fi(e, t) {
          return Pi(2048, 8, e, t);
        }
        function _i(e, t) {
          return Pi(4, 2, e, t);
        }
        function zi(e, t) {
          return Pi(4, 4, e, t);
        }
        function Ui(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function $i(e, t, o) {
          return (
            (o = null !== o && void 0 !== o ? o.concat([e]) : null),
            Pi(4, 4, Ui.bind(null, t, e), o)
          );
        }
        function Ki() {}
        function Vi(e, t) {
          var o = Hi();
          t = void 0 === t ? null : t;
          var a = o.memoizedState;
          return null !== a && null !== t && Ti(t, a[1])
            ? a[0]
            : ((o.memoizedState = [e, t]), e);
        }
        function Qi(e, t) {
          var o = Hi();
          t = void 0 === t ? null : t;
          var a = o.memoizedState;
          return null !== a && null !== t && Ti(t, a[1])
            ? a[0]
            : ((e = e()), (o.memoizedState = [e, t]), e);
        }
        function Zi(e, t, o) {
          return 0 === (21 & mi)
            ? (e.baseState && ((e.baseState = !1), (kh = !0)),
              (e.memoizedState = o))
            : (ha(o, t) ||
                ((o = gt()), (gi.lanes |= o), (Jr |= o), (e.baseState = !0)),
              t);
        }
        function Xi(e, t) {
          var o = pt;
          (pt = 0 !== o && 4 > o ? o : 4), e(!0);
          var a = ci.transition;
          ci.transition = {};
          try {
            e(!1), t();
          } finally {
            (pt = o), (ci.transition = a);
          }
        }
        function eh() {
          return Hi().memoizedState;
        }
        function th(e, t, o) {
          var a = od(e);
          if (
            ((o = {
              lane: a,
              action: o,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ah(e))
          )
            nh(t, o);
          else if (null !== (o = xs(e, t, o, a))) {
            ad(o, e, a, td()), sh(o, t, a);
          }
        }
        function oh(e, t, o) {
          var a = od(e),
            n = {
              lane: a,
              action: o,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ah(e)) nh(t, n);
          else {
            var s = e.alternate;
            if (
              0 === e.lanes &&
              (null === s || 0 === s.lanes) &&
              null !== (s = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  h = s(i, o);
                if (((n.hasEagerState = !0), (n.eagerState = h), ha(h, i))) {
                  var r = t.interleaved;
                  return (
                    null === r
                      ? ((n.next = n), Ms(t))
                      : ((n.next = r.next), (r.next = n)),
                    void (t.interleaved = n)
                  );
                }
              } catch (d) {}
            null !== (o = xs(e, t, n, a)) &&
              (ad(o, e, a, (n = td())), sh(o, t, a));
          }
        }
        function ah(e) {
          var t = e.alternate;
          return e === gi || (null !== t && t === gi);
        }
        function nh(e, t) {
          pi = bi = !0;
          var o = e.pending;
          null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
            (e.pending = t);
        }
        function sh(e, t, o) {
          if (0 !== (4194240 & o)) {
            var a = t.lanes;
            (o |= a &= e.pendingLanes), (t.lanes = o), bt(e, o);
          }
        }
        var ih = {
            readContext: Ws,
            useCallback: Ii,
            useContext: Ii,
            useEffect: Ii,
            useImperativeHandle: Ii,
            useInsertionEffect: Ii,
            useLayoutEffect: Ii,
            useMemo: Ii,
            useReducer: Ii,
            useRef: Ii,
            useState: Ii,
            useDebugValue: Ii,
            useDeferredValue: Ii,
            useTransition: Ii,
            useMutableSource: Ii,
            useSyncExternalStore: Ii,
            useId: Ii,
            unstable_isNewReconciler: !1,
          },
          hh = {
            readContext: Ws,
            useCallback: function (e, t) {
              return (Wi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ws,
            useEffect: Ri,
            useImperativeHandle: function (e, t, o) {
              return (
                (o = null !== o && void 0 !== o ? o.concat([e]) : null),
                Gi(4194308, 4, Ui.bind(null, t, e), o)
              );
            },
            useLayoutEffect: function (e, t) {
              return Gi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Gi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var o = Wi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (o.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, o) {
              var a = Wi();
              return (
                (t = void 0 !== o ? o(t) : t),
                (a.memoizedState = a.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (a.queue = e),
                (e = e.dispatch = th.bind(null, gi, e)),
                [a.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Wi().memoizedState = e);
            },
            useState: ji,
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              return (Wi().memoizedState = e);
            },
            useTransition: function () {
              var e = ji(!1),
                t = e[0];
              return (
                (e = Xi.bind(null, e[1])), (Wi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, o) {
              var a = gi,
                n = Wi();
              if (ss) {
                if (void 0 === o) throw Error(s(407));
                o = o();
              } else {
                if (((o = t()), null === Br)) throw Error(s(349));
                0 !== (30 & mi) || Ei(a, t, o);
              }
              n.memoizedState = o;
              var i = { value: o, getSnapshot: t };
              return (
                (n.queue = i),
                Ri(Ni.bind(null, a, i, e), [e]),
                (a.flags |= 2048),
                Yi(9, Di.bind(null, a, i, o, t), void 0, null),
                o
              );
            },
            useId: function () {
              var e = Wi(),
                t = Br.identifierPrefix;
              if (ss) {
                var o = Zn;
                (t =
                  ":" +
                  t +
                  "R" +
                  (o = (Qn & ~(1 << (32 - it(Qn) - 1))).toString(32) + o)),
                  0 < (o = ki++) && (t += "H" + o.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (o = vi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          rh = {
            readContext: Ws,
            useCallback: Vi,
            useContext: Ws,
            useEffect: Fi,
            useImperativeHandle: $i,
            useInsertionEffect: _i,
            useLayoutEffect: zi,
            useMemo: Qi,
            useReducer: xi,
            useRef: Li,
            useState: function () {
              return xi(Mi);
            },
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              return Zi(Hi(), wi.memoizedState, e);
            },
            useTransition: function () {
              return [xi(Mi)[0], Hi().memoizedState];
            },
            useMutableSource: qi,
            useSyncExternalStore: Oi,
            useId: eh,
            unstable_isNewReconciler: !1,
          },
          dh = {
            readContext: Ws,
            useCallback: Vi,
            useContext: Ws,
            useEffect: Fi,
            useImperativeHandle: $i,
            useInsertionEffect: _i,
            useLayoutEffect: zi,
            useMemo: Qi,
            useReducer: Bi,
            useRef: Li,
            useState: function () {
              return Bi(Mi);
            },
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              var t = Hi();
              return null === wi
                ? (t.memoizedState = e)
                : Zi(t, wi.memoizedState, e);
            },
            useTransition: function () {
              return [Bi(Mi)[0], Hi().memoizedState];
            },
            useMutableSource: qi,
            useSyncExternalStore: Oi,
            useId: eh,
            unstable_isNewReconciler: !1,
          };
        function lh(e, t) {
          try {
            var o = "",
              a = t;
            do {
              (o += G(a)), (a = a.return);
            } while (a);
            var n = o;
          } catch (s) {
            n = "\nError generating stack: " + s.message + "\n" + s.stack;
          }
          return { value: e, source: t, stack: n, digest: null };
        }
        function uh(e, t, o) {
          return {
            value: e,
            source: null,
            stack: null != o ? o : null,
            digest: null != t ? t : null,
          };
        }
        function yh(e, t) {
          try {
            console.error(t.value);
          } catch (o) {
            setTimeout(function () {
              throw o;
            });
          }
        }
        var ch = "function" === typeof WeakMap ? WeakMap : Map;
        function mh(e, t, o) {
          ((o = Ds(-1, o)).tag = 3), (o.payload = { element: null });
          var a = t.value;
          return (
            (o.callback = function () {
              _r || ((_r = !0), (zr = a)), yh(0, t);
            }),
            o
          );
        }
        function gh(e, t, o) {
          (o = Ds(-1, o)).tag = 3;
          var a = e.type.getDerivedStateFromError;
          if ("function" === typeof a) {
            var n = t.value;
            (o.payload = function () {
              return a(n);
            }),
              (o.callback = function () {
                yh(0, t);
              });
          }
          var s = e.stateNode;
          return (
            null !== s &&
              "function" === typeof s.componentDidCatch &&
              (o.callback = function () {
                yh(0, t),
                  "function" !== typeof a &&
                    (null === Ur ? (Ur = new Set([this])) : Ur.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            o
          );
        }
        function wh(e, t, o) {
          var a = e.pingCache;
          if (null === a) {
            a = e.pingCache = new ch();
            var n = new Set();
            a.set(t, n);
          } else void 0 === (n = a.get(t)) && ((n = new Set()), a.set(t, n));
          n.has(o) || (n.add(o), (e = Wd.bind(null, e, t, o)), t.then(e, e));
        }
        function fh(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function bh(e, t, o, a, n) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (o.flags |= 131072),
                  (o.flags &= -52805),
                  1 === o.tag &&
                    (null === o.alternate
                      ? (o.tag = 17)
                      : (((t = Ds(-1, 1)).tag = 2), Ns(o, t, 1))),
                  (o.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = n), e);
        }
        var ph = k.ReactCurrentOwner,
          kh = !1;
        function vh(e, t, o, a) {
          t.child = null === e ? Zs(t, null, o, a) : Qs(t, e.child, o, a);
        }
        function Ih(e, t, o, a, n) {
          o = o.render;
          var s = t.ref;
          return (
            Ss(t, n),
            (a = Ai(e, t, o, a, s, n)),
            (o = Si()),
            null === e || kh
              ? (ss && o && ts(t), (t.flags |= 1), vh(e, t, a, n), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~n),
                _h(e, t, n))
          );
        }
        function Th(e, t, o, a, n) {
          if (null === e) {
            var s = o.type;
            return "function" !== typeof s ||
              Ed(s) ||
              void 0 !== s.defaultProps ||
              null !== o.compare ||
              void 0 !== o.defaultProps
              ? (((e = Nd(o.type, null, a, t, t.mode, n)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = s), Ah(e, t, s, a, n));
          }
          if (((s = e.child), 0 === (e.lanes & n))) {
            var i = s.memoizedProps;
            if (
              (o = null !== (o = o.compare) ? o : ra)(i, a) &&
              e.ref === t.ref
            )
              return _h(e, t, n);
          }
          return (
            (t.flags |= 1),
            ((e = Dd(s, a)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ah(e, t, o, a, n) {
          if (null !== e) {
            var s = e.memoizedProps;
            if (ra(s, a) && e.ref === t.ref) {
              if (((kh = !1), (t.pendingProps = a = s), 0 === (e.lanes & n)))
                return (t.lanes = e.lanes), _h(e, t, n);
              0 !== (131072 & e.flags) && (kh = !0);
            }
          }
          return Hh(e, t, o, a, n);
        }
        function Sh(e, t, o) {
          var a = t.pendingProps,
            n = a.children,
            s = null !== e ? e.memoizedState : null;
          if ("hidden" === a.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Hn(Dr, Er),
                (Er |= o);
            else {
              if (0 === (1073741824 & o))
                return (
                  (e = null !== s ? s.baseLanes | o : o),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Hn(Dr, Er),
                  (Er |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (a = null !== s ? s.baseLanes : o),
                Hn(Dr, Er),
                (Er |= a);
            }
          else
            null !== s
              ? ((a = s.baseLanes | o), (t.memoizedState = null))
              : (a = o),
              Hn(Dr, Er),
              (Er |= a);
          return vh(e, t, n, o), t.child;
        }
        function Wh(e, t) {
          var o = t.ref;
          ((null === e && null !== o) || (null !== e && e.ref !== o)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Hh(e, t, o, a, n) {
          var s = En(o) ? qn : xn.current;
          return (
            (s = On(t, s)),
            Ss(t, n),
            (o = Ai(e, t, o, a, s, n)),
            (a = Si()),
            null === e || kh
              ? (ss && a && ts(t), (t.flags |= 1), vh(e, t, o, n), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~n),
                _h(e, t, n))
          );
        }
        function Mh(e, t, o, a, n) {
          if (En(o)) {
            var s = !0;
            Jn(t);
          } else s = !1;
          if ((Ss(t, n), null === t.stateNode))
            Fh(e, t), Fs(t, o, a), zs(t, o, a, n), (a = !0);
          else if (null === e) {
            var i = t.stateNode,
              h = t.memoizedProps;
            i.props = h;
            var r = i.context,
              d = o.contextType;
            "object" === typeof d && null !== d
              ? (d = Ws(d))
              : (d = On(t, (d = En(o) ? qn : xn.current)));
            var l = o.getDerivedStateFromProps,
              u =
                "function" === typeof l ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            u ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((h !== a || r !== d) && _s(t, i, a, d)),
              (qs = !1);
            var y = t.memoizedState;
            (i.state = y),
              js(t, a, i, n),
              (r = t.memoizedState),
              h !== a || y !== r || Bn.current || qs
                ? ("function" === typeof l &&
                    (Gs(t, o, l, a), (r = t.memoizedState)),
                  (h = qs || Rs(t, o, h, a, y, r, d))
                    ? (u ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = a),
                      (t.memoizedState = r)),
                  (i.props = a),
                  (i.state = r),
                  (i.context = d),
                  (a = h))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (a = !1));
          } else {
            (i = t.stateNode),
              Es(e, t),
              (h = t.memoizedProps),
              (d = t.type === t.elementType ? h : fs(t.type, h)),
              (i.props = d),
              (u = t.pendingProps),
              (y = i.context),
              "object" === typeof (r = o.contextType) && null !== r
                ? (r = Ws(r))
                : (r = On(t, (r = En(o) ? qn : xn.current)));
            var c = o.getDerivedStateFromProps;
            (l =
              "function" === typeof c ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((h !== u || y !== r) && _s(t, i, a, r)),
              (qs = !1),
              (y = t.memoizedState),
              (i.state = y),
              js(t, a, i, n);
            var m = t.memoizedState;
            h !== u || y !== m || Bn.current || qs
              ? ("function" === typeof c &&
                  (Gs(t, o, c, a), (m = t.memoizedState)),
                (d = qs || Rs(t, o, d, a, y, m, r) || !1)
                  ? (l ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(a, m, r),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(a, m, r)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (h === e.memoizedProps && y === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (h === e.memoizedProps && y === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = a),
                    (t.memoizedState = m)),
                (i.props = a),
                (i.state = m),
                (i.context = r),
                (a = d))
              : ("function" !== typeof i.componentDidUpdate ||
                  (h === e.memoizedProps && y === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (h === e.memoizedProps && y === e.memoizedState) ||
                  (t.flags |= 1024),
                (a = !1));
          }
          return xh(e, t, o, a, s, n);
        }
        function xh(e, t, o, a, n, s) {
          Wh(e, t);
          var i = 0 !== (128 & t.flags);
          if (!a && !i) return n && jn(t, o, !1), _h(e, t, s);
          (a = t.stateNode), (ph.current = t);
          var h =
            i && "function" !== typeof o.getDerivedStateFromError
              ? null
              : a.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Qs(t, e.child, null, s)),
                (t.child = Qs(t, null, h, s)))
              : vh(e, t, h, s),
            (t.memoizedState = a.state),
            n && jn(t, o, !0),
            t.child
          );
        }
        function Bh(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Nn(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Nn(0, t.context, !1),
            ni(e, t.containerInfo);
        }
        function qh(e, t, o, a, n) {
          return ms(), gs(n), (t.flags |= 256), vh(e, t, o, a), t.child;
        }
        var Oh,
          Eh,
          Dh,
          Nh,
          Ch = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Jh(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function jh(e, t, o) {
          var a,
            n = t.pendingProps,
            i = ri.current,
            h = !1,
            r = 0 !== (128 & t.flags);
          if (
            ((a = r) ||
              (a = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            a
              ? ((h = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Hn(ri, 1 & i),
            null === e)
          )
            return (
              ls(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((r = n.children),
                  (e = n.fallback),
                  h
                    ? ((n = t.mode),
                      (h = t.child),
                      (r = { mode: "hidden", children: r }),
                      0 === (1 & n) && null !== h
                        ? ((h.childLanes = 0), (h.pendingProps = r))
                        : (h = Jd(r, n, 0, null)),
                      (e = Cd(e, n, o, null)),
                      (h.return = t),
                      (e.return = t),
                      (h.sibling = e),
                      (t.child = h),
                      (t.child.memoizedState = Jh(o)),
                      (t.memoizedState = Ch),
                      e)
                    : Yh(t, r))
            );
          if (null !== (i = e.memoizedState) && null !== (a = i.dehydrated))
            return (function (e, t, o, a, n, i, h) {
              if (o)
                return 256 & t.flags
                  ? ((t.flags &= -257), Lh(e, t, h, (a = uh(Error(s(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = a.fallback),
                    (n = t.mode),
                    (a = Jd(
                      { mode: "visible", children: a.children },
                      n,
                      0,
                      null
                    )),
                    ((i = Cd(i, n, h, null)).flags |= 2),
                    (a.return = t),
                    (i.return = t),
                    (a.sibling = i),
                    (t.child = a),
                    0 !== (1 & t.mode) && Qs(t, e.child, null, h),
                    (t.child.memoizedState = Jh(h)),
                    (t.memoizedState = Ch),
                    i);
              if (0 === (1 & t.mode)) return Lh(e, t, h, null);
              if ("$!" === n.data) {
                if ((a = n.nextSibling && n.nextSibling.dataset))
                  var r = a.dgst;
                return (
                  (a = r), Lh(e, t, h, (a = uh((i = Error(s(419))), a, void 0)))
                );
              }
              if (((r = 0 !== (h & e.childLanes)), kh || r)) {
                if (null !== (a = Br)) {
                  switch (h & -h) {
                    case 4:
                      n = 2;
                      break;
                    case 16:
                      n = 8;
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
                      n = 32;
                      break;
                    case 536870912:
                      n = 268435456;
                      break;
                    default:
                      n = 0;
                  }
                  0 !== (n = 0 !== (n & (a.suspendedLanes | h)) ? 0 : n) &&
                    n !== i.retryLane &&
                    ((i.retryLane = n), Bs(e, n), ad(a, e, n, -1));
                }
                return wd(), Lh(e, t, h, (a = uh(Error(s(421)))));
              }
              return "$?" === n.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Md.bind(null, e)),
                  (n._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ns = ln(n.nextSibling)),
                  (as = t),
                  (ss = !0),
                  (is = null),
                  null !== e &&
                    (($n[Kn++] = Qn),
                    ($n[Kn++] = Zn),
                    ($n[Kn++] = Vn),
                    (Qn = e.id),
                    (Zn = e.overflow),
                    (Vn = t)),
                  (t = Yh(t, a.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, r, n, a, i, o);
          if (h) {
            (h = n.fallback), (r = t.mode), (a = (i = e.child).sibling);
            var d = { mode: "hidden", children: n.children };
            return (
              0 === (1 & r) && t.child !== i
                ? (((n = t.child).childLanes = 0),
                  (n.pendingProps = d),
                  (t.deletions = null))
                : ((n = Dd(i, d)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== a
                ? (h = Dd(a, h))
                : ((h = Cd(h, r, o, null)).flags |= 2),
              (h.return = t),
              (n.return = t),
              (n.sibling = h),
              (t.child = n),
              (n = h),
              (h = t.child),
              (r =
                null === (r = e.child.memoizedState)
                  ? Jh(o)
                  : {
                      baseLanes: r.baseLanes | o,
                      cachePool: null,
                      transitions: r.transitions,
                    }),
              (h.memoizedState = r),
              (h.childLanes = e.childLanes & ~o),
              (t.memoizedState = Ch),
              n
            );
          }
          return (
            (e = (h = e.child).sibling),
            (n = Dd(h, { mode: "visible", children: n.children })),
            0 === (1 & t.mode) && (n.lanes = o),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              (null === (o = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : o.push(e)),
            (t.child = n),
            (t.memoizedState = null),
            n
          );
        }
        function Yh(e, t) {
          return (
            ((t = Jd(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Lh(e, t, o, a) {
          return (
            null !== a && gs(a),
            Qs(t, e.child, null, o),
            ((e = Yh(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Gh(e, t, o) {
          e.lanes |= t;
          var a = e.alternate;
          null !== a && (a.lanes |= t), As(e.return, t, o);
        }
        function Ph(e, t, o, a, n) {
          var s = e.memoizedState;
          null === s
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: a,
                tail: o,
                tailMode: n,
              })
            : ((s.isBackwards = t),
              (s.rendering = null),
              (s.renderingStartTime = 0),
              (s.last = a),
              (s.tail = o),
              (s.tailMode = n));
        }
        function Rh(e, t, o) {
          var a = t.pendingProps,
            n = a.revealOrder,
            s = a.tail;
          if ((vh(e, t, a.children, o), 0 !== (2 & (a = ri.current))))
            (a = (1 & a) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Gh(e, o, t);
                else if (19 === e.tag) Gh(e, o, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            a &= 1;
          }
          if ((Hn(ri, a), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (n) {
              case "forwards":
                for (o = t.child, n = null; null !== o; )
                  null !== (e = o.alternate) && null === di(e) && (n = o),
                    (o = o.sibling);
                null === (o = n)
                  ? ((n = t.child), (t.child = null))
                  : ((n = o.sibling), (o.sibling = null)),
                  Ph(t, !1, n, o, s);
                break;
              case "backwards":
                for (o = null, n = t.child, t.child = null; null !== n; ) {
                  if (null !== (e = n.alternate) && null === di(e)) {
                    t.child = n;
                    break;
                  }
                  (e = n.sibling), (n.sibling = o), (o = n), (n = e);
                }
                Ph(t, !0, o, null, s);
                break;
              case "together":
                Ph(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Fh(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function _h(e, t, o) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Jr |= t.lanes),
            0 === (o & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(s(153));
          if (null !== t.child) {
            for (
              o = Dd((e = t.child), e.pendingProps), t.child = o, o.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((o = o.sibling = Dd(e, e.pendingProps)).return = t);
            o.sibling = null;
          }
          return t.child;
        }
        function zh(e, t) {
          if (!ss)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var o = null; null !== t; )
                  null !== t.alternate && (o = t), (t = t.sibling);
                null === o ? (e.tail = null) : (o.sibling = null);
                break;
              case "collapsed":
                o = e.tail;
                for (var a = null; null !== o; )
                  null !== o.alternate && (a = o), (o = o.sibling);
                null === a
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (a.sibling = null);
            }
        }
        function Uh(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            o = 0,
            a = 0;
          if (t)
            for (var n = e.child; null !== n; )
              (o |= n.lanes | n.childLanes),
                (a |= 14680064 & n.subtreeFlags),
                (a |= 14680064 & n.flags),
                (n.return = e),
                (n = n.sibling);
          else
            for (n = e.child; null !== n; )
              (o |= n.lanes | n.childLanes),
                (a |= n.subtreeFlags),
                (a |= n.flags),
                (n.return = e),
                (n = n.sibling);
          return (e.subtreeFlags |= a), (e.childLanes = o), t;
        }
        function $h(e, t, o) {
          var a = t.pendingProps;
          switch ((os(t), t.tag)) {
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
              return Uh(t), null;
            case 1:
            case 17:
              return En(t.type) && Dn(), Uh(t), null;
            case 3:
              return (
                (a = t.stateNode),
                si(),
                Wn(Bn),
                Wn(xn),
                ui(),
                a.pendingContext &&
                  ((a.context = a.pendingContext), (a.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ys(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== is && (hd(is), (is = null)))),
                Eh(e, t),
                Uh(t),
                null
              );
            case 5:
              hi(t);
              var n = ai(oi.current);
              if (((o = t.type), null !== e && null != t.stateNode))
                Dh(e, t, o, a, n),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!a) {
                  if (null === t.stateNode) throw Error(s(166));
                  return Uh(t), null;
                }
                if (((e = ai(ei.current)), ys(t))) {
                  (a = t.stateNode), (o = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((a[cn] = t), (a[mn] = i), (e = 0 !== (1 & t.mode)), o)
                  ) {
                    case "dialog":
                      Ya("cancel", a), Ya("close", a);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ya("load", a);
                      break;
                    case "video":
                    case "audio":
                      for (n = 0; n < Na.length; n++) Ya(Na[n], a);
                      break;
                    case "source":
                      Ya("error", a);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ya("error", a), Ya("load", a);
                      break;
                    case "details":
                      Ya("toggle", a);
                      break;
                    case "input":
                      V(a, i), Ya("invalid", a);
                      break;
                    case "select":
                      (a._wrapperState = { wasMultiple: !!i.multiple }),
                        Ya("invalid", a);
                      break;
                    case "textarea":
                      ne(a, i), Ya("invalid", a);
                  }
                  for (var r in (be(o, i), (n = null), i))
                    if (i.hasOwnProperty(r)) {
                      var d = i[r];
                      "children" === r
                        ? "string" === typeof d
                          ? a.textContent !== d &&
                            (!0 !== i.suppressHydrationWarning &&
                              Za(a.textContent, d, e),
                            (n = ["children", d]))
                          : "number" === typeof d &&
                            a.textContent !== "" + d &&
                            (!0 !== i.suppressHydrationWarning &&
                              Za(a.textContent, d, e),
                            (n = ["children", "" + d]))
                        : h.hasOwnProperty(r) &&
                          null != d &&
                          "onScroll" === r &&
                          Ya("scroll", a);
                    }
                  switch (o) {
                    case "input":
                      z(a), X(a, i, !0);
                      break;
                    case "textarea":
                      z(a), ie(a);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (a.onclick = Xa);
                  }
                  (a = n), (t.updateQueue = a), null !== a && (t.flags |= 4);
                } else {
                  (r = 9 === n.nodeType ? n : n.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = he(o)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === o
                        ? (((e = r.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof a.is
                        ? (e = r.createElement(o, { is: a.is }))
                        : ((e = r.createElement(o)),
                          "select" === o &&
                            ((r = e),
                            a.multiple
                              ? (r.multiple = !0)
                              : a.size && (r.size = a.size)))
                      : (e = r.createElementNS(e, o)),
                    (e[cn] = t),
                    (e[mn] = a),
                    Oh(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((r = pe(o, a)), o)) {
                      case "dialog":
                        Ya("cancel", e), Ya("close", e), (n = a);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ya("load", e), (n = a);
                        break;
                      case "video":
                      case "audio":
                        for (n = 0; n < Na.length; n++) Ya(Na[n], e);
                        n = a;
                        break;
                      case "source":
                        Ya("error", e), (n = a);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ya("error", e), Ya("load", e), (n = a);
                        break;
                      case "details":
                        Ya("toggle", e), (n = a);
                        break;
                      case "input":
                        V(e, a), (n = K(e, a)), Ya("invalid", e);
                        break;
                      case "option":
                      default:
                        n = a;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!a.multiple }),
                          (n = J({}, a, { value: void 0 })),
                          Ya("invalid", e);
                        break;
                      case "textarea":
                        ne(e, a), (n = ae(e, a)), Ya("invalid", e);
                    }
                    for (i in (be(o, n), (d = n)))
                      if (d.hasOwnProperty(i)) {
                        var l = d[i];
                        "style" === i
                          ? we(e, l)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (l = l ? l.__html : void 0) && ue(e, l)
                          : "children" === i
                          ? "string" === typeof l
                            ? ("textarea" !== o || "" !== l) && ye(e, l)
                            : "number" === typeof l && ye(e, "" + l)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (h.hasOwnProperty(i)
                              ? null != l && "onScroll" === i && Ya("scroll", e)
                              : null != l && p(e, i, l, r));
                      }
                    switch (o) {
                      case "input":
                        z(e), X(e, a, !1);
                        break;
                      case "textarea":
                        z(e), ie(e);
                        break;
                      case "option":
                        null != a.value &&
                          e.setAttribute("value", "" + F(a.value));
                        break;
                      case "select":
                        (e.multiple = !!a.multiple),
                          null != (i = a.value)
                            ? oe(e, !!a.multiple, i, !1)
                            : null != a.defaultValue &&
                              oe(e, !!a.multiple, a.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof n.onClick && (e.onclick = Xa);
                    }
                    switch (o) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        a = !!a.autoFocus;
                        break e;
                      case "img":
                        a = !0;
                        break e;
                      default:
                        a = !1;
                    }
                  }
                  a && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Uh(t), null;
            case 6:
              if (e && null != t.stateNode) Nh(e, t, e.memoizedProps, a);
              else {
                if ("string" !== typeof a && null === t.stateNode)
                  throw Error(s(166));
                if (((o = ai(oi.current)), ai(ei.current), ys(t))) {
                  if (
                    ((a = t.stateNode),
                    (o = t.memoizedProps),
                    (a[cn] = t),
                    (i = a.nodeValue !== o) && null !== (e = as))
                  )
                    switch (e.tag) {
                      case 3:
                        Za(a.nodeValue, o, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Za(a.nodeValue, o, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((a = (9 === o.nodeType ? o : o.ownerDocument).createTextNode(
                    a
                  ))[cn] = t),
                    (t.stateNode = a);
              }
              return Uh(t), null;
            case 13:
              if (
                (Wn(ri),
                (a = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ss &&
                  null !== ns &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  cs(), ms(), (t.flags |= 98560), (i = !1);
                else if (((i = ys(t)), null !== a && null !== a.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(s(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(s(317));
                    i[cn] = t;
                  } else
                    ms(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Uh(t), (i = !1);
                } else null !== is && (hd(is), (is = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = o), t)
                : ((a = null !== a) !==
                    (null !== e && null !== e.memoizedState) &&
                    a &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ri.current)
                        ? 0 === Nr && (Nr = 3)
                        : wd())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Uh(t),
                  null);
            case 4:
              return (
                si(),
                Eh(e, t),
                null === e && Pa(t.stateNode.containerInfo),
                Uh(t),
                null
              );
            case 10:
              return Ts(t.type._context), Uh(t), null;
            case 19:
              if ((Wn(ri), null === (i = t.memoizedState))) return Uh(t), null;
              if (((a = 0 !== (128 & t.flags)), null === (r = i.rendering)))
                if (a) zh(i, !1);
                else {
                  if (0 !== Nr || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (r = di(e))) {
                        for (
                          t.flags |= 128,
                            zh(i, !1),
                            null !== (a = r.updateQueue) &&
                              ((t.updateQueue = a), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            a = o,
                            o = t.child;
                          null !== o;

                        )
                          (e = a),
                            ((i = o).flags &= 14680066),
                            null === (r = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = r.childLanes),
                                (i.lanes = r.lanes),
                                (i.child = r.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = r.memoizedProps),
                                (i.memoizedState = r.memoizedState),
                                (i.updateQueue = r.updateQueue),
                                (i.type = r.type),
                                (e = r.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (o = o.sibling);
                        return Hn(ri, (1 & ri.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Qe() > Rr &&
                    ((t.flags |= 128),
                    (a = !0),
                    zh(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!a)
                  if (null !== (e = di(r))) {
                    if (
                      ((t.flags |= 128),
                      (a = !0),
                      null !== (o = e.updateQueue) &&
                        ((t.updateQueue = o), (t.flags |= 4)),
                      zh(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !r.alternate &&
                        !ss)
                    )
                      return Uh(t), null;
                  } else
                    2 * Qe() - i.renderingStartTime > Rr &&
                      1073741824 !== o &&
                      ((t.flags |= 128),
                      (a = !0),
                      zh(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((r.sibling = t.child), (t.child = r))
                  : (null !== (o = i.last) ? (o.sibling = r) : (t.child = r),
                    (i.last = r));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Qe()),
                  (t.sibling = null),
                  (o = ri.current),
                  Hn(ri, a ? (1 & o) | 2 : 1 & o),
                  t)
                : (Uh(t), null);
            case 22:
            case 23:
              return (
                yd(),
                (a = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== a &&
                  (t.flags |= 8192),
                a && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Er) &&
                    (Uh(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Uh(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(s(156, t.tag));
        }
        function Kh(e, t) {
          switch ((os(t), t.tag)) {
            case 1:
              return (
                En(t.type) && Dn(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                si(),
                Wn(Bn),
                Wn(xn),
                ui(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return hi(t), null;
            case 13:
              if (
                (Wn(ri),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(s(340));
                ms();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Wn(ri), null;
            case 4:
              return si(), null;
            case 10:
              return Ts(t.type._context), null;
            case 22:
            case 23:
              return yd(), null;
            default:
              return null;
          }
        }
        (Oh = function (e, t) {
          for (var o = t.child; null !== o; ) {
            if (5 === o.tag || 6 === o.tag) e.appendChild(o.stateNode);
            else if (4 !== o.tag && null !== o.child) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              o = o.return;
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }),
          (Eh = function () {}),
          (Dh = function (e, t, o, a) {
            var n = e.memoizedProps;
            if (n !== a) {
              (e = t.stateNode), ai(ei.current);
              var s,
                i = null;
              switch (o) {
                case "input":
                  (n = K(e, n)), (a = K(e, a)), (i = []);
                  break;
                case "select":
                  (n = J({}, n, { value: void 0 })),
                    (a = J({}, a, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (n = ae(e, n)), (a = ae(e, a)), (i = []);
                  break;
                default:
                  "function" !== typeof n.onClick &&
                    "function" === typeof a.onClick &&
                    (e.onclick = Xa);
              }
              for (l in (be(o, a), (o = null), n))
                if (!a.hasOwnProperty(l) && n.hasOwnProperty(l) && null != n[l])
                  if ("style" === l) {
                    var r = n[l];
                    for (s in r)
                      r.hasOwnProperty(s) && (o || (o = {}), (o[s] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== l &&
                      "children" !== l &&
                      "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      "autoFocus" !== l &&
                      (h.hasOwnProperty(l)
                        ? i || (i = [])
                        : (i = i || []).push(l, null));
              for (l in a) {
                var d = a[l];
                if (
                  ((r = null != n ? n[l] : void 0),
                  a.hasOwnProperty(l) && d !== r && (null != d || null != r))
                )
                  if ("style" === l)
                    if (r) {
                      for (s in r)
                        !r.hasOwnProperty(s) ||
                          (d && d.hasOwnProperty(s)) ||
                          (o || (o = {}), (o[s] = ""));
                      for (s in d)
                        d.hasOwnProperty(s) &&
                          r[s] !== d[s] &&
                          (o || (o = {}), (o[s] = d[s]));
                    } else o || (i || (i = []), i.push(l, o)), (o = d);
                  else
                    "dangerouslySetInnerHTML" === l
                      ? ((d = d ? d.__html : void 0),
                        (r = r ? r.__html : void 0),
                        null != d && r !== d && (i = i || []).push(l, d))
                      : "children" === l
                      ? ("string" !== typeof d && "number" !== typeof d) ||
                        (i = i || []).push(l, "" + d)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        (h.hasOwnProperty(l)
                          ? (null != d && "onScroll" === l && Ya("scroll", e),
                            i || r === d || (i = []))
                          : (i = i || []).push(l, d));
              }
              o && (i = i || []).push("style", o);
              var l = i;
              (t.updateQueue = l) && (t.flags |= 4);
            }
          }),
          (Nh = function (e, t, o, a) {
            o !== a && (t.flags |= 4);
          });
        var Vh = !1,
          Qh = !1,
          Zh = "function" === typeof WeakSet ? WeakSet : Set,
          Xh = null;
        function er(e, t) {
          var o = e.ref;
          if (null !== o)
            if ("function" === typeof o)
              try {
                o(null);
              } catch (a) {
                Sd(e, t, a);
              }
            else o.current = null;
        }
        function tr(e, t, o) {
          try {
            o();
          } catch (a) {
            Sd(e, t, a);
          }
        }
        var or = !1;
        function ar(e, t, o) {
          var a = t.updateQueue;
          if (null !== (a = null !== a ? a.lastEffect : null)) {
            var n = (a = a.next);
            do {
              if ((n.tag & e) === e) {
                var s = n.destroy;
                (n.destroy = void 0), void 0 !== s && tr(t, o, s);
              }
              n = n.next;
            } while (n !== a);
          }
        }
        function nr(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var o = (t = t.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.create;
                o.destroy = a();
              }
              o = o.next;
            } while (o !== t);
          }
        }
        function sr(e) {
          var t = e.ref;
          if (null !== t) {
            var o = e.stateNode;
            e.tag, (e = o), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ir(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ir(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[cn],
              delete t[mn],
              delete t[wn],
              delete t[fn],
              delete t[bn]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function hr(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function rr(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || hr(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function dr(e, t, o) {
          var a = e.tag;
          if (5 === a || 6 === a)
            (e = e.stateNode),
              t
                ? 8 === o.nodeType
                  ? o.parentNode.insertBefore(e, t)
                  : o.insertBefore(e, t)
                : (8 === o.nodeType
                    ? (t = o.parentNode).insertBefore(e, o)
                    : (t = o).appendChild(e),
                  (null !== (o = o._reactRootContainer) && void 0 !== o) ||
                    null !== t.onclick ||
                    (t.onclick = Xa));
          else if (4 !== a && null !== (e = e.child))
            for (dr(e, t, o), e = e.sibling; null !== e; )
              dr(e, t, o), (e = e.sibling);
        }
        function lr(e, t, o) {
          var a = e.tag;
          if (5 === a || 6 === a)
            (e = e.stateNode), t ? o.insertBefore(e, t) : o.appendChild(e);
          else if (4 !== a && null !== (e = e.child))
            for (lr(e, t, o), e = e.sibling; null !== e; )
              lr(e, t, o), (e = e.sibling);
        }
        var ur = null,
          yr = !1;
        function cr(e, t, o) {
          for (o = o.child; null !== o; ) mr(e, t, o), (o = o.sibling);
        }
        function mr(e, t, o) {
          if (st && "function" === typeof st.onCommitFiberUnmount)
            try {
              st.onCommitFiberUnmount(nt, o);
            } catch (h) {}
          switch (o.tag) {
            case 5:
              Qh || er(o, t);
            case 6:
              var a = ur,
                n = yr;
              (ur = null),
                cr(e, t, o),
                (yr = n),
                null !== (ur = a) &&
                  (yr
                    ? ((e = ur),
                      (o = o.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(o)
                        : e.removeChild(o))
                    : ur.removeChild(o.stateNode));
              break;
            case 18:
              null !== ur &&
                (yr
                  ? ((e = ur),
                    (o = o.stateNode),
                    8 === e.nodeType
                      ? dn(e.parentNode, o)
                      : 1 === e.nodeType && dn(e, o),
                    Pt(e))
                  : dn(ur, o.stateNode));
              break;
            case 4:
              (a = ur),
                (n = yr),
                (ur = o.stateNode.containerInfo),
                (yr = !0),
                cr(e, t, o),
                (ur = a),
                (yr = n);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Qh &&
                null !== (a = o.updateQueue) &&
                null !== (a = a.lastEffect)
              ) {
                n = a = a.next;
                do {
                  var s = n,
                    i = s.destroy;
                  (s = s.tag),
                    void 0 !== i &&
                      (0 !== (2 & s) || 0 !== (4 & s)) &&
                      tr(o, t, i),
                    (n = n.next);
                } while (n !== a);
              }
              cr(e, t, o);
              break;
            case 1:
              if (
                !Qh &&
                (er(o, t),
                "function" === typeof (a = o.stateNode).componentWillUnmount)
              )
                try {
                  (a.props = o.memoizedProps),
                    (a.state = o.memoizedState),
                    a.componentWillUnmount();
                } catch (h) {
                  Sd(o, t, h);
                }
              cr(e, t, o);
              break;
            case 21:
              cr(e, t, o);
              break;
            case 22:
              1 & o.mode
                ? ((Qh = (a = Qh) || null !== o.memoizedState),
                  cr(e, t, o),
                  (Qh = a))
                : cr(e, t, o);
              break;
            default:
              cr(e, t, o);
          }
        }
        function gr(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var o = e.stateNode;
            null === o && (o = e.stateNode = new Zh()),
              t.forEach(function (t) {
                var a = xd.bind(null, e, t);
                o.has(t) || (o.add(t), t.then(a, a));
              });
          }
        }
        function wr(e, t) {
          var o = t.deletions;
          if (null !== o)
            for (var a = 0; a < o.length; a++) {
              var n = o[a];
              try {
                var i = e,
                  h = t,
                  r = h;
                e: for (; null !== r; ) {
                  switch (r.tag) {
                    case 5:
                      (ur = r.stateNode), (yr = !1);
                      break e;
                    case 3:
                    case 4:
                      (ur = r.stateNode.containerInfo), (yr = !0);
                      break e;
                  }
                  r = r.return;
                }
                if (null === ur) throw Error(s(160));
                mr(i, h, n), (ur = null), (yr = !1);
                var d = n.alternate;
                null !== d && (d.return = null), (n.return = null);
              } catch (l) {
                Sd(n, t, l);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) fr(t, e), (t = t.sibling);
        }
        function fr(e, t) {
          var o = e.alternate,
            a = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((wr(t, e), br(e), 4 & a)) {
                try {
                  ar(3, e, e.return), nr(3, e);
                } catch (w) {
                  Sd(e, e.return, w);
                }
                try {
                  ar(5, e, e.return);
                } catch (w) {
                  Sd(e, e.return, w);
                }
              }
              break;
            case 1:
              wr(t, e), br(e), 512 & a && null !== o && er(o, o.return);
              break;
            case 5:
              if (
                (wr(t, e),
                br(e),
                512 & a && null !== o && er(o, o.return),
                32 & e.flags)
              ) {
                var n = e.stateNode;
                try {
                  ye(n, "");
                } catch (w) {
                  Sd(e, e.return, w);
                }
              }
              if (4 & a && null != (n = e.stateNode)) {
                var i = e.memoizedProps,
                  h = null !== o ? o.memoizedProps : i,
                  r = e.type,
                  d = e.updateQueue;
                if (((e.updateQueue = null), null !== d))
                  try {
                    "input" === r &&
                      "radio" === i.type &&
                      null != i.name &&
                      Q(n, i),
                      pe(r, h);
                    var l = pe(r, i);
                    for (h = 0; h < d.length; h += 2) {
                      var u = d[h],
                        y = d[h + 1];
                      "style" === u
                        ? we(n, y)
                        : "dangerouslySetInnerHTML" === u
                        ? ue(n, y)
                        : "children" === u
                        ? ye(n, y)
                        : p(n, u, y, l);
                    }
                    switch (r) {
                      case "input":
                        Z(n, i);
                        break;
                      case "textarea":
                        se(n, i);
                        break;
                      case "select":
                        var c = n._wrapperState.wasMultiple;
                        n._wrapperState.wasMultiple = !!i.multiple;
                        var m = i.value;
                        null != m
                          ? oe(n, !!i.multiple, m, !1)
                          : c !== !!i.multiple &&
                            (null != i.defaultValue
                              ? oe(n, !!i.multiple, i.defaultValue, !0)
                              : oe(n, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    n[mn] = i;
                  } catch (w) {
                    Sd(e, e.return, w);
                  }
              }
              break;
            case 6:
              if ((wr(t, e), br(e), 4 & a)) {
                if (null === e.stateNode) throw Error(s(162));
                (n = e.stateNode), (i = e.memoizedProps);
                try {
                  n.nodeValue = i;
                } catch (w) {
                  Sd(e, e.return, w);
                }
              }
              break;
            case 3:
              if (
                (wr(t, e),
                br(e),
                4 & a && null !== o && o.memoizedState.isDehydrated)
              )
                try {
                  Pt(t.containerInfo);
                } catch (w) {
                  Sd(e, e.return, w);
                }
              break;
            case 4:
            default:
              wr(t, e), br(e);
              break;
            case 13:
              wr(t, e),
                br(e),
                8192 & (n = e.child).flags &&
                  ((i = null !== n.memoizedState),
                  (n.stateNode.isHidden = i),
                  !i ||
                    (null !== n.alternate &&
                      null !== n.alternate.memoizedState) ||
                    (Pr = Qe())),
                4 & a && gr(e);
              break;
            case 22:
              if (
                ((u = null !== o && null !== o.memoizedState),
                1 & e.mode
                  ? ((Qh = (l = Qh) || u), wr(t, e), (Qh = l))
                  : wr(t, e),
                br(e),
                8192 & a)
              ) {
                if (
                  ((l = null !== e.memoizedState),
                  (e.stateNode.isHidden = l) && !u && 0 !== (1 & e.mode))
                )
                  for (Xh = e, u = e.child; null !== u; ) {
                    for (y = Xh = u; null !== Xh; ) {
                      switch (((m = (c = Xh).child), c.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ar(4, c, c.return);
                          break;
                        case 1:
                          er(c, c.return);
                          var g = c.stateNode;
                          if ("function" === typeof g.componentWillUnmount) {
                            (a = c), (o = c.return);
                            try {
                              (t = a),
                                (g.props = t.memoizedProps),
                                (g.state = t.memoizedState),
                                g.componentWillUnmount();
                            } catch (w) {
                              Sd(a, o, w);
                            }
                          }
                          break;
                        case 5:
                          er(c, c.return);
                          break;
                        case 22:
                          if (null !== c.memoizedState) {
                            Ir(y);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = c), (Xh = m)) : Ir(y);
                    }
                    u = u.sibling;
                  }
                e: for (u = null, y = e; ; ) {
                  if (5 === y.tag) {
                    if (null === u) {
                      u = y;
                      try {
                        (n = y.stateNode),
                          l
                            ? "function" === typeof (i = n.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((r = y.stateNode),
                              (h =
                                void 0 !== (d = y.memoizedProps.style) &&
                                null !== d &&
                                d.hasOwnProperty("display")
                                  ? d.display
                                  : null),
                              (r.style.display = ge("display", h)));
                      } catch (w) {
                        Sd(e, e.return, w);
                      }
                    }
                  } else if (6 === y.tag) {
                    if (null === u)
                      try {
                        y.stateNode.nodeValue = l ? "" : y.memoizedProps;
                      } catch (w) {
                        Sd(e, e.return, w);
                      }
                  } else if (
                    ((22 !== y.tag && 23 !== y.tag) ||
                      null === y.memoizedState ||
                      y === e) &&
                    null !== y.child
                  ) {
                    (y.child.return = y), (y = y.child);
                    continue;
                  }
                  if (y === e) break e;
                  for (; null === y.sibling; ) {
                    if (null === y.return || y.return === e) break e;
                    u === y && (u = null), (y = y.return);
                  }
                  u === y && (u = null),
                    (y.sibling.return = y.return),
                    (y = y.sibling);
                }
              }
              break;
            case 19:
              wr(t, e), br(e), 4 & a && gr(e);
            case 21:
          }
        }
        function br(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var o = e.return; null !== o; ) {
                  if (hr(o)) {
                    var a = o;
                    break e;
                  }
                  o = o.return;
                }
                throw Error(s(160));
              }
              switch (a.tag) {
                case 5:
                  var n = a.stateNode;
                  32 & a.flags && (ye(n, ""), (a.flags &= -33)),
                    lr(e, rr(e), n);
                  break;
                case 3:
                case 4:
                  var i = a.stateNode.containerInfo;
                  dr(e, rr(e), i);
                  break;
                default:
                  throw Error(s(161));
              }
            } catch (h) {
              Sd(e, e.return, h);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function pr(e, t, o) {
          (Xh = e), kr(e, t, o);
        }
        function kr(e, t, o) {
          for (var a = 0 !== (1 & e.mode); null !== Xh; ) {
            var n = Xh,
              s = n.child;
            if (22 === n.tag && a) {
              var i = null !== n.memoizedState || Vh;
              if (!i) {
                var h = n.alternate,
                  r = (null !== h && null !== h.memoizedState) || Qh;
                h = Vh;
                var d = Qh;
                if (((Vh = i), (Qh = r) && !d))
                  for (Xh = n; null !== Xh; )
                    (r = (i = Xh).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Tr(n)
                        : null !== r
                        ? ((r.return = i), (Xh = r))
                        : Tr(n);
                for (; null !== s; ) (Xh = s), kr(s, t, o), (s = s.sibling);
                (Xh = n), (Vh = h), (Qh = d);
              }
              vr(e);
            } else
              0 !== (8772 & n.subtreeFlags) && null !== s
                ? ((s.return = n), (Xh = s))
                : vr(e);
          }
        }
        function vr(e) {
          for (; null !== Xh; ) {
            var t = Xh;
            if (0 !== (8772 & t.flags)) {
              var o = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qh || nr(5, t);
                      break;
                    case 1:
                      var a = t.stateNode;
                      if (4 & t.flags && !Qh)
                        if (null === o) a.componentDidMount();
                        else {
                          var n =
                            t.elementType === t.type
                              ? o.memoizedProps
                              : fs(t.type, o.memoizedProps);
                          a.componentDidUpdate(
                            n,
                            o.memoizedState,
                            a.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Ys(t, i, a);
                      break;
                    case 3:
                      var h = t.updateQueue;
                      if (null !== h) {
                        if (((o = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              o = t.child.stateNode;
                          }
                        Ys(t, h, o);
                      }
                      break;
                    case 5:
                      var r = t.stateNode;
                      if (null === o && 4 & t.flags) {
                        o = r;
                        var d = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            d.autoFocus && o.focus();
                            break;
                          case "img":
                            d.src && (o.src = d.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var l = t.alternate;
                        if (null !== l) {
                          var u = l.memoizedState;
                          if (null !== u) {
                            var y = u.dehydrated;
                            null !== y && Pt(y);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(s(163));
                  }
                Qh || (512 & t.flags && sr(t));
              } catch (c) {
                Sd(t, t.return, c);
              }
            }
            if (t === e) {
              Xh = null;
              break;
            }
            if (null !== (o = t.sibling)) {
              (o.return = t.return), (Xh = o);
              break;
            }
            Xh = t.return;
          }
        }
        function Ir(e) {
          for (; null !== Xh; ) {
            var t = Xh;
            if (t === e) {
              Xh = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (Xh = o);
              break;
            }
            Xh = t.return;
          }
        }
        function Tr(e) {
          for (; null !== Xh; ) {
            var t = Xh;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var o = t.return;
                  try {
                    nr(4, t);
                  } catch (r) {
                    Sd(t, o, r);
                  }
                  break;
                case 1:
                  var a = t.stateNode;
                  if ("function" === typeof a.componentDidMount) {
                    var n = t.return;
                    try {
                      a.componentDidMount();
                    } catch (r) {
                      Sd(t, n, r);
                    }
                  }
                  var s = t.return;
                  try {
                    sr(t);
                  } catch (r) {
                    Sd(t, s, r);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    sr(t);
                  } catch (r) {
                    Sd(t, i, r);
                  }
              }
            } catch (r) {
              Sd(t, t.return, r);
            }
            if (t === e) {
              Xh = null;
              break;
            }
            var h = t.sibling;
            if (null !== h) {
              (h.return = t.return), (Xh = h);
              break;
            }
            Xh = t.return;
          }
        }
        var Ar,
          Sr = Math.ceil,
          Wr = k.ReactCurrentDispatcher,
          Hr = k.ReactCurrentOwner,
          Mr = k.ReactCurrentBatchConfig,
          xr = 0,
          Br = null,
          qr = null,
          Or = 0,
          Er = 0,
          Dr = Sn(0),
          Nr = 0,
          Cr = null,
          Jr = 0,
          jr = 0,
          Yr = 0,
          Lr = null,
          Gr = null,
          Pr = 0,
          Rr = 1 / 0,
          Fr = null,
          _r = !1,
          zr = null,
          Ur = null,
          $r = !1,
          Kr = null,
          Vr = 0,
          Qr = 0,
          Zr = null,
          Xr = -1,
          ed = 0;
        function td() {
          return 0 !== (6 & xr) ? Qe() : -1 !== Xr ? Xr : (Xr = Qe());
        }
        function od(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & xr) && 0 !== Or
            ? Or & -Or
            : null !== ws.transition
            ? (0 === ed && (ed = gt()), ed)
            : 0 !== (e = pt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Vt(e.type));
        }
        function ad(e, t, o, a) {
          if (50 < Qr) throw ((Qr = 0), (Zr = null), Error(s(185)));
          ft(e, o, a),
            (0 !== (2 & xr) && e === Br) ||
              (e === Br && (0 === (2 & xr) && (jr |= o), 4 === Nr && rd(e, Or)),
              nd(e, a),
              1 === o &&
                0 === xr &&
                0 === (1 & t.mode) &&
                ((Rr = Qe() + 500), Ln && Rn()));
        }
        function nd(e, t) {
          var o = e.callbackNode;
          !(function (e, t) {
            for (
              var o = e.suspendedLanes,
                a = e.pingedLanes,
                n = e.expirationTimes,
                s = e.pendingLanes;
              0 < s;

            ) {
              var i = 31 - it(s),
                h = 1 << i,
                r = n[i];
              -1 === r
                ? (0 !== (h & o) && 0 === (h & a)) || (n[i] = ct(h, t))
                : r <= t && (e.expiredLanes |= h),
                (s &= ~h);
            }
          })(e, t);
          var a = yt(e, e === Br ? Or : 0);
          if (0 === a)
            null !== o && $e(o),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = a & -a), e.callbackPriority !== t)) {
            if ((null != o && $e(o), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ln = !0), Pn(e);
                  })(dd.bind(null, e))
                : Pn(dd.bind(null, e)),
                hn(function () {
                  0 === (6 & xr) && Rn();
                }),
                (o = null);
            else {
              switch (kt(a)) {
                case 1:
                  o = Xe;
                  break;
                case 4:
                  o = et;
                  break;
                case 16:
                default:
                  o = tt;
                  break;
                case 536870912:
                  o = at;
              }
              o = Bd(o, sd.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = o);
          }
        }
        function sd(e, t) {
          if (((Xr = -1), (ed = 0), 0 !== (6 & xr))) throw Error(s(327));
          var o = e.callbackNode;
          if (Td() && e.callbackNode !== o) return null;
          var a = yt(e, e === Br ? Or : 0);
          if (0 === a) return null;
          if (0 !== (30 & a) || 0 !== (a & e.expiredLanes) || t) t = fd(e, a);
          else {
            t = a;
            var n = xr;
            xr |= 2;
            var i = gd();
            for (
              (Br === e && Or === t) ||
              ((Fr = null), (Rr = Qe() + 500), cd(e, t));
              ;

            )
              try {
                pd();
                break;
              } catch (r) {
                md(e, r);
              }
            Is(),
              (Wr.current = i),
              (xr = n),
              null !== qr ? (t = 0) : ((Br = null), (Or = 0), (t = Nr));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (n = mt(e)) && ((a = n), (t = id(e, n))),
              1 === t)
            )
              throw ((o = Cr), cd(e, 0), rd(e, a), nd(e, Qe()), o);
            if (6 === t) rd(e, a);
            else {
              if (
                ((n = e.current.alternate),
                0 === (30 & a) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var o = t.updateQueue;
                        if (null !== o && null !== (o = o.stores))
                          for (var a = 0; a < o.length; a++) {
                            var n = o[a],
                              s = n.getSnapshot;
                            n = n.value;
                            try {
                              if (!ha(s(), n)) return !1;
                            } catch (h) {
                              return !1;
                            }
                          }
                      }
                      if (((o = t.child), 16384 & t.subtreeFlags && null !== o))
                        (o.return = t), (t = o);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(n) &&
                  (2 === (t = fd(e, a)) &&
                    0 !== (i = mt(e)) &&
                    ((a = i), (t = id(e, i))),
                  1 === t))
              )
                throw ((o = Cr), cd(e, 0), rd(e, a), nd(e, Qe()), o);
              switch (((e.finishedWork = n), (e.finishedLanes = a), t)) {
                case 0:
                case 1:
                  throw Error(s(345));
                case 2:
                case 5:
                  Id(e, Gr, Fr);
                  break;
                case 3:
                  if (
                    (rd(e, a),
                    (130023424 & a) === a && 10 < (t = Pr + 500 - Qe()))
                  ) {
                    if (0 !== yt(e, 0)) break;
                    if (((n = e.suspendedLanes) & a) !== a) {
                      td(), (e.pingedLanes |= e.suspendedLanes & n);
                      break;
                    }
                    e.timeoutHandle = an(Id.bind(null, e, Gr, Fr), t);
                    break;
                  }
                  Id(e, Gr, Fr);
                  break;
                case 4:
                  if ((rd(e, a), (4194240 & a) === a)) break;
                  for (t = e.eventTimes, n = -1; 0 < a; ) {
                    var h = 31 - it(a);
                    (i = 1 << h), (h = t[h]) > n && (n = h), (a &= ~i);
                  }
                  if (
                    ((a = n),
                    10 <
                      (a =
                        (120 > (a = Qe() - a)
                          ? 120
                          : 480 > a
                          ? 480
                          : 1080 > a
                          ? 1080
                          : 1920 > a
                          ? 1920
                          : 3e3 > a
                          ? 3e3
                          : 4320 > a
                          ? 4320
                          : 1960 * Sr(a / 1960)) - a))
                  ) {
                    e.timeoutHandle = an(Id.bind(null, e, Gr, Fr), a);
                    break;
                  }
                  Id(e, Gr, Fr);
                  break;
                default:
                  throw Error(s(329));
              }
            }
          }
          return nd(e, Qe()), e.callbackNode === o ? sd.bind(null, e) : null;
        }
        function id(e, t) {
          var o = Lr;
          return (
            e.current.memoizedState.isDehydrated && (cd(e, t).flags |= 256),
            2 !== (e = fd(e, t)) && ((t = Gr), (Gr = o), null !== t && hd(t)),
            e
          );
        }
        function hd(e) {
          null === Gr ? (Gr = e) : Gr.push.apply(Gr, e);
        }
        function rd(e, t) {
          for (
            t &= ~Yr,
              t &= ~jr,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var o = 31 - it(t),
              a = 1 << o;
            (e[o] = -1), (t &= ~a);
          }
        }
        function dd(e) {
          if (0 !== (6 & xr)) throw Error(s(327));
          Td();
          var t = yt(e, 0);
          if (0 === (1 & t)) return nd(e, Qe()), null;
          var o = fd(e, t);
          if (0 !== e.tag && 2 === o) {
            var a = mt(e);
            0 !== a && ((t = a), (o = id(e, a)));
          }
          if (1 === o) throw ((o = Cr), cd(e, 0), rd(e, t), nd(e, Qe()), o);
          if (6 === o) throw Error(s(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Id(e, Gr, Fr),
            nd(e, Qe()),
            null
          );
        }
        function ld(e, t) {
          var o = xr;
          xr |= 1;
          try {
            return e(t);
          } finally {
            0 === (xr = o) && ((Rr = Qe() + 500), Ln && Rn());
          }
        }
        function ud(e) {
          null !== Kr && 0 === Kr.tag && 0 === (6 & xr) && Td();
          var t = xr;
          xr |= 1;
          var o = Mr.transition,
            a = pt;
          try {
            if (((Mr.transition = null), (pt = 1), e)) return e();
          } finally {
            (pt = a), (Mr.transition = o), 0 === (6 & (xr = t)) && Rn();
          }
        }
        function yd() {
          (Er = Dr.current), Wn(Dr);
        }
        function cd(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var o = e.timeoutHandle;
          if ((-1 !== o && ((e.timeoutHandle = -1), nn(o)), null !== qr))
            for (o = qr.return; null !== o; ) {
              var a = o;
              switch ((os(a), a.tag)) {
                case 1:
                  null !== (a = a.type.childContextTypes) &&
                    void 0 !== a &&
                    Dn();
                  break;
                case 3:
                  si(), Wn(Bn), Wn(xn), ui();
                  break;
                case 5:
                  hi(a);
                  break;
                case 4:
                  si();
                  break;
                case 13:
                case 19:
                  Wn(ri);
                  break;
                case 10:
                  Ts(a.type._context);
                  break;
                case 22:
                case 23:
                  yd();
              }
              o = o.return;
            }
          if (
            ((Br = e),
            (qr = e = Dd(e.current, null)),
            (Or = Er = t),
            (Nr = 0),
            (Cr = null),
            (Yr = jr = Jr = 0),
            (Gr = Lr = null),
            null !== Hs)
          ) {
            for (t = 0; t < Hs.length; t++)
              if (null !== (a = (o = Hs[t]).interleaved)) {
                o.interleaved = null;
                var n = a.next,
                  s = o.pending;
                if (null !== s) {
                  var i = s.next;
                  (s.next = n), (a.next = i);
                }
                o.pending = a;
              }
            Hs = null;
          }
          return e;
        }
        function md(e, t) {
          for (;;) {
            var o = qr;
            try {
              if ((Is(), (yi.current = ih), bi)) {
                for (var a = gi.memoizedState; null !== a; ) {
                  var n = a.queue;
                  null !== n && (n.pending = null), (a = a.next);
                }
                bi = !1;
              }
              if (
                ((mi = 0),
                (fi = wi = gi = null),
                (pi = !1),
                (ki = 0),
                (Hr.current = null),
                null === o || null === o.return)
              ) {
                (Nr = 1), (Cr = t), (qr = null);
                break;
              }
              e: {
                var i = e,
                  h = o.return,
                  r = o,
                  d = t;
                if (
                  ((t = Or),
                  (r.flags |= 32768),
                  null !== d &&
                    "object" === typeof d &&
                    "function" === typeof d.then)
                ) {
                  var l = d,
                    u = r,
                    y = u.tag;
                  if (0 === (1 & u.mode) && (0 === y || 11 === y || 15 === y)) {
                    var c = u.alternate;
                    c
                      ? ((u.updateQueue = c.updateQueue),
                        (u.memoizedState = c.memoizedState),
                        (u.lanes = c.lanes))
                      : ((u.updateQueue = null), (u.memoizedState = null));
                  }
                  var m = fh(h);
                  if (null !== m) {
                    (m.flags &= -257),
                      bh(m, h, r, 0, t),
                      1 & m.mode && wh(i, l, t),
                      (d = l);
                    var g = (t = m).updateQueue;
                    if (null === g) {
                      var w = new Set();
                      w.add(d), (t.updateQueue = w);
                    } else g.add(d);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    wh(i, l, t), wd();
                    break e;
                  }
                  d = Error(s(426));
                } else if (ss && 1 & r.mode) {
                  var f = fh(h);
                  if (null !== f) {
                    0 === (65536 & f.flags) && (f.flags |= 256),
                      bh(f, h, r, 0, t),
                      gs(lh(d, r));
                    break e;
                  }
                }
                (i = d = lh(d, r)),
                  4 !== Nr && (Nr = 2),
                  null === Lr ? (Lr = [i]) : Lr.push(i),
                  (i = h);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Js(i, mh(0, d, t));
                      break e;
                    case 1:
                      r = d;
                      var b = i.type,
                        p = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof b.getDerivedStateFromError ||
                          (null !== p &&
                            "function" === typeof p.componentDidCatch &&
                            (null === Ur || !Ur.has(p))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Js(i, gh(i, r, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              vd(o);
            } catch (k) {
              (t = k), qr === o && null !== o && (qr = o = o.return);
              continue;
            }
            break;
          }
        }
        function gd() {
          var e = Wr.current;
          return (Wr.current = ih), null === e ? ih : e;
        }
        function wd() {
          (0 !== Nr && 3 !== Nr && 2 !== Nr) || (Nr = 4),
            null === Br ||
              (0 === (268435455 & Jr) && 0 === (268435455 & jr)) ||
              rd(Br, Or);
        }
        function fd(e, t) {
          var o = xr;
          xr |= 2;
          var a = gd();
          for ((Br === e && Or === t) || ((Fr = null), cd(e, t)); ; )
            try {
              bd();
              break;
            } catch (n) {
              md(e, n);
            }
          if ((Is(), (xr = o), (Wr.current = a), null !== qr))
            throw Error(s(261));
          return (Br = null), (Or = 0), Nr;
        }
        function bd() {
          for (; null !== qr; ) kd(qr);
        }
        function pd() {
          for (; null !== qr && !Ke(); ) kd(qr);
        }
        function kd(e) {
          var t = Ar(e.alternate, e, Er);
          (e.memoizedProps = e.pendingProps),
            null === t ? vd(e) : (qr = t),
            (Hr.current = null);
        }
        function vd(e) {
          var t = e;
          do {
            var o = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (o = $h(o, t, Er))) return void (qr = o);
            } else {
              if (null !== (o = Kh(o, t)))
                return (o.flags &= 32767), void (qr = o);
              if (null === e) return (Nr = 6), void (qr = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (qr = t);
            qr = t = e;
          } while (null !== t);
          0 === Nr && (Nr = 5);
        }
        function Id(e, t, o) {
          var a = pt,
            n = Mr.transition;
          try {
            (Mr.transition = null),
              (pt = 1),
              (function (e, t, o, a) {
                do {
                  Td();
                } while (null !== Kr);
                if (0 !== (6 & xr)) throw Error(s(327));
                o = e.finishedWork;
                var n = e.finishedLanes;
                if (null === o) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  o === e.current)
                )
                  throw Error(s(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = o.lanes | o.childLanes;
                if (
                  ((function (e, t) {
                    var o = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var a = e.eventTimes;
                    for (e = e.expirationTimes; 0 < o; ) {
                      var n = 31 - it(o),
                        s = 1 << n;
                      (t[n] = 0), (a[n] = -1), (e[n] = -1), (o &= ~s);
                    }
                  })(e, i),
                  e === Br && ((qr = Br = null), (Or = 0)),
                  (0 === (2064 & o.subtreeFlags) && 0 === (2064 & o.flags)) ||
                    $r ||
                    (($r = !0),
                    Bd(tt, function () {
                      return Td(), null;
                    })),
                  (i = 0 !== (15990 & o.flags)),
                  0 !== (15990 & o.subtreeFlags) || i)
                ) {
                  (i = Mr.transition), (Mr.transition = null);
                  var h = pt;
                  pt = 1;
                  var r = xr;
                  (xr |= 4),
                    (Hr.current = null),
                    (function (e, t) {
                      if (((en = Ft), ca((e = ya())))) {
                        if ("selectionStart" in e)
                          var o = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var a =
                              (o =
                                ((o = e.ownerDocument) && o.defaultView) ||
                                window).getSelection && o.getSelection();
                            if (a && 0 !== a.rangeCount) {
                              o = a.anchorNode;
                              var n = a.anchorOffset,
                                i = a.focusNode;
                              a = a.focusOffset;
                              try {
                                o.nodeType, i.nodeType;
                              } catch (v) {
                                o = null;
                                break e;
                              }
                              var h = 0,
                                r = -1,
                                d = -1,
                                l = 0,
                                u = 0,
                                y = e,
                                c = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  y !== o ||
                                    (0 !== n && 3 !== y.nodeType) ||
                                    (r = h + n),
                                    y !== i ||
                                      (0 !== a && 3 !== y.nodeType) ||
                                      (d = h + a),
                                    3 === y.nodeType &&
                                      (h += y.nodeValue.length),
                                    null !== (m = y.firstChild);

                                )
                                  (c = y), (y = m);
                                for (;;) {
                                  if (y === e) break t;
                                  if (
                                    (c === o && ++l === n && (r = h),
                                    c === i && ++u === a && (d = h),
                                    null !== (m = y.nextSibling))
                                  )
                                    break;
                                  c = (y = c).parentNode;
                                }
                                y = m;
                              }
                              o =
                                -1 === r || -1 === d
                                  ? null
                                  : { start: r, end: d };
                            } else o = null;
                          }
                        o = o || { start: 0, end: 0 };
                      } else o = null;
                      for (
                        tn = { focusedElem: e, selectionRange: o },
                          Ft = !1,
                          Xh = t;
                        null !== Xh;

                      )
                        if (
                          ((e = (t = Xh).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Xh = e);
                        else
                          for (; null !== Xh; ) {
                            t = Xh;
                            try {
                              var g = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== g) {
                                      var w = g.memoizedProps,
                                        f = g.memoizedState,
                                        b = t.stateNode,
                                        p = b.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? w
                                            : fs(t.type, w),
                                          f
                                        );
                                      b.__reactInternalSnapshotBeforeUpdate = p;
                                    }
                                    break;
                                  case 3:
                                    var k = t.stateNode.containerInfo;
                                    1 === k.nodeType
                                      ? (k.textContent = "")
                                      : 9 === k.nodeType &&
                                        k.documentElement &&
                                        k.removeChild(k.documentElement);
                                    break;
                                  default:
                                    throw Error(s(163));
                                }
                            } catch (v) {
                              Sd(t, t.return, v);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Xh = e);
                              break;
                            }
                            Xh = t.return;
                          }
                      (g = or), (or = !1);
                    })(e, o),
                    fr(o, e),
                    ma(tn),
                    (Ft = !!en),
                    (tn = en = null),
                    (e.current = o),
                    pr(o, e, n),
                    Ve(),
                    (xr = r),
                    (pt = h),
                    (Mr.transition = i);
                } else e.current = o;
                if (
                  ($r && (($r = !1), (Kr = e), (Vr = n)),
                  (i = e.pendingLanes),
                  0 === i && (Ur = null),
                  (function (e) {
                    if (st && "function" === typeof st.onCommitFiberRoot)
                      try {
                        st.onCommitFiberRoot(
                          nt,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(o.stateNode),
                  nd(e, Qe()),
                  null !== t)
                )
                  for (a = e.onRecoverableError, o = 0; o < t.length; o++)
                    (n = t[o]),
                      a(n.value, { componentStack: n.stack, digest: n.digest });
                if (_r) throw ((_r = !1), (e = zr), (zr = null), e);
                0 !== (1 & Vr) && 0 !== e.tag && Td(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Zr
                      ? Qr++
                      : ((Qr = 0), (Zr = e))
                    : (Qr = 0),
                  Rn();
              })(e, t, o, a);
          } finally {
            (Mr.transition = n), (pt = a);
          }
          return null;
        }
        function Td() {
          if (null !== Kr) {
            var e = kt(Vr),
              t = Mr.transition,
              o = pt;
            try {
              if (((Mr.transition = null), (pt = 16 > e ? 16 : e), null === Kr))
                var a = !1;
              else {
                if (((e = Kr), (Kr = null), (Vr = 0), 0 !== (6 & xr)))
                  throw Error(s(331));
                var n = xr;
                for (xr |= 4, Xh = e.current; null !== Xh; ) {
                  var i = Xh,
                    h = i.child;
                  if (0 !== (16 & Xh.flags)) {
                    var r = i.deletions;
                    if (null !== r) {
                      for (var d = 0; d < r.length; d++) {
                        var l = r[d];
                        for (Xh = l; null !== Xh; ) {
                          var u = Xh;
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ar(8, u, i);
                          }
                          var y = u.child;
                          if (null !== y) (y.return = u), (Xh = y);
                          else
                            for (; null !== Xh; ) {
                              var c = (u = Xh).sibling,
                                m = u.return;
                              if ((ir(u), u === l)) {
                                Xh = null;
                                break;
                              }
                              if (null !== c) {
                                (c.return = m), (Xh = c);
                                break;
                              }
                              Xh = m;
                            }
                        }
                      }
                      var g = i.alternate;
                      if (null !== g) {
                        var w = g.child;
                        if (null !== w) {
                          g.child = null;
                          do {
                            var f = w.sibling;
                            (w.sibling = null), (w = f);
                          } while (null !== w);
                        }
                      }
                      Xh = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== h)
                    (h.return = i), (Xh = h);
                  else
                    e: for (; null !== Xh; ) {
                      if (0 !== (2048 & (i = Xh).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ar(9, i, i.return);
                        }
                      var b = i.sibling;
                      if (null !== b) {
                        (b.return = i.return), (Xh = b);
                        break e;
                      }
                      Xh = i.return;
                    }
                }
                var p = e.current;
                for (Xh = p; null !== Xh; ) {
                  var k = (h = Xh).child;
                  if (0 !== (2064 & h.subtreeFlags) && null !== k)
                    (k.return = h), (Xh = k);
                  else
                    e: for (h = p; null !== Xh; ) {
                      if (0 !== (2048 & (r = Xh).flags))
                        try {
                          switch (r.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nr(9, r);
                          }
                        } catch (I) {
                          Sd(r, r.return, I);
                        }
                      if (r === h) {
                        Xh = null;
                        break e;
                      }
                      var v = r.sibling;
                      if (null !== v) {
                        (v.return = r.return), (Xh = v);
                        break e;
                      }
                      Xh = r.return;
                    }
                }
                if (
                  ((xr = n),
                  Rn(),
                  st && "function" === typeof st.onPostCommitFiberRoot)
                )
                  try {
                    st.onPostCommitFiberRoot(nt, e);
                  } catch (I) {}
                a = !0;
              }
              return a;
            } finally {
              (pt = o), (Mr.transition = t);
            }
          }
          return !1;
        }
        function Ad(e, t, o) {
          (e = Ns(e, (t = mh(0, (t = lh(o, t)), 1)), 1)),
            (t = td()),
            null !== e && (ft(e, 1, t), nd(e, t));
        }
        function Sd(e, t, o) {
          if (3 === e.tag) Ad(e, e, o);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ad(t, e, o);
                break;
              }
              if (1 === t.tag) {
                var a = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof a.componentDidCatch &&
                    (null === Ur || !Ur.has(a)))
                ) {
                  (t = Ns(t, (e = gh(t, (e = lh(o, e)), 1)), 1)),
                    (e = td()),
                    null !== t && (ft(t, 1, e), nd(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Wd(e, t, o) {
          var a = e.pingCache;
          null !== a && a.delete(t),
            (t = td()),
            (e.pingedLanes |= e.suspendedLanes & o),
            Br === e &&
              (Or & o) === o &&
              (4 === Nr ||
              (3 === Nr && (130023424 & Or) === Or && 500 > Qe() - Pr)
                ? cd(e, 0)
                : (Yr |= o)),
            nd(e, t);
        }
        function Hd(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = lt), 0 === (130023424 & (lt <<= 1)) && (lt = 4194304)));
          var o = td();
          null !== (e = Bs(e, t)) && (ft(e, t, o), nd(e, o));
        }
        function Md(e) {
          var t = e.memoizedState,
            o = 0;
          null !== t && (o = t.retryLane), Hd(e, o);
        }
        function xd(e, t) {
          var o = 0;
          switch (e.tag) {
            case 13:
              var a = e.stateNode,
                n = e.memoizedState;
              null !== n && (o = n.retryLane);
              break;
            case 19:
              a = e.stateNode;
              break;
            default:
              throw Error(s(314));
          }
          null !== a && a.delete(t), Hd(e, o);
        }
        function Bd(e, t) {
          return Ue(e, t);
        }
        function qd(e, t, o, a) {
          (this.tag = e),
            (this.key = o),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = a),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Od(e, t, o, a) {
          return new qd(e, t, o, a);
        }
        function Ed(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Dd(e, t) {
          var o = e.alternate;
          return (
            null === o
              ? (((o = Od(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (o.type = e.type),
                (o.stateNode = e.stateNode),
                (o.alternate = e),
                (e.alternate = o))
              : ((o.pendingProps = t),
                (o.type = e.type),
                (o.flags = 0),
                (o.subtreeFlags = 0),
                (o.deletions = null)),
            (o.flags = 14680064 & e.flags),
            (o.childLanes = e.childLanes),
            (o.lanes = e.lanes),
            (o.child = e.child),
            (o.memoizedProps = e.memoizedProps),
            (o.memoizedState = e.memoizedState),
            (o.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (o.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (o.sibling = e.sibling),
            (o.index = e.index),
            (o.ref = e.ref),
            o
          );
        }
        function Nd(e, t, o, a, n, i) {
          var h = 2;
          if (((a = e), "function" === typeof e)) Ed(e) && (h = 1);
          else if ("string" === typeof e) h = 5;
          else
            e: switch (e) {
              case T:
                return Cd(o.children, n, i, t);
              case A:
                (h = 8), (n |= 8);
                break;
              case S:
                return (
                  ((e = Od(12, o, t, 2 | n)).elementType = S), (e.lanes = i), e
                );
              case x:
                return (
                  ((e = Od(13, o, t, n)).elementType = x), (e.lanes = i), e
                );
              case B:
                return (
                  ((e = Od(19, o, t, n)).elementType = B), (e.lanes = i), e
                );
              case E:
                return Jd(o, n, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case W:
                      h = 10;
                      break e;
                    case H:
                      h = 9;
                      break e;
                    case M:
                      h = 11;
                      break e;
                    case q:
                      h = 14;
                      break e;
                    case O:
                      (h = 16), (a = null);
                      break e;
                  }
                throw Error(s(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Od(h, o, t, n)).elementType = e),
            (t.type = a),
            (t.lanes = i),
            t
          );
        }
        function Cd(e, t, o, a) {
          return ((e = Od(7, e, a, t)).lanes = o), e;
        }
        function Jd(e, t, o, a) {
          return (
            ((e = Od(22, e, a, t)).elementType = E),
            (e.lanes = o),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function jd(e, t, o) {
          return ((e = Od(6, e, null, t)).lanes = o), e;
        }
        function Yd(e, t, o) {
          return (
            ((t = Od(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = o),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ld(e, t, o, a, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = wt(0)),
            (this.expirationTimes = wt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = wt(0)),
            (this.identifierPrefix = a),
            (this.onRecoverableError = n),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Gd(e, t, o, a, n, s, i, h, r) {
          return (
            (e = new Ld(e, t, o, h, r)),
            1 === t ? ((t = 1), !0 === s && (t |= 8)) : (t = 0),
            (s = Od(3, null, null, t)),
            (e.current = s),
            (s.stateNode = e),
            (s.memoizedState = {
              element: a,
              isDehydrated: o,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Os(s),
            e
          );
        }
        function Pd(e) {
          if (!e) return Mn;
          e: {
            if (Pe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(s(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (En(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(s(171));
          }
          if (1 === e.tag) {
            var o = e.type;
            if (En(o)) return Cn(e, o, t);
          }
          return t;
        }
        function Rd(e, t, o, a, n, s, i, h, r) {
          return (
            ((e = Gd(o, a, !0, e, 0, s, 0, h, r)).context = Pd(null)),
            (o = e.current),
            ((s = Ds((a = td()), (n = od(o)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ns(o, s, n),
            (e.current.lanes = n),
            ft(e, n, a),
            nd(e, a),
            e
          );
        }
        function Fd(e, t, o, a) {
          var n = t.current,
            s = td(),
            i = od(n);
          return (
            (o = Pd(o)),
            null === t.context ? (t.context = o) : (t.pendingContext = o),
            ((t = Ds(s, i)).payload = { element: e }),
            null !== (a = void 0 === a ? null : a) && (t.callback = a),
            null !== (e = Ns(n, t, i)) && (ad(e, n, i, s), Cs(e, n, i)),
            i
          );
        }
        function _d(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function zd(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var o = e.retryLane;
            e.retryLane = 0 !== o && o < t ? o : t;
          }
        }
        function Ud(e, t) {
          zd(e, t), (e = e.alternate) && zd(e, t);
        }
        Ar = function (e, t, o) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Bn.current) kh = !0;
            else {
              if (0 === (e.lanes & o) && 0 === (128 & t.flags))
                return (
                  (kh = !1),
                  (function (e, t, o) {
                    switch (t.tag) {
                      case 3:
                        Bh(t), ms();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        En(t.type) && Jn(t);
                        break;
                      case 4:
                        ni(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var a = t.type._context,
                          n = t.memoizedProps.value;
                        Hn(bs, a._currentValue), (a._currentValue = n);
                        break;
                      case 13:
                        if (null !== (a = t.memoizedState))
                          return null !== a.dehydrated
                            ? (Hn(ri, 1 & ri.current), (t.flags |= 128), null)
                            : 0 !== (o & t.child.childLanes)
                            ? jh(e, t, o)
                            : (Hn(ri, 1 & ri.current),
                              null !== (e = _h(e, t, o)) ? e.sibling : null);
                        Hn(ri, 1 & ri.current);
                        break;
                      case 19:
                        if (
                          ((a = 0 !== (o & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (a) return Rh(e, t, o);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (n = t.memoizedState) &&
                            ((n.rendering = null),
                            (n.tail = null),
                            (n.lastEffect = null)),
                          Hn(ri, ri.current),
                          a)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Sh(e, t, o);
                    }
                    return _h(e, t, o);
                  })(e, t, o)
                );
              kh = 0 !== (131072 & e.flags);
            }
          else (kh = !1), ss && 0 !== (1048576 & t.flags) && es(t, Un, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var a = t.type;
              Fh(e, t), (e = t.pendingProps);
              var n = On(t, xn.current);
              Ss(t, o), (n = Ai(null, t, a, e, n, o));
              var i = Si();
              return (
                (t.flags |= 1),
                "object" === typeof n &&
                null !== n &&
                "function" === typeof n.render &&
                void 0 === n.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    En(a) ? ((i = !0), Jn(t)) : (i = !1),
                    (t.memoizedState =
                      null !== n.state && void 0 !== n.state ? n.state : null),
                    Os(t),
                    (n.updater = Ps),
                    (t.stateNode = n),
                    (n._reactInternals = t),
                    zs(t, a, e, o),
                    (t = xh(null, t, a, !0, i, o)))
                  : ((t.tag = 0),
                    ss && i && ts(t),
                    vh(null, t, n, o),
                    (t = t.child)),
                t
              );
            case 16:
              a = t.elementType;
              e: {
                switch (
                  (Fh(e, t),
                  (e = t.pendingProps),
                  (a = (n = a._init)(a._payload)),
                  (t.type = a),
                  (n = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ed(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === M) return 11;
                        if (e === q) return 14;
                      }
                      return 2;
                    })(a)),
                  (e = fs(a, e)),
                  n)
                ) {
                  case 0:
                    t = Hh(null, t, a, e, o);
                    break e;
                  case 1:
                    t = Mh(null, t, a, e, o);
                    break e;
                  case 11:
                    t = Ih(null, t, a, e, o);
                    break e;
                  case 14:
                    t = Th(null, t, a, fs(a.type, e), o);
                    break e;
                }
                throw Error(s(306, a, ""));
              }
              return t;
            case 0:
              return (
                (a = t.type),
                (n = t.pendingProps),
                Hh(e, t, a, (n = t.elementType === a ? n : fs(a, n)), o)
              );
            case 1:
              return (
                (a = t.type),
                (n = t.pendingProps),
                Mh(e, t, a, (n = t.elementType === a ? n : fs(a, n)), o)
              );
            case 3:
              e: {
                if ((Bh(t), null === e)) throw Error(s(387));
                (a = t.pendingProps),
                  (n = (i = t.memoizedState).element),
                  Es(e, t),
                  js(t, a, null, o);
                var h = t.memoizedState;
                if (((a = h.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: a,
                      isDehydrated: !1,
                      cache: h.cache,
                      pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                      transitions: h.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = qh(e, t, a, o, (n = lh(Error(s(423)), t)));
                    break e;
                  }
                  if (a !== n) {
                    t = qh(e, t, a, o, (n = lh(Error(s(424)), t)));
                    break e;
                  }
                  for (
                    ns = ln(t.stateNode.containerInfo.firstChild),
                      as = t,
                      ss = !0,
                      is = null,
                      o = Zs(t, null, a, o),
                      t.child = o;
                    o;

                  )
                    (o.flags = (-3 & o.flags) | 4096), (o = o.sibling);
                } else {
                  if ((ms(), a === n)) {
                    t = _h(e, t, o);
                    break e;
                  }
                  vh(e, t, a, o);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && ls(t),
                (a = t.type),
                (n = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (h = n.children),
                on(a, n)
                  ? (h = null)
                  : null !== i && on(a, i) && (t.flags |= 32),
                Wh(e, t),
                vh(e, t, h, o),
                t.child
              );
            case 6:
              return null === e && ls(t), null;
            case 13:
              return jh(e, t, o);
            case 4:
              return (
                ni(t, t.stateNode.containerInfo),
                (a = t.pendingProps),
                null === e ? (t.child = Qs(t, null, a, o)) : vh(e, t, a, o),
                t.child
              );
            case 11:
              return (
                (a = t.type),
                (n = t.pendingProps),
                Ih(e, t, a, (n = t.elementType === a ? n : fs(a, n)), o)
              );
            case 7:
              return vh(e, t, t.pendingProps, o), t.child;
            case 8:
            case 12:
              return vh(e, t, t.pendingProps.children, o), t.child;
            case 10:
              e: {
                if (
                  ((a = t.type._context),
                  (n = t.pendingProps),
                  (i = t.memoizedProps),
                  (h = n.value),
                  Hn(bs, a._currentValue),
                  (a._currentValue = h),
                  null !== i)
                )
                  if (ha(i.value, h)) {
                    if (i.children === n.children && !Bn.current) {
                      t = _h(e, t, o);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var r = i.dependencies;
                      if (null !== r) {
                        h = i.child;
                        for (var d = r.firstContext; null !== d; ) {
                          if (d.context === a) {
                            if (1 === i.tag) {
                              (d = Ds(-1, o & -o)).tag = 2;
                              var l = i.updateQueue;
                              if (null !== l) {
                                var u = (l = l.shared).pending;
                                null === u
                                  ? (d.next = d)
                                  : ((d.next = u.next), (u.next = d)),
                                  (l.pending = d);
                              }
                            }
                            (i.lanes |= o),
                              null !== (d = i.alternate) && (d.lanes |= o),
                              As(i.return, o, t),
                              (r.lanes |= o);
                            break;
                          }
                          d = d.next;
                        }
                      } else if (10 === i.tag)
                        h = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (h = i.return)) throw Error(s(341));
                        (h.lanes |= o),
                          null !== (r = h.alternate) && (r.lanes |= o),
                          As(h, o, t),
                          (h = i.sibling);
                      } else h = i.child;
                      if (null !== h) h.return = i;
                      else
                        for (h = i; null !== h; ) {
                          if (h === t) {
                            h = null;
                            break;
                          }
                          if (null !== (i = h.sibling)) {
                            (i.return = h.return), (h = i);
                            break;
                          }
                          h = h.return;
                        }
                      i = h;
                    }
                vh(e, t, n.children, o), (t = t.child);
              }
              return t;
            case 9:
              return (
                (n = t.type),
                (a = t.pendingProps.children),
                Ss(t, o),
                (a = a((n = Ws(n)))),
                (t.flags |= 1),
                vh(e, t, a, o),
                t.child
              );
            case 14:
              return (
                (n = fs((a = t.type), t.pendingProps)),
                Th(e, t, a, (n = fs(a.type, n)), o)
              );
            case 15:
              return Ah(e, t, t.type, t.pendingProps, o);
            case 17:
              return (
                (a = t.type),
                (n = t.pendingProps),
                (n = t.elementType === a ? n : fs(a, n)),
                Fh(e, t),
                (t.tag = 1),
                En(a) ? ((e = !0), Jn(t)) : (e = !1),
                Ss(t, o),
                Fs(t, a, n),
                zs(t, a, n, o),
                xh(null, t, a, !0, e, o)
              );
            case 19:
              return Rh(e, t, o);
            case 22:
              return Sh(e, t, o);
          }
          throw Error(s(156, t.tag));
        };
        var $d =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Kd(e) {
          this._internalRoot = e;
        }
        function Vd(e) {
          this._internalRoot = e;
        }
        function Qd(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zd(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Xd() {}
        function el(e, t, o, a, n) {
          var s = o._reactRootContainer;
          if (s) {
            var i = s;
            if ("function" === typeof n) {
              var h = n;
              n = function () {
                var e = _d(i);
                h.call(e);
              };
            }
            Fd(t, i, e, n);
          } else
            i = (function (e, t, o, a, n) {
              if (n) {
                if ("function" === typeof a) {
                  var s = a;
                  a = function () {
                    var e = _d(i);
                    s.call(e);
                  };
                }
                var i = Rd(t, a, e, 0, null, !1, 0, "", Xd);
                return (
                  (e._reactRootContainer = i),
                  (e[gn] = i.current),
                  Pa(8 === e.nodeType ? e.parentNode : e),
                  ud(),
                  i
                );
              }
              for (; (n = e.lastChild); ) e.removeChild(n);
              if ("function" === typeof a) {
                var h = a;
                a = function () {
                  var e = _d(r);
                  h.call(e);
                };
              }
              var r = Gd(e, 0, !1, null, 0, !1, 0, "", Xd);
              return (
                (e._reactRootContainer = r),
                (e[gn] = r.current),
                Pa(8 === e.nodeType ? e.parentNode : e),
                ud(function () {
                  Fd(t, r, o, a);
                }),
                r
              );
            })(o, t, e, n, a);
          return _d(i);
        }
        (Vd.prototype.render = Kd.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(s(409));
            Fd(e, t, null, null);
          }),
          (Vd.prototype.unmount = Kd.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                ud(function () {
                  Fd(null, e, null, null);
                }),
                  (t[gn] = null);
              }
            }),
          (Vd.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = At();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var o = 0;
                o < Et.length && 0 !== t && t < Et[o].priority;
                o++
              );
              Et.splice(o, 0, e), 0 === o && Jt(e);
            }
          }),
          (vt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var o = ut(t.pendingLanes);
                  0 !== o &&
                    (bt(t, 1 | o),
                    nd(t, Qe()),
                    0 === (6 & xr) && ((Rr = Qe() + 500), Rn()));
                }
                break;
              case 13:
                ud(function () {
                  var t = Bs(e, 1);
                  if (null !== t) {
                    var o = td();
                    ad(t, e, 1, o);
                  }
                }),
                  Ud(e, 1);
            }
          }),
          (It = function (e) {
            if (13 === e.tag) {
              var t = Bs(e, 134217728);
              if (null !== t) ad(t, e, 134217728, td());
              Ud(e, 134217728);
            }
          }),
          (Tt = function (e) {
            if (13 === e.tag) {
              var t = od(e),
                o = Bs(e, t);
              if (null !== o) ad(o, e, t, td());
              Ud(e, t);
            }
          }),
          (At = function () {
            return pt;
          }),
          (St = function (e, t) {
            var o = pt;
            try {
              return (pt = e), t();
            } finally {
              pt = o;
            }
          }),
          (Ie = function (e, t, o) {
            switch (t) {
              case "input":
                if ((Z(e, o), (t = o.name), "radio" === o.type && null != t)) {
                  for (o = e; o.parentNode; ) o = o.parentNode;
                  for (
                    o = o.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < o.length;
                    t++
                  ) {
                    var a = o[t];
                    if (a !== e && a.form === e.form) {
                      var n = In(a);
                      if (!n) throw Error(s(90));
                      U(a), Z(a, n);
                    }
                  }
                }
                break;
              case "textarea":
                se(e, o);
                break;
              case "select":
                null != (t = o.value) && oe(e, !!o.multiple, t, !1);
            }
          }),
          (Me = ld),
          (xe = ud);
        var tl = {
            usingClientEntryPoint: !1,
            Events: [kn, vn, In, We, He, ld],
          },
          ol = {
            findFiberByHostInstance: pn,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          al = {
            bundleType: ol.bundleType,
            version: ol.version,
            rendererPackageName: ol.rendererPackageName,
            rendererConfig: ol.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: k.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = _e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ol.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!nl.isDisabled && nl.supportsFiber)
            try {
              (nt = nl.inject(al)), (st = nl);
            } catch (le) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl),
          (t.createPortal = function (e, t) {
            var o =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Qd(t)) throw Error(s(200));
            return (function (e, t, o) {
              var a =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: I,
                key: null == a ? null : "" + a,
                children: e,
                containerInfo: t,
                implementation: o,
              };
            })(e, t, null, o);
          }),
          (t.createRoot = function (e, t) {
            if (!Qd(e)) throw Error(s(299));
            var o = !1,
              a = "",
              n = $d;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (o = !0),
                void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (n = t.onRecoverableError)),
              (t = Gd(e, 1, !1, null, 0, o, 0, a, n)),
              (e[gn] = t.current),
              Pa(8 === e.nodeType ? e.parentNode : e),
              new Kd(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(s(188));
              throw ((e = Object.keys(e).join(",")), Error(s(268, e)));
            }
            return (e = null === (e = _e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return ud(e);
          }),
          (t.hydrate = function (e, t, o) {
            if (!Zd(t)) throw Error(s(200));
            return el(null, e, t, !0, o);
          }),
          (t.hydrateRoot = function (e, t, o) {
            if (!Qd(e)) throw Error(s(405));
            var a = (null != o && o.hydratedSources) || null,
              n = !1,
              i = "",
              h = $d;
            if (
              (null !== o &&
                void 0 !== o &&
                (!0 === o.unstable_strictMode && (n = !0),
                void 0 !== o.identifierPrefix && (i = o.identifierPrefix),
                void 0 !== o.onRecoverableError && (h = o.onRecoverableError)),
              (t = Rd(t, null, e, 1, null != o ? o : null, n, 0, i, h)),
              (e[gn] = t.current),
              Pa(e),
              a)
            )
              for (e = 0; e < a.length; e++)
                (n = (n = (o = a[e])._getVersion)(o._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [o, n])
                    : t.mutableSourceEagerHydrationData.push(o, n);
            return new Vd(t);
          }),
          (t.render = function (e, t, o) {
            if (!Zd(t)) throw Error(s(200));
            return el(null, e, t, !1, o);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zd(e)) throw Error(s(40));
            return (
              !!e._reactRootContainer &&
              (ud(function () {
                el(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[gn] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ld),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, o, a) {
            if (!Zd(o)) throw Error(s(200));
            if (null == e || void 0 === e._reactInternals) throw Error(s(38));
            return el(e, t, o, !1, a);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, o) {
        "use strict";
        var a = o(164);
        (t.createRoot = a.createRoot), (t.hydrateRoot = a.hydrateRoot);
      },
      164: function (e, t, o) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = o(463));
      },
      374: function (e, t, o) {
        "use strict";
        var a = o(791),
          n = Symbol.for("react.element"),
          s = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          h =
            a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          r = { key: !0, ref: !0, __self: !0, __source: !0 };
        function d(e, t, o) {
          var a,
            s = {},
            d = null,
            l = null;
          for (a in (void 0 !== o && (d = "" + o),
          void 0 !== t.key && (d = "" + t.key),
          void 0 !== t.ref && (l = t.ref),
          t))
            i.call(t, a) && !r.hasOwnProperty(a) && (s[a] = t[a]);
          if (e && e.defaultProps)
            for (a in (t = e.defaultProps)) void 0 === s[a] && (s[a] = t[a]);
          return {
            $$typeof: n,
            type: e,
            key: d,
            ref: l,
            props: s,
            _owner: h.current,
          };
        }
        (t.Fragment = s), (t.jsx = d), (t.jsxs = d);
      },
      117: function (e, t) {
        "use strict";
        var o = Symbol.for("react.element"),
          a = Symbol.for("react.portal"),
          n = Symbol.for("react.fragment"),
          s = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          h = Symbol.for("react.provider"),
          r = Symbol.for("react.context"),
          d = Symbol.for("react.forward_ref"),
          l = Symbol.for("react.suspense"),
          u = Symbol.for("react.memo"),
          y = Symbol.for("react.lazy"),
          c = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          w = {};
        function f(e, t, o) {
          (this.props = e),
            (this.context = t),
            (this.refs = w),
            (this.updater = o || m);
        }
        function b() {}
        function p(e, t, o) {
          (this.props = e),
            (this.context = t),
            (this.refs = w),
            (this.updater = o || m);
        }
        (f.prototype.isReactComponent = {}),
          (f.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (f.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = f.prototype);
        var k = (p.prototype = new b());
        (k.constructor = p), g(k, f.prototype), (k.isPureReactComponent = !0);
        var v = Array.isArray,
          I = Object.prototype.hasOwnProperty,
          T = { current: null },
          A = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, a) {
          var n,
            s = {},
            i = null,
            h = null;
          if (null != t)
            for (n in (void 0 !== t.ref && (h = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              I.call(t, n) && !A.hasOwnProperty(n) && (s[n] = t[n]);
          var r = arguments.length - 2;
          if (1 === r) s.children = a;
          else if (1 < r) {
            for (var d = Array(r), l = 0; l < r; l++) d[l] = arguments[l + 2];
            s.children = d;
          }
          if (e && e.defaultProps)
            for (n in (r = e.defaultProps)) void 0 === s[n] && (s[n] = r[n]);
          return {
            $$typeof: o,
            type: e,
            key: i,
            ref: h,
            props: s,
            _owner: T.current,
          };
        }
        function W(e) {
          return "object" === typeof e && null !== e && e.$$typeof === o;
        }
        var H = /\/+/g;
        function M(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function x(e, t, n, s, i) {
          var h = typeof e;
          ("undefined" !== h && "boolean" !== h) || (e = null);
          var r = !1;
          if (null === e) r = !0;
          else
            switch (h) {
              case "string":
              case "number":
                r = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case a:
                    r = !0;
                }
            }
          if (r)
            return (
              (i = i((r = e))),
              (e = "" === s ? "." + M(r, 0) : s),
              v(i)
                ? ((n = ""),
                  null != e && (n = e.replace(H, "$&/") + "/"),
                  x(i, t, n, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (W(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: o,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      n +
                        (!i.key || (r && r.key === i.key)
                          ? ""
                          : ("" + i.key).replace(H, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((r = 0), (s = "" === s ? "." : s + ":"), v(e)))
            for (var d = 0; d < e.length; d++) {
              var l = s + M((h = e[d]), d);
              r += x(h, t, n, l, i);
            }
          else if (
            ((l = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (c && e[c]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof l)
          )
            for (e = l.call(e), d = 0; !(h = e.next()).done; )
              r += x((h = h.value), t, n, (l = s + M(h, d++)), i);
          else if ("object" === h)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return r;
        }
        function B(e, t, o) {
          if (null == e) return e;
          var a = [],
            n = 0;
          return (
            x(e, a, "", "", function (e) {
              return t.call(o, e, n++);
            }),
            a
          );
        }
        function q(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var O = { current: null },
          E = { transition: null },
          D = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: E,
            ReactCurrentOwner: T,
          };
        (t.Children = {
          map: B,
          forEach: function (e, t, o) {
            B(
              e,
              function () {
                t.apply(this, arguments);
              },
              o
            );
          },
          count: function (e) {
            var t = 0;
            return (
              B(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              B(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!W(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = f),
          (t.Fragment = n),
          (t.Profiler = i),
          (t.PureComponent = p),
          (t.StrictMode = s),
          (t.Suspense = l),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.cloneElement = function (e, t, a) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var n = g({}, e.props),
              s = e.key,
              i = e.ref,
              h = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (h = T.current)),
                void 0 !== t.key && (s = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var r = e.type.defaultProps;
              for (d in t)
                I.call(t, d) &&
                  !A.hasOwnProperty(d) &&
                  (n[d] = void 0 === t[d] && void 0 !== r ? r[d] : t[d]);
            }
            var d = arguments.length - 2;
            if (1 === d) n.children = a;
            else if (1 < d) {
              r = Array(d);
              for (var l = 0; l < d; l++) r[l] = arguments[l + 2];
              n.children = r;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: s,
              ref: i,
              props: n,
              _owner: h,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: r,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: h, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: d, render: e };
          }),
          (t.isValidElement = W),
          (t.lazy = function (e) {
            return {
              $$typeof: y,
              _payload: { _status: -1, _result: e },
              _init: q,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = E.transition;
            E.transition = {};
            try {
              e();
            } finally {
              E.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, o) {
            return O.current.useImperativeHandle(e, t, o);
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, o) {
            return O.current.useReducer(e, t, o);
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (t.useState = function (e) {
            return O.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, o) {
            return O.current.useSyncExternalStore(e, t, o);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, o) {
        "use strict";
        e.exports = o(117);
      },
      184: function (e, t, o) {
        "use strict";
        e.exports = o(374);
      },
      813: function (e, t) {
        "use strict";
        function o(e, t) {
          var o = e.length;
          e.push(t);
          e: for (; 0 < o; ) {
            var a = (o - 1) >>> 1,
              n = e[a];
            if (!(0 < s(n, t))) break e;
            (e[a] = t), (e[o] = n), (o = a);
          }
        }
        function a(e) {
          return 0 === e.length ? null : e[0];
        }
        function n(e) {
          if (0 === e.length) return null;
          var t = e[0],
            o = e.pop();
          if (o !== t) {
            e[0] = o;
            e: for (var a = 0, n = e.length, i = n >>> 1; a < i; ) {
              var h = 2 * (a + 1) - 1,
                r = e[h],
                d = h + 1,
                l = e[d];
              if (0 > s(r, o))
                d < n && 0 > s(l, r)
                  ? ((e[a] = l), (e[d] = o), (a = d))
                  : ((e[a] = r), (e[h] = o), (a = h));
              else {
                if (!(d < n && 0 > s(l, o))) break e;
                (e[a] = l), (e[d] = o), (a = d);
              }
            }
          }
          return t;
        }
        function s(e, t) {
          var o = e.sortIndex - t.sortIndex;
          return 0 !== o ? o : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var h = Date,
            r = h.now();
          t.unstable_now = function () {
            return h.now() - r;
          };
        }
        var d = [],
          l = [],
          u = 1,
          y = null,
          c = 3,
          m = !1,
          g = !1,
          w = !1,
          f = "function" === typeof setTimeout ? setTimeout : null,
          b = "function" === typeof clearTimeout ? clearTimeout : null,
          p = "undefined" !== typeof setImmediate ? setImmediate : null;
        function k(e) {
          for (var t = a(l); null !== t; ) {
            if (null === t.callback) n(l);
            else {
              if (!(t.startTime <= e)) break;
              n(l), (t.sortIndex = t.expirationTime), o(d, t);
            }
            t = a(l);
          }
        }
        function v(e) {
          if (((w = !1), k(e), !g))
            if (null !== a(d)) (g = !0), E(I);
            else {
              var t = a(l);
              null !== t && D(v, t.startTime - e);
            }
        }
        function I(e, o) {
          (g = !1), w && ((w = !1), b(W), (W = -1)), (m = !0);
          var s = c;
          try {
            for (
              k(o), y = a(d);
              null !== y && (!(y.expirationTime > o) || (e && !x()));

            ) {
              var i = y.callback;
              if ("function" === typeof i) {
                (y.callback = null), (c = y.priorityLevel);
                var h = i(y.expirationTime <= o);
                (o = t.unstable_now()),
                  "function" === typeof h
                    ? (y.callback = h)
                    : y === a(d) && n(d),
                  k(o);
              } else n(d);
              y = a(d);
            }
            if (null !== y) var r = !0;
            else {
              var u = a(l);
              null !== u && D(v, u.startTime - o), (r = !1);
            }
            return r;
          } finally {
            (y = null), (c = s), (m = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var T,
          A = !1,
          S = null,
          W = -1,
          H = 5,
          M = -1;
        function x() {
          return !(t.unstable_now() - M < H);
        }
        function B() {
          if (null !== S) {
            var e = t.unstable_now();
            M = e;
            var o = !0;
            try {
              o = S(!0, e);
            } finally {
              o ? T() : ((A = !1), (S = null));
            }
          } else A = !1;
        }
        if ("function" === typeof p)
          T = function () {
            p(B);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var q = new MessageChannel(),
            O = q.port2;
          (q.port1.onmessage = B),
            (T = function () {
              O.postMessage(null);
            });
        } else
          T = function () {
            f(B, 0);
          };
        function E(e) {
          (S = e), A || ((A = !0), T());
        }
        function D(e, o) {
          W = f(function () {
            e(t.unstable_now());
          }, o);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            g || m || ((g = !0), E(I));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (H = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return c;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return a(d);
          }),
          (t.unstable_next = function (e) {
            switch (c) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = c;
            }
            var o = c;
            c = t;
            try {
              return e();
            } finally {
              c = o;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var o = c;
            c = e;
            try {
              return t();
            } finally {
              c = o;
            }
          }),
          (t.unstable_scheduleCallback = function (e, n, s) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof s && null !== s
                ? (s = "number" === typeof (s = s.delay) && 0 < s ? i + s : i)
                : (s = i),
              e)
            ) {
              case 1:
                var h = -1;
                break;
              case 2:
                h = 250;
                break;
              case 5:
                h = 1073741823;
                break;
              case 4:
                h = 1e4;
                break;
              default:
                h = 5e3;
            }
            return (
              (e = {
                id: u++,
                callback: n,
                priorityLevel: e,
                startTime: s,
                expirationTime: (h = s + h),
                sortIndex: -1,
              }),
              s > i
                ? ((e.sortIndex = s),
                  o(l, e),
                  null === a(d) &&
                    e === a(l) &&
                    (w ? (b(W), (W = -1)) : (w = !0), D(v, s - i)))
                : ((e.sortIndex = h), o(d, e), g || m || ((g = !0), E(I))),
              e
            );
          }),
          (t.unstable_shouldYield = x),
          (t.unstable_wrapCallback = function (e) {
            var t = c;
            return function () {
              var o = c;
              c = t;
              try {
                return e.apply(this, arguments);
              } finally {
                c = o;
              }
            };
          });
      },
      296: function (e, t, o) {
        "use strict";
        e.exports = o(813);
      },
      630: function (e) {
        "use strict";
        e.exports = JSON.parse(
        );
      },
      132: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '[{"quote":"Don\'t cry because it\'s over, smile because it happened.","author":"Dr. Seuss"},{"quote":"You will face many defeats in life, but never let yourself be defeated.","author":"Maya Angelou"},{"quote":"Be yourself; everyone else is already taken.","author":"Oscar Wilde"},{"quote":"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\'s code.","author":" Dan Salomon"},{"quote":"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.","author":"Marilyn Monroe"},{"quote":"Be yourself; everyone else is already taken.","author":"Oscar Wilde"},{"quote":"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.","author":"Albert Einstein"},{"quote":"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.","author":"Bernard M. Baruch"},{"quote":"You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth.","author":"William W. Purkey"},{"quote":"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.","author":"Dr. Seuss"},{"quote":"A room without books is like a body without a soul.","author":"Marcus Tullius Cicero"},{"quote":"So many books, so little time.","author":"Frank Zappa"},{"quote":"You only live once, but if you do it right, once is enough.","author":"Mae West"},{"quote":"Be the change that you wish to see in the world.","author":"Mahatma Gandhi"},{"quote":"In three words I can sum up everything I\'ve learned about life: it goes on.","author":"Robert Frost"},{"quote":"Friendship ... is born at the moment when one man says to another \\"What! You too? I thought that no one but myself . . .","author":"C.S. Lewis,  The Four Loves"},{"quote":"If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.","author":"J.K. Rowling,  Harry Potter and the Goblet of Fire"},{"quote":"Don\u2019t walk in front of me\u2026 I may not followDon\u2019t walk behind me\u2026 I may not leadWalk beside me\u2026 just be my friend","author":"Albert Camus"},{"quote":"No one can make you feel inferior without your consent.","author":"Eleanor Roosevelt,  This is My Story"},{"quote":"If you tell the truth, you don\'t have to remember anything.","author":"Mark Twain"},{"quote":"A friend is someone who knows all about you and still loves you.","author":"Elbert Hubbard"},{"quote":"Always forgive your enemies; nothing annoys them so much.","author":"Oscar Wilde"},{"quote":"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","author":"Maya Angelou"},{"quote":"Live as if you were to die tomorrow. Learn as if you were to live forever.","author":"Mahatma Gandhi"},{"quote":"I am so clever that sometimes I don\'t understand a single word of what I am saying.","author":"Oscar Wilde,  The Happy Prince and Other Stories"},{"quote":"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","author":"Martin Luther King Jr.,  A Testament of Hope: The Essential Writings and Speeches"},{"quote":"To live is the rarest thing in the world. Most people exist, that is all.","author":"Oscar Wilde"},{"quote":"Without music, life would be a mistake.","author":"Friedrich Nietzsche"},{"quote":"Insanity is doing the same thing, over and over again, but expecting different results.","author":"Narcotics Anonymous"},{"quote":"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","author":"Ralph Waldo Emerson"},{"quote":"I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they\'re right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.","author":"Marilyn Monroe"},{"quote":"Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.","author":"H. Jackson Brown Jr.,  P.S. I Love You"},{"quote":"We accept the love we think we deserve.","author":"Stephen Chbosky,  The Perks of Being a Wallflower"},{"quote":"It is better to be hated for what you are than to be loved for what you are not.","author":"Andr\xe9 Gide,  Autumn Leaves"},{"quote":"Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.","author":"Marilyn Monroe"},{"quote":"All that is gold does not glitter,Not all those who wander are lost;The old that is strong does not wither,Deep roots are not reached by the frost.From the ashes a fire shall be woken,A light from the shadows shall spring;Renewed shall be blade that was broken,The crownless again shall be king.","author":"J.R.R. Tolkien,  The Fellowship of the Ring"},{"quote":"The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.","author":"Jane Austen,  Northanger Abbey"},{"quote":"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.","author":"Albert Einstein"},{"quote":"It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.","author":"Maurice Switzer"},{"quote":"As he read, I fell in love the way you fall asleep: slowly, and then all at once.","author":"John Green,  The Fault in Our Stars"},{"quote":"It is our choices, Harry, that show what we truly are, far more than our abilities.","author":"J.K. Rowling,  Harry Potter and the Chamber of Secrets"},{"quote":"Life is what happens to you while you\'re busy making other plans.","author":"Allen Saunders"},{"quote":"Good friends, good books, and a sleepy conscience: this is the ideal life.","author":"Mark Twain"},{"quote":"Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).","author":"Mark Twain"},{"quote":"It does not do to dwell on dreams and forget to live.","author":"J.K. Rowling,  Harry Potter and the Sorcerer\'s Stone"},{"quote":"The fool doth think he is wise, but the wise man knows himself to be a fool.","author":"William Shakespeare,  As You Like It"},{"quote":"A woman is like a tea bag; you never know how strong it is until it\'s in hot water.","author":"Eleanor Roosevelt"},{"quote":"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.","author":"Bil Keane"},{"quote":"We are all in the gutter, but some of us are looking at the stars.","author":"Oscar Wilde,  Lady Windermere\'s Fan"},{"quote":"If you don\'t stand for something you will fall for anything.","author":"Gordon A. Eadie"},{"quote":"The man who does not read has no advantage over the man who cannot read.","author":"Mark Twain"},{"quote":"I have not failed. I\'ve just found 10,000 ways that won\'t work.","author":"Thomas A. Edison"},{"quote":"It is not a lack of love, but a lack of friendship that makes unhappy marriages.","author":"Friedrich Nietzsche"},{"quote":"The opposite of love is not hate, it\'s indifference. The opposite of art is not ugliness, it\'s indifference. The opposite of faith is not heresy, it\'s indifference. And the opposite of life is not death, it\'s indifference.","author":"Elie Wiesel"},{"quote":"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.","author":"Neil Gaiman,  Coraline"},{"quote":"Outside of a dog, a book is man\'s best friend. Inside of a dog it\'s too dark to read.","author":"Groucho Marx,  The Essential Groucho: Writings For By And About Groucho Marx"},{"quote":"I may not have gone where I intended to go, but I think I have ended up where I needed to be.","author":"Douglas Adams,  The Long Dark Tea-Time of the Soul"},{"quote":"I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.","author":"Albert Einstein"},{"quote":"A day without sunshine is like, you know, night.","author":"Steve Martin"},{"quote":"I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.","author":"Dr. Seuss"},{"quote":"Never put off till tomorrow what may be done day after tomorrow just as well.","author":"Mark Twain"},{"quote":"I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.","author":"Pablo Neruda,  100 Love Sonnets"},{"quote":"I solemnly swear that I am up to no good.","author":"J.K. Rowling,  Harry Potter and the Prisoner of Azkaban"},{"quote":"That which does not kill us makes us stronger.","author":"Friedrich Nietzsche"},{"quote":"Have you ever been in love? Horrible isn\'t it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.","author":"Neil Gaiman,  The Sandman, Vol. 9: The Kindly Ones"},{"quote":"Love all, trust a few, do wrong to none.","author":"William Shakespeare,  All\'s Well That Ends Well"},{"quote":"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You\'re on your own. And you know what you know. And YOU are the one who\'ll decide where to go...","author":"Dr. Seuss,  Oh, The Places You\'ll Go!"},{"quote":"If you judge people, you have no time to love them.","author":"Mother Teresa"},{"quote":"There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.","author":"Sarah Dessen,  The Truth About Forever"},{"quote":"For every minute you are angry you lose sixty seconds of happiness.","author":"Ralph Waldo Emerson"},{"quote":"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.","author":"Lao Tzu"},{"quote":"My thoughts are stars I cannot fathom into constellations.","author":"John Green,  The Fault in Our Stars"},{"quote":"I love deadlines. I love the whooshing noise they make as they go by.","author":"Douglas Adams,  The Salmon of Doubt"},{"quote":"It is never too late to be what you might have been.","author":"George Eliot"},{"quote":"Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.","author":"Garrison Keillor"},{"quote":"A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.","author":"George R.R. Martin,  A Dance with Dragons"},{"quote":"I\'m not upset that you lied to me, I\'m upset that from now on I can\'t believe you.","author":"Friedrich Nietzsche"},{"quote":"If you can\'t explain it to a six year old, you don\'t understand it yourself.","author":"Albert Einstein"},{"quote":"Women and cats will do as they please, and men and dogs should relax and get used to the idea.","author":"Robert A. Heinlein"},{"quote":"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.","author":"J.K. Rowling,  Harry Potter and the Sorcerer\'s Stone"},{"quote":"Love is that condition in which the happiness of another person is essential to your own.","author":"Robert A. Heinlein,  Stranger in a Strange Land"},{"quote":"Sometimes the questions are complicated and the answers are simple.","author":"Dr. Seuss"},{"quote":"I have always imagined that Paradise will be a kind of library.","author":"Jorge Luis Borges"},{"quote":"We read to know we\'re not alone.","author":"William Nicholson,  Shadowlands"},{"quote":"You love me. Real or not real?\\"I tell him, \\"Real.","author":"Suzanne Collins,  Mockingjay"},{"quote":"We don\'t see things as they are, we see them as we are.","author":"Ana\xefs Nin"},{"quote":"Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.","author":"Jim Henson"},{"quote":"All you need is love. But a little chocolate now and then doesn\'t hurt.","author":"Charles M. Schulz"},{"quote":"Everything you can imagine is real.","author":"Pablo Picasso"},{"quote":"There is no greater agony than bearing an untold story inside you.","author":"Maya Angelou,  I Know Why the Caged Bird Sings"},{"quote":"Today you are You, that is truer than true. There is no one alive who is Youer than You.","author":"Dr. Seuss,  Happy Birthday to You!"},{"quote":"Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.","author":"John Green,  The Fault in Our Stars"},{"quote":"Never trust anyone who has not brought a book with them.","author":"Lemony Snicket,  Horseradish"},{"quote":"Whenever I feel the need to exercise, I lie down until it goes away.","author":"Paul Terry"},{"quote":"I\'m not afraid of death; I just don\'t want to be there when it happens.","author":"Woody Allen"},{"quote":"I am nothing special, of this I am sure. I am a common man with common thoughts and I\'ve led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but I\'ve loved another with all my heart and soul, and to me, this has always been enough..","author":"Nicholas Sparks,  The Notebook"},{"quote":"If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.","author":"Albert Einstein"},{"quote":"Have you fallen in love with the wrong person yet?\'Jace said, \\"Unfortunately, Lady of the Haven, my one true love remains myself.\\"...\\"At least,\\"she said, \\"you don\'t have to worry about rejection, Jace Wayland.\\"\\"Not necessarily. I turn myself down occasionally, just to keep it interesting.","author":"Cassandra Clare,  City of Bones"},{"quote":"If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.","author":"Joan Powers,  Pooh\'s Little Instruction Book"},{"quote":"Logic will get you from A to Z; imagination will get you everywhere.","author":"Albert Einstein"},{"quote":"One good thing about music, when it hits you, you feel no pain.","author":"Bob Marley"},{"quote":"The more that you read, the more things you will know. The more that you learn, the more places you\'ll go.","author":"Dr. Seuss,  I Can Read With My Eyes Shut!"},{"quote":"Not all of us can do great things. But we can do small things with great love.","author":"Mother Teresa"},{"quote":"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.","author":"J.K. Rowling"},{"quote":"You don\'t get to choose if you get hurt in this world...but you do have some say in who hurts you. I like my choices.","author":"John Green,  The Fault in Our Stars"},{"quote":"You don\u2019t have a soul, Doctor. You are a soul. You have a body, temporarily.","author":"Walter M. Miller Jr.,  A Canticle for Leibowitz"},{"quote":"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.","author":"Bob Marley"},{"quote":"Folks are usually about as happy as they make their minds up to be.","author":"Abraham Lincoln"},{"quote":"Love looks not with the eyes, but with the mind,And therefore is winged Cupid painted blind.","author":"William Shakespeare,  A Midsummer Night\'s Dream"},{"quote":"If you only read the books that everyone else is reading, you can only think what everyone else is thinking.","author":"Haruki Murakami,  Norwegian Wood"},{"quote":"Love is like the wind, you can\'t see it but you can feel it.","author":"Nicholas Sparks,  A Walk to Remember"},{"quote":"Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?","author":"J.K. Rowling,  Harry Potter and the Deathly Hallows"},{"quote":"Sometimes people are beautiful.Not in looks.Not in what they say.Just in what they are.","author":"Markus Zusak,  I Am the Messenger"},{"quote":"You can never get a cup of tea large enough or a book long enough to suit me.","author":"C.S. Lewis"},{"quote":"If one cannot enjoy reading a book over and over again, there is no use in reading it at all.","author":"Oscar Wilde"},{"quote":"The difference between genius and stupidity is: genius has its limits.","author":"Alexandre Dumas-fils"},{"quote":"I would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.","author":"Virginia Woolf"},{"quote":"Do what you can, with what you have, where you are.","author":"Theodore Roosevelt"},{"quote":"If you can make a woman laugh, you can make her do anything.","author":"Marilyn Monroe"},{"quote":"To the well-organized mind, death is but the next great adventure.","author":"J.K. Rowling,  Harry Potter and the Sorcerer\'s Stone"},{"quote":"Listen to the mustn\'ts, child. Listen to the don\'ts. Listen to the shouldn\'ts, the impossibles, the won\'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.","author":"Shel Silverstein"},{"quote":"We\u2019re all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness\u2014and call it love\u2014true love.","author":"Robert Fulghum,  True Love"},{"quote":"I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.","author":"Groucho Marx"},{"quote":"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.","author":"Helen Keller"},{"quote":"Life isn\'t about finding yourself. Life is about creating yourself.","author":"George Bernard Shaw"},{"quote":"You don\'t love someone because they\'re perfect, you love them in spite of the fact that they\'re not.","author":"Jodi Picoult,  My Sister\'s Keeper"},{"quote":"He\'s like a drug for you, Bella.","author":"Stephenie Meyer,  Eclipse"},{"quote":"A wise girl kisses but doesn\'t love, listens but doesn\'t believe, and leaves before she is left.","author":"Marilyn Monroe"},{"quote":"The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.","author":"Marilyn Monroe"},{"quote":"Life is like riding a bicycle. To keep your balance, you must keep moving.","author":"Albert Einstein"},{"quote":"Some infinities are bigger than other infinities.","author":"John Green,  The Fault in Our Stars"},{"quote":"Love never dies a natural death. It dies because we don\'t know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.","author":"Ana\xefs Nin"},{"quote":"There is no friend as loyal as a book.","author":"Ernest Hemingway"},{"quote":"Who are you to judge the life I live?I know I\'m not perfect-and I don\'t live to be-but before you start pointing fingers...make sure you hands are clean!","author":"Bob Marley"},{"quote":"The story so far:In the beginning the Universe was created.This has made a lot of people very angry and been widely regarded as a bad move.","author":"Douglas Adams,  The Restaurant at the End of the Universe"},{"quote":"Time you enjoy wasting is not wasted time.","author":"Marthe Troly-Curtin,  Phrynette Married"},{"quote":"Piglet sidled up to Pooh from behind. \\"Pooh!\\"he whispered.\\"Yes, Piglet?\\"\\"Nothing,\\"said Piglet, taking Pooh\'s paw. \\"I just wanted to be sure of you.","author":"A.A. Milne,  The House at Pooh Corner"},{"quote":"I am good, but not an angel. I do sin, but I am not the devil. I am just a small girl in a big world trying to find someone to love.","author":"Marilyn Monroe"},{"quote":"There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.","author":"Jane Austen,  Northanger Abbey"},{"quote":"Do one thing every day that scares you.","author":"Eleanor Roosevelt"},{"quote":"The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.","author":"Terry Pratchett,  Diggers"},{"quote":"If I had a flower for every time I thought of you...I could walk through my garden forever.","author":"Alfred Lord Tennyson"},{"quote":"It matters not what someone is born, but what they grow to be.","author":"J.K. Rowling,  Harry Potter and the Goblet of Fire"},{"quote":"Some people never go crazy. What truly horrible lives they must lead.","author":"Charles Bukowski"},{"quote":"Reality continues to ruin my life.","author":"Bill Watterson,  The Complete Calvin and Hobbes"},{"quote":"Success is not final, failure is not fatal: it is the courage to continue that counts.","author":"Winston Churchill"},{"quote":"It is what you read when you don\'t have to that determines what you will be when you can\'t help it.","author":"Oscar Wilde"},{"quote":"There is no pretending,\\"Jace said with absolute clarity. \\"I love you, and I will love you until I die, and if there is life after that, I\'ll love you then.","author":"Cassandra Clare,  City of Glass"},{"quote":"So, this is my life. And I want you to know that I am both happy and sad and I\'m still trying to figure out how that could be.","author":"Stephen Chbosky,  The Perks of Being a Wallflower"},{"quote":"I love mankind ... it\'s people I can\'t stand!!","author":"Charles M. Schulz,  The Complete Peanuts, Vol. 5: 1959-1960"},{"quote":"Things change. And friends leave. Life doesn\'t stop for anybody.","author":"Stephen Chbosky,  The Perks of Being a Wallflower"},{"quote":"Remember, we\'re madly in love, so it\'s all right to kiss me anytime you feel like it.","author":"Suzanne Collins,  The Hunger Games"},{"quote":"You don\u2019t forget the face of the person who was your last hope.","author":"Suzanne Collins,  The Hunger Games"},{"quote":"The only way out of the labyrinth of suffering is to forgive.","author":"John Green,  Looking for Alaska"},{"quote":"Go to heaven for the climate and hell for the company.","author":"Benjamin Franklin Wade"},{"quote":"The reason I talk to myself is because I\u2019m the only one whose answers I accept.","author":"George Carlin"},{"quote":"I am free of all prejudice. I hate everyone equally.","author":"W.C. Fields"},{"quote":"What really knocks me out is a book that, when you\'re all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn\'t happen much, though.","author":"J.D. Salinger,  The Catcher in the Rye"},{"quote":"What is success? I think it is a mixture of having a flair for the thing that you are doing; knowing that it is not enough, that you have got to have hard work and a certain sense of purpose.","author":"Margaret Thatcher"},{"quote":"At the moment of death I hope to be surprised.","author":"Ivan Illich"},{"quote":"Unrest of spirit is a mark of life.","author":"Karl A. Menninger"},{"quote":"Humor is something that thrives between man\'s aspirations and his limitations. There is more logic in humor than in anything else. Because, you see, humor is truth.","author":"Victor Borge"},{"quote":"Literature is the art of discovering something extraordinary about ordinary people, and saying with ordinary words something extraordinary.","author":"Boris Pasternak"},{"quote":"If everyone is moving forward together, then success takes care of itself.","author":"Henry Ford"},{"quote":"Hope is the only universal liar who never loses his reputation for veracity.","author":"Robert Green Ingersoll"},{"quote":"Ships that pass in the night, and speak each other in passing, only a signal shown, and a distant voice in the darkness; So on the ocean of life, we pass and speak one another, only a look and a voice, then darkness again and a silence.","author":"Henry Wadsworth Longfellow"},{"quote":"Love is the beauty of the soul.","author":"Saint Augustine"},{"quote":"Wit - the salt with which the American humorist spoils his intellectual cookery by leaving it out.","author":"Ambrose Bierce"},{"quote":"Politics is the art of controlling your environment.","author":"Hunter S. Thompson"},{"quote":"He has achieved success who has worked well, laughed often, and loved much.","author":"Elbert Hubbard"},{"quote":"Hope is the last thing a person does before they are defeated.","author":"Henry Rollins"},{"quote":"Life is a gift, given in trust - like a child.","author":"Anne Morrow Lindbergh"},{"quote":"Where there is love there is life.","author":"Mahatma Gandhi"},{"quote":"Humor brings insight and tolerance. Irony brings a deeper and less friendly understanding.","author":"Agnes Repplier"},{"quote":"Advertising is the art of convincing people to spend money they don\'t have for something they don\'t need.","author":"Will Rogers"},{"quote":"Success makes so many people hate you. I wish it wasn\'t that way. It would be wonderful to enjoy success without seeing envy in the eyes of those around you.","author":"Marilyn Monroe"},{"quote":"The world is bad but not without hope. It is only hopeless when you look at it from an ideal viewpoint.","author":"Friedrich Durrenmatt"},{"quote":"Life is wasted on the living.","author":"Douglas Adams"},{"quote":"A kiss is a lovely trick designed by nature to stop speech when words become superfluous.","author":"Ingrid Bergman"},{"quote":"Humor can alter any situation and help us cope at the very instant we are laughing.","author":"Allen Klein"},{"quote":"Just as pure abstract art is not dogmatic, neither is it decorative.","author":"Piet Mondrian"},{"quote":"Success comes from knowing that you did your best to become the best that you are capable of becoming.","author":"John Wooden"},{"quote":"It\'s time to get real, folks. Hope and change ain\'t working. Hope and change is not a solution. Hope and change is not a job.","author":"Herman Cain"},{"quote":"Life in abundance comes only through great love.","author":"Elbert Hubbard"},{"quote":"Life is the flower for which love is the honey.","author":"Victor Hugo"},{"quote":"The best way to make your audience laugh is to start laughing yourself.","author":"Oliver Goldsmith"},{"quote":"Don\'t only practice your art, but force your way into its secrets; art deserves that, for it and knowledge can raise man to the Divine.","author":"Ludwig van Beethoven"},{"quote":"The most important single ingredient in the formula of success is knowing how to get along with people.","author":"Theodore Roosevelt"},{"quote":"I always believe things are going to work out.","author":"Francoise Sagan"},{"quote":"Life is a culmination of the past, an awareness of the present, an indication of a future beyond knowledge, the quality that gives a touch of divinity to matter.","author":"Charles Lindbergh"},{"quote":"Love is being stupid together.","author":"Paul Valery"},{"quote":"Comedy has to be based on truth. You take the truth and you put a little curlicue at the end.","author":"Sid Caesar"},{"quote":"Architecture is the art of how to waste space.","author":"Philip Johnson"},{"quote":"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.","author":"Leonardo da Vinci"},{"quote":"We often call a certainty a hope, to bring it luck.","author":"Elizabeth Bibesco"},{"quote":"To live is so startling it leaves little time for anything else.","author":"Emily Dickinson"},{"quote":"You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. You yourself, as much as anybody in the entire universe deserve your love and affection.","author":"Buddha"},{"quote":"There seems to be no lengths to which humorless people will not go to analyze humor. It seems to worry them.","author":"Robert Benchley"},{"quote":"People discuss my art and pretend to understand as if it were necessary to understand, when it\'s simply necessary to love.","author":"Claude Monet"},{"quote":"Always bear in mind that your own resolution to succeed is more important than any other.","author":"Abraham Lincoln"},{"quote":"Hope is independent of the apparatus of logic.","author":"Norman Cousins"},{"quote":"Seventy percent of success in life is showing up.","author":"Woody Allen"},{"quote":"We\'re born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we\'re not alone.","author":"Orson Welles"},{"quote":"Great men are rarely isolated mountain peaks; they are the summits of ranges.","author":"Thomas W. Higginson"},{"quote":"Space is the breath of art.","author":"Frank Lloyd Wright"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When love and skill work together, expect a masterpiece.","author":"John Ruskin"},{"quote":"Easter is meant to be a symbol of hope, renewal, and new life.","author":"Janine di Giovanni"},{"quote":"To be able to look back upon one\'s past life with satisfaction is to live twice.","author":"Lord Acton"},{"quote":"The course of true love never did run smooth.","author":"William Shakespeare"},{"quote":"Humor is merely tragedy standing on its head with its pants torn.","author":"Irvin S. Cobb"},{"quote":"Science fiction is any idea that occurs in the head and doesn\'t exist yet, but soon will, and will change everything for everybody, and nothing will ever be the same again. As soon as you have an idea that changes some small part of the world you are writing science fiction. It is always the art of the possible, never the impossible.","author":"Ray Bradbury"},{"quote":"You don\'t have to be a genius or a visionary or even a college graduate to be successful. You just need a framework and a dream.","author":"Michael Dell"},{"quote":"Outside of the cross of Jesus Christ, there is no hope in this world. That cross and resurrection at the core of the Gospel is the only hope for humanity. Wherever you go, ask God for wisdom on how to get that Gospel in, even in the toughest situations of life.","author":"Ravi Zacharias"},{"quote":"Any life is made up of a single moment, the moment in which a man finds out, once and for all, who he is.","author":"Jorge Luis Borges"},{"quote":"Love is like a beautiful flower which I may not touch, but whose fragrance makes the garden a place of delight just the same.","author":"Helen Keller"},{"quote":"Wit is the lowest form of humor.","author":"Alexander Pope"},{"quote":"There is nothing in the world of art like the songs mother used to sing.","author":"Billy Sunday"},{"quote":"Success isn\'t measured by money or power or social rank. Success is measured by your discipline and inner peace.","author":"Mike Ditka"},{"quote":"Infuse your life with action. Don\'t wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.","author":"Bradley Whitford"},{"quote":"Wrong life cannot be lived rightly.","author":"Theodor Adorno"},{"quote":"The most powerful weapon on earth is the human soul on fire.","author":"Ferdinand Foch"},{"quote":"It is the ability to take a joke, not make one, that proves you have a sense of humor.","author":"Max Eastman"},{"quote":"Every bit of me is devoted to love and art. And I aspire to try to be a teacher to my young fans who feel just like I felt when I was younger. I just felt like a freak. I guess what I\'m trying to say is I\'m trying to liberate them, I want to free them of their fears and make them feel that they can make their own space in the world.","author":"Lady Gaga"},{"quote":"There is nothing better than a friend, unless it is a friend with chocolate.","author":"Linda Grayson"},{"quote":"What\'s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.","author":"Bob Dylan"},{"quote":"It is difficult to say what is impossible, for the dream of yesterday is the hope of today and the reality of tomorrow.","author":"Robert H. Schuller"},{"quote":"You have succeeded in life when all you really want is only what you really need.","author":"Vernon Howard"},{"quote":"Love is when he gives you a piece of your soul, that you never knew was missing.","author":"Torquato Tasso"},{"quote":"A humorist is a person who feels bad, but who feels good about it.","author":"Don Herold"},{"quote":"The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.","author":"Albert Einstein"},{"quote":"What a slut time is. She screws everybody.","author":"John Green,  The Fault in Our Stars"},{"quote":"You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one.","author":"John Lennon"},{"quote":"To be successful, you have to have your heart in your business and your business in your heart.","author":"Thomas J. Watson"},{"quote":"He who has health, has hope; and he who has hope, has everything.","author":"Thomas Carlyle"},{"quote":"The greatest trap in our life is not success, popularity or power, but self-rejection.","author":"Henri Nouwen"},{"quote":"We love life, not because we are used to living but because we are used to loving.","author":"Friedrich Nietzsche"},{"quote":"Women, as they grow older, rely more and more on cosmetics. Men, as they grow older, rely more and more on a sense of humor.","author":"George Jean Nathan"},{"quote":"I consider skateboarding an art form, a lifestyle and a sport. \'Action sport\' would be the least offensive categorization.","author":"Tony Hawk"},{"quote":"The size of your success is measured by the strength of your desire; the size of your dream; and how you handle disappointment along the way.","author":"Robert Kiyosaki"},{"quote":"All that I am, or hope to be, I owe to my angel mother.","author":"Abraham Lincoln"},{"quote":"Character develops itself in the stream of life.","author":"Johann Wolfgang von Goethe"},{"quote":"Love and compassion are necessities, not luxuries. Without them humanity cannot survive.","author":"Dalai Lama"},{"quote":"Humor is perhaps a sense of intellectual perspective: an awareness that some things are really important, others not; and that the two kinds are most oddly jumbled in everyday affairs.","author":"Christopher Morley"},{"quote":"Tact is the art of making a point without making an enemy.","author":"Isaac Newton"},{"quote":"If you want to be truly successful invest in yourself to get the knowledge you need to find your unique factor. When you find it and focus on it and persevere your success will blossom.","author":"Sydney Madwed"},{"quote":"The great gift of Easter is hope - Christian hope which makes us have that confidence in God, in his ultimate triumph, and in his goodness and love, which nothing can shake.","author":"Basil Hume"},{"quote":"Life consists not in holding good cards but in playing those you hold well.","author":"Josh Billings"},{"quote":"Love has reasons which reason cannot understand.","author":"Blaise Pascal"},{"quote":"What a strange world this would be if we all had the same sense of humor.","author":"Bernard Williams"},{"quote":"Where thou art, that is home.","author":"Emily Dickinson"},{"quote":"Formal education will make you a living; self-education will make you a fortune.","author":"Jim Rohn"},{"quote":"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.","author":"Helen Keller"},{"quote":"The greatest use of a life is to spend it on something that will outlast it.","author":"William James"},{"quote":"Love is an irresistible desire to be irresistibly desired.","author":"Robert Frost"},{"quote":"One can never speak enough of the virtues, the dangers, the power of shared laughter.","author":"Francoise Sagan"},{"quote":"Filmmaking, like any other art, is a very profound means of human communication; beyond the professional pleasure of succeeding or the pain of failing, you do want your film to be seen, to communicate itself to other people.","author":"Kenneth Lonergan"},{"quote":"Think twice before you speak, because your words and influence will plant the seed of either success or failure in the mind of another.","author":"Napoleon Hill"},{"quote":"Black and white are the colors of photography. To me they symbolize the alternatives of hope and despair to which mankind is forever subjected.","author":"Robert Frank"},{"quote":"Life is a succession of moments, to live each one is to succeed.","author":"Corita Kent"},{"quote":"I love that feeling of being in love, the effect of having butterflies when you wake up in the morning. That is special.","author":"Jennifer Aniston"},{"quote":"Wit is an explosion of the compound spirit.","author":"Karl Wilhelm Friedrich Schlegel"},{"quote":"The art of simplicity is a puzzle of complexity.","author":"Douglas Horton"},{"quote":"In order to attain the impossible, one must attempt the absurd.","author":"Miguel de Cervantes"},{"quote":"A good teacher can inspire hope, ignite the imagination, and instill a love of learning.","author":"Brad Henry"},{"quote":"Fortunately analysis is not the only way to resolve inner conflicts. Life itself still remains a very effective therapist.","author":"Karen Horney"},{"quote":"Love is the flower you\'ve got to let grow.","author":"John Lennon"},{"quote":"This I conceive to be the chemical function of humor: to change the character of our thought.","author":"Lin Yutang"},{"quote":"In art, the obvious is a sin.","author":"Edward Dmytryk"},{"quote":"Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.","author":"Ralph Waldo Emerson"},{"quote":"Success depends upon previous preparation, and without such preparation there is sure to be failure.","author":"Confucius"},{"quote":"There was never a night or a problem that could defeat sunrise or hope.","author":"Bernard Williams"},{"quote":"The chief danger in life is that you may take too many precautions.","author":"Alfred Adler"},{"quote":"I believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience. That laughter is the only cure for grief. And I believe that love is stronger than death.","author":"Robert Fulghum"},{"quote":"Laughter is involuntary. If it\'s funny you laugh.","author":"Tom Lehrer"},{"quote":"The art of healing comes from nature, not from the physician. Therefore the physician must start from nature, with an open mind.","author":"Paracelsus"},{"quote":"Success is finding satisfaction in giving a little more than you take.","author":"Christopher Reeve"},{"quote":"You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.","author":"Woodrow Wilson"},{"quote":"It takes half your life before you discover life is a do-it-yourself project.","author":"Napoleon Hill"},{"quote":"What force is more potent than love?","author":"Igor Stravinsky"},{"quote":"The satirist shoots to kill while the humorist brings his prey back alive and eventually releases him again for another chance.","author":"Peter De Vries"},{"quote":"Minimal art went nowhere.","author":"Sol LeWitt"},{"quote":"The secrets of success are a good wife and a steady job. My wife told me.","author":"Howard Nemerov"},{"quote":"Forgiving does not erase the bitter past. A healed memory is not a deleted memory. Instead, forgiving what we cannot forget creates a new way to remember. We change the memory of our past into a hope for our future.","author":"Lewis B. Smedes"},{"quote":"What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.","author":"Wayne Dyer"},{"quote":"Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.","author":"Henry Van Dyke"},{"quote":"A sense of humor is the ability to understand a joke - and that the joke is oneself.","author":"Clifton Fadiman"},{"quote":"Perhaps it\'s good for one to suffer. Can an artist do anything if he\'s happy? Would he ever want to do anything? What is art, after all, but a protest against the horrible inclemency of life?","author":"Aldous Huxley"},{"quote":"Frustration, although quite painful at times, is a very positive and essential part of success.","author":"Bo Bennett"},{"quote":"Where there is no vision, there is no hope.","author":"George Washington Carver"},{"quote":"Life is never fair, and perhaps it is a good thing for most of us that it is not.","author":"Oscar Wilde"},{"quote":"If you can learn to love yourself and all the flaws, you can love other people so much better. And that makes you so happy.","author":"Kristin Chenoweth"},{"quote":"Puns are a form of humor with words.","author":"Guillermo Cabrera Infante"},{"quote":"I think you can do anything with comics that you could do in just about any art form.","author":"Harvey Pekar"},{"quote":"Formula for success: rise early, work hard, strike oil.","author":"J. Paul Getty"},{"quote":"A leader is a dealer in hope.","author":"Napoleon Bonaparte"},{"quote":"Life must be lived as play.","author":"Plato"},{"quote":"Love is a force more formidable than any other. It is invisible - it cannot be seen or measured, yet it is powerful enough to transform you in a moment, and offer you more joy than any material possession could.","author":"Barbara de Angelis"},{"quote":"There is no defense against adverse fortune which is so effectual as an habitual sense of humor.","author":"Thomas W. Higginson"},{"quote":"When the bright angel dominates, out comes a great work of art, a Michelangelo David or a Beethoven symphony.","author":"Madeleine L\'Engle"},{"quote":"There is nothing to writing. All you do is sit down at a typewriter and bleed.","author":"Ernest Hemingway"},{"quote":"If you want to achieve things in life, you\'ve just got to do them, and if you\'re talented and smart, you\'ll succeed.","author":"Juliana Hatfield"},{"quote":"Imagine all the people living life in peace. You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us, and the world will be as one.","author":"John Lennon"},{"quote":"We live in the world when we love it.","author":"Rabindranath Tagore"},{"quote":"You, yourself, as much as anybody in the entire universe, deserve your love and affection.","author":"Buddha"},{"quote":"All art constantly aspires towards the condition of music.","author":"Walter Pater"},{"quote":"The marks humans leave are too often scars.","author":"John Green,  The Fault in Our Stars"},{"quote":"The question isn\'t who is going to let me; it\'s who is going to stop me.","author":"Ayn Rand"},{"quote":"The greatest sign of success for a teacher... is to be able to say, \'The children are now working as if I did not exist.\'","author":"Maria Montessori"},{"quote":"Pakistan not only means freedom and independence but the Muslim Ideology which has to be preserved, which has come to us as a precious gift and treasure and which, we hope other will share with us.","author":"Muhammad Ali Jinnah"},{"quote":"The man who has no inner-life is a slave to his surroundings.","author":"Henri Frederic Amiel"},{"quote":"Love is a smoke made with the fume of sighs.","author":"William Shakespeare"},{"quote":"You can\'t be funny if you don\'t have good material.","author":"Matt LeBlanc"},{"quote":"I am my own experiment. I am my own work of art.","author":"Madonna Ciccone"},{"quote":"Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming.","author":"John Wooden"},{"quote":"I hope everyone that is reading this is having a really good day. And if you are not, just know that in every new minute that passes you have an opportunity to change that.","author":"Gillian Anderson"},{"quote":"It is often said that before you die your life passes before your eyes. It is in fact true. It\'s called living.","author":"Terry Pratchett"},{"quote":"\'Tis better to have loved and lost than never to have loved at all.","author":"Alfred Lord Tennyson"},{"quote":"Our humor turns our anger into a fine art.","author":"Mary Kay Blakely"},{"quote":"I am a real person that cares about his art and cares about what he\'s doing - I have a heart and a soul and want to touch people and give.","author":"LL Cool J"},{"quote":"Coming together is a beginning; keeping together is progress; working together is success.","author":"Henry Ford"},{"quote":"But what we call our despair is often only the painful eagerness of unfed hope.","author":"George Eliot"},{"quote":"Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.","author":"Lao Tzu"},{"quote":"Even a true artist does not always produce art.","author":"Carroll O\'Connor"},{"quote":"It doesn\'t take many people to have a bad sense of humor to get in trouble at a corporation.","author":"Scott Adams"},{"quote":"Hope is the feeling we have that the feeling we have is not permanent.","author":"Mignon McLaughlin"},{"quote":"Smile in the mirror. Do that every morning and you\'ll start to see a big difference in your life.","author":"Yoko Ono"},{"quote":"Every artist writes his own autobiography.","author":"Havelock Ellis"},{"quote":"I\'ve got a great sense of humor.","author":"Anthony Hopkins"},{"quote":"I consider myself Istanbul\'s storyteller. My subject matter is my town. I consider it my job to explore the hidden patterns of my city\'s clandestine corners, its shady, mysterious places, the things I love.","author":"Orhan Pamuk"},{"quote":"I have never let my schooling interfere with my education.","author":"Mark Twain"},{"quote":"The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.","author":"Vince Lombardi"},{"quote":"The future is not Big Government. Self-serving politicians. Powerful bureaucrats. This has been tried, tested throughout history. The result has always been disaster. President Obama, your agenda is not new. It\'s not change, and it\'s not hope.","author":"Rush Limbaugh"},{"quote":"There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.","author":"Jiddu Krishnamurti"},{"quote":"When I am finishing a picture, I hold some God-made object up to it - a rock, a flower, the branch of a tree or my hand - as a final test. If the painting stands up beside a thing man cannot make, the painting is authentic. If there\'s a clash between the two, it\'s bad art.","author":"Marc Chagall"},{"quote":"I think in my case, I had no choice but to have a good sense of humor. I grew up with my dad, Danny Thomas, and George Burns and Bob Hope and Milton Berle and Sid Caesar and all those guys were at our house all the time and telling jokes and making each other laugh.","author":"Marlo Thomas"},{"quote":"That\'s my actual payment, the fact that I can actually make something that I actually enjoy and put on repeat, and it\'s not related to anything else or anyone else\'s thoughts and ideas, it all came from me; I just love that aspect of it.","author":"Akon"},{"quote":"Success is simple. Do what\'s right, the right way, at the right time.","author":"Arnold H. Glasow"},{"quote":"We would not be interested in human beings if we did not have the hope of someday meeting someone worse off than ourselves.","author":"Emile M. Cioran"},{"quote":"Beginning today, treat everyone you meet as if they were going to be dead by midnight. Extend to them all the care, kindness and understanding you can muster, and do it with no thought of any reward. Your life will never be the same again.","author":"Og Mandino"},{"quote":"Draw your pleasure, paint your pleasure, and express your pleasure strongly.","author":"Pierre Bonnard"},{"quote":"Down the road, I\'ll probably have a kid or two or three. And there will probably be political events or spiritual things to comment on, and humor.","author":"Alanis Morissette"},{"quote":"Write what you love. Love will hold you through the hard times and hold the world during the good times.","author":"Mark Z. Danielewski"},{"quote":"Not all those who wander are lost.","author":"J.R.R. Tolkien,  The Fellowship of the Ring"},{"quote":"The starting point of all achievement is desire.","author":"Napoleon Hill"},{"quote":"I hope people start to look at their lives as the most powerful, creative act they will ever offer this world.","author":"Tom Shadyac"},{"quote":"Never stop fighting until you arrive at your destined place - that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realise the great life.","author":"A. P. J. Abdul Kalam"},{"quote":"A great artist can paint a great picture on a small canvas.","author":"Charles Dudley Warner"},{"quote":"You\'ve got to have a sense of humor to keep your sanity.","author":"Lance Bass"},{"quote":"You are ugly when you love her, you are beautiful and fresh, vital and free, modern and poetic when you don\'t... you are more beautiful as an orphan than as your mother\'s son.","author":"Witold Gombrowicz"},{"quote":"Books are the ultimate Dumpees: put them down and they\u2019ll wait for you forever; pay attention to them and they always love you back.","author":"John Green,  An Abundance of Katherines"},{"quote":"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.","author":"Bruce Lee"},{"quote":"She gave up beauty in her tender youth, gave all her hope and joy and pleasant ways; she covered up her eyes lest they should gaze on vanity, and chose the bitter truth.","author":"Christina Rossetti"},{"quote":"He who is not courageous enough to take risks will accomplish nothing in life.","author":"Muhammad Ali"},{"quote":"That\'s the motivation of an artist - to seek attention of some kind.","author":"James Taylor"},{"quote":"I never write anything without humor, just because I like humor, but at the same time, it is a way for anything fantastical to become relatable.","author":"Joss Whedon"},{"quote":"I\'m very girly. I love to talk about diets, exercise, kids, make-up.","author":"Rachel Hunter"},{"quote":"So it\'s not gonna be easy. It\'s going to be really hard; we\'re gonna have to work at this everyday, but I want to do that because I want you. I want all of you, forever, everyday. You and me... everyday.","author":"Nicholas Sparks,  The Notebook"},{"quote":"Don\'t aim for success if you want it; just do what you love and believe in, and it will come naturally.","author":"David Frost"},{"quote":"A lot of people, to attack an outspoken atheist, one of the things they\'ll do is say, \'You are as bad as the fundamentalist Christians.\' And my answer is always, \'I hope so.\'","author":"Penn Jillette"},{"quote":"Gratitude unlocks the fullness of life. It turns what we have into enough, and more. It turns denial into acceptance, chaos to order, confusion to clarity. It can turn a meal into a feast, a house into a home, a stranger into a friend.","author":"Melody Beattie"},{"quote":"Every other artist begins with a blank canvas, a piece of paper the photographer begins with the finished product.","author":"Edward Steichen"},{"quote":"It\'s always amazed me how little attention philosophers, psychologists, or anyone else actually has paid to humor.","author":"Edward de Bono"},{"quote":"Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell.","author":"Joan Crawford"},{"quote":"It takes courage to grow up and become who you really are.","author":"E.E. Cummings"},{"quote":"Success consists of going from failure to failure without loss of enthusiasm.","author":"Winston Churchill"},{"quote":"You want to play another kind of character in another genre, and it\'s been something I\'ve been trying to do if I can in the career so far, and it\'s something I hope to continue because it\'s interesting to me and you get to do different things as an actor.","author":"Keanu Reeves"},{"quote":"Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.","author":"Langston Hughes"},{"quote":"My attitude towards drawing is not necessarily about drawing. It\'s about making the best kind of image I can make, it\'s about talking as clearly as I can.","author":"Jim Dine"},{"quote":"Humor expands our limited picture frame and gets us to see more than just our problem.","author":"Allen Klein"},{"quote":"And I ask why am I black, they say I was born in sin, and shamed inequity. One of the main songs we used to sing in church makes me sick, \'love wash me and I shall be whiter than snow.","author":"Peter Tosh"},{"quote":"Success is nothing more than a few simple disciplines, practiced every day.","author":"Jim Rohn"},{"quote":"Very much, string theory is simply a work in progress. What we are inching toward every day are predictions that within the realm of current technology we hope to test. It\'s not like we\'re working on a theory that is permanently beyond experiment. That would be philosophy.","author":"Brian Greene"},{"quote":"Earth teach me to forget myself as melted snow forgets its life. Earth teach me resignation as the leaves which die in the fall. Earth teach me courage as the tree which stands all alone. Earth teach me regeneration as the seed which rises in the spring.","author":"William Alexander"},{"quote":"Where the spirit does not work with the hand, there is no art.","author":"Leonardo da Vinci"},{"quote":"If you look at terrorists, they really have no sense of humor.","author":"Al Franken"},{"quote":"I accepted the face that as much as I want to lead others, and love to be around other people, in some essential way, I am something of a loner.","author":"Arthur Ashe"},{"quote":"Try not to become a man of success, but rather try to become a man of value.","author":"Albert Einstein"},{"quote":"I\'m involved in quite a few ministries as a bridge builder, trying to match generous givers and donors to other ministries. Based on my past, I\'m also involved in mainly the prison ministry. I go to jails and prisons and share my story, trying to give them some hope.","author":"Lex Luger"},{"quote":"Art is the only way to run away without leaving home.","author":"Twyla Tharp"},{"quote":"My sense of humor is a turkey, and I pull it out of the oven and baste it in reality.","author":"Tracy Morgan"},{"quote":"As love without esteem is capricious and volatile; esteem without love is languid and cold.","author":"Jonathan Swift"},{"quote":"Do not pity the dead, Harry. Pity the living, and, above all those who live without love.","author":"J.K. Rowling,  Harry Potter and the Deathly Hallows"},{"quote":"To die will be an awfully big adventure.","author":"J.M. Barrie,  Peter Pan"},{"quote":"Desire is the key to motivation, but it\'s determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - that will enable you to attain the success you seek.","author":"Mario Andretti"},{"quote":"I have learned from my experiences in this industry that there is absolutely no way to control people\'s opinions on your performance in your movie. You go out there, promote your film and hope people like the work you did.","author":"Leonardo DiCaprio"},{"quote":"The bird is powered by its own life and by its motivation.","author":"A. P. J. Abdul Kalam"},{"quote":"Every artist dips his brush in his own soul, and paints his own nature into his pictures.","author":"Henry Ward Beecher"},{"quote":"There\'s plenty of room for humor in politics, God knows, but it\'s a serious business.","author":"Al Franken"},{"quote":"Nashville is my home, and the reason why I get to do what I love.","author":"Taylor Swift"},{"quote":"Anyone who has never made a mistake has never tried anything new.","author":"Albert Einstein"},{"quote":"Action is the foundational key to all success.","author":"Pablo Picasso"},{"quote":"I\'m quite a confident person in many ways, but there\'s only so much you can hear about being compared to Hattie Jacques. For the record, she was a comedy goddess, but she was 25 stone. I hope I\'m right in saying I\'m not in any way nearly 25 stone.","author":"Miranda Hart"},{"quote":"The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.","author":"Mark Twain"},{"quote":"A picture is a poem without words.","author":"Horace"},{"quote":"If the blood humor is too strong and robust, calm it with balance and harmony.","author":"Xun Zi"},{"quote":"Love is so unconditional; love liberates; love is the reason why I do what I do, and so I think it is the greatest gift we have.","author":"BeBe Winans"},{"quote":"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.","author":"David Brinkley"},{"quote":"Sixty-four thousand dollars for a question, I hope they are asking you the meaning of life.","author":"Paul Scofield"},{"quote":"Just as treasures are uncovered from the earth, so virtue appears from good deeds, and wisdom appears from a pure and peaceful mind. To walk safely through the maze of human life, one needs the light of wisdom and the guidance of virtue.","author":"Buddha"},{"quote":"I have no fear of making changes, destroying the image, etc., because the painting has a life of its own.","author":"Jackson Pollock"},{"quote":"Humor\'s a weapon if you want to make it one.","author":"Bob Newhart"},{"quote":"The measure of a man is not how great his faith is, but how great his love is. We must not let government programs disconnect our souls from each other.","author":"J. C. Watts"},{"quote":"I\'m the one that\'s got to die when it\'s time for me to die, so let me live my life the way I want to.","author":"Jimi Hendrix,  Jimi Hendrix - Axis: Bold as Love"},{"quote":"Winning isn\'t everything, it\'s the only thing.","author":"Vince Lombardi"},{"quote":"I try to make a dent in people when I can. I figure people drift toward liberalism at a young age, and I always hope that they change when they see how the world really is.","author":"Johnny Ramone"},{"quote":"The Christian life is not a constant high. I have my moments of deep discouragement. I have to go to God in prayer with tears in my eyes, and say, \'O God, forgive me,\' or \'Help me.\'","author":"Billy Graham"},{"quote":"To me, photography is the simultaneous recognition, in a fraction of a second, of the significance of an event.","author":"Henri Cartier-Bresson"},{"quote":"What you see on stage is pretty much the way I am... a dry sense of humor.","author":"Bob Newhart"},{"quote":"I love you, and because I love you, I would sooner have you hate me for telling you the truth than adore me for telling you lies.","author":"Pietro Aretino"},{"quote":"\u2032Classic\u2032 - a book which people praise and don\'t read.","author":"Mark Twain"},{"quote":"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.","author":"Swami Vivekananda"},{"quote":"I hope I can help guys come out and say, \'All right, dude, I got a manicure... and I liked it.\'","author":"Ryan Seacrest"},{"quote":"Transformation is a process, and as life happens there are tons of ups and downs. It\'s a journey of discovery - there are moments on mountaintops and moments in deep valleys of despair.","author":"Rick Warren"},{"quote":"Every picture shows a spot with which the artist has fallen in love.","author":"Alfred Sisley"},{"quote":"You know, Freud accepted his lot very stoically and very well and with a sense of humor. He aged and died gracefully, and there\'s a lot to be said for that.","author":"Viggo Mortensen"},{"quote":"Don\'t cry because it\'s over, smile because it happened.","author":"Dr. Seuss"},{"quote":"Don\'t cry because it\'s over, smile because it happened.","author":"Dr. Seuss"},{"quote":"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.","author":"Marilyn Monroe"},{"quote":"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.","author":"Marilyn Monroe"},{"quote":"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.","author":"Marilyn Monroe"},{"quote":"Be yourself; everyone else is already taken.","author":"Oscar Wilde"},{"quote":"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.","author":"Albert Einstein"},{"quote":"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.","author":"Albert Einstein"},{"quote":"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.","author":"Albert Einstein"},{"quote":"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.","author":"Bernard M. Baruch"},{"quote":"You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth.","author":"William W. Purkey"},{"quote":"You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth.","author":"William W. Purkey"},{"quote":"You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth.","author":"William W. Purkey"},{"quote":"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.","author":"Dr. Seuss"},{"quote":"A room without books is like a body without a soul.","author":"Marcus Tullius Cicero"},{"quote":"A room without books is like a body without a soul.","author":"Marcus Tullius Cicero"},{"quote":"So many books, so little time.","author":"Frank Zappa"},{"quote":"So many books, so little time.","author":"Frank Zappa"},{"quote":"You only live once, but if you do it right, once is enough.","author":"Mae West"},{"quote":"You only live once, but if you do it right, once is enough.","author":"Mae West"},{"quote":"Be the change that you wish to see in the world.","author":"Mahatma Gandhi"},{"quote":"Be the change that you wish to see in the world.","author":"Mahatma Gandhi"},{"quote":"In three words I can sum up everything I\'ve learned about life: it goes on.","author":"Robert Frost"},{"quote":"Friendship ... is born at the moment when one man says to another \\"What! You too? I thought that no one but myself . . .","author":"C.S. Lewis,  The Four Loves"},{"quote":"If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.","author":"J.K. Rowling,  Harry Potter and the Goblet of Fire"},{"quote":"Don\u2019t walk in front of me\u2026 I may not followDon\u2019t walk behind me\u2026 I may not leadWalk beside me\u2026 just be my friend","author":"Albert Camus"},{"quote":"No one can make you feel inferior without your consent.","author":"Eleanor Roosevelt,  This is My Story"},{"quote":"No one can make you feel inferior without your consent.","author":"Eleanor Roosevelt,  This is My Story"},{"quote":"If you tell the truth, you don\'t have to remember anything.","author":"Mark Twain"},{"quote":"A friend is someone who knows all about you and still loves you.","author":"Elbert Hubbard"},{"quote":"A friend is someone who knows all about you and still loves you.","author":"Elbert Hubbard"},{"quote":"Always forgive your enemies; nothing annoys them so much.","author":"Oscar Wilde"},{"quote":"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","author":"Maya Angelou"},{"quote":"Live as if you were to die tomorrow. Learn as if you were to live forever.","author":"Mahatma Gandhi"},{"quote":"Live as if you were to die tomorrow. Learn as if you were to live forever.","author":"Mahatma Gandhi"},{"quote":"I am so clever that sometimes I don\'t understand a single word of what I am saying.","author":"Oscar Wilde,  The Happy Prince and Other Stories"},{"quote":"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","author":"Martin Luther King Jr.,  A Testament of Hope: The Essential Writings and Speeches"},{"quote":"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","author":"Martin Luther King Jr.,  A Testament of Hope: The Essential Writings and Speeches"},{"quote":"To live is the rarest thing in the world. Most people exist, that is all.","author":"Oscar Wilde"},{"quote":"Without music, life would be a mistake.","author":"Friedrich Nietzsche,  Twilight of the Idols"},{"quote":"Without music, life would be a mistake.","author":"Friedrich Nietzsche,  Twilight of the Idols"},{"quote":"Insanity is doing the same thing, over and over again, but expecting different results.","author":"Narcotics Anonymous"},{"quote":"Insanity is doing the same thing, over and over again, but expecting different results.","author":"Narcotics Anonymous"},{"quote":"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","author":"Ralph Waldo Emerson"},{"quote":"I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they\'re right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.","author":"Marilyn Monroe"},{"quote":"Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.","author":"H. Jackson Brown Jr.,  P.S. I Love You"},{"quote":"We accept the love we think we deserve.","author":"Stephen Chbosky,  The Perks of Being a Wallflower"},{"quote":"We accept the love we think we deserve.","author":"Stephen Chbosky,  The Perks of Being a Wallflower"},{"quote":"It is better to be hated for what you are than to be loved for what you are not.","author":"Andr\xe9 Gide,  Autumn Leaves"},{"quote":"It is better to be hated for what you are than to be loved for what you are not.","author":"Andr\xe9 Gide,  Autumn Leaves"},{"quote":"Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.","author":"Marilyn Monroe"},{"quote":"All that is gold does not glitter,Not all those who wander are lost;The old that is strong does not wither,Deep roots are not reached by the frost.From the ashes a fire shall be woken,A light from the shadows shall spring;Renewed shall be blade that was broken,The crownless again shall be king.","author":"J.R.R. Tolkien,  The Fellowship of the Ring"},{"quote":"The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.","author":"Jane Austen,  Northanger Abbey"},{"quote":"The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.","author":"Jane Austen,  Northanger Abbey"},{"quote":"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.","author":"Albert Einstein"},{"quote":"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.","author":"Albert Einstein"},{"quote":"It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.","author":"Maurice Switzer"},{"quote":"As he read, I fell in love the way you fall asleep: slowly, and then all at once.","author":"John Green,  The Fault in Our Stars"},{"quote":"It is our choices, Harry, that show what we truly are, far more than our abilities.","author":"J.K. Rowling,  Harry Potter and the Chamber of Secrets"},{"quote":"Life is what happens to you while you\'re busy making other plans.","author":"Allen Saunders"},{"quote":"Good friends, good books, and a sleepy conscience: this is the ideal life.","author":"Mark Twain"},{"quote":"Good friends, good books, and a sleepy conscience: this is the ideal life.","author":"Mark Twain"},{"quote":"Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).","author":"Mark Twain"},{"quote":"It does not do to dwell on dreams and forget to live.","author":"J.K. Rowling,  Harry Potter and the Sorcerer\'s Stone"},{"quote":"The fool doth think he is wise, but the wise man knows himself to be a fool.","author":"William Shakespeare,  As You Like It"},{"quote":"A woman is like a tea bag; you never know how strong it is until it\'s in hot water.","author":"Eleanor Roosevelt"},{"quote":"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.","author":"Bil Keane"},{"quote":"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.","author":"Bil Keane"},{"quote":"We are all in the gutter, but some of us are looking at the stars.","author":"Oscar Wilde,  Lady Windermere\'s Fan"},{"quote":"If you don\'t stand for something you will fall for anything.","author":"Gordon A. Eadie"},{"quote":"The man who does not read has no advantage over the man who cannot read.","author":"Mark Twain"},{"quote":"I have not failed. I\'ve just found 10,000 ways that won\'t work.","author":"Thomas A. Edison"},{"quote":"It is not a lack of love, but a lack of friendship that makes unhappy marriages.","author":"Friedrich Nietzsche"},{"quote":"It is not a lack of love, but a lack of friendship that makes unhappy marriages.","author":"Friedrich Nietzsche"},{"quote":"The opposite of love is not hate, it\'s indifference. The opposite of art is not ugliness, it\'s indifference. The opposite of faith is not heresy, it\'s indifference. And the opposite of life is not death, it\'s indifference.","author":"Elie Wiesel"},{"quote":"The opposite of love is not hate, it\'s indifference. The opposite of art is not ugliness, it\'s indifference. The opposite of faith is not heresy, it\'s indifference. And the opposite of life is not death, it\'s indifference.","author":"Elie Wiesel"},{"quote":"The opposite of love is not hate, it\'s indifference. The opposite of art is not ugliness, it\'s indifference. The opposite of faith is not heresy, it\'s indifference. And the opposite of life is not death, it\'s indifference.","author":"Elie Wiesel"},{"quote":"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.","author":"Neil Gaiman,  Coraline"},{"quote":"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.","author":"Neil Gaiman,  Coraline"},{"quote":"Outside of a dog, a book is man\'s best friend. Inside of a dog it\'s too dark to read.","author":"Groucho Marx,  The Essential Groucho: Writings For By And About Groucho Marx"},{"quote":"Outside of a dog, a book is man\'s best friend. Inside of a dog it\'s too dark to read.","author":"Groucho Marx,  The Essential Groucho: Writings For By And About Groucho Marx"},{"quote":"I may not have gone where I intended to go, but I think I have ended up where I needed to be.","author":"Douglas Adams,  The Long Dark Tea-Time of the Soul"},{"quote":"I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.","author":"Albert Einstein"},{"quote":"A day without sunshine is like, you know, night.","author":"Steve Martin"},{"quote":"I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.","author":"Dr. Seuss"},{"quote":"Never put off till tomorrow what may be done day after tomorrow just as well.","author":"Mark Twain"},{"quote":"I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.","author":"Pablo Neruda,  100 Love Sonnets"},{"quote":"I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.","author":"Pablo Neruda,  100 Love Sonnets"},{"quote":"I solemnly swear that I am up to no good.","author":"J.K. Rowling,  Harry Potter and the Prisoner of Azkaban"},{"quote":"That which does not kill us makes us stronger.","author":"Friedrich Nietzsche"},{"quote":"Have you ever been in love? Horrible isn\'t it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.","author":"Neil Gaiman,  The Sandman, Vol. 9: The Kindly Ones"},{"quote":"Love all, trust a few, do wrong to none.","author":"William Shakespeare,  All\'s Well That Ends Well"},{"quote":"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You\'re on your own. And you know what you know. And YOU are the one who\'ll decide where to go...","author":"Dr. Seuss,  Oh, The Places You\'ll Go!"},{"quote":"If you judge people, you have no time to love them.","author":"Mother Teresa"},{"quote":"There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.","author":"Sarah Dessen,  The Truth About Forever"},{"quote":"For every minute you are angry you lose sixty seconds of happiness.","author":"Ralph Waldo Emerson"},{"quote":"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.","author":"Lao Tzu"},{"quote":"My thoughts are stars I cannot fathom into constellations.","author":"John Green,  The Fault in Our Stars"},{"quote":"I love deadlines. I love the whooshing noise they make as they go by.","author":"Douglas Adams,  The Salmon of Doubt"},{"quote":"I love deadlines. I love the whooshing noise they make as they go by.","author":"Douglas Adams,  The Salmon of Doubt"},{"quote":"It is never too late to be what you might have been.","author":"George Eliot"},{"quote":"Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.","author":"Garrison Keillor"},{"quote":"Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.","author":"Garrison Keillor"},{"quote":"A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.","author":"George R.R. Martin,  A Dance with Dragons"},{"quote":"I\'m not upset that you lied to me, I\'m upset that from now on I can\'t believe you.","author":"Friedrich Nietzsche"},{"quote":"If you can\'t explain it to a six year old, you don\'t understand it yourself.","author":"Albert Einstein"},{"quote":"Women and cats will do as they please, and men and dogs should relax and get used to the idea.","author":"Robert A. Heinlein"},{"quote":"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.","author":"J.K. Rowling,  Harry Potter and the Sorcerer\'s Stone"},{"quote":"Love is that condition in which the happiness of another person is essential to your own.","author":"Robert A. Heinlein,  Stranger in a Strange Land"},{"quote":"Love is that condition in which the happiness of another person is essential to your own.","author":"Robert A. Heinlein,  Stranger in a Strange Land"},{"quote":"Sometimes the questions are complicated and the answers are simple.","author":"Dr. Seuss"},{"quote":"I have always imagined that Paradise will be a kind of library.","author":"Jorge Luis Borges"},{"quote":"We read to know we\'re not alone.","author":"William Nicholson,  Shadowlands"},{"quote":"You love me. Real or not real?\\"I tell him, \\"Real.","author":"Suzanne Collins,  Mockingjay"},{"quote":"We don\'t see things as they are, we see them as we are.","author":"Ana\xefs Nin"},{"quote":"Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.","author":"Jim Henson"},{"quote":"All you need is love. But a little chocolate now and then doesn\'t hurt.","author":"Charles M. Schulz"},{"quote":"Everything you can imagine is real.","author":"Pablo Picasso"},{"quote":"Everything you can imagine is real.","author":"Pablo Picasso"},{"quote":"There is no greater agony than bearing an untold story inside you.","author":"Maya Angelou,  I Know Why the Caged Bird Sings"},{"quote":"There is no greater agony than bearing an untold story inside you.","author":"Maya Angelou,  I Know Why the Caged Bird Sings"},{"quote":"Today you are You, that is truer than true. There is no one alive who is Youer than You.","author":"Dr. Seuss,  Happy Birthday to You!"},{"quote":"Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.","author":"John Green,  The Fault in Our Stars"},{"quote":"Never trust anyone who has not brought a book with them.","author":"Lemony Snicket,  Horseradish"},{"quote":"Whenever I feel the need to exercise, I lie down until it goes away.","author":"Paul Terry"},{"quote":"I\'m not afraid of death; I just don\'t want to be there when it happens.","author":"Woody Allen"},{"quote":"I\'m not afraid of death; I just don\'t want to be there when it happens.","author":"Woody Allen"},{"quote":"I\'m not afraid of death; I just don\'t want to be there when it happens.","author":"Woody Allen"},{"quote":"I am nothing special, of this I am sure. I am a common man with common thoughts and I\'ve led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but I\'ve loved another with all my heart and soul, and to me, this has always been enough..","author":"Nicholas Sparks,  The Notebook"},{"quote":"If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.","author":"Albert Einstein"},{"quote":"Have you fallen in love with the wrong person yet?\'Jace said, \\"Unfortunately, Lady of the Haven, my one true love remains myself.\\"...\\"At least,\\"she said, \\"you don\'t have to worry about rejection, Jace Wayland.\\"\\"Not necessarily. I turn myself down occasionally, just to keep it interesting.","author":"Cassandra Clare,  City of Bones"},{"quote":"If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.","author":"Joan Powers,  Pooh\'s Little Instruction Book"},{"quote":"Logic will get you from A to Z; imagination will get you everywhere.","author":"Albert Einstein"},{"quote":"One good thing about music, when it hits you, you feel no pain.","author":"Bob Marley"},{"quote":"The more that you read, the more things you will know. The more that you learn, the more places you\'ll go.","author":"Dr. Seuss,  I Can Read With My Eyes Shut!"},{"quote":"Not all of us can do great things. But we can do small things with great love.","author":"Mother Teresa"},{"quote":"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.","author":"J.K. Rowling"},{"quote":"You don\'t get to choose if you get hurt in this world...but you do have some say in who hurts you. I like my choices.","author":"John Green,  The Fault in Our Stars"},{"quote":"You don\u2019t have a soul, Doctor. You are a soul. You have a body, temporarily.","author":"Walter M. Miller Jr.,  A Canticle for Leibowitz"},{"quote":"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.","author":"Bob Marley"},{"quote":"Folks are usually about as happy as they make their minds up to be.","author":"Abraham Lincoln"},{"quote":"Love looks not with the eyes, but with the mind,And therefore is winged Cupid painted blind.","author":"William Shakespeare,  A Midsummer Night\'s Dream"},{"quote":"If you only read the books that everyone else is reading, you can only think what everyone else is thinking.","author":"Haruki Murakami,  Norwegian Wood"},{"quote":"Love is like the wind, you can\'t see it but you can feel it.","author":"Nicholas Sparks,  A Walk to Remember"},{"quote":"Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?","author":"J.K. Rowling,  Harry Potter and the Deathly Hallows"},{"quote":"Sometimes people are beautiful.Not in looks.Not in what they say.Just in what they are.","author":"Markus Zusak,  I Am the Messenger"},{"quote":"You can never get a cup of tea large enough or a book long enough to suit me.","author":"C.S. Lewis"},{"quote":"You can never get a cup of tea large enough or a book long enough to suit me.","author":"C.S. Lewis"},{"quote":"If one cannot enjoy reading a book over and over again, there is no use in reading it at all.","author":"Oscar Wilde"},{"quote":"The difference between genius and stupidity is: genius has its limits.","author":"Alexandre Dumas-fils"},{"quote":"I would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.","author":"Virginia Woolf"},{"quote":"Do what you can, with what you have, where you are.","author":"Theodore Roosevelt"},{"quote":"If you can make a woman laugh, you can make her do anything.","author":"Marilyn Monroe"},{"quote":"To the well-organized mind, death is but the next great adventure.","author":"J.K. Rowling,  Harry Potter and the Sorcerer\'s Stone"},{"quote":"To the well-organized mind, death is but the next great adventure.","author":"J.K. Rowling,  Harry Potter and the Sorcerer\'s Stone"},{"quote":"Listen to the mustn\'ts, child. Listen to the don\'ts. Listen to the shouldn\'ts, the impossibles, the won\'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.","author":"Shel Silverstein"},{"quote":"Listen to the mustn\'ts, child. Listen to the don\'ts. Listen to the shouldn\'ts, the impossibles, the won\'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.","author":"Shel Silverstein"},{"quote":"We\u2019re all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness\u2014and call it love\u2014true love.","author":"Robert Fulghum,  True Love"},{"quote":"I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.","author":"Groucho Marx"},{"quote":"I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.","author":"Groucho Marx"},{"quote":"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.","author":"Helen Keller"},{"quote":"Life isn\'t about finding yourself. Life is about creating yourself.","author":"George Bernard Shaw"},{"quote":"Life isn\'t about finding yourself. Life is about creating yourself.","author":"George Bernard Shaw"},{"quote":"You don\'t love someone because they\'re perfect, you love them in spite of the fact that they\'re not.","author":"Jodi Picoult,  My Sister\'s Keeper"},{"quote":"He\'s like a drug for you, Bella.","author":"Stephenie Meyer,  Eclipse"},{"quote":"A wise girl kisses but doesn\'t love, listens but doesn\'t believe, and leaves before she is left.","author":"Marilyn Monroe"},{"quote":"The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.","author":"Marilyn Monroe"},{"quote":"Life is like riding a bicycle. To keep your balance, you must keep moving.","author":"Albert Einstein"},{"quote":"Some infinities are bigger than other infinities.","author":"John Green,  The Fault in Our Stars"},{"quote":"Love never dies a natural death. It dies because we don\'t know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.","author":"Ana\xefs Nin"},{"quote":"Love never dies a natural death. It dies because we don\'t know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.","author":"Ana\xefs Nin"},{"quote":"There is no friend as loyal as a book.","author":"Ernest Hemingway"},{"quote":"Who are you to judge the life I live?I know I\'m not perfect-and I don\'t live to be-but before you start pointing fingers...make sure you hands are clean!","author":"Bob Marley"},{"quote":"The story so far:In the beginning the Universe was created.This has made a lot of people very angry and been widely regarded as a bad move.","author":"Douglas Adams,  The Restaurant at the End of the Universe"},{"quote":"Time you enjoy wasting is not wasted time.","author":"Marthe Troly-Curtin,  Phrynette Married"},{"quote":"Piglet sidled up to Pooh from behind. \\"Pooh!\\"he whispered.\\"Yes, Piglet?\\"\\"Nothing,\\"said Piglet, taking Pooh\'s paw. \\"I just wanted to be sure of you.","author":"A.A. Milne,  The House at Pooh Corner"},{"quote":"I am good, but not an angel. I do sin, but I am not the devil. I am just a small girl in a big world trying to find someone to love.","author":"Marilyn Monroe"},{"quote":"There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.","author":"Jane Austen,  Northanger Abbey"},{"quote":"Do one thing every day that scares you.","author":"Eleanor Roosevelt"},{"quote":"The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.","author":"Terry Pratchett,  Diggers"},{"quote":"If I had a flower for every time I thought of you...I could walk through my garden forever.","author":"Alfred Lord Tennyson"},{"quote":"It matters not what someone is born, but what they grow to be.","author":"J.K. Rowling,  Harry Potter and the Goblet of Fire"},{"quote":"Some people never go crazy. What truly horrible lives they must lead.","author":"Charles Bukowski"},{"quote":"Reality continues to ruin my life.","author":"Bill Watterson,  The Complete Calvin and Hobbes"},{"quote":"Reality continues to ruin my life.","author":"Bill Watterson,  The Complete Calvin and Hobbes"},{"quote":"Success is not final, failure is not fatal: it is the courage to continue that counts.","author":"Winston S. Churchill"},{"quote":"Success is not final, failure is not fatal: it is the courage to continue that counts.","author":"Winston S. Churchill"},{"quote":"It is what you read when you don\'t have to that determines what you will be when you can\'t help it.","author":"Oscar Wilde"},{"quote":"There is no pretending,\\"Jace said with absolute clarity. \\"I love you, and I will love you until I die, and if there is life after that, I\'ll love you then.","author":"Cassandra Clare,  City of Glass"},{"quote":"So, this is my life. And I want you to know that I am both happy and sad and I\'m still trying to figure out how that could be.","author":"Stephen Chbosky,  The Perks of Being a Wallflower"},{"quote":"I love mankind ... it\'s people I can\'t stand!!","author":"Charles M. Schulz,  The Complete Peanuts, Vol. 5: 1959-1960"},{"quote":"Things change. And friends leave. Life doesn\'t stop for anybody.","author":"Stephen Chbosky,  The Perks of Being a Wallflower"},{"quote":"Remember, we\'re madly in love, so it\'s all right to kiss me anytime you feel like it.","author":"Suzanne Collins,  The Hunger Games"},{"quote":"You don\u2019t forget the face of the person who was your last hope.","author":"Suzanne Collins,  The Hunger Games"},{"quote":"The only way out of the labyrinth of suffering is to forgive.","author":"John Green,  Looking for Alaska"},{"quote":"Go to heaven for the climate and hell for the company.","author":"Benjamin Franklin Wade"},{"quote":"Go to heaven for the climate and hell for the company.","author":"Benjamin Franklin Wade"},{"quote":"The reason I talk to myself is because I\u2019m the only one whose answers I accept.","author":"George Carlin"},{"quote":"The reason I talk to myself is because I\u2019m the only one whose answers I accept.","author":"George Carlin"},{"quote":"I am free of all prejudice. I hate everyone equally.","author":"W.C. Fields"},{"quote":"What really knocks me out is a book that, when you\'re all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn\'t happen much, though.","author":"J.D. Salinger,  The Catcher in the Rye"},{"quote":"What really knocks me out is a book that, when you\'re all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn\'t happen much, though.","author":"J.D. Salinger,  The Catcher in the Rye"},{"quote":"What is success? I think it is a mixture of having a flair for the thing that you are doing; knowing that it is not enough, that you have got to have hard work and a certain sense of purpose.","author":"Margaret Thatcher"},{"quote":"At the moment of death I hope to be surprised.","author":"Ivan Illich"},{"quote":"Unrest of spirit is a mark of life.","author":"Karl A. Menninger"},{"quote":"Humor is something that thrives between man\'s aspirations and his limitations. There is more logic in humor than in anything else. Because, you see, humor is truth.","author":"Victor Borge"},{"quote":"Literature is the art of discovering something extraordinary about ordinary people, and saying with ordinary words something extraordinary.","author":"Boris Pasternak"},{"quote":"Literature is the art of discovering something extraordinary about ordinary people, and saying with ordinary words something extraordinary.","author":"Boris Pasternak"},{"quote":"If everyone is moving forward together, then success takes care of itself.","author":"Henry Ford"},{"quote":"Hope is the only universal liar who never loses his reputation for veracity.","author":"Robert Green Ingersoll"},{"quote":"Ships that pass in the night, and speak each other in passing, only a signal shown, and a distant voice in the darkness; So on the ocean of life, we pass and speak one another, only a look and a voice, then darkness again and a silence.","author":"Henry Wadsworth Longfellow"},{"quote":"Love is the beauty of the soul.","author":"Saint Augustine"},{"quote":"Wit - the salt with which the American humorist spoils his intellectual cookery by leaving it out.","author":"Ambrose Bierce"},{"quote":"Politics is the art of controlling your environment.","author":"Hunter S. Thompson"},{"quote":"He has achieved success who has worked well, laughed often, and loved much.","author":"Elbert Hubbard"},{"quote":"Hope is the last thing a person does before they are defeated.","author":"Henry Rollins"},{"quote":"Life is a gift, given in trust - like a child.","author":"Anne Morrow Lindbergh"},{"quote":"Where there is love there is life.","author":"Mahatma Gandhi"},{"quote":"Where there is love there is life.","author":"Mahatma Gandhi"},{"quote":"Humor brings insight and tolerance. Irony brings a deeper and less friendly understanding.","author":"Agnes Repplier"},{"quote":"Advertising is the art of convincing people to spend money they don\'t have for something they don\'t need.","author":"Will Rogers"},{"quote":"Success makes so many people hate you. I wish it wasn\'t that way. It would be wonderful to enjoy success without seeing envy in the eyes of those around you.","author":"Marilyn Monroe"},{"quote":"The world is bad but not without hope. It is only hopeless when you look at it from an ideal viewpoint.","author":"Friedrich Durrenmatt"},{"quote":"Life is wasted on the living.","author":"Douglas Adams"},{"quote":"A kiss is a lovely trick designed by nature to stop speech when words become superfluous.","author":"Ingrid Bergman"},{"quote":"Humor can alter any situation and help us cope at the very instant we are laughing.","author":"Allen Klein"},{"quote":"Just as pure abstract art is not dogmatic, neither is it decorative.","author":"Piet Mondrian"},{"quote":"Success comes from knowing that you did your best to become the best that you are capable of becoming.","author":"John Wooden"},{"quote":"It\'s time to get real, folks. Hope and change ain\'t working. Hope and change is not a solution. Hope and change is not a job.","author":"Herman Cain"},{"quote":"Life in abundance comes only through great love.","author":"Elbert Hubbard"},{"quote":"Life is the flower for which love is the honey.","author":"Victor Hugo"},{"quote":"Life is the flower for which love is the honey.","author":"Victor Hugo"},{"quote":"The best way to make your audience laugh is to start laughing yourself.","author":"Oliver Goldsmith"},{"quote":"Don\'t only practice your art, but force your way into its secrets; art deserves that, for it and knowledge can raise man to the Divine.","author":"Ludwig van Beethoven"},{"quote":"The most important single ingredient in the formula of success is knowing how to get along with people.","author":"Theodore Roosevelt"},{"quote":"I always believe things are going to work out.","author":"Francoise Sagan"},{"quote":"Life is a culmination of the past, an awareness of the present, an indication of a future beyond knowledge, the quality that gives a touch of divinity to matter.","author":"Charles Lindbergh"},{"quote":"Love is being stupid together.","author":"Paul Valery"},{"quote":"Comedy has to be based on truth. You take the truth and you put a little curlicue at the end.","author":"Sid Caesar"},{"quote":"Architecture is the art of how to waste space.","author":"Philip Johnson"},{"quote":"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.","author":"Leonardo da Vinci"},{"quote":"We often call a certainty a hope, to bring it luck.","author":"Elizabeth Bibesco"},{"quote":"To live is so startling it leaves little time for anything else.","author":"Emily Dickinson"},{"quote":"To live is so startling it leaves little time for anything else.","author":"Emily Dickinson"},{"quote":"You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. You yourself, as much as anybody in the entire universe deserve your love and affection.","author":"Buddha"},{"quote":"There seems to be no lengths to which humorless people will not go to analyze humor. It seems to worry them.","author":"Robert Benchley"},{"quote":"People discuss my art and pretend to understand as if it were necessary to understand, when it\'s simply necessary to love.","author":"Claude Monet"},{"quote":"People discuss my art and pretend to understand as if it were necessary to understand, when it\'s simply necessary to love.","author":"Claude Monet"},{"quote":"Always bear in mind that your own resolution to succeed is more important than any other.","author":"Abraham Lincoln"},{"quote":"Hope is independent of the apparatus of logic.","author":"Norman Cousins"},{"quote":"Seventy percent of success in life is showing up.","author":"Woody Allen"},{"quote":"Seventy percent of success in life is showing up.","author":"Woody Allen"},{"quote":"We\'re born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we\'re not alone.","author":"Orson Welles"},{"quote":"We\'re born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we\'re not alone.","author":"Orson Welles"},{"quote":"Great men are rarely isolated mountain peaks; they are the summits of ranges.","author":"Thomas W. Higginson"},{"quote":"Space is the breath of art.","author":"Frank Lloyd Wright"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When love and skill work together, expect a masterpiece.","author":"John Ruskin"},{"quote":"When love and skill work together, expect a masterpiece.","author":"John Ruskin"},{"quote":"Easter is meant to be a symbol of hope, renewal, and new life.","author":"Janine di Giovanni"},{"quote":"Easter is meant to be a symbol of hope, renewal, and new life.","author":"Janine di Giovanni"},{"quote":"To be able to look back upon one\'s past life with satisfaction is to live twice.","author":"Lord Acton"},{"quote":"The course of true love never did run smooth.","author":"William Shakespeare"},{"quote":"Humor is merely tragedy standing on its head with its pants torn.","author":"Irvin S. Cobb"},{"quote":"Science fiction is any idea that occurs in the head and doesn\'t exist yet, but soon will, and will change everything for everybody, and nothing will ever be the same again. As soon as you have an idea that changes some small part of the world you are writing science fiction. It is always the art of the possible, never the impossible.","author":"Ray Bradbury"},{"quote":"You don\'t have to be a genius or a visionary or even a college graduate to be successful. You just need a framework and a dream.","author":"Michael Dell"},{"quote":"Outside of the cross of Jesus Christ, there is no hope in this world. That cross and resurrection at the core of the Gospel is the only hope for humanity. Wherever you go, ask God for wisdom on how to get that Gospel in, even in the toughest situations of life.","author":"Ravi Zacharias"},{"quote":"Outside of the cross of Jesus Christ, there is no hope in this world. That cross and resurrection at the core of the Gospel is the only hope for humanity. Wherever you go, ask God for wisdom on how to get that Gospel in, even in the toughest situations of life.","author":"Ravi Zacharias"},{"quote":"Any life is made up of a single moment, the moment in which a man finds out, once and for all, who he is.","author":"Jorge Luis Borges"},{"quote":"Love is like a beautiful flower which I may not touch, but whose fragrance makes the garden a place of delight just the same.","author":"Helen Keller"},{"quote":"Wit is the lowest form of humor.","author":"Alexander Pope"},{"quote":"There is nothing in the world of art like the songs mother used to sing.","author":"Billy Sunday"},{"quote":"Success isn\'t measured by money or power or social rank. Success is measured by your discipline and inner peace.","author":"Mike Ditka"},{"quote":"Infuse your life with action. Don\'t wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.","author":"Bradley Whitford"},{"quote":"Infuse your life with action. Don\'t wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.","author":"Bradley Whitford"},{"quote":"Infuse your life with action. Don\'t wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.","author":"Bradley Whitford"},{"quote":"Wrong life cannot be lived rightly.","author":"Theodor Adorno"},{"quote":"The most powerful weapon on earth is the human soul on fire.","author":"Ferdinand Foch"},{"quote":"It is the ability to take a joke, not make one, that proves you have a sense of humor.","author":"Max Eastman"},{"quote":"Every bit of me is devoted to love and art. And I aspire to try to be a teacher to my young fans who feel just like I felt when I was younger. I just felt like a freak. I guess what I\'m trying to say is I\'m trying to liberate them, I want to free them of their fears and make them feel that they can make their own space in the world.","author":"Lady Gaga"},{"quote":"Every bit of me is devoted to love and art. And I aspire to try to be a teacher to my young fans who feel just like I felt when I was younger. I just felt like a freak. I guess what I\'m trying to say is I\'m trying to liberate them, I want to free them of their fears and make them feel that they can make their own space in the world.","author":"Lady Gaga"},{"quote":"There is nothing better than a friend, unless it is a friend with chocolate.","author":"Linda Grayson"},{"quote":"What\'s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.","author":"Bob Dylan"},{"quote":"It is difficult to say what is impossible, for the dream of yesterday is the hope of today and the reality of tomorrow.","author":"Robert H. Schuller"},{"quote":"You have succeeded in life when all you really want is only what you really need.","author":"Vernon Howard"},{"quote":"Love is when he gives you a piece of your soul, that you never knew was missing.","author":"Torquato Tasso"},{"quote":"A humorist is a person who feels bad, but who feels good about it.","author":"Don Herold"},{"quote":"The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.","author":"Albert Einstein"},{"quote":"What a slut time is. She screws everybody.","author":"John Green,  The Fault in Our Stars"},{"quote":"You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one.","author":"John Lennon"},{"quote":"You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one.","author":"John Lennon"},{"quote":"To be successful, you have to have your heart in your business and your business in your heart.","author":"Thomas J. Watson"},{"quote":"He who has health, has hope; and he who has hope, has everything.","author":"Thomas Carlyle"},{"quote":"The greatest trap in our life is not success, popularity or power, but self-rejection.","author":"Henri Nouwen"},{"quote":"The greatest trap in our life is not success, popularity or power, but self-rejection.","author":"Henri Nouwen"},{"quote":"We love life, not because we are used to living but because we are used to loving.","author":"Friedrich Nietzsche"},{"quote":"We love life, not because we are used to living but because we are used to loving.","author":"Friedrich Nietzsche"},{"quote":"Women, as they grow older, rely more and more on cosmetics. Men, as they grow older, rely more and more on a sense of humor.","author":"George Jean Nathan"},{"quote":"I consider skateboarding an art form, a lifestyle and a sport. \'Action sport\' would be the least offensive categorization.","author":"Tony Hawk"},{"quote":"The size of your success is measured by the strength of your desire; the size of your dream; and how you handle disappointment along the way.","author":"Robert Kiyosaki"},{"quote":"All that I am, or hope to be, I owe to my angel mother.","author":"Abraham Lincoln"},{"quote":"Character develops itself in the stream of life.","author":"Johann Wolfgang von Goethe"},{"quote":"Love and compassion are necessities, not luxuries. Without them humanity cannot survive.","author":"Dalai Lama"},{"quote":"Humor is perhaps a sense of intellectual perspective: an awareness that some things are really important, others not; and that the two kinds are most oddly jumbled in everyday affairs.","author":"Christopher Morley"},{"quote":"Tact is the art of making a point without making an enemy.","author":"Isaac Newton"},{"quote":"If you want to be truly successful invest in yourself to get the knowledge you need to find your unique factor. When you find it and focus on it and persevere your success will blossom.","author":"Sydney Madwed"},{"quote":"The great gift of Easter is hope - Christian hope which makes us have that confidence in God, in his ultimate triumph, and in his goodness and love, which nothing can shake.","author":"Basil Hume"},{"quote":"The great gift of Easter is hope - Christian hope which makes us have that confidence in God, in his ultimate triumph, and in his goodness and love, which nothing can shake.","author":"Basil Hume"},{"quote":"Life consists not in holding good cards but in playing those you hold well.","author":"Josh Billings"},{"quote":"Love has reasons which reason cannot understand.","author":"Blaise Pascal"},{"quote":"What a strange world this would be if we all had the same sense of humor.","author":"Bernard Williams"},{"quote":"Where thou art, that is home.","author":"Emily Dickinson"},{"quote":"Formal education will make you a living; self-education will make you a fortune.","author":"Jim Rohn"},{"quote":"Formal education will make you a living; self-education will make you a fortune.","author":"Jim Rohn"},{"quote":"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.","author":"Helen Keller"},{"quote":"The greatest use of a life is to spend it on something that will outlast it.","author":"William James"},{"quote":"Love is an irresistible desire to be irresistibly desired.","author":"Robert Frost"},{"quote":"One can never speak enough of the virtues, the dangers, the power of shared laughter.","author":"Francoise Sagan"},{"quote":"Filmmaking, like any other art, is a very profound means of human communication; beyond the professional pleasure of succeeding or the pain of failing, you do want your film to be seen, to communicate itself to other people.","author":"Kenneth Lonergan"},{"quote":"Think twice before you speak, because your words and influence will plant the seed of either success or failure in the mind of another.","author":"Napoleon Hill"},{"quote":"Black and white are the colors of photography. To me they symbolize the alternatives of hope and despair to which mankind is forever subjected.","author":"Robert Frank"},{"quote":"Life is a succession of moments, to live each one is to succeed.","author":"Corita Kent"},{"quote":"I love that feeling of being in love, the effect of having butterflies when you wake up in the morning. That is special.","author":"Jennifer Aniston"},{"quote":"Wit is an explosion of the compound spirit.","author":"Karl Wilhelm Friedrich Schlegel"},{"quote":"The art of simplicity is a puzzle of complexity.","author":"Douglas Horton"},{"quote":"In order to attain the impossible, one must attempt the absurd.","author":"Miguel de Cervantes"},{"quote":"A good teacher can inspire hope, ignite the imagination, and instill a love of learning.","author":"Brad Henry"},{"quote":"A good teacher can inspire hope, ignite the imagination, and instill a love of learning.","author":"Brad Henry"},{"quote":"Fortunately analysis is not the only way to resolve inner conflicts. Life itself still remains a very effective therapist.","author":"Karen Horney"},{"quote":"Love is the flower you\'ve got to let grow.","author":"John Lennon"},{"quote":"This I conceive to be the chemical function of humor: to change the character of our thought.","author":"Lin Yutang"},{"quote":"In art, the obvious is a sin.","author":"Edward Dmytryk"},{"quote":"Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.","author":"Ralph Waldo Emerson"},{"quote":"Success depends upon previous preparation, and without such preparation there is sure to be failure.","author":"Confucius"},{"quote":"There was never a night or a problem that could defeat sunrise or hope.","author":"Bernard Williams"},{"quote":"The chief danger in life is that you may take too many precautions.","author":"Alfred Adler"},{"quote":"I believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience. That laughter is the only cure for grief. And I believe that love is stronger than death.","author":"Robert Fulghum"},{"quote":"I believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience. That laughter is the only cure for grief. And I believe that love is stronger than death.","author":"Robert Fulghum"},{"quote":"Laughter is involuntary. If it\'s funny you laugh.","author":"Tom Lehrer"},{"quote":"The art of healing comes from nature, not from the physician. Therefore the physician must start from nature, with an open mind.","author":"Paracelsus"},{"quote":"Success is finding satisfaction in giving a little more than you take.","author":"Christopher Reeve"},{"quote":"You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.","author":"Woodrow Wilson"},{"quote":"You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.","author":"Woodrow Wilson"},{"quote":"It takes half your life before you discover life is a do-it-yourself project.","author":"Napoleon Hill"},{"quote":"What force is more potent than love?","author":"Igor Stravinsky"},{"quote":"The satirist shoots to kill while the humorist brings his prey back alive and eventually releases him again for another chance.","author":"Peter De Vries"},{"quote":"Minimal art went nowhere.","author":"Sol LeWitt"},{"quote":"The secrets of success are a good wife and a steady job. My wife told me.","author":"Howard Nemerov"},{"quote":"Forgiving does not erase the bitter past. A healed memory is not a deleted memory. Instead, forgiving what we cannot forget creates a new way to remember. We change the memory of our past into a hope for our future.","author":"Lewis B. Smedes"},{"quote":"What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.","author":"Wayne Dyer"},{"quote":"Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.","author":"Henry Van Dyke"},{"quote":"A sense of humor is the ability to understand a joke - and that the joke is oneself.","author":"Clifton Fadiman"},{"quote":"Perhaps it\'s good for one to suffer. Can an artist do anything if he\'s happy? Would he ever want to do anything? What is art, after all, but a protest against the horrible inclemency of life?","author":"Aldous Huxley"},{"quote":"Perhaps it\'s good for one to suffer. Can an artist do anything if he\'s happy? Would he ever want to do anything? What is art, after all, but a protest against the horrible inclemency of life?","author":"Aldous Huxley"},{"quote":"Frustration, although quite painful at times, is a very positive and essential part of success.","author":"Bo Bennett"},{"quote":"Where there is no vision, there is no hope.","author":"George Washington Carver"},{"quote":"Life is never fair, and perhaps it is a good thing for most of us that it is not.","author":"Oscar Wilde"},{"quote":"If you can learn to love yourself and all the flaws, you can love other people so much better. And that makes you so happy.","author":"Kristin Chenoweth"},{"quote":"Puns are a form of humor with words.","author":"Guillermo Cabrera Infante"},{"quote":"I think you can do anything with comics that you could do in just about any art form.","author":"Harvey Pekar"},{"quote":"Formula for success: rise early, work hard, strike oil.","author":"J. Paul Getty"},{"quote":"A leader is a dealer in hope.","author":"Napoleon Bonaparte"},{"quote":"Life must be lived as play.","author":"Plato"},{"quote":"Love is a force more formidable than any other. It is invisible - it cannot be seen or measured, yet it is powerful enough to transform you in a moment, and offer you more joy than any material possession could.","author":"Barbara de Angelis"},{"quote":"There is no defense against adverse fortune which is so effectual as an habitual sense of humor.","author":"Thomas W. Higginson"},{"quote":"When the bright angel dominates, out comes a great work of art, a Michelangelo David or a Beethoven symphony.","author":"Madeleine L\'Engle"},{"quote":"There is nothing to writing. All you do is sit down at a typewriter and bleed.","author":"Ernest Hemingway"},{"quote":"If you want to achieve things in life, you\'ve just got to do them, and if you\'re talented and smart, you\'ll succeed.","author":"Juliana Hatfield"},{"quote":"If you want to achieve things in life, you\'ve just got to do them, and if you\'re talented and smart, you\'ll succeed.","author":"Juliana Hatfield"},{"quote":"Imagine all the people living life in peace. You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us, and the world will be as one.","author":"John Lennon"},{"quote":"Imagine all the people living life in peace. You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us, and the world will be as one.","author":"John Lennon"},{"quote":"We live in the world when we love it.","author":"Rabindranath Tagore"},{"quote":"You, yourself, as much as anybody in the entire universe, deserve your love and affection.","author":"Buddha"},{"quote":"All art constantly aspires towards the condition of music.","author":"Walter Pater"},{"quote":"The marks humans leave are too often scars.","author":"John Green,  The Fault in Our Stars"},{"quote":"The question isn\'t who is going to let me; it\'s who is going to stop me.","author":"Ayn Rand"},{"quote":"The greatest sign of success for a teacher... is to be able to say, \'The children are now working as if I did not exist.\'","author":"Maria Montessori"},{"quote":"Pakistan not only means freedom and independence but the Muslim Ideology which has to be preserved, which has come to us as a precious gift and treasure and which, we hope other will share with us.","author":"Muhammad Ali Jinnah"},{"quote":"The man who has no inner-life is a slave to his surroundings.","author":"Henri Frederic Amiel"},{"quote":"Love is a smoke made with the fume of sighs.","author":"William Shakespeare"},{"quote":"You can\'t be funny if you don\'t have good material.","author":"Matt LeBlanc"},{"quote":"I am my own experiment. I am my own work of art.","author":"Madonna Ciccone"},{"quote":"Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming.","author":"John Wooden"},{"quote":"I hope everyone that is reading this is having a really good day. And if you are not, just know that in every new minute that passes you have an opportunity to change that.","author":"Gillian Anderson"},{"quote":"It is often said that before you die your life passes before your eyes. It is in fact true. It\'s called living.","author":"Terry Pratchett"},{"quote":"\'Tis better to have loved and lost than never to have loved at all.","author":"Alfred Lord Tennyson"},{"quote":"Our humor turns our anger into a fine art.","author":"Mary Kay Blakely"},{"quote":"I am a real person that cares about his art and cares about what he\'s doing - I have a heart and a soul and want to touch people and give.","author":"LL Cool J"},{"quote":"Coming together is a beginning; keeping together is progress; working together is success.","author":"Henry Ford"},{"quote":"But what we call our despair is often only the painful eagerness of unfed hope.","author":"George Eliot"},{"quote":"Life is like riding a bicycle. To keep your balance, you must keep moving.","author":"Albert Einstein"},{"quote":"Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.","author":"Lao Tzu"},{"quote":"Even a true artist does not always produce art.","author":"Carroll O\'Connor"},{"quote":"It doesn\'t take many people to have a bad sense of humor to get in trouble at a corporation.","author":"Scott Adams"},{"quote":"Success is not final, failure is not fatal: it is the courage to continue that counts.","author":"Winston Churchill"},{"quote":"Hope is the feeling we have that the feeling we have is not permanent.","author":"Mignon McLaughlin"},{"quote":"Smile in the mirror. Do that every morning and you\'ll start to see a big difference in your life.","author":"Yoko Ono"},{"quote":"Every artist writes his own autobiography.","author":"Havelock Ellis"},{"quote":"I\'ve got a great sense of humor.","author":"Anthony Hopkins"},{"quote":"I consider myself Istanbul\'s storyteller. My subject matter is my town. I consider it my job to explore the hidden patterns of my city\'s clandestine corners, its shady, mysterious places, the things I love.","author":"Orhan Pamuk"},{"quote":"I have never let my schooling interfere with my education.","author":"Mark Twain"},{"quote":"The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.","author":"Vince Lombardi"},{"quote":"The future is not Big Government. Self-serving politicians. Powerful bureaucrats. This has been tried, tested throughout history. The result has always been disaster. President Obama, your agenda is not new. It\'s not change, and it\'s not hope.","author":"Rush Limbaugh"},{"quote":"There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.","author":"Jiddu Krishnamurti"},{"quote":"When I am finishing a picture, I hold some God-made object up to it - a rock, a flower, the branch of a tree or my hand - as a final test. If the painting stands up beside a thing man cannot make, the painting is authentic. If there\'s a clash between the two, it\'s bad art.","author":"Marc Chagall"},{"quote":"I think in my case, I had no choice but to have a good sense of humor. I grew up with my dad, Danny Thomas, and George Burns and Bob Hope and Milton Berle and Sid Caesar and all those guys were at our house all the time and telling jokes and making each other laugh.","author":"Marlo Thomas"},{"quote":"That\'s my actual payment, the fact that I can actually make something that I actually enjoy and put on repeat, and it\'s not related to anything else or anyone else\'s thoughts and ideas, it all came from me; I just love that aspect of it.","author":"Akon"},{"quote":"Success is simple. Do what\'s right, the right way, at the right time.","author":"Arnold H. Glasow"},{"quote":"We would not be interested in human beings if we did not have the hope of someday meeting someone worse off than ourselves.","author":"Emile M. Cioran"},{"quote":"Beginning today, treat everyone you meet as if they were going to be dead by midnight. Extend to them all the care, kindness and understanding you can muster, and do it with no thought of any reward. Your life will never be the same again.","author":"Og Mandino"},{"quote":"Draw your pleasure, paint your pleasure, and express your pleasure strongly.","author":"Pierre Bonnard"},{"quote":"Down the road, I\'ll probably have a kid or two or three. And there will probably be political events or spiritual things to comment on, and humor.","author":"Alanis Morissette"},{"quote":"Write what you love. Love will hold you through the hard times and hold the world during the good times.","author":"Mark Z. Danielewski"},{"quote":"Not all those who wander are lost.","author":"J.R.R. Tolkien,  The Fellowship of the Ring"},{"quote":"The starting point of all achievement is desire.","author":"Napoleon Hill"},{"quote":"I hope people start to look at their lives as the most powerful, creative act they will ever offer this world.","author":"Tom Shadyac"},{"quote":"Never stop fighting until you arrive at your destined place - that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realise the great life.","author":"A. P. J. Abdul Kalam"},{"quote":"A great artist can paint a great picture on a small canvas.","author":"Charles Dudley Warner"},{"quote":"You\'ve got to have a sense of humor to keep your sanity.","author":"Lance Bass"},{"quote":"You are ugly when you love her, you are beautiful and fresh, vital and free, modern and poetic when you don\'t... you are more beautiful as an orphan than as your mother\'s son.","author":"Witold Gombrowicz"},{"quote":"Books are the ultimate Dumpees: put them down and they\u2019ll wait for you forever; pay attention to them and they always love you back.","author":"John Green,  An Abundance of Katherines"},{"quote":"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.","author":"Bruce Lee"},{"quote":"She gave up beauty in her tender youth, gave all her hope and joy and pleasant ways; she covered up her eyes lest they should gaze on vanity, and chose the bitter truth.","author":"Christina Rossetti"},{"quote":"He who is not courageous enough to take risks will accomplish nothing in life.","author":"Muhammad Ali"},{"quote":"That\'s the motivation of an artist - to seek attention of some kind.","author":"James Taylor"},{"quote":"I never write anything without humor, just because I like humor, but at the same time, it is a way for anything fantastical to become relatable.","author":"Joss Whedon"},{"quote":"I\'m very girly. I love to talk about diets, exercise, kids, make-up.","author":"Rachel Hunter"},{"quote":"So it\'s not gonna be easy. It\'s going to be really hard; we\'re gonna have to work at this everyday, but I want to do that because I want you. I want all of you, forever, everyday. You and me... everyday.","author":"Nicholas Sparks,  The Notebook"},{"quote":"Don\'t aim for success if you want it; just do what you love and believe in, and it will come naturally.","author":"David Frost"},{"quote":"Don\'t aim for success if you want it; just do what you love and believe in, and it will come naturally.","author":"David Frost"},{"quote":"A lot of people, to attack an outspoken atheist, one of the things they\'ll do is say, \'You are as bad as the fundamentalist Christians.\' And my answer is always, \'I hope so.\'","author":"Penn Jillette"},{"quote":"Gratitude unlocks the fullness of life. It turns what we have into enough, and more. It turns denial into acceptance, chaos to order, confusion to clarity. It can turn a meal into a feast, a house into a home, a stranger into a friend.","author":"Melody Beattie"},{"quote":"Every other artist begins with a blank canvas, a piece of paper the photographer begins with the finished product.","author":"Edward Steichen"},{"quote":"It\'s always amazed me how little attention philosophers, psychologists, or anyone else actually has paid to humor.","author":"Edward de Bono"},{"quote":"Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell.","author":"Joan Crawford"},{"quote":"It takes courage to grow up and become who you really are.","author":"E.E. Cummings"},{"quote":"Success consists of going from failure to failure without loss of enthusiasm.","author":"Winston Churchill"},{"quote":"You want to play another kind of character in another genre, and it\'s been something I\'ve been trying to do if I can in the career so far, and it\'s something I hope to continue because it\'s interesting to me and you get to do different things as an actor.","author":"Keanu Reeves"},{"quote":"Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.","author":"Langston Hughes"},{"quote":"Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.","author":"Langston Hughes"},{"quote":"My attitude towards drawing is not necessarily about drawing. It\'s about making the best kind of image I can make, it\'s about talking as clearly as I can.","author":"Jim Dine"},{"quote":"Humor expands our limited picture frame and gets us to see more than just our problem.","author":"Allen Klein"},{"quote":"And I ask why am I black, they say I was born in sin, and shamed inequity. One of the main songs we used to sing in church makes me sick, \'love wash me and I shall be whiter than snow.","author":"Peter Tosh"},{"quote":"Success is nothing more than a few simple disciplines, practiced every day.","author":"Jim Rohn"},{"quote":"Very much, string theory is simply a work in progress. What we are inching toward every day are predictions that within the realm of current technology we hope to test. It\'s not like we\'re working on a theory that is permanently beyond experiment. That would be philosophy.","author":"Brian Greene"},{"quote":"Earth teach me to forget myself as melted snow forgets its life. Earth teach me resignation as the leaves which die in the fall. Earth teach me courage as the tree which stands all alone. Earth teach me regeneration as the seed which rises in the spring.","author":"William Alexander"},{"quote":"Where the spirit does not work with the hand, there is no art.","author":"Leonardo da Vinci"},{"quote":"If you look at terrorists, they really have no sense of humor.","author":"Al Franken"},{"quote":"I accepted the face that as much as I want to lead others, and love to be around other people, in some essential way, I am something of a loner.","author":"Arthur Ashe"},{"quote":"Try not to become a man of success, but rather try to become a man of value.","author":"Albert Einstein"},{"quote":"I\'m involved in quite a few ministries as a bridge builder, trying to match generous givers and donors to other ministries. Based on my past, I\'m also involved in mainly the prison ministry. I go to jails and prisons and share my story, trying to give them some hope.","author":"Lex Luger"},{"quote":"Without music, life would be a mistake.","author":"Friedrich Nietzsche"},{"quote":"Art is the only way to run away without leaving home.","author":"Twyla Tharp"},{"quote":"My sense of humor is a turkey, and I pull it out of the oven and baste it in reality.","author":"Tracy Morgan"},{"quote":"As love without esteem is capricious and volatile; esteem without love is languid and cold.","author":"Jonathan Swift"},{"quote":"Do not pity the dead, Harry. Pity the living, and, above all those who live without love.","author":"J.K. Rowling,  Harry Potter and the Deathly Hallows"},{"quote":"To die will be an awfully big adventure.","author":"J.M. Barrie,  Peter Pan"},{"quote":"Desire is the key to motivation, but it\'s determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - that will enable you to attain the success you seek.","author":"Mario Andretti"},{"quote":"Desire is the key to motivation, but it\'s determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - that will enable you to attain the success you seek.","author":"Mario Andretti"},{"quote":"I have learned from my experiences in this industry that there is absolutely no way to control people\'s opinions on your performance in your movie. You go out there, promote your film and hope people like the work you did.","author":"Leonardo DiCaprio"},{"quote":"The bird is powered by its own life and by its motivation.","author":"A. P. J. Abdul Kalam"},{"quote":"The bird is powered by its own life and by its motivation.","author":"A. P. J. Abdul Kalam"},{"quote":"The bird is powered by its own life and by its motivation.","author":"A. P. J. Abdul Kalam"},{"quote":"Every artist dips his brush in his own soul, and paints his own nature into his pictures.","author":"Henry Ward Beecher"},{"quote":"There\'s plenty of room for humor in politics, God knows, but it\'s a serious business.","author":"Al Franken"},{"quote":"Nashville is my home, and the reason why I get to do what I love.","author":"Taylor Swift"},{"quote":"Anyone who has never made a mistake has never tried anything new.","author":"Albert Einstein"},{"quote":"Action is the foundational key to all success.","author":"Pablo Picasso"},{"quote":"I\'m quite a confident person in many ways, but there\'s only so much you can hear about being compared to Hattie Jacques. For the record, she was a comedy goddess, but she was 25 stone. I hope I\'m right in saying I\'m not in any way nearly 25 stone.","author":"Miranda Hart"},{"quote":"The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.","author":"Mark Twain"},{"quote":"The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.","author":"Mark Twain"},{"quote":"A picture is a poem without words.","author":"Horace"},{"quote":"If the blood humor is too strong and robust, calm it with balance and harmony.","author":"Xun Zi"},{"quote":"Love is so unconditional; love liberates; love is the reason why I do what I do, and so I think it is the greatest gift we have.","author":"BeBe Winans"},{"quote":"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.","author":"David Brinkley"},{"quote":"Sixty-four thousand dollars for a question, I hope they are asking you the meaning of life.","author":"Paul Scofield"},{"quote":"Just as treasures are uncovered from the earth, so virtue appears from good deeds, and wisdom appears from a pure and peaceful mind. To walk safely through the maze of human life, one needs the light of wisdom and the guidance of virtue.","author":"Buddha"},{"quote":"I have no fear of making changes, destroying the image, etc., because the painting has a life of its own.","author":"Jackson Pollock"},{"quote":"Humor\'s a weapon if you want to make it one.","author":"Bob Newhart"},{"quote":"The measure of a man is not how great his faith is, but how great his love is. We must not let government programs disconnect our souls from each other.","author":"J. C. Watts"},{"quote":"I\'m the one that\'s got to die when it\'s time for me to die, so let me live my life the way I want to.","author":"Jimi Hendrix,  Jimi Hendrix - Axis: Bold as Love"},{"quote":"I\'m the one that\'s got to die when it\'s time for me to die, so let me live my life the way I want to.","author":"Jimi Hendrix,  Jimi Hendrix - Axis: Bold as Love"},{"quote":"Winning isn\'t everything, it\'s the only thing.","author":"Vince Lombardi"},{"quote":"I try to make a dent in people when I can. I figure people drift toward liberalism at a young age, and I always hope that they change when they see how the world really is.","author":"Johnny Ramone"},{"quote":"The Christian life is not a constant high. I have my moments of deep discouragement. I have to go to God in prayer with tears in my eyes, and say, \'O God, forgive me,\' or \'Help me.\'","author":"Billy Graham"},{"quote":"To me, photography is the simultaneous recognition, in a fraction of a second, of the significance of an event.","author":"Henri Cartier-Bresson"},{"quote":"What you see on stage is pretty much the way I am... a dry sense of humor.","author":"Bob Newhart"},{"quote":"I love you, and because I love you, I would sooner have you hate me for telling you the truth than adore me for telling you lies.","author":"Pietro Aretino"},{"quote":"\u2032Classic\u2032 - a book which people praise and don\'t read.","author":"Mark Twain"},{"quote":"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.","author":"Swami Vivekananda"},{"quote":"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.","author":"Swami Vivekananda"},{"quote":"I hope I can help guys come out and say, \'All right, dude, I got a manicure... and I liked it.\'","author":"Ryan Seacrest"},{"quote":"Transformation is a process, and as life happens there are tons of ups and downs. It\'s a journey of discovery - there are moments on mountaintops and moments in deep valleys of despair.","author":"Rick Warren"},{"quote":"Every picture shows a spot with which the artist has fallen in love.","author":"Alfred Sisley"},{"quote":"You know, Freud accepted his lot very stoically and very well and with a sense of humor. He aged and died gracefully, and there\'s a lot to be said for that.","author":"Viggo Mortensen"},{"quote":"Wisdom begins in wonder.","author":"Socrates"},{"quote":"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","author":"Martin Fowler"},{"quote":"Don\'t cry because it\'s over, smile because it happened.","author":"Dr. Seuss"},{"quote":"A person who is happy is not because everything is right in his life, he is happy because of his attitude towards everything in his life is right.","author":"Sundar Pichai"},{"quote":"Don\'t cry because it\'s over, smile because it happened.","author":"Dr. Seuss"},{"quote":"Don\'t cry because it\'s over, smile because it happened.","author":"Dr. Seuss"},{"quote":"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.","author":"Marilyn Monroe"},{"quote":"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.","author":"Marilyn Monroe"},{"quote":"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.","author":"Marilyn Monroe"},{"quote":"Be yourself; everyone else is already taken.","author":"Oscar Wilde"},{"quote":"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.","author":"Albert Einstein"},{"quote":"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.","author":"Albert Einstein"},{"quote":"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.","author":"Albert Einstein"},{"quote":"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.","author":"Bernard M. Baruch"},{"quote":"You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth.","author":"William W. Purkey"},{"quote":"You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth.","author":"William W. Purkey"},{"quote":"You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth.","author":"William W. Purkey"},{"quote":"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.","author":"Dr. Seuss"},{"quote":"A room without books is like a body without a soul.","author":"Marcus Tullius Cicero"},{"quote":"A room without books is like a body without a soul.","author":"Marcus Tullius Cicero"},{"quote":"So many books, so little time.","author":"Frank Zappa"},{"quote":"So many books, so little time.","author":"Frank Zappa"},{"quote":"You only live once, but if you do it right, once is enough.","author":"Mae West"},{"quote":"You only live once, but if you do it right, once is enough.","author":"Mae West"},{"quote":"Be the change that you wish to see in the world.","author":"Mahatma Gandhi"},{"quote":"Be the change that you wish to see in the world.","author":"Mahatma Gandhi"},{"quote":"In three words I can sum up everything I\'ve learned about life: it goes on.","author":"Robert Frost"},{"quote":"Friendship ... is born at the moment when one man says to another \\"What! You too? I thought that no one but myself . . .","author":"C.S. Lewis,  The Four Loves"},{"quote":"If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.","author":"J.K. Rowling,  Harry Potter and the Goblet of Fire"},{"quote":"Don\u2019t walk in front of me\u2026 I may not followDon\u2019t walk behind me\u2026 I may not leadWalk beside me\u2026 just be my friend","author":"Albert Camus"},{"quote":"No one can make you feel inferior without your consent.","author":"Eleanor Roosevelt,  This is My Story"},{"quote":"No one can make you feel inferior without your consent.","author":"Eleanor Roosevelt,  This is My Story"},{"quote":"If you tell the truth, you don\'t have to remember anything.","author":"Mark Twain"},{"quote":"A friend is someone who knows all about you and still loves you.","author":"Elbert Hubbard"},{"quote":"A friend is someone who knows all about you and still loves you.","author":"Elbert Hubbard"},{"quote":"Always forgive your enemies; nothing annoys them so much.","author":"Oscar Wilde"},{"quote":"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","author":"Maya Angelou"},{"quote":"Live as if you were to die tomorrow. Learn as if you were to live forever.","author":"Mahatma Gandhi"},{"quote":"Live as if you were to die tomorrow. Learn as if you were to live forever.","author":"Mahatma Gandhi"},{"quote":"I am so clever that sometimes I don\'t understand a single word of what I am saying.","author":"Oscar Wilde,  The Happy Prince and Other Stories"},{"quote":"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","author":"Martin Luther King Jr.,  A Testament of Hope: The Essential Writings and Speeches"},{"quote":"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","author":"Martin Luther King Jr.,  A Testament of Hope: The Essential Writings and Speeches"},{"quote":"To live is the rarest thing in the world. Most people exist, that is all.","author":"Oscar Wilde"},{"quote":"Without music, life would be a mistake.","author":"Friedrich Nietzsche,  Twilight of the Idols"},{"quote":"Without music, life would be a mistake.","author":"Friedrich Nietzsche,  Twilight of the Idols"},{"quote":"Insanity is doing the same thing, over and over again, but expecting different results.","author":"Narcotics Anonymous"},{"quote":"Insanity is doing the same thing, over and over again, but expecting different results.","author":"Narcotics Anonymous"},{"quote":"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","author":"Ralph Waldo Emerson"},{"quote":"I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they\'re right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.","author":"Marilyn Monroe"},{"quote":"Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.","author":"H. Jackson Brown Jr.,  P.S. I Love You"},{"quote":"We accept the love we think we deserve.","author":"Stephen Chbosky,  The Perks of Being a Wallflower"},{"quote":"We accept the love we think we deserve.","author":"Stephen Chbosky,  The Perks of Being a Wallflower"},{"quote":"It is better to be hated for what you are than to be loved for what you are not.","author":"Andr\xe9 Gide,  Autumn Leaves"},{"quote":"It is better to be hated for what you are than to be loved for what you are not.","author":"Andr\xe9 Gide,  Autumn Leaves"},{"quote":"Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.","author":"Marilyn Monroe"},{"quote":"All that is gold does not glitter,Not all those who wander are lost;The old that is strong does not wither,Deep roots are not reached by the frost.From the ashes a fire shall be woken,A light from the shadows shall spring;Renewed shall be blade that was broken,The crownless again shall be king.","author":"J.R.R. Tolkien,  The Fellowship of the Ring"},{"quote":"The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.","author":"Jane Austen,  Northanger Abbey"},{"quote":"The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.","author":"Jane Austen,  Northanger Abbey"},{"quote":"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.","author":"Albert Einstein"},{"quote":"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.","author":"Albert Einstein"},{"quote":"It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.","author":"Maurice Switzer"},{"quote":"As he read, I fell in love the way you fall asleep: slowly, and then all at once.","author":"John Green,  The Fault in Our Stars"},{"quote":"It is our choices, Harry, that show what we truly are, far more than our abilities.","author":"J.K. Rowling,  Harry Potter and the Chamber of Secrets"},{"quote":"Life is what happens to you while you\'re busy making other plans.","author":"Allen Saunders"},{"quote":"Good friends, good books, and a sleepy conscience: this is the ideal life.","author":"Mark Twain"},{"quote":"Good friends, good books, and a sleepy conscience: this is the ideal life.","author":"Mark Twain"},{"quote":"Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).","author":"Mark Twain"},{"quote":"It does not do to dwell on dreams and forget to live.","author":"J.K. Rowling,  Harry Potter and the Sorcerer\'s Stone"},{"quote":"The fool doth think he is wise, but the wise man knows himself to be a fool.","author":"William Shakespeare,  As You Like It"},{"quote":"A woman is like a tea bag; you never know how strong it is until it\'s in hot water.","author":"Eleanor Roosevelt"},{"quote":"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.","author":"Bil Keane"},{"quote":"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.","author":"Bil Keane"},{"quote":"We are all in the gutter, but some of us are looking at the stars.","author":"Oscar Wilde,  Lady Windermere\'s Fan"},{"quote":"If you don\'t stand for something you will fall for anything.","author":"Gordon A. Eadie"},{"quote":"The man who does not read has no advantage over the man who cannot read.","author":"Mark Twain"},{"quote":"I have not failed. I\'ve just found 10,000 ways that won\'t work.","author":"Thomas A. Edison"},{"quote":"It is not a lack of love, but a lack of friendship that makes unhappy marriages.","author":"Friedrich Nietzsche"},{"quote":"It is not a lack of love, but a lack of friendship that makes unhappy marriages.","author":"Friedrich Nietzsche"},{"quote":"The opposite of love is not hate, it\'s indifference. The opposite of art is not ugliness, it\'s indifference. The opposite of faith is not heresy, it\'s indifference. And the opposite of life is not death, it\'s indifference.","author":"Elie Wiesel"},{"quote":"The opposite of love is not hate, it\'s indifference. The opposite of art is not ugliness, it\'s indifference. The opposite of faith is not heresy, it\'s indifference. And the opposite of life is not death, it\'s indifference.","author":"Elie Wiesel"},{"quote":"The opposite of love is not hate, it\'s indifference. The opposite of art is not ugliness, it\'s indifference. The opposite of faith is not heresy, it\'s indifference. And the opposite of life is not death, it\'s indifference.","author":"Elie Wiesel"},{"quote":"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.","author":"Neil Gaiman,  Coraline"},{"quote":"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.","author":"Neil Gaiman,  Coraline"},{"quote":"Outside of a dog, a book is man\'s best friend. Inside of a dog it\'s too dark to read.","author":"Groucho Marx,  The Essential Groucho: Writings For By And About Groucho Marx"},{"quote":"Outside of a dog, a book is man\'s best friend. Inside of a dog it\'s too dark to read.","author":"Groucho Marx,  The Essential Groucho: Writings For By And About Groucho Marx"},{"quote":"I may not have gone where I intended to go, but I think I have ended up where I needed to be.","author":"Douglas Adams,  The Long Dark Tea-Time of the Soul"},{"quote":"I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.","author":"Albert Einstein"},{"quote":"A day without sunshine is like, you know, night.","author":"Steve Martin"},{"quote":"I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.","author":"Dr. Seuss"},{"quote":"Never put off till tomorrow what may be done day after tomorrow just as well.","author":"Mark Twain"},{"quote":"I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.","author":"Pablo Neruda,  100 Love Sonnets"},{"quote":"I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.","author":"Pablo Neruda,  100 Love Sonnets"},{"quote":"I solemnly swear that I am up to no good.","author":"J.K. Rowling,  Harry Potter and the Prisoner of Azkaban"},{"quote":"That which does not kill us makes us stronger.","author":"Friedrich Nietzsche"},{"quote":"Have you ever been in love? Horrible isn\'t it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.","author":"Neil Gaiman,  The Sandman, Vol. 9: The Kindly Ones"},{"quote":"Love all, trust a few, do wrong to none.","author":"William Shakespeare,  All\'s Well That Ends Well"},{"quote":"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You\'re on your own. And you know what you know. And YOU are the one who\'ll decide where to go...","author":"Dr. Seuss,  Oh, The Places You\'ll Go!"},{"quote":"If you judge people, you have no time to love them.","author":"Mother Teresa"},{"quote":"There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.","author":"Sarah Dessen,  The Truth About Forever"},{"quote":"For every minute you are angry you lose sixty seconds of happiness.","author":"Ralph Waldo Emerson"},{"quote":"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.","author":"Lao Tzu"},{"quote":"My thoughts are stars I cannot fathom into constellations.","author":"John Green,  The Fault in Our Stars"},{"quote":"I love deadlines. I love the whooshing noise they make as they go by.","author":"Douglas Adams,  The Salmon of Doubt"},{"quote":"I love deadlines. I love the whooshing noise they make as they go by.","author":"Douglas Adams,  The Salmon of Doubt"},{"quote":"It is never too late to be what you might have been.","author":"George Eliot"},{"quote":"Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.","author":"Garrison Keillor"},{"quote":"Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.","author":"Garrison Keillor"},{"quote":"A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.","author":"George R.R. Martin,  A Dance with Dragons"},{"quote":"I\'m not upset that you lied to me, I\'m upset that from now on I can\'t believe you.","author":"Friedrich Nietzsche"},{"quote":"If you can\'t explain it to a six year old, you don\'t understand it yourself.","author":"Albert Einstein"},{"quote":"Women and cats will do as they please, and men and dogs should relax and get used to the idea.","author":"Robert A. Heinlein"},{"quote":"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.","author":"J.K. Rowling,  Harry Potter and the Sorcerer\'s Stone"},{"quote":"Love is that condition in which the happiness of another person is essential to your own.","author":"Robert A. Heinlein,  Stranger in a Strange Land"},{"quote":"Love is that condition in which the happiness of another person is essential to your own.","author":"Robert A. Heinlein,  Stranger in a Strange Land"},{"quote":"Sometimes the questions are complicated and the answers are simple.","author":"Dr. Seuss"},{"quote":"I have always imagined that Paradise will be a kind of library.","author":"Jorge Luis Borges"},{"quote":"We read to know we\'re not alone.","author":"William Nicholson,  Shadowlands"},{"quote":"You love me. Real or not real?\\"I tell him, \\"Real.","author":"Suzanne Collins,  Mockingjay"},{"quote":"We don\'t see things as they are, we see them as we are.","author":"Ana\xefs Nin"},{"quote":"Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.","author":"Jim Henson"},{"quote":"All you need is love. But a little chocolate now and then doesn\'t hurt.","author":"Charles M. Schulz"},{"quote":"Everything you can imagine is real.","author":"Pablo Picasso"},{"quote":"Everything you can imagine is real.","author":"Pablo Picasso"},{"quote":"There is no greater agony than bearing an untold story inside you.","author":"Maya Angelou,  I Know Why the Caged Bird Sings"},{"quote":"There is no greater agony than bearing an untold story inside you.","author":"Maya Angelou,  I Know Why the Caged Bird Sings"},{"quote":"Today you are You, that is truer than true. There is no one alive who is Youer than You.","author":"Dr. Seuss,  Happy Birthday to You!"},{"quote":"Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.","author":"John Green,  The Fault in Our Stars"},{"quote":"Never trust anyone who has not brought a book with them.","author":"Lemony Snicket,  Horseradish"},{"quote":"Whenever I feel the need to exercise, I lie down until it goes away.","author":"Paul Terry"},{"quote":"I\'m not afraid of death; I just don\'t want to be there when it happens.","author":"Woody Allen"},{"quote":"I\'m not afraid of death; I just don\'t want to be there when it happens.","author":"Woody Allen"},{"quote":"I\'m not afraid of death; I just don\'t want to be there when it happens.","author":"Woody Allen"},{"quote":"I am nothing special, of this I am sure. I am a common man with common thoughts and I\'ve led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but I\'ve loved another with all my heart and soul, and to me, this has always been enough..","author":"Nicholas Sparks,  The Notebook"},{"quote":"I am the greatest, I said that even before I knew I was.","author":"Muhammad Ali"},{"quote":"If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.","author":"Albert Einstein"},{"quote":"Have you fallen in love with the wrong person yet?\'Jace said, \\"Unfortunately, Lady of the Haven, my one true love remains myself.\\"...\\"At least,\\"she said, \\"you don\'t have to worry about rejection, Jace Wayland.\\"\\"Not necessarily. I turn myself down occasionally, just to keep it interesting.","author":"Cassandra Clare,  City of Bones"},{"quote":"If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.","author":"Joan Powers,  Pooh\'s Little Instruction Book"},{"quote":"Logic will get you from A to Z; imagination will get you everywhere.","author":"Albert Einstein"},{"quote":"One good thing about music, when it hits you, you feel no pain.","author":"Bob Marley"},{"quote":"The more that you read, the more things you will know. The more that you learn, the more places you\'ll go.","author":"Dr. Seuss,  I Can Read With My Eyes Shut!"},{"quote":"Not all of us can do great things. But we can do small things with great love.","author":"Mother Teresa"},{"quote":"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.","author":"J.K. Rowling"},{"quote":"You don\'t get to choose if you get hurt in this world...but you do have some say in who hurts you. I like my choices.","author":"John Green,  The Fault in Our Stars"},{"quote":"You don\u2019t have a soul, Doctor. You are a soul. You have a body, temporarily.","author":"Walter M. Miller Jr.,  A Canticle for Leibowitz"},{"quote":"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.","author":"Bob Marley"},{"quote":"Folks are usually about as happy as they make their minds up to be.","author":"Abraham Lincoln"},{"quote":"Love looks not with the eyes, but with the mind,And therefore is winged Cupid painted blind.","author":"William Shakespeare,  A Midsummer Night\'s Dream"},{"quote":"If you only read the books that everyone else is reading, you can only think what everyone else is thinking.","author":"Haruki Murakami,  Norwegian Wood"},{"quote":"Love is like the wind, you can\'t see it but you can feel it.","author":"Nicholas Sparks,  A Walk to Remember"},{"quote":"Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?","author":"J.K. Rowling,  Harry Potter and the Deathly Hallows"},{"quote":"Sometimes people are beautiful.Not in looks.Not in what they say.Just in what they are.","author":"Markus Zusak,  I Am the Messenger"},{"quote":"You can never get a cup of tea large enough or a book long enough to suit me.","author":"C.S. Lewis"},{"quote":"You can never get a cup of tea large enough or a book long enough to suit me.","author":"C.S. Lewis"},{"quote":"If one cannot enjoy reading a book over and over again, there is no use in reading it at all.","author":"Oscar Wilde"},{"quote":"The difference between genius and stupidity is: genius has its limits.","author":"Alexandre Dumas-fils"},{"quote":"I would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.","author":"Virginia Woolf"},{"quote":"Do what you can, with what you have, where you are.","author":"Theodore Roosevelt"},{"quote":"If you can make a woman laugh, you can make her do anything.","author":"Marilyn Monroe"},{"quote":"To the well-organized mind, death is but the next great adventure.","author":"J.K. Rowling,  Harry Potter and the Sorcerer\'s Stone"},{"quote":"To the well-organized mind, death is but the next great adventure.","author":"J.K. Rowling,  Harry Potter and the Sorcerer\'s Stone"},{"quote":"Listen to the mustn\'ts, child. Listen to the don\'ts. Listen to the shouldn\'ts, the impossibles, the won\'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.","author":"Shel Silverstein"},{"quote":"Listen to the mustn\'ts, child. Listen to the don\'ts. Listen to the shouldn\'ts, the impossibles, the won\'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.","author":"Shel Silverstein"},{"quote":"We\u2019re all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness\u2014and call it love\u2014true love.","author":"Robert Fulghum,  True Love"},{"quote":"I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.","author":"Groucho Marx"},{"quote":"I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.","author":"Groucho Marx"},{"quote":"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.","author":"Helen Keller"},{"quote":"Life isn\'t about finding yourself. Life is about creating yourself.","author":"George Bernard Shaw"},{"quote":"Life isn\'t about finding yourself. Life is about creating yourself.","author":"George Bernard Shaw"},{"quote":"You don\'t love someone because they\'re perfect, you love them in spite of the fact that they\'re not.","author":"Jodi Picoult,  My Sister\'s Keeper"},{"quote":"He\'s like a drug for you, Bella.","author":"Stephenie Meyer,  Eclipse"},{"quote":"A wise girl kisses but doesn\'t love, listens but doesn\'t believe, and leaves before she is left.","author":"Marilyn Monroe"},{"quote":"The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.","author":"Marilyn Monroe"},{"quote":"Life is like riding a bicycle. To keep your balance, you must keep moving.","author":"Albert Einstein"},{"quote":"Some infinities are bigger than other infinities.","author":"John Green,  The Fault in Our Stars"},{"quote":"Love never dies a natural death. It dies because we don\'t know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.","author":"Ana\xefs Nin"},{"quote":"Love never dies a natural death. It dies because we don\'t know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.","author":"Ana\xefs Nin"},{"quote":"There is no friend as loyal as a book.","author":"Ernest Hemingway"},{"quote":"Who are you to judge the life I live?I know I\'m not perfect-and I don\'t live to be-but before you start pointing fingers...make sure you hands are clean!","author":"Bob Marley"},{"quote":"The story so far:In the beginning the Universe was created.This has made a lot of people very angry and been widely regarded as a bad move.","author":"Douglas Adams,  The Restaurant at the End of the Universe"},{"quote":"Time you enjoy wasting is not wasted time.","author":"Marthe Troly-Curtin,  Phrynette Married"},{"quote":"Piglet sidled up to Pooh from behind. \\"Pooh!\\"he whispered.\\"Yes, Piglet?\\"\\"Nothing,\\"said Piglet, taking Pooh\'s paw. \\"I just wanted to be sure of you.","author":"A.A. Milne,  The House at Pooh Corner"},{"quote":"I am good, but not an angel. I do sin, but I am not the devil. I am just a small girl in a big world trying to find someone to love.","author":"Marilyn Monroe"},{"quote":"There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.","author":"Jane Austen,  Northanger Abbey"},{"quote":"Do one thing every day that scares you.","author":"Eleanor Roosevelt"},{"quote":"The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.","author":"Terry Pratchett,  Diggers"},{"quote":"If I had a flower for every time I thought of you...I could walk through my garden forever.","author":"Alfred Lord Tennyson"},{"quote":"It matters not what someone is born, but what they grow to be.","author":"J.K. Rowling,  Harry Potter and the Goblet of Fire"},{"quote":"Some people never go crazy. What truly horrible lives they must lead.","author":"Charles Bukowski"},{"quote":"Reality continues to ruin my life.","author":"Bill Watterson,  The Complete Calvin and Hobbes"},{"quote":"Reality continues to ruin my life.","author":"Bill Watterson,  The Complete Calvin and Hobbes"},{"quote":"Success is not final, failure is not fatal: it is the courage to continue that counts.","author":"Winston S. Churchill"},{"quote":"Success is not final, failure is not fatal: it is the courage to continue that counts.","author":"Winston S. Churchill"},{"quote":"It is what you read when you don\'t have to that determines what you will be when you can\'t help it.","author":"Oscar Wilde"},{"quote":"There is no pretending,\\"Jace said with absolute clarity. \\"I love you, and I will love you until I die, and if there is life after that, I\'ll love you then.","author":"Cassandra Clare,  City of Glass"},{"quote":"So, this is my life. And I want you to know that I am both happy and sad and I\'m still trying to figure out how that could be.","author":"Stephen Chbosky,  The Perks of Being a Wallflower"},{"quote":"I love mankind ... it\'s people I can\'t stand!!","author":"Charles M. Schulz,  The Complete Peanuts, Vol. 5: 1959-1960"},{"quote":"Things change. And friends leave. Life doesn\'t stop for anybody.","author":"Stephen Chbosky,  The Perks of Being a Wallflower"},{"quote":"Remember, we\'re madly in love, so it\'s all right to kiss me anytime you feel like it.","author":"Suzanne Collins,  The Hunger Games"},{"quote":"You don\u2019t forget the face of the person who was your last hope.","author":"Suzanne Collins,  The Hunger Games"},{"quote":"The only way out of the labyrinth of suffering is to forgive.","author":"John Green,  Looking for Alaska"},{"quote":"Go to heaven for the climate and hell for the company.","author":"Benjamin Franklin Wade"},{"quote":"Go to heaven for the climate and hell for the company.","author":"Benjamin Franklin Wade"},{"quote":"The reason I talk to myself is because I\u2019m the only one whose answers I accept.","author":"George Carlin"},{"quote":"The reason I talk to myself is because I\u2019m the only one whose answers I accept.","author":"George Carlin"},{"quote":"I am free of all prejudice. I hate everyone equally.","author":"W.C. Fields"},{"quote":"What really knocks me out is a book that, when you\'re all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn\'t happen much, though.","author":"J.D. Salinger,  The Catcher in the Rye"},{"quote":"What really knocks me out is a book that, when you\'re all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn\'t happen much, though.","author":"J.D. Salinger,  The Catcher in the Rye"},{"quote":"What is success? I think it is a mixture of having a flair for the thing that you are doing; knowing that it is not enough, that you have got to have hard work and a certain sense of purpose.","author":"Margaret Thatcher"},{"quote":"At the moment of death I hope to be surprised.","author":"Ivan Illich"},{"quote":"Unrest of spirit is a mark of life.","author":"Karl A. Menninger"},{"quote":"Humor is something that thrives between man\'s aspirations and his limitations. There is more logic in humor than in anything else. Because, you see, humor is truth.","author":"Victor Borge"},{"quote":"Literature is the art of discovering something extraordinary about ordinary people, and saying with ordinary words something extraordinary.","author":"Boris Pasternak"},{"quote":"Literature is the art of discovering something extraordinary about ordinary people, and saying with ordinary words something extraordinary.","author":"Boris Pasternak"},{"quote":"If everyone is moving forward together, then success takes care of itself.","author":"Henry Ford"},{"quote":"Hope is the only universal liar who never loses his reputation for veracity.","author":"Robert Green Ingersoll"},{"quote":"Ships that pass in the night, and speak each other in passing, only a signal shown, and a distant voice in the darkness; So on the ocean of life, we pass and speak one another, only a look and a voice, then darkness again and a silence.","author":"Henry Wadsworth Longfellow"},{"quote":"Love is the beauty of the soul.","author":"Saint Augustine"},{"quote":"Wit - the salt with which the American humorist spoils his intellectual cookery by leaving it out.","author":"Ambrose Bierce"},{"quote":"Politics is the art of controlling your environment.","author":"Hunter S. Thompson"},{"quote":"He has achieved success who has worked well, laughed often, and loved much.","author":"Elbert Hubbard"},{"quote":"Hope is the last thing a person does before they are defeated.","author":"Henry Rollins"},{"quote":"Life is a gift, given in trust - like a child.","author":"Anne Morrow Lindbergh"},{"quote":"Where there is love there is life.","author":"Mahatma Gandhi"},{"quote":"Where there is love there is life.","author":"Mahatma Gandhi"},{"quote":"Humor brings insight and tolerance. Irony brings a deeper and less friendly understanding.","author":"Agnes Repplier"},{"quote":"Advertising is the art of convincing people to spend money they don\'t have for something they don\'t need.","author":"Will Rogers"},{"quote":"Success makes so many people hate you. I wish it wasn\'t that way. It would be wonderful to enjoy success without seeing envy in the eyes of those around you.","author":"Marilyn Monroe"},{"quote":"The world is bad but not without hope. It is only hopeless when you look at it from an ideal viewpoint.","author":"Friedrich Durrenmatt"},{"quote":"Life is wasted on the living.","author":"Douglas Adams"},{"quote":"A kiss is a lovely trick designed by nature to stop speech when words become superfluous.","author":"Ingrid Bergman"},{"quote":"Humor can alter any situation and help us cope at the very instant we are laughing.","author":"Allen Klein"},{"quote":"Just as pure abstract art is not dogmatic, neither is it decorative.","author":"Piet Mondrian"},{"quote":"Success comes from knowing that you did your best to become the best that you are capable of becoming.","author":"John Wooden"},{"quote":"It\'s time to get real, folks. Hope and change ain\'t working. Hope and change is not a solution. Hope and change is not a job.","author":"Herman Cain"},{"quote":"Life in abundance comes only through great love.","author":"Elbert Hubbard"},{"quote":"Life is the flower for which love is the honey.","author":"Victor Hugo"},{"quote":"Life is the flower for which love is the honey.","author":"Victor Hugo"},{"quote":"The best way to make your audience laugh is to start laughing yourself.","author":"Oliver Goldsmith"},{"quote":"Don\'t only practice your art, but force your way into its secrets; art deserves that, for it and knowledge can raise man to the Divine.","author":"Ludwig van Beethoven"},{"quote":"The most important single ingredient in the formula of success is knowing how to get along with people.","author":"Theodore Roosevelt"},{"quote":"I always believe things are going to work out.","author":"Francoise Sagan"},{"quote":"Life is a culmination of the past, an awareness of the present, an indication of a future beyond knowledge, the quality that gives a touch of divinity to matter.","author":"Charles Lindbergh"},{"quote":"Love is being stupid together.","author":"Paul Valery"},{"quote":"Comedy has to be based on truth. You take the truth and you put a little curlicue at the end.","author":"Sid Caesar"},{"quote":"Architecture is the art of how to waste space.","author":"Philip Johnson"},{"quote":"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.","author":"Leonardo da Vinci"},{"quote":"We often call a certainty a hope, to bring it luck.","author":"Elizabeth Bibesco"},{"quote":"To live is so startling it leaves little time for anything else.","author":"Emily Dickinson"},{"quote":"To live is so startling it leaves little time for anything else.","author":"Emily Dickinson"},{"quote":"You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. You yourself, as much as anybody in the entire universe deserve your love and affection.","author":"Buddha"},{"quote":"There seems to be no lengths to which humorless people will not go to analyze humor. It seems to worry them.","author":"Robert Benchley"},{"quote":"People discuss my art and pretend to understand as if it were necessary to understand, when it\'s simply necessary to love.","author":"Claude Monet"},{"quote":"People discuss my art and pretend to understand as if it were necessary to understand, when it\'s simply necessary to love.","author":"Claude Monet"},{"quote":"Always bear in mind that your own resolution to succeed is more important than any other.","author":"Abraham Lincoln"},{"quote":"Hope is independent of the apparatus of logic.","author":"Norman Cousins"},{"quote":"Seventy percent of success in life is showing up.","author":"Woody Allen"},{"quote":"Seventy percent of success in life is showing up.","author":"Woody Allen"},{"quote":"We\'re born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we\'re not alone.","author":"Orson Welles"},{"quote":"We\'re born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we\'re not alone.","author":"Orson Welles"},{"quote":"Great men are rarely isolated mountain peaks; they are the summits of ranges.","author":"Thomas W. Higginson"},{"quote":"Space is the breath of art.","author":"Frank Lloyd Wright"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When someone loves you, the way they talk about you is different. You feel safe and comfortable.","author":"Jess C. Scott,  The Intern"},{"quote":"When love and skill work together, expect a masterpiece.","author":"John Ruskin"},{"quote":"When love and skill work together, expect a masterpiece.","author":"John Ruskin"},{"quote":"Easter is meant to be a symbol of hope, renewal, and new life.","author":"Janine di Giovanni"},{"quote":"Easter is meant to be a symbol of hope, renewal, and new life.","author":"Janine di Giovanni"},{"quote":"To be able to look back upon one\'s past life with satisfaction is to live twice.","author":"Lord Acton"},{"quote":"The course of true love never did run smooth.","author":"William Shakespeare"},{"quote":"Humor is merely tragedy standing on its head with its pants torn.","author":"Irvin S. Cobb"},{"quote":"Science fiction is any idea that occurs in the head and doesn\'t exist yet, but soon will, and will change everything for everybody, and nothing will ever be the same again. As soon as you have an idea that changes some small part of the world you are writing science fiction. It is always the art of the possible, never the impossible.","author":"Ray Bradbury"},{"quote":"You don\'t have to be a genius or a visionary or even a college graduate to be successful. You just need a framework and a dream.","author":"Michael Dell"},{"quote":"Outside of the cross of Jesus Christ, there is no hope in this world. That cross and resurrection at the core of the Gospel is the only hope for humanity. Wherever you go, ask God for wisdom on how to get that Gospel in, even in the toughest situations of life.","author":"Ravi Zacharias"},{"quote":"Outside of the cross of Jesus Christ, there is no hope in this world. That cross and resurrection at the core of the Gospel is the only hope for humanity. Wherever you go, ask God for wisdom on how to get that Gospel in, even in the toughest situations of life.","author":"Ravi Zacharias"},{"quote":"Any life is made up of a single moment, the moment in which a man finds out, once and for all, who he is.","author":"Jorge Luis Borges"},{"quote":"Love is like a beautiful flower which I may not touch, but whose fragrance makes the garden a place of delight just the same.","author":"Helen Keller"},{"quote":"Wit is the lowest form of humor.","author":"Alexander Pope"},{"quote":"There is nothing in the world of art like the songs mother used to sing.","author":"Billy Sunday"},{"quote":"Success isn\'t measured by money or power or social rank. Success is measured by your discipline and inner peace.","author":"Mike Ditka"},{"quote":"Infuse your life with action. Don\'t wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.","author":"Bradley Whitford"},{"quote":"Infuse your life with action. Don\'t wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.","author":"Bradley Whitford"},{"quote":"Infuse your life with action. Don\'t wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.","author":"Bradley Whitford"},{"quote":"Wrong life cannot be lived rightly.","author":"Theodor Adorno"},{"quote":"The most powerful weapon on earth is the human soul on fire.","author":"Ferdinand Foch"},{"quote":"It is the ability to take a joke, not make one, that proves you have a sense of humor.","author":"Max Eastman"},{"quote":"Every bit of me is devoted to love and art. And I aspire to try to be a teacher to my young fans who feel just like I felt when I was younger. I just felt like a freak. I guess what I\'m trying to say is I\'m trying to liberate them, I want to free them of their fears and make them feel that they can make their own space in the world.","author":"Lady Gaga"},{"quote":"Every bit of me is devoted to love and art. And I aspire to try to be a teacher to my young fans who feel just like I felt when I was younger. I just felt like a freak. I guess what I\'m trying to say is I\'m trying to liberate them, I want to free them of their fears and make them feel that they can make their own space in the world.","author":"Lady Gaga"},{"quote":"There is nothing better than a friend, unless it is a friend with chocolate.","author":"Linda Grayson"},{"quote":"What\'s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.","author":"Bob Dylan"},{"quote":"It is difficult to say what is impossible, for the dream of yesterday is the hope of today and the reality of tomorrow.","author":"Robert H. Schuller"},{"quote":"You have succeeded in life when all you really want is only what you really need.","author":"Vernon Howard"},{"quote":"Love is when he gives you a piece of your soul, that you never knew was missing.","author":"Torquato Tasso"},{"quote":"A humorist is a person who feels bad, but who feels good about it.","author":"Don Herold"},{"quote":"The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.","author":"Albert Einstein"},{"quote":"What a slut time is. She screws everybody.","author":"John Green,  The Fault in Our Stars"},{"quote":"You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one.","author":"John Lennon"},{"quote":"You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one.","author":"John Lennon"},{"quote":"To be successful, you have to have your heart in your business and your business in your heart.","author":"Thomas J. Watson"},{"quote":"He who has health, has hope; and he who has hope, has everything.","author":"Thomas Carlyle"},{"quote":"The greatest trap in our life is not success, popularity or power, but self-rejection.","author":"Henri Nouwen"},{"quote":"The greatest trap in our life is not success, popularity or power, but self-rejection.","author":"Henri Nouwen"},{"quote":"We love life, not because we are used to living but because we are used to loving.","author":"Friedrich Nietzsche"},{"quote":"We love life, not because we are used to living but because we are used to loving.","author":"Friedrich Nietzsche"},{"quote":"Women, as they grow older, rely more and more on cosmetics. Men, as they grow older, rely more and more on a sense of humor.","author":"George Jean Nathan"},{"quote":"I consider skateboarding an art form, a lifestyle and a sport. \'Action sport\' would be the least offensive categorization.","author":"Tony Hawk"},{"quote":"The size of your success is measured by the strength of your desire; the size of your dream; and how you handle disappointment along the way.","author":"Robert Kiyosaki"},{"quote":"All that I am, or hope to be, I owe to my angel mother.","author":"Abraham Lincoln"},{"quote":"Character develops itself in the stream of life.","author":"Johann Wolfgang von Goethe"},{"quote":"Love and compassion are necessities, not luxuries. Without them humanity cannot survive.","author":"Dalai Lama"},{"quote":"Humor is perhaps a sense of intellectual perspective: an awareness that some things are really important, others not; and that the two kinds are most oddly jumbled in everyday affairs.","author":"Christopher Morley"},{"quote":"Tact is the art of making a point without making an enemy.","author":"Isaac Newton"},{"quote":"If you want to be truly successful invest in yourself to get the knowledge you need to find your unique factor. When you find it and focus on it and persevere your success will blossom.","author":"Sydney Madwed"},{"quote":"The great gift of Easter is hope - Christian hope which makes us have that confidence in God, in his ultimate triumph, and in his goodness and love, which nothing can shake.","author":"Basil Hume"},{"quote":"The great gift of Easter is hope - Christian hope which makes us have that confidence in God, in his ultimate triumph, and in his goodness and love, which nothing can shake.","author":"Basil Hume"},{"quote":"Life consists not in holding good cards but in playing those you hold well.","author":"Josh Billings"},{"quote":"Love has reasons which reason cannot understand.","author":"Blaise Pascal"},{"quote":"What a strange world this would be if we all had the same sense of humor.","author":"Bernard Williams"},{"quote":"Where thou art, that is home.","author":"Emily Dickinson"},{"quote":"Formal education will make you a living; self-education will make you a fortune.","author":"Jim Rohn"},{"quote":"Formal education will make you a living; self-education will make you a fortune.","author":"Jim Rohn"},{"quote":"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.","author":"Helen Keller"},{"quote":"The greatest use of a life is to spend it on something that will outlast it.","author":"William James"},{"quote":"Love is an irresistible desire to be irresistibly desired.","author":"Robert Frost"},{"quote":"One can never speak enough of the virtues, the dangers, the power of shared laughter.","author":"Francoise Sagan"},{"quote":"Filmmaking, like any other art, is a very profound means of human communication; beyond the professional pleasure of succeeding or the pain of failing, you do want your film to be seen, to communicate itself to other people.","author":"Kenneth Lonergan"},{"quote":"Think twice before you speak, because your words and influence will plant the seed of either success or failure in the mind of another.","author":"Napoleon Hill"},{"quote":"Black and white are the colors of photography. To me they symbolize the alternatives of hope and despair to which mankind is forever subjected.","author":"Robert Frank"},{"quote":"Life is a succession of moments, to live each one is to succeed.","author":"Corita Kent"},{"quote":"I love that feeling of being in love, the effect of having butterflies when you wake up in the morning. That is special.","author":"Jennifer Aniston"},{"quote":"Wit is an explosion of the compound spirit.","author":"Karl Wilhelm Friedrich Schlegel"},{"quote":"The art of simplicity is a puzzle of complexity.","author":"Douglas Horton"},{"quote":"In order to attain the impossible, one must attempt the absurd.","author":"Miguel de Cervantes"},{"quote":"A good teacher can inspire hope, ignite the imagination, and instill a love of learning.","author":"Brad Henry"},{"quote":"A good teacher can inspire hope, ignite the imagination, and instill a love of learning.","author":"Brad Henry"},{"quote":"Fortunately analysis is not the only way to resolve inner conflicts. Life itself still remains a very effective therapist.","author":"Karen Horney"},{"quote":"Love is the flower you\'ve got to let grow.","author":"John Lennon"},{"quote":"This I conceive to be the chemical function of humor: to change the character of our thought.","author":"Lin Yutang"},{"quote":"In art, the obvious is a sin.","author":"Edward Dmytryk"},{"quote":"Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.","author":"Ralph Waldo Emerson"},{"quote":"Success depends upon previous preparation, and without such preparation there is sure to be failure.","author":"Confucius"},{"quote":"There was never a night or a problem that could defeat sunrise or hope.","author":"Bernard Williams"},{"quote":"The chief danger in life is that you may take too many precautions.","author":"Alfred Adler"},{"quote":"I believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience. That laughter is the only cure for grief. And I believe that love is stronger than death.","author":"Robert Fulghum"},{"quote":"I believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience. That laughter is the only cure for grief. And I believe that love is stronger than death.","author":"Robert Fulghum"},{"quote":"Laughter is involuntary. If it\'s funny you laugh.","author":"Tom Lehrer"},{"quote":"The art of healing comes from nature, not from the physician. Therefore the physician must start from nature, with an open mind.","author":"Paracelsus"},{"quote":"Success is finding satisfaction in giving a little more than you take.","author":"Christopher Reeve"},{"quote":"You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.","author":"Woodrow Wilson"},{"quote":"You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.","author":"Woodrow Wilson"},{"quote":"It takes half your life before you discover life is a do-it-yourself project.","author":"Napoleon Hill"},{"quote":"What force is more potent than love?","author":"Igor Stravinsky"},{"quote":"The satirist shoots to kill while the humorist brings his prey back alive and eventually releases him again for another chance.","author":"Peter De Vries"},{"quote":"Minimal art went nowhere.","author":"Sol LeWitt"},{"quote":"The secrets of success are a good wife and a steady job. My wife told me.","author":"Howard Nemerov"},{"quote":"Forgiving does not erase the bitter past. A healed memory is not a deleted memory. Instead, forgiving what we cannot forget creates a new way to remember. We change the memory of our past into a hope for our future.","author":"Lewis B. Smedes"},{"quote":"What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.","author":"Wayne Dyer"},{"quote":"Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.","author":"Henry Van Dyke"},{"quote":"A sense of humor is the ability to understand a joke - and that the joke is oneself.","author":"Clifton Fadiman"},{"quote":"Perhaps it\'s good for one to suffer. Can an artist do anything if he\'s happy? Would he ever want to do anything? What is art, after all, but a protest against the horrible inclemency of life?","author":"Aldous Huxley"},{"quote":"Perhaps it\'s good for one to suffer. Can an artist do anything if he\'s happy? Would he ever want to do anything? What is art, after all, but a protest against the horrible inclemency of life?","author":"Aldous Huxley"},{"quote":"Frustration, although quite painful at times, is a very positive and essential part of success.","author":"Bo Bennett"},{"quote":"Where there is no vision, there is no hope.","author":"George Washington Carver"},{"quote":"Life is never fair, and perhaps it is a good thing for most of us that it is not.","author":"Oscar Wilde"},{"quote":"If you can learn to love yourself and all the flaws, you can love other people so much better. And that makes you so happy.","author":"Kristin Chenoweth"},{"quote":"Puns are a form of humor with words.","author":"Guillermo Cabrera Infante"},{"quote":"I think you can do anything with comics that you could do in just about any art form.","author":"Harvey Pekar"},{"quote":"Formula for success: rise early, work hard, strike oil.","author":"J. Paul Getty"},{"quote":"A leader is a dealer in hope.","author":"Napoleon Bonaparte"},{"quote":"Life must be lived as play.","author":"Plato"},{"quote":"Love is a force more formidable than any other. It is invisible - it cannot be seen or measured, yet it is powerful enough to transform you in a moment, and offer you more joy than any material possession could.","author":"Barbara de Angelis"},{"quote":"There is no defense against adverse fortune which is so effectual as an habitual sense of humor.","author":"Thomas W. Higginson"},{"quote":"When the bright angel dominates, out comes a great work of art, a Michelangelo David or a Beethoven symphony.","author":"Madeleine L\'Engle"},{"quote":"There is nothing to writing. All you do is sit down at a typewriter and bleed.","author":"Ernest Hemingway"},{"quote":"If you want to achieve things in life, you\'ve just got to do them, and if you\'re talented and smart, you\'ll succeed.","author":"Juliana Hatfield"},{"quote":"If you want to achieve things in life, you\'ve just got to do them, and if you\'re talented and smart, you\'ll succeed.","author":"Juliana Hatfield"},{"quote":"Imagine all the people living life in peace. You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us, and the world will be as one.","author":"John Lennon"},{"quote":"Imagine all the people living life in peace. You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us, and the world will be as one.","author":"John Lennon"},{"quote":"We live in the world when we love it.","author":"Rabindranath Tagore"},{"quote":"You, yourself, as much as anybody in the entire universe, deserve your love and affection.","author":"Buddha"},{"quote":"All art constantly aspires towards the condition of music.","author":"Walter Pater"},{"quote":"The marks humans leave are too often scars.","author":"John Green,  The Fault in Our Stars"},{"quote":"The question isn\'t who is going to let me; it\'s who is going to stop me.","author":"Ayn Rand"},{"quote":"The greatest sign of success for a teacher... is to be able to say, \'The children are now working as if I did not exist.\'","author":"Maria Montessori"},{"quote":"Pakistan not only means freedom and independence but the Muslim Ideology which has to be preserved, which has come to us as a precious gift and treasure and which, we hope other will share with us.","author":"Muhammad Ali Jinnah"},{"quote":"The man who has no inner-life is a slave to his surroundings.","author":"Henri Frederic Amiel"},{"quote":"Love is a smoke made with the fume of sighs.","author":"William Shakespeare"},{"quote":"You can\'t be funny if you don\'t have good material.","author":"Matt LeBlanc"},{"quote":"I am my own experiment. I am my own work of art.","author":"Madonna Ciccone"},{"quote":"Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming.","author":"John Wooden"},{"quote":"I hope everyone that is reading this is having a really good day. And if you are not, just know that in every new minute that passes you have an opportunity to change that.","author":"Gillian Anderson"},{"quote":"It is often said that before you die your life passes before your eyes. It is in fact true. It\'s called living.","author":"Terry Pratchett"},{"quote":"\'Tis better to have loved and lost than never to have loved at all.","author":"Alfred Lord Tennyson"},{"quote":"Our humor turns our anger into a fine art.","author":"Mary Kay Blakely"},{"quote":"I am a real person that cares about his art and cares about what he\'s doing - I have a heart and a soul and want to touch people and give.","author":"LL Cool J"},{"quote":"Coming together is a beginning; keeping together is progress; working together is success.","author":"Henry Ford"},{"quote":"But what we call our despair is often only the painful eagerness of unfed hope.","author":"George Eliot"},{"quote":"Life is like riding a bicycle. To keep your balance, you must keep moving.","author":"Albert Einstein"},{"quote":"Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.","author":"Lao Tzu"},{"quote":"Even a true artist does not always produce art.","author":"Carroll O\'Connor"},{"quote":"It doesn\'t take many people to have a bad sense of humor to get in trouble at a corporation.","author":"Scott Adams"},{"quote":"Success is not final, failure is not fatal: it is the courage to continue that counts.","author":"Winston Churchill"},{"quote":"Hope is the feeling we have that the feeling we have is not permanent.","author":"Mignon McLaughlin"},{"quote":"Smile in the mirror. Do that every morning and you\'ll start to see a big difference in your life.","author":"Yoko Ono"},{"quote":"Every artist writes his own autobiography.","author":"Havelock Ellis"},{"quote":"I\'ve got a great sense of humor.","author":"Anthony Hopkins"},{"quote":"I consider myself Istanbul\'s storyteller. My subject matter is my town. I consider it my job to explore the hidden patterns of my city\'s clandestine corners, its shady, mysterious places, the things I love.","author":"Orhan Pamuk"},{"quote":"I have never let my schooling interfere with my education.","author":"Mark Twain"},{"quote":"The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.","author":"Vince Lombardi"},{"quote":"The future is not Big Government. Self-serving politicians. Powerful bureaucrats. This has been tried, tested throughout history. The result has always been disaster. President Obama, your agenda is not new. It\'s not change, and it\'s not hope.","author":"Rush Limbaugh"},{"quote":"There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.","author":"Jiddu Krishnamurti"},{"quote":"When I am finishing a picture, I hold some God-made object up to it - a rock, a flower, the branch of a tree or my hand - as a final test. If the painting stands up beside a thing man cannot make, the painting is authentic. If there\'s a clash between the two, it\'s bad art.","author":"Marc Chagall"},{"quote":"I think in my case, I had no choice but to have a good sense of humor. I grew up with my dad, Danny Thomas, and George Burns and Bob Hope and Milton Berle and Sid Caesar and all those guys were at our house all the time and telling jokes and making each other laugh.","author":"Marlo Thomas"},{"quote":"That\'s my actual payment, the fact that I can actually make something that I actually enjoy and put on repeat, and it\'s not related to anything else or anyone else\'s thoughts and ideas, it all came from me; I just love that aspect of it.","author":"Akon"},{"quote":"Success is simple. Do what\'s right, the right way, at the right time.","author":"Arnold H. Glasow"},{"quote":"We would not be interested in human beings if we did not have the hope of someday meeting someone worse off than ourselves.","author":"Emile M. Cioran"},{"quote":"Beginning today, treat everyone you meet as if they were going to be dead by midnight. Extend to them all the care, kindness and understanding you can muster, and do it with no thought of any reward. Your life will never be the same again.","author":"Og Mandino"},{"quote":"Draw your pleasure, paint your pleasure, and express your pleasure strongly.","author":"Pierre Bonnard"},{"quote":"Down the road, I\'ll probably have a kid or two or three. And there will probably be political events or spiritual things to comment on, and humor.","author":"Alanis Morissette"},{"quote":"Write what you love. Love will hold you through the hard times and hold the world during the good times.","author":"Mark Z. Danielewski"},{"quote":"Not all those who wander are lost.","author":"J.R.R. Tolkien,  The Fellowship of the Ring"},{"quote":"The starting point of all achievement is desire.","author":"Napoleon Hill"},{"quote":"I hope people start to look at their lives as the most powerful, creative act they will ever offer this world.","author":"Tom Shadyac"},{"quote":"Never stop fighting until you arrive at your destined place - that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realise the great life.","author":"A. P. J. Abdul Kalam"},{"quote":"A great artist can paint a great picture on a small canvas.","author":"Charles Dudley Warner"},{"quote":"You\'ve got to have a sense of humor to keep your sanity.","author":"Lance Bass"},{"quote":"You are ugly when you love her, you are beautiful and fresh, vital and free, modern and poetic when you don\'t... you are more beautiful as an orphan than as your mother\'s son.","author":"Witold Gombrowicz"},{"quote":"Books are the ultimate Dumpees: put them down and they\u2019ll wait for you forever; pay attention to them and they always love you back.","author":"John Green,  An Abundance of Katherines"},{"quote":"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.","author":"Bruce Lee"},{"quote":"She gave up beauty in her tender youth, gave all her hope and joy and pleasant ways; she covered up her eyes lest they should gaze on vanity, and chose the bitter truth.","author":"Christina Rossetti"},{"quote":"He who is not courageous enough to take risks will accomplish nothing in life.","author":"Muhammad Ali"},{"quote":"That\'s the motivation of an artist - to seek attention of some kind.","author":"James Taylor"},{"quote":"I never write anything without humor, just because I like humor, but at the same time, it is a way for anything fantastical to become relatable.","author":"Joss Whedon"},{"quote":"I\'m very girly. I love to talk about diets, exercise, kids, make-up.","author":"Rachel Hunter"},{"quote":"So it\'s not gonna be easy. It\'s going to be really hard; we\'re gonna have to work at this everyday, but I want to do that because I want you. I want all of you, forever, everyday. You and me... everyday.","author":"Nicholas Sparks,  The Notebook"},{"quote":"Don\'t aim for success if you want it; just do what you love and believe in, and it will come naturally.","author":"David Frost"},{"quote":"Don\'t aim for success if you want it; just do what you love and believe in, and it will come naturally.","author":"David Frost"},{"quote":"A lot of people, to attack an outspoken atheist, one of the things they\'ll do is say, \'You are as bad as the fundamentalist Christians.\' And my answer is always, \'I hope so.\'","author":"Penn Jillette"},{"quote":"Gratitude unlocks the fullness of life. It turns what we have into enough, and more. It turns denial into acceptance, chaos to order, confusion to clarity. It can turn a meal into a feast, a house into a home, a stranger into a friend.","author":"Melody Beattie"},{"quote":"Every other artist begins with a blank canvas, a piece of paper the photographer begins with the finished product.","author":"Edward Steichen"},{"quote":"It\'s always amazed me how little attention philosophers, psychologists, or anyone else actually has paid to humor.","author":"Edward de Bono"},{"quote":"Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell.","author":"Joan Crawford"},{"quote":"It takes courage to grow up and become who you really are.","author":"E.E. Cummings"},{"quote":"Success consists of going from failure to failure without loss of enthusiasm.","author":"Winston Churchill"},{"quote":"You want to play another kind of character in another genre, and it\'s been something I\'ve been trying to do if I can in the career so far, and it\'s something I hope to continue because it\'s interesting to me and you get to do different things as an actor.","author":"Keanu Reeves"},{"quote":"Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.","author":"Langston Hughes"},{"quote":"Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.","author":"Langston Hughes"},{"quote":"My attitude towards drawing is not necessarily about drawing. It\'s about making the best kind of image I can make, it\'s about talking as clearly as I can.","author":"Jim Dine"},{"quote":"Humor expands our limited picture frame and gets us to see more than just our problem.","author":"Allen Klein"},{"quote":"And I ask why am I black, they say I was born in sin, and shamed inequity. One of the main songs we used to sing in church makes me sick, \'love wash me and I shall be whiter than snow.","author":"Peter Tosh"},{"quote":"Success is nothing more than a few simple disciplines, practiced every day.","author":"Jim Rohn"},{"quote":"Very much, string theory is simply a work in progress. What we are inching toward every day are predictions that within the realm of current technology we hope to test. It\'s not like we\'re working on a theory that is permanently beyond experiment. That would be philosophy.","author":"Brian Greene"},{"quote":"Earth teach me to forget myself as melted snow forgets its life. Earth teach me resignation as the leaves which die in the fall. Earth teach me courage as the tree which stands all alone. Earth teach me regeneration as the seed which rises in the spring.","author":"William Alexander"},{"quote":"Where the spirit does not work with the hand, there is no art.","author":"Leonardo da Vinci"},{"quote":"If you look at terrorists, they really have no sense of humor.","author":"Al Franken"},{"quote":"I accepted the face that as much as I want to lead others, and love to be around other people, in some essential way, I am something of a loner.","author":"Arthur Ashe"},{"quote":"Try not to become a man of success, but rather try to become a man of value.","author":"Albert Einstein"},{"quote":"I\'m involved in quite a few ministries as a bridge builder, trying to match generous givers and donors to other ministries. Based on my past, I\'m also involved in mainly the prison ministry. I go to jails and prisons and share my story, trying to give them some hope.","author":"Lex Luger"},{"quote":"Without music, life would be a mistake.","author":"Friedrich Nietzsche"},{"quote":"Art is the only way to run away without leaving home.","author":"Twyla Tharp"},{"quote":"My sense of humor is a turkey, and I pull it out of the oven and baste it in reality.","author":"Tracy Morgan"},{"quote":"As love without esteem is capricious and volatile; esteem without love is languid and cold.","author":"Jonathan Swift"},{"quote":"Do not pity the dead, Harry. Pity the living, and, above all those who live without love.","author":"J.K. Rowling,  Harry Potter and the Deathly Hallows"},{"quote":"To die will be an awfully big adventure.","author":"J.M. Barrie,  Peter Pan"},{"quote":"Desire is the key to motivation, but it\'s determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - that will enable you to attain the success you seek.","author":"Mario Andretti"},{"quote":"Desire is the key to motivation, but it\'s determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - that will enable you to attain the success you seek.","author":"Mario Andretti"},{"quote":"I have learned from my experiences in this industry that there is absolutely no way to control people\'s opinions on your performance in your movie. You go out there, promote your film and hope people like the work you did.","author":"Leonardo DiCaprio"},{"quote":"The bird is powered by its own life and by its motivation.","author":"A. P. J. Abdul Kalam"},{"quote":"The bird is powered by its own life and by its motivation.","author":"A. P. J. Abdul Kalam"},{"quote":"The bird is powered by its own life and by its motivation.","author":"A. P. J. Abdul Kalam"},{"quote":"Every artist dips his brush in his own soul, and paints his own nature into his pictures.","author":"Henry Ward Beecher"},{"quote":"There\'s plenty of room for humor in politics, God knows, but it\'s a serious business.","author":"Al Franken"},{"quote":"Nashville is my home, and the reason why I get to do what I love.","author":"Taylor Swift"},{"quote":"Anyone who has never made a mistake has never tried anything new.","author":"Albert Einstein"},{"quote":"Action is the foundational key to all success.","author":"Pablo Picasso"},{"quote":"I\'m quite a confident person in many ways, but there\'s only so much you can hear about being compared to Hattie Jacques. For the record, she was a comedy goddess, but she was 25 stone. I hope I\'m right in saying I\'m not in any way nearly 25 stone.","author":"Miranda Hart"},{"quote":"The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.","author":"Mark Twain"},{"quote":"The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.","author":"Mark Twain"},{"quote":"A picture is a poem without words.","author":"Horace"},{"quote":"If the blood humor is too strong and robust, calm it with balance and harmony.","author":"Xun Zi"},{"quote":"Love is so unconditional; love liberates; love is the reason why I do what I do, and so I think it is the greatest gift we have.","author":"BeBe Winans"},{"quote":"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.","author":"David Brinkley"},{"quote":"Sixty-four thousand dollars for a question, I hope they are asking you the meaning of life.","author":"Paul Scofield"},{"quote":"Just as treasures are uncovered from the earth, so virtue appears from good deeds, and wisdom appears from a pure and peaceful mind. To walk safely through the maze of human life, one needs the light of wisdom and the guidance of virtue.","author":"Buddha"},{"quote":"I have no fear of making changes, destroying the image, etc., because the painting has a life of its own.","author":"Jackson Pollock"},{"quote":"Humor\'s a weapon if you want to make it one.","author":"Bob Newhart"},{"quote":"The measure of a man is not how great his faith is, but how great his love is. We must not let government programs disconnect our souls from each other.","author":"J. C. Watts"},{"quote":"I\'m the one that\'s got to die when it\'s time for me to die, so let me live my life the way I want to.","author":"Jimi Hendrix,  Jimi Hendrix - Axis: Bold as Love"},{"quote":"I\'m the one that\'s got to die when it\'s time for me to die, so let me live my life the way I want to.","author":"Jimi Hendrix,  Jimi Hendrix - Axis: Bold as Love"},{"quote":"Winning isn\'t everything, it\'s the only thing.","author":"Vince Lombardi"},{"quote":"I try to make a dent in people when I can. I figure people drift toward liberalism at a young age, and I always hope that they change when they see how the world really is.","author":"Johnny Ramone"},{"quote":"The Christian life is not a constant high. I have my moments of deep discouragement. I have to go to God in prayer with tears in my eyes, and say, \'O God, forgive me,\' or \'Help me.\'","author":"Billy Graham"},{"quote":"To me, photography is the simultaneous recognition, in a fraction of a second, of the significance of an event.","author":"Henri Cartier-Bresson"},{"quote":"What you see on stage is pretty much the way I am... a dry sense of humor.","author":"Bob Newhart"},{"quote":"I love you, and because I love you, I would sooner have you hate me for telling you the truth than adore me for telling you lies.","author":"Pietro Aretino"},{"quote":"\u2032Classic\u2032 - a book which people praise and don\'t read.","author":"Mark Twain"},{"quote":"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.","author":"Swami Vivekananda"},{"quote":"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.","author":"Swami Vivekananda"},{"quote":"I hope I can help guys come out and say, \'All right, dude, I got a manicure... and I liked it.\'","author":"Ryan Seacrest"},{"quote":"Transformation is a process, and as life happens there are tons of ups and downs. It\'s a journey of discovery - there are moments on mountaintops and moments in deep valleys of despair.","author":"Rick Warren"},{"quote":"Every picture shows a spot with which the artist has fallen in love.","author":"Alfred Sisley"},{"quote":"You know, Freud accepted his lot very stoically and very well and with a sense of humor. He aged and died gracefully, and there\'s a lot to be said for that.","author":"Viggo Mortensen"},{"quote":"If all you have is a hammer, everything looks like a nail","author":"Abraham Maslow"},{"quote":"If I have seen further it is only by standing on the shoulders of giants.","author":"Isaac Newton"},{"quote":"The question isn\u2019t who is going to let me; it\u2019s who is going to stop me.","author":"Vladimir Putin"},{"quote":"A man is but a product of his thoughts. What he thinks he becomes.","author":"Mahatma Gandhi"},{"quote":"Happiness is when what you think, what you say, and what you do are in harmony.","author":"Mahatma Gandhi"},{"quote":"The difference between stupidity and genius is that genius has its limits.","author":"Albert Einstein"},{"quote":"An eye for eye only ends up making the whole world blind.","author":"Mahatma Gandhi"},{"quote":"Time is an illusion. Lunchtime doubly so.","author":"Douglas Adams"},{"quote":"Try to be a rainbow in someones cloud.","author":"Maya Angelou"},{"quote":"The things that we love tell us what we are.","author":"Thomas Aquinas"},{"quote":"I don\'t know what love means. But for what it\'s worth, when i hear the word, I think of you","author":"Blake Auden"},{"quote":"Failure only happens when we give up","author":"Bacharuddin Jusuf Habibie"},{"quote":"I\'m not afraid of storms, for Im learning how to sail my ship.","author":"Louisa May Alcott"},{"quote":"Friendship at first sight, like love at first sight, is said to be the only truth.","author":"Herman Melville"},{"quote":"Stay hungry,Stay foolish.","author":"Steve jobs"},{"quote":"Design is not just what it looks like and feels like. Design is how it works.","author":"Steve jobs"},{"quote":"No matter what profession you are into, always give your 100% commitment to your work. Because it\u2019s not always about winning the game! It\u2019s about the work satisfaction in the end.","author":"M.S. Dhoni"},{"quote":"A dream is not that which you see while sleeping, it is something that does not let you sleep.","author":"A. P. J. Abdul Kalam"},{"quote":"Since we live in an age of innovation, a practical education must prepare a man for work that does not yet exist and cannot yet be clearly defined.","author":" Peter F. Drucker"},{"quote":"It is not until you change your identity to match your life blueprint that you will understand why everything in the past never worked.","author":"Shannon L. Alder"},{"quote":"All dreams can come true, if we have the courage to pursue them.","author":"Walt Disney"},{"quote":"The secret of getting ahead is getting started.","author":"Mark Twain"},{"quote":"Only the paranoid survive.","author":"Andy Grove"},{"quote":"Nothing in this world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan Press On! has solved and always will solve the problems of the human race.","author":"Calvin Coolidge"},{"quote":"We write to taste life twice, in the moment and in retrospect.","author":"Ana\xefs Nin"},{"quote":"Keep your fears to yourself, but share your courage with others.","author":"Robert Lewis Stevenson"},{"quote":"Do not dare not to date","author":"C.S. Lewis"},{"quote":"Life before death, strength before weakness, journey before destination.","author":"Brandon Sanderson"},{"quote":"Life is made of ever so many partings welded together.","author":"Charles Dickens"},{"quote":"Life is trying things to see if they work.","author":"Ray Bradbury"},{"quote":"I find that the harder I work, the more luck I seem to have.","author":"Thomas Jefferson"}]'
        );
      },
      473: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '[{"riddle":"Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still. ","answer":"Teeth"},{"riddle":"This thing all things devours: Birds, beasts, trees, flowers; Gnaws iron, bites steel; Grinds hard stones to meal; Slays king, ruins town, And beats high mountain down","answer":"Time"},{"riddle":"What has roots as nobody sees, Is taller than trees Up, up it goes, And yet never grows?","answer":"Mountain"},{"riddle":"No-legs lay on one-leg, two legs sat near on three legs, four legs got some.","answer":"Fish on a little one-legged table, man at table sitting on a three-legged stool, the cat gets the bones"},{"riddle":"An eye in a blue face Saw an eye in a green face. \'That eye is like to this eye\' Said the first eye, \'But in low place Not in high place.\'","answer":"Sun shining on daisies which are growing in a field"},{"riddle":"Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking","answer":"Fish"},{"riddle":"It cannot be seen, cannot be felt, Cannot be heard, cannot be smelt. It lies behind stars and under hills, And empty holes it fills. It comes first and follows after, Ends life, kills laughter","answer":"Dark"},{"riddle":"Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still. ","answer":"Teeth"},{"riddle":"A box without hinges, key or lid, Yet golden treasure inside is hid.","answer":"Egg"},{"riddle":"Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.","answer":"Wind"},{"riddle":"What has to be broken before you can use it?","answer":"Egg"},{"riddle":"What is always in front of you but can\u2019t be seen?","answer":"The future"},{"riddle":"It goes up and down the stairs without moving.","answer":"Carpet"},{"riddle":"The more there is the less you see.","answer":"Darkness"},{"riddle":"A doctor and a bus driver are both in love with the same woman, an attractive girl named Sarah. The bus driver had to go on a long bus trip that would last a week. Before he left, he gave Sarah seven apples. Why?","answer":"An apple a day keeps the doctor away!"},{"riddle":"What has hands but cannot clap?","answer":"A clock"},{"riddle":"What goes though towns and over hills but never moves?","answer":"Roads!"},{"riddle":"How Long is a Chinese name?","answer":"How Long IS a Chinese name."},{"riddle":"How can a son marry his mother?","answer":"The son is a priest who performed the marriage ceremony."},{"riddle":"Two fathers and two sons walk into a candy store. They each buy something for $0.50 but they only spent $1.50. How is that possible?","answer":"One grandfather, one father and one son makes two fathers and two sons."},{"riddle":"I am lighter than air but a hundred people cannot lift me. Careful, I am fragile. What am I?","answer":"A bubble"},{"riddle":"What month of an year has 28 days?","answer":"All of them"},{"riddle":" What question can you never answer yes to?","answer":"Are you asleep yet?"},{"riddle":"There\u2019s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?","answer":"There aren\u2019t any\u2014it\u2019s a one-story house."},{"riddle":"What gets wet while drying?","answer":"A towell"},{"riddle":" What can\u2019t talk but will reply when spoken to?","answer":"An echo"},{"riddle":"I have branches, but no fruit, trunk or leaves. What am I?","answer":"A bank"},{"riddle":"I\'m tall when I\'m young and I\'m short when I\'m old. What am I?","answer":"A candle"},{"riddle":"What can you break, even if you never pick it up or touch it?","answer":"Promise"},{"riddle":": A man who was outside in the rain without an umbrella or hat didn\u2019t get a single hair on his head wet. Why?","answer":"He was bald"},{"riddle":"I shave every day, but my beard stays the same. What am I?","answer":"Barber"},{"riddle":"I have branches, but no fruit, trunk or leaves. What am I?","answer":"Bank"},{"riddle":"What is black when it\u2019s clean and white when it\u2019s dirty?","answer":"Chalkboard"},{"riddle":"If you\u2019ve got me, you want to share me; if you share me, you haven\u2019t kept me. What am I?","answer":"Secret"},{"riddle":"What has words, but never speaks?","answer":"Book"},{"riddle":"What has a thumb and four fingers, but is not a hand?","answer":"Glove"},{"riddle":"What building has the most stories?","answer":"Library"},{"riddle":"What has 13 hearts, but no other organs?","answer":"Deck of cards"},{"riddle":"What has a thumb and four fingers, but is not a hand?","answer":"Glove"},{"riddle":"What has words, but never speaks?","answer":"Book"},{"riddle":"What has one head, one foot and four legs?","answer":"Bed"},{"riddle":"What has legs, but does not walk?","answer":"Table"},{"riddle":"What has a head, a tail, is brown, and has no legs?","answer":"A Penny"},{"riddle":"What room do ghosts avoid?","answer":"The living room."},{"riddle":"What comes once in a minute, twice in a moment, but never in a thousand years?","answer":"The letter \'m\'."},{"riddle":"A box without hinges, lock or key, yet golden treasure lies within.","answer":"An egg"},{"riddle":"I follow you all the time and copy your every move, but you can\u2019t touch me or catch me. What am I?","answer":"Your shadow"},{"riddle":"How many 9\'s are there between 1 and 100?","answer":"20"},{"riddle":"What did one math book say to another?","answer":"I have so many problems"},{"riddle":"What do mathematics teachers like to eat?","answer":"Pi"},{"riddle":"What goes through cities and fields, but never moves?","answer":"A road"},{"riddle":"What is so fragile that saying its name breaks it?","answer":"Silence"},{"riddle":"What is always in front of you but can\'t be seen?","answer":"The future"},{"riddle":"The more you fill a bag with it, the less the bag weights. What is it?","answer":"Holes"},{"riddle":"Something that requires our mental skill to decode it, our imagination to understand it, our knowledge is tested to its max, it confuses us at every stage, it seems easy yet difficult, only those who are used to, will get through. What is it?","answer":"A riddle."},{"riddle":"You see me once in June, twice in November and not at all in May. What am I?","answer":"The letter \'e\'"},{"riddle":"I am wet when drying. What am I?","answer":"Towel"},{"riddle":"The more you take, the more you leave behind. What am I?","answer":"Footsteps"},{"riddle":"I am an odd number. Take away a letter and I become even. What number am I?","answer":"Seven"},{"riddle":"I\'m tall when I\'m young and I\'m short when I\'m old. What am I?","answer":"A Candle"},{"riddle":"You can drop me from the tallest building and I\'ll be fine, but if you drop me in water I die. What am I?","answer":"Paper"},{"riddle":"Which creature has one voice and yet becomes four-footed and two-footed and three-footed?","answer":"Human"}]'
        );
      },
    },
    t = {};
  function o(a) {
    var n = t[a];
    if (void 0 !== n) return n.exports;
    var s = (t[a] = { exports: {} });
    return e[a](s, s.exports, o), s.exports;
  }
  (o.m = e),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, { a: t }), t;
    }),
    (o.d = function (e, t) {
      for (var a in t)
        o.o(t, a) &&
          !o.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (o.f = {}),
    (o.e = function (e) {
      return Promise.all(
        Object.keys(o.f).reduce(function (t, a) {
          return o.f[a](e, t), t;
        }, [])
      );
    }),
    (o.u = function (e) {
      return "static/js/" + e + ".082f5c22.chunk.js";
    }),
    (o.miniCssF = function (e) {}),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "qoutes-app:";
      o.l = function (a, n, s, i) {
        if (e[a]) e[a].push(n);
        else {
          var h, r;
          if (void 0 !== s)
            for (
              var d = document.getElementsByTagName("script"), l = 0;
              l < d.length;
              l++
            ) {
              var u = d[l];
              if (
                u.getAttribute("src") == a ||
                u.getAttribute("data-webpack") == t + s
              ) {
                h = u;
                break;
              }
            }
          h ||
            ((r = !0),
            ((h = document.createElement("script")).charset = "utf-8"),
            (h.timeout = 120),
            o.nc && h.setAttribute("nonce", o.nc),
            h.setAttribute("data-webpack", t + s),
            (h.src = a)),
            (e[a] = [n]);
          var y = function (t, o) {
              (h.onerror = h.onload = null), clearTimeout(c);
              var n = e[a];
              if (
                (delete e[a],
                h.parentNode && h.parentNode.removeChild(h),
                n &&
                  n.forEach(function (e) {
                    return e(o);
                  }),
                t)
              )
                return t(o);
            },
            c = setTimeout(
              y.bind(null, void 0, { type: "timeout", target: h }),
              12e4
            );
          (h.onerror = y.bind(null, h.onerror)),
            (h.onload = y.bind(null, h.onload)),
            r && document.head.appendChild(h);
        }
      };
    })(),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.p = "/"),
    (function () {
      var e = { 179: 0 };
      o.f.j = function (t, a) {
        var n = o.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) a.push(n[2]);
          else {
            var s = new Promise(function (o, a) {
              n = e[t] = [o, a];
            });
            a.push((n[2] = s));
            var i = o.p + o.u(t),
              h = new Error();
            o.l(
              i,
              function (a) {
                if (o.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var s = a && ("load" === a.type ? "missing" : a.type),
                    i = a && a.target && a.target.src;
                  (h.message =
                    "Loading chunk " + t + " failed.\n(" + s + ": " + i + ")"),
                    (h.name = "ChunkLoadError"),
                    (h.type = s),
                    (h.request = i),
                    n[1](h);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, a) {
          var n,
            s,
            i = a[0],
            h = a[1],
            r = a[2],
            d = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (n in h) o.o(h, n) && (o.m[n] = h[n]);
            if (r) r(o);
          }
          for (t && t(a); d < i.length; d++)
            (s = i[d]), o.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
        },
        a = (self.webpackChunkqoutes_app = self.webpackChunkqoutes_app || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })(),
    (function () {
      "use strict";
      var e = o(791),
        t = o(250),
        a = o(222),
        n = o.n(a),
        s = o(184),
        i = function () {
          var e = n().getRandomQuote();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("p", {
                className: "text-sm text-orange-500 font-cursive",
                children: e.quote,
              }),
              (0, s.jsx)("br", {}),
              (0, s.jsxs)("h6", {
                className:
                  "text-sm font-extralight text-right font-serif text-pink-300 underline capitalize",
                children: ["-", e.author],
              }),
              (0, s.jsx)("br", {}),
            ],
          });
        };
      var h = function () {
          return (0, s.jsxs)("div", {
            className:
              "p-6 bg-gradient-to-br from-slate-900 to-wetAsphalt text-slate-100 text-center",
            children: [
              (0, s.jsxs)("header", {
                className: "bg-gradient-to-br from-orange-800 to-amber-500",
                children: [
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)("h3", {
                    className: "text-stone-100",
                    children: "Inspirational Quotes",
                  }),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)("svg", {
                    viewBox: "0 0 48 48",
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "1.5em",
                    width: "1.5em",
                    children: (0, s.jsx)("path", {
                      fill: "currentColor",
                      d: "M34.85 34q-1.25 0-1.875-1.025T32.9 30.85L35.3 26H29q-1.25 0-2.125-.875T26 23v-8q0-1.25.875-2.125T29 12h8q1.25 0 2.125.875T40 15v10.7q0 .35-.075.7t-.225.65l-2.9 5.75q-.25.55-.775.875Q35.5 34 34.85 34Zm-18 0q-1.25 0-1.875-1.025T14.9 30.85L17.3 26H11q-1.25 0-2.125-.875T8 23v-8q0-1.25.875-2.125T11 12h8q1.25 0 2.125.875T22 15v10.7q0 .35-.075.7t-.225.65l-2.9 5.75q-.25.55-.775.875Q17.5 34 16.85 34Z",
                    }),
                  }),
                  (0, s.jsx)("br", {}),
                  (0, s.jsxs)("h6", {
                    className:
                      "p-3 text-right text-vsm text-wetAsphalt underline font-black font-cursive",
                    children: [
                      "After you have read everything, ",
                      (0, s.jsx)("br", {}),
                      "you may reload the page for more quotes",
                    ],
                  }),
                  (0, s.jsx)("br", {}),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "prose prose-headers:text-right",
                children: [
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(i, {}),
                  (0, s.jsx)("br", {}),
                ],
              }),
            ],
          });
        },
        r = function (e) {
          e &&
            e instanceof Function &&
            o
              .e(787)
              .then(o.bind(o, 787))
              .then(function (t) {
                var o = t.getCLS,
                  a = t.getFID,
                  n = t.getFCP,
                  s = t.getLCP,
                  i = t.getTTFB;
                o(e), a(e), n(e), s(e), i(e);
              });
        };
      t
        .createRoot(document.getElementById("root"))
        .render((0, s.jsx)(e.StrictMode, { children: (0, s.jsx)(h, {}) })),
        r();
    })();
})();
//# sourceMappingURL=main.1e734ca7.js.map