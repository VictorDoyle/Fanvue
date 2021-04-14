import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const GenreCard = (props) => (
  <Card className={props.heroCardStyle}>
    <Image src={props.heroCardImage} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.titleHeader}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.titleMeta}</span>
      </Card.Meta>
      <Card.Description>
        {props.heroCardDescription}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     <Link to={props.heroCardLink}>
        <Icon name={props.heroCardIcon} />
        {props.heroCardLinkName}
      
     </Link>
    </Card.Content>
  </Card>
)

export default GenreCard