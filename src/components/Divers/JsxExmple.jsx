const user = {
    firstName: 'John',
    lastName: 'Doe',
};

const FormatName = (user) => {
    return `${user.firstName} ${user.lastName}`
};

const JsxExemple = () => {
    return(
        <>
            <p>Bonjour {FormatName(user)}</p>
        </>
    )
}

export default JsxExemple;