
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 font-sans">
      <main className="flex flex-col items-center justify-center w-full h-full p-12 rounded-3xl shadow-2xl bg-black/80 border border-purple-700 max-w-2xl">
        <div className="mb-8 animate-pulse">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="55" stroke="#8B5CF6" strokeWidth="6" fill="#18181b" />
            <text x="50%" y="54%" textAnchor="middle" fill="#8B5CF6" fontSize="2.5em" fontWeight="bold" fontFamily="monospace" dy=".3em">TI</text>
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 drop-shadow-lg mb-6 tracking-tight text-center">
          TI Technology
        </h1>
        <p className="text-lg text-zinc-300 mb-8 text-center max-w-md">
          Geleceğin teknolojisi burada. <br />
          <span className="text-purple-400 font-semibold">Yenilikçi, modern ve güçlü çözümler.</span>
        </p>
        <a
          href="#"
          className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Daha Fazla Bilgi
        </a>
      </main>
    </div>
  );
}
