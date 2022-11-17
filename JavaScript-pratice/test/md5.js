const md5 = require('md5');
const obj ={
	"_id" : "62d0e8d2ad8aae00189faf25",
	"face" : {
		"status" : 0
	},
	"ID" : {
		"IDType" : 1,
		"IDNumber" : "13834160314"
	},
	"deleted" : false,
	"pictureList" : [ ],
	"gender" : 0,
	"roleType" : 1,
	"identities" : [
		{
			"profile" : {
				"status" : 1,
				"accountStatus" : 1,
				"isEmployed" : true,
				"isInner" : true,
				"userName" : "33473@hdy",
				"tel" : "13834160314",
				"employeeNumber" : "33473",
				"name" : "陈司亘",
				"employeeTime" : "2022-11-17T02:28:38.473Z",
				"pinyin" : "chensigen",
				"pysx" : "csg",
				"email" : ""
			},
			"deleted" : false,
			"role" : [
				"6188c4730cbfec617ca81158"
			],
			"_id" : "62d0e8d2ad8aae00189faf26",
			"createTime" : "2022-07-15T12:10:58.536+08:00",
			"updateTime" : "2022-11-17T10:28:38.681+08:00",
			"tenant" : {
				"_id" : "6188918fbb4c290018bc5ba3",
				"name" : "华东院",
				"identity" : "hdy"
			},
			"organization" : {
				"_id" : "119842226506563622",
				"parentObjectId" : "1039329640153093",
				"organizationId" : "6278e2b1b3fb040018167a61",
				"parentOrganizationId" : "1039329640153093",
				"organization" : "设计三部"
			},
			"views" : {
				"entryViews" : {
					"registered" : false,
					"watcherEmployee" : [ ],
					"panelIds" : [ ],
					"subType" : 1,
					"isUpdatedByHeadquarters" : false,
					"isNoticeMaster" : false
				}
			}
		}
	],
	"createTime" : "2022-07-15T12:10:58.535+08:00",
	"updateTime" : "2022-11-17T10:28:38.681+08:00",
	"password" : "1e897e74772d8ffb0b48568909799e6e",
	"hdy" : 1,
	"uid" : "129554225549017341",
	"telStatus" : 1
}
const obj2 ={
	"_id" : "62d0e8d2ad8aae00189faf25",
	"face" : {
		"status" : 0
	},
	"ID" : {
		"IDType" : 1,
		"IDNumber" : "13834160314"
	},
	"deleted" : false,
	"pictureList" : [ ],
	"gender" : 0,
	"roleType" : 1,
	"identities" : [
		{
			"profile" : {
				"status" : 1,
				"accountStatus" : 1,
				"isEmployed" : true,
				"isInner" : true,
				"userName" : "33473@hdy",
				"tel" : "13834160314",
				"employeeNumber" : "33473",
				"name" : "陈司亘",
				"employeeTime" : "2022-11-17T02:28:38.473Z",
				"pinyin" : "chensigen",
				"pysx" : "csg",
				"email" : ""
			},
			"deleted" : false,
			"role" : [
				"6188c4730cbfec617ca81158"
			],
			"_id" : "62d0e8d2ad8aae00189faf26",
			"createTime" : "2022-07-15T12:10:58.536+08:00",
			"updateTime" : "2022-11-17T10:28:38.681+08:00",
			"tenant" : {
				"_id" : "6188918fbb4c290018bc5ba3",
				"name" : "华东院",
				"identity" : "hdy"
			},
			"organization" : {
				"_id" : "119842226506563622",
				"parentObjectId" : "1039329640153093",
				"organizationId" : "6278e2b1b3fb040018167a61",
				"parentOrganizationId" : "1039329640153093",
				"organization" : "设计三部"
			},
			"views" : {
				"entryViews" : {
					"registered" : false,
					"watcherEmployee" : [ ],
					"panelIds" : [ ],
					"subType" : 1,
					"isUpdatedByHeadquarters" : false,
					"isNoticeMaster" : false
				}
			}
		}
	],
	"createTime" : "2022-07-15T12:10:58.535+08:00",
	"updateTime" : "2022-11-17T10:28:38.681+08:00",
	"password" : "1e897e74772d8ffb0b48568909799e6e",
	"hdy" : 1,
	"uid" : "129554225549017341",
	"telStatus" : 1
}
const m1 = md5(obj)
const m2 = md5(obj2)
console.log(m1)
console.log(m2)