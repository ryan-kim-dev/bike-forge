import Link from 'next/link';

export default async function Home() {
  return (
    <div>
      <button>
        <Link href="/models">Start Editing</Link>
      </button>
    </div>
  );
}
