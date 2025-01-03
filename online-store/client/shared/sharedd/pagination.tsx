import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from '@/shared/components/ui/pagination'

export function PaginationDemo() {
	return (
		<Pagination className='mb-[20px]'>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href='#' />
				</PaginationItem>

				<PaginationItem>
					<PaginationLink href='#' isActive>
						1
					</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationLink href='#'>2</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationLink href='#'>3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href='#' />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}
