import { defaultMaxListeners } from "events";

export default function NavBar(){
    return(
        <div className=" flex justify-between p-5 border-b-2">
            <a href="/admin">Home</a>
            <a href="/admin/student">Estudante</a>
            <h1>avatar</h1>
        </div>
    )
}