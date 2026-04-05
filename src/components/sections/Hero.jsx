import Container from "../layout/Container";

const profileImage =
  "https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-img-slide-300x300.jpg";
const heroVideo =
  "https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4";

const Hero = () => {
  return (
    <section id="home" className="pb-10 pt-2 sm:pb-12">
      <Container className="!max-w-2196 !px-4 sm:!px-4 lg:!px-4 max-h-[897]">
        <div className="relative min-h-[560px] overflow-hidden rounded-[24px] bg-[#20465d] sm:min-h-[660px] lg:min-h-0 lg:aspect-[2196/897]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.02)_36%,rgba(0,0,0,0.24)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_49%_54%,rgba(255,170,61,0.34),transparent_19%)]" />

          <div className="absolute bottom-8 left-8 z-20 sm:bottom-10 sm:left-10 lg:bottom-14 lg:left-12 xl:left-14">
            <p className="text-[clamp(5.5rem,11vw,11rem)] font-normal leading-[0.84] tracking-[-0.085em] text-white">
              Floka
            </p>
            <p className="pl-2 text-[clamp(2.9rem,5.5vw,5.6rem)] font-normal leading-[0.9] tracking-[-0.065em] text-white/28">
              Studio
            </p>
          </div>

          <div className="relative z-10 flex h-full min-h-[560px] flex-col justify-between p-5 sm:min-h-[660px] sm:p-7 lg:min-h-0 lg:p-10">
            <div className="flex items-start justify-end">
              <button
                type="button"
                className="hidden h-12 w-12 items-center justify-center rounded-full border border-black/35 bg-white/10 backdrop-blur-sm lg:inline-flex"
                aria-label="Hero media control"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-black/65" />
              </button>
            </div>

            <div className="mt-auto flex justify-end">
              <div className="w-full max-w-[358px] lg:mr-10 xl:mr-14">
                <div className="rounded-[22px] bg-[#f8f5f1] p-4 shadow-[0_28px_55px_rgba(0,0,0,0.16)]">
                  <div className="flex gap-4">
                    <img
                      src={profileImage}
                      alt="Almond D. Nelsi"
                      className="h-[102px] w-[102px] rounded-[18px] object-cover"
                    />

                    <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">
                          Head of idea
                        </p>
                        <p className="mt-1 truncate text-[20px] font-semibold tracking-[-0.045em] text-slate-900">
                          Almond D. Nelsi
                        </p>
                      </div>

                      <a
                        href="#contact"
                        className="mt-3 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-slate-900"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm text-white">
                          +
                        </span>
                        <span>Let&apos;s talk</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 max-w-[300px] pl-1 text-left">
                  <p className="text-[16px] font-semibold leading-7 text-white/95">
                    No cookie-cutter websites. No fluff.
                  </p>
                  <p className="mt-2 text-[16px] leading-7 text-white/62">
                    Just real tools and smart strategies to grow your business and
                    elevate your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
