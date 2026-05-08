import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import Header from "@/organisms/Header";
import Footer from "@/organisms/Footer";
import { HumanMadeSection } from "@/components/organisms";

export interface MainLayoutProps {
  children?: ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={cn("flex-1", className)}>{children}</main>
      <Footer />
      <HumanMadeSection />
    </div>
  );
};

export default MainLayout;
