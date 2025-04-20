import { FooterProps } from "@/interfaces/navigation";
import MainLogo from "../../../public/images/pitz-text.png"

const FooterInfo : FooterProps = {
    logo : {
        url: "/",
        src: MainLogo.src,
        alt: "Pitz Cancun Rugby Logo",
        title: "",
    },
    tagline : "Pitz Cancun Rugby",
    menuItems : [
        {
            title: "Jugadores",
            links: [
                { text: "Todos", url: "/players" },
                { text: "Credenciales", url: "/credentials" },
            ],
        },
        {
            title: "Administración",
            links: [
                { text: "Eventos", url: "/events" },
                { text: "Entrenamiento", url: "/trainings" },
                { text: "Partidos", url: "/matches" },
                { text: "Cuotas", url: "/monthly-fee" },
            ],
        },
        {
            title: "Links útilies",
            links: [
                { text: "Federación Mexicana de Rugby", url: "https://mexrugby.com/" },
                { text: "Credo Rugby", url: "https://www.credorugby.com/" },
            ],
        },
        {
            title: "Social",
            links: [
                { text: "Instagram", url: "https://www.instagram.com/cancunrugby/" },
                { text: "Facebook", url: "https://www.facebook.com/profile.php?id=61574974383056" },
            ],
        },
    ],
    copyright : "© 2025 Pitz Cancún Rugby Club. All rights reserved.",
    bottomLinks : [
        { text: "Terms and Conditions", url: "#" },
        { text: "Privacy Policy", url: "#" },
    ],
}
  
const MainFooter = () => {

    const {logo, tagline, menuItems, copyright, bottomLinks} = FooterInfo

    return (
        <section className="py-32">
            <div className="px-5">
                <footer>
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                        <div className="col-span-2 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2 lg:justify-center">
                                <img
                                    src={logo?.src}
                                    alt={logo?.alt}
                                    title={logo?.title}
                                    className="lg:h-20 sm:h:10"
                                />
                                <p className="text-xl font-semibold">{logo?.title}</p>
                            </div>
                            <p className="mt-4 font-bold text-center">{tagline}</p>
                        </div>
                      {menuItems?.map((section, sectionIdx) => (
                          <div key={sectionIdx}>
                              <h3 className="mb-4 font-bold">{section.title}</h3>
                              <ul className="space-y-4 text-muted-foreground">
                                  {section.links.map((link, linkIdx) => (
                                      <li
                                          key={linkIdx}
                                          className="font-medium hover:text-primary"
                                      >
                                          <a href={link.url}>{link.text}</a>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                    </div>
                    <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
                        <p>{copyright}</p>
                        <ul className="flex gap-4">
                            {bottomLinks?.map((link, linkIdx) => (
                                <li key={linkIdx} className="underline hover:text-primary">
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};
  
  export { MainFooter };
  