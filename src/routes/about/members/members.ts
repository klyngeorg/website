import type { Person } from 'schema-dts';

const klyngeOrg = {
	'@type': 'Organization',
	name: 'Klynge Næringsforening',
	sameAs: 'https://klyngeorg.no/',
	url: 'https://klyngeorg.no/'
};

export const members: Omit<Person, '@type'>[] = [
	{
		givenName: 'Bjørn Niklas',
		familyName: 'Sjøstrøm',
		email: 'bjorn@blanchard.no',
		telephone: '+47 905 86 616',
		worksFor: [
			{
				'@type': 'EmployeeRole',
				name: 'Daglig leder',
				worksFor: {
					'@type': 'Organization',
					name: 'Blanchard Norway AS',
					sameAs: 'https://blanchard.no/',
					url: 'https://blanchard.no/'
				}
			},
			{
				'@type': 'EmployeeRole',
				name: 'Styremedlem',
				worksFor: klyngeOrg
			}
		]
	},
	{
		givenName: 'Aleksander',
		familyName: 'Ryan',
		email: 'aleksander.ryan@wla.no',
		telephone: '+47 406 39 050',
		worksFor: [
			{
				'@type': 'EmployeeRole',
				name: 'Advokat / Partner',
				worksFor: {
					'@type': 'Organization',
					name: 'Wahl Larsen Advokatfirma AS',
					sameAs: 'https://wla.no/',
					url: 'https://wla.no/'
				}
			},
			{
				'@type': 'EmployeeRole',
				name: 'Styremedlem',
				worksFor: klyngeOrg
			}
		]
	},
	{
		givenName: 'Lars',
		familyName: 'Madsen',
		email: 'lars@ginfestival.no',
		telephone: '+47 920 87 217',
		worksFor: [
			{
				'@type': 'EmployeeRole',
				name: 'Grunnlegger og daglig leder',
				worksFor: {
					'@type': 'Organization',
					name: 'Oslo Ginfestival AS',
					sameAs: 'https://ginfestival.no/',
					url: 'https://ginfestival.no/'
				}
			},
			{
				'@type': 'EmployeeRole',
				name: 'Styremedlem',
				worksFor: klyngeOrg
			}
		]
	},
	{
		givenName: 'Simen A. W.',
		familyName: 'Olsen',
		email: 'so@bjerk.io',
		telephone: '+47 95308087',
		worksFor: [
			{
				'@type': 'EmployeeRole',
				name: 'Daglig leder',
				worksFor: {
					'@type': 'Organization',
					name: 'Bjerk AS',
					sameAs: 'https://bjerk.io/',
					url: 'https://bjerk.io/'
				}
			},
			{
				'@type': 'EmployeeRole',
				name: 'Styreleder',
				worksFor: klyngeOrg
			}
		]
	},
	{
		givenName: 'Thomas',
		familyName: 'Brustad',
		email: 'thomas@velt.no',
		telephone: '+47 402 86 277',
		worksFor: [
			{
				'@type': 'EmployeeRole',
				name: 'Daglig leder',
				worksFor: {
					'@type': 'Organization',
					name: 'Velt AS',
					sameAs: 'https://velt.no/',
					url: 'https://velt.no/'
				}
			},
			{
				'@type': 'EmployeeRole',
				name: 'Styremedlem',
				worksFor: klyngeOrg
			}
		]
	}
];
