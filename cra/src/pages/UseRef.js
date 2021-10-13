import { useEffect } from "react";
import { useRef } from "react";
import VanillaTilt from 'vanilla-tilt';


const vanillaTiltOptions = {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
}    

export const UseRef = () => {
    const domRef = useRef(null);

    // componentDidMount
    useEffect(() => {
        const tiltRef = domRef.current;
        VanillaTilt.init(tiltRef, vanillaTiltOptions);

        // fonction exécutée lorsque le composant va se démonter (componentWillUnmount)
        return () => {
            tiltRef.vanillaTilt.destroy(tiltRef);
        }
    }, []);

    return <>
        <h1>UseRef</h1>
        <div ref={domRef} className="p-3 bg-info text-light">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat minus dolorem soluta,
                quidem eum id obcaecati expedita fugiat reiciendis neque inventore, pariatur temporibus nam
                dignissimos reprehenderit repudiandae recusandae magnam?
            </p>
        </div>
    </>
}
