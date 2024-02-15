import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation('common')
  const router = useRouter()
  const clientSideLanguageChange = (newLocale) => {
    i18n.changeLanguage(newLocale)
  }
  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }
  return (
    <div>
      <select
        onChange={(e) => {
          clientSideLanguageChange(e.target.value)
          onToggleLanguageClick(e.target.value)
        }}
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  )
}
