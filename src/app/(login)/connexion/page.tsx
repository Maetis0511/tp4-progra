'use client';

import { z } from 'zod';
import {useForm, zodResolver} from "@mantine/form";
import {PasswordInput, TextInput} from "@mantine/core";
import React, {useState} from "react";
import {Button, NoticeMessage, useZodI18n} from "tp-kit/components";
import {useRouter} from "next/navigation";

const schema = z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(6)
});

type FormValues = z.infer<typeof schema>;

export default function Connexion(){
    useZodI18n(z);
    const form = useForm<FormValues>({
        initialValues: {
            email: '',
            password: '',
        },

        validate: zodResolver(schema),
    });

    const [created, setCreated] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState("");

    const router = useRouter();

    return (
        <form
            className="flex items-center flex-col space-y-6 w-"
            onSubmit={form.onSubmit((values) => console.log(values))}
        >
            <p
                className="text-left w-full text-2xl"
            >
                Connexion
            </p>

            {
                created &&
                <NoticeMessage
                    type={isValid ? "success" : "error"}
                    message={message}
                />
            }

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

            <a onClick={() => router.push('/inscription')} className="">Créer un compte</a>
        </form>
    );
}