import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useState } from 'react'

export function Newsletter() {

  const [variables, setVariables] = useState({
    name: '',
    email: '',
    newsletter: '62a2004d6198800016770210'
  })

  const raw = JSON.stringify({
    "query": "mutation createOneSubscriber($name: String!, $email: String!, $newsletter: String!) {createOneSubscriber(input: {name: $name, email: $email, newsletter: $newsletter}) {name __typename}}",
    "operationName": "createOneSubscriber",
    variables
  })

  const requestOptions = {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: raw,
    redirect: 'follow'
  };

  const signin = async () => {
    try {
      console.log(raw)
      const response = await fetch('https://gstack-api-production.herokuapp.com/graphql', requestOptions)
      response.text()

    } catch (err) {
      console.log(err)
    }
  }

  const onChange = event => {
    const value = event.target.value
    const key = event.target.name
    setVariables(old => ({
      ...old,
      [key]: value
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
                Fique por dentro das novidades.
              </p>
              <p className="mt-4 text-lg tracking-tight text-green-900">
                Na newsletter Devs Norte você ficará sabendo das novidades tecnológicas do mundo todo e estará por dentro de próximos eventos que acontecerão.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-green-900">
                Se inscreva <span aria-hidden="true">↓</span>
              </h3>

              <div className="mt-5">
                <input type="text" id="name" name="name" placeholder="Nome" className="w-full bg-white rounded-lg border focus:ring-2 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out border-gray-300 focus:border-green-500 focus:ring-green-200 mb-6"
                  onChange={onChange}
                  value={variables.name}
                ></input>
                <input type="text" id="email" name="email" placeholder="Email" className="w-full bg-white rounded-lg border focus:ring-2 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out border-gray-300 focus:border-green-500 focus:ring-green-200 mb-6"
                  onChange={onChange}
                  value={variables.email}
                ></input>
                <Button type="submit" onClick={signin}>
                  <span>Assine</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
