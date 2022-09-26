import { Input } from '../../components/Input/Input';
import { ButtonSearch } from '../../components/ButtonSearch/ButtonSearch';
import './styles.css';
import { useState } from 'react';
import { Respostas } from '../../components/Respostas';


export const Home = () => {
  const url = "https://significado.herokuapp.com/v2/";
  const [palavra, setPalavra] = useState('');
  const [resposta, setResposta] = useState('');

  const handleSearch = () => {
    fetch(`${url}${palavra}`).
      then(res => res.json()).
      then(data => setResposta(data[0].meanings[0])).
      catch((e) => alert('palavra não encotrada'));

      if(palavra == ''){
        alert('o campo esta vazio')
      }
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setPalavra(value);
  }
  return (
    <div className="App">
      <header>
        <h1>Dicionario</h1>
        <div className="form">
          <Input palavra={ palavra } handleChange={ handleChange } />
          <ButtonSearch handleSearch={ handleSearch }/>
        </div>
      </header>
      {!!resposta != '' && <Respostas palavra={ palavra } resposta={ resposta } />}
    </div>
  );
}

// const url = "https://significado.herokuapp.com/v2/";

// function pesquisar(){
//     let palavra = inputTxt.value;
//     if(palavra == ""){
//         resposta.innerHTML = `<p class="erro">O campo está vazio</p>`
//         inputTxt.value = "";
//     }else{
//         fetch(`${url}${palavra}`).
//         then(res => res.json()).
//         then((data) => {
//             resposta.innerHTML = `
//              <h2>${palavra}</h2>
//             <p> <span>1</span> ${data[0].meanings[0]}</p>
//             `
//         }).
//         catch((e) => {
//             resposta.innerHTML = `<p class="erro">opss algo deu errado</p>`
//         });
//         inputTxt.value = "";
//     }
// }

// btnPesquisa.addEventListener('click', pesquisar)
// document.addEventListener('keypress', (e) => {
//     if(e.which == 13){
//         pesquisar();
//     }
// })

