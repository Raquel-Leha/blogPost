import "./Pagination.css"

export const Pagination = ({nPages, setCurrentPage, currentPage}) => {




    const next = () => {
        if(currentPage !== nPages) {
            setCurrentPage(currentPage + 1);

        } 
        
    }

    const previus = () => {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
     
    }


  return (
    <div className="div-pagination">
        <button onClick={previus} disabled={(currentPage === 1) ? true : false}>Anterior</button>
        <button>{currentPage} / {nPages}</button>
        <button onClick={next} disabled={(currentPage === nPages) ? true : false}>Siguiente</button> 
    </div>

  );
};
