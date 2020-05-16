






// let state_list=[{
// 	"state": "Maharashtra",
// 	"confirmed": "29,100",
// 	"active": "21,468",
// 	"recovered": "6,564",
// 	"deceased": "1,068",
// 	"Maharashtra": [
// 	{
// 		"deceased": "38",
// 		"district": "Thane",
// 		"confirmed": "3,499",
// 		"active": "2,831",
// 		"recovered": "630"
// 	},
// 	{
// 		"deceased": "181",
// 		"district": "Pune",
// 		"confirmed": "3,481",
// 		"active": "1,923",
// 		"recovered": "1,377"
// 	},
// 	{
// 		"deceased": "34",
// 		"district": "Nashik",
// 		"confirmed": "825",
// 		"active": "652",
// 		"recovered": "139"
// 	},
// 	{
// 		"deceased": "20",
// 		"district": "Aurangabad",
// 		"confirmed": "778",
// 		"active": "604",
// 		"recovered": "154"
// 	},
// 	{
// 		"deceased": "12",
// 		"district": "Raigad",
// 		"confirmed": "392",
// 		"active": "281",
// 		"recovered": "99"
// 	},
// 	{
// 		"deceased": "21",
// 		"district": "Solapur",
// 		"confirmed": "365",
// 		"active": "272",
// 		"recovered": "72"
// 	},
// 	{
// 		"deceased": "13",
// 		"district": "Palghar",
// 		"confirmed": "363",
// 		"active": "232",
// 		"recovered": "118"
// 	},
// 	{
// 		"deceased": "2",
// 		"district": "Nagpur",
// 		"confirmed": "334",
// 		"active": "239",
// 		"recovered": "93"
// 	},
// 	{
// 		"deceased": "27",
// 		"district": "Jalgaon",
// 		"confirmed": "246",
// 		"active": "187",
// 		"recovered": "32"
// 	},
// 	{
// 		"deceased": "14",
// 		"district": "Akola",
// 		"confirmed": "226",
// 		"active": "152",
// 		"recovered": "60"
// 	},
// 	{
// 		"deceased": "2",
// 		"district": "Satara",
// 		"confirmed": "126",
// 		"active": "91",
// 		"recovered": "33"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "Yavatmal",
// 		"confirmed": "99",
// 		"active": "49",
// 		"recovered": "50"
// 	},
// 	{
// 		"deceased": "13",
// 		"district": "Amravati",
// 		"confirmed": "98",
// 		"active": "29",
// 		"recovered": "56"
// 	},
// 	{
// 		"deceased": "3",
// 		"district": "Ratnagiri",
// 		"confirmed": "86",
// 		"active": "78",
// 		"recovered": "5"
// 	},
// 	{
// 		"deceased": "8",
// 		"district": "Dhule",
// 		"confirmed": "74",
// 		"active": "47",
// 		"recovered": "19"
// 	},
// 	{
// 		"deceased": "3",
// 		"district": "Ahmednagar",
// 		"confirmed": "71",
// 		"active": "33",
// 		"recovered": "35"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "Hingoli",
// 		"confirmed": "66",
// 		"active": "20",
// 		"recovered": "46"
// 	},
// 	{
// 		"deceased": "4",
// 		"district": "Nanded",
// 		"confirmed": "57",
// 		"active": "52",
// 		"recovered": "1"
// 	},
// 	{
// 		"deceased": "1",
// 		"district": "Sangli",
// 		"confirmed": "44",
// 		"active": "15",
// 		"recovered": "28"
// 	},
// 	{
// 		"deceased": "10",
// 		"district": "Other State",
// 		"confirmed": "41",
// 		"active": "31",
// 		"recovered": "0"
// 	},
// 	{
// 		"deceased": "1",
// 		"district": "Latur",
// 		"confirmed": "32",
// 		"active": "16",
// 		"recovered": "15"
// 	},
// 	{
// 		"deceased": "1",
// 		"district": "Buldhana",
// 		"confirmed": "26",
// 		"active": "2",
// 		"recovered": "23"
// 	},
// 	{
// 		"deceased": "1",
// 		"district": "Kolhapur",
// 		"confirmed": "25",
// 		"active": "16",
// 		"recovered": "8"
// 	},
// 	{
// 		"deceased": "2",
// 		"district": "Nandurbar",
// 		"confirmed": "22",
// 		"active": "10",
// 		"recovered": "10"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "Jalna",
// 		"confirmed": "21",
// 		"active": "20",
// 		"recovered": "1"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "Sindhudurg",
// 		"confirmed": "7",
// 		"active": "5",
// 		"recovered": "2"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "Osmanabad",
// 		"confirmed": "6",
// 		"active": "3",
// 		"recovered": "3"
// 	},
// 	{
// 		"deceased": "1",
// 		"district": "Parbhani",
// 		"confirmed": "6",
// 		"active": "4",
// 		"recovered": "1"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "Chandrapur",
// 		"confirmed": "5",
// 		"active": "3",
// 		"recovered": "2"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "Washim",
// 		"confirmed": "3",
// 		"active": "2",
// 		"recovered": "1"
// 	},
// 	{
// 		"deceased": "1",
// 		"district": "Wardha",
// 		"confirmed": "2",
// 		"active": "1",
// 		"recovered": "0"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "Beed",
// 		"confirmed": "1",
// 		"active": "0",
// 		"recovered": "1"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "Bhandara",
// 		"confirmed": "1",
// 		"active": "1",
// 		"recovered": "0"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "Gondia",
// 		"confirmed": "1",
// 		"active": "0",
// 		"recovered": "1"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "Gadchiroli",
// 		"confirmed": "0",
// 		"active": "0",
// 		"recovered": "0"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "district Suburban",
// 		"confirmed": "0",
// 		"active": "0",
// 		"recovered": "0"
// 	},
// 	{
// 		"deceased": "0",
// 		"district": "Unknown",
// 		"confirmed": "0",
// 		"active": "505",
// 		"recovered": "505"
// 	}
// 	],
// }
// ]







// // console.log(Maharashtra)
// console.log(state_list[0])
// console.log(state_list[0]['Maharashtra'])
// // console.log()


// for(i=0; i<state_list[0]['Maharashtra'].length; i++){
// 	let obj=state_list[0]['Maharashtra'][1]
// 	let row=`<tr>
// 	<td>${obj.district}</td>
// 	<td>${obj.confirmed}</td>
// 	<td>${obj.active}</td>
// 	<td>${obj.recovered}</td>
// 	<td>${obj.deceased}</td>
// 	</tr>`;

// 	$(".district-table-body").append(row);
// 	console.log(row)

// }
