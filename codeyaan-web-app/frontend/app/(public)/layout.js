// app/(public)/layout.js
import NavbarSection from "../_components/NavbarSection";
import FooterSection from "../_components/FooterSection";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <NavbarSection />

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
