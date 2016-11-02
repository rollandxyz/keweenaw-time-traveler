
var defaultTown = 'Laurium';  
var defaultYear = 1949;

var khtColors = {
	Grey:  {name:"Grey",   hex:"#C9CCD1", value:"Metal"},
	Yellow:{name:"Yellow", hex:"#FAE58C", value:"Wood"},
	Pink:  {name:"Pink",   hex:"#E788A6", value:"Brick"},
	Blue:  {name:"Blue",   hex:"#5FAED6", value:"Blue"},
	Green: {name:"Green",  hex:"#76AE89", value:"Green"} 
}; 

var khtUseType = {
	Residence:    {name:"Residence",     display:"House/Residence",  value:"Residence"},
	Commercial:   {name:"Commercial",    display:"Store/Commercial", value:"Commercial"},
	Industrial:   {name:"Industrial",    display:"Industrial",       value:"Industrial"},
	Church_School:{name:"Church_School", display:"Church or School", value:"Church_School"},
	Other:        {name:"Other",         display:"Other",            value:"Other"} ,
	Unknown:      {name:"Unknown",       display:"Unknown",          value:""}
}; 

//bldgColorP,bldgColorS
var kht = {Sevices:[
	{	id: "Calumet_1949", 
		name:"Calumet",  year:"1949", value:"Calumet",
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Cal49FIPS_core/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1949_CC/FeatureServer/0",
		geocoder:    "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/Rolland/Geocoder_1949_CC/GeocodeServer"
	},{
		id: "Hancock_1949",
		name:"Hancock",   year:"1949", value:"Hancock",
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Hancock_1949/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1949_CC/FeatureServer/0",
		geocoder:    "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/Rolland/Geocoder_1949_CC/GeocodeServer"
	},{		
		id: "Houghton_1949",
		name:"Houghton",  year:"1949",  value:"Houghton",		 
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Htn49_FIPS/MapServer",
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1949_CC/FeatureServer/0",
		geocoder:    "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/Rolland/Geocoder_1949_CC/GeocodeServer"
	},{
		id: "Laurium_1949",
		name:"Laurium",  year:"1949", value:"Laurium",
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Laurium49FIPS/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1949_CC/FeatureServer/0",
		geocoder:    "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/Rolland/Geocoder_1949_CC/GeocodeServer"
	}, {
		id: "LakeLinden_1935",
		name:"LakeLinden",  year:"1935", value:"Lake Linden", 
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/LL35FIPS/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1935_LL/FeatureServer/0",
		geocoder:    "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/Rolland/Geocoder_1935_LL/GeocodeServer"
	}
	]}; 

// bldgText, bldgUse
var khtTextUse  = {Sevices:[
	{	id: "Calumet_1949", 
		name:"Calumet",  year:"1949", value:"Calumet",
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Cal49FIPS_core/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1949_CC/FeatureServer/0",
		geocoder:    "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/Rolland/Geocoder_1949_CC/GeocodeServer"
	},{
		id: "Hancock_1949",
		name:"Hancock",   year:"1949", value:"Hancock",
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Hancock_1949/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1949_CC/FeatureServer/0",
		geocoder:    "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/Rolland/Geocoder_1949_CC/GeocodeServer"
	},{
		id: "Laurium_1949",
		name:"Laurium",  year:"1949", value:"Laurium",
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Laurium49FIPS/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1949_CC/FeatureServer/0",
		geocoder:    "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/Rolland/Geocoder_1949_CC/GeocodeServer"
	},
	{
		id: "LakeLinden_1935",
		name:"LakeLinden",  year:"1935", value:"Lake Linden", 
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/LL35FIPS/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1935_LL/FeatureServer/0",
		geocoder:    "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/Rolland/Geocoder_1935_LL/GeocodeServer"
	}
	,{
		id: "Houghton_1888",
		name:"Houghton",  year:"1888",  value:"Houghton",
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Htn88_FIPS/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1888_Hou/FeatureServer/0",
		geocoder:    ""
	},{
		id: "Houghton_1900",
		name:"Houghton", year:"1900",  value:"Houghton",
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Htn00_FIPS/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1900_Hou/FeatureServer/0",
		geocoder:    "" 	

	},{
		id: "Houghton_1908",
		name:"Houghton", year:"1908",  value:"Houghton",
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Htn08_FIPS/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1908_Hou/FeatureServer/0",
		geocoder:    ""
	},{
		id: "Houghton_1917",
		name:"Houghton", year:"1917",   value:"Houghton",
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Htn17_FIPS/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1917_Hou/FeatureServer/0",
		geocoder:    ""
	},{
		id: "Houghton_1928",
		name:"Houghton", year:"1928",   value:"Houghton",
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Htn28_FIPS/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1928_Hou/FeatureServer/0",
		geocoder:    ""
	},{
		id: "Houghton_1949",
		name:"Houghton", year:"1949",    value:"Houghton",
		mapservice:  "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/KeweenawHSDI/Htn49_FIPS/MapServer", 
		featservice: "http://services2.arcgis.com/RPhrOu9XQzI31xTa/arcgis/rest/services/Polys_1949_CC/FeatureServer/0",
		geocoder:    "http://gis-core.sabu.mtu.edu:6080/arcgis/rest/services/Rolland/Geocoder_1949_CC/GeocodeServer"
	}
	]};  