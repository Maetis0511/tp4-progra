'use client';

import {z} from "zod";
import {useForm, zodResolver} from "@mantine/form";
import {PasswordInput, TextInput} from "@mantine/core";
import {Button} from "tp-kit/components";
import {useRouter} from "next/navigation";

const schema = z.object({
    nom: z.string(),
    email: z.string().email({ message: 'Email invalide' }),
    password: z.string().min(6)
});

export default function Inscription(){
    const form = useForm({
        initialValues: {
            nom: '',
            email: '',
            password: '',
        },

        validate: zodResolver(schema),
    });

    const router = useRouter();

    return (
        <form
            className="flex items-center flex-col space-y-6 w-"
            onSubmit={form.onSubmit((values) => console.log(values))}
        >
            <p
                className="text-left w-full"
            >
                Inscription
            </p>

            <TextInput
                className="w-full"
                required
                label="Nom"
                description="Le nom qui sera utilisé pour vos commandes"
                {...form.getInputProps('nom')}
            />

            <TextInput
                className="w-full"
                required
                label="Adresse email"
                {...form.getInputProps('email')}
            />

            <PasswordInput
                className="w-full"
                required
                label="Mot de passe"
                {...form.getInputProps('password')}
            />

            <Button
                className="w-full cursor-pointer"
                type="submit"
            >
                S'inscrire
            </Button>

            <a onClick={() => router.push('/connexion')} className="">Déjà un compte ? Se connecter</a>
        </form>
    );
}