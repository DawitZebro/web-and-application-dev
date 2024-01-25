module.exports = {
    env: {
      es6: true,
      node: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 2018,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      // Add more rules as needed
    },
  };
  

module.exports = {
    
    extends: ['semistandard'],
    
  };
  

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
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
    }
}
