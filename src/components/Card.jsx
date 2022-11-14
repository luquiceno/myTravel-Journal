
import locationIcon from '../images/location-icon.png'

function Card(props) {
    return (
        <div className="container">

            <div className="card-content">
                <div className="box--image">
                    <img src={props.imageUrl}  className="card--image" alt="a mountain with a lake on the top of fluelapass in switzerland. " />
                </div>

                <div className="card--info">
                    <div>
                        <img src={locationIcon}  className="location--icon" alt="the icon for location" />
                        <span className="location--city">{props.location}</span>
                        <a href={props.googleMapsUrl} className="link--image">View on Google Maps</a>
                    </div>

                    <div>
                        <h1 className="name--place">{props.title}</h1>
                        <span className="travel--date">{props.startDate} - {props.endDate}</span>
                        <p className="info--place">{props.description}
                        </p>
                    </div>
                </div>
            </div>
                   
        </div>
    )
}

export default Card








                                