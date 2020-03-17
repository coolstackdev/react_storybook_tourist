const allLanguages = [
	{
		id: 1,
		name: "Acholi"
	},
	{
		id: 2,
		name: "Afrikaans"
	},
	{
		id: 3,
		name: "Akan"
	},
	{
		id: 4,
		name: "Albanian"
	},
	{
		id: 5,
		name: "Amharic"
	},
	{
		id: 6,
		name: "Arabic"
	},
	{
		id: 7,
		name: "Ashante"
	},
	{
		id: 8,
		name: "Asl"
	},
	{
		id: 9,
		name: "Assyrian"
	},
	{
		id: 10,
		name: "Azerbaijani"
	},
	{
		id: 11,
		name: "Azeri"
	},
	{
		id: 12,
		name: "Bajuni"
	},
	{
		id: 13,
		name: "Basque"
	},
	{
		id: 14,
		name: "Behdini"
	},
	{
		id: 15,
		name: "Belorussian"
	},
	{
		id: 16,
		name: "Bengali"
	},
	{
		id: 17,
		name: "Berber"
	},
	{
		id: 18,
		name: "Bosnian"
	},
	{
		id: 19,
		name: "Bravanese"
	},
	{
		id: 20,
		name: "Bulgarian"
	},
	{
		id: 21,
		name: "Burmese"
	},
	{
		id: 22,
		name: "Cakchiquel"
	},
	{
		id: 23,
		name: "Cambodian"
	},
	{
		id: 24,
		name: "Cantonese"
	},
	{
		id: 25,
		name: "Catalan"
	},
	{
		id: 26,
		name: "Chaldean"
	},
	{
		id: 27,
		name: "Chamorro"
	},
	{
		id: 28,
		name: "Chao-chow"
	},
	{
		id: 29,
		name: "Chavacano"
	},
	{
		id: 30,
		name: "Chin"
	},
	{
		id: 31,
		name: "Chuukese"
	},
	{
		id: 32,
		name: "Cree"
	},
	{
		id: 33,
		name: "Croatian"
	},
	{
		id: 34,
		name: "Czech"
	},
	{
		id: 35,
		name: "Dakota"
	},
	{
		id: 36,
		name: "Danish"
	},
	{
		id: 37,
		name: "Dari"
	},
	{
		id: 38,
		name: "Dinka"
	},
	{
		id: 39,
		name: "Diula"
	},
	{
		id: 40,
		name: "Dutch"
	},
	{
		id: 41,
		name: "Edo"
	},
	{
		id: 42,
		name: "English"
	},
	{
		id: 43,
		name: "Estonian"
	},
	{
		id: 44,
		name: "Ewe"
	},
	{
		id: 45,
		name: "Fante"
	},
	{
		id: 46,
		name: "Farsi"
	},
	{
		id: 47,
		name: "Fijian Hindi"
	},
	{
		id: 48,
		name: "Finnish"
	},
	{
		id: 49,
		name: "Flemish"
	},
	{
		id: 50,
		name: "French"
	},
	{
		id: 51,
		name: "French Canadian"
	},
	{
		id: 52,
		name: "Fukienese"
	},
	{
		id: 53,
		name: "Fula"
	},
	{
		id: 54,
		name: "Fulani"
	},
	{
		id: 55,
		name: "Fuzhou"
	},
	{
		id: 56,
		name: "Ga"
	},
	{
		id: 57,
		name: "Gaddang"
	},
	{
		id: 58,
		name: "Gaelic"
	},
	{
		id: 59,
		name: "Gaelic-irish"
	},
	{
		id: 60,
		name: "Gaelic-scottish"
	},
	{
		id: 61,
		name: "Georgian"
	},
	{
		id: 62,
		name: "German"
	},
	{
		id: 63,
		name: "Gorani"
	},
	{
		id: 64,
		name: "Greek"
	},
	{
		id: 65,
		name: "Gujarati"
	},
	{
		id: 66,
		name: "Haitian Creole"
	},
	{
		id: 67,
		name: "Hakka"
	},
	{
		id: 68,
		name: "Hakka-chinese"
	},
	{
		id: 69,
		name: "Hausa"
	},
	{
		id: 70,
		name: "Hebrew"
	},
	{
		id: 71,
		name: "Hindi"
	},
	{
		id: 72,
		name: "Hmong"
	},
	{
		id: 73,
		name: "Hungarian"
	},
	{
		id: 74,
		name: "Ibanag"
	},
	{
		id: 75,
		name: "Ibo"
	},
	{
		id: 76,
		name: "Icelandic"
	},
	{
		id: 77,
		name: "Igbo"
	},
	{
		id: 78,
		name: "Ilocano"
	},
	{
		id: 79,
		name: "Indonesian"
	},
	{
		id: 80,
		name: "Inuktitut"
	},
	{
		id: 81,
		name: "Italian"
	},
	{
		id: 82,
		name: "Jakartanese"
	},
	{
		id: 83,
		name: "Japanese"
	},
	{
		id: 84,
		name: "Javanese"
	},
	{
		id: 85,
		name: "Kanjobal"
	},
	{
		id: 86,
		name: "Karen"
	},
	{
		id: 87,
		name: "Karenni"
	},
	{
		id: 88,
		name: "Kashmiri"
	},
	{
		id: 89,
		name: "Kazakh"
	},
	{
		id: 90,
		name: "Kikuyu"
	},
	{
		id: 91,
		name: "Kinyarwanda"
	},
	{
		id: 92,
		name: "Kirundi"
	},
	{
		id: 93,
		name: "Korean"
	},
	{
		id: 94,
		name: "Kosovan"
	},
	{
		id: 95,
		name: "Kotokoli"
	},
	{
		id: 96,
		name: "Krio"
	},
	{
		id: 97,
		name: "Kurdish"
	},
	{
		id: 98,
		name: "Kurmanji"
	},
	{
		id: 99,
		name: "Kyrgyz"
	},
	{
		id: 100,
		name: "Lakota"
	},
	{
		id: 101,
		name: "Laotian"
	},
	{
		id: 102,
		name: "Latvian"
	},
	{
		id: 103,
		name: "Lingala"
	},
	{
		id: 104,
		name: "Lithuanian"
	},
	{
		id: 105,
		name: "Luganda"
	},
	{
		id: 106,
		name: "Luo"
	},
	{
		id: 107,
		name: "Maay"
	},
	{
		id: 108,
		name: "Macedonian"
	},
	{
		id: 109,
		name: "Malay"
	},
	{
		id: 110,
		name: "Malayalam"
	},
	{
		id: 111,
		name: "Maltese"
	},
	{
		id: 112,
		name: "Mandarin"
	},
	{
		id: 113,
		name: "Mandingo"
	},
	{
		id: 114,
		name: "Mandinka"
	},
	{
		id: 115,
		name: "Marathi"
	},
	{
		id: 116,
		name: "Marshallese"
	},
	{
		id: 117,
		name: "Mien"
	},
	{
		id: 118,
		name: "Mina"
	},
	{
		id: 119,
		name: "Mirpuri"
	},
	{
		id: 120,
		name: "Mixteco"
	},
	{
		id: 121,
		name: "Moldavan"
	},
	{
		id: 122,
		name: "Mongolian"
	},
	{
		id: 123,
		name: "Montenegrin"
	},
	{
		id: 124,
		name: "Navajo"
	},
	{
		id: 125,
		name: "Neapolitan"
	},
	{
		id: 126,
		name: "Nepali"
	},
	{
		id: 127,
		name: "Nigerian Pidgin"
	},
	{
		id: 128,
		name: "Norwegian"
	},
	{
		id: 129,
		name: "Oromo"
	},
	{
		id: 130,
		name: "Pahari"
	},
	{
		id: 131,
		name: "Papago"
	},
	{
		id: 132,
		name: "Papiamento"
	},
	{
		id: 133,
		name: "Pashto"
	},
	{
		id: 134,
		name: "Patois"
	},
	{
		id: 135,
		name: "Pidgin English"
	},
	{
		id: 136,
		name: "Polish"
	},
	{
		id: 137,
		name: "Portug.creole"
	},
	{
		id: 138,
		name: "Portuguese"
	},
	{
		id: 139,
		name: "Pothwari"
	},
	{
		id: 140,
		name: "Pulaar"
	},
	{
		id: 141,
		name: "Punjabi"
	},
	{
		id: 142,
		name: "Putian"
	},
	{
		id: 143,
		name: "Quichua"
	},
	{
		id: 144,
		name: "Romanian"
	},
	{
		id: 145,
		name: "Russian"
	},
	{
		id: 146,
		name: "Samoan"
	},
	{
		id: 147,
		name: "Serbian"
	},
	{
		id: 148,
		name: "Shanghainese"
	},
	{
		id: 149,
		name: "Shona"
	},
	{
		id: 150,
		name: "Sichuan"
	},
	{
		id: 151,
		name: "Sicilian"
	},
	{
		id: 152,
		name: "Sinhalese"
	},
	{
		id: 153,
		name: "Slovak"
	},
	{
		id: 154,
		name: "Somali"
	},
	{
		id: 155,
		name: "Sorani"
	},
	{
		id: 156,
		name: "Spanish"
	},
	{
		id: 157,
		name: "Sudanese Arabic"
	},
	{
		id: 158,
		name: "Sundanese"
	},
	{
		id: 159,
		name: "Susu"
	},
	{
		id: 160,
		name: "Swahili"
	},
	{
		id: 161,
		name: "Swedish"
	},
	{
		id: 162,
		name: "Sylhetti"
	},
	{
		id: 163,
		name: "Tagalog"
	},
	{
		id: 164,
		name: "Taiwanese"
	},
	{
		id: 165,
		name: "Tajik"
	},
	{
		id: 166,
		name: "Tamil"
	},
	{
		id: 167,
		name: "Telugu"
	},
	{
		id: 168,
		name: "Thai"
	},
	{
		id: 169,
		name: "Tibetan"
	},
	{
		id: 170,
		name: "Tigre"
	},
	{
		id: 171,
		name: "Tigrinya"
	},
	{
		id: 172,
		name: "Toishanese"
	},
	{
		id: 173,
		name: "Tongan"
	},
	{
		id: 174,
		name: "Toucouleur"
	},
	{
		id: 175,
		name: "Trique"
	},
	{
		id: 176,
		name: "Tshiluba"
	},
	{
		id: 177,
		name: "Turkish"
	},
	{
		id: 178,
		name: "Twi"
	},
	{
		id: 179,
		name: "Ukrainian"
	},
	{
		id: 180,
		name: "Urdu"
	},
	{
		id: 181,
		name: "Uyghur"
	},
	{
		id: 182,
		name: "Uzbek"
	},
	{
		id: 183,
		name: "Vietnamese"
	},
	{
		id: 184,
		name: "Visayan"
	},
	{
		id: 185,
		name: "Welsh"
	},
	{
		id: 186,
		name: "Wolof"
	},
	{
		id: 187,
		name: "Yiddish"
	},
	{
		id: 188,
		name: "Yoruba"
	},
	{
		id: 189,
		name: "Yupik"
	},
	{
		id: 1000,
		name: "NOT KNOWN"
	}
]

export default allLanguages