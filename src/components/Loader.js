import React from 'react'
import { Triangle } from 'react-loader-spinner'
function Loader() {
    return (
        <div className='loader'>
            <Triangle
                height="80"
                width="80"
                color="gold"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default Loader