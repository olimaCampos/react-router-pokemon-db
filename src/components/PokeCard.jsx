import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const PokeCard = ({pokemon}) => {
  const formatName = nombre => {
    return nombre[0].toUpperCase() + nombre.slice(1)
  }
  

  const {stats} = pokemon
  const types = pokemon.types.map(t => t.type.name)

  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img src={pokemon.sprites.other.home.front_default}  />
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>{formatName(pokemon.name)}</Card.Title>
          </Card.Header>
          <Card.Body>
            <ul>
              {stats.map( (s, index) => {
                return (
                  <li key={index}>
                    {s.stat.name}: {s.base_stat}
                  </li>
                )}
              )}
            </ul>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {types.map( type => formatName(type) + ' ')}
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <div>
        
      </div>
    </div>
  )
}

export default PokeCard