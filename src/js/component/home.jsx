import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";









//create your first component
const Home = () => {
	return (
	<>
	 <body>
		 <Navbar />
		
	     <div className="conatiner  ">
			<div className="container bg-secondary bg-opacity-25 rounded">
		     <Jumbotron />
		   </div>
		    <div className="card-group">
		      <Card  title="Arctic Monkeys "
		      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWA0_bvB-pQLQJydQ8Fih8nb_RdnqZ-RdXNA&usqp=CAU"
		      description="Arctic Monkeys are a British rock band, formed in Sheffield, United Kingdom.3 The group consists of lead guitarist and vocalist Alex Turner, guitarist Jamie Cook, drummer Matt Helders and bassist Nick O'Malley. The "
		      buttonUrl="https://es.wikipedia.org/wiki/Arctic_Monkeys" 
		      buttonLabel="Go to Wikipedia"/>
		      <Card 
		       title="No About"
		       image="https://c8.alamy.com/compfr/bw1rrm/le-nbc-today-show-concert-sans-doute-bw1rrm.jpg"
		       description="No Doubt is an American rock band from Anaheim, California, formed in 1986. For most of their career, the band consisted of vocalist Gwen Stefani, guitarist Tom Dumont, bassist Tony Kanal, and drummer Adrian Young."
		       buttonUrl="https://es.wikipedia.org/wiki/No_Doubt" 
		       buttonLabel="Go to Wikipedia"/>
		       <Card 
		       title="Labrinth"
		       image="https://upload.wikimedia.org/wikipedia/commons/4/4a/Labrinth_portrait_%28cropped%29.jpg"
		       description="Timothy Lee McKenzie (4 de enero de 1989), más conocido por su nombre artístico Labrinth, es un cantautor y productor musical británico. Desde 2018 forma parte del supergrupo LSD."
		       buttonUrl="https://es.wikipedia.org/wiki/Labrinth" 
		     buttonLabel="Go to Wikipedia"/>
		       <Card title="kevin Kaarl"
		        image="https://www.irock.cl/wp-content/uploads/2022/11/Kevin-Kaarl-17.jpg"
		        description="Kevin Eduardo Hernández Carlos (Meoqui, Chihuahua, May 15, 2001)1, known as Kevin Kaarl, is a Mexican folk music singer, songwriter and musician Inglés mexicano de música folk."
		        buttonUrl="https://es.wikipedia.org/wiki/Kevin_Kaarl" 
		        buttonLabel="Go to Wikipedia"/>
            </div>  
		</div>
	 </body>
	    <Footer/>
	</>
	);
};

export default Home;
