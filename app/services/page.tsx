import Link from "next/link";

export default function Services() {
  const services = [
    { title: "Office furniture", href: "/services/furniture", desc: "Desks, chairs, storage, and ergonomic solutions." },
    { title: "Office stationery", href: "/services/stationery", desc: "Paper, pens, files, and everyday office needs." },
    { title: "Tonners", href: "/services/tonners", desc: "Printer toners and cartridges for major brands." },
    { title: "Laptops", href: "/services/laptops", desc: "Business-grade laptops from trusted manufacturers." },
    { title: "Computers", href: "/services/computers", desc: "Desktops, workstations, and accessories." },
    { title: "Medical Equipment", href: "/services/medical-equipment", desc: "Basic medical devices and supplies." },
  ];

  return (
    <main className="container mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-bold tracking-tight">Services</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        Explore our full range of office and IT supplies tailored for businesses and organizations.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="rounded-lg border p-6 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
