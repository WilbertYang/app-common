module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "airbnb",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-var": "error",
        "no-tabs": "off",
        "import/prefer-default-export": "off",
        "comma-dangle": [
            "error",
            {
                "arrays": "never",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "never"
            }
        ],
        "no-console": "error",
        "no-await-in-loop": "off",
        "no-bitwise": "off",
        "no-empty": "error",
        "no-eval": "error",
        "no-inline-comments": "error",
        "no-const-assign": "error",
        "semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/consistent-type-definitions": [
            "error",
            "interface"
        ],
    },
    "globals": {
        "document": false,
        "describe": "readonly",
        "beforeAll": "readonly",
        "afterAll": "readonly",
        "test": "readonly",
        "expect": "readonly",
        "beforeEach": "readonly",
        "afterEach": "readonly"
    }
}