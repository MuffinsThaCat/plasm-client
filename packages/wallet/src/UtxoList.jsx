import React from 'react';
import {List, Icon, Button, Label, Popup} from 'semantic-ui-react';
import {ReactiveComponent} from 'oo7-react';
import {runtime, secretStore} from 'oo7-substrate';
import Identicon from 'polkadot-identicon';

export class SecretItem extends ReactiveComponent {
	constructor () {
		super()

		this.state = {
			display: null
		}
	}

	render () {
		let that = this
		let toggle = () => {
			let display = that.state.display
			if (display === null) {
				display = 'uri'
				window.setTimeout(() => that.setState({ display: null }), 5000)
				that.setState({ display })
			}
		}
		return this.state.display === 'uri'
			? <Label
				basic
				icon='privacy'
				onClick={toggle}
				content='URI '
				detail={this.props.uri}
			/>
			: <Popup trigger={<Icon
				circular
				className='eye slash'
				onClick={toggle}
			/>} content='Click to uncover seed/secret' />
	}
}

export class UtxoList extends ReactiveComponent {
	constructor () {
		super(["utxoList"])
	}

	readyRender () {
		return <List divided verticalAlign='bottom' style={{padding: '0 0 4px 4px', overflow: 'auto', maxHeight: '20em'}}>{
            this.state.utxoList.map(([txHash,outIndex,balance]) =>
				<List.Item key={txHash}>
					<List.Content floated='right'>
						<Button size='small' onClick={() => console.log('Exit!')}>Exit</Button>
					</List.Content>
					<List.Content>
                        <List.Content floated='left'>
                            <div>TxHash</div>
                            <div style={{fontWeight: 'bold', width: '38em', color: '#050'}}>
                                {txHash.toString()}
                            </div>
                        </List.Content>
					</List.Content>
					<List.Content floated='left'>
						<div>OutIndex</div>
						<div style={{fontWeight: 'bold', width: '4em', color: '#dad'}}>
                            {outIndex.toString()}
						</div>
					</List.Content>
					<List.Content floated='left'>
						<div>Balance</div>
						<div style={{fontWeight: 'bold', width: '8em', color: '#dd3'}}>
                            {balance.toString()}
						</div>
					</List.Content>
				</List.Item>
			)
		}</List>
	}
}
