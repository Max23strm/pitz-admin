import AnimatedLayout from "@/components/custom/AnimatedLayout";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <AnimatedLayout type="vertical">
                {children}
            </AnimatedLayout>
        </main>
    );
}