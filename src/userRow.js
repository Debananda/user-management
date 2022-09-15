const UserRow = ({user, onClick}) => {
    const onRowClick = () => {
        onClick(user)
    }
    return(
        <div className="tr" onClick={onRowClick}>
            <div className="td">{user.name}</div>
            <div className="td">{user.username}</div>
            <div className="td">{user.email}</div>
            <div className="td">{user.phone}</div>
          </div>
    )
}

export default UserRow;