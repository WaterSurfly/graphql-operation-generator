#!/usr/bin/env node
node index.js --schemaFilePath ./Shared/graphql --destDirPath ./Shared/operations --depthLimit 5 --ext graphql

sleep 2

yarn run codegen