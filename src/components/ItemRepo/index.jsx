import { ItemContainer } from './styles';

const ItemRepo = ({repo}) => {

    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target='blank'>Ver Repositório</a><br />
            <a href='#' className='remover'>Remover</a>
            <hr />
        </ItemContainer>
    );

};

export default ItemRepo;