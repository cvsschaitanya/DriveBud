let stats = [
	{
		statName: 'KMs/unit',
		statValue: 6.0
	},
	{
		statName: 'Total KM',
		statValue: 250.0
	},
	{
		statName: 'Average Speed',
		statValue: 45.0
	},
	{
		statName: 'Harsh Acceleration',
		statValue: 3.0
	},
	{
		statName: 'Harsh Breaking Event',
		statValue: 4.0
	},
	{
		statName: 'Driving Score',
		statValue: 7.5
	}
];

let home = {
	battery: 93,
	range: 80
};

let location = {
	latlng: [ 17.12, 81.29 ],
	service_centres: 15,
	charging_stations: 6
};

setInterval(() => {
	home.range = (home.range + 7) % 100;
	
    location.latlng[1] += 0.001;
    
    let centres = location.service_centres + Math.pow(-1, Math.floor(Math.random() * 2));
	if (centres > 30) centres = 29;
	else if (centres < 2) centres = 3;
	location.service_centres = centres;
	
    let stations = location.charging_stations + Math.pow(-1, Math.floor(Math.random() * 2));
	if (stations > 30) stations = 29;
	else if (stations < 2) stations = 3;
	location.charging_stations = stations;

	console.log(location);
}, 1000);

module.exports = {
	home,
	stats,
	location
};
