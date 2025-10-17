import { createElementBlock as r, openBlock as s, normalizeClass as n, toDisplayString as c } from "vue";
const d = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [o, l] of e)
    a[o] = l;
  return a;
}, i = ["disabled"], u = {
  __name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: "Label"
    },
    color: {
      validator(t, e) {
        return ["primary", "secondary", "ghost", "destructive"].includes(t);
      },
      default: "primary"
    },
    size: {
      validator(t, e) {
        return ["auto", "small", "medium", "big", "full"].includes(t);
      }
    }
  },
  setup(t) {
    return (e, a) => (s(), r("button", {
      class: n([t.color, t.size]),
      disabled: t.disabled
    }, c(t.label), 11, i));
  }
}, m = /* @__PURE__ */ d(u, [["__scopeId", "data-v-7da0209b"]]);
export {
  m as Button
};
