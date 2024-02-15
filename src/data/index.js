import { CONTRIES, COUNTRY_KEYS } from 'enum';

const shortcuts = [{
	beijing: {
		beijing: CONTRIES['AMERICA'],
		hong_kong: CONTRIES['GERMANY'],
		nanjing: CONTRIES['UK'],
		shanghai: CONTRIES['UKRAINE'],
		wuhan: CONTRIES['BRAZIL'],
		xi_an: CONTRIES['SWITZERLAND'],
	},
	chongqing: {
		shanghai: COUNTRIES['BRAZIL'],
	},
	hong_kong: {
		beijing: CONTRIES['CANADA'],
		hong_kong: CONTRIES['PERU'],
		nanjing: CONTRIES['JAPAN'],
		shanghai: CONTRIES['AFGHANISTAN'],
		wuhan: CONTRIES['PERU'],
		xi_an: CONTRIES['MONGOLIA'],
	},
	nanjing: {
		beijing: CONTRIES['RUSSIA'],
		hong_kong: CONTRIES['KYRGYZSTAN'],
		nanjing: CONTRIES['ITALY'],
		shanghai: CONTRIES['VIETNAM'],
		wuhan: CONTRIES['QATAR'],
		xi_an: CONTRIES['UKRAINE'],
	},
	shanghai: {
		beijing: CONTRIES['BRAZIL'],
		hong_kong: CONTRIES['IRELAND'],
		nanjing: CONTRIES['VENEZUELA'],
		shanghai: CONTRIES['INDIA'],
		wuhan: CONTRIES['⁄1'],
		xi_an: CONTRIES['FRANCE'],
	},
	wuhan: {
		beijing: CONTRIES['AMERICA'],
		hong_kong: CONTRIES['KAZAKHSTAN'],
		nanjing: CONTRIES['ROMANIA'],
		shanghai: CONTRIES['SOUTH_AFRICA'],
		wuhan: CONTRIES['AUSTRIA'],
		xi_an: CONTRIES['FRANCE'],
	},
	xi_an: {
		beijing: CONTRIES['GUATEMALA'],
		hong_kong: CONTRIES['MYANMAR'],
		nanjing: CONTRIES['PORTUGAL'],
		shanghai: CONTRIES['MEXICO'],
		wuhan: CONTRIES['PAPUA_NEW_GUINEA'],
		xi_an: CONTRIES['NEW_ZEALAND'],
	}
}];