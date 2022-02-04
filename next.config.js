module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/products',
          permanent: true,
        },
      ]
    },
  }