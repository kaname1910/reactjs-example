import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {indigo400} from 'material-ui/styles/colors';

import Title from '../components/Title';
import Container from '../components/Container';
import Benefit from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';
import {Link} from 'react-router-dom';
import data from '../requests/places';

export default class Home extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			places: []
		}

		setTimeout(()=>this.setState({places:data.places}),3000)

		this.hidePlace = this.hidePlace.bind(this);
	} 

	 places() {
        return this.state.places.map((place,index)=>{
            return (
                <PlaceCard onRemove={this.hidePlace} place={place} key={index} />
            );
        })
    }

    hidePlace(place) {
    	this.setState({
    		places:this.state.places.filter(el => el != place)
    	})
    }

	render() { //Retorna el html, siempre debe de ir
		return (
			<section>   
				<div className="Header-background">
					<Container>
						<div className="Header-main">
							<Title></Title>
							<Link to="/signup">
							<RaisedButton label="Crear Cuenta Gratuita" secondary={true}></RaisedButton>
							<img src={process.env.PUBLIC_URL + '/images/top.jpg'} className='Header-illustration' />
							</Link>
						</div>
						<div>
							<Benefit></Benefit>
						</div>
					</Container>
		        </div>
		        <div style={{'backgroundColor': indigo400, 'padding': '50px', 'color':'white'}}>
		            <h3 style={{'fontSize':'24px'}}>Sitio Populares</h3>
		            <div className="row">
		                {this.places()}
		            </div>
		        </div>
		    </section>
		)
	}
}
