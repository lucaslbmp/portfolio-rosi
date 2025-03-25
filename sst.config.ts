// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "portfolio-rosi",
      region: "us-east-1",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb", {
      environment: {
        DATABASE_URL: process.env.DATABASE_URL!,
        DIRECT_URL: process.env.DIRECT_URL!,
        ACCESS_KEY_ID_AWS: process.env.ACCESS_KEY_ID_AWS!,
        SECRET_ACCESS_KEY_AWS: process.env.SECRET_ACCESS_KEY_AWS!,

        REGION_AWS: process.env.REGION_AWS!,
        BUCKET_NAME_AWS: process.env.BUCKET_NAME_AWS!,
        NEXT_PUBLIC_CLOUDFRONT_DOMAIN:
          process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN!,

        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL!,
        AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID!,
        AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET!,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL!,
        AUTH_SECRET: process.env.AUTH_SECRET!,
        ALLOWED_USERS: process.env.ALLOWED_USERS!,

        AUTH_TRUST_HOST: process.env.AUTH_TRUST_HOST!,
      },
    });
  },
});
