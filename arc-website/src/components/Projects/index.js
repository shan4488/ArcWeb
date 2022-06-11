import React, { useState, useEffect} from 'react';
import { ProjectMain, ProjectTitle, ProjectContainer,Card, CardId, CardSpan, CardBody,ProjectButton } from './ProjectsElements';



const Projects = () => {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(6);
    var prevValue = 3;

    const showMoreCards = () => {
        setVisible((prevValue) = prevValue + 3);
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setItems(data))

    }, []);
  return (
    <>
        <ProjectMain>
            <ProjectTitle>
                Projects In Action
            </ProjectTitle>
            <ProjectContainer>
                {items.slice(0,visible).map((item) => (
                    <Card>
                        <CardId>
                            <CardSpan>{item.id}</CardSpan>
                        </CardId>
                        <CardBody>
                            {item.body}
                        </CardBody>
                    </Card>
                ))}

            </ProjectContainer>
            <ProjectButton onClick={showMoreCards}>
                    Load More
            </ProjectButton>
        </ProjectMain>
    </>
  );
};

export default Projects