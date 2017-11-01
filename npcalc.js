

		var dict = {};
		dict.isDependent;
		dict.financialAid = { 'active':false,  'title':'Financial aid', '0':'Yes', '1': 'No', 'intValue':0, 'textValue': '' };
		dict.age = { 'active': false, 'title': 'Age', 'intValue': 0 };
		dict.livingStatus = { 'active': false, 'title': 'Living arrangement', 'intValue': 0, 'textValue': '' };
		dict.residencyStatus = { 'active': false, 'title': 'Residency', 'intValue': 0, 'textValue': '' };
		dict.maritalStatus = { 'active': false, 'title': 'Marital Status', '0': 'No', '1': 'Yes', 'intValue': '' };
		dict.numberOfChildren = { 'active': false, 'title': 'Children', '0': 'No', '1': 'Yes', 'intValue': '' };
		dict.numberInFamily = { 'active': false, 'title': 'Number in Family', 'intValue': 0, 'textValue': '' };
		dict.numberInCollege = { 'active': false, 'title': 'Number in College', 'intValue': 0, 'textValue': '' };
		dict.householdIncome = { 'active': false, 'title': 'Household Income', 'intValue' : 0,
			'0': 'Less than $30,000',
			'1': 'Between $30,000 - $39,999',
			'2': 'Between $40,000 - $49,999',
			'3': 'Between $50,000 - $59,999',
			'4': 'Between $60,000 - $69,999',
			'5': 'Between $70,000 - $79,999',
			'6': 'Between $80,000 - $89,999',
			'7': 'Between $90,000 - $99,999',
			'8': 'Above $99,999'
		};

		var numberoflivingstatus = 0;
		var npc1_livingstatus = "";
		var npc1_isdefaultlivingstatus = "0";
		var npc1_residencystatus = "";
		var npc1_isdefaultresidencystatus = "0";
		var npc_step = "0";
		var currentstepid = "0";


        

var efcDependent = []; 
efcDependent[0] = {};
efcDependent[0].numberInCollege=1;
efcDependent[0].numberInFamily=2;
efcDependent[0].incomeRanges= []; 
efcDependent[0].incomeRanges[0] = 0;  efcDependent[0].incomeRanges[1] = 1320;  efcDependent[0].incomeRanges[2] = 3154;  efcDependent[0].incomeRanges[3] = 5229;  efcDependent[0].incomeRanges[4] = 7662;  efcDependent[0].incomeRanges[5] = 10812;  efcDependent[0].incomeRanges[6] = 14171;  efcDependent[0].incomeRanges[7] = 17485;  efcDependent[0].incomeRanges[8] = 30825;  
efcDependent[1] = {};
efcDependent[1].numberInCollege=1;
efcDependent[1].numberInFamily=3;
efcDependent[1].incomeRanges= []; 
efcDependent[1].incomeRanges[0] = 0;  efcDependent[1].incomeRanges[1] = 689;  efcDependent[1].incomeRanges[2] = 2616;  efcDependent[1].incomeRanges[3] = 4625;  efcDependent[1].incomeRanges[4] = 6961;  efcDependent[1].incomeRanges[5] = 10003;  efcDependent[1].incomeRanges[6] = 13482;  efcDependent[1].incomeRanges[7] = 17061;  efcDependent[1].incomeRanges[8] = 34809;  
efcDependent[2] = {};
efcDependent[2].numberInCollege=1;
efcDependent[2].numberInFamily=4;
efcDependent[2].incomeRanges= []; 
efcDependent[2].incomeRanges[0] = 0;  efcDependent[2].incomeRanges[1] = 1;  efcDependent[2].incomeRanges[2] = 1655;  efcDependent[2].incomeRanges[3] = 3607;  efcDependent[2].incomeRanges[4] = 5739;  efcDependent[2].incomeRanges[5] = 8285;  efcDependent[2].incomeRanges[6] = 11608;  efcDependent[2].incomeRanges[7] = 15170;  efcDependent[2].incomeRanges[8] = 33976;  
efcDependent[3] = {};
efcDependent[3].numberInCollege=1;
efcDependent[3].numberInFamily=5;
efcDependent[3].incomeRanges= []; 
efcDependent[3].incomeRanges[0] = 0;  efcDependent[3].incomeRanges[1] = 0;  efcDependent[3].incomeRanges[2] = 634;  efcDependent[3].incomeRanges[3] = 2656;  efcDependent[3].incomeRanges[4] = 4605;  efcDependent[3].incomeRanges[5] = 6888;  efcDependent[3].incomeRanges[6] = 9866;  efcDependent[3].incomeRanges[7] = 13387;  efcDependent[3].incomeRanges[8] = 31730;  
efcDependent[4] = {};
efcDependent[4].numberInCollege=1;
efcDependent[4].numberInFamily=6;
efcDependent[4].incomeRanges= []; 
efcDependent[4].incomeRanges[0] = 0;  efcDependent[4].incomeRanges[1] = 0;  efcDependent[4].incomeRanges[2] = 0;  efcDependent[4].incomeRanges[3] = 1072;  efcDependent[4].incomeRanges[4] = 3041;  efcDependent[4].incomeRanges[5] = 5141;  efcDependent[4].incomeRanges[6] = 7572;  efcDependent[4].incomeRanges[7] = 10780;  efcDependent[4].incomeRanges[8] = 27384;  
efcDependent[5] = {};
efcDependent[5].numberInCollege=2;
efcDependent[5].numberInFamily=2;
efcDependent[5].incomeRanges= []; 
efcDependent[5].incomeRanges[0] = 0;  efcDependent[5].incomeRanges[1] = 1255;  efcDependent[5].incomeRanges[2] = 2051.5;  efcDependent[5].incomeRanges[3] = 3373.5;  efcDependent[5].incomeRanges[4] = 4548;  efcDependent[5].incomeRanges[5] = 0;  efcDependent[5].incomeRanges[6] = 7419;  efcDependent[5].incomeRanges[7] = 8582;  efcDependent[5].incomeRanges[8] = 11461;  
efcDependent[6] = {};
efcDependent[6].numberInCollege=2;
efcDependent[6].numberInFamily=3;
efcDependent[6].incomeRanges= []; 
efcDependent[6].incomeRanges[0] = 0;  efcDependent[6].incomeRanges[1] = 630;  efcDependent[6].incomeRanges[2] = 1631;  efcDependent[6].incomeRanges[3] = 2703;  efcDependent[6].incomeRanges[4] = 4078;  efcDependent[6].incomeRanges[5] = 5826;  efcDependent[6].incomeRanges[6] = 7516;  efcDependent[6].incomeRanges[7] = 9092;  efcDependent[6].incomeRanges[8] = 16754.5;  
efcDependent[7] = {};
efcDependent[7].numberInCollege=2;
efcDependent[7].numberInFamily=4;
efcDependent[7].incomeRanges= []; 
efcDependent[7].incomeRanges[0] = 0;  efcDependent[7].incomeRanges[1] = 227.5;  efcDependent[7].incomeRanges[2] = 1284;  efcDependent[7].incomeRanges[3] = 2333;  efcDependent[7].incomeRanges[4] = 3556;  efcDependent[7].incomeRanges[5] = 5198;  efcDependent[7].incomeRanges[6] = 6850;  efcDependent[7].incomeRanges[7] = 8636;  efcDependent[7].incomeRanges[8] = 19523;  
efcDependent[8] = {};
efcDependent[8].numberInCollege=2;
efcDependent[8].numberInFamily=5;
efcDependent[8].incomeRanges= []; 
efcDependent[8].incomeRanges[0] = 0;  efcDependent[8].incomeRanges[1] = 0;  efcDependent[8].incomeRanges[2] = 732;  efcDependent[8].incomeRanges[3] = 1786;  efcDependent[8].incomeRanges[4] = 2870;  efcDependent[8].incomeRanges[5] = 4249;  efcDependent[8].incomeRanges[6] = 5976;  efcDependent[8].incomeRanges[7] = 7692;  efcDependent[8].incomeRanges[8] = 18526;  
efcDependent[9] = {};
efcDependent[9].numberInCollege=2;
efcDependent[9].numberInFamily=6;
efcDependent[9].incomeRanges= []; 
efcDependent[9].incomeRanges[0] = 0;  efcDependent[9].incomeRanges[1] = 0;  efcDependent[9].incomeRanges[2] = 1;  efcDependent[9].incomeRanges[3] = 975;  efcDependent[9].incomeRanges[4] = 2008;  efcDependent[9].incomeRanges[5] = 3154;  efcDependent[9].incomeRanges[6] = 4689;  efcDependent[9].incomeRanges[7] = 6446;  efcDependent[9].incomeRanges[8] = 16140;  
efcDependent[10] = {};
efcDependent[10].numberInCollege=3;
efcDependent[10].numberInFamily=3;
efcDependent[10].incomeRanges= []; 
efcDependent[10].incomeRanges[0] = 2.5;  efcDependent[10].incomeRanges[1] = 703;  efcDependent[10].incomeRanges[2] = 1345;  efcDependent[10].incomeRanges[3] = 2848;  efcDependent[10].incomeRanges[4] = 3206;  efcDependent[10].incomeRanges[5] = 9228;  efcDependent[10].incomeRanges[6] = 5636;  efcDependent[10].incomeRanges[7] = 7010;  efcDependent[10].incomeRanges[8] = 7695;  
efcDependent[11] = {};
efcDependent[11].numberInCollege=3;
efcDependent[11].numberInFamily=4;
efcDependent[11].incomeRanges= []; 
efcDependent[11].incomeRanges[0] = 0;  efcDependent[11].incomeRanges[1] = 241;  efcDependent[11].incomeRanges[2] = 993;  efcDependent[11].incomeRanges[3] = 1731;  efcDependent[11].incomeRanges[4] = 2622;  efcDependent[11].incomeRanges[5] = 3682;  efcDependent[11].incomeRanges[6] = 4966;  efcDependent[11].incomeRanges[7] = 6133;  efcDependent[11].incomeRanges[8] = 11248;  
efcDependent[12] = {};
efcDependent[12].numberInCollege=3;
efcDependent[12].numberInFamily=5;
efcDependent[12].incomeRanges= []; 
efcDependent[12].incomeRanges[0] = 0;  efcDependent[12].incomeRanges[1] = 71;  efcDependent[12].incomeRanges[2] = 751;  efcDependent[12].incomeRanges[3] = 1458;  efcDependent[12].incomeRanges[4] = 2296;  efcDependent[12].incomeRanges[5] = 3311;  efcDependent[12].incomeRanges[6] = 4560;  efcDependent[12].incomeRanges[7] = 5783;  efcDependent[12].incomeRanges[8] = 13577;  
efcDependent[13] = {};
efcDependent[13].numberInCollege=3;
efcDependent[13].numberInFamily=6;
efcDependent[13].incomeRanges= []; 
efcDependent[13].incomeRanges[0] = 0;  efcDependent[13].incomeRanges[1] = 0;  efcDependent[13].incomeRanges[2] = 120;  efcDependent[13].incomeRanges[3] = 855;  efcDependent[13].incomeRanges[4] = 1535.5;  efcDependent[13].incomeRanges[5] = 2352;  efcDependent[13].incomeRanges[6] = 3396;  efcDependent[13].incomeRanges[7] = 4678.5;  efcDependent[13].incomeRanges[8] = 11549;  

var efcIndWithoutDep = []; 
efcIndWithoutDep[0] = {};
efcIndWithoutDep[0].numberInCollege=1;
efcIndWithoutDep[0].numberInFamily=1;
efcIndWithoutDep[0].incomeRanges= []; 
efcIndWithoutDep[0].incomeRanges[0] = 0;  efcIndWithoutDep[0].incomeRanges[1] = 9183;  efcIndWithoutDep[0].incomeRanges[2] = 13066;  efcIndWithoutDep[0].incomeRanges[3] = 16885;  efcIndWithoutDep[0].incomeRanges[4] = 20534.5;  efcIndWithoutDep[0].incomeRanges[5] = 24189;  efcIndWithoutDep[0].incomeRanges[6] = 27843.5;  efcIndWithoutDep[0].incomeRanges[7] = 31784.5;  efcIndWithoutDep[0].incomeRanges[8] = 46450;  
efcIndWithoutDep[1] = {};
efcIndWithoutDep[1].numberInCollege=1;
efcIndWithoutDep[1].numberInFamily=2;
efcIndWithoutDep[1].incomeRanges= []; 
efcIndWithoutDep[1].incomeRanges[0] = 0;  efcIndWithoutDep[1].incomeRanges[1] = 6158.5;  efcIndWithoutDep[1].incomeRanges[2] = 9857;  efcIndWithoutDep[1].incomeRanges[3] = 13706;  efcIndWithoutDep[1].incomeRanges[4] = 17418;  efcIndWithoutDep[1].incomeRanges[5] = 21187;  efcIndWithoutDep[1].incomeRanges[6] = 25037;  efcIndWithoutDep[1].incomeRanges[7] = 28831;  efcIndWithoutDep[1].incomeRanges[8] = 42253;  
efcIndWithoutDep[2] = {};
efcIndWithoutDep[2].numberInCollege=2;
efcIndWithoutDep[2].numberInFamily=2;
efcIndWithoutDep[2].incomeRanges= []; 
efcIndWithoutDep[2].incomeRanges[0] = 618;  efcIndWithoutDep[2].incomeRanges[1] = 4505;  efcIndWithoutDep[2].incomeRanges[2] = 6358;  efcIndWithoutDep[2].incomeRanges[3] = 8292;  efcIndWithoutDep[2].incomeRanges[4] = 10179.5;  efcIndWithoutDep[2].incomeRanges[5] = 12073;  efcIndWithoutDep[2].incomeRanges[6] = 13985;  efcIndWithoutDep[2].incomeRanges[7] = 15865;  efcIndWithoutDep[2].incomeRanges[8] = 21608;  

var efcIndWithDep = []; 
efcIndWithDep[0] = {};
efcIndWithDep[0].numberInCollege=1;
efcIndWithDep[0].numberInFamily=2;
efcIndWithDep[0].incomeRanges= []; 
efcIndWithDep[0].incomeRanges[0] = 0;  efcIndWithDep[0].incomeRanges[1] = 40;  efcIndWithDep[0].incomeRanges[2] = 1747;  efcIndWithDep[0].incomeRanges[3] = 3428;  efcIndWithDep[0].incomeRanges[4] = 5473.5;  efcIndWithDep[0].incomeRanges[5] = 7922;  efcIndWithDep[0].incomeRanges[6] = 11054;  efcIndWithDep[0].incomeRanges[7] = 14294.5;  efcIndWithDep[0].incomeRanges[8] = 24174;  
efcIndWithDep[1] = {};
efcIndWithDep[1].numberInCollege=1;
efcIndWithDep[1].numberInFamily=3;
efcIndWithDep[1].incomeRanges= []; 
efcIndWithDep[1].incomeRanges[0] = 0;  efcIndWithDep[1].incomeRanges[1] = 0;  efcIndWithDep[1].incomeRanges[2] = 908;  efcIndWithDep[1].incomeRanges[3] = 2639;  efcIndWithDep[1].incomeRanges[4] = 4409;  efcIndWithDep[1].incomeRanges[5] = 6708.5;  efcIndWithDep[1].incomeRanges[6] = 9828;  efcIndWithDep[1].incomeRanges[7] = 13366;  efcIndWithDep[1].incomeRanges[8] = 23115;  
efcIndWithDep[2] = {};
efcIndWithDep[2].numberInCollege=1;
efcIndWithDep[2].numberInFamily=4;
efcIndWithDep[2].incomeRanges= []; 
efcIndWithDep[2].incomeRanges[0] = 0;  efcIndWithDep[2].incomeRanges[1] = 0;  efcIndWithDep[2].incomeRanges[2] = 0;  efcIndWithDep[2].incomeRanges[3] = 1451;  efcIndWithDep[2].incomeRanges[4] = 3112;  efcIndWithDep[2].incomeRanges[5] = 5039;  efcIndWithDep[2].incomeRanges[6] = 7496;  efcIndWithDep[2].incomeRanges[7] = 10885;  efcIndWithDep[2].incomeRanges[8] = 20833.5;  
efcIndWithDep[3] = {};
efcIndWithDep[3].numberInCollege=1;
efcIndWithDep[3].numberInFamily=5;
efcIndWithDep[3].incomeRanges= []; 
efcIndWithDep[3].incomeRanges[0] = 0;  efcIndWithDep[3].incomeRanges[1] = 0;  efcIndWithDep[3].incomeRanges[2] = 0;  efcIndWithDep[3].incomeRanges[3] = 119;  efcIndWithDep[3].incomeRanges[4] = 1874;  efcIndWithDep[3].incomeRanges[5] = 3574;  efcIndWithDep[3].incomeRanges[6] = 5658;  efcIndWithDep[3].incomeRanges[7] = 8341;  efcIndWithDep[3].incomeRanges[8] = 18146;  
efcIndWithDep[4] = {};
efcIndWithDep[4].numberInCollege=1;
efcIndWithDep[4].numberInFamily=6;
efcIndWithDep[4].incomeRanges= []; 
efcIndWithDep[4].incomeRanges[0] = 0;  efcIndWithDep[4].incomeRanges[1] = 0;  efcIndWithDep[4].incomeRanges[2] = 0;  efcIndWithDep[4].incomeRanges[3] = 0;  efcIndWithDep[4].incomeRanges[4] = 0;  efcIndWithDep[4].incomeRanges[5] = 1751;  efcIndWithDep[4].incomeRanges[6] = 3481;  efcIndWithDep[4].incomeRanges[7] = 5582;  efcIndWithDep[4].incomeRanges[8] = 14188;  
efcIndWithDep[5] = {};
efcIndWithDep[5].numberInCollege=2;
efcIndWithDep[5].numberInFamily=2;
efcIndWithDep[5].incomeRanges= []; 
efcIndWithDep[5].incomeRanges[0] = 0;  efcIndWithDep[5].incomeRanges[1] = 497;  efcIndWithDep[5].incomeRanges[2] = 1354;  efcIndWithDep[5].incomeRanges[3] = 2255;  efcIndWithDep[5].incomeRanges[4] = 3411.5;  efcIndWithDep[5].incomeRanges[5] = 4969;  efcIndWithDep[5].incomeRanges[6] = 6476.5;  efcIndWithDep[5].incomeRanges[7] = 8139;  efcIndWithDep[5].incomeRanges[8] = 12783;  
efcIndWithDep[6] = {};
efcIndWithDep[6].numberInCollege=2;
efcIndWithDep[6].numberInFamily=3;
efcIndWithDep[6].incomeRanges= []; 
efcIndWithDep[6].incomeRanges[0] = 0;  efcIndWithDep[6].incomeRanges[1] = 97;  efcIndWithDep[6].incomeRanges[2] = 941;  efcIndWithDep[6].incomeRanges[3] = 1778;  efcIndWithDep[6].incomeRanges[4] = 2791;  efcIndWithDep[6].incomeRanges[5] = 4167;  efcIndWithDep[6].incomeRanges[6] = 5912;  efcIndWithDep[6].incomeRanges[7] = 7616;  efcIndWithDep[6].incomeRanges[8] = 12567;  
efcIndWithDep[7] = {};
efcIndWithDep[7].numberInCollege=2;
efcIndWithDep[7].numberInFamily=4;
efcIndWithDep[7].incomeRanges= []; 
efcIndWithDep[7].incomeRanges[0] = 0;  efcIndWithDep[7].incomeRanges[1] = 0;  efcIndWithDep[7].incomeRanges[2] = 329;  efcIndWithDep[7].incomeRanges[3] = 1149;  efcIndWithDep[7].incomeRanges[4] = 1995;  efcIndWithDep[7].incomeRanges[5] = 3055;  efcIndWithDep[7].incomeRanges[6] = 4490;  efcIndWithDep[7].incomeRanges[7] = 6181;  efcIndWithDep[7].incomeRanges[8] = 10767;  
efcIndWithDep[8] = {};
efcIndWithDep[8].numberInCollege=2;
efcIndWithDep[8].numberInFamily=5;
efcIndWithDep[8].incomeRanges= []; 
efcIndWithDep[8].incomeRanges[0] = 0;  efcIndWithDep[8].incomeRanges[1] = 0;  efcIndWithDep[8].incomeRanges[2] = 0;  efcIndWithDep[8].incomeRanges[3] = 545;  efcIndWithDep[8].incomeRanges[4] = 1328;  efcIndWithDep[8].incomeRanges[5] = 2195;  efcIndWithDep[8].incomeRanges[6] = 3308;  efcIndWithDep[8].incomeRanges[7] = 4847;  efcIndWithDep[8].incomeRanges[8] = 9345.5;  
efcIndWithDep[9] = {};
efcIndWithDep[9].numberInCollege=2;
efcIndWithDep[9].numberInFamily=6;
efcIndWithDep[9].incomeRanges= []; 
efcIndWithDep[9].incomeRanges[0] = 0;  efcIndWithDep[9].incomeRanges[1] = 0;  efcIndWithDep[9].incomeRanges[2] = 0;  efcIndWithDep[9].incomeRanges[3] = 0;  efcIndWithDep[9].incomeRanges[4] = 450;  efcIndWithDep[9].incomeRanges[5] = 1189;  efcIndWithDep[9].incomeRanges[6] = 1994;  efcIndWithDep[9].incomeRanges[7] = 3034;  efcIndWithDep[9].incomeRanges[8] = 7224.5;  

		// POA
		var POA_Total = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var POA_TRF = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var POA_BS = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var POA_RB = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var POA_O = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];


		// TGA
		var TGA_0 = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var TGA_1_1000 = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var TGA_1001_2500 = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var TGA_2501_5000 = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var TGA_5001_7500 = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var TGA_7501_10000 = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var TGA_10001_12500 = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var TGA_12501_15000 = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var TGA_15001_20000 = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var TGA_20001_30000 = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var TGA_30001_40000 = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var TGA_40000 = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		var TGA_NFAFSA = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
		POA_Total = ['20372','20510','11856','34422','34560','25906'];
POA_TRF = ['6876','6876','6876','20926','20926','20926'];
POA_BS = ['1200','1200','1200','1200','1200','1200'];
POA_RB = ['7566','7128','0','7566','7128','0'];
POA_O = ['4730','5306','3780','4730','5306','3780'];
TGA_0 = ['5048','2888','5053','5775','3610','0'];
TGA_1_1000 = ['5025','4529','5025','5525','5010','0'];
TGA_1001_2500 = ['3618','3625','3325','3625','2035','0'];
TGA_2501_5000 = ['1749','1625','1685','2325','1525','0'];
TGA_5001_7500 = ['1036','1450','1000','1763','1321','0'];
TGA_7501_10000 = ['1040','1967','1500','1200','1259','0'];
TGA_10001_12500 = ['1500','2484','2500','600','1243','0'];
TGA_12501_15000 = ['3000','3000','1000','720','1239','0'];
TGA_15001_20000 = ['1000','1000','1000','900','1238','0'];
TGA_20001_30000 = ['1000','1000','1000','500','1238','0'];
TGA_30001_40000 = ['3000','1000','1000','1950','1238','0'];
TGA_40000 = ['2390','1000','1500','600','0','0'];
TGA_NFAFSA = ['0','0','0','0','0','0'];





		// Step id Defenition
		// 1 Age, Living Status, Residency Status
		// 2 Marital Status, Number of Children
		// 3 Dependent
		// 4 Independent
		// 5 Summary page
		// 6 OUTPUT PAGE
		function GoNext() {
			var imgJavaScriptNote = document.getElementById('imgJavaScriptNote');
			if(imgJavaScriptNote) {
				imgJavaScriptNote.style.display = 'none';
			}

			// Variable that tells us if we need to dispaly only 2 radio buttons for "Dependent: Number of Family"
			var showOnly2RbForNumberInFamily = false;

			if (currentstepid) {
				if (currentstepid == "0") {
					GoTo("1");
					return;
				} else if (currentstepid == "1") {
					var tmp_financialAid = GetRadioButtonValues("rb_financialaid").value; // Financial Aid
					var tmp_age = GetTextBoxValue("txt_age"); // Age
					// Living Status
					if (npc1_livingstatus != "-1") {
						if (npc1_isdefaultlivingstatus == "0") {
							npc1_livingstatus = GetRadioButtonValues("rb_livingstatus").value;
						}
					}
					// Residency Status
					if (npc1_residencystatus != "-1") {
						if (npc1_isdefaultresidencystatus == "0") {
							npc1_residencystatus = GetRadioButtonValues("rb_residencystatus").value;
						}
					}
					// Validate
					if (tmp_financialAid == "" || tmp_age == "" || npc1_livingstatus == "" || npc1_residencystatus == "") {
						alert("Please answer all questions before proceeding.");
						return;
					}
					if (!IsInteger(tmp_age)) {
						alert("Please enter integers only.");
						return;
					}

					// Save entered values into dictionary
					dict['financialAid'].active = true;
					dict['financialAid'].intValue = tmp_financialAid;
					dict['age'].active = true;
					dict['age'].intValue = tmp_age;
					if (npc1_livingstatus != "-1") {
						if (npc1_isdefaultlivingstatus == "0") {
							dict['livingStatus'].active = true;
							dict['livingStatus']['textValue'] = GetRadioButtonValues("rb_livingstatus").label.getAttribute('title');

						}
					}
					if (npc1_residencystatus != "-1") {
						if (npc1_isdefaultresidencystatus == "0") {
							dict['residencyStatus'].active = true;
							dict['residencyStatus']['textValue'] = GetRadioButtonValues("rb_residencystatus").label.getAttribute('title');
						}
					}

					// Rules
					if (dict['financialAid'].intValue == "1") {
						GenerateSummary();
						GoTo("5");
					}
					else {
						// Hide/show marital status depending on age
						if (dict['age'].intValue*1 > 23) {
							var tbl = document.getElementById('tblMaritalStatusQuestion');
							if (tbl) { tbl.style.display = 'none'; }
						} else {
							var tbl = document.getElementById('tblMaritalStatusQuestion');
							if (tbl) { tbl.style.display = ''; }
						}
						GoTo("2"); // Change: was 4
					}
					return;
				} else if (currentstepid == "2") {
					// Marital Status
					var tmp_maritalStatus;
					if (dict['age'].intValue*1 < 24) {
						tmp_maritalStatus = GetRadioButtonValues("rb_maritalstatus").value;
						dict['maritalStatus'].active = true;
					}
					else { dict['maritalStatus'].active = false; }

					// Number of Children
					var tmp_numberOfChildren = GetRadioButtonValues("rb_numberofchildren").value;

					// Validate
					var showError = false;
					if (dict['age'].intValue * 1 < 24 && tmp_maritalStatus == "") {
						showError = true;
					}
					if (tmp_numberOfChildren == "") {
						showError = true;
					}
					if (showError == true) {
						alert("Please answer all questions before proceeding.");
						return;
					}
					// Save entered values into dictionary
					dict['maritalStatus'].intValue = tmp_maritalStatus;
					dict['numberOfChildren'].active = true;
					dict['numberOfChildren'].intValue = tmp_numberOfChildren;


					// For independent with children, display additional radio buttons with 'Number in Family'
					var divNumInFamilyRadiobuttons = document.getElementById('divNumInFamilyWithChildren');

					// For independent there are 2 different hints: with children and without
					var spanNumInFamilyHint = document.getElementById('spanNumInFamilyHint');
					if (spanNumInFamilyHint)
						spanNumInFamilyHint.style.display = 'none';
					var spanNumInFamilyHintWithChildren = document.getElementById('spanNumInFamilyHintWithChildren');
					if (spanNumInFamilyHintWithChildren)
						spanNumInFamilyHintWithChildren.style.display = 'none';

					// For independent we have 2 different scenarios for number on college: 'Two' and 'Two or more'
					var spanTwo = document.getElementById('spanIndNumInCollegeTwo');
					var spanTwoOrMore = document.getElementById('spanIndNumInCollegeTwoOrMore');
					var divFirstOptionForNumInFamilyWithChildren = document.getElementById('divFirstOptionForNumInFamilyWithChildren');

					spanTwo.style.display = 'none';
					spanTwoOrMore.style.display = 'none';
					divFirstOptionForNumInFamilyWithChildren.style.display = '';



					// Rules
					if (dict['age'].intValue * 1 > 23) {
						var divNumInFWithCh = document.getElementById('divNumInFamilyWithChildren');
						if (dict['maritalStatus'].intValue * 1 > 0) {
							// show options for student with children
							if (divNumInFWithCh) { divNumInFWithCh.style.display = ''; }
						}
						else {
							// hide options for student with children
							if (divNumInFWithCh) { divNumInFWithCh.style.display = 'none'; }
						}
						dict.isDependent = false;
						if (dict['numberOfChildren'].intValue * 1 == 1) {
							if (spanTwo) { spanTwo.style.display = 'none'; }
							if (spanTwoOrMore) { spanTwoOrMore.style.display = ''; }
							if (divNumInFamilyRadiobuttons) { divNumInFamilyRadiobuttons.style.display = ''; }
							if (spanNumInFamilyHintWithChildren) { spanNumInFamilyHintWithChildren.style.display = ''; }
							if (divFirstOptionForNumInFamilyWithChildren) { divFirstOptionForNumInFamilyWithChildren.style.display = 'none'; }
							// This flag tells us that for "Number in Family" we should display more than 2 radio buttons
							showOnly2RbForNumberInFamily = false;

							// If user selected before "Number in College: Two" and now we display "Two or More", we need to reset radio buttons
							var rbTwoOrMore = GetRadioButtonValues("rb_indnumincollege").value.split('|');
							if(rbTwoOrMore && rbTwoOrMore[0] == "Two")
								ResetRadioButton('rb_indnumincollege');

						} else {
							if (spanTwo) { spanTwo.style.display = ''; }
							if (spanTwoOrMore) { spanTwoOrMore.style.display = 'none'; }
							if (divNumInFamilyRadiobuttons) { divNumInFamilyRadiobuttons.style.display = 'none'; }
							if (spanNumInFamilyHint) { spanNumInFamilyHint.style.display = ''; }
							if (divFirstOptionForNumInFamilyWithChildren) { divFirstOptionForNumInFamilyWithChildren.style.display = ''; }
							// This flag tells us that for "Number in Family" we should display only 2 radio buttons
							showOnly2RbForNumberInFamily = true;

							// If user selected before "Number in College: Two or More" and now we display "Two", we need to reset radio buttons
							var rbTwoOrMore = GetRadioButtonValues("rb_indnumincollege").value.split('|');
							if(rbTwoOrMore && rbTwoOrMore[0] == "Two or more")
								ResetRadioButton('rb_indnumincollege');
						}
						if (showOnly2RbForNumberInFamily == true) {
							var prevSelectedNumOfFamily = GetRadioButtonValues("rb_indnuminfamily").value.split('|');
							if (prevSelectedNumOfFamily) {
								if (prevSelectedNumOfFamily[1] > 2)
									ResetRadioButton('rb_indnuminfamily');
							}
						}
						GoTo('4');

					} else {
						if (dict['numberOfChildren'].intValue * 1 > 0 || dict['maritalStatus'].intValue * 1 > 0) {
							dict.isDependent = false;
							if (dict['numberOfChildren'].intValue * 1 > 0)
								showOnly2RbForNumberInFamily = false;
							else
								showOnly2RbForNumberInFamily = true;

							if(showOnly2RbForNumberInFamily == true)
							{
								var prevSelectedNumOfFamily = GetRadioButtonValues("rb_indnuminfamily").value.split('|');
								if (prevSelectedNumOfFamily) {
									if (prevSelectedNumOfFamily[1] > 2)
										ResetRadioButton('rb_indnuminfamily');
								}
							}

							if (dict['numberOfChildren'].intValue * 1 == 1) {
								if (spanTwo) { spanTwo.style.display = 'none'; }
								if (spanTwoOrMore) { spanTwoOrMore.style.display = ''; }
								if (divNumInFamilyRadiobuttons) { divNumInFamilyRadiobuttons.style.display = ''; }
								if (spanNumInFamilyHintWithChildren) { spanNumInFamilyHintWithChildren.style.display = ''; }
								if (divFirstOptionForNumInFamilyWithChildren) { divFirstOptionForNumInFamilyWithChildren.style.display = 'none'; }
								// If user selected before "Number in College: Two" and now we display "Two or More", we need to reset radio buttons
								var rbTwoOrMore = GetRadioButtonValues("rb_indnumincollege").value.split('|');
								if(rbTwoOrMore && rbTwoOrMore[0] == "Two")
									ResetRadioButton('rb_indnumincollege');
							} else {
								if (spanTwo) { spanTwo.style.display = ''; }
								if (spanTwoOrMore) { spanTwoOrMore.style.display = 'none'; }
								if (divNumInFamilyRadiobuttons) { divNumInFamilyRadiobuttons.style.display = 'none'; }
								if (spanNumInFamilyHint) { spanNumInFamilyHint.style.display = ''; }
								if (divFirstOptionForNumInFamilyWithChildren) { divFirstOptionForNumInFamilyWithChildren.style.display = ''; }
								// If user selected before "Number in College: Two or More" and now we display "Two", we need to reset radio buttons
								var rbTwoOrMore = GetRadioButtonValues("rb_indnumincollege").value.split('|');
								if(rbTwoOrMore && rbTwoOrMore[0] == "Two or more")
									ResetRadioButton('rb_indnumincollege');
							}

							GoTo("4");
						} else {
							dict.isDependent = true;
							GoTo("3");
						}
					}
					return;
				} else if (currentstepid == "3") {
					var arrNumInFamily = GetRadioButtonValues("rb_numinfamily_dep").value.split('|');
					var arrNumInCollege = GetRadioButtonValues("rb_numincollege_dep").value.split('|');
					var tmp_numberinfamily = arrNumInFamily[0];
					var tmp_numberincollege = arrNumInCollege[0];
					var tmp_householdincome = GetRadioButtonValues("rb_householdincome_dep").value;

					// Validate
					if (tmp_numberinfamily == "" || tmp_numberincollege == "" || tmp_householdincome == "") {
						alert("Please answer all questions before proceeding.");
						return;
					}
					if (arrNumInCollege[1] * 1 >= arrNumInFamily[1] * 1) {
						alert('The Number in College must be less than the specified Number in Family.');
						return;
					}

					// Save entered values into dictionary
					dict['numberInFamily'].active = true;
					dict['numberInFamily'].textValue = tmp_numberinfamily;
					dict['numberInFamily'].intValue = arrNumInFamily[1]*1;
					dict['numberInCollege'].active = true;
					dict['numberInCollege'].textValue = tmp_numberincollege;
					dict['numberInCollege'].intValue = arrNumInCollege[1]*1;
					dict['householdIncome'].active = true;
					dict['householdIncome'].intValue = tmp_householdincome * 1;
					GenerateSummary();
					GoTo("5");
					return;
				} else if (currentstepid == "4") {
					var arrNumInFamily = GetRadioButtonValues("rb_indnuminfamily").value.split('|');
					var arrNumInCollege = GetRadioButtonValues("rb_indnumincollege").value.split('|');
					var tmp_numberinfamily = arrNumInFamily[0];
					var tmp_numberincollege = arrNumInCollege[0];
					var tmp_householdincome = GetRadioButtonValues("rb_householdincome_ind").value;

					// Validate
					if (tmp_numberinfamily == "" || tmp_numberincollege == "" || tmp_householdincome == "") {
						alert("Please answer all questions before proceeding.");
						return;
					}
					if (arrNumInCollege[1] * 1 > arrNumInFamily[1] * 1) {
						alert('The Number in College must be less than or equal to the specified Number in Family.');
						return;
					}

					// Save entered values into dictionary
					dict['numberInFamily'].active = true;
					dict['numberInFamily'].textValue = tmp_numberinfamily;
					dict['numberInFamily'].intValue = arrNumInFamily[1]*1;
					dict['numberInCollege'].active = true;
					dict['numberInCollege'].textValue = tmp_numberincollege;
					dict['numberInCollege'].intValue = arrNumInCollege[1]*1;
					dict['householdIncome'].active = true;
					dict['householdIncome'].intValue = tmp_householdincome * 1;

					GenerateSummary();
					GoTo("5");
					return;
				}
				else if(currentstepid == "5")
				{
					GenerateReport();
					GoTo("6");
				}
			}
		}

		function GoTo(stepid) {
			if (typeof stepid != 'undefined') {
				var divWithContent = document.getElementById('dv_npc_s' + stepid);
				var stepTitle = document.getElementById('dv_npc_s' + stepid + '_t');
				var stepnumber = document.getElementById("s_step" + stepid);
				var dv_npc_s6_r = document.getElementById("dv_npc_s"+stepid+"_r");

				if ((divWithContent && stepTitle && stepnumber) || (divWithContent && stepid=="0")) {
					// Handle Step Number
					if (stepid == "0") {                      // Going Back to Step #0
						// openInstitutionNameWindow();
						npc_step = "0";
					}
					else if (stepid * 1 > currentstepid) {    // next
						npc_step = npc_step * 1 + 1;
					} else {                                  // previous
						npc_step = npc_step * 1 - 1;
					}

					// Write step number to span element
					if (stepid != "0") {
						stepnumber.innerHTML = npc_step;
					}

					// Show/Hide Step - Change Step
					HideAllSteps();
					divWithContent.style.display = "block";
					if (stepid != "0") {
						stepTitle.style.display = "block";
					}
					if (stepid == "6") {
						dv_npc_s6_r.style.display = "block";
						var s_step6_h1 = document.getElementById("s_step6_h1");
						var s_step6_h2 = document.getElementById("s_step6_h2");
						if (s_step6_h1 && s_step6_h2) {
							if (npc1_financialaid * 1 == 0) {
								s_step6_h1.style.display = "block";
								s_step6_h2.style.display = "none";
							} else {
								s_step6_h1.style.display = "none";
								s_step6_h2.style.display = "block";
							}
						}
					}
					currentstepid = stepid;
				}
			}
		}



		function GoPrevious() {
			var imgJavaScriptNote = document.getElementById('imgJavaScriptNote');
			if(imgJavaScriptNote) {
				imgJavaScriptNote.style.display = 'none';
			}

			if(currentstepid == '1') {
				if(imgJavaScriptNote) {
					imgJavaScriptNote.style.display = '';
				}
			}

			if (currentstepid != '5' && currentstepid != '4') {
				GoTo('' + (currentstepid * 1 - 1));
			}
			else if (currentstepid == '4') {
				GoTo('2');
			}
			else {
				if (dict.isDependent == true)
					GoTo('3');
				else
					GoTo('4');
			}
		}


		function GenerateReport() {
			var efc = 0;
			if (dict['financialAid'].intValue * 1 == 0) {
				efc = GetEFC();
			}
			var lookup_column = "-1";
			if (npc1_livingstatus == "-1") {
				lookup_column = npc1_livingstatus;
			} else {
				var res_status = 0;
				if (npc1_residencystatus != "-1") {
					res_status = npc1_residencystatus;
				}
				lookup_column = numberoflivingstatus * 1 * res_status * 1 + npc1_livingstatus * 1;
			}

			if (lookup_column == "-1") {
				return;
			}

			var s_etpoa = document.getElementById("s_etpoa");
			var s_etf = document.getElementById("s_etf");
			var s_erb = document.getElementById("s_erb");
			var s_ebs = document.getElementById("s_ebs");
			var s_eo = document.getElementById("s_eo");
			var s_etga = document.getElementById("s_etga");
			var s_enp = document.getElementById("s_enp");
			var x = 0;
			var y = 0;

			if (s_etpoa) {
				x = POA_Total[lookup_column];
				s_etpoa.innerHTML = formatCurrency(x);
			}
			if (s_etf) {
				s_etf.innerHTML = formatCurrency(POA_TRF[lookup_column]);
			}
			if (s_erb) {
				s_erb.innerHTML = formatCurrency(POA_RB[lookup_column]);
			}
			if (s_ebs) {
				s_ebs.innerHTML = formatCurrency(POA_BS[lookup_column]);
			}
			if (s_eo) {
				s_eo.innerHTML = formatCurrency(POA_O[lookup_column]);
			}
			if (s_etga) {
				if (dict['financialAid'].intValue * 1 == 1) {
					// NON-FAFSA
					y = TGA_NFAFSA[lookup_column];
				}  else if (efc * 1 == 0) {
					y = TGA_0[lookup_column];
				} else if (efc * 1 >= 1 && efc * 1 <= 1000) {
					y = TGA_1_1000[lookup_column];
				} else if (efc * 1001 >= 1 && efc * 1 <= 2500) {
					y = TGA_1001_2500[lookup_column];
				} else if (efc * 2501 >= 1 && efc * 1 <= 5000) {
					y = TGA_2501_5000[lookup_column];
				} else if (efc * 1 >= 5001 && efc * 1 <= 7500) {
					y = TGA_5001_7500[lookup_column];
				} else if (efc * 1 >= 7501 && efc * 1 <= 10000) {
					y = TGA_7501_10000[lookup_column];
				} else if (efc * 1 >= 10001 && efc * 1 <= 12500) {
					y = TGA_10001_12500[lookup_column];
				} else if (efc * 1 >= 12501 && efc * 1 <= 15000) {
					y = TGA_12501_15000[lookup_column];
				} else if (efc * 1 >= 15001 && efc * 1 <= 20000) {
					y = TGA_15001_20000[lookup_column];
				} else if (efc * 1 >= 20001 && efc * 1 <= 30000) {
					y = TGA_20001_30000[lookup_column];
				} else if (efc * 1 >= 30001 && efc * 1 <= 40000) {
					y = TGA_30001_40000[lookup_column];
				} else if (efc * 1 >= 40001) {
					y = TGA_40000[lookup_column];
				}
				s_etga.innerHTML = formatCurrency(y);
			}
			if (s_enp) {
				var z = x * 1 - y * 1;
				s_enp.innerHTML = formatCurrency(z);
			}

		}


		function GetEFC() {
			var efc = 0;
			if(dict.isDependent == true) {
				var arrayLength = efcDependent.length;
				for(var i=0; i<arrayLength; i++) {
					if(efcDependent[i].numberInCollege == dict['numberInCollege'].intValue && efcDependent[i].numberInFamily == dict['numberInFamily'].intValue) {
						efc = efcDependent[i].incomeRanges[dict['householdIncome'].intValue];
						break;
					}
				}

			} else {
				if(dict['numberOfChildren'].intValue == 0) {
					// without children
					var arrayLength = efcIndWithoutDep.length;
					for(var i=0; i<arrayLength; i++) {
						if(efcIndWithoutDep[i].numberInCollege == dict['numberInCollege'].intValue && efcIndWithoutDep[i].numberInFamily == dict['numberInFamily'].intValue) {
							efc = efcIndWithoutDep[i].incomeRanges[dict['householdIncome'].intValue];
							break;
						}
					}
				} else {
					// with children
					var arrayLength = efcIndWithDep.length;
					for(var i=0; i<arrayLength; i++) {
						if(efcIndWithDep[i].numberInCollege == dict['numberInCollege'].intValue && efcIndWithDep[i].numberInFamily == dict['numberInFamily'].intValue) {
							efc = efcIndWithDep[i].incomeRanges[dict['householdIncome'].intValue];
							break;
						}
					}
				}
			}
			return efc;
		}

		// Generate summary table with user's input
		function GenerateSummary() {
			var html = '<table>';
			// Step 1
			if (dict['financialAid'].active == true) {
				html = html + '<tr><td class=\'boldtd\'>' + dict['financialAid'].title + '</td><td>' + dict['financialAid'][dict['financialAid'].intValue] + '</td></tr>';
			}
			if(dict['age'].active == true) {
				html = html +'<tr><td class=\'boldtd\'>'+dict['age'].title+'</td><td>'+dict['age'].intValue+'</td></tr>';
			}
			if (dict['livingStatus'].active == true) {
				html = html + '<tr><td class=\'boldtd\'>' + dict['livingStatus'].title + '</td><td>' + dict['livingStatus'].textValue + '</td></tr>';
			}
			if (dict['residencyStatus'].active == true) {
				html = html + '<tr><td class=\'boldtd\'>' + dict['residencyStatus'].title + '</td><td>' + dict['residencyStatus'].textValue + '</td></tr>';
			}

			// Step 2
			if (dict['maritalStatus'].active == true) {
				html = html + '<tr><td class=\'boldtd\'>' + dict['maritalStatus'].title + '</td><td>' + dict['maritalStatus'][dict['maritalStatus'].intValue] + '</td></tr>';
			}
			if (dict['numberOfChildren'].active == true) {
				html = html + '<tr><td class=\'boldtd\'>' + dict['numberOfChildren'].title + '</td><td>' + dict['numberOfChildren'][dict['numberOfChildren'].intValue] + '</td></tr>';
			}

			// Step 3 & 4
			if (dict['numberInFamily'].active == true) {
				html = html + '<tr><td class=\'boldtd\'>' + dict['numberInFamily'].title + '</td><td>' + dict['numberInFamily'].textValue + '</td></tr>';
			}
			if (dict['numberInCollege'].active == true) {
				html = html + '<tr><td class=\'boldtd\'>' + dict['numberInCollege'].title + '</td><td>' + dict['numberInCollege'].textValue + '</td></tr>';
			}
			if (dict['householdIncome'].active == true) {
				html = html + '<tr><td class=\'boldtd\'>' + dict['householdIncome'].title + '</td><td>' + dict['householdIncome'][dict['householdIncome'].intValue] + '</td></tr>';
			}
			var dv_summary = document.getElementById('dv_summary');
			dv_summary.innerHTML = html +  '</table>';
		}

		// Function displays bunner of institution
		function setupBanner() {
			var imgInstitutionBanner = document.getElementById('imgInstitutionBanner');
			var divInstitutionBanner = document.getElementById('divInstitutionBanner');

			if(imgInstitutionBanner)
			{
				imgInstitutionBanner.src = 'images/' + bannerFileName;
				if(divInstitutionBanner)
					divInstitutionBanner.style.display = '';
			}
		}



		function HideAllSteps() {
			var dv_npc_s1_t = document.getElementById("dv_npc_s1_t");
			if(dv_npc_s1_t)
				dv_npc_s1_t.style.display = 'none';

			var dv_npc_s2_t = document.getElementById("dv_npc_s2_t");
			if(dv_npc_s2_t)
				dv_npc_s2_t.style.display = 'none';

			var dv_npc_s3_t = document.getElementById("dv_npc_s3_t");
			if(dv_npc_s3_t)
				dv_npc_s3_t.style.display = 'none';

			var dv_npc_s4_t = document.getElementById("dv_npc_s4_t");
			if(dv_npc_s4_t)
				dv_npc_s4_t.style.display = 'none';

			var dv_npc_s5_t = document.getElementById("dv_npc_s5_t");
			if(dv_npc_s5_t)
				dv_npc_s5_t.style.display = 'none';

			var dv_npc_s6_t = document.getElementById("dv_npc_s6_t");
			if(dv_npc_s6_t)
				dv_npc_s6_t.style.display = 'none';

			var dv_npc_s6_r = document.getElementById("dv_npc_s6_r");
			if(dv_npc_s6_r)
				dv_npc_s6_r.style.display = 'none';

			var dv_npc_s0 = document.getElementById("dv_npc_s0");
			if(dv_npc_s0)
				dv_npc_s0.style.display = 'none';

			var dv_npc_s1 = document.getElementById("dv_npc_s1");
			if(dv_npc_s1)
				dv_npc_s1.style.display = 'none';

			var dv_npc_s2 = document.getElementById("dv_npc_s2");
			if(dv_npc_s2)
				dv_npc_s2.style.display = 'none';

			var dv_npc_s3 = document.getElementById("dv_npc_s3");
			if(dv_npc_s3)
				dv_npc_s3.style.display = 'none';

			var dv_npc_s4 = document.getElementById("dv_npc_s4");
			if(dv_npc_s4)
				dv_npc_s4.style.display = 'none';

			var dv_npc_s5 = document.getElementById("dv_npc_s5");
			if(dv_npc_s5)
				dv_npc_s5.style.display = 'none';

			var dv_npc_s6 = document.getElementById("dv_npc_s6");
			if(dv_npc_s6)
				dv_npc_s6.style.display = 'none';
		}



		function ResetForm() {
			var imgJavaScriptNote = document.getElementById('imgJavaScriptNote');
			if(imgJavaScriptNote) {
				imgJavaScriptNote.style.display = '';
			}
			// 1
			ResetRadioButton("rb_financialaid");
			ResetTextBox("txt_age");
			ResetRadioButton("rb_livingstatus");
			ResetRadioButton("rb_residencystatus");
			// 2
			ResetRadioButton("rb_maritalstatus");
			ResetRadioButton("rb_numberofchildren");
			// 3
			ResetRadioButton("rb_numinfamily_dep");
			ResetRadioButton("rb_numincollege_dep");
			ResetRadioButton("rb_householdincome_dep");
			// 4
			ResetRadioButton("rb_indnuminfamily");
			ResetRadioButton("rb_indnumincollege");
			ResetRadioButton("rb_householdincome_ind");

			// 6
			ResetSpan("s_step6_body");
		}


		function StartOver() {
			ResetForm();
			ClearVars();
			GoTo("0");
		}

		// function executes when user clicks 'Modify' button
		function ClearVars() {
			npc_step = "0";
			currentstepid = "0";

			// set active=false to 'dict' variable
			for(propertyName in dict) {
				if(typeof(dict[propertyName]) !== 'function') {
					dict[propertyName].active = false;
					if (dict[propertyName].intValue)
						dict[propertyName].intValue = 0;
					if (dict[propertyName].textValue)
						dict[propertyName].textValue = '';
				}
			}
			// setup initial constants
			SetupConstants();
		}

		function ResetSpan(s) {
			if (s) {
				var sid = document.getElementById(s);
				if (sid) {
					sid.innerHTML = "";
				}
			}
		}

		function ResetRadioButton(rb) {
			if (rb) {
				var n = document.getElementsByName(rb);
				if (n) {
					for (var i = 0; i < n.length; i++) {
						n[i].checked = false;
					}
				}
			}
		}

		function ResetTextBox(t) {
			if (t) {
				var txt = document.getElementById(t);
				if (txt) {
					txt.value = "";
				}
			}
		}

		function GetRadioButtonValues(rb) {
			if (rb) {
				var n = document.getElementsByName(rb);
				if (n) {
					for (var i = 0; i < n.length; i++) {
						if (n[i].checked) {
							return {label:n[i],value:n[i].value};
						}
					}
				}
			}
			return {value:"",label:""};
		}

		function GetTextBoxValue(t) {
			if (t) {
				var txt = document.getElementById(t);
				if (txt) {
					return txt.value;
				}
			}
		}

		function IsInteger(sText)
		{
			var ValidChars = "0123456789";
			var IsNumber = true;
			var Char;

			for (i = 0; i < sText.length && IsNumber == true; i++) {
				Char = sText.charAt(i);
				if (ValidChars.indexOf(Char) == -1) {
					IsNumber = false;
				}
			}
			return IsNumber;
		}

		function IsNumeric(sText) {
			var ValidChars = "0123456789.";
			var IsNumber = true;
			var Char;

			for (i = 0; i < sText.length && IsNumber == true; i++) {
				Char = sText.charAt(i);
				if (ValidChars.indexOf(Char) == -1) {
					IsNumber = false;
				}
			}
			return IsNumber;
		}

		function formatCurrency(num) {
			num = num.toString().replace(/\$|\,/g, '');
			if (isNaN(num))
				num = "0";
			sign = (num == (num = Math.abs(num)));
			num = Math.floor(num * 100 + 0.50000000001);
			cents = num % 100;
			num = Math.floor(num / 100).toString();
			if (cents < 10)
				cents = "0" + cents;
			for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
				num = num.substring(0, num.length - (4 * i + 3)) + ',' +
            num.substring(num.length - (4 * i + 3));
			return (((sign) ? '' : '-') + '$' + num ); //+ '.' + cents
		}

		function HideTag(ptr) {
			if (ptr) {
				var ptrHandle = document.getElementById(ptr);
				if (ptrHandle) {
					ptrHandle.style.display = "none";
				}
			}
		}

		function ShowTag(ptr) {
			if (ptr) {
				var ptrHandle = document.getElementById(ptr);
				if (ptrHandle) {
					ptrHandle.style.display = "block";
				}
			}
		}
