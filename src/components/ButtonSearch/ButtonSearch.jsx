import './style.css';

export const ButtonSearch = ({ handleSearch }) => {
    return(
        <button onClick={ handleSearch } >Procurar</button>
    );
};