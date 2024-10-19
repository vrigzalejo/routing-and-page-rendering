import Image from 'next/image';
import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';

export default function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}
