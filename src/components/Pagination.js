import React from 'react'
function Pagination({currentPage,setCurrentPage,coinsLength}) {

    let numberArray=[]
    for(let i=1;i<=Math.ceil(coinsLength)/10;i++){
        numberArray.push(i)
    }
  return (
    <div className='page-number-container'>
    {
        numberArray.map((page,ind)=>{
            return <button key={ind} className={page===currentPage ? 'page-active' : 'page-number-btn'} onClick={()=>{
                setCurrentPage(page)
            }}>{page}</button>
        })
    }
    </div>
  )
}

export default Pagination