import React, {useState, useEffect} from 'react'


const url = 'https://course-api.com/react-tours-project'
const Tour = () => {
    const [readMore,setReadMore] = useState(false)
    const [tours, setTours] = useState([]);
        
        const getTours = async() => {
            const response = await fetch(url);
            const tours = await response.json();

            setTours(tours)
        }

        const removeItem = (id) => {
            let newTours = tours.filter((tours) => tours.id !== id)
            setTours(newTours)
        }


        useEffect(() =>{
            getTours()
        },[])

    return (
        <>
            <div className="card">
                {tours.map((tour) =>{
                    const {id, image, info, name, price} = tour

                    return (
                        <div key={id} className="item">
                        <img src={image} alt={name} />
                        <div  className="content">
                            <div className="header">
                                <div className="title">
                                    <h3>{name}</h3>
                                    <span>{price}</span>
                                </div>
                            </div>

                            <div className="text">
                                <p>{readMore?info:`${info.substring(0,200)}...`}
                                 <p className="read" onClick={() => setReadMore(!readMore)}>
                                     {readMore?'show less':'read more'}
                                 </p>
                                </p>

                                <button type="button" onClick={() => removeItem(id)}>Not Intrested</button>
                            </div>
                        </div>

                        </div>

                    )
                })}
                
            </div>
        </>
    )
}

export default Tour
