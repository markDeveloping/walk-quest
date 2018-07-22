import  React from 'react';

const walks = () => (
  <div>
  <span className="column-12">
    <h1>Find a walk</h1>
  </span>
  	<div className="column-6">
  	
		<article class="walk-card">
	  		<a className="card-link" href="#">
	  		<div>
	  		<img src="http://via.placeholder.com/150x200" className="walk-image" alt="Placeholder." />
	  		</div>
	  		<div className="walk-details">
	  			<h3 className="walk-title">Pirates adventure</h3>
		  		<h4 className="walk-location">Bristol</h4>
			    <p className="walk-description">What's a pirates favourite subject? ARRRTT..</p>
			    <p className="walk-author">Mark Williams</p>
	  		</div>
	  		</a>
	  	</article>
  		
  	</div>
  </div>
);


export default walks;