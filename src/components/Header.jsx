import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useTranslation } from 'next-i18next'

export function Header() {
  const { t } = useTranslation()
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-14 w-auto text-slate-900" />
        </div>

        <div className="hidden items-center gap-3 sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <LanguageSwitcher />
          <ButtonLink href="https://www.sympla.com.br/produtor/devsnorte">
            {t('eventsButton')}
          </ButtonLink>
        </div>
      </Container>
    </header>
  )
}
