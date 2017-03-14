module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  "plugins": [
    "babel",
    "flowtype",
    "immutable",
    "import",
    "lodash",
    "mocha",
    "react"
  ],
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "plugin:lodash/recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    // eslint *****************************************************************
    // Possible Errors
    "no-await-in-loop": "off",
    "no-compare-neg-zero": "error",
    "no-extra-parens": "off",
    "no-prototype-builtins": "error",
    "no-template-curly-in-string": "error",
    "no-unsafe-negation": "error",
    "valid-jsdoc": "off",

    // Best Practices
    "accessor-pairs": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "class-methods-use-this": "off",
    "complexity": "off", // unfortunately, reducers screw this up
    "consistent-return": "off",
    "curly": "error",
    "default-case": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "off", // has trouble with promise.catch()
    "eqeqeq": "error",
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "warn",
    "no-div-regex": "warn",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "off",
    "no-implied-eval": "error",
    "no-invalid-this": "off", // handled by babel plugin
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-multi-spaces": "off",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-proto": "error",
    "no-restricted-properties": "off",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "warn",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-with": "error",
    "prefer-promise-reject-errors": "error",
    "radix": "error",
    "require-await": "error",
    "vars-on-top": "off",
    "wrap-iife": "warn",
    "yoda": "off",

    // Strict Mode
    "strict": "off",

    // Variables
    "init-declarations": "off",
    "no-catch-shadow": "off",
    "no-label-var": "error",
    "no-restricted-globals": "error",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-use-before-define": "error",

    // Node.js and CommonJS
    "callback-return": "off",
    "global-require": "warn",
    "handle-callback-err": "off",
    "no-mixed-requires": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-restricted-modules": "off",
    "no-sync": "warn",

    // Stylistic Issues
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": "error",
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": "off",
    "capitalized-comments": "off",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": "off",
    "computed-property-spacing": ["error", "never"],
    "consistent-this": "off",
    "eol-last": "error",
    "func-call-spacing": ["error", "never"],
    "func-name-matching": "off",
    "func-names": "off",
    "func-style": "off",
    "id-blacklist": "off",
    "id-length": ["error", { "min": 2, "exceptions": ["i", "x", "y", "a", "b", "_"] }],
    "id-match": "off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "jsx-quotes": "error",
    "key-spacing": ["error", { "beforeColon": false, "mode": "minimum" }],
    "keyword-spacing": "error",
    "line-comment-position": "off",
    "linebreak-style": "off",
    "lines-around-comment": "off",
    "lines-around-directive": "error",
    "max-depth": "error",
    "max-len": ["warn", { "code": 120, "ignoreStrings": true }],
    "max-lines": ["warn", { "skipBlankLines": true, "max": 300}],
    "max-nested-callbacks": ["warn", { "max": 4 }],
    "max-params": ["warn", { "max": 5 }],
    "max-statements": "off",
    "max-statements-per-line": ["error", { "max": 3 }],
    "multiline-ternary": "off",
    "new-cap": "off", // handled by babel plugin
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "off",
    "no-array-constructor": "error",
    "no-bitwise": "off",
    "no-continue": "off",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "warn",
    "no-restricted-syntax": "off",
    "no-tabs": "error",
    "no-ternary": "off",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "off", // handled by babel plugin
    "object-curly-spacing": ["warn", "always", { "arraysInObjects": false }],
    "object-property-newline": "off",
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": "off",
    "operator-assignment": "error",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "quote-props": ["error", "consistent-as-needed"],
    "quotes": ["error", "single"],
    "require-jsdoc": "off",
    "semi": "off", // handled by babel plugin
    "semi-spacing": "error",
    "sort-keys": "warn",
    "sort-vars": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": "off",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "off",
    "template-tag-spacing": "error",
    "unicode-bom": "error",
    "wrap-regex": "error",

    // ECMAScript 6
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "generator-star-spacing": ["error", "before"],
    "no-confusing-arrow": ["error", { "allowParens": true }],
    "no-duplicate-imports": "error",
    "no-restricted-imports": "off",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": "off",
    "prefer-const": "error",
    "prefer-destructuring": ["error", { "array": false }],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "warn",
    "rest-spread-spacing": "error",
    "sort-imports": "off",
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error",

    // babel *******************************************************************
    "babel/new-cap": ["warn", { "capIsNewExceptions": ["Intercom", "OnClickOutside"] }],
    "babel/no-invalid-this": "error",
    "babel/object-curly-spacing": ["error", "always", { "arraysInObjects": true }],
    "babel/semi": "error",

    // immutable ***************************************************************
    "immutable/no-mutation": "off",

    // flowtype ****************************************************************
    "flowtype/no-dupe-keys": "error",
    "flowtype/no-primitive-constructor-types": "error",
    "flowtype/object-type-delimiter": "error",
    "flowtype/require-variable-type": "off",
    "flowtype/semi": ["error", "always"],
    "flowtype/sort-keys": "error",

    // import ******************************************************************
    // static analysis
    "import/default": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-internal-modules": "off",
    "import/no-restricted-paths": "error",
    "import/no-unresolved": "off", // would be really nice if we could get this to work
    "import/no-webpack-loader-syntax": "error",

    // helpful warnings
    "import/export": "error",
    "import/no-deprecated": "off", // we don't use JSDoc
    "import/no-extraneous-dependencies": "warn",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",

    // module systems
    "import/no-amd": "error",
    "import/no-commonjs": "error",
    "import/no-nodejs-modules": "error",
    "import/unambiguous": "error",

    // style guide
    "import/extensions": "error",
    "import/first": "error",
    "import/max-dependencies": "warn",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-named-default": "error",
    "import/no-namespace": "error",
    "import/no-unassigned-import": "off",
    "import/order": "off",
    "import/prefer-default-export": "off",

    // lodash ******************************************************************
    "lodash/identity-shorthand": ["error", "always"],
    "lodash/matches-prop-shorthand": ["error", "never"],
    "lodash/matches-shorthand": ["error", "always"],
    "lodash/prefer-lodash-method": "off",
    "lodash/prefer-lodash-typecheck": "off",
    "lodash/prefer-noop": "off",
    "lodash/preferred-alias": "off",

    // react *******************************************************************
    // JSX rules
    "react/jsx-boolean-value": "error",
    "react/jsx-closing-bracket-location": ["warn", "tag-aligned"],
    "react/jsx-curly-spacing": ["warn", "never"],
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename": "off",
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-handler-names": "off",
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-max-props-per-line": ["error", { "maximum": 4 }],
    "react/jsx-no-bind": ["warn", { "ignoreRefs": true }],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-pascal-case": "warn",
    "react/jsx-sort-props": "error",
    "react/jsx-space-before-closing": ["error", "always"],
    "react/jsx-tag-spacing": "error",
    "react/jsx-wrap-multilines": "error",
    "rezct/jsx-no-string-literals": "off",

    // react rules
    "react/forbid-component-props": "off",
    "react/forbid-propTypes": "off", // FlowType handles this
    "react/no-array-index-key": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "warn",
    "react/no-danger-with-children": "warn",
    "react/no-did-mount-set-state": ["error", "disallow-in-func"],
    "react/no-did-update-set-state": ["error", "disallow-in-func"],
    "react/no-multi-comp": ["error", { "ignoreStateless": true }],
    "react/no-set-state": "off",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "off",
    "react/no-unused-prop-types": "off", // FlowType handles this
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": ["error", { "ignorePureComponents": true }],
    "react/prop-types": "off", // FlowType handles this
    "react/require-default-props": "warn",
    "react/require-optimization": "warn",
    "react/self-closing-comp": "error",
    "react/sort-comp": [ "error", { "order": [ "type-annotations", "static-methods", "lifecycle", "everything-else", "render" ] } ],
    "react/sort-prop-types": "off", // FlowType makes irrelevant
    "react/style-prop-object": "error"
  },
  "globals": {
    "bzTrack": false,
    "bzLog": false
  }
}
