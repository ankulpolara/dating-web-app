import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <p>login</p>
            <Link href={"../register"}>
                go to register</Link>
        </div>
    )
}

export default page
