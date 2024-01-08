import "./Item.css"
import { BsTrashFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

export default function Item(props){
    const{data, deleteTask, editTask} = props
    return(
        <div className="list-item">
            <p className="title">{data.title}</p>
            <div className="button-container">
                <BiEdit className="btn" onClick={()=>editTask(data.id)}/>
                <BsTrashFill className="btn" onClick={()=>deleteTask(data.id)}/>
            </div>
        </div>
    )
}