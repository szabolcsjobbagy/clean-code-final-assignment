import { FinancialApiClient } from "../../src/clients/FinancialApiClient.js"

let sut: FinancialApiClient
let baseUrl: string

beforeEach(() => {
	baseUrl = "http://example-financial-api.com"
	sut = new FinancialApiClient(baseUrl)
})

describe("FinancialApiClient", () => {
	const studentId = 1
	const courseId = 1

	describe("GetIsOrderPaid", () => {
		it("should return True if the order is paid", async () => {
			global.fetch = jest.fn(() =>
				Promise.resolve({
					json: () => Promise.resolve({ status: "paid" }),
				})
			) as jest.Mock

			const result = await sut.GetIsOrderPaid(studentId, courseId)

			expect(fetch).toHaveBeenCalledWith(`${baseUrl}/orders/${studentId}/${courseId}`)
			expect(fetch).toHaveBeenCalledTimes(1)
			expect(result).toBeTruthy()
		})

		it("should return False if the order is not paid", async () => {
			global.fetch = jest.fn(() =>
				Promise.resolve({
					json: () => Promise.resolve({ status: "not paid" }),
				})
			) as jest.Mock

			const result = await sut.GetIsOrderPaid(studentId, courseId)

			expect(fetch).toHaveBeenCalledWith(`${baseUrl}/orders/${studentId}/${courseId}`)
			expect(fetch).toHaveBeenCalledTimes(1)

			expect(result).toBeFalsy()
		})
	})

	describe("ChangePaymentStatus", () => {
		it("should make a PUT request to change the payment status", async () => {
			const status = "paid"

			global.fetch = jest.fn(() =>
				Promise.resolve({
					json: () => Promise.resolve({}),
				})
			) as jest.Mock

			await sut.ChangePaymentStatus(studentId, courseId, status)

			expect(fetch).toHaveBeenCalledWith(`${baseUrl}/orders/${studentId}/${courseId}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					status: status,
				}),
			})
		})
	})
})
