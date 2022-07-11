import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Newsletter() {
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
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-green-900">
                Se inscreva <span aria-hidden="true">↓</span>
              </h3>
              <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-green-900/5 focus-within:ring-2 focus-within:ring-green-900">
                <label htmlFor="" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <Button type="submit">
                  <span className="sr-only sm:not-sr-only">Assine</span>
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 sm:hidden"
                    fill="none"
                  >
                    <path
                      d="m14 7 5 5-5 5M19 12H5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
