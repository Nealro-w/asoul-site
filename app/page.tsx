export default function Home() {
  return (
    <main className="relative z-10 min-h-screen flex flex items-center justify-center bg-black px-6">
      <section className="rounded-[28px] border border-white/20 bg-black/30 px-16 py-12 text-center text-white shadow-2xl backdrop-blur-md">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">A-SOUL 休息室</h1>

        <p className="text-lg text-white/75 mb-8">
          网站建设中，敬请期待。
        </p>

        <a
          href="https://space.bilibili.com/703007996"
          target="_blank"
          className="inline-flex rounded-full border border-white/50 bg-white/10 px-7 py-3 font-bold text-white transition hover:bg-white/80 hover:text-black"
        >
          前往看A
        </a>
      </section>
    </main>
  );
}