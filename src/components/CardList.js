import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    //em vez de map() pode usar-se o foreach()
    //Loop
    // if (true) {
    //     throw new Error('NOOOOOOOOOOOOOOO!');
    // }
    return (
        <div>
            {
                robots.map((user, i) => {

                    // {cardComponent} e {i}  têm de estar entre {} derivado de ser javascript
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;

