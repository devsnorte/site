import Image from 'next/image'

import { ButtonLink, SocialFollow } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute -inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <div className="absolute top-0 left-0 -translate-y-[10%] -translate-x-[55%] -scale-x-100 sm:left-1/2 sm:-translate-y-[6%] sm:-translate-x-[98%] lg:-translate-x-[106%] xl:-translate-x-[122%]">
          <Image
            src={backgroundImage}
            alt=""
            layout="fixed"
            width={918}
            height={1495}
            priority
            unoptimized
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-green-500 sm:text-7xl">
            <span className="sr-only">DevsNorte - </span>A maior comunidade do norte do Brasil.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-green-900">
            <p>
              Comunidade de tecnologia que realiza encontros presenciais e online para divulgação de novas tecnologias, padrões de projetos, startups, e todo tipo de inovação no mundo de TI.
            </p>
            <p>
            Reunimos pessoas desenvolvedoras e interessadas na área para auxiliar no crescimento profissional, conectar com as iniciativas e projetos de tecnologia que acontecem na região, no país e no mundo.
            </p>
          </div>
          <ButtonLink href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </ButtonLink>
          <div className="mt-10 text-xl text-center text-green-900 font-light">
            <p>
              Siga as nossas redes sociais
            </p>
          </div>
          <SocialFollow></SocialFollow>
        </div>
      </Container>
    </div>
  )
}
