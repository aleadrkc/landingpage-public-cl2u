const { BlobServiceClient } = require('@azure/storage-blob');

const allowedOrigins = (process.env.ALLOWED_ORIGINS || process.env.ALLOWED_ORIGIN || 'https://demolandingpubliccl2u.z48.web.core.windows.net')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const containerName = process.env.LOG_CONTAINER || 'visitor-logs';
const prefix = process.env.LOG_PREFIX || '_visitor-logs';
const conn = process.env.LOG_STORAGE_CONNECTION_STRING || process.env.AzureWebJobsStorage;

function headers(req) {
  const origin = req && req.headers && req.headers.origin;
  const allowOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Cache-Control': 'no-store'
  };
}

function safe(value, max = 512) {
  if (value === undefined || value === null) return '-';
  const out = String(value).replace(/[\r\n]/g, ' ').replace(/"/g, "'").trim();
  return (out || '-').slice(0, max);
}

function stamp(d) {
  const day = String(d.getUTCDate()).padStart(2, '0');
  const mon = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getUTCMonth()];
  const year = d.getUTCFullYear();
  const hh = String(d.getUTCHours()).padStart(2, '0');
  const mm = String(d.getUTCMinutes()).padStart(2, '0');
  const ss = String(d.getUTCSeconds()).padStart(2, '0');
  return `${day}/${mon}/${year}:${hh}:${mm}:${ss} +0000`;
}

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = { status: 204, headers: headers(req), body: '' };
    return;
  }

  try {
    const data = typeof req.body === 'object' && req.body ? req.body : JSON.parse(req.rawBody || '{}');
    const now = new Date();
    const rawIp = (req.headers['x-forwarded-for'] || req.headers['x-client-ip'] || '').split(',')[0].trim();
    const ipOnly = rawIp.startsWith('[') ? rawIp.replace(/^\[|\].*$/g, '') : rawIp.replace(/:\d+$/g, '');
    const ip = safe(ipOnly || '-', 128);
    const method = safe(data.method || 'GET', 12);
    const path = safe(data.path || data.pathname || '/', 2048);
    const status = Number.parseInt(data.status || '200', 10) || 200;
    const size = Number.parseInt(data.size || '0', 10) || 0;
    const ref = safe(data.referrer || data.ref || '-', 2048);
    const ua = safe(data.ua || req.headers['user-agent'] || '-', 2048);
    const line = `${ip} - - [${stamp(now)}] "${method} ${path} HTTP/1.1" ${status} ${size} "${ref}" "${ua}"\n`;

    const blobService = BlobServiceClient.fromConnectionString(conn);
    const blobName = `${prefix}/access-${now.toISOString().slice(0,10)}.log`;
    const appendBlob = blobService.getContainerClient(containerName).getAppendBlobClient(blobName);
    try {
      await appendBlob.create({ blobHTTPHeaders: { blobContentType: 'text/plain; charset=utf-8' } });
    } catch (e) {
      if (e.statusCode !== 409) throw e;
    }
    await appendBlob.appendBlock(line, Buffer.byteLength(line));
    context.res = { status: 204, headers: headers(req), body: '' };
  } catch (err) {
    context.log.error(err);
    context.res = { status: 500, headers: headers(req), body: JSON.stringify({ error: String(err && err.message || err) }) };
  }
};
