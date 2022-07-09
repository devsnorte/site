import Link from 'next/link'
import Image from 'next/image'

import logoDiscord from '@/images/icons/discord.svg'
import logoFacebook from '@/images/icons/facebook.svg'
import logoTwitter from '@/images/icons/twitter.svg'
import logoInstagram from '@/images/icons/instagram.svg'
import logoLinkedin from '@/images/icons/linkedin.svg'
import logoTelegram from '@/images/icons/telegram.svg'
import logoGithub from '@/images/icons/github.svg'
import logoYoutube from '@/images/icons/youtube.svg'

const social = [
    [
      logoYoutube,
      'https://youtube.com/c/DevsNorte',
      'DevsNorte YouTube'
    ],
    [
      logoLinkedin,
      'https://www.linkedin.com/company/devsnorte/',
      'DevsNorte LinkedIn'
    ],
    [
      logoTelegram,
      'https://t.me/devsnorte',
      'DevsNorte Telegram'
    ],
    [
      logoInstagram,
      'http://instagram.com/devsnorte',
      'DevsNorte Instagram'
    ],
    [
      logoFacebook,
      'http://facebook.com/devsnorte',
      'DevsNorte Facebook'
    ],
    [
      logoTwitter,
      'https://www.twitter.com/devsnorte/',
      'DevsNorte Twitter'
    ],
    [
      logoGithub,
      'https://www.github.com/devsnorte/',
      'DevsNorte Github'
    ],
    [
       logoDiscord,
      'https://discord.gg/V825KxKzcQ',
      'DevsNorte Discord'
    ],
  ]

export function SocialFollow() {
    return (
      <div className="mt-10 gap-x-6 gap-y-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        {social.map(([img, url, alt]) => (
          <Link key={alt} href={url}>
            <a target="_blank" className="mx-auto">
              <Image
                width={40}
                height={40}
                src={img}
                alt={alt}
                layout="fixed"
              />
            </a>
          </Link>
        ))}
      </div>
    )
  }