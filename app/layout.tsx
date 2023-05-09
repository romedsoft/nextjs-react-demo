
import AppBar from "./components/AppBar";
import "./globals.css";
import Providers from "./components/Providers";

export const metadata = {
  title: "Next-Auth demo",
  description: "by roman",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}