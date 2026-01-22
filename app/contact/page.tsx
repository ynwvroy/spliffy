export default function Contact() {
  return (
    <main className="container mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        Reach out for quotes, product availability, and bulk orders. We respond promptly.
      </p>
      <div className="mt-6 space-y-2">
        <p><span className="font-medium">Email:</span> <a className="underline" href="mailto:spiffytenders@gmail.com">spiffytenders@gmail.com</a></p>
        <p><span className="font-medium">Phone:</span> <a className="underline" href="tel:0793317122">0793317122</a></p>
      </div>
    </main>
  );
}
