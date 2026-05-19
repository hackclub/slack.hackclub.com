import { useEffect, useState } from "react"

export default function nav() {
    const [slide, setSlide] = useState(0)

    useEffect(() => {
        const url = window.location.href
        setSlide(parseInt(url.split("/").at(-1)))
        console.log(parseInt(url.split("/").at(-1)))
    })

    return (
        <>
            <nav className="nav-footer-idk-what-im-doing">
                <a className={(slide == 1) ? "nav-element-item-thing active" : "nav-element-item-thing"} href="/slides/1" aria-label="Click me to get directed to the first slide"></a>
                <a className={(slide == 2) ? "nav-element-item-thing active" : "nav-element-item-thing"} href="/slides/2" aria-label="Click me to get directed to the second slide"></a>

                <a className={(slide == 3) ? "nav-element-item-thing active" : "nav-element-item-thing"} href="/slides/3" aria-label="Click me to get directed to the third slide"></a>
                <a className={(slide == 4) ? "nav-element-item-thing active" : "nav-element-item-thing"} href="/slides/4" aria-label="Click me to get directed to the fourth slide"></a>
                <a className={(slide == 5) ? "nav-element-item-thing active" : "nav-element-item-thing"} href="/slides/5" aria-label="Click me to get directed to the fifth slide"></a>
            </nav>

            <style>
                {`
                    .nav-footer-idk-what-im-doing {
                        position: absolute;
                        bottom: 1rem;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        
                        display: flex;
                        justify-content: center;
                        gap: 1rem;
                    }
                
                    .nav-element-item-thing {
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        background: lightgrey;
                }
                    .nav-element-item-thing.active {
                        background: grey;
                }
                `}
            </style>
        </>
    )
}