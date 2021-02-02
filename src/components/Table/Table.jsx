const Thead = () => (
    <thead>
        <tr>
            <th>Nom</th>
            <th>Job</th>
            <th>Email</th>
        </tr>
    </thead>
);

const Tbody = ({ data }) => (
    <tbody>
        {data.map(({ name, job, email }) => (
        <tr key={name}>
            <td>{name}</td>
            <td>{job}</td>
            <td>{email}</td>
        </tr>
        ))}
    </tbody>
);

const Table = ({ data }) => (
    <table border="1">
        <Thead />
        <Tbody data={data}/>
    </table>   
);

export default Table;
