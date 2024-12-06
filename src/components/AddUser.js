
function AddUser(){
	return(
		<>
			<div className='container'>
			<br/>
				<div className='row'>
					<div className='card'>
						<h2 className='text-center'>UserList</h2>
						<div className='card-body'>
							<form>
								<div className='form-group md-3'>
									<label className='from-label'>FirstName:</label>
									<input
										type='text'
										name='fname'
										className='form-control'
									placeholder='please enter firstname'
									></input>
									<label className='from-label'>LastName:</label>
									<input
										type='text'
										name='lname'
										className='form-control'
										placeholder='please enter lastname'
									></input>
									<label className='from-label'>Email:</label>
									<input
										type='text'
										name='email'
										className='form-control'
										placeholder='please enter email'
									></input>
								</div>

							</form>

						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default AddUser