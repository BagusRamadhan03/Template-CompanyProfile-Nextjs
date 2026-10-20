import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] items-center overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-serif text-[38vw] italic leading-none text-ink/5"
      >
        404
      </span>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="eyebrow text-muted">
            <span className="h-px w-8 bg-ember" />
            Error — 404
          </p>
          <h1 className="mt-7 text-balance text-[2.6rem] font-semibold leading-[0.97] tracking-[-0.045em] sm:text-5xl">
            Halaman ini{" "}
            <span className="font-serif font-normal italic text-ember-ink">
              tidak ditemukan
            </span>
            .
          </h1>
          <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-muted sm:text-base">
            Mohon maaf, halaman yang Anda tuju tidak dapat ditemukan atau
            mungkin telah dipindahkan ke tautan baru.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/" size="lg" arrow>
              Kembali ke beranda
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Jelajahi layanan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
