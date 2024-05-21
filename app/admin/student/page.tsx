import ListStudent from "./List";
import NewStudent from "./New";


//clik em Estudante 
export default function Student(){
    return(
        <div className=" w-full flex flex-col justify-center mt-6">
            <div className="flex justify-center mb-4">
                <NewStudent/>
            </div>
            <h1>Lista de estudantes.</h1>
            <ListStudent/>   
        </div>
      
    ) 
}