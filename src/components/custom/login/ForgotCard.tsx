"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({
    email: z
        .string()
        .email({ message: "Ingrese un correo electrónico valido" })
        .min(5, { message: "Ingrese un correo electrónico valido" }),
    email_confirmation: z
        .string()
        .email({ message: "Ingrese un correo electrónico valido" })
        .min(2, { message: "El nombre de usuario es muy corto" }),
})
    .refine((data) => data.email === data.email_confirmation, {
        message: "Los correos deben coincidir",
        path: ["email_confirmation"], // path of error
    });


const ForgotCard = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            email_confirmation: ""
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <Card className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <CardHeader className="mb-6 flex flex-col items-center">
                <h1 className="mb-2 text-2xl font-bold">Olvidé mi contraseña</h1>
                <p className="text-muted-foreground">
                    Ingrese su correo electrónico para continuar
                </p>
            </CardHeader>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-3"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} placeholder="Correo electrónico" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email_confirmation"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} placeholder="Confirme el correo electrónico" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid gap-2 grid-cols-2 mt-5">
                        <Button variant="ghost" className="w-fit" asChild>
                            <Link href={"/login"}>
                                Regresar
                            </Link>
                        </Button>
                        <Button type="submit" className="w-fit self-end ml-auto">
                            Continuar
                        </Button>
                    </div>
                </form>
            </Form>
        </Card>
    )
}

export default ForgotCard