# landingpage-public-cl2u

Static homepage-only clone of https://public.cl2u.net/ for Azure Blob Static Website staging.

Demo endpoint: https://demolandingpubliccl2u.z48.web.core.windows.net/

## Notes

- Visible homepage cloned only.
- Source DOM contained hidden/offscreen casino SEO-spam links; these were intentionally excluded.
- Build: `npm run build`
- Deploy: `az storage blob sync --account-name demolandingpubliccl2u --container '$web' --source out/ --delete-destination true`
