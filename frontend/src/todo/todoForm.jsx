import React from 'react';
import Grid from '../template/grid';
import IconButtom from '../template/iconButton';

export default props => {
	const keyHandler = e => {
		if (e.key === 'Enter') {
			e.shiftKey ? props.handleSearch() : props.handleAdd();
		} else if (e.key === 'Escape') {
			props.handleClear();
		}
	}
	
	return (
		 <div role='from' className='todoForm'>
			 <Grid cols='12 9 10'>
				 <input type="text" id='description' className='form-control' placeholder='Adicione uma tarefa'
				        value={props.description}
				        onChange={props.handleChange}
				        onKeyUp={keyHandler}
				 />
			 </Grid>
			 <Grid cols='12 3 2'>
				 <IconButtom style='primary' icon='plus' onClick={props.handleAdd}/>
				 <IconButtom style='info' icon='search' onClick={props.handleSearch}/>
				 <IconButtom style='default' icon='close' onClick={props.handleClear}/>
			 </Grid>
		 </div>
	)
}