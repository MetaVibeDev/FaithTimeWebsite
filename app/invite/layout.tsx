export default function InviteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="w-full max-w-md"> 
        {children}
      </div>
    </section>
  );
} 