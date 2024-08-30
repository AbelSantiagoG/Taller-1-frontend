export default function Aside(){
    return(
        <aside className='aside'>
                <div className="container">
                    <div className="card">
                        <figure>
                            <img src="../src/assets/images/Ben_Tennyson.png" alt="" />
                        </figure>
                        <div className="contenido">
                            <h2>Ben Tennyson</h2>
                            <p>Benjamin Kirby "Ben" Tennyson es el protagonista principal titular de la franquicia Ben 10. 
                                Era un niño normal de 10 años hasta que encontró el Omnitrix, un poderoso dispositivo parecido 
                                a un reloj que le permitió convertirse en 10 extraterrestres diferentes.</p>
                            <a href="#">Mayor información</a>
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <img src="../src/assets/images/Gwen_Tennyson.png" alt="" />
                        </figure>
                        <div className="contenido">
                            <h2>Gwen Tennyson</h2>
                            <p>simplemente Gwen, es uno de los personajes principales de todas las series de Ben 10. 
                                Es la pelirroja prima inteligente de Ben, y una híbrida de 3/4 Humana 
                                - 1/4 Anodita que practica jiu-jitsu, Judo, Karate y magia..</p>
                            <a href="#">Mayor información</a>
                        </div>
                    </div>
                </div>
            </aside>
    )
}