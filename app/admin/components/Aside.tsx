import Home from "@/app/page";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Book, BookAIcon, FolderPen, HomeIcon, PersonStanding } from "lucide-react";
import { Noto_Emoji } from "next/font/google";

export default function Aside({className}:any) {
    return (
        <div className={cn("hidden md:block size-1/6", className)}>
            <div className="flex flex-col ">
                <h2 className="font-bold">Dasboard</h2>
                <a href="/admin">
                    <Button variant="ghost">
                        <HomeIcon/>
                        Home
                    </Button>
                </a>
                <a href="/admin/student">
                    <Button variant="ghost">
                        <PersonStanding/>
                        Estudante
                    </Button>
                </a>
                <a href="/admin/courses">
                    <Button variant="ghost">
                        <FolderPen/>
                       Curso
                    </Button>
                    </a>
                <h2 className="font-bold">Configuração</h2>
                <a href="/admin">
                    <Button variant="ghost">
                        <BookAIcon/>
                       Conta
                    </Button>
                </a>
                <a href="/admin">
                    <Button variant="ghost">
                        <FolderPen/>
                       Nome
                    </Button>
                </a>
            </div>
        </div>
    )
}