import AnimatedLayout from "@/components/custom/AnimatedLayout";
import { MainFooter } from "@/components/custom/Footer";
import { MainNav } from "@/components/custom/NavBar";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <MainNav />
            <AnimatedLayout>{children}</AnimatedLayout>
            <MainFooter />
        </>
    );
}
