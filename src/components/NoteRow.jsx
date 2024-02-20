function ProductRow(props) {
    const { category, price, inStock, name, id} = props.product;

    const nameStyle = {
        color: inStock ? 'black' : 'red'
    }
    
    return (
        <>
            <tr>
                <td style={nameStyle}>{name}</td>
                <td>{price}</td>
            </tr> 
            
            {notes.map(note => {
                <Link to={`/notes/${note._id}`}>
                <p>{note.title}</p>
                </Link>
            })}
        </>
    );
}

export default ProductRow;