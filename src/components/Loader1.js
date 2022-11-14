import React from 'react'
import { Oval } from 'react-loader-spinner'
function Loader1() {
    return (
        <div className='loader1'>
            <Oval
                height={100}
                width={200}
                color="gold"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="gold"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    )
}

export default Loader1