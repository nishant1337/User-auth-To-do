import Button from "./Button"
const Task = ({ id, title, status, onDelete, updateStatus }) => {
    return (


        <div className={`task ${status ? "reminder" : "left"  } `}
            onDoubleClick={

                () => updateStatus(id)
            } >
            <h3 key={id} >{title} </h3>

            <Button onClick={() => onDelete(id)} text="Delete"></Button>

        </div>
    )
}

export default Task