import React from 'react';

//function App() {
 // return <div>
 // Writing here many words
 // <p className='One'> Somting here </p>
 // <p className='Two'> Somting here </p>
// </div>; 
//}

/*function App1() {
	return	<ul>
  <li>text1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
	</ul>;
}

function App2() {
	return <ul>
			<li>text1</li>
			<li>text2</li>
			<li>text3</li>
		</ul>;
}

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

function App4() {
	return <input/>;
}

function App5() {
	return <> <input /> <input /> <input /> </>;
}

function App6() {
	const str1 = 'text1';
	const str2 = 'text1';
	
	return <div>
		<p>{str1}</p>
		<p>{str2}</p>
	</div>;
}

function App7() {
	const name = 'user';
	const age  = '30';
	
	return <div>
		name: {name}
	<p>	age:  {age} </p>
	</div>;
}


function App() {
	const arr = [1, 2, 3, 4, 5];
  return <ul>
    <li> {arr[0]}</li>
    <li> {arr[1]}</li>
    <li> {arr[2]}</li>
    <li> {arr[3]}</li>
    <li> {arr[4]}</li>
  </ul>
}

function App() {
	const obj = {name: 'john', surname: 'smit'};
  return <div>
  <p>{obj.name}</p>
  <p>{obj.surname}</p>
  </div>
}

function App() {
	const attr = 'block';
	
	return <div id ={attr}>
		text
	</div>;
}

function App() {
	const li1 = <div><li>text1</li></div>
	const li2 = <div><li>text2</li></div>;
	const li3 = <div><li>text3</li></div>;
  return <main>
  {li1}
  {li2}
  {li3}
</main>
}


function App() {
	const items = <><li>text1</li><li>text2</li><li>text3</li> </>;
	
	return <ul>
		{items}
	</ul>
}

function App() {
	return <div>
	<input />
	<br />
	<input />
	<br />
	<input />
	<br />
	<input />
	<br />
	</div>;
}

function App() {
	return <div>
		<ul>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
		</ul>
		<ul>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
		</ul>
	</div>;
}


function App() {
	return <div>
		<table>
			<tbody>
			<tr>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			</tr>
			</tbody>
		</table>
		<table>
			<tbody>
			<tr>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			</tr>
			</tbody>
		</table>
		<table>
			<tbody>
			<tr>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			</tr>
			</tbody>
		</table>
	</div>;
}

function App() {
	const num1 = 3;
	const num2 = 2;
	
	return <div>
		result: {num1 ** num2}
	</div>;
}


function App() {
	const name = 'john';
	const surname = 'smit';
	
	return <div>
		result: {name + ' ' + surname}
		<p>result: {surname + ' ' + name}</p>
	</div>;
}

function App() {
	const num = 4;
	
	return <div>
		result: {Math.sqrt(num)}
	</div>;
}


function App() {
	let text = '';
	let text2 = '';

	let text1 = prompt('Text: ');
	if (text1){
		text2 = <p> yes </p>
	} else{
		text2 = <p> no </p>
	}

	const isAdult = true;
	if (isAdult){
		text = <p>yes</p>
	} else	{
		text = <p>no</p>
	}
	
	return <div>
		{text}
		<p> 
			{text1}
			{text2}
		</p>
	</div>
	
}


function App() {
	let text1;
	const isAdmin = true;
	if (isAdmin){
	 text1 = <div><p>Text1</p>	<p>Text2</p></div>
	}else {
	}
	
	return text1
}

function App() {
	const age = 17;
	
	return <div>
	{age < 18 ? <p>text1</p> : <p>text2</p> }	
	</div>;
}

function App() {
	const isAuth = true;
	
	return <div>
		{isAuth ? <p>вы авторизованы</p> :<p></p> }
	</div>;
}

function App() {
	const isAuth = false;
	
	return <div>
		{isAuth  ? <p>Авторизованы</p> :<p>пожалуйста, авторизуйтесь</p>}
	</div>;
}


function getDigitsSum(){
	function num1(num){
		return 10000;
	}
	function num2(num){
		return 2000;
	}
	function num3(num){
		return 300;
	}
	function num4(num){
		return 40;
	}

	function num5(num){
		return 5;
	}

	return <div>
		<p>{num1(1) + num2(2) + num3(3) + num4(4) + num5(5)}</p>
	</div>
}
export default getDigitsSum;


function App() {
	function show1() {
		alert(1);
	}
	
	function show2() {
		alert(2);
	}
	
	return <div>
		<button onClick={show1}>act1</button>
		<button onClick={show2}>act2</button>
	</div>;
}


function App() {
	function button1(){
		alert(1);
	}
	function button2(){
		alert(2);
	}
	function button3(){
		alert(3);
	}
	return <div>
		<button onClick={button1}>act1</button>
		<button onClick={button2}>act2</button>
		<button onClick={button3}>act3</button>
	</div>;
}

function App() {
	function func(event) {
		console.log(event.target); // объект с событием
	}
	
	return <div>
		<button onClick={func}>act</button>
	</div>;
}

function App() {
	function func(event, arg, arg1) {
		console.log(event, arg,arg1);
	}
	
	return <div>
		<button onClick={event => func('eee', event,'Button')}>act</button>
	</div>;
}


function App() {
	function func( arg, event, arg1) {
		console.log( arg, event ,arg1);
	}
	
	return <div>
		<button onClick={event => func('eee', event,'Button')}>act</button>
	</div>;
}


function App() {
	const arr = [
		<li>1</li>,
		<li>2</li>,
		<li>3</li>,
		<li>4</li>,
		<li>5</li>,
	];
	
	return <ul>
		{arr}
	</ul>
}



function App() {
	const arr = [];
	
	for (let i = 1; i <= 5; i++) {
		arr.push(<li>{i}</li>);
	}
	
	return <ul>
		{arr}
	</ul>;
}


function App() {
	const arr = ['a','b','c','d','e'];
	
	const res = arr.map(function(item,index) {
		return <li key = {index}>{item}</li>;
	});
	
	return <ul>
		{res}
	</ul>;
}


const users = [
	{id: 1 ,name: 'user1', surn: 'surn1', age: 30},
	{id: 2,name: 'user2', surn: 'surn2', age: 31},
	{id: 3,name: 'user3', surn: 'surn3', age: 32},
];


function App() {
	
	const res = users.map(function(item){
		return <li key = {item.id}>
			<span>{item.name}</span>:
			<span> {item.surn} </span>
			<span> {item.age} </span>
		</li>
	});
	
	return <ul>
		{res}
	</ul>
}


*/

const users = [
	{id: 1 ,name: 'user1', surn: 'surn1', age: 30},
	{id: 2,name: 'user2', surn: 'surn2', age: 31},
	{id: 3,name: 'user3', surn: 'surn3', age: 32},
];


function App() {
	
	const name1 = users.map(function(item){
		return <li key = {item.id}>
			<span>{item.name}</span>:
		</li>
	});
	const surn1 = users.map(function(item){
		return <li key = {item.id}>
			<span>{item.surn}</span>:
		</li>
	});
	const age1 = users.map(function(item){
		return <li key = {item.id}>
			<span>{item.age}</span>:
		</li>
	});
	return <table>
	    <thead>
			<tr>
				<td>имя пользователя <tbody>{name1}</tbody></td>
				<td>фамилия<tbody>{surn1}</tbody></td>
				<td>возраст<tbody>{age1}</tbody></td>
			</tr>
		</thead>
	</table>
}
export default App;



