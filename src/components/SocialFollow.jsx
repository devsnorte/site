import Link from 'next/link'
import Image from 'next/image'
import formatNumber from '@/utils/NumberFormatter'

export function SocialFollow({ social, ...props }) {
  return (
    <div>
      <div {...props}>
        {social.map(([img, url, alt, count], index) => (
          <Link legacyBehavior key={alt} href={url}>
            <a
              target="_blank"
              className="inline-flex justify-center rounded-lg bg-gray-300 p-2"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <Image
                width={25}
                height={25}
                src={img}
                alt={alt}
                layout="fixed"
              />
              {count ? (
                <span className="ml-1 rounded bg-white px-2 text-sm text-black">
                  {formatNumber(count)}
                </span>
              ) : (
                ''
              )}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
