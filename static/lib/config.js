//此文件已废弃
//此文件已废弃
//此文件已废弃

var env = "L";
var commonPagePath = {
	"T": [
		"http://mmclick.hk1049.yunvhs.com/newyear2017/main_1/index.html",
		//"http://112.124.40.205:4792/main_1/index.html",
		"http://mmclick.hk1049.yunvhs.com/newyear2017/main_2/index.html",
		"http://mmclick.hk1049.yunvhs.com/newyear2017/main_3/index.html"
	],
	"L": [
		"http://ny2017.linghit.com/main_1/index.html",
		"http://ny2017.linghit.com/main_2/index.html",
		"http://ny2017.linghit.com/main_3/index.html"
	],
	"P": [
		"https://pushshop.linghit.com/newyear2017/main_1/index.html",
		"https://pushshop.linghit.com/newyear2017/main_2/index.html",
		"https://pushshop.linghit.com/newyear2017/main_3/index.html"
	]
};
var commonAPIPath = {
	"T": [
		"http://mmclick.hk1049.yunvhs.com/newyear2017/main_1/BackendSource/",
		//"http://112.124.40.205:4792/main_1/BackendSource/",
		"http://mmclick.hk1049.yunvhs.com/newyear2017/main_2/BackendSource/",
		"http://mmclick.hk1049.yunvhs.com/newyear2017/main_3/BackendSource/"
	],
	"L": [
		"http://ny2017.linghit.com/main_1/BackendSource/",
		"http://ny2017.linghit.com/main_2/BackendSource/",
		"http://ny2017.linghit.com/main_3/BackendSource/"
	],
	"P": [
		"https://pushshop.linghit.com/newyear2017/main_1/BackendSource/",
		"https://pushshop.linghit.com/newyear2017/main_2/BackendSource/",
		"https://pushshop.linghit.com/newyear2017/main_3/BackendSource/"
	]
};

var PAGE_URL = {
	MAIN_PATH: [
		(commonPagePath[env])[0] + "#main",
		(commonPagePath[env])[1] + "#main",
		(commonPagePath[env])[2] + "#main"
	]
	//SUBMAIN_PATH: commonPagePath[env] + "#subMain"
};

var API_PATH = {
	QS_FORM_PATH: [
		(commonAPIPath[env])[0] + "ajax.php",
		(commonAPIPath[env])[1] + "ajax.php",
		(commonAPIPath[env])[2] + "ajax.php"
	]
};

module.exports = {
	PAGE_URL: PAGE_URL,
	API_PATH: API_PATH
};