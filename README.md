# NextJS Micro Frontend App

## Container App
### Step 1: Create Main Container App.
```
npx create-next-app container
```

### Step 2: Remove Current Node Modules and Reinstall
```
cd container
rm -rf node_modules
yarn
```

### Step 3: Update Package.json
```
"resolutions": {
  "webpack": "5.4.0"
},
```

### Step 4: Create Product Listing App.
```
npx create-next-app product-listing
```

### Step 5: Create NextJS Config.
```
vi container/next.config.js
```

```
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

```

## Product Listing App


### Step 1: Create Product Listing App.
```
npx create-next-app product-listing
```

### Step 2: Remove Current Node Modules
```
cd product-listing
rm -rf node_modules
```