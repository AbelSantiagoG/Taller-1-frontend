import '../styles/Principal.css'

export default function Principal(){
    return(
        <main className='main'>
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
            <section className='principal'>
                <div className="princ-info">
                    <h2>Serie</h2>
                    <img src="../src/assets/images/Ben 10.jpg" alt="Ben 10" className="ben10" />
                    <p>Ben 10 (Ben Diez en Hispanoamérica, Ben Ten en España y en inglés) es una serie animada, creada por 
                        Man of Action y producida por Cartoon Network Studios.
                        En Estados Unidos, la serie fue estrenada como parte de un anticipo el 27 de diciembre de 2005, 
                        siendo su segundo episodio transmitido como especial el 13 de enero de 2006 y el último episodio emitido 
                        el 15 de abril de 2008. En Hispanoamérica fue pre-estrenada en el sitio Cartoon Network LA el 17 de julio, 
                        y estrenada oficialmente el 4 de agosto de 2006.
                        En México fue estrenada el 30 de julio de 2007 en la televisión abierta a través de Canal 5 de Televisa México.
                        En Chile se transmitió a través del canal La Red. En Perú era transmitido por Latina Televisión. 
                        En Paraguay es transmitido por La tele. En República Dominicana fue estrenada en televisión Local, 
                        el 11 de mayo de 2012 por Telesistema.
                        Además, salió su primera serie derivada ambientada 5 años después de la serie llamada Ben 10: Fuerza Alienígena de 46 episodios y una película live action que se estrenó el 18 de abril del 2008 y en Hispanoamérica en Noviembre de 2009.
                        Luego de Ben 10: Fuerza Alienígena salió una secuela directa de esta, ambientada varias semanas después, 
                        llamada Ben 10: Supremacía Alienígena, estrenada el 23 de Abril de 2010 en USA y el 10 de Octubre de 2010 
                        en Hispanoamérica con el especial 10/10/10. Luego de esta, salió la cuarta y hasta ahora la última serie, 
                        llamada Ben 10: Omniverse, que es la secuela de Ben 10: Supremacía Alienígena.</p>
                </div>
            </section>
        </main>
    )
}