import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="container mx-auth px-4 py-32">
          <div className="mx-auto-max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">A betterway to track your job application</h1>
            <p className="text-muted-foreground mb-10 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolorem asperiores nobis earum. Distinctio c</p>
            <div className="flex flex-col items-center gap-4">
              <button>Get start</button>
              <p>Lorem ipsum dolor sit amet consec</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
