import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { SocialFollow } from '@/components/SocialFollow'

import logoYoutube from '@/images/icons/youtube.svg'
import logoInstagram from '@/images/icons/instagram.svg'
import logoTwitter from '@/images/icons/twitter.svg'
import logoDiscord from '@/images/icons/discord.svg'
import logoTelegram from '@/images/icons/telegram.svg'
import logoFacebook from '@/images/icons/facebook.svg'
import logoLinkedin from '@/images/icons/linkedin.svg'
import logoGithub from '@/images/icons/github.svg'

import { useTranslation } from 'next-i18next'

const social = [
  [logoYoutube, 'https://youtube.com/c/DevsNorte', 'DevsNorte YouTube'],
  [
    logoLinkedin,
    'https://www.linkedin.com/company/devsnorte/',
    'DevsNorte LinkedIn',
  ],
  [logoTelegram, 'https://t.me/devsnorte', 'DevsNorte Telegram'],
  [logoInstagram, 'http://instagram.com/devsnorte', 'DevsNorte Instagram'],
  [logoFacebook, 'http://facebook.com/devsnorte', 'DevsNorte Facebook'],
  [logoTwitter, 'https://www.twitter.com/devsnorte/', 'DevsNorte Twitter'],
  [logoGithub, 'https://www.github.com/devsnorte/', 'DevsNorte Github'],
  [logoDiscord, 'https://discord.gg/V825KxKzcQ', 'DevsNorte Discord'],
]

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="pt-10 pb-8">
      <Container className="flex flex-col items-center md:flex-row md:justify-between">
        <Logo className="h-12 w-auto" />
        <div>
          <p className="mt-6 mb-3 font-display text-lg text-slate-500 md:text-right">
            {t('followUs')}
          </p>
          <SocialFollow
            social={social}
            className="grid grid-cols-4 gap-x-4 gap-y-6 md:grid-cols-8"
          ></SocialFollow>
        </div>
      </Container>
      <p className="mt-10 text-center text-base text-slate-500">
        Copyright &copy; {new Date().getFullYear()} DevsNorte. Todos os direitos
        reservados.
      </p>
    </footer>
  )
}
