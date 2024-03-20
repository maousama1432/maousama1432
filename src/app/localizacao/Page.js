import Map from "../componentes/Map";

export default function localizacao(){
    return( 
        <div className="text-center py-5 mb-5">
            <h3 className="pb-3">&lt;--  Página de Localização!  --&gt;</h3>
            <Map/>
        </div>
    );
}