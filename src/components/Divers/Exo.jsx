const Exo = ({ user }) => {

    const FormatName = ({firstName, lastName}) => {
        return `${firstName} ${lastName}`
    };
    
    return(
        <>
            <p>Bonjour {FormatName(user)}</p>
        </>
    );
};

export default Exo;