import "./tetris.css"

const Tetris = ({ data, result }) => {
    // console.log(data)
    return (
        <>
            <h1>Results for {result}...</h1>
            <div>
                <p className="container">
                    {data.map((user, i) => (
                        <p key={i} className="result-part">
                            <img src={user.owner.avatar_url} alt="avatar" className="result-image" />
                            <p>{user.owner.login}</p>
                            {/* <p>{user.owner.id} </p> */}
                        </p>
                    ))}</p>
            </div>
        </>
    )
}

export default Tetris
