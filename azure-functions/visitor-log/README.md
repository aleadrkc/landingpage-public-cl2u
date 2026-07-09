# CL2U Demo Visitor Log Azure Function

HTTP endpoint used by the demo static site to append nginx-style access lines into the same demo storage account `$web` container under `_visitor-logs/`.

Endpoint:

```text
https://cl2u-demo-log-win.azurewebsites.net/api/visitor-log
```

Deploy function:

```bash
cd azure-functions/visitor-log
npm install
zip -qr /tmp/cl2u-log-node.zip .
az functionapp deployment source config-zip \
  --name cl2u-demo-log-win \
  --resource-group staging-cl2u \
  --src /tmp/cl2u-log-node.zip
```

Deploy static site without deleting logs:

```bash
npm run build
az storage blob sync \
  --account-name demolandingpubliccl2u \
  --container '$web' \
  --source out/ \
  --delete-destination true \
  --exclude-path '_visitor-logs'
```

Note: `_visitor-logs/` is inside `$web`, so direct log blob URLs are public on the demo static endpoint.
