"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import logo from "../../../../public/images/pitz-player.png";
import Image from "next/image";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { motion } from "motion/react";

const LoginCard = () => {

    const formSchema = z.object({
        username: z
            .string()
            .min(2, { message: "El nombre de usuario es muy corto" }),
        password: z.string(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
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
                <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: .3, duration: .5 }}
                >
                    <Image src={logo} width={100} alt={"Logo"} />
                </motion.div>
                <h1 className="mb-2 text-2xl font-bold">Bienvenido/a</h1>
                <p className="text-muted-foreground">
                    Inicia sesión para continuar
                </p>
            </CardHeader>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-3"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} placeholder="Usuario" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} placeholder="Contraseña" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-between">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remember"
                                className="border-muted-foreground"
                            />
                            <label
                                htmlFor="remember"
                                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Recordar
                            </label>
                        </div>
                        <Link
                            href="/forgot-password"
                            className="text-sm text-primary hover:underline"
                        >
                            Olvidé mi contraseña
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <Button type="submit" className="mt-2 w-full">
                            Ingresar
                        </Button>
                        <Button variant="outline" className="w-full">
                            Continuar con Google
                        </Button>
                    </div>
                </form>
            </Form>
        </Card>
    )
}

export default LoginCard