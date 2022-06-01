let stats = {};
stats['KMs/unit'] = 6.0;
stats['Total KM'] = 250.0;
stats['Average Speed'] = 45.0;
stats['Harsh Acceleration'] = 3.0;
stats['Harsh Breaking Event'] = 4.0;
stats['Driving Score'] = 7.5;

let home = {
	battery: 93,
	range: 80
};

let location = {
	latlng: [ 17.12, 81.29 ],
	service_centres: 15,
	charging_stations: 6
};

module.exports = {
	home,
	stats,
	location
};
