import Head from "next/head";
import {
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "../lib/constants";

type Props = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
};

const SocialMeta = ({
  title = SITE_NAME,
  description = SITE_DESCRIPTION,
  path = "/",
  type = "website",
}: Props) => {
  return (
    <Head>
      <meta key="description" name="description" content={description} />
      <meta key="og:type" property="og:type" content={type} />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:url" property="og:url" content={`${SITE_URL}${path}`} />
      <meta key="og:image" property="og:image" content={OG_IMAGE_URL} />
      <meta key="og:image:width" property="og:image:width" content="1200" />
      <meta key="og:image:height" property="og:image:height" content="630" />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta key="twitter:image" name="twitter:image" content={OG_IMAGE_URL} />
      <link key="canonical" rel="canonical" href={`${SITE_URL}${path}`} />
    </Head>
  );
};

export default SocialMeta;
