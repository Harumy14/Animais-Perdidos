function Filtrar({filtrar, setFiltrar, search, setSearch, setSort}){
    return(
    <>
    <h2>Filtrar</h2>
    <div className="Filtrar">
        <input type="text" placeholder="𝑫𝒊𝒈𝒊𝒕𝒆 𝒑𝒂𝒓𝒂 𝒑𝒆𝒔𝒒𝒖𝒊𝒔𝒂𝒓"
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
 
        <select value={filtrar} onChange={(e => setFiltrar(e.target.value))}>
        <option value="Todos">Todos</option>
        <option value="Perdido">Perdido</option>
        <option value="Resgatado">Resgatado</option>
        </select>
    </div>
    </>
    )
}
 
export default Filtrar;