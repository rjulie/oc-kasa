function CardItem({ title, cover }) {
	return (
		<li className=''>
			<span className=''>{title}</span>
			<img className='' src={cover} alt={`${title} cover`} />
			{title}
		</li>
	)
}

export default CardItem
