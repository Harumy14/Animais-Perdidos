import { useState } from "react";

function Cadastro({addAnimal}) {
    const [descricao, setDescricacao] = useState('');
    const enviarDados = (e) =>{
        e.preventDefault();
        //alert("Descricao:" + descricao)
        if(!descricao) return;
        addAnimal(descricao);
        //limpar o valor da variavel
        setDescricacao('');
    }
    return (
        <>
            <div className="cadastrar">
                <form onSubmit={enviarDados}>
                <input type="text" id="txt_descriacao" value={descricao} onChange={(e) => setDescricacao(e.target.value)} placeholder="𝓘𝓷𝓯𝓸𝓻𝓶𝓮  𝓪  𝓭𝓮𝓼𝓬𝓻𝓲𝓬̧𝓪̃𝓸"/>
                <button className="botaoCadastrar" type="submit">ℂ𝕒𝕕𝕒𝕤𝕥𝕣𝕒𝕣</button>
                </form>
            </div>
        </>
    )
}
export default Cadastro;