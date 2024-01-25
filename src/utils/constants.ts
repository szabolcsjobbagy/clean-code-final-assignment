export type DiscountPercentages = {
	[key: string]: number
}

export const DISCOUNT_PERCENTAGES_BASE: DiscountPercentages = {
	DEFAULT: 0,
	STANDARD: 5,
	SILVER: 10,
	GOLD: 15,
}

export const DISCOUNT_PERCENTAGES_ADDITIONAL: DiscountPercentages = {
	DEFAULT: 0,
	STANDARD: 0,
	SILVER: 0,
	GOLD: 5,
}
