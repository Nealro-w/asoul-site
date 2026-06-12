export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-6">A-SOUL 小站</h1>

      <p className="text-gray-400 mb-8">
        网站建设中，敬请期待。
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-cneter">
        <a
          href="https://space.bilibili.com/703007996"
          target="_blank"
          className="rounded-xl border border-gray-600 px-6 py-3 hover:bg-white hover:text-black transition"
        >
          前往看A
        </a>
      </div>
    </main>
  );
}