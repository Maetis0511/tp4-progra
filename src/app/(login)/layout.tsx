import {Card} from "tp-kit/components";
import {PropsWithChildren} from "react";

export default function Layout({children}: PropsWithChildren){

    return (
        <div
            className="flex items-center flex-col my-16 p-4"
        >
            <Card
                className="w-1/4"
            >
                {children}
            </Card>
        </div>
    )
}