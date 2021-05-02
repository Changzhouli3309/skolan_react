import Student from "./Student";
import AddStudent from "./AddStudent";

function StudentsList(props) {
    const {switchView} = props;
    return(
        <>
        <Student switchView={switchView}/>
        <AddStudent/>
        </>
    )
}

export default StudentsList;