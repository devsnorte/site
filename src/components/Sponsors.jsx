import Image from 'next/image'
import Link from 'next/link'


import { Container } from '@/components/Container'
import logoAppsignal from '@/images/logos/appsignal.svg'
import logoDevpleno from '@/images/logos/devpleno.svg'
import logoJobsity from '@/images/logos/jobsity.svg'
import logoIdopter from '@/images/logos/idopter.svg'

const sponsors = [
  {
    name: 'Devpleno',
    image: logoDevpleno,
    url: 'https://devpleno.com/'
  },
  {
    name: 'Idopter Labs',
    image: logoIdopter,
    url: 'https://www.idopterlabs.com.br/'
  },
  {
    name: 'Jobsity',
    image: logoJobsity,
    url: 'https://www.jobsity.com/'
  },
  {
    name: 'AppSignal',
    image: logoAppsignal,
    url: 'https://www.appsignal.com/'
  },
]

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="py-20 sm:py-32"
    >
      <h2 id="sponsors-title" className="sr-only">
        Patrocinadores
      </h2>
      <Container>
        <p className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-green-900 sm:text-5xl">
          Patrocinadores atuais
        </p>
        <ul className="mt-20 flex flex-col items-center justify-center space-y-12 sm:flex-row sm:space-x-12 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-12">
          <li>
            <ul className="flex flex-col items-center space-y-12 sm:space-y-12 md:flex-row md:space-y-0 md:space-x-16 lg:space-x-32">
              {sponsors.map((sponsor) => (
                <li className="flex" key={sponsor.name}>
                  <Link href={sponsor.url}>
                    <a target="_blank">
                      <Image
                        width={130}
                        src={sponsor.image}
                        alt={sponsor.name}
                        layout="fixed"
                      />
                    </a>
                  </Link>
                </li>
              )).sort((a, b) => a.name > b.name ? 1 : -1)}
            </ul>
          </li>
        </ul>
      </Container>
    </section>
  )
}
