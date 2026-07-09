import type { MetadataRoute } from 'next';

const BASE_URL = 'https://demolandingpubliccl2u.z48.web.core.windows.net';
const LAST_MODIFIED = new Date('2026-07-08T00:00:00.000Z');

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/privacy-statement/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faqs/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/docs/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-publishers/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/saved-business/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/saved-business/create-a-new-list-for-your-favorite-business/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/saved-business/add-a-business-into-your-saved-business-list/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/saved-business/manage-your-saved-business-list/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/saved-business/remove-a-business-from-your-saved-business-list/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/official-shop-programme/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/official-shop-programme/create-an-official-shop-programme/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/official-shop-programme/add-a-shop-or-an-event-organizer-to-the-official-shop-programme-you-created/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/official-shop-programme/add-tournament-to-official-shop-programme/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/shops/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/shops/manage-shops-selling-your-products/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/shops/give-official-badge-to-the-shops/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/staff/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/staff/create-roles-for-staff/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/staff/add-staff/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/staff/edit-staff/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/staff/delete-staff/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/staff/manage-the-data-access-limitation-for-the-staff/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/manage-adventure-campaign/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/create-adventure-campaign/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/edit-adventure-campaign/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/delete-adventure-campaign/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/campaigns/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/campaigns/manage-campaigns/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/tournament-criteria/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/tournament-criteria/manage-tournament-criteria/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-distributors/tournament-criteria/how-to-apply-tournament-criteria/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/docs/cl2u-user-guide/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/docs/cl2u-user-guide-for-business-owners/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-publishers/about/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/docs/cl2u-additional-guide-for-publishers/about/publisher-role/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
