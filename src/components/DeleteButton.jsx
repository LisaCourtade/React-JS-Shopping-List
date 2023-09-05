function DeleteButton({onDelete}) {
    return (
        <button className="delete-btn" onClick={onDelete}>X</button>
    )
}

export default DeleteButton;