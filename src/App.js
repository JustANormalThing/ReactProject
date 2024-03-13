import React, { useState } from 'react';
/*
const users = [
	{id: nanoid() ,name: 'user1', surn: 'surn1', age: 30},
	{id: nanoid(),name: 'user2', surn: 'surn2', age: 31},
	{id: nanoid(),name: 'user3', surn: 'surn3', age: 32},
];


function App() {
	
	const test = users.map(function(item){
		return <li key = {item.id}>
			<span>{item.id}</span>:
		</li>
	});		
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
				<td>возраст<tbody>{test}</tbody></td>
			</tr>
		</thead>
		<tbody>
		
		</tbody>
	</table>
}
*/
function App() {
	const [name, setName] = useState('user1');
	const [surn, setSurn] = useState('surn1');
	const [age, setAge] = useState('32');
	const [banned,ban] = useState(false);
	const[count,Setcount] = useState(0);
	let A = banned;
	let B = '';
	if (A = banned)
		B = 'Unban';
	else
		B = 'Ban'

	function OnClick(){
		setName('user2');
		setSurn('surn2');
		setAge('37');
	}
	return <p>
	<span>{name}</span>
	<p><span>{surn}</span> </p> 
	<span>{age}</span>
	<p><button onClick={OnClick}>btn</button></p>
	<span>{banned ? 'User is banned' : 'User is not banned'}</span>
	<button onClick={() => ban(!banned)}>{B}</button>
	<p>{count}</p>
	<p><button onClick={() => Setcount(count + 1)}>btn</button></p>
	<p><button onClick={() => Setcount(count - 1)}>btn</button></p>
	</p>;

}
export default App;



