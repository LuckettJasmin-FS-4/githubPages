export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-purple-800 to-pink-700 text-white">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold mb-4">
          Jasmin Luckett
        </h1>

        <h2 className="text-2xl mb-6">
          Static Website Deployment
        </h2>

        <p className="text-lg mb-8">
          This site was created with Next.js and deployed using GitHub Pages.
        </p>

        <div className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-purple-800">
          Full Sail University • 1.6 Exercise
        </div>
      </div>
    </main>
  );
}