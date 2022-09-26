import './style.css';

export const Input = ({ palavra, handleChange }) => {
    return(
        <>
            <input type="text" placeholder='Pesquisar Palavra...' value={ palavra } onChange={ handleChange } />
            
        </>
    )
};