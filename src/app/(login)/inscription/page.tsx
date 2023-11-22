'use client';

import {useForm} from "@mantine/form";
import {PasswordInput, TextInput} from "@mantine/core";

export default function Inscription(){
    const form = useForm();

    return (
        <div
            className="flex items-center flex-col my-16 p-4"
        >
            <div>
                <TextInput
                    label="Input label"
                    description="Input description"
                    placeholder="Input placeholder"
                />
                <TextInput
                    label="Input label"
                    description="Input description"
                    placeholder="Input placeholder"
                />
                <PasswordInput
                    label="Input label"
                    description="Input description"
                    placeholder="Input placeholder"
                />
            </div>
        </div>
    );
}