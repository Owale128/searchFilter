'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
  <div className="flex justify-center items-center min-h-screen text-4xl font-bold">
        <button onClick={() => router.push('/table')}>Click Here</button>
    </div>
  );
}
