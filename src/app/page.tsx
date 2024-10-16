import Link from 'next/link';

export default function Home() {
  return <>
    <header className="px-4 sm:px-6 h-16 shadow-[inset_0_-1px_0_0] flex items-center sticky top-0">
      <Link href="/" className="text-2xl font-bold tracking-tight">Drona</Link>
    </header>

    <main className="p-4 sm:p-6 space-y-2">
      <h1 className="text-5xl font-bold">Revolutionizing carrier with Drona.</h1>
      <p className="text-xl text-muted-foreground">Empowering academic personals to connect with professionals for career guidance.</p>

      <div className="p-4 bg-secondary text-xl space-y-2 rounded-lg">
        <p>
          In today&apos;s rapidly evolving world, an individual is often presented with ample care about opportunities for which they need a proper guidance and therefore a mentor.
        </p>

        <p>
          Our very best solution aims to cater to these problems by seamlessly bridging the gap between mentors and mentees by providing an automated calendar booking system along with a video call and a chat feature for effective communication and better personalization.
        </p>
      </div>
    </main>
  </>
}
