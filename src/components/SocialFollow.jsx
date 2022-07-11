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

export function SocialFollow({ ...props }) {
    return (
      <div>
        <p className="mt-6 mb-3 font-display text-lg text-slate-500 md:text-right">Siga nossas redes sociais</p>
        <div {...props}>
          {social.map(([img, url, alt]) => (
            <Link key={alt} href={url}>
              <a target="_blank" className="inline-flex justify-center rounded-lg p-2 m-auto bg-gray-300">
                <Image
                  width={25}
                  height={25}
                  src={img}
                  alt={alt}
                  layout="fixed"
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    )
  }