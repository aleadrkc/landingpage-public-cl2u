# CL2U Visitor Log Azure Function

HTTP endpoint used by static CL2U sites to append nginx-style daily access lines into a **private** blob container in the same storage account as the site.

## Demo

```text
site: https://demolandingpubliccl2u.z48.web.core.windows.net/
function: https://cl2u-demo-log-win.azurewebsites.net/api/visitor-log
storage account: demolandingpubliccl2u
container: visitor-logs (private)
blob path: _visitor-logs/access-YYYY-MM-DD.log
```

## Live

```text
site: https://public.cl2u.net/ or https://livelandingpubliccl2u.z48.web.core.windows.net/
function: https://cl2u-live-log-win.azurewebsites.net/api/visitor-log
storage account: livelandingpubliccl2u
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
  --name <function-app-name> \
  --resource-group <resource-group> \
  --src /tmp/cl2u-log-node.zip
```

Function app settings required:

```bash
az functionapp config appsettings set \
  --name <function-app-name> \
  --resource-group <resource-group> \
  --settings \
    LOG_CONTAINER='visitor-logs' \
    LOG_PREFIX='_visitor-logs' \
    ALLOWED_ORIGINS='https://site.example,https://custom-domain.example'
```

Read logs with Azure auth/key only:

```bash
TODAY=$(date -u +%F)
az storage blob download \
  --account-name <storage-account> \
  --container visitor-logs \
  --name "_visitor-logs/access-$TODAY.log" \
  --file "/tmp/cl2u-access-$TODAY.log" \
  --auth-mode key \
  --overwrite
```

Live CNAME target:

```text
public.cl2u.net CNAME livelandingpubliccl2u.z48.web.core.windows.net
```
