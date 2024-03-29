import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { useTranslation } from 'next-i18next'

import logoAmazoniaOnline from '@/images/logos/amazoniaonline.png'
import logoAppsignal from '@/images/logos/appsignal.svg'
import logoDevpleno from '@/images/logos/devpleno.svg'
import logoIdopter from '@/images/logos/idopter.svg'
import logoJetbrains from '@/images/logos/jetbrains.svg'
import logoConta49 from '@/images/logos/conta49.svg'
import logoCompass from '@/images/logos/compass.svg'

const sponsors = [
  {
    name: 'Devpleno',
    image: logoDevpleno,
    url: 'https://devpleno.com/',
  },
  {
    name: 'Idopter Labs',
    image: logoIdopter,
    url: 'https://www.idopterlabs.com.br/',
  },
  {
    name: 'Jetbrains',
    image: logoJetbrains,
    url: 'https://www.jetbrains.com/',
  },
  {
    name: 'AppSignal',
    image: logoAppsignal,
    url: 'https://www.appsignal.com/',
  },
  {
    name: 'Conta49',
    image: logoConta49,
    url: 'https://conta49.com.br/',
  },
  {
    name: 'Compass.UOL',
    image: logoCompass,
    url: 'https://compass.uol/',
  },
  {
    name: 'Amazônia Online',
    image: logoAmazoniaOnline,
    url: 'https://amazoniaonline.com.br/',
  },
]

export function Sponsors() {
  const { t } = useTranslation()
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="py-20 sm:py-32"
    >
      <h2 id="sponsors-title" className="sr-only">
        {t('support')}
      </h2>
      <Container>
        <p className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-green-900 sm:text-5xl">
          {t('support')}
        </p>
        <p className="mx-auto max-w-2xl text-center font-display text-xl tracking-tighter text-green-900">
          {t('supportDescription')}
        </p>
        <ul className="mt-16 flex flex-col items-center justify-center space-y-10 md:flex-row md:flex-wrap md:space-y-0 md:space-x-10 xl:space-x-16">
          {sponsors
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((sponsor, index) => (
              <li
                className="flex md:my-3"
                key={sponsor.name}
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <Link legacyBehavior href={sponsor.url}>
                  <a target="_blank">
                    <Image
                      width={120}
                      src={sponsor.image}
                      alt={sponsor.name}
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  )
}
