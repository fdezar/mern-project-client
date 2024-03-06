function NoteEditPage() {

    const [note, setNote] = useState({});

    const { noteId } = useParams();

    useEffect(() => {
        notesService.getNoteDetails()
            .then(res => {
                console.log(res.data);
                setNote(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [noteId])

    return (
        <div>

        </div>
    )
}

export default NoteEditPage;