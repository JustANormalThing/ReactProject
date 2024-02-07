import React from 'react';

function App() {
  return <div>
  Writing here many words
  <p className='One'> Somting here </p>
  <p className='Two'> Somting here </p>
 </div>; 
}

//function App1() {
	//return	<ul>
   // <li>text1</li>
   // <li>1</li>
   // <li>1</li>
   // <li>1</li>
   // <li>1</li>
   // <li>1</li>
   // <li>1</li>
   // <li>1</li>
   // <li>1</li>
   // <li>1</li>
	//	</ul>;
//}

//function App2() {
	//return <ul>
		//	<li>text1</li>
		//	<li>text2</li>
		//	<li>text3</li>
		//</ul>;
//}

function App3() {
	return  (
    <>
    <div> 
      <ul>
		  <li>text1</li>
		  <li>text2</li>
		  <li>text3</li>
	    </ul>   
    </div>
    <div>
    <ul>
		<li>text1</li>
		<li>text2</li>
		<li>text3</li>
	</ul>;
 </div>
 </>
 );
}

//function App4() {
	//return <input/>;
//}

//function App5() {
	//return <> <input /> <input /> <input /> </>;
//}

function App6() {
	const str1 = 'text1';
	const str2 = 'text1';
	
	return <div>
		<p>{str1}</p>
		<p>{str2}</p>
	</div>;
}



export default App6;
