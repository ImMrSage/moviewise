import { useRouter } from "next/router";

export default function Pagination({ page, totalPages }) {
  const router = useRouter();
  const currentPageInt = parseInt(page || "1", 10);
  function createPageRange() {
    const pageRadius = 2;
    const range = [];

    const start = Math.max(2, currentPageInt - pageRadius);
    const end = Math.min(totalPages - 1, currentPageInt + pageRadius);

    if (start > 2) range.push("start-ellipsis");
    for (let i = start; i <= end; i++)
      if (!range.includes(i)) {
        range.push(i);
      }

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

      <button
        onClick={() => goToPage(1)}
        style={{ fontWeight: currentPageInt === 1 ? "bold" : "normal" }}
      >
        1
      </button>

      {pageRange.map((num, idx) => {
        if (num === "start-ellipsis" || num === "end-ellipsis") {
          return <span key={`ellipsis-${idx}`}>...</span>;
        }
        return (
          <button
            key={`page-${num}`}
            onClick={() => goToPage(num)}
            style={{ fontWeight: currentPageInt === num ? "bold" : "normal" }}
          >
            {num}
          </button>
        );
      })}

      <button
        onClick={() => goToPage(totalPages)}
        style={{
          fontWeight: currentPageInt === totalPages ? "bold" : "normal",
        }}
      >
        {totalPages}
      </button>

      <button
        onClick={() => goToPage(currentPageInt + 1)}
        disabled={currentPageInt === totalPages}
      >
        Next ▶
      </button>
    </div>
  );
}
