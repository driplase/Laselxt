import { Ubuntu_Sans, Ubuntu_Sans_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});

const ubuntuSansMono = Ubuntu_Sans_Mono({
  variable: "--font-ubuntu-sans-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Laselxt",
  description: "Some random website I tried to make it modern",
};

export default function DefaultLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuSans.variable} ${ubuntuSansMono.variable} antialiased font-sans`}
      >
        <Navbar />

        <main className="min-h-[calc(100vh_-_var(--navbar-height))]">
          {
            /*
              // header shade?

              <div className="absolute top-(--header-height) w-full h-8 blur-md transform-[translateY(-50%)]" style={{
                background: `rgba(31, 203, 255, 0.25)`
              }}></div>
            */
          }

          {children}

        </main>

        <Footer />
      </body>
    </html>
  );
}
