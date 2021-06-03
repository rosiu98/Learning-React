import React from 'react'


    const List = ({people}) => {

    return (
        <>
        {people.map((person) =>{
            const {id,name,age,image} = person;
            return (
            <div key ={id} className="birthday">
            
                <div className="image">
                <img src={image} alt={name} />
                </div>

                <div className="content">
                    <div className="name">{name}</div>
                    <div className="age">{age} years</div>
                </div>
            </div>
            )


        })}
        
    </>
    )
}


export default List
