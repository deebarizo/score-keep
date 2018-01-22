import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<TitleBar subtitle="Created by Dee Barizo" />
				<div className="wrapper">
					<PlayerList players={this.props.players} />
					<AddPlayer />
				</div>
			</div>
		);
	}
}