export const paginationFunction = (totalCount: number, pageCount: number) => {
	return Math.ceil(totalCount / pageCount)
}