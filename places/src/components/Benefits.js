import React from 'react';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';

import {indigo400,redA400,lightBlueA400,amberA400} from 'material-ui/styles/colors';

export default class Benefit extends React.Component {
	render() { //Retorna el html, siempre debe de ir
		return (
			<ul>
            <Card className="Header-Benefit">
                <CardText>
                    <div className="row">
                        <div className="Header-Benefit-image" style={{'backgroundColor':redA400}}>
                            <img src={process.env.PUBLIC_URL + '/images/heart.svg'}/>
                        </div>
                        <div className="Header-Benefit-content">
                            <h3>Calificaciones</h3>
                            <p>Califica tus lugares con experiencias</p>
                        </div>
                    </div>
                </CardText>
            </Card>
            <Card className="Header-Benefit">
                <CardText>
                    <div className="row">
                        <div className="Header-Benefit-image" style={{'backgroundColor':lightBlueA400}}>
                            <img src={process.env.PUBLIC_URL + '/images/dia.svg'}/>
                        </div>
                        <div className="Header-Benefit-content">
                            <h3>Sin Internet</h3>
                            <p>Places funciona sin internet, de veras!</p>
                        </div>
                    </div>
                </CardText>
            </Card>
            <Card className="Header-Benefit">
                <CardText>
                    <div className="row">
                        <div className="Header-Benefit-image" style={{'backgroundColor':amberA400}}>                                
                            <img src={process.env.PUBLIC_URL + '/images/star.svg'}/>
                        </div>
                        <div className="Header-Benefit-content">
                            <h3>Favoritos</h3>
                            <p>Define tu lista de sitios favoritos</p>
                        </div>
                    </div>
                </CardText>
            </Card>
            </ul>
		)
	}
}
