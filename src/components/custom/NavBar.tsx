import { IdCard, Menu, Users, Zap, CalendarDays, Dumbbell, BanknoteArrowUp } from "lucide-react";
import MainLogo from "../../../public/images/pitz-player.png"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuItem, NavbarProps } from "@/interfaces/navigation";
import DarkmodeBtn from "./DarkmodeBtn";

const NavData : NavbarProps = {
    logo : {
        url: "/",
        src: MainLogo.src,
        alt: "Pitz Cancun Rugby Logo",
        title: "Pitz",
    },
    menu : [
        { title: "Inicio", url: "/" },
        {
            title: "Jugadores",
            url: "#",
            items: [
                    {
                        title: "Todos",
                        description: "Listado de todos los jugadores registrados",
                        icon: <Users className="size-5 shrink-0" />,
                        url: "/players",
                    },
                    {
                        title: "Credenciales",
                        description: "Our mission is to innovate and empower the world",
                        icon: <IdCard className="size-5 shrink-0" />,
                        url: "/credentials",
                    },
            ],
        },
        {
            title: "Administración",
            url: "#",
            items: [
                {
                    title: "Eventos",
                    description: "Calendario con eventos próximos y pasados",
                    icon: <CalendarDays className="size-5 shrink-0" />,
                    url: "/events",
                },
                {
                    title: "Entrenamiento",
                    description: "Ejercicios y organizacion de entrenamientos",
                    icon: <Dumbbell className="size-5 shrink-0" />,
                    url: "/trainings",
                },
                {
                    title: "Partidos",
                    description: "Fechas de partidos y resultados",
                    icon: <Zap className="size-5 shrink-0" />,
                    url: "/matches",
                },
                {
                    title: "Cuotas",
                    description: "Mensualidades de los jugadores",
                    icon: <BanknoteArrowUp className="size-5 shrink-0" />,
                    url: "/monthly-fee",
                },
            ],
        },
        
    ],
    auth : {
        login: { title: "Login", url: "#" },
        signup: { title: "Sign up", url: "#" },
    },
}

const MainNav = ( ) => {

    const {logo, menu, auth} = NavData

    return (
        <section className="py-4">
            <div className="px-5">
                {/* Desktop Menu */}
                <nav className="hidden justify-between lg:flex">
                <div className="flex items-center gap-6">
                    {/* Logo */}
                    <a href={logo?.url} className="flex items-center gap-2">
                    <img src={logo?.src} className="max-h-10" alt={logo?.alt} />
                    </a>
                </div>
                    <div className="flex items-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                        {menu?.map((item) => renderMenuItem(item))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    </div>
                <div className="flex gap-2 align-center ">
                    <DarkmodeBtn />
                    <Button asChild variant="outline" size="sm">
                        <a href={auth?.login.url}>{auth?.login.title}</a>
                    </Button>
                    <Button asChild size="sm">
                        <a href={auth?.signup.url}>{auth?.signup.title}</a>
                    </Button>
                </div>
                </nav>

                {/* Mobile Menu */}
                <div className="block lg:hidden">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href={logo?.url} className="flex items-center gap-2">
                        <img src={logo?.src} className="max-h-8" alt={logo?.alt} />
                    </a>
                    <Sheet>
                        <div className="flex flex-row gap-2">
                            <DarkmodeBtn/>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                <Menu className="size-4" />
                                </Button>
                            </SheetTrigger>
                        </div>
                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                        <SheetTitle>
                            <a href={logo?.url} className="flex items-center gap-2">
                            <img src={logo?.src} className="max-h-8" alt={logo?.alt} />
                            </a>
                        </SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-6 p-4">
                        <Accordion
                            type="single"
                            collapsible
                            className="flex w-full flex-col gap-4"
                        >
                            {menu?.map((item) => renderMobileMenuItem(item))}
                        </Accordion>

                        <div className="flex flex-col gap-3">
                            <Button asChild variant="outline">
                            <a href={auth?.login.url}>{auth?.login.title}</a>
                            </Button>
                            <Button asChild>
                            <a href={auth?.signup.url}>{auth?.signup.title}</a>
                            </Button>
                        </div>
                        </div>
                    </SheetContent>
                    </Sheet>
                </div>
                </div>
            </div>
        </section>
    );
};

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover text-popover-foreground">
                    {item.items.map((subItem) => (
                    <NavigationMenuLink asChild key={subItem.title} className="w-80">
                        <SubMenuLink item={subItem} />
                    </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem key={item.title}>
        <NavigationMenuLink
            href={item.url}
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
        >
            {item.title}
        </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
            <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                {item.title}
            </AccordionTrigger>
            <AccordionContent className="mt-2">
                {item.items.map((subItem) => (
                    <SubMenuLink key={subItem.title} item={subItem} />
                ))}
            </AccordionContent>
        </AccordionItem>
    );
}

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
        className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
        href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
            <div className="text-sm font-semibold">{item.title}</div>
            {item.description && (
                <p className="text-sm leading-snug text-muted-foreground">
                    {item.description}
                </p>
            )}
      </div>
    </a>
  );
};

export { MainNav };
