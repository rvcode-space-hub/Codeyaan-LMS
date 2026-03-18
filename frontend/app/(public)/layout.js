import NavbarSection from "../../components/layout/NavbarSection";
import FooterSection from "../../components/layout/FooterSection";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <NavbarSection />

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
