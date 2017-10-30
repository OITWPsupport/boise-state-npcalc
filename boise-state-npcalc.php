<?php
/*
Plugin Name: Boise State Net Price Calculator
Plugin URI: https://github.com/OITWPsupport
Description: Net Price Calculator code, based on https://nces.ed.gov/ipeds/netpricecalculator/ and customized for Boise State University and to correct a11y errors.
Version: 0.0.1
Author URI: https://webguide.boisestate.edu/
*/

defined( 'ABSPATH' ) or die( 'No hackers' );
define( 'NPCALC_PATH', plugin_dir_url(__FILE__) );

function bsu_npcalc_shortcode() {

	wp_register_script( 'params', NPCALC_PATH . '/npcalc.js' ) );
	wp_enqueue_script('params');

	wp_register_style( 'npcalc-css', NPCALC_PATH . 'npcalc.css' );
	wp_enqueue_style ( 'npcalc-css' );

	wp_register_style( 'googlefonts-css', 'https://fonts.googleapis.com/css?family=Oswald%3A400%2C700%2C300%7CLato%3A700%2C400%2C300%2C100%2Citalic%2C700italic%2C400&#038;ver=2.8.15' );
	wp_enqueue_style ( 'googlefonts-css' );

$str = <<<EOT
<!-- dv_npc_s1_t -->
		<div id="dv_npc_s1_t">
				<strong>Step <span id="s_step1">1</span>:</strong> Please provide the requested information. Your responses will be used to
				calculate an estimated amount that students like you paid - after grant aid and scholarships but before
				student loans - to attend this institution in a given year.
		</div>

		<!-- dv_npc_s2_t -->
		<div id="dv_npc_s2_t">
			<strong>Step <span id="s_step2"></span>:</strong> Please provide the following information and then click Continue.
		</div>

		<!-- dv_npc_s3_t -->
		<div id="dv_npc_s3_t">
			<strong>Step <span id="s_step3"></span>:</strong> For the purposes of this calculator, an independent student is
			one who is at least 24 years old, married, and/or has legal dependents other than a spouse (e.g., children).
			A student who does not meet any of the above criteria is considered dependent.
			<br /><br />
			Based on the information you provided in previous steps, your
			dependency status is estimated to be <strong>Dependent</strong>.  Please provide the following information and then click Continue.
			<br />
		</div>

		<!-- dv_npc_s4_t -->
		<div id="dv_npc_s4_t">
			<strong>Step <span id="s_step4"></span>:</strong> For the purposes of this calculator, an independent student is
			one who is at least 24 years old, married, and/or has legal dependents other than a spouse (e.g., children).
			A student who does not meet any of the above criteria is considered dependent.
			<br /><br /> Based on the information you provided in previous steps, your
			dependency status is estimated to be <strong>Independent</strong>.  Please provide the following information and then click Continue.
		</div>

		<!-- summary header -->
		<div id="dv_npc_s5_t">
			<span id="s_step5"></span>Review the information you have provided. You can click Modify to return to Step 1 and edit this information,
			or if you are happy with the current selections, click Continue to receive your <strong>estimated</strong> net price.
		</div>

		<!-- dv_npc_s6_t -->
		<div id="dv_npc_s6_t">
			<span id="s_step6"></span>
			<div id="dv_npc_s6_academic">Based on the information you have provided, the following calculations represent the average net price of attendance that students similar to you paid in the given year:</div>
			<div id="dv_npc_s6_program">Based on the information you have provided, the following calculations represent the average net price of attendance that students similar to you paid in the given year. This information applies only to the <strong>##LARGESTPROGRAM##</strong>&nbsp;program at the institution, which typically takes an average of <strong>##NUMBEROFMONTHS##</strong>&nbsp;months for a full-time student to complete. Prices may vary depending on the program of interest and its expected duration.</div>
		</div>

		<div>

		<!-- dv_npc_s0 -->
		<div id="dv_npc_s0">
			Welcome to Boise State University's net price calculator. Begin by reading and agreeing to the statement below. 
			Then follow the instructions on the subsequent screens to receive an estimate of how much students similar to you paid to attend 
			Boise State University in 2015-16.
			<br />
			<br />

			This calculator is intended to provide <em>estimated</em> net price information (defined as estimated cost of attendance&mdash;including tuition and required fees, books and supplies, room and board (meals), and other related expenses&mdash;minus estimated grant and scholarship aid) to current and prospective students and their families based on what similar students paid in a previous year.
			<br /><br />
			By clicking below, I acknowledge that the estimate provided using this calculator does not represent
			a final determination, or actual award, of financial assistance, or a final net price; it is an
			estimate based on cost of attendance and financial aid provided to students in a previous year.
			Cost of attendance and financial aid availability change year to year. The estimates shall
			not be binding on the Secretary of Education, the institution of higher education, or the State.
			<br /><br />
			Students must complete the Free Application for Federal Student Aid (FAFSA) in order to be eligible for,
			and receive, an actual financial aid award that includes Federal grant, loan, or work-study assistance.
			For more information on applying for Federal student aid, go to <a href="http://www.fafsa.ed.gov/" target="_blank">http://www.fafsa.ed.gov/</a>
			<strong>Note:</strong> Any information that you provide on this site is confidential. The Net Price Calculator does not store your responses or ask for personal identifying information of any kind.
			<a href="JavaScript:GoNext()">I Agree</a>
		</div>

		<!-- dv_npc_s1 -->
		<div id="dv_npc_s1" class="hidden">
			<span>
				<span class="label">Financial aid:<br /></span>
				<span>
					Do you plan to apply for financial aid?<br />
					<span id="s_fa_0"><input type="radio" name="rb_financialaid" value="0" title="Yes, I plan to apply for financial aid." />Yes</span>&nbsp;&nbsp;
					<span id="s_fa_1"><input type="radio" name="rb_financialaid" value="1" title="No, I do not plan to apply for financial aid." />No</span>
				</span>
			</span>
			<br />
			<br />
			<span>
				<span class="label">Age:</span>
				<span><input id="txt_age" type="text" value="" size="6" maxlength="4" title="How old are you?" /></span>
			</span>
			<br />
			<br />
			<span>
				<span class="label">Living arrangement:<br /><br /><br /><br /></span>
				<span>
					Where do you plan to live while attending this institution?<br />
					<span id="s_ls_0"><input type="radio" name="rb_livingstatus" value="0" title="On-campus (in a residence hall, dormitory, or on-campus apartment)" />On-campus (in a residence hall, dormitory, or on-campus apartment)</span><br />
					<span id="s_ls_1"><input type="radio" name="rb_livingstatus" value="1" title="Living on my own or with a roommate" />Living on my own or with a roommate</span><br />
					<span id="s_ls_2"><input type="radio" name="rb_livingstatus" value="2" title="Living with my parents or other family members" />Living with my parents or other family members</span>
				</span>
			</span>
			<br />
			<br />
			<span>
				<span class="label">Residency:<br /><br /><br /></span>
				<span>
					<span id="s_rs_0"><input type="radio" name="rb_residencystatus" value="##rb_residencystatus_0##" title="Eligible for in-district tuition" />Eligible for in-district tuition<br /></span>
					<span id="s_rs_1"><input type="radio" name="rb_residencystatus" value="0" title="Eligible for in-state tuition" />Eligible for in-state tuition<br /></span>
					<span id="s_rs_2"><input type="radio" name="rb_residencystatus" value="1" title="Eligible for out-of-state tuition" />Eligible for out-of-state tuition<br /></span>
				</span>
			</span>
			<br />
			<br />
			<span>
						<a href="javascript:GoPrevious()">Previous</a>
						&nbsp;&nbsp;
						<a href="javascript:GoNext()">Continue</a>
			</span>
		</div>

		<!-- dv_npc_s2 -->
		<div id="dv_npc_s2" class="hidden">
			<span>
				<span class="label">Marital Status:<br /><br /><br /><br /></span>
				<span>
					Are you (the student) married?<br />
					(Answer "yes" if you are separated but not divorced.)<br />
					<input type="radio" name="rb_maritalstatus" value="1" title="Yes, I am married or separated but not divorced." />Yes<br />
					<input type="radio" name="rb_maritalstatus" value="0" title="No, I am not married." />No
				</span>
			</span>
			<br />
			<br />
			<span>
				<span class="label">Children:<br /><br /><br /></span>
				<span>
					Are you (the student) the primary source of financial support for any children?<br />
					<input type="radio" name="rb_numberofchildren" value="1" title="Yes" />Yes<br />
					<input type="radio" name="rb_numberofchildren" value="0" title="No" />No<br />
				</span>
			</span>
			<br />
			<br />
			<span>
						<a href="javascript:GoPrevious()">Previous</a>
						&nbsp;&nbsp;
						<a href="javascript:GoNext()">Continue</a>
			</span>
		</div>

		<!-- dv_npc_s3 -->
		<div id="dv_npc_s3" class="hidden">
			<table class="formtable">
				<tr>
					<td><span class="title1">Number in Family:</span></td>
					<td>
						<span class="title2">How many people are in your family's household?</span><br />
						<span>(Count yourself, your parent(s), and your parents' other dependent children.)</span>
					</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td>
						<input type="radio" name="rb_numinfamily_dep" id="rb_numinfamily_dep2" value="Two|2" /><label for="rb_numinfamily_dep2">Two</label><br />
						<input type="radio" name="rb_numinfamily_dep" id="rb_numinfamily_dep3" value="Three|3" /><label for="rb_numinfamily_dep3">Three</label><br />
						<input type="radio" name="rb_numinfamily_dep" id="rb_numinfamily_dep4" value="Four|4" /><label for="rb_numinfamily_dep4">Four</label><br />
						<input type="radio" name="rb_numinfamily_dep" id="rb_numinfamily_dep5" value="Five|5" /><label for="rb_numinfamily_dep5">Five</label><br />
						<input type="radio" name="rb_numinfamily_dep" id="rb_numinfamily_dep6" value="Six or more|6" /><label for="rb_numinfamily_dep6">Six or more</label>
					</td>
				</tr>
				<tr>
					<td><span class="title1">Number in College:</span></td>
					<td>
						<span class="title2">Of the number in your family above, how many will be in college next year?</span><br />
						<span>(Count yourself and your siblings; do not count your parents.)</span>
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<input type="radio" name="rb_numincollege_dep" id="rb_numincollege_dep1" value="One child|1" /><label for="rb_numincollege_dep1">One child</label><br />
						<input type="radio" name="rb_numincollege_dep" id="rb_numincollege_dep2" value="Two children|2" /><label for="rb_numincollege_dep2">Two children</label><br />
						<input type="radio" name="rb_numincollege_dep" id="rb_numincollege_dep3" value="Three or more children|3" /><label for="rb_numincollege_dep3">Three or more children</label><br />
					</td>
				</tr>
				<tr>
					<td><span class="title1">Household Income:</span></td>
					<td>
						<span class="title2">What is your annual household income after taxes?</span><br />
						<ul>
							<li>Include income earned by yourself and your parent(s).</li>
							<li>Include income from work, child support, and other sources.</li>
							<li>If your parent is single, separated, or divorced, include the income for the parent with whom you live.</li>
							<li>If the parent with whom you live is remarried, include both your parent's income and his/her spouse's income.</li>
						</ul>
						<input type="radio" name="rb_householdincome_dep" value="0" title="Less than $30,000" />Less than $30,000<br />
						<input type="radio" name="rb_householdincome_dep" value="1" title="Between $30,000 and $39,999" />Between $30,000 - $39,999<br />
						<input type="radio" name="rb_householdincome_dep" value="2" title="Between $40,000 and $49,999" />Between $40,000 - $49,999<br />
						<input type="radio" name="rb_householdincome_dep" value="3" title="Between $50,000 and $59,999" />Between $50,000 - $59,999<br />
						<input type="radio" name="rb_householdincome_dep" value="4" title="Between $60,000 and $69,999" />Between $60,000 - $69,999<br />
						<input type="radio" name="rb_householdincome_dep" value="5" title="Between $70,000 and $79,999" />Between $70,000 - $79,999<br />
						<input type="radio" name="rb_householdincome_dep" value="6" title="Between $80,000 and $89,999" />Between $80,000 - $89,999<br />
						<input type="radio" name="rb_householdincome_dep" value="7" title="Between $90,000 and $99,999" />Between $90,000 - $99,999<br />
						<input type="radio" name="rb_householdincome_dep" value="8" title="Between Above $99,999" />Above $99,999<br />
					</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td>
						<a href="javascript:GoPrevious()">Previous</a>
						&nbsp;&nbsp;
						<a href="javascript:GoNext()">Continue</a>
					</td>
				</tr>
			</table>
		</div>

		<!-- dv_npc_s4 -->
		<div id="dv_npc_s4" class="hidden">
			<table class="formtable">
				<tr>
					<td><span class="title1">Number in Family:</span></td>
					<td>
						<span class="title2">How many people are in your family's household?</span><br />
						<span id="spanNumInFamilyHint" class="hidden">Count yourself and your spouse (if applicable). </span>
						<span id="spanNumInFamilyHintWithChildren" class="hidden">Count yourself, your spouse (if applicable), and any dependent children.</span>
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<div id="divFirstOptionForNumInFamilyWithChildren" class="hidden">
							<input type="radio" name="rb_indnuminfamily" value="One|1" title="One" />One<br />
						</div>
						<input type="radio" name="rb_indnuminfamily" value="Two|2" title="Two" />Two<br />
						<div id="divNumInFamilyWithChildren" class="hidden">
							<input type="radio" name="rb_indnuminfamily" value="Three|3" title="Three" />Three<br />
							<input type="radio" name="rb_indnuminfamily" value="Four|4" title="Four" />Four<br />
							<input type="radio" name="rb_indnuminfamily" value="Five|5" title="Five" />Five<br />
							<input type="radio" name="rb_indnuminfamily" value="Six or more|6" title="Six or more" />Six or more<br />
						</div>
					</td>
				</tr>
				<tr>
					<td><span class="title1">Number in College:</span></td>
					<td>
						<span class="title2">Of the number in your family above, how many will be in college next year?</span><br />
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<input type="radio" name="rb_indnumincollege" value="One|1" title="One" />One<br />
						<span id="spanIndNumInCollegeTwoOrMore" class="hidden"><input type="radio" name="rb_indnumincollege" value="Two or more|2" title="Two or more" />Two or more<br /></span>
						<span id="spanIndNumInCollegeTwo" class="hidden"><input type="radio" name="rb_indnumincollege" value="Two|2" title="Two" />Two<br /></span>
					</td>
				</tr>
				<tr>
					<td><span class="title1">Household Income:</span></td>
					<td>
						<span class="title2">What is your annual household income after taxes?</span><br />
						<span>(Include income from work, child support, and other sources; if you are married, include your spouse's income.)</span><br /><br />
						<input type="radio" name="rb_householdincome_ind" value="0" title="Less than $30,000" />Less than $30,000<br />
						<input type="radio" name="rb_householdincome_ind" value="1" title="Between $30,000 and $39,999" />Between $30,000 - $39,999<br />
						<input type="radio" name="rb_householdincome_ind" value="2" title="Between $40,000 and $49,999" />Between $40,000 - $49,999<br />
						<input type="radio" name="rb_householdincome_ind" value="3" title="Between $50,000 and $59,999" />Between $50,000 - $59,999<br />
						<input type="radio" name="rb_householdincome_ind" value="4" title="Between $60,000 and $69,999" />Between $60,000 - $69,999<br />
						<input type="radio" name="rb_householdincome_ind" value="5" title="Between $70,000 and $79,999" />Between $70,000 - $79,999<br />
						<input type="radio" name="rb_householdincome_ind" value="6" title="Between $80,000 and $89,999" />Between $80,000 - $89,999<br />
						<input type="radio" name="rb_householdincome_ind" value="7" title="Between $90,000 and $99,999" />Between $90,000 - $99,999<br />
						<input type="radio" name="rb_householdincome_ind" value="8" title="Above $99,999" />Above $99,999<br />
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<a href="javascript:GoPrevious()">Previous</a>
						&nbsp;&nbsp;
						<a href="javascript:GoNext()">Continue</a>
					</td>
				</tr>
			</table>
		</div>

		<!-- div with summary data -->
		<div id="dv_npc_s5" class="hidden">
				<div id="dv_summary"></div>
				<a href="javascript:ClearVars();GoTo('1');">Modify</a>
				&nbsp;&nbsp;
				<a href="javascript:GoNext()">Continue</a>
		</div>

		<!-- dv_npc_s6 -->
		<div id="dv_npc_s6" class="hidden">

			<table class="formtable">
				<tr>
					<td>
						&nbsp;&nbsp;&nbsp;&nbsp;<span class="header">Academic Year: 2015-16</span>
					</td>
				</tr>
				<tr>
					<td>Estimated tuition and fees</td>
					<td><span id="s_etf">$00,000</span></td>
				</tr>
				<tr>
					<td>
						<span>+</span> Estimated room and board charges
						<div>(Includes rooming accommodations and meals)</div>
					</td>
					<td><span id="s_erb">$00,000</span></td>
				</tr>
				<tr>
					<td><span>+</span> Estimated cost of books and &nbsp; &nbsp;&nbsp;supplies</td>
					<td><span id="s_ebs">$00,000</span></td>
				</tr>
				<tr>
					<td><span>+</span> Estimated other expenses<br />&nbsp;&nbsp;&nbsp;&nbsp;<span>(Personal expenses, transportation, etc.)</span></td>
					<td><span id="s_eo">$00,000</span></td>
				</tr>
			</table>

			<div>
				<table class="formtable">
					<tr>
						<td>Estimated total cost of attendance:</td>
						<td><span id="s_etpoa">$00,000</span></td>
					</tr>
					<tr>
						<td>
							<span>-</span>
							<strong>Estimated total grant aid:</strong>
							<div>(Includes both merit and need based grant and scholarship aid from Federal, State, or Local Governments, or the Institution)</div>
						</td>
						<td><span id="s_etga">$00,000</span></td>
					</tr>
				</table>
			</div>

			<div>Estimated Net Price After Grants and Scholarships: <span id="s_enp">$00,000</span></div>
			<br />
			<span id="s_step6_body"></span>

			<div id="tr_requiredliveoncampus">
				This institution requires that full-time, first-time students live on-campus or in institutionally controlled housing.
			</div>

			<div>
				Grants and scholarships do not have to be repaid. Some students also qualify for student loans to assist in paying this net price; however, student loans do have to be repaid.
			</div>
		</div>
	
	</div>




	<div id="dv_npc_s6_r" class="disclaimer hidden">
		<a href="javascript:GoPrevious()">Previous</a>
		&nbsp;&nbsp;
		<a href="javascript:StartOver();">Start Over</a>
		<br />
		<br />
		<strong>Please Note:</strong> The estimates above apply to <strong>full-time, first-time degree/certificate-seeking undergraduate students</strong> only.&nbsp;
		
		<br /><br />
		These estimates do not represent a final determination, or actual award, of financial assistance or a final net
		price; they are only estimates based on cost of attendance and financial aid provided to students in 2015-16.
		Cost of attendance and financial aid availability change year to year. These estimates shall not be binding on
		the Secretary of Education, the institution of higher education, or the State.<br /><br />

		Not all students receive financial aid. In 2015-16, 70% of our full-time students enrolling
		for college for the first time received grant/scholarship aid. Students may also be eligible
		for student loans and work-study. Students must complete the Free Application for Federal Student
		Aid (FAFSA) in order to determine their eligibility for Federal financial aid that includes
		Federal grant, loan, or work-study assistance. For more information on applying for
		Federal student aid, go to <a href="http://www.fafsa.ed.gov/" target="_blank">
			http://www.fafsa.ed.gov/
		</a>.
	</div>
EOT;


	wp_register_script( 'SetupConstants',  plugins_url( '/SetupConstants.js', __FILE__ ) );
	wp_enqueue_script( 'SetupConstants' );

	return $str;
}
	add_shortcode('bsu_npcalc', 'bsu_npcalc_shortcode');
?>
?>