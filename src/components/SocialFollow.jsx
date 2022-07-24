import Link from 'next/link'
import Image from 'next/image'
import formatNumber from '@/utils/NumberFormatter'

export function SocialFollow({ social, ...props }) {
    return (
      <div>
        <div {...props}>
          {social.map(([img, url, alt, count]) => (
            <Link key={alt} href={url}>
              <a target="_blank" className="inline-flex justify-center rounded-lg p-2 bg-gray-300">
                <Image
                  width={25}
                  height={25}
                  src={img}
                  alt={alt}
                  layout="fixed"
                />
                { count ? <span className="px-2 ml-1 text-sm text-black bg-white rounded">{ formatNumber(count) }</span> : '' }
              </a>
            </Link>
          ))}
        </div>
      </div>
    )
  }