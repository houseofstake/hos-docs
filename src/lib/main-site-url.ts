const PRODUCTION_SITE_URL = "https://houseofstake.org";
const STAGING_SITE_URL = "https://staging-gov.houseofstake.org";

export function getMainSiteUrl(hostname: string | null) {
  const isStaging =
    process.env.NODE_ENV !== "production" ||
    process.env.VERCEL_ENV === "preview" ||
    hostname?.toLowerCase().includes("staging");

  return isStaging ? STAGING_SITE_URL : PRODUCTION_SITE_URL;
}
