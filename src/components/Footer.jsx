// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-school-background text-sm text-center py-6 border-t border-gray-200">
      <p className="text-gray-600">
        © {new Date().getFullYear()} St Peter’s Khwirale Secondary School ·
        Busia County
      </p>
    </footer>
  );
}
