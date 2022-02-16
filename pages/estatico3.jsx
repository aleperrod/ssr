export function getStaticProps(){
    return {
        revalidate: 7, //segundos!
        props: {
            numero: Math.random()
        }
    }
}

export default function estatico2(props){
    return(
        <div>
            <h1>Estático 3</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}