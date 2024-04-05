import { Metadata } from 'next';

export function generateMetadata(
  title: string,
  description?: string
): Metadata {
  const baseTitle = 'Chiro Sint-Jan Houthulst';
  const baseDescription =
    'Chiro Houthulst is een jeugdbeweging in Houthulst. Elke zondag van 14u tot 17u is er chiro voor alle kinderen vanaf het derde kleuter. Ook organiseren we tal van andere activiteiten zoals weekends, kamp, fuiven ...';
  const authorName = 'Lars Salembier';
  const authorUrl = 'https://github.com/LarsSalembier';

  return {
    metadataBase: new URL('https://chirohouthulst.be'),
    title: `${title} - ${baseTitle}`,
    description: description || baseDescription,
    applicationName: baseTitle,
    authors: {
      url: new URL(authorUrl),
      name: authorName,
    },
    generator: 'Next.js',
    keywords: [
      title,
      title + ' Chiro Houthulst',
      title + ' Chiro Sint-Jan Houthulst',
      title + ' Chiro Sint Jan Houthulst',
      title + ' Chiro Sint-Jan',
      title + ' Chiro Sint Jan',
      title + ' Sint-Jan Houthulst',
      title + ' Sint Jan Houthulst',
      title + ' Sint-Jan',
      title + ' Sint Jan',
      title + ' jeugdbeweging Houthulst',
      title + ' chirohouthulst',
      'Chiro Houthulst',
      'chirohouthulst',
      'chiro',
      'houthulst',
      'Chiro Sint-Jan Houthulst',
      'Chiro Sint Jan Houthulst',
      'Chiro Sint-Jan',
      'Chiro Sint Jan',
      'Sint-Jan Houthulst',
      'Sint Jan Houthulst',
      'Sint-Jan',
      'Sint Jan',
      'jeugdbeweging Houthulst',
    ],
    creator: authorName,
    publisher: authorName,
    robots: 'index, follow',
    referrer: 'no-referrer',
    icons: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: 'icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: 'icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: 'icons/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        url: 'icons/safari-pinned-tab.svg',
        color: '#104f29',
      },
    ],
    manifest: 'icons/manifest.json',
    openGraph: {
      type: 'website',
      locale: 'nl_BE',
      url: 'https://chirohouthulst.be',
      siteName: baseTitle,
      title: `${title} - ${baseTitle}`,
      description: description || baseDescription,
      images: [
        {
          url: 'https://chirohouthulst.be/kampgroepsfoto.jpg',
          width: 2048,
          height: 1536,
          type: 'image/jpeg',
          alt: 'Chiro Houthulst op kamp',
        },
      ],
    },
    twitter: {
      site: '@chirohouthulst',
      siteId: '@chirohouthulst',
      creator: '@LarsSalembier',
      creatorId: '@LarsSalembier',
      description: description || baseDescription,
      title: `${title} - ${baseTitle}`,
      images: {
        url: 'https://chirohouthulst.be/kampgroepsfoto.jpg',
        width: 2048,
        height: 1536,
        type: 'image/jpeg',
        alt: 'Chiro Houthulst op kamp',
      },
      card: 'summary_large_image',
    },
    appleWebApp: {
      capable: true,
      title: baseTitle,
      startupImage: [
        {
          url: 'icons/apple-touch-icon.png',
        },
      ],
      statusBarStyle: 'black-translucent',
    },
    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true,
    },
    category: 'Chiro',
    classification: 'Chiro',
  };
}
