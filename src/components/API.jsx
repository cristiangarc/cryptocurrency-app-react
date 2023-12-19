const var1 = import.meta.env.VITE_API_KEY2;

const API = () => {
    return (
        <div>
            <h2>API</h2>
            <p>{var1.length}</p>
        </div>
    );
};

export default API;
