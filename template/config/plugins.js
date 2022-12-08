module.exports = ({env}) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-do', providerOptions: {
        key: env('DO_SPACE_ACCESS_KEY'),
        secret: env('DO_SPACE_SECRET_KEY'),
        endpoint: env('DO_SPACE_ENDPOINT'),
        space: env('DO_SPACE_BUCKET'),
        directory: env('DO_SPACE_DIRECTORY'),
      },
    },
  },

  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::page.page', published: {
            url: env('NODE_ENV') === 'production' ? `${env(
              'DEPLOYMENT_URL')}/{slug}` : 'http://localhost:3000/{slug}',
          }, draft: {
            url: env('NODE_ENV') === 'production' ? `${env(
              'DEPLOYMENT_URL')}/{slug}` : 'http://localhost:3000/{slug}',
          },
        }],
    },
  },
})
