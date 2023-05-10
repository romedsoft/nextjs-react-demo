
import AppBar from "./components/AppBar";
import "./globals.css";
import Providers from "./components/Providers";
import Header from "./components/Header";

export const metadata = {
  title: "Next-Auth demo",
  description: "by roman",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}