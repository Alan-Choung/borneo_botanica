import "./globals.css";
import Navbar from "./navbar/Navbar";

export const metadata = {
  title: "Borneo Botanica",
  description: "Borneo Botanica harnesses the wisdom of Borneo's rainforest to create pure, sustainable skincare. Discover natural, effective beauty for modern women seeking minimalist luxury.",
  icons: {
    icon: "/logo_rmbg.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
