import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Admin(){
    return(
        <div>
            <h1 className="">
             Bem vindo à Area administrativa 
             </h1>
             <Button>Salvar</Button>
             <Button variant="destructive">Excluir</Button>
             <Button variant="outline">Novo</Button>
             
             
        </div>
    ) 
}