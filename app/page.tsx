import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const categories = [
    { title: "Office furniture", src: "/furniture.jpg", alt: "Office furniture", desc: "Chairs, desks, storage, and meeting room solutions." },
    { title: "Office stationery", src: "/stationery.jpg", alt: "Office stationery", desc: "Pens, paper, files, and daily office essentials." },
    { title: "Tonners", src: "/tonners.jpg", alt: "Printer toners", desc: "OEM and compatible cartridges for major printer brands." },
    { title: "Laptops", src: "/laptop.jpg", alt: "Laptops", desc: "Portable performance for business users." },
    { title: "Computers", src: "/computer.jpg", alt: "Computers", desc: "Desktops, workstations, and all‑in‑ones for productivity." },
    { title: "Medical Equipment", src: "/medical.jpg", alt: "Medical equipment", desc: "Diagnostic and monitoring equipment for care facilities." },
  ];

  return (
    <>
    <main className="container mx-auto px-4 pt-28 pb-16">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Spiffy Lemon Calz Limited</h1>
        <p className="mt-4 text-muted-foreground">
          Reliable supplier of office furniture, stationery, toners, laptops, computers, and medical equipment.
        </p>
        
      </section>

      {/* Offerings overview */}
      <section id="products" className="mt-14">
        <h2 className="text-2xl font-semibold">What we offer</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="rounded-lg border p-4">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-white">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  priority={false}
                />
              </div>
              <h3 className="mt-4 font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold">Contact us</h2>
        <p className="mt-2 text-muted-foreground">We respond promptly to all inquiries.</p>
        <form className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input id="name" name="name" type="text" required className="h-10 w-full rounded-md border px-3" placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="h-10 w-full rounded-md border px-3" placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full rounded-md border p-3" placeholder="How can we help?" />
          </div>
          <button type="submit" className="inline-flex h-10 w-fit items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">Send</button>
          <p className="text-sm font-medium text-muted-foreground">Or email us directly at <a className="underline" href="mailto:spiffytenders@gmail.com">spiffytenders@gmail.com</a> or call <a className="underline" href="tel:0793317122">0793317122</a>.</p>
        </form>
      </section>

    </main>

    {/* Footer (sticky) */}
    <footer className="mt-auto bg-[#E1D9BC] text-black">
      <div className="container mx-auto px-4 py-6 text-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p>© {new Date().getFullYear()} Spiffy Lemon Calz Limited</p>
          <div className="flex gap-4">
            <a href="mailto:spiffytenders@gmail.com" className="underline">spiffytenders@gmail.com</a>
            <a href="tel:0793317122" className="underline">0793317122</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
