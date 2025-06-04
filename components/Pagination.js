import { useRouter } from "next/router";

export default function Pagination({ page, totalPages }) {
  const router = useRouter();
  const currentPageInt = parseInt(page, 10);
  function createPageRange() {
    const pageRadius = 2;
    const range = [];

    const start = Math.max(2, currentPageInt - pageRadius);
    const end = Math.min(totalPages - 1, currentPageInt + pageRadius);

    if (start > 2) range.push("start-ellipsis");
    for (let i = start; i <= end; i++) range.push(i);
    if (end < totalPages - 1) range.push("end-ellipsis");

    return range;
  }

  const pageRange = createPageRange();

  function goToPage(pageNum) {
    if (typeof pageNum === "number") router.push(`/?page=${pageNum}`);
  }

  return (
    <div>
      <button
        onClick={() => goToPage(currentPageInt - 1)}
        disabled={currentPageInt === 1}
      >
        ◀ Prev
      </button>

      <button onClick={() => goToPage(1)}>1</button>

      {pageRange.map((num, idx) => {
        if (num === "start-ellipsis" || num === "end-ellipsis") {
          return <span key={idx}>...</span>;
        }
        return (
          <button key={num} onClick={() => goToPage(num)}>
            {num}
          </button>
        );
      })}

      {totalPages > 1 && (
        <button onClick={() => goToPage(totalPages)}>{totalPages}</button>
      )}

      <button
        onClick={() => goToPage(currentPageInt + 1)}
        disabled={currentPageInt === totalPages}
      >
        Next ▶
      </button>
    </div>
  );
}
