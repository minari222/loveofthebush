function Sample(){
        return(
               <>
                  <SkipComponent/>
                  <WrapComponent/>
                  <Footer/>
               </>
        )
}

// Skip
function SkipComponent() {
   
        return (
            <>
                <ul className="skip">
                    <li><a href="#main">콘텐츠바로가기</a></li>
                </ul>
            </>
        );
    }



// Wrap
function WrapComponent() {
    
        return (
            <>

                    <MainComponent/>

            </>
        );
    }


	
	// main
function MainComponent() {

        return (
            <>
		
            <div id="menu">
                <ul>
                    <li><a href="index.html">Main</a></li>
                    <li><a href="collection.html">Collection</a></li>
                    <li><a href="story.html">Story</a></li>
                </ul>
            </div>    



           <section id="main">
            <div className="firstimg"><img src="img/mainimg.png" alt="ban" /></div>
            <div><img src="img/mainimg2.png" alt="ban" /></div>
            <p>Since 2020, Bush pursues a life where Bush becomes a daily routine,<br />
              shares cmpathy and cnhancing aesthetics in Seoul.</p>
           </section>


			<section id="list1">
                <ul>
                    <li><a href="#"><img src="img/img1-1.png" alt="1" /></a></li>      
                    <li><a href="#"><img src="img/img3.png" alt="1" /></a></li>
                </ul>
               
            </section>

			
		   </>
        );
    }


// Footer
function Footer() {
    
    return (
        <>

           <footer>
          <a href="#"><img src="img/logo.png" alt="1" /></a>
            </footer>
        </>
    );
}


	
	ReactDOM.render(
        <Sample/>,
        document.getElementById("root")
);
	