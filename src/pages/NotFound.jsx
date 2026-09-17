import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="This page doesn't exist — head back to the A-IT homepage."
      />
      <section className="flex min-h-[60vh] items-center border-b border-stone py-20">
        <div className="container-x">
          <p className="eyebrow">404</p>
          <h1 className="mt-3 max-w-[18ch] font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
            That page doesn't exist.
          </h1>
          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-ink/75">
            The link might be out of date, or the address was mistyped.
            Here's where you probably meant to go.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button to="/" variant="primary">
              Back to home
            </Button>
            <Button to="/contact" variant="ghost">
              Contact us →
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
