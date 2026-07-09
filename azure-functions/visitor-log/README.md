# CL2U Demo Visitor Log Azure Function

HTTP endpoint used by the demo static site to append nginx-style daily access lines into a **private** blob container in the same demo storage account.

Endpoint:

```text
https://cl2u-demo-log-win.azurewebsites.net/api/visitor-log
```

Storage:

```text
account: demolandingpubliccl2u
container: visitor-logs (private)
blob path: _visitor-logs/access-YYYY-MM-DD.log
```

Each `access-YYYY-MM-DD.log` file is accumulated for that UTC day via append blob.

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

Function app settings required:

```bash
az functionapp config appsettings set \
  --name cl2u-demo-log-win \
  --resource-group staging-cl2u \
  --settings \
    LOG_CONTAINER='visitor-logs' \
    LOG_PREFIX='_visitor-logs' \
    ALLOWED_ORIGIN='https://demolandingpubliccl2u.z48.web.core.windows.net'
```

Read logs with Azure auth/key only:

```bash
TODAY=$(date -u +%F)
az storage blob download \
  --account-name demolandingpubliccl2u \
  --container visitor-logs \
  --name "_visitor-logs/access-$TODAY.log" \
  --file "/tmp/cl2u-access-$TODAY.log" \
  --auth-mode key \
  --overwrite
```
