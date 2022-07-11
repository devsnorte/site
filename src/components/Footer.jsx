import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { SocialFollow } from '@/components/SocialFollow'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col md:flex-row md:justify-between items-center">
        <Logo className="h-12 w-auto" />
        <SocialFollow className="gap-x-4 gap-y-6 grid grid-cols-4 md:grid-cols-8"></SocialFollow>
      </Container>
      <p className="mt-10 text-base text-slate-500 text-center">
        Copyright &copy; {new Date().getFullYear()} DevsNorte. Todos os direitos reservados.
      </p>
    </footer>
  )
}
