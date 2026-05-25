import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Aaron Praise Portfolio",
  description: "Backend Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}