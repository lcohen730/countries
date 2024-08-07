export default function Flag({ country }) {
    return (
        <div>
            {country && country.flags && country.flags.svg ?
                ( <img src={country.flags.svg} alt={country.name.common} /> ) :
                ( <p>Flag loading...</p> )
            }
        </div>
    );
}