module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "no-console": "off",
        "no-unused-vars": "local",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "allow": [
            "warn", 
            "error",
            "log"
        ]
    }
};