import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'next-i18next'

export function Newsletter() {
  const { t } = useTranslation()

  const [variables, setVariables] = useState({
    name: '',
    email: '',
    newsletter: '62a2004d6198800016770210',
  })

  const raw = JSON.stringify({
    query:
      'mutation createOneSubscriber($name: String!, $email: String!, $newsletter: String!) {createOneSubscriber(input: {name: $name, email: $email, newsletter: $newsletter}) {name __typename}}',
    operationName: 'createOneSubscriber',
    variables,
  })

  const requestOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: raw,
    redirect: 'follow',
  }

  const signin = async () => {
    try {
      const response = await fetch(
        'https://gstack-api-production.herokuapp.com/graphql',
        requestOptions
      )
      toast.success('Inscrição feita com sucesso!')
      response.text()
    } catch (err) {
      console.log(err)
      toast.error('Erro ao realizar inscrição, tente novamente.')
    }
  }

  const onChange = (event) => {
    const value = event.target.value
    const key = event.target.name
    setVariables((old) => ({
      ...old,
      [key]: value,
    }))
  }

  return (
    <section id="newsletter" aria-labelledby="newsletter-title">
      <h2 id="newsletter-title" className="sr-only">
        Newsletter
      </h2>
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-green-50 py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-green-900 sm:text-5xl">
                {t('newsletterTitle')}
              </p>
              <p className="mt-4 text-lg tracking-tight text-green-900">
                {t('newsletterDescription')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-green-900">
                {t('subscribe')} <span aria-hidden="true">↓</span>
              </h3>

              <div className="mt-5">
                <input
                  type="text"
                  id="name"
                  name={t('name')}
                  placeholder="Nome"
                  className="mb-6 w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  onChange={onChange}
                  value={variables.name}
                ></input>
                <input
                  type="text"
                  id="email"
                  name={t('email')}
                  placeholder="Email"
                  className="mb-6 w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  onChange={onChange}
                  value={variables.email}
                ></input>
                <Button type="submit" onClick={signin}>
                  <span>{t('subscribe')}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
