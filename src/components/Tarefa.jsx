function Tarefas({item, concluiTarefa, removeTarefa}){
    return (
        <div className='tarefa'>
        <span style={{textDecoration: item.isFinalizado ? 'line-throungh' : ''}}>{item.descricao}</span>
        <div className='acoes'>
        <button className='botaoConcluir' onClick={() => concluiTarefa(item.id)}>Concluir</button>
        
        <button className='botaoRemover' onClick={() => removeTarefa(item.id)}>Remover</button>
        </div>
      </div>
    )
}
export default Tarefas;