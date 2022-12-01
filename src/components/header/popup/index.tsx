import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Popup = () => {
	const [popup, setPopup] = useState(false)

	const togglePopup = () => {
		setPopup(!popup)
	}

	if (popup) {
		document.body.classList.add('active-modal')
	} else {
		document.body.classList.remove('active-modal')
	}

	return (
		<>
			<button onClick={togglePopup} className='btn-modal'>
				Open
			</button>

			{popup && (
				<div className='modal'>
					<div onClick={togglePopup} className='overlay'></div>
					<Typography
						fontFamily='Open Sans'
						textAlign='center'
						variant='h4'
						component='h2'
						sx={{
							color: '#2B2B2B',
							fontWeight: 700,
							fontSize: '24px',
							margin: '20px 0 32px 0',
						}}
					>
						Вход на сайт
					</Typography>
					<Typography
						fontFamily='Open Sans'
						textAlign='center'
						sx={{
							color: '#2B2B2B',
							fontWeight: 700,
							fontSize: '24px',
							margin: '20px 0 32px 0',
						}}
					>
						Подарим подарок на день рождения, сохраним адрес доставки и
						расскажем об акциях
					</Typography>
					<TextField
						margin='normal'
						fullWidth={true}
						id='standard-basic'
						label='Ваш номер'
						variant='outlined'
					/>
					<Button
						sx={{
							marginTop: '44px',
							marginBottom: '15px',
							background: '#ffa500',
						}}
						fullWidth={true}
						variant='contained'
					>
						Закрыть
					</Button>
				</div>
			)}
		</>
	)
}
